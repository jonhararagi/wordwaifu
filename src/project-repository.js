(function (root, factory) {
  "use strict";
  const api = factory(root);
  if (typeof module === "object" && module.exports) module.exports = api;
  else root.WordWaifuProjectRepository = api;
})(typeof globalThis !== "undefined" ? globalThis : this, function (root) {
  "use strict";
  const ACTIVE_KEY = "activeProjectId";
  const MAX_SNAPSHOTS_PER_PROJECT = 25;
  const isProject = (value) => value && typeof value === "object" && value.project &&
    typeof value.project.id === "string" && value.project.id.trim().length > 0;

  class ProjectRepository {
    constructor(options = {}) {
      this.indexedDB = Object.prototype.hasOwnProperty.call(options, "indexedDB") ? options.indexedDB : root.indexedDB;
      this.localStorage = Object.prototype.hasOwnProperty.call(options, "localStorage") ? options.localStorage : root.localStorage;
      this.storageKey = options.storageKey || "wordwaifu.project.v1";
      this.databaseName = options.databaseName || "wordwaifu.persistence.v1";
      this.db = null;
      this.opening = null;
    }

    async open() {
      if (this.db) return this.db;
      if (!this.indexedDB || typeof this.indexedDB.open !== "function") throw new Error("IndexedDB no está disponible.");
      if (this.opening) return this.opening;
      this.opening = new Promise((resolve, reject) => {
        const request = this.indexedDB.open(this.databaseName, 3);
        request.onupgradeneeded = () => {
          const db = request.result;
          if (!db.objectStoreNames.contains("projects")) db.createObjectStore("projects", { keyPath: "projectId" });
          if (!db.objectStoreNames.contains("metadata")) db.createObjectStore("metadata", { keyPath: "key" });
          if (!db.objectStoreNames.contains("snapshots")) {
            const snapshots = db.createObjectStore("snapshots", { keyPath: "snapshotId" });
            snapshots.createIndex("byProjectId", "projectId", { unique: false });
            snapshots.createIndex("byCreatedAt", "createdAt", { unique: false });
          } else {
            const snapshots = request.transaction.objectStore("snapshots");
            if (!snapshots.indexNames.contains("byProjectId")) snapshots.createIndex("byProjectId", "projectId", { unique: false });
            if (!snapshots.indexNames.contains("byCreatedAt")) snapshots.createIndex("byCreatedAt", "createdAt", { unique: false });
          }
          if (!db.objectStoreNames.contains("trash")) db.createObjectStore("trash", { keyPath: "projectId" });
        };
        request.onerror = () => reject(request.error || new Error("No se pudo abrir IndexedDB."));
        request.onblocked = () => reject(new Error("La apertura de IndexedDB está bloqueada."));
        request.onsuccess = () => {
          this.db = request.result;
          this.db.onversionchange = () => { this.db.close(); this.db = null; this.opening = null; };
          resolve(this.db);
        };
      }).catch((error) => { this.opening = null; throw error; });
      return this.opening;
    }

    async read(storeName, key) {
      const db = await this.open();
      return new Promise((resolve, reject) => {
        const tx = db.transaction(storeName, "readonly");
        const request = tx.objectStore(storeName).get(key);
        let value;
        request.onsuccess = () => { value = request.result; };
        tx.oncomplete = () => resolve(value);
        tx.onerror = () => reject(tx.error || request.error || new Error("Error al leer IndexedDB."));
        tx.onabort = () => reject(tx.error || new Error("Lectura IndexedDB cancelada."));
      });
    }

    async write(project) {
      const db = await this.open();
      await new Promise((resolve, reject) => {
        const tx = db.transaction(["projects", "metadata"], "readwrite");
        tx.objectStore("projects").put({ projectId: project.project.id, data: project });
        tx.objectStore("metadata").put({ key: ACTIVE_KEY, value: project.project.id });
        tx.oncomplete = resolve;
        tx.onerror = () => reject(tx.error || new Error("Error al escribir IndexedDB."));
        tx.onabort = () => reject(tx.error || new Error("Escritura IndexedDB cancelada."));
      });
      const storedRecord = await this.read("projects", project.project.id);
      const verified = storedRecord && storedRecord.data;
      if (!verified || JSON.stringify(verified) !== JSON.stringify(project)) {
        throw new Error("La verificación posterior a IndexedDB no coincide.");
      }
    }

    async listProjects() {
      let records = [];
      let activeProjectId = null;
      let indexedDbError = null;
      try {
        const db = await this.open();
        records = await new Promise((resolve, reject) => {
          const tx = db.transaction("projects", "readonly");
          const request = tx.objectStore("projects").getAll();
          let result = [];
          request.onsuccess = () => { result = Array.isArray(request.result) ? request.result : []; };
          tx.oncomplete = () => resolve(result);
          tx.onerror = () => reject(tx.error || request.error || new Error("No se pudieron enumerar los proyectos."));
          tx.onabort = () => reject(tx.error || new Error("La enumeración de proyectos fue cancelada."));
        });
        const active = await this.read("metadata", ACTIVE_KEY);
        if (active && typeof active.value === "string") activeProjectId = active.value;
      } catch (error) {
        indexedDbError = error;
      }

      const byId = new Map();
      records.forEach((record) => {
        if (!record || typeof record.projectId !== "string" || !isProject(record.data) ||
            record.data.project.id !== record.projectId) return;
        byId.set(record.projectId, {
          projectId: record.projectId,
          name: record.data.project.name || "Proyecto sin nombre",
          description: record.data.project.description || "",
          updatedAt: record.data.project.updatedAt || null,
          source: "indexeddb"
        });
      });

      let trashedIds = new Set();
      try {
        const trashRecords = await this.readAll("trash");
        trashedIds = new Set(trashRecords.filter((item) => item && typeof item.projectId === "string").map((item) => item.projectId));
      } catch (error) {
        if (!indexedDbError) indexedDbError = error;
      }
      trashedIds.forEach((projectId) => byId.delete(projectId));
      const backup = this.readBackup().project;
      if (backup && !trashedIds.has(backup.project.id) && !byId.has(backup.project.id)) {
        byId.set(backup.project.id, {
          projectId: backup.project.id,
          name: backup.project.name || "Proyecto sin nombre",
          description: backup.project.description || "",
          updatedAt: backup.project.updatedAt || null,
          source: "localStorage"
        });
      }
      if (indexedDbError && byId.size === 0) throw indexedDbError;
      return Array.from(byId.values())
        .map((item) => ({ ...item, active: item.projectId === activeProjectId }))
        .sort((left, right) => left.name.localeCompare(right.name, "es"));
    }

    async searchAcrossProjects(rawQuery, options = {}) {
      const normalize = (value) => String(value ?? "").normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "").toLocaleLowerCase("es");
      const query = normalize(rawQuery).trim();
      const validTypes = new Set(["all", "character", "location", "event", "organization", "relationship", "story"]);
      const requestedType = validTypes.has(options.entityType) ? options.entityType : "all";
      const limit = Number.isInteger(options.limit) ? Math.max(1, Math.min(options.limit, 200)) : 100;
      if (!query) {
        return { query: "", results: [], complete: false, scannedProjects: 0, totalProjects: null, totalMatches: 0, truncated: false, warning: "Escribí un término para iniciar la búsqueda." };
      }

      let records = [];
      let indexedDbError = null;
      try {
        const db = await this.open();
        records = await new Promise((resolve, reject) => {
          const tx = db.transaction("projects", "readonly");
          const request = tx.objectStore("projects").getAll();
          let values = [];
          request.onsuccess = () => { values = Array.isArray(request.result) ? request.result : []; };
          tx.oncomplete = () => resolve(values);
          tx.onerror = () => reject(tx.error || request.error || new Error("No se pudo leer el índice de proyectos."));
          tx.onabort = () => reject(tx.error || new Error("La lectura del índice de proyectos fue cancelada."));
        });
      } catch (error) {
        indexedDbError = error;
      }

      const candidates = new Map();
      let invalidRecordCount = 0;
      if (!indexedDbError) {
        records.forEach((record) => {
          if (!record || typeof record.projectId !== "string" || !isProject(record.data) ||
              record.data.project.id !== record.projectId) {
            invalidRecordCount += 1;
            return;
          }
          const data = record.data;
          const hasMalformedCollection = ["characters", "locations", "events", "organizations", "relationships", "stories"]
            .some((key) => data[key] !== undefined && !Array.isArray(data[key]));
          if (hasMalformedCollection) invalidRecordCount += 1;
          candidates.set(record.projectId, {
            projectId: record.projectId,
            project: data,
            projectName: typeof data.project.name === "string" && data.project.name.trim() ? data.project.name : "Proyecto sin nombre",
            source: "indexeddb"
          });
        });
      }

      const backup = this.readBackup();
      let backupAdded = false;
      if (backup.project && !candidates.has(backup.project.project.id)) {
        candidates.set(backup.project.project.id, {
          projectId: backup.project.project.id,
          project: backup.project,
          projectName: typeof backup.project.project.name === "string" && backup.project.project.name.trim()
            ? backup.project.project.name : "Proyecto sin nombre",
          source: "localStorage"
        });
        backupAdded = true;
      }

      const results = [];
      let totalMatches = 0;
      const entityLabels = {
        character: "Personaje", location: "Lugar", event: "Acontecimiento",
        organization: "Organización", relationship: "Relación", story: "Historia"
      };
      const asText = (value) => Array.isArray(value) ? value.join(" ") : String(value ?? "");
      const appendEntity = (candidate, type, entity, entityId, name, searchFields, detail) => {
        if (requestedType !== "all" && requestedType !== type) return;
        if (typeof entityId !== "string" || !entityId.trim() || typeof name !== "string" || !name.trim()) return;
        if (!normalize([name, ...searchFields].map(asText).join(" ")).includes(query)) return;
        totalMatches += 1;
        if (results.length < limit) {
          results.push({
            projectId: candidate.projectId,
            projectName: candidate.projectName,
            entityType: type,
            entityTypeLabel: entityLabels[type],
            entityId,
            name,
            detail: asText(detail),
            source: candidate.source
          });
        }
      };

      for (const candidate of candidates.values()) {
        const project = candidate.project;
        const characters = Array.isArray(project.characters) ? project.characters : [];
        const locations = Array.isArray(project.locations) ? project.locations : [];
        const events = Array.isArray(project.events) ? project.events : [];
        const organizations = Array.isArray(project.organizations) ? project.organizations : [];
        const relationships = Array.isArray(project.relationships) ? project.relationships : [];
        const stories = Array.isArray(project.stories) ? project.stories : [];
        const characterById = new Map(characters.filter((item) => item && typeof item.id === "string").map((item) => [item.id, item]));
        const locationById = new Map(locations.filter((item) => item && typeof item.id === "string").map((item) => [item.id, item]));
        const organizationById = new Map(organizations.filter((item) => item && typeof item.id === "string").map((item) => [item.id, item]));
        const characterNames = (ids) => (Array.isArray(ids) ? ids : []).map((id) => characterById.get(id)?.name || "").filter(Boolean);
        const locationNames = (ids) => (Array.isArray(ids) ? ids : []).map((id) => locationById.get(id)?.name || "").filter(Boolean);
        const organizationNames = (ids) => (Array.isArray(ids) ? ids : []).map((id) => organizationById.get(id)?.name || "").filter(Boolean);

        characters.forEach((item) => appendEntity(candidate, "character", item, item?.id, item?.name, [
          item?.aliases, item?.role, item?.species, item?.description, item?.motivation,
          item?.flaw, item?.personality, item?.status, item?.backstory, item?.notes
        ], [item?.role, item?.species, item?.status].filter(Boolean).join(" · ")));
        locations.forEach((item) => appendEntity(candidate, "location", item, item?.id, item?.name, [
          item?.type, item?.description, item?.tags, item?.climate, item?.culture,
          item?.government, item?.economy, item?.history, item?.notes
        ], [item?.type, item?.climate].filter(Boolean).join(" · ")));
        events.forEach((item) => appendEntity(candidate, "event", item, item?.id, item?.title || item?.name, [
          item?.position, item?.description, locationNames(item?.locationIds),
          characterNames(item?.characterIds), organizationNames(item?.organizationIds)
        ], [item?.position, item?.status].filter(Boolean).join(" · ")));
        organizations.forEach((item) => appendEntity(candidate, "organization", item, item?.id, item?.name, [
          item?.organizationType, item?.description, item?.ideology, item?.goals,
          item?.history, characterNames(item?.leaderCharacterIds),
          characterNames(item?.memberCharacterIds), locationById.get(item?.baseLocationId)?.name
        ], [item?.organizationType, item?.status].filter(Boolean).join(" · ")));
        relationships.forEach((item) => {
          const sourceName = characterById.get(item?.sourceCharacterId)?.name || "";
          const targetName = characterById.get(item?.targetCharacterId)?.name || "";
          const name = item?.name || [sourceName, targetName].filter(Boolean).join(" ↔ ") || "Relación sin nombre";
          appendEntity(candidate, "relationship", item, item?.id, name, [
            sourceName, targetName, item?.relationshipType, item?.description, item?.status
          ], [item?.relationshipType, item?.status].filter(Boolean).join(" · "));
        });
        stories.forEach((item) => appendEntity(candidate, "story", item, item?.id, item?.title || item?.name, [
          item?.description, item?.premise, item?.genre, item?.tone, item?.status
        ], [item?.genre, item?.status].filter(Boolean).join(" · ")));
      }

      results.sort((left, right) =>
        left.projectName.localeCompare(right.projectName, "es") ||
        left.name.localeCompare(right.name, "es") ||
        left.entityType.localeCompare(right.entityType, "es") ||
        left.entityId.localeCompare(right.entityId, "es")
      );
      const complete = !indexedDbError && invalidRecordCount === 0 && !backup.error;
      const warnings = [];
      if (indexedDbError) warnings.push("No se pudo leer IndexedDB (" + indexedDbError.message + "); solo se consultó el respaldo local disponible.");
      if (invalidRecordCount) warnings.push("Se omitieron o había " + invalidRecordCount + " registro(s) con estructura/metadatos inconsistentes.");
      if (backup.error) warnings.push("No se pudo leer el respaldo local (" + backup.error.message + ").");
      return {
        query: String(rawQuery).trim(),
        results,
        complete,
        scannedProjects: candidates.size,
        totalProjects: indexedDbError ? null : records.length + (backupAdded ? 1 : 0),
        totalMatches,
        truncated: totalMatches > results.length,
        warning: warnings.join(" ")
      };
    }

    async getProject(projectId) {
      if (typeof projectId !== "string" || !projectId.trim()) return null;
      try {
        if (await this.read("trash", projectId)) return null;
      } catch { /* Preserve the compatibility fallback if the trash store is unavailable. */ }
      try {
        const record = await this.read("projects", projectId);
        if (record && record.projectId === projectId && isProject(record.data) && record.data.project.id === projectId) {
          return record.data;
        }
      } catch {
        // A matching compatibility backup may still be usable during migration.
      }
      const backup = this.readBackup().project;
      return backup && backup.project.id === projectId ? backup : null;
    }

    async activateProject(projectId) {
      if (typeof projectId !== "string" || !projectId.trim()) throw new Error("El ID del proyecto activo no es válido.");
      const record = await this.read("projects", projectId);
      if (!record || record.projectId !== projectId || !isProject(record.data) || record.data.project.id !== projectId) {
        throw new Error("No se puede activar un proyecto que no esté persistido en IndexedDB.");
      }
      const db = await this.open();
      await new Promise((resolve, reject) => {
        const tx = db.transaction("metadata", "readwrite");
        tx.objectStore("metadata").put({ key: ACTIVE_KEY, value: projectId });
        tx.oncomplete = resolve;
        tx.onerror = () => reject(tx.error || new Error("No se pudo cambiar el proyecto activo."));
        tx.onabort = () => reject(tx.error || new Error("El cambio de proyecto activo fue cancelado."));
      });
      return { projectId, active: true };
    }


    normalizeSnapshotProject(projectId, candidate) {
      if (!isProject(candidate) || candidate.project.id !== projectId) {
        throw new Error("El snapshot no pertenece al proyecto indicado.");
      }
      let copy;
      try { copy = JSON.parse(JSON.stringify(candidate)); }
      catch { throw new Error("Los datos del snapshot no se pueden serializar como JSON."); }
      const schema = root.WordWaifuProjectSchema;
      if (schema && typeof schema.validateAndNormalizeProject === "function") {
        const validation = schema.validateAndNormalizeProject(copy);
        if (!validation.valid) throw new Error("Snapshot inválido: " + validation.errors.slice(0, 4).join(" "));
        copy = validation.project;
      }
      if (!isProject(copy) || copy.project.id !== projectId) {
        throw new Error("El ID del proyecto cambió durante la validación del snapshot.");
      }
      return copy;
    }

    snapshotSummary(snapshot) {
      let valid = false;
      let validationError = null;
      try {
        this.normalizeSnapshotProject(snapshot.projectId, snapshot.data);
        valid = true;
      } catch (error) {
        validationError = error.message;
      }
      return {
        snapshotId: snapshot.snapshotId,
        projectId: snapshot.projectId,
        createdAt: snapshot.createdAt,
        reason: snapshot.reason || "manual",
        projectName: snapshot.data && snapshot.data.project && typeof snapshot.data.project.name === "string"
          ? snapshot.data.project.name : "Snapshot sin nombre",
        valid,
        validationError,
        sizeBytes: (() => { try { return JSON.stringify(snapshot.data).length; } catch { return null; } })()
      };
    }

    async createSnapshot(project, options = {}) {
      if (!isProject(project)) throw new Error("No se puede respaldar un proyecto sin project.id.");
      const projectId = project.project.id;
      const data = this.normalizeSnapshotProject(projectId, project);
      const createdAt = new Date().toISOString();
      const randomPart = root.crypto && typeof root.crypto.randomUUID === "function"
        ? root.crypto.randomUUID()
        : Math.random().toString(36).slice(2) + Math.random().toString(36).slice(2);
      const snapshot = {
        snapshotId: "snapshot-" + Date.now().toString(36) + "-" + randomPart,
        projectId,
        createdAt,
        reason: typeof options.reason === "string" && options.reason.trim()
          ? options.reason.trim().slice(0, 120) : "manual",
        data
      };
      const db = await this.open();
      let guardError = null;
      await new Promise((resolve, reject) => {
        const tx = db.transaction("snapshots", "readwrite");
        const store = tx.objectStore("snapshots");
        const query = store.index("byProjectId").getAll(projectId);
        query.onsuccess = () => {
          if (query.result.length >= MAX_SNAPSHOTS_PER_PROJECT) {
            guardError = new Error("Este proyecto alcanzó el límite de " + MAX_SNAPSHOTS_PER_PROJECT +
              " snapshots. Eliminá una copia antigua antes de crear otra.");
            tx.abort();
            return;
          }
          store.add(snapshot);
        };
        tx.oncomplete = resolve;
        tx.onerror = () => reject(guardError || tx.error || new Error("No se pudo guardar el snapshot."));
        tx.onabort = () => reject(guardError || tx.error || new Error("La creación del snapshot fue cancelada."));
      });
      const persisted = await this.read("snapshots", snapshot.snapshotId);
      if (!persisted || JSON.stringify(persisted) !== JSON.stringify(snapshot)) {
        throw new Error("La verificación del snapshot guardado falló.");
      }
      return this.snapshotSummary(persisted);
    }

    async listSnapshots(projectId) {
      if (typeof projectId !== "string" || !projectId.trim()) throw new Error("El ID del proyecto no es válido.");
      const db = await this.open();
      const records = await new Promise((resolve, reject) => {
        const tx = db.transaction("snapshots", "readonly");
        const request = tx.objectStore("snapshots").index("byProjectId").getAll(projectId);
        let result = [];
        request.onsuccess = () => { result = Array.isArray(request.result) ? request.result : []; };
        tx.oncomplete = () => resolve(result);
        tx.onerror = () => reject(tx.error || request.error || new Error("No se pudieron leer los snapshots."));
        tx.onabort = () => reject(tx.error || new Error("La lectura de snapshots fue cancelada."));
      });
      return records
        .filter((record) => record && record.projectId === projectId && typeof record.snapshotId === "string")
        .map((record) => this.snapshotSummary(record))
        .sort((left, right) => right.createdAt.localeCompare(left.createdAt) || right.snapshotId.localeCompare(left.snapshotId));
    }

    async deleteSnapshot(snapshotId, projectId) {
      if (typeof snapshotId !== "string" || !snapshotId.trim() ||
          typeof projectId !== "string" || !projectId.trim()) {
        throw new Error("Se requieren el ID del snapshot y el ID del proyecto.");
      }
      const db = await this.open();
      let guardError = null;
      await new Promise((resolve, reject) => {
        const tx = db.transaction("snapshots", "readwrite");
        const store = tx.objectStore("snapshots");
        const request = store.get(snapshotId);
        request.onsuccess = () => {
          const record = request.result;
          if (!record) {
            guardError = new Error("El snapshot ya no existe.");
            tx.abort();
            return;
          }
          if (record.projectId !== projectId) {
            guardError = new Error("El snapshot pertenece a otro proyecto.");
            tx.abort();
            return;
          }
          store.delete(snapshotId);
        };
        tx.oncomplete = resolve;
        tx.onerror = () => reject(guardError || tx.error || new Error("No se pudo eliminar el snapshot."));
        tx.onabort = () => reject(guardError || tx.error || new Error("La eliminación del snapshot fue cancelada."));
      });
      if (await this.read("snapshots", snapshotId)) throw new Error("IndexedDB no confirmó la eliminación del snapshot.");
      return { snapshotId, projectId, deleted: true };
    }

    async restoreSnapshot(snapshotId, projectId) {
      if (typeof snapshotId !== "string" || !snapshotId.trim() ||
          typeof projectId !== "string" || !projectId.trim()) {
        throw new Error("Se requieren el ID del snapshot y el ID del proyecto.");
      }
      const metadata = await this.read("metadata", ACTIVE_KEY);
      if (!metadata || metadata.value !== projectId) {
        throw new Error("Para restaurar, primero abrí el proyecto al que pertenece el snapshot.");
      }
      const currentRecord = await this.read("projects", projectId);
      if (!currentRecord || currentRecord.projectId !== projectId || !isProject(currentRecord.data) ||
          currentRecord.data.project.id !== projectId) {
        throw new Error("El proyecto activo no tiene un registro verificado en IndexedDB.");
      }
      const snapshot = await this.read("snapshots", snapshotId);
      if (!snapshot || snapshot.snapshotId !== snapshotId || snapshot.projectId !== projectId) {
        throw new Error("El snapshot no existe o pertenece a otro proyecto.");
      }
      const restoredProject = this.normalizeSnapshotProject(projectId, snapshot.data);
      const currentProject = JSON.parse(JSON.stringify(currentRecord.data));
      const rollbackSnapshot = await this.createSnapshot(currentProject, { reason: "before-restore" });
      const db = await this.open();
      let guardError = null;
      await new Promise((resolve, reject) => {
        const tx = db.transaction(["projects", "metadata"], "readwrite");
        const projects = tx.objectStore("projects");
        const activeStore = tx.objectStore("metadata");
        const currentRequest = projects.get(projectId);
        const activeRequest = activeStore.get(ACTIVE_KEY);
        let currentReady = false, activeReady = false, latest, active;
        const applyRestore = () => {
          if (!currentReady || !activeReady) return;
          if (!active || active.value !== projectId) {
            guardError = new Error("El proyecto activo cambió mientras se preparaba la restauración.");
            tx.abort();
            return;
          }
          if (!latest || latest.projectId !== projectId || !isProject(latest.data) ||
              JSON.stringify(latest.data) !== JSON.stringify(currentProject)) {
            guardError = new Error("El proyecto cambió durante la restauración. No se aplicó el snapshot; volvé a intentar.");
            tx.abort();
            return;
          }
          projects.put({ projectId, data: restoredProject });
          activeStore.put({ key: ACTIVE_KEY, value: projectId });
        };
        currentRequest.onsuccess = () => { latest = currentRequest.result; currentReady = true; applyRestore(); };
        activeRequest.onsuccess = () => { active = activeRequest.result; activeReady = true; applyRestore(); };
        tx.oncomplete = resolve;
        tx.onerror = () => reject(guardError || tx.error || new Error("Falló la transacción de restauración."));
        tx.onabort = () => reject(guardError || tx.error || new Error("La restauración fue cancelada."));
      });

      const verified = await this.read("projects", projectId);
      if (!verified || JSON.stringify(verified.data) !== JSON.stringify(restoredProject)) {
        try { await this.write(currentProject); }
        catch (rollbackError) {
          throw new Error("La verificación de restauración falló y el rollback también falló: " + rollbackError.message);
        }
        throw new Error("La restauración no se pudo verificar; se recuperó el estado anterior.");
      }
      const backup = this.saveBackup(restoredProject);
      if (!backup.written) {
        try { await this.write(currentProject); }
        catch (rollbackError) {
          throw new Error("No se pudo actualizar el respaldo local y tampoco se pudo revertir IndexedDB: " + rollbackError.message);
        }
        throw new Error("No se pudo actualizar el respaldo local; se revirtió la restauración. " + backup.warning);
      }
      return {
        projectId,
        snapshotId,
        restored: true,
        project: restoredProject,
        rollbackSnapshotId: rollbackSnapshot.snapshotId,
        backupWritten: true
      };
    }

    async readAll(storeName) {
      const db = await this.open();
      return new Promise((resolve, reject) => {
        const tx = db.transaction(storeName, "readonly");
        const request = tx.objectStore(storeName).getAll();
        let values = [];
        request.onsuccess = () => { values = Array.isArray(request.result) ? request.result : []; };
        tx.oncomplete = () => resolve(values);
        tx.onerror = () => reject(tx.error || request.error || new Error("No se pudieron enumerar los registros de " + storeName + "."));
        tx.onabort = () => reject(tx.error || new Error("La enumeración de " + storeName + " fue cancelada."));
      });
    }

    async listTrash() {
      const records = await this.readAll("trash");
      return records
        .filter((item) => item && typeof item.projectId === "string" &&
          item.projectData && isProject(item.projectData) && item.projectData.project.id === item.projectId &&
          Array.isArray(item.snapshots))
        .map((item) => ({
          projectId: item.projectId,
          name: item.projectData.project.name || "Proyecto sin nombre",
          description: item.projectData.project.description || "",
          deletedAt: item.deletedAt,
          snapshotCount: item.snapshots.length
        }))
        .sort((left, right) => String(right.deletedAt).localeCompare(String(left.deletedAt)));
    }

    async moveProjectToTrash(projectId) {
      if (typeof projectId !== "string" || !projectId.trim()) throw new Error("El ID del proyecto que se quiere enviar a la papelera no es válido.");
      const db = await this.open();
      let guardError = null;
      await new Promise((resolve, reject) => {
        const tx = db.transaction(["projects", "metadata", "snapshots", "trash"], "readwrite");
        const projects = tx.objectStore("projects");
        const trash = tx.objectStore("trash");
        const projectRequest = projects.get(projectId);
        const activeRequest = tx.objectStore("metadata").get(ACTIVE_KEY);
        const snapshotsRequest = tx.objectStore("snapshots").index("byProjectId").getAll(projectId);
        let projectReady = false, activeReady = false, snapshotsReady = false;
        let projectRecord, activeRecord, snapshots = [];
        const evaluate = () => {
          if (!projectReady || !activeReady || !snapshotsReady) return;
          if (!projectRecord || projectRecord.projectId !== projectId || !isProject(projectRecord.data) ||
              projectRecord.data.project.id !== projectId) {
            guardError = new Error("El proyecto no tiene un registro verificado en IndexedDB; no se moverá a la papelera.");
            tx.abort();
            return;
          }
          if (activeRecord && activeRecord.value === projectId) {
            guardError = new Error("No se puede enviar a la papelera el proyecto activo. Abrí otro universo primero.");
            tx.abort();
            return;
          }
          trash.add({ formatVersion: 1, projectId, deletedAt: new Date().toISOString(), projectData: projectRecord.data, snapshots });
          projects.delete(projectId);
          snapshots.forEach((snapshot) => tx.objectStore("snapshots").delete(snapshot.snapshotId));
        };
        projectRequest.onsuccess = () => { projectRecord = projectRequest.result; projectReady = true; evaluate(); };
        activeRequest.onsuccess = () => { activeRecord = activeRequest.result; activeReady = true; evaluate(); };
        snapshotsRequest.onsuccess = () => { snapshots = Array.isArray(snapshotsRequest.result) ? snapshotsRequest.result : []; snapshotsReady = true; evaluate(); };
        tx.oncomplete = resolve;
        tx.onerror = () => reject(guardError || tx.error || new Error("Falló la transacción al enviar el proyecto a la papelera."));
        tx.onabort = () => reject(guardError || tx.error || new Error("El envío a la papelera fue cancelado."));
      });
      const trashed = await this.read("trash", projectId);
      if (!trashed || !isProject(trashed.projectData) || trashed.projectData.project.id !== projectId ||
          (await this.read("projects", projectId))) throw new Error("La verificación posterior al envío a la papelera falló.");
      let backupRemoved = true, warning = null;
      const backupResult = this.readBackup();
      const backup = backupResult.project;
      if (backupResult.error || (backupResult.raw !== null && !backup)) {
        backupRemoved = false;
        warning = "El universo está protegido en la papelera, pero existe un respaldo local que no se pudo validar; no se retiró para evitar borrar datos ajenos.";
      } else if (backup && backup.project.id === projectId) {
        try {
          if (!this.localStorage) throw new Error("localStorage no está disponible.");
          this.localStorage.removeItem(this.storageKey);
          backupRemoved = this.localStorage.getItem(this.storageKey) === null;
          if (!backupRemoved) throw new Error("El respaldo local sigue presente.");
        } catch (error) {
          backupRemoved = false;
          warning = "El universo está protegido en la papelera, pero no se pudo retirar su respaldo local: " + error.message;
        }
      }
      return { projectId, moved: true, deletedAt: trashed.deletedAt, snapshotCount: trashed.snapshots.length, backupRemoved, warning };
    }

    async restoreTrashedProject(projectId) {
      if (typeof projectId !== "string" || !projectId.trim()) throw new Error("El ID del proyecto que se quiere restaurar no es válido.");
      const db = await this.open();
      let guardError = null;
      await new Promise((resolve, reject) => {
        const tx = db.transaction(["projects", "snapshots", "trash"], "readwrite");
        const projects = tx.objectStore("projects");
        const snapshotsStore = tx.objectStore("snapshots");
        const trashStore = tx.objectStore("trash");
        const trashRequest = trashStore.get(projectId);
        trashRequest.onsuccess = () => {
          const trashed = trashRequest.result;
          if (!trashed || trashed.projectId !== projectId || !isProject(trashed.projectData) ||
              trashed.projectData.project.id !== projectId || !Array.isArray(trashed.snapshots)) {
            guardError = new Error("El universo no existe en la papelera o sus datos no son válidos.");
            tx.abort();
            return;
          }
          const existingRequest = projects.get(projectId);
          existingRequest.onsuccess = () => {
            if (existingRequest.result) {
              guardError = new Error("Ya existe un proyecto con ese ID. No se sobrescribió ningún dato.");
              tx.abort();
              return;
            }
            try {
              projects.add({ projectId, data: trashed.projectData });
              trashed.snapshots.forEach((snapshot) => {
                if (!snapshot || snapshot.projectId !== projectId || typeof snapshot.snapshotId !== "string") {
                  throw new Error("La papelera contiene un snapshot inconsistente.");
                }
                snapshotsStore.add(snapshot);
              });
              trashStore.delete(projectId);
            } catch (error) {
              guardError = error;
              tx.abort();
            }
          };
        };
        tx.oncomplete = resolve;
        tx.onerror = () => reject(guardError || tx.error || new Error("Falló la transacción al restaurar el universo."));
        tx.onabort = () => reject(guardError || tx.error || new Error("La restauración desde la papelera fue cancelada."));
      });
      const restored = await this.read("projects", projectId);
      if (!restored || !isProject(restored.data) || restored.data.project.id !== projectId ||
          await this.read("trash", projectId)) throw new Error("La verificación posterior a la restauración falló.");
      const snapshotCount = (await this.listSnapshots(projectId)).length;
      return { projectId, restored: true, snapshotCount };
    }

    async permanentlyDeleteTrashedProject(projectId) {
      if (typeof projectId !== "string" || !projectId.trim()) throw new Error("El ID del proyecto que se quiere borrar permanentemente no es válido.");
      const db = await this.open();
      let guardError = null;
      await new Promise((resolve, reject) => {
        const tx = db.transaction("trash", "readwrite");
        const trash = tx.objectStore("trash");
        const request = trash.get(projectId);
        request.onsuccess = () => {
          const record = request.result;
          if (!record || record.projectId !== projectId) {
            guardError = new Error("El universo ya no está en la papelera.");
            tx.abort();
            return;
          }
          // Only remove a compatibility backup after confirming the exact tombstone
          // exists. An unreadable or malformed backup cannot safely be attributed to an ID.
          const backupResult = this.readBackup();
          const backup = backupResult.project;
          if (backupResult.error || (backupResult.raw !== null && !backup)) {
            guardError = new Error("No se puede verificar el respaldo local; la entrada de papelera se conserva.");
            tx.abort();
            return;
          }
          if (backup && backup.project.id === projectId) {
            try {
              if (!this.localStorage) throw new Error("localStorage no está disponible.");
              this.localStorage.removeItem(this.storageKey);
              if (this.localStorage.getItem(this.storageKey) !== null) {
                throw new Error("El respaldo local sigue presente.");
              }
            } catch (error) {
              guardError = new Error("No se pudo retirar el respaldo local; la entrada de papelera se conserva: " + error.message);
              tx.abort();
              return;
            }
          }
          trash.delete(projectId);
        };
        tx.oncomplete = resolve;
        tx.onerror = () => reject(guardError || tx.error || new Error("Falló el borrado permanente."));
        tx.onabort = () => reject(guardError || tx.error || new Error("El borrado permanente fue cancelado."));
      });
      if (await this.read("trash", projectId)) throw new Error("IndexedDB no confirmó el borrado permanente.");
      return { projectId, permanentlyDeleted: true };
    }

    async deleteProject(projectId) {
      if (typeof projectId !== "string" || !projectId.trim()) throw new Error("El ID del proyecto que se quiere borrar no es válido.");
      const db = await this.open();
      let guardError = null;
      await new Promise((resolve, reject) => {
        const tx = db.transaction(["projects", "metadata", "snapshots"], "readwrite");
        const projects = tx.objectStore("projects");
        const projectRequest = projects.get(projectId);
        const activeRequest = tx.objectStore("metadata").get(ACTIVE_KEY);
        let projectReady = false, activeReady = false, projectRecord, activeRecord;
        const evaluateDelete = () => {
          if (!projectReady || !activeReady) return;
          if (!projectRecord || projectRecord.projectId !== projectId || !isProject(projectRecord.data) || projectRecord.data.project.id !== projectId) {
            guardError = new Error("Este proyecto no tiene un registro verificado en IndexedDB. Si solo aparece en el respaldo local, primero debe recuperarse o migrarse; no se marcará como borrado.");
            tx.abort();
            return;
          }
          if (activeRecord && activeRecord.value === projectId) {
            guardError = new Error("No se puede borrar el proyecto activo. Abrí y activá otro proyecto primero, y después seleccioná este proyecto para eliminarlo.");
            tx.abort();
            return;
          }
          projects.delete(projectId);
          const snapshotRequest = tx.objectStore("snapshots").index("byProjectId").getAll(projectId);
          snapshotRequest.onsuccess = () => {
            snapshotRequest.result.forEach((snapshot) => tx.objectStore("snapshots").delete(snapshot.snapshotId));
          };
        };
        projectRequest.onsuccess = () => { projectRecord = projectRequest.result; projectReady = true; evaluateDelete(); };
        activeRequest.onsuccess = () => { activeRecord = activeRequest.result; activeReady = true; evaluateDelete(); };
        tx.oncomplete = resolve;
        tx.onerror = () => reject(guardError || tx.error || new Error("Falló la transacción al borrar el proyecto."));
        tx.onabort = () => reject(guardError || tx.error || new Error("El borrado del proyecto fue cancelado."));
      });
      const remaining = await this.read("projects", projectId);
      if (remaining) throw new Error("IndexedDB no confirmó la eliminación del proyecto.");
      let backupRemoved = true, warning = null;
      const backup = this.readBackup().project;
      if (backup && backup.project.id === projectId) {
        try {
          if (!this.localStorage) throw new Error("localStorage no está disponible.");
          this.localStorage.removeItem(this.storageKey);
          backupRemoved = this.localStorage.getItem(this.storageKey) === null;
          if (!backupRemoved) throw new Error("El respaldo local sigue presente después del borrado.");
        } catch (error) {
          backupRemoved = false;
          warning = "El registro de IndexedDB se borró, pero no se pudo retirar el respaldo local: " + error.message;
        }
      }
      return { projectId, deleted: true, backupRemoved, warning };
    }

    saveBackup(project) {
      if (!isProject(project)) return { written: false, warning: "El proyecto debe contener project.id." };
      try {
        if (!this.localStorage) throw new Error("localStorage no está disponible.");
        this.localStorage.setItem(this.storageKey, JSON.stringify(project));
        return { written: true, warning: null };
      } catch (error) {
        return { written: false, warning: error.message };
      }
    }

    readBackup() {
      try {
        if (!this.localStorage) return { raw: null, project: null };
        const raw = this.localStorage.getItem(this.storageKey);
        if (raw === null) return { raw: null, project: null };
        const parsed = JSON.parse(raw);
        return { raw, project: isProject(parsed) ? parsed : null };
      } catch (error) { return { raw: null, project: null, error }; }
    }

    async saveActive(project) {
      if (!isProject(project)) throw new Error("El proyecto debe contener project.id.");
      const backup = this.saveBackup(project);
      const backupWritten = backup.written;
      const backupError = backup.warning ? new Error(backup.warning) : null;

      try {
        await this.write(project);
        return { backend: "indexeddb", backupWritten, warning: backupError ? backupError.message : null };
      } catch (error) {
        if (backupWritten) return { backend: "localStorage", backupWritten: true, warning: "IndexedDB no se verificó; se conserva el respaldo local: " + error.message };
        throw new Error("Fallaron IndexedDB y localStorage. " + error.message + (backupError ? " " + backupError.message : ""));
      }
    }

    async loadActive() {
      const backup = this.readBackup();
      let dbProject = null;
      let dbError = null;
      try {
        await this.open();
        const metadata = await this.read("metadata", ACTIVE_KEY);
        if (metadata && typeof metadata.value === "string") {
          const storedRecord = await this.read("projects", metadata.value);
          const candidate = storedRecord && storedRecord.data;
          if (isProject(candidate)) dbProject = candidate;
        }
      } catch (error) { dbError = error; }

      if (dbProject && backup.project && JSON.stringify(dbProject) !== JSON.stringify(backup.project)) {
        try {
          const repaired = await this.saveActive(backup.project);
          return { project: backup.project, backend: repaired.backend, migrated: false, recoveredBackup: true, backupRetained: repaired.backupWritten, warning: repaired.warning };
        } catch (error) {
          return { project: backup.project, backend: "localStorage", migrated: false, recoveredBackup: true, backupRetained: true, warning: error.message };
        }
      }
      if (dbProject) return { project: dbProject, backend: "indexeddb", migrated: false, recoveredBackup: false, backupRetained: backup.raw !== null };
      if (backup.project) {
        try {
          const saved = await this.saveActive(backup.project);
          return { project: backup.project, backend: saved.backend, migrated: saved.backend === "indexeddb", recoveredBackup: false, backupRetained: saved.backupWritten, warning: saved.warning };
        } catch (error) {
          return { project: backup.project, backend: "localStorage", migrated: false, recoveredBackup: false, backupRetained: true, warning: error.message };
        }
      }
      return { project: null, backend: this.db ? "indexeddb" : "localStorage", migrated: false, recoveredBackup: false, backupRetained: backup.raw !== null, warning: dbError ? dbError.message : (backup.error ? backup.error.message : null) };
    }

    close() {
      if (this.db) this.db.close();
      this.db = null;
      this.opening = null;
    }
  }
  return { ProjectRepository };
});

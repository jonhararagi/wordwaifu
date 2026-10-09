(function (root, factory) {
  "use strict";
  const api = factory(root);
  if (typeof module === "object" && module.exports) module.exports = api;
  else root.WordWaifuProjectRepository = api;
})(typeof globalThis !== "undefined" ? globalThis : this, function (root) {
  "use strict";
  const ACTIVE_KEY = "activeProjectId";
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
        const request = this.indexedDB.open(this.databaseName, 1);
        request.onupgradeneeded = () => {
          const db = request.result;
          if (!db.objectStoreNames.contains("projects")) db.createObjectStore("projects", { keyPath: "projectId" });
          if (!db.objectStoreNames.contains("metadata")) db.createObjectStore("metadata", { keyPath: "key" });
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

(function () {
  "use strict";

  const STORAGE_KEY = "wordwaifu.project.v1";
  const repositoryApi = window.WordWaifuProjectRepository;
  const projectRepository = repositoryApi && typeof repositoryApi.ProjectRepository === "function"
    ? new repositoryApi.ProjectRepository({ storageKey: STORAGE_KEY })
    : null;
  let persistenceQueue = Promise.resolve();
  let persistenceSequence = 0;
  const titles = {
    atlas: ["Atlas del mundo", "Explorá lugares, encontrá personajes y recorré la historia de tu mundo."],
    characters: ["Personajes", "Fichas conectadas con lugares, relaciones y acontecimientos."],
    relationships: ["Relaciones", "Vínculos del canon entre personajes, con tipo, descripción y estado."],
    places: ["Lugares", "Cada lugar es parte de la geografía y del canon de tu universo."],
    timeline: ["Cronología", "Revisá los acontecimientos y los cambios de estado de tu mundo."],
    organizations: ["Organizaciones", "Facciones, gremios y grupos que mueven tu universo."],
    stories: ["Historias y novelas", "Organizá premisas, conflictos, arcos y capítulos."],
    commands: ["Asistente local", "Comandos deterministas para consultar tu proyecto sin IA."]
  };
  const demo = {
    schemaVersion: 1,
    project: { id: "project-asteria", name: "Las Crónicas de Asteria", description: "Universo de demostración original." },
    locations: [
      { id: "loc-asteria", name: "Asteria", type: "Ciudad capital", parentId: null, description: "Una capital levantada alrededor de un observatorio antiguo. Sus gremios comercian con mapas celestes y cristales de memoria.", tags: ["Capital", "Comercio", "Política"], population: "120.000 aprox.", government: "Consejo de Gremios", climate: "Templado", marker: [298, 158], characters: ["char-mira", "char-kael"], events: ["event-arrival", "event-alarm"] },
      { id: "loc-velado", name: "Bosque Velado", type: "Región natural", parentId: null, description: "Un bosque de árboles pálidos donde los senderos cambian después del anochecer. Los exploradores dejan cintas en las ramas para marcar rutas seguras.", tags: ["Bosque", "Ruinas", "Misterio"], population: "Asentamientos dispersos", government: "Sin gobierno único", climate: "Húmedo", marker: [170, 224], characters: ["char-sakura"], events: ["event-rupture"] },
      { id: "loc-azur", name: "Fortaleza Azur", type: "Fortaleza fronteriza", parentId: null, description: "Una fortaleza que vigila el paso montañoso. Sus campanas sirven como sistema de alarma para las aldeas de ambos lados de la cordillera.", tags: ["Militar", "Frontera", "Montaña"], population: "2.400 aprox.", government: "Guardia de la Cordillera", climate: "Frío", marker: [477, 143], characters: ["char-kael"], events: ["event-alarm"] },
      { id: "loc-umbria", name: "Puerto Umbría", type: "Ciudad portuaria", parentId: null, description: "Puerto comercial construido sobre terrazas de piedra negra. Sus capitanes conocen rutas marítimas que no aparecen en los mapas oficiales.", tags: ["Puerto", "Comercio", "Rumores"], population: "38.000 aprox.", government: "Liga Mercante", climate: "Costero", marker: [651, 351], characters: ["char-noa"], events: ["event-arrival"] },
      { id: "loc-lunaria", name: "Santuario Lunaria", type: "Santuario", parentId: null, description: "Un santuario aislado dedicado a conservar testimonios de acontecimientos que los reinos prefieren olvidar.", tags: ["Santuario", "Historia", "Archivo"], population: "Guardianes residentes", government: "Custodios de Lunaria", climate: "Montañoso", marker: [340, 424], characters: ["char-sakura"], events: ["event-rupture"] }
    ],
    characters: [
      { id: "char-mira", name: "Mira Solenne", age: 24, species: "Humana", role: "Cartógrafa", personality: ["Curiosa", "Observadora", "Terco optimismo"], description: "Cartógrafa que cree que todo territorio puede comprenderse si se escuchan las historias de quienes lo habitan.", motivation: "Completar un atlas que no oculte los caminos olvidados.", flaw: "Confía demasiado en sus propios mapas.", locationHistory: [{ locationId: "loc-asteria", from: "chapter1", to: "chapter5" }, { locationId: "loc-umbria", from: "chapter12", to: "now" }], relationships: ["char-kael"], status: "canon" },
      { id: "char-kael", name: "Kael Veyran", age: 31, species: "Humano", role: "Capitán de guardia", personality: ["Reservado", "Leal", "Pragmático"], description: "Capitán que carga con la responsabilidad de una frontera que nadie recuerda haber trazado.", motivation: "Evitar que una vieja guerra vuelva a empezar.", flaw: "Confunde la prudencia con el silencio.", locationHistory: [{ locationId: "loc-azur", from: "chapter1", to: "chapter5" }, { locationId: "loc-asteria", from: "chapter5", to: "now" }], relationships: ["char-mira"], status: "canon" },
      { id: "char-sakura", name: "Sakura Hinomoto", age: 22, species: "Elfa", role: "Exploradora de la Orden del Viento", personality: ["Orgullosa", "Disciplinada", "Autocrítica"], description: "Discípula de una orden legendaria. Sigue rastros que otros consideran simples supersticiones.", motivation: "Descubrir por qué su orden borró una ruta de sus propios archivos.", flaw: "Le cuesta admitir que necesita ayuda.", locationHistory: [{ locationId: "loc-velado", from: "chapter1", to: "chapter5" }, { locationId: "loc-lunaria", from: "chapter12", to: "now" }], relationships: [], status: "proposal" },
      { id: "char-noa", name: "Noa Brisamar", age: 27, species: "Humana", role: "Capitana mercante", personality: ["Ingeniosa", "Sociable", "Calculadora"], description: "Capitana mercante que recuerda cada deuda y cada favor, aunque finja no hacerlo.", motivation: "Comprar la libertad de su tripulación mediante un último gran contrato.", flaw: "Guarda información incluso cuando compartirla ayudaría.", locationHistory: [{ locationId: "loc-umbria", from: "chapter1", to: "now" }], relationships: [], status: "canon" }
    ],
    events: [
      { id: "event-arrival", title: "Llegada de los cartógrafos", position: "chapter1", description: "Mira llega a Asteria con un mapa que contradice las rutas oficiales.", locationIds: ["loc-asteria", "loc-umbria"], characterIds: ["char-mira", "char-noa"] },
      { id: "event-alarm", title: "Las campanas de Azur", position: "chapter5", description: "La fortaleza envía una señal que no figura en ningún protocolo vigente.", locationIds: ["loc-azur", "loc-asteria"], characterIds: ["char-kael", "char-mira"] },
      { id: "event-rupture", title: "La ruta borrada", position: "chapter12", description: "Sakura encuentra en Lunaria una copia de la ruta que su orden negó conocer.", locationIds: ["loc-lunaria", "loc-velado"], characterIds: ["char-sakura"] }
    ],
    organizations: [{
      id: "org-cartographers",
      name: "Archivo de Cartógrafos",
      organizationType: "Gremio de exploración",
      description: "Conserva mapas y testimonios de rutas olvidadas.",
      ideology: "Ningún mapa debe ocultar la historia de quienes lo recorren.",
      goals: ["Preservar rutas olvidadas", "Compartir atlas verificados"],
      leaderCharacterIds: ["char-mira"],
      memberCharacterIds: ["char-mira", "char-noa"],
      baseLocationId: "loc-asteria",
      history: "Nació para preservar rutas que los reinos dejaron de reconocer.",
      status: "canon"
    }],
    stories: [],
    settings: { time: "now" }
  };

  let state = ensureRelationshipStore(structuredClone(demo));
  let activeView = "atlas";
  let mapMode = "world";
  let selectedLocationId = "loc-asteria";
  let selectedCharacterId = null;
  let selectedEventId = null;
  let selectedOrganizationId = null;
  let selectedRelationshipId = null;
  let selectedStoryId = null;
  let mapScale = 1;
  const enabledLayers = { places: true, characters: true, routes: true, events: true };
  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => Array.from(root.querySelectorAll(selector));
  const escapeHTML = (value) => String(value ?? "").replace(/[&<>"']/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[char]));
  const titleCase = (value) => value.charAt(0).toUpperCase() + value.slice(1);

  function ensureRelationshipStore(project) {
    if (!project || !Array.isArray(project.characters)) return project;
    const charactersById = new Map(project.characters.filter((character) => character && typeof character.id === "string").map((character) => [character.id, character]));
    if (!Array.isArray(project.relationships)) {
      const migrated = new Map();
      for (const character of project.characters) {
        if (!character || !Array.isArray(character.relationships)) continue;
        for (const relatedId of character.relationships) {
          if (typeof relatedId !== "string" || relatedId === character.id || !charactersById.has(relatedId)) continue;
          const [sourceCharacterId, targetCharacterId] = [character.id, relatedId].sort();
          const key = sourceCharacterId + "\\u0000" + targetCharacterId;
          if (!migrated.has(key)) migrated.set(key, {
            id: "rel-legacy-" + encodeURIComponent(sourceCharacterId) + "-" + encodeURIComponent(targetCharacterId),
            name: "Relación heredada", sourceCharacterId, targetCharacterId,
            relationshipType: "other",
            description: "Relación migrada desde la ficha del proyecto anterior.",
            status: "unknown"
          });
        }
      }
      project.relationships = Array.from(migrated.values());
    }
    project.characters.forEach((character) => { if (character && typeof character === "object") character.relationships = []; });
    project.relationships.forEach((relationship) => {
      if (!relationship || typeof relationship.sourceCharacterId !== "string" || typeof relationship.targetCharacterId !== "string") return;
      const source = charactersById.get(relationship.sourceCharacterId);
      const target = charactersById.get(relationship.targetCharacterId);
      if (!source || !target || source.id === target.id) return;
      if (!source.relationships.includes(target.id)) source.relationships.push(target.id);
      if (!target.relationships.includes(source.id)) target.relationships.push(source.id);
    });
    return project;
  }

  function loadProject() {
    const backup = projectRepository ? projectRepository.readBackup() : null;
    const parsed = backup && backup.project;
    if (parsed && parsed.schemaVersion === 1 && parsed.project &&
        Array.isArray(parsed.locations) && Array.isArray(parsed.characters)) {
      return ensureRelationshipStore({
        ...parsed,
        organizations: Array.isArray(parsed.organizations) ? parsed.organizations : [],
        relationships: Array.isArray(parsed.relationships) ? parsed.relationships : undefined
      });
    }
    return structuredClone(demo);
  }

  function enqueueRepositoryOperation(operation) {
    const task = persistenceQueue.catch(() => undefined).then(operation);
    persistenceQueue = task.catch(() => undefined);
    return task;
  }

  function saveProject() {
    const snapshot = structuredClone(state);
    const sequence = ++persistenceSequence;
    let backup = { written: false, warning: "ProjectRepository no está disponible." };
    try {
      if (projectRepository) backup = projectRepository.saveBackup(snapshot);
    } catch (error) {
      backup = { written: false, warning: error.message };
    }
    $("#project-name").textContent = snapshot.project.name;
    $("#save-status").textContent = "Guardando proyecto…";

    if (!projectRepository) {
      if (sequence === persistenceSequence) $("#save-status").textContent = "No se pudo guardar: exportá una copia";
      return Promise.resolve(false);
    }

    return enqueueRepositoryOperation(() => projectRepository.write(snapshot)).then(() => {
      if (sequence === persistenceSequence) {
        $("#save-status").textContent = backup.written
          ? "Guardado en IndexedDB · copia local disponible"
          : "Guardado en IndexedDB · respaldo local no disponible";
      }
      return true;
    }).catch(() => {
      if (sequence === persistenceSequence) {
        $("#save-status").textContent = backup.written
          ? "Respaldo local disponible · IndexedDB no disponible"
          : "No se pudo guardar: exportá una copia";
      }
      return Boolean(backup.written);
    });
  }

  function resetProjectWorkspace() {
    selectedLocationId = state.locations[0]?.id || null;
    selectedCharacterId = null;
    selectedEventId = null;
    selectedOrganizationId = null;
    selectedRelationshipId = null;
    selectedStoryId = null;
    activeView = "atlas";
    mapMode = "world";
    mapScale = 1;
    $("#global-search").value = "";
    $("#time-select").value = "now";
    $$(".view-tab").forEach((tab) => tab.classList.toggle("active", tab.dataset.mapMode === "world"));
    render();
  }

  async function requireCurrentProjectInIndexedDB() {
    const saved = await saveProject();
    if (!saved || !$("#save-status").textContent.startsWith("Guardado en IndexedDB")) {
      throw new Error("El proyecto actual no está verificado en IndexedDB. Se conserva la pantalla para no arriesgar la única copia local.");
    }
  }

  async function refreshProjectList() {
    const select = $("#project-list");
    const previousValue = select.value;
    select.replaceChildren();
    const projects = await projectRepository.listProjects();
    projects.forEach((project) => {
      const option = document.createElement("option");
      option.value = project.projectId;
      option.textContent = project.name + (project.active || project.projectId === state.project.id ? " · activo" : "");
      option.dataset.source = project.source;
      option.dataset.active = String(Boolean(project.active || project.projectId === state.project.id));
      select.appendChild(option);
    });
    if (!projects.length) {
      const option = document.createElement("option");
      option.value = "";
      option.textContent = "No hay proyectos guardados";
      option.disabled = true;
      select.appendChild(option);
    }
    if (projects.some((project) => project.projectId === state.project.id)) select.value = state.project.id;
    else if (projects.some((project) => project.projectId === previousValue)) select.value = previousValue;
    $("#project-list-status").textContent = projects.length
      ? projects.length + " proyecto(s) local(es). Los proyectos se identifican por ID, no por nombre."
      : "Todavía no hay proyectos persistidos.";
    updateProjectDeleteControl();
    try { await refreshSnapshotList(); }
    catch (error) { $("#snapshot-status").textContent = "No se pudieron leer los respaldos: " + error.message; }
    return projects;
  }

  async function refreshSnapshotList() {
    const projectId = $("#project-list").value;
    const select = $("#snapshot-list");
    const previousSnapshotId = select.value;
    select.replaceChildren();
    if (!projectId) {
      const empty = document.createElement("option");
      empty.value = "";
      empty.textContent = "Seleccioná un proyecto primero";
      empty.disabled = true;
      select.appendChild(empty);
      $("#snapshot-status").textContent = "Seleccioná un proyecto para consultar sus copias.";
      updateSnapshotControls();
      return [];
    }

    $("#snapshot-status").textContent = "Leyendo snapshots de " + projectId + "…";
    const snapshots = await projectRepository.listSnapshots(projectId);
    if (!snapshots.length) {
      const empty = document.createElement("option");
      empty.value = "";
      empty.textContent = "Todavía no hay snapshots";
      empty.disabled = true;
      select.appendChild(empty);
    } else {
      snapshots.forEach((snapshot) => {
        const option = document.createElement("option");
        option.value = snapshot.snapshotId;
        option.dataset.valid = String(snapshot.valid);
        option.dataset.reason = snapshot.reason;
        option.textContent = new Date(snapshot.createdAt).toLocaleString("es-AR") + " · " +
          snapshot.reason + (snapshot.valid ? "" : " · INVÁLIDO");
        select.appendChild(option);
      });
      if (snapshots.some((snapshot) => snapshot.snapshotId === previousSnapshotId)) select.value = previousSnapshotId;
      else select.value = snapshots[0].snapshotId;
    }
    const selectedProject = $("#project-list").selectedOptions[0];
    const sourceName = selectedProject?.textContent || projectId;
    $("#snapshot-status").textContent = snapshots.length
      ? snapshots.length + "/25 copias para " + sourceName + ". Los snapshots pertenecen al ID, no al nombre."
      : "No existen copias versionadas para " + sourceName + ".";
    updateSnapshotControls();
    return snapshots;
  }

  function updateSnapshotControls() {
    const projectId = $("#project-list").value;
    const projectOption = $("#project-list").selectedOptions[0];
    const snapshotOption = $("#snapshot-list").selectedOptions[0];
    const isPersisted = Boolean(projectId && projectOption?.dataset.source === "indexeddb");
    const isActive = projectId === state.project.id;
    $("#snapshot-create-button").disabled = !isPersisted;
    $("#snapshot-delete-button").disabled = !snapshotOption || !snapshotOption.value;
    $("#snapshot-restore-button").disabled = !snapshotOption || !snapshotOption.value ||
      snapshotOption.dataset.valid !== "true" || !isActive;
    if (projectId && !isActive) {
      $("#snapshot-status").setAttribute("aria-description", "Para restaurar, abrí primero este proyecto desde el catálogo.");
    } else {
      $("#snapshot-status").removeAttribute("aria-description");
    }
  }

  async function createSelectedSnapshot() {
    const projectId = $("#project-list").value;
    const option = $("#project-list").selectedOptions[0];
    if (!projectId || !option) return;
    if (option.dataset.source !== "indexeddb") {
      $("#snapshot-status").textContent = "Este universo solo está en el respaldo local; primero debe recuperarse y verificarse en IndexedDB.";
      return;
    }
    $("#snapshot-create-button").disabled = true;
    $("#snapshot-status").textContent = "Verificando el proyecto y creando el snapshot…";
    try {
      if (projectId === state.project.id) await requireCurrentProjectInIndexedDB();
      const snapshot = await enqueueRepositoryOperation(async () => {
        const record = await projectRepository.read("projects", projectId);
        if (!record || record.projectId !== projectId || !record.data || record.data.project?.id !== projectId) {
          throw new Error("El proyecto seleccionado no tiene una copia verificada en IndexedDB.");
        }
        return projectRepository.createSnapshot(record.data, { reason: "manual" });
      });
      await refreshSnapshotList();
      $("#snapshot-list").value = snapshot.snapshotId;
      updateSnapshotControls();
      $("#snapshot-status").textContent = "Snapshot creado y verificado: " + snapshot.snapshotId;
    } catch (error) {
      $("#snapshot-status").textContent = "No se creó el snapshot: " + error.message;
    } finally {
      updateSnapshotControls();
    }
  }

  async function deleteSelectedSnapshot() {
    const projectId = $("#project-list").value;
    const snapshotId = $("#snapshot-list").value;
    const snapshotOption = $("#snapshot-list").selectedOptions[0];
    if (!projectId || !snapshotId || !snapshotOption) return;
    if (!confirm("Se eliminará únicamente esta copia versionada. El proyecto y los demás snapshots se conservarán.\\n\\n" + snapshotOption.textContent)) {
      $("#snapshot-status").textContent = "Borrado cancelado; no se eliminó ningún snapshot.";
      return;
    }
    $("#snapshot-delete-button").disabled = true;
    try {
      await enqueueRepositoryOperation(() => projectRepository.deleteSnapshot(snapshotId, projectId));
      await refreshSnapshotList();
      $("#snapshot-status").textContent = "Snapshot eliminado. El proyecto y las demás copias permanecen intactos.";
    } catch (error) {
      $("#snapshot-status").textContent = "No se pudo eliminar el snapshot: " + error.message;
    } finally {
      updateSnapshotControls();
    }
  }

  async function restoreSelectedSnapshot() {
    const projectId = $("#project-list").value;
    const snapshotId = $("#snapshot-list").value;
    const snapshotOption = $("#snapshot-list").selectedOptions[0];
    if (!projectId || !snapshotId || !snapshotOption || snapshotOption.dataset.valid !== "true") return;
    if (projectId !== state.project.id) {
      $("#snapshot-status").textContent = "Abrí primero el universo seleccionado; una restauración nunca cambia de proyecto por accidente.";
      updateSnapshotControls();
      return;
    }
    if (!confirm("Se restaurará el contenido de este snapshot en el universo activo.\\n" +
      "Antes se guardará una copia automática del estado actual. El ID del proyecto y los demás universos se conservarán.\\n\\n" +
      snapshotOption.textContent + "\\n\\n¿Continuar?")) return;

    const appShell = $(".app-shell");
    if (appShell) appShell.inert = true;
    $("#snapshot-status").textContent = "Validando y restaurando. No cierres la aplicación…";
    $("#snapshot-restore-button").disabled = true;
    try {
      await requireCurrentProjectInIndexedDB();
      const restored = await enqueueRepositoryOperation(() => projectRepository.restoreSnapshot(snapshotId, projectId));
      state = ensureRelationshipStore(restored.project);
      resetProjectWorkspace();
      await refreshProjectList();
      $("#snapshot-status").textContent = "Restauración verificada. Copia automática previa: " + restored.rollbackSnapshotId;
    } catch (error) {
      $("#snapshot-status").textContent = "Restauración cancelada sin cambiar la sesión activa: " + error.message;
    } finally {
      if (appShell) appShell.inert = false;
      updateSnapshotControls();
    }
  }

  function updateProjectDeleteControl() {
    const button = $("#project-delete-button");
    const help = $("#project-delete-help");
    const select = $("#project-list");
    if (!button || !help || !select) return;
    const option = select.selectedOptions[0];
    const projectId = select.value;
    const active = Boolean(projectId && (projectId === state.project.id || option?.dataset.active === "true"));
    const backupOnly = Boolean(option && option.dataset.source !== "indexeddb");
    button.disabled = !projectId || active || backupOnly;
    if (!projectId) help.textContent = "Seleccioná un proyecto para ver las opciones de borrado.";
    else if (active) help.textContent = "Este es el proyecto activo. Primero abrí y activá otro universo; luego podrás eliminar este proyecto desde el catálogo.";
    else if (backupOnly) help.textContent = "Este proyecto solo existe en el respaldo local. Debe recuperarse y verificarse en IndexedDB antes de poder eliminarlo.";
    else help.textContent = "Se eliminará únicamente el ID seleccionado, con confirmación. Los universos restantes se conservarán.";
  }

  async function deleteSelectedProject() {
    const select = $("#project-list");
    const projectId = select.value;
    const option = select.selectedOptions[0];
    if (!projectId || !option) return;
    if (projectId === state.project.id || option.dataset.active === "true") {
      updateProjectDeleteControl();
      $("#project-list-status").textContent = "Protección activa: primero abrí otro proyecto y después seleccioná el anterior para eliminarlo.";
      return;
    }
    if (option.dataset.source !== "indexeddb") {
      updateProjectDeleteControl();
      $("#project-list-status").textContent = "No se puede borrar un proyecto que solo existe en el respaldo local. Primero debe recuperarse y verificarse en IndexedDB.";
      return;
    }
    const candidate = await projectRepository.getProject(projectId);
    if (!candidate || candidate.project.id !== projectId) {
      $("#project-list-status").textContent = "No se pudo verificar el proyecto seleccionado. Actualizá el catálogo antes de continuar.";
      return;
    }
    const projectName = candidate.project.name || "Proyecto sin nombre";
    if (!confirm(
      "Se eliminará el proyecto «" + projectName + "» (ID: " + projectId + ").\n" +
      "Solo se borrará este ID exacto; otros universos, incluso con nombres parecidos, se conservarán.\n" +
      "El proyecto activo actual («" + state.project.name + "») no se eliminará. También se borrarán todas las copias de seguridad de este universo; no existe recuperación posterior."
    )) {
      $("#project-list-status").textContent = "Eliminación cancelada. No se borró ningún proyecto.";
      return;
    }
    const appShell = $(".app-shell");
    if (appShell) appShell.inert = true;
    $("#project-delete-button").disabled = true;
    $("#project-list-status").textContent = "Verificando el proyecto activo y eliminando el ID seleccionado…";
    let deletion = null;
    try {
      await requireCurrentProjectInIndexedDB();
      deletion = await projectRepository.deleteProject(projectId);
      const projects = await refreshProjectList();
      const stillListed = projects.some((project) => project.projectId === projectId);
      select.value = state.project.id;
      updateProjectDeleteControl();
      if (stillListed) {
        $("#project-list-status").textContent = deletion.warning ||
          "IndexedDB confirmó el borrado, pero aún aparece un candidato de respaldo con el mismo ID.";
        return;
      }
      $("#project-list-status").textContent = "Proyecto «" + projectName + "» eliminado. El proyecto activo «" +
        state.project.name + "» y los demás universos permanecen intactos." +
        (deletion.warning ? " " + deletion.warning : "");
    } catch (error) {
      $("#project-list-status").textContent = "No se pudo eliminar el proyecto: " + error.message;
    } finally {
      if (appShell) appShell.inert = false;
      updateProjectDeleteControl();
    }
  }

  async function runMasterSearch(event) {
    event.preventDefault();
    const query = $("#master-search-query").value.trim();
    const entityType = $("#master-search-type").value || "all";
    const status = $("#master-search-status");
    const resultsNode = $("#master-search-results");
    resultsNode.replaceChildren();
    if (!query) {
      status.textContent = "Escribí un término para iniciar la búsqueda.";
      return;
    }
    if (!projectRepository || typeof projectRepository.searchAcrossProjects !== "function") {
      status.textContent = "El índice maestro no está disponible en esta sesión.";
      return;
    }
    const button = $("#master-search-button");
    button.disabled = true;
    status.textContent = "Consultando los universos locales sin cambiar el proyecto activo…";
    try {
      const report = await projectRepository.searchAcrossProjects(query, { entityType, limit: 100 });
      if (report.complete) {
        status.textContent = report.totalMatches + " coincidencia(s) en " + report.scannedProjects +
          " universo(s). Búsqueda completa" + (report.truncated ? "; se muestran los primeros " + report.results.length + " resultados." : ".");
      } else {
        status.textContent = "BÚSQUEDA PARCIAL: " + report.totalMatches + " coincidencia(s) en " +
          report.scannedProjects + " universo(s) consultable(s). " +
          (report.warning || "No se pudo confirmar que se hayan consultado todos los universos.");
      }
      report.results.forEach((item) => {
        const card = document.createElement("article");
        card.className = "master-search-result";
        card.dataset.projectId = item.projectId;
        card.dataset.entityType = item.entityType;
        card.dataset.entityId = item.entityId;
        card.dataset.source = item.source;
        const title = document.createElement("strong");
        title.textContent = item.name;
        const metadata = document.createElement("small");
        metadata.textContent = item.projectName + " · " + item.entityTypeLabel + " · " + item.detail;
        const identity = document.createElement("span");
        identity.textContent = "Proyecto ID: " + item.projectId + " · Ficha ID: " + item.entityId +
          (item.source === "localStorage" ? " · solo en respaldo local" : "");
        const action = document.createElement("button");
        action.type = "button";
        action.className = "outline-button master-search-open";
        action.dataset.masterOpen = "true";
        action.textContent = item.source === "indexeddb" ? "Abrir ficha" : "No verificable";
        action.disabled = item.source !== "indexeddb";
        action.title = item.source === "indexeddb"
          ? "Abrir esta ficha exacta en su universo"
          : "Este resultado solo está en un respaldo local; recuperá y verificá el proyecto antes de abrirlo.";
        action.setAttribute("aria-label", (item.source === "indexeddb" ? "Abrir " : "No verificable: ") + item.name + " · " + item.projectName);
        action.addEventListener("click", () => {
          void openMasterSearchResult(card.dataset.projectId, card.dataset.entityType, card.dataset.entityId, card.dataset.source, action);
        });
        card.append(title, metadata, identity, action);
        resultsNode.appendChild(card);
      });
      if (!report.results.length) {
        const empty = document.createElement("p");
        empty.className = "field-help";
        empty.textContent = report.complete
          ? "No se encontraron coincidencias en los universos consultados."
          : "No se encontraron coincidencias en la parte consultable. La búsqueda incompleta no garantiza ausencia de resultados.";
        resultsNode.appendChild(empty);
      }
      if (!report.complete && report.warning) {
        const warning = document.createElement("small");
        warning.className = "field-help";
        warning.textContent = report.warning;
        resultsNode.appendChild(warning);
      }
    } catch (error) {
      status.textContent = "No se pudo consultar el índice maestro: " + error.message;
    } finally {
      button.disabled = false;
    }
  }


  function masterSearchEntityExists(project, entityType, entityId) {
    const collections = {
      character: project.characters, location: project.locations, event: project.events,
      organization: project.organizations, relationship: project.relationships, story: project.stories
    };
    const records = collections[entityType];
    return Array.isArray(records) && records.some((record) => record && record.id === entityId);
  }

  function selectMasterSearchEntity(entityType, entityId) {
    $("#global-search").value = "";
    if (entityType === "character") {
      activeView = "atlas";
      selectedCharacterId = entityId;
      render();
      openCharacter(entityId);
      const target = $("#details-panel h2");
      if (target) target.tabIndex = -1;
      return target;
    }
    if (entityType === "location") {
      showLocation(entityId);
      const target = $("#details-panel h2");
      if (target) target.tabIndex = -1;
      return target;
    }
    if (entityType === "event") {
      selectedEventId = entityId;
      activeView = "timeline";
    } else if (entityType === "organization") {
      selectedOrganizationId = entityId;
      activeView = "organizations";
    } else if (entityType === "relationship") {
      selectedRelationshipId = entityId;
      activeView = "relationships";
    } else if (entityType === "story") {
      selectedStoryId = entityId;
      activeView = "stories";
    } else {
      throw new Error("El tipo de ficha no se puede abrir desde el índice maestro.");
    }
    render();
    const selector = {
      event: "[data-event]", organization: "[data-organization]",
      relationship: "[data-relationship]", story: "[data-story]"
    }[entityType];
    const key = {
      event: "event", organization: "organization",
      relationship: "relationship", story: "story"
    }[entityType];
    const target = $("#directory-view " + selector).find((node) => node.dataset[key] === entityId);
    if (!target) throw new Error("La ficha existe, pero no se pudo enfocar su tarjeta exacta.");
    return target;
  }

  async function openMasterSearchResult(projectId, entityType, entityId, source, actionButton) {
    const status = $("#master-search-status");
    if (source !== "indexeddb") {
      status.textContent = "No se puede abrir este resultado: solo está en un respaldo local no verificado. Recuperá el proyecto y repetí la búsqueda.";
      return;
    }
    const supportedTypes = new Set(["character", "location", "event", "organization", "relationship", "story"]);
    if (!projectId || !entityId || !supportedTypes.has(entityType)) {
      status.textContent = "El resultado no contiene una identidad completa. Repetí la búsqueda.";
      return;
    }
    if (!projectRepository) {
      status.textContent = "No se puede abrir la ficha porque el repositorio local no está disponible.";
      return;
    }

    const previousProject = structuredClone(state);
    const previousWorkspace = {
      activeView, mapMode, selectedLocationId, selectedCharacterId, selectedEventId,
      selectedOrganizationId, selectedRelationshipId, selectedStoryId, mapScale
    };
    const appShell = $(".app-shell");
    const shellWasInert = appShell ? appShell.inert : false;
    let switchAttempted = false;
    let opened = false;
    let focusTarget = null;
    if (appShell) appShell.inert = true;
    if (actionButton) actionButton.disabled = true;
    status.textContent = "Guardando y verificando el universo actual; luego se comprobará la ficha de destino…";

    try {
      await requireCurrentProjectInIndexedDB();
      let candidate;
      if (projectId === previousProject.project.id) {
        candidate = structuredClone(state);
      } else {
        // read() is deliberate: getProject() may fall back to a localStorage-only backup.
        const record = await projectRepository.read("projects", projectId);
        if (!record || record.projectId !== projectId || !record.data ||
            !record.data.project || record.data.project.id !== projectId) {
          throw new Error("El proyecto destino ya no existe como registro verificado en IndexedDB. Repetí la búsqueda; no se abrirá una ficha parecida.");
        }
        candidate = structuredClone(record.data);
      }

      const schema = window.WordWaifuProjectSchema;
      if (!schema || typeof schema.validateAndNormalizeProject !== "function") {
        throw new Error("El validador de proyectos no está disponible.");
      }
      const validation = schema.validateAndNormalizeProject(candidate);
      if (!validation.valid) {
        throw new Error("El proyecto destino no supera la validación: " + validation.errors.slice(0, 5).join(" "));
      }
      if (validation.project.project.id !== projectId) {
        throw new Error("El ID del proyecto no coincide con el resultado de búsqueda.");
      }
      const normalized = ensureRelationshipStore({
        ...validation.project,
        organizations: Array.isArray(validation.project.organizations) ? validation.project.organizations : [],
        relationships: Array.isArray(validation.project.relationships) ? validation.project.relationships : undefined
      });
      if (!masterSearchEntityExists(normalized, entityType, entityId)) {
        throw new Error("La ficha exacta ya no existe en ese universo. Repetí la búsqueda; no se abrirá otra ficha con un nombre parecido.");
      }

      if (projectId !== previousProject.project.id) {
        switchAttempted = true;
        const saved = await enqueueRepositoryOperation(() => projectRepository.saveActive(normalized));
        if (saved.backend !== "indexeddb") {
          projectRepository.saveBackup(previousProject);
          await projectRepository.activateProject(previousProject.project.id);
          switchAttempted = false;
          throw new Error("No se pudo persistir y verificar el universo de destino en IndexedDB. El universo anterior permanece activo.");
        }
        state = normalized;
        resetProjectWorkspace();
      } else {
        state = normalized;
        if (JSON.stringify(normalized) !== JSON.stringify(previousProject)) {
          const saved = await saveProject();
          if (!saved || !$("#save-status").textContent.startsWith("Guardado en IndexedDB")) {
            throw new Error("No se pudieron guardar las normalizaciones del proyecto actual.");
          }
        }
      }

      focusTarget = selectMasterSearchEntity(entityType, entityId);
      if (!focusTarget) throw new Error("No se pudo enfocar la ficha exacta.");
      $("#project-dialog").close();
      $("#save-status").textContent = "Ficha abierta desde el índice maestro · " + state.project.name;
      opened = true;
    } catch (error) {
      state = previousProject;
      activeView = previousWorkspace.activeView;
      mapMode = previousWorkspace.mapMode;
      selectedLocationId = previousWorkspace.selectedLocationId;
      selectedCharacterId = previousWorkspace.selectedCharacterId;
      selectedEventId = previousWorkspace.selectedEventId;
      selectedOrganizationId = previousWorkspace.selectedOrganizationId;
      selectedRelationshipId = previousWorkspace.selectedRelationshipId;
      selectedStoryId = previousWorkspace.selectedStoryId;
      mapScale = previousWorkspace.mapScale;
      try { projectRepository.saveBackup(previousProject); } catch { /* IndexedDB remains the primary recovery point. */ }
      if (switchAttempted) {
        try {
          await projectRepository.activateProject(previousProject.project.id);
        } catch (rollbackError) {
          status.textContent = "No se pudo abrir la ficha y tampoco confirmar la restauración del proyecto activo: " + rollbackError.message;
          render();
          return;
        }
      }
      render();
      status.textContent = "No se pudo abrir la ficha: " + error.message;
    } finally {
      if (appShell) appShell.inert = shellWasInert;
      if (actionButton) actionButton.disabled = false;
    }
    if (opened && focusTarget) {
      try {
        focusTarget.focus({ preventScroll: true });
        if (typeof focusTarget.scrollIntoView === "function") focusTarget.scrollIntoView({ block: "nearest" });
      } catch { /* The exact record is already displayed; focusing is an enhancement. */ }
    }
  }

  async function openProjectManager() {
    if (!projectRepository) {
      alert("El repositorio local de proyectos no está disponible.");
      return;
    }
    $("#project-dialog").showModal();
    $("#project-list-status").textContent = "Leyendo el catálogo local…";
    try {
      await refreshProjectList();
      await refreshTrashList();
    } catch (error) {
      $("#project-list-status").textContent = "No se pudo enumerar: " + error.message;
    }
  }

  async function refreshTrashList() {
    const select = $("#trash-list");
    const previousId = select.value;
    select.replaceChildren();
    const entries = await projectRepository.listTrash();
    if (!entries.length) {
      const empty = document.createElement("option");
      empty.value = "";
      empty.textContent = "La papelera está vacía";
      empty.disabled = true;
      select.appendChild(empty);
    } else {
      entries.forEach((entry) => {
        const option = document.createElement("option");
        option.value = entry.projectId;
        option.textContent = entry.name + " · " + entry.projectId + " · " +
          new Date(entry.deletedAt).toLocaleString("es-AR") + " · " + entry.snapshotCount + " snapshot(s)";
        option.dataset.name = entry.name;
        option.dataset.snapshotCount = String(entry.snapshotCount);
        select.appendChild(option);
      });
      select.value = entries.some((entry) => entry.projectId === previousId) ? previousId : entries[0].projectId;
    }
    $("#trash-status").textContent = entries.length
      ? entries.length + " universo(s) en papelera. Se identifican por ID, nunca solo por nombre."
      : "La papelera está vacía. No se modificó ningún proyecto.";
    updateTrashControls();
    return entries;
  }

  function updateTrashControls() {
    const selected = $("#trash-list").selectedOptions[0];
    const available = Boolean(selected && selected.value);
    $("#trash-restore-button").disabled = !available;
    $("#trash-delete-button").disabled = !available;
  }

  async function restoreSelectedTrashedProject() {
    const select = $("#trash-list");
    const option = select.selectedOptions[0];
    const projectId = select.value;
    if (!projectId || !option) return;
    const projectName = option.dataset.name || option.textContent;
    if (!confirm("Se restaurará «" + projectName + "» (ID: " + projectId + ") con sus snapshots. " +
      "No se activará automáticamente ni se sobrescribirá otro universo. ¿Continuar?")) {
      $("#trash-status").textContent = "Restauración cancelada; la papelera no cambió.";
      return;
    }
    const appShell = $(".app-shell");
    if (appShell) appShell.inert = true;
    $("#trash-restore-button").disabled = true;
    $("#trash-status").textContent = "Restaurando y verificando el universo…";
    try {
      const result = await projectRepository.restoreTrashedProject(projectId);
      await refreshProjectList();
      const entries = await refreshTrashList();
      if (entries.some((entry) => entry.projectId === projectId)) {
        throw new Error("El universo sigue apareciendo en la papelera después de restaurar.");
      }
      $("#project-list-status").textContent = "Universo restaurado: " + projectName +
        " · ID " + projectId + " · " + result.snapshotCount + " snapshot(s). Seleccionalo y abrilo cuando quieras.";
      $("#trash-status").textContent = "Restauración verificada para «" + projectName + "». Se conservaron " +
        result.snapshotCount + " snapshot(s); el proyecto activo no cambió.";
    } catch (error) {
      $("#trash-status").textContent = "No se pudo restaurar el universo: " + error.message;
      try { await refreshTrashList(); } catch { /* Keep the original failure visible. */ }
    } finally {
      if (appShell) appShell.inert = false;
      updateTrashControls();
    }
  }

  async function permanentlyDeleteSelectedTrashedProject() {
    const select = $("#trash-list");
    const option = select.selectedOptions[0];
    const projectId = select.value;
    if (!projectId || !option) return;
    const projectName = option.dataset.name || option.textContent;
    if (!confirm("BORRADO PERMANENTE\n\nSe eliminará definitivamente «" + projectName + "» (ID: " +
      projectId + ") y sus " + (option.dataset.snapshotCount || "0") +
      " snapshot(s). Esta acción no se puede deshacer. ¿Confirmás el borrado permanente?")) {
      $("#trash-status").textContent = "Borrado permanente cancelado; el universo sigue en la papelera.";
      return;
    }
    const appShell = $(".app-shell");
    if (appShell) appShell.inert = true;
    $("#trash-delete-button").disabled = true;
    $("#trash-status").textContent = "Eliminando definitivamente el ID seleccionado…";
    try {
      await projectRepository.permanentlyDeleteTrashedProject(projectId);
      const entries = await refreshTrashList();
      if (entries.some((entry) => entry.projectId === projectId)) {
        throw new Error("El ID sigue presente en la papelera después del borrado.");
      }
      $("#trash-status").textContent = "Borrado permanente verificado para «" + projectName +
        "» (ID: " + projectId + "). No se modificó el universo activo.";
    } catch (error) {
      $("#trash-status").textContent = "No se pudo confirmar el borrado permanente: " + error.message;
      try { await refreshTrashList(); } catch { /* Keep the original failure visible. */ }
    } finally {
      if (appShell) appShell.inert = false;
      updateTrashControls();
    }
  }

  async function openSelectedProject() {
    const projectId = $("#project-list").value;
    if (!projectId) return;
    if (projectId === state.project.id) {
      $("#project-dialog").close();
      return;
    }
    const appShell = $(".app-shell");
    const previousProject = structuredClone(state);
    if (appShell) appShell.inert = true;
    $("#project-list-status").textContent = "Guardando el proyecto actual y abriendo el seleccionado…";
    try {
      await requireCurrentProjectInIndexedDB();
      const candidate = await projectRepository.getProject(projectId);
      if (!candidate) throw new Error("El proyecto seleccionado ya no existe en el catálogo local.");
      const schema = window.WordWaifuProjectSchema;
      if (!schema || typeof schema.validateAndNormalizeProject !== "function") throw new Error("El validador de proyectos no está disponible.");
      const validation = schema.validateAndNormalizeProject(candidate);
      if (!validation.valid) throw new Error("El proyecto seleccionado no supera la validación: " + validation.errors.slice(0, 5).join(" "));
      const normalized = ensureRelationshipStore(validation.project);
      const persisted = await projectRepository.saveActive(normalized);
      if (persisted.backend !== "indexeddb") {
        projectRepository.saveBackup(previousProject);
        await projectRepository.activateProject(previousProject.project.id);
        throw new Error("No se pudo verificar el cambio en IndexedDB; se restauró el proyecto anterior.");
      }
      state = normalized;
      resetProjectWorkspace();
      $("#project-dialog").close();
      $("#save-status").textContent = "Proyecto abierto y verificado en IndexedDB";
    } catch (error) {
      state = previousProject;
      projectRepository.saveBackup(previousProject);
      try { await projectRepository.activateProject(previousProject.project.id); } catch { /* Preserve visible state if storage is unavailable. */ }
      $("#project-list-status").textContent = "No se pudo abrir el proyecto: " + error.message;
      alert("No se pudo cambiar de proyecto. El proyecto anterior permanece abierto. " + error.message);
    } finally {
      if (appShell) appShell.inert = false;
    }
  }

  function newProjectId() {
    const randomPart = window.crypto && typeof window.crypto.randomUUID === "function"
      ? window.crypto.randomUUID()
      : Date.now().toString(36) + "-" + Math.random().toString(36).slice(2, 10);
    return "project-" + randomPart;
  }

  async function createNamedProject() {
    const name = $("#create-project-name").value.trim();
    if (!name) {
      $("#create-project-name").setCustomValidity("Escribí un nombre para el universo.");
      $("#create-project-name").reportValidity();
      return;
    }
    $("#create-project-name").setCustomValidity("");
    const appShell = $(".app-shell");
    const previousProject = structuredClone(state);
    if (appShell) appShell.inert = true;
    $("#project-list-status").textContent = "Guardando el proyecto actual y creando el nuevo…";
    try {
      await requireCurrentProjectInIndexedDB();
      const project = {
        schemaVersion: 1,
        project: { id: newProjectId(), name, description: "" },
        locations: [], characters: [], events: [], organizations: [], relationships: [], stories: [],
        settings: { time: "now" }
      };
      const persisted = await projectRepository.saveActive(project);
      if (persisted.backend !== "indexeddb") {
        projectRepository.saveBackup(previousProject);
        await projectRepository.activateProject(previousProject.project.id);
        throw new Error("IndexedDB no verificó el proyecto nuevo. El proyecto anterior sigue activo.");
      }
      state = ensureRelationshipStore(project);
      resetProjectWorkspace();
      $("#create-project-name").value = "";
      $("#project-dialog").close();
      $("#save-status").textContent = "Nuevo proyecto creado y verificado en IndexedDB";
    } catch (error) {
      state = previousProject;
      projectRepository.saveBackup(previousProject);
      try { await projectRepository.activateProject(previousProject.project.id); } catch { /* Preserve previous in-memory project. */ }
      $("#project-list-status").textContent = "No se pudo crear el proyecto: " + error.message;
      alert("No se pudo crear el proyecto. El proyecto anterior permanece abierto. " + error.message);
    } finally {
      if (appShell) appShell.inert = false;
    }
  }

  function locationById(id) { return state.locations.find((location) => location.id === id); }
  function characterById(id) { return state.characters.find((character) => character.id === id); }
  function currentTime() { return $("#time-select").value; }
  function timeOrder(value) { return ({ chapter1: 1, chapter5: 5, chapter12: 12, now: 9999 })[value] ?? 9999; }

  function characterLocationAt(character, time) {
    const moment = timeOrder(time);
    // If adjacent history entries overlap on a chapter boundary, the entry
    // with the latest start takes precedence (e.g. the new location at chapter 5).
    const match = (character.locationHistory || []).reduce((best, entry) => {
      const from = timeOrder(entry.from);
      const to = entry.to === "now" ? 9999 : timeOrder(entry.to);
      if (moment < from || moment > to) return best;
      return !best || from >= timeOrder(best.from) ? entry : best;
    }, null);
    return match ? locationById(match.locationId) : null;
  }

  function charactersAt(locationId, time = currentTime()) {
    return state.characters.filter((character) => characterLocationAt(character, time)?.id === locationId);
  }

  function selectedLocation() { return locationById(selectedLocationId) || state.locations[0]; }

  function render() {
    $("#project-name").textContent = state.project.name;
    $("#character-count").textContent = state.characters.length;
    $("#stat-characters").textContent = state.characters.length;
    $("#stat-locations").textContent = state.locations.length;
    $("#stat-events").textContent = state.events.length;
    $("#breadcrumb-current").textContent = titles[activeView][0];
    $("#view-title").textContent = titles[activeView][0];
    $("#view-subtitle").textContent = titles[activeView][1];
    $$(".nav-item").forEach((button) => button.classList.toggle("active", button.dataset.view === activeView));
    $("#atlas-layout").classList.toggle("hidden", activeView !== "atlas");
    $("#directory-view").classList.toggle("hidden", !["characters", "relationships", "places", "timeline", "organizations", "stories"].includes(activeView));
    $("#command-view").classList.toggle("hidden", activeView !== "commands");
    $(".toolbar").classList.toggle("hidden", activeView !== "atlas");
    $("#layers-panel").classList.add("hidden");
    $("#add-button").classList.toggle("hidden", activeView === "commands" || activeView === "stories");
    renderMap();
    renderDetails();
    renderDirectory();
  }

  function mapPointFromPointer(event) {
    const svg = $("#world-map"), mapArt = $("#map-art"), matrix = mapArt && mapArt.getScreenCTM();
    if (!svg || !matrix) return null;
    const point = svg.createSVGPoint(); point.x = event.clientX; point.y = event.clientY;
    const local = point.matrixTransform(matrix.inverse());
    return { x: local.x, y: local.y };
  }

  function clampMarkerPoint(point) {
    return { x: Math.max(12, Math.min(888, point.x)), y: Math.max(12, Math.min(588, point.y)) };
  }

  function ensureMarkerDragHandle(marker) {
    let handle = marker.querySelector(".marker-drag-handle");
    if (handle) return handle;
    handle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    handle.setAttribute("class", "marker-drag-handle");
    handle.setAttribute("cx", "14");
    handle.setAttribute("cy", "10");
    handle.setAttribute("r", "6");
    handle.setAttribute("aria-hidden", "true");
    marker.appendChild(handle);
    return handle;
  }

  function bindMarkerInteractions(marker) {
    if (!marker || marker.classList.contains("event-marker") || marker.dataset.markerInteractionsBound) return;
    marker.dataset.markerInteractionsBound = "true";
    const handle = ensureMarkerDragHandle(marker);
    handle.addEventListener("pointerdown", (event) => {
      if (event.button !== 0 || event.isPrimary === false) return;
      const location = locationById(marker.dataset.location);
      const point = mapPointFromPointer(event);
      if (!location || !point) return;
      const origin = Array.isArray(location.marker) ? location.marker : [450, 300];
      marker._wordwaifuDrag = {
        pointerId: event.pointerId, startX: event.clientX, startY: event.clientY,
        offsetX: origin[0] - point.x, offsetY: origin[1] - point.y,
        origin, moving: false, current: origin, handle
      };
      try { handle.setPointerCapture(event.pointerId); } catch { /* Pointer capture is optional. */ }
      event.preventDefault();
      event.stopPropagation();
    });
    handle.addEventListener("click", (event) => event.stopPropagation());
    marker.addEventListener("pointermove", (event) => {
      const drag = marker._wordwaifuDrag;
      if (!drag || drag.pointerId !== event.pointerId) return;
      if (!drag.moving && Math.hypot(event.clientX - drag.startX, event.clientY - drag.startY) < 4) return;
      const point = mapPointFromPointer(event);
      if (!point) return;
      if (!drag.moving) {
        drag.moving = true;
        try { drag.handle.setPointerCapture(event.pointerId); } catch { /* Optional enhancement. */ }
      }
      const next = clampMarkerPoint({ x: point.x + drag.offsetX, y: point.y + drag.offsetY });
      drag.current = [next.x, next.y];
      marker.setAttribute("transform", "translate(" + next.x + " " + next.y + ")");
    });
    const finishDrag = (event, cancelled) => {
      const drag = marker._wordwaifuDrag;
      if (!drag || drag.pointerId !== event.pointerId) return;
      marker._wordwaifuDrag = null;
      if (cancelled) {
        const location = locationById(marker.dataset.location);
        const point = location && Array.isArray(location.marker) ? location.marker : drag.origin;
        marker.setAttribute("transform", "translate(" + point[0] + " " + point[1] + ")");
        return;
      }
      if (!drag.moving) return;
      const location = locationById(marker.dataset.location);
      if (!location) return;
      location.marker = drag.current.map((value) => Math.round(value * 10) / 10);
      saveProject();
      renderMap();
    };
    marker.addEventListener("pointerup", (event) => finishDrag(event, false));
    marker.addEventListener("pointercancel", (event) => finishDrag(event, true));
  }

  function renderMap() {
    const dynamicLayer = $("#dynamic-markers");
    if (dynamicLayer) {
      dynamicLayer.replaceChildren();
      state.locations.filter((location) => !$$(".map-marker:not(.event-marker)").some((marker) => marker.dataset.location === location.id)).forEach((location) => {
        const point = Array.isArray(location.marker) ? location.marker : [450, 300];
        if (!Array.isArray(location.marker)) location.marker = point;
        const group = document.createElementNS("http://www.w3.org/2000/svg", "g");
        group.setAttribute("class", "map-marker custom-marker");
        group.setAttribute("data-location", location.id);
        group.setAttribute("tabindex", "0");
        group.setAttribute("role", "button");
        group.setAttribute("aria-label", "Abrir " + location.name);
        group.setAttribute("transform", "translate(" + point[0] + " " + point[1] + ")");
        const halo = document.createElementNS("http://www.w3.org/2000/svg", "circle");
        halo.setAttribute("class", "marker-halo"); halo.setAttribute("r", "18");
        const core = document.createElementNS("http://www.w3.org/2000/svg", "circle");
        core.setAttribute("class", "marker-core city"); core.setAttribute("r", "6");
        const label = document.createElementNS("http://www.w3.org/2000/svg", "text");
        label.setAttribute("y", "-17"); label.textContent = location.name.toUpperCase();
        group.append(halo, core, label);
        const activate = () => showLocation(location.id);
        group.addEventListener("click", activate);
        group.addEventListener("keydown", (event) => { if (event.key === "Enter" || event.key === " ") { event.preventDefault(); activate(); } });
        dynamicLayer.appendChild(group);
      });
    }
    $$(".map-marker").forEach((marker) => {
      const locationId = marker.dataset.location;
      const location = locationById(locationId);
      if (location && !marker.classList.contains("event-marker")) {
        if (!Array.isArray(location.marker)) location.marker = [450, 300];
        marker.setAttribute("transform", "translate(" + location.marker[0] + " " + location.marker[1] + ")");
        marker.setAttribute("aria-label", "Abrir " + location.name);
        const label = marker.querySelector(":scope > text");
        if (label) label.textContent = location.name.toUpperCase();
        bindMarkerInteractions(marker);
      }
      const missingLocation = !location;
      marker.classList.toggle("selected", locationId === selectedLocationId);
      const layerDisabled = marker.classList.contains("event-marker") ? !enabledLayers.events : !enabledLayers.places;
      marker.classList.toggle("hidden", missingLocation || layerDisabled);
      if (mapMode === "people" && !marker.classList.contains("event-marker")) {
        const count = charactersAt(locationId).length;
        marker.style.opacity = count ? "1" : ".4";
      } else marker.style.opacity = "1";
    });
    $("#world-map").style.transform = "scale(" + mapScale + ")";
    $("#world-map").style.transformOrigin = "center";
    if (mapMode === "factions") $("#view-subtitle").textContent = "Vista de facciones: la demo muestra organizaciones a través de sus lugares y personajes vinculados.";
    else $("#view-subtitle").textContent = titles.atlas[1];
  }

  function renderDetails() {
    if (activeView !== "atlas") return;
    const location = selectedLocation();
    if (!location) {
      $("#details-panel").innerHTML = '<div class="empty-state">Todavía no hay lugares en este proyecto. Creá una entidad de tipo Lugar para empezar a poblar el atlas.</div>';
      $("#related-title").textContent = "Personajes en este lugar";
      $("#related-list").innerHTML = '<div class="empty-state">Cuando registres ubicaciones y presencias, los personajes aparecerán aquí.</div>';
      return;
    }
    const people = charactersAt(location.id);
    const event = state.events.find((entry) => entry.locationIds.includes(location.id));
    $("#details-panel").innerHTML = '<div class="detail-cover"></div><span class="detail-type">' + escapeHTML(location.type) + '</span><h2>' + escapeHTML(location.name) + '</h2><p>' + escapeHTML(location.description) + '</p><div class="location-actions"><button type="button" id="edit-location-button" class="outline-button">Editar lugar</button><button type="button" id="delete-location-button" class="outline-button danger-action">Eliminar lugar</button></div><p class="marker-help">Arrastrá el marcador en el mapa para cambiar su posición.</p><div class="tag-row">' + location.tags.map((tag) => '<span class="tag">' + escapeHTML(tag) + '</span>').join("") + '</div><div class="detail-divider"></div><div class="detail-meta"><div><span>Población</span><strong>' + escapeHTML(location.population || "Sin datos") + '</strong></div><div><span>Gobierno</span><strong>' + escapeHTML(location.government || "Sin datos") + '</strong></div><div><span>Clima</span><strong>' + escapeHTML(location.climate || "Sin datos") + '</strong></div><div><span>Personajes presentes</span><strong>' + people.length + '</strong></div></div><div class="detail-divider"></div><div class="section-title"><strong>Último acontecimiento relacionado</strong></div><p>' + escapeHTML(event ? event.title + " · " + event.description : "Todavía no hay acontecimientos vinculados.") + '</p>';
    $("#edit-location-button").addEventListener("click", () => editLocation(location.id));
    $("#delete-location-button").addEventListener("click", () => deleteLocation(location.id));
    $("#related-title").textContent = "Personajes en " + location.name;
    $("#related-list").innerHTML = people.length ? people.map((character) => '<div class="related-person" data-character="' + escapeHTML(character.id) + '" tabindex="0" role="button"><span class="avatar">' + escapeHTML(initials(character.name)) + '</span><div><strong>' + escapeHTML(character.name) + '</strong><small>' + escapeHTML(character.role) + ' · ' + escapeHTML(character.species) + '</small></div><span class="arrow">↗</span></div>').join("") : '<div class="empty-state">No hay personajes registrados aquí en este momento narrativo.</div>';
  }

  function initials(name) { return name.split(/\s+/).slice(0, 2).map((part) => part[0]).join("").toUpperCase(); }

  function renderDirectory() {
    const container = $("#directory-view");
    if (container.classList.contains("hidden")) return;
    const query = $("#global-search").value.trim().toLowerCase();
    let items = [];
    let heading = "";
    if (activeView === "characters") {
      heading = "Registro de personajes";
      items = state.characters.filter((item) => matches(item.name + " " + item.role + " " + item.species + " " + item.description, query)).map((character) => {
        const place = characterLocationAt(character, currentTime());
        return '<article class="entity-card" data-character="' + escapeHTML(character.id) + '" tabindex="0" role="button"><span class="avatar">' + escapeHTML(initials(character.name)) + '</span><h3>' + escapeHTML(character.name) + '</h3><p>' + escapeHTML(character.description) + '</p><div class="tag-row"><span class="tag">' + escapeHTML(character.role) + '</span><span class="tag">' + escapeHTML(character.age == null ? "Edad sin definir" : character.age + " años") + '</span><span class="tag">' + escapeHTML(place ? place.name : "Ubicación desconocida") + '</span></div></article>';
      });
    } else if (activeView === "places") {
      heading = "Atlas de lugares";
      items = state.locations.filter((item) => matches(item.name + " " + item.type + " " + item.description, query)).map((location) => '<article class="entity-card" data-location="' + escapeHTML(location.id) + '" tabindex="0" role="button"><span class="avatar">⌖</span><h3>' + escapeHTML(location.name) + '</h3><p>' + escapeHTML(location.description) + '</p><div class="tag-row"><span class="tag">' + escapeHTML(location.type) + '</span><span class="tag">' + charactersAt(location.id).length + ' personajes</span></div></article>');
    } else if (activeView === "timeline") {
      heading = "Acontecimientos del universo";
      items = state.events.filter((item) => {
        const linkedLocations = (item.locationIds || []).map((id) => locationById(id)?.name || "").join(" ");
        const linkedCharacters = (item.characterIds || []).map((id) => characterById(id)?.name || "").join(" ");
        return matches([item.title, item.description, item.position, linkedLocations, linkedCharacters].join(" "), query);
      }).map((event) => '<article class="entity-card event-card' + (event.id === selectedEventId ? ' selected' : '') + '" data-event="' + escapeHTML(event.id) + '" tabindex="0" role="button" aria-pressed="' + String(event.id === selectedEventId) + '"><span class="avatar">◷</span><h3>' + escapeHTML(event.title) + '</h3><p>' + escapeHTML(event.description || "Descripción pendiente.") + '</p><div class="tag-row"><span class="tag">' + escapeHTML(event.position || "unknown") + '</span>' + (event.locationIds || []).map((id) => locationById(id)).filter(Boolean).map((loc) => '<span class="tag">' + escapeHTML(loc.name) + '</span>').join("") + '</div></article>');
    } else if (activeView === "organizations") {
      heading = "Organizaciones y facciones";
      items = (state.organizations || []).filter((item) => matches([
        item.name, item.organizationType, item.description, item.ideology, (item.goals || []).join(" "),
        (item.leaderCharacterIds || []).map((id) => characterById(id)?.name || "").join(" "),
        (item.memberCharacterIds || []).map((id) => characterById(id)?.name || "").join(" "),
        locationById(item.baseLocationId)?.name || ""
      ].join(" "), query)).map((organization) => {
        const base = locationById(organization.baseLocationId);
        return '<article class="entity-card organization-card' + (organization.id === selectedOrganizationId ? ' selected' : '') + '" data-organization="' + escapeHTML(organization.id) + '" tabindex="0" role="button" aria-pressed="' + String(organization.id === selectedOrganizationId) + '"><span class="avatar">⚑</span><h3>' + escapeHTML(organization.name) + '</h3><p>' + escapeHTML(organization.description || "Descripción pendiente.") + '</p><div class="tag-row"><span class="tag">' + escapeHTML(organization.organizationType || "Organización sin clasificar") + '</span><span class="tag">' + (organization.memberCharacterIds || []).length + ' miembros</span><span class="tag">' + escapeHTML(base ? base.name : "Sin sede") + '</span></div></article>';
      });
    } else if (activeView === "relationships") {
      heading = "Relaciones entre personajes";
      items = (state.relationships || []).filter((relationship) => {
        const source = characterById(relationship.sourceCharacterId);
        const target = characterById(relationship.targetCharacterId);
        return matches([relationship.name, relationship.relationshipType, relationship.description, source?.name, target?.name, relationship.status].join(" "), query);
      }).map((relationship) => {
        const source = characterById(relationship.sourceCharacterId);
        const target = characterById(relationship.targetCharacterId);
        return '<article class="entity-card relationship-card' + (relationship.id === selectedRelationshipId ? ' selected' : '') + '" data-relationship="' + escapeHTML(relationship.id) + '" tabindex="0" role="button" aria-pressed="' + String(relationship.id === selectedRelationshipId) + '"><span class="avatar">↔</span><h3>' + escapeHTML(relationship.name) + '</h3><p>' + escapeHTML((source ? source.name : "Personaje eliminado") + " ↔ " + (target ? target.name : "Personaje eliminado")) + '</p><div class="tag-row"><span class="tag">' + escapeHTML(relationshipTypeLabel(relationship.relationshipType)) + '</span><span class="tag">' + escapeHTML(relationship.status || "proposal") + '</span></div><p>' + escapeHTML(relationship.description || "Descripción pendiente.") + '</p></article>';
      });
    } else {
      heading = "Historias y novelas";
      items = state.stories.map((story) => '<article class="entity-card story-card' + (story.id === selectedStoryId ? ' selected' : '') + '" data-story="' + escapeHTML(story.id) + '" tabindex="0" role="button" aria-pressed="' + String(story.id === selectedStoryId) + '"><span class="avatar">▤</span><h3>' + escapeHTML(story.name) + '</h3><p>' + escapeHTML(story.description || "Sinopsis pendiente.") + '</p></article>');
      if (!items.length) items = ['<div class="empty-state">Todavía no hay novelas registradas. La próxima fase incorporará premisas, arcos, capítulos y escenas. Podés crear personajes y lugares mientras tanto.</div>'];
    }
    const selectedEvent = activeView === "timeline" ? state.events.find((event) => event.id === selectedEventId) : null;
    const selectedOrganization = activeView === "organizations" ? (state.organizations || []).find((item) => item.id === selectedOrganizationId) : null;
    const selectedRelationship = activeView === "relationships" ? (state.relationships || []).find((item) => item.id === selectedRelationshipId) : null;
    const selectedEventHTML = selectedEvent ? '<section id="selected-event-details" class="selected-event-card"><div class="event-detail-heading"><div><p class="eyebrow">ACONTECIMIENTO SELECCIONADO</p><h2>' + escapeHTML(selectedEvent.title) + '</h2></div><span class="tag">' + escapeHTML(selectedEvent.position || "unknown") + '</span></div><p>' + escapeHTML(selectedEvent.description || "Descripción pendiente.") + '</p><div class="tag-row">' + (selectedEvent.locationIds || []).map((id) => locationById(id)).filter(Boolean).map((location) => '<span class="tag">⌖ ' + escapeHTML(location.name) + '</span>').join("") + (selectedEvent.characterIds || []).map((id) => characterById(id)).filter(Boolean).map((character) => '<span class="tag">♙ ' + escapeHTML(character.name) + '</span>').join("") + '</div><div class="location-actions"><button type="button" id="edit-event-button" class="outline-button">Editar acontecimiento</button><button type="button" id="delete-event-button" class="outline-button danger-action">Eliminar acontecimiento</button></div></section>' : "";
    const selectedOrganizationHTML = selectedOrganization ? (() => {
      const leaders = (selectedOrganization.leaderCharacterIds || []).map(characterById).filter(Boolean);
      const members = (selectedOrganization.memberCharacterIds || []).map(characterById).filter(Boolean);
      const base = locationById(selectedOrganization.baseLocationId);
      return '<section id="selected-organization-details" class="selected-event-card"><div class="event-detail-heading"><div><p class="eyebrow">ORGANIZACIÓN SELECCIONADA</p><h2>' + escapeHTML(selectedOrganization.name) + '</h2></div><span class="tag">' + escapeHTML(selectedOrganization.status || "proposal") + '</span></div><p>' + escapeHTML(selectedOrganization.description || "Descripción pendiente.") + '</p><div class="detail-meta"><div><span>Tipo</span><strong>' + escapeHTML(selectedOrganization.organizationType || "Organización sin clasificar") + '</strong></div><div><span>Sede</span><strong>' + escapeHTML(base ? base.name : "Sin sede") + '</strong></div><div><span>Responsables</span><strong>' + escapeHTML(leaders.map((character) => character.name).join(", ") || "Sin asignar") + '</strong></div><div><span>Miembros</span><strong>' + escapeHTML(members.map((character) => character.name).join(", ") || "Sin miembros") + '</strong></div></div><div class="detail-divider"></div><span class="detail-type">IDEOLOGÍA</span><p>' + escapeHTML(selectedOrganization.ideology || "Sin definir") + '</p><div class="tag-row">' + (selectedOrganization.goals || []).map((goal) => '<span class="tag">' + escapeHTML(goal) + '</span>').join("") + '</div><div class="detail-divider"></div><span class="detail-type">HISTORIA</span><p>' + escapeHTML(selectedOrganization.history || "Sin historia registrada.") + '</p><div class="location-actions"><button type="button" id="edit-organization-button" class="outline-button">Editar organización</button><button type="button" id="delete-organization-button" class="outline-button danger-action">Eliminar organización</button></div></section>';
    })() : "";
    const selectedRelationshipHTML = selectedRelationship ? (() => {
      const source = characterById(selectedRelationship.sourceCharacterId);
      const target = characterById(selectedRelationship.targetCharacterId);
      return '<section id="selected-relationship-details" class="selected-event-card"><div class="event-detail-heading"><div><p class="eyebrow">RELACIÓN SELECCIONADA</p><h2>' + escapeHTML(selectedRelationship.name) + '</h2></div><span class="tag">' + escapeHTML(selectedRelationship.status || "proposal") + '</span></div><p>' + escapeHTML((source ? source.name : "Personaje eliminado") + " ↔ " + (target ? target.name : "Personaje eliminado")) + '</p><div class="detail-meta"><div><span>Personaje A</span><strong>' + escapeHTML(source ? source.name : "No disponible") + '</strong></div><div><span>Personaje B</span><strong>' + escapeHTML(target ? target.name : "No disponible") + '</strong></div><div><span>Tipo</span><strong>' + escapeHTML(relationshipTypeLabel(selectedRelationship.relationshipType)) + '</strong></div><div><span>Estado del canon</span><strong>' + escapeHTML(selectedRelationship.status || "proposal") + '</strong></div></div><div class="detail-divider"></div><p>' + escapeHTML(selectedRelationship.description || "Sin descripción registrada.") + '</p><div class="location-actions"><button type="button" id="edit-relationship-button" class="outline-button">Editar relación</button><button type="button" id="delete-relationship-button" class="outline-button danger-action">Eliminar relación</button></div></section>';
    })() : "";
    container.innerHTML = '<div class="directory-heading"><h2>' + heading + '</h2><span class="tag">' + items.length + ' resultados</span></div>' + selectedEventHTML + selectedOrganizationHTML + selectedRelationshipHTML + '<div class="entity-grid">' + (items.length ? items.join("") : '<div class="empty-state">No hay resultados para esta búsqueda.</div>') + '</div>';
    if (selectedEvent) {
      $("#edit-event-button").addEventListener("click", () => editEvent(selectedEvent.id));
      $("#delete-event-button").addEventListener("click", () => deleteEvent(selectedEvent.id));
    }
    if (selectedOrganization) {
      $("#edit-organization-button").addEventListener("click", () => editOrganization(selectedOrganization.id));
      $("#delete-organization-button").addEventListener("click", () => deleteOrganization(selectedOrganization.id));
    }
    if (selectedRelationship) {
      $("#edit-relationship-button").addEventListener("click", () => editRelationship(selectedRelationship.id));
      $("#delete-relationship-button").addEventListener("click", () => deleteRelationship(selectedRelationship.id));
    }
  }

  function matches(value, query) { return !query || String(value).toLowerCase().includes(query); }

  function openCharacter(id) {
    const character = characterById(id);
    if (!character) return;
    selectedCharacterId = id;
    const place = characterLocationAt(character, currentTime());
    const personality = (character.personality || []).map((tag) => '<span class="tag">' + escapeHTML(tag) + '</span>').join("");
    const history = (character.locationHistory || []).map((entry) => {
      const loc = locationById(entry.locationId);
      return escapeHTML(loc ? loc.name : "Lugar eliminado") + " · " + escapeHTML(entry.from) + " → " + escapeHTML(entry.to);
    }).join("<br>");
    $("#details-panel").innerHTML = '<div class="detail-cover"></div><span class="detail-type">' + escapeHTML(character.species || "Especie sin definir") + ' · ' + escapeHTML(character.status || "unknown") + '</span><h2>' + escapeHTML(character.name) + '</h2><p>' + escapeHTML(character.description) + '</p><div class="location-actions"><button type="button" id="edit-character-button" class="outline-button">Editar personaje</button><button type="button" id="delete-character-button" class="outline-button danger-action">Eliminar personaje</button></div><div class="tag-row">' + personality + '</div><div class="detail-divider"></div><div class="detail-meta"><div><span>Edad</span><strong>' + escapeHTML(character.age == null ? "Sin definir" : String(character.age) + " años") + '</strong></div><div><span>Rol</span><strong>' + escapeHTML(character.role || "Sin definir") + '</strong></div><div><span>Ubicación en este momento</span><strong>' + escapeHTML(place ? place.name : "Desconocida") + '</strong></div><div><span>Estado del canon</span><strong>' + escapeHTML(character.status || "unknown") + '</strong></div></div><div class="detail-divider"></div><span class="detail-type">MOTIVACIÓN</span><p>' + escapeHTML(character.motivation || "Sin definir") + '</p><div class="detail-divider"></div><span class="detail-type">DEFECTO PRINCIPAL</span><p>' + escapeHTML(character.flaw || "Sin definir") + '</p><div class="detail-divider"></div><span class="detail-type">HISTORIAL DE UBICACIONES</span><p>' + (history || "Sin historial registrado.") + '</p><button id="back-to-location" class="text-link">← Volver a su ubicación</button>';
    $("#edit-character-button").addEventListener("click", () => editCharacter(character.id));
    $("#delete-character-button").addEventListener("click", () => deleteCharacter(character.id));
    $("#related-title").textContent = "Relaciones registradas";
    const relations = (character.relationships || []).map(characterById).filter(Boolean);
    $("#related-list").innerHTML = relations.length ? relations.map((related) => '<div class="related-person" data-character="' + escapeHTML(related.id) + '" role="button" tabindex="0"><span class="avatar">' + escapeHTML(initials(related.name)) + '</span><div><strong>' + escapeHTML(related.name) + '</strong><small>' + escapeHTML(related.role || "Sin definir") + '</small></div><span class="arrow">↗</span></div>').join("") : '<div class="empty-state">Todavía no hay relaciones registradas para este personaje.</div>';
    $("#back-to-location").addEventListener("click", () => { selectedCharacterId = null; renderDetails(); });
  }

  function showLocation(id) {
    if (!locationById(id)) return;
    selectedLocationId = id;
    selectedCharacterId = null;
    if (activeView !== "atlas") activeView = "atlas";
    render();
  }

  function navigate(view) {
    if (!titles[view]) return;
    activeView = view;
    render();
  }

  function selectedValues(selector) {
    return Array.from($(selector).selectedOptions).map((option) => option.value).filter(Boolean);
  }

  function populateEventReferenceOptions(locationIds = [], characterIds = []) {
    const selectedLocations = new Set(locationIds);
    const selectedCharacters = new Set(characterIds);
    $("#event-locations").innerHTML = state.locations.map((location) => '<option value="' + escapeHTML(location.id) + '">' + escapeHTML(location.name) + '</option>').join("");
    $("#event-characters").innerHTML = state.characters.map((character) => '<option value="' + escapeHTML(character.id) + '">' + escapeHTML(character.name) + '</option>').join("");
    Array.from($("#event-locations").options).forEach((option) => { option.selected = selectedLocations.has(option.value); });
    Array.from($("#event-characters").options).forEach((option) => { option.selected = selectedCharacters.has(option.value); });
  }

  function populateOrganizationReferenceOptions(leaderIds = [], memberIds = [], baseLocationId = null) {
    const leaders = new Set(leaderIds);
    const members = new Set(memberIds);
    $("#organization-leaders").innerHTML = state.characters.map((character) => '<option value="' + escapeHTML(character.id) + '">' + escapeHTML(character.name) + '</option>').join("");
    $("#organization-members").innerHTML = state.characters.map((character) => '<option value="' + escapeHTML(character.id) + '">' + escapeHTML(character.name) + '</option>').join("");
    $("#organization-base-location").innerHTML = '<option value="">Sin sede asignada</option>' + state.locations.map((location) => '<option value="' + escapeHTML(location.id) + '">' + escapeHTML(location.name) + '</option>').join("");
    Array.from($("#organization-leaders").options).forEach((option) => { option.selected = leaders.has(option.value); });
    Array.from($("#organization-members").options).forEach((option) => { option.selected = members.has(option.value); });
    $("#organization-base-location").value = baseLocationId || "";
  }

  function populateRelationshipReferenceOptions(sourceCharacterId = "", targetCharacterId = "") {
    const options = '<option value="">Elegí personaje…</option>' + state.characters.map((character) => '<option value="' + escapeHTML(character.id) + '">' + escapeHTML(character.name) + '</option>').join("");
    $("#relationship-source").innerHTML = options;
    $("#relationship-target").innerHTML = options;
    $("#relationship-source").value = sourceCharacterId || "";
    $("#relationship-target").value = targetCharacterId || "";
  }

  function syncRelationshipProjection() {
    ensureRelationshipStore(state);
  }

  function relationshipTypeLabel(type) {
    return ({
      friendship: "Amistad", romance: "Romance", family: "Familiar",
      rivalry: "Rivalidad", mentorship: "Mentoría", alliance: "Alianza",
      enemy: "Enemistad", other: "Otro"
    })[type] || type || "Otro";
  }

  function getRelationshipFormData(excludeId = null) {
    const sourceCharacterId = $("#relationship-source").value;
    const targetCharacterId = $("#relationship-target").value;
    const relationshipType = $("#relationship-type").value || "other";
    if (!sourceCharacterId || !targetCharacterId) {
      alert("Elegí los dos personajes que forman la relación.");
      return null;
    }
    if (sourceCharacterId === targetCharacterId) {
      alert("Una relación debe conectar dos personajes distintos.");
      return null;
    }
    const [firstId, secondId] = [sourceCharacterId, targetCharacterId].sort();
    const duplicate = (state.relationships || []).find((relationship) => {
      if (relationship.id === excludeId) return false;
      const [existingFirst, existingSecond] = [relationship.sourceCharacterId, relationship.targetCharacterId].sort();
      return existingFirst === firstId && existingSecond === secondId &&
        String(relationship.relationshipType || "other").toLowerCase() === relationshipType.toLowerCase();
    });
    if (duplicate) {
      alert("Ya existe una relación de tipo «" + relationshipTypeLabel(relationshipType) + "» entre esos personajes. Editá la existente o elegí otro tipo.");
      return null;
    }
    return {
      name: $("#entity-name").value.trim(),
      sourceCharacterId, targetCharacterId, relationshipType,
      description: $("#relationship-description").value.trim(),
      status: $("#relationship-status").value || "proposal"
    };
  }

  function syncEventLocationReferences(event) {
    const selectedLocations = new Set(Array.isArray(event.locationIds) ? event.locationIds : []);
    state.locations.forEach((location) => {
      const existing = Array.isArray(location.events) ? location.events : [];
      const next = existing.filter((eventId) => eventId !== event.id);
      if (selectedLocations.has(location.id)) next.push(event.id);
      location.events = Array.from(new Set(next));
    });
  }

  function updateEntityFieldVisibility() {
    const type = $("#entity-type").value;
    $("#location-type-field").classList.toggle("hidden", type !== "location");
    $("#character-fields").classList.toggle("hidden", type !== "character");
    $("#event-fields").classList.toggle("hidden", type !== "event");
    $("#organization-fields").classList.toggle("hidden", type !== "organization");
    $("#relationship-fields").classList.toggle("hidden", type !== "relationship");
    $("#entity-description-field").classList.toggle("hidden", type === "relationship");
    $("#entity-name-label").textContent = type === "event" ? "Título del acontecimiento" : type === "location" ? "Nombre del lugar" : type === "organization" ? "Nombre de la organización" : type === "relationship" ? "Etiqueta breve de la relación" : "Nombre del personaje";
    $("#entity-name").placeholder = type === "event" ? "Título del acontecimiento" : type === "organization" ? "Nombre del grupo" : type === "relationship" ? "Ej. Confianza recuperada" : "Nombre de la entidad";
    if (type === "event") populateEventReferenceOptions(selectedValues("#event-locations"), selectedValues("#event-characters"));
    if (type === "organization") populateOrganizationReferenceOptions(selectedValues("#organization-leaders"), selectedValues("#organization-members"), $("#organization-base-location").value);
    if (type === "relationship") populateRelationshipReferenceOptions($("#relationship-source").value, $("#relationship-target").value);
  }

  function addEntity() {
    const form = $("#entity-form");
    form.dataset.editing = "";
    form.dataset.editingType = "";
    $("#entity-type").disabled = false;
    $("#entity-type").value = activeView === "timeline" ? "event" : activeView === "places" ? "location" : activeView === "organizations" ? "organization" : activeView === "relationships" ? "relationship" : "character";
    $("#dialog-title").textContent = "Crear entidad";
    $("#entity-name").value = "";
    $("#entity-description").value = "";
    $("#location-type").value = "Lugar sin clasificar";
    $("#character-species").value = "Sin definir";
    $("#character-age").value = "";
    $("#character-role").value = "Sin definir";
    $("#character-personality").value = "";
    $("#character-motivation").value = "";
    $("#character-flaw").value = "";
    $("#character-status").value = "proposal";
    $("#event-position").value = "unknown";
    $("#event-locations").innerHTML = "";
    $("#event-characters").innerHTML = "";
    $("#organization-type").value = "Gremio";
    $("#organization-ideology").value = "";
    $("#organization-goals").value = "";
    $("#organization-history").value = "";
    $("#organization-status").value = "proposal";
    $("#organization-leaders").innerHTML = "";
    $("#organization-members").innerHTML = "";
    $("#organization-base-location").innerHTML = "";
    $("#relationship-description").value = "";
    $("#relationship-type").value = "friendship";
    $("#relationship-status").value = "proposal";
    $("#relationship-source").innerHTML = "";
    $("#relationship-target").innerHTML = "";
    updateEntityFieldVisibility();
    populateEventReferenceOptions([], []);
    populateOrganizationReferenceOptions([], [], null);
    populateRelationshipReferenceOptions("", "");
    $("#entity-form button[type=\"submit\"]").textContent = "Guardar propuesta";
    $("#entity-dialog").showModal();
  }

  function editLocation(id) {
    const location = locationById(id);
    if (!location) return;
    $("#entity-form").dataset.editing = id;
    $("#entity-form").dataset.editingType = "location";
    $("#entity-type").value = "location";
    $("#entity-type").disabled = true;
    $("#dialog-title").textContent = "Editar ubicación";
    $("#entity-name").value = location.name;
    $("#entity-description").value = location.description || "";
    $("#location-type").value = location.type || "Lugar sin clasificar";
    $("#entity-form button[type=\"submit\"]").textContent = "Guardar cambios";
    updateEntityFieldVisibility();
    $("#entity-dialog").showModal();
  }

  function editCharacter(id) {
    const character = characterById(id);
    if (!character) return;
    const form = $("#entity-form");
    form.dataset.editing = id;
    form.dataset.editingType = "character";
    $("#entity-type").value = "character";
    $("#entity-type").disabled = true;
    $("#dialog-title").textContent = "Editar personaje";
    $("#entity-name").value = character.name || "";
    $("#entity-description").value = character.description || "";
    $("#character-species").value = character.species || "Sin definir";
    $("#character-age").value = character.age == null ? "" : String(character.age);
    $("#character-role").value = character.role || "Sin definir";
    $("#character-personality").value = (character.personality || []).join(", ");
    $("#character-motivation").value = character.motivation || "";
    $("#character-flaw").value = character.flaw || "";
    $("#character-status").value = character.status || "proposal";
    $("#entity-form button[type=\"submit\"]").textContent = "Guardar cambios";
    updateEntityFieldVisibility();
    $("#entity-dialog").showModal();
  }

  async function snapshotBeforeDestructiveAction(reason) {
    if (!projectRepository || typeof projectRepository.createSnapshot !== "function") {
      alert("No se puede eliminar todavía: el sistema de respaldos no está disponible.");
      return false;
    }
    try {
      const snapshot = await projectRepository.createSnapshot(structuredClone(state), { reason });
      if (!snapshot || !snapshot.valid) throw new Error("El respaldo no pasó la verificación.");
      return true;
    } catch (error) {
      alert("La eliminación se canceló para proteger el universo. No se pudo crear un respaldo verificado: " +
        error.message + " Revisá el almacenamiento o eliminá una copia antigua si se alcanzó el límite.");
      return false;
    }
  }

  async function deleteCharacter(id) {
    const character = characterById(id);
    if (!character) return;
    const relationCount = state.characters.reduce((count, item) => count + (item.id === id ? 0 : (item.relationships || []).filter((relatedId) => relatedId === id).length), 0);
    const locationCount = state.locations.reduce((count, item) => count + (item.characters || []).filter((characterId) => characterId === id).length, 0);
    const eventCount = state.events.reduce((count, item) => count + (item.characterIds || []).filter((characterId) => characterId === id).length, 0);
    const summary = [
      "Se eliminará el personaje \"" + character.name + "\".",
      relationCount ? relationCount + " relación(es) de otros personajes dejarán de apuntar a esta ficha." : "",
      locationCount ? locationCount + " referencia(s) en lugares se eliminarán." : "",
      eventCount ? eventCount + " referencia(s) en acontecimientos se eliminarán." : "",
      "Las demás entidades y referencias se conservarán. Se creará una copia recuperable antes de borrar; si falla el respaldo, se cancelará la operación."
    ].filter(Boolean).join("\n");
    if (!confirm(summary)) return;
    if (!(await snapshotBeforeDestructiveAction("before-delete-character"))) return;
    state.characters = state.characters.filter((item) => item.id !== id);
    state.characters.forEach((item) => { item.relationships = (item.relationships || []).filter((relatedId) => relatedId !== id); });
    state.locations.forEach((item) => { item.characters = (item.characters || []).filter((characterId) => characterId !== id); });
    state.events.forEach((item) => { item.characterIds = (item.characterIds || []).filter((characterId) => characterId !== id); });
    state.relationships = (state.relationships || []).filter((relationship) =>
      relationship.sourceCharacterId !== id && relationship.targetCharacterId !== id);
    syncRelationshipProjection();
    selectedCharacterId = null;
    selectedLocationId = locationById(selectedLocationId)?.id || state.locations[0]?.id || null;
    activeView = "atlas";
    saveProject();
    render();
  }

  function editEvent(id) {
    const event = state.events.find((item) => item.id === id);
    if (!event) return;
    const form = $("#entity-form");
    form.dataset.editing = id;
    form.dataset.editingType = "event";
    $("#entity-type").value = "event";
    $("#entity-type").disabled = true;
    $("#dialog-title").textContent = "Editar acontecimiento";
    $("#entity-name").value = event.title || "";
    $("#entity-description").value = event.description || "";
    $("#event-position").value = event.position || "unknown";
    populateEventReferenceOptions(event.locationIds || [], event.characterIds || []);
    updateEntityFieldVisibility();
    $("#entity-form button[type=\"submit\"]").textContent = "Guardar cambios";
    $("#entity-dialog").showModal();
  }

  function editOrganization(id) {
    const organization = (state.organizations || []).find((item) => item.id === id);
    if (!organization) return;
    const form = $("#entity-form");
    form.dataset.editing = id;
    form.dataset.editingType = "organization";
    $("#entity-type").value = "organization";
    $("#entity-type").disabled = true;
    $("#dialog-title").textContent = "Editar organización";
    $("#entity-name").value = organization.name || "";
    $("#entity-description").value = organization.description || "";
    $("#organization-type").value = organization.organizationType || "Organización sin clasificar";
    $("#organization-ideology").value = organization.ideology || "";
    $("#organization-goals").value = (organization.goals || []).join(", ");
    $("#organization-history").value = organization.history || "";
    $("#organization-status").value = organization.status || "proposal";
    populateOrganizationReferenceOptions(organization.leaderCharacterIds || [], organization.memberCharacterIds || [], organization.baseLocationId || null);
    updateEntityFieldVisibility();
    $("#entity-form button[type=\"submit\"]").textContent = "Guardar cambios";
    $("#entity-dialog").showModal();
  }

  async function deleteOrganization(id) {
    const organization = (state.organizations || []).find((item) => item.id === id);
    if (!organization) return;
    const leaderCount = (organization.leaderCharacterIds || []).length;
    const memberCount = (organization.memberCharacterIds || []).length;
    const base = locationById(organization.baseLocationId);
    const summary = [
      "Se eliminará la organización \"" + organization.name + "\".",
      leaderCount ? leaderCount + " responsable(s) dejarán de figurar en esta organización." : "",
      memberCount ? memberCount + " vínculo(s) de membresía dejarán de figurar en esta organización." : "",
      base ? "La sede " + base.name + " seguirá existiendo." : "",
      "No se borrará ningún personaje ni lugar. Se creará una copia recuperable antes de borrar; si falla el respaldo, se cancelará la operación."
    ].filter(Boolean).join("\n");
    if (!confirm(summary)) return;
    if (!(await snapshotBeforeDestructiveAction("before-delete-organization"))) return;
    state.organizations = (state.organizations || []).filter((item) => item.id !== id);
    selectedOrganizationId = null;
    activeView = "organizations";
    saveProject();
    render();
  }

  function editRelationship(id) {
    const relationship = (state.relationships || []).find((item) => item.id === id);
    if (!relationship) return;
    const form = $("#entity-form");
    form.dataset.editing = id;
    form.dataset.editingType = "relationship";
    $("#entity-type").value = "relationship";
    $("#entity-type").disabled = true;
    $("#dialog-title").textContent = "Editar relación";
    $("#entity-name").value = relationship.name || "";
    $("#relationship-description").value = relationship.description || "";
    $("#relationship-type").value = relationship.relationshipType || "other";
    $("#relationship-status").value = relationship.status || "proposal";
    populateRelationshipReferenceOptions(relationship.sourceCharacterId, relationship.targetCharacterId);
    updateEntityFieldVisibility();
    $("#entity-form button[type=\"submit\"]").textContent = "Guardar cambios";
    $("#entity-dialog").showModal();
  }

  async function deleteRelationship(id) {
    const relationship = (state.relationships || []).find((item) => item.id === id);
    if (!relationship) return;
    const source = characterById(relationship.sourceCharacterId);
    const target = characterById(relationship.targetCharacterId);
    if (!confirm("Se eliminará la relación «" + relationship.name + "» entre " +
      (source ? source.name : "un personaje") + " y " + (target ? target.name : "otro personaje") +
      ". Los dos personajes se conservarán. Se guardará una copia recuperable antes de borrar.")) return;
    if (!(await snapshotBeforeDestructiveAction("before-delete-relationship"))) return;
    state.relationships = state.relationships.filter((item) => item.id !== id);
    syncRelationshipProjection();
    selectedRelationshipId = null;
    selectedStoryId = null;
    activeView = "relationships";
    saveProject();
    render();
  }

  async function deleteEvent(id) {
    const event = state.events.find((item) => item.id === id);
    if (!event) return;
    const locationCount = state.locations.filter((location) => (location.events || []).includes(id) || (event.locationIds || []).includes(location.id)).length;
    const summary = [
      "Se eliminará el acontecimiento \"" + event.title + "\".",
      locationCount ? locationCount + " referencia(s) de lugar dejarán de enlazar este acontecimiento." : "",
      "Los personajes, ubicaciones y demás acontecimientos se conservarán. Se creará una copia recuperable antes de borrar; si falla el respaldo, se cancelará la operación."
    ].filter(Boolean).join("\n");
    if (!confirm(summary)) return;
    if (!(await snapshotBeforeDestructiveAction("before-delete-event"))) return;
    state.events = state.events.filter((item) => item.id !== id);
    state.locations.forEach((location) => { location.events = (location.events || []).filter((eventId) => eventId !== id); });
    selectedEventId = null;
    activeView = "timeline";
    saveProject();
    render();
  }

  async function deleteLocation(id) {
    const location = locationById(id);
    if (!location) return;
    const children = state.locations.filter((item) => item.parentId === id);
    const historyCount = state.characters.reduce((count, character) => count + (character.locationHistory || []).filter((entry) => entry.locationId === id).length, 0);
    const eventCount = state.events.filter((item) => (item.locationIds || []).includes(id)).length;
    const summary = [
      "Se eliminará \"" + location.name + "\".",
      children.length ? children.length + " ubicación(es) hija(s) pasarán a su ubicación padre." : "",
      historyCount ? historyCount + " entrada(s) de historial de personajes perderán esta ubicación." : "",
      eventCount ? eventCount + " acontecimiento(s) conservarán sus datos, pero dejarán de enlazar este lugar." : "",
      "Se creará una copia recuperable antes de borrar; si falla el respaldo, se cancelará la operación."
    ].filter(Boolean).join("\n");
    if (!confirm(summary)) return;
    if (!(await snapshotBeforeDestructiveAction("before-delete-location"))) return;
    const fallbackParentId = location.parentId && location.parentId !== id && locationById(location.parentId) ? location.parentId : null;
    const nextSelectionId = children[0]?.id || state.locations.find((item) => item.id !== id)?.id || null;
    state.locations = state.locations.filter((item) => item.id !== id);
    state.locations.forEach((item) => { if (item.parentId === id) item.parentId = fallbackParentId; });
    state.characters.forEach((character) => { character.locationHistory = (character.locationHistory || []).filter((entry) => entry.locationId !== id); });
    state.events.forEach((item) => { item.locationIds = (item.locationIds || []).filter((locationId) => locationId !== id); });
    selectedLocationId = nextSelectionId;
    selectedCharacterId = null;
    activeView = "atlas";
    saveProject();
    render();
  }

  function handleEntitySubmit(event) {
    event.preventDefault();
    const form = $("#entity-form");
    const editingId = form.dataset.editing;
    const editingType = form.dataset.editingType;
    const type = $("#entity-type").value;
    const name = $("#entity-name").value.trim();
    const description = $("#entity-description").value.trim();
    const locationType = $("#location-type").value.trim();
    if (!name) return;

    if (editingId && editingType === "location") {
      const location = locationById(editingId);
      if (!location) { alert("No se encontró la ubicación que se intentaba editar."); return; }
      location.name = name;
      location.type = locationType || "Lugar sin clasificar";
      location.description = description || "Descripción pendiente.";
      selectedLocationId = location.id;
      selectedCharacterId = null;
      activeView = "atlas";
      saveProject();
      $("#entity-dialog").close();
      render();
      return;
    }

    if (editingId && editingType === "character") {
      const character = characterById(editingId);
      if (!character) { alert("No se encontró el personaje que se intentaba editar."); return; }
      const ageRaw = $("#character-age").value.trim();
      const age = ageRaw === "" ? null : Number(ageRaw);
      character.name = name;
      character.description = description || "Descripción pendiente.";
      character.species = $("#character-species").value.trim() || "Sin definir";
      character.age = Number.isFinite(age) && age >= 0 ? age : null;
      character.role = $("#character-role").value.trim() || "Sin definir";
      character.personality = $("#character-personality").value.split(",").map((tag) => tag.trim()).filter(Boolean);
      character.motivation = $("#character-motivation").value.trim();
      character.flaw = $("#character-flaw").value.trim();
      character.status = $("#character-status").value;
      activeView = "atlas";
      saveProject();
      $("#entity-dialog").close();
      render();
      openCharacter(character.id);
      return;
    }

    if (editingId && editingType === "event") {
      const event = state.events.find((item) => item.id === editingId);
      if (!event) { alert("No se encontró el acontecimiento que se intentaba editar."); return; }
      event.title = name;
      event.description = description || "Descripción pendiente.";
      event.position = $("#event-position").value.trim() || "unknown";
      event.locationIds = selectedValues("#event-locations");
      event.characterIds = selectedValues("#event-characters");
      syncEventLocationReferences(event);
      selectedEventId = event.id;
      activeView = "timeline";
      saveProject();
      $("#entity-dialog").close();
      render();
      return;
    }

    if (editingId && editingType === "organization") {
      const organization = (state.organizations || []).find((item) => item.id === editingId);
      if (!organization) { alert("No se encontró la organización que se intentaba editar."); return; }
      organization.name = name;
      organization.description = description || "Descripción pendiente.";
      organization.organizationType = $("#organization-type").value.trim() || "Organización sin clasificar";
      organization.ideology = $("#organization-ideology").value.trim();
      organization.goals = $("#organization-goals").value.split(",").map((goal) => goal.trim()).filter(Boolean);
      organization.leaderCharacterIds = selectedValues("#organization-leaders");
      organization.memberCharacterIds = selectedValues("#organization-members");
      organization.baseLocationId = $("#organization-base-location").value || null;
      organization.history = $("#organization-history").value.trim();
      organization.status = $("#organization-status").value || "proposal";
      selectedOrganizationId = organization.id;
      activeView = "organizations";
      saveProject();
      $("#entity-dialog").close();
      render();
      return;
    }

    const relationshipData = type === "relationship" ? getRelationshipFormData(editingId || null) : null;
    if (type === "relationship" && !relationshipData) return;

    if (editingId && editingType === "relationship") {
      const relationship = (state.relationships || []).find((item) => item.id === editingId);
      if (!relationship) { alert("No se encontró la relación que se intentaba editar."); return; }
      relationship.name = name;
      relationship.sourceCharacterId = relationshipData.sourceCharacterId;
      relationship.targetCharacterId = relationshipData.targetCharacterId;
      relationship.relationshipType = relationshipData.relationshipType;
      relationship.description = relationshipData.description;
      relationship.status = relationshipData.status;
      syncRelationshipProjection();
      selectedRelationshipId = relationship.id;
      activeView = "relationships";
      saveProject();
      $("#entity-dialog").close();
      render();
      return;
    }

    const id = "local-" + type + "-" + Date.now().toString(36);
    if (type === "character") {
      const ageRaw = $("#character-age").value.trim();
      const age = ageRaw === "" ? null : Number(ageRaw);
      state.characters.push({
        id, name, age: Number.isFinite(age) && age >= 0 ? age : null,
        species: $("#character-species").value.trim() || "Sin definir",
        role: $("#character-role").value.trim() || "Sin definir",
        personality: $("#character-personality").value.split(",").map((tag) => tag.trim()).filter(Boolean),
        description: description || "Descripción pendiente.",
        motivation: $("#character-motivation").value.trim(),
        flaw: $("#character-flaw").value.trim(),
        locationHistory: [], relationships: [], status: $("#character-status").value || "proposal"
      });
      activeView = "characters";
    } else if (type === "event") {
      const newEvent = {
        id,
        title: name,
        position: $("#event-position").value.trim() || "unknown",
        description: description || "Descripción pendiente.",
        locationIds: selectedValues("#event-locations"),
        characterIds: selectedValues("#event-characters")
      };
      state.events.push(newEvent);
      syncEventLocationReferences(newEvent);
      selectedEventId = id;
      activeView = "timeline";
    } else if (type === "organization") {
      const organization = {
        id, name, description: description || "Descripción pendiente.",
        organizationType: $("#organization-type").value.trim() || "Organización sin clasificar",
        ideology: $("#organization-ideology").value.trim(),
        goals: $("#organization-goals").value.split(",").map((goal) => goal.trim()).filter(Boolean),
        leaderCharacterIds: selectedValues("#organization-leaders"),
        memberCharacterIds: selectedValues("#organization-members"),
        baseLocationId: $("#organization-base-location").value || null,
        history: $("#organization-history").value.trim(),
        status: $("#organization-status").value || "proposal"
      };
      state.organizations = state.organizations || [];
      state.organizations.push(organization);
      selectedOrganizationId = id;
      activeView = "organizations";
    } else if (type === "relationship") {
      state.relationships = state.relationships || [];
      state.relationships.push({ id, ...relationshipData, name });
      syncRelationshipProjection();
      selectedRelationshipId = id;
      activeView = "relationships";
    } else {
      state.locations.push({ id, name, type: locationType || "Lugar sin clasificar", parentId: null, description: description || "Descripción pendiente.", tags: ["Propuesta"], population: "Sin datos", government: "Sin datos", climate: "Sin datos", marker: [120 + Math.random() * 620, 90 + Math.random() * 390], characters: [], events: [] });
      activeView = "places";
    }
    saveProject();
    $("#entity-dialog").close();
    render();
  }

  function exportProject() {
    const blob = new Blob([JSON.stringify(state, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.download = (state.project.name.toLowerCase().replace(/[^a-z0-9]+/g, "-") || "wordwaifu-project") + ".json";
    anchor.click();
    URL.revokeObjectURL(url);
    $("#save-status").textContent = "Proyecto exportado";
  }

  async function importProject(file) {
    if (!file) return;
    const appShell = document.querySelector(".app-shell");
    const shellWasInert = Boolean(appShell && appShell.inert);
    if (appShell) appShell.inert = true;
    try {
      if (file.size > 10 * 1024 * 1024) throw new Error("El archivo supera el límite de 10 MB.");
      const parsed = JSON.parse(await file.text());
      const schema = window.WordWaifuProjectSchema;
      if (!schema || typeof schema.validateAndNormalizeProject !== "function") {
        throw new Error("No está disponible el validador de proyectos. Recargá la aplicación e intentá de nuevo.");
      }
      const validation = schema.validateAndNormalizeProject(parsed);
      if (!validation.valid) {
        const details = validation.errors.slice(0, 6).join("\\n");
        const remainder = validation.errors.length > 6 ? "\\n… y " + (validation.errors.length - 6) + " problema(s) más." : "";
        throw new Error("El proyecto no supera la validación:\\n" + details + remainder);
      }

      // Queue after pending edits; never switch active state before the candidate is saved.
      const candidate = ensureRelationshipStore({
        ...validation.project,
        organizations: Array.isArray(validation.project.organizations) ? validation.project.organizations : [],
        relationships: Array.isArray(validation.project.relationships) ? validation.project.relationships : undefined
      });
      const operationSequence = ++persistenceSequence;
      const saveReport = await enqueueRepositoryOperation(async () => {
        if (!projectRepository) throw new Error("El repositorio de proyectos no está disponible.");
        const previousProject = structuredClone(state);
        if (!previousProject || !previousProject.project || typeof previousProject.project.id !== "string") {
          throw new Error("No se pudo identificar el proyecto anterior para respaldarlo antes de importar.");
        }
        // Flush the exact active content, then create and verify a versioned snapshot before replacing it.
        await projectRepository.write(previousProject);
        const preImportSnapshot = await projectRepository.createSnapshot(previousProject, { reason: "before-import" });
        const persisted = await projectRepository.saveActive(candidate);
        return { ...persisted, preImportSnapshotId: preImportSnapshot.snapshotId };
      });
      state = candidate;
      selectedLocationId = state.locations[0]?.id || null;
      selectedCharacterId = null;
      selectedEventId = null;
      selectedOrganizationId = null;
      selectedRelationshipId = null;
    selectedStoryId = null;
      activeView = "atlas";
      render();
      $("#save-status").textContent = saveReport.warning
        ? "Proyecto importado · " + saveReport.warning
        : saveReport.backend === "indexeddb"
          ? "Proyecto importado y guardado en IndexedDB"
          : "Proyecto importado en el respaldo local";
      if (operationSequence === persistenceSequence) $("#project-name").textContent = state.project.name;
      alert("Proyecto importado correctamente.");
    } catch (error) {
      alert("No se pudo importar: " + error.message);
    } finally {
      $("#import-file").value = "";
      if (appShell) appShell.inert = shellWasInert;
    }
  }

  function executeCommand(raw) {
    const command = raw.trim();
    const lower = command.toLowerCase();
    const log = $("#command-log");
    if (!command) return;
    log.insertAdjacentHTML("beforeend", '<div class="user-command">' + escapeHTML(command) + '</div>');
    let response = "";
    if (lower === "ayuda" || lower === "help") {
      response = "Comandos disponibles: listar personajes, listar lugares, buscar personaje NOMBRE, buscar lugar NOMBRE, mostrar personaje NOMBRE, mostrar lugar NOMBRE, validar continuidad y exportar proyecto.";
    } else if (lower.includes("listar personajes")) {
      response = state.characters.map((character) => "• " + character.name + " · " + character.role + " · " + (characterLocationAt(character, currentTime())?.name || "ubicación desconocida")).join("<br>") || "No hay personajes.";
    } else if (lower.includes("listar lugares")) {
      response = state.locations.map((location) => "• " + location.name + " · " + location.type).join("<br>") || "No hay lugares.";
    } else if (lower.includes("validar continuidad")) {
      const issues = [];
      const knownLocationIds = new Set(state.locations.map((location) => location.id));
      for (const character of state.characters) {
        for (const entry of character.locationHistory || []) if (!knownLocationIds.has(entry.locationId)) issues.push(character.name + ": referencia a un lugar inexistente (" + entry.locationId + ").");
      }
      response = issues.length ? "Hallazgos:<br>" + issues.map(escapeHTML).join("<br>") : "No se encontraron referencias rotas en las ubicaciones registradas. Esto es una validación estructural básica, no una auditoría literaria completa.";
    } else if (lower.startsWith("buscar personaje ") || lower.startsWith("mostrar personaje ")) {
      const query = command.slice(command.indexOf(" ") + 1).replace(/^(personaje)\s+/i, "").trim().toLowerCase();
      const character = state.characters.find((item) => item.name.toLowerCase().includes(query));
      response = character ? escapeHTML(character.name + " · " + character.role + " · " + character.species + " · " + character.age + " años. " + character.description) : "No encontré ese personaje. Probá con otro nombre o «listar personajes».";
      if (character) { log.insertAdjacentHTML("beforeend", '<div class="command-result">' + response + '</div>'); log.scrollTop = log.scrollHeight; openCharacter(character.id); return; }
    } else if (lower.startsWith("buscar lugar ") || lower.startsWith("mostrar lugar ")) {
      const query = command.slice(command.indexOf(" ") + 1).replace(/^(lugar)\s+/i, "").trim().toLowerCase();
      const location = state.locations.find((item) => item.name.toLowerCase().includes(query));
      response = location ? escapeHTML(location.name + " · " + location.type + ". " + location.description) : "No encontré ese lugar. Probá con otro nombre o «listar lugares».";
      if (location) { log.insertAdjacentHTML("beforeend", '<div class="command-result">' + response + '</div>'); log.scrollTop = log.scrollHeight; showLocation(location.id); return; }
    } else if (lower === "exportar proyecto") {
      exportProject(); response = "Se solicitó la exportación del proyecto JSON.";
    } else {
      response = "No reconozco esa orden. Escribí «ayuda» para ver los comandos disponibles. Este asistente funciona con comandos definidos, no con comprensión libre de IA.";
    }
    log.insertAdjacentHTML("beforeend", '<div class="command-result">' + response + '</div>');
    log.scrollTop = log.scrollHeight;
  }

  $$(".nav-item").forEach((button) => button.addEventListener("click", () => navigate(button.dataset.view)));
  $$(".map-marker").forEach((marker) => {
    const activate = () => showLocation(marker.dataset.location);
    marker.addEventListener("click", activate);
    marker.addEventListener("keydown", (event) => { if (event.key === "Enter" || event.key === " ") { event.preventDefault(); activate(); } });
  });
  $$(".view-tab").forEach((button) => button.addEventListener("click", () => {
    mapMode = button.dataset.mapMode;
    $$(".view-tab").forEach((tab) => tab.classList.toggle("active", tab === button));
    renderMap();
  }));
  $("#time-select").addEventListener("change", () => { selectedCharacterId = null; render(); });
  $("#layers-button").addEventListener("click", () => {
    const panel = $("#layers-panel");
    panel.classList.toggle("hidden");
    $("#layers-button").setAttribute("aria-expanded", String(!panel.classList.contains("hidden")));
  });
  $$("[data-layer]").forEach((input) => input.addEventListener("change", () => { enabledLayers[input.dataset.layer] = input.checked; renderMap(); }));
  $("#zoom-in").addEventListener("click", () => { mapScale = Math.min(1.65, mapScale + .12); renderMap(); });
  $("#zoom-out").addEventListener("click", () => { mapScale = Math.max(.75, mapScale - .12); renderMap(); });
  $("#zoom-reset").addEventListener("click", () => { mapScale = 1; renderMap(); });
  $("#global-search").addEventListener("input", () => {
    if (activeView === "atlas") {
      const query = $("#global-search").value.trim().toLowerCase();
      const found = state.locations.find((location) => location.name.toLowerCase().includes(query));
      if (query && found) { selectedLocationId = found.id; renderDetails(); renderMap(); }
      else if (query) {
        const person = state.characters.find((character) => character.name.toLowerCase().includes(query));
        if (person) openCharacter(person.id);
      }
    } else renderDirectory();
  });
  $("#add-button").addEventListener("click", addEntity);
  $("#entity-form").addEventListener("submit", handleEntitySubmit);
  $("#entity-type").addEventListener("change", updateEntityFieldVisibility);
  $("#dialog-close").addEventListener("click", () => $("#entity-dialog").close());
  $("#dialog-cancel").addEventListener("click", () => $("#entity-dialog").close());
  $("#export-button").addEventListener("click", exportProject);
  $("#import-file").addEventListener("change", (event) => importProject(event.target.files[0]));
  $("#manage-projects-button").addEventListener("click", openProjectManager);
  $("#master-search-form").addEventListener("submit", runMasterSearch);
  $("#project-refresh-button").addEventListener("click", () => refreshProjectList().catch((error) => {
    $("#project-list-status").textContent = "No se pudo actualizar: " + error.message;
  }));
  $("#project-list").addEventListener("change", () => {
    updateProjectDeleteControl();
    refreshSnapshotList().catch((error) => { $("#snapshot-status").textContent = "No se pudieron leer los snapshots: " + error.message; });
  });
  $("#snapshot-list").addEventListener("change", updateSnapshotControls);
  $("#snapshot-refresh-button").addEventListener("click", () => refreshSnapshotList().catch((error) => {
    $("#snapshot-status").textContent = "No se pudieron leer los snapshots: " + error.message;
  }));
  $("#snapshot-create-button").addEventListener("click", createSelectedSnapshot);
  $("#snapshot-restore-button").addEventListener("click", restoreSelectedSnapshot);
  $("#snapshot-delete-button").addEventListener("click", deleteSelectedSnapshot);
  $("#project-delete-button").addEventListener("click", deleteSelectedProject);
  $("#trash-refresh-button").addEventListener("click", () => refreshTrashList().catch((error) => {
    $("#trash-status").textContent = "No se pudo actualizar la papelera: " + error.message;
  }));
  $("#trash-list").addEventListener("change", updateTrashControls);
  $("#trash-restore-button").addEventListener("click", restoreSelectedTrashedProject);
  $("#trash-delete-button").addEventListener("click", permanentlyDeleteSelectedTrashedProject);
  $("#project-open-button").addEventListener("click", openSelectedProject);
  $("#project-create-button").addEventListener("click", createNamedProject);
  $("#project-close-button").addEventListener("click", () => $("#project-dialog").close());
  $("#create-project-name").addEventListener("input", () => $("#create-project-name").setCustomValidity(""));
  $("#new-project-button").addEventListener("click", () => {
    if (!confirm("¿Crear un proyecto vacío? Exportá el proyecto actual antes si querés conservar una copia.")) return;
    state = { schemaVersion: 1, project: { id: "project-" + Date.now().toString(36), name: "Mi nuevo universo", description: "" }, locations: [], characters: [], events: [], organizations: [], relationships: [], stories: [], settings: { time: "now" } };
    selectedLocationId = null;
    selectedCharacterId = null;
    selectedEventId = null;
    selectedOrganizationId = null;
    selectedRelationshipId = null;
    selectedStoryId = null;
    activeView = "atlas";
    mapMode = "world";
    mapScale = 1;
    Object.keys(enabledLayers).forEach((layer) => { enabledLayers[layer] = true; });
    $$("[data-layer]").forEach((input) => { input.checked = true; });
    $$(".view-tab").forEach((tab) => tab.classList.toggle("active", tab.dataset.mapMode === "world"));
    $("#global-search").value = "";
    $("#time-select").value = "now";
    saveProject();
    render();
  });
  $("#related-list").addEventListener("click", (event) => {
    const row = event.target.closest("[data-character]");
    if (row) openCharacter(row.dataset.character);
  });
  $("#related-list").addEventListener("keydown", (event) => {
    const row = event.target.closest("[data-character]");
    if (row && (event.key === "Enter" || event.key === " ")) openCharacter(row.dataset.character);
  });
  $("#directory-view").addEventListener("click", (event) => {
    const character = event.target.closest("[data-character]");
    const location = event.target.closest("[data-location]");
    const eventCard = event.target.closest("[data-event]");
    const organizationCard = event.target.closest("[data-organization]");
    const relationshipCard = event.target.closest("[data-relationship]");
    const storyCard = event.target.closest("[data-story]");
    if (character) { navigate("atlas"); openCharacter(character.dataset.character); }
    else if (location) showLocation(location.dataset.location);
    else if (eventCard) { selectedEventId = eventCard.dataset.event; renderDirectory(); }
    else if (organizationCard) { selectedOrganizationId = organizationCard.dataset.organization; renderDirectory(); }
    else if (relationshipCard) { selectedRelationshipId = relationshipCard.dataset.relationship; renderDirectory(); }
    else if (storyCard) { selectedStoryId = storyCard.dataset.story; renderDirectory(); }
  });
  $("#directory-view").addEventListener("keydown", (event) => {
    if (event.key !== "Enter" && event.key !== " ") return;
    const target = event.target.closest("[data-character],[data-location],[data-event],[data-organization],[data-relationship],[data-story]");
    if (!target) return;
    event.preventDefault();
    if (target.dataset.character) { navigate("atlas"); openCharacter(target.dataset.character); }
    else if (target.dataset.location) showLocation(target.dataset.location);
    else if (target.dataset.event) { selectedEventId = target.dataset.event; renderDirectory(); }
    else if (target.dataset.organization) { selectedOrganizationId = target.dataset.organization; renderDirectory(); }
    else if (target.dataset.relationship) { selectedRelationshipId = target.dataset.relationship; renderDirectory(); }
    else if (target.dataset.story) { selectedStoryId = target.dataset.story; renderDirectory(); }
  });
  $("#show-all-related").addEventListener("click", () => navigate("characters"));
  $("#command-form").addEventListener("submit", (event) => {
    event.preventDefault();
    executeCommand($("#command-input").value);
    $("#command-input").value = "";
  });
  $$(".command-chips button").forEach((button) => button.addEventListener("click", () => executeCommand(button.dataset.command)));
  $("#global-search").addEventListener("keydown", (event) => { if (event.key === "Escape") { event.target.value = ""; renderDirectory(); } });

  async function initializeApplication() {
    const appShell = document.querySelector(".app-shell");
    if (appShell) appShell.inert = true;
    $("#save-status").textContent = "Recuperando proyecto…";
    try {
      if (!projectRepository) throw new Error("El repositorio de proyectos no está disponible.");
      const recovery = await projectRepository.loadActive();
      const recoveredProject = recovery.project;
      state = ensureRelationshipStore(recoveredProject
        ? {
            ...structuredClone(recoveredProject),
            organizations: Array.isArray(recoveredProject.organizations) ? recoveredProject.organizations : [],
            relationships: Array.isArray(recoveredProject.relationships) ? recoveredProject.relationships : undefined
          }
        : structuredClone(demo));

      const normalizedChanged = !recoveredProject || JSON.stringify(state) !== JSON.stringify(recoveredProject);
      if (normalizedChanged) {
        const report = await enqueueRepositoryOperation(() => projectRepository.saveActive(state));
        $("#save-status").textContent = report.warning
          ? "Proyecto recuperado · " + report.warning
          : report.backend === "indexeddb"
            ? "Proyecto recuperado y guardado en IndexedDB"
            : "Proyecto recuperado desde el respaldo local";
      } else {
        $("#save-status").textContent = recovery.warning
          ? "Proyecto recuperado · " + recovery.warning
          : recovery.backend === "indexeddb"
            ? "Proyecto cargado desde IndexedDB"
            : "Proyecto cargado desde el respaldo local";
      }
      render();
    } catch (error) {
      state = ensureRelationshipStore(loadProject());
      render();
      const saved = await saveProject();
      if (!saved) $("#save-status").textContent = "Modo de recuperación · exportá una copia: " + error.message;
    } finally {
      if (appShell) appShell.inert = false;
    }
  }

  initializeApplication();
})(); 

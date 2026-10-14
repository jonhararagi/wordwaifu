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
    commands: ["Asistente local", "Comandos deterministas para consultar tu proyecto sin IA."],
    lore: ["Enciclopedia de personajes", "Explorá fichas, etapas de vida, vínculos y fuentes documentales."],
    art: ["Panel de arte", "Administrá imágenes, prompts y asignaciones visuales por entidad."],
    "mythic-catalog": ["Catálogo mítico", "Explorá entidades, armas, reliquias y pactos conectados por relaciones."],
    powers: ["Poderes y habilidades", "Guardá cada poder como una ficha conectada a personajes e historias."]
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
    if (!Array.isArray(project.powers)) project.powers = [];
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
    try { await refreshTrashList(); }
    catch (error) { $("#project-trash-status").textContent = "No se pudo leer la papelera: " + error.message; }
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
    else help.textContent = "Se enviará únicamente este ID a la papelera; podrás restaurarlo con sus snapshots o borrarlo definitivamente desde la papelera.";
  }

  async function deleteSelectedProject() {
    const select = $("#project-list");
    const projectId = select.value;
    const option = select.selectedOptions[0];
    if (!projectId || !option) return;
    if (projectId === state.project.id || option.dataset.active === "true") {
      updateProjectDeleteControl();
      $("#project-list-status").textContent = "Protección activa: primero abrí otro proyecto y después seleccioná el anterior para enviarlo a la papelera.";
      return;
    }
    if (option.dataset.source !== "indexeddb") {
      updateProjectDeleteControl();
      $("#project-list-status").textContent = "No se puede mover a la papelera un proyecto que solo existe en el respaldo local. Primero debe recuperarse y verificarse en IndexedDB.";
      return;
    }
    const candidate = await projectRepository.getProject(projectId);
    if (!candidate || candidate.project.id !== projectId) {
      $("#project-list-status").textContent = "No se pudo verificar el proyecto seleccionado. Actualizá el catálogo antes de continuar.";
      return;
    }
    const projectName = candidate.project.name || "Proyecto sin nombre";
    if (!confirm(
      "Se enviará el proyecto «" + projectName + "» (ID: " + projectId + ") a la papelera.\n" +
      "Se conservarán sus datos y snapshots, y podrás restaurarlo desde el panel Papelera.\n" +
      "Solo se moverá este ID exacto. El proyecto activo «" + state.project.name + "» y los demás universos no cambiarán.\n\n¿Continuar?"
    )) {
      $("#project-list-status").textContent = "Operación cancelada. No se movió ningún proyecto.";
      return;
    }
    const appShell = $(".app-shell");
    if (appShell) appShell.inert = true;
    $("#project-delete-button").disabled = true;
    $("#project-list-status").textContent = "Moviendo el universo y sus snapshots a la papelera…";
    let move = null;
    try {
      await requireCurrentProjectInIndexedDB();
      move = await projectRepository.moveProjectToTrash(projectId);
      const projects = await refreshProjectList();
      const trashEntries = await refreshTrashList();
      const stillListed = projects.some((project) => project.projectId === projectId);
      const inTrash = trashEntries.some((entry) => entry.projectId === projectId);
      select.value = state.project.id;
      updateProjectDeleteControl();
      if (stillListed || !inTrash) {
        $("#project-list-status").textContent = "No se pudo verificar el movimiento a la papelera. Actualizá el catálogo antes de repetir la operación.";
        return;
      }
      $("#project-list-status").textContent = "Universo «" + projectName + "» enviado a la papelera con " +
        move.snapshotCount + " snapshot(s). Podés restaurarlo desde el panel Papelera." +
        (move.warning ? " Atención: " + move.warning : "");
    } catch (error) {
      $("#project-list-status").textContent = "No se pudo enviar el universo a la papelera: " + error.message;
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
    $("#global-search").placeholder = activeView === "lore"
      ? "Buscar en la enciclopedia de personajes…"
      : "Buscar personajes, lugares o DanMachi…";
    $("#global-search").closest(".search-box").classList.toggle("hidden", activeView === "mythic-catalog");
    $$(".nav-item").forEach((button) => button.classList.toggle("active", button.dataset.view === activeView));
    $("#atlas-layout").classList.toggle("hidden", activeView !== "atlas");
    $("#directory-view").classList.toggle("hidden", !["characters", "relationships", "places", "timeline", "organizations", "stories"].includes(activeView));
    $("#command-view").classList.toggle("hidden", activeView !== "commands");
    $("#lore-view").classList.toggle("hidden", activeView !== "lore");
    $("#art-view").classList.toggle("hidden", activeView !== "art");
    $("#mythic-catalog-view").classList.toggle("hidden", activeView !== "mythic-catalog");
    $("#powers-view").classList.toggle("hidden", activeView !== "powers");
    $(".toolbar").classList.toggle("hidden", activeView !== "atlas");
    $("#layers-panel").classList.add("hidden");
    $("#add-button").classList.toggle("hidden", ["commands", "stories", "lore", "art", "mythic-catalog", "powers"].includes(activeView));
    renderMap();
    renderDetails();
    renderDirectory();
    if (window.WordWaifuPowerWorkbench) window.WordWaifuPowerWorkbench.refresh(state);
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
      if (!items.length) items = ['<div class="empty-state">Todavía no hay historias en este universo. Creá una novela para empezar a guardar premisa, conflictos, arcos y capítulos.</div>'];
    }
    const selectedStory = activeView === "stories" ? state.stories.find((story) => story.id === selectedStoryId) : null;
    const selectedStoryHTML = activeView === "stories" ? renderStoryEditor(selectedStory) : "";
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
    container.innerHTML = '<div class="directory-heading"><h2>' + heading + '</h2><span class="tag">' + items.length + ' resultados</span>' + (activeView === "stories" ? '<button type="button" id="story-create-button" class="primary-button">＋ Nueva historia</button>' : '') + '</div>' + selectedEventHTML + selectedOrganizationHTML + selectedRelationshipHTML + '<div class="entity-grid">' + (items.length ? items.join("") : '<div class="empty-state">No hay resultados para esta búsqueda.</div>') + '</div>' + selectedStoryHTML;
    if (activeView === "stories") bindStoryEditor(container, selectedStory);
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


  function renderStoryEditor(story) {
    if (!story) {
      return '<section class="story-editor selected-event-card"><p class="eyebrow">TALLER DE NOVELAS</p><h2>Una historia, desde la idea hasta el manuscrito</h2><p>Creá una historia para guardar sinopsis, premisa, conflicto central, arcos y capítulos editables. Los cambios se guardan en el proyecto local y viajan con su exportación JSON.</p><p class="field-help">Elegí una historia de la lista o pulsá «Nueva historia».</p></section>';
    }
    if (!Array.isArray(story.chapters)) story.chapters = [];
    if (!Array.isArray(story.arcs)) story.arcs = [];
    const chapters = story.chapters.map((chapter, index) => '<article class="story-chapter-card"><div class="story-chapter-heading"><span class="tag">Capítulo ' + (index + 1) + '</span><span class="tag">' + escapeHTML(chapter.status || "borrador") + '</span></div><form class="story-chapter-form" data-chapter-id="' + escapeHTML(chapter.id) + '"><label>Título del capítulo<input name="chapterTitle" maxlength="180" required value="' + escapeHTML(chapter.title || "") + '"></label><label>Resumen del capítulo<textarea name="chapterSummary" rows="2" maxlength="4000">' + escapeHTML(chapter.summary || "") + '</textarea></label><label>Manuscrito<textarea name="chapterContent" rows="12" maxlength="200000" placeholder="Escribí acá el capítulo completo…">' + escapeHTML(chapter.content || "") + '</textarea></label><label>Estado<select name="chapterStatus"><option value="outline"' + (chapter.status === "outline" ? " selected" : "") + '>Esquema</option><option value="draft"' + (!chapter.status || chapter.status === "draft" ? " selected" : "") + '>Borrador</option><option value="revision"' + (chapter.status === "revision" ? " selected" : "") + '>En revisión</option><option value="complete"' + (chapter.status === "complete" ? " selected" : "") + '>Completo</option></select></label><div class="location-actions"><button class="primary-button" type="submit">Guardar capítulo</button><button class="outline-button danger-action" type="button" data-delete-chapter="' + escapeHTML(chapter.id) + '">Eliminar capítulo</button></div></form></article>').join("");
    const completeCount = story.chapters.filter((chapter) => chapter.status === "complete").length;
    const plannedCount = Number.isInteger(Number(story.chapterCount)) ? Math.max(1, Math.min(500, Number(story.chapterCount))) : Math.max(1, story.chapters.length || 24);
    const returnUnusedMarker = "";
    return '<section class="story-editor selected-event-card"><div class="story-editor-title"><div><p class="eyebrow">EDITOR DE HISTORIAS · BORRADOR LOCAL</p><h2>' + escapeHTML(story.name || "Historia sin título") + '</h2><p>' + story.chapters.length + ' capítulos · ' + completeCount + ' completos</p></div><div class="story-file-actions"><button type="button" id="story-import-button" class="outline-button">Importar manuscrito .md</button><input type="file" id="story-import-file" accept=".md,text/markdown,text/plain" hidden><button type="button" id="story-export-button" class="outline-button">Exportar manuscrito .md</button></div></div><form id="story-meta-form" data-story-id="' + escapeHTML(story.id) + '"><div class="story-form-grid"><label>Título<input name="storyName" required maxlength="180" value="' + escapeHTML(story.name || "") + '"></label><label>Estado<select name="storyStatus"><option value="idea"' + (story.status === "idea" ? " selected" : "") + '>Idea</option><option value="outline"' + (story.status === "outline" ? " selected" : "") + '>En planificación</option><option value="draft"' + (!story.status || story.status === "draft" ? " selected" : "") + '>Borrador</option><option value="revision"' + (story.status === "revision" ? " selected" : "") + '>En revisión</option><option value="complete"' + (story.status === "complete" ? " selected" : "") + '>Completa</option></select></label></div><label>Sinopsis<textarea name="storyDescription" rows="3" maxlength="6000" placeholder="¿De qué trata la historia?">' + escapeHTML(story.description || "") + '</textarea></label><label>Premisa<textarea name="storyPremise" rows="3" maxlength="6000" placeholder="La idea central y qué hace única esta historia…">' + escapeHTML(story.premise || "") + '</textarea></label><label>Conflicto central<textarea name="storyConflict" rows="3" maxlength="6000" placeholder="Qué quiere el protagonista, qué se lo impide y qué está en juego…">' + escapeHTML(story.conflict || "") + '</textarea></label><section class="story-outline-planner"><h3>Planificador de historia completa</h3><p class="field-help">Definí la extensión y el tipo de final. El generador crea un índice editable con función dramática y resumen por capítulo; no escribe el manuscrito por sí solo.</p><div class="story-form-grid"><label>Cantidad de capítulos<input name="storyChapterCount" type="number" min="1" max="500" required value="' + plannedCount + '"></label><label>Tipo de final<select name="storyEndingType"><option value="closed"' + ((story.endingType || "closed") === "closed" ? " selected" : "") + '>Cerrado · resuelve el conflicto principal</option><option value="open"' + (story.endingType === "open" ? " selected" : "") + '>Abierto · deja preguntas y posibilidades</option><option value="bittersweet"' + (story.endingType === "bittersweet" ? " selected" : "") + '>Agridulce · victoria con pérdida</option><option value="cliffhanger"' + (story.endingType === "cliffhanger" ? " selected" : "") + '>Cliffhanger · termina en una crisis</option></select></label></div><div class="location-actions"><button type="button" id="story-generate-outline-button" class="primary-button">Generar índice de capítulos</button><button type="button" id="story-audit-outline-button" class="outline-button">Auditar estructura</button></div><p id="story-outline-status" class="field-help" aria-live="polite">El índice se puede regenerar sin borrar los manuscritos guardados.</p></section><label>Personajes centrales y objetivos<textarea name="storyCastPlan" rows="4" maxlength="12000" placeholder="Protagonista: deseo, necesidad, defecto y miedo. Coprotagonistas: objetivos propios, conflictos y decisiones que alteran la trama.">' + escapeHTML(story.castPlan || "") + '</textarea></label><label>Antagonista o fuerza opositora<textarea name="storyAntagonistPlan" rows="4" maxlength="12000" placeholder="Qué quiere, por qué cree tener razón, qué recursos controla, sus límites y cómo obliga al elenco a cambiar.">' + escapeHTML(story.antagonistPlan || "") + '</textarea></label><label>Romance y vínculos afectivos<textarea name="storyRomancePlan" rows="3" maxlength="10000" placeholder="Interés amoroso, química, incompatibilidades, confianza, límites, decisiones y evolución; puede dejarse vacío si no corresponde.">' + escapeHTML(story.romancePlan || "") + '</textarea></label><label>Traumas, heridas y recuperación<textarea name="storyTraumaPlan" rows="3" maxlength="10000" placeholder="Herida emocional, mecanismos de defensa, detonantes, apoyos, recaídas y cambios graduales sin convertir el trauma en un simple potenciador.">' + escapeHTML(story.traumaPlan || "") + '</textarea></label><label>Arcos narrativos (uno por línea)<textarea name="storyArcs" rows="4" maxlength="12000" placeholder="Personaje: punto de partida → cambio → consecuencia">' + escapeHTML((story.arcs || []).map((arc) => typeof arc === "string" ? arc : arc.title || arc.description || "").join("\n")) + '</textarea></label><label>Tipo de mundo<select name="storyWorldType"><option value="unspecified"' + (!story.worldType || story.worldType === "unspecified" ? " selected" : "") + '>Sin definir</option><option value="cyberpunk-dystopia"' + (story.worldType === "cyberpunk-dystopia" ? " selected" : "") + '>Distopía cyberpunk (ej. Cyberpunk 2999)</option><option value="conventional-dystopia"' + (story.worldType === "conventional-dystopia" ? " selected" : "") + '>Distopía social o política</option><option value="post-apocalypse"' + (story.worldType === "post-apocalypse" ? " selected" : "") + '>Postapocalipsis: supervivencia después del colapso</option><option value="active-apocalypse-military-sf"' + (story.worldType === "active-apocalypse-military-sf" ? " selected" : "") + '>Apocalipsis activo, militar o ciencia ficción (ej. Muv-Luv)</option><option value="isolated-island-comedy"' + (story.worldType === "isolated-island-comedy" ? " selected" : "") + '>Isla aislada, comedia y convivencia (ej. Nagasare Airantou)</option><option value="superpower-action"' + (story.worldType === "superpower-action" ? " selected" : "") + '>Acción y sociedades de superpoderes</option><option value="fantasy-adventure"' + (story.worldType === "fantasy-adventure" ? " selected" : "") + '>Fantasía y aventura</option><option value="urban-supernatural"' + (story.worldType === "urban-supernatural" ? " selected" : "") + '>Sobrenatural urbano</option><option value="mecha-war"' + (story.worldType === "mecha-war" ? " selected" : "") + '>Mecha, guerra y conflicto geopolítico</option><option value="slice-of-life-comedy"' + (story.worldType === "slice-of-life-comedy" ? " selected" : "") + '>Comedia cotidiana y relaciones</option><option value="other"' + (story.worldType === "other" ? " selected" : "") + '>Otro / híbrido</option></select></label><label>Reglas del mundo<textarea name="storyWorldRules" rows="3" maxlength="10000" placeholder="Tecnología, poderes, recursos, instituciones, límites y consecuencias…">' + escapeHTML(story.worldRules || "") + '</textarea></label><label>Dinámica y presión del mundo<textarea name="storyWorldDynamics" rows="4" maxlength="12000" placeholder="Qué fuerzas cambian el mundo; cómo afecta a la vida diaria, los conflictos, el tono y las decisiones de los personajes…">' + escapeHTML(story.worldDynamics || "") + '</textarea></label><label>Motor de misterio o revelación<select name="storyRevealType"><option value="none"' + (!story.revealType || story.revealType === "none" ? " selected" : "") + '>Sin definir</option><option value="hidden-identity"' + (story.revealType === "hidden-identity" ? " selected" : "") + '>Identidad oculta (aliado, camarera, rival…)</option><option value="immortal-secret-nature"' + (story.revealType === "immortal-secret-nature" ? " selected" : "") + '>Naturaleza secreta / inmortalidad</option><option value="mythic-origin"' + (story.revealType === "mythic-origin" ? " selected" : "") + '>Origen mitológico o creación antigua</option><option value="card-contract-game"' + (story.revealType === "card-contract-game" ? " selected" : "") + '>Juego de cartas, pactos o contratos sobrenaturales</option><option value="double-identity-faction"' + (story.revealType === "double-identity-faction" ? " selected" : "") + '>Doble identidad / facción infiltrada</option><option value="betrayal-allegiance"' + (story.revealType === "betrayal-allegiance" ? " selected" : "") + '>Traición o lealtad ambigua</option><option value="false-world-truth"' + (story.revealType === "false-world-truth" ? " selected" : "") + '>La verdad del mundo contradice lo que todos creen</option><option value="other"' + (story.revealType === "other" ? " selected" : "") + '>Otro mecanismo</option></select></label><label>Secreto central<textarea name="storyRevealSecret" rows="3" maxlength="8000" placeholder="Qué es realmente el personaje, objeto, juego o mito; quién lo sabe y quién lo ignora…">' + escapeHTML(story.revealSecret || "") + '</textarea></label><label>Pistas, reglas y falsas interpretaciones<textarea name="storyRevealClues" rows="4" maxlength="10000" placeholder="Pistas visibles antes del giro, reglas del juego, contradicciones y explicaciones alternativas plausibles…">' + escapeHTML(story.revealClues || "") + '</textarea></label><label>Momento y forma de la revelación<textarea name="storyRevealTiming" rows="3" maxlength="6000" placeholder="En qué arco/capítulo se descubre y qué evidencia hace imposible negarlo…">' + escapeHTML(story.revealTiming || "") + '</textarea></label><label>Consecuencias después del giro<textarea name="storyRevealConsequences" rows="4" maxlength="10000" placeholder="Qué cambia en las alianzas, objetivos, reglas, riesgos y escenas posteriores; evitar que todo vuelva a la normalidad…">' + escapeHTML(story.revealConsequences || "") + '</textarea></label><section class="power-generator-panel" aria-labelledby="power-generator-title"><h3 id="power-generator-title">Generador rápido de poderes</h3><p class="field-help">Elegí una familia o dejá «Sorpresa». Cada clic propone una idea distinta; no reemplaza lo que ya escribiste. Generá varias hasta encontrar una chispa.</p><div class="power-generator-controls"><label>Familia<select id="story-power-family"><option value="any">Sorpresa · cualquier tipo</option><option value="mental">Mental / percepción</option><option value="physical">Físico / transformación</option><option value="technical">Técnico / estratégico</option><option value="pact">Pacto / contrato</option><option value="costly">Poder con alto coste</option><option value="support">Apoyo / información</option></select></label><button type="button" id="story-power-generate-button" class="outline-button">↻ Generar otro poder</button></div><p id="story-power-generator-status" class="field-help" role="status" aria-live="polite">Las propuestas son ideas originales de ejemplo. Podés editarlas libremente.</p></section><section class="power-generator-panel word-alternatives-panel" aria-labelledby="word-alternatives-title"><h3 id="word-alternatives-title">Buscador de sinónimos y antónimos</h3><p class="field-help">Buscá una palabra en español o inglés. Seleccioná una palabra en el manuscrito o en un campo de texto y pulsá una alternativa para reemplazarla; después guardá el capítulo o la historia. Las sugerencias dependen del contexto.</p><div class="power-generator-controls"><label>Palabra o expresión<input id="story-word-query" type="search" maxlength="80" placeholder="Ej.: era, salió, grow, dijo, oscuro"></label><button type="button" id="story-word-search-button" class="outline-button">Buscar alternativas</button></div><div class="story-word-results" id="story-word-results" aria-live="polite"><p class="field-help">Probá con «era», «salió», «grow», «dijo» o «miró».</p></div><p id="story-word-status" class="field-help" role="status" aria-live="polite">No cambia el texto hasta que elijas una alternativa.</p></section><label>Panteón y papel de las diosas<textarea name="storyPantheon" rows="5" maxlength="12000" placeholder="Para cada diosa: nombre, personalidad, deseo propio, relación con el protagonista y sus amigos, favor concedido, límites, precio y arco personal. ¿Qué quiere ella que no dependa del protagonista?">' + escapeHTML(story.pantheon || "") + '</textarea></label><p class="field-help">La diosa es un personaje, no solo una máquina de conceder poderes: puede tener objetivos, vínculos, errores, humor, conflictos y una historia propia.</p><label>Reparto coral y arcos individuales<textarea name="storyEnsemble" rows="7" maxlength="20000" placeholder="Personaje: objetivo propio | conflicto | vínculo con el grupo | decisión decisiva | cambio | capítulos donde lleva el foco. Incluí al protagonista y a sus amigos.">' + escapeHTML(story.ensemble || "") + '</textarea></label><p class="field-help">Pensá el equipo como una historia coral: cada amigo puede protagonizar capítulos o mini-arcos, tomar decisiones que cambien la trama y resolver problemas que el protagonista no puede resolver. El protagonista conecta la historia; no tiene que monopolizarla.</p><label>Catálogo de poderes y evolución (un poder por bloque) <textarea name="storyPowerCatalog" rows="10" maxlength="30000" placeholder="Cada poder generado se agrega aquí. También podés escribir uno a mano.">' + escapeHTML(story.powerCatalog || "") + '</textarea></label><p class="field-help">Cada bloque incluye activación, coste, límites, evolución y consecuencias. Guardá la historia para persistir el catálogo. Las reglas irreversibles deben mantenerse en la continuidad.</p><p class="field-help">Un giro debe estar preparado por pistas y cambiar decisiones o relaciones. El formulario organiza el plan; no inventa automáticamente una revelación ni demuestra que esté bien construida.</p><p class="field-help">El tipo es solo una categoría: documentá reglas, presión cotidiana, recursos, riesgos y cómo las decisiones de los personajes cambian el mundo.</p><div class="location-actions"><button type="submit" class="primary-button">Guardar historia</button><button type="button" id="story-add-chapter-button" class="outline-button">＋ Añadir capítulo</button><button type="button" id="story-delete-button" class="outline-button danger-action">Eliminar historia</button></div><p class="field-help" id="story-editor-status" role="status" aria-live="polite">Los cambios de cada formulario se guardan por separado.</p></form><div class="detail-divider"></div><h3>Capítulos y manuscrito</h3><p class="field-help">Cada capítulo tiene título, resumen, texto íntegro y estado. «Completo» es una marca editorial manual, no una evaluación automática de calidad.</p><div class="story-chapters">' + (chapters || '<div class="empty-state">Esta historia todavía no tiene capítulos. Pulsá «Añadir capítulo» para crear el primero.</div>') + '</div></section>';
  }

  // Diccionario local de apoyo editorial. Las alternativas dependen del contexto; no son sustituciones automáticas.
  const wordAlternatives = [
    { words: ["era", "fue", "ser", "estaba", "estar"], synonyms: ["resultaba", "parecía", "representaba", "se encontraba", "existía"], antonyms: ["no era", "dejó de ser", "se volvió distinto", "desapareció"], note: "«Ser/era» no tiene un antónimo universal: elegí según el sentido de la oración." },
    { words: ["salió", "salio", "salir", "sale", "salieron"], synonyms: ["partió", "se marchó", "abandonó el lugar", "emergió", "apareció", "se dirigió hacia"], antonyms: ["entró", "regresó", "permaneció", "se quedó"], note: "«Emergió» funciona para salir de algo; «partió» para irse." },
    { words: ["grow", "grew", "grown", "crecer", "creció", "crecio", "crece"], synonyms: ["aumentar", "desarrollarse", "expandirse", "madurar", "florecer", "prosperar"], antonyms: ["disminuir", "encogerse", "marchitarse", "estancarse", "decaer"], englishSynonyms: ["increase", "expand", "develop", "flourish", "thrive", "mature"], englishAntonyms: ["shrink", "decline", "diminish", "stagnate", "wither", "decrease"], note: "Incluye alternativas en inglés y español; elegí una opción del mismo idioma y sentido que tu frase." },
    { words: ["dijo", "decir", "dice", "dijo"], synonyms: ["afirmó", "respondió", "declaró", "murmuró", "susurró", "replicó", "confesó", "protestó"], antonyms: ["calló", "guardó silencio", "se abstuvo de responder"], note: "El verbo de diálogo debe reflejar cómo habla el personaje, no solo reemplazar «dijo»." },
    { words: ["miró", "miro", "mirar", "observó", "observo"], synonyms: ["contempló", "examinó", "escudriñó", "atisbó", "fijó la vista", "echó un vistazo"], antonyms: ["apartó la mirada", "ignoró", "evitó mirar"], note: "«Escudriñó» implica atención intensa; «atisbó», una mirada breve o parcial." },
    { words: ["caminó", "camino", "caminar"], synonyms: ["avanzó", "anduvo", "deambuló", "recorrió", "se encaminó", "marchó"], antonyms: ["se detuvo", "se quedó quieto", "retrocedió"], note: "Elegí según ritmo, dirección e intención." },
    { words: ["corrió", "corrio", "correr"], synonyms: ["se apresuró", "sprintó", "salió disparado", "se lanzó", "huyó"], antonyms: ["caminó", "frenó", "se detuvo", "avanzó lentamente"], note: "«Huyó» añade intención de escapar; no es un sinónimo neutral." },
    { words: ["era feliz", "feliz", "alegre", "alegría"], synonyms: ["contento", "dichoso", "radiante", "eufórico", "animado", "jubiloso"], antonyms: ["triste", "abatido", "desdichado", "desanimado"], note: "La intensidad cambia: «eufórico» es más fuerte que «contento»." },
    { words: ["triste", "tristeza", "abatido"], synonyms: ["melancólico", "afligido", "desolado", "apenado", "decaído"], antonyms: ["alegre", "animado", "esperanzado", "jubiloso"], note: "«Desolado» expresa una tristeza más intensa." },
    { words: ["grande", "enorme"], synonyms: ["inmenso", "vasto", "gigantesco", "colosal", "amplio", "monumental"], antonyms: ["pequeño", "diminuto", "reducido", "estrecho"], note: "«Vasto» suele describir extensión; «colosal», tamaño extraordinario." },
    { words: ["pequeño", "pequeno", "diminuto"], synonyms: ["reducido", "minúsculo", "breve", "menudo", "compacto"], antonyms: ["grande", "enorme", "gigantesco", "vasto"], note: "«Breve» encaja mejor con tiempo o duración que con tamaño físico." },
    { words: ["rápido", "rapido", "veloz"], synonyms: ["veloz", "acelerado", "ágil", "fugaz", "precipitado", "vertiginoso"], antonyms: ["lento", "pausado", "gradual", "perezoso"], note: "«Precipitado» puede implicar falta de cuidado." },
    { words: ["lento", "lentamente"], synonyms: ["pausado", "gradual", "parsimonioso", "moroso", "poco a poco"], antonyms: ["rápido", "veloz", "acelerado", "instantáneo"], note: "«Parsimonioso» puede sugerir calma deliberada." },
    { words: ["miedo", "temor", "asustado"], synonyms: ["pavor", "terror", "aprensión", "inquietud", "recelo", "espanto"], antonyms: ["valor", "confianza", "serenidad", "audacia"], note: "«Inquietud» es más leve; «terror» mucho más intenso." },
    { words: ["oscuro", "oscuridad"], synonyms: ["sombrío", "tenebroso", "lúgubre", "opaco", "umbralado"], antonyms: ["luminoso", "claro", "radiante", "iluminado"], note: "También puede describir tono, ambiente o moralidad; revisá el contexto." },
    { words: ["luz", "luminoso"], synonyms: ["claridad", "resplandor", "brillo", "fulgor", "destello"], antonyms: ["oscuridad", "sombra", "penumbra", "tiniebla"], note: "«Destello» es breve; «resplandor» puede ser sostenido." },
    { words: ["poderoso", "poderosa", "fuerte"], synonyms: ["potente", "dominante", "formidable", "arrollador", "influyente", "robusto"], antonyms: ["débil", "vulnerable", "impotente", "frágil"], note: "La fuerza física, la influencia y el poder mágico no son exactamente lo mismo." },
    { words: ["débil", "debil"], synonyms: ["frágil", "vulnerable", "precario", "endeble", "agotado"], antonyms: ["fuerte", "robusto", "resistente", "poderoso"], note: "«Agotado» describe un estado temporal, no una falta permanente de fuerza." },
    { words: ["hermoso", "hermosa", "bonito", "bonita"], synonyms: ["bello", "precioso", "espléndido", "atractivo", "deslumbrante", "grácil"], antonyms: ["feo", "desagradable", "grotesco", "tosco"], note: "La belleza puede ser física, emocional o estética." },
    { words: ["feo", "fea"], synonyms: ["desagradable", "tosco", "deforme", "grotesco", "poco agraciado"], antonyms: ["hermoso", "bello", "atractivo", "armonioso"], note: "No todas las alternativas tienen el mismo tono ni son adecuadas para personas." },
    { words: ["comenzó", "comenzo", "comenzar", "empezó", "empezo"], synonyms: ["inició", "emprendió", "arrancó", "dio comienzo", "se puso a"], antonyms: ["terminó", "concluyó", "finalizó", "abandonó"], note: "«Abandonó» significa dejar una actividad, no necesariamente acabarla." },
    { words: ["terminó", "termino", "terminar", "acabó", "acabo"], synonyms: ["concluyó", "finalizó", "completó", "culminó", "cerró"], antonyms: ["comenzó", "inició", "continuó", "prosiguió"], note: "«Completó» sugiere que se alcanzó el objetivo." },
    { words: ["saber", "sabía", "sabia", "conocer"], synonyms: ["comprender", "entender", "reconocer", "dominar", "estar al tanto"], antonyms: ["ignorar", "desconocer", "confundirse", "no advertir"], note: "«Saber» un dato y «conocer» a una persona tienen usos diferentes." },
    { words: ["ayudó", "ayudo", "ayudar"], synonyms: ["asistió", "socorrió", "respaldó", "auxilió", "colaboró", "tendió una mano"], antonyms: ["obstaculizó", "perjudicó", "abandonó", "entorpeció"], note: "El antónimo depende de si se trata de apoyo, rescate o cooperación." },
    { words: ["atacó", "ataco", "atacar"], synonyms: ["arremetió", "embistió", "agredió", "asaltó", "se abalanzó sobre"], antonyms: ["defendió", "protegió", "retrocedió", "se retiró"], note: "Defender puede ser el contraste narrativo, aunque no sea antónimo estricto." },
    { words: ["ganó", "gano", "ganar"], synonyms: ["venció", "triunfó", "prevaleció", "se impuso", "consiguió"], antonyms: ["perdió", "fracasó", "fue derrotado", "cedió"], note: "«Consiguió» necesita un objeto; no siempre significa vencer a alguien." },
    { words: ["perdió", "perdio", "perder"], synonyms: ["fue derrotado", "cedió", "malogró", "extravío", "dejó escapar"], antonyms: ["ganó", "venció", "recuperó", "conservó"], note: "Perder un objeto, un combate o una oportunidad requiere alternativas distintas." }
  ];
  function normalizeWord(value) {
    return String(value || "").normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLocaleLowerCase("es").trim();
  }

  const powerIdeaLibrary = [
    { family: "mental", name: "Eco de intención", category: "mental / lectura parcial", potency: "2/5 · técnica alta", activation: "mantener una conversación y escuchar una frase completa", price: "absorbe por unos minutos una emoción ajena", limits: "no revela pensamientos ni recuerdos; las mentiras emocionales confunden la lectura", evolution: "I percibe emociones → II distingue intención inmediata → III queda una emoción residual que puede confundirse con la propia", consequences: "el usuario puede dejar de reconocer qué siente de verdad" },
    { family: "mental", name: "Geas de mandato", category: "mental / imposición", potency: "4/5 · técnica media", activation: "contacto visual directo y una orden verbal breve", price: "cada uso erosiona un recuerdo personal", limits: "una orden por objetivo; no puede obligar a realizar lo físicamente imposible", evolution: "I impulso de segundos → II compulsión duradera → III el mandato queda activo y ya no puede desactivarse", consequences: "aliados temen al usuario y la última etapa puede convertir una orden en una condena" },
    { family: "physical", name: "Armadura de deuda", category: "físico / defensa", potency: "4/5 · técnica baja", activation: "recibir voluntariamente un golpe mientras protege a otra persona", price: "el daño absorbido aparece después como fatiga y lesiones", limits: "no protege de venenos, asfixia ni daño interno acumulado", evolution: "I endurece la piel → II cubre el cuerpo → III protege a un grupo, pero transfiere el daño a una sola persona elegida", consequences: "proteger a todos puede poner al usuario frente a una elección imposible" },
    { family: "technical", name: "Geometría de combate", category: "técnico / estrategia", potency: "3/5 · técnica muy alta", activation: "observar el espacio y marcar tres puntos con la mano", price: "consume concentración; un error provoca vértigo", limits: "solo altera trayectorias dentro de un área visible y no crea fuerza", evolution: "I desvía objetos pequeños → II redirige ataques → III prepara una zona automática que también puede atrapar aliados", consequences: "el poder premia la preparación, pero castiga la improvisación y los espacios desconocidos" },
    { family: "pact", name: "Contrato del testigo", category: "pacto / información", potency: "3/5 · poder condicionado", activation: "dos partes dicen en voz alta qué verdad prometen proteger", price: "romper el pacto borra un recuerdo compartido", limits: "no obliga a decir la verdad; solo detecta una ruptura consciente del acuerdo", evolution: "I percibe la ruptura → II ambos sienten el coste → III el contrato sobrevive a la muerte de una parte", consequences: "la seguridad depende de definir con precisión las palabras del acuerdo" },
    { family: "costly", name: "Minuto hipotecado", category: "temporal / coste vital", potency: "5/5 · uso excepcional", activation: "romper un objeto propio que tenga valor sentimental", price: "pierde de forma permanente un minuto de su futuro", limits: "no revierte muertes ni cambia hechos que el usuario no presenció", evolution: "I repite un movimiento → II retrocede unos segundos → III congela una escena, pero sacrifica años de vida", consequences: "cada victoria reduce el futuro disponible y vuelve visible el precio de abusar del poder" },
    { family: "support", name: "Archivo de huellas", category: "información / apoyo", potency: "2/5 · utilidad alta", activation: "tocar un objeto abandonado durante al menos diez segundos", price: "el usuario sueña con un fragmento de la última emoción ligada al objeto", limits: "no muestra imágenes exactas ni identifica automáticamente a una persona", evolution: "I percibe emoción → II distingue una acción reciente → III reconstruye una secuencia incompleta que también incluye una pista falsa", consequences: "la investigación avanza, pero interpretar mal una huella puede acusar a un inocente" },
    { family: "physical", name: "Cuerpo de vidrio", category: "transformación / reflejo", potency: "4/5 · defensa y contraataque", activation: "recibir luz reflejada en la piel", price: "cada impacto recibido deja una grieta que reduce la movilidad", limits: "en oscuridad total no se activa; las grietas no desaparecen durante el combate", evolution: "I refleja luz → II devuelve un ataque una vez → III refleja una técnica completa, pero el cuerpo queda frágil permanentemente", consequences: "la forma más poderosa puede dejar al personaje incapaz de volver al frente" },
    { family: "technical", name: "Inventario imposible", category: "espacial / preparación", potency: "3/5 · técnica alta", activation: "guardar un objeto en un bolsillo cosido por el propio usuario", price: "cada objeto guardado borra temporalmente el nombre de algo querido", limits: "solo conserva objetos pequeños y no permite guardar seres vivos", evolution: "I un objeto → II varios objetos etiquetados → III almacena un objeto enorme, pero pierde de forma permanente un nombre importante", consequences: "la utilidad logística compite con la identidad y los recuerdos del usuario" },
    { family: "pact", name: "Préstamo de la bestia", category: "pacto / transformación", potency: "variable · riesgo alto", activation: "pedir permiso a una entidad dormida dentro de una marca", price: "la entidad reclama control del cuerpo por el mismo tiempo prestado", limits: "el usuario no puede elegir qué rasgo presta la entidad", evolution: "I sentidos agudos → II fuerza y forma parcial → III transformación completa con riesgo de no recuperar el control", consequences: "cada uso fortalece la relación con una entidad cuyas intenciones no son del todo conocidas" },
    { family: "support", name: "Mapa de posibilidades", category: "percepción / estrategia", potency: "3/5 · no ofensivo", activation: "dibujar el lugar y formular una pregunta concreta", price: "el usuario olvida una ruta que conocía", limits: "muestra posibilidades, no el futuro; decisiones ajenas pueden invalidarlo", evolution: "I marca una salida → II compara tres rutas → III revela una opción oculta junto a una consecuencia inevitable", consequences: "tener más información no garantiza elegir bien y puede hacer que el personaje dude demasiado" },
    { family: "costly", name: "Milagro de ceniza", category: "curación / sacrificio", potency: "5/5 · coste extremo", activation: "quemar un recuerdo escrito por la persona que quiere salvar", price: "el recuerdo desaparece también de la mente de su dueño original", limits: "no resucita a los muertos ni cura heridas que el usuario no comprende", evolution: "I cierra heridas leves → II estabiliza una muerte inminente → III reconstruye un cuerpo a cambio de borrar el vínculo más importante", consequences: "salvar una vida puede destruir la razón por la que el personaje quería salvarla" }
  ];
  let lastGeneratedPowerIndex = -1;

  function bindStoryEditor(container, story) {
    const createButton = $("#story-create-button", container);
    if (createButton) createButton.addEventListener("click", createStory);
    const metaForm = $("#story-meta-form", container);
    const generateOutlineButton = $("#story-generate-outline-button", container);
    if (generateOutlineButton && metaForm) generateOutlineButton.addEventListener("click", async () => {
      const form = new FormData(metaForm);
      const count = Number.parseInt(String(form.get("storyChapterCount") || "24"), 10);
      const status = $("#story-outline-status", container);
      if (!Number.isInteger(count) || count < 1 || count > 500) {
        if (status) status.textContent = "Elegí entre 1 y 500 capítulos.";
        return;
      }
      if (story.chapters.length && !confirm("Se regenerarán los títulos y resúmenes del índice. Los manuscritos, IDs y estados existentes se conservarán. ¿Continuar?")) return;
      const ending = String(form.get("storyEndingType") || "closed");
      const cast = String(form.get("storyCastPlan") || "").trim();
      const antagonist = String(form.get("storyAntagonistPlan") || "").trim();
      const romance = String(form.get("storyRomancePlan") || "").trim();
      const trauma = String(form.get("storyTraumaPlan") || "").trim();
      const premise = String(form.get("storyPremise") || "").trim();
      const conflict = String(form.get("storyConflict") || "").trim();
      const world = String(form.get("storyWorldRules") || "").trim();
      const powers = String(form.get("storyPowerCatalog") || "").trim();
      const arcs = String(form.get("storyArcs") || "").split("\n").map(line => line.trim()).filter(Boolean);
      const phases = [
        { key: "Presentación", start: 0, end: 0.12, purpose: "presentar el mundo, la rutina, los personajes, sus deseos y la primera anomalía", beats: ["mostrar una rutina concreta antes de alterarla", "presentar una relación mediante una acción, no solo descripción", "hacer visible una regla del mundo y su coste", "plantear una decisión pequeña con consecuencias", "introducir el incidente que vuelve imposible seguir igual"] },
        { key: "Progreso y complicaciones", start: 0.12, end: 0.35, purpose: "construir alianzas, entrenar habilidades, explorar el mundo y lograr avances con costes", beats: ["probar una estrategia y revelar una limitación", "dar al coprotagonista una decisión que cambie el plan", "obtener una victoria parcial que abra un problema mayor", "profundizar un vínculo mediante conflicto y cooperación", "mostrar al antagonista adaptándose a los avances del elenco"] },
        { key: "Escalada y punto medio", start: 0.35, end: 0.55, purpose: "elevar el riesgo, revelar información y obligar al protagonista a revisar su estrategia", beats: ["revelar una pista que reinterprete una escena previa", "hacer que un poder o recurso cobre un precio tangible", "forzar una alianza incómoda o una ruptura", "convertir el objetivo inicial en algo más complejo", "mostrar que la oposición entiende mejor una debilidad del grupo"] },
        { key: "Falsa seguridad y caída", start: 0.55, end: 0.76, purpose: "hacer que una victoria aparente genere exceso de confianza y una derrota causal", beats: ["conceder una victoria que parezca confirmar el método del héroe", "mostrar la arrogancia o el punto ciego que esa victoria alimenta", "hacer que el antagonista explote una regla ya establecida", "cobrar una consecuencia por una decisión anterior", "quebrar una alianza, recurso o creencia central", "obligar al elenco a asumir responsabilidad en vez de buscar un atajo"] },
        { key: "Reconstrucción y clímax", start: 0.76, end: 0.92, purpose: "integrar lo aprendido y resolver el conflicto mediante decisiones con precio", beats: ["reformular el objetivo tras aceptar una verdad incómoda", "combinar habilidades del elenco en lugar de una solución milagrosa", "hacer que el protagonista renuncie a una ventaja dañina", "confrontar al antagonista con la contradicción de su objetivo", "pagar una deuda sembrada en capítulos anteriores"] },
        { key: "Desenlace", start: 0.92, end: 1, purpose: "mostrar consecuencias y cerrar o abrir deliberadamente las preguntas principales", beats: ["mostrar el coste inmediato de la resolución", "dar a cada personaje central una consecuencia concreta", "reflejar cómo cambió el mundo o la relación principal", "dejar una imagen final que dialogue con el comienzo"] }
      ];
      const endingLine = ending === "open"
        ? "El final debe resolver el arco emocional inmediato, pero dejar una pregunta central, una consecuencia o una nueva ruta abierta; no cortar arbitrariamente en mitad de la acción."
        : ending === "bittersweet"
          ? "El conflicto principal llega a una resolución, pero una pérdida irreversible impide que la victoria sea gratuita."
          : ending === "cliffhanger"
            ? "Cerrar el arco del volumen en lo posible y terminar con una revelación o decisión que cambie el tablero; no sustituir el desarrollo por un corte sin preparación."
            : "Resolver el conflicto principal y mostrar consecuencias suficientes para que el lector entienda qué cambió; las subtramas secundarias pueden continuar.";
      story.chapterCount = count;
      story.endingType = ending;
      story.castPlan = cast; story.antagonistPlan = antagonist; story.romancePlan = romance; story.traumaPlan = trauma;
      story.name = String(form.get("storyName") || story.name).trim();
      story.description = String(form.get("storyDescription") || "").trim();
      story.premise = premise; story.conflict = conflict;
      story.worldRules = world; story.powerCatalog = powers;
      story.arcs = arcs;
      const oldChapters = story.chapters.slice();
      story.chapters = Array.from({ length: count }, (_, index) => {
        const n = index + 1, position = count === 1 ? 1 : (index / (count - 1));
        const phase = phases.find(item => position >= item.start && (position < item.end || item.end === 1)) || phases[phases.length - 1];
        const phaseChapters = Array.from({ length: count }, (_, j) => j + 1).filter(num => {
          const pos = count === 1 ? 1 : ((num - 1) / (count - 1));
          return pos >= phase.start && (pos < phase.end || phase.end === 1);
        });
        const within = Math.max(0, phaseChapters.indexOf(n));
        const beat = phase.beats[within % phase.beats.length];
        const existing = oldChapters[index] || {};
        const title = (phase.key + ": " + beat.charAt(0).toLocaleUpperCase("es") + beat.slice(1)).slice(0, 180);
        const context = [
          premise ? "Premisa a desarrollar: " + premise : "",
          conflict ? "Conflicto central: " + conflict : "",
          cast ? "Elenco y objetivos: " + cast : "",
          antagonist ? "Oposición: " + antagonist : "",
          romance ? "Vínculo afectivo: " + romance : "",
          trauma ? "Heridas y recuperación: " + trauma : "",
          world ? "Reglas del mundo que deben respetarse: " + world : "",
          powers ? "Poderes y costes registrados: " + powers : "",
          arcs.length ? "Arcos que deben avanzar: " + arcs.join("; ") : ""
        ].filter(Boolean);
        const endingNote = n === count ? " " + endingLine : "";
        const summary = "Función del tramo: " + phase.purpose + ". En este capítulo: " + beat + ". La escena debe mostrar quién toma la decisión, qué intenta conseguir, qué obstáculo concreto aparece, qué precio paga y qué cambia al final. " +
          (context.length ? context.join(" ") + " " : "Concretá aquí la acción específica, la localización, el personaje focal y la consecuencia causal; evitá resolverlo con una coincidencia.") +
          (n === 1 ? " Establecé una imagen o situación inicial que pueda contrastar con el desenlace." : "") +
          (n === count ? endingNote : " Cerrá con una consecuencia, una pregunta o una nueva complicación que empuje al capítulo siguiente.");
        return { id: existing.id || ("chapter-" + Date.now().toString(36) + "-" + n), title, summary: summary.slice(0, 4000), content: existing.content || "", status: existing.status || "outline" };
      });
      const saved = await saveProject();
      renderDirectory();
      const nextStatus = $("#story-outline-status", container);
      if (nextStatus) nextStatus.textContent = (saved ? "Índice de " : "Índice generado en pantalla, pero no se confirmó el guardado. Exportá el proyecto JSON. Se crearon ") + count + " capítulos con función narrativa y resumen; los manuscritos existentes se conservaron.";
      if (!saved) return;
    });
    const auditOutlineButton = $("#story-audit-outline-button", container);
    if (auditOutlineButton) auditOutlineButton.addEventListener("click", () => {
      const status = $("#story-outline-status", container);
      const chapters = story.chapters || [];
      const issues = [];
      const expected = Math.max(1, Math.min(500, Number(story.chapterCount) || chapters.length || 1));
      if (chapters.length !== expected) issues.push("El índice tiene " + chapters.length + " capítulos, pero el plan pide " + expected + ".");
      if (!chapters.length) issues.push("Todavía no existe un índice de capítulos.");
      chapters.forEach((chapter, index) => {
        if (!String(chapter.title || "").trim()) issues.push("Capítulo " + (index + 1) + ": falta título.");
        if (!String(chapter.summary || "").trim()) issues.push("Capítulo " + (index + 1) + ": falta resumen.");
      });
      if (!String(story.premise || "").trim()) issues.push("Falta una premisa; el índice puede ser genérico.");
      if (!String(story.conflict || "").trim()) issues.push("Falta el conflicto central.");
      if (!String(story.castPlan || "").trim()) issues.push("Falta definir protagonistas/coprotagonistas y sus objetivos.");
      if (!String(story.antagonistPlan || "").trim()) issues.push("Falta una fuerza opositora concreta.");
      if (issues.length) {
        if (status) status.textContent = "Auditoría: " + issues.length + " observaciones. " + issues.slice(0, 8).join(" ");
      } else if (status) status.textContent = "Auditoría básica aprobada: " + chapters.length + " capítulos tienen título y resumen. Esto no sustituye la revisión literaria ni la continuidad.";
    });
    const generatePowerButton = $("#story-power-generate-button", container);
    if (generatePowerButton) generatePowerButton.addEventListener("click", async () => {
      const catalog = $("[name='storyPowerCatalog']", container);
      const family = $("#story-power-family", container)?.value || "any";
      const available = powerIdeaLibrary.map((idea, index) => ({ idea, index })).filter(({ idea }) => family === "any" || idea.family === family);
      if (!available.length || !catalog) return;
      const existingNames = new Set((catalog.value.match(/^Nombre:\s*(.+)$/gm) || []).map((line) => line.replace(/^Nombre:\s*/, "").trim().toLocaleLowerCase("es")));
      const unseen = available.filter(({ idea, index }) => !existingNames.has(idea.name.toLocaleLowerCase("es")) && index !== lastGeneratedPowerIndex);
      const fallback = available.filter(({ idea }) => !existingNames.has(idea.name.toLocaleLowerCase("es")));
      const candidates = unseen.length ? unseen : fallback;
      if (!candidates.length) {
        const status = $("#story-power-generator-status", container);
        if (status) status.textContent = "No quedan ideas nuevas en esta familia. Cambiá el filtro para explorar otras, sin duplicar las que ya guardaste.";
        return;
      }
      const candidate = candidates[Math.floor(Math.random() * candidates.length)];
      lastGeneratedPowerIndex = candidate.index;
      const idea = candidate.idea;
      const block = [
        "Nombre: " + idea.name,
        "Categoría: " + idea.category,
        "Potencia: " + idea.potency,
        "Activación: " + idea.activation,
        "Precio: " + idea.price,
        "Límites: " + idea.limits,
        "Evolución: " + idea.evolution,
        "Consecuencias: " + idea.consequences
      ].join("\n");
      catalog.value = catalog.value.trim() ? catalog.value.trim() + "\n\n---\n\n" + block : block;
      story.powerCatalog = catalog.value;
      const status = $("#story-power-generator-status", container);
      if (status) status.textContent = "Idea añadida: " + idea.name + ". Generá otra o editá el bloque; el catálogo no se sobrescribió.";
      const saved = await saveProject();
      const editorStatus = $("#story-editor-status", container);
      if (editorStatus) editorStatus.textContent = saved ? "Poder añadido y guardado en el proyecto local." : "Poder añadido en pantalla, pero no se confirmó el guardado. Exportá el proyecto JSON.";
    });
    let lastWritingField = null;
    container.addEventListener("focusin", (event) => {
      if (event.target && event.target.tagName === "TEXTAREA" && !event.target.closest(".word-alternatives-panel")) lastWritingField = event.target;
    });
    const wordQuery = $("#story-word-query", container);
    const wordResults = $("#story-word-results", container);
    const wordStatus = $("#story-word-status", container);
    const findWordButton = $("#story-word-search-button", container);
    const renderWordResults = () => {
      if (!wordQuery || !wordResults) return;
      const query = wordQuery.value.trim();
      wordResults.replaceChildren();
      if (!query) {
        const empty = document.createElement("p"); empty.className = "field-help"; empty.textContent = "Escribí una palabra para buscar alternativas."; wordResults.appendChild(empty); return;
      }
      const normalized = normalizeWord(query);
      const entry = wordAlternatives.find((item) => item.words.some((word) => normalizeWord(word) === normalized));
      if (!entry) {
        const empty = document.createElement("p"); empty.className = "field-help"; empty.textContent = "Todavía no hay una entrada local para «" + query + "». Probá una forma base o una palabra cercana. El diccionario se puede ampliar."; wordResults.appendChild(empty); return;
      }
      const isEnglish = ["grow", "grew", "grown"].includes(normalized);
      [["Sinónimos", isEnglish && entry.englishSynonyms ? entry.englishSynonyms : entry.synonyms], ["Antónimos y contrastes", isEnglish && entry.englishAntonyms ? entry.englishAntonyms : entry.antonyms]].forEach(([heading, words]) => {
        const group = document.createElement("div"); group.className = "story-word-group";
        const title = document.createElement("h4"); title.textContent = heading; group.appendChild(title);
        const list = document.createElement("div"); list.className = "power-generator-controls";
        words.forEach((word) => {
          const button = document.createElement("button"); button.type = "button"; button.className = "outline-button story-word-choice"; button.textContent = word;
          button.addEventListener("click", () => {
            if (!lastWritingField || !container.contains(lastWritingField)) {
              if (wordStatus) wordStatus.textContent = "Primero seleccioná una palabra en un campo de texto o manuscrito; después elegí la alternativa.";
              return;
            }
            const field = lastWritingField;
            const value = field.value;
            let start = field.selectionStart == null ? value.length : field.selectionStart;
            let end = field.selectionEnd == null ? start : field.selectionEnd;
            if (start === end) {
              const needle = query;
              const before = value.slice(0, start);
              const found = normalizeWord(before).lastIndexOf(normalizeWord(needle));
              if (found >= 0) { start = found; end = found + needle.length; }
            }
            field.setRangeText(word, start, end, "select");
            field.dispatchEvent(new Event("input", { bubbles: true }));
            field.focus();
            if (wordStatus) wordStatus.textContent = "Alternativa insertada: «" + word + "». Guardá el capítulo o la historia para conservar el cambio.";
          });
          list.appendChild(button);
        });
        group.appendChild(list);
        if (entry.note) { const note = document.createElement("p"); note.className = "field-help"; note.textContent = entry.note; group.appendChild(note); }
        wordResults.appendChild(group);
      });
    };
    if (findWordButton) findWordButton.addEventListener("click", renderWordResults);
    if (wordQuery) wordQuery.addEventListener("keydown", (event) => { if (event.key === "Enter") { event.preventDefault(); renderWordResults(); } });
    if (metaForm) metaForm.addEventListener("submit", async (event) => {
      event.preventDefault();
      const form = new FormData(metaForm);
      story.name = String(form.get("storyName") || "").trim();
      story.description = String(form.get("storyDescription") || "").trim();
      story.premise = String(form.get("storyPremise") || "").trim();
      story.conflict = String(form.get("storyConflict") || "").trim();
      story.chapterCount = Math.max(1, Math.min(500, Number.parseInt(String(form.get("storyChapterCount") || "24"), 10) || 24));
      story.endingType = String(form.get("storyEndingType") || "closed");
      story.castPlan = String(form.get("storyCastPlan") || "").trim();
      story.antagonistPlan = String(form.get("storyAntagonistPlan") || "").trim();
      story.romancePlan = String(form.get("storyRomancePlan") || "").trim();
      story.traumaPlan = String(form.get("storyTraumaPlan") || "").trim();
      story.worldType = String(form.get("storyWorldType") || "unspecified");
      story.worldRules = String(form.get("storyWorldRules") || "").trim();
      story.worldDynamics = String(form.get("storyWorldDynamics") || "").trim();
      story.revealType = String(form.get("storyRevealType") || "none");
      story.revealSecret = String(form.get("storyRevealSecret") || "").trim();
      story.revealClues = String(form.get("storyRevealClues") || "").trim();
      story.revealTiming = String(form.get("storyRevealTiming") || "").trim();
      story.revealConsequences = String(form.get("storyRevealConsequences") || "").trim();
      story.powerCatalog = String(form.get("storyPowerCatalog") || "").trim();
      story.pantheon = String(form.get("storyPantheon") || "").trim();
      story.ensemble = String(form.get("storyEnsemble") || "").trim();
      story.status = String(form.get("storyStatus") || "draft");
      story.arcs = String(form.get("storyArcs") || "").split("\n").map((line) => line.trim()).filter(Boolean);
      const saved = await saveProject();
      renderDirectory();
      const status = $("#story-editor-status", container);
      if (status) status.textContent = saved ? "Historia guardada en el proyecto local." : "No se pudo confirmar el guardado. Exportá el proyecto JSON como respaldo.";
    });
    $$(".story-chapter-form", container).forEach((formNode) => formNode.addEventListener("submit", async (event) => {
      event.preventDefault();
      const chapter = story.chapters.find((item) => item.id === formNode.dataset.chapterId);
      if (!chapter) return;
      const form = new FormData(formNode);
      chapter.title = String(form.get("chapterTitle") || "").trim();
      chapter.summary = String(form.get("chapterSummary") || "").trim();
      chapter.content = String(form.get("chapterContent") || "");
      chapter.status = String(form.get("chapterStatus") || "draft");
      const saved = await saveProject();
      renderDirectory();
      const status = $("#story-editor-status", container);
      if (status) status.textContent = saved ? "Capítulo guardado en el proyecto local." : "No se pudo confirmar el guardado. Exportá el proyecto JSON como respaldo.";
    }));
    $$(".story-chapter-form [data-delete-chapter]", container).forEach((button) => button.addEventListener("click", async () => {
      if (!confirm("¿Eliminar este capítulo? Esta acción se guardará en el proyecto actual.")) return;
      story.chapters = story.chapters.filter((chapter) => chapter.id !== button.dataset.deleteChapter);
      await saveProject();
      renderDirectory();
    }));
    const addChapter = $("#story-add-chapter-button", container);
    if (addChapter) addChapter.addEventListener("click", async () => {
      const number = story.chapters.length + 1;
      story.chapters.push({ id: "chapter-" + Date.now().toString(36) + "-" + number, title: "Capítulo " + number, summary: "", content: "", status: "draft" });
      await saveProject();
      renderDirectory();
      const firstField = container.querySelector(".story-chapter-form:last-of-type input[name='chapterTitle']");
      if (firstField) firstField.focus();
    });
    const deleteStory = $("#story-delete-button", container);
    if (deleteStory) deleteStory.addEventListener("click", async () => {
      if (!confirm("¿Eliminar la historia y todos sus capítulos? Exportá una copia antes si querés conservarla.")) return;
      state.stories = state.stories.filter((item) => item.id !== story.id);
      selectedStoryId = null;
      await saveProject();
      renderDirectory();
    });
    const importButton = $("#story-import-button", container);
    const importInput = $("#story-import-file", container);
    if (importButton && importInput) importButton.addEventListener("click", () => importInput.click());
    if (importInput) importInput.addEventListener("change", async () => {
      const file = importInput.files && importInput.files[0];
      if (!file) return;
      try {
        const markdown = await file.text();
        const parsed = parseMarkdownStory(markdown, file.name);
        if (!parsed.chapters.length) throw new Error("No encontré capítulos. Usá encabezados «## Capítulo 1 — Título».");
        if (!confirm("Importar «" + parsed.name + "» con " + parsed.chapters.length + " capítulos reemplazará los campos y capítulos de esta historia. ¿Continuar?")) {
          importInput.value = "";
          return;
        }
        story.name = parsed.name;
        story.description = parsed.description;
        story.premise = parsed.premise;
        story.conflict = parsed.conflict || story.conflict || "";
        story.worldType = parsed.worldType || "unspecified";
        story.worldRules = parsed.worldRules || "";
        story.worldDynamics = parsed.worldDynamics || "";
        story.revealType = parsed.revealType || "none";
        story.revealSecret = parsed.revealSecret || "";
        story.revealClues = parsed.revealClues || "";
        story.revealTiming = parsed.revealTiming || "";
        story.revealConsequences = parsed.revealConsequences || "";
        story.powerCatalog = parsed.powerCatalog || "";
        story.pantheon = parsed.pantheon || "";
        story.ensemble = parsed.ensemble || "";
        story.arcs = parsed.arcs;
        story.chapters = parsed.chapters;
        story.status = "draft";
        await saveProject();
        renderDirectory();
      } catch (error) {
        alert("No se pudo importar el manuscrito: " + error.message);
      } finally {
        importInput.value = "";
      }
    });
    const exportButton = $("#story-export-button", container);
    if (exportButton) exportButton.addEventListener("click", () => {
      const markdown = "# " + (story.name || "Historia sin título") + "\n\n" +
        "## Sinopsis\n\n" + (story.description || "Sinopsis pendiente.") + "\n\n" +
        "## Premisa\n\n" + (story.premise || "Premisa pendiente.") + "\n\n" +
        "## Conflicto central\n\n" + (story.conflict || "Conflicto pendiente.") + "\n\n" +
        "## Tipo de mundo\n\n" + (story.worldType || "unspecified") + "\n\n" +
        "## Reglas del mundo\n\n" + (story.worldRules || "") + "\n\n" +
        "## Dinámica del mundo\n\n" + (story.worldDynamics || "") + "\n\n" +
        "## Motor de revelación\n\n" + (story.revealType || "none") + "\n\n" +
        "## Secreto central\n\n" + (story.revealSecret || "") + "\n\n" +
        "## Pistas y falsas interpretaciones\n\n" + (story.revealClues || "") + "\n\n" +
        "## Momento de revelación\n\n" + (story.revealTiming || "") + "\n\n" +
        "## Consecuencias del giro\n\n" + (story.revealConsequences || "") + "\n\n" +
        "## Panteón y papel de las diosas\n\n" + (story.pantheon || "") + "\n\n" +
        "## Reparto coral y arcos individuales\n\n" + (story.ensemble || "") + "\n\n" +
        "## Catálogo de poderes y evolución\n\n" + (story.powerCatalog || "") + "\n\n" +
        "## Arcos narrativos\n\n" + (story.arcs || []).map((arc) => "- " + (typeof arc === "string" ? arc : arc.title || arc.description || "")).join("\n") + "\n\n" +
        (story.chapters || []).map((chapter, index) => "## Capítulo " + (index + 1) + ": " + (chapter.title || "Sin título") + "\n\n" + (chapter.summary ? "> " + chapter.summary + "\n\n" : "") + (chapter.content || "_Capítulo sin redactar._") + "\n").join("\n");
      const url = URL.createObjectURL(new Blob([markdown], { type: "text/markdown;charset=utf-8" }));
      const link = document.createElement("a");
      link.href = url;
      link.download = (story.name || "historia").normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-zA-Z0-9_-]+/g, "-").replace(/^-+|-+$/g, "").toLowerCase() + ".md";
      link.click();
      URL.revokeObjectURL(url);
    });
  }

  function parseMarkdownStory(markdown, filename) {
    const text = String(markdown || "").replace(/\r\n?/g, "\n");
    const titleMatch = text.match(/^#\s+(.+)$/m);
    const name = titleMatch ? titleMatch[1].trim() : String(filename || "Historia").replace(/\.md$/i, "").replace(/[-_]+/g, " ");
    const synopsisMatch = text.match(/^##\s+Sinopsis\s*\n+([\s\S]*?)(?=\n#{1,3}\s|\n---\s*$|$)/im);
    const description = synopsisMatch ? synopsisMatch[1].trim() : "";
    const chapterPattern = /^##\s+Cap[ií]tulo\s+(\d+)\s*[—–:-]\s*(.+?)\s*\n([\s\S]*?)(?=^##\s+Cap[ií]tulo\s+\d+\s*[—–:-]|(?![\s\S]))/gim;
    const readSection = (heading) => {
      const header = new RegExp("^##\\s+" + heading + "\\s*$", "im");
      const found = header.exec(text);
      if (!found) return "";
      const start = found.index + found[0].length;
      const remainder = text.slice(start).replace(/^\s*\n/, "");
      const nextHeading = remainder.search(/^#{1,3}\s/m);
      return (nextHeading < 0 ? remainder : remainder.slice(0, nextHeading)).trim();
    };
    const conflict = readSection("Conflicto central");
    const worldType = readSection("Tipo de mundo");
    const worldRules = readSection("Reglas del mundo");
    const worldDynamics = readSection("Dinámica del mundo");
    const revealType = readSection("Motor de revelación");
    const revealSecret = readSection("Secreto central");
    const revealClues = readSection("Pistas y falsas interpretaciones");
    const revealTiming = readSection("Momento de revelación");
    const revealConsequences = readSection("Consecuencias del giro");
    const powerCatalog = readSection("Catálogo de poderes y evolución");
    const pantheon = readSection("Panteón y papel de las diosas");
    const ensemble = readSection("Reparto coral y arcos individuales");
    const chapters = [];
    let match;
    while ((match = chapterPattern.exec(text)) !== null) {
      const content = match[3].trim();
      const summary = content.split(/\n\s*\n/).filter(Boolean).slice(0, 2).join(" ").slice(0, 700);
      chapters.push({
        id: "chapter-import-" + String(match[1]).padStart(3, "0") + "-" + Date.now().toString(36),
        title: match[2].trim(),
        summary,
        content,
        status: "complete"
      });
    }
    const elencoMatch = text.match(/^##\s+Elenco y motores dram[aá]ticos\s*\n([\s\S]*?)(?=\n---|\n##\s+Cap[ií]tulo|(?![\s\S]))/im);
    const arcs = [];
    if (elencoMatch) {
      for (const line of elencoMatch[1].split("\n")) {
        const arc = line.match(/^\s*[-*]\s+\*\*([^*]+?)(?::)?\*\*:?\s*(.+)$/);
        if (arc) arcs.push(arc[1].trim() + ": " + arc[2].trim());
      }
    }
    return { name, description, premise: description, conflict, worldType, worldRules, worldDynamics, revealType, revealSecret, revealClues, revealTiming, revealConsequences, powerCatalog, pantheon, ensemble, arcs, chapters };
  }

  async function createStory() {
    if (!Array.isArray(state.stories)) state.stories = [];
    const story = { id: "story-" + Date.now().toString(36), name: "Nueva historia", description: "", premise: "", conflict: "", chapterCount: 24, endingType: "closed", castPlan: "", antagonistPlan: "", romancePlan: "", traumaPlan: "", worldType: "unspecified", worldRules: "", worldDynamics: "", revealType: "none", revealSecret: "", revealClues: "", revealTiming: "", revealConsequences: "", powerCatalog: "", arcs: [], chapters: [], status: "idea" };
    state.stories.push(story);
    selectedStoryId = story.id;
    activeView = "stories";
    await saveProject();
    render();
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


  let loreIndexPromise = null;
  let lorePanelPrepared = false;
  let onlineSourceDirectoryPrepared = false;
  let loreArchiveIndex = null;
  let archiveUiPrepared = false;
  let activeArchiveCharacterId = null;
  let activeArchiveContinuity = null;
  let activeArchiveTab = "summary";
  let activeArchiveProfile = null;
  const archiveNavigationStack = [];

  function archiveElement(tag, className, text) {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (text !== undefined && text !== null) node.textContent = text;
    return node;
  }
  function archiveBadge(text, kind) { return archiveElement("span", "archive-badge" + (kind ? " archive-badge--" + kind : ""), text); }
  function archivePortrait(id, name, large, continuity) {
    const node = archiveElement("div", "archive-portrait" + (large ? " archive-portrait--large" : "") + " archive-portrait--" + String(id||"").toLowerCase().replace(/[^a-z0-9-]/g,""));
    const portraitSources = {
      "CHAR-RYUU-LION": "./assets/character-portraits/ryu-lion.svg",
      "CHAR-ALISE-LOVELACE": "./assets/character-portraits/alise-lovelace.svg",
      "CHAR-ASTREA": "./assets/character-portraits/astrea.svg",
      "CHAR-KAGUYA": "./assets/character-portraits/kaguya.svg",
      "CHAR-LYRA": "./assets/character-portraits/lyra.svg",
      "DM-CHAR-BELL": "./assets/character-portraits/bell-cranel.svg",
      "DM-CHAR-HESTIA": "./assets/character-portraits/hestia.svg",
      "DM-CHAR-AIS": "./assets/character-portraits/ais-wallenstein.svg",
      "DM-CHAR-EINA": "./assets/character-portraits/eina-tulle.svg",
      "CHAR-FINN-DEIMNE": "./assets/character-portraits/finn-deimne.svg",
      "CHAR-FREYA": "./assets/character-portraits/freya.svg",
      "CHAR-OTTAR": "./assets/character-portraits/ottar.svg"
    };
    const official = typeof window.WordWaifuOfficialCharacterRoster !== "undefined"
      ? window.WordWaifuOfficialCharacterRoster.get(id) : null;
    const fallbackSource = portraitSources[id] || "";
    const selectedContinuity = continuity || "ALL";
    const historicalReference = selectedContinuity === "CONT-AR" && official && official.historicalImageUrl;
    const mayUseOfficialPortrait = selectedContinuity === "ALL" || selectedContinuity === "CONT-ANIME";
    const officialSource = historicalReference ? official.historicalImageUrl
      : mayUseOfficialPortrait && official && official.imageUrl ? official.imageUrl : "";
    const initial = String(name || "?").trim().charAt(0).toUpperCase() || "?";
    node.setAttribute("role", "img");
    node.setAttribute("aria-label", officialSource
      ? (historicalReference ? "Retrato oficial de referencia de DanMachi IV; no específico de la época " + selectedContinuity + "."
        : "Retrato oficial enlazado desde " + (official.sourcePage || "la web oficial") + "; derechos de terceros.")
      : fallbackSource ? "Ilustración vectorial conceptual original de " + name + ", no oficial."
      : "Inicial representativa de " + name + "; no hay retrato verificado disponible.");
    const caption = large ? archiveElement("span","archive-portrait-caption",
      historicalReference ? "REFERENCIA VISUAL OFICIAL · NO ESPECÍFICA DE ÉPOCA"
        : officialSource ? "IMAGEN OFICIAL · ENLACE EXTERNO" : fallbackSource ? "ILUSTRACIÓN ORIGINAL · NO OFICIAL" : "SIN RETRATO VERIFICADO") : null;
    function showInitial() {
      node.replaceChildren(archiveElement("span","",initial));
      if (large) node.appendChild(archiveElement("span","archive-portrait-caption","SIN RETRATO DISPONIBLE"));
      node.setAttribute("aria-label","Sin imagen disponible para " + name + ".");
    }
    const activeSource = officialSource || fallbackSource;
    let portraitImage = null;
    if (activeSource) {
      portraitImage = document.createElement("img");
      portraitImage.className = "archive-portrait-art";
      portraitImage.src = activeSource;
      portraitImage.alt = "";
      portraitImage.decoding = "async";
      portraitImage.loading = large ? "eager" : "lazy";
      portraitImage.referrerPolicy = "strict-origin-when-cross-origin";
      portraitImage.addEventListener("error", () => {
        if (portraitImage.dataset.customArt === "true" && (officialSource || fallbackSource)) {
          portraitImage.dataset.customArt = "false";
          portraitImage.src = officialSource || fallbackSource;
          if (caption) caption.textContent = officialSource ? "IMAGEN OFICIAL · ENLACE EXTERNO" : "ILUSTRACIÓN DE RESPALDO · NO OFICIAL";
          return;
        }
        if (officialSource && fallbackSource && portraitImage.src !== new URL(fallbackSource, window.location.href).href) {
          portraitImage.src = fallbackSource;
          node.setAttribute("aria-label","Ilustración conceptual local de " + name + ", no oficial; el retrato externo no cargó.");
          if (caption) caption.textContent = "ILUSTRACIÓN DE RESPALDO · NO OFICIAL";
          return;
        }
        showInitial();
      });
      node.appendChild(portraitImage);
    } else node.appendChild(archiveElement("span","",initial));
    if (caption) node.appendChild(caption);
    if (window.WordWaifuArtStudio && typeof window.WordWaifuArtStudio.getAsset === "function") {
      window.WordWaifuArtStudio.getAsset("character", id).then(asset => {
        if (!asset || !asset.src) return;
        // Profile header copies portrait children into a stable container, so
        // apply the resolved assignment to every connected portrait for this ID.
        const portraitClass = "archive-portrait--" + String(id||"").toLowerCase().replace(/[^a-z0-9-]/g,"");
        const targets = node.isConnected ? [node] : Array.from(document.querySelectorAll("." + portraitClass));
        targets.forEach(target => {
          let image = target.querySelector(".archive-portrait-art");
          if (!image) {
            image = document.createElement("img");
            image.className = "archive-portrait-art";
            image.alt = "";
            image.decoding = "async";
            image.loading = large ? "eager" : "lazy";
            image.addEventListener("error", () => {
              if (officialSource || fallbackSource) image.src = officialSource || fallbackSource;
              else target.replaceChildren(archiveElement("span","",initial));
            });
            target.replaceChildren(image);
            if (large) target.appendChild(archiveElement("span","archive-portrait-caption","ARTE PERSONALIZADO · BIBLIOTECA LOCAL"));
          }
          image.dataset.customArt = "true";
          image.src = asset.src;
          target.setAttribute("aria-label", "Arte personalizado asignado a " + name + ".");
          const targetCaption = target.querySelector(".archive-portrait-caption");
          if (targetCaption) targetCaption.textContent = "ARTE PERSONALIZADO · BIBLIOTECA LOCAL";
        });
      }).catch(() => {});
    }
    return node;
  }
  const archiveCommunityReferences={
    "CHAR-RYUU-LION":{name:"Ryuu Lion",url:"https://danmachi.fandom.com/es/wiki/Ryuu_Lion"},
    "CHAR-ALISE-LOVELACE":{name:"Alise Lovell",url:"https://danmachi.fandom.com/es/wiki/Alise_Lovell"},
    "CHAR-ASTREA":{name:"Astrea",url:"https://danmachi.fandom.com/es/wiki/Astrea"},
    "CHAR-KAGUYA":{name:"Gojouno Kaguya",url:"https://danmachi.fandom.com/es/wiki/Gojouno_Kaguya"},
    "CHAR-LYRA":{name:"Lyra",url:"https://danmachi.fandom.com/es/wiki/Lyra"},
    "DM-CHAR-BELL":{name:"Bell Cranel",url:"https://danmachi.fandom.com/es/wiki/Bell_Cranel"},
    "DM-CHAR-HESTIA":{name:"Hestia",url:"https://danmachi.fandom.com/es/wiki/Hestia"},
    "DM-CHAR-AIS":{name:"Ais Wallenstein",url:"https://danmachi.fandom.com/es/wiki/Ais_Wallenstein"},
    "DM-CHAR-EINA":{name:"Eina Tulle",url:"https://danmachi.fandom.com/es/wiki/Eina_Tulle"},
    "CHAR-FINN-DEIMNE":{name:"Finn Deimne",url:"https://danmachi.fandom.com/es/wiki/Finn_Deimne"},
    "CHAR-FREYA":{name:"Freya",url:"https://danmachi.fandom.com/es/wiki/Freya"},
    "CHAR-OTTAR":{name:"Ottar",url:"https://danmachi.fandom.com/es/wiki/Ottar"}
  };
  function archiveEvidence(claim) {
    const details=archiveElement("details","archive-evidence"),summary=archiveElement("summary","","Ver evidencia · "+(claim.claimId||claim.entryId||"afirmación")),body=archiveElement("div","archive-evidence-body");
    details.appendChild(summary);
    if(claim.sourceTitle)body.appendChild(archiveElement("p","","Fuente: "+claim.sourceTitle));
    if(claim.sourceIds&&claim.sourceIds.length)body.appendChild(archiveElement("p","","ID(s) de fuente: "+claim.sourceIds.join(", ")));
    if(claim.sourceLocator)body.appendChild(archiveElement("p","","Localizador / respaldo: "+claim.sourceLocator));
    if(claim.sourceDocument)body.appendChild(archiveElement("p","","Documento de evidencia: "+claim.sourceDocument));
    body.appendChild(archiveElement("p","","Continuidad: "+((claim.continuityScopes||[]).join(", ")||"no especificada")));
    if(claim.eraOrInterval)body.appendChild(archiveElement("p","","Periodo: "+claim.eraOrInterval));
    body.appendChild(archiveElement("p","","Tipo de evidencia: "+(claim.evidenceType||"no especificado")+" · Verificación: "+(claim.verificationStatus||"unverified")+" · Spoiler: "+(claim.spoilerLevel||"unknown")));
    if(claim.confidenceNote)body.appendChild(archiveElement("p","","Límites: "+claim.confidenceNote));
    const links=archiveElement("div","archive-source-links");
    const communityRefs=[...new Set(claim.characterIds||[])].map(id=>archiveCommunityReferences[id]).filter(Boolean);
    const sourceUrls=[...new Set(claim.sourceUrls||[])];
    const communityEntries=[];
    const seenCommunityUrls=new Set();
    [...communityRefs,...sourceUrls.filter(url=>String(url).toLowerCase().includes("fandom.com/es/")).map(url=>({name:"",url}))].forEach(ref=>{
      if(!ref.url||seenCommunityUrls.has(ref.url))return;
      seenCommunityUrls.add(ref.url);communityEntries.push(ref);
    });
    if(communityEntries.length){
      links.appendChild(archiveElement("p","archive-source-group-label","Lectura en español · wiki comunitaria, no oficial"));
      communityEntries.forEach(ref=>appendLoreLink(links,ref.name?"Leer ficha de "+ref.name+" en español":"Leer la referencia comunitaria en español",ref.url,true));
    }
    const primaryUrls=sourceUrls.filter(url=>!(String(url).toLowerCase().includes("fandom.com/es/")));
    if(primaryUrls.length){
      links.appendChild(archiveElement("p","archive-source-group-label","Fuentes originales y oficiales · algunas páginas están en japonés"));
      primaryUrls.forEach((url,i)=>{
        const label=url.includes("ga.sbcr.jp")?"Fuente editorial original (japonés)":url.includes("danmachi.com")?"Fuente oficial del anime (japonés)":(primaryUrls.length>1?"Abrir fuente original "+(i+1):"Abrir fuente original");
        appendLoreLink(links,label,url,true);
      });
    }
    if(links.childNodes.length)body.appendChild(links);
    details.appendChild(body);return details;
  }
  function archiveClaimCard(claim) {
    const card=archiveElement("article","archive-claim-card"),badges=archiveElement("div","archive-badge-row");
    card.appendChild(archiveElement("h4","",claim.heading||claim.claimId||"Afirmación documentada"));
    card.appendChild(archiveElement("p","",claim.claim));
    (claim.continuityScopes||[]).forEach(s=>badges.appendChild(archiveBadge(s,"continuity")));
    badges.appendChild(archiveBadge(claim.verificationStatus||"unverified","muted"));
    if(["major","endgame"].includes(String(claim.spoilerLevel||"").toLowerCase()))badges.appendChild(archiveBadge("Spoiler "+claim.spoilerLevel,"spoiler"));
    card.append(badges,archiveEvidence(claim));return card;
  }
  function archiveEmpty(text){return archiveElement("div","archive-empty",text||"Sin información suficiente en las fuentes incorporadas.");}
  function archiveGoTab(tab,label){const b=archiveElement("button","archive-related-link",label+" →");b.type="button";b.dataset.profileTab=tab;return b;}
  function renderCharacterDirectory(){
    if(!loreArchiveIndex||!window.WordWaifuCharacterArchive)return;
    const results=$("#character-archive-results"),status=$("#archive-directory-status");
    const items=window.WordWaifuCharacterArchive.list(loreArchiveIndex,{query:$("#character-archive-query").value,continuity:$("#archive-continuity").value,spoiler:$("#archive-spoiler").value});
    results.replaceChildren();
    const totalItems=window.WordWaifuCharacterArchive.list(loreArchiveIndex,{query:"",continuity:"ALL",spoiler:"all"}).length;
    document.querySelectorAll("#archive-quick-filters [data-archive-scope]").forEach(button=>{
      button.setAttribute("aria-pressed",button.dataset.archiveScope===$("#archive-continuity").value?"true":"false");
    });
    status.textContent=items.length
      ?items.length+" ficha(s) disponibles (de "+totalItems+"). Selección parcial: todavía no es la enciclopedia completa de DanMachi."
      :"0 ficha(s) disponibles (de "+totalItems+"). No hay coincidencias; probá otro nombre o una continuidad más amplia.";
    if(!items.length){results.appendChild(archiveEmpty("No hay personajes que coincidan con los filtros seleccionados."));return;}
    items.forEach(item=>{
      const card=archiveElement("article","archive-character-card");card.setAttribute("role","listitem");
      card.appendChild(archivePortrait(item.id,item.name,false,item.preferredContinuity || "ALL"));
      const copy=archiveElement("div","archive-character-copy");copy.appendChild(archiveElement("h4","",item.name));copy.appendChild(archiveElement("p","",item.summary));
      const badges=archiveElement("div","archive-badge-row");
      if(item.states.length)item.states.slice(0,3).forEach(st=>{badges.appendChild(archiveBadge(st.code,"continuity"));if(st.affiliation)badges.appendChild(archiveBadge(st.affiliation,"muted"));});
      else badges.appendChild(archiveBadge("Sin evidencia visible con este filtro","muted"));
      if(item.verifiedClaimCount)badges.appendChild(archiveBadge(item.verifiedClaimCount+" afirmaciones visibles","muted"));
      copy.appendChild(badges);
      const actions=archiveElement("div","archive-card-actions"),open=archiveElement("button","archive-open-button","Abrir ficha ↗");
      open.type="button";open.dataset.archiveOpen=item.id;open.dataset.archiveContinuity=item.preferredContinuity;actions.appendChild(open);copy.appendChild(actions);card.appendChild(copy);results.appendChild(card);
    });
  }
  function renderArchiveHeader(profile){
    $("#archive-profile-name").textContent=profile.name;$("#archive-profile-eyebrow").textContent="FICHA DE PERSONAJE · "+profile.id;
    $("#archive-profile-summary").textContent=profile.state.summary;$("#archive-profile-state-note").textContent=profile.state.period;
    const p=$("#archive-profile-portrait"),visual=archivePortrait(profile.id,profile.name,true,profile.continuity);p.className=visual.className;p.setAttribute("aria-label",visual.getAttribute("aria-label"));p.replaceChildren(...Array.from(visual.childNodes));
    const badges=$("#archive-profile-badges");badges.replaceChildren();badges.append(archiveBadge(profile.continuityLabel,"continuity"),archiveBadge(profile.state.affiliation,"muted"),archiveBadge("Estado provisional","muted"));
    if(profile.claims.some(c=>["major","endgame"].includes(String(c.spoilerLevel||"").toLowerCase())))badges.appendChild(archiveBadge("Incluye spoilers","spoiler"));
    const select=$("#archive-profile-continuity");select.replaceChildren();
    window.WordWaifuCharacterArchive.continuityOrder.forEach(scope=>{const opt=new Option((window.WordWaifuCharacterArchive.continuityLabels[scope]||scope)+(profile.availableContinuities.includes(scope)?"":" · sin evidencia registrada"),scope);if(!profile.availableContinuities.includes(scope))opt.disabled=true;select.appendChild(opt);});
    select.value=profile.continuity;$("#archive-profile-spoiler").value=$("#archive-spoiler").value;$("#archive-profile-back").textContent=archiveNavigationStack.length?"← Volver a ficha anterior":"← Volver a resultados";
    $("#archive-return-search").classList.remove("hidden");
    $$("#archive-profile-tabs [role=tab]").forEach(tab=>{const yes=tab.dataset.profileTab===activeArchiveTab;tab.setAttribute("aria-selected",yes?"true":"false");tab.tabIndex=yes?0:-1;});
    $("#archive-profile-panel").setAttribute("aria-labelledby","archive-tab-"+activeArchiveTab);
  }
  function renderArchiveRelationship(rel){
    const card=archiveElement("article","archive-relationship-card");card.appendChild(archivePortrait(rel.targetId,rel.targetName,false,rel.continuity));
    const copy=archiveElement("div","archive-relationship-copy");copy.appendChild(archiveElement("h4","",rel.targetName));copy.appendChild(archiveElement("p","archive-relationship-type",rel.type+" · "+rel.continuity));copy.appendChild(archiveElement("p","",rel.description));
    const badges=archiveElement("div","archive-badge-row");badges.append(archiveBadge(rel.continuity,"continuity"),archiveBadge(rel.period,"muted"));copy.appendChild(badges);
    const actions=archiveElement("div","archive-card-actions");
    if(rel.available){const link=archiveElement("button","archive-related-link",rel.label+" · Abrir ficha ↗");link.type="button";link.dataset.characterLink=rel.targetId;link.dataset.linkContinuity=rel.continuity;actions.appendChild(link);}
    else actions.appendChild(archiveElement("span","archive-unavailable","Ficha pendiente; no se creó un enlace roto."));
    copy.appendChild(actions);rel.claims.forEach(c=>copy.appendChild(archiveEvidence(c)));card.appendChild(copy);return card;
  }
  function renderArchiveMoment(moment){
    const d=archiveElement("details","archive-moment-card");d.dataset.momentId=moment.id;
    const summary=archiveElement("summary"),icon=archiveElement("span","archive-moment-icon",moment.id.includes("seven")?"◷":moment.id.includes("evilus")?"⚔":"✧");icon.setAttribute("aria-hidden","true");
    const title=archiveElement("span","archive-moment-title");title.append(archiveElement("strong","",moment.title),archiveElement("small","",moment.period));
    summary.append(icon,title);
    if(moment.people.length){
      const visualReference=archiveElement("div","archive-moment-visual-reference");
      visualReference.appendChild(archiveElement("p","archive-moment-visual-label",
        "RETRATOS OFICIALES DE PERSONAJES MENCIONADOS · NO ES UNA IMAGEN DE LA ESCENA"));
      const strip=archiveElement("div","archive-moment-character-strip");
      moment.people.slice(0,3).forEach(person=>{
        const tile=archiveElement("div","archive-moment-character");
        tile.appendChild(archivePortrait(person.id,person.name,false,activeArchiveContinuity));
        tile.appendChild(archiveElement("span","archive-moment-character-name",person.name));
        strip.appendChild(tile);
      });
      visualReference.appendChild(strip);
      summary.appendChild(visualReference);
    }
    summary.appendChild(archiveElement("span","archive-moment-excerpt",moment.summary));d.appendChild(summary);
    const body=archiveElement("div","archive-moment-body");body.appendChild(archiveElement("p","",moment.summary));
    const badges=archiveElement("div","archive-badge-row");if(moment.spoilerLevel!=="none")badges.appendChild(archiveBadge("Spoiler: "+moment.spoilerLevel,["major","endgame"].includes(moment.spoilerLevel)?"spoiler":"muted"));
    moment.claims.forEach(c=>badges.appendChild(archiveBadge(c.claimId,"muted")));body.appendChild(badges);
    if(moment.people.length){body.appendChild(archiveElement("p","","Personas con ficha mencionadas en la evidencia:"));const row=archiveElement("div","archive-character-links");moment.people.forEach(person=>{const b=archiveElement("button","archive-related-link",person.name+" ↗");b.type="button";b.dataset.characterLink=person.id;b.dataset.linkContinuity=activeArchiveContinuity;row.appendChild(b);});body.appendChild(row);}
    else body.appendChild(archiveEmpty("No se ha identificado una lista completa de participantes."));
    body.appendChild(archiveElement("p","","Fuentes y límites del resumen"));moment.claims.forEach(c=>body.appendChild(archiveEvidence(c)));d.appendChild(body);return d;
  }
  function renderRosterContinuityDossier(profile){
    const roster=window.WordWaifuOfficialCharacterRoster;
    const record=roster&&roster.get(profile.id);
    const dossier=record&&record.dossiers&&record.dossiers[profile.continuity];
    if(!dossier)return null;
    const section=archiveElement("section","archive-section archive-continuity-dossier");
    const heading=archiveElement("div","archive-section-heading");
    heading.append(archiveElement("h3","","Expediente de continuidad · "+(profile.continuityLabel||profile.continuity)));
    heading.append(archiveElement("p","",String(dossier.sourceLabel||"Fuente secundaria")+" · resumen de investigación"));
    section.appendChild(heading);
    if(dossier.sourceType==="secondary_compendium"){
      section.appendChild(archiveElement("p","archive-research-note","Fuente secundaria de consulta. Estos apuntes ayudan a explorar la ficha, pero no equivalen a una verificación de fuente primaria ni a un localizador de novela."));
    }
    const spoiler=String(dossier.spoilerLevel||"").toLowerCase();
    if(["major","endgame"].includes(spoiler)){
      section.appendChild(archiveElement("p","archive-research-note","Incluye spoilers importantes de esta continuidad."));
    }
    [
      ["Apariencia",dossier.appearance],
      ["Historia y contexto",dossier.history],
      ["Personalidad y evolución",dossier.development],
      ["Capacidades y combate",dossier.combatProfile],
      ["Hábitos y conducta",dossier.habits],
      ["Función narrativa",dossier.narrativeRole]
    ].forEach(([label,value])=>{
      if(!value||!String(value).trim())return;
      const block=archiveElement("div","archive-official-detail archive-dossier-detail");
      block.append(archiveElement("h4","",label),archiveElement("p","",String(value)));
      section.appendChild(block);
    });
    [
      ["Habilidades y capacidades",dossier.abilities],
      ["Relaciones importantes",dossier.relationshipDetails]
    ].forEach(([label,items])=>{
      if(!Array.isArray(items)||!items.length)return;
      const group=archiveElement("section","archive-continuity-list");
      group.appendChild(archiveElement("h4","",label));
      const list=archiveElement("ul","archive-continuity-items");
      items.forEach(item=>{
        const li=archiveElement("li","");
        if(typeof item==="string"){li.textContent=item;}
        else{
          const name=String(item&&item.name||item&&item.title||"Detalle");
          li.appendChild(archiveElement("strong","",name));
          const detail=String(item&&item.detail||item&&item.description||"");
          if(detail)li.appendChild(archiveElement("p","",detail));
        }
        list.appendChild(li);
      });
      group.appendChild(list);section.appendChild(group);
    });
    const urls=[dossier.sourceUrl,...(Array.isArray(dossier.sources)?dossier.sources:[])].filter((url,index,all)=>typeof url==="string"&&url.startsWith("https://")&&all.indexOf(url)===index);
    if(urls.length){
      const links=archiveElement("div","archive-official-source-links");
      urls.forEach((url,index)=>appendLoreLink(links,index===0?"Abrir fuente de referencia ↗":"Fuente complementaria "+index+" ↗",url,true));
      section.appendChild(links);
    }
    return section;
  }
    function renderArchiveSummary(profile){
    const root=archiveElement("div","archive-profile-content"),overview=archiveElement("section","archive-section");
    const top=archiveElement("div","archive-section-heading");top.append(archiveElement("h3","","Estado documentado"),archiveElement("p","","Solo información de la continuidad seleccionada."));overview.appendChild(top);
    const grid=archiveElement("div","archive-overview-grid"),identity=archiveElement("article","archive-info-card"),motivation=archiveElement("article","archive-info-card");
    identity.append(archiveElement("h4","","Identidad y afiliación"),archiveElement("p","",profile.state.affiliation),archiveElement("p","","ID estable: "+profile.id),archiveGoTab("sources","Ver fuentes"));
    const m=profile.claims.find(c=>(c.aspects||[]).includes("motivation"));motivation.append(archiveElement("h4","","Valores y motivaciones"),archiveElement("p","",m?m.claim:"Sin información suficiente en esta continuidad."),archiveGoTab("personality","Explorar personalidad"));
    grid.append(identity,motivation);overview.appendChild(grid);root.appendChild(overview);
    const continuityDossier=renderRosterContinuityDossier(profile);if(continuityDossier)root.appendChild(continuityDossier);
    const official = profile.continuity === "CONT-ANIME"
      ? (profile.officialReference ||
        (typeof window.WordWaifuOfficialCharacterRoster !== "undefined" ? window.WordWaifuOfficialCharacterRoster.get(profile.id) : null))
      : null;
    if (official) {
      const officialSection = archiveElement("section","archive-section archive-official-reference");
      const officialHeading = archiveElement("div","archive-section-heading");
      officialHeading.append(archiveElement("h3","","Ficha de referencia · adaptación oficial"),
        archiveElement("p","",official.sourceTitle + " · resumen original con atribución"));
      officialSection.appendChild(officialHeading);
      officialSection.appendChild(archiveElement("p","archive-official-summary",official.summary));
      const facts=archiveElement("div","archive-official-facts");
      [
        ["Familia / afiliación",official.family],
        ["Especie",official.species],
        ["Nivel",official.level == null ? "No indicado en esta referencia" : "Nivel " + official.level],
        ["Epíteto",official.epithet || "No indicado"],
        ["Voz",official.voice || "No indicada"],
        ["Función",official.role || "No indicada"]
      ].forEach(([label,value])=>{
        const item=archiveElement("article","archive-official-fact");
        item.append(archiveElement("span","",label),archiveElement("strong","",String(value)));
        facts.appendChild(item);
      });
      officialSection.appendChild(facts);
      const dossier = window.WordWaifuCharacterDossiers && window.WordWaifuCharacterDossiers.get(profile.id);
      if (dossier) {
        const dossierHeading = archiveElement("div","archive-section-heading");
        dossierHeading.append(archiveElement("h3","","Expediente ampliado"),archiveElement("p","","Contexto narrativo y rasgos concretos · "+official.name));
        officialSection.appendChild(dossierHeading);
        [
          ["Historia y contexto",dossier.history],
          ["Apariencia y diseño",dossier.appearance],
          ["Personalidad y conducta",dossier.personality],
          ["Habilidades y estilo de combate",dossier.abilities],
          ["Vínculos y dinámica de grupo",dossier.relationships],
          ["Conflictos y limitaciones",dossier.conflict]
        ].forEach(([headingText,bodyText])=>{
          if(!bodyText)return;
          const block=archiveElement("div","archive-official-detail archive-dossier-detail");
          block.append(archiveElement("h4","",headingText),archiveElement("p","",bodyText));
          officialSection.appendChild(block);
        });
      }
      [
        ["Personalidad y conducta",official.personality],
        ["Capacidades y función",official.abilities],
        ["Vínculos destacados",official.relationships]
      ].forEach(([headingText,bodyText])=>{
        if(!bodyText)return;
        const block=archiveElement("div","archive-official-detail");
        block.append(archiveElement("h4","",headingText),archiveElement("p","",bodyText));
        officialSection.appendChild(block);
      });
      const sourceLinks=archiveElement("div","archive-official-source-links");
      appendLoreLink(sourceLinks,"Abrir perfil oficial y fuente de la imagen ↗",official.sourcePage,true);
      const dossierForSources = window.WordWaifuCharacterDossiers && window.WordWaifuCharacterDossiers.get(profile.id);
      if (dossierForSources) {
        [...new Set(dossierForSources.sources || [])].forEach((url,index) => {
          appendLoreLink(sourceLinks,index===0?"Abrir wiki de referencia ↗":"Fuente complementaria ↗",url,true);
        });
      } else {
        const communitySearch = "https://danmachi.fandom.com/wiki/Special:Search?query=" + encodeURIComponent(official.name);
        appendLoreLink(sourceLinks,"Contrastar en la wiki comunitaria (fuente secundaria) ↗",communitySearch,true);
      }
      officialSection.appendChild(sourceLinks);
      officialSection.appendChild(archiveElement("p","archive-research-note",
        "La ilustración se carga desde el dominio oficial y no se copia al repositorio. La wiki comunitaria puede ofrecer más detalle, pero es secundaria y debe contrastarse; sin conexión se usa una ilustración conceptual local si existe."));
      root.appendChild(officialSection);
    }
    const relSection=archiveElement("section","archive-section"),rh=archiveElement("div","archive-section-heading");rh.append(archiveElement("h3","","Personas relacionadas"),archiveGoTab("relationships","Ver red completa"));relSection.appendChild(rh);
    const relGrid=archiveElement("div","archive-related-grid");if(profile.relationships.length)profile.relationships.slice(0,4).forEach(r=>relGrid.appendChild(renderArchiveRelationship(r)));else relGrid.appendChild(archiveEmpty("No hay vínculos personales respaldados para esta continuidad."));relSection.appendChild(relGrid);root.appendChild(relSection);
    const momentSection=archiveElement("section","archive-section"),mh=archiveElement("div","archive-section-heading");mh.append(archiveElement("h3","","Momentos importantes"),archiveGoTab("moments","Ver momentos y contexto"));momentSection.appendChild(mh);
    const moments=archiveElement("div","archive-moment-grid");if(profile.moments.length)profile.moments.slice(0,3).forEach(mo=>moments.appendChild(renderArchiveMoment(mo)));else moments.appendChild(archiveEmpty("No hay suficientes acontecimientos curados para esta continuidad."));momentSection.appendChild(moments);root.appendChild(momentSection);
    const more=archiveElement("section","archive-more-info-cta");more.append(archiveElement("h3","","¿Querés conocer mejor a "+profile.name+"?"),archiveElement("p","","Abrí un resumen ampliado con contexto, evolución, límites de la evidencia y referencias en español cuando están disponibles."));
    const moreButton=archiveElement("button","primary-button","Más info · resumen ampliado ↗");moreButton.type="button";moreButton.dataset.archiveMoreInfo="true";more.appendChild(moreButton);root.prepend(more);return root;
  }
  function renderArchivePersonality(profile){
    const root=archiveElement("div","archive-section"),h=archiveElement("div","archive-section-heading");h.append(archiveElement("h3","","Personalidad y psicología"),archiveElement("p","","Cada categoría se completa solo con afirmaciones del estado seleccionado."));root.appendChild(h);
    const grid=archiveElement("div","archive-personality-grid");
    [{key:"motivation",label:"Valores y motivaciones"},{key:"personality",label:"Temperamento y rasgos"},{key:"behavior",label:"Conducta y hábitos"},{key:"likes",label:"Gustos y preferencias"},{key:"fears",label:"Miedos y vulnerabilidades"},{key:"evolution",label:"Evolución emocional y psicológica"},{key:"voice",label:"Forma de hablar"}].forEach(cat=>{
      const card=archiveElement("article","archive-psychology-card");card.appendChild(archiveElement("h4","",cat.label));
      const matches=profile.claims.filter(c=>(c.aspects||[]).includes(cat.key));
      if(!matches.length)card.appendChild(archiveEmpty("Sin información suficiente para esta categoría en "+profile.continuity+"."));
      else matches.forEach(c=>{card.appendChild(archiveElement("p","",c.claim));card.appendChild(archiveEvidence(c));});grid.appendChild(card);
    });
    root.append(grid,archiveElement("p","archive-research-note","No se infieren gustos, temores, diagnósticos, pensamientos privados ni patrones de habla a partir de la ausencia de datos o de un acontecimiento traumático."));return root;
  }
  function renderArchiveFamilyNetwork(profile) {
    const rosterApi = window.WordWaifuOfficialCharacterRoster;
    if (!rosterApi || !loreArchiveIndex) return null;
    const raw = String((profile.officialReference && profile.officialReference.family) || profile.state.affiliation || "");
    const parts = raw.split(/\s*;\s*/).filter(Boolean);
    let chosenPart;
    if (profile.continuity === "CONT-AR") chosenPart = parts.find(part => /familia/i.test(part)) || parts[0];
    else if (profile.continuity === "CONT-ANIME") chosenPart = parts.find(part => /estado del anime|hostess of fertility/i.test(part)) || parts.find(part => /familia/i.test(part)) || parts[0];
    else chosenPart = parts.find(part => /familia/i.test(part)) || parts[0];
    const familyName = String(chosenPart || "").replace(/\s*\([^)]*\)/g, "").trim();
    if (!familyName) return null;
    const members = rosterApi.list().filter(member => {
      if (!member || member.id === profile.id || !String(member.family || "").toLowerCase().includes(familyName.toLowerCase())) return false;
      if (!loreArchiveIndex.characters.some(character => character.id === member.id)) return false;
      return loreArchiveIndex.claims.some(claim => (claim.characterIds || []).includes(member.id) &&
        (claim.continuityScopes || []).includes(profile.continuity));
    });
    if (!members.length) return null;
    const section = archiveElement("section", "archive-section archive-family-network");
    section.dataset.familyName = familyName;
    const heading = archiveElement("div", "archive-section-heading");
    heading.append(
      archiveElement("h3", "", "Explorar " + familyName),
      archiveElement("p", "", members.length + " integrantes con información en " + profile.continuity +
        ". Compartir Familia acredita afiliación, no necesariamente amistad; abrí una ficha y usá «Volver» para regresar.")
    );
    section.appendChild(heading);
    const grid = archiveElement("div", "archive-related-grid");
    members.forEach(member => grid.appendChild(renderArchiveRelationship({
      targetId: member.id,
      targetName: member.name,
      available: true,
      label: "Explorar integrante",
      type: "Afiliación de Familia",
      description: "La ficha de referencia asocia a esta persona con " + familyName +
        ". La relación personal concreta debe consultarse por separado.",
      continuity: profile.continuity,
      period: profile.state.period,
      claims: []
    })));
    section.appendChild(grid);
    return section;
  }
  function renderArchiveRelationships(profile) {
    const root = archiveElement("div", "archive-profile-content");
    const familyNetwork = renderArchiveFamilyNetwork(profile);
    if (familyNetwork) root.appendChild(familyNetwork);
    const section = archiveElement("section", "archive-section");
    const heading = archiveElement("div", "archive-section-heading");
    heading.append(
      archiveElement("h3", "", "Personas relacionadas"),
      archiveElement("p", "", "Se distingue la guía o afiliación documentada de una amistad, rivalidad o relación no demostrada.")
    );
    section.appendChild(heading);
    const grid = archiveElement("div", "archive-related-grid");
    if (profile.relationships.length) profile.relationships.forEach(relationship => grid.appendChild(renderArchiveRelationship(relationship)));
    else grid.appendChild(archiveEmpty("No hay relaciones interpersonales documentadas para " + profile.continuity + ". No se trasladan vínculos de otros periodos."));
    section.appendChild(grid);
    root.appendChild(section);
    return root;
  }
  function renderArchiveMoments(profile){
    const root=archiveElement("div","archive-section"),h=archiveElement("div","archive-section-heading");h.append(archiveElement("h3","","Momentos importantes"),archiveElement("p","","Abrí una tarjeta para ver el contexto, las personas mencionadas y su evidencia. Las sinopsis no son el texto íntegro de las novelas."));root.appendChild(h);
    const grid=archiveElement("div","archive-moment-grid");if(profile.moments.length)profile.moments.forEach(m=>grid.appendChild(renderArchiveMoment(m)));else grid.appendChild(archiveEmpty("El corpus no contiene suficientes acontecimientos específicos para crear tarjetas de momentos en esta continuidad."));root.appendChild(grid);return root;
  }
  function renderArchiveTimeline(profile){
    const root=archiveElement("div","archive-section"),h=archiveElement("div","archive-section-heading");h.append(archiveElement("h3","","Cronología documentada"),archiveElement("p","","Usa anclas relativas y volúmenes cuando las fuentes los proporcionan; no inventa fechas absolutas."));root.appendChild(h);
    if(!profile.timeline.length){root.appendChild(archiveEmpty("No hay cronología suficiente para esta continuidad."));return root;}
    const list=archiveElement("ol","archive-timeline");profile.timeline.forEach(item=>{const li=archiveElement("li","archive-timeline-item");li.append(archiveElement("h4","",item.title),archiveElement("p","archive-research-note",item.period));item.claims.forEach(c=>{li.appendChild(archiveElement("p","",c.claim));li.appendChild(archiveEvidence(c));});list.appendChild(li);});root.appendChild(list);return root;
  }
  function renderArchiveSources(profile){
    const root=archiveElement("div","archive-section"),h=archiveElement("div","archive-section-heading");h.append(archiveElement("h3","","Fuentes y evidencias"),archiveElement("p","","Cada afirmación conserva IDs, fuente, localizador, continuidad, tipo de evidencia, verificación, periodo, límites y spoiler cuando están disponibles."));root.appendChild(h);
    root.appendChild(archiveElement("p","archive-research-note",profile.claims.length+" afirmación(es) visibles en "+profile.continuity+" con el filtro de spoilers actual."));
    if(profile.claims.length){const grid=archiveElement("div","archive-source-grid");profile.claims.forEach(c=>grid.appendChild(archiveClaimCard(c)));root.appendChild(grid);}else root.appendChild(archiveEmpty("No hay afirmaciones visibles con esta combinación de continuidad y spoiler."));
    if(profile.missingContinuities.length)root.appendChild(archiveElement("p","archive-return-note","Sin evidencia utilizable incorporada para "+profile.missingContinuities.join(" y ")+" en esta ficha. No se sustituye por datos del anime."));
    return root;
  }
  function openArchiveMoreInfo(){
    if(!activeArchiveProfile)return;
    const profile=activeArchiveProfile;
    const info=window.WordWaifuCharacterArchive.getExtendedInfo(profile.id,profile.continuity,loreArchiveIndex);
    const dialog=$("#archive-more-info-dialog"),body=$("#archive-more-info-content");
    $("#archive-more-info-title").textContent=info?info.title:(profile.name+" · resumen ampliado");
    body.replaceChildren();
    if(info){
      body.appendChild(archiveElement("p","archive-more-info-lead",info.summary));
      if(info.repositoryProfile){
        const sourceNote=archiveElement("p","archive-more-info-disclaimer",
          "También se recuperaron notas existentes del repositorio: "+info.repositoryProfile.path+
          " · estado documental: "+info.repositoryProfile.status+
          ". Los apartados temporales se muestran por separado; los datos pendientes siguen marcados como tales.");
        body.appendChild(sourceNote);
      }
      (info.sections||[]).forEach(section=>{
        const block=archiveElement("section","archive-more-info-section");
        block.append(archiveElement("h3","",section.title),archiveElement("p","",section.text));
        body.appendChild(block);
      });
      const refs=archiveElement("section","archive-more-info-section"),heading=archiveElement("h3","","Referencias para seguir leyendo");
      refs.appendChild(heading);
      (info.references||[]).forEach(ref=>{
        const item=archiveElement("div","archive-more-info-reference");
        item.appendChild(archiveElement("span","archive-reference-kind",ref.kind==="community"?"WIKI COMUNITARIA · NO OFICIAL":"FUENTE OFICIAL / PRIMARIA"));
        appendLoreLink(item,ref.label,ref.url,true);
        refs.appendChild(item);
      });
      if(info.galleryUrl){
        const gallery=archiveElement("a","archive-gallery-link","Ver galería de imágenes en la wiki comunitaria ↗");
        gallery.href=info.galleryUrl;gallery.target="_blank";gallery.rel="noopener noreferrer";
        const imageNote=archiveElement("p","archive-research-note","La galería abre fuera de WordWaifu. Las imágenes y sus derechos pertenecen a sus titulares; no se copian al repositorio.");
        refs.append(imageNote,gallery);
      }
      body.appendChild(refs);
    }else{
      body.appendChild(archiveElement("p","archive-more-info-lead",profile.state.summary));
      body.appendChild(archiveElement("p","archive-research-note","El detalle narrativo de esta ficha está pendiente de investigación; no rellenamos los apartados faltantes con datos inventados."));
      const refs=archiveElement("section","archive-more-info-section");
      refs.appendChild(archiveElement("h3","","Afirmaciones documentadas"));
      profile.claims.forEach(claim=>refs.appendChild(archiveClaimCard(claim)));
      body.appendChild(refs);
    }
    if(!dialog.open)dialog.showModal();
  }
  function closeDialogFromBackdrop(event){
    if(event.target===event.currentTarget)event.currentTarget.close();
  }
  function renderArchiveTab(){
    const panel=$("#archive-profile-panel");if(!panel||!activeArchiveProfile)return;panel.replaceChildren();
    const draw={summary:renderArchiveSummary,personality:renderArchivePersonality,relationships:renderArchiveRelationships,moments:renderArchiveMoments,timeline:renderArchiveTimeline,sources:renderArchiveSources};
    panel.appendChild((draw[activeArchiveTab]||renderArchiveSummary)(activeArchiveProfile));panel.setAttribute("aria-labelledby","archive-tab-"+activeArchiveTab);
  }
  function renderArchiveProfile(){
    if(!activeArchiveCharacterId||!loreArchiveIndex)return;
    activeArchiveProfile=window.WordWaifuCharacterArchive.getProfile(loreArchiveIndex,activeArchiveCharacterId,activeArchiveContinuity,$("#archive-spoiler").value);
    if(!activeArchiveProfile){returnToArchiveDirectory();return;}
    activeArchiveContinuity=activeArchiveProfile.continuity;
    $("#character-archive-directory").classList.add("hidden");$("#character-archive-profile").classList.remove("hidden");
    renderArchiveHeader(activeArchiveProfile);renderArchiveTab();
  }
  function openArchiveProfile(id,continuity,remember){
    if(!loreArchiveIndex||!loreArchiveIndex.characters.some(c=>c.id===id))return;
    if(remember&&activeArchiveCharacterId&&activeArchiveCharacterId!==id)archiveNavigationStack.push({id:activeArchiveCharacterId,continuity:activeArchiveContinuity,tab:activeArchiveTab});
    activeArchiveCharacterId=id;const candidate=window.WordWaifuCharacterArchive.getProfile(loreArchiveIndex,id,continuity,$("#archive-spoiler").value);
    activeArchiveContinuity=candidate?candidate.continuity:"";activeArchiveTab="summary";renderArchiveProfile();$("#character-archive-profile").scrollIntoView({block:"start",behavior:"auto"});
  }
  function returnToArchiveDirectory(){
    activeArchiveCharacterId=null;activeArchiveContinuity=null;activeArchiveProfile=null;archiveNavigationStack.length=0;
    $("#character-archive-profile").classList.add("hidden");$("#character-archive-directory").classList.remove("hidden");renderCharacterDirectory();$("#character-archive-query").focus();
  }
  function backInArchiveNavigation(){const old=archiveNavigationStack.pop();if(!old){returnToArchiveDirectory();return;}activeArchiveCharacterId=old.id;activeArchiveContinuity=old.continuity;activeArchiveTab=old.tab;renderArchiveProfile();$("#character-archive-profile").scrollIntoView({block:"start",behavior:"auto"});}
  $("#character-archive-query").addEventListener("input",()=>{$("#global-search").value=$("#character-archive-query").value;if(loreArchiveIndex)renderCharacterDirectory();else void prepareLoreView().catch(e=>$("#archive-directory-status").textContent="No se pudo preparar el índice: "+e.message);});
  $("#archive-continuity").addEventListener("change",()=>{if(loreArchiveIndex)renderCharacterDirectory();});
  $("#archive-quick-filters").addEventListener("click",event=>{
    const button=event.target.closest("[data-archive-scope]");
    if(!button)return;
    $("#archive-continuity").value=button.dataset.archiveScope;
    if(loreArchiveIndex)renderCharacterDirectory();
  });
  $("#archive-clear-filters").addEventListener("click",()=>{
    $("#character-archive-query").value="";
    $("#global-search").value="";
    $("#archive-continuity").value="ALL";
    $("#archive-spoiler").value="all";
    $("#archive-profile-spoiler").value="all";
    if(loreArchiveIndex)renderCharacterDirectory();
    $("#character-archive-query").focus();
  });
  $("#archive-spoiler").addEventListener("change",()=>{if(!loreArchiveIndex)return;if(activeArchiveCharacterId)renderArchiveProfile();else renderCharacterDirectory();});
  $("#archive-profile-spoiler").addEventListener("change",event=>{if(!loreArchiveIndex)return;$("#archive-spoiler").value=event.target.value;if(activeArchiveCharacterId)renderArchiveProfile();else renderCharacterDirectory();});
  $("#character-archive-results").addEventListener("click",e=>{const b=e.target.closest("[data-archive-open]");if(b)openArchiveProfile(b.dataset.archiveOpen,b.dataset.archiveContinuity,false);});
  $("#archive-profile-back").addEventListener("click",backInArchiveNavigation);
  $("#archive-return-search").addEventListener("click",returnToArchiveDirectory);
  $("#archive-profile-continuity").addEventListener("change",e=>{activeArchiveContinuity=e.target.value;activeArchiveTab="summary";renderArchiveProfile();});
  $("#archive-profile-tabs").addEventListener("click",e=>{const t=e.target.closest("[data-profile-tab]");if(!t)return;activeArchiveTab=t.dataset.profileTab;renderArchiveHeader(activeArchiveProfile);renderArchiveTab();});

  $("#archive-profile-panel").addEventListener("click",e=>{
    const more=e.target.closest("button[data-archive-more-info]");
    if(more){openArchiveMoreInfo();return;}
    const t=e.target.closest("button[data-profile-tab]");
    if(!t||!activeArchiveProfile)return;
    activeArchiveTab=t.dataset.profileTab;
    renderArchiveHeader(activeArchiveProfile);
    renderArchiveTab();
  });
  $("#archive-more-info-close").addEventListener("click",()=>$("#archive-more-info-dialog").close());
  $("#content-rights-open").addEventListener("click",()=>$("#content-rights-dialog").showModal());
  $("#content-rights-close").addEventListener("click",()=>$("#content-rights-dialog").close());
  $("#archive-more-info-dialog").addEventListener("click",closeDialogFromBackdrop);
  $("#content-rights-dialog").addEventListener("click",closeDialogFromBackdrop);
  $("#archive-profile-tabs").addEventListener("keydown",e=>{if(!["ArrowLeft","ArrowRight","Home","End"].includes(e.key))return;const tabs=$("#archive-profile-tabs [role=tab]"),i=tabs.indexOf(e.target.closest("[role=tab]"));if(i<0)return;e.preventDefault();const n=e.key==="Home"?0:e.key==="End"?tabs.length-1:(i+(e.key==="ArrowRight"?1:-1)+tabs.length)%tabs.length;tabs[n].focus();tabs[n].click();});
  $("#character-archive-profile").addEventListener("click",e=>{const b=e.target.closest("[data-character-link]");if(!b||!loreArchiveIndex.characters.some(c=>c.id===b.dataset.characterLink))return;openArchiveProfile(b.dataset.characterLink,b.dataset.linkContinuity,true);});
  async function prepareLoreView() {
    const status = $("#lore-search-status");
    status.textContent = "Leyendo las afirmaciones curadas desde el repositorio…";
    if (!window.WordWaifuLoreCorpus) throw new Error("El módulo de búsqueda no está cargado.");
    if (!loreIndexPromise) loreIndexPromise = window.WordWaifuLoreCorpus.load("./lore/danmachi/");
    const index = await loreIndexPromise;
    if (!onlineSourceDirectoryPrepared) { renderOnlineSourceDirectory(); onlineSourceDirectoryPrepared = true; }
    if (!lorePanelPrepared) {
      const select = $("#lore-character"), selected = select.value;
      select.replaceChildren(new Option("Cualquier personaje", ""));
      index.characters.forEach(character => select.appendChild(new Option(character.name, character.id)));
      select.value = selected;
      lorePanelPrepared = true;
    }
    status.textContent = "Leídas " + index.sourceClaimCount + " afirmaciones; " + index.entryCount + " entradas de búsqueda y " + (index.profileDocumentCount || 0) + " fichas previas recuperadas del repositorio. Búsqueda textual, sin IA; el corpus aún es parcial.";
    loreArchiveIndex = index;
    renderDanmachiEntityCatalog();
    if (!archiveUiPrepared) { renderCharacterDirectory(); archiveUiPrepared = true; }
    return index;
  }
  function renderDanmachiEntityCatalog() {
    const root = $("#danmachi-entity-results");
    const status = $("#danmachi-entity-status");
    const count = $("#danmachi-entity-count");
    if (!root || !window.WordWaifuLoreCorpus || !loreArchiveIndex) return;
    const report = window.WordWaifuLoreCorpus.searchEntities(
      { records: loreArchiveIndex.entityRecords || [] },
      { type: $("#danmachi-entity-type").value, query: $("#danmachi-entity-query").value, limit: 60 }
    );
    root.replaceChildren();
    count.textContent = (loreArchiveIndex.entityRecords || []).length + " registros";
    if (report.error) {
      status.textContent = report.error;
      root.appendChild(archiveElement("p", "danmachi-entity-empty", "Elegí un tipo válido para consultar el catálogo."));
      return;
    }
    status.textContent = report.totalMatches + " entidad(es) coincidente(s)" +
      (report.truncated ? "; se muestran las primeras " + report.results.length + "." : ".") +
      " El estado de revisión es el del catálogo y no implica verificación total del canon.";
    if (!report.results.length) {
      root.appendChild(archiveElement("p", "danmachi-entity-empty", "No hay entidades coincidentes. Probá otro término o seleccioná «Todos los tipos»."));
      return;
    }
    report.results.forEach(entity => {
      const card = archiveElement("article", "danmachi-entity-card");
      card.setAttribute("role", "listitem");
      const heading = archiveElement("div", "danmachi-entity-card-heading");
      heading.append(archiveElement("h4", "", entity.type === "familia" ? "Familia " + (entity.tags.find(tag => tag && !/^(roster|high|low|medium)$/i.test(tag)) || entity.id) : (entity.tags.find(tag => tag && !/^(roster|high|low|medium)$/i.test(tag)) || entity.id)),
        archiveElement("span", "danmachi-entity-type", entity.type));
      card.appendChild(heading);
      card.appendChild(archiveElement("p", "danmachi-entity-meta", entity.id + " · Estado: " + entity.status + " · Prioridad: " + entity.priority));
      if (entity.tags.length) card.appendChild(archiveElement("p", "danmachi-entity-tags", "Etiquetas: " + entity.tags.join(", ")));
      if (entity.path) {
        const links = archiveElement("div", "lore-result-links");
        appendLoreLink(links, "Abrir expediente ↗", "./lore/danmachi/" + entity.path, false);
        card.appendChild(links);
      }
      root.appendChild(card);
    });
  }

  function appendLoreLink(container, label, href, external) {
    if (!href) return;
    let url; try { url = new URL(href, window.location.href); } catch { return; }
    if (url.protocol !== "https:" && url.protocol !== "http:") return;
    const link = document.createElement("a"); link.href = url.href; link.textContent = label;
    if (external) { link.target = "_blank"; link.rel = "noopener noreferrer"; }
    container.appendChild(link);
  }

  function renderOnlineSourceDirectory() {
    const root = $("#lore-source-directory");
    if (!root || !window.WordWaifuLoreCorpus) return;
    root.replaceChildren();
    const sources = window.WordWaifuLoreCorpus.getOnlineSourceDirectory();
    const groups = [
      { key:"official", title:"Prioridad alta · fuentes oficiales y editoriales", note:"Usalas para verificar lo que realmente publican. Una página oficial del anime sigue describiendo la adaptación; una sinopsis editorial no reemplaza el libro completo.", badge:"OFICIAL / EDITORIAL" },
      { key:"community", title:"Apoyo para descubrir referencias · fuentes secundarias", note:"Útiles como índice y mapa de términos; cada afirmación relevante necesita una referencia comprobable antes de aprobarse.", badge:"SECUNDARIA" }
    ];
    groups.forEach(group=>{
      const section=archiveElement("section","lore-source-directory-group");
      section.append(archiveElement("h4","",group.title),archiveElement("p","lore-online-note",group.note));
      const grid=archiveElement("div","lore-online-directory-grid");
      sources.filter(source=>source.category===group.key).forEach(source=>{
        const card=archiveElement("article","lore-online-source-card");
        card.append(archiveElement("span","lore-online-tier",group.badge),archiveElement("h5","",source.title),
          archiveElement("p","",source.coverage),archiveElement("p","lore-online-limit","Límite: "+source.limits));
        appendLoreLink(card,"Abrir fuente ↗",source.url,true);
        grid.appendChild(card);
      });
      section.appendChild(grid); root.appendChild(section);
    });
  }
  async function runOnlineLoreSearch() {
    const button=$("#lore-web-search-button"), status=$("#lore-online-status"), root=$("#lore-online-results");
    root.replaceChildren(); button.disabled=true;
    try {
      const index=await prepareLoreView();
      const typed=$("#lore-query").value.trim();
      const selectedCharacter=index.characters.find(character=>character.id===$("#lore-character").value);
      const query=typed||(selectedCharacter?selectedCharacter.name:"DanMachi");
      status.textContent="Buscando «"+query+"» en dos fuentes secundarias… La respuesta puede depender de su disponibilidad y no confirma canon.";
      const controller=typeof AbortController==="function"?new AbortController():null;
      const timeout=controller?setTimeout(()=>controller.abort(),12000):null;
      let report;
      try { report=await window.WordWaifuLoreCorpus.searchExternalSources(query,{signal:controller?controller.signal:undefined}); }
      finally { if(timeout!==null)clearTimeout(timeout); }
      status.textContent=report.results.length+" resultado(s) web recibido(s) para «"+query+"». Son pistas secundarias: contrastá el dato en una fuente oficial o en el volumen correspondiente antes de marcarlo como confirmado."+
        (report.hasFailures?" Una o más fuentes no respondieron; abajo queda disponible la búsqueda directa.":"");
      report.providers.forEach(provider=>{
        const section=archiveElement("section","lore-online-provider");
        section.append(archiveElement("h4","",provider.providerLabel),archiveElement("p","lore-online-note",provider.authority+". "+provider.note));
        if(provider.results.length) provider.results.forEach(hit=>{
          const card=archiveElement("article","lore-online-result-card");
          if(hit.thumbnailUrl){
            const preview=archiveElement("figure","lore-online-preview");
            const image=document.createElement("img");
            image.src=hit.thumbnailUrl;
            image.alt="Miniatura de referencia: "+hit.title;
            image.loading="lazy";
            image.decoding="async";
            image.referrerPolicy="strict-origin-when-cross-origin";
            image.addEventListener("error",()=>preview.remove());
            preview.appendChild(image);
            if(hit.imageCredit)preview.appendChild(archiveElement("figcaption","lore-online-image-credit",hit.imageCredit));
            card.appendChild(preview);
          }
          card.appendChild(archiveElement("h5","",hit.title));
          card.appendChild(archiveElement("p",hit.extract?"lore-online-extract":"",hit.extract||hit.snippet));
          card.appendChild(archiveElement("span","lore-online-tier",hit.extract?"Resumen de la introducción · fuente secundaria":"Resultado externo · no verificado"));
          appendLoreLink(card,"Abrir artículo ↗",hit.url,true); section.appendChild(card);
        });
        else {
          const explanation=provider.error?"No se pudo consultar la API ahora ("+provider.error+"). Podés abrir la búsqueda del sitio directamente.":"La búsqueda no devolvió resultados para esta frase.";
          section.appendChild(archiveElement("p","lore-online-limit",explanation));
        }
        appendLoreLink(section,"Buscar directamente en "+provider.providerLabel+" ↗",provider.searchUrl,true);
        root.appendChild(section);
      });
    } catch(error) {
      status.textContent="La búsqueda web no se pudo completar: "+(error&&error.message?error.message:"error desconocido")+". El archivo local sigue funcionando; abrí el directorio de fuentes para continuar manualmente.";
    } finally { button.disabled=false; }
  }

  async function runLoreSearch(event) {
    event.preventDefault();
    const status = $("#lore-search-status"), resultsNode = $("#lore-results"), button = $("#lore-search-form button[type='submit']");
    resultsNode.replaceChildren(); button.disabled = true;
    try {
      const index = await prepareLoreView();
      const report = window.WordWaifuLoreCorpus.search(index, {
        query: $("#lore-query").value, characterId: $("#lore-character").value,
        continuity: $("#lore-continuity").value, period: $("#lore-period").value,
        aspect: $("#lore-aspect").value, spoiler: $("#lore-spoiler").value, limit: 30
      });
      if (!report.results.length) {
        status.textContent = "No se encontró evidencia en el corpus consultado para esos filtros. Esto no demuestra que el dato no exista en el canon: no inventes una respuesta; busca una fuente o escena que lo documente.";
        return;
      }
      status.textContent = report.totalMatches + " afirmación(es) coincidente(s); mostrando " + report.results.length +
        ". Se conservan continuidad y nivel de verificación." + (report.truncated ? " Se alcanzó el límite de resultados." : "");
      report.results.forEach(item => {
        const card = document.createElement("article"); card.className = "lore-result";
        card.dataset.claimId = item.claimId; card.dataset.entryId = item.entryId; card.dataset.continuity = item.continuityScopes.join(",");
        const title = document.createElement("h3"); title.textContent = item.heading || item.claimId;
        const claim = document.createElement("p"); claim.className = "lore-result-claim"; claim.textContent = item.claim;
        const meta = document.createElement("p"); meta.className = "lore-result-meta";
        meta.textContent = ["Personaje: " + (item.characterNames.join(", ") || "general"), "Aspecto: " + item.aspect,
          "Continuidad: " + item.continuityScopes.join(", "), "Periodo: " + (item.eraOrInterval || item.periodKey || "no determinado"),
          "Evidencia: " + item.evidenceType, "Verificación: " + item.verificationStatus, "Spoiler: " + item.spoilerLevel].join(" · ");
        const source = document.createElement("p"); source.className = "lore-result-source";
        source.textContent = "Fuente: " + (item.sourceTitle || item.sourceIds.join(", ") || "sin título") +
          (item.sourceLocator ? " · Localizador: " + item.sourceLocator : "");
        const links = document.createElement("div"); links.className = "lore-result-links";
        (item.sourceUrls || []).forEach((url, i) => appendLoreLink(links, item.sourceUrls.length > 1 ? "Fuente " + (i + 1) : "Abrir fuente original", url, true));
        if (item.profilePaths && item.profilePaths[0]) appendLoreLink(links, "Abrir ficha del personaje", "./lore/danmachi/" + item.profilePaths[0], false);
        card.append(title, claim, meta, source);
        if (item.confidenceNote) { const note = document.createElement("p"); note.className = "lore-result-note"; note.textContent = "Límite: " + item.confidenceNote; card.appendChild(note); }
        if (links.childNodes.length) card.appendChild(links);
        resultsNode.appendChild(card);
      });
    } catch (error) {
      status.textContent = "La consulta no pudo completarse: " + error.message + " Abrí WordWaifu desde un servidor HTTP (por ejemplo, el puerto privado de Codespaces), no como archivo file://.";
    } finally { button.disabled = false; }
  }
  $("#danmachi-entity-query").addEventListener("input", () => renderDanmachiEntityCatalog());
  $("#danmachi-entity-type").addEventListener("change", () => renderDanmachiEntityCatalog());
  $("#danmachi-entity-reset").addEventListener("click", () => {
    $("#danmachi-entity-query").value = "";
    $("#danmachi-entity-type").value = "all";
    renderDanmachiEntityCatalog();
  });
  $("#lore-search-form").addEventListener("submit", event => { void runLoreSearch(event); });
  $("#lore-web-search-button").addEventListener("click", () => { void runOnlineLoreSearch(); });
  $("#lore-clear-button").addEventListener("click", () => {
    $("#lore-query").value = ""; $("#lore-character").value = ""; $("#lore-continuity").value = "ALL";
    $("#lore-period").value = "ALL"; $("#lore-aspect").value = "all"; $("#lore-spoiler").value = "all";
    $("#lore-results").replaceChildren(); void prepareLoreView().catch(() => {});
  });

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

  $$(".nav-item").forEach((button) => button.addEventListener("click", () => {
    navigate(button.dataset.view);
    if (button.dataset.view === "lore") void prepareLoreView().catch(() => {});
  }));
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
  function projectHasGlobalSearchMatch(rawQuery) {
    const normalize = (value) => String(value || "").trim().toLocaleLowerCase("es").normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    const needle = normalize(rawQuery);
    if (!needle) return false;
    const names = [
      ...state.characters.map((item) => item.name),
      ...state.locations.map((item) => item.name),
      ...state.events.map((item) => item.name || item.title),
      ...state.organizations.map((item) => item.name),
      ...state.relationships.map((item) => item.name),
      ...state.stories.map((item) => item.name || item.title)
    ];
    const relevantNames = activeView === "atlas"
      ? [...state.characters.map((item) => item.name), ...state.locations.map((item) => item.name)]
      : names;
    return relevantNames.some((value) => normalize(value).includes(needle));
  }

  function resetArchiveForGlobalSearch(rawQuery) {
    const queryField = $("#character-archive-query");
    if (!queryField) return;
    queryField.value = rawQuery;
    if (activeArchiveCharacterId) {
      activeArchiveCharacterId = null;
      activeArchiveContinuity = null;
      activeArchiveProfile = null;
      archiveNavigationStack.length = 0;
    }
    $("#character-archive-profile").classList.add("hidden");
    $("#character-archive-directory").classList.remove("hidden");
    if (loreArchiveIndex) renderCharacterDirectory();
    else void prepareLoreView().then(() => {
      if (activeView === "lore" && $("#global-search").value.trim() === rawQuery) renderCharacterDirectory();
    }).catch((error) => {
      $("#archive-directory-status").textContent = "No se pudo cargar el archivo de DanMachi: " + error.message;
    });
  }

  async function searchArchiveFromGlobalSearch(rawQuery, forceOpen = false) {
    const query = String(rawQuery || "").trim();
    if (query.length < 2) return;
    if (activeView === "lore") {
      resetArchiveForGlobalSearch(query);
      return;
    }
    if (!forceOpen && projectHasGlobalSearchMatch(query)) return;

    // Move to the archive immediately so the search has a visible destination while its
    // local corpus loads. Do not silently leave the user on the Atlas when there are no
    // matching claims: the directory can explain that there are no results.
    navigate("lore");
    $("#archive-continuity").value = "ALL";
    $("#archive-spoiler").value = "all";
    $("#character-archive-query").value = query;
    $("#character-archive-profile").classList.add("hidden");
    $("#character-archive-directory").classList.remove("hidden");
    $("#archive-directory-status").textContent = "Buscando en la enciclopedia de personajes…";

    try {
      const index = await prepareLoreView();
      if ($("#global-search").value.trim() !== query || activeView !== "lore") return;
      if (!window.WordWaifuCharacterArchive) throw new Error("El módulo de fichas no está cargado.");
      window.WordWaifuCharacterArchive.list(index, { query, continuity: "ALL", spoiler: "all" });
      renderCharacterDirectory();
      $("#character-archive-directory").scrollIntoView({ block: "start", behavior: "auto" });
    } catch (error) {
      if ($("#global-search").value.trim() === query && activeView === "lore") {
        $("#archive-directory-status").textContent = "No se pudo cargar el archivo de DanMachi: " + error.message;
      }
    }
  }

  $("#global-search").addEventListener("input", () => {
    const rawQuery = $("#global-search").value.trim();
    if (activeView === "lore") {
      resetArchiveForGlobalSearch(rawQuery);
      return;
    }
    if (activeView === "atlas") {
      const query = rawQuery.toLocaleLowerCase("es");
      const found = state.locations.find((location) => location.name.toLocaleLowerCase("es").includes(query));
      if (query && found) { selectedLocationId = found.id; renderDetails(); renderMap(); }
      else if (query) {
        const person = state.characters.find((character) => character.name.toLocaleLowerCase("es").includes(query));
        if (person) openCharacter(person.id);
      }
    } else renderDirectory();
    if (rawQuery.length >= 2 && !projectHasGlobalSearchMatch(rawQuery)) {
      void searchArchiveFromGlobalSearch(rawQuery, false);
    }
  });
  $("#global-search").addEventListener("keydown", (event) => {
    if (event.key !== "Enter") return;
    const query = $("#global-search").value.trim();
    if (query.length < 2) return;
    if (activeView === "lore") {
      event.preventDefault();
      resetArchiveForGlobalSearch(query);
      return;
    }
    if (projectHasGlobalSearchMatch(query)) return;
    event.preventDefault();
    void searchArchiveFromGlobalSearch(query, true);
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

  function publishMythicProjectState() {
    window.WordWaifuMythicProjectState = {
      proposals: Array.isArray(state.mythicProposals) ? state.mythicProposals : [],
      stories: Array.isArray(state.stories) ? state.stories : [],
      relations: Array.isArray(state.mythicRelations) ? state.mythicRelations : []
    };
    document.dispatchEvent(new CustomEvent("wordwaifu:mythic-proposals-loaded", {
      detail: window.WordWaifuMythicProjectState
    }));
  }

  document.addEventListener("wordwaifu:mythic-proposal-save", async (event) => {
    const proposal = event.detail && event.detail.proposal;
    if (!proposal || typeof proposal.id !== "string" || !proposal.id || typeof proposal.title !== "string" || !proposal.title.trim()) return;
    if (!Array.isArray(state.mythicProposals)) state.mythicProposals = [];
    const previous = state.mythicProposals.findIndex(item => item && item.id === proposal.id);
    if (previous >= 0) state.mythicProposals[previous] = structuredClone(proposal);
    else state.mythicProposals.push(structuredClone(proposal));
    const saved = await saveProject();
    $("#mythic-generator-status").textContent = saved
      ? "Propuesta guardada en el proyecto. Se incluirá al exportar JSON."
      : "No se confirmó el guardado; revisá el estado de persistencia antes de cerrar.";
    publishMythicProjectState();
  });

  document.addEventListener("wordwaifu:mythic-relation-save", async (event) => {
    const relation = event.detail && event.detail.relation;
    if (!relation || typeof relation.id !== "string" || !relation.id ||
        typeof relation.sourceId !== "string" || typeof relation.targetId !== "string" ||
        !relation.sourceId || !relation.targetId || relation.sourceId === relation.targetId ||
        typeof relation.type !== "string" || !relation.type) return;
    if (!Array.isArray(state.mythicRelations)) state.mythicRelations = [];
    const previous = state.mythicRelations.findIndex(item => item && item.id === relation.id);
    if (previous >= 0) state.mythicRelations[previous] = structuredClone(relation);
    else state.mythicRelations.push(structuredClone(relation));
    const saved = await saveProject();
    $("#mythic-generator-status").textContent = saved
      ? "Relación guardada en el proyecto."
      : "No se confirmó el guardado del vínculo; revisá la persistencia.";
    publishMythicProjectState();
  });

  document.addEventListener("wordwaifu:mythic-relation-delete", async (event) => {
    const id = event.detail && event.detail.id;
    if (typeof id !== "string" || !Array.isArray(state.mythicRelations)) return;
    state.mythicRelations = state.mythicRelations.filter(item => item && item.id !== id);
    const saved = await saveProject();
    $("#mythic-generator-status").textContent = saved
      ? "Relación del proyecto eliminada."
      : "No se confirmó la eliminación del vínculo.";
    publishMythicProjectState();
  });

  document.addEventListener("wordwaifu:mythic-proposal-promote", async (event) => {
    const proposalId = event.detail && event.detail.id;
    const proposal = Array.isArray(state.mythicProposals) ? state.mythicProposals.find(item => item && item.id === proposalId) : null;
    if (!proposal) return;
    const baseId = "mythic-character-" + Date.now().toString(36);
    let id = baseId, suffix = 1;
    const existingIds = new Set(state.characters.map(character => character && character.id).filter(Boolean));
    while (existingIds.has(id)) id = baseId + "-" + suffix++;
    const character = {
      id, name: proposal.title, age: null, species: "Por definir", role: "Personaje original · portador / invocador",
      personality: [], description: [proposal.concept, proposal.ability,
        proposal.manifestationName ? "Manifestación: " + proposal.manifestationName + (proposal.manifestationStage ? " · " + proposal.manifestationStage : "") : "",
        proposal.weapon ? "Arma característica / arma natural: " + proposal.weapon : "",
        proposal.outfit ? "Vestimenta / símbolo del mito: " + proposal.outfit : "",
        proposal.totalityAttack ? "Ataque que resume el mito: " + proposal.totalityAttack : "",
        proposal.activation ? "Activación: " + proposal.activation : "",
        proposal.cost ? "Coste: " + proposal.cost : "", proposal.risk ? "Riesgos: " + proposal.risk : "",
        proposal.progression ? "Evolución: " + proposal.progression : ""].filter(Boolean).join("\\n\\n"),
      mythicManifestation: {
        name: proposal.manifestationName || "",
        stage: proposal.manifestationStage || "",
        weapon: proposal.weapon || "",
        outfit: proposal.outfit || "",
        totalityAttack: proposal.totalityAttack || ""
      },
      motivation: "Integrar la inspiración mitológica como una adaptación propia, sin asumir que el personaje sea la figura original.",
      flaw: proposal.weakness || "Debilidad por definir.", relationships: [], locationHistory: [], status: "draft",
      mythicEntityIds: Array.isArray(proposal.entityIds) ? proposal.entityIds.slice() : [],
      mythicProposalId: proposal.id, storyId: proposal.storyId || null,
      chapterReference: proposal.chapterReference || ""
    };
    state.characters.push(character);
    const saved = await saveProject();
    if (saved) {
      activeView = "characters";
      selectedCharacterId = id;
      render();
      $("#save-status").textContent = "Personaje creado desde la propuesta mitológica y guardado en el proyecto.";
    } else {
      $("#mythic-generator-status").textContent = "No se confirmó el guardado del personaje; revisá la persistencia.";
    }
  });

  document.addEventListener("wordwaifu:mythic-proposal-delete", async (event) => {
    const id = event.detail && event.detail.id;
    if (typeof id !== "string" || !Array.isArray(state.mythicProposals)) return;
    state.mythicProposals = state.mythicProposals.filter(item => item && item.id !== id);
    const saved = await saveProject();
    $("#mythic-generator-status").textContent = saved
      ? "Propuesta eliminada del proyecto."
      : "No se confirmó la eliminación; revisá el estado de persistencia.";
    publishMythicProjectState();
  });

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
      publishMythicProjectState();
    } catch (error) {
      state = ensureRelationshipStore(loadProject());
      render();
      publishMythicProjectState();
      const saved = await saveProject();
      if (!saved) $("#save-status").textContent = "Modo de recuperación · exportá una copia: " + error.message;
    } finally {
      if (appShell) appShell.inert = false;
    }
  }

  if (window.WordWaifuPowerWorkbench) window.WordWaifuPowerWorkbench.mount({
    root: $("#powers-view"),
    getProject: () => state,
    onSave: saveProject
  });

  initializeApplication();
})(); 

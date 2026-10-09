(function () {
  "use strict";

  const STORAGE_KEY = "wordwaifu.project.v1";
  const titles = {
    atlas: ["Atlas del mundo", "Explorá lugares, encontrá personajes y recorré la historia de tu mundo."],
    characters: ["Personajes", "Fichas conectadas con lugares, relaciones y acontecimientos."],
    places: ["Lugares", "Cada lugar es parte de la geografía y del canon de tu universo."],
    timeline: ["Cronología", "Revisá los acontecimientos y los cambios de estado de tu mundo."],
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
    stories: [],
    settings: { time: "now" }
  };

  let state = loadProject();
  let activeView = "atlas";
  let mapMode = "world";
  let selectedLocationId = "loc-asteria";
  let selectedCharacterId = null;
  let mapScale = 1;
  const enabledLayers = { places: true, characters: true, routes: true, events: true };
  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => Array.from(root.querySelectorAll(selector));
  const escapeHTML = (value) => String(value ?? "").replace(/[&<>"']/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[char]));
  const titleCase = (value) => value.charAt(0).toUpperCase() + value.slice(1);

  function loadProject() {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (parsed && parsed.schemaVersion === 1 && parsed.project && Array.isArray(parsed.locations) && Array.isArray(parsed.characters)) return parsed;
      }
    } catch (error) {
      console.warn("No se pudo leer el proyecto local; se usará la demo.", error);
    }
    return structuredClone(demo);
  }

  function saveProject() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
      $("#save-status").textContent = "Cambios guardados en este navegador";
      $("#project-name").textContent = state.project.name;
      return true;
    } catch (error) {
      $("#save-status").textContent = "No se pudo guardar: exportá una copia";
      return false;
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
    $("#directory-view").classList.toggle("hidden", !["characters", "places", "timeline", "stories"].includes(activeView));
    $("#command-view").classList.toggle("hidden", activeView !== "commands");
    $(".toolbar").classList.toggle("hidden", activeView !== "atlas");
    $("#layers-panel").classList.add("hidden");
    $("#add-button").classList.toggle("hidden", activeView === "commands" || activeView === "timeline" || activeView === "stories");
    renderMap();
    renderDetails();
    renderDirectory();
  }

  function renderMap() {
    const dynamicLayer = $("#dynamic-markers");
    if (dynamicLayer) {
      dynamicLayer.replaceChildren();
      state.locations.filter((location) => !$$(".map-marker").some((marker) => marker.dataset.location === location.id)).forEach((location) => {
        const point = Array.isArray(location.marker) ? location.marker : [450, 300];
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
      const missingLocation = !locationById(locationId);
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
    $("#details-panel").innerHTML = '<div class="detail-cover"></div><span class="detail-type">' + escapeHTML(location.type) + '</span><h2>' + escapeHTML(location.name) + '</h2><p>' + escapeHTML(location.description) + '</p><div class="tag-row">' + location.tags.map((tag) => '<span class="tag">' + escapeHTML(tag) + '</span>').join("") + '</div><div class="detail-divider"></div><div class="detail-meta"><div><span>Población</span><strong>' + escapeHTML(location.population || "Sin datos") + '</strong></div><div><span>Gobierno</span><strong>' + escapeHTML(location.government || "Sin datos") + '</strong></div><div><span>Clima</span><strong>' + escapeHTML(location.climate || "Sin datos") + '</strong></div><div><span>Personajes presentes</span><strong>' + people.length + '</strong></div></div><div class="detail-divider"></div><div class="section-title"><strong>Último acontecimiento relacionado</strong></div><p>' + escapeHTML(event ? event.title + " · " + event.description : "Todavía no hay acontecimientos vinculados.") + '</p>';
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
        return '<article class="entity-card" data-character="' + escapeHTML(character.id) + '" tabindex="0" role="button"><span class="avatar">' + escapeHTML(initials(character.name)) + '</span><h3>' + escapeHTML(character.name) + '</h3><p>' + escapeHTML(character.description) + '</p><div class="tag-row"><span class="tag">' + escapeHTML(character.role) + '</span><span class="tag">' + escapeHTML(character.age + " años") + '</span><span class="tag">' + escapeHTML(place ? place.name : "Ubicación desconocida") + '</span></div></article>';
      });
    } else if (activeView === "places") {
      heading = "Atlas de lugares";
      items = state.locations.filter((item) => matches(item.name + " " + item.type + " " + item.description, query)).map((location) => '<article class="entity-card" data-location="' + escapeHTML(location.id) + '" tabindex="0" role="button"><span class="avatar">⌖</span><h3>' + escapeHTML(location.name) + '</h3><p>' + escapeHTML(location.description) + '</p><div class="tag-row"><span class="tag">' + escapeHTML(location.type) + '</span><span class="tag">' + charactersAt(location.id).length + ' personajes</span></div></article>');
    } else if (activeView === "timeline") {
      heading = "Acontecimientos del universo";
      items = state.events.filter((item) => matches(item.title + " " + item.description, query)).map((event) => '<article class="entity-card"><span class="avatar">◷</span><h3>' + escapeHTML(event.title) + '</h3><p>' + escapeHTML(event.description) + '</p><div class="tag-row"><span class="tag">' + escapeHTML(event.position) + '</span>' + event.locationIds.map((id) => locationById(id)).filter(Boolean).map((loc) => '<span class="tag">' + escapeHTML(loc.name) + '</span>').join("") + '</div></article>');
    } else {
      heading = "Historias y novelas";
      items = state.stories.map((story) => '<article class="entity-card"><span class="avatar">▤</span><h3>' + escapeHTML(story.name) + '</h3><p>' + escapeHTML(story.description || "Sinopsis pendiente.") + '</p></article>');
      if (!items.length) items = ['<div class="empty-state">Todavía no hay novelas registradas. La próxima fase incorporará premisas, arcos, capítulos y escenas. Podés crear personajes y lugares mientras tanto.</div>'];
    }
    container.innerHTML = '<div class="directory-heading"><h2>' + heading + '</h2><span class="tag">' + items.length + ' resultados</span></div><div class="entity-grid">' + (items.length ? items.join("") : '<div class="empty-state">No hay resultados para esta búsqueda.</div>') + '</div>';
  }

  function matches(value, query) { return !query || String(value).toLowerCase().includes(query); }

  function openCharacter(id) {
    const character = characterById(id);
    if (!character) return;
    selectedCharacterId = id;
    const place = characterLocationAt(character, currentTime());
    $("#details-panel").innerHTML = '<div class="detail-cover"></div><span class="detail-type">' + escapeHTML(character.species) + ' · ' + escapeHTML(character.status) + '</span><h2>' + escapeHTML(character.name) + '</h2><p>' + escapeHTML(character.description) + '</p><div class="tag-row">' + character.personality.map((tag) => '<span class="tag">' + escapeHTML(tag) + '</span>').join("") + '</div><div class="detail-divider"></div><div class="detail-meta"><div><span>Edad</span><strong>' + character.age + ' años</strong></div><div><span>Rol</span><strong>' + escapeHTML(character.role) + '</strong></div><div><span>Ubicación en este momento</span><strong>' + escapeHTML(place ? place.name : "Desconocida") + '</strong></div><div><span>Estado del canon</span><strong>' + escapeHTML(character.status === "canon" ? "Confirmado" : "Propuesta") + '</strong></div></div><div class="detail-divider"></div><span class="detail-type">MOTIVACIÓN</span><p>' + escapeHTML(character.motivation) + '</p><div class="detail-divider"></div><span class="detail-type">DEFECTO PRINCIPAL</span><p>' + escapeHTML(character.flaw) + '</p><div class="detail-divider"></div><span class="detail-type">HISTORIAL DE UBICACIONES</span><p>' + character.locationHistory.map((entry) => { const loc = locationById(entry.locationId); return escapeHTML(loc ? loc.name : "Lugar eliminado") + " · " + escapeHTML(entry.from) + " → " + escapeHTML(entry.to); }).join("<br>") + '</p><button id="back-to-location" class="text-link">← Volver a su ubicación</button>';
    $("#related-title").textContent = "Relaciones registradas";
    const relations = character.relationships.map(characterById).filter(Boolean);
    $("#related-list").innerHTML = relations.length ? relations.map((related) => '<div class="related-person" data-character="' + escapeHTML(related.id) + '" role="button" tabindex="0"><span class="avatar">' + escapeHTML(initials(related.name)) + '</span><div><strong>' + escapeHTML(related.name) + '</strong><small>' + escapeHTML(related.role) + '</small></div><span class="arrow">↗</span></div>').join("") : '<div class="empty-state">Todavía no hay relaciones registradas para este personaje.</div>';
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

  function addEntity() {
    $("#entity-form").dataset.editing = "";
    $("#dialog-title").textContent = "Crear entidad";
    $("#entity-name").value = "";
    $("#entity-description").value = "";
    $("#entity-dialog").showModal();
  }

  function handleEntitySubmit(event) {
    event.preventDefault();
    const type = $("#entity-type").value;
    const name = $("#entity-name").value.trim();
    const description = $("#entity-description").value.trim();
    if (!name) return;
    const id = "local-" + type + "-" + Date.now().toString(36);
    if (type === "character") {
      state.characters.push({ id, name, age: null, species: "Sin definir", role: "Sin definir", personality: [], description: description || "Descripción pendiente.", motivation: "", flaw: "", locationHistory: [], relationships: [], status: "proposal" });
      activeView = "characters";
    } else {
      state.locations.push({ id, name, type: "Lugar sin clasificar", parentId: null, description: description || "Descripción pendiente.", tags: ["Propuesta"], population: "Sin datos", government: "Sin datos", climate: "Sin datos", marker: [120 + Math.random() * 620, 90 + Math.random() * 390], characters: [], events: [] });
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

      // Persist first. If the storage write fails, the active project remains untouched.
      localStorage.setItem(STORAGE_KEY, JSON.stringify(validation.project));
      state = validation.project;
      selectedLocationId = state.locations[0]?.id || null;
      selectedCharacterId = null;
      activeView = "atlas";
      render();
      $("#save-status").textContent = "Proyecto importado y guardado localmente";
      alert("Proyecto importado correctamente.");
    } catch (error) {
      alert("No se pudo importar: " + error.message);
    } finally {
      $("#import-file").value = "";
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
  $("#dialog-close").addEventListener("click", () => $("#entity-dialog").close());
  $("#dialog-cancel").addEventListener("click", () => $("#entity-dialog").close());
  $("#export-button").addEventListener("click", exportProject);
  $("#import-file").addEventListener("change", (event) => importProject(event.target.files[0]));
  $("#new-project-button").addEventListener("click", () => {
    if (!confirm("¿Crear un proyecto vacío? Exportá el proyecto actual antes si querés conservar una copia.")) return;
    state = { schemaVersion: 1, project: { id: "project-" + Date.now().toString(36), name: "Mi nuevo universo", description: "" }, locations: [], characters: [], events: [], stories: [], settings: { time: "now" } };
    selectedLocationId = null;
    selectedCharacterId = null;
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
    if (character) { navigate("atlas"); openCharacter(character.dataset.character); }
    if (location) showLocation(location.dataset.location);
  });
  $("#directory-view").addEventListener("keydown", (event) => {
    if (event.key !== "Enter" && event.key !== " ") return;
    const target = event.target.closest("[data-character],[data-location]");
    if (!target) return;
    event.preventDefault();
    if (target.dataset.character) { navigate("atlas"); openCharacter(target.dataset.character); }
    if (target.dataset.location) showLocation(target.dataset.location);
  });
  $("#show-all-related").addEventListener("click", () => navigate("characters"));
  $("#command-form").addEventListener("submit", (event) => {
    event.preventDefault();
    executeCommand($("#command-input").value);
    $("#command-input").value = "";
  });
  $$(".command-chips button").forEach((button) => button.addEventListener("click", () => executeCommand(button.dataset.command)));
  $("#global-search").addEventListener("keydown", (event) => { if (event.key === "Escape") { event.target.value = ""; renderDirectory(); } });

  if (!localStorage.getItem(STORAGE_KEY)) saveProject();
  render();
})(); 

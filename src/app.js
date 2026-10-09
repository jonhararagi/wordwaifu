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
  let selectedEventId = null;
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
    } else {
      heading = "Historias y novelas";
      items = state.stories.map((story) => '<article class="entity-card"><span class="avatar">▤</span><h3>' + escapeHTML(story.name) + '</h3><p>' + escapeHTML(story.description || "Sinopsis pendiente.") + '</p></article>');
      if (!items.length) items = ['<div class="empty-state">Todavía no hay novelas registradas. La próxima fase incorporará premisas, arcos, capítulos y escenas. Podés crear personajes y lugares mientras tanto.</div>'];
    }
    const selectedEvent = activeView === "timeline" ? state.events.find((event) => event.id === selectedEventId) : null;
    const selectedEventHTML = selectedEvent ? '<section id="selected-event-details" class="selected-event-card"><div class="event-detail-heading"><div><p class="eyebrow">ACONTECIMIENTO SELECCIONADO</p><h2>' + escapeHTML(selectedEvent.title) + '</h2></div><span class="tag">' + escapeHTML(selectedEvent.position || "unknown") + '</span></div><p>' + escapeHTML(selectedEvent.description || "Descripción pendiente.") + '</p><div class="tag-row">' + (selectedEvent.locationIds || []).map((id) => locationById(id)).filter(Boolean).map((location) => '<span class="tag">⌖ ' + escapeHTML(location.name) + '</span>').join("") + (selectedEvent.characterIds || []).map((id) => characterById(id)).filter(Boolean).map((character) => '<span class="tag">♙ ' + escapeHTML(character.name) + '</span>').join("") + '</div><div class="location-actions"><button type="button" id="edit-event-button" class="outline-button">Editar acontecimiento</button><button type="button" id="delete-event-button" class="outline-button danger-action">Eliminar acontecimiento</button></div></section>' : "";
    container.innerHTML = '<div class="directory-heading"><h2>' + heading + '</h2><span class="tag">' + items.length + ' resultados</span></div>' + selectedEventHTML + '<div class="entity-grid">' + (items.length ? items.join("") : '<div class="empty-state">No hay resultados para esta búsqueda.</div>') + '</div>';
    if (selectedEvent) {
      $("#edit-event-button").addEventListener("click", () => editEvent(selectedEvent.id));
      $("#delete-event-button").addEventListener("click", () => deleteEvent(selectedEvent.id));
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
    $("#entity-name-label").textContent = type === "event" ? "Título del acontecimiento" : type === "location" ? "Nombre del lugar" : "Nombre del personaje";
    $("#entity-name").placeholder = type === "event" ? "Título del acontecimiento" : "Nombre de la entidad";
    if (type === "event") populateEventReferenceOptions(selectedValues("#event-locations"), selectedValues("#event-characters"));
  }

  function addEntity() {
    const form = $("#entity-form");
    form.dataset.editing = "";
    form.dataset.editingType = "";
    $("#entity-type").disabled = false;
    $("#entity-type").value = activeView === "timeline" ? "event" : activeView === "places" ? "location" : "character";
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
    updateEntityFieldVisibility();
    populateEventReferenceOptions([], []);
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

  function deleteCharacter(id) {
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
      "Las demás entidades y referencias se conservarán. La operación no se puede deshacer. Exportá una copia antes si querés conservarla."
    ].filter(Boolean).join("\n");
    if (!confirm(summary)) return;
    state.characters = state.characters.filter((item) => item.id !== id);
    state.characters.forEach((item) => { item.relationships = (item.relationships || []).filter((relatedId) => relatedId !== id); });
    state.locations.forEach((item) => { item.characters = (item.characters || []).filter((characterId) => characterId !== id); });
    state.events.forEach((item) => { item.characterIds = (item.characterIds || []).filter((characterId) => characterId !== id); });
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

  function deleteEvent(id) {
    const event = state.events.find((item) => item.id === id);
    if (!event) return;
    const locationCount = state.locations.filter((location) => (location.events || []).includes(id) || (event.locationIds || []).includes(location.id)).length;
    const summary = [
      "Se eliminará el acontecimiento \"" + event.title + "\".",
      locationCount ? locationCount + " referencia(s) de lugar dejarán de enlazar este acontecimiento." : "",
      "Los personajes, ubicaciones y demás acontecimientos se conservarán. La operación no se puede deshacer. Exportá una copia antes si querés conservarla."
    ].filter(Boolean).join("\n");
    if (!confirm(summary)) return;
    state.events = state.events.filter((item) => item.id !== id);
    state.locations.forEach((location) => { location.events = (location.events || []).filter((eventId) => eventId !== id); });
    selectedEventId = null;
    activeView = "timeline";
    saveProject();
    render();
  }

  function deleteLocation(id) {
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
      "La operación no se puede deshacer. Exportá una copia antes si querés conservarla."
    ].filter(Boolean).join("\n");
    if (!confirm(summary)) return;
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
      selectedEventId = null;
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
  $("#entity-type").addEventListener("change", updateEntityFieldVisibility);
  $("#dialog-close").addEventListener("click", () => $("#entity-dialog").close());
  $("#dialog-cancel").addEventListener("click", () => $("#entity-dialog").close());
  $("#export-button").addEventListener("click", exportProject);
  $("#import-file").addEventListener("change", (event) => importProject(event.target.files[0]));
  $("#new-project-button").addEventListener("click", () => {
    if (!confirm("¿Crear un proyecto vacío? Exportá el proyecto actual antes si querés conservar una copia.")) return;
    state = { schemaVersion: 1, project: { id: "project-" + Date.now().toString(36), name: "Mi nuevo universo", description: "" }, locations: [], characters: [], events: [], stories: [], settings: { time: "now" } };
    selectedLocationId = null;
    selectedCharacterId = null;
    selectedEventId = null;
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
    if (character) { navigate("atlas"); openCharacter(character.dataset.character); }
    else if (location) showLocation(location.dataset.location);
    else if (eventCard) { selectedEventId = eventCard.dataset.event; renderDirectory(); }
  });
  $("#directory-view").addEventListener("keydown", (event) => {
    if (event.key !== "Enter" && event.key !== " ") return;
    const target = event.target.closest("[data-character],[data-location],[data-event]");
    if (!target) return;
    event.preventDefault();
    if (target.dataset.character) { navigate("atlas"); openCharacter(target.dataset.character); }
    else if (target.dataset.location) showLocation(target.dataset.location);
    else if (target.dataset.event) { selectedEventId = target.dataset.event; renderDirectory(); }
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

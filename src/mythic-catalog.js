(function () {
  "use strict";
  const $ = (selector, root = document) => root.querySelector(selector);
  const root = $("#mythic-catalog-view");
  if (!root) return;
  let catalog = null;
  let selectedId = null;
  const history = [];
  const labels = {
    mythology_reference: "Referencia mitológica",
    historical_reference: "Referencia histórica",
    creative_adaptation: "Adaptación creativa",
    original: "Original"
  };
  const kindLabels = {
    mythic_entity:"Entidad mítica", mythic_pair:"Par mítico", culture_hero:"Héroe cultural",
    folklore_entity:"Entidad folclórica", deity:"Deidad", deity_creator:"Deidad creadora",
    underworld_figure:"Figura del inframundo", hero_pair:"Pareja heroica", historical_weapon:"Arma histórica",
    legendary_weapon:"Arma legendaria", sacred_sword:"Espada sagrada", ritual_object_weapon:"Objeto ritual",
    divine_weapon:"Arma divina", sacred_relic:"Reliquia sagrada", summoning_mechanic:"Mecánica de invocación",
    progression_system:"Sistema de progresión", system_taxonomy:"Taxonomía", world_rule:"Regla del mundo"
  };
  const esc = (value) => String(value ?? "").replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
  function fillSelect(id, values) {
    const node = $("#" + id);
    for (const value of [...new Set(values.filter(Boolean))].sort((a,b)=>a.localeCompare(b,"es"))) {
      const option = document.createElement("option");
      option.value = value; option.textContent = id === "mythic-kind" ? (kindLabels[value] || value) : value; node.appendChild(option);
    }
  }
  function visibleEntities() {
    const query = $("#mythic-search").value.trim().toLocaleLowerCase("es");
    const kind = $("#mythic-kind").value, tradition = $("#mythic-tradition").value, status = $("#mythic-status").value;
    return catalog.entities.filter(entity => {
      const haystack = [entity.name, entity.summary, entity.tradition, entity.region, entity.status, ...(entity.tags||[]), entity.kind]
        .join(" ").toLocaleLowerCase("es");
      return (!query || haystack.includes(query)) && (!kind || entity.kind === kind) &&
        (!tradition || entity.tradition === tradition) && (!status || entity.status === status);
    });
  }
  function chip(text) { return '<span class="mythic-chip">' + esc(text) + '</span>'; }
  function card(entity) {
    return '<button class="mythic-card" data-open-entity="' + esc(entity.id) + '"><div class="mythic-meta">' +
      chip(kindLabels[entity.kind] || entity.kind) + chip(labels[entity.status] || entity.status) +
      '</div><h3>' + esc(entity.name) + '</h3><p>' + esc(entity.summary) + '</p><div class="mythic-tags">' +
      (entity.tags||[]).slice(0,4).map(chip).join("") + '</div></button>';
  }
  function renderList() {
    selectedId = null;
    const entities = visibleEntities();
    $("#mythic-catalog-count").textContent = entities.length + " / " + catalog.entities.length + " fichas";
    $("#mythic-catalog-content").innerHTML = entities.length
      ? '<div class="mythic-catalog-grid">' + entities.map(card).join("") + '</div>'
      : '<div class="mythic-empty">No hay coincidencias. Probá otro nombre, tradición o filtro.</div>';
  }
  function openEntity(id, push = true) {
    const entity = catalog.entities.find(item => item.id === id);
    if (!entity) return;
    if (push && selectedId && selectedId !== id) history.push(selectedId);
    selectedId = id;
    const relations = (entity.relations || []).map(relation => {
      const target = catalog.entities.find(item => item.id === relation.targetId);
      if (!target) return "";
      return '<button class="mythic-link" data-open-entity="' + esc(target.id) + '">' + esc(target.name) +
        ' <span class="mythic-chip">' + esc(relation.type.replaceAll("_"," ")) + '</span></button>';
    }).join("");
    const incoming = catalog.entities.flatMap(other => (other.relations||[])
      .filter(relation => relation.targetId === id)
      .map(relation => '<button class="mythic-link" data-open-entity="' + esc(other.id) + '">' + esc(other.name) +
        ' <span class="mythic-chip">vínculo entrante</span></button>'));
    const sourceNotes = entity.sourceNotes ? '<p><strong>Notas de procedencia:</strong> ' + esc(entity.sourceNotes) + '</p>' : "";
    const creative = entity.creativeHook ? '<section class="mythic-relation-group"><h4>Idea de adaptación (no es un dato mitológico)</h4><p>' + esc(entity.creativeHook) + '</p></section>' : "";
    $("#mythic-catalog-count").textContent = "Ficha · " + entity.id;
    $("#mythic-catalog-content").innerHTML =
      '<article class="mythic-detail"><div class="mythic-detail-actions"><button class="mythic-link" data-catalog-back>← Volver</button><button class="mythic-link" data-catalog-index>Ver índice completo</button></div>' +
      '<div class="mythic-meta">' + chip(kindLabels[entity.kind] || entity.kind) + chip(labels[entity.status] || entity.status) +
      chip(entity.tradition) + chip(entity.region) + '</div><h3>' + esc(entity.name) + '</h3><p>' + esc(entity.summary) + '</p>' +
      (entity.tags?.length ? '<div class="mythic-tags">' + entity.tags.map(chip).join("") + '</div>' : "") +
      sourceNotes + creative +
      '<section class="mythic-relation-group"><h4>Relaciones para seguir explorando</h4><div class="mythic-relations">' +
      (relations || '<p>Esta ficha todavía no tiene relaciones salientes registradas.</p>') + '</div></section>' +
      '<section class="mythic-relation-group"><h4>También se llega desde</h4><div class="mythic-relations">' +
      (incoming.join("") || '<p>No hay vínculos entrantes registrados todavía.</p>') + '</div></section></article>';
  }
  root.addEventListener("click", event => {
    const opener = event.target.closest("[data-open-entity]");
    if (opener) { openEntity(opener.dataset.openEntity); return; }
    if (event.target.closest("[data-catalog-index]")) { history.length = 0; renderList(); return; }
    if (event.target.closest("[data-catalog-back]")) {
      const previous = history.pop();
      if (previous) openEntity(previous, false); else renderList();
    }
  });
  ["mythic-search","mythic-kind","mythic-tradition","mythic-status"].forEach(id => {
    $("#" + id).addEventListener(id === "mythic-search" ? "input" : "change", renderList);
  });
  fetch("./data/catalog/mythic-arsenal.json").then(response => {
    if (!response.ok) throw new Error("HTTP " + response.status);
    return response.json();
  }).then(data => {
    catalog = data;
    fillSelect("mythic-kind", data.entities.map(entity => entity.kind).map(kind => kindLabels[kind] ? kind : kind));
    fillSelect("mythic-tradition", data.entities.map(entity => entity.tradition));
    // Check all relation targets before rendering; broken links are reported, not silently followed.
    const ids = new Set(data.entities.map(entity => entity.id));
    const broken = data.entities.flatMap(entity => (entity.relations||[]).filter(relation => !ids.has(relation.targetId)).map(relation => entity.id + " → " + relation.targetId));
    if (broken.length) console.error("Mythic catalog contains broken relations:", broken);
    renderList();
  }).catch(error => {
    $("#mythic-catalog-count").textContent = "No disponible";
    $("#mythic-catalog-content").innerHTML = '<div class="mythic-empty">No se pudo cargar el catálogo: ' + esc(error.message) + '. Abrí WordWaifu desde su servidor local para que pueda leer el archivo JSON.</div>';
  });
})();

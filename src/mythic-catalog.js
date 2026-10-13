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
  const pick = (items) => items[Math.floor(Math.random() * items.length)];
  let lastGeneratedEntityId = null;
  let savedProposals = [];
  let savedStories = [];
  let editingProposalId = null;

  function mountGenerator() {
    if ($("#mythic-generator-panel")) return;
    const panel = document.createElement("section");
    panel.id = "mythic-generator-panel";
    panel.className = "mythic-detail mythic-generator-panel";
    panel.innerHTML = '<h3>Forja de personajes e invocaciones</h3>' +
      '<p>Las mecánicas generadas son adaptaciones originales, no atributos mitológicos documentados. Marcá uno o varios modos para combinarlos.</p>' +
      '<div class="mythic-generator-modes">' +
      '<label><input type="checkbox" name="mythic-mode" value="weapon" checked> Portador de armas</label>' +
      '<label><input type="checkbox" name="mythic-mode" value="incarnation"> Reencarnación / encarnación</label>' +
      '<label><input type="checkbox" name="mythic-mode" value="cards" checked> Invocador de cartas</label>' +
      '<label><input type="checkbox" name="mythic-mode" value="relic"> Invocador de reliquias</label></div>' +
      '<div class="mythic-generator-actions"><label>Tradición<select id="mythic-generator-tradition"><option value="">Cualquiera</option></select></label>' +
      '<button type="button" class="mythic-link" id="mythic-generate">✦ Generar propuesta</button></div>' +
      '<div class="mythic-generator-fields">' +
      '<label>Nombre / concepto<input id="mythic-draft-title" maxlength="160"></label>' +
      '<label>Historia y origen<textarea id="mythic-draft-concept" rows="3"></textarea></label>' +
      '<label>Habilidad (adaptación original)<textarea id="mythic-draft-ability" rows="3"></textarea></label>' +
      '<label>Activación y condiciones<textarea id="mythic-draft-activation" rows="2"></textarea></label>' +
      '<label>Coste y limitaciones<textarea id="mythic-draft-cost" rows="2"></textarea></label>' +
      '<label>Riesgos y consecuencias<textarea id="mythic-draft-risk" rows="2"></textarea></label>' +
      '<label>Evolución desbloqueable<textarea id="mythic-draft-progression" rows="2"></textarea></label>' +
      '<label>Debilidad / conflicto<textarea id="mythic-draft-weakness" rows="2"></textarea></label>' +
      '<label>Historia del proyecto<select id="mythic-draft-story"><option value="">Sin vincular todavía</option></select></label></div>' +
      '<p id="mythic-draft-source" class="field-help">La figura inspiradora aparecerá aquí.</p>' +
      '<div class="mythic-generator-actions"><button type="button" class="mythic-link" id="mythic-save-draft">Guardar en proyecto</button><button type="button" class="mythic-link" id="mythic-cancel-edit">Descartar cambios</button><span id="mythic-generator-status" role="status" aria-live="polite">Generar no guarda automáticamente.</span></div>' +
      '<section class="mythic-relation-group"><h4>Propuestas guardadas en este proyecto</h4><div id="mythic-saved-proposals"><p class="field-help">Cargando propuestas…</p></div></section>';
    const filters = $(".mythic-filters");
    filters.insertAdjacentElement("afterend", panel);
    const tradition = $("#mythic-generator-tradition");
    [...new Set(catalog.entities.filter(e => e.status === "mythology_reference" || e.status === "historical_reference").map(e => e.tradition))].sort((a,b)=>a.localeCompare(b,"es")).forEach(value => {
      const option=document.createElement("option"); option.value=value; option.textContent=value; tradition.appendChild(option);
    });
    $("#mythic-generate").addEventListener("click", generateProposal);
    $("#mythic-save-draft").addEventListener("click", saveProposal);
    $("#mythic-cancel-edit").addEventListener("click", () => { editingProposalId=null; $("#mythic-generator-status").textContent="Edición descartada; el borrador no se guardó."; });
    $("#mythic-saved-proposals").addEventListener("click", event => {
      const edit=event.target.closest("[data-edit-proposal]");
      const remove=event.target.closest("[data-delete-proposal]");
      if(edit){const item=savedProposals.find(p=>p.id===edit.dataset.editProposal);if(item)fillDraft(item);}
      if(remove){document.dispatchEvent(new CustomEvent("wordwaifu:mythic-proposal-delete",{detail:{id:remove.dataset.deleteProposal}}));}
    });
    document.addEventListener("wordwaifu:mythic-proposals-loaded", event => {
      savedProposals=Array.isArray(event.detail?.proposals)?event.detail.proposals:[];
      savedStories=Array.isArray(event.detail?.stories)?event.detail.stories:[];
      const storySelect=$("#mythic-draft-story"), previous=storySelect.value;
      storySelect.replaceChildren(new Option("Sin vincular todavía",""));
      savedStories.forEach(story=>storySelect.add(new Option(story.title||story.name||story.id,story.id)));
      if(savedStories.some(story=>story.id===previous))storySelect.value=previous;
      renderSavedProposals();
    });
    renderSavedProposals();
    generateProposal();
  }

  const modeNames = {weapon:"portador de arma",incarnation:"reencarnación o encarnación",cards:"invocador de cartas",relic:"invocador de reliquias"};
  const sample = {
    activation:["Se activa al nombrar la fuente y aceptar una condición concreta.","Requiere un gesto ritual y una decisión consciente del portador.","Solo responde cuando el usuario cumple una promesa verificable.","Exige una ventana breve de concentración; una interrupción corta el efecto."],
    cost:["Consume resistencia y deja al usuario vulnerable después del uso.","Cada activación impone una deuda que debe resolverse en una escena posterior.","El poder pierde precisión si se usa lejos del lugar o contexto que lo inspira.","La entidad puede negarse; el vínculo no equivale a control absoluto."],
    risk:["Un uso excesivo altera la relación con la entidad y puede romper el contrato.","El efecto también afecta al entorno; no distingue automáticamente aliados de enemigos.","Si se oculta el coste a un aliado, el conflicto puede dañar la confianza del grupo.","La activación puede atraer a un rival que reconoce la reliquia."],
    progression:["Etapa I: manifestación breve; etapa II: uso especializado tras superar una prueba; etapa III: sincronía limitada con un coste mayor.","La evolución depende de reparar una promesa incumplida, no de acumular poder sin consecuencias.","Desbloquea una aplicación defensiva después de aceptar una limitación permanente."],
    weakness:["El efecto falla si el objetivo contradice el dominio narrativo de la fuente o si el usuario viola el pacto.","El personaje conserva una debilidad física o social que el poder no resuelve.","Un rival puede explotar el tiempo de preparación o el coste visible.","La invocación ofrece consejo, no obediencia; puede discrepar del protagonista."]
  };
  function currentModes(){return Array.from(document.querySelectorAll('input[name="mythic-mode"]:checked')).map(node=>node.value);}
  function generateProposal(){
    if(!catalog)return;
    let modes=currentModes();if(!modes.length){$("#mythic-generator-status").textContent="Seleccioná al menos un modo.";return;}
    const selectedTradition=$("#mythic-generator-tradition").value;
    let candidates=catalog.entities.filter(e=>(e.status==="mythology_reference"||e.status==="historical_reference") &&
      !["summoning_mechanic","progression_system","system_taxonomy","world_rule"].includes(e.kind) &&
      (!selectedTradition||e.tradition===selectedTradition));
    if(candidates.length>1){const fresh=candidates.filter(e=>e.id!==lastGeneratedEntityId);if(fresh.length)candidates=fresh;}
    if(!candidates.length){$("#mythic-generator-status").textContent="No hay fuentes para esos filtros; elegí otra tradición.";return;}
    const entity=pick(candidates);lastGeneratedEntityId=entity.id;
    const modeText=modes.map(mode=>modeNames[mode]).join(" + ");
    editingProposalId=null;
    $("#mythic-draft-title").value="Eco de "+entity.name+" · "+pick(["La deuda del umbral","El pacto incompleto","La reliquia despierta","La segunda voz","El precio del retorno"]);
    $("#mythic-draft-concept").value="Personaje original: "+pick(["una archivista que descubre una herencia contradictoria","un explorador que hereda una promesa ajena","una estratega que teme depender de una fuerza que no comprende","un aprendiz que debe negociar con una presencia antigua"])+". Modo: "+modeText+". Figura de referencia: "+entity.name+" ("+entity.tradition+"). "+entity.summary;
    $("#mythic-draft-ability").value="Adaptación ficticia: "+pick(["materializa durante unos instantes un arma simbólica ligada a la historia de la figura","manifiesta un atributo limitado mediante una carta que conserva voluntad propia","hereda un eco de memoria que revela una pista, pero no predice el futuro","invoca una protección breve cuyo alcance depende de un acuerdo explícito"])+". Esta mecánica es original de WordWaifu y no una afirmación sobre la tradición.";
    $("#mythic-draft-activation").value=pick(sample.activation);
    $("#mythic-draft-cost").value=pick(sample.cost);
    $("#mythic-draft-risk").value=pick(sample.risk);
    $("#mythic-draft-progression").value=pick(sample.progression);
    $("#mythic-draft-weakness").value=pick(sample.weakness);
    $("#mythic-draft-story").value="";
    $("#mythic-draft-source").textContent="Inspiración: "+entity.name+" · "+entity.tradition+" · ID "+entity.id+". Estado de la ficha: "+(labels[entity.status]||entity.status)+".";
    $("#mythic-draft-source").dataset.entityId=entity.id;
    $("#mythic-generator-status").textContent="Propuesta nueva sin guardar. Podés editarla o generar otra.";
  }
  function fillDraft(item){
    editingProposalId=item.id;
    for(const key of ["title","concept","ability","activation","cost","risk","progression","weakness"])$("#mythic-draft-"+key).value=item[key]||"";
    $("#mythic-draft-story").value=item.storyId||"";
    $("#mythic-draft-source").textContent="Inspiración registrada: "+(item.entityIds||[]).join(", ")+". Podés editar y volver a guardar.";
    $("#mythic-draft-source").dataset.entityId=(item.entityIds||[])[0]||"";
    $("#mythic-generator-status").textContent="Editando propuesta guardada.";
  }
  function saveProposal(){
    const title=$("#mythic-draft-title").value.trim();
    if(!title){$("#mythic-generator-status").textContent="La propuesta necesita un nombre.";return;}
    const modes=currentModes();if(!modes.length){$("#mythic-generator-status").textContent="Seleccioná al menos un modo.";return;}
    const entityId=$("#mythic-draft-source").dataset.entityId;
    const proposal={id:editingProposalId||("mythic-proposal-"+Date.now().toString(36)+"-"+Math.random().toString(36).slice(2,7)),
      title,modes,concept:$("#mythic-draft-concept").value,ability:$("#mythic-draft-ability").value,
      activation:$("#mythic-draft-activation").value,cost:$("#mythic-draft-cost").value,
      risk:$("#mythic-draft-risk").value,progression:$("#mythic-draft-progression").value,
      weakness:$("#mythic-draft-weakness").value,storyId:$("#mythic-draft-story").value||null,
      entityIds:entityId?[entityId]:[],status:"draft",updatedAt:new Date().toISOString()};
    document.dispatchEvent(new CustomEvent("wordwaifu:mythic-proposal-save",{detail:{proposal}}));
    $("#mythic-generator-status").textContent="Enviando al proyecto para guardar…";
  }
  function renderSavedProposals(){
    const target=$("#mythic-saved-proposals");if(!target)return;
    target.innerHTML=savedProposals.length?savedProposals.map(item=>'<div class="mythic-saved-proposal"><strong>'+esc(item.title)+'</strong><p>'+esc(item.concept||"")+'</p><span class="mythic-chip">'+esc((item.modes||[]).map(modeNamesKey=>modeNames[modeNamesKey]||modeNamesKey).join(" + "))+'</span><div class="mythic-generator-actions"><button type="button" class="mythic-link" data-edit-proposal="'+esc(item.id)+'">Editar</button><button type="button" class="mythic-link" data-delete-proposal="'+esc(item.id)+'">Eliminar</button></div></div>').join(""):'<p class="field-help">Todavía no hay propuestas guardadas en este proyecto.</p>';
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
    mountGenerator();
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

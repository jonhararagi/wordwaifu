(function (root, factory) {
  "use strict";
  const api = factory();
  if (typeof module === "object" && module.exports) module.exports = api;
  else root.WordWaifuUniverseExplorer = api;
})(typeof globalThis !== "undefined" ? globalThis : this, function () {
  "use strict";
  let root=null, graph=null, activeId=null;
  let stack=[];
  const $=(selector,scope=root)=>scope.querySelector(selector);
  function el(tag,cls,text){const node=document.createElement(tag);if(cls)node.className=cls;if(text!==undefined)node.textContent=text;return node;}
  function button(label,action,cls){const b=el("button",cls||"outline-button",label);b.type="button";b.dataset.explorerAction=action;return b;}
  function safeExternalLink(container,label,url){
    try{const parsed=new URL(url);if(!["http:","https:"].includes(parsed.protocol))return;const a=el("a","",label);a.href=parsed.href;a.target="_blank";a.rel="noopener noreferrer";container.appendChild(a);}catch(_){}
  }
  function typeGroup(type){
    if(/personaje/i.test(type))return "character";
    if(/familia|organizaci[oó]n|imperio|movimiento|orden|cuerpo militar/i.test(type))return "group";
    if(/sistema de poder|poder/i.test(type))return "power";
    if(/lugar|ciudad/i.test(type))return "place";
    if(/periodo|acontecimiento|plan/i.test(type))return "event";
    return "other";
  }
  function sourceQualityLabel(value){
    const labels={
      "editorial-official":"Sinopsis editorial oficial",
      "official-adaptation":"Perfil oficial de adaptación",
      "official-reference":"Referencia oficial",
      "official-reference-partial":"Referencia oficial · parcial",
      "official-plus-secondary":"Oficial + fuente secundaria",
      "curated-dossier-mixed":"Expediente ampliado · fuentes mixtas",
      "official-canon-profile":"Perfil oficial de adaptación",
      "index-seed":"Entrada inicial · confirmar",
      "mixed":"Fuentes mixtas"
    };
    return labels[value]||"Referencia parcial";
  }
  function universeLabel(value){return value==="DanMachi"?"DanMachi":value==="Code Geass"?"Code Geass":"Todos los universos";}
  function init(){
    if(!root||!graph)return;
    root.replaceChildren();
    const header=el("header","universe-explorer-header");
    const lead=el("div");
    lead.append(el("p","eyebrow","WORDWAIFU · LORE CONECTADO"),el("h2","","Explorador de universos"),el("p","field-help","Seguí un personaje hacia sus relaciones, familia, diosa, sistema o acontecimiento. La ruta queda arriba para que puedas retroceder o volver al índice sin perder el contexto."));
    header.appendChild(lead);
    const home=button("⌂ Inicio","home","outline-button");header.appendChild(home);root.appendChild(header);
    const coverage=el("div","universe-coverage");coverage.id="universe-coverage";
    graph.coverage().forEach(item=>{
      const card=el("article","universe-coverage-card");
      card.append(el("strong","",item.universe),el("span","",item.total+" nodos · "+item.characters+" personajes"),el("p","",item.status));
      coverage.appendChild(card);
    });
    root.appendChild(coverage);
    const layout=el("div","universe-explorer-layout");
    const directory=el("section","universe-directory");
    directory.append(el("p","eyebrow","ÍNDICE"),el("h3","","Buscar y filtrar"));
    const searchLabel=el("label","universe-search-field");searchLabel.appendChild(el("span","","Nombre, alias, rasgo o concepto"));
    const search=document.createElement("input");search.type="search";search.id="universe-search";search.placeholder="Ryu, Alise, Geass, familia…";search.autocomplete="off";searchLabel.appendChild(search);directory.appendChild(searchLabel);
    const filters=el("div","universe-filter-grid");
    const universeLabelNode=el("label","");universeLabelNode.appendChild(el("span","","Franquicia"));
    const universe=document.createElement("select");universe.id="universe-filter";
    [["all","Todos"],["DanMachi","DanMachi"],["Code Geass","Code Geass"]].forEach(([v,l])=>universe.add(new Option(l,v)));
    universeLabelNode.appendChild(universe);filters.appendChild(universeLabelNode);
    const typeLabel=el("label","");typeLabel.appendChild(el("span","","Tipo de ficha"));
    const type=document.createElement("select");type.id="universe-type-filter";
    [["all","Todos los tipos"],["character","Personajes"],["group","Familias / organizaciones"],["power","Poderes / sistemas"],["place","Lugares"],["event","Acontecimientos"],["other","Otros"]].forEach(([v,l])=>type.add(new Option(l,v)));
    typeLabel.appendChild(type);filters.appendChild(typeLabel);directory.appendChild(filters);
    const resultsHeading=el("div","universe-results-heading");resultsHeading.append(el("h4","","Resultados"),el("span","","Buscá o seleccioná una ficha"));directory.appendChild(resultsHeading);
    const results=el("div","universe-search-results");results.id="universe-search-results";results.setAttribute("role","list");directory.appendChild(results);
    const status=el("p","field-help","Las fichas y conexiones son parciales y conservan el nivel de fuente.");status.id="universe-explorer-status";status.setAttribute("role","status");directory.appendChild(status);
    layout.appendChild(directory);
    const detail=el("section","universe-entity-panel");detail.id="universe-entity-panel";
    detail.appendChild(el("div","empty-state","Buscá Ryu, Lelouch, una Familia o un sistema de poder para comenzar."));
    layout.appendChild(detail);root.appendChild(layout);
    search.addEventListener("input",renderResults);universe.addEventListener("change",renderResults);type.addEventListener("change",renderResults);
    root.addEventListener("click",onClick);
    renderResults();
  }
  function renderResults(){
    if(!root||!graph)return;
    const results=$("#universe-search-results"),query=$("#universe-search").value,universe=$("#universe-filter").value,type=$("#universe-type-filter").value;
    results.replaceChildren();
    const found=graph.search(query,{universe,type:"all"}).filter(entity=>universe==="all"||entity.universe===universe)
      .filter(entity=>type==="all"||typeGroup(entity.type)===type).slice(0,80);
    $("#universe-explorer-status").textContent=found.length+" resultados"+(query?" para «"+query+"»":"")+". Cada conexión muestra su continuidad y tipo de evidencia.";
    if(!found.length){results.appendChild(el("div","empty-state","No hay coincidencias con estos filtros. Probá otro nombre o cambiá de franquicia."));return;}
    found.forEach(entity=>{
      const card=el("button","universe-result-card");
      card.type="button";card.dataset.explorerOpen=entity.id;card.setAttribute("role","listitem");
      card.classList.toggle("is-selected",activeId===entity.id);
      const heading=el("span","universe-result-title",entity.name);
      const meta=el("span","universe-result-meta",universeLabel(entity.universe)+" · "+entity.type);
      const summary=el("span","universe-result-summary",entity.summary||entity.description||"Sin resumen.");
      card.append(heading,meta,summary);results.appendChild(card);
    });
  }
  function renderTrail(panel){
    const trail=el("nav","universe-breadcrumbs");trail.setAttribute("aria-label","Ruta de navegación");
    trail.appendChild(button("Índice","home","universe-breadcrumb-button"));
    stack.forEach((id,index)=>{
      trail.appendChild(el("span","universe-breadcrumb-separator","›"));
      const entity=graph.getEntity(id);
      if(entity)trail.appendChild(button(entity.name,"trail:"+index,"universe-breadcrumb-button"));
    });
    if(activeId){
      trail.appendChild(el("span","universe-breadcrumb-separator","›"));
      const entity=graph.getEntity(activeId);
      trail.appendChild(el("strong","universe-breadcrumb-current",entity?entity.name:"Ficha"));
    }
    panel.appendChild(trail);
  }
  function renderDetail(){
    const panel=$("#universe-entity-panel");panel.replaceChildren();
    if(!activeId){panel.appendChild(el("div","empty-state","Seleccioná una ficha. Podés seguir las conexiones y volver atrás o al índice cuando quieras."));renderResults();return;}
    const entity=graph.getEntity(activeId);if(!entity){activeId=null;renderDetail();return;}
    renderTrail(panel);
    const actions=el("div","universe-detail-actions");
    actions.append(button("← Atrás","back","outline-button"),button("⌂ Inicio","home","quiet-button"));
    panel.appendChild(actions);
    const header=el("header","universe-entity-heading");
    header.append(el("p","eyebrow",entity.universe+" · "+entity.type),el("h2","",entity.name));
    const badges=el("div","universe-entity-badges");
    badges.append(el("span","universe-badge",entity.continuity||"Continuidad por verificar"),el("span","universe-badge",entity.status||"Estado parcial"),el("span","universe-badge",sourceQualityLabel(entity.sourceQuality)));
    header.appendChild(badges);panel.appendChild(header);
    panel.appendChild(el("p","universe-entity-summary",entity.summary||entity.description||"No hay resumen suficiente."));
    if(entity.description&&entity.description!==entity.summary)panel.appendChild(el("p","universe-entity-description",entity.description));
    const facts=el("div","universe-entity-facts");
    [["Apariencia",entity.appearance],["Personalidad y conducta",entity.personality],["Historia y trasfondo",entity.history],["Relaciones descritas en el expediente",entity.relationships],["Objetivos y motivación",entity.goals],["Valores",entity.values],["Miedo o contradicción",entity.fear],["Arco / evolución",entity.characterArc],["Qué sabe en esta etapa",entity.knowledgeScope],["Conflicto personal",entity.conflict],["Afiliación",entity.affiliation],["Habilidades / sistema",entity.abilities],["Activación del poder",entity.activation],["Costes",entity.cost],["Límites",entity.limits],["Evolución del poder",entity.evolution],["Consecuencias",entity.consequences],["Continuidad",entity.continuity],["Estado de spoilers",entity.spoilerLevel]].forEach(([label,value])=>{
      if(!value)return;const card=el("article","universe-fact-card");card.append(el("strong","",label),el("p","",value));facts.appendChild(card);
    });
    if(facts.childNodes.length)panel.appendChild(facts);
    if(entity.notes)panel.appendChild(el("p","universe-source-note","Límites de esta ficha: "+entity.notes));
    const related=graph.getRelated(entity.id);
    const section=el("section","universe-related-section");
    const h=el("div","universe-related-heading");h.append(el("h3","","Seguir explorando"),el("span","",related.length+" conexiones"));section.appendChild(h);
    const queryNode=$("#universe-search");
    if(related.length){
      const grid=el("div","universe-related-grid");
      related.forEach(link=>{
        const card=el("article","universe-related-card");
        const top=el("div","universe-related-card-top");top.append(el("strong","",link.targetName),el("span","universe-badge",link.target.type));
        card.appendChild(top);card.append(el("p","universe-related-description",link.description||link.type||"Conexión registrada."));
        card.append(el("p","universe-related-meta",[link.type,link.continuity||"Continuidad sin fijar",sourceQualityLabel(link.sourceQuality)].filter(Boolean).join(" · ")));
        const open=button("Abrir ficha ↗","open:"+link.targetId,"universe-open-related");card.appendChild(open);
        if(link.sourceUrl){const source=el("div","universe-relationship-source");safeExternalLink(source,"Ver fuente ("+(link.sourceTitle||"referencia")+")",link.sourceUrl);card.appendChild(source);}
        grid.appendChild(card);
      });
      section.appendChild(grid);
    }else section.appendChild(el("div","empty-state","Todavía no hay conexiones incorporadas para esta ficha. No se inventan relaciones para rellenar el mapa."));
    panel.appendChild(section);
    const sources=el("section","universe-sources-section");sources.appendChild(el("h3","","Fuente de referencia"));
    sources.append(el("p","",entity.sourceTitle||"No se ha atribuido una fuente concreta."),el("p","universe-source-note","Calidad: "+sourceQualityLabel(entity.sourceQuality)+" · El nivel de detalle no equivale a cobertura completa."));
    const sourceUrls=Array.isArray(entity.sourceUrls)&&entity.sourceUrls.length?entity.sourceUrls:(entity.sourceUrl?[entity.sourceUrl]:[]);
    Array.from(new Set(sourceUrls)).forEach((url,index)=>safeExternalLink(sources,"Abrir "+(sourceUrls.length>1?"fuente "+(index+1):"referencia original")+" ↗",url));
    panel.appendChild(sources);
    renderResults();
  }
  function openEntity(id,remember){
    const found=graph.getEntity(id);if(!found)return;
    if(remember&&activeId&&activeId!==id)stack.push(activeId);
    activeId=id;renderDetail();
    const panel=$("#universe-entity-panel");if(panel)panel.scrollIntoView({block:"nearest",behavior:"auto"});
  }
  function goHome(){stack=[];activeId=null;renderDetail();}
  function onClick(event){
    const b=event.target.closest("[data-explorer-action],[data-explorer-open]");
    if(!b||!root.contains(b))return;
    if(b.dataset.explorerOpen){openEntity(b.dataset.explorerOpen,true);return;}
    const action=b.dataset.explorerAction;
    if(action==="home"){goHome();return;}
    if(action==="back"){const previous=stack.pop();activeId=previous||null;renderDetail();return;}
    if(action.startsWith("trail:")){const index=Number(action.split(":")[1]);if(Number.isInteger(index)&&index>=0&&index<stack.length){activeId=stack[index];stack=stack.slice(0,index);renderDetail();}return;}
    if(action.startsWith("open:")){openEntity(action.slice(5),true);}
  }
  function mount(options){
    root=options.root;
    graph=options.graph||(typeof globalThis!=="undefined"?globalThis.WordWaifuUniverseGraph:null);
    if(root&&graph)init();
  }
  return { mount };
});
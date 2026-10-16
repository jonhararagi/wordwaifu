(function(root,factory){"use strict";const api=factory();if(typeof module==="object"&&module.exports)module.exports=api;else root.WordWaifuDanMachiTimeline=api;})(typeof globalThis!=="undefined"?globalThis:this,function(){
"use strict";
function validateDataset(data){
 const errors=[];
 if(!data||data.schemaVersion!==1||data.universeId!=="danmachi")errors.push("Timeline schema or universe mismatch.");
 if(!data.anchor||data.anchor.id!=="T0-BELL-ARRIVAL")errors.push("Missing T0 Bell-arrival anchor.");
 const eras=Array.isArray(data.eras)?data.eras:[],events=Array.isArray(data.events)?data.events:[];
 const eraIds=new Set(),eventIds=new Set();
 for(const era of eras){if(!era.id)errors.push("Era without id.");else if(eraIds.has(era.id))errors.push("Duplicate era id: "+era.id);else eraIds.add(era.id);}
 for(const era of eras){if(era.parentId&&!eraIds.has(era.parentId))errors.push("Orphan era "+era.id+" -> "+era.parentId);}
 const byId=new Map(eras.map(era=>[era.id,era]));
 for(const era of eras){const seen=new Set();let current=era;while(current&&current.parentId){if(seen.has(current.id)){errors.push("Era cycle detected at "+era.id);break;}seen.add(current.id);current=byId.get(current.parentId);}}
 for(const event of events){
  if(!event.id)errors.push("Event without id.");
  else if(eventIds.has(event.id))errors.push("Duplicate event id: "+event.id);else eventIds.add(event.id);
  if(!eraIds.has(event.eraId))errors.push("Event "+event.id+" has unknown era "+event.eraId);
  if(!event.title||!event.dateLabel||!event.summary)errors.push("Event "+event.id+" missing title/date/summary.");
  if(!Array.isArray(event.continuityScopes)||!event.continuityScopes.length)errors.push("Event "+event.id+" missing explicit continuity.");
  if(!Array.isArray(event.sources)||!event.sources.length)errors.push("Event "+event.id+" missing source route.");
  for(const source of event.sources||[]){try{if(new URL(source.url).protocol!=="https:")errors.push("Non-HTTPS source in "+event.id);}catch{errors.push("Invalid source URL in "+event.id);}}
 }
 return {valid:errors.length===0,errors,eraCount:eras.length,eventCount:events.length};
}
function mount(){
 const panel=document.getElementById("danmachi-timeline-panel");
 if(!panel||panel.dataset.initialized==="true")return;
 panel.dataset.initialized="true";
 const status=panel.querySelector("#dm-timeline-status"),eraRoot=panel.querySelector("#dm-timeline-eras-view"),eventRoot=panel.querySelector("#dm-timeline-events-view");
 const query=panel.querySelector("#dm-timeline-query"),continuity=panel.querySelector("#dm-timeline-continuity"),eraFilter=panel.querySelector("#dm-timeline-era-filter");
 const tabs=Array.from(panel.querySelectorAll("[data-dm-timeline-tab]"));
 let data=null,activeTab="eras",activeEventId="";
 const esc=value=>String(value==null?"":value);
 function node(tag,className,text){const n=document.createElement(tag);if(className)n.className=className;if(text!=null)n.textContent=text;return n;}
 function matchedEvents(){
  if(!data)return [];
  const q=esc(query.value).trim().toLocaleLowerCase();
  const scope=continuity.value||"ALL";
  return data.events.filter(event=>{
   if(scope!=="ALL"&&!event.continuityScopes.includes(scope))return false;
   if(eraFilter.value!=="ALL"&&event.eraId!==eraFilter.value)return false;
   if(q){const parts=[event.id,event.title,event.dateLabel,event.summary,...(event.participants||[]).map(p=>p.name+" "+p.role),...(event.relatedEntities||[]).map(p=>p.name)].join(" ").toLocaleLowerCase();if(!parts.includes(q))return false;}
   return true;
  }).sort((a,b)=>(a.sortIndex||a.sortOrder||0)-(b.sortIndex||b.sortOrder||0)||a.id.localeCompare(b.id));
 }
 function hasMatchingDescendant(era,items){if(items.some(e=>e.eraId===era.id))return true;return data.eras.some(child=>child.parentId===era.id&&hasMatchingDescendant(child,items));}
 function certaintyLabel(value){const labels={official_publisher_timeframe:"Marco temporal editorial oficial",official_chronology_anchor:"Ancla de cronología oficial",partial:"Parcial",chronology_open:"Cronología abierta",candidate_pending_source_locator:"Candidato · falta localizador primario",secondary_timeline_primary_page_pending:"Secundaria · cotejo primario pendiente",retrospective_primary_page_pending:"Retrospectiva · cotejo primario pendiente",author_owned:"Rama del autor, no canon"};return labels[value]||"Verificación pendiente";}
 function evidenceLabel(value){if(/^official/.test(value))return "Fuente oficial/editorial · páginas pendientes";if(/secondary|retrospective/.test(value))return "Referencia secundaria · cotejo primario pendiente";if(/candidate|catalog/.test(value))return "Candidato provisional";return "Evidencia parcial · revisar fuente";}
 function renderEraNode(era,items,depth){
  if(!hasMatchingDescendant(era,items))return null;
  const wrap=node("section","dm-era-node"+(depth?" dm-era-node--child":""));wrap.style.setProperty("--era-depth",String(depth));
  const card=node("div","dm-era-card"),top=node("div","dm-era-card-top");
  top.append(node("span","dm-era-index",era.id),node("span","dm-era-certainty",certaintyLabel(era.certainty)));
  card.append(top,node("h4","",era.title),node("p","dm-era-date",era.rangeLabel),node("p","dm-era-summary",era.summary));
  if(era.notes)card.append(node("p","dm-era-notes",era.notes));
  const eraEvents=items.filter(event=>event.eraId===era.id);
  if(eraEvents.length){const links=node("div","dm-era-event-links");eraEvents.forEach(event=>{const b=node("button","dm-era-event-link",event.dateLabel+" — "+event.title);b.type="button";b.dataset.timelineOpenEvent=event.id;links.append(b);});card.append(links);}
  wrap.append(card);
  const children=data.eras.filter(child=>child.parentId===era.id).sort((a,b)=>a.order-b.order),childWrap=node("div","dm-era-children");
  children.forEach(child=>{const rendered=renderEraNode(child,items,depth+1);if(rendered)childWrap.append(rendered);});
  if(childWrap.childElementCount)wrap.append(childWrap);
  return wrap;
 }
 function appendPersonChip(list,person,event){
  if(person.id&&person.registered===true&&person.kind==="monster"){
   const b=node("button","dm-timeline-person",person.name+" · ficha de amenaza");b.type="button";b.dataset.timelineEntity=person.id;b.dataset.timelineEntityName=person.name;b.dataset.timelineEntityKind=person.kind;b.title="Buscar la ficha tipada de "+person.name;list.append(b);
  }else if(person.id&&person.kind!=="monster"&&person.kind!=="faction"&&person.kind!=="threat"&&person.kind!=="organization"){
   const b=node("button","dm-timeline-person",person.name);b.type="button";b.dataset.timelineCharacter=person.id;b.dataset.timelineCharacterName=person.name;b.dataset.timelineContinuity=event.continuityScopes[0]||"ALL";b.title="Abrir ficha disponible de "+person.name;list.append(b);
  }else{
   const chip=node("span","dm-timeline-person dm-timeline-person--plain",person.name+(person.registered===true?" · ficha del catálogo":""));if(person.note)chip.title=person.note;list.append(chip);
  }
 }
 function renderEventCard(event){
  const article=node("article","dm-historical-event"+(activeEventId===event.id?" is-selected":""));article.id="dm-event-"+event.id;
  const dot=node("span","dm-event-dot"),card=node("div","dm-event-card"),head=node("div","dm-event-card-heading");
  head.append(node("span","dm-event-date",event.dateLabel),node("span","dm-event-evidence",evidenceLabel(event.evidenceStatus)));
  card.append(head,node("h4","",event.title),node("p","dm-event-summary",event.summary));
  if((event.participants||[]).length){const block=node("div","dm-event-participants");block.append(node("strong","","Personajes vinculados"));const chips=node("div","dm-event-person-list");event.participants.forEach(person=>appendPersonChip(chips,person,event));block.append(chips);card.append(block);}
  if((event.relatedEntities||[]).length){const block=node("div","dm-event-related");block.append(node("strong","","Antagonistas, amenazas y expedientes relacionados"));const chips=node("div","dm-event-person-list");event.relatedEntities.forEach(person=>appendPersonChip(chips,person,event));block.append(chips);card.append(block);}
  const sources=node("div","dm-event-sources");sources.append(node("strong","","Rutas de verificación"));
  (event.sources||[]).forEach(source=>{const a=node("a","dm-event-source-link",source.label);a.href=source.url;a.target="_blank";a.rel="noopener noreferrer";a.title=source.note||source.label;sources.append(a);});
  if(event.detailPath){const a=node("a","dm-event-record-link","Abrir expediente del acontecimiento ↗");a.href="https://github.com/jonhararagi/wordwaifu/blob/work/story-completion-danmachi-audit-2026-10/lore/danmachi/"+event.detailPath;a.target="_blank";a.rel="noopener noreferrer";sources.append(a);}
  card.append(sources);article.append(dot,card);return article;
 }
 function draw(){
  if(!data)return;
  const items=matchedEvents();
  status.textContent=items.length+" acontecimientos visibles · "+data.eras.length+" épocas en el mapa. Las fechas sin día exacto siguen como aproximaciones; una sinopsis editorial no equivale a cotejo página por página.";
  eraRoot.replaceChildren();data.eras.filter(era=>!era.parentId).sort((a,b)=>a.order-b.order).forEach(era=>{const n=renderEraNode(era,items,0);if(n)eraRoot.append(n);});
  if(!eraRoot.childElementCount)eraRoot.append(node("p","dm-timeline-empty","No hay épocas o acontecimientos para esos filtros."));
  eventRoot.replaceChildren();
  data.eras.slice().sort((a,b)=>a.order-b.order).forEach(era=>{
   const groupItems=items.filter(event=>event.eraId===era.id);if(!groupItems.length)return;
   const section=node("section","dm-event-era-group");section.append(node("div","dm-event-era-heading",era.title),node("p","dm-event-era-range",era.rangeLabel));
   const track=node("div","dm-event-track");groupItems.forEach(event=>track.append(renderEventCard(event)));section.append(track);eventRoot.append(section);
  });
  if(!eventRoot.childElementCount)eventRoot.append(node("p","dm-timeline-empty","No hay acontecimientos para la búsqueda y continuidad seleccionadas."));
  const selectedEra=eraFilter.value;eraFilter.replaceChildren(new Option("Todas las épocas","ALL"));
  data.eras.slice().sort((a,b)=>a.order-b.order).forEach(era=>eraFilter.appendChild(new Option(era.title,era.id)));
  eraFilter.value=data.eras.some(era=>era.id===selectedEra)?selectedEra:"ALL";
  tabs.forEach(tab=>{const chosen=tab.dataset.dmTimelineTab===activeTab;tab.setAttribute("aria-selected",chosen?"true":"false");tab.classList.toggle("is-active",chosen);});
  eraRoot.classList.toggle("hidden",activeTab!=="eras");eventRoot.classList.toggle("hidden",activeTab!=="events");
 }
 function activateTab(name){activeTab=name==="events"?"events":"eras";draw();}
 function openEvent(id){activeEventId=id;activeTab="events";draw();const target=document.getElementById("dm-event-"+id);if(target)target.scrollIntoView({behavior:"smooth",block:"center"});}
 function openCatalogEntity(name,kind){
  const browser=document.getElementById("danmachi-entity-browser"),query=document.getElementById("danmachi-entity-query"),type=document.getElementById("danmachi-entity-type");
  if(!browser||!query||!type)return;type.value=kind||"all";query.value=name;query.dispatchEvent(new Event("input",{bubbles:true}));type.dispatchEvent(new Event("change",{bubbles:true}));browser.scrollIntoView({behavior:"smooth",block:"start"});
 }
 function openCharacter(id,name,preferredContinuity){
  const continuitySelect=document.getElementById("archive-continuity"),search=document.getElementById("character-archive-query"),results=document.getElementById("character-archive-results");
  if(!search||!results)return;
  const tryOpen=(scope)=>{
   if(continuitySelect){continuitySelect.value=scope;continuitySelect.dispatchEvent(new Event("change",{bubbles:true}));}
   search.value=name;search.dispatchEvent(new Event("input",{bubbles:true}));
   const button=Array.from(results.querySelectorAll("[data-archive-open]")).find(item=>item.dataset.archiveOpen===id);
   if(button){button.click();const profile=document.getElementById("character-archive-profile");if(profile)profile.scrollIntoView({behavior:"smooth",block:"start"});return true;}
   return false;
  };
  if(!tryOpen(preferredContinuity||"ALL")&&preferredContinuity!=="ALL")tryOpen("ALL");
 }
 panel.addEventListener("click",event=>{
  const tab=event.target.closest("[data-dm-timeline-tab]");if(tab){activateTab(tab.dataset.dmTimelineTab);return;}
  const opener=event.target.closest("[data-timeline-open-event]");if(opener){openEvent(opener.dataset.timelineOpenEvent);return;}
  const entity=event.target.closest("[data-timeline-entity]");if(entity){openCatalogEntity(entity.dataset.timelineEntityName,entity.dataset.timelineEntityKind);return;}
  const person=event.target.closest("[data-timeline-character]");if(person){openCharacter(person.dataset.timelineCharacter,person.dataset.timelineCharacterName,person.dataset.timelineContinuity);return;}
 });
 tabs.forEach(tab=>tab.addEventListener("click",()=>activateTab(tab.dataset.dmTimelineTab)));
 query.addEventListener("input",draw);continuity.addEventListener("change",draw);eraFilter.addEventListener("change",draw);
 fetch("./lore/danmachi/timeline/eras-and-events.json",{cache:"no-cache"}).then(response=>{if(!response.ok)throw new Error("HTTP "+response.status);return response.json();}).then(json=>{
  const report=validateDataset(json);if(!report.valid)throw new Error(report.errors.join(" "));
  data=json;continuity.replaceChildren();(data.continuities||[]).forEach(scope=>continuity.appendChild(new Option(scope.label,scope.id)));
  continuity.value="ALL";draw();
 }).catch(error=>{status.textContent="No se pudo cargar el mapa histórico: "+error.message+". La enciclopedia de personajes sigue disponible.";});
}
if(typeof document!=="undefined"){if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",mount);else mount();}
return{validateDataset:validateDataset,mount:mount};
});
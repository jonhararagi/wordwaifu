(function(root,factory){"use strict";const api=factory();if(typeof module==="object"&&module.exports)module.exports=api;else root.WordWaifuDanMachiTimeline=api;})(typeof globalThis!=="undefined"?globalThis:this,function(){
"use strict";
function temporalKindLabel(temporal){
 if(!temporal)return "Tiempo sin normalizar";
 const labels={absolute_date:"Fecha de calendario",approximate_interval:"Intervalo aproximado",relative_offset:"Desplazamiento relativo",relative_order:"Orden relativo · distancia no calculable",unknown:"Tiempo desconocido / pendiente",anchor:"Ancla relativa · no es fecha de calendario"};
 const base=labels[temporal.kind]||"Clase temporal no reconocida";
 if(temporal.kind==="absolute_date"){
  const precision={day:"día",month:"mes",year:"año"}[temporal.precision]||"precisión pendiente";
  return base+" · precisión "+precision;
 }
 if(temporal.kind==="relative_offset")return base+(temporal.precision==="exact"?" · intervalo explícito":temporal.precision==="approximate"?" · aproximado":temporal.precision==="estimated"?" · estimado":"");
 return base;
}
function temporalDescription(temporal){
 if(!temporal)return "Registro heredado sin modelo temporal estructurado.";
 if(temporal.kind==="absolute_date")return "Fecha "+temporal.value+" según calendario "+temporal.calendar+"; precisión "+temporal.precision+".";
 if(temporal.kind==="approximate_interval")return "Intervalo aproximado entre "+temporal.lower.value+" y "+temporal.upper.value+" (calendario "+temporal.lower.calendar+").";
 if(temporal.kind==="relative_offset"){const anchor=temporal.anchorLabel||temporal.anchorId;const amount=temporal.precision==="exact"?"exactamente ":"aproximadamente ";return "Desplazamiento "+temporal.direction+" del ancla "+anchor+": "+amount+temporal.amount+" "+temporal.unit+"."; }
 if(temporal.kind==="relative_order")return temporal.qualifier||("Relación "+temporal.relation+" respecto de "+temporal.referenceIds.join(", ")+"; no se calcula distancia.");
 if(temporal.kind==="unknown")return temporal.reason;
 if(temporal.kind==="anchor")return "Ancla "+temporal.anchorId+"; no es una fecha de calendario.";
 return "Clase temporal sin descripción válida.";
}
function isValidDateValue(value,calendar,precision){
 if(typeof value!=="string"||typeof calendar!=="string"||!calendar.trim())return false;
 if(!["day","month","year"].includes(precision))return false;
 const pattern=precision==="day"?/^\d{4}-\d{2}-\d{2}$/:precision==="month"?/^\d{4}-\d{2}$/:/^\d{4}$/;
 if(!pattern.test(value))return false;
 const year=Number(value.slice(0,4));
 if(!Number.isInteger(year)||year<1)return false;
 if(precision!=="year"){
  const month=Number(value.slice(5,7));
  if(month<1||month>12)return false;
 }
 if(calendar.toLowerCase()==="gregorian"&&precision==="day"){
  const parsed=new Date(value+"T00:00:00.000Z");
  if(!Number.isFinite(parsed.getTime())||parsed.toISOString().slice(0,10)!==value)return false;
 }
 if(calendar.toLowerCase()==="gregorian"&&precision==="month"){
  const parsed=new Date(value+"-01T00:00:00.000Z");
  if(!Number.isFinite(parsed.getTime())||parsed.toISOString().slice(0,7)!==value)return false;
 }
 return true;
}
function dateComparable(bound){
 if(bound.precision==="year")return bound.value+"-01-01";
 if(bound.precision==="month")return bound.value+"-01";
 return bound.value;
}
function validateDataset(data){
 const errors=[];
 if(!data||data.schemaVersion!==1||data.universeId!=="danmachi")errors.push("Timeline schema or universe mismatch.");
 if(!data.anchor||data.anchor.id!=="T0-BELL-ARRIVAL")errors.push("Missing T0 Bell-arrival anchor.");
 const eras=Array.isArray(data&&data.eras)?data.eras:[],events=Array.isArray(data&&data.events)?data.events:[];
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
 const legacyTemporalModel=Boolean(data&&data.temporalModelVersion===undefined&&events.every(event=>!event.temporal&&!event.narrativeOrigin));
 if(data&&data.temporalModelVersion!==1&&!legacyTemporalModel)errors.push("Unsupported or missing temporalModelVersion.");
 if(!legacyTemporalModel&&(!data||!data.anchor||typeof data.anchor.eventId!=="string"||!data.anchor.eventId.trim()))errors.push("Temporal model v1 requires anchor.eventId.");
 const temporalKinds=new Set(["absolute_date","approximate_interval","relative_offset","relative_order","unknown","anchor"]);
 const originKinds=new Set(["published_reference","user_hypothesis","user_plan","author_au"]);
 const units=new Set(["second","minute","hour","day","week","month","year","decade","century"]);
 const knownRefs=new Set([data&&data.anchor&&data.anchor.id,...events.map(event=>event.id)].filter(Boolean));
 if(!legacyTemporalModel){
  for(const event of events){
   const temporal=event.temporal,origins=event.narrativeOrigin;
   if(!temporal||typeof temporal!=="object"){errors.push("Event "+event.id+" missing temporal object.");continue;}
   if(!temporalKinds.has(temporal.kind))errors.push("Event "+event.id+" has invalid temporal kind: "+temporal.kind);
   if(!Array.isArray(temporal.sourceUrls)||temporal.sourceUrls.length===0)errors.push("Event "+event.id+" missing temporal source references.");
   const attachedSources=new Set((event.sources||[]).map(source=>source&&source.url).filter(Boolean));
   for(const url of temporal.sourceUrls||[]){
    if(!attachedSources.has(url))errors.push("Temporal source does not belong to event "+event.id+": "+url);
    try{if(new URL(url).protocol!=="https:")errors.push("Temporal source is not HTTPS on "+event.id+": "+url);}catch{errors.push("Invalid temporal source URL on "+event.id+": "+url);}
   }
   if(temporal.kind==="absolute_date"){
    if(!["day","month","year"].includes(temporal.precision)||!isValidDateValue(temporal.value,temporal.calendar,temporal.precision))errors.push("Invalid absolute calendar date/precision on "+event.id);
   }else if(temporal.kind==="approximate_interval"){
    if(temporal.precision!=="approximate")errors.push("Approximate interval must use approximate precision on "+event.id);
    const lower=temporal.lower,upper=temporal.upper;
    if(!lower||!upper||!isValidDateValue(lower.value,lower.calendar,lower.precision)||!isValidDateValue(upper.value,upper.calendar,upper.precision)){
     errors.push("Invalid interval bounds on "+event.id);
    }else{
     if(String(lower.calendar).toLowerCase()!==String(upper.calendar).toLowerCase())errors.push("Interval calendars do not match on "+event.id);
     if(dateComparable(lower)>=dateComparable(upper))errors.push("Interval lower bound must precede upper bound on "+event.id);
    }
   }else if(temporal.kind==="relative_offset"){
    if(!knownRefs.has(temporal.anchorId))errors.push("Relative offset has unknown anchor on "+event.id+": "+temporal.anchorId);
    if(temporal.anchorId===event.id)errors.push("Relative offset cannot reference itself on "+event.id);
    if(eventIds.has(temporal.anchorId)&&(typeof temporal.anchorLabel!=="string"||!temporal.anchorLabel.trim()))errors.push("Event-relative offset needs an anchorLabel on "+event.id);
    if(!["before","after"].includes(temporal.direction))errors.push("Relative offset has invalid direction on "+event.id);
    if(typeof temporal.amount!=="number"||!Number.isFinite(temporal.amount)||temporal.amount<=0)errors.push("Relative offset amount must be a positive number on "+event.id);
    if(!units.has(temporal.unit))errors.push("Invalid relative offset unit on "+event.id+": "+temporal.unit);
    if(!["approximate","estimated","exact"].includes(temporal.precision))errors.push("Invalid relative offset precision on "+event.id);
   }else if(temporal.kind==="relative_order"){
    if(!["before","after","between","overlaps"].includes(temporal.relation))errors.push("Invalid relative order relation on "+event.id);
    if(!Array.isArray(temporal.referenceIds)||temporal.referenceIds.length===0)errors.push("Relative order needs references on "+event.id);
    else for(const id of temporal.referenceIds)if(!knownRefs.has(id))errors.push("Missing temporal reference on "+event.id+": "+id);
    if(Array.isArray(temporal.referenceIds)&&temporal.referenceIds.includes(event.id))errors.push("Temporal relative order cannot reference itself on "+event.id);
    if(temporal.relation==="between"&&(!Array.isArray(temporal.referenceIds)||temporal.referenceIds.length!==2))errors.push("Between requires exactly two temporal references on "+event.id);
    if(temporal.relation!=="between"&&Array.isArray(temporal.referenceIds)&&temporal.referenceIds.length!==1)errors.push("This relative order relation requires exactly one reference on "+event.id);
    if(temporal.distanceKnown!==false)errors.push("Relative order must not invent a calculable distance on "+event.id);
    if(temporal.precision!=="order_only")errors.push("Relative order must use order_only precision on "+event.id);
   }else if(temporal.kind==="unknown"){
    if(temporal.precision!=="unknown")errors.push("Unknown time must use unknown precision on "+event.id);
    if(typeof temporal.reason!=="string"||!temporal.reason.trim())errors.push("Unknown time needs a reason on "+event.id);
   }else if(temporal.kind==="anchor"){
    if(!data.anchor||temporal.anchorId!==data.anchor.id)errors.push("Anchor event points to an unknown anchor on "+event.id);
    if(data.anchor&&data.anchor.eventId&&event.id!==data.anchor.eventId)errors.push("Only declared anchor event may use anchor temporal variant on "+event.id);
    if(temporal.precision!=="anchor")errors.push("Anchor event must use anchor precision on "+event.id);
    if(Object.prototype.hasOwnProperty.call(temporal,"value"))errors.push("Anchor event must not define a calendar value on "+event.id);
   }
   if(!origins||!originKinds.has(origins.kind))errors.push("Event "+event.id+" missing or invalid narrativeOrigin.");
   else{
    const scopes=Array.isArray(event.continuityScopes)?event.continuityScopes:[];
    if(["user_hypothesis","user_plan"].includes(origins.kind)&&(scopes.includes("CONT-MAIN-LN")||scopes.includes("CONT-AR"))&&origins.approvedCrossContinuity!==true)errors.push("Hypothesis/plan cannot silently enter published continuity on "+event.id);
    if(["user_hypothesis","user_plan"].includes(origins.kind)&&!scopes.some(scope=>["CONT-AU","CONT-UNVERIFIED"].includes(scope))&&origins.approvedCrossContinuity!==true)errors.push("Hypothesis/plan needs AU or unverified continuity on "+event.id);
    if(origins.kind==="author_au"&&!scopes.includes("CONT-AU"))errors.push("Author AU origin requires CONT-AU on "+event.id);
   }
  }
  if(data&&data.anchor&&data.anchor.eventId){
   const anchorEvent=events.find(event=>event.id===data.anchor.eventId);
   if(!anchorEvent)errors.push("Anchor event reference is missing: "+data.anchor.eventId);
   else if(!anchorEvent.temporal||anchorEvent.temporal.kind!=="anchor"||anchorEvent.temporal.anchorId!==data.anchor.id)errors.push("Anchor event must use the anchor temporal variant: "+data.anchor.eventId);
  }
  if(!legacyTemporalModel){
   // Event-to-event relative-order constraints must not contain cycles. The
   // symbolic T0 anchor is not an event ID and is deliberately not an edge.
   // "overlaps" is not a strict ordering relation and is excluded.
   const graph=new Map(events.map(event=>[event.id,[]]));
   for(const event of events){
    const temporal=event.temporal;
    if(!temporal)continue;
    if(temporal.kind==="relative_order"&&Array.isArray(temporal.referenceIds)){
     if(temporal.relation==="before"){
      for(const referenceId of temporal.referenceIds){if(referenceId!==event.id&&eventIds.has(referenceId))graph.get(event.id).push(referenceId);}
     }else if(temporal.relation==="after"){
      for(const referenceId of temporal.referenceIds){if(referenceId!==event.id&&eventIds.has(referenceId))graph.get(referenceId).push(event.id);}
     }else if(temporal.relation==="between"&&temporal.referenceIds.length===2){
      const [earlier,later]=temporal.referenceIds;
      if(eventIds.has(earlier))graph.get(earlier).push(event.id);
      if(eventIds.has(later))graph.get(event.id).push(later);
     }
    }else if(temporal.kind==="relative_offset"){
     const anchorEventId=temporal.anchorId===data.anchor.id?data.anchor.eventId:temporal.anchorId;
     if(eventIds.has(anchorEventId)){
      if(temporal.direction==="before")graph.get(event.id).push(anchorEventId);
      else if(temporal.direction==="after")graph.get(anchorEventId).push(event.id);
     }
    }
   }
   const state=new Map(),stack=[];
   let reportedCycle=false;
   function visitOrder(eventId){
    state.set(eventId,1);stack.push(eventId);
    for(const target of graph.get(eventId)||[]){
     if(state.get(target)===1){
      if(!reportedCycle){
       const start=stack.indexOf(target);
       errors.push("Temporal relative-order cycle detected: "+stack.slice(start).concat(target).join(" -> "));
       reportedCycle=true;
      }
     }else if(!state.has(target))visitOrder(target);
    }
    stack.pop();state.set(eventId,2);
   }
   for(const eventId of graph.keys())if(!state.has(eventId))visitOrder(eventId);
  }
  if(data&&data.anchor&&data.anchor.sources)for(const url of data.anchor.sources)try{if(new URL(url).protocol!=="https:")errors.push("Anchor source must use HTTPS: "+url);}catch{errors.push("Invalid anchor source URL: "+url);}
 }
 const spatialReport=validateLocationModel(data);errors.push(...spatialReport.errors);return {valid:errors.length===0,errors,eraCount:eras.length,eventCount:events.length,temporalModelVersion:legacyTemporalModel?0:data&&data.temporalModelVersion,legacyTemporalModel,temporalEventCount:legacyTemporalModel?0:events.filter(event=>event.temporal).length,locationCount:spatialReport.locationCount,locationRefCount:spatialReport.locationRefCount,unknownEventCount:spatialReport.unknownEventCount,provisionalEventCount:spatialReport.provisionalEventCount};
}
function validateLocationModel(data){
 const errors=[];
 const locations=Array.isArray(data&&data.locations)?data.locations:[];
 const events=Array.isArray(data&&data.events)?data.events:[];
 const map=data&&data.mapPresentation;
 if(!map||map.type!=="non_geographic_relationship_schematic"||map.hasGeographicCoordinates!==false||map.scale!==null)errors.push("Map must be explicitly non-geographic and have no scale/coordinates.");
 if(!Array.isArray(data&&data.locations)||locations.length===0)errors.push("Timeline map requires a location registry.");
 const byId=new Map();
 for(const place of locations){
  if(!place.id)errors.push("Location registry entry has no id.");
  else if(byId.has(place.id))errors.push("Duplicate timeline location id: "+place.id);
  else byId.set(place.id,place);
  if(place.type!=="location")errors.push("Location "+place.id+" has incompatible entity type.");
  if(typeof place.name!=="string"||!place.name.trim())errors.push("Location "+place.id+" has no display name.");
  if(typeof place.recordPath!=="string"||!place.recordPath.startsWith("places/")||!place.recordPath.endsWith(".md"))errors.push("Location "+place.id+" has an invalid record path.");
  if(!Array.isArray(place.sourceUrls)||place.sourceUrls.length===0)errors.push("Location "+place.id+" has no source URLs.");
  for(const url of place.sourceUrls||[])try{if(new URL(url).protocol!=="https:")errors.push("Location source must be HTTPS: "+place.id);}catch{errors.push("Invalid location source URL: "+place.id);}
  if(place.coordinates!==undefined&&place.coordinates!==null)errors.push("Non-geographic map must not contain geographic coordinates: "+place.id);
 }
 for(const place of locations){
  for(const relation of place.relationships||[]){
   if(!byId.has(relation.locationId))errors.push("Unknown related location "+relation.locationId+" from "+place.id);
   if(typeof relation.relationship!=="string"||!relation.relationship)errors.push("Missing relation kind for location "+place.id);
   if(!Array.isArray(relation.sourceUrls)||!relation.sourceUrls.length)errors.push("Location relationship has no source URLs: "+place.id);
   for(const url of relation.sourceUrls||[])if(!(place.sourceUrls||[]).includes(url)&&!(byId.get(relation.locationId)?.sourceUrls||[]).includes(url))errors.push("Location relationship source is not attached to either place: "+place.id+" -> "+relation.locationId);
  }
 }
 const allowedRelationships=new Set(["event_place","broad_setting","related_context"]);
 const allowedStatuses=new Set(["verified","provisional"]);
 const allowedPrecision=new Set(["city_level","dungeon_general","floor_context"]);
 for(const event of events){
  const assessment=event.locationAssessment,refs=Array.isArray(event.locationRefs)?event.locationRefs:[];
  if(!assessment||!["verified","provisional","unknown"].includes(assessment.status))errors.push("Event "+event.id+" missing/invalid location assessment.");
  else if(assessment.status==="unknown"){
   if(refs.length!==0)errors.push("Unknown-location event must not carry location refs: "+event.id);
   if(assessment.spatialPrecision!=="unknown")errors.push("Unknown-location event must use unknown spatial precision: "+event.id);
   if(typeof assessment.reason!=="string"||!assessment.reason.trim())errors.push("Unknown-location event needs a reason: "+event.id);
  }else{
   if(refs.length===0)errors.push("Located event needs at least one location ref: "+event.id);
   if(!allowedPrecision.has(assessment.spatialPrecision))errors.push("Located event has invalid spatial precision: "+event.id);
   const hasProvisional=refs.some(ref=>ref.verificationStatus==="provisional");
   if(assessment.status==="verified"&&hasProvisional)errors.push("Event marked verified has provisional refs: "+event.id);
   if(assessment.status==="provisional"&&!hasProvisional)errors.push("Event marked provisional must include a provisional ref: "+event.id);
   if(typeof assessment.reason!=="string"||!assessment.reason.trim())errors.push("Located event needs location reasoning: "+event.id);
  }
  const seen=new Set();
  for(const ref of refs){
   if(!byId.has(ref.locationId))errors.push("Event "+event.id+" references missing location "+ref.locationId);
   if(seen.has(ref.locationId))errors.push("Event "+event.id+" repeats location ref "+ref.locationId);
   seen.add(ref.locationId);
   if(!allowedRelationships.has(ref.relationship))errors.push("Event "+event.id+" has invalid location relationship: "+ref.relationship);
   if(!allowedStatuses.has(ref.verificationStatus))errors.push("Event "+event.id+" has invalid location verification status.");
   if(!allowedPrecision.has(ref.spatialPrecision))errors.push("Event "+event.id+" has invalid spatial precision.");
   if(typeof ref.context!=="string"||!ref.context.trim())errors.push("Event "+event.id+" location ref needs an explanatory context.");
   if(!Array.isArray(ref.sourceUrls)||!ref.sourceUrls.length)errors.push("Event "+event.id+" location ref has no source URLs.");
   const place=byId.get(ref.locationId);
   const attached=new Set([...(event.sources||[]).map(s=>s.url),...(place&&place.sourceUrls||[])]);
   for(const url of ref.sourceUrls||[]){
    if(!attached.has(url))errors.push("Location ref source not linked to event or place on "+event.id+": "+url);
    try{if(new URL(url).protocol!=="https:")errors.push("Location ref source must be HTTPS on "+event.id);}catch{errors.push("Invalid location ref source URL on "+event.id);}
   }
  }
 }
 return {valid:errors.length===0,errors,locationCount:locations.length,locationRefCount:events.reduce((n,e)=>n+(Array.isArray(e.locationRefs)?e.locationRefs.length:0),0),unknownEventCount:events.filter(e=>e.locationAssessment&&e.locationAssessment.status==="unknown").length,provisionalEventCount:events.filter(e=>e.locationAssessment&&e.locationAssessment.status==="provisional").length};
}
function validateLocationCatalog(data,catalog,existingPaths){
 const errors=[];
 const records=Array.isArray(catalog&&catalog.records)?catalog.records:[];
 const recordIds=new Set(),duplicates=new Set();
 for(const record of records){if(recordIds.has(record.id))duplicates.add(record.id);recordIds.add(record.id);}
 for(const id of duplicates)errors.push("Duplicate catalog record ID: "+id);
 for(const place of (data&&data.locations)||[]){
  const matches=records.filter(record=>record.id===place.id);
  if(matches.length===0){errors.push("Location ID missing from DanMachi catalog: "+place.id);continue;}
  if(matches.length>1)errors.push("Location ID is duplicated in DanMachi catalog: "+place.id);
  const record=matches[0];
  if(record.type!=="location")errors.push("Catalog entity type for "+place.id+" must be location, got "+record.type);
  if(record.path!==place.recordPath)errors.push("Location/catalog path mismatch for "+place.id+": "+place.recordPath+" != "+record.path);
  if(existingPaths&&typeof existingPaths.has==="function"&&!existingPaths.has(place.recordPath))errors.push("Location fiche path does not exist: "+place.recordPath);
 }
 return {valid:errors.length===0,errors};
}
function mount(){
 const panel=document.getElementById("danmachi-timeline-panel");
 if(!panel||panel.dataset.initialized==="true")return;
 panel.dataset.initialized="true";
 const status=panel.querySelector("#dm-timeline-status"),eraRoot=panel.querySelector("#dm-timeline-eras-view"),eventRoot=panel.querySelector("#dm-timeline-events-view"),mapRoot=panel.querySelector("#dm-timeline-map-view");
 const query=panel.querySelector("#dm-timeline-query"),continuity=panel.querySelector("#dm-timeline-continuity"),eraFilter=panel.querySelector("#dm-timeline-era-filter");
 const tabs=Array.from(panel.querySelectorAll("[data-dm-timeline-tab]"));
 let data=null,activeTab="eras",activeEventId="",selectedPlaceId="",returnEventId="",returnPlaceId="";
 const esc=value=>String(value==null?"":value);
 function node(tag,className,text){const n=document.createElement(tag);if(className)n.className=className;if(text!=null)n.textContent=text;return n;}
 function matchedEvents(){
  if(!data)return [];
  const q=esc(query.value).trim().toLocaleLowerCase();
  const scope=continuity.value||"ALL";
  return data.events.filter(event=>{
   if(scope!=="ALL"&&!event.continuityScopes.includes(scope))return false;
   if(eraFilter.value!=="ALL"&&event.eraId!==eraFilter.value)return false;
   if(q){const placeNames=(event.locationRefs||[]).map(ref=>{const place=(data.locations||[]).find(item=>item.id===ref.locationId);return place?place.name:"";});const parts=[event.id,event.title,event.dateLabel,event.summary,temporalKindLabel(event.temporal),event.temporal&&event.temporal.qualifier,event.temporal&&event.temporal.reason,...placeNames,...(event.participants||[]).map(p=>p.name+" "+p.role),...(event.relatedEntities||[]).map(p=>p.name)].join(" ").toLocaleLowerCase();if(!parts.includes(q))return false;}
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
 function locationById(id){return (data&&data.locations||[]).find(place=>place.id===id)||null;}
 function verificationLabel(value){return value==="verified"?"Verificado":value==="provisional"?"Provisional · verificar":"Ubicación desconocida";}
 function relationshipLabel(value){return value==="event_place"?"Lugar del acontecimiento":value==="broad_setting"?"Escenario amplio":"Contexto relacionado";}
 function locationRecordUrl(place){return "https://github.com/jonhararagi/wordwaifu/blob/work/story-completion-danmachi-audit-2026-10/lore/danmachi/"+place.recordPath;}
 function locationSourceLinks(parent,urls){(urls||[]).forEach(url=>{const a=node("a","dm-event-source-link","Fuente de ubicación ↗");a.href=url;a.target="_blank";a.rel="noopener noreferrer";a.title=url;parent.append(a);});}
 function openPlace(id,fromEventId){if(fromEventId)returnEventId=fromEventId;else if(!selectedPlaceId)returnEventId="";selectedPlaceId=id;returnPlaceId="";activeTab="map";draw();if(mapRoot)mapRoot.scrollIntoView({behavior:"smooth",block:"start"});}
 function renderPlaceNode(place,items){
  const refs=items.flatMap(event=>(event.locationRefs||[]).filter(ref=>ref.locationId===place.id).map(ref=>({event,ref})));
  const card=node("section","dm-map-place-card");card.dataset.locationId=place.id;
  const head=node("div","dm-map-place-heading");head.append(node("span","dm-map-place-id",place.id),node("span","dm-map-place-status",verificationLabel(place.verificationStatus)));
  card.append(head,node("h4","",place.name),node("p","dm-map-place-description",place.description),node("p","dm-map-place-note","Ficha de corpus · sin coordenadas canónicas · nodo no geográfico."));
  const open=node("button","dm-timeline-location-link","Abrir ficha y eventos relacionados");open.type="button";open.dataset.timelineOpenPlace=place.id;card.append(open);
  if((place.relationships||[]).length){const rels=node("div","dm-map-place-relations");rels.append(node("strong","","Relaciones documentadas (sin distancia)"));place.relationships.forEach(relation=>{const target=locationById(relation.locationId);if(!target)return;const row=node("div","dm-map-place-relation");row.append(node("span","","Relación general: "+place.name+" ↔ "+target.name));const button=node("button","dm-timeline-location-link","Ver "+target.name);button.type="button";button.dataset.timelineOpenPlace=target.id;row.append(button);rels.append(row);});card.append(rels);}
  const eventList=node("div","dm-map-place-events");eventList.append(node("strong","","Acontecimientos visibles con este vínculo ("+refs.length+")"));
  if(refs.length){refs.forEach(({event,ref})=>{const row=node("div","dm-map-event-link");row.append(node("span","dm-map-ref-status",verificationLabel(ref.verificationStatus)+" · "+relationshipLabel(ref.relationship)),node("span","",event.dateLabel+" — "+event.title));const openEventButton=node("button","dm-timeline-event-link","Abrir acontecimiento");openEventButton.type="button";openEventButton.dataset.timelineOpenEvent=event.id;openEventButton.dataset.timelineReturnPlace=place.id;row.append(openEventButton);eventList.append(row);});}
  else eventList.append(node("p","dm-timeline-empty","No hay acontecimientos vinculados a este lugar con los filtros actuales."));
  card.append(eventList);
  const visualSection=node("section","dm-place-visual-references");visualSection.dataset.visualLocationId=place.id;card.append(visualSection);
  if(globalThis.WordWaifuDanMachiVisualReferences)globalThis.WordWaifuDanMachiVisualReferences.renderInto(visualSection,{locationId:place.id,continuity:continuity.value});
  else visualSection.append(node("p","dm-visual-placeholder","Sin referencia visual disponible."));
  return card;
 }
 function drawMapView(items){
  if(!mapRoot)return;
  mapRoot.replaceChildren();
  const summary=node("div","dm-map-summary");
  summary.append(node("p","dm-map-nongeographic-warning","ESQUEMA RELACIONAL · NO GEOGRÁFICO · SIN ESCALA. La posición y el orden de las tarjetas no son coordenadas, orientación, distancia, rutas, barrios ni topología del mundo."));
  const linked=items.filter(event=>(event.locationRefs||[]).length>0);
  const provisional=items.filter(event=>event.locationAssessment&&event.locationAssessment.status==="provisional");
  const unknown=items.filter(event=>!event.locationRefs||event.locationRefs.length===0);
  const counts=node("div","dm-map-counts");
  counts.append(node("span","dm-map-count","Vinculados: "+linked.length),node("span","dm-map-count dm-map-count--provisional","Provisionales: "+provisional.length),node("span","dm-map-count dm-map-count--unknown","Sin ubicación: "+unknown.length));
  summary.append(counts);mapRoot.append(summary);
  if(selectedPlaceId){
   const place=locationById(selectedPlaceId);
   if(!place){mapRoot.append(node("p","dm-timeline-empty","La ficha de lugar seleccionada ya no existe en el registro local."));return;}
   const detail=node("section","dm-map-place-detail");
   const title=node("div","dm-map-place-detail-heading");
   title.append(node("span","dm-map-place-id",place.id),node("h3","",""+place.name),node("span","dm-map-place-status",verificationLabel(place.verificationStatus)));
   detail.append(title,node("p","dm-map-place-description",place.description),node("p","dm-map-place-note","Modelo espacial: esquema relacional no geográfico. Coordenadas: no disponibles."));
   const links=node("div","dm-map-place-links");
   const fiche=node("a","dm-event-record-link","Abrir ficha de lugar ↗");fiche.href=locationRecordUrl(place);fiche.target="_blank";fiche.rel="noopener noreferrer";links.append(fiche);
   locationSourceLinks(links,place.sourceUrls);detail.append(links);
   if(returnEventId&&items.some(event=>event.id===returnEventId)){const back=node("button","dm-timeline-return-link","Volver al acontecimiento desde el que abrí este lugar");back.type="button";back.dataset.timelineReturnEvent=returnEventId;detail.append(back);}
   if((place.relationships||[]).length){
    const relationships=node("div","dm-map-place-relations");relationships.append(node("strong","","Relaciones documentadas · sin posición geográfica"));
    place.relationships.forEach(relation=>{const target=locationById(relation.locationId);if(!target)return;const row=node("div","dm-map-place-relation");row.append(node("span","","Asociado con "+target.name+" · sin distancia"));const b=node("button","dm-timeline-location-link","Abrir "+target.name);b.type="button";b.dataset.timelineOpenPlace=target.id;row.append(b);relationships.append(row);});
    detail.append(relationships);
   }
   const related=items.filter(event=>(event.locationRefs||[]).some(ref=>ref.locationId===place.id));
   const relatedSection=node("div","dm-map-place-events");relatedSection.append(node("h4","","Acontecimientos relacionados visibles ("+related.length+")"));
   if(related.length){related.forEach(event=>{const ref=event.locationRefs.find(r=>r.locationId===place.id),row=node("div","dm-map-event-link");row.append(node("span","dm-map-ref-status",verificationLabel(ref.verificationStatus)+" · "+relationshipLabel(ref.relationship)),node("span","",event.dateLabel+" — "+event.title));const b=node("button","dm-timeline-event-link","Abrir acontecimiento");b.type="button";b.dataset.timelineOpenEvent=event.id;b.dataset.timelineReturnPlace=place.id;row.append(b);relatedSection.append(row);});}
   else relatedSection.append(node("p","dm-timeline-empty","No hay eventos relacionados con los filtros actuales."));
   detail.append(relatedSection);mapRoot.append(detail);return;
  }
  const registry=node("div","dm-map-place-registry");registry.append(node("h3","","Lugares del corpus DanMachi"));const grid=node("div","dm-map-place-grid");
  (data.locations||[]).forEach(place=>grid.append(renderPlaceNode(place,items)));
  if(!grid.childElementCount)grid.append(node("p","dm-timeline-empty","No hay fichas de lugar cargadas."));
  registry.append(grid);mapRoot.append(registry);
  const unlocated=node("section","dm-map-unlocated");unlocated.append(node("h3","","Acontecimientos sin ubicación demostrable ("+unknown.length+")"));
  if(unknown.length){unknown.forEach(event=>{const row=node("div","dm-map-unlocated-event");row.append(node("span","dm-map-ref-status","Ubicación desconocida"),node("span","",event.dateLabel+" — "+event.title),node("p","",event.locationAssessment&&event.locationAssessment.reason||"No hay evidencia de ubicación."));const b=node("button","dm-timeline-event-link","Abrir acontecimiento");b.type="button";b.dataset.timelineOpenEvent=event.id;row.append(b);unlocated.append(row);});}
  else unlocated.append(node("p","dm-timeline-empty","Todos los eventos visibles tienen algún vínculo espacial documentado; algunos siguen provisionales."));
  mapRoot.append(unlocated);
 }
 function renderEventCard(event){
  const article=node("article","dm-historical-event"+(activeEventId===event.id?" is-selected":""));article.id="dm-event-"+event.id;
  const dot=node("span","dm-event-dot"),card=node("div","dm-event-card"),head=node("div","dm-event-card-heading");
  const temporalBadge=node("span","dm-event-temporal dm-event-temporal--"+(event.temporal&&event.temporal.kind||"legacy"),temporalKindLabel(event.temporal));temporalBadge.dataset.temporalKind=event.temporal&&event.temporal.kind||"legacy";temporalBadge.title=temporalDescription(event.temporal);head.append(node("span","dm-event-date",event.dateLabel),temporalBadge,node("span","dm-event-evidence",evidenceLabel(event.evidenceStatus)));
  card.append(head,node("h4","",event.title),node("p","dm-event-summary",event.summary));
  if((event.participants||[]).length){const block=node("div","dm-event-participants");block.append(node("strong","","Personajes vinculados"));const chips=node("div","dm-event-person-list");event.participants.forEach(person=>appendPersonChip(chips,person,event));block.append(chips);card.append(block);}
  if((event.relatedEntities||[]).length){const block=node("div","dm-event-related");block.append(node("strong","","Antagonistas, amenazas y expedientes relacionados"));const chips=node("div","dm-event-person-list");event.relatedEntities.forEach(person=>appendPersonChip(chips,person,event));block.append(chips);card.append(block);}
  const locationBlock=node("div","dm-event-locations");locationBlock.append(node("strong","","Lugar / contexto espacial"));
  if((event.locationRefs||[]).length){
   const locationChips=node("div","dm-event-location-list");
   event.locationRefs.forEach(ref=>{const place=locationById(ref.locationId);if(!place)return;const b=node("button","dm-timeline-location-link",place.name+" · "+verificationLabel(ref.verificationStatus)+" · "+relationshipLabel(ref.relationship));b.type="button";b.dataset.timelineOpenPlace=place.id;b.dataset.timelineFromEvent=event.id;b.title=ref.context||relationshipLabel(ref.relationship);locationChips.append(b);});
   locationBlock.append(locationChips);
  }else{
   locationBlock.append(node("span","dm-timeline-unlocated-badge","Ubicación desconocida"));
   if(event.locationAssessment&&event.locationAssessment.reason)locationBlock.append(node("p","dm-event-location-reason",event.locationAssessment.reason));
  }
  if(returnPlaceId&&activeEventId===event.id){const backToPlace=node("button","dm-timeline-return-link","Volver a la ficha de lugar");backToPlace.type="button";backToPlace.dataset.timelineReturnPlace=returnPlaceId;locationBlock.append(backToPlace);}
  card.append(locationBlock);
  const sources=node("div","dm-event-sources");sources.append(node("strong","","Rutas de verificación"));
  (event.sources||[]).forEach(source=>{const a=node("a","dm-event-source-link",source.label);a.href=source.url;a.target="_blank";a.rel="noopener noreferrer";a.title=source.note||source.label;sources.append(a);});
  if(event.detailPath){const a=node("a","dm-event-record-link","Abrir expediente del acontecimiento ↗");a.href="https://github.com/jonhararagi/wordwaifu/blob/work/story-completion-danmachi-audit-2026-10/lore/danmachi/"+event.detailPath;a.target="_blank";a.rel="noopener noreferrer";sources.append(a);}
  card.append(sources);
  const visualSection=node("section","dm-event-visual-references");visualSection.dataset.visualEventId=event.id;card.append(visualSection);
  if(globalThis.WordWaifuDanMachiVisualReferences)globalThis.WordWaifuDanMachiVisualReferences.renderInto(visualSection,{eventId:event.id,continuity:continuity.value});
  else visualSection.append(node("p","dm-visual-placeholder","Sin referencia visual disponible."));
  article.append(dot,card);return article;
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
  drawMapView(items);eraRoot.classList.toggle("hidden",activeTab!=="eras");eventRoot.classList.toggle("hidden",activeTab!=="events");mapRoot.classList.toggle("hidden",activeTab!=="map");
 }
 function activateTab(name){activeTab=name==="events"?"events":name==="map"?"map":"eras";draw();}
 function openEvent(id,fromPlaceId){activeEventId=id;returnPlaceId=fromPlaceId||"";if(!fromPlaceId)returnEventId="";selectedPlaceId="";activeTab="events";draw();const target=document.getElementById("dm-event-"+id);if(target)target.scrollIntoView({behavior:"smooth",block:"center"});}
 function returnToEvent(id){selectedPlaceId="";returnEventId="";returnPlaceId="";openEvent(id);}
 function returnToPlace(id){selectedPlaceId=id;returnPlaceId="";activeTab="map";draw();if(mapRoot)mapRoot.scrollIntoView({behavior:"smooth",block:"start"});}
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
  const opened=tryOpen(preferredContinuity||"ALL")||(preferredContinuity!=="ALL"&&tryOpen("ALL"));if(!opened)openCatalogEntity(name,"character");
 }
 panel.addEventListener("click",event=>{
  const tab=event.target.closest("[data-dm-timeline-tab]");if(tab){activateTab(tab.dataset.dmTimelineTab);return;}
  const opener=event.target.closest("[data-timeline-open-event]");if(opener){openEvent(opener.dataset.timelineOpenEvent,opener.dataset.timelineReturnPlace||"");return;}
  const placeOpener=event.target.closest("[data-timeline-open-place]");if(placeOpener){openPlace(placeOpener.dataset.timelineOpenPlace,placeOpener.dataset.timelineFromEvent||"");return;}
  const eventReturn=event.target.closest("[data-timeline-return-event]");if(eventReturn){returnToEvent(eventReturn.dataset.timelineReturnEvent);return;}
  const placeReturn=event.target.closest("[data-timeline-return-place]");if(placeReturn){returnToPlace(placeReturn.dataset.timelineReturnPlace);return;}
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
return{validateDataset:validateDataset,validateLocationCatalog:validateLocationCatalog,mount:mount,temporalKindLabel:temporalKindLabel,temporalDescription:temporalDescription};
});
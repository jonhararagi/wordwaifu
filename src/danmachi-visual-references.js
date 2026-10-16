(function(root) {
"use strict";
const allowedStatuses = new Set(["external_reference","user_owned","licensed","permission_recorded","pending_review","blocked"]);
const spoilerRank = {none:0,minor:1,major:2,critical:3};
let registry=null,timeline=null,mounted=false,localReferenceCache=null,localReferencePromise=null;
const $=selector=>document.querySelector(selector);
function node(tag,className,text){const el=document.createElement(tag);if(className)el.className=className;if(text!==undefined&&text!==null)el.textContent=String(text);return el;}
function safeHttps(value,optional){const raw=String(value||"").trim();if(!raw)return Boolean(optional);try{const u=new URL(raw);return u.protocol==="https:"&&!u.username&&!u.password;}catch(_){return false;}}
function validateDataset(data,timelineData){
 const errors=[],refs=Array.isArray(data&&data.visualReferences)?data.visualReferences:[];
 const refIds=new Set(),eventIds=new Set((timelineData&&timelineData.events||[]).map(x=>x.id)),locationIds=new Set((timelineData&&timelineData.locations||[]).map(x=>x.id));
 const scopes=new Set((timelineData&&timelineData.continuities||[]).map(x=>x.id));
 if(!data||data.schemaVersion!==1||data.universeId!=="danmachi")errors.push("Unsupported visual-reference registry schema.");
 if(!Array.isArray(data&&data.eventCoverage)||data.eventCoverage.length!==eventIds.size)errors.push("Every timeline event must receive one visual assessment.");
 if(!Array.isArray(data&&data.locationCoverage)||data.locationCoverage.length!==locationIds.size)errors.push("Every place must receive one visual assessment.");
 for(const ref of refs){
  if(!ref||!/^DM-VIS-REF-[A-Z0-9-]+$/.test(ref.id||""))errors.push("Visual reference has an invalid stable ID.");
  else if(refIds.has(ref.id))errors.push("Duplicate visual reference ID: "+ref.id);else refIds.add(ref.id);
  if(!ref||!String(ref.title||"").trim())errors.push("Visual reference requires a title.");
  if(!ref||!["image","cover","illustration","screenshot","scene_page","source_page"].includes(ref.mediaType))errors.push("Visual reference has invalid mediaType.");
  if(!ref||!safeHttps(ref.sourcePageUrl,false))errors.push("Visual reference requires a safe HTTPS source page.");
  if(ref&&ref.assetUrl&&!safeHttps(ref.assetUrl,false))errors.push("Visual reference assetUrl must be HTTPS without credentials.");
  if(!ref||!allowedStatuses.has(ref.usageStatus))errors.push("Visual reference has invalid usage status.");
  if(!ref||!ref.creatorOrRightsholder)errors.push("Visual reference must name the holder or explicitly use unknown.");
  if(!ref||!scopes.has(ref.continuityScope))errors.push("Visual reference continuity is unknown.");
  if(!ref||!Object.prototype.hasOwnProperty.call(spoilerRank,ref.spoilerLevel))errors.push("Visual reference spoiler level is invalid.");
  if(ref&&ref.licenseUrl&&!safeHttps(ref.licenseUrl,false))errors.push("License URL must be HTTPS.");
  if(ref&&(ref.relatedEventIds||[]).some(id=>!eventIds.has(id)))errors.push("Visual reference points to an unknown event: "+ref.id);
  if(ref&&(ref.relatedLocationIds||[]).some(id=>!locationIds.has(id)))errors.push("Visual reference points to an unknown location: "+ref.id);
  if(ref&&ref.storageMode==="remote"&&!["link_only","link_only_pending_embedding_review"].includes(ref.previewPolicy))errors.push("Remote images cannot be embedded until their conditions are verified.");
  if(ref&&ref.usageStatus==="external_reference"&&ref.watermarkPolicy!=="none")errors.push("External reference cannot offer a transformed export.");
 }
 function validateCoverage(items,keyName,knownIds){
  const seen=new Set(),states=new Set(["context_source_page_only","no_scene_specific_asset"]);
  for(const item of items||[]){
   const id=item&&item[keyName];
   if(!knownIds.has(id))errors.push("Visual coverage references unknown "+keyName+": "+id);
   if(seen.has(id))errors.push("Duplicate visual coverage: "+id);seen.add(id);
   if(!item||!states.has(item.status))errors.push("Invalid visual coverage status for "+id);
   if(item&&(item.referenceIds||[]).some(refId=>!refIds.has(refId)))errors.push("Visual coverage contains unknown visual reference: "+id);
   if(!item||!String(item.reason||"").trim())errors.push("Visual assessment requires a reason: "+id);
  }
  for(const id of knownIds)if(!seen.has(id))errors.push("Missing visual assessment: "+id);
 }
 validateCoverage(data&&data.eventCoverage,"eventId",eventIds);validateCoverage(data&&data.locationCoverage,"locationId",locationIds);
 return {valid:errors.length===0,errors,referenceCount:refs.length,assessedEvents:(data&&data.eventCoverage||[]).length,assessedLocations:(data&&data.locationCoverage||[]).length};
}
function canExportWatermarkedCopy(record){
 if(!record)return false;const ref=record.visualReference||record,status=ref.usageStatus,fileDataUrl=record.fileDataUrl||ref.fileDataUrl||"";
 return ref.storageMode==="browser_local"&&["user_owned","licensed","permission_recorded"].includes(status)&&ref.allowModifyExport===true&&/^data:image\/(png|jpeg|webp|gif|avif);base64,/i.test(fileDataUrl)&&!["pending_review","blocked","external_reference"].includes(status);
}
function openPreview(ref){
 const dialog=node("dialog","dm-visual-lightbox"),close=node("button","dm-visual-lightbox-close","Cerrar");
 close.type="button";const title=node("h3","",ref.title),img=node("img","dm-visual-lightbox-image");img.src=ref.fileDataUrl;img.alt=ref.title;
 close.addEventListener("click",()=>dialog.close());dialog.append(close,title,img,node("p","dm-visual-credit",ref.creditLine||ref.creatorOrRightsholder||"Crédito no declarado"),node("p","dm-visual-rights-note","Vista ampliada local. No modifica el archivo original ni concede derechos de uso."));
 dialog.addEventListener("close",()=>dialog.remove(),{once:true});document.body.append(dialog);if(typeof dialog.showModal==="function")dialog.showModal();else dialog.setAttribute("open","");
}
function statusLabel(value){return ({external_reference:"Referencia externa · no guardada",user_owned:"Declarada propia",licensed:"Licencia declarada",permission_recorded:"Permiso declarado",pending_review:"Pendiente de revisión · no autorizada",blocked:"Bloqueada · no usar/exportar"})[value]||"Estado de derechos desconocido";}
function continuityLabel(value){return ({"CONT-MAIN-LN":"Novela principal","CONT-AR":"Astrea Record","CONT-ANIME":"Adaptación anime","CONT-AU":"Historia alternativa (AU)","CROSS-CONTINUITY":"Comparación de continuidades"})[value]||value||"Continuidad pendiente";}
function spoilerLabel(value){return ({none:"Sin spoiler",minor:"Spoiler menor",major:"Spoiler importante",critical:"Spoiler crítico"})[value]||"Spoiler pendiente";}
function spoilerCap(){return ($("#dm-visual-spoiler-cap")||{}).value||"minor";}
function filteredBySpoiler(ref){return (spoilerRank[ref.spoilerLevel]??2)<=(spoilerRank[spoilerCap()]??1);}
function invalidateLocalReferences(){localReferenceCache=null;localReferencePromise=null;}
async function localReferences(){
 if(localReferenceCache)return localReferenceCache;
 if(localReferencePromise)return localReferencePromise;
 const api=root.WordWaifuArtStudio;
 if(!api||typeof api.listVisualReferences!=="function")return [];
 localReferencePromise=(async()=>{
  try{localReferenceCache=await api.listVisualReferences();return localReferenceCache;}
  catch(_){localReferenceCache=[];return localReferenceCache;}
  finally{localReferencePromise=null;}
 })();
 return localReferencePromise;
}
function matches(ref,options){
 const eventId=options.eventId||"",locationId=options.locationId||"";
 if(eventId&&!(ref.relatedEventIds||[]).includes(eventId))return false;
 if(locationId&&!(ref.relatedLocationIds||[]).includes(locationId))return false;
 if(!eventId&&!locationId&&((ref.relatedEventIds||[]).length||(ref.relatedLocationIds||[]).length))return false;
 if(options.continuity&&options.continuity!=="ALL"&&ref.continuityScope!==options.continuity)return false;
 if(eventId){const ev=(timeline&&timeline.events||[]).find(x=>x.id===eventId);if(ev&&!(ev.continuityScopes||[]).includes(ref.continuityScope)&&ref.continuityScope!=="CROSS-CONTINUITY")return false;}
 return true;
}
function appendCard(container,ref,local){
 const card=node("article","dm-visual-reference-card dm-visual-reference-card--"+String(ref.usageStatus||"unknown"));card.dataset.visualReferenceId=ref.id||"";
 const top=node("div","dm-visual-reference-head");top.append(node("h5","",ref.title||"Referencia sin título"),node("span","dm-visual-status-badge",statusLabel(ref.usageStatus)));card.append(top);
 card.append(node("p","dm-visual-meta",(ref.mediaType||"resource")+" · "+continuityLabel(ref.continuityScope)+" · "+spoilerLabel(ref.spoilerLevel)));
 if(ref.caption)card.append(node("p","dm-visual-caption",ref.caption));
 if(local&&ref.fileDataUrl&&ref.usageStatus!=="blocked"){
  const preview=node("div","dm-visual-preview"),img=node("img","dm-visual-thumbnail");img.src=ref.fileDataUrl;img.alt=ref.title||"Referencia local";
  const overlay=node("div","dm-visual-credit-overlay");overlay.append(node("strong","",ref.creditLine||ref.creatorOrRightsholder||"Crédito no declarado"),node("span","","Overlay informativo de interfaz · no modifica el archivo"));
  preview.append(img,overlay);card.append(preview);const larger=node("button","dm-visual-action","Ampliar vista previa local");larger.type="button";larger.addEventListener("click",()=>openPreview(ref));card.append(larger);
 } else {
  let text="Sin vista previa disponible. La tarjeta conserva la fuente original y los límites conocidos.";
  if(!local&&ref.mediaType==="image")text="Vista previa externa desactivada: no se verificaron las condiciones de incrustación. Abrí la página fuente; este retrato no demuestra una escena.";
  else if(ref.mediaType==="source_page"||ref.mediaType==="scene_page")text="Referencia de contexto, no una imagen de escena. Abrí la página original para consultar la fuente.";
  else if(ref.usageStatus==="blocked")text="Recurso bloqueado: no se previsualiza ni se exporta.";
  card.append(node("div","dm-visual-placeholder",text));
 }
 card.append(node("p","dm-visual-credit-line","Crédito/titular: "+(ref.creditLine||ref.creatorOrRightsholder||"unknown")));
 if(ref.licenseName)card.append(node("p","dm-visual-meta","Licencia declarada: "+ref.licenseName+(ref.licenseUrl?" · "+ref.licenseUrl:"")));
 if(ref.permissionEvidence)card.append(node("p","dm-visual-meta","Evidencia de permiso declarada: "+ref.permissionEvidence));
 const source=node("a","dm-visual-source-link","Abrir fuente original ↗");source.href=ref.sourcePageUrl;source.target="_blank";source.rel="noopener noreferrer";source.referrerPolicy="no-referrer";card.append(source);
 card.append(node("p","dm-visual-rights-note","Atribución, marca de agua y uso personal/educativo no sustituyen una licencia o permiso."));
 if(local&&canExportWatermarkedCopy(ref)){const exp=node("button","dm-visual-action dm-visual-export","Exportar copia marcada");exp.type="button";exp.dataset.visualExport=ref.id;card.append(exp);}
 if(local){const remove=node("button","dm-visual-action dm-visual-remove","Eliminar del almacenamiento local");remove.type="button";remove.dataset.visualRemove=ref.id;card.append(remove);}
 container.append(card);
}
async function renderInto(container,options){
 if(!container)return;options=options||{};container.replaceChildren();container.append(node("h4","dm-visual-section-title","Referencias visuales"));
 if(!registry||!timeline){container.append(node("p","dm-visual-placeholder","Cargando el registro de referencias visuales…"));return;}
 const external=registry.visualReferences.filter(ref=>matches(ref,options)),local=(await localReferences()).filter(ref=>matches(ref,options));
 const all=external.map(ref=>({ref,local:false})).concat(local.map(ref=>({ref,local:true}))),visible=all.filter(item=>filteredBySpoiler(item.ref));
 if(!visible.length){container.append(node("p","dm-visual-placeholder",all.length?"Hay referencias ocultas por el límite de spoilers visuales actual.":"Sin referencia visual disponible para esta ficha. No se asigna una imagen de otro momento como si fuera esta escena."));return;}
 visible.forEach(item=>appendCard(container,item.ref,item.local));
}
async function renderGeneral(){
 const container=$("#dm-visual-reference-general");if(!container||!registry||!timeline)return;container.replaceChildren();
 const external=registry.visualReferences.filter(ref=>!(ref.relatedEventIds||[]).length&&!(ref.relatedLocationIds||[]).length);
 const local=(await localReferences()).filter(ref=>!(ref.relatedEventIds||[]).length&&!(ref.relatedLocationIds||[]).length);
 const all=external.map(ref=>({ref,local:false})).concat(local.map(ref=>({ref,local:true}))),visible=all.filter(item=>filteredBySpoiler(item.ref));
 if(!visible.length){container.append(node("p","dm-visual-placeholder",all.length?"Las referencias generales están ocultas por el límite de spoilers.":"No hay referencias visuales generales asignadas."));return;}
 visible.forEach(item=>appendCard(container,item.ref,item.local));
}
function fillRelationChoices(){
 const e=$("#dm-visual-event"),l=$("#dm-visual-location");
 if(e&&timeline){const first=e.options[0];e.replaceChildren(first||new Option("No vincular a un acontecimiento",""));timeline.events.forEach(ev=>e.append(new Option(ev.title,ev.id)));e.value="";}
 if(l&&timeline){const first=l.options[0];l.replaceChildren(first||new Option("No vincular a un lugar",""));(timeline.locations||[]).forEach(place=>l.append(new Option(place.name+" · "+place.id,place.id)));l.value="";}
}
function refreshTimelineCards(){const q=$("#dm-timeline-query");if(q)q.dispatchEvent(new Event("input",{bubbles:true}));}
function setStatus(message){const target=$("#dm-visual-status");if(target)target.textContent=message;}
function renderWatermarkBlob(ref,options){
 return new Promise((resolve,reject)=>{const img=new Image();img.onerror=()=>reject(new Error("No se pudo decodificar el archivo local para exportarlo."));img.onload=()=>{
  const canvas=document.createElement("canvas");canvas.width=img.naturalWidth;canvas.height=img.naturalHeight;const ctx=canvas.getContext("2d");
  if(!ctx){reject(new Error("Canvas no está disponible; el original queda intacto."));return;}ctx.drawImage(img,0,0);
  const scale=Math.min(canvas.width,canvas.height)/720,fontSize=Math.max(8,Math.min(28,Math.round(14*scale))),margin=Math.max(4,Math.round(8*scale)),padding=Math.max(3,Math.round(6*scale));
  const credit=String(ref.creditLine||ref.creatorOrRightsholder||"Titular unknown"),mark=String(options.text||"WordWaifu · copia marcada").trim().slice(0,100)||"WordWaifu · copia marcada";
  const line1=mark.slice(0,80),line2=("Crédito: "+credit).slice(0,100),pos=["top-left","top-right","bottom-left","bottom-right"].includes(options.position)?options.position:"bottom-right";
  ctx.save();ctx.font="bold "+fontSize+"px sans-serif";const textWidth=Math.max(ctx.measureText(line1).width,ctx.measureText(line2).width);
  const boxWidth=Math.min(Math.max(1,canvas.width-margin*2),Math.ceil(textWidth+padding*2)),boxHeight=Math.min(Math.max(1,canvas.height-margin*2),Math.ceil(fontSize*2+padding*2+2));
  const left=pos.endsWith("left")?margin:Math.max(margin,canvas.width-margin-boxWidth),top=pos.startsWith("top")?margin:Math.max(margin,canvas.height-margin-boxHeight);
  ctx.fillStyle="rgba(0,0,0,0.78)";ctx.fillRect(Math.max(0,left),Math.max(0,top),boxWidth,boxHeight);ctx.fillStyle="#fff";ctx.textBaseline="top";ctx.shadowColor="rgba(0,0,0,0.9)";ctx.shadowBlur=2;
  ctx.fillText(line1,left+padding,top+padding,Math.max(1,boxWidth-padding*2));ctx.font=Math.max(7,fontSize-2)+"px sans-serif";ctx.fillText(line2,left+padding,top+padding+fontSize+2,Math.max(1,boxWidth-padding*2));ctx.restore();
  canvas.toBlob(blob=>blob?resolve(blob):reject(new Error("No se pudo crear la copia marcada; el original permanece sin cambios.")),"image/png");
 };img.src=ref.fileDataUrl;});
}
async function exportWatermarkedCopy(id,options){
 options=options||{};if(options.confirmed!==true)throw new Error("La exportación necesita una confirmación explícita.");
 const api=root.WordWaifuArtStudio;if(!api||typeof api.getVisualReference!=="function")throw new Error("La biblioteca local no está disponible.");
 const ref=await api.getVisualReference(id);if(!canExportWatermarkedCopy(ref))throw new Error("Bloqueado: el estado de derechos no permite modificar ni exportar una copia.");
 const blob=await renderWatermarkBlob(ref,options),href=URL.createObjectURL(blob),slug=String(ref.title||"referencia").normalize("NFKD").replace(/[^a-zA-Z0-9-]+/g,"-").replace(/^-+|-+$/g,"").slice(0,70)||"referencia";
 return {exported:true,originalPreserved:true,filename:slug+"-watermarked.png",href};
}
function bindLocalForm(){
 const form=$("#dm-visual-local-form");if(!form||form.dataset.bound==="true")return;form.dataset.bound="true";
 form.addEventListener("submit",async ev=>{
  ev.preventDefault();const api=root.WordWaifuArtStudio,fileInput=$("#dm-visual-file"),file=fileInput&&fileInput.files&&fileInput.files[0];
  if(!api||!file){setStatus("Elegí una imagen local antes de guardar.");return;}
  setStatus("Guardando referencia visual en el almacenamiento local…");
  const usageStatus=$("#dm-visual-usage-status").value;
  try{
   const fileDataUrl=await api.fileToDataUrl(file),id="USER-VIS-"+Date.now().toString(36).toUpperCase()+"-"+Math.random().toString(36).slice(2,8).toUpperCase();
   const eventId=$("#dm-visual-event").value,locationId=$("#dm-visual-location").value,requestedModify=$("#dm-visual-allow-modify").checked;
   const allowModifyExport=requestedModify&&["user_owned","licensed","permission_recorded"].includes(usageStatus);
   const record={id,title:$("#dm-visual-title").value.trim(),caption:$("#dm-visual-caption").value.trim(),sourcePageUrl:$("#dm-visual-source-url").value.trim(),
    creatorOrRightsholder:$("#dm-visual-holder").value.trim(),sourceKind:usageStatus==="user_owned"?"original_art":usageStatus==="licensed"?"licensed_material":usageStatus==="permission_recorded"?"permission_granted":"user_provided",
    usageStatus,licenseName:$("#dm-visual-license-name").value.trim(),licenseUrl:$("#dm-visual-license-url").value.trim(),permissionEvidence:$("#dm-visual-permission-evidence").value.trim(),
    continuityScope:$("#dm-visual-continuity").value,spoilerLevel:$("#dm-visual-spoiler").value,relatedEventIds:eventId?[eventId]:[],relatedLocationIds:locationId?[locationId]:[],
    creditLine:$("#dm-visual-credit").value.trim(),allowModifyExport,fileDataUrl,storageMode:"browser_local",addedAt:new Date().toISOString()};
   const result=await api.saveVisualReference(record);
   invalidateLocalReferences();
   form.reset();$("#dm-visual-continuity").value="CONT-MAIN-LN";$("#dm-visual-spoiler").value="minor";fillRelationChoices();
   try{await renderGeneral();refreshTimelineCards();}catch(_){/* Guardado ya confirmado por el backend local. */}
   setStatus("Guardado en "+(result.backend==="indexeddb"?"IndexedDB local":"el respaldo local del navegador")+". No se envió el archivo a una red remota.");
  }catch(error){setStatus((error&&error.message)||"No se confirmó el guardado; verificá el espacio local y los derechos declarados.");}
 });
 const status=$("#dm-visual-usage-status"),allow=$("#dm-visual-allow-modify"),license=$("#dm-visual-license-name"),permission=$("#dm-visual-permission-evidence");
 function updateRights(){allow.disabled=!["user_owned","licensed","permission_recorded"].includes(status.value);if(allow.disabled)allow.checked=false;if(license)license.required=status.value==="licensed";if(permission)permission.required=status.value==="permission_recorded";}
 status.addEventListener("change",updateRights);form.addEventListener("reset",()=>setTimeout(updateRights,0));updateRights();
 const textControl=$("#dm-visual-watermark-text");if(textControl)textControl.value="WordWaifu · copia marcada";
}
async function handleActions(event){
 const exp=event.target.closest("[data-visual-export]");
 if(exp){
  const confirmed=root.confirm("La copia exportada modificará el archivo y conservará el crédito. Confirmás que declaraste derechos que permiten modificar y exportar este recurso? La marca de agua no concede derechos.");
  if(!confirmed)return;const text=($("#dm-visual-watermark-text")||{}).value||"WordWaifu · copia marcada",position=($("#dm-visual-watermark-position")||{}).value||"bottom-right";
  exp.disabled=true;try{
   const result=await exportWatermarkedCopy(exp.dataset.visualExport,{confirmed:true,text,position});
   const card=exp.closest(".dm-visual-reference-card");if(!card)throw new Error("No se encontró la tarjeta para entregar la copia marcada.");
   const previous=card.querySelector("[data-marked-download]");if(previous){try{URL.revokeObjectURL(previous.href);}catch(_){}previous.remove();}
   const link=node("a","dm-visual-action dm-visual-export","Descargar copia marcada ↓");link.href=result.href;link.download=result.filename;link.dataset.markedDownload=exp.dataset.visualExport;link.rel="noopener";
   link.addEventListener("click",()=>{setStatus("Descarga solicitada: "+result.filename+". El original local no fue modificado.");setTimeout(()=>URL.revokeObjectURL(result.href),30000);},{once:true});
   card.append(link);setStatus("Copia marcada preparada. Pulsá “Descargar copia marcada” para guardarla; el original no se modificó.");
  }catch(error){setStatus(error.message||"No se pudo exportar la copia marcada.");}finally{exp.disabled=false;}return;
 }
 const del=event.target.closest("[data-visual-remove]");
 if(del){if(!root.confirm("Eliminar esta referencia del almacenamiento de este navegador?"))return;
  try{await root.WordWaifuArtStudio.removeVisualReference(del.dataset.visualRemove);invalidateLocalReferences();setStatus("Referencia eliminada del almacenamiento local del navegador.");await renderGeneral();refreshTimelineCards();}
  catch(error){setStatus(error.message||"No se pudo confirmar la eliminación.");}}
}
async function mount(){
 if(mounted||!$("#danmachi-timeline-panel"))return;mounted=true;bindLocalForm();document.addEventListener("click",handleActions);
 const cap=$("#dm-visual-spoiler-cap");if(cap)cap.addEventListener("change",()=>{renderGeneral();refreshTimelineCards();});
 try{
  const [vis,tl]=await Promise.all([
   fetch("./lore/danmachi/visual-references.json",{cache:"no-cache"}).then(r=>{if(!r.ok)throw new Error("HTTP "+r.status);return r.json();}),
   fetch("./lore/danmachi/timeline/eras-and-events.json",{cache:"no-cache"}).then(r=>{if(!r.ok)throw new Error("HTTP "+r.status);return r.json();})
  ]);
  registry=vis;timeline=tl;const report=validateDataset(registry,timeline);
  if(!report.valid)throw new Error(report.errors.join(" "));
  fillRelationChoices();await renderGeneral();setStatus(report.referenceCount+" referencias registradas (enlace externo, no imagen rehosteada); "+report.assessedEvents+" acontecimientos y "+report.assessedLocations+" lugares evaluados.");refreshTimelineCards();
 }catch(error){setStatus("Registro visual seguro no disponible: "+(error.message||"error de validación")+". Las fichas y la navegación temporal siguen disponibles.");}
}
if(typeof document!=="undefined"){if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",mount,{once:true});else mount();}
const api={validateDataset,canExportWatermarkedCopy,renderInto,renderGeneral,mount};
root.WordWaifuDanMachiVisualReferences=Object.freeze(api);
if(typeof module==="object"&&module.exports)module.exports=api;
})(typeof globalThis!=="undefined"?globalThis:this);

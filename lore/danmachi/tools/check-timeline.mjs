#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { createRequire } from "node:module";
const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),"..");
const require=createRequire(import.meta.url);
const timelineValidator=require(path.resolve(root,"..","..","src","danmachi-timeline.js"));
const errors=[];
let catalog,timeline;
try{catalog=JSON.parse(fs.readFileSync(path.join(root,"catalog.json"),"utf8"));}catch(e){console.error(e.message);process.exit(2);}
try{timeline=JSON.parse(fs.readFileSync(path.join(root,"timeline","eras-and-events.json"),"utf8"));}catch(e){console.error(e.message);process.exit(2);}
const records=new Map((catalog.records||[]).map(r=>[r.id,r]));
const duplicate=(values,label)=>{const seen=new Set();for(const v of values){if(seen.has(v))errors.push("Duplicate "+label+": "+v);seen.add(v);}};
duplicate((timeline.eras||[]).map(x=>x.id),"era ID");duplicate((timeline.events||[]).map(x=>x.id),"event ID");
const eras=new Map((timeline.eras||[]).map(x=>[x.id,x]));
const paths=new Set((catalog.records||[]).map(r=>r.path));
for(const era of timeline.eras||[]){if(era.parentId&&!eras.has(era.parentId))errors.push("Orphan era "+era.id);const seen=new Set();let at=era;while(at&&at.parentId){if(seen.has(at.id)){errors.push("Era cycle at "+era.id);break;}seen.add(at.id);at=eras.get(at.parentId);}}
for(const event of timeline.events||[]){
 if(!eras.has(event.eraId))errors.push("Unknown era on "+event.id);
 if(!event.title||!event.dateLabel||!event.summary)errors.push("Missing title/date/summary on "+event.id);
 if(!event.continuityScopes||!event.continuityScopes.length)errors.push("Missing continuity on "+event.id);
 if(!event.sources||!event.sources.length)errors.push("Missing source route on "+event.id);
 for(const source of event.sources||[]){try{if(new URL(source.url).protocol!=="https:")errors.push("Non-HTTPS source on "+event.id);}catch{errors.push("Invalid source URL on "+event.id);}}
 if(event.recordId&&!records.has(event.recordId))errors.push("Missing catalog record "+event.recordId);
 if(event.recordId&&records.has(event.recordId)&&records.get(event.recordId).path!==event.detailPath)errors.push("Path mismatch for "+event.id);
 if(event.detailPath&&!paths.has(event.detailPath))errors.push("Event path not registered "+event.detailPath);
 for(const person of [...(event.participants||[]),...(event.relatedEntities||[])])if(person.id&&person.registered!==false&&!records.has(person.id))errors.push("Unregistered linked entity "+person.id+" in "+event.id);
 if(/^T[−-]7\b/.test(event.dateLabel||"")&&!event.continuityScopes.includes("CONT-AR"))errors.push("T−7 outside CONT-AR: "+event.id);
 if(/T[−-]5/.test(event.dateLabel||"")&&event.eraId==="ERA-04A-ASTREA-RECORD")errors.push("T−5 merged into Astrea Record: "+event.id);
}
if(!timeline.anchor||timeline.anchor.id!=="T0-BELL-ARRIVAL")errors.push("Missing T0 anchor");
const eventMap=new Map((timeline.events||[]).map(e=>[e.id,e]));
if(!eventMap.has("EVT-DM-AR-ERA-001")||!/T[−-]7/.test(eventMap.get("EVT-DM-AR-ERA-001").dateLabel))errors.push("Missing Astrea Record T−7");
if(!eventMap.has("EVT-DM-ASTREA-FAMILIA-JUGGERNAUT-001")||!/T[−-]5/.test(eventMap.get("EVT-DM-ASTREA-FAMILIA-JUGGERNAUT-001").dateLabel))errors.push("Missing T−5 tragedy");
if(!eventMap.has("EVT-DM-JUGGERNAUT-RETURN-001")||eventMap.get("EVT-DM-JUGGERNAUT-RETURN-001").eraId!=="ERA-06-MAIN-V13-14")errors.push("Missing separate current Juggernaut event");
if(!records.has("MON-DM-JUGGERNAUT-001"))errors.push("Missing Juggernaut entity record");
if((timeline.events||[]).filter(e=>(e.relatedEntities||[]).some(r=>r.id==="MON-DM-JUGGERNAUT-001")).length<2)errors.push("Juggernaut entity must link to two distinct event appearances");
for(const record of catalog.records||[]){const file=path.resolve(root,record.path||"");if(!record.id||!record.path||!file.startsWith(root+path.sep)||!fs.existsSync(file))errors.push("Missing/unsafe record path "+record.path);}
const knownLocationPaths=new Set((catalog.records||[]).filter(record=>record.path&&fs.existsSync(path.resolve(root,record.path))).map(record=>record.path));
const locationCatalogReport=timelineValidator.validateLocationCatalog(timeline,catalog,knownLocationPaths);
if(!locationCatalogReport.valid)for(const error of locationCatalogReport.errors)errors.push("Location catalog: "+error);
const temporalReport=timelineValidator.validateDataset(timeline);
if(!temporalReport.valid)for(const error of temporalReport.errors)errors.push("Temporal model: "+error);
if(temporalReport.legacyTemporalModel)errors.push("Current DanMachi timeline dataset must use the explicit temporal model.");
if(temporalReport.temporalEventCount!==15)errors.push("Expected typed temporal model on 15 events; got "+temporalReport.temporalEventCount+".");
console.log("DanMachi timeline check: "+timeline.eras.length+" eras, "+timeline.events.length+" events, "+catalog.records.length+" catalog records; temporal model v"+temporalReport.temporalModelVersion+"; "+temporalReport.locationCount+" places / "+temporalReport.locationRefCount+" location links / "+temporalReport.unknownEventCount+" unknown / "+temporalReport.provisionalEventCount+" provisional events.");
if(errors.length){for(const e of errors)console.error("ERROR: "+e);console.error("FAILED with "+errors.length+" error(s).");process.exit(1);}
console.log("PASS: era hierarchy, source routes, catalog links, T−7/T−5 separation, event-to-place references, place type/path integrity and no-coordinate schematic validated.");

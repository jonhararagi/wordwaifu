const assert=require("node:assert/strict");
const fs=require("node:fs");
const path=require("node:path");
const timeline=require("../src/danmachi-timeline.js");
const root=path.resolve(__dirname,"..");
const appHtml = fs.readFileSync(path.join(root, "index.html"), "utf8");
const appCss = fs.readFileSync(path.join(root, "src", "styles.css"), "utf8");
assert.ok(appHtml.includes('id="danmachi-timeline-panel"'), "The historical timeline must be mounted inside the DanMachi encyclopedia.");
assert.ok(appHtml.includes('src="./src/danmachi-timeline.js"'), "The timeline module must be loaded by the application.");
assert.ok(appCss.includes(".danmachi-timeline-panel") && appCss.includes(".dm-map-nongeographic-warning"), "Timeline and non-geographic map styles must be included.");
const data=JSON.parse(fs.readFileSync(path.join(root,"lore/danmachi/timeline/eras-and-events.json"),"utf8"));
const report=timeline.validateDataset(data);
assert.equal(report.valid,true,report.errors.join("\n"));
assert.equal(report.temporalModelVersion,1);
assert.equal(report.legacyTemporalModel,false);
assert.equal(report.eraCount,10);
assert.equal(report.eventCount,15);
assert.equal(report.temporalEventCount,15);
assert.equal(data.anchor.id,"T0-BELL-ARRIVAL");
assert.equal(data.anchor.eventId,"EVT-DM-BELL-ARRIVAL-001");

const expectedKinds={
 "EVT-DM-DESCENT-001":"unknown",
 "EVT-DM-GREAT-QUESTS-001":"relative_order",
 "EVT-DM-ZH-OEBD-001":"relative_order",
 "EVT-DM-ZH-FALL-001":"relative_order",
 "EVT-DM-AR-ERA-001":"relative_offset",
 "EVT-DM-ASTREA-FAMILIA-JUGGERNAUT-001":"relative_offset",
 "EVT-DM-RYUU-REVENGE-001":"relative_order",
 "EVT-DM-HESTIA-DESCENT-001":"relative_order",
 "EVT-DM-BELL-ARRIVAL-001":"anchor",
 "EVT-DM-BELL-MEETS-HESTIA-001":"relative_order",
 "EVT-DM-BELL-AIS-MINOTAUR-001":"relative_order",
 "EVT-DM-EINA-ADVISOR-001":"relative_order",
 "EVT-DM-RYUU-JURA-PURSUIT-001":"relative_order",
 "EVT-DM-JUGGERNAUT-RETURN-001":"relative_order",
 "EVT-DM-JUGGERNAUT-DEFEAT-001":"relative_order"
};
const expectedLabels={
 "EVT-DM-DESCENT-001":"Fecha absoluta no fijada",
 "EVT-DM-GREAT-QUESTS-001":"Antes de T0 · fecha y orden exacto pendientes",
 "EVT-DM-ZH-OEBD-001":"Antes de T0 · fecha pendiente",
 "EVT-DM-ZH-FALL-001":"Antes de T0 · fecha y causa exactas pendientes",
 "EVT-DM-AR-ERA-001":"T−7 · aproximadamente siete años antes de Bell",
 "EVT-DM-ASTREA-FAMILIA-JUGGERNAUT-001":"T−5 · aproximadamente cinco años antes de Bell",
 "EVT-DM-RYUU-REVENGE-001":"Después de T−5 y antes de T0 · duración sin fijar",
 "EVT-DM-HESTIA-DESCENT-001":"Antes de T0 · posición exacta respecto de T−7/T−5 abierta",
 "EVT-DM-BELL-ARRIVAL-001":"T0 · ancla de la historia principal",
 "EVT-DM-BELL-MEETS-HESTIA-001":"Poco después de T0 · fecha exacta abierta",
 "EVT-DM-BELL-AIS-MINOTAUR-001":"Inicio de la historia · poco después de T0",
 "EVT-DM-EINA-ADVISOR-001":"Primeros volúmenes · secuencia exacta pendiente",
 "EVT-DM-RYUU-JURA-PURSUIT-001":"Meses después de T0 · arco del volumen 13; día exacto abierto",
 "EVT-DM-JUGGERNAUT-RETURN-001":"Volúmenes 13–14 · meses después de T0",
 "EVT-DM-JUGGERNAUT-DEFEAT-001":"Continuación en el volumen 14 · fecha interna abierta"
};
const events=new Map(data.events.map(e=>[e.id,e]));
assert.deepEqual([...events.keys()].sort(),Object.keys(expectedKinds).sort(),"The 15 existing event IDs must be retained exactly.");
for(const [id,kind] of Object.entries(expectedKinds)){
 const event=events.get(id);
 assert.equal(event.temporal.kind,kind,id+" temporal variant");
 assert.equal(event.narrativeOrigin.kind,"published_reference",id+" origin is independent from evidence/continuity");
 assert.equal(event.dateLabel,expectedLabels[id],id+" legacy dateLabel remains unchanged");
 assert.ok(event.temporal.sourceUrls.length>0,id+" keeps temporal source traceability");
 assert.ok(event.temporal.sourceUrls.every(url=>event.sources.some(source=>source.url===url)),id+" temporal sources must belong to its own source list");
 assert.ok(event.detailPath,id+" must preserve detailPath");
}
assert.equal(data.events.filter(e=>e.temporal.kind==="absolute_date").length,0,"No unsupported calendar date may be added to the live DanMachi timeline.");
assert.equal(events.get("EVT-DM-AR-ERA-001").temporal.amount,7);
assert.equal(events.get("EVT-DM-AR-ERA-001").temporal.unit,"year");
assert.equal(events.get("EVT-DM-AR-ERA-001").temporal.precision,"approximate");
assert.equal(events.get("EVT-DM-ASTREA-FAMILIA-JUGGERNAUT-001").temporal.amount,5);
assert.equal(events.get("EVT-DM-ASTREA-FAMILIA-JUGGERNAUT-001").temporal.precision,"approximate");
assert.equal(events.get("EVT-DM-AR-ERA-001").continuityScopes.includes("CONT-AR"),true);
assert.equal(events.get("EVT-DM-ASTREA-FAMILIA-JUGGERNAUT-001").continuityScopes.includes("CONT-AR"),false,"T−5 remains separate from Astrea Record T−7");
assert.equal(events.get("EVT-DM-BELL-ARRIVAL-001").temporal.anchorId,"T0-BELL-ARRIVAL");
assert.equal(Object.hasOwn(events.get("EVT-DM-BELL-ARRIVAL-001").temporal,"value"),false,"T0 must not be rendered as a calendar date");
assert.deepEqual(events.get("EVT-DM-RYUU-REVENGE-001").temporal.referenceIds,["EVT-DM-ASTREA-FAMILIA-JUGGERNAUT-001","T0-BELL-ARRIVAL"]);
assert.equal(events.get("EVT-DM-RYUU-REVENGE-001").temporal.distanceKnown,false);
assert.ok(data.events.every(e=>!["user_hypothesis","user_plan","author_au"].includes(e.narrativeOrigin.kind)),"No hypothetical event may be inserted into the live reference timeline.");
assert.equal(timeline.temporalKindLabel(events.get("EVT-DM-AR-ERA-001").temporal),"Desplazamiento relativo · aproximado");
assert.equal(timeline.temporalKindLabel(events.get("EVT-DM-DESCENT-001").temporal),"Tiempo desconocido / pendiente");
assert.equal(timeline.temporalKindLabel(events.get("EVT-DM-BELL-ARRIVAL-001").temporal),"Ancla relativa · no es fecha de calendario");

// All six temporal variants are rendered with deterministic, uncertainty-preserving labels.
// The calendar values below belong to synthetic test fixtures and are not saved as DanMachi canon.
const displayCases=[
 {temporal:{kind:"absolute_date",value:"2042-03-04",calendar:"gregorian",precision:"day"},label:"Fecha de calendario · precisión día",description:"2042-03-04"},
 {temporal:{kind:"approximate_interval",lower:{value:"2040-01-01",calendar:"gregorian",precision:"day"},upper:{value:"2041-01-01",calendar:"gregorian",precision:"day"},precision:"approximate"},label:"Intervalo aproximado",description:"2040-01-01"},
 {temporal:{kind:"relative_offset",anchorId:"T0-BELL-ARRIVAL",direction:"before",amount:7,unit:"year",precision:"approximate"},label:"Desplazamiento relativo · aproximado",description:"aproximadamente 7 year"},
 {temporal:{kind:"relative_order",relation:"after",referenceIds:["T0-BELL-ARRIVAL"],distanceKnown:false,precision:"order_only",qualifier:"Después del ancla; distancia desconocida."},label:"Orden relativo · distancia no calculable",description:"distancia desconocida"},
 {temporal:{kind:"unknown",reason:"No hay localizador primario suficiente.",precision:"unknown"},label:"Tiempo desconocido / pendiente",description:"No hay localizador primario"},
 {temporal:{kind:"anchor",anchorId:"T0-BELL-ARRIVAL",precision:"anchor"},label:"Ancla relativa · no es fecha de calendario",description:"no es una fecha de calendario"}
];
for(const item of displayCases){
 assert.equal(timeline.temporalKindLabel(item.temporal),item.label,item.temporal.kind+" must retain a clear temporal label");
 const description=timeline.temporalDescription(item.temporal);
 assert.ok(description.includes(item.description),item.temporal.kind+" description should preserve its temporal meaning: "+description);
 assert.ok(!/\b(?:undefined|null)\b/i.test(description),item.temporal.kind+" description must not expose missing values");
}

// Test-only events exercise supported temporal variants without adding them to the saved canon dataset.
const fixtureUrl="https://example.test/temporal-model-fixture";
function fixture(temporal,originKind,scopes){
 const clone=structuredClone(data);
 const record={
  id:"TEST-TEMPORAL-FIXTURE-"+clone.events.length,
  title:"Synthetic temporal-model test fixture",
  eraId:"ERA-05-MAIN-START",
  dateLabel:"Test fixture only",
  summary:"Not a DanMachi lore record; generated only inside this test.",
  continuityScopes:scopes||["CONT-AU"],
  evidenceStatus:"test_fixture",
  narrativeOrigin:{kind:originKind||"user_plan"},
  locationAssessment:{status:"unknown",spatialPrecision:"unknown",reason:"Synthetic temporal fixture has no geographic claim."},
  locationRefs:[],
  sources:[{label:"Synthetic test fixture (not fetched)",url:fixtureUrl,kind:"test_fixture",note:"Non-production test fixture; not evidence for any DanMachi claim."}],
  temporal:{...structuredClone(temporal),sourceUrls:[fixtureUrl]}
 };
 clone.events.push(record);
 return {clone,record};
}
const validFixtures=[
 {name:"calendar date with explicit calendar",origin:"user_plan",scopes:["CONT-AU"],temporal:{kind:"absolute_date",value:"2042-03-04",calendar:"gregorian",precision:"day"}},
 {name:"approximate bounded interval",origin:"user_plan",scopes:["CONT-AU"],temporal:{kind:"approximate_interval",lower:{value:"2040-01-01",calendar:"gregorian",precision:"day"},upper:{value:"2041-01-01",calendar:"gregorian",precision:"day"},precision:"approximate"}},
 {name:"approximate offset from T0",origin:"published_reference",scopes:["CONT-AR"],temporal:{kind:"relative_offset",anchorId:"T0-BELL-ARRIVAL",direction:"before",amount:7,unit:"year",precision:"approximate"}},
 {name:"relative order without duration",origin:"published_reference",scopes:["CONT-MAIN-LN"],temporal:{kind:"relative_order",relation:"between",referenceIds:["EVT-DM-ASTREA-FAMILIA-JUGGERNAUT-001","T0-BELL-ARRIVAL"],distanceKnown:false,precision:"order_only"}},
 {name:"unknown time with reason",origin:"published_reference",scopes:["CONT-MAIN-LN"],temporal:{kind:"unknown",reason:"Primary locator not available.",precision:"unknown"}},
 {name:"user hypothesis isolated from canon",origin:"user_hypothesis",scopes:["CONT-UNVERIFIED"],temporal:{kind:"unknown",reason:"User hypothesis fixture.",precision:"unknown"}},
 {name:"user plan placed in AU",origin:"user_plan",scopes:["CONT-AU"],temporal:{kind:"relative_order",relation:"after",referenceIds:["T0-BELL-ARRIVAL"],distanceKnown:false,precision:"order_only"}},
 {name:"author AU distinct from published origin",origin:"author_au",scopes:["CONT-AU"],temporal:{kind:"relative_order",relation:"after",referenceIds:["T0-BELL-ARRIVAL"],distanceKnown:false,precision:"order_only"}}
];
for(const item of validFixtures){
 const sample=fixture(item.temporal,item.origin,item.scopes);
 const result=timeline.validateDataset(sample.clone);
 assert.equal(result.valid,true,item.name+": "+result.errors.join("; "));
}
// Exercise a valid anchor variant by mutating only an in-memory test copy of the designated T0 event.
const validAnchorFixture=structuredClone(data);
const validAnchorEvent=validAnchorFixture.events.find(event=>event.id===validAnchorFixture.anchor.eventId);
validAnchorEvent.sources.push({label:"Synthetic anchor fixture (not fetched)",url:fixtureUrl,kind:"test_fixture",note:"Test-only source; not canon evidence."});
validAnchorEvent.temporal={kind:"anchor",anchorId:validAnchorFixture.anchor.id,precision:"anchor",qualifier:"Synthetic anchor fixture only.",sourceUrls:[fixtureUrl]};
assert.equal(timeline.validateDataset(validAnchorFixture).valid,true,"A valid anchor fixture must remain valid without adding a second anchor event.");
function assertInvalid(change,needle){
 const sample=fixture({kind:"unknown",reason:"Fixture reason.",precision:"unknown"},"user_plan",["CONT-AU"]);
 change(sample.record,sample.clone);
 const result=timeline.validateDataset(sample.clone);
 assert.equal(result.valid,false,"fixture should be rejected");
 assert.ok(result.errors.some(error=>error.includes(needle)),"Expected validation error containing "+needle+"; actual: "+result.errors.join("; "));
}
assertInvalid((event)=>{event.temporal.kind="nonsense";},"invalid temporal kind");
assertInvalid((event)=>{event.temporal={kind:"relative_offset",anchorId:"MISSING-ANCHOR",direction:"before",amount:7,unit:"year",precision:"approximate",sourceUrls:[fixtureUrl]};},"unknown anchor");
assertInvalid((event)=>{event.temporal={kind:"relative_offset",anchorId:"T0-BELL-ARRIVAL",direction:"before",amount:7,unit:"fortnight",precision:"approximate",sourceUrls:[fixtureUrl]};},"Invalid relative offset unit");
assertInvalid((event)=>{event.temporal={kind:"approximate_interval",lower:{value:"2041-01-01",calendar:"gregorian",precision:"day"},upper:{value:"2040-01-01",calendar:"gregorian",precision:"day"},precision:"approximate",sourceUrls:[fixtureUrl]};},"lower bound must precede upper bound");
assertInvalid((event)=>{event.temporal={kind:"absolute_date",value:"2042-02",calendar:"gregorian",precision:"day",sourceUrls:[fixtureUrl]};},"Invalid absolute calendar date/precision");
assertInvalid((event)=>{event.temporal={kind:"relative_order",relation:"after",referenceIds:["NO-SUCH-REF"],distanceKnown:false,precision:"order_only",sourceUrls:[fixtureUrl]};},"Missing temporal reference");
assertInvalid((event)=>{event.temporal={kind:"relative_order",relation:"after",referenceIds:[event.id],distanceKnown:false,precision:"order_only",sourceUrls:[fixtureUrl]};},"cannot reference itself");
const extraAnchor=structuredClone(data);
const secondAnchor=extraAnchor.events.find(event=>event.id==="EVT-DM-GREAT-QUESTS-001");
secondAnchor.temporal={kind:"anchor",anchorId:extraAnchor.anchor.id,precision:"anchor",qualifier:"Synthetic invalid duplicate anchor fixture.",sourceUrls:[secondAnchor.sources[0].url]};
const extraAnchorReport=timeline.validateDataset(extraAnchor);
assert.equal(extraAnchorReport.valid,false,"Only the declared T0 event may use the anchor temporal variant.");
assert.ok(extraAnchorReport.errors.some(error=>error.includes("Only declared anchor event may use anchor temporal variant")),extraAnchorReport.errors.join("; "));
const missingAnchorPointer=structuredClone(data);
delete missingAnchorPointer.anchor.eventId;
const missingAnchorPointerReport=timeline.validateDataset(missingAnchorPointer);
assert.equal(missingAnchorPointerReport.valid,false,"The structured temporal model must point to its declared anchor event.");
assert.ok(missingAnchorPointerReport.errors.some(error=>error.includes("requires anchor.eventId")),missingAnchorPointerReport.errors.join("; "));
assertInvalid((event)=>{event.temporal.sourceUrls=["https://example.test/not-in-event-sources"];},"does not belong to event");
assertInvalid((event)=>{event.narrativeOrigin={kind:"user_plan"};event.continuityScopes=["CONT-MAIN-LN"]; },"cannot silently enter published continuity");
assertInvalid((event)=>{event.temporal={kind:"absolute_date",value:"2042-02-30",calendar:"gregorian",precision:"day",sourceUrls:[fixtureUrl]};},"Invalid absolute calendar date/precision");
const cycleFixture=fixture({kind:"relative_order",relation:"after",referenceIds:["T0-BELL-ARRIVAL"],distanceKnown:false,precision:"order_only"},"user_plan",["CONT-AU"]);
const cycleLeft=cycleFixture.record;
const cycleRight=structuredClone(cycleLeft);
cycleRight.id="TEST-TEMPORAL-FIXTURE-RIGHT";
cycleLeft.temporal={kind:"relative_order",relation:"before",referenceIds:[cycleRight.id],distanceKnown:false,precision:"order_only",sourceUrls:[fixtureUrl]};
cycleRight.temporal={kind:"relative_order",relation:"before",referenceIds:[cycleLeft.id],distanceKnown:false,precision:"order_only",sourceUrls:[fixtureUrl]};
cycleFixture.clone.events.push(cycleRight);
const temporalCycleReport=timeline.validateDataset(cycleFixture.clone);
assert.equal(temporalCycleReport.valid,false,"Mutually ordered synthetic events must be rejected as a temporal contradiction.");
assert.ok(temporalCycleReport.errors.some(error=>error.includes("Temporal relative-order cycle detected")),temporalCycleReport.errors.join("; "));
const legacy=structuredClone(data);
delete legacy.temporalModelVersion;
delete legacy.anchor.eventId;
legacy.events.forEach(event=>{delete event.temporal;delete event.narrativeOrigin;});
const legacyReport=timeline.validateDataset(legacy);
assert.equal(legacyReport.valid,true,"legacy v1 data must remain loadable through an explicit compatibility path: "+legacyReport.errors.join("; "));
assert.equal(legacyReport.legacyTemporalModel,true);
assert.equal(timeline.temporalKindLabel(null),"Tiempo sin normalizar");
assert.equal(report.locationCount,2);
assert.equal(report.locationRefCount,9);
assert.equal(report.unknownEventCount,6);
assert.equal(report.provisionalEventCount,5);
assert.equal(data.events.length,15,"The original 15 event IDs must remain.");
const locationById=new Map(data.locations.map(place=>[place.id,place]));
assert.equal(locationById.get("LOC-ORARIO").recordPath,"places/orario.md");
assert.equal(locationById.get("LOC-DUNGEON").recordPath,"places/dungeon.md");
assert.equal(data.locations.every(place=>!Object.hasOwn(place,"coordinates")||place.coordinates===null),true,"The schematic must not seed invented coordinates.");
assert.equal(data.mapPresentation.type,"non_geographic_relationship_schematic");
assert.equal(data.mapPresentation.hasGeographicCoordinates,false);
assert.equal(events.get("EVT-DM-BELL-ARRIVAL-001").locationRefs[0].verificationStatus,"verified");
assert.equal(events.get("EVT-DM-BELL-MEETS-HESTIA-001").locationRefs[0].locationId,"LOC-ORARIO");
assert.equal(events.get("EVT-DM-JUGGERNAUT-DEFEAT-001").locationRefs[0].locationId,"LOC-DUNGEON");
assert.equal(events.get("EVT-DM-DESCENT-001").locationAssessment.status,"unknown");
assert.equal(events.get("EVT-DM-DESCENT-001").locationRefs.length,0);
assert.equal(events.get("EVT-DM-ASTREA-FAMILIA-JUGGERNAUT-001").locationRefs[0].verificationStatus,"provisional");
const chronologyForTest="https://danmachi.com/chronology/";
function assertGeoInvalid(change,needle){
 const clone=structuredClone(data);
 change(clone);
 const result=timeline.validateDataset(clone);
 assert.equal(result.valid,false,"invalid location model should be rejected");
 assert.ok(result.errors.some(error=>error.includes(needle)),"Expected "+needle+"; got: "+result.errors.join("; "));
}
assertGeoInvalid(clone=>{clone.events[0].locationAssessment={status:"verified",spatialPrecision:"city_level",reason:"bad"};clone.events[0].locationRefs=[{locationId:"LOC-NOT-REGISTERED",relationship:"event_place",verificationStatus:"verified",spatialPrecision:"city_level",context:"bad",sourceUrls:[chronologyForTest]}];},"references missing location");
assertGeoInvalid(clone=>{clone.locations.push(structuredClone(clone.locations[0]));},"Duplicate timeline location id");
assertGeoInvalid(clone=>{delete clone.locations[0].recordPath;},"invalid record path");
assertGeoInvalid(clone=>{clone.locations[0].type="setting";},"incompatible entity type");
assertGeoInvalid(clone=>{clone.locations[0].coordinates={x:12,y:14};},"must not contain geographic coordinates");
assertGeoInvalid(clone=>{clone.events[0].locationAssessment={status:"unknown",spatialPrecision:"unknown",reason:"unknown"};clone.events[0].locationRefs=[{locationId:"LOC-ORARIO",relationship:"event_place",verificationStatus:"verified",spatialPrecision:"city_level",context:"bad",sourceUrls:[chronologyForTest]}];},"Unknown-location event must not carry location refs");
const validCatalog={records:data.locations.map(place=>({id:place.id,type:"location",path:place.recordPath}))};
const validPaths=new Set(data.locations.map(place=>place.recordPath));
assert.equal(timeline.validateLocationCatalog(data,validCatalog,validPaths).valid,true);
assert.equal(timeline.validateLocationCatalog(data,{records:[...validCatalog.records,{...validCatalog.records[0]}]},validPaths).valid,false,"Duplicate catalog IDs must be rejected.");
assert.equal(timeline.validateLocationCatalog(data,{records:validCatalog.records.filter(r=>r.id!=="LOC-ORARIO")},validPaths).valid,false,"A location ID missing from catalog must be rejected.");
assert.equal(timeline.validateLocationCatalog(data,{records:validCatalog.records.map(r=>r.id==="LOC-ORARIO"?{...r,type:"setting"}:r)},validPaths).valid,false,"Setting is not a location record.");
assert.equal(timeline.validateLocationCatalog(data,validCatalog,new Set(["places/dungeon.md"])).valid,false,"A missing fiche route must be rejected.");
process.stdout.write("PASS DanMachi timeline: temporal model, location reference validation, unknown/provisional states and catalog type/path/duplicate guards.\n");


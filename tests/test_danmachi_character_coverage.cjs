"use strict";
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const root = path.resolve(__dirname, "..");
const loreRoot = path.join(root, "lore/danmachi");
const catalog = JSON.parse(fs.readFileSync(path.join(loreRoot, "catalog.json"), "utf8"));
require("../src/official-character-roster.js");
require("../src/character-dossiers.js");
const rosterApi = globalThis.WordWaifuOfficialCharacterRoster;
const dossierApi = globalThis.WordWaifuCharacterDossiers;
assert.ok(rosterApi && dossierApi, "Roster and dossier modules must load.");
const roster = rosterApi.list();
const byId = new Map(catalog.records.map(r => [r.id, r]));
for (const character of roster) {
  const record = byId.get(character.id);
  assert.ok(record, "Roster character missing active catalog record: " + character.id);
  assert.ok(["character","deity_character","character_group"].includes(record.type), "Roster record must be a character entity: " + character.id);
  assert.ok(record.path && record.path.startsWith("characters/"), "Character has no Markdown route: " + character.id);
  const file = path.join(loreRoot, record.path);
  assert.ok(fs.existsSync(file), "Missing Markdown file: " + character.id + " -> " + record.path);
  assert.match(fs.readFileSync(file, "utf8"), new RegExp("^id:\\s*" + character.id + "\\s*$", "m"), "Markdown ID mismatch: " + character.id);
  const dossier = dossierApi.get(character.id);
  assert.ok(dossier, "Missing UI dossier: " + character.id);
  for (const field of ["appearance","history","personality","abilities","relationships","conflict"]) assert.ok(typeof dossier[field] === "string" && dossier[field].length >= 100, character.id + " needs substantive " + field);
  assert.ok(Array.isArray(dossier.sources) && dossier.sources.length > 0, character.id + " must retain source URLs");
}
assert.equal(byId.get("CHAR-GULLIVER-BROTHERS").type, "character_group", "The siblings unit is a group node, not an individual character.");
for (const id of ["CHAR-ALFRIGG-GULLIVER","CHAR-DVALINN-GULLIVER","CHAR-BERLING-GULLIVER","CHAR-GRER-GULLIVER"]) {
  assert.ok(byId.has(id), "Missing independent Gulliver record: " + id);
  assert.ok(catalog.relationships.some(e => e.from === id && e.to === "CHAR-GULLIVER-BROTHERS"), "Missing group edge: " + id);
  assert.ok(catalog.relationships.some(e => e.from === id && e.to === "FAM-FREYA"), "Missing Freya Familia edge: " + id);
}
for (const id of ["FAM-FREYA","FAM-DIONYSUS","FAM-HERMES","FAM-MIACH","FAM-TAKEMIKAZUCHI","FAM-MODI","FAM-MAGNI","FAM-HEPHAISTOS","FAM-APOLLO","FAM-GANESHA","FAM-ISHTAR","FAM-NEW-ASTREA","FAM-RUDRA","LOC-HOSTESS","GRP-XENOS"]) assert.ok(byId.has(id), "Missing navigation hub: " + id);
for (const id of ["IDX-DM-ERA-DARK-001","GRP-EVILUS","CHAR-KALI","CHAR-ARGANA-KALIF","CHAR-BACHE-KALIF","CHAR-SELDAS","FAM-KALI","LOC-MELEN","EVT-DM-SO6-HIRYUTE-PAST-001"]) {
  assert.ok(byId.has(id), "Missing Dark Era / Hiryute record: " + id);
  const record = byId.get(id);
  assert.ok(record.path && fs.existsSync(path.join(loreRoot,record.path)), "Missing Markdown route: " + id);
}
const darkEraIndex = fs.readFileSync(path.join(loreRoot,byId.get("IDX-DM-ERA-DARK-001").path),"utf8");
for (const label of ["Alfia","Zald","Erebus","Valletta Grede","Thanatos","Rudra","Jura Halmer","Tiona Hiryute","Tione Hiryute","Kali Familia","T-7","T-5"]) {
  assert.ok(darkEraIndex.toLowerCase().includes(label.toLowerCase()), "Dark Era index missing context: " + label);
}
assert.ok(catalog.documents.some(d => d.document_id === "DOC-DANMACHI-RESEARCH-038" && fs.existsSync(path.join(loreRoot,d.path))), "Missing DMR-038 research document registration.");
for (const id of ["CHAR-TIONA-HIRYUTE","CHAR-TIONE-HIRYUTE"]) {
  const record = byId.get(id);
  const content = fs.readFileSync(path.join(loreRoot,record.path),"utf8");
  assert.match(content,/Sword Oratoria vol\. 6/i,id + " needs the publisher-backed past route.");
  assert.match(content,/secundari/i,id + " must separate secondary childhood claims.");
}
assert.ok(catalog.relationships.some(e => e.id === "REL-TIONA-KALI-PAST-001" && e.evidenceStatus === "secondary_checked"), "Tiona/Kali edge must remain visibly secondary.");
assert.ok(catalog.relationships.some(e => e.id === "REL-TIONE-KALI-PAST-001" && e.evidenceStatus === "secondary_checked"), "Tione/Kali edge must remain visibly secondary.");
for (const id of ["REL-VALLETTA-EVILUS-INVESTIGATION","REL-THANATOS-EVILUS-INVESTIGATION"]) {
  assert.ok(catalog.relationships.some(e => e.id === id && e.evidenceStatus === "pending_verification" && /NO confirmada/i.test(e.label)), id + " must remain a research lead.");
}
assert.ok(catalog.relationships.some(e => e.id === "REL-ALFIA-ASTREA-RECORD-EVENT" && e.evidenceStatus === "secondary_checked"), "Alfia route must keep secondary evidence state.");
assert.ok(catalog.relationships.some(e => e.id === "REL-ZALD-ASTREA-RECORD-EVENT" && e.evidenceStatus === "secondary_checked"), "Zald route must keep secondary evidence state.");
assert.ok(!catalog.relationships.some(e => e.from === "EVT-DM-AR-ERA-001" && e.to === "EVT-DM-SO6-HIRYUTE-PAST-001" && e.kind === "same_period"), "Astrea Record and the Hiryute past must not be merged into one interval.");
assert.ok(catalog.relationships.some(e => e.id === "REL-RUDRA-JUGGERNAUT-EVENT-001" && e.from === "CHAR-DARK-RUDRA" && e.to === "EVT-DM-ASTREA-FAMILIA-JUGGERNAUT-001" && e.continuity === "CONT-MAIN-LN" && e.evidenceStatus === "secondary_checked"), "Rudra must connect to the later main-novel Juggernaut route.");
assert.ok(catalog.relationships.some(e => e.id === "REL-JURA-JUGGERNAUT-EVENT-001" && e.from === "CHAR-DARK-JURA-HALMER" && e.to === "EVT-DM-ASTREA-FAMILIA-JUGGERNAUT-001" && e.continuity === "CONT-MAIN-LN" && e.evidenceStatus === "secondary_checked"), "Jura must connect to the later main-novel Juggernaut route.");
assert.ok(!byId.get("CHAR-DARK-RUDRA").tags.includes("Astrea Record"), "Rudra later Juggernaut route must not be tagged as the T-7 Astrea Record core.");
const corpusApi = require("../src/lore-corpus.js");
assert.ok(corpusApi, "Lore retrieval module must load.");
assert.ok(corpusApi.getDefaultResearchPaths().includes("research/inbox/DANMACHI-RESEARCH-038-dark-era-and-hiryute-sisters.md"), "DMR-038 must be in the default retrieval package.");
for (const id of ["CHAR-DARK-EREBUS","CHAR-DARK-JURA-HALMER","CHAR-DARK-RUDRA","CHAR-DARK-THANATOS","CHAR-DARK-VALLETTA-GREDE","CHAR-KALI","CHAR-ARGANA-KALIF","CHAR-BACHE-KALIF","CHAR-SELDAS","CHAR-OLIVAS-ACT"]) {
  assert.ok(corpusApi.getDefaultDetailIds().includes(id), "Missing default detail route: " + id);
}
for (const id of ["CHAR-KALI","CHAR-ARGANA-KALIF","CHAR-BACHE-KALIF","CHAR-SELDAS","CHAR-DARK-ALFIA","CHAR-DARK-ZALD","CHAR-DARK-EREBUS","CHAR-DARK-RUDRA","CHAR-DARK-JURA-HALMER","CHAR-DARK-VALLETTA-GREDE","CHAR-DARK-THANATOS","CHAR-OLIVAS-ACT"]) {
  const dossier = dossierApi.get(id);
  assert.ok(dossier, "Missing UI dossier: " + id);
  for (const field of ["appearance","history","personality","abilities","relationships","conflict"]) assert.ok(typeof dossier[field] === "string" && dossier[field].length >= 100, id + " needs substantive " + field);
  assert.ok(Array.isArray(dossier.sources) && dossier.sources.length > 0, id + " needs sources");
}
const olivasRecord = byId.get("CHAR-OLIVAS-ACT");
assert.ok(olivasRecord && olivasRecord.path === "characters/olivas-act.md", "Olivas must have exactly one active Markdown route.");
assert.ok(!catalog.reservedIds.some(item => (typeof item === "string" ? item : item.id) === "CHAR-OLIVAS-ACT"), "Olivas must not remain reserved after activation.");
assert.ok(catalog.documents.some(d => d.document_id === "DOC-DANMACHI-RESEARCH-042" && d.path === "research/inbox/DANMACHI-RESEARCH-042-olivas-act-dossier.md"), "Olivas research packet must be indexed.");
assert.ok(catalog.relationships.some(e => e.id === "REL-OLIVAS-EVILUS-SECONDARY" && e.from === "CHAR-OLIVAS-ACT" && e.to === "GRP-EVILUS" && e.evidenceStatus === "secondary_checked" && e.claimRef === "DMR-042-CLM-002"), "Olivas–Evilus route must retain secondary provenance.");
assert.ok(catalog.relationships.some(e => e.id === "REL-OLIVAS-REVIS-SO3-SECONDARY" && e.from === "CHAR-OLIVAS-ACT" && e.to === "CHAR-REVIS" && e.evidenceStatus === "secondary_checked" && e.claimRef === "DMR-042-CLM-009"), "Olivas–Revis route must be a secondary scene association, not a personal relationship claim.");
const olivasMarkdown = fs.readFileSync(path.join(loreRoot, "characters/olivas-act.md"), "utf8");
assert.match(olivasMarkdown, /Vendetta/i, "Olivas aliases must be searchable from the Markdown record.");
assert.match(olivasMarkdown, /no se presenta como biografía de canon verificado/i, "Olivas must explicitly disclose its evidence limits.");
for (const [id, status] of [
  ["CHAR-MARIYU-LEAGE", "provisional"],
  ["CHAR-RYANA-LIETZ", "provisional"],
  ["CHAR-METERIA", "secondary_reference_primary_locator_pending"],
  ["CHAR-DARK-RUDRA", "pending_primary_text_check"]
]) assert.equal(byId.get(id)?.status, status, "Prior dossier evidence must not be silently promoted: " + id);
assert.ok(olivasMarkdown.includes("DMR-042-CLM-004") && olivasMarkdown.includes("DMR-042-CLM-008"), "Olivas must link its wiki details and the bounded publisher claim separately.");
assert.equal(new Set(catalog.records.map(r => r.id)).size, catalog.records.length, "Catalog IDs must be unique");
assert.equal(new Set(catalog.relationships.map(r => r.id)).size, catalog.relationships.length, "Relationship IDs must be unique");
for (const edge of catalog.relationships) { assert.ok(byId.has(edge.from), "Dangling origin: " + edge.id); assert.ok(byId.has(edge.to), "Dangling target: " + edge.id); }
process.stdout.write("PASS DanMachi coverage: " + roster.length + " characters have catalog, Markdown and dossier routes; Gulliver and graph integrity verified.\\n");

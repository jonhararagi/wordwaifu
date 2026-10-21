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
const corpusApi = require("../src/lore-corpus.js");
assert.ok(corpusApi, "Lore retrieval module must load.");
assert.ok(corpusApi.getDefaultResearchPaths().includes("research/inbox/DANMACHI-RESEARCH-038-dark-era-and-hiryute-sisters.md"), "DMR-038 must be in the default retrieval package.");
for (const id of ["CHAR-DARK-EREBUS","CHAR-DARK-JURA-HALMER","CHAR-DARK-RUDRA","CHAR-DARK-THANATOS","CHAR-DARK-VALLETTA-GREDE","CHAR-KALI","CHAR-ARGANA-KALIF","CHAR-BACHE-KALIF","CHAR-SELDAS"]) {
  assert.ok(corpusApi.getDefaultDetailIds().includes(id), "Missing default detail route: " + id);
}
for (const id of ["CHAR-KALI","CHAR-ARGANA-KALIF","CHAR-BACHE-KALIF","CHAR-SELDAS"]) {
  const dossier = dossierApi.get(id);
  assert.ok(dossier, "Missing UI dossier: " + id);
  for (const field of ["appearance","history","personality","abilities","relationships","conflict"]) assert.ok(typeof dossier[field] === "string" && dossier[field].length >= 100, id + " needs substantive " + field);
  assert.ok(Array.isArray(dossier.sources) && dossier.sources.length > 0, id + " needs sources");
}
assert.equal(new Set(catalog.records.map(r => r.id)).size, catalog.records.length, "Catalog IDs must be unique");
assert.equal(new Set(catalog.relationships.map(r => r.id)).size, catalog.relationships.length, "Relationship IDs must be unique");
for (const edge of catalog.relationships) { assert.ok(byId.has(edge.from), "Dangling origin: " + edge.id); assert.ok(byId.has(edge.to), "Dangling target: " + edge.id); }
process.stdout.write("PASS DanMachi coverage: " + roster.length + " characters have catalog, Markdown and dossier routes; Gulliver and graph integrity verified.\\n");

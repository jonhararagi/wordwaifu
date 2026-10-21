"use strict";
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const root = path.resolve(__dirname, "..");
const loreRoot = path.join(root, "lore", "danmachi");
const catalog = JSON.parse(fs.readFileSync(path.join(loreRoot, "catalog.json"), "utf8"));
const characterPath = path.join(loreRoot, "characters", "heithvelvet.md");
const eventPath = path.join(loreRoot, "events", "timeline", "EVT-DM-FC-HAZE-001.md");
const researchPath = path.join(loreRoot, "research", "inbox", "DANMACHI-RESEARCH-041-familia-chronicle-episode-haze.md");
const character = catalog.records.find(record => record.id === "CHAR-HEITH-VELVET");
const event = catalog.records.find(record => record.id === "EVT-DM-FC-HAZE-001");
assert.ok(character, "The existing Heith identity must be active.");
assert.ok(character.tags.includes("Haze") && character.tags.includes("Heizu") && character.tags.includes("episode Haze"), "Title romanizations must resolve to Heith's stable ID.");
assert.ok(!catalog.records.some(record => record.id === "CHAR-HAZE"), "Do not create a duplicate Haze person.");
assert.ok(event, "Episode Haze must have a navigable partial event record.");
assert.equal(event.path, "events/timeline/EVT-DM-FC-HAZE-001.md");
assert.equal(event.status, "source_checked_partial", "Publisher synopsis must remain partial evidence.");
assert.ok(fs.existsSync(characterPath) && fs.existsSync(eventPath) && fs.existsSync(researchPath), "Character, event and research routes must exist.");
const characterText = fs.readFileSync(characterPath, "utf8");
const eventText = fs.readFileSync(eventPath, "utf8");
const researchText = fs.readFileSync(researchPath, "utf8");
assert.match(characterText, /ID estable:\s*`CHAR-HEITH-VELVET`/);
assert.match(characterText, /Haze\/Heizu/);
assert.match(characterText, /EVT-DM-FC-HAZE-001/);
assert.match(eventText, /continuity_scope: CROSS-CONTINUITY/);
assert.match(eventText, /no es una reconstrucción del volumen completo/i);
for (const claimId of ["DMR-041-CLM-001","DMR-041-CLM-002","DMR-041-CLM-003","DMR-041-CLM-004"]) {
  assert.ok(researchText.includes("### " + claimId + " ·"), "Missing atomic claim " + claimId);
}
for (const [edgeId, from, claim] of [
  ["REL-HEITH-EPISODE-HAZE-001","CHAR-HEITH-VELVET","DMR-041-CLM-001"],
  ["REL-OTTAR-EPISODE-HAZE-BOUNTY-001","CHAR-OTTAR","DMR-041-CLM-003"]
]) {
  const edge = catalog.relationships.find(item => item.id === edgeId);
  assert.ok(edge, "Missing relation " + edgeId);
  assert.equal(edge.from, from);
  assert.equal(edge.to, "EVT-DM-FC-HAZE-001");
  assert.equal(edge.continuity, "CROSS-CONTINUITY");
  assert.equal(edge.evidenceStatus, "source_checked_partial");
  assert.equal(edge.claimRef, claim);
  assert.equal(edge.claimPath, "research/inbox/DANMACHI-RESEARCH-041-familia-chronicle-episode-haze.md");
}
assert.ok(catalog.documents.some(doc => doc.document_id === "DOC-DANMACHI-RESEARCH-041" && doc.path === "research/inbox/DANMACHI-RESEARCH-041-familia-chronicle-episode-haze.md"));
assert.ok(catalog.documents.some(doc => doc.document_id === "DOC-DANMACHI-RESEARCH-040"), "Publication horizon must remain registered.");
assert.ok(catalog.documents.some(doc => doc.document_id === "DOC-DANMACHI-RESEARCH-038"), "Dark Era research must remain registered.");
assert.ok(catalog.documents.some(doc => doc.document_id === "DOC-DANMACHI-RESEARCH-039"), "Orario inventory must remain registered.");
const sourceRegistry = fs.readFileSync(path.join(loreRoot, "sources", "00-registro-fuentes.md"), "utf8");
assert.match(sourceRegistry, /## DMR-041-SRC-001 · Familia Chronicle episode Haze/);
assert.match(sourceRegistry, /claims_supported: \[DMR-041-CLM-001, DMR-041-CLM-002, DMR-041-CLM-003\]/);
const corpus = require("../src/lore-corpus.js");
assert.ok(corpus.getDefaultResearchPaths().includes("research/inbox/DANMACHI-RESEARCH-041-familia-chronicle-episode-haze.md"));
assert.ok(corpus.getDefaultDetailIds().includes("EVT-DM-FC-HAZE-001"));
assert.ok(corpus.getDefaultDetailIds().includes("CHAR-HEITH-VELVET"));
assert.equal(new Set(corpus.getDefaultDetailIds()).size, corpus.getDefaultDetailIds().length, "Default detail routes must not contain duplicates.");
const rosterModule = require("../src/official-character-roster.js");
const roster = globalThis.WordWaifuOfficialCharacterRoster.list();
const rosterHeith = roster.find(item => item.id === "CHAR-HEITH-VELVET");
assert.ok(rosterHeith, "Heith must remain in the official adaptation roster.");
for (const alias of ["Haze","Heizu","ヘイズ","ヘイズ・ベルベット","episode Haze","episode Heith"]) assert.ok(rosterHeith.aliases.includes(alias), "Missing Heith alias " + alias);
const dossierSource = fs.readFileSync(path.join(root,"src","character-dossiers.js"),"utf8");
assert.match(dossierSource, /"CHAR-HEITH-VELVET":[\s\S]*?episode ヘイズ[\s\S]*?https:\/\/ga\.sbcr\.jp\/product\/9784815640675\//, "UI dossier must point at the new official source and shared identity.");
assert.equal(new Set(catalog.records.map(record => record.id)).size, catalog.records.length, "Catalog record IDs must be unique.");
assert.equal(new Set(catalog.relationships.map(edge => edge.id)).size, catalog.relationships.length, "Relationship IDs must be unique.");
const ids = new Set(catalog.records.map(record => record.id));
for (const edge of catalog.relationships) assert.ok(ids.has(edge.from) && ids.has(edge.to), "No relationship may point to a missing entity: " + edge.id);
process.stdout.write("PASS DanMachi Haze/Heith: stable identity, official synopsis claims, partial event edges and retrieval routes verified.\\n");

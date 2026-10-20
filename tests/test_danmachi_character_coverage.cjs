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
for (const id of ["CHAR-ALFRIGG-GULLIVER","CHAR-DVALINN-GULLIVER","CHAR-BERLING-GULLIVER","CHAR-GRER-GULLIVER"]) {
  assert.ok(byId.has(id), "Missing independent Gulliver record: " + id);
  assert.ok(catalog.relationships.some(e => e.from === id && e.to === "CHAR-GULLIVER-BROTHERS"), "Missing group edge: " + id);
  assert.ok(catalog.relationships.some(e => e.from === id && e.to === "FAM-FREYA"), "Missing Freya Familia edge: " + id);
}
for (const id of ["FAM-FREYA","FAM-DIONYSUS","FAM-HERMES","FAM-MIACH","FAM-TAKEMIKAZUCHI","FAM-MODI","FAM-MAGNI","FAM-HEPHAISTOS","FAM-APOLLO","FAM-GANESHA","FAM-ISHTAR","FAM-NEW-ASTREA","FAM-RUDRA","LOC-HOSTESS-FERTILITY","GRP-XENOS"]) assert.ok(byId.has(id), "Missing navigation hub: " + id);
assert.equal(new Set(catalog.records.map(r => r.id)).size, catalog.records.length, "Catalog IDs must be unique");
assert.equal(new Set(catalog.relationships.map(r => r.id)).size, catalog.relationships.length, "Relationship IDs must be unique");
for (const edge of catalog.relationships) { assert.ok(byId.has(edge.from), "Dangling origin: " + edge.id); assert.ok(byId.has(edge.to), "Dangling target: " + edge.id); }
process.stdout.write("PASS DanMachi coverage: " + roster.length + " characters have catalog, Markdown and dossier routes; Gulliver and graph integrity verified.\\n");

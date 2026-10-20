"use strict";
const assert = require("node:assert/strict");

require("../src/official-character-roster.js");
const roster = globalThis.WordWaifuOfficialCharacterRoster;
assert.ok(roster, "Official adaptation roster module must load");

const entries = roster.list();
const ids = entries.map(entry => entry.id);
assert.equal(new Set(ids).size, ids.length, "Roster IDs must be unique");
assert.equal(entries.length, 63, "Roster keeps the existing adaptation identities and adds four independently navigable Gulliver brothers.");

for (const id of ["CHAR-ALFRIGG-GULLIVER","CHAR-DVALINN-GULLIVER","CHAR-BERLING-GULLIVER","CHAR-GRER-GULLIVER"]) {
  assert.ok(roster.get(id), "Each Gulliver brother must have an independent roster identity: " + id);
  assert.equal(roster.get(id).continuity, "CONT-ANIME");
}
const eina = roster.get("DM-CHAR-EINA");
assert.ok(eina, "Eina Tulle must be present in the official adaptation roster");
assert.equal(eina.name, "Eina Tulle");
assert.ok(eina.aliases.includes("エイナ・チュール"), "Japanese official name should be searchable");
assert.equal(eina.species, "Media elfa");
assert.equal(eina.level, null, "Do not infer Eina’s level from a source that does not state it");
assert.equal(eina.epithet, "No indicado");
assert.equal(eina.sourceId, "DMR-006-SRC-004");
assert.equal(eina.sourcePage, "https://danmachi.com/danmachi3/character/index.html");
assert.equal(eina.evidenceType, "official_adaptation_profile");
assert.equal(eina.continuity, "CONT-ANIME");
assert.equal(eina.imageUrl, undefined, "Do not invent an official image URL");

const continuityDossiers = entries.filter(entry => entry.dossiers && Object.keys(entry.dossiers).length);
assert.equal(continuityDossiers.length, 24, "Preserve continuity-specific research dossiers from the integration source.");
assert.ok(continuityDossiers.every(entry => Object.values(entry.dossiers).every(dossier =>
  typeof dossier.sourceUrl === "string" && dossier.sourceUrl.startsWith("https://") &&
  typeof dossier.sourceLabel === "string" && dossier.sourceLabel.length > 0 &&
  ["major", "endgame", "mild", "none", "unknown"].includes(dossier.spoilerLevel)
)), "Every continuity dossier must retain source attribution and a spoiler level.");
assert.ok(roster.get("CHAR-RYUU-LION").dossiers["CONT-AR"], "Ryu's historical Astrea Record dossier must remain available.");
assert.equal(roster.get("DM-CHAR-BELL").dossiers["CONT-MAIN-LN"].sourceType, "secondary_compendium",
  "Community research must remain labeled as secondary, not official primary canon.");

process.stdout.write("PASS official character roster: " + entries.length + " unique records; 24 continuity-scoped research dossiers retain source and spoiler metadata.\\n");

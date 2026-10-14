"use strict";
const assert = require("node:assert/strict");

require("../src/official-character-roster.js");
const roster = globalThis.WordWaifuOfficialCharacterRoster;
assert.ok(roster, "Official adaptation roster module must load");

const entries = roster.list();
const ids = entries.map(entry => entry.id);
assert.equal(new Set(ids).size, ids.length, "Roster IDs must be unique");

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

process.stdout.write("PASS official character roster: " + entries.length + " unique records; Eina Tulle has official adaptation provenance.\n");

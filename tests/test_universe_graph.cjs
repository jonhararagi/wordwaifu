"use strict";
const assert = require("node:assert/strict");

require("../src/official-character-roster.js");
require("../src/character-dossiers.js");
globalThis.WordWaifuCodeGeassLore = require("../src/code-geass-lore.js");
const graph = require("../src/universe-graph.js");
const roster = globalThis.WordWaifuOfficialCharacterRoster;

function testDanmachiRosterAndDossiersFeedTheConnectedGraph() {
  const official = roster.list();
  assert.ok(official.length >= 58, "The explorer must use the current official roster, including post-branch additions.");
  assert.equal(new Set(official.map(item => item.id)).size, official.length, "Roster identities remain unique.");
  const ryu = graph.getEntity("CHAR-RYUU-LION");
  assert.ok(ryu, "Ryu Lion should be connected from the current roster.");
  assert.equal(ryu.name, "Ryu Lion");
  assert.equal(ryu.universe, "DanMachi");
  assert.ok(Array.isArray(ryu.sourceUrls) && ryu.sourceUrls.some(url => url.startsWith("https://")),
    "The Ryu profile must retain its adaptation/dossier source links.");
}

function testDanmachiRelationshipsAndContinuitiesRemainNavigable() {
  const related = new Set(graph.getRelated("CHAR-RYUU-LION").map(item => item.targetId));
  for (const id of ["CHAR-ALISE-LOVELACE", "CHAR-ASTREA", "CHAR-KAGUYA", "CHAR-LYRA", "DM-ORG-ASTREA-FAMILIA"]) {
    assert.ok(related.has(id), "Ryu navigation is missing " + id);
  }
  const family = graph.getEntity("DM-ORG-ASTREA-FAMILIA");
  assert.ok(family);
  const familyLinks = new Set(graph.getRelated("DM-ORG-ASTREA-FAMILIA").map(item => item.targetId));
  assert.ok(familyLinks.has("CHAR-ASTREA"));
  assert.ok(familyLinks.has("DM-EVT-ASTREA-DEPARTURE"));
  const departure = graph.getEntity("DM-EVT-ASTREA-DEPARTURE");
  assert.ok(departure);
  assert.match(departure.description, /Solingen/i);
  assert.ok(graph.getRelated("DM-EVT-ASTREA-DEPARTURE").some(item => item.targetId === "DM-LOC-SOLINGEN"));
  const ryuLinks = graph.getRelated("CHAR-RYUU-LION");
  assert.ok(ryuLinks.some(item => item.continuity === "CONT-AR"));
  assert.ok(ryuLinks.some(item => item.continuity === "CONT-ANIME"));
  assert.equal(ryuLinks.find(item => item.targetId === "DM-ORG-HOSTESS")?.continuity, "CONT-ANIME");
}

function testCodeGeassProfilesAndPowerSystemAreIncluded() {
  const codeGeass = globalThis.WordWaifuCodeGeassLore.list();
  assert.ok(codeGeass.length >= 25, "The Code Geass seed must retain its expanded profiles.");
  assert.ok(graph.search("Lelouch", { universe: "Code Geass" }).some(item => item.id === "CG-CHAR-LELOUCH"));
  assert.ok(graph.getRelated("CG-CHAR-LELOUCH").some(item => item.targetId === "CG-CHAR-CC"));
  assert.ok(graph.getRelated("CG-CONCEPT-GEASS").some(item => item.targetId === "CG-CHAR-LELOUCH"));
  assert.equal(graph.getEntity("CG-EVT-ZERO-REQUIEM")?.spoilerLevel, "major");
  assert.ok(graph.search("corazón", { universe: "Code Geass" }).some(item => item.id === "CG-POWER-ROLO-GEASS"),
    "Search indexes individual power costs and limitations, not only profile titles.");
  const coverage = graph.coverage().find(item => item.universe === "Code Geass");
  assert.ok(coverage && /no es enciclopedia completa/i.test(coverage.status),
    "The explorer must be honest about partial canon coverage.");
}

function testSearchRespectsContinuityAndEveryEdgeHasKnownEndpoints() {
  assert.ok(graph.search("familia", { universe: "DanMachi" }).length > 0);
  assert.ok(graph.search("Geass", { universe: "Code Geass", continuity: "CONT-R2" }).length > 0);
  assert.ok(graph.search("Ryu", { universe: "DanMachi", continuity: "CONT-AR" }).some(item => item.id === "CHAR-RYUU-LION"));
  const entities = new Set(graph.list().map(item => item.id));
  for (const edge of graph.allEdges()) {
    assert.ok(entities.has(edge.from), "Unknown source: " + edge.from);
    assert.ok(entities.has(edge.to), "Unknown target: " + edge.to);
    assert.ok(edge.description && edge.description.length > 5, "Unexplained relationship: " + edge.from + " → " + edge.to);
  }
}

const tests = [
  testDanmachiRosterAndDossiersFeedTheConnectedGraph,
  testDanmachiRelationshipsAndContinuitiesRemainNavigable,
  testCodeGeassProfilesAndPowerSystemAreIncluded,
  testSearchRespectsContinuityAndEveryEdgeHasKnownEndpoints
];
for (const test of tests) {
  test();
  process.stdout.write("PASS " + test.name + "\\n");
}
process.stdout.write("PASS_STATIC: " + tests.length + " connected-universe tests passed.\\n");

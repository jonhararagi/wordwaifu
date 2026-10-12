const assert = require("node:assert/strict");
require("../src/official-character-roster.js");
require("../src/character-dossiers.js");
const graph = require("../src/universe-graph.js");

function testDanmachiRosterIsIncludedAsLinkedEntities() {
  const official = globalThis.WordWaifuOfficialCharacterRoster.list();
  assert.equal(official.length, 58, "The official adaptation register currently has 58 character entries.");
  const ryu = graph.getEntity("CHAR-RYUU-LION");
  assert.ok(ryu);
  assert.equal(ryu.name, "Ryu Lion");
  assert.equal(ryu.universe, "DanMachi");
  assert.ok(ryu.personality.length > 100, "Ryu should use the extended personality dossier when present.");
  assert.ok(ryu.history.length > 150, "The connected profile should expose the existing researched history, not only the short roster synopsis.");
  assert.ok(ryu.relationships.length > 50, "The detailed dossier should expose written relationship context.");
  assert.ok(ryu.sourceUrls.length >= 2, "Dossier sources and official adaptation links should remain visible.");
  assert.ok(ryu.sourceUrl.startsWith("https://"));
}

function testRyuCanBeExploredThroughAliseFamiliaAndAstrea() {
  const related = graph.getRelated("CHAR-RYUU-LION");
  const ids = new Set(related.map(item => item.targetId));
  for (const id of ["CHAR-ALISE-LOVELACE", "CHAR-ASTREA", "CHAR-KAGUYA", "CHAR-LYRA", "DM-ORG-ASTREA-FAMILIA"]) {
    assert.ok(ids.has(id), "Ryu navigation is missing " + id);
  }
  const family = graph.getEntity("DM-ORG-ASTREA-FAMILIA");
  assert.ok(family);
  assert.match(family.notes, /fuente primaria/i);
  const goddessLinks = graph.getRelated("DM-ORG-ASTREA-FAMILIA").map(item => item.targetId);
  assert.ok(goddessLinks.includes("CHAR-ASTREA"));
}

function testAnimeAndAstreaRecordContinuitiesRemainSeparate() {
  const ryuRelations = graph.getRelated("CHAR-RYUU-LION");
  assert.ok(ryuRelations.some(item => item.continuity === "CONT-AR"));
  assert.ok(ryuRelations.some(item => item.continuity === "CONT-ANIME"));
  const hostelEdge = ryuRelations.find(item => item.targetId === "DM-ORG-HOSTESS");
  assert.equal(hostelEdge.continuity, "CONT-ANIME");
}

function testCodeGeassHasAnHonestInitialGraphAndGeassConnections() {
  const lelouch = graph.search("Lelouch", { universe: "Code Geass" });
  assert.ok(lelouch.some(item => item.id === "CG-CHAR-LELOUCH"));
  assert.ok(graph.getRelated("CG-CHAR-LELOUCH").some(item => item.targetId === "CG-CHAR-CC"));
  assert.ok(graph.getRelated("CG-CONCEPT-GEASS").some(item => item.targetId === "CG-CHAR-LELOUCH"));
  assert.equal(graph.getEntity("CG-EVT-ZERO-REQUIEM").spoilerLevel, "major");
  const coverage = graph.coverage();
  assert.ok(coverage.find(item => item.universe === "Code Geass").status.includes("no es enciclopedia completa"));
}

function testSearchAndEveryConnectionHasKnownEndpoints() {
  assert.ok(graph.search("familia", { universe: "DanMachi" }).length > 0);
  for (const edge of graph.allEdges()) {
    assert.ok(graph.getEntity(edge.from), "Unknown source: " + edge.from);
    assert.ok(graph.getEntity(edge.to), "Unknown target: " + edge.to);
    assert.ok(edge.description, "Unexplained relationship: " + edge.from + " → " + edge.to);
  }
}

const tests = [
  testDanmachiRosterIsIncludedAsLinkedEntities,
  testRyuCanBeExploredThroughAliseFamiliaAndAstrea,
  testAnimeAndAstreaRecordContinuitiesRemainSeparate,
  testCodeGeassHasAnHonestInitialGraphAndGeassConnections,
  testSearchAndEveryConnectionHasKnownEndpoints
];
for (const test of tests) {
  test();
  process.stdout.write("PASS " + test.name + "\n");
}
process.stdout.write("PASS_STATIC: " + tests.length + " connected-lore tests passed.\n");

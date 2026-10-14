const assert = require("node:assert/strict");
const catalog = require("../src/power-catalog.js");

function testGeneratorHasVarietyAcrossPowerFamilies() {
  const ideas = catalog.list();
  assert.ok(ideas.length >= 18, "There should be a varied library, not a single power trope.");
  const families = new Set(ideas.map(idea => idea.family));
  for (const required of ["physical", "mental", "sensory", "elemental", "spatial", "pact", "support", "technical", "costly"]) {
    assert.ok(families.has(required), "Missing category: " + required);
  }
}

function testSurpriseModeDoesNotAlwaysGenerateGeassLikePowers() {
  const rare = catalog.generate({ family: "any", random: () => 0.01 });
  const ordinary = catalog.generate({ family: "any", random: () => 0.99 });
  assert.equal(rare.family, "rare-command");
  assert.notEqual(ordinary.family, "rare-command");
  assert.ok(!ordinary.name.toLowerCase().includes("geass"));
  assert.match(rare.inspiration, /no es el Geass/i);
}

function testCandidatesAreOriginalTemplatesAndNotAutomaticallySaved() {
  const candidate = catalog.generate({ family: "support", random: () => 0.5 });
  assert.ok(candidate);
  assert.equal(candidate.sourceType, "original-template");
  assert.ok(candidate.activation && candidate.cost && candidate.limits && candidate.evolution);
  assert.equal(candidate.id, catalog.generate({ family: "support", random: () => 0.5 }).id,
    "Generation is a proposal mechanism; persistence belongs to the workbench.");
}

function testNoUnsupportedFamilyReturnsNoCandidate() {
  assert.equal(catalog.generate({ family: "not-a-real-family", random: () => 0.3 }), null);
}

const tests = [
  testGeneratorHasVarietyAcrossPowerFamilies,
  testSurpriseModeDoesNotAlwaysGenerateGeassLikePowers,
  testCandidatesAreOriginalTemplatesAndNotAutomaticallySaved,
  testNoUnsupportedFamilyReturnsNoCandidate
];
for (const test of tests) {
  test();
  process.stdout.write("PASS " + test.name + "\n");
}
process.stdout.write("PASS_STATIC: " + tests.length + " power-catalog tests passed.\n");

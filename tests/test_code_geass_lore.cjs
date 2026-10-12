const assert = require("node:assert/strict");
const corpus = require("../src/code-geass-lore.js");

function testCodeGeassHasExpandedCanonProfilesNotOnlyNameSeeds() {
  const records = corpus.list();
  assert.ok(records.length >= 25, "The corpus should contain a useful connected foundation, not only 4-5 name entries.");
  const byId = new Map(records.map(record => [record.id, record]));
  for (const id of [
    "CG-CHAR-LELOUCH", "CG-CHAR-CC", "CG-CHAR-SUZAKU", "CG-CHAR-KALLEN",
    "CG-CHAR-NUNNALLY", "CG-CHAR-SHIRLEY", "CG-CHAR-EUPHEMIA", "CG-CHAR-CORNELIA",
    "CG-CHAR-SCHNEIZEL", "CG-CHAR-CHARLES", "CG-CHAR-ROLO", "CG-CHAR-MAO",
    "CG-CHAR-VV", "CG-CHAR-NINA", "CG-CHAR-MARIANNE", "CG-CHAR-JEREMIAH"
  ]) assert.ok(byId.has(id), "Missing profile: " + id);
  const lelouch = byId.get("CG-CHAR-LELOUCH");
  for (const field of ["appearance","history","personality","relationships","conflict","abilities","goals","values","fear","characterArc","knowledgeScope"]) {
    assert.ok(String(lelouch[field] || "").length > 40, "Lelouch profile lacks meaningful " + field);
  }
}

function testEachGeassPowerHasIndividualMechanicsAndCost() {
  const records = new Map(corpus.list().map(record => [record.id, record]));
  const expected = [
    "CG-POWER-LELOUCH-GEASS", "CG-POWER-ROLO-GEASS", "CG-POWER-MAO-GEASS",
    "CG-POWER-CHARLES-GEASS", "CG-CONCEPT-CODE"
  ];
  for (const id of expected) {
    const power = records.get(id);
    assert.ok(power, "Missing distinct power record: " + id);
    for (const field of ["activation","cost","limits","consequences","sourceUrl"]) {
      assert.ok(String(power[field] || "").length > 10, id + " must specify " + field);
    }
    assert.ok(String(power.continuity || "").length >= 3, id + " must declare a continuity");
    assert.ok(power.sourceUrl.startsWith("https://"));
  }
  assert.match(records.get("CG-POWER-ROLO-GEASS").cost, /coraz[oó]n/i);
  assert.match(records.get("CG-POWER-MAO-GEASS").limits, /recuerdos|pasados/i);
  assert.match(records.get("CG-POWER-LELOUCH-GEASS").limits, /omnisciente|imposibles/i);
}

function testCodeGeassRelationsAreNavigableAndSourced() {
  const records = new Set(corpus.list().map(record => record.id));
  const links = corpus.edges();
  assert.ok(links.length >= 35, "The relationship graph must cover important people, powers, factions and events.");
  for (const link of links) {
    assert.ok(records.has(link.from), "Unknown relation source: " + link.from);
    assert.ok(records.has(link.to), "Unknown relation target: " + link.to);
    assert.ok(link.description && link.description.length > 25);
    assert.ok(link.sourceTitle && link.sourceTitle.length > 5);
    assert.ok(link.sourceUrl && link.sourceUrl.startsWith("https://"));
    assert.equal(link.sourceQuality, "official-adaptation");
  }
  const lelo = links.filter(link => link.from === "CG-CHAR-LELOUCH").map(link => link.to);
  for (const id of ["CG-CHAR-SUZAKU","CG-CHAR-KALLEN","CG-CHAR-NUNNALLY","CG-CHAR-SHIRLEY","CG-CHAR-EUPHEMIA","CG-CHAR-SCHNEIZEL","CG-POWER-LELOUCH-GEASS","CG-EVT-ZERO-REQUIEM"]) {
    assert.ok(lelo.includes(id), "Lelouch path does not lead to " + id);
  }
}

function testKnowledgeAndContinuityAreExplicitForSpoilerSensitiveProfiles() {
  const records = new Map(corpus.list().map(record => [record.id, record]));
  for (const id of ["CG-CHAR-LELOUCH","CG-CHAR-NUNNALLY","CG-CHAR-SHIRLEY","CG-CHAR-MARIANNE"]) {
    assert.ok(records.get(id).knowledgeScope.length > 50, "Need staged knowledge rules for " + id);
    assert.ok(records.get(id).spoilerLevel === "major");
  }
  assert.match(records.get("CG-CHAR-LELOUCH").notes, /Re;surrection/);
  assert.match(records.get("CG-EVT-ZERO-REQUIEM").notes, /continuidad|R2/i);
}

const tests = [
  testCodeGeassHasExpandedCanonProfilesNotOnlyNameSeeds,
  testEachGeassPowerHasIndividualMechanicsAndCost,
  testCodeGeassRelationsAreNavigableAndSourced,
  testKnowledgeAndContinuityAreExplicitForSpoilerSensitiveProfiles
];
for (const test of tests) {
  test();
  process.stdout.write("PASS " + test.name + "\n");
}
process.stdout.write("PASS_STATIC: " + tests.length + " Code Geass corpus tests passed.\n");

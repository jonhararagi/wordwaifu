const assert = require("node:assert/strict");
const { validateAndNormalizeProject } = require("../src/project-schema.js");

function validProject() {
  return {
    schemaVersion: 1,
    project: { id: "project-demo", name: "Demo narrativo", description: "" },
    locations: [{
      id: "loc-a",
      name: "Ciudad A",
      type: "Ciudad",
      parentId: null,
      description: "Lugar de prueba.",
      tags: ["Capital"],
      characters: ["char-a"],
      events: ["event-a"],
      marker: [200, 150]
    }],
    characters: [{
      id: "char-a",
      name: "Mira",
      age: 24,
      species: "Humana",
      role: "Cartógrafa",
      personality: ["Curiosa"],
      description: "Personaje de prueba.",
      motivation: "Explorar.",
      flaw: "Impulsiva.",
      locationHistory: [{ locationId: "loc-a", from: "chapter1", to: "now" }],
      relationships: [],
      status: "canon"
    }],
    events: [{
      id: "event-a",
      title: "Llegada",
      position: "chapter1",
      description: "La protagonista llega.",
      locationIds: ["loc-a"],
      characterIds: ["char-a"]
    }]
  };
}

function testValidProjectNormalizesOptionalFields() {
  const result = validateAndNormalizeProject(validProject());
  assert.equal(result.valid, true, result.errors.join("\n"));
  assert.deepEqual(result.project.stories, []);
  assert.deepEqual(result.project.settings, { time: "now" });
  assert.deepEqual(result.project.locations[0].marker, [200, 150]);
}

function testMissingOptionalFieldsReceiveSafeDefaults() {
  const input = validProject();
  delete input.locations[0].marker;
  delete input.locations[0].tags;
  delete input.characters[0].personality;
  delete input.characters[0].age;
  delete input.events[0].position;
  const result = validateAndNormalizeProject(input);
  assert.equal(result.valid, true, result.errors.join("\n"));
  assert.deepEqual(result.project.locations[0].marker, [450, 300]);
  assert.deepEqual(result.project.locations[0].tags, []);
  assert.deepEqual(result.project.characters[0].personality, []);
  assert.equal(result.project.characters[0].age, null);
  assert.equal(result.project.events[0].position, "unknown");
}

function testRejectsDuplicateIdsAcrossEntityTypes() {
  const input = validProject();
  input.characters[0].id = input.locations[0].id;
  const result = validateAndNormalizeProject(input);
  assert.equal(result.valid, false);
  assert.match(result.errors.join("\n"), /ID duplicado/);
}

function testRejectsDanglingLocationHistory() {
  const input = validProject();
  input.characters[0].locationHistory[0].locationId = "loc-missing";
  const result = validateAndNormalizeProject(input);
  assert.equal(result.valid, false);
  assert.match(result.errors.join("\n"), /locationHistory.*lugar inexistente/);
}

function testRejectsDanglingRelationshipsAndEvents() {
  const brokenRelation = validProject();
  brokenRelation.characters[0].relationships = ["char-missing"];
  const relationResult = validateAndNormalizeProject(brokenRelation);
  assert.equal(relationResult.valid, false);
  assert.match(relationResult.errors.join("\n"), /relationships referencia un personaje inexistente/);

  const brokenEvent = validProject();
  brokenEvent.events[0].locationIds = ["loc-missing"];
  const eventResult = validateAndNormalizeProject(brokenEvent);
  assert.equal(eventResult.valid, false);
  assert.match(eventResult.errors.join("\n"), /locationIds referencia un lugar inexistente/);
}

function testRejectsLocationHierarchyCycles() {
  const input = validProject();
  input.locations.push({
    id: "loc-b", name: "Distrito B", type: "Distrito", parentId: "loc-a",
    tags: [], characters: [], events: [], marker: [300, 250]
  });
  input.locations[0].parentId = "loc-b";
  const result = validateAndNormalizeProject(input);
  assert.equal(result.valid, false);
  assert.match(result.errors.join("\n"), /jerarquía de lugares contiene un ciclo/);
}

function testMalformedArraysFailWithoutThrowing() {
  const input = validProject();
  input.locations[0].characters = { not: "a list" };
  const result = validateAndNormalizeProject(input);
  assert.equal(result.valid, false);
  assert.match(result.errors.join("\n"), /characters debe ser una lista de textos/);
}

function testRejectsUnsupportedSchemaAndInvalidMarkers() {
  const wrongVersion = validProject();
  wrongVersion.schemaVersion = 99;
  assert.equal(validateAndNormalizeProject(wrongVersion).valid, false);

  const wrongMarker = validProject();
  wrongMarker.locations[0].marker = ["left", 150];
  const markerResult = validateAndNormalizeProject(wrongMarker);
  assert.equal(markerResult.valid, false);
  assert.match(markerResult.errors.join("\n"), /marker debe contener dos coordenadas numéricas/);
}

const tests = [
  testValidProjectNormalizesOptionalFields,
  testMissingOptionalFieldsReceiveSafeDefaults,
  testRejectsDuplicateIdsAcrossEntityTypes,
  testRejectsDanglingLocationHistory,
  testRejectsDanglingRelationshipsAndEvents,
  testRejectsLocationHierarchyCycles,
  testMalformedArraysFailWithoutThrowing,
  testRejectsUnsupportedSchemaAndInvalidMarkers
];

for (const test of tests) {
  test();
  process.stdout.write("PASS " + test.name + "\n");
}
process.stdout.write("PASS_STATIC: " + tests.length + " project-schema tests passed.\n");

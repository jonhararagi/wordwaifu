const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");

const file = path.join(__dirname, "..", "data", "catalog", "mythic-arsenal.json");
const catalog = JSON.parse(fs.readFileSync(file, "utf8"));
assert.equal(catalog.schemaVersion, 1);
assert.ok(Array.isArray(catalog.entities) && catalog.entities.length >= 25, "catalog must contain a meaningful starter collection");
const ids = catalog.entities.map(entity => entity.id);
assert.equal(new Set(ids).size, ids.length, "entity IDs must be unique");
const byId = new Map(catalog.entities.map(entity => [entity.id, entity]));
for (const entity of catalog.entities) {
  for (const key of ["id", "name", "kind", "tradition", "region", "status", "summary"]) {
    assert.ok(typeof entity[key] === "string" && entity[key].trim(), entity.id + " missing " + key);
  }
  for (const relation of entity.relations || []) {
    assert.ok(byId.has(relation.targetId), entity.id + " has broken relation target " + relation.targetId);
  }
}
for (const deck of catalog.starterDecks || []) {
  for (const id of deck.entityIds) assert.ok(byId.has(id), deck.id + " references missing entity " + id);
}
for (const required of ["LAT-GUA-POMBERO", "LAT-MAP-PILLAN", "LAT-MEX-QUETZALCOATL", "WEAPON-MACUAHUITL", "SYS-CARD-PACT", "SYS-CARD-AVATAR"]) {
  assert.ok(byId.has(required), "catalog is missing expected entry " + required);
}
console.log("Mythic catalog validation passed: " + catalog.entities.length + " entities, " + (catalog.starterDecks || []).length + " starter decks.");

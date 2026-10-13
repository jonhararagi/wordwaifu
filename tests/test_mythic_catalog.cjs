const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");

const file = path.join(__dirname, "..", "data", "catalog", "mythic-arsenal.json");
const catalog = JSON.parse(fs.readFileSync(file, "utf8"));
assert.equal(catalog.schemaVersion, 1);
assert.ok(Array.isArray(catalog.entities) && catalog.entities.length >= 60, "catalog must contain at least 60 meaningful records");
const ids = catalog.entities.map(entity => entity.id);
assert.equal(new Set(ids).size, ids.length, "entity IDs must be unique");
const byId = new Map(catalog.entities.map(entity => [entity.id, entity]));
const sourceIds = new Set((catalog.sources || []).map(source => source.id));
const americanCount = catalog.entities.filter(entity => (entity.tags || []).some(tag => ["americano", "latinoamericano"].includes(tag))).length;
assert.ok(americanCount >= 20, "catalog must contain at least 20 American/Latin American entries");
assert.ok(catalog.entities.some(entity => entity.kind === "deity") && catalog.entities.some(entity => entity.kind === "folklore_entity") && catalog.entities.some(entity => entity.kind.includes("weapon") || entity.kind === "sacred_relic"), "catalog must cover figures, folklore, and objects");
for (const entity of catalog.entities) {
  for (const key of ["id", "name", "kind", "tradition", "region", "status", "summary"]) {
    assert.ok(typeof entity[key] === "string" && entity[key].trim(), entity.id + " missing " + key);
  }
  for (const sourceId of entity.sourceIds || []) assert.ok(sourceIds.has(sourceId), entity.id + " references missing source " + sourceId);
  if (!["original", "creative_adaptation"].includes(entity.status)) assert.ok((entity.sourceIds || []).length > 0, entity.id + " lacks source references");
  for (const figureId of entity.artifactProfile?.associatedFigureIds || []) assert.ok(byId.has(figureId), entity.id + " artifact profile references missing figure " + figureId);
  for (const relation of entity.relations || []) assert.ok(byId.has(relation.targetId), entity.id + " has broken relation target " + relation.targetId);
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
console.log("Mythic catalog validation passed: " + catalog.entities.length + " entities (" + americanCount + " American/Latin American), " + (catalog.starterDecks || []).length + " starter decks.");

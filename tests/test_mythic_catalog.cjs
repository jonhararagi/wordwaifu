const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");

const file = path.join(__dirname, "..", "data", "catalog", "mythic-arsenal.json");
const catalog = JSON.parse(fs.readFileSync(file, "utf8"));
const ui = fs.readFileSync(path.join(__dirname, "..", "index.html"), "utf8");
const catalogModule = fs.readFileSync(path.join(__dirname, "..", "src", "mythic-catalog.js"), "utf8");
const app = fs.readFileSync(path.join(__dirname, "..", "src", "app.js"), "utf8");
assert.equal(catalog.schemaVersion, 1);
assert.ok(Array.isArray(catalog.entities) && catalog.entities.length >= 60, "catalog must contain at least 60 meaningful records");
const ids = catalog.entities.map(entity => entity.id);
assert.equal(new Set(ids).size, ids.length, "entity IDs must be unique");
assert.equal(new Set((catalog.sources || []).map(source => source.id)).size, (catalog.sources || []).length, "source IDs must be unique");
for (const source of catalog.sources || []) {
  assert.ok(source.url.startsWith("https://"), source.id + " must use HTTPS");
  assert.ok(typeof source.title === "string" && source.title.trim(), source.id + " must have a title");
  assert.ok(typeof source.use === "string" && source.use.trim(), source.id + " must explain source scope");
}
const byId = new Map(catalog.entities.map(entity => [entity.id, entity]));
const sourceIds = new Set((catalog.sources || []).map(source => source.id));
const americanCount = catalog.entities.filter(entity => (entity.tags || []).some(tag => ["americano", "latinoamericano"].includes(tag))).length;
assert.ok(americanCount >= 20, "catalog must contain at least 20 American/Latin American entries");
assert.ok(catalog.entities.some(entity => entity.kind === "deity") && catalog.entities.some(entity => entity.kind === "folklore_entity") && catalog.entities.some(entity => entity.kind.includes("weapon") || entity.kind === "sacred_relic"), "catalog must cover figures, folklore, and objects");
for (const entity of catalog.entities) {
  for (const key of ["id", "name", "kind", "tradition", "region", "status", "summary", "confidence"]) {
    assert.ok(typeof entity[key] === "string" && entity[key].trim(), entity.id + " missing " + key);
  }
  assert.ok(Array.isArray(entity.aliases) && Array.isArray(entity.attributes) && Array.isArray(entity.domains), entity.id + " missing searchable structured metadata");
  for (const sourceId of entity.sourceIds || []) assert.ok(sourceIds.has(sourceId), entity.id + " references missing source " + sourceId);
  if (!["original", "creative_adaptation"].includes(entity.status)) assert.ok((entity.sourceIds || []).length > 0, entity.id + " lacks source references");
  for (const figureId of entity.artifactProfile?.associatedFigureIds || []) assert.ok(byId.has(figureId), entity.id + " artifact profile references missing figure " + figureId);
  for (const relation of entity.relations || []) assert.ok(byId.has(relation.targetId), entity.id + " has broken relation target " + relation.targetId);
  for (const relation of entity.relations || []) {
    assert.ok(byId.has(relation.targetId), entity.id + " has broken relation target " + relation.targetId);
  }
}
for (const entity of catalog.entities) {
  for (const relation of entity.relations || []) {
    assert.ok(typeof relation.type === "string" && relation.type.trim(), entity.id + " relation must identify its meaning");
  }
  if (entity.artifactProfile) {
    for (const key of ["objectCategory", "documentedCapabilities", "useConditions", "costsAndLimits", "risks", "adaptationMechanics"]) {
      assert.ok(entity.artifactProfile[key] !== undefined && entity.artifactProfile[key] !== null, entity.id + " artifact profile missing " + key);
    }
  }
}
assert.ok(ui.includes('id="mythic-sort"'), "catalog must expose sorting");
assert.ok(catalogModule.includes("data-catalog-back"), "catalog must offer back navigation");
assert.ok(catalogModule.includes("source.use"), "source scope must be visible in the detail");
assert.ok(app.includes("wordwaifu:mythic-relation-save"), "project-owned relations must be saved");
assert.ok(app.includes("wordwaifu:mythic-proposal-save"), "proposals must use project persistence");
assert.ok(app.includes("mythicEntityIds"), "created characters must retain mythic reference IDs");
for (const deck of catalog.starterDecks || []) {
  for (const id of deck.entityIds) assert.ok(byId.has(id), deck.id + " references missing entity " + id);
}
for (const required of ["LAT-GUA-POMBERO", "LAT-MAP-PILLAN", "LAT-MEX-QUETZALCOATL", "WEAPON-MACUAHUITL", "SYS-CARD-PACT", "SYS-CARD-AVATAR"]) {
  assert.ok(byId.has(required), "catalog is missing expected entry " + required);
}
console.log("Mythic catalog validation passed: " + catalog.entities.length + " entities (" + americanCount + " American/Latin American), " + (catalog.starterDecks || []).length + " starter decks.");

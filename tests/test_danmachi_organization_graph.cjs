"use strict";
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const root = path.join(__dirname, "..");
const lore = path.join(root, "lore", "danmachi");
const catalog = JSON.parse(fs.readFileSync(path.join(lore, "catalog.json"), "utf8"));
const records = new Map(catalog.records.map(r => [r.id, r]));
const research = fs.readFileSync(path.join(lore, "research", "inbox", "BATCH-DM-006-oficial-roster-y-retratos.md"), "utf8");
const claimIds = new Set([...research.matchAll(/^### (DMR-006-CLM-\d{3}) · /gm)].map(m => m[1]));
const edgeIds = new Set();
for (const edge of catalog.relationships) {
  assert.ok(!edgeIds.has(edge.id), "Duplicate relation ID: " + edge.id);
  edgeIds.add(edge.id);
  assert.ok(records.has(edge.from), "Unknown source endpoint: " + edge.id);
  assert.ok(records.has(edge.to), "Unknown target endpoint: " + edge.id);
}
for (const id of ["ORG-GUILD", "ORG-HOSTESS"]) {
  const record = records.get(id);
  assert.ok(record, "Missing organization: " + id);
  assert.equal(record.type, "organization");
  assert.ok(fs.existsSync(path.join(lore, record.path)), "Missing organization file: " + record.path);
  assert.ok(catalog.relationships.some(edge => edge.from === id || edge.to === id));
}
assert.notEqual(records.get("ORG-GUILD").id, "DM-GUILD-001");
const legacyGuildGuide = records.get("DM-GUILD-001");
assert.ok(legacyGuildGuide, "Keep the historical Dungeon/Guild overview ID stable.");
assert.equal(legacyGuildGuide.type, "setting", "The legacy overview must not be typed as either a Guild organization or a physical location.");
assert.ok(fs.readFileSync(path.join(lore, legacyGuildGuide.path), "utf8").toLocaleLowerCase("es").includes("no representa una ubicación física"), "The legacy overview must explain its conceptual-only role.");
assert.ok(!catalog.relationships.some(edge => edge.from === "DM-GUILD-001" || edge.to === "DM-GUILD-001"), "Graph edges must use ORG-GUILD, not the legacy mixed overview.");
assert.ok(catalog.relationships.some(edge => edge.id === "REL-PANTHEON-GUILD-HEADQUARTERS-SECONDARY" && edge.from === "LOC-PANTHEON" && edge.to === "ORG-GUILD" && edge.evidenceStatus === "secondary_checked"), "Pantheon must point to the organization only as a secondary lead.");
assert.ok(!records.has("LOC-GUILD"), "Do not invent a physical Guild location while Pantheon/Babel identity is unresolved.");
assert.equal(records.get("LOC-HOSTESS").type, "location");
assert.ok(catalog.relationships.some(edge => edge.from === "ORG-HOSTESS" && edge.to === "LOC-HOSTESS" && edge.kind === "located_at"));
for (const [from,to] of [
  ["CHAR-OURANOS","ORG-GUILD"], ["DM-CHAR-EINA","ORG-GUILD"], ["CHAR-FELS","ORG-GUILD"],
  ["CHAR-MIA-GRAND","ORG-HOSTESS"], ["CHAR-SYR-FLOVA","ORG-HOSTESS"], ["CHAR-RYUU-LION","ORG-HOSTESS"],
  ["CHAR-ANYA-FROMEL","ORG-HOSTESS"], ["CHAR-CHLOE-ROLO","ORG-HOSTESS"], ["CHAR-LUNOIRE-FAUST","ORG-HOSTESS"]
]) {
  const edge = catalog.relationships.find(edge => edge.from === from && edge.to === to && edge.claimPath.endsWith("BATCH-DM-006-oficial-roster-y-retratos.md"));
  assert.ok(edge, "Missing relationship " + from + " -> " + to);
  assert.equal(edge.continuity, "CONT-ANIME");
  assert.equal(edge.evidenceStatus, "source_checked");
  assert.ok(claimIds.has(edge.claimRef));
  assert.ok(edge.claimPath.endsWith("BATCH-DM-006-oficial-roster-y-retratos.md"));
}
process.stdout.write("PASS DanMachi org graph: Guild/Hostess are distinct from locations and have sourced relationships.\n");

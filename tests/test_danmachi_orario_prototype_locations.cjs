"use strict";
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const root = path.resolve(__dirname, "..");
const loreRoot = path.join(root, "lore", "danmachi");
const catalog = JSON.parse(fs.readFileSync(path.join(loreRoot, "catalog.json"), "utf8"));
const records = new Map(catalog.records.map(record => [record.id, record]));
const doc039 = catalog.documents.find(doc => doc.document_id === "DOC-DANMACHI-RESEARCH-039");
assert.ok(doc039, "DANMACHI-RESEARCH-039 must be registered.");
assert.equal(doc039.path, "research/inbox/DANMACHI-RESEARCH-039-orario-prototype-location-inventory.md");
assert.ok(fs.existsSync(path.join(loreRoot, doc039.path)), "Research inventory must exist.");
assert.ok(catalog.documents.some(doc => doc.document_id === "DOC-DANMACHI-RESEARCH-038" && /dark-era-and-hiryute-sisters/.test(doc.path)), "DMR-038 must remain the Dark Era and Hiryute package.");
const inventory = fs.readFileSync(path.join(loreRoot, doc039.path), "utf8");
assert.ok(inventory.includes("DANMACHI-RESEARCH-034"), "Inventory must point to source claims.");
const source = fs.readFileSync(path.join(loreRoot, "research/inbox/DANMACHI-RESEARCH-034-orario-prototype-streets-commerce-babel.md"), "utf8");
const claims = new Set([...source.matchAll(/^### (DMR-034-CLM-\d{3}) · /gm)].map(match => match[1]));
const corpus = require("../src/lore-corpus.js");
assert.ok(corpus.getDefaultResearchPaths().includes(doc039.path), "DMR-039 must be retrievable by default.");
const expected = [
  ["LOC-ORARIO-AVENUES-PROTOTYPE", "DMR-034-CLM-002", "REL-ORARIO-PROTOTYPE-LOC-ORARIO-AVENUES-PROTOTYPE"],
  ["LOC-ORARIO-CENTRAL-PARK-PROTOTYPE", "DMR-034-CLM-003", "REL-ORARIO-PROTOTYPE-LOC-ORARIO-CENTRAL-PARK-PROTOTYPE"],
  ["LOC-ORARIO-COMMERCIAL-STREETS-PROTOTYPE", "DMR-034-CLM-004", "REL-ORARIO-PROTOTYPE-LOC-ORARIO-COMMERCIAL-STREETS-PROTOTYPE"]
];
for (const [id, claimId, edgeId] of expected) {
  const record = records.get(id);
  assert.ok(record, "Missing Prototype location: " + id);
  assert.equal(record.type, "location", id + " must be a location.");
  assert.equal(record.status, "source_checked_partial", id + " must remain partially verified.");
  assert.ok(record.path && record.path.startsWith("places/"), id + " needs a Markdown route.");
  const markdown = fs.readFileSync(path.join(loreRoot, record.path), "utf8");
  assert.match(markdown, new RegExp("^id:\\s*" + id + "\\s*$", "m"), id + " frontmatter ID mismatch.");
  assert.match(markdown, /continuity_scope: CONT-PROTOTYPE/, id + " must stay in CONT-PROTOTYPE.");
  assert.ok(claims.has(claimId) && markdown.includes(claimId), id + " must cite its existing DMR-034 claim.");
  const edge = catalog.relationships.find(item => item.id === edgeId);
  assert.ok(edge, "Missing city navigation edge: " + edgeId);
  assert.equal(edge.from, id);
  assert.equal(edge.to, "LOC-ORARIO");
  assert.equal(edge.continuity, "CONT-PROTOTYPE");
  assert.equal(edge.evidenceStatus, "source_checked", "The edge records its claim status; it need not equal the aggregate fiche status.");
  assert.equal(edge.claimRef, claimId);
  assert.ok(!catalog.relationships.some(item => item.from === id && item.to === "LOC-ORARIO" && item.continuity === "CONT-MAIN-LN"), "Prototype node must not leak into main novel continuity.");
  assert.ok(corpus.getDefaultDetailIds().includes(id), id + " must be available to detail retrieval.");
}
assert.equal(new Set(catalog.records.map(record => record.id)).size, catalog.records.length, "Catalog record IDs must remain unique.");
assert.equal(new Set(catalog.relationships.map(edge => edge.id)).size, catalog.relationships.length, "Relationship IDs must remain unique.");
for (const edge of catalog.relationships) {
  assert.ok(records.has(edge.from), "Dangling origin: " + edge.id);
  assert.ok(records.has(edge.to), "Dangling target: " + edge.id);
}
process.stdout.write("PASS DanMachi Orario inventory: source claims, search routes, and continuity boundaries verified.\n");

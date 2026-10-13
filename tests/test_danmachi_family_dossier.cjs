const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
const lore = path.join(root, "lore/danmachi");
const dossierPath = path.join(lore, "familias/hestia-familia.md");
const sourcePath = path.join(lore, "sources/00-registro-fuentes.md");
const researchPath = path.join(lore, "research/inbox/DANMACHI-RESEARCH-010-hestia-familia-dossier.md");
const catalogPath = path.join(lore, "catalog.json");
const dossier = fs.readFileSync(dossierPath, "utf8");
const sourceRegister = fs.readFileSync(sourcePath, "utf8");
const research = fs.readFileSync(researchPath, "utf8");
const catalog = JSON.parse(fs.readFileSync(catalogPath, "utf8"));

assert.ok(dossier.length >= 6000, "Hestia Familia dossier must be substantial enough for writing scenes.");
assert.ok(dossier.includes("## Snapshot de integrantes · CONT-ANIME"), "Dossier must preserve its anime snapshot continuity.");
assert.ok(dossier.includes("## Información aún no establecida"), "Dossier must explicitly preserve unknowns.");
assert.ok(dossier.includes("CONT-MAIN-LN") && dossier.includes("CONT-ANIME"), "Dossier must distinguish novel and anime continuity.");
assert.ok(dossier.includes("DMR-004-SRC-001") && dossier.includes("DMR-004-SRC-002"), "Dossier must identify both sources.");
assert.ok(/https:\/\/danmachi\.com\/danmachi4\/character/.test(sourceRegister), "Official DanMachi IV profile URL must be registered.");
assert.ok(/https:\/\/danmachi\.com\/danmachi\/story\/episode1\.html/.test(sourceRegister), "Official episode 1 synopsis URL must be registered.");

const sourceIds = new Set([...sourceRegister.matchAll(/source_id:\s*(DMR-\d+-SRC-\d+)/g)].map(match => match[1]));
for (const match of dossier.matchAll(/^\s*-\s+(DMR-\d+-SRC-\d+)\s*$/gm)) {
  assert.ok(sourceIds.has(match[1]), "Unregistered source reference: " + match[1]);
}

for (const id of ["DMR-004-CLM-001", "DMR-004-CLM-002", "DMR-004-CLM-003", "DMR-004-CLM-004", "DMR-004-CLM-005", "DMR-004-CLM-006"]) {
  assert.ok(research.includes("### " + id), "Missing claim definition: " + id);
  assert.ok(dossier.includes(id), "Dossier does not reference claim: " + id);
}

const catalogEntry = catalog.documents.find(entry => entry.document_id === "RESEARCH-DM-010");
assert.ok(catalogEntry, "Research batch must be indexed in catalog.json.");
assert.equal(catalogEntry.path, "research/inbox/DANMACHI-RESEARCH-010-hestia-familia-dossier.md");
assert.ok(fs.existsSync(path.join(lore, catalogEntry.path)), "Catalogued research batch must exist.");


const lokiPath = path.join(lore, "familias/loki-familia.md");
const lokiResearchPath = path.join(lore, "research/inbox/DANMACHI-RESEARCH-011-loki-familia-dossier.md");
const loki = fs.readFileSync(lokiPath, "utf8");
const lokiResearch = fs.readFileSync(lokiResearchPath, "utf8");
assert.ok(loki.length >= 6000, "Loki Familia dossier must be substantial enough for writing scenes.");
assert.ok(loki.includes("CONT-SO") && loki.includes("CONT-MAIN-LN"), "Loki dossier must separate Sword Oratoria and main novel continuity.");
assert.ok(loki.includes("## Datos aún sin verificar"), "Loki dossier must preserve unknowns.");
assert.ok(loki.includes("DMR-005-SRC-001"), "Loki dossier must cite its registered official source.");
for (const id of ["DMR-005-CLM-001", "DMR-005-CLM-002", "DMR-005-CLM-003", "DMR-005-CLM-004", "DMR-005-CLM-005", "DMR-005-CLM-006", "DMR-005-CLM-007", "DMR-005-CLM-008"]) {
  assert.ok(lokiResearch.includes("### " + id), "Missing Loki claim definition: " + id);
  assert.ok(loki.includes(id), "Loki dossier does not reference claim: " + id);
}
const lokiCatalogEntry = catalog.documents.find(entry => entry.document_id === "RESEARCH-DM-011");
assert.ok(lokiCatalogEntry, "Loki research batch must be indexed in catalog.json.");
assert.equal(lokiCatalogEntry.path, "research/inbox/DANMACHI-RESEARCH-011-loki-familia-dossier.md");
assert.ok(fs.existsSync(path.join(lore, lokiCatalogEntry.path)), "Catalogued Loki research batch must exist.");

process.stdout.write("PASS DanMachi Hestia and Loki Familia dossiers: substantive content, source IDs, claim IDs, continuity labels and catalog entry verified.\n");

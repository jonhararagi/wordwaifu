"use strict";
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const root = path.resolve(__dirname, "..");
const loreRoot = path.join(root, "lore", "danmachi");
const catalog = JSON.parse(fs.readFileSync(path.join(loreRoot, "catalog.json"), "utf8"));
const researchPath = "research/inbox/DANMACHI-RESEARCH-040-publication-horizon-2026-10.md";
const document = catalog.documents.find(item => item.document_id === "DOC-DANMACHI-RESEARCH-040");
assert.ok(document, "Publication horizon document must be registered.");
assert.equal(document.path, researchPath);
assert.ok(fs.existsSync(path.join(loreRoot, researchPath)), "Publication horizon note must exist.");
assert.ok(catalog.documents.some(item => item.document_id === "DOC-DANMACHI-RESEARCH-039"), "DMR-039 Orario inventory must remain registered.");
assert.ok(catalog.documents.some(item => item.document_id === "DOC-DANMACHI-RESEARCH-038" && /dark-era-and-hiryute-sisters/.test(item.path)), "DMR-038 must remain the Dark Era/Hiryute package.");
const note = fs.readFileSync(path.join(loreRoot, researchPath), "utf8");
assert.match(note, /Fecha de corte:\*{2}\s*2026-10-21/);
for (const [id, date, status] of [
  ["DMR-040-SRC-001", "2025-10-15", "publicado"],
  ["DMR-040-SRC-002", "2026-12-15", "Futuro / no publicado"],
  ["DMR-040-SRC-003", "2027-01-15", "Futuro / no publicado"],
  ["DMR-040-SRC-004", "2027-02-15", "Futuro / no publicado"],
  ["DMR-040-SRC-005", "2026-05-15", "Publicado"]
]) {
  assert.ok(note.includes(id), "Missing source register ref " + id);
  assert.ok(note.includes(date), "Missing date " + date);
  assert.ok(note.toLowerCase().includes(status.toLowerCase()), "Missing publication status " + status);
}
assert.match(note, /No crear acontecimientos, participantes, relaciones, habilidades, estados de personajes ni desenlace de vol\. 22/);
assert.match(note, /Haze.*Heith|Heith.*Haze/s, "Potential transliteration alias must be audited before creating a duplicate.");
const corpus = require("../src/lore-corpus.js");
assert.ok(corpus.getDefaultResearchPaths().includes(researchPath), "DMR-040 must be retrievable through default lore search.");
const directory = corpus.getOnlineSourceDirectory();
for (const id of [
  "official-ga-main-v21",
  "official-ga-main-v22-upcoming",
  "official-ga-sword-oratoria-v17-upcoming",
  "official-ga-family-chronicle-amid-upcoming",
  "official-ga-family-chronicle-haze",
  "official-ga-danmachi-release-horizon"
]) assert.ok(directory.some(source => source.id === id), "Missing online source directory item " + id);
const sourceRegistry = fs.readFileSync(path.join(loreRoot, "sources", "00-registro-fuentes.md"), "utf8");
for (let i=1;i<=6;i++) {
  const id = "DMR-040-SRC-" + String(i).padStart(3,"0");
  assert.ok(sourceRegistry.includes("source_id: " + id), "Missing master source registry entry " + id);
}
process.stdout.write("PASS DanMachi publication horizon: release metadata is indexed, date-bounded, and not promoted to future canon.\n");

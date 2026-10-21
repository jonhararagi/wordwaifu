#!/usr/bin/env node
/**
 * Validates the cross-file DanMachi character contract and generated status metrics.
 * Run: node scripts/sync-danmachi-status.mjs --check
 * Regenerate only the marked block in docs/STATUS.md: --write
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { createRequire } from "node:module";

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(scriptDir, "..");
const loreRoot = path.join(root, "lore", "danmachi");
const catalogPath = path.join(loreRoot, "catalog.json");
const statusPath = path.join(root, "docs", "STATUS.md");
const require = createRequire(import.meta.url);
const args = new Set(process.argv.slice(2));
const writeMode = args.has("--write");
const errors = [];
const fail = message => errors.push(message);
const isObject = value => value !== null && typeof value === "object" && !Array.isArray(value);

if ([...args].some(arg => !["--write", "--check"].includes(arg)) || (args.has("--write") && args.has("--check"))) {
  console.error("Uso: node scripts/sync-danmachi-status.mjs [--check | --write]");
  process.exit(2);
}
if (!fs.existsSync(catalogPath)) {
  console.error("No se encontró lore/danmachi/catalog.json.");
  process.exit(2);
}

let catalog;
try { catalog = JSON.parse(fs.readFileSync(catalogPath, "utf8")); }
catch (error) {
  console.error("catalog.json no es JSON válido: " + error.message);
  process.exit(2);
}
for (const key of ["records", "reservedIds", "documents", "relationships"]) {
  if (!Array.isArray(catalog[key])) fail("catalog.json: " + key + " debe ser una lista.");
}
if (errors.length) {
  console.error(errors.join("\n"));
  process.exit(1);
}

require("../src/official-character-roster.js");
require("../src/character-dossiers.js");
const rosterApi = globalThis.WordWaifuOfficialCharacterRoster;
const dossierApi = globalThis.WordWaifuCharacterDossiers;
if (!rosterApi || typeof rosterApi.list !== "function") fail("No se pudo cargar el roster oficial.");
if (!dossierApi || typeof dossierApi.list !== "function" || typeof dossierApi.get !== "function") fail("No se pudo cargar el registro de expedientes.");
if (errors.length) {
  console.error(errors.join("\n"));
  process.exit(1);
}
const roster = rosterApi.list();
const dossiers = dossierApi.list();
const recordIds = catalog.records.map(item => item && item.id).filter(id => typeof id === "string");
const recordById = new Map(catalog.records.map(item => [item.id, item]));
const dossierById = new Map(dossiers.map(item => [item.id, item]));
const duplicate = values => {
  const seen = new Set();
  const repeated = new Set();
  for (const value of values) {
    if (seen.has(value)) repeated.add(value);
    seen.add(value);
  }
  return [...repeated];
};
for (const id of duplicate(recordIds)) fail("ID de registro duplicado: " + id);
for (const id of duplicate(catalog.relationships.map(edge => edge && edge.id).filter(Boolean))) fail("ID de relación duplicado: " + id);
for (const id of duplicate(roster.map(person => person && person.id).filter(Boolean))) fail("ID del roster duplicado: " + id);
for (const id of duplicate(dossiers.map(person => person && person.id).filter(Boolean))) fail("ID de expediente duplicado: " + id);

const reservedIds = catalog.reservedIds.map(item => typeof item === "string" ? item : item && item.id).filter(Boolean);
const documentIds = catalog.documents.map(item => item && item.document_id).filter(Boolean);
const reservedSet = new Set(reservedIds);
for (const id of recordIds) if (reservedSet.has(id)) fail("ID activo y reservado a la vez: " + id);
for (const id of duplicate(reservedIds)) fail("ID reservado duplicado: " + id);
for (const id of duplicate(documentIds)) fail("ID de documento duplicado: " + id);

let validEndpoints = 0;
for (const edge of catalog.relationships) {
  if (!isObject(edge)) {
    fail("Hay una relación que no es un objeto.");
    continue;
  }
  if (edge.from === edge.to) fail("Relación reflexiva no permitida: " + edge.id);
  if (!recordById.has(edge.from)) fail("Origen de relación inexistente: " + edge.id + " -> " + edge.from);
  if (!recordById.has(edge.to)) fail("Destino de relación inexistente: " + edge.id + " -> " + edge.to);
  if (edge.from !== edge.to && recordById.has(edge.from) && recordById.has(edge.to)) validEndpoints += 1;
}

let dossierRoutesComplete = 0;
for (const dossier of dossiers) {
  if (!dossier || typeof dossier.id !== "string" || !dossier.id.trim()) {
    fail("El registro de expedientes contiene una entrada sin ID estable.");
    continue;
  }
  const record = recordById.get(dossier.id);
  if (!record) {
    fail("Expediente de interfaz ausente del catálogo: " + dossier.id);
    continue;
  }
  if (!["character", "deity_character", "character_group"].includes(record.type)) {
    fail("Tipo de catálogo no compatible con expediente: " + dossier.id + " (" + record.type + ")");
    continue;
  }
  if (typeof record.path !== "string" || !record.path.startsWith("characters/")) {
    fail("Ruta Markdown inválida para expediente de interfaz: " + dossier.id);
    continue;
  }
  const file = path.resolve(loreRoot, record.path);
  if (!file.startsWith(loreRoot + path.sep) || !fs.existsSync(file)) {
    fail("La ficha Markdown del expediente no existe o escapa del corpus: " + dossier.id + " -> " + record.path);
    continue;
  }
  const content = fs.readFileSync(file, "utf8");
  const frontmatter = content.match(/^---\\s*\\r?\\n([\\s\\S]*?)\\r?\\n---(?:\\s|$)/);
  const idMatch = frontmatter && frontmatter[1].match(/^id:\\s*["']?([^"'\\s#]+)["']?\\s*$/m);
  if (!idMatch || idMatch[1] !== dossier.id) {
    fail("ID del expediente y frontmatter Markdown desincronizados: " + dossier.id + " -> " + record.path);
    continue;
  }
  dossierRoutesComplete += 1;
}

let rosterComplete = 0;
for (const person of roster) {
  if (!person || typeof person.id !== "string" || !person.id.trim()) {
    fail("El roster contiene una identidad sin ID estable.");
    continue;
  }
  const record = recordById.get(person.id);
  if (!record) {
    fail("Personaje del roster ausente del catálogo: " + person.id);
    continue;
  }
  if (!["character", "deity_character", "character_group"].includes(record.type)) {
    fail("Tipo no navegable para " + person.id + ": " + record.type);
    continue;
  }
  if (typeof record.path !== "string" || !record.path.startsWith("characters/")) {
    fail("Ruta Markdown de personaje inválida: " + person.id);
    continue;
  }
  const file = path.resolve(loreRoot, record.path);
  if (!file.startsWith(loreRoot + path.sep) || !fs.existsSync(file)) {
    fail("Ruta Markdown ausente o fuera de lore/danmachi: " + person.id + " -> " + record.path);
    continue;
  }
  const content = fs.readFileSync(file, "utf8");
  const frontmatter = content.match(/^---\s*\r?\n([\s\S]*?)\r?\n---(?:\s|$)/);
  const idMatch = frontmatter && frontmatter[1].match(/^id:\s*["']?([^"'\s#]+)["']?\s*$/m);
  if (!idMatch || idMatch[1] !== person.id) {
    fail("ID de catálogo y frontmatter desincronizados: " + person.id + " -> " + record.path);
    continue;
  }
  const dossier = dossierById.get(person.id) || dossierApi.get(person.id);
  if (!dossier) {
    fail("Expediente de interfaz ausente para " + person.id);
    continue;
  }
  for (const field of ["appearance", "history", "personality", "abilities", "relationships", "conflict"]) {
    if (typeof dossier[field] !== "string" || dossier[field].length < 100) {
      fail("Expediente de " + person.id + " necesita contenido sustancial en " + field);
    }
  }
  if (!Array.isArray(dossier.sources) || dossier.sources.length === 0) {
    fail("Expediente sin procedencia declarada: " + person.id);
  }
  rosterComplete += 1;
}
const rosterDossierIds = new Set(roster.map(person => person && person.id));
const dossiersNotInRoster = dossiers.filter(item => item && !rosterDossierIds.has(item.id));
const typeCounts = {};
for (const record of catalog.records) typeCounts[record.type] = (typeCounts[record.type] || 0) + 1;
const characterRecords = catalog.records.filter(record => record.type === "character");
const completeCharacterRecords = characterRecords.filter(record => ["complete", "completed"].includes(record.status)).length;

const metricsBlock = [
  "<!-- DANMACHI-METRICS:BEGIN -->",
  "- **Corpus DanMachi:** " + catalog.records.length + " registros activos; " + catalog.reservedIds.length + " IDs reservados; " + catalog.documents.length + " documentos de apoyo.",
  "- **Grafo de conocimiento:** " + catalog.relationships.length + " relaciones explícitas; " + validEndpoints + "/" + catalog.relationships.length + " con ambos extremos activos y distintos; IDs de relación únicos.",
  "- **Roster de adaptación:** " + roster.length + " identidades; " + rosterComplete + "/" + roster.length + " tienen registro, ruta Markdown e expediente UI con el mismo ID.",
  "- **Expedientes de interfaz:** " + dossiers.length + " perfiles; " + dossierRoutesComplete + "/" + dossiers.length + " enlazados a catálogo y Markdown por ID.",
  "- **Tipos en el catálogo:** " + (typeCounts.character || 0) + " personajes; " + (typeCounts.character_group || 0) + " grupos; " + (typeCounts.deity_character || 0) + " deidades con registro de personaje.",
  "- **Marcadas `complete`:** " + completeCharacterRecords + "/" + characterRecords.length + " registros `character`; esto no define el universo de personajes esperados ni autoriza un porcentaje global de canon.",
  "<!-- DANMACHI-METRICS:END -->"
].join("\n");

if (validEndpoints !== catalog.relationships.length) fail("Hay relaciones con extremos inválidos.");
if (rosterComplete !== roster.length) fail("La cobertura estructural del roster no es completa: " + rosterComplete + "/" + roster.length + ".");
if (dossierRoutesComplete !== dossiers.length) fail("La cobertura de rutas de los expedientes no es completa: " + dossierRoutesComplete + "/" + dossiers.length + ".");
const statusContent = fs.existsSync(statusPath) ? fs.readFileSync(statusPath, "utf8") : "";
const markerPattern = /<!-- DANMACHI-METRICS:BEGIN -->[\s\S]*?<!-- DANMACHI-METRICS:END -->/g;
const markedBlocks = [...statusContent.matchAll(markerPattern)];
if (markedBlocks.length !== 1) fail("docs/STATUS.md debe contener exactamente un bloque DANMACHI-METRICS.");
if (errors.length) {
  console.error(errors.map(item => "ERROR: " + item).join("\n"));
  process.exit(1);
}
if (writeMode) {
  const nextStatus = statusContent.replace(markerPattern, metricsBlock);
  fs.writeFileSync(statusPath, nextStatus, "utf8");
  console.log("UPDATED: solo el bloque métrico marcado de docs/STATUS.md.");
} else if (markedBlocks[0][0] !== metricsBlock) {
  console.error("FAIL: las métricas operativas de docs/STATUS.md no coinciden con catálogo, roster y expedientes.");
  console.error("Ejecutá: node scripts/sync-danmachi-status.mjs --write");
  process.exit(1);
} else {
  console.log("PASS: métricas operativas y cobertura del roster sincronizadas.");
}
console.log("DanMachi: " + catalog.records.length + " registros, " + catalog.relationships.length +
  " relaciones, roster " + rosterComplete + "/" + roster.length +
  ", expedientes " + dossiers.length + ", extras fuera del roster " + dossiersNotInRoster.length + ".");

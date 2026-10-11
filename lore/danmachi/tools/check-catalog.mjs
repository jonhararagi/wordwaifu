#!/usr/bin/env node
/**
 * Dependency-free integrity check for the DanMachi lore catalog.
 * Run from any directory: node lore/danmachi/tools/check-catalog.mjs
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const toolDir = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(toolDir, "..");
const catalogPath = path.join(root, "catalog.json");
const errors = [];
const warnings = [];

function reportDuplicate(values, label) {
  const seen = new Set();
  for (const value of values) {
    if (seen.has(value)) errors.push(`Duplicate ${label}: ${value}`);
    seen.add(value);
  }
}

function listMarkdown(dir) {
  const out = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) out.push(...listMarkdown(full));
    else if (entry.isFile() && entry.name.toLowerCase().endsWith(".md")) out.push(full);
  }
  return out;
}

if (!fs.existsSync(catalogPath)) {
  console.error(`Catalog not found: ${catalogPath}`);
  process.exit(2);
}

let catalog;
try {
  catalog = JSON.parse(fs.readFileSync(catalogPath, "utf8"));
} catch (error) {
  console.error(`Invalid JSON in catalog.json: ${error.message}`);
  process.exit(2);
}

for (const key of ["records", "reservedIds", "documents"]) {
  if (!Array.isArray(catalog[key])) {
    console.error(`catalog.json field '${key}' must be an array`);
    process.exit(2);
  }
}

const recordIds = catalog.records.map(item => item.id).filter(Boolean);
const reservedIds = catalog.reservedIds.map(item => item.id).filter(Boolean);
const documentIds = catalog.documents.map(item => item.document_id).filter(Boolean);
reportDuplicate(recordIds, "record ID");
reportDuplicate(reservedIds, "reserved ID");
reportDuplicate(documentIds, "document ID");

const reservedSet = new Set(reservedIds);
for (const id of recordIds) {
  if (reservedSet.has(id)) errors.push(`ID is both a live record and a reserved candidate: ${id}`);
}

const allCatalogPaths = [
  ...catalog.records.map(item => item.path).filter(Boolean),
  ...catalog.documents.map(item => item.path).filter(Boolean),
];
reportDuplicate(allCatalogPaths, "catalog path");

for (const entry of [...catalog.records, ...catalog.documents]) {
  if (!entry.path) {
    errors.push(`Catalog entry has no path: ${entry.id ?? entry.document_id ?? "(unknown)"}`);
    continue;
  }
  const full = path.resolve(root, entry.path);
  if (!full.startsWith(root + path.sep) && full !== root) {
    errors.push(`Path escapes lore root: ${entry.path}`);
  } else if (!fs.existsSync(full)) {
    errors.push(`Catalog path does not exist: ${entry.path}`);
  }
}

const markdownFiles = listMarkdown(root);
const frontmatterIds = new Map();
for (const file of markdownFiles) {
  const content = fs.readFileSync(file, "utf8");
  const match = content.match(/^---\s*\r?\n([\s\S]*?)\r?\n---(?:\s|$)/);
  if (!match) continue;
  const idMatch = match[1].match(/^id:\s*["']?([^"'\s#]+)["']?\s*$/m);
  if (!idMatch) continue;
  const id = idMatch[1];
  const relative = path.relative(root, file).split(path.sep).join("/");
  if (frontmatterIds.has(id)) {
    errors.push(`Duplicate frontmatter ID '${id}' in ${frontmatterIds.get(id)} and ${relative}`);
  } else {
    frontmatterIds.set(id, relative);
  }
}

for (const item of catalog.records) {
  if (!item.path || !item.id) continue;
  const file = path.resolve(root, item.path);
  if (!fs.existsSync(file) || !file.endsWith(".md")) continue;
  const content = fs.readFileSync(file, "utf8");
  const match = content.match(/^---\s*\r?\n([\s\S]*?)\r?\n---(?:\s|$)/);
  if (!match) {
    warnings.push(`Record has no YAML frontmatter to cross-check: ${item.path}`);
    continue;
  }
  const idMatch = match[1].match(/^id:\s*["']?([^"'\s#]+)["']?\s*$/m);
  if (!idMatch) errors.push(`Catalog record has no frontmatter id: ${item.path}`);
  else if (idMatch[1] !== item.id) errors.push(`Catalog/frontmatter ID mismatch in ${item.path}: ${item.id} != ${idMatch[1]}`);
}

// Check relative Markdown links. URL links and pure in-page anchors are ignored.
const linkPattern = /\[[^\]]*\]\(([^)]+)\)/g;
for (const file of markdownFiles) {
  const content = fs.readFileSync(file, "utf8");
  const from = path.dirname(file);
  let match;
  while ((match = linkPattern.exec(content)) !== null) {
    let target = match[1].trim();
    if (!target || target.startsWith("#") || /^[a-z][a-z0-9+.-]*:/i.test(target) || target.startsWith("mailto:")) continue;
    target = target.split("#")[0].split("?")[0];
    if (!target) continue;
    let decoded = target;
    try { decoded = decodeURIComponent(target); } catch { /* keep original path */ }
    const full = path.resolve(from, decoded);
    if (!full.startsWith(root + path.sep) && full !== root) {
      warnings.push(`Relative link points outside lore root in ${path.relative(root, file)}: ${target}`);
      continue;
    }
    if (!fs.existsSync(full)) errors.push(`Broken Markdown link in ${path.relative(root, file)}: ${target}`);
  }
}

console.log(`DanMachi catalog check: ${catalog.records.length} records, ${catalog.reservedIds.length} reserved IDs, ${catalog.documents.length} documents, ${markdownFiles.length} Markdown files.`);
for (const warning of warnings) console.warn(`WARN: ${warning}`);
if (errors.length) {
  for (const error of errors) console.error(`ERROR: ${error}`);
  console.error(`FAILED with ${errors.length} error(s).`);
  process.exit(1);
}
console.log("PASS: no duplicate IDs, catalog path collisions, missing catalog paths, mismatched record IDs, or broken relative Markdown links.");

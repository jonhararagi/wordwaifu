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

for (const key of ["records", "reservedIds", "documents", "relationships"]) {
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
const claimLocations = new Map();
for (const file of markdownFiles) {
  const content = fs.readFileSync(file, "utf8");
  const relative = path.relative(root, file).split(path.sep).join("/");
  if (relative.startsWith("research/inbox/")) {
    const claimMatches = [...content.matchAll(/^### (DMR-\d{3}-CLM-\d{3}) · ([^\r\n]+)$/gm)];
    claimMatches.forEach((claimMatch, index) => {
      const next = claimMatches[index + 1];
      const claimBlock = content.slice(claimMatch.index, next ? next.index : content.length);
      if (claimLocations.has(claimMatch[1])) {
        errors.push("Duplicate research claim ID '" + claimMatch[1] + "' in " + claimLocations.get(claimMatch[1]).path + " and " + relative);
      } else {
        claimLocations.set(claimMatch[1], { path: relative, block: claimBlock });
      }
    });
  }
  const match = content.match(/^---\s*\r?\n([\s\S]*?)\r?\n---(?:\s|$)/);
  if (!match) continue;
  const idMatch = match[1].match(/^id:\s*["']?([^"'\s#]+)["']?\s*$/m);
  if (!idMatch) continue;
  const id = idMatch[1];
  if (frontmatterIds.has(id)) {
    errors.push("Duplicate frontmatter ID '" + id + "' in " + frontmatterIds.get(id) + " and " + relative);
  } else {
    frontmatterIds.set(id, relative);
  }
}

// Source registry cross-check: a source may only list research claims that exist
// and explicitly cite that source ID. This prevents a stale claim ID from silently
// redirecting readers to a different person's biography or continuity.
const sourceRegistryPath = path.join(root, "sources", "00-registro-fuentes.md");
if (fs.existsSync(sourceRegistryPath)) {
  const registryText = fs.readFileSync(sourceRegistryPath, "utf8");
  const sourceHeadings = [...registryText.matchAll(/^## (DMR-\d{3}-SRC-\d{3}) · ([^\r\n]+)$/gm)];
  for (let i = 0; i < sourceHeadings.length; i++) {
    const sourceId = sourceHeadings[i][1];
    const end = i + 1 < sourceHeadings.length ? sourceHeadings[i + 1].index : registryText.length;
    const sourceBlock = registryText.slice(sourceHeadings[i].index, end);
    const supportedMatch = sourceBlock.match(/^- claims_supported:\s*\[([^\]]*)\]/m);
    if (!supportedMatch) continue;
    const claimIds = [...new Set(supportedMatch[1].match(/DMR-\d{3}-CLM-\d{3}/g) || [])];
    for (const claimId of claimIds) {
      const claim = claimLocations.get(claimId);
      if (!claim) {
        errors.push("Source registry " + sourceId + " references missing research claim: " + claimId);
        continue;
      }
      const claimSources = new Set(claim.block.match(/\bDMR-\d{3}-SRC-\d{3}\b/g) || []);
      if (!claimSources.has(sourceId)) {
        errors.push("Source registry " + sourceId + " lists " + claimId + ", but the claim cites " + [...claimSources].join(", "));
      }
    }
  }
}

const liveRecordIds = new Set(recordIds);
const relationshipIds = new Set();
const validEvidenceStatuses = new Set(["source_checked", "secondary_checked", "pending_verification", "provisional_summary", "source_checked_excerpt_only"]);
for (const relation of catalog.relationships) {
  if (!relation || typeof relation !== "object") {
    errors.push("Relationship entry must be an object");
    continue;
  }
  const id = String(relation.id || "");
  if (!id) errors.push("Relationship entry has no id");
  else if (relationshipIds.has(id)) errors.push("Duplicate relationship ID: " + id);
  relationshipIds.add(id);
  for (const field of ["from", "to", "kind", "label", "continuity", "interval", "evidenceStatus", "evidenceType", "claimRef", "claimPath", "note"]) {
    if (typeof relation[field] !== "string" || !relation[field].trim()) errors.push("Relationship " + (id || "(unknown)") + " has no " + field);
  }
  for (const endpoint of [relation.from, relation.to]) {
    if (typeof endpoint === "string" && !liveRecordIds.has(endpoint)) errors.push("Relationship " + id + " points to unknown live record: " + endpoint);
  }
  if (relation.from === relation.to) errors.push("Relationship " + id + " has the same source and target");
  if (typeof relation.continuity === "string" && !/^(?:CONT-[A-Z0-9-]+|CROSS-CONTINUITY)$/.test(relation.continuity)) errors.push("Relationship " + id + " has an invalid continuity key: " + relation.continuity);
  if (relation.evidenceStatus && !validEvidenceStatuses.has(relation.evidenceStatus)) errors.push("Relationship " + id + " has an unsupported evidenceStatus: " + relation.evidenceStatus);
  // A secondary/community lead cannot be considered primary-source checked merely because its file exists.
  if (relation.evidenceStatus === "source_checked" && /(?:secondary|community|unverified|lead)/i.test(String(relation.evidenceType || ""))) {
    errors.push("Relationship " + id + " marks secondary or unverified evidence as source_checked: " + relation.evidenceType);
  }
  const claim = claimLocations.get(relation.claimRef);
  if (!claim) {
    errors.push("Relationship " + id + " references missing research claim heading: " + relation.claimRef);
  } else {
    if (claim.path !== relation.claimPath) errors.push("Relationship " + id + " claimPath mismatch: " + relation.claimPath + " != " + claim.path);
    const scopeMatch = claim.block.match(/continuity_scope[\x60\s]*:\s*([^\r\n]+)/i);
    if (!scopeMatch || !scopeMatch[1].includes(relation.continuity)) errors.push("Relationship " + id + " continuity is not supported by " + relation.claimRef);
    const statusMatch = claim.block.match(/verification_status[\x60\s]*:\s*([^\r\n]+)/i);
    if (!statusMatch || statusMatch[1].trim() !== relation.evidenceStatus) errors.push("Relationship " + id + " evidenceStatus mismatches " + relation.claimRef);
  }
  if (typeof relation.claimPath === "string" && relation.claimPath) {
    const full = path.resolve(root, relation.claimPath);
    if (!full.startsWith(root + path.sep)) errors.push("Relationship " + id + " claimPath escapes lore root: " + relation.claimPath);
    else if (!fs.existsSync(full)) errors.push("Relationship " + id + " claimPath does not exist: " + relation.claimPath);
  }
}

for (const id of reservedIds) {
  if (frontmatterIds.has(id)) {
    errors.push(`Reserved candidate ID '${id}' is already used by ${frontmatterIds.get(id)}`);
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

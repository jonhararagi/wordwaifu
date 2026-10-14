#!/usr/bin/env node
/**
 * Reproducible coverage metrics for the curated DanMachi catalog.
 * Run: node lore/danmachi/tools/report-coverage.mjs
 * This measures inventory and evidence status, not the percentage of the entire story.
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const toolDir = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(toolDir, "..");
const catalogPath = path.join(root, "catalog.json");
const volumeMapPath = path.join(root, "research", "inbox", "BATCH-DM-008-main-story-volume-map.md");
const errors = [];

function readText(file) {
  try { return fs.readFileSync(file, "utf8"); }
  catch (error) {
    errors.push(`Cannot read ${path.relative(root, file)}: ${error.message}`);
    return "";
  }
}
function countBy(items, key) {
  const counts = Object.create(null);
  for (const item of items) {
    const value = String(item?.[key] || "missing");
    counts[value] = (counts[value] || 0) + 1;
  }
  return Object.fromEntries(Object.entries(counts).sort(([a], [b]) => a.localeCompare(b, "en")));
}
function percent(numerator, denominator) {
  return denominator ? Math.round((numerator / denominator) * 1000) / 10 : 0;
}

let catalog;
try { catalog = JSON.parse(readText(catalogPath)); }
catch (error) { errors.push(`Invalid catalog JSON: ${error.message}`); }
if (!catalog || !Array.isArray(catalog.records)) errors.push("catalog.records must be an array.");

const volumeText = readText(volumeMapPath);
const publishedMatch = volumeText.match(/El volumen (\d+) se incorpora como volumen principal publicado al corte/i);
const publishedMainVolumeCount = publishedMatch ? Number(publishedMatch[1]) : null;
const volumeBlocks = [...volumeText.matchAll(/^### DMR-008-CLM-\d{3} · Volumen (\d{1,2}):[^\n]*\n([\s\S]*?)(?=^### |^## |$(?![\s\S]))/gm)];
const volumeNumbers = [...new Set(volumeBlocks.map(match => Number(match[1])))].sort((a, b) => a - b);
const internalLocatorPattern = /\b(?:cap[ií]tulo|chapter|p[aá]gina|page|escena|scene)\s*(?:n[úu]m(?:ero)?\.?\s*)?(?:\d+|[ivxlcdm]+)\b/i;
const unverifiedLocatorPattern = /no cotejad|not checked|sin localizador|pendiente de cotejo/i;
const volumesWithInternalLocators = volumeBlocks.filter(match => {
  const locator = match[2].match(/^- `source_locator`:\s*(.+)$/m)?.[1] || "";
  return internalLocatorPattern.test(locator) && !unverifiedLocatorPattern.test(locator);
}).map(match => Number(match[1]));
const expectedVolumeNumbers = publishedMainVolumeCount
  ? Array.from({ length: publishedMainVolumeCount }, (_, index) => index + 1) : [];
const missingVolumes = expectedVolumeNumbers.filter(number => !volumeNumbers.includes(number));
const unexpectedVolumes = volumeNumbers.filter(number => !expectedVolumeNumbers.includes(number));
const records = Array.isArray(catalog?.records) ? catalog.records : [];
const fullyClosedStatuses = new Set(["approved", "verified", "complete", "completed", "closed", "fully_approved"]);
const fullyClosedRecords = records.filter(record => fullyClosedStatuses.has(String(record.status || "").toLowerCase())).length;

const report = {
  report: "DanMachi curated lore coverage",
  auditCutoff: (volumeText.match(/Fecha de corte:\*\*\s*([^\n]+)/i) || [])[1]?.trim() || "unknown",
  catalog: {
    records: records.length,
    reservedIds: Array.isArray(catalog?.reservedIds) ? catalog.reservedIds.length : null,
    documents: Array.isArray(catalog?.documents) ? catalog.documents.length : null,
    fullyClosedRecords,
    fullyClosedPercent: percent(fullyClosedRecords, records.length),
    statuses: countBy(records, "status"),
    types: countBy(records, "type")
  },
  mainNovel: {
    publishedVolumesAtCutoff: publishedMainVolumeCount,
    volumesWithProvisionalMap: volumeNumbers.length,
    mapCoveragePercent: publishedMainVolumeCount ? percent(volumeNumbers.length, publishedMainVolumeCount) : null,
    mappedVolumeNumbers: volumeNumbers,
    missingVolumes,
    unexpectedVolumes,
    volumesWithCitedInternalLocators: volumesWithInternalLocators.length,
    internalLocatorCoveragePercent: publishedMainVolumeCount ? percent(volumesWithInternalLocators.length, publishedMainVolumeCount) : null
  },
  globalStoryCoveragePercent: null,
  globalStoryCoverageReason: "No stable denominator exists for every scene, fact, relationship, rule, revelation and future publication in an ongoing series.",
  errors
};

console.log(JSON.stringify(report, null, 2));
if (errors.length || missingVolumes.length || unexpectedVolumes.length || volumeBlocks.length !== volumeNumbers.length) {
  if (missingVolumes.length) console.error("Missing mapped volumes: " + missingVolumes.join(", "));
  if (unexpectedVolumes.length) console.error("Unexpected mapped volume numbers: " + unexpectedVolumes.join(", "));
  if (volumeBlocks.length !== volumeNumbers.length) console.error("Duplicate volume headings found in the main-volume map.");
  process.exitCode = 1;
}

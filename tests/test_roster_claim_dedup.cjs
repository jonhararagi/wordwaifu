const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
require("../src/official-character-roster.js");
const corpus = require("../src/lore-corpus.js");
const root = path.join(__dirname, "..", "lore", "danmachi");
const catalog = JSON.parse(fs.readFileSync(path.join(root, "catalog.json"), "utf8"));
const paths = [
  "research/inbox/BATCH-DM-003-era-oscura-y-personajes-multiepoca.md",
  "research/inbox/BATCH-DM-004-psicologia-personajes-y-retrieval.md",
  "research/inbox/BATCH-DM-005-astrea-familia-network.md",
  "research/inbox/BATCH-DM-006-oficial-roster-y-retratos.md",
  "research/inbox/BATCH-DM-007-astrea-family-network-and-journey.md",
  "research/inbox/BATCH-DM-008-main-story-volume-map.md",
  "research/inbox/BATCH-DM-009-parallel-stories-and-chronicles.md",
  "research/inbox/BATCH-DM-010-astrea-departure-and-ryu-revenge.md",
  "research/inbox/DANMACHI-RESEARCH-010-hestia-familia-dossier.md",
  "research/inbox/DANMACHI-RESEARCH-011-loki-familia-dossier.md",
  "research/inbox/DANMACHI-RESEARCH-012-astrea-familia-dossier.md"
];
const documents = paths.map(file => ({ path: file, content: fs.readFileSync(path.join(root, file), "utf8") }));
const parsedIds = new Set(documents.flatMap(doc => doc.content.match(/DMR-\\d+-CLM-\\d+/g) || []));
const index = corpus.buildIndex(catalog, documents);
const generated = index.claims.filter(claim => !parsedIds.has(claim.claimId));
assert.ok(generated.length > 0, "Official roster dossiers must contribute searchable claims.");
assert.ok(generated.some(claim => claim.sourceIds.includes("DMR-007-SRC-001") &&
  claim.sourceType === "SECONDARY" && /fuente secundaria/i.test(claim.confidenceNote)),
  "Generated community-wiki claims must preserve secondary-source warnings.");
assert.ok(generated.every(claim => !parsedIds.has(claim.claimId)),
  "Generated roster claims must never reuse a curated claim ID.");
assert.equal(new Set(generated.map(claim => claim.claimId)).size, generated.length,
  "Every generated roster claim must have a unique claim ID.");
assert.equal(new Set(index.claims.map(claim => claim.entryId)).size, index.claims.length,
  "Every indexed continuity entry must have a unique entry ID.");
assert.ok(generated.some(claim => claim.continuityScopes.includes("CONT-MAIN-LN")),
  "Roster dossiers must retain their explicitly scoped main-novel entries.");
process.stdout.write("PASS roster claim IDs: generated claims are collision-free and retain continuity/source labels.\\n");

"use strict";
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const root = path.resolve(__dirname, "..");
const guide = JSON.parse(fs.readFileSync(path.join(root, "lore/eminence-in-shadow/anime-episode-guide.json"), "utf8"));
assert.equal(guide.universeId, "eminence-in-shadow");
assert.equal(guide.continuity, "anime");
assert.equal(guide.episodes.length, 32, "guide must cover all 32 released anime episodes across two seasons");
assert.equal(guide.episodes.filter(item => item.season === 1).length, 20, "season 1 should contain 20 episodes");
assert.equal(guide.episodes.filter(item => item.season === 2).length, 12, "season 2 should contain 12 episodes");
assert.equal(new Set(guide.episodes.map(item => item.id)).size, 32, "episode IDs must be unique");
for (const episode of guide.episodes) {
  assert.ok(episode.title && episode.summary.length >= 90, episode.id + " needs a meaningful original summary");
  assert.equal(episode.continuity, "anime", episode.id + " must remain tagged as anime continuity");
  assert.ok(episode.summaryType === "original-paraphrase", episode.id + " must identify its summaries as original paraphrases");
  assert.ok(/^https:\/\//.test(episode.sourceUrl), episode.id + " needs a traceable source");
}
assert.ok(guide.sources.some(item => item.type === "official-primary"), "guide must cite an official primary source");
console.log("PASS Eminence in Shadow anime episode guide: " + guide.episodes.length + " episodes, 20 season-one and 12 season-two entries, unique IDs and source links");

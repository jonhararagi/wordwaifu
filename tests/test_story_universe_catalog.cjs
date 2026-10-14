"use strict";
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
const catalog = JSON.parse(fs.readFileSync(path.join(root, "data/catalog/story-universe-catalog.json"), "utf8"));
const app = fs.readFileSync(path.join(root, "src/app.js"), "utf8");

assert.equal(catalog.schemaVersion, 1);
assert.ok(catalog.entries.length >= 12, "catalog should cover multiple genres and subgenres");
const ids = new Set(catalog.entries.map(entry => entry.id));
assert.equal(ids.size, catalog.entries.length, "universe IDs must be unique");
for (const entry of catalog.entries) {
  assert.ok(entry.title, entry.id + " needs a title");
  assert.ok(Array.isArray(entry.genres) && entry.genres.length, entry.id + " needs genre tags");
  assert.ok(Array.isArray(entry.motifs) && entry.motifs.length, entry.id + " needs narrative motifs");
  assert.ok(entry.generatorSeeds && entry.generatorSeeds.world && entry.generatorSeeds.conflict, entry.id + " needs generator seeds");
  assert.ok(entry.integrationStatus, entry.id + " needs an honest integration status");
  assert.ok(app.includes('value="' + entry.id + '"'), entry.id + " must be selectable in the Story Foundry UI");
}
assert.ok(ids.has("code-geass"));
assert.ok(ids.has("gundam-witch"));
assert.ok(ids.has("average-abilities"));
assert.ok(ids.has("saving-80000-gold"));
assert.ok(ids.has("potion-danomi"));
assert.ok(ids.has("noucome"));
assert.ok(ids.has("konosuba"));
assert.ok(ids.has("sentouin"));
assert.ok(ids.has("my-hero-academia"));
assert.ok(ids.has("one-punch-man"));
assert.deepEqual(catalog.canonDossierPriority, ["my-hero-academia", "one-punch-man"]);
assert.ok(app.includes('id="story-plan-inspiration"'), "Story Foundry needs an inspiration selector");
assert.ok(app.includes('profiles[inspiration]'), "selected inspiration must affect the generated conflict");
for (const [file, expected] of [
  ["lore/my-hero-academia/README.md", "Quirks"],
  ["lore/one-punch-man/README.md", "Hero Association"]
]) {
  const dossier = fs.readFileSync(path.join(root, file), "utf8");
  assert.ok(dossier.includes(expected), file + " needs a canon starter summary");
  assert.ok(dossier.includes("starter-corpus"), file + " must not claim complete coverage");
  assert.ok(/https:\/\//.test(dossier), file + " needs traceable source links");
}
console.log("PASS story universe catalog: " + catalog.entries.length + " entries, selectable presets, generator hooks and canon-dossier priorities");

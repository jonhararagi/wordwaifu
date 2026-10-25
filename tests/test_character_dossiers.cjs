const assert = require("node:assert/strict");
require("../src/character-dossiers.js");
const api = globalThis.WordWaifuCharacterDossiers;
assert.ok(api, "Character dossier registry should load in Node.");
const all = api.list();
assert.ok(all.length >= 30, "The archive should include at least 15 researched extended dossiers.");
for (const dossier of all) {
  for (const field of ["appearance","history","personality","abilities","relationships","conflict"]) {
    assert.ok(typeof dossier[field] === "string" && dossier[field].length >= 100,
      dossier.id + " must include a substantive " + field + " section.");
  }
  assert.ok(Array.isArray(dossier.sources) && dossier.sources.length >= 1,
    dossier.id + " must retain source URLs.");
}
const bell = api.get("DM-CHAR-BELL");
assert.ok(bell.history.length > 300, "Bell's history must be a real paragraph, not a short synopsis.");
assert.ok(bell.abilities.includes("Liaris Freese"), "Bell's dossier must describe named abilities.");
assert.ok(api.get("CHAR-RYUU-LION").history.includes("piso 37"), "Ryuu's dossier must include specific narrative context.");
assert.equal(api.get("MISSING-ID"), null, "Unknown characters should return null.");
const licensedAstreaUrl = "https://yenpress.com/titles/9781975379926-astrea-record-vol-3-is-it-wrong-to-try-to-pick-up-girls-in-a-dungeon-tales-of-heroes";
const bookwalkerProductUrl = "https://bookwalker.jp/dead6afbb1-d488-4cf3-a255-669537f7f049/";
const bookwalkerSampleUrl = "https://bookwalker.jp/dead6afbb1-d488-4cf3-a255-669537f7f049/?sample=1";
for (const id of ["CHAR-DARK-ALFIA", "CHAR-DARK-ZALD", "CHAR-DARK-EREBUS"]) {
  const dossier = api.get(id);
  assert.ok(dossier && Array.isArray(dossier.sources), id + " must retain its source list.");
  assert.ok(dossier.sources.includes(licensedAstreaUrl), id + " must expose the licensed English Astrea Record volume 3 page as an access route.");
  assert.ok(dossier.sources.includes(bookwalkerProductUrl), id + " must expose the licensed Japanese retailer listing.");
  assert.ok(dossier.sources.includes(bookwalkerSampleUrl), id + " must expose the free sample route without treating it as verified narrative text.");
}

bell.history = "mutated";
assert.notEqual(api.get("DM-CHAR-BELL").history, "mutated", "Callers must not mutate the shared dossier catalog.");
const alignments = require("../src/character-alignments.js");
const alfiaAlignment = alignments.get("CHAR-DARK-ALFIA");
const zaldAlignment = alignments.get("CHAR-DARK-ZALD");
assert.ok(alfiaAlignment && zaldAlignment, "Alfia and Zald must have an explicit provisional alignment entry.");
for (const entry of [alfiaAlignment,zaldAlignment]) {
  assert.equal(entry.morality, "neutral", "The provisional moral axis should remain explicit.");
  assert.equal(entry.conduct, "chaotic", "The provisional conduct axis should remain distinct from morality.");
  assert.equal(entry.displayLabel, "Caótico neutral", "The displayed combination must be stable and readable.");
  assert.equal(entry.status, "interpretive_provisional", "Alignment is an interpretation, not canon data.");
  assert.equal(entry.confidence, "low", "Secondary characterization must not be overstated.");
  assert.equal(entry.continuity, "CONT-AR", "The provisional classification is scoped to Astrea Record.");
  assert.ok(entry.rationale.length > 120 && entry.alternative.includes("Caótico bueno"),
    "The alignment explanation must preserve the user's alternative and the character's conflicting means/ends.");
  assert.ok(entry.sources.some(url => url.includes("danmachi.fandom.com")),
    "The classification must expose the secondary sources that informed the interpretation.");
}
assert.equal(alignments.matches("CHAR-DARK-ALFIA","neutral","chaotic"), true,
  "Filtering by both axes should find Alfia.");
assert.equal(alignments.matches("CHAR-DARK-ZALD","good","chaotic"), false,
  "A provisional chaotic-neutral profile must not also appear as chaotic-good in the strict filter.");
assert.equal(alignments.matches("UNCLASSIFIED-ID","unclassified","unclassified"), true,
  "Unknown profiles should match the unclassified option, not default to neutral.");
assert.equal(alignments.matches("UNCLASSIFIED-ID","neutral","ALL"), false,
  "Missing alignment must never be treated as neutral.");
assert.equal(alignments.format("neutral","chaotic"), "Caótico neutral",
  "The alignment label helper must combine axes consistently.");
alfiaAlignment.sources.push("https://invalid.example/");
assert.equal(alignments.get("CHAR-DARK-ALFIA").sources.includes("https://invalid.example/"), false,
  "Alignment lookups must return defensive copies rather than mutable shared metadata.");
process.stdout.write("PASS character dossiers: " + all.length + " profiles with six substantive sections and source URLs.\\n");

const assert = require("node:assert/strict");
require("../src/character-dossiers.js");
const api = globalThis.WordWaifuCharacterDossiers;
assert.ok(api, "Character dossier registry should load in Node.");
const archiveApi = require("../src/character-archive.js");
assert.ok(archiveApi && typeof archiveApi.getExtendedInfo === "function",
  "The interactive character archive must expose its expanded-info lookup for regression testing.");
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

const alfiaArchiveInfo = archiveApi.getExtendedInfo("CHAR-DARK-ALFIA", "CONT-AR", null);
assert.ok(alfiaArchiveInfo && alfiaArchiveInfo.title.includes("Alfia"), "Alfia's expanded research notes must be reachable from her interactive archive profile in CONT-AR.");
assert.ok(alfiaArchiveInfo.sections.some(section => section.text.includes("campana gris plateada") && section.text.includes("superior a 100 metros") && section.text.includes("pendientes de cotejo")),
  "The Alfia archive modal must expose the Genos Angelus report while retaining its secondary-evidence boundary.");
assert.ok(alfiaArchiveInfo.references.some(ref => ref.kind === "community" && ref.url === "https://danmachi.fandom.com/es/wiki/Alfia/Habilidades"),
  "Alfia's interactive research note must link the Spanish community source with its type preserved.");
assert.equal(archiveApi.getExtendedInfo("CHAR-DARK-ALFIA", "CONT-MAIN-LN", null), null,
  "Astrea Record ability notes must not be presented as a main-light-novel profile.");

const zaldArchiveInfo = archiveApi.getExtendedInfo("CHAR-DARK-ZALD", "CONT-AR", null);
assert.ok(zaldArchiveInfo && zaldArchiveInfo.title.includes("Zald"), "Zald's expanded research notes must be reachable from his interactive archive profile in CONT-AR.");
assert.ok(zaldArchiveInfo.sections.some(section => section.text.includes("nivel 7") && section.text.includes("nivel 10") && section.text.includes("no es una fórmula universal verificada")),
  "Zald's Deus Ambrosia example must be labelled a community report rather than a universal rule.");
assert.ok(zaldArchiveInfo.references.some(ref => ref.kind === "community" && ref.url === "https://danmachi.fandom.com/es/wiki/Zald"),
  "Zald's interactive research note must preserve its community source type.");
assert.equal(archiveApi.getExtendedInfo("CHAR-DARK-ZALD", "CONT-MAIN-LN", null), null,
  "Astrea Record ability notes must not be presented as a main-light-novel profile.");

const meteriaMainInfo = archiveApi.getExtendedInfo("CHAR-METERIA", "CONT-MAIN-LN", null);
assert.ok(meteriaMainInfo && meteriaMainInfo.title.includes("Meteria"),
  "Meteria's secondary main-novel research note must be reachable from her archive profile.");
assert.ok(meteriaMainInfo.sections.some(section => section.text.includes("no la nombra como Meteria")),
  "Meteria's note must distinguish the game-era interview from an independent primary identification.");
assert.ok(meteriaMainInfo.sections.some(section => section.text.includes("No se asignan diagnóstico médico")),
  "Meteria's file must leave undocumented diagnosis and dates unresolved.");
assert.ok(meteriaMainInfo.references.some(ref => ref.kind === "interview" && ref.url === "https://ln-news.com/articles/109766"),
  "The interview must be labelled as secondary editorial material, not as a primary novel page.");
assert.ok(meteriaMainInfo.references.some(ref => ref.kind === "community" && ref.url === "https://danmachi.fandom.com/wiki/Meteria"),
  "Meteria's claims must expose the community source type.");
const meteriaAuInfo = archiveApi.getExtendedInfo("CHAR-METERIA", "CONT-AU", null);
assert.ok(meteriaAuInfo && meteriaAuInfo.sections.some(section => section.text.includes("CONT-AU")),
  "Meteria's alternate-author material must remain reachable only as a separated AU note.");
assert.ok(meteriaAuInfo.references.some(ref => ref.kind === "author" && ref.url === "https://note.com/fujinoomori/n/n629829ac3fe4"),
  "The author-published alternate story must be labelled as an author publication.");
const erebusGameInfo = archiveApi.getExtendedInfo("CHAR-DARK-EREBUS", "CONT-GAME", null);
assert.ok(erebusGameInfo && erebusGameInfo.sections.some(section => section.text.includes("Eren") && section.text.includes("no se incorpora como alias canónico")),
  "Erebus's game continuity note must keep the uncertain alias unapproved.");
assert.ok(erebusGameInfo.references.some(ref => ref.kind === "interview" && ref.url === "https://ln-news.com/articles/109766"),
  "Erebus's editorial caption must not be mislabeled as a primary novel source.");
assert.equal(archiveApi.getExtendedInfo("CHAR-DARK-EREBUS", "CONT-AR", null), null,
  "Erebus's original-game ideology must not be presented as a verified Astrea Record novel dossier.");
const rudraMainInfo = archiveApi.getExtendedInfo("CHAR-DARK-RUDRA", "CONT-MAIN-LN", null);
assert.ok(rudraMainInfo && rudraMainInfo.sections.some(section => section.text.includes("no demuestra que Rudra") && section.text.includes("Rudra Familia")),
  "Rudra's note must distinguish group responsibility from unproven personal authorization.");
assert.ok(rudraMainInfo.references.some(ref => ref.kind === "publisher_metadata" && ref.url.includes("yenpress.com/titles/9781975385026")),
  "The vol. 14 product page must be labelled as metadata rather than narrative evidence.");

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

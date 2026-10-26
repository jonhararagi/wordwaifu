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
  assert.ok(dossier.sources.includes("https://booklive.jp/product/index/title_id/1237250/vol_no/003"), id + " must expose BookLive's Astrea Record 3 trial-offer page as metadata only.");
}

const alfiaArchiveInfo = archiveApi.getExtendedInfo("CHAR-DARK-ALFIA", "CONT-AR", null);
assert.ok(alfiaArchiveInfo && alfiaArchiveInfo.title.includes("Alfia"), "Alfia's expanded research notes must be reachable from her interactive archive profile in CONT-AR.");
assert.ok(alfiaArchiveInfo.sections.some(section => section.text.includes("campana gris plateada") && section.text.includes("superior a 100 metros") && section.text.includes("pendientes de cotejo")),
  "The Alfia archive modal must expose the Genos Angelus report while retaining its secondary-evidence boundary.");
assert.ok(alfiaArchiveInfo.references.some(ref => ref.kind === "community" && ref.url === "https://danmachi.fandom.com/es/wiki/Alfia/Habilidades"),
  "Alfia's interactive research note must link the Spanish community source with its type preserved.");
assert.ok(alfiaArchiveInfo.sections.some(section => section.text.includes("tumbas de Erebus, Zald y Alfia") && section.text.includes("reseña de lector")),
  "Alfia's Astrea Record note must expose the BookLive memorial lead as secondary, not as a primary scene.");
assert.ok(alfiaArchiveInfo.references.some(ref => ref.kind === "community" && ref.url === "https://booklive.jp/review/list/title_id/1237250/vol_no/003"),
  "Alfia's Astrea Record note must link the BookLive review source for the secondary memorial clue.");
const alfiaMainNovelInfo = archiveApi.getExtendedInfo("CHAR-DARK-ALFIA", "CONT-MAIN-LN", null);
assert.ok(alfiaMainNovelInfo && alfiaMainNovelInfo.title.includes("volumen 20"),
  "Alfia must expose a distinct CONT-MAIN-LN volume 20 lead without relabelling it as Astrea Record.");
assert.ok(!alfiaMainNovelInfo.sections.some(section => section.text.includes("campana gris plateada")),
  "Alfia CONT-AR ability details must not leak into the main-novel note.");

const zaldArchiveInfo = archiveApi.getExtendedInfo("CHAR-DARK-ZALD", "CONT-AR", null);
assert.ok(zaldArchiveInfo && zaldArchiveInfo.title.includes("Zald"), "Zald's expanded research notes must be reachable from his interactive archive profile in CONT-AR.");
assert.ok(zaldArchiveInfo.sections.some(section => section.text.includes("nivel 7") && section.text.includes("nivel 10") && section.text.includes("no es una fórmula universal verificada")),
  "Zald's Deus Ambrosia example must be labelled a community report rather than a universal rule.");
assert.ok(zaldArchiveInfo.references.some(ref => ref.kind === "community" && ref.url === "https://danmachi.fandom.com/es/wiki/Zald"),
  "Zald's interactive research note must preserve its community source type.");
assert.ok(zaldArchiveInfo.sections.some(section => section.text.includes("tumbas de Erebus, Zald y Alfia") && section.text.includes("reseña de lector")),
  "Zald's Astrea Record note must expose the BookLive memorial lead as secondary, not as a primary scene.");
assert.ok(zaldArchiveInfo.references.some(ref => ref.kind === "community" && ref.url === "https://booklive.jp/review/list/title_id/1237250/vol_no/003"),
  "Zald's Astrea Record note must link the BookLive review source for the secondary memorial clue.");
const zaldMainNovelInfo = archiveApi.getExtendedInfo("CHAR-DARK-ZALD", "CONT-MAIN-LN", null);
assert.ok(zaldMainNovelInfo && zaldMainNovelInfo.title.includes("volumen 20"),
  "Zald must expose a distinct CONT-MAIN-LN volume 20 lead without relabelling it as Astrea Record.");
assert.ok(!zaldMainNovelInfo.sections.some(section => section.text.includes("Deus Ambrosia")),
  "Zald CONT-AR ability details must not leak into the main-novel note.");

const alfiaVol20Info = archiveApi.getExtendedInfo("CHAR-DARK-ALFIA", "CONT-MAIN-LN", null);
assert.ok(alfiaVol20Info && alfiaVol20Info.sections.some(section => section.text.includes("Leon") && section.text.includes("pista secundaria")),
  "Alfia volume 20 retrospective clue must be reachable in main-novel continuity with secondary-evidence limits.");
assert.ok(alfiaVol20Info.references.some(ref => ref.kind === "community" && ref.url === "https://danmachi.fandom.com/wiki/DanMachi_Light_Novel_Volume_20/Synopsis"),
  "Alfia volume 20 clue must expose the synopsis URL and community source type.");
const zaldVol20Info = archiveApi.getExtendedInfo("CHAR-DARK-ZALD", "CONT-MAIN-LN", null);
assert.ok(zaldVol20Info && zaldVol20Info.sections.some(section => section.text.includes("Udaeus") && section.text.includes("evidencia secundaria")),
  "Zald Udaeus/sword-technique clue must be reachable in CONT-MAIN-LN and remain secondary.");
assert.ok(zaldVol20Info.references.some(ref => ref.kind === "community" && ref.url === "https://danmachi.fandom.com/wiki/DanMachi_Light_Novel_Volume_20/Synopsis"),
  "Zald volume 20 clue must expose the community synopsis URL and source type.");

const meteriaMainInfo = archiveApi.getExtendedInfo("CHAR-METERIA", "CONT-MAIN-LN", null);
assert.ok(meteriaMainInfo && meteriaMainInfo.title.includes("Meteria"),
  "Meteria's secondary main-novel research note must be reachable from her archive profile.");
assert.ok(meteriaMainInfo.sections.some(section => section.text.includes("no la nombra como Meteria")),
  "Meteria's note must distinguish the game-era interview from an independent primary identification.");
assert.ok(meteriaMainInfo.sections.some(section => section.text.includes("No se asignan diagnóstico médico")),
  "Meteria's file must leave undocumented diagnosis and dates unresolved.");
assert.ok(meteriaMainInfo.references.some(ref => ref.kind === "interview" && ref.url === "https://ln-news.com/articles/109766"),
  "The author interview must remain a separately typed source, not a primary novel page.");
assert.ok(!meteriaMainInfo.sections.some(section => section.text.includes("supporter de Zeus Familia")),
  "The original-game parentage context must not leak into Meteria's main-novel continuity note.");
const meteriaGameInfo = archiveApi.getExtendedInfo("CHAR-METERIA", "CONT-GAME", null);
assert.ok(meteriaGameInfo && meteriaGameInfo.sections.some(section => section.text.includes("supporter de Zeus Familia")),
  "Meteria's game-origin note must preserve the father-role detail from the author interview.");
assert.ok(meteriaGameInfo.sections.some(section => section.text.includes("no pronuncia el nombre Meteria")),
  "Meteria's game-origin note must preserve the unresolved identity within the same source context.");
assert.ok(meteriaGameInfo.references.some(ref => ref.kind === "interview" && ref.url === "https://ln-news.com/articles/109766"),
  "The direct author confirmation must retain interview provenance.");
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
assert.ok(erebusGameInfo.references.some(ref => ref.kind === "editorial_caption" && ref.url === "https://ln-news.com/articles/109766"),
  "Erebus's editorial caption must be labelled separately from Omori's interview.");
const erebusNovelInfo = archiveApi.getExtendedInfo("CHAR-DARK-EREBUS", "CONT-AR", null);
assert.ok(erebusNovelInfo && erebusNovelInfo.sections.some(section => section.text.includes("solo se inspeccionaron la ficha y sus metadatos") && section.text.includes("no confirma aparición")),
  "Erebus's novelization route must expose the licensed BookLive page without importing game continuity or inventing narrative facts.");
assert.ok(erebusNovelInfo.references.some(ref => ref.kind === "licensed_preview" && ref.url === "https://booklive.jp/product/index/title_id/1237250/vol_no/003"),
  "Erebus's CONT-AR note must link the BookLive trial-offer page as metadata only.");
assert.equal(erebusNovelInfo.sections.some(section => section.text.includes("Absolute Evil")), false,
  "Erebus's game-only details must not leak into the separate novelization route.");
assert.ok(erebusNovelInfo.sections.some(section => section.text.includes("flores") && section.text.includes("tumbas") && section.text.includes("pista secundaria")),
  "Erebus's CONT-AR note must surface the BookLive review lead without promoting it to novel canon.");
assert.ok(erebusNovelInfo.references.some(ref => ref.kind === "community" && ref.url === "https://booklive.jp/review/list/title_id/1237250/vol_no/003"),
  "Erebus's CONT-AR note must link the BookLive review, not the separate game page.");
const rudraMainInfo = archiveApi.getExtendedInfo("CHAR-DARK-RUDRA", "CONT-MAIN-LN", null);
assert.ok(rudraMainInfo && rudraMainInfo.sections.some(section => section.text.includes("no demuestra que Rudra") && section.text.includes("Rudra Familia")),
  "Rudra's note must distinguish group responsibility from unproven personal authorization.");
assert.ok(rudraMainInfo.references.some(ref => ref.kind === "publisher_metadata" && ref.url.includes("yenpress.com/titles/9781975385026")),
  "The vol. 14 publisher product page must be labelled as metadata rather than narrative evidence.");
assert.ok(rudraMainInfo.sections.some(section => section.title === "Ruta adicional de consulta licenciada" && section.text.includes("no páginas de la muestra")),
  "Rudra's note must expose the new licensed route without claiming the sample was read.");
assert.ok(rudraMainInfo.references.some(ref => ref.kind === "licensed_preview" && ref.url === "https://play.google.com/store/books/details/Fujino_Omori_Is_It_Wrong_to_Try_to_Pick_Up_Girls_i?id=PLS9DwAAQBAJ"),
  "Rudra's dossier must link the Google Play Books sample route with its access limit.");
assert.ok(rudraMainInfo.references.some(ref => ref.kind === "licensed_preview" && ref.url === "https://bookwalker.jp/deb74ef953-7194-47cb-8abb-7453a4b2e353/?sample=1"),
  "Rudra's dossier must keep the existing BOOK☆WALKER sample route reachable.");
assert.ok(rudraMainInfo.sections.some(section => section.text.includes("le habría gustado invitar") && section.text.toLowerCase().includes("no demuestra que rudra conociera")),
  "Rudra's later appearance must be exposed as secondary evidence without implying prior authorization.");
assert.ok(rudraMainInfo.references.some(ref => ref.kind === "community" && ref.url === "https://danmachi.fandom.com/wiki/DanMachi_Light_Novel_Volume_14/Synopsis"),
  "Rudra's personal-scene lead must link the volume 14 community synopsis.");
assert.ok(rudraMainInfo.references.some(ref => ref.kind === "licensed_preview" && ref.url === "https://booklive.jp/product/index/title_id/201522/vol_no/014"),
  "Rudra's main-novel note must expose BookLive's vol. 14 trial-offer page as metadata only.");

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

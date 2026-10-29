"use strict";

const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");

const read = relative => fs.readFileSync(path.join(__dirname, "..", relative), "utf8");
const dmr045 = read("lore/danmachi/research/inbox/DANMACHI-RESEARCH-045-dark-era-characters-continuity-audit.md");
const dmr029 = read("lore/danmachi/research/inbox/DANMACHI-RESEARCH-029-historical-character-provenance.md");
const sources = read("lore/danmachi/sources/00-registro-fuentes.md");
const alfia = read("lore/danmachi/characters/dark-era/alfia.md");
const zald = read("lore/danmachi/characters/dark-era/zald.md");
const erebus = read("lore/danmachi/characters/dark-era/erebus.md");
const meteria = read("lore/danmachi/characters/dark-era/meteria.md");
const rudra = read("lore/danmachi/characters/dark-era/rudra.md");
const queue = read("lore/danmachi/WORK_QUEUE.md");
const corpus = require("../src/lore-corpus.js");

function section(markdown, id) {
  const start = markdown.indexOf("### " + id + " ·");
  assert.notEqual(start, -1, "missing " + id);
  const next = markdown.indexOf("\n### ", start + 4);
  return markdown.slice(start, next === -1 ? markdown.length : next);
}

const alfiaV20 = section(dmr045, "DMR-045-CLM-015");
assert.match(alfiaV20, /DMR-029-SRC-001/);
assert.match(alfiaV20, /https:\/\/danmachi\.fandom\.com\/wiki\/Alfia/);
assert.match(alfiaV20, /no confirma que la maga de cabello gris sea Alfia/i);

const erebusIdentity = section(dmr045, "DMR-045-CLM-003");
assert.match(erebusIdentity, /continuity_scope: CONT-GAME/);
assert.match(erebusIdentity, /no se transfieren automáticamente a la novelización/i);
const erebusMind = section(dmr045, "DMR-045-CLM-018");
assert.match(erebusMind, /continuity_scope: CONT-GAME/);
assert.match(erebusMind, /COMMUNITY_WIKI/);
assert.match(erebus, /DMR-045-CLM-018/);
assert.match(erebus, /no.*novelización/i);

const alfiaHealth = section(dmr029, "DMR-029-CLM-006");
assert.match(alfiaHealth, /rama de un árbol sagrado/i);
assert.match(alfiaHealth, /pista secundaria/i);
assert.match(alfia, /árbol sagrado/i);
assert.match(alfia, /no hay aquí un pasaje de novela cotejado/i);

const meteriaAu = section(dmr029, "DMR-029-CLM-012");
assert.match(meteriaAu, /CONT-AU/);
assert.match(meteriaAu, /dulce/);
assert.match(meteriaAu, /no como confirmación de acontecimientos, rasgos permanentes o convivencia de la novela principal/i);
assert.match(meteria, /CONT-AU/);
assert.match(meteria, /dulce/);
 
// The author-published story and its special-edition booklet are already registered.
// Treat the narrative as CONT-AU, not as proof of the five open primary-canon cases.
const authorNoteSource = sources.slice(
  sources.indexOf("## DMR-029-SRC-016"),
  sources.indexOf("## DMR-029-SRC-017")
);
assert.match(authorNoteSource, /source_type: AUTHOR_NOTE/);
assert.match(authorNoteSource, /continuity_scope: CONT-AU/);
assert.match(authorNoteSource, /source_checked_excerpt_only/);
assert.match(authorNoteSource, /no acredita los mismos sucesos o decisiones para CONT-MAIN-LN/i);

const officialBookletSource = sources.slice(
  sources.indexOf("## DMR-045-SRC-002"),
  sources.indexOf("## DMR-045-SRC-003")
);
assert.match(officialBookletSource, /OFFICIAL_PUBLISHER_PRODUCT_PAGE/);
assert.match(officialBookletSource, /CONT-AU/);
assert.match(officialBookletSource, /podría haber sucedido/i);

const officialSpecialEditionSource = sources.slice(
  sources.indexOf("## DMR-045-SRC-005"),
  sources.indexOf("## DMR-045-SRC-006")
);
assert.match(officialSpecialEditionSource, /continuity_scope: CONT-AR; el cuadernillo adicional queda en CONT-AU/);
assert.match(officialSpecialEditionSource, /claims_supported: \[\]/);
assert.match(dmr045, /Cruce de continuidad del relato autoral ya registrado/);
assert.match(dmr045, /Los cinco cotejos primarios de DMR-045 siguen abiertos/);

const sourceDirectory = corpus.getOnlineSourceDirectory();
for (const id of [
  "official-author-note-meteria-alfia-zald-au",
  "official-ga-astrea-record-3-limited-edition",
  "official-sbcr-astrea-record-3-product-page"
]) {
  assert.ok(sourceDirectory.some(source => source.id === id),
    "Already registered alternate-story sources must remain discoverable: " + id);
}


assert.match(sources, /DMR-045-CLM-015/);
assert.match(sources, /DMR-045-CLM-018/);
const rudraPersonalScene = section(dmr045, "DMR-045-CLM-021");
assert.match(rudraPersonalScene, /continuity_scope: CONT-MAIN-LN/);
assert.match(rudraPersonalScene, /source_id: DMR-045-SRC-046/);
assert.match(rudraPersonalScene, /no demuestra.*conociera.*autorizara/i);
assert.match(sources, /DMR-045-SRC-046/);
assert.match(rudra, /DMR-045-CLM-021/);
assert.match(rudra, /no demuestra que Rudra conociera.*autorizara/i);

const erebusMemorialLead = section(dmr045, "DMR-045-CLM-022");
assert.match(erebusMemorialLead, /continuity_scope: CONT-AR/);
assert.match(erebusMemorialLead, /source_id: DMR-045-SRC-043/);
assert.match(erebusMemorialLead, /verification_status: secondary_checked/);
assert.match(erebusMemorialLead, /no equivale a lectura directa de la novela/i);
assert.match(erebusMemorialLead, /no se crea una arista/i);
assert.match(sources, /claims_supported: \[DMR-045-CLM-006, DMR-045-CLM-022\]/);
assert.match(alfia, /DMR-045-CLM-022/);
assert.match(zald, /DMR-045-CLM-022/);
assert.match(erebus, /DMR-045-CLM-022/);
assert.match(queue, /Estado del subtrabajo.*DONE/i);
assert.match(queue, /## PRIORIDAD ACTUAL — DMR-045: cotejo primario de los cinco expedientes/);
assert.ok(queue.includes("## Etapa posterior — Orario y cobertura de la ciudad (pendiente tras DMR-045)"));
assert.match(queue, /DMR-045-SRC-026/);
assert.match(queue, /DMR-045-SRC-027/);
assert.match(queue, /DMR-045-SRC-028/);
assert.match(queue, /ninguna muestra consultada expuso páginas narrativas legibles/i);
assert.doesNotMatch(queue, /Tras terminar este barrido secundario, activar la etapa de Orario como siguiente prioridad/i);
assert.match(queue, /Cotejar los localizadores primarios pendientes/i);

assert.match(dmr045, /DMR-045-SRC-018/);
assert.match(dmr045, /DMR-045-SRC-019/);
assert.match(dmr045, /HTTP 429/);
assert.match(dmr045, /No preview available for this page/);
assert.match(dmr045, /Preview.*28 pages/);
assert.match(dmr045, /Page didn't load/);
assert.match(sources, /Preview.*28 pages/);
assert.match(sources, /Page didn't load/);
assert.match(sources, /DMR-045-SRC-018/);
assert.match(sources, /DMR-045-SRC-019/);
assert.match(dmr045, /DMR-045-SRC-020/);
assert.match(dmr045, /DMR-045-SRC-021/);
assert.match(dmr045, /DMR-045-SRC-022/);
assert.match(sources, /DMR-045-SRC-020/);
assert.match(sources, /DMR-045-SRC-021/);
assert.match(sources, /DMR-045-SRC-022/);
assert.match(queue, /DMR-045-SRC-020/);
assert.match(queue, /DMR-045-SRC-021/);
assert.match(queue, /DMR-045-SRC-022/);
assert.match(dmr045, /DMR-045-SRC-023/);
assert.match(dmr045, /DMR-045-SRC-024/);
assert.match(dmr045, /DMR-045-SRC-025/);
assert.match(sources, /DMR-045-SRC-023/);
assert.match(sources, /DMR-045-SRC-024/);
assert.match(sources, /DMR-045-SRC-025/);
assert.match(dmr045, /DMR-045-SRC-026/);
assert.match(dmr045, /DMR-045-SRC-027/);
assert.match(dmr045, /DMR-045-SRC-029/);
assert.match(sources, /DMR-045-SRC-017/);
assert.match(sources, /DMR-045-SRC-026/);
assert.match(sources, /DMR-045-SRC-027/);
assert.match(sources, /DMR-045-SRC-029/);
assert.match(dmr045, /un segundo intento del mismo día por la URL normal/i);
assert.match(queue, /DMR-045-SRC-023/);
assert.match(queue, /DMR-045-SRC-024/);
assert.match(queue, /DMR-045-SRC-025/);
assert.match(queue, /DMR-045-SRC-029/);
assert.match(erebus, /CONT-GAME/);
assert.match(meteria, /no pronuncia el nombre Meteria/i);
assert.match(queue, /Cotejar los localizadores primarios pendientes/i);

assert.match(dmr045, /DMR-045-SRC-030/);
assert.match(dmr045, /DMR-045-SRC-031/);
assert.match(dmr045, /DMR-045-SRC-032/);
assert.match(sources, /DMR-045-SRC-030/);
assert.match(sources, /DMR-045-SRC-031/);
assert.match(sources, /DMR-045-SRC-032/);
assert.match(queue, /DMR-045-SRC-030/);
assert.match(queue, /DMR-045-SRC-031/);
assert.match(queue, /DMR-045-SRC-032/);
assert.match(dmr045, /viewer\.bookwalker\.jp\/browserWebApi\/03\/view/);
assert.match(dmr045, /muestra compilada puede diferir parcialmente del producto final/i);
assert.match(dmr045, /timeout para Vols\. 2–3/i);

for (const id of ["DMR-045-SRC-033", "DMR-045-SRC-034", "DMR-045-SRC-035", "DMR-045-SRC-036", "DMR-045-SRC-037"]) {
  assert.match(dmr045, new RegExp(id));
  assert.match(sources, new RegExp(id));
  assert.match(queue, new RegExp(id));
}
for (const id of ["DMR-045-SRC-038"]) {
  assert.match(dmr045, new RegExp(id));
  assert.match(sources, new RegExp(id));
  assert.match(queue, new RegExp(id));
}
assert.match(dmr045, /no se ha establecido la independencia editorial/i);
assert.match(dmr045, /no cierran ninguno de los cinco localizadores primarios/i);
assert.match(dmr045, /Cache miss/);
assert.ok(sources.includes("https://nook.barnesandnoble.com/products/9781975385026/sample?sourceEan=9781975385019"));

 
const bookliveVol20 = sources.slice(
  sources.indexOf("## DMR-045-SRC-052"),
  sources.indexOf("## DMR-052-SRC-001")
);
assert.match(bookliveVol20, /LICENSED_RETAILER_PRODUCT_PAGE/);
assert.match(bookliveVol20, /verification_status: metadata_checked_only/);
assert.match(bookliveVol20, /claims_supported: \[\]/);
assert.match(bookliveVol20, /events_supported: \[\]/);
assert.match(bookliveVol20, /https:\/\/booklive\.jp\/product\/index\/title_id\/201522\/vol_no\/020/);
assert.match(bookliveVol20, /ブラウザ試し読み/);
assert.match(bookliveVol20, /lector queda desconocido|estado del lector es desconocido/i);
assert.match(dmr045, /Nueva ruta licenciada de BookLive para el volumen 20/);
assert.match(dmr045, /no se abrió el lector desde esos controles/i);

const bookliveSource = corpus.getOnlineSourceDirectory().find(
  source => source.id === "licensed-retailer-booklive-danmachi-vol20-preview"
);
assert.ok(bookliveSource, "The new BookLive volume 20 metadata route must be discoverable.");
assert.equal(bookliveSource.category, "licensed_retailer");
assert.ok(bookliveSource.url.includes("booklive.jp/product/index/title_id/201522/vol_no/020"));
assert.match(bookliveSource.limits, /metadata_checked_only/);
assert.match(bookliveSource.limits, /No se abrió el lector/);

const sourceIds = [...sources.matchAll(/^- source_id: (DMR-045-SRC-\d{3})$/gm)].map(match => match[1]);
assert.equal(new Set(sourceIds).size, sourceIds.length, "DMR-045 source IDs must be unique");

for (const id of ["DMR-045-SRC-039", "DMR-045-SRC-040", "DMR-045-SRC-041", "DMR-045-SRC-042"]) {
  assert.match(dmr045, new RegExp(id));
  assert.match(sources, new RegExp(id));
  assert.match(queue, new RegExp(id));
}
assert.match(dmr045, /Now loading\.\.\./);
assert.ok(dmr045.includes("https://ebook.sbcr.jp/landing/p/danmachi"));

const combatMatchupClaim = section(dmr045, "DMR-045-CLM-006");
assert.ok(combatMatchupClaim.includes("source_id: DMR-045-SRC-043"));
assert.ok(combatMatchupClaim.includes("source_type: COMMUNITY_REVIEW"));
assert.ok(combatMatchupClaim.includes("verification_status: secondary_checked"));
assert.ok(combatMatchupClaim.includes("sinopsis editorial oficial de SB Creative"));
assert.ok(combatMatchupClaim.includes("no nombra a estos participantes"));
assert.ok(!combatMatchupClaim.includes("official_indexed_publisher_synopsis_excerpt"));
assert.ok(sources.includes("source_id: DMR-045-SRC-043"));
const publisherSynopsis005 = sources.slice(sources.indexOf("## DMR-045-SRC-005"), sources.indexOf("## DMR-045-SRC-006"));
assert.ok(publisherSynopsis005.includes("claims_supported: []"));
assert.ok(!publisherSynopsis005.includes("claims_supported: [DMR-045-CLM-006]"));
assert.ok(sources.toLowerCase().includes("booklive — reseña comunitaria de astrea record 3"));
assert.ok(alfia.includes("DMR-045-SRC-043"));
assert.ok(zald.includes("DMR-045-SRC-043"));

const ids = [...dmr045.matchAll(/^### (DMR-045-CLM-\d{3}) ·/gm)].map(match => match[1]);
assert.equal(new Set(ids).size, ids.length, "DMR-045 claim IDs must be unique");

const googlePlayVol20 = sources.slice(
  sources.indexOf("## DMR-045-SRC-055"),
  sources.indexOf("## DMR-056-SRC-001")
);
assert.match(googlePlayVol20, /source_type: LICENSED_RETAILER_PRODUCT_PAGE_AND_SAMPLE_OFFER/);
assert.match(googlePlayVol20, /official_url: https:\/\/play\.google\.com\/store\/books\/details\//);\nassert.match(googlePlayVol20, /id=XWHEEQAAQBAJ/);
assert.match(googlePlayVol20, /claims_supported: \[\]/);
assert.match(googlePlayVol20, /events_supported: \[\]/);
assert.match(googlePlayVol20, /verification_status: metadata_checked_only/);
assert.match(googlePlayVol20, /insufficient_credits/);
assert.match(googlePlayVol20, /no demuestra un fallo del lector/i);
assert.match(dmr045, /DMR-045-SRC-055/);
assert.match(dmr045, /XWHEEQAAQBAJ/);
assert.match(queue, /DMR-045-SRC-055/);
assert.match(corpus.getOnlineSourceDirectory().find(source => source.id === "licensed-preview-google-play-danmachi-vol20").limits, /claims_supported: \[\]/);

console.log("DMR-045 public secondary sweep and continuity boundaries validated.");

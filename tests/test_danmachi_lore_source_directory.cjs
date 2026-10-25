"use strict";

const assert = require("node:assert/strict");
const corpus = require("../src/lore-corpus.js");

const sources = corpus.getOnlineSourceDirectory();
const required = [
  ["community-alfia-en", "https://danmachi.fandom.com/wiki/Alfia"],
  ["community-meteria-en", "https://danmachi.fandom.com/wiki/Meteria"],
  ["community-meteria-es", "https://danmachi.fandom.com/es/wiki/Meteria"],
  ["community-zald-en", "https://danmachi.fandom.com/wiki/Zald"],
  ["community-erebus-en", "https://danmachi.fandom.com/wiki/Erebus"],
  ["community-rudra-familia-en", "https://danmachi.fandom.com/wiki/Rudra_Familia"],
  ["community-rudra-es", "https://danmachi.fandom.com/es/wiki/Rudra"]
];

const requiredIds = required.map(([id]) => id);
assert.equal(new Set(requiredIds).size, requiredIds.length, "test list must not repeat source IDs");

for (const [id, url] of required) {
  const matches = sources.filter(source => source.id === id);
  assert.equal(matches.length, 1, id + " must exist exactly once in the in-app source directory");
  const source = matches[0];
  assert.equal(source.url, url, id + " must keep the expected public URL");
  assert.ok(source.title && source.coverage && source.limits, id + " must document title, coverage, and limits");
  assert.equal(source.authority, "Fuente secundaria", id + " must be labeled as a secondary source");
  assert.match(source.limits, /CONT-/, id + " must state a continuity/evidence boundary");
}

const licensedAstrea = sources.filter(source => source.id === "publisher-yenpress-astrea-record-vol3");
assert.equal(licensedAstrea.length, 1, "the licensed English edition must have one discoverable source entry");
assert.equal(licensedAstrea[0].url, "https://yenpress.com/titles/9781975379926-astrea-record-vol-3-is-it-wrong-to-try-to-pick-up-girls-in-a-dungeon-tales-of-heroes");
assert.equal(licensedAstrea[0].authority, "Catálogo editorial oficial");
assert.match(licensedAstrea[0].coverage, /ISBN 9781975379926/);
assert.match(licensedAstrea[0].limits, /no texto narrativo/i);
assert.match(licensedAstrea[0].limits, /no usarla para verificar biografías/i, "publisher metadata must not be treated as a character-specific primary locator");

const bookwalkerProduct = sources.filter(source => source.id === "licensed-retailer-bookwalker-astrea-record-vol3");
assert.equal(bookwalkerProduct.length, 1, "the licensed Japanese edition listing must be discoverable exactly once");
assert.equal(bookwalkerProduct[0].url, "https://bookwalker.jp/dead6afbb1-d488-4cf3-a255-669537f7f049/");
assert.equal(bookwalkerProduct[0].authority, "Distribuidor licenciado");
assert.match(bookwalkerProduct[0].coverage, /試し読み/);
const bookwalkerSample = sources.filter(source => source.id === "licensed-retailer-bookwalker-astrea-record-vol3-sample");
assert.equal(bookwalkerSample.length, 1, "the free preview route must be discoverable exactly once");
assert.equal(bookwalkerSample[0].url, "https://bookwalker.jp/dead6afbb1-d488-4cf3-a255-669537f7f049/?sample=1");
assert.equal(bookwalkerSample[0].authority, "Muestra gratuita de distribuidor licenciado");
assert.match(bookwalkerSample[0].limits, /Could not download/);
assert.match(bookwalkerSample[0].limits, /No se obtuvo texto narrativo legible|ningún intento devolvió páginas narrativas legibles/i);
assert.match(bookwalkerSample[0].limits, /no demuestra(?:n)? que la edición esté indisponible/i);
const meteriaEn = sources.find(source => source.id === "community-meteria-en");
assert.match(meteriaEn.limits, /no nombra a Meteria/i,
  "the source directory must preserve the limit of the Memoria Freese interview");
const erebus = sources.find(source => source.id === "community-erebus-en");
assert.match(erebus.limits, /Eren.*no se incorpora/i,
  "the source directory must not promote the unverified Erebus alias");
const rudraFamilia = sources.find(source => source.id === "community-rudra-familia-en");
assert.match(rudraFamilia.limits, /no prueba que el dios Rudra/i,
  "the source directory must distinguish a Familia action from personal responsibility by Rudra");

const googleBooksPreview = sources.filter(source => source.id === "licensed-preview-google-books-danmachi-vol20");
assert.equal(googleBooksPreview.length, 1, "the authorized Google Books preview route must be discoverable exactly once");
assert.equal(googleBooksPreview[0].category, "licensed_retailer");
assert.equal(googleBooksPreview[0].url, "https://books.google.com/books?id=XWHEEQAAQBAJ");
assert.match(googleBooksPreview[0].coverage, /The Heroes' Afterglow/);
assert.match(googleBooksPreview[0].coverage, /No preview available for this page/);
assert.match(googleBooksPreview[0].limits, /HTTP 429/);
assert.match(googleBooksPreview[0].limits, /No se infiere que un personaje esté ausente/i);
const binbAstreaPreview = sources.filter(source => source.id === "licensed-preview-binb-astrea-record-vol3");
assert.equal(binbAstreaPreview.length, 1, "the second authorized Astrea Record reader must be discoverable exactly once");
assert.equal(binbAstreaPreview[0].category, "licensed_retailer");
assert.equal(binbAstreaPreview[0].url, "https://r.binb.jp/epm/e1_270413_31102022103801/");
assert.match(binbAstreaPreview[0].limits, /no un localizador primario/i);
assert.match(binbAstreaPreview[0].coverage, /no expuso páginas narrativas/i);

const sbcrAstrea1 = sources.filter(source => source.id === "official-sbcr-astrea-record-vol1-preview-metadata-only");
const sbcrAstrea2 = sources.filter(source => source.id === "official-sbcr-astrea-record-vol2-preview-metadata-only");
const sbcrAstrea3 = sources.filter(source => source.id === "official-sbcr-astrea-record-vol3-preview-metadata-only");
for (const [label, rows, url] of [
  ["Astrea Record 1", sbcrAstrea1, "https://ebook.sbcr.jp/sbv.17050.sbcr/main.html?cid=81561017JAAA01MBJE3X&lginbtn=false"],
  ["Astrea Record 2", sbcrAstrea2, "https://ebook.sbcr.jp/sbv.17050.sbcr/main.html?cid=81561018JAAA02MBJE3X&lginbtn=false"],
  ["Astrea Record 3", sbcrAstrea3, "https://ebook.sbcr.jp/sbv.17050.sbcr/main.html?cid=81561019JAAA03MBJE3X&lginbtn=false"]
]) {
  assert.equal(rows.length, 1, label + " official sample route must be discoverable exactly once");
  assert.equal(rows[0].category, "official");
  assert.equal(rows[0].url, url);
  assert.match(rows[0].coverage, /Now loading/i);
  assert.match(rows[0].limits, /no aporta capítulo, página, escena/i);
  assert.match(rows[0].limits, /No inferir presencia o ausencia/i);
}

const gplayAstrea1 = sources.filter(source => source.id === "licensed-preview-google-play-astrea-record-vol1");
const gplayAstrea2 = sources.filter(source => source.id === "licensed-preview-google-play-astrea-record-vol2");
const gplayAstrea3 = sources.filter(source => source.id === "licensed-preview-google-play-astrea-record-vol3");
for (const [label, rows, url] of [
  ["Google Play Astrea Record 1", gplayAstrea1, "https://play.google.com/store/books/details/Fujino_Omori_Astrea_Record_Vol_1_Is_It_Wrong_to_Tr?id=M_3xEAAAQBAJ"],
  ["Google Play Astrea Record 2", gplayAstrea2, "https://play.google.com/store/books/details/Fujino_Omori_Astrea_Record_Vol_2_Is_It_Wrong_to_Tr?id=cLwFEQAAQBAJ"],
  ["Google Play Astrea Record 3", gplayAstrea3, "https://play.google.com/store/books/details/Fujino_Omori_Astrea_Record_Vol_3_Is_It_Wrong_to_Tr?id=Z0gVEQAAQBAJ"]
]) {
  assert.equal(rows.length, 1, label + " must be discoverable exactly once");
  assert.equal(rows[0].category, "licensed_retailer");
  assert.equal(rows[0].url, url);
  assert.match(rows[0].limits, /no páginas narrativas|ninguna página narrativa/i);
  assert.match(rows[0].limits, /metadata_checked_only/);
}
assert.match(gplayAstrea1[0].authority, /Free sample/);
assert.match(gplayAstrea2[0].authority, /Free sample/);
assert.match(gplayAstrea3[0].limits, /disponible o ausente globalmente/i);

const bookwalkerAstrea1 = sources.filter(source => source.id === "licensed-retailer-bookwalker-astrea-record-vol1-sample");
const bookwalkerAstrea2 = sources.filter(source => source.id === "licensed-retailer-bookwalker-astrea-record-vol2-sample");
for (const [label, rows, url] of [
  ["BOOK☆WALKER Astrea Record 1 sample", bookwalkerAstrea1, "https://bookwalker.jp/dee09029f8-9a55-40d2-bce2-384e8387f016/?sample=1"],
  ["BOOK☆WALKER Astrea Record 2 sample", bookwalkerAstrea2, "https://bookwalker.jp/deb27a4c03-eff6-43f8-a76b-105368b329aa/?sample=1"]
]) {
  assert.equal(rows.length, 1, label + " must be discoverable exactly once");
  assert.equal(rows[0].category, "licensed_retailer");
  assert.equal(rows[0].url, url);
  assert.match(rows[0].limits, /no se obtuvo (página|texto) narrativ/i);
  assert.match(rows[0].limits, /metadata_checked_only/);
}
assert.match(bookwalkerAstrea1[0].limits, /Could not download/);
assert.match(bookwalkerAstrea2[0].limits, /timeout/);
const bookwalkerAstrea3 = sources.filter(source => source.id === "licensed-retailer-bookwalker-astrea-record-vol3-sample");
assert.equal(bookwalkerAstrea3.length, 1, "the existing vol. 3 sample must not be duplicated as a new ID");
assert.match(bookwalkerAstrea3[0].limits, /reintento.*timeout/i);


const bookwalkerDanmachi14 = sources.filter(source => source.id === "licensed-retailer-bookwalker-danmachi-vol14-sample");
assert.equal(bookwalkerDanmachi14.length, 1, "DanMachi vol. 14 sample route must be discoverable exactly once");
assert.equal(bookwalkerDanmachi14[0].category, "licensed_retailer");
assert.equal(bookwalkerDanmachi14[0].url, "https://bookwalker.jp/deb74ef953-7194-47cb-8abb-7453a4b2e353/?sample=1");
assert.match(bookwalkerDanmachi14[0].limits, /Could not download/);
assert.match(bookwalkerDanmachi14[0].limits, /No se obtuvo página narrativa/i);
assert.match(bookwalkerDanmachi14[0].limits, /no respalda la trampa de Rudra Familia/i);
assert.match(bookwalkerDanmachi14[0].limits, /metadata_checked_only/);

console.log("DanMachi source directory: secondary references and licensed preview limits validated.");

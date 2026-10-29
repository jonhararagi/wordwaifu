"use strict";

const assert = require("node:assert/strict");
const corpus = require("../src/lore-corpus.js");

const sources = corpus.getOnlineSourceDirectory();
const required = [
  ["community-alfia-en", "https://danmachi.fandom.com/wiki/Alfia"],
  ["community-meteria-en", "https://danmachi.fandom.com/wiki/Meteria"],
  ["community-meteria-es", "https://danmachi.fandom.com/es/wiki/Meteria"],
  ["community-zald-en", "https://danmachi.fandom.com/wiki/Zald"],
  ["community-vol20-synopsis", "https://danmachi.fandom.com/wiki/DanMachi_Light_Novel_Volume_20/Synopsis"],
  ["community-volume-14-synopsis", "https://danmachi.fandom.com/wiki/DanMachi_Light_Novel_Volume_14/Synopsis"],
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

const vol20Synopsis = sources.filter(source => source.id === "community-vol20-synopsis");
assert.equal(vol20Synopsis.length, 1, "the volume 20 chapter synopsis must be discoverable exactly once");
assert.equal(vol20Synopsis[0].authority, "Fuente secundaria");
assert.match(vol20Synopsis[0].coverage, /DMR-045-CLM-019.*DMR-045-CLM-020/);
assert.match(vol20Synopsis[0].limits, /no texto primario ni localizador de página/i);
assert.match(vol20Synopsis[0].limits, /CONT-MAIN-LN/);

const volume14Synopsis = sources.filter(source => source.id === "community-volume-14-synopsis");
assert.equal(volume14Synopsis.length, 1, "the volume 14 chapter synopsis must be discoverable exactly once");
assert.equal(volume14Synopsis[0].authority, "Fuente secundaria");
assert.match(volume14Synopsis[0].coverage, /Ryuu.*Rudra.*Gremio/);
assert.match(volume14Synopsis[0].limits, /no página narrativa primaria/i);
assert.match(volume14Synopsis[0].limits, /no demuestra que Rudra conociera, ordenara o autorizara/i);
assert.match(volume14Synopsis[0].limits, /CONT-MAIN-LN/);

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
const bookLiveVol14 = sources.filter(source => source.id === "licensed-retailer-booklive-danmachi-vol14");
assert.equal(bookLiveVol14.length, 1, "BookLive DanMachi vol. 14 route must appear exactly once");
assert.equal(bookLiveVol14[0].category, "licensed_retailer");
assert.equal(bookLiveVol14[0].url, "https://booklive.jp/product/index/title_id/201522/vol_no/014");
assert.equal(bookLiveVol14[0].authority, "Distribuidor licenciado; vista previa anunciada, no inspeccionada");
assert.match(bookLiveVol14[0].coverage, /ブラウザ試し読み/);
assert.match(bookLiveVol14[0].coverage, /no el contenido de la muestra/i);
assert.match(bookLiveVol14[0].limits, /no pasaje narrativo recuperado/i);
assert.match(bookLiveVol14[0].limits, /no respalda la trampa de Rudra Familia/i);
assert.match(bookLiveVol14[0].limits, /metadata_checked_only/);
const bookLiveAstrea3 = sources.filter(source => source.id === "licensed-retailer-booklive-astrea-record-vol3");
assert.equal(bookLiveAstrea3.length, 1, "BookLive Astrea Record 3 route must appear exactly once");
assert.equal(bookLiveAstrea3[0].category, "licensed_retailer");
assert.equal(bookLiveAstrea3[0].url, "https://booklive.jp/product/index/title_id/1237250/vol_no/003");
assert.equal(bookLiveAstrea3[0].authority, "Distribuidor licenciado; vista previa anunciada, no inspeccionada");
assert.match(bookLiveAstrea3[0].coverage, /アプリ試し読みはこちら/);
assert.match(bookLiveAstrea3[0].coverage, /no el contenido de la muestra/i);
assert.match(bookLiveAstrea3[0].limits, /no pasaje narrativo recuperado/i);
assert.match(bookLiveAstrea3[0].limits, /no verifica escenas, habilidades, identidades o relaciones/i);
assert.match(bookLiveAstrea3[0].limits, /metadata_checked_only/);
const meteriaFutureAuthorInterview = sources.filter(source => source.id === "author-interview-ln-news-2024-zeus-meteria-familia-chronicle");
assert.equal(meteriaFutureAuthorInterview.length, 1, "the 2024 author interview must be discoverable exactly once");
assert.equal(meteriaFutureAuthorInterview[0].category, "interview");
assert.equal(meteriaFutureAuthorInterview[0].url, "https://www.ln-news.com/articles/121215");
assert.equal(meteriaFutureAuthorInterview[0].authority, "Entrevista pública con declaración directa del autor sobre posibles proyectos futuros");
assert.match(meteriaFutureAuthorInterview[0].coverage, /Familia Chronicle.*Zeus.*Meteria/i);
assert.match(meteriaFutureAuthorInterview[0].limits, /no narración/i);
assert.match(meteriaFutureAuthorInterview[0].limits, /No confirma maternidad de Bell, parentesco Meteria–Alfia/i);
assert.match(meteriaFutureAuthorInterview[0].limits, /CONT-UNVERIFIED/);
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
assert.match(googleBooksPreview[0].coverage, /Preview.*28 pages/);
assert.match(googleBooksPreview[0].coverage, /Page didn't load/);
assert.match(googleBooksPreview[0].limits, /HTTP 429/);
assert.match(googleBooksPreview[0].limits, /No se infiere que un personaje esté ausente/i);
assert.match(googleBooksPreview[0].limits, /metadata_checked_only/);
const googlePlayVol20 = sources.filter(source => source.id === "licensed-preview-google-play-danmachi-vol20");
assert.equal(googlePlayVol20.length, 1, "Google Play Books DanMachi vol. 20 route must appear exactly once");
assert.equal(googlePlayVol20[0].category, "licensed_retailer");
assert.equal(googlePlayVol20[0].url, "https://play.google.com/store/books/details/Fujino_Omori_Is_It_Wrong_to_Try_to_Pick_Up_Girls_i?id=XWHEEQAAQBAJ");
assert.equal(googlePlayVol20[0].authority, "Distribuidor licenciado; muestra anunciada, no texto narrativo");
assert.match(googlePlayVol20[0].coverage, /Free sample/);
assert.match(googlePlayVol20[0].coverage, /XWHEEQAAQBAJ/);
assert.match(googlePlayVol20[0].limits, /insufficient_credits/);
assert.match(googlePlayVol20[0].limits, /no una falla confirmada del lector/i);
assert.match(googlePlayVol20[0].limits, /metadata_checked_only/);
assert.ok(googlePlayVol20[0].limits.includes("claims_supported: []"));

const koboVol20 = sources.filter(source => source.id === "licensed-retailer-kobo-danmachi-vol20");
assert.equal(koboVol20.length, 1, "Kobo DanMachi vol. 20 route must appear exactly once");
assert.equal(koboVol20[0].category, "licensed_retailer");
assert.equal(koboVol20[0].url, "https://www.kobo.com/us/en/ebook/is-it-wrong-to-try-to-pick-up-girls-in-a-dungeon-vol-20-light-novel");
assert.equal(koboVol20[0].authority, "Distribuidor licenciado; vista previa anunciada, no inspeccionada");
assert.match(koboVol20[0].coverage, /Preview Now/);
assert.match(koboVol20[0].coverage, /Cache miss/);
assert.match(koboVol20[0].limits, /no texto narrativo recuperado/i);
assert.match(koboVol20[0].limits, /no se inspeccionaron páginas/i);
assert.match(koboVol20[0].limits, /CONT-MAIN-LN/);
assert.match(koboVol20[0].limits, /metadata_checked_only/);
assert.ok(koboVol20[0].limits.includes("claims_supported: []"));

const bookwalkerVol20 = sources.filter(source => source.id === "licensed-retailer-bookwalker-danmachi-vol20");
assert.equal(bookwalkerVol20.length, 1, "BOOK☆WALKER DanMachi vol. 20 route must appear exactly once");
assert.equal(bookwalkerVol20[0].category, "licensed_retailer");
assert.equal(bookwalkerVol20[0].url, "https://bookwalker.jp/de2996c502-7cb0-42b4-821a-b63df271d442/?sample=1");
assert.equal(bookwalkerVol20[0].authority, "Distribuidor licenciado; muestra anunciada, no inspeccionada");
assert.match(bookwalkerVol20[0].coverage, /試し読み/);
assert.match(bookwalkerVol20[0].coverage, /Internal Error/);
assert.match(bookwalkerVol20[0].coverage, /not accessible via this tool/);
assert.match(bookwalkerVol20[0].coverage, /no se confirmó una respuesta HTTP del visor/);
assert.match(bookwalkerVol20[0].limits, /no texto narrativo recuperado/i);
assert.match(bookwalkerVol20[0].limits, /no se abrió ninguna página/i);
assert.match(bookwalkerVol20[0].limits, /CONT-MAIN-LN/);
assert.match(bookwalkerVol20[0].limits, /metadata_checked_only/);
assert.ok(bookwalkerVol20[0].limits.includes("claims_supported: []"));

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


const googlePlayDanmachi14 = sources.filter(source => source.id === "licensed-preview-google-play-books-danmachi-vol14");
assert.equal(googlePlayDanmachi14.length, 1, "Google Play Books vol. 14 sample route must be discoverable exactly once");
assert.equal(googlePlayDanmachi14[0].category, "licensed_retailer");
assert.equal(googlePlayDanmachi14[0].url, "https://play.google.com/store/books/details/Fujino_Omori_Is_It_Wrong_to_Try_to_Pick_Up_Girls_i?id=PLS9DwAAQBAJ");
assert.match(googlePlayDanmachi14[0].authority, /Free sample/);
assert.match(googlePlayDanmachi14[0].limits, /No se leyó el capítulo 13/i);
assert.match(googlePlayDanmachi14[0].limits, /metadata_checked_only/);
assert.match(googlePlayDanmachi14[0].limits, /no respalda la trampa de Rudra Familia/i);
const bookwalkerDanmachi14 = sources.filter(source => source.id === "licensed-retailer-bookwalker-danmachi-vol14-sample");
assert.equal(bookwalkerDanmachi14.length, 1, "DanMachi vol. 14 sample route must be discoverable exactly once");
assert.equal(bookwalkerDanmachi14[0].category, "licensed_retailer");
assert.equal(bookwalkerDanmachi14[0].url, "https://bookwalker.jp/deb74ef953-7194-47cb-8abb-7453a4b2e353/?sample=1");
assert.match(bookwalkerDanmachi14[0].limits, /Could not download/);
assert.match(bookwalkerDanmachi14[0].limits, /No se obtuvo página narrativa/i);
assert.match(bookwalkerDanmachi14[0].limits, /no respalda la trampa de Rudra Familia/i);
assert.match(bookwalkerDanmachi14[0].limits, /metadata_checked_only/);

const mirahezeSources = [
  ["community-miraheze-meteria-en", "https://danmachien.miraheze.org/wiki/Meteria"],
  ["community-miraheze-alfia-en", "https://danmachien.miraheze.org/wiki/Alfia"],
  ["community-miraheze-zald-en", "https://danmachien.miraheze.org/wiki/Zald"],
  ["community-miraheze-erebus-en", "https://danmachien.miraheze.org/wiki/Erebus"],
  ["community-miraheze-rudra-familia-en", "https://danmachien.miraheze.org/wiki/Rudra_Familia"]
];
for (const [id, url] of mirahezeSources) {
  const rows = sources.filter(source => source.id === id);
  assert.equal(rows.length, 1, id + " must be discoverable exactly once");
  assert.equal(rows[0].category, "community");
  assert.equal(rows[0].url, url);
  assert.match(rows[0].limits, /no.*(fuente oficial|localizador primario|fuente primaria|canon primario)/i);
}
const mirahezeMeteria = sources.find(source => source.id === "community-miraheze-meteria-en");
assert.match(mirahezeMeteria.coverage, /madre de Bell/);
assert.match(mirahezeMeteria.coverage, /hermana gemela de Alfia/);
assert.match(mirahezeMeteria.limits, /independiente de otras wikis/i);
const mirahezeErebus = sources.find(source => source.id === "community-miraheze-erebus-en");
assert.match(mirahezeErebus.limits, /Eren.*sin confirmación primaria/i);
const mirahezeRudra = sources.find(source => source.id === "community-miraheze-rudra-familia-en");
assert.match(mirahezeRudra.limits, /no prueba que diseñara, conociera, ordenara o autorizara/i);


const bookwalkerAnthology1 = sources.filter(source => source.id === "licensed-retailer-bookwalker-astrea-record-vol1-sample-anthology");
const bookwalkerAnthology2 = sources.filter(source => source.id === "licensed-retailer-bookwalker-astrea-record-vol2-sample-anthology");
const bookwalkerAnthology3 = sources.filter(source => source.id === "licensed-retailer-bookwalker-astrea-record-vol3-sample-anthology");
for (const [label, rows, url] of [
  ["BOOK☆WALKER October anthology / Astrea Record 1", bookwalkerAnthology1, "https://bookwalker.jp/dedafe030d-bc1c-4b5a-ad6a-877ba7bc3e7b/?sample=2"],
  ["BOOK☆WALKER November anthology / Astrea Record 2", bookwalkerAnthology2, "https://bookwalker.jp/ded45bc452-2ba7-41c9-9d75-e6951e5231fc/?sample=2"],
  ["BOOK☆WALKER December anthology / Astrea Record 3", bookwalkerAnthology3, "https://bookwalker.jp/def1fe306c-b1b8-4c55-9390-1cb7f16d0775/?sample=2"]
]) {
  assert.equal(rows.length, 1, label + " route must be discoverable exactly once");
  assert.equal(rows[0].category, "licensed_retailer");
  assert.equal(rows[0].url, url);
  assert.match(rows[0].limits, /metadata_checked_only/);
  assert.match(rows[0].limits, /No se obtuvieron páginas narrativas|No se vio ninguna página narrativa/i);
}
assert.match(bookwalkerAnthology1[0].limits, /viewer\.bookwalker\.jp/);
assert.match(bookwalkerAnthology1[0].limits, /timeout/);
assert.match(bookwalkerAnthology2[0].limits, /timeout/);
assert.match(bookwalkerAnthology3[0].limits, /timeout/);
assert.match(bookwalkerAnthology1[0].coverage, /puede diferir parcialmente del producto final/i);

const barnesNobleDanmachi14 = sources.filter(source => source.id === "licensed-retailer-barnes-noble-danmachi-vol14-sample");
assert.equal(barnesNobleDanmachi14.length, 1, "Barnes & Noble NOOK vol. 14 sample route must be discoverable exactly once");
assert.equal(barnesNobleDanmachi14[0].category, "licensed_retailer");
assert.equal(barnesNobleDanmachi14[0].url, "https://nook.barnesandnoble.com/products/9781975385026/sample?sourceEan=9781975385019");
assert.match(barnesNobleDanmachi14[0].authority, /Read sample/i);
assert.match(barnesNobleDanmachi14[0].coverage, /Barnes & Noble/);
assert.match(barnesNobleDanmachi14[0].limits, /Cache miss/i);
assert.match(barnesNobleDanmachi14[0].limits, /No se leyó el capítulo 13/i);
assert.match(barnesNobleDanmachi14[0].limits, /no demuestra indisponibilidad general/i);
assert.match(barnesNobleDanmachi14[0].limits, /metadata_checked_only/);
assert.match(barnesNobleDanmachi14[0].limits, /no respalda.*responsabilidad personal de Rudra/i);


const sbCreativePreviewSpecs = [
  ["official-sbcreative-astrea-record-vol1-sample", "https://ebook.sbcr.jp/sbv.17050.sbcr/main.html?cid=81561017JAAA01MBJE3X&lginbtn=false", /CONT-AR/],
  ["official-sbcreative-astrea-record-vol2-sample", "https://ebook.sbcr.jp/sbv.17050.sbcr/main.html?cid=81561018JAAA02MBJE3X&lginbtn=false", /CONT-AR/],
  ["official-sbcreative-astrea-record-vol3-sample", "https://ebook.sbcr.jp/sbv.17050.sbcr/main.html?cid=81561019JAAA03MBJE3X&lginbtn=false", /CONT-AR/],
  ["official-sbcreative-danmachi-vol14-sample", "https://ebook.sbcr.jp/sbv.17050.sbcr/main.html?cid=79739620JAAA14MBJE3X&lginbtn=false", /CONT-MAIN-LN/],
  ["official-sbcreative-danmachi-vol20-sample", "https://ebook.sbcr.jp/sbv.17050.sbcr/main.html?cid=81562869JAAA20MBJE3X&lginbtn=false", /CONT-MAIN-LN/]
];
for (const [id, url, continuity] of sbCreativePreviewSpecs) {
  const rows = sources.filter(source => source.id === id);
  assert.equal(rows.length, 1, id + " must be discoverable exactly once");
  assert.equal(rows[0].category, "official");
  assert.equal(rows[0].publisher, "SB Creative / GA Bunko");
  assert.equal(rows[0].url, url);
  assert.match(rows[0].authority, /立ち読み/);
  assert.ok(rows[0].coverage.includes("https://ebook.sbcr.jp/landing/p/danmachi"));
  assert.match(rows[0].limits, /Now loading\.\.\./);
  assert.match(rows[0].limits, /no demuestra indisponibilidad/i);
  assert.match(rows[0].limits, /metadata_checked_only/);
  assert.match(rows[0].limits, continuity);
}



const sbCreativeAstrea3CurrentReader = sources.filter(source => source.id === "official-sbcreative-astrea-record-vol3-sample");
assert.equal(sbCreativeAstrea3CurrentReader.length, 1, "SB Creative Astrea Record 3 reader route must remain discoverable exactly once");
assert.equal(sbCreativeAstrea3CurrentReader[0].category, "official");
assert.equal(sbCreativeAstrea3CurrentReader[0].url, "https://ebook.sbcr.jp/sbv.17050.sbcr/main.html?cid=81561019JAAA03MBJE3X&lginbtn=false");
assert.ok(sbCreativeAstrea3CurrentReader[0].coverage.includes("https://ebook.sbcr.jp/product/81561019JAAA03MBJE3X"));
assert.ok(sbCreativeAstrea3CurrentReader[0].coverage.includes("立ち読み（無料）"));
assert.ok(sbCreativeAstrea3CurrentReader[0].coverage.includes("お使いのブラウザは新ビューワに対応しておりません。"));
assert.match(sbCreativeAstrea3CurrentReader[0].limits, /Now loading\.\.\./);
assert.match(sbCreativeAstrea3CurrentReader[0].limits, /seven lines|siete líneas/i);
assert.match(sbCreativeAstrea3CurrentReader[0].limits, /insufficient_credits/);
assert.match(sbCreativeAstrea3CurrentReader[0].limits, /no demuestra indisponibilidad general/i);
assert.match(sbCreativeAstrea3CurrentReader[0].limits, /metadata_checked_only/);
assert.match(sbCreativeAstrea3CurrentReader[0].limits, /CONT-AR/);






const bookLiveAstrea3Review = sources.filter(source => source.id === "community-booklive-astrea-record-vol3-review");
assert.equal(bookLiveAstrea3Review.length, 1, "BookLive Astrea Record 3 review must be discoverable exactly once");
assert.equal(bookLiveAstrea3Review[0].category, "community");
assert.equal(bookLiveAstrea3Review[0].url, "https://booklive.jp/review/list/title_id/1237250/vol_no/003");
assert.ok(bookLiveAstrea3Review[0].authority.includes("Reseña comunitaria"));
assert.ok(bookLiveAstrea3Review[0].coverage.includes("Zald–Ottar"));
assert.ok(bookLiveAstrea3Review[0].coverage.includes("Alfia contra Astrea Familia"));
assert.ok(bookLiveAstrea3Review[0].limits.includes("no es la sinopsis editorial oficial"));
assert.ok(bookLiveAstrea3Review[0].limits.includes("CONT-AR"));
assert.ok(bookLiveAstrea3Review[0].coverage.includes("DMR-045-CLM-022"));
assert.ok(bookLiveAstrea3Review[0].coverage.includes("Bell y Hermes") && bookLiveAstrea3Review[0].coverage.includes("tumbas de Erebus, Zald y Alfia"));
assert.ok(bookLiveAstrea3Review[0].limits.includes("no confirmación de escena"));

const astreaRecordDifferences = sources.filter(source => source.id === "community-astrea-record-vol3-differences");
assert.equal(astreaRecordDifferences.length, 1, "Astrea Record vol. 3 differences page must be registered exactly once");
assert.equal(astreaRecordDifferences[0].category, "community");
assert.equal(astreaRecordDifferences[0].url, "https://danmachi.fandom.com/es/wiki/Astrea_Record_Novela_Ligera_Volumen_3/Diferencias");
assert.match(astreaRecordDifferences[0].authority, /Fuente secundaria/);
assert.ok(astreaRecordDifferences[0].coverage.includes("Lugio") && astreaRecordDifferences[0].coverage.includes("Gif Blessing"));
assert.ok(astreaRecordDifferences[0].coverage.includes("Deus Ambrosia") && astreaRecordDifferences[0].coverage.includes("Erebus"));
assert.match(astreaRecordDifferences[0].limits, /no texto primario/i);
assert.match(astreaRecordDifferences[0].limits, /CONT-GAME/);
assert.match(astreaRecordDifferences[0].limits, /ni ofrece paginación narrativa reproducible/i);

const sbCreativeVol20 = sources.filter(source => source.id === "official-sbcreative-danmachi-vol20-sample");
assert.equal(sbCreativeVol20.length, 1, "SB Creative DanMachi vol. 20 reader route must be discoverable exactly once");
assert.equal(sbCreativeVol20[0].category, "official");
assert.equal(sbCreativeVol20[0].url, "https://ebook.sbcr.jp/sbv.17050.sbcr/main.html?cid=81562869JAAA20MBJE3X&lginbtn=false");
assert.match(sbCreativeVol20[0].coverage, /ダンジョンに出会いを求めるのは間違っているだろうか２０/);
assert.match(sbCreativeVol20[0].limits, /prólogo|retrospectivas/i);
assert.match(sbCreativeVol20[0].limits, /Now loading\.\.\./);
assert.match(sbCreativeVol20[0].limits, /no se recuperó ninguna página narrativa/i);
assert.match(sbCreativeVol20[0].limits, /metadata_checked_only/);
assert.match(sbCreativeVol20[0].limits, /CONT-MAIN-LN/);



const dbookAstrea3Sample = sources.filter(source => source.id === "licensed-retailer-dbook-astrea-record-vol3-sample");
assert.equal(dbookAstrea3Sample.length, 1, "dBook Astrea Record 3 sample route must be discoverable exactly once");
assert.equal(dbookAstrea3Sample[0].category, "licensed_retailer");
assert.equal(dbookAstrea3Sample[0].url, "https://dbook.docomo.ne.jp/item/b1b573a541fb926b318d941d5c6181ceb595f28a264a162b9eb0c6f0d3f66cc9/2000/");
assert.equal(dbookAstrea3Sample[0].authority, "Distribuidor licenciado; muestra anunciada, no texto narrativo");
assert.match(dbookAstrea3Sample[0].coverage, /試し読み/);
assert.match(dbookAstrea3Sample[0].coverage, /applaunch\/view/);
assert.match(dbookAstrea3Sample[0].limits, /cero líneas de contenido/);
assert.match(dbookAstrea3Sample[0].limits, /no demuestra un fallo general del lector/i);
assert.match(dbookAstrea3Sample[0].limits, /metadata_checked_only/);
assert.match(dbookAstrea3Sample[0].limits, /CONT-AR/);

const dmr058SourceSpecs = [
  ["community-dmr058-daphne-en", "https://danmachi.fandom.com/wiki/Daphne_Lauros", /Elios Passion.*Laurus Wreath/i],
  ["community-dmr058-daphne-es", "https://danmachi.fandom.com/es/wiki/Daphne_Lauros", /Elios Passion.*Fencer Laureate/i],
  ["community-dmr058-cassandra-en", "https://danmachi.fandom.com/wiki/Cassandra_Ilion", /Soullight.*Five Dimension Troia/i],
  ["community-dmr058-magic-es", "https://danmachi.fandom.com/es/wiki/Magia", /Raumure.*Soullight.*Cure Ephialtes/i],
  ["community-dmr058-skills-es", "https://danmachi.fandom.com/es/wiki/Habilidades", /Five Dimension Troia/i]
];
for (const [id, url, coveragePattern] of dmr058SourceSpecs) {
  const rows = sources.filter(source => source.id === id);
  assert.equal(rows.length, 1, id + " must be discoverable exactly once in the in-app source directory");
  assert.equal(rows[0].category, "community");
  assert.equal(rows[0].publisher, "DanMachi Wiki contributors");
  assert.equal(rows[0].authority, "Fuente secundaria");
  assert.equal(rows[0].url, url);
  assert.match(rows[0].coverage, coveragePattern, id + " must describe its actual coverage");
  assert.match(rows[0].coverage, /DMR-058-SRC-00[1-5]/);
  assert.match(rows[0].limits, /CONT-SECONDARY/);
  assert.match(rows[0].limits, /no cotejad|no se recuper|no inferir|no aporta|no especifica|no una fuente primaria/i);
}
const dmr058Daphne = sources.find(source => source.id === "community-dmr058-daphne-en");
assert.match(dmr058Daphne.limits, /Escape está condicionado a persecución/i,
  "the source directory must preserve the conditional nature of Daphne's Escape skill");
const dmr058Cassandra = sources.find(source => source.id === "community-dmr058-cassandra-en");
assert.match(dmr058Cassandra.limits, /efecto concreto de Five Dimension Troia sigue desconocido/i,
  "the source directory must not invent Five Dimension Troia's effect");


const bigGanganAstreaManga = sources.filter(source => source.id === "official-sqex-big-gangan-astrea-record-manga");
assert.equal(bigGanganAstreaManga.length, 1, "official Astrea Record manga page must be discoverable exactly once");
assert.equal(bigGanganAstreaManga[0].category, "official");
assert.equal(bigGanganAstreaManga[0].url, "https://magazine.jp.square-enix.com/biggangan/introduction/danmachi_astrea/");
assert.match(bigGanganAstreaManga[0].authority, /adaptación manga.*metadatos/i);
assert.match(bigGanganAstreaManga[0].coverage, /2026-05-25/);
assert.match(bigGanganAstreaManga[0].coverage, /BookLive/);
assert.match(bigGanganAstreaManga[0].limits, /CONT-MANGA/);
assert.match(bigGanganAstreaManga[0].limits, /no demuestra su ausencia/i);
assert.match(bigGanganAstreaManga[0].limits, /insufficient_credits/);
assert.match(bigGanganAstreaManga[0].limits, /estado del lector es desconocido, no fallido/i);
assert.match(bigGanganAstreaManga[0].limits, /metadata_checked_only/);
assert.match(bigGanganAstreaManga[0].limits, /CONT-AR.*CONT-MAIN-LN/);

console.log("DanMachi source directory: secondary references and licensed preview limits validated.");

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
assert.match(bookwalkerSample[0].limits, /No se obtuvo texto narrativo legible/);
assert.match(bookwalkerSample[0].limits, /no demuestra que la edición esté indisponible/i);
const meteriaEn = sources.find(source => source.id === "community-meteria-en");
assert.match(meteriaEn.limits, /no nombra a Meteria/i,
  "the source directory must preserve the limit of the Memoria Freese interview");
const erebus = sources.find(source => source.id === "community-erebus-en");
assert.match(erebus.limits, /Eren.*no se incorpora/i,
  "the source directory must not promote the unverified Erebus alias");
const rudraFamilia = sources.find(source => source.id === "community-rudra-familia-en");
assert.match(rudraFamilia.limits, /no prueba que el dios Rudra/i,
  "the source directory must distinguish a Familia action from personal responsibility by Rudra");

console.log("DanMachi source directory: secondary references, licensed Yen Press metadata, and BOOK☆WALKER free-preview limits validated.");

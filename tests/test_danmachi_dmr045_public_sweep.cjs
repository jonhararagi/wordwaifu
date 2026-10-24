"use strict";

const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");

const read = relative => fs.readFileSync(path.join(__dirname, "..", relative), "utf8");
const dmr045 = read("lore/danmachi/research/inbox/DANMACHI-RESEARCH-045-dark-era-characters-continuity-audit.md");
const dmr029 = read("lore/danmachi/research/inbox/DANMACHI-RESEARCH-029-historical-character-provenance.md");
const sources = read("lore/danmachi/sources/00-registro-fuentes.md");
const alfia = read("lore/danmachi/characters/dark-era/alfia.md");
const erebus = read("lore/danmachi/characters/dark-era/erebus.md");
const meteria = read("lore/danmachi/characters/dark-era/meteria.md");
const queue = read("lore/danmachi/WORK_QUEUE.md");

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

assert.match(sources, /DMR-045-CLM-015/);
assert.match(sources, /DMR-045-CLM-018/);
assert.match(queue, /Estado del subtrabajo.*DONE/i);
assert.match(queue, /PRIORIDAD ACTUAL — Etapa 1: Orario como escenario/);
assert.match(queue, /Cotejar los localizadores primarios pendientes/i);

const ids = [...dmr045.matchAll(/^### (DMR-045-CLM-\d{3}) ·/gm)].map(match => match[1]);
assert.equal(new Set(ids).size, ids.length, "DMR-045 claim IDs must be unique");

console.log("DMR-045 public secondary sweep and continuity boundaries validated.");

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
for (const id of ["DMR-045-SRC-030", "DMR-045-SRC-031", "DMR-045-SRC-032", "DMR-045-SRC-033", "DMR-045-SRC-034"]) {
  assert.match(dmr045, new RegExp(id));
  assert.match(sources, new RegExp(id));
  assert.match(queue, new RegExp(id));
}
assert.match(dmr045, /no se ha establecido la independencia editorial/i);
assert.match(dmr045, /no cierran ninguno de los cinco localizadores primarios/i);
assert.match(erebus, /CONT-GAME/);
assert.match(meteria, /no pronuncia el nombre Meteria/i);
assert.match(queue, /Cotejar los localizadores primarios pendientes/i);

const ids = [...dmr045.matchAll(/^### (DMR-045-CLM-\d{3}) ·/gm)].map(match => match[1]);
assert.equal(new Set(ids).size, ids.length, "DMR-045 claim IDs must be unique");

console.log("DMR-045 public secondary sweep and continuity boundaries validated.");

"use strict";
const assert = require("node:assert/strict");
const { generateOutline } = require("../src/story-outline-generator.js");

const input = {
  chapterCount: 30,
  endingType: "closed",
  premise: "Lira quiere recuperar el archivo que borró la ciudad flotante antes de que el consejo cierre los portales.",
  conflict: "El consejo controla los portales y borra recuerdos para conservar el poder.",
  castPlan: "Lira, cartógrafa exiliada, quiere recuperar el archivo y teme volver a confiar.",
  personalityPlan: "Taren, coprotagonista, es leal pero oculta sus acuerdos con el consejo.",
  antagonistPlan: "La presidenta Veyra quiere monopolizar los portales porque cree que el caos destruirá la ciudad.",
  romancePlan: "Lira y Taren se atraen, pero la confianza depende de revelar sus secretos.",
  traumaPlan: "Lira perdió a su hermana durante un cierre de portal y evita depender de otros.",
  worldRules: "Los portales solo se abren con recuerdos entregados voluntariamente.",
  worldDynamics: "Los gremios controlan el acceso a los barrios flotantes.",
  powerCatalog: "Nombre: Cartografía de ecos; Precio: perder temporalmente un recuerdo propio; Límites: solo rastrea rutas ya recorridas.",
  arcs: ["Lira: aislamiento → cooperación → confianza con límites", "Taren: secreto → confesión → responsabilidad"],
  oldChapters: [{ id: "existing-1", title: "Antiguo", summary: "Antiguo resumen", content: "MANUSCRITO", status: "revision" }]
};

const chapters = generateOutline(input);
assert.equal(chapters.length, 30);
assert.equal(chapters[0].id, "existing-1");
assert.equal(chapters[0].content, "MANUSCRITO");
assert.equal(chapters[0].status, "revision");
assert.ok(chapters.every(ch => ch.title && ch.summary && ch.dramaticFunction && ch.beat));
assert.ok(chapters.some(ch => /Lira/.test(ch.summary)));
assert.ok(chapters.some(ch => /Veyra/.test(ch.summary)));
assert.ok(chapters.some(ch => /portal|recuerdo/i.test(ch.summary)));
assert.ok(chapters.some(ch => /Cartografía de ecos/.test(ch.summary)));
assert.ok(chapters[29].summary.includes("La historia resuelve el conflicto principal"));
assert.ok(!chapters.some(ch => /Concretá aquí la acción específica|mostrar una limitación/.test(ch.summary)));

for (const [endingType, phrase] of [
  ["open", "abre una pregunta nueva"],
  ["bittersweet", "pérdida irreversible"],
  ["cliffhanger", "cambia el tablero"],
  ["closed", "resuelve el conflicto principal"]
]) {
  const outline = generateOutline({ ...input, chapterCount: 1, endingType, oldChapters: [] });
  assert.equal(outline.length, 1);
  assert.ok(outline[0].summary.includes(phrase), endingType + " ending");
}
assert.equal(generateOutline({ ...input, chapterCount: 1, oldChapters: [] }).length, 1);
assert.equal(generateOutline({ ...input, chapterCount: 500, oldChapters: [] }).length, 500);
assert.ok(generateOutline({ ...input, chapterCount: 500, oldChapters: [] }).every(ch => ch.summary.length <= 4000));
console.log("PASS story outline generator: concrete events, context, persistence metadata, 1/30/500 chapters and all endings");

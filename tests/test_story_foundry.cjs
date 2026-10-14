"use strict";
const assert = require("node:assert/strict");
const { generateOutline, summarizeActs } = require("../src/story-foundry.js");
const story = {
  name: "Las rutas del eclipse",
  premise: "Una cartógrafa descubre que los mapas alteran la memoria.",
  conflict: "Evitar que el consejo borre una ciudad entera.",
  protagonistProfile: "Mira quiere encontrar la ruta borrada.",
  personalityDesign: "Es brillante, obstinada y teme equivocarse.",
  companionProfiles: "Kael protege la frontera; Noa negocia con información.",
  antagonistProfile: "El consejo cree que borrar recuerdos evita otra guerra.",
  traumaArc: "Mira perdió a su hermana en una expedición.",
  romanceArc: "Confianza lenta entre dos aliados que discrepan.",
  powerRules: "Cada mapa usado borra un recuerdo del cartógrafo.",
  worldRules: "Los mapas registran y modifican recuerdos."
};
const concept = require("../src/story-foundry.js").generateConcept({ worldType: "urban-supernatural", seed: 2 });
assert.ok(concept.premise && concept.conflict && concept.worldRules && concept.worldDynamics);
assert.ok(concept.protagonistProfile && concept.personalityDesign && concept.companionProfiles && concept.antagonistProfile);
assert.ok(concept.traumaArc && concept.romanceArc && concept.powerRules);
const closed = generateOutline({ count: 30, endingType: "closed", story });
assert.equal(closed.chapters.length, 30);
assert.equal(closed.chapters[0].number, 1);
assert.equal(closed.chapters[29].number, 30);
assert.equal(closed.chapters[0].act, "opening");
assert.equal(closed.chapters[29].act, "ending");
assert.match(closed.chapters[0].summary, /Mira quiere encontrar la ruta borrada/);
assert.match(closed.chapters[12].summary, /Kael protege la frontera/);
assert.equal(closed.chapters[22].act, "false-security", "Chapter 23 of a 30-chapter novel should begin the false-security and fall phase.");
assert.match(closed.chapters[29].summary, /Resolver el conflicto principal/);
assert.ok(closed.acts.some(act => act.start <= 23 && act.end >= 23), "The outline should include the fall/false-security phase around chapter 23 for a 30-chapter novel.");
const open = generateOutline({ count: 12, endingType: "open", story });
assert.equal(open.chapters.length, 12);
assert.match(open.chapters[11].summary, /final abierto|pregunta/i);
assert.ok(open.chapters.every(chapter => chapter.title && chapter.summary && chapter.act));
assert.deepEqual(summarizeActs(closed.chapters).map(act => act.key), closed.acts.map(act => act.key));
assert.equal(generateOutline({ count: 0, story }).chapters.length, 30);
assert.equal(generateOutline({ count: 800, story }).chapters.length, 500);
console.log("PASS Story Foundry: chapter count, act ranges, story-field integration, and open/closed endings.");

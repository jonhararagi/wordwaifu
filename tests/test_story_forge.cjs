const assert = require("node:assert/strict");
const forge = require("../src/story-forge.js");

function base(overrides = {}) {
  return {
    storyId: "novel-asteria",
    chapterCount: 10,
    endingType: "closed",
    premise: "Mira descubre mapas que cambian cuando alguien miente sobre la historia de Asteria.",
    conflict: "Protagonista: Mira debe demostrar quién altera los mapas antes de que desaparezca su ciudad.",
    castPlan: "Protagonista: Mira Solenne | quiere proteger a su hermana y demostrar la verdad.\nCoprotagonista: Kael, que oculta una orden antigua.",
    personalityPlan: "Mira es curiosa pero se precipita; Kael es reservado y teme repetir la guerra.",
    antagonistPlan: "Antagonista: el Consejo de Gremios, que borra barrios para conservar el poder.",
    romancePlan: "Mira y Kael desarrollan confianza lenta, con límites y desacuerdos.",
    traumaPlan: "Mira evita hablar de la desaparición de su hermana; su recuperación exige pedir ayuda.",
    worldType: "fantasy-adventure",
    worldRules: "Los mapas cambian solo cuando se destruye un testimonio original.",
    worldDynamics: "Los gremios controlan el transporte y la memoria pública.",
    powerCatalog: "Cartografía de eco: revela rutas perdidas, pero borra un recuerdo propio.",
    revealSecret: "El Consejo falsificó la fundación de Asteria.",
    revealClues: "Las campanas suenan cuando un testimonio fue alterado.",
    revealConsequences: "La revelación divide a los gremios y pone en peligro a los testigos.",
    pantheon: "La diosa de las rutas quiere recuperar sus templos por motivos propios.",
    ensemble: "Kael debe elegir entre su familia y el equipo; Noa dirige una evacuación.",
    arcs: ["Mira: control → confianza → liderazgo", "Kael: obediencia → duda → responsabilidad"],
    existingChapters: [],
    ...overrides
  };
}

function testGeneratesRequestedChapterCountAndStableUniqueIds() {
  for (const count of [1, 10, 30, 100, 500]) {
    const chapters = forge.generateOutline(base({ chapterCount: count }));
    assert.equal(chapters.length, count);
    assert.equal(new Set(chapters.map(chapter => chapter.id)).size, count);
    assert.ok(chapters.every(chapter => chapter.title && chapter.summary && chapter.status === "outline"));
  }
}

function testSummariesUseStorySpecificDetailsAndDramaticCausality() {
  const chapters = forge.generateOutline(base());
  const joined = chapters.map(chapter => chapter.summary).join("\n");
  for (const phrase of [
    "Mira descubre mapas", "Mira debe demostrar", "Consejo de Gremios",
    "Cartografía de eco", "La diosa de las rutas", "Mira y Kael",
    "desaparición de su hermana", "Los gremios controlan", "Tipo de mundo: fantasía y aventura"
  ]) assert.ok(joined.includes(phrase), "Missing story context in generated outline: " + phrase);
  assert.ok(chapters[0].summary.includes("La historia abre"));
  assert.match(forge.generateOutline(base({ chapterCount: 1 }))[0].title, /Arco completo/);
  assert.match(forge.generateOutline(base({ chapterCount: 1 }))[0].summary, /presentar una necesidad.*precio de resolver el conflicto/);
  assert.ok(chapters[9].summary.includes("resuelve el conflicto principal"));
  assert.ok(chapters.every(chapter => chapter.summary.includes("Giro y consecuencia:")));
}

function testEndingModesChangeTheFinalChapterGuidance() {
  const expected = {
    open: /pregunta abierta|pistas anteriores/i,
    closed: /resuelve el conflicto principal/i,
    bittersweet: /pérdida irreversible/i,
    cliffhanger: /revelación preparada/i
  };
  for (const [endingType, pattern] of Object.entries(expected)) {
    const chapters = forge.generateOutline(base({ chapterCount: 4, endingType }));
    assert.match(chapters[3].summary, pattern);
  }
}

function testRegenerationPreservesExistingManuscriptIdentityAndStatus() {
  const existingChapters = [
    { id: "custom-1", title: "Old title", summary: "Old summary", content: "Draft text must survive.", status: "revision" },
    { id: "custom-2", title: "Another", summary: "Summary", content: "", status: "complete" }
  ];
  const chapters = forge.generateOutline(base({ chapterCount: 3, existingChapters }));
  assert.equal(chapters[0].id, "custom-1");
  assert.equal(chapters[0].content, "Draft text must survive.");
  assert.equal(chapters[0].status, "revision");
  assert.equal(chapters[1].id, "custom-2");
  assert.equal(chapters[1].status, "complete");
  assert.equal(chapters[2].content, "");
}

function testAuditFindsMissingFieldsCountAndDuplicateIds() {
  const chapters = [
    { id: "same", title: "Uno", summary: "Resumen uno" },
    { id: "same", title: "", summary: "" }
  ];
  const result = forge.auditOutline({ chapterCount: 3, chapters, premise: "", conflict: "", castPlan: "", antagonistPlan: "" });
  assert.equal(result.valid, false);
  assert.ok(result.issues.some(issue => /plan pide 3/.test(issue)));
  assert.ok(result.issues.some(issue => /ID duplicado same/.test(issue)));
  assert.ok(result.issues.some(issue => /falta título/.test(issue)));
  assert.ok(result.issues.some(issue => /falta una premisa/i.test(issue)));
}

function testInvalidChapterCountsAreRejected() {
  for (const chapterCount of [0, -1, 1.5, 501, NaN]) {
    assert.throws(() => forge.generateOutline(base({ chapterCount })), /entero entre 1 y 500/);
  }
}


function testConceptGenerationIsRepeatableForASeedAndVariesAcrossSeeds() {
  const first = forge.generateConcept({ worldType: "fantasy-adventure", seed: 42 });
  const repeated = forge.generateConcept({ worldType: "fantasy-adventure", seed: 42 });
  const next = forge.generateConcept({ worldType: "fantasy-adventure", seed: 43 });
  assert.deepEqual(repeated, first);
  assert.notEqual(next.premise, first.premise, "A different seed should offer a different premise.");
  for (const key of ["premise", "conflict", "worldRules", "worldDynamics", "protagonistProfile", "personalityDesign", "companionProfiles", "antagonistProfile", "traumaArc", "romanceArc", "powerRules", "revealSecret", "revealClues", "revealConsequences"]) {
    assert.ok(typeof first[key] === "string" && first[key].trim(), "Generated concept field must be non-empty: " + key);
  }
  assert.ok(Array.isArray(first.arcs) && first.arcs.length >= 2);
}

function testConceptGenerationRespectsTheSelectedWorldFamily() {
  const technology = forge.generateConcept({ worldType: "cyberpunk-dystopia", seed: 7 });
  const supernatural = forge.generateConcept({ worldType: "urban-supernatural", seed: 7 });
  const comedy = forge.generateConcept({ worldType: "isolated-island-comedy", seed: 7 });
  assert.equal(technology.worldType, "cyberpunk-dystopia");
  assert.match(technology.label, /Distopía|tecnología/i);
  assert.equal(supernatural.worldType, "urban-supernatural");
  assert.match(supernatural.label, /sobrenatural/i);
  assert.equal(comedy.worldType, "isolated-island-comedy");
  assert.match(comedy.label, /Comedia/i);
  assert.notEqual(technology.premise, supernatural.premise);
  assert.notEqual(supernatural.premise, comedy.premise);
}

function testCharacterGenerationCoversRolePersonalityPowerCostAndSeed() {
  const character = forge.generateCharacter({ role: "antagonist", worldType: "urban-supernatural", seed: 19 });
  const repeat = forge.generateCharacter({ role: "antagonist", worldType: "urban-supernatural", seed: 19 });
  const other = forge.generateCharacter({ role: "antagonist", worldType: "urban-supernatural", seed: 20 });
  assert.deepEqual(repeat, character);
  assert.equal(character.role, "antagonist");
  assert.equal(character.label, "Antagonista");
  assert.ok(character.name && character.age && character.species);
  assert.ok(character.desire && character.fear && character.virtue && character.flaw);
  assert.ok(character.appearance && character.voice && character.secret && character.signatureItem);
  assert.ok(character.ability && character.limitation && character.arc && character.narrativeFunction);
  assert.ok(character.summary.includes("Límite/coste:"));
  assert.notEqual(other.personality, character.personality);
  assert.equal(forge.generateCharacter({ role: "companion", worldType: "fantasy-adventure", seed: 1, name: "Nombre fijado" }).name, "Nombre fijado");
}


function testSummarizePhasesGroupsAdjacentChapterRanges() {
  const phases = forge.summarizePhases([
    { title: "Presentación — Una rutina con una grieta" },
    { title: "Presentación — El primer precio" },
    { title: "Progreso y complicaciones — Una herramienta con límites" },
    { title: "Falsa seguridad y caída — La victoria que engaña" },
    { title: "Falsa seguridad y caída — El equipo se rompe" },
    { title: "Desenlace — Las consecuencias de la victoria" }
  ]);
  assert.deepEqual(phases.map(phase => phase.key), [
    "Presentación", "Progreso y complicaciones", "Falsa seguridad y caída", "Desenlace"
  ]);
  assert.equal(phases[0].range, "Capítulos 1–2");
  assert.equal(phases[0].count, 2);
  assert.equal(phases[2].range, "Capítulos 4–5");
  assert.equal(phases[3].range, "Capítulo 6");
  assert.deepEqual(forge.summarizePhases([]), []);
  assert.deepEqual(forge.summarizePhases(null), []);
}

function testSummarizePhasesKeepsCustomChapterSequencesTogether() {
  const phases = forge.summarizePhases([
    { title: "Capítulo 1 — Un lugar en el mapa" },
    { title: "Capítulo 2 — Una campana suena" },
    { title: "Desenlace — La puerta que queda abierta" }
  ]);
  assert.equal(phases[0].key, "Capítulos personalizados");
  assert.equal(phases[0].range, "Capítulos 1–2");
  assert.equal(phases[1].key, "Desenlace");
}

const tests = [
  testGeneratesRequestedChapterCountAndStableUniqueIds,
  testSummariesUseStorySpecificDetailsAndDramaticCausality,
  testEndingModesChangeTheFinalChapterGuidance,
  testRegenerationPreservesExistingManuscriptIdentityAndStatus,
  testAuditFindsMissingFieldsCountAndDuplicateIds,
  testInvalidChapterCountsAreRejected,
  testConceptGenerationIsRepeatableForASeedAndVariesAcrossSeeds,
  testConceptGenerationRespectsTheSelectedWorldFamily,
  testCharacterGenerationCoversRolePersonalityPowerCostAndSeed,
  testSummarizePhasesGroupsAdjacentChapterRanges,
  testSummarizePhasesKeepsCustomChapterSequencesTogether
];
for (const test of tests) {
  test();
  process.stdout.write("PASS " + test.name + "\n");
}
process.stdout.write("PASS_STATIC: " + tests.length + " story-forge tests passed.\n");
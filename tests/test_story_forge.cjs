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
  assert.ok(result.issues.some(issue => /falta una premisa/.test(issue)));
}

function testInvalidChapterCountsAreRejected() {
  for (const chapterCount of [0, -1, 1.5, 501, NaN]) {
    assert.throws(() => forge.generateOutline(base({ chapterCount })), /entero entre 1 y 500/);
  }
}

const tests = [
  testGeneratesRequestedChapterCountAndStableUniqueIds,
  testSummariesUseStorySpecificDetailsAndDramaticCausality,
  testEndingModesChangeTheFinalChapterGuidance,
  testRegenerationPreservesExistingManuscriptIdentityAndStatus,
  testAuditFindsMissingFieldsCountAndDuplicateIds,
  testInvalidChapterCountsAreRejected
];
for (const test of tests) {
  test();
  process.stdout.write("PASS " + test.name + "\n");
}
process.stdout.write("PASS_STATIC: " + tests.length + " story-forge tests passed.\n");

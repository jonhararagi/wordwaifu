const assert = require("node:assert/strict");
const { buildOutline } = require("../src/story-outline.js");

const story = {
  id: "story-test",
  name: "La ciudad de ceniza",
  description: "Una ciudad sobrevive a tormentas mágicas.",
  premise: "Mara busca rescatar a su hermano desaparecido en la ciudad de ceniza",
  conflict: "El Consejo cierra los distritos y culpa a los refugiados",
  chapterCount: 10,
  endingType: "closed",
  castPlan: "Mara: rastreadora; Ivo: sanador y coprotagonista",
  personalityPlan: "Mara es impulsiva; Ivo evita la violencia",
  antagonistPlan: "La consejera Veyra oculta el origen de las tormentas",
  romancePlan: "Mara e Ivo se acercan, pero discrepan sobre a quién salvar",
  traumaPlan: "Mara se culpa por haber abandonado a su hermano",
  worldType: "fantasy",
  worldRules: "La magia consume recuerdos",
  worldDynamics: "El Consejo controla el agua potable",
  revealType: "betrayal",
  revealSecret: "Veyra provocó la primera tormenta",
  revealClues: "ceniza azul en las cerraduras y mapas alterados",
  revealTiming: "punto medio",
  revealConsequences: "la ciudad pierde la confianza en el Consejo",
  powerCatalog: "Lectura de ceniza: muestra rastros pero borra un recuerdo",
  pantheon: "La diosa del umbral protege a los desaparecidos",
  ensemble: "Ivo y la contrabandista Sera tienen objetivos propios",
  arcs: ["Mara acepta pedir ayuda", "Ivo aprende a elegir cuándo luchar"]
};

const chapters = buildOutline({ count: 10, ending: "open", story, oldChapters: [] });
assert.equal(chapters.length, 10);
assert.ok(chapters[0].title && chapters[9].title);
assert.ok(chapters.every(ch => ch.summary.length > 80));
assert.ok(chapters.every(ch => !/mostrar una limitación|concretá aquí|la escena debe mostrar/i.test(ch.summary)));
assert.ok(chapters.some(ch => ch.summary.includes("Mara busca rescatar a su hermano")));
assert.ok(chapters.some(ch => ch.summary.includes("La consejera Veyra")));
assert.ok(chapters.some(ch => ch.summary.includes("La magia consume recuerdos")));
assert.ok(chapters.some(ch => ch.summary.includes("ceniza azul")));
assert.ok(chapters.some(ch => ch.summary.includes("La diosa del umbral")));
assert.ok(chapters.some(ch => ch.summary.includes("la contrabandista Sera")));
assert.ok(chapters[9].summary.includes("posibilidades futuras"));
assert.ok(chapters[9].summary.includes("la ciudad de ceniza"));
const prior = [{ id: "keep-id", title: "old", summary: "old", content: "manuscrito guardado", status: "draft" }];
const regenerated = buildOutline({ count: 2, ending: "bittersweet", story, oldChapters: prior });
assert.equal(regenerated[0].id, "keep-id");
assert.equal(regenerated[0].content, "manuscrito guardado");
assert.equal(regenerated[0].status, "draft");
assert.ok(regenerated[1].summary.includes("pérdida irreversible"));
assert.throws(() => buildOutline({ count: 0, story }), /entre 1 y 500/);
assert.throws(() => buildOutline({ count: 501, story }), /entre 1 y 500/);
for (const ending of ["closed", "open", "bittersweet", "cliffhanger"]) {
  const one = buildOutline({ count: 1, ending, story, oldChapters: [] });
  assert.equal(one.length, 1);
  assert.ok(one[0].summary.length > 80);
}
console.log("PASS story outline: concrete events, story context, ending variants, 1-500 guard, manuscript preservation");

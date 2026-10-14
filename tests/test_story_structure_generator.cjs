"use strict";
const assert = require("node:assert/strict");
const { generateOutline, clampCount, PHASES } = require("../src/story-structure-generator.js");

assert.equal(clampCount(30), 30);
assert.equal(clampCount(0), 1);
assert.equal(clampCount(900), 500);
assert.equal(clampCount("no-num"), 12);

const plan = generateOutline({
  chapterCount: 30,
  ending: "open",
  title: "La ciudad de las mareas",
  premise: "Una cartógrafa descubre rutas que desaparecen de los mapas",
  conflict: "El consejo borra rutas para ocultar el coste de la magia",
  protagonist: "Mira, cartógrafa orgullosa que teme depender de otros",
  cast: "una ingeniera curiosa y una oficial desconfiada",
  world: "ciudades conectadas por caminos vivos",
  powers: "la magia consume recuerdos verificables",
  romance: "lento y opcional, basado en confianza y decisiones",
  trauma: "el protagonista evita pedir ayuda tras una pérdida",
  referenceSummary: "Resumen de referencia estilo wiki, usado como contexto y no como canon nuevo."
});

assert.equal(plan.chapterCount, 30);
assert.equal(plan.chapters.length, 30);
assert.equal(plan.ending, "open");
assert.ok(plan.chapters[0].summary.includes("Resumen de referencia estilo wiki"));
assert.ok(plan.chapters[0].summary.includes("cartógrafa"));
assert.ok(plan.chapters.some(chapter => chapter.plan.phase === "false-security"), "outline includes a false-security peak");
assert.ok(plan.chapters.some(chapter => chapter.plan.phase === "collapse"), "outline includes a consequential collapse");
assert.ok(plan.chapters.some(chapter => chapter.summary.includes("FINAL ABIERTO")));
assert.ok(plan.chapters.every(chapter => chapter.status === "outline" && chapter.content === ""));
assert.equal(new Set(plan.chapters.map(chapter => chapter.id)).size, 30);
assert.equal(plan.phases[0].start, 1);
assert.equal(plan.phases.at(-1).end, 30);
for (let i = 1; i < plan.phases.length; i += 1) {
  assert.equal(plan.phases[i].start, plan.phases[i - 1].end + 1, "phase ranges must be contiguous and non-overlapping");
}
for (const chapter of plan.chapters) {
  const phase = plan.phases.find(item => chapter.plan.number >= item.start && chapter.plan.number <= item.end);
  assert.ok(phase, "each chapter index belongs to a phase");
  assert.equal(chapter.plan.phase, phase.key, "chapter phase matches the displayed index phase");
}

const closed = generateOutline({ chapterCount: 12, ending: "closed" });
assert.equal(closed.chapters.length, 12);
assert.ok(closed.chapters.at(-1).summary.includes("FINAL CERRADO"));
assert.equal(closed.phases.at(-1).end, 12);

const single = generateOutline({ chapterCount: 1, ending: "closed" });
assert.equal(single.chapters.length, 1);
assert.equal(single.phases.length, 1);
assert.equal(single.phases[0].key, "compressed");
assert.equal(single.phases[0].start, 1);
assert.equal(single.phases[0].end, 1);

const villain = require("../src/story-structure-generator.js").generateCharacterSeed("villain", 0);
assert.equal(villain.role, "Antagonista principal");
assert.ok(villain.personality && villain.goal && villain.flaw && villain.trauma && villain.ability && villain.limit && villain.arc,
  "character proposals must include personality, motivation, flaw, trauma, ability, limits, and an arc");
const companion = require("../src/story-structure-generator.js").generateCharacterSeed("companion", 1);
assert.equal(companion.archetype, "La ingeniera tranquila");
const world = require("../src/story-structure-generator.js").generateWorldSeed("urban-supernatural", 0);
assert.equal(world.type, "urban-supernatural");
assert.ok(world.premise && world.rules && world.pressure && world.factions && world.hook,
  "world proposals must include premise, rules, pressures, factions, and a story hook");

const max = generateOutline({ chapterCount: 9999 });
assert.equal(max.chapters.length, 500, "generation is capped to avoid accidental huge projects");

process.stdout.write("PASS story structure generator: chapter counts, phase continuity, wiki-reference context, open/closed endings, and single-chapter edge case.\\n");

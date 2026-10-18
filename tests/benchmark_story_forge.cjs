"use strict";

const forge = require("../src/story-forge.js");

function base(chapterCount) {
  return {
    storyId: "story-forge-performance",
    chapterCount,
    endingType: "closed",
    premise: "Una ciudad cambia cada vez que alguien altera un recuerdo público.",
    conflict: "La protagonista debe descubrir quién manipula la memoria antes del siguiente cambio.",
    castPlan: "Protagonista: Iara; coprotagonistas con objetivos independientes.",
    antagonistPlan: "Un consejo intenta monopolizar los recuerdos colectivos.",
    personalityPlan: "Iara es persistente y desconfiada; sus aliados discrepan de sus métodos.",
    romancePlan: "La confianza afectiva evoluciona por decisiones observables.",
    traumaPlan: "Una pérdida pasada afecta las decisiones y su recuperación exige cooperación.",
    worldType: "fantasy-adventure",
    worldRules: "Una memoria solo puede cambiar cuando desaparece la fuente física que la registra.",
    worldDynamics: "Los gremios compiten por el control de archivos y rutas.",
    powerCatalog: "Un mapa de ecos revela recuerdos a cambio de olvidar un dato propio.",
    revealSecret: "El archivo original fue alterado por el consejo.",
    revealClues: "Las campanas cambian de sonido cuando un recuerdo no concuerda.",
    revealConsequences: "Los barrios pierden acceso a sus propios registros.",
    pantheon: "Una deidad protege los recuerdos que la ciudad desea borrar.",
    ensemble: "Los secundarios toman decisiones que alteran el plan principal.",
    arcs: ["Iara: desconfianza → cooperación → responsabilidad", "Teren: obediencia → duda → acción"]
  };
}

function median(values) {
  const ordered = values.slice().sort((a,b)=>a-b);
  return ordered[Math.floor(ordered.length / 2)];
}

const iterations = 9;
for (const count of [100, 250, 500]) {
  const input = base(count);
  forge.generateOutline(input); // warm-up
  const measurements = [];
  for (let run = 0; run < iterations; run++) {
    const start = process.hrtime.bigint();
    const output = forge.generateOutline(input);
    const elapsedMs = Number(process.hrtime.bigint() - start) / 1e6;
    if (output.length !== count || output[count - 1].id !== "story-forge-performance-chapter-" + String(count).padStart(3, "0")) {
      throw new Error("Story Forge benchmark produced an invalid " + count + "-chapter result.");
    }
    measurements.push(elapsedMs);
  }
  process.stdout.write(
    "BENCH Story Forge " + count + " chapters: median " + median(measurements).toFixed(2) +
    " ms over " + iterations + " runs (informational; no hardware-specific pass threshold).\n"
  );
}

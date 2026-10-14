(function (root, factory) {
  "use strict";
  const api = factory();
  if (typeof module === "object" && module.exports) module.exports = api;
  else root.WordWaifuStoryFoundry = api;
})(typeof globalThis !== "undefined" ? globalThis : this, function () {
  "use strict";
  const clamp = (v, min, max) => Math.max(min, Math.min(max, v));
  const text = (v, fallback = "") => typeof v === "string" ? v.trim() : fallback;
  const DEFAULTS = Object.freeze({ title:"Historia sin título", genre:"Fantasía", premise:"", world:"", protagonist:"", protagonistGoal:"", centralConflict:"", companion:"", antagonist:"", loveInterest:"", trauma:"", power:"", tone:"Aventura y drama", ending:"closed", chapterCount:30 });

  function normalizeOptions(input = {}) {
    const options = { ...DEFAULTS, ...(input && typeof input === "object" ? input : {}) };
    const requested = Number(options.chapterCount);
    options.chapterCount = clamp(Number.isFinite(requested) ? Math.floor(requested) : 30, 1, 500);
    options.ending = options.ending === "open" ? "open" : "closed";
    options.title = text(options.title, DEFAULTS.title) || DEFAULTS.title;
    for (const key of ["genre","premise","world","protagonist","protagonistGoal","centralConflict","companion","antagonist","loveInterest","trauma","power","tone"]) options[key] = text(options[key]);
    return options;
  }

  function makeArcs(count) {
    const beats = [
      { key:"setup", name:"Presentación y detonante", start:0, end:0.10, purpose:"Presentar mundo, elenco esencial, situación inicial y problema que rompe el equilibrio." },
      { key:"progress", name:"Progreso y primeras consecuencias", start:0.10, end:0.30, purpose:"Definir objetivos, aliados, reglas y costes; el protagonista consigue avances parciales." },
      { key:"growth", name:"Expansión y complicaciones", start:0.30, end:0.50, purpose:"Ampliar el mundo, profundizar relaciones y revelar la complejidad real del conflicto." },
      { key:"false_security", name:"Cima aparente y falsa seguridad", start:0.50, end:0.67, purpose:"El protagonista parece dominar la situación; exceso de confianza o debilidad sembrada produce el retroceso." },
      { key:"fallout", name:"Caída, pérdida y replanteamiento", start:0.67, end:0.80, purpose:"La estrategia falla, llegan consecuencias y el protagonista reconoce su error o límite." },
      { key:"final_push", name:"Nueva estrategia y confrontación", start:0.80, end:0.94, purpose:"Aplicar lo aprendido, resolver tensiones y afrontar el conflicto central." },
      { key:"resolution", name:"Clímax y resolución", start:0.94, end:1, purpose:"Resolver el conflicto principal y mostrar costes, cambios y estado final del mundo." }
    ];
    const ranges = [];
    let cursor = 1;
    for (let i = 0; i < beats.length; i++) {
      const beat = beats[i];
      const start = i === 0 ? 1 : Math.floor(beat.start * count) + 1;
      const end = i === beats.length - 1 ? count : Math.floor(beat.end * count);
      if (end < start || start > count) continue;
      const actualStart = Math.max(cursor, start), actualEnd = Math.min(count, end);
      if (actualStart <= actualEnd) {
        ranges.push({ key:beat.key, name:beat.name, startChapter:actualStart, endChapter:actualEnd, purpose:beat.purpose });
        cursor = actualEnd + 1;
      }
    }
    if (!ranges.length) return [{ key:"complete_arc", name:"Arco completo", startChapter:1, endChapter:count, purpose:"Presentar el conflicto, desarrollar consecuencias y resolverlo según el final elegido." }];
    if (cursor <= count) ranges[ranges.length - 1].endChapter = count;
    return ranges;
  }

  function buildSynopsis(o) {
    const parts = [];
    if (o.protagonist) parts.push(o.protagonist);
    if (o.protagonistGoal) parts.push("busca " + o.protagonistGoal);
    if (o.world) parts.push("en " + o.world);
    if (o.centralConflict) parts.push("mientras se enfrenta a " + o.centralConflict);
    return parts.length ? parts.join(" ") + "." : (o.premise || "Una historia por desarrollar a partir de una premisa, un mundo y un conflicto central.");
  }

  function generateStoryPlan(input = {}) {
    const options = normalizeOptions(input), arcs = makeArcs(options.chapterCount), chapters = [];
    for (const arc of arcs) for (let n = arc.startChapter; n <= arc.endChapter; n++) {
      const role = n === 1 ? "Abrir con una escena concreta, presentar una necesidad y activar el conflicto." :
        n === options.chapterCount ? (options.ending === "open" ? "Resolver el conflicto inmediato y dejar una pregunta o cambio futuro deliberado." : "Resolver el conflicto central y mostrar consecuencias concretas.") :
        "Hacer avanzar una meta, relación, revelación o consecuencia; evitar escenas que no cambien nada.";
      const beats = [];
      if (options.protagonist) beats.push("Protagonista: " + options.protagonist);
      if (options.protagonistGoal) beats.push("Meta: " + options.protagonistGoal);
      if (options.centralConflict) beats.push("Conflicto: " + options.centralConflict);
      if (options.world) beats.push("Mundo: " + options.world);
      chapters.push({ id:"CH-" + String(n).padStart(3,"0"), number:n, title:n === 1 ? "El comienzo" : n === options.chapterCount ? (options.ending === "open" ? "La puerta entreabierta" : "Las consecuencias") : "Capítulo " + n, arcKey:arc.key, arcName:arc.name, summary:"Objetivo dramático: " + role + " Etapa: " + arc.purpose, beats, status:"outline" });
    }
    const cast = [["protagonist","Protagonista",options.protagonist],["companion","Compañero/a o coprotagonista",options.companion],["antagonist","Antagonista o villano",options.antagonist],["loveInterest","Interés amoroso",options.loveInterest]].filter(x=>x[2]).map(([role,label,description])=>({role,label,description}));
    const development = [
      options.protagonistGoal && {type:"goal",label:"Meta del protagonista",description:options.protagonistGoal},
      options.trauma && {type:"wound",label:"Trauma o herida emocional",description:options.trauma},
      options.power && {type:"power",label:"Poder, talento o recurso",description:options.power},
      options.centralConflict && {type:"conflict",label:"Conflicto central",description:options.centralConflict}
    ].filter(Boolean);
    return { schemaVersion:1, generator:"WordWaifu Story Foundry", title:options.title, genre:options.genre, tone:options.tone, premise:options.premise, world:options.world, ending:{type:options.ending,label:options.ending==="open"?"Final abierto":"Final cerrado"}, requestedChapterCount:options.chapterCount, chapterCount:chapters.length, synopsis:buildSynopsis(options), cast, development, arcs, chapters, continuityChecklist:["Cada capítulo modifica el estado de la historia o la comprensión del lector.","Los poderes y recursos tienen límites, costes y consecuencias verificables.","Las relaciones evolucionan mediante decisiones y acciones, no solo declaraciones.","La caída nace de causas sembradas previamente, no de un giro arbitrario.",options.ending==="open"?"El conflicto inmediato avanza o se resuelve parcialmente, pero queda una pregunta deliberada.":"El conflicto principal obtiene una resolución comprensible y satisfactoria."], limitations:["El resultado es un esquema determinista editable, no capítulos literarios completos.","Las propuestas deben revisarse contra el canon, las fuentes y la continuidad del proyecto."] };
  }
  return { generateStoryPlan, normalizeOptions, makeArcs };
});

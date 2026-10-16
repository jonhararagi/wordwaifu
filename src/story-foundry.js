(function (root, factory) {
  "use strict";
  const api = factory();
  if (typeof module === "object" && module.exports) module.exports = api;
  else root.WordWaifuStoryFoundry = api;
})(typeof globalThis !== "undefined" ? globalThis : this, function () {
  "use strict";
  const clamp = (v, min, max) => Math.max(min, Math.min(max, v));
  const text = (v, fallback = "") => typeof v === "string" ? v.trim() : fallback;
  const ENDINGS = Object.freeze({
    closed: { label: "Final cerrado", purpose: "Resolver el conflicto central y mostrar consecuencias duraderas; no dejar la meta principal pendiente." },
    open: { label: "Final abierto", purpose: "Resolver o transformar el conflicto inmediato y dejar una pregunta significativa sin respuesta deliberada." },
    arc: { label: "Final de arco", purpose: "Cerrar el objetivo de este arco y dejar una consecuencia concreta que impulse el siguiente arco, sin fingir que terminó toda la historia." }
  });
  const DEFAULTS = Object.freeze({ title:"Historia sin título", genre:"Fantasía", premise:"", world:"", protagonist:"", protagonistGoal:"", centralConflict:"", companion:"", antagonist:"", loveInterest:"", trauma:"", power:"", tone:"Aventura y drama", ending:"closed", chapterCount:30 });
  function normalizeOptions(input = {}) {
    const options = { ...DEFAULTS, ...(input && typeof input === "object" ? input : {}) };
    const requested = Number(options.chapterCount);
    options.chapterCount = clamp(Number.isFinite(requested) && requested > 0 ? Math.floor(requested) : 30, 1, 500);
    options.ending = Object.prototype.hasOwnProperty.call(ENDINGS, options.ending) ? options.ending : "closed";
    options.title = text(options.title, DEFAULTS.title) || DEFAULTS.title;
    for (const key of ["genre","premise","world","protagonist","protagonistGoal","centralConflict","companion","antagonist","loveInterest","trauma","power","tone"]) options[key] = text(options[key]);
    return options;
  }
  const ARC_BEATS = [
    { key:"setup", name:"Presentación y detonante", purpose:"Alterar el equilibrio y obligar al protagonista a elegir una primera respuesta." },
    { key:"investigation", name:"Investigación y compromiso", purpose:"Probar una hipótesis, descubrir una regla y comprometer recursos o confianza." },
    { key:"bond", name:"Alianza bajo presión", purpose:"Poner una relación a prueba mediante objetivos incompatibles y una decisión observable." },
    { key:"reversal", name:"Reverso y coste", purpose:"Hacer que un éxito parcial revele un precio, una deuda o una limitación ignorada." },
    { key:"revelation", name:"Revelación y ruptura", purpose:"Cambiar la interpretación de hechos previos y alterar la estrategia o una alianza." },
    { key:"choice", name:"Decisión sin salida limpia", purpose:"Forzar una elección entre valores, con pérdidas reales y consecuencias para terceros." },
    { key:"confrontation", name:"Confrontación", purpose:"Aplicar lo aprendido contra la oposición, explotando reglas y debilidades ya establecidas." },
    { key:"aftermath", name:"Consecuencias y nuevo equilibrio", purpose:"Mostrar qué cambió, qué se perdió y qué problema nace de la decisión." }
  ];
  function makeArcs(count) {
    const n = Math.max(1, Math.floor(Number(count) || 1));
    const arcCount = Math.min(ARC_BEATS.length, n);
    const ranges = [];
    for (let i = 0; i < arcCount; i++) {
      const startChapter = Math.floor(i * n / arcCount) + 1;
      const endChapter = Math.floor((i + 1) * n / arcCount);
      const beat = ARC_BEATS[Math.min(ARC_BEATS.length - 1, Math.floor(i * ARC_BEATS.length / arcCount))];
      ranges.push({ key:beat.key, name:beat.name, startChapter, endChapter, purpose:beat.purpose });
    }
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
  function chapterFunction(index, count, ending) {
    const role = ARC_BEATS[(index - 1) % ARC_BEATS.length];
    if (count === 1) return { ...ARC_BEATS[7], key:ending === "closed" ? "resolution" : ending === "arc" ? "arc_transition" : "open_question", name:ending === "closed" ? "Detonante y resolución" : ending === "arc" ? "Detonante y cierre de arco" : "Detonante y pregunta abierta", purpose:"En una historia de un capítulo, presentar el conflicto, forzar una decisión y comprimir el cambio y sus consecuencias en una resolución coherente. " + ENDINGS[ending].purpose };
    if (index === 1) return { ...ARC_BEATS[0], key:"inciting", name:"Detonante", purpose:"Presentar una situación concreta, una necesidad y una anomalía que exija actuar." };
    if (index === count) return { ...ARC_BEATS[7], key:ending === "closed" ? "resolution" : ending === "arc" ? "arc_transition" : "open_question", name:ending === "closed" ? "Resolución final" : ending === "arc" ? "Cierre de arco y transición" : "Resolución parcial y pregunta abierta", purpose:ENDINGS[ending].purpose };
    return role;
  }
  function generateStoryPlan(input = {}) {
    const options = normalizeOptions(input), arcs = makeArcs(options.chapterCount), chapters = [];
    const context = [
      options.protagonist && "Protagonista: " + options.protagonist,
      options.protagonistGoal && "Meta: " + options.protagonistGoal,
      options.centralConflict && "Conflicto: " + options.centralConflict,
      options.world && "Reglas y entorno: " + options.world,
      options.companion && "Relación clave: " + options.companion,
      options.antagonist && "Oposición: " + options.antagonist,
      options.loveInterest && "Vínculo afectivo: " + options.loveInterest,
      options.trauma && "Herida emocional: " + options.trauma,
      options.power && "Poder, límites y coste por definir en escena: " + options.power
    ].filter(Boolean);
    for (let n = 1; n <= options.chapterCount; n++) {
      const arc = arcs.find(item => n >= item.startChapter && n <= item.endChapter) || arcs[arcs.length - 1];
      const fn = chapterFunction(n, options.chapterCount, options.ending);
      const previous = n > 1 ? chapterFunction(n - 1, options.chapterCount, options.ending) : null;
      const goal = n === 1 ? "Conseguir información o recurso suficiente para responder al detonante" : n === options.chapterCount ? (options.ending === "closed" ? "Resolver la meta principal y asumir su coste" : options.ending === "arc" ? "Completar el objetivo del arco y abrir una nueva obligación" : "Resolver la urgencia inmediata y elegir qué pregunta seguirá sin respuesta") : fn.purpose;
      const obstacle = n === 1 ? "La información es incompleta y actuar implica riesgo" : (options.antagonist ? "La oposición de " + options.antagonist + " explota una limitación o una información incompleta" : "Una restricción del mundo, un recurso escaso o una lealtad incompatible impide la solución fácil");
      const decision = n === 1 ? "El protagonista decide intervenir pese a no comprender todas las reglas" : n === options.chapterCount && options.ending === "closed" ? "Elegir una solución definitiva y aceptar qué no puede salvarse" : n === options.chapterCount && options.ending === "arc" ? "Aceptar la victoria local y comprometerse con el problema que esta revela" : n === options.chapterCount ? "Resolver la urgencia sin cerrar artificialmente la pregunta mayor" : "Elegir entre una ganancia inmediata y el coste que impondría a una relación, recurso o principio";
      const change = n === 1 ? "La rutina queda rota y el objetivo se vuelve concreto" : "La información, la confianza, la capacidad o la posición de poder cambia de forma verificable";
      const consequence = n === options.chapterCount ? ENDINGS[options.ending].purpose : "La decisión crea una deuda, pista, pérdida o nueva condición que el capítulo siguiente debe reconocer";
      const beats = context.slice();
      chapters.push({
        id:"CH-" + String(n).padStart(3,"0"), number:n,
        previousChapterId:n > 1 ? "CH-" + String(n - 1).padStart(3,"0") : null,
        continuityFrom:n > 1 ? "La consecuencia del capítulo " + String(n - 1).padStart(3,"0") + " debe condicionar la situación inicial, los recursos disponibles o la relación que se pone a prueba." : "Establecer el estado inicial, las reglas relevantes y la primera anomalía sin presuponer acontecimientos anteriores.",
        title:n === 1 ? "La ruptura del equilibrio" : n === options.chapterCount ? (options.ending === "closed" ? "El precio de la respuesta" : options.ending === "arc" ? "Una victoria, otra frontera" : "La pregunta que permanece") : fn.name + ": " + (n % 2 ? "la elección" : "su precio"),
        arcKey:arc.key, arcName:arc.name, narrativeFunction:fn.key,
        objective:goal, obstacle, decision, change, consequence,
        summary:fn.purpose + " Objetivo: " + goal + ". Obstáculo: " + obstacle + ". Decisión: " + decision + ". Cambio: " + change + ". Consecuencia: " + consequence + ".",
        beats, status:"outline"
      });
    }
    const cast = [["protagonist","Protagonista",options.protagonist],["companion","Compañero/a o coprotagonista",options.companion],["antagonist","Antagonista o villano",options.antagonist],["loveInterest","Interés amoroso",options.loveInterest]].filter(x=>x[2]).map(([role,label,description])=>({role,label,description}));
    const development = [
      options.protagonistGoal && {type:"goal",label:"Meta del protagonista",description:options.protagonistGoal},
      options.trauma && {type:"wound",label:"Trauma o herida emocional",description:options.trauma},
      options.power && {type:"power",label:"Poder, talento o recurso",description:options.power},
      options.centralConflict && {type:"conflict",label:"Conflicto central",description:options.centralConflict}
    ].filter(Boolean);
    return { schemaVersion:1, generator:"WordWaifu Story Foundry", title:options.title, genre:options.genre, tone:options.tone, premise:options.premise, world:options.world, ending:{type:options.ending,label:ENDINGS[options.ending].label,terminalState:options.ending==="closed"?"resolved":options.ending==="arc"?"arc-complete":"open"}, requestedChapterCount:options.chapterCount, chapterCount:chapters.length, synopsis:buildSynopsis(options), cast, development, arcs, chapters, continuityChecklist:["Cada capítulo modifica el estado de la historia o la comprensión del lector.","Los poderes y recursos tienen límites, costes y consecuencias verificables.","Las relaciones evolucionan mediante decisiones y acciones, no solo declaraciones.","Las consecuencias de cada capítulo deben ser reconocidas por el siguiente.",ENDINGS[options.ending].purpose], limitations:["El resultado es un esquema determinista editable, no capítulos literarios completos.","Las propuestas deben revisarse contra el canon, las fuentes y la continuidad del proyecto."] };
  }
  return { generateStoryPlan, normalizeOptions, makeArcs, chapterFunction, ENDINGS };
});

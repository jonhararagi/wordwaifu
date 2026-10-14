(function (root, factory) {
  "use strict";
  const api = factory();
  if (typeof module === "object" && module.exports) module.exports = api;
  else root.WordWaifuStoryStructure = api;
})(typeof globalThis !== "undefined" ? globalThis : this, function () {
  "use strict";

  const PHASES = [
    { key: "foundation", title: "Presentación y detonante", start: 0, end: 0.10,
      purpose: "presentar el mundo cotidiano, la promesa del género y la primera grieta que obliga a actuar" },
    { key: "progression", title: "Progreso, vínculos y primeras victorias", start: 0.10, end: 0.36,
      purpose: "hacer que cada avance cueste algo, desarrollar compañeros y demostrar reglas del mundo mediante decisiones" },
    { key: "false-security", title: "Techo provisional y falsa seguridad", start: 0.36, end: 0.56,
      purpose: "dar una victoria grande que parece confirmar el método del protagonista, mientras las pistas revelan su límite" },
    { key: "collapse", title: "Caída, consecuencias y replanteamiento", start: 0.56, end: 0.78,
      purpose: "romper la estrategia cómoda, cobrar los costes aplazados y obligar al elenco a actuar con agencia propia" },
    { key: "climax", title: "Clímax y decisión irreversible", start: 0.78, end: 0.94,
      purpose: "resolver el conflicto mediante una decisión preparada por los arcos, no por una habilidad improvisada" },
    { key: "resolution", title: "Resolución y nueva situación", start: 0.94, end: 1,
      purpose: "mostrar consecuencias, cerrar los arcos elegidos y dejar una imagen final coherente con el tipo de cierre" }
  ];

  const BEATS = {
    foundation: [
      ["Una normalidad con grietas", "Presentá una rutina concreta y una contradicción del mundo."],
      ["La llamada que no encaja", "Un incidente altera el objetivo diario y deja una pregunta verificable."],
      ["La primera decisión", "El protagonista elige actuar y revela un valor junto a un defecto."],
      ["Reglas en acción", "Mostrá una regla del mundo o poder a través de una consecuencia, no de una explicación larga."],
      ["El coste de entrar", "La primera victoria abre el conflicto, pero compromete un recurso o vínculo."]
    ],
    progression: [
      ["Un objetivo alcanzable", "Definí una meta intermedia y una medida visible de progreso."],
      ["El compañero que discrepa", "Un aliado con objetivo propio cuestiona el plan y propone otra solución."],
      ["Práctica con límite", "El protagonista mejora una capacidad, pero se hace visible su coste o condición."],
      ["Una victoria imperfecta", "Se logra el objetivo parcial y aparece una consecuencia que nadie quería."],
      ["Rivalidad útil", "El rival expone una debilidad real y obliga a cambiar la táctica."],
      ["La deuda emocional", "Un vínculo avanza por una acción concreta, no por una declaración aislada."],
      ["Pista que parece menor", "Introduce un indicio que tendrá una interpretación distinta más adelante."],
      ["El equipo resuelve algo", "Un coprotagonista resuelve un problema que el protagonista no podría resolver solo."]
    ],
    "false-security": [
      ["El método parece funcionar", "Encadená avances y hacé comprensible por qué el grupo confía demasiado en su estrategia."],
      ["La recompensa visible", "Mostrá una mejora de estatus, poder, recursos o afecto que eleva las expectativas."],
      ["La advertencia ignorada", "Un aliado, rival o dato contradice la lectura optimista; la advertencia se descarta por una razón humana."],
      ["El techo provisional", "El protagonista alcanza su máximo con el método actual y confunde rendimiento con comprensión."],
      ["La grieta bajo la victoria", "Recontextualizá una pista previa y prepará la caída sin revelar todavía toda la solución."]
    ],
    collapse: [
      ["La derrota que cambia las reglas", "La amenaza supera la respuesta conocida y deja una pérdida persistente."],
      ["El precio llega a casa", "La decisión anterior afecta a un compañero, una comunidad o un interés amoroso."],
      ["El grupo se divide", "Personajes con metas legítimas discrepan; nadie queda reducido a un obstáculo tonto."],
      ["La verdad incómoda", "El protagonista reconoce su error o un límite que no puede superar con más fuerza."],
      ["Solución sin garantía", "El elenco combina capacidades y acepta un coste real para preparar la última oportunidad."]
    ],
    climax: [
      ["Preparar la última jugada", "Recuperá reglas, herramientas y relaciones establecidas; no introduzcas una solución gratuita."],
      ["La elección imposible", "El protagonista debe elegir entre valores o pérdidas incompatibles."],
      ["Cada aliado decide", "Los coprotagonistas toman decisiones que alteran el resultado y pagan sus propias consecuencias."],
      ["El precio del poder", "La habilidad, estrategia o pacto decisivo cobra el coste anunciado y respeta sus límites."],
      ["Resolver el conflicto central", "El desenlace nace de la elección y de la evolución, no solo de una superioridad de fuerza."]
    ],
    resolution: [
      ["Consecuencias inmediatas", "Mostrá qué cambió en el mundo, las alianzas, los recursos y la vida diaria."],
      ["El arco demuestra el cambio", "El protagonista afronta una situación inicial de otra manera; no borres el trauma con una frase."],
      ["Cerrar una promesa", "Resuelve el vínculo, misterio o meta secundaria que la historia prometió como importante."],
      ["La última imagen", "Dejá una imagen o decisión que resuma el tema y el tipo de final elegido."]
    ]
  };

  function clampCount(value) {
    const number = Number(value);
    if (!Number.isFinite(number)) return 12;
    return Math.max(1, Math.min(500, Math.floor(number)));
  }

  function clean(value, fallback) {
    const text = String(value == null ? "" : value).trim();
    return text || fallback;
  }

  function phaseFor(progress) {
    return PHASES.find((phase, index) => progress >= phase.start && (progress < phase.end || index === PHASES.length - 1)) || PHASES[PHASES.length - 1];
  }

  function chooseBeat(phase, phaseIndex, chapterIndex) {
    const beats = BEATS[phase.key] || BEATS.progression;
    return beats[(chapterIndex + phaseIndex) % beats.length];
  }

  function generateOutline(options) {
    const opts = options || {};
    const count = clampCount(opts.chapterCount);
    const title = clean(opts.title, "la historia");
    const premise = clean(opts.premise, "una situación que rompe la normalidad del mundo");
    const conflict = clean(opts.conflict, "el objetivo del protagonista choca con una fuerza que exige un precio");
    const protagonist = clean(opts.protagonist, "el protagonista");
    const cast = clean(opts.cast, "sus compañeros y coprotagonistas");
    const world = clean(opts.world, "las reglas del mundo");
    const powers = clean(opts.powers, "las capacidades disponibles y sus límites");
    const romance = clean(opts.romance, "los vínculos evolucionan mediante acciones y decisiones");
    const trauma = clean(opts.trauma, "las heridas emocionales influyen en las decisiones sin definir por completo a la persona");
    const referenceSummary = clean(opts.referenceSummary, "");
    const ending = opts.ending === "open" ? "open" : "closed";
    const generatedAt = new Date().toISOString();
    const chapters = [];

    for (let index = 0; index < count; index += 1) {
      const progress = count === 1 ? 1 : index / (count - 1);
      const phase = phaseFor(progress);
      const phaseIndex = PHASES.findIndex(item => item.key === phase.key);
      const [beatTitle, beat] = chooseBeat(phase, phaseIndex, index);
      let summary = beat + " La premisa que guía el capítulo es: " + premise + ". El conflicto activo es: " + conflict + ".";
      if (index === 0) {
        summary += " Presentá a " + protagonist + ", el mundo (" + world + ") y la primera decisión que pone la trama en marcha.";
        if (referenceSummary) summary += " Usá el resumen de referencia como contexto orientativo, distinguiendo hechos de la obra fuente de las novedades de esta historia: " + referenceSummary;
      } else if (progress < 0.36) {
        summary += " Hacé visible el progreso de " + protagonist + " y reservá espacio para que " + cast + " actúe por objetivos propios.";
      } else if (progress < 0.56) {
        summary += " La mejora parece confirmar la estrategia de " + protagonist + ", pero una pista previa debe señalar qué no comprende todavía.";
      } else if (progress < 0.78) {
        summary += " La caída debe afectar recursos, confianza o seguridad de forma persistente; " + trauma + ".";
      } else if (progress < 0.94) {
        summary += " La solución debe respetar " + powers + " y hacer que las decisiones del elenco importen.";
      } else {
        summary += ending === "open"
          ? " Cerrá el conflicto inmediato, pero dejá una pregunta nueva o una consecuencia sin resolver que cambie el significado del viaje."
          : " Cerrá el conflicto central y sus promesas principales; dejá un estado posterior comprensible sin exigir una secuela.";
      }
      if (progress >= 0.10 && progress < 0.94) summary += " Vínculos/romance: " + romance + ".";
      if (phase.key === "false-security") summary += " La seguridad debe ser razonable pero falsa: el próximo revés nace de un límite ya establecido.";
      if (phase.key === "climax") summary += " Evitá una habilidad nueva sin preparación o una solución que borre el precio de las decisiones.";
      if (index === count - 1 && ending === "open") summary += " FINAL ABIERTO: cerrá al menos un arco emocional y mantené abierta solo la pregunta deliberada.";
      if (index === count - 1 && ending === "closed") summary += " FINAL CERRADO: respondé la pregunta dramática principal y mostrale al lector las consecuencias.";
      chapters.push({
        id: "chapter-plan-" + (index + 1) + "-" + Math.random().toString(36).slice(2, 8),
        title: "Capítulo " + (index + 1) + " — " + beatTitle,
        summary,
        content: "",
        status: "outline",
        plan: { number: index + 1, phase: phase.key, phaseTitle: phase.title, purpose: phase.purpose, progress: Math.round(progress * 100), ending }
      });
    }

    return {
      title,
      chapterCount: count,
      ending,
      generatedAt,
      phases: PHASES.map(phase => {
        const start = Math.floor(phase.start * count) + 1;
        const end = Math.max(start, Math.ceil(phase.end * count));
        return { key: phase.key, title: phase.title, start: Math.min(count, start), end: Math.min(count, end), purpose: phase.purpose };
      }).filter(phase => phase.start <= phase.end),
      chapters
    };
  }

  return { generateOutline, clampCount, PHASES };
});

(function (root) {
  "use strict";

  const phases = [
    {
      key: "Presentación", start: 0, end: 0.12, purpose: "presentar el mundo, la rutina, el elenco y el desequilibrio inicial",
      beats: [
        { title: "Una rutina con una grieta", action: "una escena cotidiana revela una regla del mundo y algo que no encaja", turn: "el protagonista descubre una señal que contradice lo que creía seguro" },
        { title: "La decisión que rompe la rutina", action: "una necesidad personal obliga al protagonista a elegir entre comodidad y riesgo", turn: "su elección lo compromete con el conflicto principal" },
        { title: "El incidente imposible de ignorar", action: "el problema deja de ser un rumor y afecta directamente al elenco", turn: "la situación anterior ya no puede recuperarse sin consecuencias" },
        { title: "El primer precio", action: "el protagonista prueba una solución limitada y descubre su coste", turn: "la primera victoria es parcial y crea una nueva obligación" }
      ]
    },
    {
      key: "Progreso y complicaciones", start: 0.12, end: 0.35, purpose: "construir progreso verificable, alianzas y dominio gradual de las reglas",
      beats: [
        { title: "Una herramienta con límites", action: "el elenco prueba una habilidad, recurso o estrategia en una situación controlada", turn: "una limitación concreta obliga a cambiar el plan" },
        { title: "Un aliado cambia el plan", action: "un coprotagonista persigue su propio objetivo y toma una decisión relevante", turn: "la solución mejora, pero abre una tensión dentro del grupo" },
        { title: "La primera victoria costosa", action: "el equipo alcanza un objetivo medible sacrificando tiempo, confianza o recursos", turn: "la victoria deja una deuda que el antagonista puede aprovechar" },
        { title: "La oposición aprende", action: "la fuerza opositora responde a los avances y ataca una debilidad ya establecida", turn: "el grupo pierde la ventaja de la sorpresa" },
        { title: "Un vínculo puesto a prueba", action: "dos personajes deben cooperar pese a una diferencia de valores o información", turn: "el vínculo cambia por una acción demostrable, no por una declaración" }
      ]
    },
    {
      key: "Escalada y punto medio", start: 0.35, end: 0.55, purpose: "redefinir el objetivo y elevar el coste de cada decisión",
      beats: [
        { title: "La pista que cambia el significado", action: "aparece una evidencia compatible con pistas anteriores pero difícil de explicar", turn: "el elenco revisa una creencia y modifica su estrategia" },
        { title: "El poder cobra su precio", action: "un recurso decisivo permite avanzar, pero activa su coste o debilidad establecida", turn: "el equipo debe decidir si el resultado justifica la pérdida" },
        { title: "La alianza incómoda", action: "una amenaza compartida obliga a negociar con alguien poco fiable", turn: "la cooperación resuelve un obstáculo y crea una nueva vulnerabilidad" },
        { title: "El objetivo ya no basta", action: "el protagonista descubre que alcanzar su meta inicial no resolvería el daño de fondo", turn: "la meta cambia y aumenta lo que está en juego" },
        { title: "El punto medio irreversible", action: "el elenco ejecuta un plan que expone públicamente sus intenciones", turn: "la oposición responde y el conflicto entra en una fase más peligrosa" }
      ]
    },
    {
      key: "Falsa seguridad y caída", start: 0.55, end: 0.76, purpose: "convertir el progreso en exceso de confianza y provocar una caída causal",
      beats: [
        { title: "La victoria que engaña", action: "una operación parece confirmar que el método del protagonista funciona", turn: "el éxito oculta una condición que el grupo no comprobó" },
        { title: "El punto ciego se vuelve evidente", action: "la seguridad recién ganada hace que el protagonista ignore una advertencia", turn: "esa omisión permite que el antagonista tome la iniciativa" },
        { title: "La factura de una decisión anterior", action: "una consecuencia sembrada en capítulos previos alcanza al elenco", turn: "el grupo pierde un recurso, una posición o la confianza de alguien" },
        { title: "La ruptura del equipo", action: "intereses incompatibles y daños acumulados fuerzan una separación o confrontación", turn: "cada personaje debe asumir su parte sin una reconciliación instantánea" },
        { title: "El fondo y la responsabilidad", action: "la estrategia habitual fracasa y deja al protagonista sin su atajo preferido", turn: "la salida exige reconocer el defecto que sostenía el fracaso" }
      ]
    },
    {
      key: "Reconstrucción y clímax", start: 0.76, end: 0.92, purpose: "transformar las lecciones en una estrategia nueva y pagar las deudas narrativas",
      beats: [
        { title: "Una estrategia distinta", action: "el protagonista acepta una verdad incómoda y diseña un plan que corrige su error", turn: "la nueva estrategia exige cooperación y un coste explícito" },
        { title: "El regreso de los coprotagonistas", action: "los aliados toman decisiones propias que hacen posible una parte del plan", turn: "el equipo se recompone mediante hechos y acuerdos concretos" },
        { title: "La última preparación", action: "el grupo consigue el recurso final y establece qué puede salir mal", turn: "queda claro qué sacrificio no podrá evitarse" },
        { title: "El enfrentamiento decisivo", action: "el protagonista confronta la fuerza opositora usando límites y aprendizajes ya establecidos", turn: "la victoria depende de una decisión con consecuencias, no de un poder nuevo sin preparación" },
        { title: "El precio de ganar", action: "la resolución exige pagar una deuda sembrada antes del clímax", turn: "el conflicto principal se decide y deja consecuencias visibles" }
      ]
    },
    {
      key: "Desenlace", start: 0.92, end: 1, purpose: "mostrar las consecuencias y cerrar o abrir deliberadamente el futuro",
      beats: [
        { title: "Las consecuencias de la victoria", action: "los personajes afrontan las pérdidas, reparaciones y responsabilidades posteriores", turn: "el lector puede ver qué cambió en el mundo y en el elenco" },
        { title: "Una nueva normalidad", action: "una escena concreta refleja cómo cambió una relación, una comunidad o una regla", turn: "el arco emocional principal encuentra una respuesta" },
        { title: "La última elección", action: "el protagonista decide qué conservar y qué dejar atrás después del conflicto", turn: "esa elección expresa el cambio logrado a lo largo de la historia" },
        { title: "La puerta que queda abierta", action: "una consecuencia pendiente apunta a posibilidades futuras sin anular la resolución", turn: "la imagen final dialoga con el comienzo y deja una pregunta deliberada" }
      ]
    }
  ];

  const endingNotes = {
    closed: "El final resuelve el conflicto principal y muestra consecuencias suficientes para entender qué cambió; las subtramas secundarias solo quedan abiertas si se señala deliberadamente.",
    open: "El conflicto inmediato y el arco emocional reciben una respuesta, pero queda abierta una pregunta central o una consecuencia con pistas previas; no termina por un corte arbitrario.",
    bittersweet: "El conflicto principal se resuelve, pero una pérdida irreversible impide que la victoria sea gratuita; la pérdida debe derivarse de decisiones o reglas ya presentadas.",
    cliffhanger: "El arco principal del volumen avanza hasta una decisión o revelación preparada que cambia el tablero; el corte no sustituye el desarrollo ni la resolución parcial."
  };

  function clean(value) {
    return typeof value === "string" ? value.trim() : "";
  }

  function firstMeaningfulLine(value) {
    const line = clean(value).split(/\n/).map(item => item.trim()).find(Boolean) || "";
    const labelled = line.match(/^(?:protagonista|protagonista principal|personaje focal|objetivo|meta|antagonista|coprotagonista)\s*[:—-]\s*(.+)$/i);
    return (labelled ? labelled[1] : line).replace(/^[-*•]+\s*/, "").split(/\s*[|;]/, 1)[0].slice(0, 160);
  }

  const shortStoryPhase = {
    key: "Arco completo",
    purpose: "condensar presentación, conflicto, caída y resolución en una única decisión con consecuencias",
    beats: [{ title: "Del detonante a la resolución", action: "presentar una necesidad, forzar una elección difícil y mostrar el precio de resolver el conflicto", turn: "el protagonista consigue una respuesta inmediata, pero el cierre revela qué cambió y qué coste queda" }]
  };

  function phaseFor(index, count) {
    if (count === 1) return shortStoryPhase;
    const position = index / (count - 1);
    return phases.find(phase => position >= phase.start && (position < phase.end || phase.end === 1)) || phases[phases.length - 1];
  }

  function generateOutline(options) {
    const input = options || {};
    const count = Number(input.chapterCount);
    if (!Number.isInteger(count) || count < 1 || count > 500) {
      throw new RangeError("La cantidad de capítulos debe ser un entero entre 1 y 500.");
    }
    const endingType = Object.prototype.hasOwnProperty.call(endingNotes, input.endingType) ? input.endingType : "closed";
    const premise = clean(input.premise);
    const conflict = clean(input.conflict);
    const protagonist = firstMeaningfulLine(input.castPlan) || "el protagonista";
    const antagonist = firstMeaningfulLine(input.antagonistPlan) || "la fuerza opositora";
    const world = clean(input.worldRules);
    const worldDynamics = clean(input.worldDynamics);
    const worldTypes = {
      "cyberpunk-dystopia": "distopía cyberpunk",
      "conventional-dystopia": "distopía social o política",
      "post-apocalypse": "postapocalipsis",
      "active-apocalypse-military-sf": "apocalipsis activo o ciencia ficción militar",
      "isolated-island-comedy": "isla aislada, convivencia y comedia",
      "superpower-action": "acción y sociedades de superpoderes",
      "fantasy-adventure": "fantasía y aventura",
      "urban-supernatural": "sobrenatural urbano",
      "mecha-war": "mecha, guerra y conflicto geopolítico",
      "slice-of-life-comedy": "comedia cotidiana y relaciones",
      "other": "mundo híbrido u original"
    };
    const worldType = worldTypes[clean(input.worldType)] || "";
    const powers = clean(input.powerCatalog);
    const romance = clean(input.romancePlan);
    const trauma = clean(input.traumaPlan);
    const personality = clean(input.personalityPlan);
    const ensemble = clean(input.ensemble);
    const reveal = [clean(input.revealSecret), clean(input.revealClues), clean(input.revealConsequences)].filter(Boolean).join(" ");
    const pantheon = clean(input.pantheon);
    const arcs = Array.isArray(input.arcs) ? input.arcs.map(clean).filter(Boolean) : [];
    const old = Array.isArray(input.existingChapters) ? input.existingChapters : [];
    const storyId = clean(input.storyId) || "story";
    const excerpt = (label, value, limit = 180) => {
      const text = clean(value);
      if (!text) return "";
      return label + ": " + (text.length > limit ? text.slice(0, limit - 1).trimEnd() + "…" : text);
    };
    const detail = [
      excerpt("Premisa", premise, 240),
      excerpt("Conflicto", conflict, 240),
      excerpt("Tipo de mundo", worldType),
      excerpt("Reglas que deben respetarse", world),
      excerpt("Presiones del mundo", worldDynamics),
      excerpt("Voz y personalidad", personality),
      excerpt("Vínculo afectivo", romance),
      excerpt("Heridas y recuperación", trauma),
      excerpt("Poderes, costes y límites", powers),
      excerpt("Arcos del reparto coral", ensemble),
      excerpt("Agencia del panteón", pantheon),
      excerpt("Revelación y pistas", reveal),
      arcs.length ? excerpt("Arcos que deben avanzar", arcs.join("; "), 220) : ""
    ].filter(Boolean);
    const protagonistGoal = conflict || premise || "el conflicto central que se definirá en la biblia narrativa";
    return Array.from({ length: count }, (_, index) => {
      const number = index + 1;
      const phase = phaseFor(index, count);
      const phaseIndexes = Array.from({ length: count }, (_, i) => i).filter(i => phaseFor(i, count) === phase);
      const beat = phase.beats[phaseIndexes.indexOf(index) % phase.beats.length];
      const previous = old[index] || {};
      const isFinal = number === count;
      const isFirst = number === 1;
      const transition = isFinal
        ? endingNotes[endingType]
        : "La consecuencia obliga a tomar una nueva decisión en el capítulo siguiente.";
      const storyContext = detail.length
        ? detail.join(" ")
        : "Completar la premisa, la motivación del protagonista y las reglas del mundo para concretar este resumen.";
      const summary = [
        "Resumen propuesto — " + phase.key + ".",
        (isFirst ? "La historia abre mostrando el mundo y la situación inicial. " : "") +
          protagonist + " intenta avanzar frente a «" + protagonistGoal + "».",
        "Acción central: " + beat.action + ".",
        "La oposición de " + antagonist + " complica el avance; el conflicto se expresa en una decisión concreta, no solo en una explicación.",
        storyContext,
        "Giro y consecuencia: " + beat.turn + ".",
        isFinal ? "Resolución prevista: " + transition : "Gancho causal: " + transition,
        isFinal && endingType === "open" ? "La pregunta abierta debe estar preparada por pistas anteriores y no invalidar la resolución inmediata." : ""
      ].filter(Boolean).join(" ");
      const title = (phase.key + " — " + beat.title).slice(0, 180);
      return {
        id: clean(previous.id) || (storyId + "-chapter-" + String(number).padStart(3, "0")),
        title,
        summary: summary.slice(0, 4000),
        content: typeof previous.content === "string" ? previous.content : "",
        status: clean(previous.status) || "outline"
      };
    });
  }

  function auditOutline(options) {
    const input = options || {};
    const chapters = Array.isArray(input.chapters) ? input.chapters : [];
    const expected = Number(input.chapterCount);
    const issues = [];
    if (!Number.isInteger(expected) || expected < 1 || expected > 500) issues.push("La cantidad planificada debe ser un entero entre 1 y 500.");
    else if (chapters.length !== expected) issues.push("El índice contiene " + chapters.length + " capítulos; el plan pide " + expected + ".");
    if (!chapters.length) issues.push("Todavía no existe un índice de capítulos.");
    chapters.forEach((chapter, index) => {
      if (!clean(chapter && chapter.title)) issues.push("Capítulo " + (index + 1) + ": falta título.");
      if (!clean(chapter && chapter.summary)) issues.push("Capítulo " + (index + 1) + ": falta resumen.");
      if (chapter && chapter.summary && chapter.summary.length > 4000) issues.push("Capítulo " + (index + 1) + ": el resumen supera 4000 caracteres.");
    });
    if (!clean(input.premise)) issues.push("Falta una premisa; los resúmenes pueden ser genéricos.");
    if (!clean(input.conflict)) issues.push("Falta el conflicto central.");
    if (!clean(input.castPlan)) issues.push("Falta definir protagonistas/coprotagonistas y sus objetivos.");
    if (!clean(input.antagonistPlan)) issues.push("Falta una fuerza opositora concreta.");
    const duplicateIds = new Set();
    const seen = new Set();
    chapters.forEach((chapter, index) => {
      const id = clean(chapter && chapter.id);
      if (id && seen.has(id)) duplicateIds.add(id);
      if (id) seen.add(id);
      if (duplicateIds.has(id)) issues.push("Capítulo " + (index + 1) + ": ID duplicado " + id + ".");
    });
    return { valid: issues.length === 0, issues, chapterCount: chapters.length, expectedChapterCount: expected };
  }

  const api = { generateOutline, auditOutline, phases: phases.map(phase => ({ key: phase.key, start: phase.start, end: phase.end })) };
  if (typeof module !== "undefined" && module.exports) module.exports = api;
  root.WordWaifuStoryForge = api;
})(typeof window !== "undefined" ? window : globalThis);

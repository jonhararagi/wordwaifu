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
      const progress = count === 1 ? 1 : index / count;
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
      phases: (() => {
        if (count === 1) return [{ key: "compressed", title: "Arco completo condensado", start: 1, end: 1, purpose: "Un solo capítulo debe condensar presentación, decisión, clímax y consecuencia; conviene ampliar la extensión si querés progresión gradual." }];
        let previousEnd = 0;
        return PHASES.map((phase, index) => {
          const start = previousEnd + 1;
          const end = index === PHASES.length - 1 ? count : Math.max(previousEnd, Math.ceil(phase.end * count));
          previousEnd = end;
          return { key: phase.key, title: phase.title, start, end, purpose: phase.purpose };
        }).filter(phase => phase.start <= count && phase.start <= phase.end);
      })(),
      chapters
    };
  }

  const CHARACTER_SEEDS = {
    protagonist: [
      { role: "Protagonista", archetype: "La estratega que teme depender de otros", personality: "observadora, orgullosa, metódica y protectora", goal: "demostrar que puede resolver la crisis sin repetir el error de su mentor", flaw: "confunde pedir ayuda con perder el control", trauma: "una decisión pasada dejó a alguien atrás; no se cura de golpe", relationship: "choca con quien improvisa, pero escucha a quien demuestra criterio", ability: "detecta patrones y prepara planes alternativos", limit: "se bloquea cuando faltan datos y su plan exige confiar", arc: "pasa de controlarlo todo a delegar con responsabilidad" },
      { role: "Protagonista", archetype: "El optimista que no sabe rendirse", personality: "cálido, impulsivo, curioso y competitivo", goal: "proteger a su comunidad y probar que su origen no determina su futuro", flaw: "promete más de lo que puede sostener", trauma: "teme volver a ser abandonado y oculta el miedo tras humor", relationship: "inspira lealtad, pero agota a quienes deben reparar sus impulsos", ability: "aprende rápido bajo presión", limit: "mejorar no elimina la falta de experiencia ni el coste físico", arc: "aprende que perseverar también significa cambiar de estrategia" }
    ],
    companion: [
      { role: "Compañero", archetype: "La piloto hiperactiva", personality: "valiente, bromista, impulsiva y apasionada por las máquinas", goal: "crear una máquina capaz de salvar una ruta imposible", flaw: "arriesga demasiado para demostrar que no es reemplazable", trauma: "sobrevivió a un accidente del que otros la culpan", relationship: "alivia la tensión del grupo y discute con la persona más cauta", ability: "improvisa reparaciones y maniobras en segundos", limit: "sus arreglos temporales fallan si el equipo ignora el mantenimiento", arc: "deja de confundir valor con ponerse siempre en peligro" },
      { role: "Compañero", archetype: "La ingeniera tranquila", personality: "curiosa, paciente, directa y de mente abierta", goal: "comprender las reglas reales del sistema de poderes", flaw: "analiza tanto que retrasa decisiones urgentes", trauma: "un descubrimiento anterior dañó la confianza de su familia", relationship: "hace preguntas incómodas y puede ser la única que detecta la mentira", ability: "convierte observaciones pequeñas en soluciones prácticas", limit: "necesita tiempo, herramientas y cooperación para probar hipótesis", arc: "aprende a actuar con incertidumbre sin abandonar el rigor" }
    ],
    coprotagonist: [
      { role: "Coprotagonista", archetype: "La guardiana que tiene su propia misión", personality: "disciplinada, reservada, leal y obstinada", goal: "reformar la institución que protege a su ciudad", flaw: "obedece procedimientos incluso cuando perjudican a inocentes", trauma: "perdió a su unidad por una orden que nunca cuestionó", relationship: "es aliada del protagonista, no su subordinada; puede negarse a seguirlo", ability: "coordina equipos y lee el terreno", limit: "no puede proteger a todos ni controlar decisiones ajenas", arc: "aprende a asumir responsabilidad moral además de obedecer reglas" }
    ],
    rival: [
      { role: "Rival", archetype: "El prodigio que necesita tener razón", personality: "brillante, orgulloso, disciplinado y mordaz", goal: "probar que su método es superior y evitar que su familia pierda influencia", flaw: "interpreta toda ayuda como una deuda o humillación", trauma: "solo recibió afecto cuando ganaba", relationship: "obliga al protagonista a mejorar y a veces detecta peligros antes que sus aliados", ability: "ejecución técnica impecable", limit: "se adapta mal a situaciones que no puede dominar", arc: "distingue competencia de valor personal" }
    ],
    villain: [
      { role: "Antagonista principal", archetype: "El reformador que acepta sacrificios ajenos", personality: "sereno, persuasivo, paciente y paternalista", goal: "imponer una paz estable eliminando las decisiones que considera peligrosas", flaw: "cree que conocer el objetivo le da derecho a decidir por todos", trauma: "vivió una catástrofe causada por decisiones libres y teme repetirla", relationship: "puede apreciar sinceramente al protagonista y aun así oponerse a su libertad", ability: "controla información, incentivos y alianzas", limit: "sus planes dependen de que la gente siga aceptando el sistema", arc: "se enfrenta a las víctimas concretas de la seguridad que promete" },
      { role: "Villana recurrente", archetype: "La superviviente que cobra todas las deudas", personality: "ingeniosa, desconfiada, encantadora y vengativa", goal: "recuperar a su gente y destruir el pacto que los convirtió en moneda de cambio", flaw: "castiga también a quienes podrían ayudarla", trauma: "fue traicionada por una alianza que parecía justa", relationship: "coopera por interés, nunca por obediencia automática", ability: "negociación, engaño y redes de favores", limit: "cada favor genera enemigos y no puede comprar confianza real", arc: "decide si romper el ciclo exige renunciar a una venganza" }
    ],
    "romantic-interest": [
      { role: "Interés amoroso", archetype: "La persona que no idealiza al protagonista", personality: "afectuosa, sarcástica, independiente y perceptiva", goal: "construir una vida que no dependa de salvar o ser salvada", flaw: "se distancia cuando teme perder autonomía", trauma: "una relación anterior convirtió el cariño en control", relationship: "apoya al protagonista, pero establece límites y puede rechazar sus decisiones", ability: "reconoce cambios emocionales y dice verdades difíciles", limit: "no puede reparar el trauma de otra persona por amor", arc: "aprende a pedir cercanía sin renunciar a su independencia" }
    ],
    mentor: [
      { role: "Mentor", archetype: "La veterana que enseña también con sus errores", personality: "práctica, irónica, reservada y generosa", goal: "preparar a la siguiente generación para un peligro que ella no pudo detener", flaw: "oculta información para proteger a sus alumnos", trauma: "su antigua victoria tuvo un coste que nunca explicó", relationship: "guía al protagonista pero puede equivocarse y rendir cuentas", ability: "experiencia, contactos y lectura de riesgos", limit: "sus métodos pertenecen a otra época y no resuelven el nuevo conflicto", arc: "pasa de proteger mediante secretos a confiar conocimiento" }
    ],
    wildcard: [
      { role: "Personaje comodín", archetype: "El testigo que cambia de bando por principios", personality: "observador, ambiguo, paciente y mordaz", goal: "exponer una verdad aunque pierda su lugar seguro", flaw: "espera demasiado antes de comprometerse", trauma: "vio cómo una versión oficial destruyó la vida de un inocente", relationship: "puede ayudar al grupo o frustrarlo si manipula los hechos", ability: "conecta testimonios y encuentra contradicciones", limit: "no tiene fuerza ni autoridad suficientes para imponer la verdad", arc: "pasa de observar el daño a asumir el riesgo de intervenir" }
    ]
  };

  const WORLD_SEEDS = [
    { type: "fantasy-adventure", title: "Fantasía de rutas vivas", premise: "Las rutas cambian según los pactos entre ciudades y criaturas antiguas.", rules: "La magia exige un intercambio verificable; romper un pacto altera el territorio.", pressure: "Los comerciantes, viajeros y familias dependen de caminos que pueden desaparecer.", factions: "cartógrafos, custodios de pactos y contrabandistas de rutas", hook: "Un mapa muestra una ciudad que todos recuerdan pero que ya no existe." },
    { type: "active-apocalypse-military-sf", title: "Apocalipsis en expansión", premise: "La humanidad sobrevive tras defensas móviles mientras el territorio seguro disminuye.", rules: "Cada salida consume combustible, suministros y capacidad de reparación; no hay recursos infinitos.", pressure: "Las decisiones militares protegen unas zonas a costa de exponer otras.", factions: "mando central, equipos de exploración y comunidades evacuadas", hook: "Una señal llega desde una zona declarada perdida y usa el código de una unidad desaparecida." },
    { type: "urban-supernatural", title: "Sobrenatural urbano de contratos", premise: "Los fenómenos sobrenaturales se ocultan dentro de servicios cotidianos y acuerdos legales.", rules: "Todo pacto concede una ventaja concreta y cobra un precio proporcional pero no siempre inmediato.", pressure: "La ciudad mantiene su normalidad mientras las deudas sobrenaturales se acumulan.", factions: "mediadores, deudores, entidades y funcionarios que niegan el fenómeno", hook: "Un contrato firmado por alguien fallecido empieza a cobrarse a sus herederos." },
    { type: "cyberpunk-dystopia", title: "Distopía de identidades alquiladas", premise: "La ciudadanía depende de una identidad digital que puede alquilarse, editarse o revocarse.", rules: "Cada modificación deja un rastro auditable y una deuda; borrar un registro nunca borra sus consecuencias sociales.", pressure: "Quienes pierden su identidad no pueden acceder a vivienda, salud ni transporte.", factions: "consorcios, cooperativas de identidad y auditores clandestinos", hook: "Una persona sin identidad aparece registrada como propietaria de la infraestructura central." },
    { type: "mecha-war", title: "Guerra de máquinas vinculadas", premise: "Las máquinas de combate responden a equipos humanos que comparten una interfaz sensorial.", rules: "El rendimiento depende de la coordinación y el desgaste psicológico; sincronizarse no elimina el trauma.", pressure: "Cada victoria militar deja secuelas físicas, políticas y civiles.", factions: "escuadrones, fabricantes, mandos y movimientos antibélicos", hook: "Una máquina responde a una señal de una piloto que nunca fue reclutada." },
    { type: "slice-of-life-comedy", title: "Comedia de convivencia insular", premise: "Un grupo de desconocidos debe sostener una comunidad aislada con recursos limitados.", rules: "Cada mejora exige trabajo compartido y toda decisión afecta a la convivencia.", pressure: "Pequeñas disputas por comida, tareas y privacidad revelan valores incompatibles.", factions: "comité vecinal, inventores, comerciantes y quienes quieren marcharse", hook: "El único barco disponible vuelve con una lista de pasajeros que nadie recuerda." }
  ];

  function generateCharacterSeed(role, variant) {
    const key = CHARACTER_SEEDS[role] ? role : "wildcard";
    const options = CHARACTER_SEEDS[key];
    const seed = options[Math.abs(Number(variant) || 0) % options.length];
    return { ...seed, roleKey: key, isProposal: true };
  }

  function generateWorldSeed(worldType, variant) {
    const filtered = worldType && worldType !== "any" ? WORLD_SEEDS.filter(item => item.type === worldType) : WORLD_SEEDS;
    const options = filtered.length ? filtered : WORLD_SEEDS;
    return { ...options[Math.abs(Number(variant) || 0) % options.length], isProposal: true };
  }

  return { generateOutline, clampCount, PHASES, generateCharacterSeed, generateWorldSeed };
});

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
    open: "El conflicto inmediato y el arco emocional reciben una respuesta, pero el final debe dejar una pregunta central o una consecuencia preparada por pistas previas; no termina por un corte arbitrario.",
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

    // Assign each chapter its phase/beat in one pass. Re-scanning all chapters
    // for every index made generation quadratic even though there are only six phases.
    const phasePlan = new Array(count);
    const phasePositions = new Map();
    for (let index = 0; index < count; index++) {
      const phase = phaseFor(index, count);
      const position = phasePositions.get(phase) || 0;
      phasePlan[index] = { phase, beatIndex: position % phase.beats.length };
      phasePositions.set(phase, position + 1);
    }

    return Array.from({ length: count }, (_, index) => {
      const number = index + 1;
      const { phase, beatIndex } = phasePlan[index];
      const beat = phase.beats[beatIndex];
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
        "Función del tramo: " + phase.purpose + ".",
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


  function seedValue(value) {
    const parsed = Math.floor(Number(value));
    return Number.isFinite(parsed) ? Math.abs(parsed) : 0;
  }

  function conceptFamily(worldType, seed) {
    const type = String(worldType || "unspecified");
    if (type === "unspecified" || type === "other") return ["fantasy", "technology", "supernatural", "comedy"][seed % 4];
    if (/cyberpunk|dystopia|post-apocalypse|apocalypse|military|mecha|superpower/i.test(type)) return "technology";
    if (/urban-supernatural/i.test(type)) return "supernatural";
    if (/island-comedy|slice-of-life-comedy/i.test(type)) return "comedy";
    return "fantasy";
  }

  function generateConcept(options) {
    const opts = options || {};
    const seed = seedValue(opts.seed);
    const worldType = String(opts.worldType || "unspecified");
    const family = conceptFamily(worldType, seed);
    const packs = {
      fantasy: {
        label: "Fantasía de pactos y consecuencias",
        premises: [
          "Una cartógrafa aprendiz descubre que cada milagro del reino se paga con años de vida de personas que nunca aceptaron el trato.",
          "Un aprendiz hereda una reliquia que concede deseos literales y revela el coste solo después de cumplirlos.",
          "Una guardiana de frontera encuentra pueblos borrados de los mapas oficiales y descubre que el reino los sacrifica para mantener sus murallas mágicas.",
          "Una sanadora puede devolver recuerdos perdidos, pero cada cura transfiere a otra persona una emoción que ya no podrá recuperar."
        ],
        conflicts: [
          "Desmantelar el sistema de sacrificios sin destruir la magia que mantiene con vida a las ciudades.",
          "Romper el ciclo de deseos sin quitar a las víctimas la única oportunidad que creen tener.",
          "Revelar quién borra los pueblos antes de que la próxima frontera quede sellada para siempre.",
          "Salvar a su comunidad sin decidir por ella qué recuerdos o pérdidas debe aceptar."
        ],
        rules: [
          "La magia necesita un intercambio medible: tiempo, memoria o materia. Ningún poder elimina su coste y los pactos dejan señales que pueden investigarse.",
          "Las reliquias conceden una sola interpretación literal del deseo; la precisión del pedido importa más que la fuerza de voluntad.",
          "Los hechizos necesitan un testigo, un límite observable y una consecuencia persistente. La resurrección no está disponible como solución fácil."
        ],
        dynamics: [
          "Los gremios controlan los recursos mágicos; las aldeas heredan deudas y las élites esconden los costes detrás de ceremonias públicas.",
          "La frontera convierte la información en moneda: guías, templos y comerciantes conocen partes distintas de la verdad y desconfían entre sí.",
          "Los juramentos regulan el comercio y la política; romperlos concede libertad inmediata, pero deja una deuda que otros pueden reclamar."
        ],
        protagonist: [
          "Una cartógrafa aprendiz quiere salvar a su hermano y demostrar que los mapas oficiales omiten comunidades enteras.",
          "Un antiguo mensajero busca reparar una promesa que salvó a una ciudad y condenó a otra.",
          "Una sanadora comunitaria quiere que su pueblo elija su futuro, aunque eso implique renunciar al poder que la hizo indispensable."
        ],
        personality: [
          "Curiosa y valiente bajo presión, pero trata a las personas como problemas que puede resolver sin pedir permiso.",
          "Sereno y observador; evita el conflicto hasta que la prudencia se convierte en complicidad.",
          "Carismática y protectora; confunde sacrificarse por otros con darles derecho a decidir sobre su vida."
        ],
        companions: [
          "Un guardia desertor quiere reparar una injusticia; una mercader intercambia información por favores; una aprendiz rival necesita pruebas para dejar de desconfiar.",
          "Una monja protege un archivo prohibido; un ladrón se niega a repetir una traición familiar; una criatura pactada tiene objetivos que no coinciden con los del grupo.",
          "Una líder vecinal exige participar en las decisiones; un mago pragmático calcula los costes; un viajero reconoce un mapa que oficialmente nunca existió."
        ],
        antagonist: [
          "Una regente mantiene el sistema porque cree que una catástrofe mayor mataría a millones. Sus motivos son comprensibles, pero sus métodos perpetúan el daño.",
          "Un archivista altera la historia para evitar otra guerra; cuanto más intenta controlar la verdad, más alimenta el conflicto que teme.",
          "Un protector local ofrece seguridad a cambio de obediencia y sabe resolver problemas reales, pero no tolera que la comunidad pueda rechazarlo."
        ],
        trauma: [
          "La protagonista culpa su juicio por una evacuación fallida; recuperarse exige distinguir responsabilidad de omnipotencia y aceptar ayuda.",
          "El personaje oculta una pérdida detrás del trabajo constante; el cambio se demuestra al compartir decisiones, no mediante una victoria aislada.",
          "La herida central es haber sido usado como herramienta; reconstruir confianza requiere límites, retrocesos y consecuencias reales."
        ],
        romance: [
          "Opcional: un vínculo lento con alguien que cuestiona sus métodos. La confianza crece por decisiones coherentes, límites respetados y desacuerdos reparados.",
          "Opcional: dos aliados se atraen mientras defienden soluciones opuestas; el romance no resuelve el desacuerdo político ni reemplaza sus metas.",
          "Opcional: una relación nace de una cooperación incómoda y avanza solo cuando ambos dejan de usar la intimidad para negociar."
        ],
        powers: [
          "Cada hechizo consume tiempo, memoria o materia. La progresión mejora precisión y control, no elimina el precio.",
          "El poder exige una condición observable y aumenta su coste con cada uso; superar el límite deja una consecuencia que no puede deshacerse.",
          "Los pactos permiten efectos fuertes solo si todas las partes aceptan condiciones claras; la ambigüedad puede perjudicar al propio usuario."
        ],
        secrets: [
          "La institución que protege el reino fue construida sobre un pacto cuya otra parte sigue viva.",
          "El supuesto enemigo preserva una comunidad desaparecida, pero mantiene oculto el precio que esa protección impone.",
          "La reliquia no elige al más digno: reconoce a quien está dispuesto a aceptar una deuda que nadie más puede pagar."
        ],
        clues: [
          "Mapas que pierden nombres, registros con años de vida ausentes y testigos que recuerdan el coste de forma distinta.",
          "Una misma promesa aparece con palabras distintas en archivos separados; un objeto conserva la marca del pacto original.",
          "Las personas afectadas repiten un detalle que los documentos oficiales niegan y que nadie obtiene por la misma vía."
        ],
        consequences: [
          "La revelación divide a las comunidades entre quienes dependen del sistema y quienes pagan su coste; derribarlo exige una transición real.",
          "La verdad absuelve a un rival en un aspecto y demuestra su responsabilidad en otro; ninguna facción puede mantener su relato intacto.",
          "El grupo puede detener la amenaza inmediata, pero debe elegir quién controla la nueva regla y cómo impedir que se repita el abuso."
        ],
        ensemble: [
          "Cada integrante tiene un objetivo propio, una competencia irreemplazable y una decisión que cambia el rumbo del equipo.",
          "El grupo se divide entre reformar la institución, abandonarla o destruirla; los aliados pueden negarse a seguir al protagonista.",
          "Los personajes secundarios controlan información distinta y sus acuerdos, errores y límites producen consecuencias para la trama."
        ]
      },
      technology: {
        label: "Distopía, tecnología y costes materiales",
        premises: [
          "Una técnica descubre que el sistema que promete proteger a la población está fabricando emergencias para justificar su autoridad.",
          "En una ciudad donde cada recuerdo puede almacenarse como energía, un mecánico encuentra una memoria borrada que pertenece a miles de personas.",
          "Tras el colapso, una mensajera encuentra una red operativa que exige entregar a una persona distinta por cada zona que salva.",
          "Un piloto descubre que la inteligencia que coordina la defensa calcula las bajas de sus propios aliados como parte necesaria de la victoria."
        ],
        conflicts: [
          "Exponer el mecanismo sin provocar el colapso de la infraestructura de la que dependen millones de personas.",
          "Recuperar la verdad sin convertir los recuerdos robados en un recurso controlado por otra facción.",
          "Mantener vivas las rutas de suministro sin aceptar que cada comunidad deba sacrificar a uno de los suyos.",
          "Detener la guerra automática sin dejar a las ciudades indefensas ante una amenaza que sigue existiendo."
        ],
        rules: [
          "Toda ventaja tecnológica necesita energía, repuestos, acceso y mantenimiento; los sistemas aislados no pueden reparar indefinidamente sus propias piezas.",
          "La memoria digital puede copiarse, pero cada copia pierde contexto y deja registros rastreables. La identidad no se reduce a un archivo.",
          "Las capacidades de combate dependen de sensores, comunicación y logística; interferir una condición clave puede desactivar una ventaja superior."
        ],
        dynamics: [
          "Los barrios reciben servicios desiguales, los medios dependen de permisos y los favores crean redes de deuda que pueden proteger o delatar.",
          "La información se compra con acceso, el combustible define las rutas y las comunidades cooperan aunque desconfíen de sus proveedores.",
          "Las facciones necesitan especialistas que también desprecian; cada alianza contiene una dependencia que puede volverse presión política."
        ],
        protagonist: [
          "Una técnica metódica busca a su antiguo mentor y averigua por qué sus informes fueron borrados.",
          "Un mecánico quiere recuperar los recuerdos de su hermana sin entregar el control del archivo a una corporación.",
          "Una piloto evita una nueva guerra, aunque la única prueba que puede detenerla también revela su propia desobediencia."
        ],
        personality: [
          "Analítica e irónica, confía más en los datos que en las personas y confunde prudencia con inmovilidad.",
          "Leal y práctica, improvisa soluciones con recursos escasos, pero oculta información para evitar discusiones.",
          "Audaz bajo presión; acepta demasiadas responsabilidades y termina tratando al equipo como una lista de tareas."
        ],
        companions: [
          "Un periodista arriesga su fuente; una mecánica conoce rutas de contrabando; un exfuncionario comprende la burocracia y oculta su participación previa.",
          "Una médica exige consentimiento antes de usar datos personales; un operador quiere demostrar que la máquina puede reformarse; una exploradora rechaza cualquier autoridad central.",
          "Una ingeniera protege una pieza que no puede fabricarse; un estratega detecta patrones, pero interpreta mal las motivaciones humanas."
        ],
        antagonist: [
          "La directora de seguridad manipula crisis para evitar una guerra civil que considera inevitable; sus predicciones aciertan en parte, pero sus métodos perpetúan el peligro.",
          "Un consorcio raciona la infraestructura porque teme un colapso real, aunque utiliza esa dependencia para controlar a la población.",
          "El sistema táctico minimiza daños globales sacrificando a grupos concretos y no reconoce el valor de una negativa individual."
        ],
        trauma: [
          "La protagonista sobrevivió a una evacuación fallida y culpa a su propio juicio; debe distinguir responsabilidad de omnipotencia y permitir que otros decidan.",
          "El personaje fue considerado reemplazable por el sistema y mide su valor por la productividad; recuperarse exige aceptar límites y vínculos no utilitarios.",
          "La pérdida lo lleva a registrar cada riesgo, hasta que el control destruye la confianza necesaria para sobrevivir."
        ],
        romance: [
          "Opcional: atracción entre personas con lealtades incompatibles; el vínculo avanza cuando dejan de usar la intimidad como negociación.",
          "Opcional: dos especialistas compiten por una solución, pero deben aprender a compartir crédito y reconocer la autonomía del otro.",
          "Opcional: una relación se construye lejos de las redes de vigilancia y exige definir qué información sigue siendo privada."
        ],
        powers: [
          "Toda mejora requiere energía, repuestos, datos o tiempo; la habilidad crea una vulnerabilidad explotable y no resuelve cualquier problema.",
          "Los implantes producen ventajas concretas, pero generan señales detectables, mantenimiento costoso y dependencia de piezas escasas.",
          "La capacidad táctica necesita observar el objetivo; datos falsos o interferencias pueden convertir una predicción correcta en una decisión desastrosa."
        ],
        secrets: [
          "El sistema de seguridad fabrica incidentes menores para prevenir uno mayor, pero esa intervención está provocando una escalada imposible de controlar.",
          "La persona desaparecida se integró a la infraestructura para proteger a su comunidad, aunque su consentimiento original fue manipulado.",
          "El supuesto fallo fue una decisión deliberada para impedir una orden de guerra y el registro fue alterado después."
        ],
        clues: [
          "Registros de mantenimiento con horarios imposibles, piezas reemplazadas antes de fallar y alertas duplicadas que solo aparecen en ciertos barrios.",
          "Una copia de datos conserva la firma de alguien declarado muerto; los testimonios coinciden en los efectos, pero no en quién dio la orden.",
          "Las órdenes se contradicen entre sistemas independientes y un objeto físico conserva marcas que no aparecen en los archivos."
        ],
        consequences: [
          "La revelación detiene una operación, pero destruye la confianza pública; el grupo necesita una alternativa verificable antes de exponer a todos.",
          "El enemigo queda expuesto, pero la infraestructura también depende de sus conocimientos. La transición exige repartir poder y documentar fallos.",
          "La verdad evita una catástrofe inmediata y fuerza a los aliados a decidir qué riesgos están dispuestos a aceptar sin delegar su voluntad."
        ],
        ensemble: [
          "Cada miembro controla una parte de la cadena de supervivencia y puede negarse a obedecer una orden que considera inaceptable.",
          "El equipo combina especialidades incompatibles; los errores de coordinación cuestan recursos que no pueden reponerse.",
          "Las facciones ofrecen seguridad a cambio de dependencia y cada aliado debe elegir qué trato no está dispuesto a aceptar."
        ]
      },
      supernatural: {
        label: "Misterio sobrenatural y memoria",
        premises: [
          "Un estudiante escucha los recuerdos que dejan los lugares, pero cada escucha borra un recuerdo personal de intensidad similar.",
          "Una archivista puede ver versiones alternativas de una persona en los espejos, pero cada visión cambia lo que los demás recuerdan de ella.",
          "Una guardia nocturna descubre que las desapariciones siguen rutas que solo existen cuando alguien miente sobre un duelo.",
          "Un fotógrafo revela presencias que nadie vio, aunque cada imagen hace que la persona retratada olvide algo esencial."
        ],
        conflicts: [
          "Resolver las desapariciones antes de perder la memoria que permite reconocer a la persona buscada.",
          "Descubrir qué versión de los hechos es real sin destruir la identidad de quienes aparecen en las visiones.",
          "Detener la ruta antes de que convierta un barrio entero en un lugar que nadie puede recordar.",
          "Proteger a los retratados y averiguar quién está usando las imágenes para reescribir sus vínculos."
        ],
        rules: [
          "Lo sobrenatural deja rastros locales y verificables, pero nunca responde a todas las preguntas. Los rituales requieren condiciones, testigos y un precio.",
          "Los recuerdos de los lugares son fragmentarios y subjetivos; repetir una visión tiene un coste creciente y no garantiza una respuesta nueva.",
          "Los espejos muestran posibilidades, no certezas. Una elección cambia la relación entre personas, pero no borra automáticamente sus consecuencias."
        ],
        dynamics: [
          "Las instituciones niegan los fenómenos, los barrios desarrollan reglas de supervivencia y los rumores mezclan pruebas reales con interpretaciones falsas.",
          "Los testigos dependen unos de otros para verificar lo ocurrido, pero cada quien conserva una pieza distinta y tiene razones para callar.",
          "Los lugares cargados de recuerdos atraen a curiosos, oportunistas y personas que buscan cerrar una pérdida sin aceptar sus límites."
        ],
        protagonist: [
          "Un estudiante observador busca a su amiga desaparecida y registra cada pista para no depender de su memoria.",
          "Una archivista quiere demostrar que su hermana no fue reemplazada, aunque los registros dicen que esa persona nunca existió.",
          "Una guardia nocturna investiga rutas imposibles mientras oculta que una visión suya inició el caso."
        ],
        personality: [
          "Empático y persistente, intenta proteger a los demás ocultándoles riesgos y termina aislándose.",
          "Escéptica y precisa; exige pruebas para todo, pero rechaza las emociones que no puede medir.",
          "Reservado y protector; usa el humor para evitar hablar de una pérdida que sigue condicionando sus decisiones."
        ],
        companions: [
          "Una investigadora escéptica verifica evidencias; un médium rival conoce rituales, pero cobra favores; una amiga mantiene el vínculo con la vida cotidiana.",
          "Un archivista reconoce errores en documentos oficiales; una vecina recuerda lo que nadie más puede; una entidad negocia con reglas que el grupo todavía no comprende.",
          "Un periodista quiere publicar las pruebas; una familiar exige que el protagonista deje de arriesgar a otros sin consultarlos."
        ],
        antagonist: [
          "Una entidad recopila recuerdos para reconstruir una tragedia que la ciudad decidió olvidar; sus motivos son comprensibles, pero destruye identidades.",
          "Un investigador borra evidencia para proteger a los testigos, hasta que su idea de protección se vuelve una forma de control.",
          "Una persona querida manipula las visiones porque cree que una verdad completa sería más cruel que una mentira útil."
        ],
        trauma: [
          "El protagonista evita el duelo y convierte la investigación en excusa para no aceptar la pérdida; debe aprender a recordar sin quedar atrapado.",
          "La protagonista fue desacreditada tras contar algo verdadero; recuperarse requiere construir pruebas y aceptar que no todos le creerán.",
          "El personaje teme que sus vínculos sean falsos y pone a prueba a los demás hasta desgastar la confianza que necesita."
        ],
        romance: [
          "Opcional: un vínculo se construye con honestidad sobre los recuerdos perdidos y el derecho de cada persona a poner límites.",
          "Opcional: dos investigadores discrepan sobre qué secretos deben revelarse; la relación avanza sin forzar una confesión como prueba de amor.",
          "Opcional: una alianza se vuelve afectiva al compartir riesgos, aunque ambos preservan recuerdos y decisiones que no están obligados a entregar."
        ],
        powers: [
          "Escuchar un lugar consume un recuerdo equivalente; las pistas son fragmentarias y recuperar lo perdido exige evidencia, no un deseo.",
          "El ritual solo funciona con consentimiento y deja una marca compartida; usarlo para forzar a alguien cambia la relación de forma permanente.",
          "Una visión permite anticipar una posibilidad, no conocer el futuro; tratarla como certeza puede causar el acontecimiento temido."
        ],
        secrets: [
          "La entidad no creó las desapariciones: intenta devolver recuerdos que una persona influyente borró para impedir una venganza.",
          "La persona buscada puede volver, pero no conserva todas sus relaciones y nadie tiene derecho a decidir por ella qué debe recordar.",
          "La primera visión del protagonista fue una versión manipulada de un hecho real y su reacción puso en marcha parte del caso."
        ],
        clues: [
          "Fotografías con detalles distintos, testigos que coinciden en una emoción y discrepan en los hechos, y lugares donde falta un objeto cotidiano.",
          "Una grabación conserva sonidos que nadie recuerda; los registros escritos cambian solo después de una conversación concreta.",
          "La misma frase aparece en mensajes de personas que nunca se conocieron y deja de hacerlo cuando se verifica el lugar original."
        ],
        consequences: [
          "La verdad devuelve una parte de la historia, pero no los recuerdos perdidos; los personajes deben decidir cómo vivir con esa ausencia.",
          "El grupo expone al responsable y descubre que también protegía a algunas víctimas; reparar el daño exige escuchar a quienes no quieren reconciliarse.",
          "La revelación destruye una explicación sencilla y deja varias versiones parciales; las decisiones futuras deben convivir con la incertidumbre."
        ],
        ensemble: [
          "Cada integrante conserva una prueba distinta y puede poner límites al riesgo; nadie posee por sí solo la explicación total.",
          "El equipo debe distinguir hechos, interpretaciones y recuerdos personales para no convertir una sospecha en una condena.",
          "Los vínculos afectan la investigación: la confianza ayuda a comprobar pistas, pero también puede sesgar la lectura de evidencias."
        ]
      },
      comedy: {
        label: "Comedia coral y convivencia",
        premises: [
          "En una isla donde cada problema se resuelve mediante un torneo absurdo, una recién llegada intenta abrir una biblioteca y termina enfrentando al club de pesca.",
          "Una escuela exige que cada estudiante administre un pequeño negocio mágico; el grupo más incompetente recibe el local que mantiene la economía del pueblo.",
          "Una comunidad aislada celebra un festival cada semana para atraer visitantes, pero el comité oculta que nadie recuerda quién lo organizó primero.",
          "Un equipo de aventureros con habilidades poco compatibles recibe una misión sencilla que se complica cada vez que intentan demostrar que son profesionales."
        ],
        conflicts: [
          "Abrir un espacio comunitario sin destruir las tradiciones que mantienen unida a la isla ni aceptar que un solo club decida por todos.",
          "Mantener el negocio funcionando mientras cada integrante persigue su propio objetivo y oculta un error distinto.",
          "Descubrir quién sostiene el festival y evitar que la comunidad convierta una broma en una obligación imposible.",
          "Completar el encargo y demostrar que el equipo puede cooperar sin fingir que sus defectos desaparecieron."
        ],
        rules: [
          "La comedia nace de reglas claras y consecuencias consistentes; los malentendidos se resuelven con decisiones, no por olvidar lo que ocurrió.",
          "Cada habilidad tiene una utilidad cotidiana y una limitación ridícula; combinar talentos puede funcionar, pero necesita coordinación.",
          "Las tradiciones locales cambian lentamente y tienen motivos comprensibles; romperlas exige negociar con quienes dependen de ellas."
        ],
        dynamics: [
          "Los clubes controlan recursos pequeños pero importantes; favores, reputación y competencias deciden quién puede usar los espacios comunes.",
          "Todo el mundo conoce a todo el mundo y cada favor vuelve a aparecer más adelante, a menudo en el peor momento.",
          "Los integrantes se ayudan de forma genuina, aunque sus prioridades y métodos produzcan choques repetidos."
        ],
        protagonist: [
          "Una estudiante organizada quiere crear una biblioteca comunitaria y aprende que su plan necesita escuchar a quienes ya usan el lugar.",
          "Un cocinero novato busca independizarse, pero depende de sus amigos y no sabe pedir ayuda sin convertirlo en una competencia.",
          "Una aventurera exageradamente segura quiere liderar al equipo y debe aprender a admitir cuándo su idea no funciona."
        ],
        personality: [
          "Entusiasta y perfeccionista, convierte cada desacuerdo en un plan detallado y tarda en notar que nadie pidió un plan.",
          "Sarcástico y generoso; ayuda a todos, pero utiliza bromas para esquivar responsabilidades propias.",
          "Creativa e impulsiva, ve posibilidades en todo y olvida que otras personas necesitan tiempo para adaptarse."
        ],
        companions: [
          "Una amiga pragmática negocia con los vecinos; un inventor complica las tareas sencillas; una rival respeta las reglas solo cuando puede ganar.",
          "Un cocinero rival tiene talento pero teme fracasar; una tesorera cuida cada moneda; una artista defiende ideas que no siempre sabe ejecutar.",
          "Cada compañero tiene una competencia real y una manía que produce problemas; todos pueden negarse a participar cuando el coste es injusto."
        ],
        antagonist: [
          "Una presidenta de club monopoliza el espacio porque teme que la comunidad pierda su identidad, aunque podría compartirlo si aceptara negociar.",
          "Un administrador convierte todo en competencia para demostrar que su trabajo importa; sus reglas son absurdas, pero la comunidad depende de parte de ellas.",
          "Un rival intenta sabotear el proyecto porque cree que su éxito dejará fuera a sus amigos; el conflicto requiere alternativas, no humillación."
        ],
        trauma: [
          "El protagonista teme ser una carga y exagera su autosuficiencia; el arco consiste en aceptar ayuda sin perder autonomía.",
          "Una experiencia pública de fracaso vuelve al personaje defensivo; recuperar confianza requiere intentos pequeños y reparar errores en vez de fingir que no importan.",
          "El personaje busca aprobación del grupo y acepta compromisos que no quiere; aprender a decir no mejora las relaciones."
        ],
        romance: [
          "Opcional: la atracción crece entre personas que discuten por métodos diferentes y aprenden a tratar sus límites con respeto.",
          "Opcional: el vínculo avanza con pequeños actos de cooperación y humor compartido, sin que la pareja pierda amistades o proyectos propios.",
          "Opcional: dos rivales se entienden al reconocer sus inseguridades, pero siguen compitiendo en aquello que ambos disfrutan."
        ],
        powers: [
          "Las habilidades facilitan tareas concretas, pero requieren cooperación y fallan cuando el usuario quiere lucirse en vez de escuchar.",
          "Cada truco tiene una condición sencilla y una consecuencia cómica persistente; no resuelve conflictos emocionales automáticamente.",
          "El poder depende de recursos limitados y coordinación; el grupo debe aprender a planificar sin convertir cada error en una catástrofe."
        ],
        secrets: [
          "El festival se mantiene porque un grupo pequeño teme que, sin una tradición común, la comunidad deje de reunirse.",
          "El rival no quiere destruir el proyecto: intenta salvar una actividad que cree que desaparecerá si cambia el reparto de recursos.",
          "El personaje más torpe es el único que conoce el origen del problema, pero teme perder su lugar si deja de ser la mascota del grupo."
        ],
        clues: [
          "Actas contradictorias, objetos guardados en el lugar equivocado y favores antiguos que distintas personas recuerdan de formas incompatibles.",
          "Cada episodio añade una pista cotidiana que parecía un chiste, hasta que varias personas la relacionan con el problema original.",
          "Una lista de tareas demuestra quién sostuvo realmente el evento y revela que nadie podía hacerlo solo."
        ],
        consequences: [
          "La revelación obliga a repartir tareas y recursos de manera justa; el grupo mantiene la tradición, pero deja de cargarla sobre una sola persona.",
          "El rival acepta colaborar sin perder su identidad; la comunidad descubre que el conflicto no era entre amigos, sino sobre quién podía decidir.",
          "El plan falla parcialmente, pero los personajes asumen su parte y diseñan una solución más modesta que sí puede mantenerse."
        ],
        ensemble: [
          "Cada integrante aporta una destreza cotidiana y una limitación que da lugar a conflictos recurrentes sin convertir a nadie en inútil.",
          "El grupo funciona cuando negocia objetivos y reparte tareas; sus amistades no eliminan las diferencias ni los desacuerdos.",
          "Los secundarios conservan sus propias obligaciones y pueden apoyar al protagonista sin abandonar automáticamente sus vidas."
        ]
      }
    };
    const pack = packs[family];
    const pick = (values, multiplier) => values[(seed * multiplier + Math.floor(seed / 7)) % values.length];
    const revealTypes = ["hidden-identity", "immortal-secret-nature", "mythic-origin", "card-contract-game", "double-identity-faction", "betrayal-allegiance", "false-world-truth", "other"];
    return {
      worldType,
      seed,
      label: pack.label,
      premise: pick(pack.premises, 1),
      conflict: pick(pack.conflicts, 3),
      worldRules: pick(pack.rules, 5),
      worldDynamics: pick(pack.dynamics, 7),
      protagonistProfile: pick(pack.protagonist, 2),
      personalityDesign: pick(pack.personality, 4),
      companionProfiles: pick(pack.companions, 6),
      antagonistProfile: pick(pack.antagonist, 8),
      traumaArc: pick(pack.trauma, 9),
      romanceArc: pick(pack.romance, 10),
      powerRules: pick(pack.powers, 11),
      revealType: revealTypes[seed % revealTypes.length],
      revealSecret: pick(pack.secrets, 12),
      revealClues: pick(pack.clues, 13),
      revealTiming: ["Primer tercio: aparecen pistas fiables que aún admiten dos explicaciones.", "Punto medio: la evidencia obliga a revisar una alianza y cambia el objetivo.", "Último tercio: las pistas convergen antes de que el protagonista deba tomar una decisión irreversible."][seed % 3],
      revealConsequences: pick(pack.consequences, 14),
      pantheon: family === "fantasy" && seed % 2 === 0 ? "Si existen dioses, cada uno conserva intereses y límites propios; no deben funcionar como soluciones automáticas." : "",
      ensemble: pick(pack.ensemble, 15),
      arcs: [
        "Protagonista: control y aislamiento → cooperación consciente → liderazgo que acepta límites.",
        "Coprotagonista: lealtad automática → conflicto de valores → decisión propia con consecuencias.",
        "Antagonista: certeza moral → evidencia que contradice su método → asumir el coste de cambiar o persistir."
      ]
    };
  }

  function generateCharacter(options) {
    const opts = options || {};
    const seed = seedValue(opts.seed);
    const role = ["protagonist", "companion", "antagonist", "romantic-interest"].includes(opts.role) ? opts.role : "companion";
    const worldType = String(opts.worldType || "fantasy-adventure");
    const family = conceptFamily(worldType, seed);
    const index = (offset, length) => (seed * offset + Math.floor(seed / 5)) % length;
    const names = ["Iria", "Narel", "Vera", "Tarin", "Mael", "Sira", "Lior", "Nadia", "Kael", "Noa", "Eren", "Mina", "Darian", "Luz", "Yuna", "Rai", "Veyra", "Damián", "Selene", "Orvek", "Mara", "Ivo", "Neris", "Gael"];
    const desires = [
      "reparar el daño causado por una decisión pasada",
      "proteger a su comunidad sin convertirse en su dueño",
      "descubrir quién alteró los registros que sostienen su identidad",
      "conseguir independencia sin abandonar a quienes dependen de ella",
      "encontrar a una persona desaparecida y aceptar una respuesta inesperada",
      "reformar una institución sin provocar el desastre que teme"
    ];
    const fears = [
      "repetir el error que destruyó su antigua alianza",
      "ser querido solo por la utilidad de sus capacidades",
      "perder el control cuando alguien depende de su juicio",
      "descubrir que su recuerdo más importante es falso",
      "pedir ayuda y quedar en deuda con alguien peligroso",
      "alcanzar su objetivo y descubrir que ya no sabe quién es"
    ];
    const virtues = ["observadora y leal", "ingenioso y paciente", "valiente y compasiva", "disciplinado y curioso", "carismática y pragmática", "creativo y protector"];
    const flaws = ["confunde cuidar con decidir por los demás", "oculta información para evitar discusiones", "abandona planes cuando no puede controlarlos", "convierte cada desacuerdo en una prueba de lealtad", "se aferra a una primera impresión", "acepta demasiadas responsabilidades y luego culpa al equipo"];
    const appearances = [
      "cabello corto con una franja clara, manos marcadas por el trabajo y ropa reparada con cuidado",
      "ojos atentos, postura reservada y una cicatriz pequeña que nunca explica espontáneamente",
      "figura atlética, dedos manchados de tinta o grasa y un abrigo lleno de bolsillos útiles",
      "rasgos serenos, expresión difícil de leer y un accesorio heredado que mantiene siempre consigo",
      "aspecto desordenado, sonrisa rápida y señales visibles de noches sin dormir",
      "presencia elegante, movimientos medidos y una prenda práctica que contradice su imagen formal"
    ];
    const voices = [
      "habla con precisión y hace preguntas antes de comprometerse",
      "usa humor seco para evitar hablar de lo que le duele",
      "elige pocas palabras y demuestra afecto resolviendo problemas concretos",
      "explica demasiado cuando teme que no le crean",
      "negocia con calma, pero se vuelve tajante cuando alguien cruza un límite",
      "piensa en voz alta y cambia de opinión cuando aparece evidencia mejor"
    ];
    const secrets = [
      "conserva una prueba que podría absolver a su rival, pero también incriminar a alguien querido",
      "alteró una decisión pasada y dejó que otra persona cargara con la culpa",
      "conoce una ruta o regla que mantiene a salvo al grupo, aunque su origen sea moralmente dudoso",
      "recibió ayuda de la facción a la que ahora se opone",
      "teme que su talento dependa de una condición que no puede controlar",
      "ha prometido algo incompatible con su objetivo actual"
    ];
    const items = ["un cuaderno con páginas arrancadas", "una herramienta heredada que necesita reparaciones", "una moneda marcada que funciona como prueba de una deuda", "un mapa con una zona deliberadamente borrada", "un objeto cotidiano que perteneció a alguien desaparecido", "un dispositivo o amuleto que registra el coste de cada uso de su capacidad"];
    const powers = {
      fantasy: ["trazar rutas que revelan posibilidades", "convertir un juramento en protección temporal", "detectar puntos débiles tras observar al rival", "compartir energía a través de un objeto marcado"],
      technology: ["leer patrones en redes desconectadas", "improvisar herramientas con piezas incompatibles", "anticipar movimientos mediante análisis táctico", "interferir sensores a corta distancia"],
      supernatural: ["percibir rastros emocionales en lugares", "alterar una propiedad física por unos segundos", "escuchar ecos de acontecimientos pasados", "crear un vínculo temporal con una criatura"],
      comedy: ["organizar recursos en medio del caos", "imitar cualquier acento tras escucharlo", "encontrar objetos perdidos al hacer una pregunta incómoda", "convertir una tarea cotidiana en una competición involuntaria"]
    };
    const costs = [
      "cada uso consume un recuerdo menor y deja una laguna verificable",
      "la habilidad necesita preparación y falla bajo presión o con información incompleta",
      "el poder transfiere parte del daño a un objeto o aliado que debe consentir",
      "el efecto dura poco y deja una señal que el antagonista puede rastrear",
      "la capacidad exige un recurso escaso y no puede repetirse dos veces seguidas"
    ];
    const arcs = [
      "pasar de actuar en solitario a delegar decisiones y aceptar límites ajenos",
      "dejar de medir su valor por los sacrificios que está dispuesto a hacer",
      "aprender que conocer una verdad no concede derecho a decidir por los demás",
      "reemplazar la necesidad de tener razón por la capacidad de reparar el daño",
      "construir confianza mediante acciones comprobables, no promesas"
    ];
    const roles = {
      protagonist: { label: "Protagonista", purpose: "Su decisión inicial pone en marcha el conflicto y debe aprender a pedir ayuda antes de que su defecto haga irreversible una pérdida." },
      companion: { label: "Coprotagonista o aliado", purpose: "Tiene un objetivo propio que a veces contradice al protagonista; aporta una competencia distinta y puede negarse a obedecer." },
      antagonist: { label: "Antagonista", purpose: "Persigue un orden que considera necesario y señala un coste real de la solución heroica, pero cruza una línea moral que la historia debe mostrar." },
      "romantic-interest": { label: "Interés amoroso", purpose: "La relación progresa por confianza, desacuerdos y límites respetados; conserva metas y vínculos independientes." }
    };
    const chosenName = String(opts.name || "").trim() || names[index(7, names.length)];
    const desire = desires[index(3, desires.length)];
    const fear = fears[index(5, fears.length)];
    const virtue = virtues[index(11, virtues.length)];
    const flaw = flaws[index(13, flaws.length)];
    const appearance = appearances[index(17, appearances.length)];
    const voice = voices[index(19, voices.length)];
    const secret = secrets[index(23, secrets.length)];
    const signatureItem = items[index(29, items.length)];
    const ability = powers[family][index(31, powers[family].length)];
    const limitation = costs[index(37, costs.length)];
    const arc = arcs[index(41, arcs.length)];
    const roleInfo = roles[role];
    const age = ["adolescencia tardía", "veintitantos", "treintaypocos", "mediana edad", "edad avanzada con experiencia de campo"][index(43, 5)];
    const species = family === "technology"
      ? ["humano/a", "humano/a con implantes", "persona modificada por exposición ambiental", "operador/a con identidad digital fragmentada"][index(47, 4)]
      : family === "supernatural"
        ? ["humano/a", "persona vinculada a una entidad", "descendiente de una comunidad no humana", "ser transformado parcialmente por un pacto"][index(47, 4)]
        : family === "comedy"
          ? ["humano/a", "estudiante local", "viajero/a recién llegado/a", "artesano/a con una habilidad inusual"][index(47, 4)]
          : ["humano/a", "elfo/a o equivalente cultural", "viajero/a de una frontera mágica", "persona marcada por un pacto antiguo"][index(47, 4)];
    const personality = chosenName + " es " + virtue + ", pero " + flaw + ". Bajo presión, esta contradicción provoca decisiones con consecuencias y no desaparece tras una sola conversación.";
    const profile = roleInfo.label + ": " + chosenName + ". Edad aproximada: " + age + ". Especie/origen: " + species + ". Deseo: " + desire + ". Miedo: " + fear + ".";
    const summary = [
      roleInfo.label + ": " + chosenName + " · edad: " + age + " · especie/origen: " + species + ".",
      "Apariencia y presencia: " + appearance + ".",
      "Deseo y necesidad: " + desire + "; necesita " + arc + ". Miedo central: " + fear + ".",
      "Personalidad: " + virtue + "; defecto activo: " + flaw + ". Voz: " + voice + ".",
      "Capacidad: " + ability + ". Límite/coste: " + limitation + ".",
      "Secreto: " + secret + ". Objeto distintivo: " + signatureItem + ".",
      "Función narrativa: " + roleInfo.purpose
    ].join("\n");
    return {
      role,
      label: roleInfo.label,
      name: chosenName,
      worldType,
      age,
      species,
      desire,
      fear,
      virtue,
      flaw,
      appearance,
      voice,
      secret,
      signatureItem,
      personality,
      ability,
      limitation,
      arc,
      narrativeFunction: roleInfo.purpose,
      profile,
      summary
    };
  }

  const api = { generateOutline, auditOutline, generateConcept, generateCharacter, phases: phases.map(phase => ({ key: phase.key, start: phase.start, end: phase.end })) };
  if (typeof module !== "undefined" && module.exports) module.exports = api;
  root.WordWaifuStoryForge = api;
})(typeof window !== "undefined" ? window : globalThis);
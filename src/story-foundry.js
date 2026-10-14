(function (root, factory) {
  "use strict";
  const api = factory();
  if (typeof module === "object" && module.exports) module.exports = api;
  else root.WordWaifuStoryFoundry = api;
})(typeof globalThis !== "undefined" ? globalThis : this, function () {
  "use strict";
  const clamp = (value, min, max) => Math.max(min, Math.min(max, value));
  const text = (value, fallback) => String(value == null ? "" : value).trim() || fallback;
  const phases = [
    { key: "opening", name: "Presentación y promesa", start: 0, end: 0.10 },
    { key: "setup", name: "Mundo, elenco y problema", start: 0.10, end: 0.34 },
    { key: "progress", name: "Progreso, vínculos y primeras victorias", start: 0.34, end: 0.74 },
    { key: "false-security", name: "Falsa seguridad y caída", start: 0.74, end: 0.84 },
    { key: "response", name: "Consecuencias y nueva estrategia", start: 0.84, end: 0.91 },
    { key: "climax", name: "Clímax y decisión irreversible", start: 0.91, end: 0.98 },
    { key: "ending", name: "Desenlace y consecuencias", start: 0.98, end: 1.001 }
  ];
  function phaseFor(index, count) {
    const progress = count <= 1 ? 1 : index / (count - 1);
    return phases.find((phase) => progress >= phase.start && progress < phase.end) || phases[phases.length - 1];
  }
  function generateOutline(options) {
    const opts = options || {};
    const count = clamp(Math.floor(Number(opts.count) || 30), 1, 500);
    const endingType = opts.endingType === "open" ? "open" : "closed";
    const story = opts.story || {};
    const title = text(story.name, "la historia");
    const protagonist = text(story.protagonistProfile, "el protagonista o el grupo principal");
    const premise = text(story.premise, "la premisa todavía por definir");
    const conflict = text(story.conflict, "el conflicto central todavía por definir");
    const world = text(story.worldRules || story.worldDynamics, "las reglas y tensiones del mundo");
    const personality = text(story.personalityDesign, "sus virtudes, defectos y contradicciones");
    const trauma = text(story.traumaArc, "una herida emocional o pérdida que condiciona sus decisiones");
    const allies = text(story.companionProfiles || story.ensemble, "los compañeros y coprotagonistas");
    const villain = text(story.antagonistProfile, "la fuerza antagonista y su lógica propia");
    const romance = text(story.romanceArc, "el vínculo afectivo, si la historia lo incluye");
    const powers = text(story.powerRules || story.powerCatalog, "las capacidades, límites, costes y consecuencias");
    const chapters = [];
    for (let index = 0; index < count; index++) {
      const number = index + 1;
      const phase = phaseFor(index, count);
      let titleText, summary;
      switch (phase.key) {
        case "opening":
          titleText = number === 1 ? "La promesa de la historia" : "Una grieta en la normalidad";
          summary = `Presentar a ${protagonist}, su vida cotidiana y ${personality}. Mostrar una imagen concreta del mundo —${world}— y sembrar una señal de que algo no encaja. La premisa «${premise}» empieza a tomar forma sin explicar todos sus misterios.`;
          break;
        case "setup":
          titleText = ["La llamada y el precio", "El primer umbral", "Reglas que no perdonan", "Aliados con agenda propia"][index % 4];
          summary = `Desarrollar ${conflict}, las reglas prácticas de ${world} y el objetivo inmediato del elenco. Introducir a ${allies} con deseos y límites propios; revelar una consecuencia concreta de ${powers}. Cada escena debe obligar a elegir, descubrir información útil o complicar el problema.`;
          break;
        case "progress":
          titleText = ["Una victoria incompleta", "El precio del crecimiento", "Una alianza incómoda", "La pista que cambia el tablero"][index % 4];
          summary = `El protagonista gana una capacidad, recurso o comprensión, pero el avance exige un coste. Poner a prueba ${personality} y ${powers}; hacer que ${allies} resuelva un problema que el protagonista no puede resolver solo. Avanzar el conflicto y la relación con ${villain}; si corresponde, hacer progresar ${romance} mediante acciones y desacuerdos, no solo declaraciones.`;
          break;
        case "false-security":
          titleText = ["La cima aparente", "La grieta bajo el triunfo", "La factura pendiente"][index % 3];
          summary = `Una victoria convence al elenco de que ya domina el problema. Esa falsa seguridad deja expuesto un defecto: ${personality}. El antagonista explota una regla, coste o límite de ${powers}; ${trauma} vuelve a condicionar una decisión. La pérdida debe nacer de pistas y decisiones previas, no de un accidente arbitrario.`;
          break;
        case "response":
          titleText = ["Después de la caída", "Cambiar de método", "El equipo toma la iniciativa"][index % 3];
          summary = `Mostrar consecuencias duraderas de la caída: pérdidas, confianza rota, recursos agotados o una verdad incómoda. El protagonista reconoce parte de su error y formula una estrategia nueva. ${allies} interviene con decisiones propias; ${villain} conserva una ventaja real. Preparar el clímax con información y herramientas ya sembradas.`;
          break;
        case "climax":
          titleText = ["La última apuesta", "El límite definitivo", "La elección sin retorno"][index % 3];
          summary = `Convergen el conflicto «${conflict}», los vínculos del elenco y el límite principal de ${powers}. El protagonista debe elegir entre objetivos incompatibles; sus compañeros aportan acciones decisivas y el antagonista actúa según su propia lógica. Resolver la pregunta dramática mediante una decisión con coste irreversible, no solo una subida de fuerza.`;
          break;
        default:
          titleText = endingType === "open" ? "Una respuesta y una nueva pregunta" : "Las consecuencias de la elección";
          summary = endingType === "open"
            ? `Cerrar el conflicto principal de «${title}» lo suficiente para que exista una conclusión emocional, pero dejar una pregunta concreta respaldada por pistas. Mostrar qué cambió en ${protagonist}, qué consecuencias permanecen y qué nuevo horizonte se abre; no confundir final abierto con dejar la trama sin resolver.`
            : `Resolver el conflicto principal de «${title}» y mostrar las consecuencias de la elección final. Dar cierre a los arcos centrales de ${protagonist}, reconocer el aporte de ${allies} y demostrar cómo cambiaron ${personality}. Cerrar las preguntas prometidas o explicar qué queda deliberadamente desconocido.`;
      }
      chapters.push({
        id: "chapter-" + number,
        number,
        title: "Capítulo " + number + " — " + titleText,
        summary,
        content: "",
        status: "outline",
        act: phase.key,
        actTitle: phase.name
      });
    }
    return { count, endingType, chapters, acts: summarizeActs(chapters) };
  }
  function summarizeActs(chapters) {
    const acts = [];
    chapters.forEach((chapter) => {
      let act = acts[acts.length - 1];
      if (!act || act.key !== chapter.act) {
        act = { key: chapter.act, title: chapter.actTitle, start: chapter.number, end: chapter.number, chapters: [] };
        acts.push(act);
      }
      act.end = chapter.number;
      act.chapters.push(chapter.number);
    });
    return acts.map(({ key, title, start, end }) => ({ key, title, start, end, range: start === end ? "Capítulo " + start : "Capítulos " + start + "–" + end }));
  }
  function generateConcept(options) {
    const opts = options || {};
    const type = String(opts.worldType || "other");
    const seed = Math.abs(Math.floor(Number(opts.seed) || 0));
    const fantasy = {
      premise: "Una aprendiz descubre que cada milagro de su reino se paga con años de vida de alguien que nunca dio su consentimiento.",
      conflict: "Detener el sistema de sacrificios sin destruir la magia que mantiene con vida a las ciudades.",
      worldRules: "La magia necesita un intercambio medible: tiempo, memoria o materia. Ningún poder elimina su coste; los pactos dejan señales visibles.",
      worldDynamics: "Los gremios controlan los recursos mágicos, las aldeas pagan deudas heredadas y las clases altas esconden los costes detrás de ceremonias públicas.",
      protagonistProfile: "Una cartógrafa aprendiz quiere salvar a su hermano y demostrar que los mapas oficiales omiten pueblos enteros.",
      personalityDesign: "Curiosa, valiente bajo presión y obstinada; su defecto es tratar a las personas como problemas que puede resolver sin pedir permiso.",
      companionProfiles: "Un guardia desertor busca reparar una injusticia; una sanadora protege a su comunidad; una mercader cambia información por favores y guarda sus propios límites.",
      antagonistProfile: "Una regente mantiene el sistema porque cree que una catástrofe mayor mataría a millones. No se considera malvada y ofrece alternativas con costes reales.",
      traumaArc: "La protagonista carga con la desaparición de un familiar. Su miedo la lleva a ocultar información; la recuperación exige confiar, asumir consecuencias y aceptar que no puede salvar a todos.",
      romanceArc: "Opcional: una relación lenta con alguien que cuestiona sus métodos. La confianza crece por decisiones coherentes, límites respetados y desacuerdos reparados.",
      powerRules: "Cada hechizo consume tiempo, memoria o materia. La progresión mejora precisión y control, no elimina el precio; usar magia con información incompleta puede dañar a aliados.",
      worldDynamicsExtra: "Los cambios mágicos alteran rutas comerciales, leyes, costumbres y el acceso desigual a la salud."
    };
    const dystopia = {
      premise: "Una técnica de mantenimiento descubre que el sistema que promete proteger a la población está fabricando las emergencias que justifican su autoridad.",
      conflict: "Exponer el mecanismo sin provocar el colapso de la infraestructura de la que dependen millones de personas.",
      worldRules: "La energía y la información son recursos racionados. Toda intervención deja registros y las capacidades tecnológicas dependen de piezas difíciles de reemplazar.",
      worldDynamics: "Los barrios reciben servicios desiguales, los medios dependen de permisos estatales y los favores crean redes de deuda que pueden proteger o delatar.",
      protagonistProfile: "Una técnica metódica quiere encontrar a su antiguo mentor desaparecido y averiguar por qué sus informes fueron borrados.",
      personalityDesign: "Analítica, irónica y protectora; confía más en datos que en personas y puede confundir prudencia con inmovilidad.",
      companionProfiles: "Un periodista arriesga su fuente; una mecánica conoce rutas de contrabando; un exfuncionario entiende la burocracia y oculta su participación anterior.",
      antagonistProfile: "La directora de seguridad manipula crisis para evitar una guerra civil que considera inevitable. Sus predicciones tienen una parte cierta, pero sus métodos perpetúan el peligro.",
      traumaArc: "La protagonista sobrevivió a una evacuación fallida y culpa a su propio juicio. Debe aprender a distinguir responsabilidad de omnipotencia y permitir que otros decidan.",
      romanceArc: "Opcional: atracción entre personas con lealtades incompatibles; el vínculo solo avanza cuando dejan de usar la intimidad como herramienta de negociación.",
      powerRules: "Las ventajas tecnológicas requieren acceso, mantenimiento, energía y exposición. Ninguna habilidad es universal: cada herramienta crea una vulnerabilidad explotable."
    };
    const supernatural = {
      premise: "Un estudiante puede escuchar los recuerdos que dejan los lugares, pero cada escucha borra un recuerdo personal de la misma intensidad.",
      conflict: "Resolver una serie de desapariciones antes de perder la única memoria que le permite reconocer a la persona que busca.",
      worldRules: "Lo sobrenatural deja rastros locales y verificables, pero nunca responde a todas las preguntas. Los rituales requieren condiciones, testigos y un precio concreto.",
      worldDynamics: "Las instituciones niegan los fenómenos, los barrios desarrollan reglas de supervivencia y los rumores mezclan pruebas reales con interpretaciones falsas.",
      protagonistProfile: "Un estudiante observador busca a su amiga desaparecida y registra cada pista para no depender de su memoria.",
      personalityDesign: "Empático, desconfiado y persistente; intenta proteger a los demás ocultándoles riesgos y termina aislándose.",
      companionProfiles: "Una investigadora escéptica verifica evidencias; un médium rival conoce rituales pero cobra favores; una amiga mantiene el vínculo con la vida cotidiana.",
      antagonistProfile: "Una entidad recopila recuerdos para reconstruir una tragedia que la ciudad decidió olvidar. Sus motivos son comprensibles, aunque sus actos destruyen identidades.",
      traumaArc: "El protagonista evita el duelo y convierte la investigación en una excusa para no aceptar la pérdida. El arco requiere recordar sin quedar atrapado y aceptar ayuda.",
      romanceArc: "Opcional: un vínculo que se construye con honestidad sobre los recuerdos perdidos y el derecho de cada persona a poner límites.",
      powerRules: "Escuchar un lugar consume un recuerdo equivalente; pistas fragmentarias pueden engañar y recuperar recuerdos exige evidencia, no un deseo."
    };
    const choose = type.includes("dystopia") || type === "cyberpunk-dystopia" || type === "post-apocalypse" || type === "active-apocalypse-military-sf" ? dystopia
      : type === "urban-supernatural" || type === "isolated-island-comedy" || type === "slice-of-life-comedy" ? supernatural : fantasy;
    const variants = [fantasy, dystopia, supernatural];
    const chosen = opts.worldType && opts.worldType !== "unspecified" ? choose : variants[seed % variants.length];
    return { ...chosen, worldType: type, seed, label: type === "unspecified" ? ["Fantasía de coste", "Distopía de infraestructura", "Misterio sobrenatural"][seed % 3] : type };
  }
  return { generateOutline, summarizeActs, generateConcept };
});

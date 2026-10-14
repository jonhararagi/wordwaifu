(function (root) {
  "use strict";

  const ENDINGS = new Set(["closed", "open", "bittersweet", "cliffhanger"]);
  const PHASES = [
    { key: "Presentación", start: 0, end: 0.12, events: [
      ["La rutina se rompe", "Una tarea cotidiana del protagonista se interrumpe cuando el conflicto deja una consecuencia visible en su hogar o comunidad."],
      ["Una alianza incómoda", "El protagonista necesita la ayuda de alguien cuyos objetivos chocan con los suyos y acepta cooperar bajo una condición concreta."],
      ["El primer coste", "Al intentar resolver el problema inicial, el protagonista utiliza un recurso limitado y descubre qué pierde al hacerlo."],
      ["La regla que nadie puede ignorar", "Una regla del mundo impide la solución más fácil y obliga al elenco a elegir entre dos opciones imperfectas."],
      ["La decisión irreversible", "El protagonista toma una decisión que lo compromete con el conflicto y hace imposible regresar a su vida anterior."]
    ]},
    { key: "Progreso y complicaciones", start: 0.12, end: 0.35, events: [
      ["La primera victoria cuesta algo", "El grupo consigue un objetivo inmediato, pero la victoria consume un recurso o expone una debilidad que el adversario podrá explotar."],
      ["El coprotagonista cambia el plan", "Un compañero actúa por iniciativa propia, altera la estrategia y demuestra una capacidad que el protagonista no podía sustituir."],
      ["El rival aprende", "La fuerza opositora responde a la última victoria y cambia sus tácticas, convirtiendo una ventaja del grupo en un nuevo riesgo."],
      ["La confianza se pone a prueba", "Una diferencia de prioridades provoca una discusión entre aliados y solo una acción verificable permite recuperar parte de la confianza."],
      ["Un avance abre otro problema", "El elenco alcanza una pista, territorio o herramienta buscada, pero descubre que obtenerla empeora el conflicto principal."]
    ]},
    { key: "Escalada y punto medio", start: 0.35, end: 0.55, events: [
      ["La pista cambia el significado del pasado", "Una evidencia conecta un acontecimiento anterior con el conflicto actual y obliga al protagonista a revisar una creencia."],
      ["El poder cobra su precio", "El protagonista usa una habilidad decisiva para superar un obstáculo, y su coste deja una consecuencia física, social o emocional."],
      ["La alianza se quiebra", "Una decisión necesaria para un personaje perjudica el objetivo de otro y fuerza al grupo a renegociar sus lealtades."],
      ["El objetivo real sale a la luz", "El elenco descubre que resolver el problema visible no detendrá el conflicto porque la oposición persigue un objetivo más profundo."],
      ["El enemigo encuentra el punto débil", "El antagonista utiliza una regla, vínculo o limitación ya establecida para obligar al grupo a defender algo que no puede abandonar."]
    ]},
    { key: "Falsa seguridad y caída", start: 0.55, end: 0.76, events: [
      ["La victoria alimenta el exceso de confianza", "Tras una victoria importante, el protagonista repite una estrategia que funcionó antes y pasa por alto una señal de advertencia."],
      ["La ventaja se vuelve una trampa", "El antagonista anticipa la táctica del protagonista y utiliza esa previsibilidad para separar al grupo de su objetivo."],
      ["Llega la factura de una decisión", "Una elección anterior produce una pérdida concreta: se agota un recurso, se rompe una promesa o un aliado queda expuesto."],
      ["El grupo pierde su punto de apoyo", "La crisis destruye una ventaja que parecía segura y obliga a los compañeros a actuar sin la protección habitual del protagonista."],
      ["La responsabilidad ya no se puede delegar", "El protagonista reconoce cómo contribuyó al desastre y debe escuchar a quienes habían advertido el riesgo antes de decidir el siguiente paso."]
    ]},
    { key: "Reconstrucción y clímax", start: 0.76, end: 0.92, events: [
      ["El objetivo se redefine", "Después de aceptar la pérdida, el protagonista cambia qué considera una victoria y establece una meta que responde al conflicto real."],
      ["Los compañeros aportan la solución", "Cada integrante ejecuta una parte indispensable del plan y una decisión del coprotagonista evita que el protagonista cargue solo con el desenlace."],
      ["Renunciar a la ventaja fácil", "El protagonista rechaza un atajo que repetiría el daño anterior y acepta un coste mayor para proteger aquello que decidió priorizar."],
      ["El antagonista enfrenta su contradicción", "La confrontación obliga a la fuerza opositora a actuar contra su propia justificación y deja visible el precio de su objetivo."],
      ["Se paga una deuda narrativa", "Una promesa, pista, objeto o conflicto presentado antes resulta decisivo y permite resolver el obstáculo sin introducir una solución nueva de la nada."]
    ]},
    { key: "Desenlace", start: 0.92, end: 1, events: [
      ["La victoria deja consecuencias", "El conflicto inmediato termina y el elenco debe afrontar pérdidas, responsabilidades y cambios concretos en su vida cotidiana."],
      ["Cada vínculo encuentra una nueva forma", "Los personajes centrales responden de manera distinta a lo ocurrido y una acción demuestra qué relación se reparó o quedó dañada."],
      ["El mundo ya no es el mismo", "La resolución cambia una regla práctica, una institución o el equilibrio entre grupos, mostrando que la aventura tuvo impacto."],
      ["La última imagen responde a la primera", "Una situación parecida a la del comienzo revela cuánto cambió el protagonista y deja claro qué ganó o sacrificó."]
    ]}
  ];

  function clean(value, fallback) {
    const text = String(value || "").replace(/\s+/g, " ").trim();
    return text ? text.slice(0, 360) : fallback;
  }

  function phaseFor(position) {
    return PHASES.find((phase) => position >= phase.start && (position < phase.end || phase.end === 1)) || PHASES[PHASES.length - 1];
  }

  function buildOutline(options) {
    const input = options || {};
    const story = input.story || input;
    const count = Number(input.count == null ? story.chapterCount : input.count);
    if (!Number.isInteger(count) || count < 1 || count > 500) throw new RangeError("La cantidad debe estar entre 1 y 500 capítulos.");
    const ending = ENDINGS.has(input.ending || story.endingType) ? (input.ending || story.endingType) : "closed";
    const oldChapters = Array.isArray(input.oldChapters) ? input.oldChapters : (Array.isArray(story.chapters) ? story.chapters : []);
    const premise = clean(story.premise || story.description, "la meta personal del protagonista");
    const conflict = clean(story.conflict, "la fuerza que impide alcanzar esa meta");
    const cast = clean(story.castPlan || story.ensemble, "el protagonista y sus compañeros");
    const personality = clean(story.personalityPlan, "sus diferencias de carácter");
    const antagonist = clean(story.antagonistPlan, "la fuerza opositora");
    const romance = clean(story.romancePlan, "el vínculo afectivo principal");
    const trauma = clean(story.traumaPlan, "una herida emocional todavía abierta");
    const world = clean(story.worldRules, "las reglas y límites establecidos para este mundo");
    const powers = clean(story.powerCatalog, "los recursos y poderes disponibles y sus costes");
    const dynamics = clean(story.worldDynamics, "las tensiones entre comunidades y facciones");
    const reveal = clean(story.revealSecret, "la verdad detrás del conflicto visible");
    const clues = clean(story.revealClues, "las pistas que se sembraron en escenas anteriores");
    const arcs = Array.isArray(story.arcs) ? story.arcs.map((arc) => clean(arc, "")).filter(Boolean) : String(story.arcs || "").split("\n").map((arc) => clean(arc, "")).filter(Boolean);
    const endingEvent = {
      closed: "El protagonista resuelve el conflicto central y la escena final muestra qué cambió, qué se perdió y qué responsabilidad queda.",
      open: "El conflicto inmediato se resuelve, pero una consecuencia nueva y concreta abre una posibilidad futura sin interrumpir arbitrariamente la acción.",
      bittersweet: "El protagonista alcanza una resolución real, pero debe aceptar una pérdida irreversible que cambia el significado de la victoria.",
      cliffhanger: "El arco inmediato llega a una consecuencia decisiva y una revelación preparada cambia el tablero justo antes del cierre."
    }[ending];

    return Array.from({ length: count }, (_, index) => {
      const n = index + 1;
      const position = count === 1 ? 1 : index / (count - 1);
      const phase = phaseFor(position);
      const local = phase.events[Math.floor((n - 1) * 1.61803398875) % phase.events.length];
      const prior = oldChapters[index] || {};
      const event = n === count ? (ending === "closed" ? ["La resolución", endingEvent] : ending === "open" ? ["Una puerta queda abierta", endingEvent] : ending === "bittersweet" ? ["La victoria agridulce", endingEvent] : ["La revelación final", endingEvent]) : local;
      const beats = [
        "Premisa en juego: " + premise + ".",
        "Conflicto que mueve la escena: " + conflict + ".",
        "Personajes que toman decisiones: " + cast + ".",
        "La oposición responde mediante: " + antagonist + ".",
        "La regla o dinámica del mundo que condiciona el resultado es: " + world + "; " + dynamics + ".",
        "La capacidad disponible y su coste se expresan en: " + powers + ".",
        "Cambio de personalidad o dilema interno: " + personality + "; herida que influye en la decisión: " + trauma + ".",
        "Vínculo afectivo puesto a prueba: " + romance + ".",
        "Pista o revelación que avanza: " + reveal + "; indicios que deben cobrar sentido: " + clues + ".",
        arcs.length ? "Arco que avanza en esta entrega: " + arcs[(n - 1) % arcs.length] + "." : ""
      ].filter(Boolean);
      const summary = event[1] + " " + beats[(n - 1) % beats.length] + " El capítulo termina con una consecuencia observable que obliga a cambiar el siguiente paso del elenco.";
      return {
        id: prior.id || ("chapter-" + Date.now().toString(36) + "-" + n),
        title: (phase.key + " — " + event[0]).slice(0, 180),
        summary: summary.slice(0, 4000),
        content: prior.content || "",
        status: prior.status || "outline"
      };
    });
  }

  const api = { buildOutline, phases: PHASES.map((phase) => ({ key: phase.key, start: phase.start, end: phase.end })) };
  if (typeof module !== "undefined" && module.exports) module.exports = api;
  root.WordWaifuStoryOutline = api;
})(typeof window !== "undefined" ? window : globalThis);

(function (root) {
  "use strict";

  const phases = [
    { key: "Presentación", from: 0, to: 0.12, beats: [
      ["La rutina se rompe", (c) => c.hero + " intenta completar una tarea cotidiana ligada a «" + c.goal + "», pero " + c.world + " revela una regla que vuelve imposible seguir como antes. " + c.hero + " debe elegir entre proteger su rutina o ayudar a quien quedaría perjudicado."],
      ["Una alianza incómoda", (c) => c.hero + " necesita acceso a un recurso que controla " + c.ally + "; la negociación expone objetivos incompatibles y obliga a intercambiar una concesión verificable por ayuda inmediata."],
      ["El primer coste", (c) => "Para avanzar hacia «" + c.goal + "», " + c.hero + " utiliza " + c.power + "; el precio descrito en el plan de poderes afecta una relación o recurso concreto y deja una deuda que no puede ignorarse."],
      ["La oposición deja huella", (c) => c.villain + " bloquea el camino hacia «" + c.goal + "» mediante una acción visible: retira un recurso, cambia una regla local o fuerza una elección pública. " + c.hero + " encuentra una prueba de que el obstáculo es deliberado."],
      ["El punto sin retorno", (c) => "Una consecuencia directa de «" + c.conflict + "» alcanza a " + c.hero + " y a " + c.ally + ". Intentar volver al estado inicial dañaría a alguien importante, por lo que el protagonista acepta una misión concreta y fija su primera condición de éxito."]
    ]},
    { key: "Progreso y complicaciones", from: 0.12, to: 0.35, beats: [
      ["Una victoria con factura", (c) => c.hero + " ejecuta un plan para conseguir «" + c.goal + "» y obtiene una prueba, aliado o herramienta real; la victoria consume " + c.cost + " y abre una obligación que el grupo debe resolver antes de repetir la estrategia."],
      ["El coprotagonista cambia el plan", (c) => c.ally + " toma una decisión por su propio objetivo, contradice la estrategia de " + c.hero + " y salva una parte de la misión a costa de otra. El equipo debe renegociar responsabilidades en vez de volver al plan original."],
      ["Entrenamiento bajo presión", (c) => c.hero + " ensaya " + c.power + " en una situación donde fallar tiene una consecuencia inmediata. El intento descubre un límite concreto y obliga al personaje a combinar su habilidad con la experiencia de " + c.ally + "."],
      ["La pista que no encaja", (c) => "Al investigar «" + c.conflict + "», " + c.hero + " encuentra un indicio que contradice la explicación aceptada. La pista señala a " + c.villain + " o a sus intereses, pero también compromete una creencia del propio protagonista."],
      ["El antagonista se adapta", (c) => c.villain + " responde al avance anterior cambiando su táctica y explota una debilidad ya expuesta por " + c.hero + ". El grupo conserva su objetivo, pero pierde una ventaja y debe buscar una ruta distinta."]
    ]},
    { key: "Escalada y punto medio", from: 0.35, to: 0.55, beats: [
      ["La verdad cambia el objetivo", (c) => "Una evidencia verificable demuestra que «" + c.conflict + "» tiene una causa más amplia de la prevista. " + c.hero + " debe redefinir qué significa ganar; perseguir el objetivo inicial sin cambios perjudicaría a " + c.ally + "."],
      ["Una alianza exige confianza", (c) => c.hero + " debe colaborar con " + c.ally + " pese a una diferencia que el plan de personalidades establece. Para superar el obstáculo, ambos comparten información o delegan una tarea que antes controlaban por separado."],
      ["El poder revela su límite", (c) => c.hero + " usa " + c.power + " para superar una barrera clave, pero el límite o precio ya establecido impide repetirlo. La solución requiere elegir qué preservar y qué sacrificar, no añadir una capacidad sin preparación."],
      ["La herida condiciona la decisión", (c) => "Una situación conectada con «" + c.trauma + "» activa el mecanismo de defensa de " + c.hero + ". El error resultante complica la misión; " + c.ally + " ofrece apoyo sin borrar las consecuencias ni resolver la decisión por él."],
      ["El punto medio irreversible", (c) => c.hero + " obtiene una respuesta importante sobre «" + c.conflict + "», pero al revelarla cambia públicamente el equilibrio entre el grupo y " + c.villain + ". Desde ahora, ambas partes conocen el coste real de continuar."]
    ]},
    { key: "Falsa seguridad y caída", from: 0.55, to: 0.76, beats: [
      ["La victoria alimenta el error", (c) => "Después de un éxito visible, " + c.hero + " concluye equivocadamente que su estrategia para «" + c.goal + "» siempre funcionará. Esa confianza lleva a ignorar una advertencia concreta de " + c.ally + " y deja expuesto un recurso esencial."],
      ["La oposición cobra la deuda", (c) => c.villain + " aprovecha la vulnerabilidad creada por la decisión anterior y ejecuta una represalia preparada con antelación. La pérdida afecta directamente a «" + c.goal + "» y demuestra que la victoria previa no había eliminado la amenaza."],
      ["La fractura del equipo", (c) => "El coste de la decisión de " + c.hero + " alcanza a " + c.ally + ". El desacuerdo sobre «" + c.conflict + "» provoca una separación operativa: cada parte conserva información necesaria y la misión se vuelve más difícil hasta que asuman su responsabilidad."],
      ["El recurso deja de servir", (c) => "La regla del mundo «" + c.world + "» invalida la solución que " + c.hero + " había dado por segura. El grupo pierde su atajo más fiable y debe elegir entre admitir el error, pedir ayuda o aceptar una pérdida mayor."],
      ["El fondo obliga a cambiar", (c) => c.hero + " reconoce cómo su defecto o miedo —" + c.trauma + "— contribuyó a la caída. En lugar de buscar un aumento de poder inmediato, identifica una conducta que debe cambiar y acepta una reparación costosa."]
    ]},
    { key: "Reconstrucción y clímax", from: 0.76, to: 0.92, beats: [
      ["Un plan con condiciones", (c) => c.hero + " diseña una nueva estrategia para «" + c.goal + "» usando la información ganada en la caída. El plan distribuye tareas entre el elenco y define qué riesgo acepta cada uno, sin borrar los límites ya establecidos."],
      ["La confianza se demuestra", (c) => c.ally + " regresa o coopera con " + c.hero + " mediante una acción que cuesta algo real. La reconciliación no borra el conflicto anterior: fija una condición verificable para que el equipo vuelva a confiar."],
      ["El antagonista queda expuesto", (c) => c.hero + " fuerza a " + c.villain + " a elegir entre su objetivo declarado y el método que realmente utiliza. La contradicción revela una debilidad política, moral o estratégica que el grupo puede aprovechar."],
      ["El precio de la solución", (c) => "Para resolver una parte decisiva de «" + c.conflict + "», " + c.hero + " debe renunciar a " + c.cost + " o aceptar una consecuencia equivalente. " + c.ally + " contribuye con una capacidad ya sembrada, no con una solución nueva e inexplicada."],
      ["El enfrentamiento decisivo", (c) => c.hero + " confronta a " + c.villain + " y vence el obstáculo central aplicando lo aprendido sobre " + c.world + ". La resolución depende de una elección que contradice su error anterior y produce un resultado irreversible."]
    ]},
    { key: "Desenlace", from: 0.92, to: 1, beats: [
      ["El coste se vuelve visible", (c) => "Tras la resolución, " + c.hero + " comprueba qué se perdió y qué se salvó al perseguir «" + c.goal + "». Una consecuencia material o relacional confirma que la victoria no devuelve el mundo al estado inicial."],
      ["Cada vínculo cambia", (c) => c.hero + " y " + c.ally + " negocian cómo continuar después de «" + c.conflict + "». " + c.romance + " Un gesto concreto demuestra qué cambió en la confianza, el romance o la cooperación sin declarar que todos los problemas desaparecieron."],
      ["La nueva normalidad", (c) => "La comunidad afectada por " + c.world + " adapta una costumbre, norma o distribución de recursos como consecuencia de las decisiones del elenco. " + c.hero + " ve el efecto práctico de su evolución en personas que antes no podía proteger."],
      ["La última pregunta", (c) => "Una señal nueva aparece después de que " + c.hero + " cierre el conflicto inmediato. El detalle conecta con una pista anterior y plantea una posibilidad futura sin invalidar la resolución ya alcanzada."]
    ]}
  ];

  function firstSentence(value, fallback) {
    const clean = String(value || "").replace(/\s+/g, " ").trim();
    if (!clean) return fallback;
    const first = clean.split(/\n|[.!?](?:\s|$)/, 1)[0].trim();
    return (first || clean).slice(0, 220);
  }

  function generateOutline(input) {
    const count = Math.max(1, Math.min(500, Number.parseInt(input.chapterCount, 10) || 24));
    const ending = ["closed", "open", "bittersweet", "cliffhanger"].includes(input.endingType) ? input.endingType : "closed";
    const c = {
      hero: firstSentence(input.castPlan, "la protagonista o el protagonista"),
      ally: firstSentence(input.personalityPlan, "el coprotagonista, con un objetivo propio"),
      villain: firstSentence(input.antagonistPlan, "la fuerza opositora"),
      goal: firstSentence(input.premise, "alcanzar el objetivo principal de la historia"),
      conflict: firstSentence(input.conflict, "el conflicto central todavía por concretar"),
      world: firstSentence(input.worldRules || input.worldDynamics, "las reglas sociales y materiales del mundo"),
      power: firstSentence(input.powerCatalog, "el recurso o poder principal"),
      cost: firstSentence(input.powerCatalog, "un recurso valioso, tiempo o confianza"),
      trauma: firstSentence(input.traumaPlan, "una herida emocional que influye en sus decisiones"),
      romance: firstSentence(input.romancePlan, "el vínculo afectivo principal")
    };
    const arcs = Array.isArray(input.arcs) ? input.arcs.filter(Boolean) : [];
    const old = Array.isArray(input.oldChapters) ? input.oldChapters : [];
    return Array.from({ length: count }, (_, index) => {
      const n = index + 1;
      const position = count === 1 ? 1 : index / (count - 1);
      const phase = phases.find(p => position >= p.from && (position < p.to || p.to === 1)) || phases[phases.length - 1];
      const phaseIndex = phases.indexOf(phase);
      const phaseCount = Math.max(1, Math.ceil((phase.to - phase.from) * count));
      const phaseStart = Math.floor(phase.from * count);
      const beatIndex = Math.floor((index - phaseStart) * phase.beats.length / phaseCount) % phase.beats.length;
      const beat = phase.beats[beatIndex];
      const event = beat[1](c);
      const arc = arcs.length ? " Avance de arco: " + arcs[(n - 1) % arcs.length] + "." : "";
      let endingNote = "";
      if (n === count) {
        if (ending === "open") endingNote = " El conflicto inmediato queda resuelto, pero la decisión final abre una pregunta nueva con consecuencias visibles.";
        else if (ending === "bittersweet") endingNote = " La resolución llega con una pérdida irreversible que altera el futuro del elenco.";
        else if (ending === "cliffhanger") endingNote = " El capítulo cierra el conflicto inmediato del tramo y termina con una revelación preparada que cambia el tablero.";
        else endingNote = " La historia resuelve el conflicto principal y muestra qué cambió en el protagonista, sus vínculos y el mundo.";
      }
      const prior = old[index] || {};
      return {
        id: prior.id || ("chapter-" + Date.now().toString(36) + "-" + n),
        title: ("Cap. " + n + " — " + phase.key + ": " + beat[0]).slice(0, 180),
        summary: (event + arc + (n === 1 ? " La imagen inicial debe reaparecer transformada en el desenlace." : "") + (n === count ? endingNote : " La última decisión o consecuencia de este capítulo debe provocar el problema concreto del siguiente.")).slice(0, 4000),
        content: prior.content || "",
        status: prior.status || "outline",
        dramaticFunction: phase.key,
        beat: beat[0]
      };
    });
  }

  const api = { generateOutline };
  if (typeof module !== "undefined" && module.exports) module.exports = api;
  root.WordWaifuStoryOutline = api;
})(typeof window !== "undefined" ? window : globalThis);

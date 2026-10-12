(function () {
  "use strict";

  const $ = (selector, root = document) => root.querySelector(selector);
  const pick = (items, seed) => items[Math.abs(seed) % items.length];
  const hash = (text) => Array.from(String(text)).reduce((sum, char) => ((sum * 31) + char.charCodeAt(0)) >>> 0, 7);
  const escapeHTML = (value) => String(value ?? "").replace(/[&<>"']/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[char]));
  let generation = 0;
  let currentIdea = null;

  const banks = {
    protagonists: [
      { name: "Nico Vega", role: "gamer reincidente", personality: "cínico, oportunista y sorprendentemente leal", flaw: "trata cada crisis como si tuviera botón de reinicio", motivation: "sobrevivir sin trabajar gratis para los dioses" },
      { name: "Mara Pixel", role: "estratega de RPG", personality: "analítica hasta para elegir el desayuno, pero pésima leyendo emociones", flaw: "confunde optimizar una vida con vivirla", motivation: "encontrar una forma de volver a casa" },
      { name: "Tadeo Respawn", role: "jugador de juegos difíciles", personality: "dramático, competitivo y valiente solo después de quejarse", flaw: "cree que todo problema tiene una solución explotable", motivation: "demostrar que puede ganar una partida que nadie diseñó para ser justa" }
    ],
    generalProtagonists: [
      { name: "Lía Serrano", role: "archivista de ruinas", personality: "observadora, obstinada y más valiente cuando puede fingir que investiga", flaw: "busca explicaciones incluso cuando necesita tomar una decisión", motivation: "descubrir quién borró una parte de la historia del mundo" },
      { name: "Ivo Mar", role: "exvillano en rehabilitación", personality: "encantador, desconfiado y genuinamente cansado de ser el malo", flaw: "espera traiciones incluso de quienes le ofrecen ayuda", motivation: "hacer algo bueno sin que nadie lo convierta en una leyenda" },
      { name: "Renata Solís", role: "sanadora de frontera", personality: "práctica, compasiva y feroz cuando alguien abusa de los débiles", flaw: "se responsabiliza por problemas que no puede resolver sola", motivation: "romper el sistema que convierte la ayuda en un lujo" }
    ],
    goddesses: [
      { name: "Ixchel, Señora de los Hilos", role: "diosa de la luna, la medicina y los destinos enredados", personality: "maternal en público, competitiva y vengativa en los juegos de mesa", flaw: "cura cualquier herida excepto su orgullo", motivation: "evitar que el tejido del mundo se deshaga" },
      { name: "Yax K'in, Dama del Alba Verde", role: "diosa original del crecimiento, las cosechas y las segundas oportunidades", personality: "optimista, intensa y aterradoramente literal", flaw: "resuelve los conflictos haciendo crecer cosas, incluso cuando son monstruos", motivation: "probar que toda ruina puede volver a florecer" },
      { name: "Sak Nikté, Guardiana del Umbral", role: "diosa original de los juramentos, la memoria y las puertas cerradas", personality: "solemne, teatral y secretamente fanática de los chismes", flaw: "jamás admite que no sabe algo; inventa profecías para ganar tiempo", motivation: "mantener sellado un pacto que ya nadie recuerda" }
    ],
    companions: [
      { name: "Balam", role: "mapache-oráculo", personality: "pomposo, cobarde y brillante para encontrar comida", flaw: "sus profecías se activan solo después de que alguien toma una mala decisión", motivation: "recuperar el título de consejero sagrado" },
      { name: "Kira del Inventario", role: "herrera de reliquias", personality: "práctica, seca y demasiado emocionada por los objetos malditos", flaw: "no puede dejar de mejorar equipo que claramente debería destruirse", motivation: "fabricar una herramienta capaz de romper una regla divina" },
      { name: "Don Pánfilo", role: "caballero jubilado", personality: "formal, noble y absolutamente incapaz de leer el ambiente", flaw: "interpreta cualquier sarcasmo como una orden oficial", motivation: "cumplir una última misión antes de retirarse" }
    ],
    antagonists: [
      { name: "El Administrador del Fin", role: "funcionario cósmico de auditoría", personality: "educado, implacable y agotado por el papeleo de los héroes", flaw: "considera que todo sufrimiento es un problema de formularios", motivation: "cerrar el mundo antes de que venza el presupuesto de milagros" },
      { name: "La Reina de los Déficits", role: "soberana de un reino en bancarrota", personality: "carismática, cruel cuando tiene miedo y excelente negociadora", flaw: "convierte cada vínculo en una deuda", motivation: "comprar tiempo para salvar a su pueblo" },
      { name: "El Santo del Tutorial", role: "héroe legendario que nunca pasó del prólogo", personality: "inspirador, inseguro y adicto a las ceremonias", flaw: "prefiere parecer elegido antes que hacer algo útil", motivation: "impedir que alguien descubra que su leyenda es una campaña publicitaria" }
    ],
    complications: [
      "la recompensa está mal traducida y el grupo acepta una deuda hereditaria",
      "el monstruo que deben derrotar es el único testigo que puede absolverlos",
      "la misión es fácil, pero cada integrante recibe una condición de victoria incompatible",
      "la profecía es auténtica, aunque describe un desastre causado por el propio grupo",
      "el objeto legendario funciona perfectamente, pero interpreta las órdenes de forma literal",
      "la ciudad los celebra como salvadores antes de que hayan hecho absolutamente nada"
    ],
    seriousCores: [
      "cada personaje teme ser útil solo cuando los demás necesitan algo de él",
      "la inmortalidad de los dioses no les impide sufrir pérdidas; solo les da más tiempo para evitarlas",
      "el protagonista debe elegir entre regresar a su antigua vida y hacerse responsable de la nueva",
      "una comunidad no puede reconstruirse con heroísmo individual si nadie comparte el costo",
      "la memoria protege la identidad, pero también puede mantener viva una culpa injusta"
    ],
    openingScenes: [
      "el grupo discute quién debe pagar una multa divina mientras la criatura que debía capturar espera educadamente detrás de ellos",
      "una ceremonia solemne se interrumpe cuando el protagonista pregunta si el artefacto sagrado tiene modo de práctica",
      "la primera misión fracasa por completo, pero el informe oficial la registra como una victoria histórica",
      "el protagonista intenta renunciar; las tres diosas convierten la renuncia en una competición con premio y penalización",
      "durante un juicio celestial, el único testigo fiable es el animal que el grupo había acusado de ser el jefe final"
    ],
    genres: {
      comedy: ["fantasía cómica", "aventura de gremio", "isekai", "comedia de errores"],
      drama: ["fantasía dramática", "aventura de supervivencia", "misterio mítico", "drama de personajes"],
      balanced: ["fantasía de aventura con comedia y drama", "isekai de grupo disfuncional", "fantasía épica de tono cambiante"]
    }
  };

  function generate(input = {}) {
    const prompt = String(input.premise || "").trim() || "Un grupo de inadaptados recibe una misión divina que nadie explicó bien.";
    const seed = hash(prompt + "|" + (input.genre || "balanced") + "|" + (input.tone || "balanced") + "|" + generation++);
    const gamerPremise = /(gamer|videojuego|videojuegos|jugador|isekai|konosuba)/i.test(prompt);
    const divinePremise = /(diosas?|deidades|pante[oó]n|mitolog[ií]a maya)/i.test(prompt);
    const novelistPremise = /(novelista|novelista|escritor|escribe novelas)/i.test(prompt);
    const npcPremise = /\bNPC\b|personaje no jugable|personaje secundario/i.test(prompt);
    const motherlyPremise = /madre protectora|maternal|actuando como una madre|figura materna|protectora/i.test(prompt);
    const milfPremise = /\bMILF\b|mujeres maduras|mujer madura|maduras/i.test(prompt);
    const traits = Object.fromEntries(["courage", "fear", "intelligence", "attitude", "empathy"].map((key) => {
      const fallback = { courage: 20, fear: 50, intelligence: 80, attitude: 10, empathy: 55 }[key];
      const value = Number(input.traits && input.traits[key]);
      return [key, Number.isFinite(value) ? Math.max(0, Math.min(100, Math.round(value))) : fallback];
    }));
    const worldKey = input.world && input.world !== "auto" ? input.world : /(harry\s*potter|hogwarts)/i.test(prompt) ? "magic-school" : /(isekai|reencarna|otro mundo)/i.test(prompt) ? "isekai" : "original";
    const dynamicKey = input.dynamic && input.dynamic !== "auto" ? input.dynamic : /malfoy/i.test(prompt) && /harry\s*potter|hogwarts/i.test(prompt) ? "secret-crush" : motherlyPremise ? "found-family" : traits.intelligence >= 70 && traits.attitude <= 30 ? "reluctant-hero" : "auto";
    const protagonistBank = gamerPremise ? banks.protagonists : banks.generalProtagonists;
    const harryPotterPremise = /harry\s*potter|hogwarts|quidditch/i.test(prompt);
    const malfoyPremise = /malfoy/i.test(prompt);
    const femaleMalfoy = harryPotterPremise && malfoyPremise && (input.gender === "woman" || /mujer|femenin|renasca como mujer/i.test(prompt));
    const protagonist = femaleMalfoy
      ? { name: "Draco Malfoy", role: "heredera de la familia Malfoy y estudiante de Hogwarts en una versión femenina del personaje", personality: "orgullosa, aguda y defensiva; usa la ironía para ocultar que no sabe cómo reparar sus vínculos", flaw: "interpreta cada gesto amable como una trampa y teme perder el estatus que la protege", motivation: "cambiar su relación con Harry sin admitir que él empieza a verla de otra manera", id: "char-gen-protagonist-" + seed }
      : novelistPremise
      ? {
          name: "Damián Varela",
          role: npcPremise ? "novelista reencarnado que interpreta a un NPC universitario" : "novelista reencarnado",
          personality: "observador, teatral y experto en clichés románticos; confunde leer a la gente con entenderla",
          flaw: "trata las relaciones como escenas que puede dirigir y esconde sus inseguridades detrás de un papel",
          motivation: motherlyPremise ? "proteger al grupo y ganarse su confianza sin revelar que interpreta un personaje" : "escribir una vida nueva que no dependa de los finales que conoce",
          id: "char-gen-protagonist-" + seed
        }
      : { ...pick(protagonistBank, seed), id: "char-gen-protagonist-" + seed };
    const traitProfile = traits.courage <= 30 && traits.fear >= 60 && traits.intelligence >= 70 && traits.attitude <= 30
      ? "Miedoso y apático, pero con una inteligencia capaz de idear soluciones inesperadas; suele encontrar la salida brillante y luego intenta evitar ser quien la ejecute."
      : "Valentía " + traits.courage + "/100, miedo " + traits.fear + "/100, inteligencia " + traits.intelligence + "/100, ganas de actuar " + traits.attitude + "/100 y empatía " + traits.empathy + "/100.";
    protagonist.personality += " [Perfil de rasgos: " + traitProfile + "]";
    protagonist.traits = traits;
    protagonist.fearDetail = String(input.fearDetail || "").trim() || (traits.fear >= 65 ? "teme fracasar delante de otros y quedar expuesto" : "teme perder aquello que considera suyo");
    protagonist.signatureAction = String(input.signatureAction || "").trim() || (traits.intelligence >= 70 && traits.attitude <= 30 ? "idea una solución brillante y luego intenta que otra persona la ejecute" : "actúa según su temperamento, aunque complique el plan");
    const worldProfiles = {
      "magic-school": "MUNDO: escuela de magia con casas, jerarquías familiares, reglas institucionales y rivalidades cotidianas.",
      isekai: "MUNDO: otro mundo con leyes propias que deben descubrirse, no asumirse por los tropos.",
      "urban-fantasy": "MUNDO: lo sobrenatural convive con la vida moderna y sus secretos sociales.",
      "dark-fantasy": "MUNDO: la magia tiene un precio y cada victoria deja consecuencias.",
      scifi: "MUNDO: tecnología avanzada, recursos limitados y estructuras sociales que condicionan las decisiones.",
      original: "MUNDO: universo original cuyas reglas deben definirse y mantenerse consistentes."
    };
    const dynamics = {
      "slow-burn": "DINÁMICA: romance lento construido con actos pequeños, retrocesos y conversaciones difíciles.",
      rivals: "DINÁMICA: rivales obligados a cooperar aprenden a confiar sin dejar de desafiarse.",
      "secret-crush": "DINÁMICA: alguien oculta su enamoramiento y la otra persona interpreta mal sus señales.",
      "found-family": "DINÁMICA: protección y familia encontrada; ayudar no significa controlar.",
      "reluctant-hero": "DINÁMICA: una mente brillante evita el esfuerzo; debe decidir si acepta el costo de actuar.",
      politics: "DINÁMICA: alianzas, reputación, secretos familiares y consecuencias públicas.",
      survival: "DINÁMICA: sobrevivir exige cooperación, recursos limitados y decisiones difíciles."
    };
    const worldProfile = worldProfiles[worldKey] + (String(input.worldRules || "").trim() ? " REGLAS DEL AUTOR: " + String(input.worldRules).trim() : "");
    const dynamicProfile = dynamics[dynamicKey] || "DINÁMICA: los vínculos cambian por acciones observables, malentendidos, límites y consecuencias.";
    const goddesses = divinePremise
      ? banks.goddesses.map((item, index) => ({ ...item, id: "char-gen-goddess-" + seed + "-" + index }))
      : [];
    const party = divinePremise ? goddesses : banks.companions.map((item, index) => ({
      ...item, id: "char-gen-companion-" + seed + "-" + index
    }));
    const companion = { ...pick(banks.companions, seed >>> 3), id: "char-gen-companion-" + seed };
    const antagonist = { ...pick(banks.antagonists, seed >>> 5), id: "char-gen-antagonist-" + seed };
    const secretHarry = femaleMalfoy
      ? { name: "Harry Potter", role: "compañero de Hogwarts que empieza a enamorarse de Draco sin saber cómo decírselo", personality: "valiente, leal y torpe al ocultar una ternura inesperada", flaw: "disimula sus sentimientos y termina enviando señales contradictorias", motivation: "acercarse a Draco por quien es, sin tratarla como alguien a quien debe salvar", id: "char-gen-harry-" + seed }
      : null;
    const complication = pick(banks.complications, seed >>> 7);
    const seriousCore = pick(banks.seriousCores, seed >>> 9);
    const opening = pick(banks.openingScenes, seed >>> 11);
    const genre = pick(banks.genres[input.genre] || banks.genres.balanced, seed >>> 13);
    const tone = input.tone || "balanced";
    const titleOptions = divinePremise
      ? ["Tres diosas, cero tutoriales", "La party que los cielos quieren desinstalar", "No era parte de la misión divina", "Respawn en el fin del mundo"]
      : ["Manual para sobrevivir a una profecía", "El gremio de las malas decisiones", "La última verdad del reino", "Nadie pidió ser el héroe", "Crónicas de una misión imposible"];
    const title = pick(titleOptions, seed >>> 15);
    const premiseText = prompt;
    const mode = input.mode === "fanfic" ? "fanfic" : "original";
    const continuity = String(input.continuity || "").trim();
    const toneNote = tone === "serious"
      ? "La comedia nace de las decisiones y las personalidades, pero las consecuencias son reales y persistentes."
      : tone === "comedy"
        ? "El absurdo domina el ritmo; debajo de cada chiste queda una consecuencia emocional concreta."
        : "Los personajes pueden ser ridículos en una escena y afrontar con absoluta seriedad una pérdida, una promesa o una decisión moral en la siguiente.";
    const characters = femaleMalfoy
      ? [protagonist, secretHarry, ...party.slice(0, 2), antagonist]
      : divinePremise
        ? [protagonist, ...goddesses, companion, antagonist]
        : [protagonist, ...party, antagonist];
    const groupNames = divinePremise ? goddesses.map((item) => item.name).join(", ") : party.map((item) => item.name).join(", ");
    const hook = divinePremise
      ? protagonist.name + ", " + protagonist.role + ", recibe una misión de " + groupNames + ". Las tres aceptan ayudar, pero ninguna coincide en qué significa salvar el mundo."
      : protagonist.name + ", " + protagonist.role + ", reúne a " + groupNames + " para resolver una crisis que parece sencilla hasta que cada integrante aplica su propia idea de lo correcto.";
    const specializedHook = femaleMalfoy
      ? "La protagonista renace como una versión femenina de Draco Malfoy e intenta llevarse bien con Harry para escapar de las viejas rivalidades familiares. Harry empieza a enamorarse de ella, pero Draco interpreta sus silencios, ayudas y nerviosismo como sospecha o estrategia. La tensión nace de la ironía dramática, la historia compartida y el miedo de ambos a mostrarse vulnerables."
      : novelistPremise
      ? "En su vida anterior, " + protagonist.name + " era novelista y jugador obsesionado con arquetipos románticos de mujeres adultas maduras. Reencarnado en otro mundo, adopta el papel de NPC de una universidad y ensaya una estrategia desconcertante: llamar la atención de las heroínas mediante una actitud protectora, casi maternal. Cree que está interpretando un papel perfecto; ellas empiezan a detectar las grietas entre su fachada y su verdadera personalidad."
      : "";
    const groupDynamic = divinePremise
      ? protagonist.name + " (" + protagonist.personality + ") intenta convertir la misión en una partida explotable. " + goddesses[0].name + " quiere preservar los destinos, " + goddesses[1].name + " insiste en que todo puede crecer de nuevo y " + goddesses[2].name + " oculta una cláusula del pacto. " + companion.name + " aporta una solución que funciona por el motivo equivocado; " + antagonist.name + " parece un burócrata ridículo, pero puede ejecutar una amenaza real."
      : protagonist.name + " (" + protagonist.personality + ") choca con " + party[0].name + ", " + party[1].name + " y " + party[2].name + ": cada uno tiene una habilidad útil y un defecto que convierte las soluciones simples en nuevos problemas. " + antagonist.name + " parece ridículo, pero su objetivo tiene consecuencias reales.";
    const story = {
      id: "story-generated-" + seed,
      name: String(input.title || "").trim() || title,
      description: [
        "TIPO: " + (mode === "fanfic" ? "FANFIC" : "HISTORIA ORIGINAL"),
        "CONTINUIDAD / MUNDO: " + (continuity || (mode === "fanfic" ? "Por especificar; no asumir datos de canon." : "Universo original por desarrollar.")),
        "GÉNERO: " + genre,
        worldProfile,
        dynamicProfile,
        "PERFIL PSICOLÓGICO: " + traitProfile + " Miedo principal: " + protagonist.fearDetail + ". Acción característica: " + protagonist.signatureAction + ".",
        "PREMISA DEL AUTOR: " + premiseText,
        "GANCHO: " + (specializedHook || hook),
        "REPARTO Y TENSIONES: " + groupDynamic,
        "CONTRADICCIÓN DEL PROTAGONISTA: " + (novelistPremise ? "Quiere pasar inadvertido como NPC, pero su instinto de novelista lo lleva a preparar encuentros, diálogos y rescates demasiado convenientes. Su gusto por las mujeres adultas maduras influye en sus expectativas románticas, no le da derecho a manipular los sentimientos de nadie." : "El protagonista debe confrontar la diferencia entre su imagen pública y sus necesidades reales."),
        "ESTRATEGIA SOCIAL: " + (motherlyPremise ? "Ofrece apoyo práctico, recuerda pequeños detalles y actúa como figura protectora; cuando intenta controlar cada resultado, las heroínas le ponen límites y debe aprender a ayudar sin decidir por ellas." : "Los vínculos se desarrollan mediante decisiones, confianza, límites y consecuencias, no por atracción automática."),
        "COMEDIA DE PERSONAJE: " + (npcPremise ? "Cada vez que intenta actuar como un NPC de fondo, su exceso de preparación convierte una interacción corriente en una escena sospechosamente importante." : traits.intelligence >= 70 && traits.attitude <= 30 ? "El protagonista diseña planes brillantes y luego intenta convencer al grupo de que ejecutarlos es trabajo de otra persona." : "El humor nace de la distancia entre lo que el protagonista planea y lo que realmente ocurre."),
        "DINÁMICA EN ESCENA: " + (femaleMalfoy ? "Harry busca excusas para estar cerca de Draco, recuerda detalles que dice no recordar y se pone nervioso cuando ella confía en otra persona. Draco interpreta esos gestos como maniobras políticas y responde con sarcasmo; cada acto de confianza debilita su lectura equivocada. El romance avanza por decisiones y conversaciones, no por destino obligatorio." : "Cada relación cambia por acciones observables, malentendidos, límites y consecuencias."),
        "CONFLICTO EXTERNO: " + complication + ".",
        "NÚCLEO EMOCIONAL: " + seriousCore + ".",
        "TONO: " + toneNote,
        "ESCENA INICIAL: " + opening + ".",
        "CAPÍTULO 1 — LA OFERTA: " + protagonist.name + " acepta una misión, una deuda o una promesa que el grupo entiende de maneras incompatibles. La letra pequeña aparece cuando ya no pueden retirarse sin perjudicar a alguien.",
        "CAPÍTULO 2 — EL EXPLOIT: el protagonista encuentra una solución técnicamente válida y moralmente desastrosa. " + party[0].name + " intenta ayudar, empeora el problema y obliga al grupo a pagar una consecuencia real.",
        "CAPÍTULO 3 — EL PRECIO: el grupo descubre quién saldría perjudicado por la victoria fácil. Deben elegir entre ganar sin esfuerzo y abandonar a alguien, o confiar entre ellos para intentar una solución más difícil.",
        "PROMESA DE LA HISTORIA: cada episodio resuelve un problema absurdo y deja una consecuencia que importa; los personajes pueden hacer payasadas sin que el dolor, los juramentos o el peligro se conviertan en chiste."
      ].join("\n\n"),
      status: "draft",
      generatedBy: "WordWaifu Rule Engine",
      generatedAt: new Date().toISOString(),
      generatedCharacters: characters.map((character) => character.id)
    };
    return { story, characters, genre, tone, mode, continuity, complication, seriousCore, opening, seed, traits, worldKey, dynamicKey };
  }

  function characterCard(character, index) {
    return '<article class="idea-character-card"><div class="idea-character-top"><span class="idea-avatar">' + escapeHTML(String(index + 1).padStart(2, "0")) + '</span><div><h3>' + escapeHTML(character.name) + '</h3><p>' + escapeHTML(character.role) + '</p></div></div><p>' + escapeHTML(character.personality) + '</p><dl><dt>Defecto útil para la trama</dt><dd>' + escapeHTML(character.flaw) + '</dd><dt>Deseo</dt><dd>' + escapeHTML(character.motivation) + '</dd></dl></article>';
  }

  function render(result) {
    currentIdea = result;
    const output = $("#idea-output");
    if (!output) return;
    output.innerHTML = '<div class="idea-result-heading"><div><p class="eyebrow">PROPUESTA GENERADA · BORRADOR EDITABLE</p><h2>' + escapeHTML(result.story.name) + '</h2><p>' + escapeHTML(result.genre) + ' · ' + escapeHTML(result.tone) + '</p></div><span class="idea-seed">SEMILLA ' + result.seed + '</span></div>' +
      '<section class="idea-synopsis"><h3>Premisa y motor de conflicto</h3><p>' + escapeHTML(result.story.description) + '</p></section>' +
      '<div class="idea-character-grid">' + result.characters.map(characterCard).join("") + '</div>' +
      '<div class="idea-result-actions"><button class="primary-button" id="idea-save-story" type="button">Guardar idea en Historias</button><button class="outline-button" id="idea-add-cast" type="button">Crear personajes en el universo</button><button class="quiet-button" id="idea-copy" type="button">Copiar propuesta</button></div><p id="idea-save-status" class="idea-save-status" role="status" aria-live="polite">Revisá la propuesta: es material creativo, no canon ni datos históricos verificados.</p>';
    $("#idea-save-story").addEventListener("click", () => {
      window.dispatchEvent(new CustomEvent("wordwaifu:save-generated-story", { detail: structuredClone(result.story) }));
      $("#idea-save-status").textContent = "Idea enviada al proyecto. Revisá la sección Historias y novelas para confirmar el guardado.";
    });
    $("#idea-add-cast").addEventListener("click", () => {
      const cast = result.characters.map((character, index) => ({
        id: character.id,
        name: character.name,
        age: null,
        species: index === 0 ? "Humano/a" : index < 4 ? "Deidad" : index === 4 ? "Criatura mítica" : "Humano/a",
        role: character.role,
        personality: [character.personality],
        description: character.role + ". " + character.personality,
        motivation: character.motivation,
        flaw: character.flaw,
        locationHistory: [],
        relationships: [],
        status: "proposal"
      }));
      window.dispatchEvent(new CustomEvent("wordwaifu:add-generated-characters", { detail: cast }));
      $("#idea-save-status").textContent = "Personajes enviados al universo como propuestas. Confirmá el guardado y editá sus datos antes de considerarlos canon.";
    });
    $("#idea-copy").addEventListener("click", async () => {
      try {
        await navigator.clipboard.writeText(result.story.name + "\n\n" + result.story.description + "\n\n" + result.characters.map((item) => item.name + " — " + item.role + "\n" + item.personality + "\nDeseo: " + item.motivation + "\nDefecto: " + item.flaw).join("\n\n"));
        $("#idea-save-status").textContent = "Propuesta copiada al portapapeles.";
      } catch (_) {
        $("#idea-save-status").textContent = "El navegador no permitió copiar automáticamente. Seleccioná el texto desde la propuesta y copialo manualmente.";
      }
    });
  }

  function init() {
    const form = $("#idea-form");
    if (!form) return;
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      render(generate({
        premise: $("#idea-premise").value,
        title: $("#idea-title").value,
        genre: $("#idea-genre").value,
        tone: $("#idea-tone").value,
        mode: $("#idea-mode").value,
        continuity: $("#idea-continuity").value,
        gender: $("#idea-gender").value,
        world: $("#idea-world").value,
        dynamic: $("#idea-dynamic").value,
        worldRules: $("#idea-world-rules").value,
        fearDetail: $("#idea-fear-detail").value,
        signatureAction: $("#idea-signature-action").value,
        traits: {
          courage: Number($("#idea-courage").value),
          fear: Number($("#idea-fear").value),
          intelligence: Number($("#idea-intelligence").value),
          attitude: Number($("#idea-attitude").value),
          empathy: Number($("#idea-empathy").value)
        }
      }));
    });
    $("#idea-regenerate").addEventListener("click", () => form.requestSubmit());
    ["courage", "fear", "intelligence", "attitude", "empathy"].forEach((trait) => {
      const slider = $("#idea-" + trait);
      const output = $("#idea-" + trait + "-value");
      if (slider && output) slider.addEventListener("input", () => { output.value = slider.value; output.textContent = slider.value; });
    });
    form.requestSubmit();
  }

  if (typeof module === "object" && module.exports) module.exports = Object.freeze({ generate });
  if (typeof window !== "undefined") window.WordWaifuIdeaEngine = Object.freeze({ generate });
  if (typeof document !== "undefined") {
    if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init, { once: true });
    else init();
  }
})();

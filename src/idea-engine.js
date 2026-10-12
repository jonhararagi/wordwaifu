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
    const protagonist = { ...pick(banks.protagonists, seed), id: "char-gen-protagonist-" + seed };
    const goddesses = banks.goddesses.map((item, index) => ({ ...item, id: "char-gen-goddess-" + seed + "-" + index }));
    const companion = { ...pick(banks.companions, seed >>> 3), id: "char-gen-companion-" + seed };
    const antagonist = { ...pick(banks.antagonists, seed >>> 5), id: "char-gen-antagonist-" + seed };
    const complication = pick(banks.complications, seed >>> 7);
    const seriousCore = pick(banks.seriousCores, seed >>> 9);
    const opening = pick(banks.openingScenes, seed >>> 11);
    const genre = pick(banks.genres[input.genre] || banks.genres.balanced, seed >>> 13);
    const tone = input.tone || "balanced";
    const title = pick([
      "Manual de supervivencia para elegidos por accidente",
      "Tres diosas, cero tutoriales",
      "La party que los cielos quieren desinstalar",
      "Crónicas del gremio incompetente",
      "No era parte de la misión divina",
      "Respawn en el fin del mundo"
    ], seed >>> 15);
    const premiseText = prompt;
    const toneNote = tone === "serious"
      ? "La comedia nace de las decisiones y las personalidades, pero las consecuencias son reales y persistentes."
      : tone === "comedy"
        ? "El absurdo domina el ritmo; debajo de cada chiste queda una consecuencia emocional concreta."
        : "Los personajes pueden ser ridículos en una escena y afrontar con absoluta seriedad una pérdida, una promesa o una decisión moral en la siguiente.";
    const characters = [protagonist, ...goddesses, companion, antagonist];
    const story = {
      id: "story-generated-" + seed,
      name: String(input.title || "").trim() || title,
      description: [
        "GÉNERO: " + genre,
        "PREMISA DEL AUTOR: " + premiseText,
        "GANCHO: Un protagonista gamer de mentalidad pragmática queda atrapado en una misión que trata la burocracia divina como un sistema de juego defectuoso.",
        "CONFLICTO EXTERNO: " + complication + ".",
        "NÚCLEO EMOCIONAL: " + seriousCore + ".",
        "TONO: " + toneNote,
        "ESCENA INICIAL: " + opening + ".",
        "ARCO INICIAL: 1) el grupo acepta una misión por una recompensa engañosa; 2) una solución egoísta empeora el problema; 3) deben colaborar sin dejar de discutir; 4) ganan algo importante, pero el precio revela el conflicto mayor."
      ].join("\n\n"),
      status: "draft",
      generatedBy: "WordWaifu Rule Engine",
      generatedAt: new Date().toISOString(),
      generatedCharacters: characters.map((character) => character.id)
    };
    return { story, characters, genre, tone, complication, seriousCore, opening, seed };
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
        tone: $("#idea-tone").value
      }));
    });
    $("#idea-regenerate").addEventListener("click", () => form.requestSubmit());
    form.requestSubmit();
  }

  if (typeof module === "object" && module.exports) module.exports = Object.freeze({ generate });
  if (typeof window !== "undefined") window.WordWaifuIdeaEngine = Object.freeze({ generate });
  if (typeof document !== "undefined") {
    if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init, { once: true });
    else init();
  }
})();

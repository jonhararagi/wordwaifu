const assert = require("node:assert/strict");
const { generate } = require("../src/idea-engine.js");

const premise = "Tres diosas mayas de personalidades opuestas contratan a un gamer con mentalidad cínica para salvar un mundo absurdo.";
const result = generate({ premise, genre: "balanced", tone: "balanced" });

assert.ok(result.story.id.startsWith("story-generated-"));
assert.match(result.story.name, /.+/);
assert.ok(result.story.description.includes(premise), "The user seed must be preserved in the generated story.");
assert.ok(result.story.description.includes("NÚCLEO EMOCIONAL"), "Every comedy premise must carry a serious dramatic core.");
assert.ok(result.story.description.includes(result.characters[0].name), "The outline must use the generated cast rather than generic placeholders.");
assert.ok(result.story.description.includes("CAPÍTULO 3 — EL PRECIO"), "The generator must create an actionable three-beat opening arc.");
assert.ok(result.story.description.includes("ESCENA INICIAL"), "The generator must produce an actionable opening scene.");
assert.equal(result.characters.length, 6, "The default party should contain a protagonist, three goddesses, a companion and an antagonist.");
assert.equal(result.characters.filter((character) => /diosa/i.test(character.role)).length, 3);
for (const character of result.characters) {
  assert.ok(character.name);
  assert.ok(character.role);
  assert.ok(character.personality);
  assert.ok(character.flaw);
  assert.ok(character.motivation);
  assert.ok(character.id);
}
const novelist = generate({
  premise: "Un novelista reencarna en otro mundo como NPC de una universidad y trata de enamorar a las waifus actuando como una madre protectora. En su vida anterior era un jugador fanático de las MILF.",
  genre: "balanced",
  tone: "balanced"
});
assert.equal(novelist.characters[0].name, "Damián Varela");
assert.match(novelist.characters[0].role, /NPC universitario/);
assert.ok(novelist.story.description.includes("novelista y jugador obsesionado con arquetipos románticos de mujeres adultas maduras"));
assert.ok(novelist.story.description.includes("ESTRATEGIA SOCIAL"));
assert.ok(novelist.story.description.includes("COMEDIA DE PERSONAJE"));
assert.ok(novelist.story.description.includes("le ponen límites"));
assert.ok(novelist.story.description.includes("\\n") === false, "The outline must contain actual paragraph breaks rather than literal slash-n sequences.");
const general = generate({ premise: "Una archivista descubre que el reino borró de sus registros a una ciudad entera.", genre: "drama", tone: "balanced" });
assert.equal(general.characters.length, 5, "A non-divine premise should create a different party rather than forcing three goddesses into every story.");
assert.ok(general.characters.some((character) => character.role === "archivista de ruinas" || character.role === "exvillano en rehabilitación" || character.role === "sanadora de frontera"));
assert.ok(!general.characters.some((character) => /diosa/i.test(character.role)));
const fanfic = generate({ premise, mode: "fanfic", continuity: "DanMachi · novelas ligeras", genre: "balanced", tone: "balanced" });
assert.ok(fanfic.story.description.includes("TIPO: FANFIC"));
assert.ok(fanfic.story.description.includes("DanMachi · novelas ligeras"), "Fanfic continuity context must be preserved in the saved outline.");
const serious = generate({ premise, genre: "drama", tone: "serious" });
assert.match(serious.story.description, /consecuencias son reales y persistentes/);
const comedy = generate({ premise, genre: "comedy", tone: "comedy" });
assert.match(comedy.story.description, /El absurdo domina el ritmo/);
process.stdout.write("PASS_STATIC: idea engine generates a premise, 3 goddess archetypes, a protagonist, companion, antagonist, opening scene and tonal dramatic core.\n");

const traitDriven = generate({ premise: "Un protagonista inteligente, miedoso y perezoso debe salvar el día.", traits: { courage: 20, fear: 80, intelligence: 90, attitude: 10, empathy: 55 }, world: "magic-school", dynamic: "reluctant-hero", worldRules: "La magia requiere contratos y toda promesa tiene un precio." });
assert.ok(traitDriven.story.description.includes("Miedoso y apático"));
assert.ok(traitDriven.story.description.includes("La magia requiere contratos"));
assert.ok(traitDriven.story.description.includes("DINÁMICA: una mente brillante evita el esfuerzo"));
assert.equal(traitDriven.traits.intelligence, 90);
const malfoy = generate({ premise: "En un fanfic de Harry Potter, renazco como Draco Malfoy pero siendo mujer y ahora intento llevarme bien con Harry Potter sin darme cuenta de que está enamorado de mí.", mode: "fanfic", continuity: "Harry Potter · Hogwarts", gender: "woman", dynamic: "secret-crush", world: "magic-school" });
assert.equal(malfoy.characters[0].name, "Draco Malfoy");
assert.ok(malfoy.characters.some((character) => character.name === "Harry Potter"));
assert.ok(malfoy.story.description.includes("empieza a enamorarse de ella"));
assert.ok(malfoy.story.description.includes("DINÁMICA EN ESCENA"));

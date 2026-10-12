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
const fanfic = generate({ premise, mode: "fanfic", continuity: "DanMachi · novelas ligeras", genre: "balanced", tone: "balanced" });
assert.ok(fanfic.story.description.includes("TIPO: FANFIC"));
assert.ok(fanfic.story.description.includes("DanMachi · novelas ligeras"), "Fanfic continuity context must be preserved in the saved outline.");
const serious = generate({ premise, genre: "drama", tone: "serious" });
assert.match(serious.story.description, /consecuencias son reales y persistentes/);
const comedy = generate({ premise, genre: "comedy", tone: "comedy" });
assert.match(comedy.story.description, /El absurdo domina el ritmo/);
process.stdout.write("PASS_STATIC: idea engine generates a premise, 3 goddess archetypes, a protagonist, companion, antagonist, opening scene and tonal dramatic core.\n");

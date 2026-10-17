const assert = require("node:assert/strict");
require("../src/character-dossiers.js");
const api = globalThis.WordWaifuCharacterDossiers;
assert.ok(api, "Character dossier registry should load in Node.");
const all = api.list();
assert.ok(all.length >= 37, "The archive must retain existing dossiers and seven new Soma Familia members.");
for (const dossier of all) {
  for (const field of ["appearance","history","personality","abilities","relationships","conflict"]) {
    assert.ok(typeof dossier[field] === "string" && dossier[field].length >= 100,
      dossier.id + " must include a substantive " + field + " section.");
  }
  assert.ok(Array.isArray(dossier.sources) && dossier.sources.length >= 1,
    dossier.id + " must retain source URLs.");
}
const bell = api.get("DM-CHAR-BELL");
assert.ok(bell.history.length > 300, "Bell's history must be a real paragraph, not a short synopsis.");
assert.ok(bell.abilities.includes("Liaris Freese"), "Bell's dossier must describe named abilities.");
assert.ok(api.get("CHAR-RYUU-LION").history.includes("piso 37"), "Ryuu's dossier must include specific narrative context.");
assert.equal(api.get("MISSING-ID"), null, "Unknown characters should return null.");
bell.history = "mutated";
assert.notEqual(api.get("DM-CHAR-BELL").history, "mutated", "Callers must not mutate the shared dossier catalog.");

const somaBatchIds = [
  "CHAR-LILIRUCA-ARDE","CHAR-SOMA","CHAR-ZANIS-LUSTRA","CHAR-CHANDRA-IHIT",
  "CHAR-CANOE-BELWAY","CHAR-TSUKINOKAMI-KAEDE","CHAR-SHINONOME-MOMIJI","CHAR-COCO-COLLINS"
];
for (const id of somaBatchIds) {
  const dossier = api.get(id);
  assert.ok(dossier, id + " must have an application dossier.");
  for (const field of ["appearance","history","personality","abilities","relationships","conflict"]) {
    assert.ok(dossier[field].length >= 100, id + " must explain evidence limits for " + field + ".");
  }
  assert.ok(dossier.sources.some(url => url.startsWith("https://")), id + " must retain provenance URLs.");
}
assert.ok(api.get("CHAR-LILIRUCA-ARDE").history.includes("Familia Soma") || api.get("CHAR-LILIRUCA-ARDE").relationships.includes("Soma"), "Lili must preserve the former-family context in her application profile.");
assert.ok(api.get("CHAR-CHANDRA-IHIT").relationships.includes("Zanis"), "Chandra and Zanis must remain separate linked identities.");

process.stdout.write("PASS character dossiers: " + all.length + " profiles with six substantive sections and source URLs.\\n");

const assert = require("node:assert/strict");
require("../src/character-dossiers.js");
const api = globalThis.WordWaifuCharacterDossiers;
assert.ok(api, "Character dossier registry should load in Node.");
const all = api.list();
assert.ok(all.length >= 37, "The archive must retain existing dossiers and seven new Soma Familia members.");


const historicalDossiers = [
  { id: "CHAR-ZEUS", tokens: ["Bell Cranel", "Behemoth y Leviathan", "fingió estar muerto"], source: "https://danmachi.fandom.com/wiki/Zeus" },
  { id: "CHAR-HERA", tokens: ["Hera Familia", "Behemoth y Leviathan", "Ouranos"], source: "https://danmachi.fandom.com/wiki/Hera_Familia" },
  { id: "CHAR-MAXIM", tokens: ["capitán de Zeus Familia", "Dragón Negro", "siguiente generación"], source: "https://danmachi.fandom.com/wiki/Maxim" },
  { id: "CHAR-DARK-ALFIA", tokens: ["Silentium Eden", "Meteria", "What If"], source: "https://danmachi.fandom.com/wiki/Alfia" },
  { id: "CHAR-DARK-ZALD", tokens: ["Deus Ambrosia", "veneno de Behemoth", "Alfia"], source: "https://danmachi.fandom.com/wiki/Zald" }
];
for (const expected of historicalDossiers) {
  const profile = api.get(expected.id);
  assert.ok(profile, expected.id + " must be available as an application dossier.");
  const searchable = [profile.appearance, profile.history, profile.personality, profile.abilities, profile.relationships, profile.conflict].join(" ");
  for (const token of expected.tokens) {
    assert.ok(searchable.includes(token), expected.id + " must expose wiki-informed details with evidence limits: " + token);
  }
  assert.ok(profile.sources.includes(expected.source), expected.id + " must retain the exact source URL.");
}
assert.equal(api.get("CHAR-ZEUS").abilities.includes("nivel Falna"), true, "Deities must not be assigned adventurer levels.");
assert.ok(api.get("CHAR-HERA").personality.includes("No hay evidencia suficiente"), "Hera's unknown personal psychology must remain explicit rather than inferred from mythology.");
assert.ok(api.get("CHAR-DARK-ALFIA").relationships.includes("What If"), "Alfia's alternative continuity must remain separated.");
assert.ok(api.get("CHAR-DARK-ZALD").abilities.includes("veneno de Behemoth"), "Zald's key limitation must remain visible in the profile.");

const freyaSecondaryProfiles = [
  { id: "CHAR-HEDIN-SELLAND", tokens: ["Hjaðningavíg", "Laurus Hildr", "Hildrsleif", "Arry"], source: "https://danmachien.miraheze.org/wiki/Hedin_Selland" },
  { id: "CHAR-HOGNI-RAGNAR", tokens: ["Hjaðningavíg", "Dainsleif", "Victim Abyss", "Mind"], source: "https://danmachien.miraheze.org/wiki/Hogni_Ragnar" },
  { id: "CHAR-HEITH-VELVET", tokens: ["Rebirth Gandr", "Earth Gullveig", "Andhrímnir", "violencia sexual"], source: "https://danmachien.miraheze.org/wiki/Heith_Velvet" },
  { id: "CHAR-CHLOE-ROLO", tokens: ["Shakti Varma", "Feles Cruz", "Violetta"], source: "https://danmachien.miraheze.org/wiki/Chloe_Rollo" },
  { id: "CHAR-LUNOA-FAUST", tokens: ["Gulliver", "Fist Fighter", "piso 50"], source: "https://danmachien.miraheze.org/wiki/Lunoire_Faust" }
];
for (const expected of freyaSecondaryProfiles) {
  const profile = api.get(expected.id);
  assert.ok(profile, expected.id + " must resolve as a unique application dossier.");
  const searchable = [profile.appearance, profile.history, profile.personality, profile.abilities, profile.relationships, profile.conflict].join(" ");
  for (const token of expected.tokens) {
    assert.ok(searchable.includes(token), expected.id + " must expose sourced detail: " + token);
  }
  assert.ok(profile.sources.includes(expected.source), expected.id + " must retain the exact wiki source URL.");
}
assert.ok(api.list().some(item => item.id === "CHAR-LUNOA-FAUST"), "The canonical Lunoa/Lunoire identity must use the catalog ID.");
assert.equal(api.list().some(item => item.id === "CHAR-LUNOIRE-FAUST"), false, "The legacy spelling must not create a duplicate identity.");
assert.deepEqual(api.get("CHAR-LUNOIRE-FAUST"), api.get("CHAR-LUNOA-FAUST"), "The prior ID spelling must remain a compatible lookup alias.");
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
  "CHAR-CANOE-BELWAY","CHAR-TSUKINOKAMI-KAEDE","CHAR-SHINONOME-MOMIJI","CHAR-COCO-COLLINS",
  "CHAR-RIVERIA-LJOS-ALF","CHAR-GARETH-LANDROCK","CHAR-BETE-LOGA","CHAR-TIONA-HIRYUTE","CHAR-TIONE-HIRYUTE","CHAR-LEFIYA-VIRIDIS"
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

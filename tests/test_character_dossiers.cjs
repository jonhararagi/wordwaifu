const assert = require("node:assert/strict");
require("../src/character-dossiers.js");
const api = globalThis.WordWaifuCharacterDossiers;
assert.ok(api, "Character dossier registry should load in Node.");
const all = api.list();
assert.ok(all.length >= 37, "The archive must retain existing dossiers and seven new Soma Familia members.");


const historicalDossiers = [
  { id: "CHAR-ZEUS", tokens: ["Bell Cranel", "Behemoth y Leviathan", "fingió estar muerto"], source: "https://danmachien.miraheze.org/wiki/Zeus" },
  { id: "CHAR-HERA", tokens: ["Hera Familia", "Behemoth y Leviathan", "Ouranos"], source: "https://danmachien.miraheze.org/wiki/Hera_Familia" },
  { id: "CHAR-MAXIM", tokens: ["capitán de Zeus Familia", "Dragón Negro", "siguiente generación"], source: "https://danmachien.miraheze.org/wiki/Maxim" },
  { id: "CHAR-DARK-ALFIA", tokens: ["Silentium Eden", "Meteria", "What If"], source: "https://danmachien.miraheze.org/wiki/Alfia" },
  { id: "CHAR-DARK-ZALD", tokens: ["Deus Ambrosia", "veneno de Behemoth", "Alfia"], source: "https://danmachien.miraheze.org/wiki/Zald" }
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

const astreaMirahezeProfiles = [
  { id:"CHAR-ASTA-KNOX", tokens:["defensa impenetrable","escudo","Juggernaut"], source:"https://danmachien.miraheze.org/wiki/Asta_Knox" },
  { id:"CHAR-CELTY-SROWA", tokens:["Bosque Yenite","magia de rayo","Mage/Mago"], source:"https://danmachien.miraheze.org/wiki/Celty_Srowa" },
  { id:"CHAR-ISKA-BRA", tokens:["orfanato","maquillaje","dos puños"], source:"https://danmachien.miraheze.org/wiki/Iska_Bra" },
  { id:"CHAR-NEZE-RANKETT", tokens:["Bloody Justice Fang","garras de viento","luz de la luna"], source:"https://danmachien.miraheze.org/wiki/Neze_Rankett" },
  { id:"CHAR-NOIN-UNIC", tokens:["aumenta la velocidad","Juggernaut","nivel 4"], source:"https://danmachien.miraheze.org/wiki/Noin_Unic" }
];
for (const expected of astreaMirahezeProfiles) {
  const profile=api.get(expected.id);
  assert.ok(profile, expected.id+" must remain a unique dossier.");
  const searchable=[profile.appearance,profile.history,profile.personality,profile.abilities,profile.relationships,profile.conflict].join(" ");
  for (const token of expected.tokens) assert.ok(searchable.includes(token), expected.id+" must expose current Miraheze details: "+token);
  assert.ok(profile.sources.includes(expected.source), expected.id+" must retain the current English Miraheze URL.");
}
for (const id of ["CHAR-HEDIN-SELLAND","CHAR-HOGNI-RAGNAR"]) {
  const profile=api.get(id);
  assert.ok(profile.history.includes("tres noches"), id+" must include the narrowly verified duel duration.");
  assert.ok(profile.sources.includes("https://r.binb.jp/epm/e1_358215_18062024160902/"), id+" must link the authorized primary preview.");
}

const astreaCore041 = [
 {id:"CHAR-ALISE-LOVELACE",tokens:["Agaris Alvesynth","Rubrud Beckia","41","33"],source:"https://danmachien.miraheze.org/wiki/Alise_Lovell"},
 {id:"CHAR-KAGUYA",tokens:["Gokou","Kodachi Futaba","Tekiheni/Sakibeni"],source:"https://danmachien.miraheze.org/wiki/Gojouno_Kaguya"},
 {id:"CHAR-LYRA",tokens:["Mus Mine","Carnivore","Helga"],source:"https://danmachien.miraheze.org/wiki/Lyra"},
 {id:"CHAR-ASTREA",tokens:["Percepción Divina","Arcanum","Espejo Divino"],source:"https://danmachien.miraheze.org/wiki/Astrea"},
 {id:"CHAR-RYUU-LION",tokens:["Ryumilua","Jura","Astraea Record","Alf's Justitia"],source:"https://danmachien.miraheze.org/wiki/Ryuu_Lion"}
];
for(const expected of astreaCore041){
 const profile=api.get(expected.id);assert.ok(profile,expected.id+" must remain a unique dossier.");
 const searchable=[profile.appearance,profile.history,profile.personality,profile.abilities,profile.relationships,profile.conflict].join(" ");
 for(const token of expected.tokens)assert.ok(searchable.includes(token),expected.id+" must preserve detailed bilingual lore: "+token);
 assert.ok(profile.sources.includes(expected.source),expected.id+" must prioritize current English Miraheze source.");
}
assert.ok(api.get("CHAR-RYUU-LION").history.includes("Jura") && api.get("CHAR-RYUU-LION").history.includes("discrepancia"),"Ryuu's survivor conflict must stay visible rather than being silently resolved.");

const historicalMiraheze042 = [
  {id:"CHAR-ZEUS",tokens:["Percepción Divina","nivel Falna","fingió estar muerto"],source:"https://danmachien.miraheze.org/wiki/Zeus"},
  {id:"CHAR-HERA",tokens:["Emperatriz","No hay evidencia suficiente","Ouranos"],source:"https://danmachien.miraheze.org/wiki/Hera_Familia"},
  {id:"CHAR-MAXIM",tokens:["nivel 8","siguiente generación","humillando"],source:"https://danmachien.miraheze.org/wiki/Maxim"},
  {id:"CHAR-DARK-ALFIA",tokens:["Satanas Verion","Gif Blessing","What If"],source:"https://danmachien.miraheze.org/wiki/Alfia"},
  {id:"CHAR-DARK-ZALD",tokens:["Deus Ambrosia","veneno de Behemoth","Alfia"],source:"https://danmachien.miraheze.org/wiki/Zald"}
];
for(const expected of historicalMiraheze042){
 const profile=api.get(expected.id);assert.ok(profile,expected.id+" must resolve to a stable dossier.");
 const searchable=[profile.appearance,profile.history,profile.personality,profile.abilities,profile.relationships,profile.conflict].join(" ");
 for(const token of expected.tokens)assert.ok(searchable.includes(token),expected.id+" must include current Miraheze profile detail: "+token);
 assert.ok(profile.sources.includes(expected.source),expected.id+" must prioritize current English Miraheze source.");
}

const missingDarkEra043=[
 {id:"CHAR-DARK-ALECTO",token:"Alecto Familia",url:"https://danmachien.miraheze.org/wiki/Alecto"},
 {id:"CHAR-DARK-APATE",token:"Spirit Soldiers",url:"https://danmachien.miraheze.org/wiki/Apate_Familia"},
 {id:"CHAR-DARK-THANATOS",token:"Knossos",url:"https://danmachien.miraheze.org/wiki/Thanatos"},
 {id:"CHAR-DARK-BASRAM",token:"Apate Familia",url:"https://danmachien.miraheze.org/wiki/Basram"},
 {id:"CHAR-DARK-VALLETTA-GREDE",token:"Sword Oratoria",url:"https://danmachien.miraheze.org/wiki/Valletta_Grede"}
];
for(const expected of missingDarkEra043){
 const dossier=api.get(expected.id);assert.ok(dossier,expected.id+" must now be available in the app.");
 const text=[dossier.appearance,dossier.history,dossier.personality,dossier.abilities,dossier.relationships,dossier.conflict].join(" ");
 assert.ok(text.includes(expected.token),expected.id+" must expose role/context detail.");
 assert.ok(dossier.sources.includes(expected.url),expected.id+" must link current EN Miraheze page.");
}

const priorityProfiles044=[
 {id:"CHAR-DARK-BARCA-PERDIX",tokens:["Daidalos","Dix","Mystery","Knossos"],source:"https://danmachien.miraheze.org/wiki/Barca_Perdix"},
 {id:"CHAR-DARK-DINA-DIS",tokens:["Dialf Stige","Dialf Luminis","Hogni","nivel 5"],source:"https://danmachien.miraheze.org/wiki/Dis_Sisters"},
 {id:"CHAR-DARK-VENA-DIS",tokens:["Dialf Dis","Dialf Otua","Hedin","Elfa Oscura"],source:"https://danmachien.miraheze.org/wiki/Dis_Sisters"},
 {id:"CHAR-LEENE-ARSHE",tokens:["Line Arshe","Leene Arshe","Luna Sanatio","Valletta"],source:"https://danmachien.miraheze.org/wiki/Line_Arshe"},
 {id:"CHAR-LOKI-ALICIA-FORESTLIGHT",tokens:["Hail Dust","Grace Sagittarius","Fairy Force","Xenos"],source:"https://danmachien.miraheze.org/wiki/Alicia_Forestlight"}
];
for(const expected of priorityProfiles044){
 const profile=api.get(expected.id);assert.ok(profile,expected.id+" must resolve to an application dossier.");
 const searchable=[profile.appearance,profile.history,profile.personality,profile.abilities,profile.relationships,profile.conflict].join(" ");
 for(const token of expected.tokens)assert.ok(searchable.includes(token),expected.id+" must expose bilingual details: "+token);
 assert.ok(profile.sources.includes(expected.source),expected.id+" must prioritize the current migrated English Miraheze page.");
}
assert.ok(api.get("CHAR-LEENE-ARSHE").history.includes("Line Arshe") && api.get("CHAR-LEENE-ARSHE").history.includes("Leene Arshe"),"Line/Leene must use a single stable application ID.");
assert.ok(api.get("CHAR-LEENE-ARSHE").conflict.includes("ruta de juego") && api.get("CHAR-LEENE-ARSHE").conflict.includes("Sword Oratoria"),"Line's game survival route must remain distinct from the SO death.");


const detailedEvilus043=[
 {id:"CHAR-DARK-ALECTO",tokens:["900 años","Revinas Darda","Percepción Divina","Espejo Divino"],url:"https://danmachien.miraheze.org/wiki/Alecto"},
 {id:"CHAR-DARK-APATE",tokens:["devolvió 404","doce Spirit Soldiers","Osiris Familia","Apate Familia"],url:"https://danmachien.miraheze.org/wiki/Apate_Familia"},
 {id:"CHAR-DARK-THANATOS",tokens:["purificar almas","Lefiya","Intelecto Divino","Arcanum"],url:"https://danmachien.miraheze.org/wiki/Thanatos"},
 {id:"CHAR-DARK-BASRAM",tokens:["shakujō","Daga del Espíritu","dos dedos","apóstoles"],url:"https://danmachien.miraheze.org/wiki/Basram"},
 {id:"CHAR-DARK-VALLETTA-GREDE",tokens:["Shaldo","60 metros","heridas que no sanan","Finn"],url:"https://danmachien.miraheze.org/wiki/Valletta_Grede"}
];
for(const expected of detailedEvilus043){
 const profile=api.get(expected.id);assert.ok(profile,expected.id+" must remain available.");
 const text=[profile.appearance,profile.history,profile.personality,profile.abilities,profile.relationships,profile.conflict].join(" ");
 for(const token of expected.tokens)assert.ok(text.includes(token),expected.id+" must expose re-read details: "+token);
 assert.ok(profile.sources.includes(expected.url),expected.id+" must link the source actually read.");
}

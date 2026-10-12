const assert=require("node:assert/strict");
const fs=require("node:fs");
const path=require("node:path");
require("../src/official-character-roster.js");
const corpus=require("../src/lore-corpus.js");
const archive=require("../src/character-archive.js");
const root=path.join(__dirname,"..","lore","danmachi");
const catalog=JSON.parse(fs.readFileSync(path.join(root,"catalog.json"),"utf8"));
const paths=["research/inbox/BATCH-DM-003-era-oscura-y-personajes-multiepoca.md","research/inbox/BATCH-DM-004-psicologia-personajes-y-retrieval.md","research/inbox/BATCH-DM-005-astrea-familia-network.md","research/inbox/BATCH-DM-006-oficial-roster-y-retratos.md"];
const docs=paths.map(file=>({path:file,content:fs.readFileSync(path.join(root,file),"utf8")}));
const profilePaths=[
  "characters/ryuu-lion.md","characters/alise-lovelace.md","characters/astrea.md",
  "characters/bell-cranel.md","characters/hestia.md","characters/ais-wallenstein.md",
  "characters/eina-tulle.md","characters/finn-deimne.md","characters/freya.md",
  "characters/ottar.md","characters/gojouno-kaguya.md","characters/lyra.md"
];
const profileDocuments=profilePaths.map(file=>({path:file,content:fs.readFileSync(path.join(root,file),"utf8")}));
const index=corpus.buildIndex(catalog,docs,profileDocuments);
assert.equal(index.profileDocumentCount,12,"The archive should retain the 12 existing deeper dossiers.");
assert.equal(globalThis.WordWaifuOfficialCharacterRoster.list().length,59,"The official-source registry should hold the extended character catalog, including Eina Tulle.");
assert.ok(globalThis.WordWaifuOfficialCharacterRoster.get("CHAR-LULUNE-LOUIE").imageUrl.endsWith("/rurune_zenshin.png"));
assert.equal(globalThis.WordWaifuOfficialCharacterRoster.get("CHAR-ASFI-AL-ANDROMEDA").voice,"Ai Kayano");
assert.equal(globalThis.WordWaifuOfficialCharacterRoster.get("CHAR-DIONYSUS").voice,"Masaya Matsukaze");
assert.ok(archive.list(index).length >= 58,"The directory should include the expanded S4/S5 and Sword Oratoria cast, beyond the 12 deep dossiers.");
const addedCast=["CHAR-DAPHNE-LAUROS","CHAR-CASSANDRA-ILION","CHAR-KASHIMA-OUKA","CHAR-HITACHI-CHIGUSA","CHAR-AISHA-BELKA","CHAR-LUVIS-LILIX","CHAR-DORMUL-BOLSTER","CHAR-MARI-XENOS","CHAR-NEOIN-UNICK","CHAR-NEESE-RANQUETTE","CHAR-ASTA-NOX","CHAR-LIANA-LEETS","CHAR-SELTTY-THROA","CHAR-ISKA-BRA","CHAR-MARIYU-LEAGE","CHAR-LULUNE-LOUIE","CHAR-TSUBAKI-COLBRANDE"];
for(const id of addedCast){
  assert.ok(archive.list(index).some(character=>character.id===id),"Expanded roster must expose "+id);
  const profile=archive.getProfile(index,id,"CONT-ANIME","all");
  assert.ok(profile&&profile.claims.length>0,"Expanded roster must preserve source-linked evidence for "+id);
}
assert.equal(globalThis.WordWaifuOfficialCharacterRoster.get("CHAR-RYUU-LION").historicalImageUrl,"https://danmachi.com/danmachi4/character/images/chara_tachi_15.png","Ryu's historical reference must point to Ryu, not Mari the mermaid.");
assert.equal(globalThis.WordWaifuOfficialCharacterRoster.get("CHAR-ASTREA").imageUrl,"https://danmachi.com/danmachi4/character/images/chara_tachi_16.png","Astrea must use the official Astrea illustration.");
assert.equal(globalThis.WordWaifuOfficialCharacterRoster.get("CHAR-ALISE-LOVELACE").imageUrl,"https://danmachi.com/danmachi4/character/images/chara_tachi_17.png","Alise must use the official Alise illustration.");
assert.equal(globalThis.WordWaifuOfficialCharacterRoster.get("CHAR-KAGUYA").imageUrl,"https://danmachi.com/danmachi4/character/images/chara_tachi_18.png","Kaguya must use the official Kaguya illustration.");
assert.equal(globalThis.WordWaifuOfficialCharacterRoster.get("CHAR-LYRA").imageUrl,"https://danmachi.com/danmachi4/character/images/chara_tachi_19.png","Lyra must use the official Lyra illustration.");
assert.equal(globalThis.WordWaifuOfficialCharacterRoster.get("CHAR-RAUL-NOORD").level,4,"The official Sword Oratoria profile explicitly gives Raul level 4.");
assert.ok(archive.list(index,{query:"Welf"}).some(character=>character.id==="CHAR-WELF-CROZZO"),"The directory should search the newly added Welf reference.");
const officialWelf=archive.getProfile(index,"CHAR-WELF-CROZZO","CONT-ANIME","all");
assert.ok(officialWelf&&officialWelf.claims.length>=3,"Welf must have multiple source-backed claims, not only a card.");
assert.ok(officialWelf.claims.every(claim=>claim.continuityScopes.includes("CONT-ANIME")),"Official adaptation data must stay in the adaptation continuity.");
assert.ok(officialWelf.claims.every(claim=>claim.sourceUrls.some(url=>url.includes("danmachi5/character"))),"Welf claims must retain direct official source URLs.");
const officialBell=globalThis.WordWaifuOfficialCharacterRoster.get("DM-CHAR-BELL");
assert.ok(officialBell.imageUrl&&officialBell.imageUrl.startsWith("https://danmachi.com/"),"Portraits must link to official image hosts rather than unrelated stock art.");
assert.ok(officialBell.sourcePage.includes("danmachi5/character"),"Official portrait provenance must link to its source page.");
const ryu=archive.getProfile(index,"CHAR-RYUU-LION","CONT-AR","all");
assert.ok(ryu&&ryu.claims.every(c=>c.continuityScopes.includes("CONT-AR")));
const justiceClaim=ryu.claims.find(c=>c.claimId==="DMR-002-CLM-015");
assert.ok(justiceClaim,"Ryu's documented justice claim must exist in CONT-AR.");
assert.ok(justiceClaim.aspects.includes("motivation"),"The Ryu justice claim must be classified as motivation: "+JSON.stringify(justiceClaim.aspects));
assert.ok(ryu.moments.some(m=>m.id==="ryu-justice")&&ryu.moments.some(m=>m.id==="ryu-seven-days"));
assert.ok(ryu.relationships.some(r=>r.targetId==="CHAR-ALISE-LOVELACE")&&ryu.relationships.some(r=>r.targetId==="CHAR-ASTREA"));
assert.ok(!ryu.claims.some(c=>c.entryId.endsWith("--CONT-ANIME")));
const ryuAnime=archive.getProfile(index,"CHAR-RYUU-LION","CONT-ANIME","all");
assert.ok(ryuAnime.claims.length&&ryuAnime.claims.every(c=>c.continuityScopes.includes("CONT-ANIME")));
assert.equal(ryuAnime.relationships.length,0);
assert.ok(!ryuAnime.moments.some(m=>m.id==="ryu-seven-days"));
const aliseAr=archive.getProfile(index,"CHAR-ALISE-LOVELACE","CONT-AR","all");
assert.ok(aliseAr.claims.some(c=>c.entryId==="DMR-002-CLM-019--CONT-AR"));
assert.ok(!aliseAr.claims.some(c=>c.claim.includes("directa y de ánimo luminoso")));
assert.ok(aliseAr.relationships.some(r=>r.targetId==="CHAR-ASTREA"));
const aliseAnime=archive.getProfile(index,"CHAR-ALISE-LOVELACE","CONT-ANIME","all");
assert.ok(aliseAnime.claims.some(c=>c.entryId==="DMR-002-CLM-019--CONT-ANIME"));
assert.ok(aliseAnime.claims.every(c=>c.continuityScopes.includes("CONT-ANIME")));
const astreaAr=archive.getProfile(index,"CHAR-ASTREA","CONT-AR","all");
assert.ok(astreaAr.relationships.some(r=>r.targetId==="CHAR-RYUU-LION"));
assert.ok(ryu.relationships.some(r=>r.targetId==="CHAR-KAGUYA"&&r.type.includes("fuente comunitaria")));
assert.ok(ryu.relationships.some(r=>r.targetId==="CHAR-LYRA"&&r.type.includes("fuente comunitaria")));
const kaguya=archive.getProfile(index,"CHAR-KAGUYA","CONT-AR","all");
assert.ok(kaguya.claims.some(c=>c.claimId==="DMR-003-CLM-001"));
assert.ok(archive.getExtendedInfo("CHAR-KAGUYA","CONT-AR").references.some(ref=>ref.kind==="community"));
const extendedRyu=archive.getExtendedInfo("CHAR-RYUU-LION","CONT-AR",index);
assert.ok(extendedRyu.repositoryProfile&&extendedRyu.repositoryProfile.sectionCount>0,
  "The More Info window must recover the pre-existing character dossier.");
assert.ok(extendedRyu.sections.some(section=>section.title.includes("Estado temporal A")));
const syntheticIndex={...index,profileDetails:{...index.profileDetails,"CHAR-RYUU-LION":{
  ...index.profileDetails["CHAR-RYUU-LION"],
  sections:[...index.profileDetails["CHAR-RYUU-LION"].sections,{heading:"Perfil oficial del anime",text:"SYNTHETIC-ANIME-ONLY-CONTENT"}]
}}};
const syntheticHistorical=archive.getExtendedInfo("CHAR-RYUU-LION","CONT-AR",syntheticIndex);
assert.ok(!syntheticHistorical.sections.some(section=>section.title==="Perfil oficial del anime"),
  "Standalone anime-only headings must not leak into the historical CONT-AR dossier.");
const syntheticAnime=archive.getExtendedInfo("CHAR-RYUU-LION","CONT-ANIME",syntheticIndex);
assert.ok(syntheticAnime.sections.some(section=>section.title==="Perfil oficial del anime"),
  "The anime dossier must retain its own standalone localized heading.");

assert.ok(!extendedRyu.sections.some(section=>section.title.includes("Estado temporal B")),
  "Anime-only temporal-state details must not leak into the historical Ryu summary.");
const extendedRyuAnime=archive.getExtendedInfo("CHAR-RYUU-LION","CONT-ANIME",index);
assert.ok(extendedRyuAnime.sections.some(section=>section.title.includes("Estado temporal B")),
  "The anime dossier must retain its own temporal state.");
assert.ok(!extendedRyuAnime.sections.some(section=>section.title.includes("Estado temporal A")),
  "The historical temporal state must not leak into the anime dossier.");
const extendedBell=archive.getExtendedInfo("DM-CHAR-BELL","CONT-ANIME",index);
assert.ok(extendedBell.sections.some(section=>section.title==="Anclas de continuidad"),
  "The More Info window should expose existing author-continuity cautions from the dossier.");
const filtered=archive.getProfile(index,"CHAR-RYUU-LION","CONT-AR","safe-only");
assert.ok(!filtered.moments.some(m=>m.id==="ryu-seven-days"));
assert.equal(archive.list(index,{query:"Ryu"}).filter(c=>c.id==="CHAR-RYUU-LION").length,1);
assert.ok(ryu.missingContinuities.includes("CONT-MAIN-LN")&&ryu.missingContinuities.includes("CONT-AU"));
// Expanded character profiles consume existing curated claims rather than inventing data.
const directory=archive.list(index);
for(const id of ["DM-CHAR-BELL","DM-CHAR-HESTIA","DM-CHAR-AIS","DM-CHAR-EINA","CHAR-FINN-DEIMNE","CHAR-FREYA","CHAR-OTTAR"]){
  assert.ok(directory.some(character=>character.id===id),"Expected expanded archive record: "+id);
  const item=archive.getProfile(index,id,"CONT-ANIME","all");
  assert.ok(item&&item.claims.length>0,"Expanded character must expose source-backed claims: "+id);
}
const bell=archive.getProfile(index,"DM-CHAR-BELL","CONT-ANIME","all");
assert.ok(bell.relationships.length>=3,"Bell's source-backed relationship network should include Hestia, Ais and Eina.");
const bellMain=archive.getProfile(index,"DM-CHAR-BELL","CONT-MAIN-LN","all");
assert.ok(bellMain,"Bell must offer a main-novel dossier instead of defaulting only to the anime synopsis.");
assert.ok(bellMain.officialDossier&&bellMain.officialDossier.history.length>500,"Bell's main-novel profile should expose a substantial historical dossier.");
assert.ok(bellMain.officialDossier.development.length>400&&bellMain.officialDossier.combatProfile.length>300,"Bell's dossier should include meaningful character development and combat analysis.");
assert.ok(bellMain.officialDossier.relationshipDetails.length>=4&&bellMain.officialDossier.abilities.length>=2,"Bell's dossier must include multiple researched relationships and abilities.");
assert.ok(bellMain.claims.length>=10,"The main-novel dossier should contribute searchable evidence items.");
assert.ok(bellMain.claims.every(claim=>claim.continuityScopes.includes("CONT-MAIN-LN")),"Main-novel claims must not mix with anime profile claims.");
const bellSafe=archive.getProfile(index,"DM-CHAR-BELL","CONT-MAIN-LN","safe-only");
assert.ok(!bellSafe.officialDossier,"Major-spoiler dossier must not appear with the safe-only filter.");
const ryuDossier=archive.getProfile(index,"CHAR-RYUU-LION","CONT-AR","all");
assert.ok(ryuDossier.officialDossier&&ryuDossier.officialDossier.history.length>500,"Ryu's Astrea Record dossier must be visible in the historical continuity.");
assert.ok(ryuDossier.officialDossier.relationshipDetails.some(rel=>rel.name==="Alise Lovelace"),"Historical Ryu dossier should discuss the documented Alise relationship.");
assert.equal(archive.getProfile(index,"CHAR-RYUU-LION","CONT-AR","safe-only").officialDossier,null,"Major-spoiler historical dossier must respect safe-only.");
const einaMain=archive.getProfile(index,"DM-CHAR-EINA","CONT-MAIN-LN","all");
assert.ok(einaMain.officialDossier&&einaMain.officialDossier.history.length>300,"Eina needs a detailed dossier, not only an archive card.");
assert.ok(archive.getExtendedInfo("CHAR-RYUU-LION","CONT-AR").references.some(ref=>ref.url.includes("fandom.com/es/wiki/Ryuu_Lion")));
assert.ok(archive.getExtendedInfo("DM-CHAR-BELL","CONT-ANIME").sections.length>=2);
assert.equal(archive.getExtendedInfo("DM-CHAR-BELL","CONT-AR"),null,"Do not copy anime profile details into the historical continuity.");
process.stdout.write("PASS character archive model: continuity, relations, moments, spoiler filtering and unavailable-evidence handling.\\n");

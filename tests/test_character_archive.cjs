const assert=require("node:assert/strict");
const fs=require("node:fs");
const path=require("node:path");
require("../src/official-character-roster.js");
const corpus=require("../src/lore-corpus.js");
const archive=require("../src/character-archive.js");
const root=path.join(__dirname,"..","lore","danmachi");
const catalog=JSON.parse(fs.readFileSync(path.join(root,"catalog.json"),"utf8"));
const paths=["research/inbox/BATCH-DM-003-era-oscura-y-personajes-multiepoca.md","research/inbox/BATCH-DM-004-psicologia-personajes-y-retrieval.md","research/inbox/BATCH-DM-005-astrea-familia-network.md","research/inbox/BATCH-DM-006-oficial-roster-y-retratos.md","research/inbox/BATCH-DM-010-astrea-departure-and-ryu-revenge.md","research/inbox/BATCH-DM-007-astrea-family-network-and-journey.md","research/inbox/BATCH-DM-013-dark-era-missing-characters.md","research/inbox/BATCH-DM-014-dark-era-temporal-boundaries.md","research/inbox/DANMACHI-RESEARCH-021-zeus-hera-familias.md"];
paths.push("research/inbox/DANMACHI-RESEARCH-013-soma-family-roster-and-dossiers.md");
paths.push("research/inbox/DANMACHI-RESEARCH-014-loki-familia-individual-dossiers.md");
const docs=paths.map(file=>({path:file,content:fs.readFileSync(path.join(root,file),"utf8")}));
const profilePaths=[
  "characters/ryuu-lion.md","characters/alise-lovelace.md","characters/astrea.md",
  "characters/bell-cranel.md","characters/hestia.md","characters/ais-wallenstein.md",
  "characters/eina-tulle.md","characters/finn-deimne.md","characters/freya.md",
  "characters/ottar.md","characters/gojouno-kaguya.md","characters/lyra.md",
  "characters/maryuu-reage.md","characters/ryana-lietz.md","characters/dark-era/meteria.md",
  "characters/dark-era/rudra.md","characters/dark-era/olivas-act.md"
];
const profileDocuments=profilePaths.map(file=>({path:file,content:fs.readFileSync(path.join(root,file),"utf8")}));
const index=corpus.buildIndex(catalog,docs,profileDocuments);
assert.equal(index.profileDocumentCount,17,"The archive should expose all 17 currently loaded structured dossiers, including the new batch.");
assert.equal(globalThis.WordWaifuOfficialCharacterRoster.list().length,59,"The official-source registry should include Eina Tulle alongside the expanded character catalog.");

const batch004=[
  ["CHAR-MARIYU-LEAGE","CONT-ANIME","DMR-006-CLM-154"],
  ["CHAR-RYANA-LIETZ","CONT-ANIME","DMR-006-CLM-151"],
  ["CHAR-METERIA","CONT-MAIN-LN","DMR-021-CLM-005"],
  ["CHAR-DARK-RUDRA","CONT-MAIN-LN","DMR-014-CLM-004"],
  ["CHAR-DARK-OLIVAS-ACT","CONT-SO","DMR-014-CLM-007"]
];
for(const [id,scope,claimId] of batch004){
  assert.ok(archive.list(index).some(character=>character.id===id),"New batch identity must appear in the archive directory: "+id);
  const item=archive.getProfile(index,id,scope,"all");
  assert.ok(item&&item.claims.some(claim=>claim.claimId===claimId),"New dossier must expose its continuity-scoped evidence: "+id+" / "+claimId);
}
const meteriaDetails=archive.getExtendedInfo("CHAR-METERIA","CONT-MAIN-LN",index);
assert.ok(meteriaDetails&&meteriaDetails.repositoryProfile&&meteriaDetails.repositoryProfile.sectionCount>0,"Structured Meteria dossier must open in the More Info view without a hand-written EXTENDED constant.");
assert.ok(meteriaDetails.sections.some(section=>section.title==="Relaciones"),"Meteria's documented relationships should be accessible in the detail view.");
assert.ok(meteriaDetails.references.some(reference=>reference.kind==="community"),"Secondary provenance should remain visible from the detail view.");
const rudraOutOfScope=archive.getExtendedInfo("CHAR-DARK-RUDRA","CONT-AR",index);
assert.ok(rudraOutOfScope.sections.some(section=>section.title==="Alcance de continuidad"),"A dossier from another continuity should expose a scope warning instead of leaking its narrative.");
assert.ok(rudraOutOfScope.sections[0].text.includes("CONT-MAIN-LN"),"The scope warning should state the actual documented continuity.");

assert.ok(globalThis.WordWaifuOfficialCharacterRoster.get("CHAR-LULUNE-LOUIE").imageUrl.endsWith("/rurune_zenshin.png"));
assert.equal(globalThis.WordWaifuOfficialCharacterRoster.get("CHAR-ASFI-AL-ANDROMEDA").voice,"Ai Kayano");
assert.equal(globalThis.WordWaifuOfficialCharacterRoster.get("CHAR-DIONYSUS").voice,"Masaya Matsukaze");
assert.ok(archive.list(index).length >= 58,"The directory should include the expanded S4/S5 and Sword Oratoria cast, beyond the 12 deep dossiers.");
const addedCast=["CHAR-DAPHNE-LAUROS","CHAR-CASSANDRA-ILION","CHAR-KASHIMA-OUKA","CHAR-HITACHI-CHIGUSA","CHAR-AISHA-BELKA","CHAR-LUVIS-LILIX","CHAR-DORMUL-BOLSTER","CHAR-MARI-XENOS","CHAR-NOIN-UNIC","CHAR-NEZE-RANKETT","CHAR-ASTA-KNOX","CHAR-RYANA-LIETZ","CHAR-CELTY-SROWA","CHAR-ISKA-BRA","CHAR-MARIYU-LEAGE","CHAR-LULUNE-LOUIE","CHAR-TSUBAKI-COLBRANDE"];
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
const kaguyaAr=archive.getProfile(index,"CHAR-KAGUYA","CONT-AR","all");
assert.ok(kaguyaAr,"Kaguya should resolve to an indexed character profile.");
assert.ok(kaguyaAr.relationships.some(r=>r.targetId==="CHAR-RYUU-LION"&&r.direction==="incoming"),"Ryu → Kaguya must be navigable backwards from Kaguya to Ryu.");
assert.equal(new Set(kaguyaAr.relationships.map(r=>r.targetId)).size,kaguyaAr.relationships.length,"Bidirectional traversal must not duplicate a destination already linked directly.");
assert.ok(kaguyaAr.relationships.every(r=>r.claims.length>0),"Every visible relationship must retain evidence in the selected continuity.");
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
assert.deepEqual(archive.list(index,{query:"Ryu"}).map(c=>c.id),["CHAR-RYUU-LION"],"A character-name search must not return other characters that only reference Ryu.");
assert.ok(ryu.availableContinuities.includes("CONT-MAIN-LN")&&ryu.missingContinuities.includes("CONT-AU"));
const ryuMain=archive.getProfile(index,"CHAR-RYUU-LION","CONT-MAIN-LN","all");
assert.ok(ryuMain.moments.some(m=>m.id==="ryu-astrea-departure"),"The archive should tell why Ryu asked Astrea to leave, with evidence status.");
assert.ok(ryuMain.moments.some(m=>m.id==="ryu-revenge-rampage"));
assert.ok(ryuMain.moments.some(m=>m.id==="ryu-rescue-and-recovery"));
assert.ok(ryuMain.moments.some(m=>m.id==="ryu-visit-astrea"));
const astreaMain=archive.getProfile(index,"CHAR-ASTREA","CONT-MAIN-LN","all");
assert.ok(astreaMain.moments.some(m=>m.id==="astrea-departure-from-orario"));
assert.ok(astreaMain.relationships.some(r=>r.targetId==="CHAR-RYUU-LION"));
assert.ok(archive.getExtendedInfo("CHAR-ASTREA","CONT-MAIN-LN").sections.some(s=>s.title.includes("Por qué salió de Orario")));
// Expanded character profiles consume existing curated claims rather than inventing data.
const directory=archive.list(index);
for(const id of ["DM-CHAR-BELL","DM-CHAR-HESTIA","DM-CHAR-AIS","DM-CHAR-EINA","CHAR-FINN-DEIMNE","CHAR-FREYA","CHAR-OTTAR"]){
  assert.ok(directory.some(character=>character.id===id),"Expected expanded archive record: "+id);
  const item=archive.getProfile(index,id,"CONT-ANIME","all");
  assert.ok(item&&item.claims.length>0,"Expanded character must expose source-backed claims: "+id);
}

const somaBatchIds=["CHAR-LILIRUCA-ARDE","CHAR-SOMA","CHAR-ZANIS-LUSTRA","CHAR-CHANDRA-IHIT","CHAR-CANOE-BELWAY","CHAR-TSUKINOKAMI-KAEDE","CHAR-SHINONOME-MOMIJI","CHAR-COCO-COLLINS"];
for(const id of somaBatchIds){
  assert.ok(archive.list(index).some(character=>character.id===id),"Soma batch must enter the searchable archive: "+id);
  const profile=archive.getProfile(index,id,"CONT-MAIN-LN","all");
  assert.ok(profile&&profile.claims.length>0,"Soma batch profile must retain source-linked claims: "+id);
}
const liliSomaProfile=archive.getProfile(index,"CHAR-LILIRUCA-ARDE","CONT-MAIN-LN","all");
assert.ok(liliSomaProfile.relationships.some(link=>link.targetId==="CHAR-SOMA"),"Lili must link to the historic Soma Familia affiliation.");
assert.ok(liliSomaProfile.relationships.some(link=>link.targetId==="CHAR-ZANIS-LUSTRA"),"Lili must link to the source-qualified Zanis conflict.");
assert.ok(liliSomaProfile.relationships.some(link=>link.targetId==="CHAR-CHANDRA-IHIT"),"Lili must link to Chandra's reported intervention.");
assert.ok(liliSomaProfile.relationships.some(link=>link.targetId==="CHAR-CANOE-BELWAY"),"Canoe's unresolved case must be navigable without asserting guilt.");
const liliAnimeProfile=archive.getProfile(index,"CHAR-LILIRUCA-ARDE","CONT-ANIME","all");
assert.ok(liliAnimeProfile.claims.some(claim=>claim.claimId==="DMR-013-CLM-010"),"Official adaptation evidence must support the separate Lili adaptation state.");
assert.ok(liliAnimeProfile.claims.every(claim=>claim.continuityScopes.includes("CONT-ANIME")),"The adaptation-only Lili claims must not leak into main-novel continuity.");
const somaProfile=archive.getProfile(index,"CHAR-SOMA","CONT-MAIN-LN","all");
assert.ok(somaProfile.relationships.some(link=>link.targetId==="CHAR-ZANIS-LUSTRA"),"Soma's archive profile should link to Zanis with a cited role.");
assert.ok(somaProfile.relationships.some(link=>link.targetId==="CHAR-TSUKINOKAMI-KAEDE"),"Roster-only members should be navigable as separate identities.");
const zanisProfile=archive.getProfile(index,"CHAR-ZANIS-LUSTRA","CONT-MAIN-LN","all");
assert.ok(zanisProfile.relationships.some(link=>link.targetId==="CHAR-CANOE-BELWAY"),"Zanis-to-Canoe is an allegation edge with explicit evidence limits.");


const lokiBatchIds=["CHAR-RIVERIA-LJOS-ALF","CHAR-GARETH-LANDROCK","CHAR-BETE-LOGA","CHAR-TIONA-HIRYUTE","CHAR-TIONE-HIRYUTE","CHAR-LEFIYA-VIRIDIS"];
for(const id of lokiBatchIds){
  assert.ok(archive.list(index).some(character=>character.id===id),"Loki batch must be exposed in the archive: "+id);
  const anime=archive.getProfile(index,id,"CONT-ANIME","all");
  assert.ok(anime&&anime.claims.some(claim=>/^DMR-014-CLM-00[1-6]$/.test(claim.claimId)),"Official adaptation claim must be searchable for "+id);
  assert.ok(anime.claims.every(claim=>claim.continuityScopes.includes("CONT-ANIME")),"Adaptation claims must stay in CONT-ANIME for "+id);
  const secondary=archive.getProfile(index,id,"CONT-SO","all");
  assert.ok(secondary&&secondary.claims.every(claim=>claim.continuityScopes.includes("CONT-SO")),"Secondary claims must stay in CONT-SO for "+id);
}
const riveriaArchive=archive.getProfile(index,"CHAR-RIVERIA-LJOS-ALF","CONT-ANIME","all");
assert.ok(riveriaArchive.relationships.some(link=>link.targetId==="CHAR-GARETH-LANDROCK"),"Riveria's team relation to Gareth must be navigable.");
const tionaArchive=archive.getProfile(index,"CHAR-TIONA-HIRYUTE","CONT-ANIME","all");
assert.ok(tionaArchive.relationships.some(link=>link.targetId==="CHAR-TIONE-HIRYUTE"),"Tiona and Tione must have an explicit reciprocal twin relationship.");
const tioneArchive=archive.getProfile(index,"CHAR-TIONE-HIRYUTE","CONT-ANIME","all");
assert.ok(tioneArchive.relationships.some(link=>link.targetId==="CHAR-FINN-DEIMNE"),"Tione's feelings for Finn must be sourced without assuming reciprocation.");
const lefiyaArchive=archive.getProfile(index,"CHAR-LEFIYA-VIRIDIS","CONT-SO","all");
assert.ok(lefiyaArchive.relationships.some(link=>link.targetId==="CHAR-RIVERIA-LJOS-ALF"),"Lefiya's secondary mentor relationship must be navigable under CONT-SO.");

const bell=archive.getProfile(index,"DM-CHAR-BELL","CONT-ANIME","all");
assert.ok(bell.relationships.length>=3,"Bell's source-backed relationship network should include Hestia, Ais and Eina.");
assert.ok(archive.getExtendedInfo("CHAR-RYUU-LION","CONT-AR").references.some(ref=>ref.url.includes("fandom.com/es/wiki/Ryuu_Lion")));
assert.ok(archive.getExtendedInfo("DM-CHAR-BELL","CONT-ANIME").sections.length>=2);
assert.equal(archive.getExtendedInfo("DM-CHAR-BELL","CONT-AR"),null,"Do not copy anime profile details into the historical continuity.");
process.stdout.write("PASS character archive model: continuity, relations, moments, spoiler filtering and unavailable-evidence handling.\\n");

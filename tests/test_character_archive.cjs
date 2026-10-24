const assert=require("node:assert/strict");
const fs=require("node:fs");
const path=require("node:path");
require("../src/official-character-roster.js");
const corpus=require("../src/lore-corpus.js");
const archive=require("../src/character-archive.js");
const root=path.join(__dirname,"..","lore","danmachi");
const catalog=JSON.parse(fs.readFileSync(path.join(root,"catalog.json"),"utf8"));
const paths=[
  "research/inbox/BATCH-DM-003-era-oscura-y-personajes-multiepoca.md",
  "research/inbox/BATCH-DM-004-psicologia-personajes-y-retrieval.md",
  "research/inbox/BATCH-DM-005-astrea-familia-network.md",
  "research/inbox/BATCH-DM-006-oficial-roster-y-retratos.md",
  "research/inbox/BATCH-DM-007-astrea-family-network-and-journey.md",
  "research/inbox/BATCH-DM-008-main-story-volume-map.md",
  "research/inbox/BATCH-DM-009-parallel-stories-and-chronicles.md",
  "research/inbox/DANMACHI-RESEARCH-010-hestia-familia-dossier.md",
  "research/inbox/DANMACHI-RESEARCH-011-loki-familia-dossier.md",
  "research/inbox/DANMACHI-RESEARCH-012-astrea-familia-dossier.md",
  "research/inbox/DANMACHI-RESEARCH-013-ryuu-v-and-war-game.md",
  "research/inbox/DANMACHI-RESEARCH-014-bell-opening-episode.md",
  "research/inbox/DANMACHI-RESEARCH-015-bell-hestia-first-meeting-publisher-synopsis.md",
  "research/inbox/DANMACHI-RESEARCH-016-eina-advisor-anime.md",
  "research/inbox/BATCH-DM-010-astrea-departure-and-ryu-revenge.md",
  "research/inbox/DANMACHI-RESEARCH-028-astrea-wiki-leads.md",
  "research/inbox/DANMACHI-RESEARCH-045-dark-era-characters-continuity-audit.md"
];
const docs=paths.map(file=>({path:file,content:fs.readFileSync(path.join(root,file),"utf8")}));
const profilePaths=[
  "characters/ryuu-lion.md","characters/alise-lovelace.md","characters/astrea.md",
  "characters/bell-cranel.md","characters/hestia.md","characters/ais-wallenstein.md",
  "characters/eina-tulle.md","characters/finn-deimne.md","characters/freya.md",
  "characters/ottar.md","characters/gojouno-kaguya.md","characters/lyra.md",
  "characters/dark-era/alfia.md","characters/dark-era/zald.md"
];
const profileDocuments=profilePaths.map(file=>({path:file,content:fs.readFileSync(path.join(root,file),"utf8")}));
const index=corpus.buildIndex(catalog,docs,profileDocuments);
assert.equal(index.profileDocumentCount,14,"The archive should retain the existing deeper dossiers and load the Alfia/Zald profiles used by Afterglow navigation tests.");
assert.equal(globalThis.WordWaifuOfficialCharacterRoster.list().length,63,"The official-source registry should include Eina Tulle and four separately navigable Gulliver siblings.");
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
assert.ok(kaguyaAr.relationships.some(r=>r.targetId==="CHAR-RYUU-LION"&&r.direction==="incoming"&&r.claims.some(c=>c.claimId==="DMR-028-CLM-003")),"Kaguya archive must expose the wiki-derived moral-disagreement claim on the existing incoming Ryu relationship.");
assert.equal(new Set(kaguyaAr.relationships.map(r=>r.targetId)).size,kaguyaAr.relationships.length,"Bidirectional traversal must not duplicate a destination already linked directly.");
assert.ok(kaguyaAr.relationships.every(r=>r.claims.length>0),"Every visible relationship must retain evidence in the selected continuity.");
assert.ok(!ryu.claims.some(c=>c.entryId.endsWith("--CONT-ANIME")));
const ryuAnime=archive.getProfile(index,"CHAR-RYUU-LION","CONT-ANIME","all");
assert.ok(ryuAnime.claims.length&&ryuAnime.claims.every(c=>c.continuityScopes.includes("CONT-ANIME")));
assert.ok(ryuAnime.relationships.some(r=>r.targetId==="DM-CHAR-BELL"&&r.edgeId==="REL-RYU-BELL-RETURN-ANIME"&&r.claims.some(c=>c.claimId==="DMR-013-CLM-001")),
  "Ryu archive profile must show the catalog-backed shared-return relation in the anime continuity.");
assert.ok(ryuAnime.relationships.some(r=>r.targetId==="CHAR-ASTREA"&&r.edgeId==="REL-RYU-ASTREA-VISIT-ANIME"&&r.claims.some(c=>c.claimId==="DMR-013-CLM-002")),
  "Ryu archive profile must show her anime visit to Astrea with a supporting claim.");
const ryuWarGameRelation=ryuAnime.relationships.find(r=>r.targetId==="EVT-DM-RYUU-ASTREA-RETURN-ANIME-001");
assert.ok(ryuWarGameRelation&&ryuWarGameRelation.targetType==="dossier"&&ryuWarGameRelation.targetPath==="events/candidates/EVT-DM-RYUU-ASTREA-RETURN-ANIME-001.md"&&ryuWarGameRelation.available,
  "Character archive relations must provide a navigable event-dossier target instead of an unavailable dead end.");
const alfiaAfterglow=archive.getProfile(index,"CHAR-DARK-ALFIA","CONT-MAIN-LN","all");
const alfiaAfterglowRelation=alfiaAfterglow.relationships.find(r=>r.edgeId==="REL-ALFIA-V20-AFTERGLOW-LEAD");
assert.ok(alfiaAfterglowRelation&&alfiaAfterglowRelation.targetId==="EVT-DM-V20-AFTERGLOW-LEGACY-LEAD-001"&&alfiaAfterglowRelation.targetType==="dossier"&&alfiaAfterglowRelation.targetPath==="events/candidates/EVT-DM-V20-AFTERGLOW-LEGACY-LEAD-001.md"&&alfiaAfterglowRelation.available,
  "Alfia's archive profile must offer a working event-dossier route for the secondary Afterglow lead.");
assert.ok(alfiaAfterglowRelation.evidenceStatus==="secondary_checked"&&alfiaAfterglowRelation.claims.some(c=>c.claimId==="DMR-045-CLM-016"&&c.verificationStatus==="secondary_checked"),
  "The Afterglow event route must preserve the secondary-evidence badge and supporting claim.");
const zaldAfterglow=archive.getProfile(index,"CHAR-DARK-ZALD","CONT-MAIN-LN","all");
const zaldAfterglowRelation=zaldAfterglow.relationships.find(r=>r.edgeId==="REL-ZALD-V20-AFTERGLOW-LEAD");
assert.ok(zaldAfterglowRelation&&zaldAfterglowRelation.targetId==="EVT-DM-V20-AFTERGLOW-LEGACY-LEAD-001"&&zaldAfterglowRelation.targetPath==="events/candidates/EVT-DM-V20-AFTERGLOW-LEGACY-LEAD-001.md"&&zaldAfterglowRelation.claims.some(c=>c.claimId==="DMR-045-CLM-016"),
  "Zald's archive profile must reach the same event dossier while keeping the source claim attached.");
const alfiaAuthorContext = archive.getProfile(index,"CHAR-DARK-ALFIA","CONT-AR","all");
const zaldAuthorContext = archive.getProfile(index,"CHAR-DARK-ZALD","CONT-AR","all");
for (const [name,profile] of [["Alfia",alfiaAuthorContext],["Zald",zaldAuthorContext]]) {
  const claim = profile.claims.find(c=>c.claimId==="DMR-045-CLM-017");
  assert.ok(claim && claim.continuityScopes.includes("CONT-AR") && claim.sourceUrls.includes("https://dengekionline.com/articles/189750/"), name + "'s archive profile must surface the authorial provenance claim with its source and continuity.");
}
assert.ok(ryuAnime.relationships.every(r=>r.claims.length>0&&r.continuity==="CONT-ANIME"),
  "Catalog-backed archive relationships must preserve evidence and the selected continuity.");
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
assert.ok(ryu.relationships.some(r=>r.targetId==="CHAR-KAGUYA"&&r.edgeId==="REL-RYU-KAGUYA-AR-ROSTER-SECONDARY"&&r.evidenceStatus==="secondary_checked"&&r.claims.some(c=>c.claimId==="DMR-007-CLM-005")));
assert.ok(ryu.relationships.some(r=>r.targetId==="CHAR-LYRA"&&r.edgeId==="REL-RYU-LYRA-AR-ROSTER-SECONDARY"&&r.evidenceStatus==="secondary_checked"&&r.claims.some(c=>c.claimId==="DMR-007-CLM-005")));
const kaguya=archive.getProfile(index,"CHAR-KAGUYA","CONT-AR","all");
assert.ok(kaguya.claims.some(c=>c.claimId==="DMR-003-CLM-001"));
assert.ok(archive.getExtendedInfo("CHAR-KAGUYA","CONT-AR").references.some(ref=>ref.kind==="community"));
const extendedRyu=archive.getExtendedInfo("CHAR-RYUU-LION","CONT-AR",index);
assert.ok(extendedRyu.repositoryProfile&&extendedRyu.repositoryProfile.sectionCount>0,
  "The More Info window must recover the pre-existing character dossier.");
assert.ok(extendedRyu.sections.some(section=>section.title.includes("Estado temporal A")));
const syntheticIndex={...index,profileDetails:{...index.profileDetails,"CHAR-RYUU-LION":{
  ...index.profileDetails["CHAR-RYUU-LION"],
  sections:[
    ...index.profileDetails["CHAR-RYUU-LION"].sections,
    {heading:"Perfil oficial del anime",text:"SYNTHETIC-ANIME-ONLY-CONTENT"},
    {heading:"Pistas secundarias de historia, magia y relaciones · CONT-AR",text:"SYNTHETIC-CONT-AR-ONLY-CONTENT"},
    {heading:"Nota comparativa · CONT-AR / CONT-MAIN-LN",text:"SYNTHETIC-AR-MAIN-CONTENT"}
  ]
}}};
const syntheticHistorical=archive.getExtendedInfo("CHAR-RYUU-LION","CONT-AR",syntheticIndex);
assert.ok(!syntheticHistorical.sections.some(section=>section.title==="Perfil oficial del anime"),
  "Standalone anime-only headings must not leak into the historical CONT-AR dossier.");
const syntheticAnime=archive.getExtendedInfo("CHAR-RYUU-LION","CONT-ANIME",syntheticIndex);
assert.ok(syntheticAnime.sections.some(section=>section.title==="Perfil oficial del anime"),
  "The anime dossier must retain its own standalone localized heading.");
const taggedHistorical=archive.getExtendedInfo("CHAR-RYUU-LION","CONT-AR",syntheticIndex);
assert.ok(taggedHistorical.sections.some(section=>section.title==="Pistas secundarias de historia, magia y relaciones · CONT-AR"),
  "A Spanish historical section labelled CONT-AR must be visible in the historical profile.");
assert.ok(!taggedHistorical.sections.some(section=>section.title==="Perfil oficial del anime"),
  "A section tagged as anime must not leak into the historical profile.");
assert.ok(taggedHistorical.sections.some(section=>section.title==="Nota comparativa · CONT-AR / CONT-MAIN-LN"),
  "A section explicitly shared by historical and main-novel continuity should remain available to either scope.");
assert.ok(!syntheticAnime.sections.some(section=>section.title==="Pistas secundarias de historia, magia y relaciones · CONT-AR"),
  "A Spanish historical section tagged CONT-AR must not leak into the anime profile.");
assert.ok(!syntheticAnime.sections.some(section=>section.title==="Nota comparativa · CONT-AR / CONT-MAIN-LN"),
  "A section tagged only for CONT-AR and CONT-MAIN-LN must not leak into the anime profile.");


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
const bellMain=archive.getProfile(index,"DM-CHAR-BELL","CONT-MAIN-LN","all");
assert.ok(bellMain.relationships.some(r=>r.edgeId==="REL-BELL-MEETS-HESTIA-NOVEL-SYNOPSIS"&&r.targetId==="DM-CHAR-HESTIA"&&r.claims.some(c=>c.claimId==="DMR-015-CLM-001")),
  "The official volume-one synopsis must expose the main-novel Bell-Hestia meeting relation in the archive.");
assert.ok(bellMain.relationships.some(r=>r.edgeId==="REL-BELL-V21-LEARNS-EXPEDITION-FAILURE"&&r.targetType==="dossier"&&r.evidenceStatus==="provisional_summary"),
  "Bell's main-novel archive must link to the Volume 21 event while retaining synopsis-only evidence.");
assert.ok(bellMain.relationships.some(r=>r.edgeId==="REL-BELL-V21-ASKS-ABOUT-EXPEDITION"&&r.evidenceStatus==="source_checked_excerpt_only"),
  "The visible chapter excerpt relation must remain labeled excerpt-only in the archive.");
const finnMain=archive.getProfile(index,"CHAR-FINN-DEIMNE","CONT-MAIN-LN","all");
assert.ok(finnMain.relationships.some(r=>r.edgeId==="REL-FINN-V21-STATUS-INQUIRY"&&r.targetType==="dossier"&&r.claims.some(c=>c.claimId==="DMR-008-CLM-025")),
  "Finn's archive profile must offer a path to the event where Bell asks about the expedition.");
const aisMain=archive.getProfile(index,"DM-CHAR-AIS","CONT-MAIN-LN","all");
assert.ok(aisMain.relationships.some(r=>r.edgeId==="REL-AIS-V21-PROLOGUE-EXCERPT"&&r.targetPath==="events/candidates/EVT-DM-V21-EXPEDITION-RESCUE-001.md"),
  "Ais's archive profile must link to the Volume 21 prologue excerpt dossier.");
const bell=archive.getProfile(index,"DM-CHAR-BELL","CONT-ANIME","all");
assert.ok(bell.relationships.length>=3,"Bell's source-backed relationship network should include Hestia, Ais and Eina.");
assert.ok(archive.getExtendedInfo("CHAR-RYUU-LION","CONT-AR").references.some(ref=>ref.url.includes("fandom.com/es/wiki/Ryuu_Lion")));
assert.ok(archive.getExtendedInfo("DM-CHAR-BELL","CONT-ANIME").sections.length>=2);
assert.equal(archive.getExtendedInfo("DM-CHAR-BELL","CONT-AR"),null,"Do not copy anime profile details into the historical continuity.");
process.stdout.write("PASS character archive model: continuity, relations, moments, spoiler filtering and unavailable-evidence handling.\\n");

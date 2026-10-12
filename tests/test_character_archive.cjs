const assert=require("node:assert/strict");
const fs=require("node:fs");
const path=require("node:path");
const corpus=require("../src/lore-corpus.js");
const archive=require("../src/character-archive.js");
const root=path.join(__dirname,"..","lore","danmachi");
const catalog=JSON.parse(fs.readFileSync(path.join(root,"catalog.json"),"utf8"));
const paths=["research/inbox/BATCH-DM-003-era-oscura-y-personajes-multiepoca.md","research/inbox/BATCH-DM-004-psicologia-personajes-y-retrieval.md","research/inbox/BATCH-DM-005-astrea-familia-network.md"];
const docs=paths.map(file=>({path:file,content:fs.readFileSync(path.join(root,file),"utf8")}));
const profilePaths=[
  "characters/ryuu-lion.md","characters/alise-lovelace.md","characters/astrea.md",
  "characters/bell-cranel.md","characters/hestia.md","characters/ais-wallenstein.md",
  "characters/eina-tulle.md","characters/finn-deimne.md","characters/freya.md",
  "characters/ottar.md","characters/gojouno-kaguya.md","characters/lyra.md"
];
const profileDocuments=profilePaths.map(file=>({path:file,content:fs.readFileSync(path.join(root,file),"utf8")}));
const index=corpus.buildIndex(catalog,docs,profileDocuments);
assert.equal(index.profileDocumentCount,12,"The archive should expose the 12 existing detailed character files.");
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
assert.ok(extendedRyu.sections.some(section=>section.title.includes("Temporal state A")));
assert.ok(!extendedRyu.sections.some(section=>section.title.includes("Temporal state B")),
  "Anime-only temporal-state details must not leak into the historical Ryu summary.");
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
assert.ok(archive.getExtendedInfo("CHAR-RYUU-LION","CONT-AR").references.some(ref=>ref.url.includes("fandom.com/es/wiki/Ryuu_Lion")));
assert.ok(archive.getExtendedInfo("DM-CHAR-BELL","CONT-ANIME").sections.length>=2);
assert.equal(archive.getExtendedInfo("DM-CHAR-BELL","CONT-AR"),null,"Do not copy anime profile details into the historical continuity.");
process.stdout.write("PASS character archive model: continuity, relations, moments, spoiler filtering and unavailable-evidence handling.\\n");

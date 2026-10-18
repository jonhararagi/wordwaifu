const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const corpus = require("../src/lore-corpus.js");
const root = path.join(__dirname, "..", "lore", "danmachi");
const catalog = JSON.parse(fs.readFileSync(path.join(root, "catalog.json"), "utf8"));
const documentPaths = [
  "research/inbox/BATCH-DM-003-era-oscura-y-personajes-multiepoca.md",
  "research/inbox/BATCH-DM-004-psicologia-personajes-y-retrieval.md",
  "research/inbox/BATCH-DM-005-astrea-familia-network.md",
  "research/inbox/BATCH-DM-008-main-story-volume-map.md",
  "research/inbox/BATCH-DM-009-parallel-stories-and-chronicles.md",
  "research/inbox/BATCH-DM-010-astrea-departure-and-ryu-revenge.md",
  "research/inbox/DANMACHI-RESEARCH-010-hestia-familia-dossier.md",
  "research/inbox/DANMACHI-RESEARCH-011-loki-familia-dossier.md",
  "research/inbox/DANMACHI-RESEARCH-012-astrea-familia-dossier.md",
  "research/inbox/DANMACHI-RESEARCH-013-ryuu-v-and-war-game.md",
  "research/inbox/DANMACHI-RESEARCH-014-bell-opening-episode.md",
  "research/inbox/DANMACHI-RESEARCH-015-bell-hestia-first-meeting-publisher-synopsis.md",
  "research/inbox/DANMACHI-RESEARCH-016-eina-advisor-anime.md",
  "research/inbox/DANMACHI-RESEARCH-025-soma-relationship-network.md"
];
const documents = documentPaths.map(file => ({ path: file, content: fs.readFileSync(path.join(root, file), "utf8") }));
const index = corpus.buildIndex(catalog, documents);
const familyEntities = corpus.searchEntities(catalog, { type: "familia" });
assert.ok(Array.isArray(index.entityRecords), "Loaded lore index must expose typed catalog entities for the UI.");
assert.ok(Array.isArray(index.relationships), "Loaded lore index must expose source-backed relationship edges.");
assert.ok(index.relationships.length >= 47, "The graph must retain the Astrea/Hestia edges and the newly source-backed Loki Family network.");
assert.ok(index.relationships.some(edge => edge.id === "REL-RIVERIA-VICECAPTAIN-LOKI-FAM" && edge.claimRef === "DMR-005-CLM-003" && edge.continuity === "CONT-SO"), "Riveria's vicecaptain relationship must be explicitly linked to the Sword Oratoria claim.");
assert.ok(index.relationships.some(edge => edge.id === "REL-TIONA-TIONE-TWINS" && edge.claimRef === "DMR-005-CLM-006"), "Twin-sister relationship must have its own evidence-backed edge.");
assert.ok(index.relationships.some(edge => edge.id === "REL-LEFIYA-ADMIRES-AIS" && edge.continuity === "CONT-SO"), "Lefiya's admiration for Ais must be explicit and continuity-scoped.");
assert.ok(index.relationships.length >= 70, "The graph must retain the sourced story paths, cross-continuity Zeus/Hera edges, Volume 21 rescue links, and the new Astrea Record route.");
assert.ok(index.relationships.some(edge => edge.id === "REL-RAUL-FINN-DELEGATED-COMMAND" && edge.claimRef === "DMR-005-CLM-008"), "Raul's delegated coordination role must link to the official claim.");
assert.deepEqual(corpus.searchEntities(catalog, { type: "character", query: "Raul Nord" }).results.map(entity => entity.id), ["CHAR-RAUL-NOORD"], "Raul must be individually discoverable.");
assert.ok(index.relationships.some(edge => edge.id === "REL-RYU-BELL-RETURN-ANIME" && edge.continuity === "CONT-ANIME" && edge.claimRef === "DMR-013-CLM-001"), "Ryu and Bell shared-return edge must be explicit and adaptation-scoped.");
assert.ok(index.relationships.some(edge => edge.id === "REL-RYU-ASTREA-VISIT-ANIME" && edge.continuity === "CONT-ANIME" && edge.claimRef === "DMR-013-CLM-002"), "Ryu visit to Astrea in the anime must remain separate from the novel relation.");
assert.ok(index.relationships.some(edge => edge.id === "REL-RYU-WARGAME-ANIME" && edge.to === "EVT-DM-RYUU-ASTREA-RETURN-ANIME-001"), "Ryu War Game participation must link to a navigable event record.");
assert.ok(index.relationships.some(edge => edge.id === "REL-BELL-ONLY-FOLLOWER-HESTIA-ANIME" && edge.continuity === "CONT-ANIME" && edge.claimRef === "DMR-014-CLM-001"), "Bell and Hestia opening-family state must be explicit and adaptation-scoped.");
assert.ok(index.relationships.some(edge => edge.id === "REL-BELL-OPENING-CRISIS-ANIME" && edge.to === "EVT-DM-BELL-OPENING-CRISIS-ANIME-001" && edge.claimRef === "DMR-014-CLM-002"), "Bell opening Dungeon crisis must link to its own source-backed event.");
assert.ok(index.relationships.some(edge => edge.id === "REL-BELL-MEETS-HESTIA-NOVEL-SYNOPSIS" && edge.continuity === "CONT-MAIN-LN" && edge.claimRef === "DMR-015-CLM-001"), "The main-novel Bell-Hestia meeting must be explicit and backed by the official publisher synopsis.");
assert.ok(index.relationships.some(edge => edge.id === "REL-EINA-ADVISOR-BELL-ANIME" && edge.continuity === "CONT-ANIME" && edge.claimRef === "DMR-016-CLM-001"), "Eina must link to Bell as assigned advisor in the official adaptation.");
assert.ok(index.relationships.some(edge => edge.id === "REL-EINA-WORKS-GUILD-ANIME" && edge.to === "DM-GUILD-001" && edge.continuity === "CONT-ANIME"), "Eina's role at the Guild must be navigable as a separate institutional relation.");
assert.ok(index.relationships.some(edge => edge.id === "REL-ZEUS-FAM-GREAT-QUESTS" && edge.continuity === "CROSS-CONTINUITY" && edge.claimRef === "DMR-008-CLM-027"), "The official joint Zeus/Hera historical result must use an explicit cross-continuity relation scope.");
assert.ok(index.relationships.some(edge => edge.id === "REL-HERA-FAM-GREAT-QUESTS" && edge.continuity === "CROSS-CONTINUITY" && edge.claimRef === "DMR-008-CLM-027"), "Hera Familia must link to the same joint historical event without inventing an individual monster attribution.");
assert.ok(index.relationships.some(edge => edge.id === "REL-RYU-KAGUYA-AR-ROSTER-SECONDARY" && edge.continuity === "CONT-AR" && edge.evidenceStatus === "secondary_checked" && edge.claimRef === "DMR-007-CLM-005"), "The historical Ryu-Kaguya roster edge must stay secondary and explicitly claim-linked.");
assert.ok(index.relationships.some(edge => edge.id === "REL-RYU-LYRA-AR-ROSTER-SECONDARY" && edge.continuity === "CONT-AR" && edge.evidenceStatus === "secondary_checked" && edge.claimRef === "DMR-007-CLM-005"), "The historical Ryu-Lyra roster edge must stay secondary and explicitly claim-linked.");
assert.ok(index.relationships.some(edge => edge.id === "REL-ASTREA-RECORD-FOUNDATIONS" && edge.to === "EVT-DM-ASTREA-RECORD-FOUNDATIONS-001" && edge.continuity === "CONT-AR" && edge.claimRef === "DMR-012-CLM-001"), "Astrea Familia must link to an official-synopsis historical event in CONT-AR.");
assert.ok(index.relationships.some(edge => edge.id === "REL-RYU-SEEK-JUSTICE-ASTREA-AR" && edge.to === "CHAR-ASTREA" && edge.continuity === "CONT-AR" && edge.claimRef === "DMR-012-CLM-002"), "Ryu's historical search for justice under Astrea must remain distinct from her later main-novel/anime visits.");
assert.ok(index.relationships.some(edge => edge.id === "REL-ALISE-LEADS-ASTREA-RECORD-AR" && edge.to === "EVT-DM-ASTREA-RECORD-FOUNDATIONS-001" && edge.continuity === "CONT-AR" && edge.claimRef === "DMR-012-CLM-003"), "Alise's captain/guide role must link to the historical route without inventing scene-level details.");
assert.ok(index.relationships.some(edge => edge.id === "REL-RYU-AR-LOSSES-EVILUS" && edge.to === "EVT-DM-ASTREA-RECORD-FOUNDATIONS-001" && edge.evidenceStatus === "source_checked" && edge.claimRef === "DMR-012-CLM-004"), "The Astrea Record conflict summary must remain sourced but incomplete.");

assert.ok(index.relationships.some(edge => edge.id === "REL-LOKI-V21-EXPEDITION-FAILURE" && edge.to === "EVT-DM-V21-EXPEDITION-RESCUE-001" && edge.evidenceStatus === "provisional_summary" && edge.claimRef === "DMR-008-CLM-022"), "Volume 21 expedition relation must preserve synopsis-only evidence status.");
assert.ok(index.relationships.some(edge => edge.id === "REL-BELL-V21-LEARNS-EXPEDITION-FAILURE" && edge.evidenceStatus === "provisional_summary" && edge.claimRef === "DMR-008-CLM-024"), "Bell receiving news from the volume 21 synopsis must remain provisional-summary evidence.");
assert.ok(index.relationships.some(edge => edge.id === "REL-BELL-V21-ASKS-ABOUT-EXPEDITION" && edge.evidenceStatus === "source_checked_excerpt_only" && edge.claimRef === "DMR-008-CLM-025"), "Bell's urgent questions must remain limited to the publicly visible chapter excerpt.");
assert.ok(index.relationships.some(edge => edge.id === "REL-FINN-V21-STATUS-INQUIRY" && edge.evidenceStatus === "source_checked_excerpt_only" && edge.claimRef === "DMR-008-CLM-025"), "Finn's mention must not be promoted beyond the excerpt.");
assert.ok(index.relationships.some(edge => edge.id === "REL-AIS-V21-PROLOGUE-EXCERPT" && edge.evidenceStatus === "source_checked_excerpt_only" && edge.claimRef === "DMR-008-CLM-026"), "Ais's prologue excerpt must retain excerpt-only evidence scope.");

const riveriaSearch = corpus.searchEntities(catalog, { type: "character", query: "Riveria Ljos Alf" });
assert.deepEqual(riveriaSearch.results.map(entity => entity.id), ["CHAR-RIVERIA-LJOS-ALF"], "Riveria must be an active individual catalog record, not only part of a group dossier.");
for (const id of ["CHAR-RIVERIA-LJOS-ALF","CHAR-GARETH-LANDROCK","CHAR-LEFIYA-VIRIDIS","CHAR-TIONA-HIRYUTE","CHAR-TIONE-HIRYUTE","CHAR-BETE-LOGA"]) {
  assert.ok(catalog.records.some(record => record.id === id), "Loki supporting character must be activated in catalog: " + id);
  assert.ok(!catalog.reservedIds.some(candidate => (typeof candidate === "string" ? candidate : candidate.id) === id), "Active character must no longer be reserved: " + id);
}
assert.equal(new Set(index.relationships.map(edge => edge.id)).size, index.relationships.length, "Relationship IDs must be unique.");
for (const edge of index.relationships) {
  if (/(?:secondary|community|unverified|lead)/i.test(edge.evidenceType || "")) {
    assert.notEqual(edge.evidenceStatus, "source_checked", "Secondary/community leads must not be promoted to primary-source checked: " + edge.id);
  }
}
assert.ok(index.relationships.some(edge => edge.id === "REL-RYU-KAGUYA" && edge.continuity === "CONT-ANIME" && edge.claimRef === "DMR-007-CLM-002"), "Ryu–Kaguya friction and respect must be an explicit, continuity-scoped edge.");
assert.ok(index.relationships.some(edge => edge.id === "REL-RYU-ASTREA-DEPARTURE-SECONDARY" && ["secondary_checked", "pending_verification"].includes(edge.evidenceStatus) && edge.evidenceStatus !== "source_checked"), "The disputed departure motive must stay secondary or pending, never promoted to canon without primary evidence.");
assert.equal(new Set(index.relationships.map(edge => edge.id)).size, index.relationships.length);
for (const id of ["CHAR-LILIRUCA-ARDE","CHAR-WELF-CROZZO","CHAR-MIKOTO-YAMATO","CHAR-SANJOUNO-HARUHIME"]) {
  const entity = index.entityRecords.find(record => record.id === id);
  assert.ok(entity && entity.path.startsWith("characters/"), "Hestia Familia supporting character must have a navigable dossier: " + id);
  assert.ok(!catalog.reservedIds.some(candidate => candidate.id === id), "Activated character ID must no longer remain reserved: " + id);
}
for (const id of ["REL-LILI-MEMBER-HESTIA","REL-WELF-MEMBER-HESTIA","REL-MIKOTO-MEMBER-HESTIA","REL-HARUHIME-MEMBER-HESTIA","REL-HARUHIME-ADMIRES-BELL"]) {
  assert.ok(index.relationships.some(edge => edge.id === id && edge.evidenceStatus === "source_checked"), "Officially sourced supporting-character edge must be available: " + id);
}
assert.ok(index.entityRecords.some(entity => entity.id === "DM-FAM-HESTIA"));
assert.equal(catalog.records.find(record => record.id === "DM-FAM-HESTIA").status, "source_checked_partial", "The Hestia Familia dossier has six source-linked claims and must not regress to draft.");
assert.ok(familyEntities.totalMatches >= 3, "Typed entity search must expose the Familia catalog records.");
assert.ok(familyEntities.results.every(entity => entity.type === "familia"), "Familia filter must not leak characters or events.");
assert.ok(familyEntities.results.some(entity => entity.id === "DM-FAM-HESTIA"));
assert.ok(familyEntities.results.some(entity => entity.id === "DM-FAM-LOKI"));
assert.ok(familyEntities.results.some(entity => entity.id === "DM-FAM-ASTREA"));
const astreaEntity = corpus.searchEntities(catalog, { entityType: "familia", query: "Astrea" });
assert.deepEqual(astreaEntity.results.map(entity => entity.id), ["DM-FAM-ASTREA"], "Entity query must locate Astrea Familia by its catalog tag.");
assert.equal(corpus.searchEntities(catalog, { type: "familia", query: "no existe esta familia" }).abstain, true);
assert.equal(corpus.searchEntities(catalog, { type: "unknown" }).abstain, true);
assert.equal(corpus.searchEntities(catalog, { type: "character_group" }).error, undefined, "Underscored catalog type aliases must normalize consistently.");
assert.equal(corpus.searchEntities(catalog, { type: "deity_character" }).error, undefined);
assert.equal(index.sourceClaimCount, 113);
assert.equal(index.entryCount, 116);
const astreaTimelineClaim = corpus.search(index, { query: "Astrea Record siete años", continuity: "CONT-AR", period: "ALL", aspect: "all", spoiler: "all" });
assert.ok(astreaTimelineClaim.results.some(claim => claim.claimId === "DMR-011-CLM-001"), "Official relative chronology must be searchable.");
const volume21Boundary = corpus.search(index, { query: "volumen 21 publicado", continuity: "CONT-MAIN-LN", period: "ALL", aspect: "all", spoiler: "all" });
assert.ok(volume21Boundary.results.some(claim => claim.claimId === "DMR-011-CLM-002"), "Latest published main volume boundary must be searchable.");
const volume22Boundary = corpus.search(index, { query: "volumen 22 anunciado", continuity: "CONT-MAIN-LN", period: "ALL", aspect: "all", spoiler: "all" });
assert.ok(volume22Boundary.results.some(claim => claim.claimId === "DMR-011-CLM-003"), "Future publication must not be mistaken for a released volume.");
const volume21Expedition = corpus.search(index, { query: "Loki Familia expedición piso 60 Ais", continuity: "CONT-MAIN-LN", period: "ALL", aspect: "all", spoiler: "all" });
assert.ok(volume21Expedition.results.some(claim => claim.claimId === "DMR-008-CLM-022"), "Volume 21 publisher synopsis must expose the stranded expedition claim.");
const volume21Rescue = corpus.search(index, { query: "Orario movilización rescate", continuity: "CONT-MAIN-LN", period: "ALL", aspect: "all", spoiler: "all" });
assert.ok(volume21Rescue.results.some(claim => claim.claimId === "DMR-008-CLM-023"), "Volume 21 publisher synopsis must expose the city-wide rescue response.");
const volume21Bell = corpus.search(index, { query: "Bell regresa norte noticia expedición", continuity: "CONT-MAIN-LN", period: "ALL", aspect: "all", spoiler: "all" });
assert.ok(volume21Bell.results.some(claim => claim.claimId === "DMR-008-CLM-024"), "Volume 21 publisher synopsis must expose Bell's return and the news he receives.");
const volume21ChapterOne = corpus.search(index, { query: "expedición fracasó piso 60 Finn Ais", continuity: "CONT-MAIN-LN", period: "ALL", aspect: "all", spoiler: "all" });
assert.ok(volume21ChapterOne.results.some(claim => claim.claimId === "DMR-008-CLM-025"), "Volume 21 chapter-one excerpt must be retrievable as excerpt-only primary evidence.");
const volume21Prologue = corpus.search(index, { query: "Ais prólogo oscuridad jaula hielo", continuity: "CONT-MAIN-LN", period: "ALL", aspect: "all", spoiler: "all" });
assert.ok(volume21Prologue.results.some(claim => claim.claimId === "DMR-008-CLM-026"), "Volume 21 prologue excerpt must be retrievable as excerpt-only primary evidence.");
const ancientFamilias = corpus.search(index, { query: "Zeus Hera Behemoth Leviathan tres grandes misiones", continuity: "ALL", period: "ALL", aspect: "all", spoiler: "all" });
assert.ok(ancientFamilias.results.some(claim => claim.claimId === "DMR-008-CLM-027"), "Official franchise reference must expose the Zeus/Hera Behemoth and Leviathan result without overclaiming Black Dragon details.");
const crossContinuityGreatQuests = corpus.search(index, { query: "Zeus Hera Behemoth Leviathan", continuity: "CROSS-CONTINUITY", period: "ALL", aspect: "all", spoiler: "all" });
assert.ok(crossContinuityGreatQuests.results.some(claim => claim.claimId === "DMR-008-CLM-027"), "The search engine must support cross-continuity claims as a distinct scope.");



assert.ok(index.relationships.some(edge => edge.id === "REL-SOMA-PATRON-SOMA-FAM" && edge.from === "CHAR-SOMA" && edge.to === "FAM-SOMA" && edge.claimRef === "DMR-025-CLM-001" && edge.evidenceStatus === "secondary_checked"), "Soma's relationship to Soma Familia must be navigable and remain secondary.");
assert.ok(index.relationships.some(edge => edge.id === "REL-LILI-CAPTURED-SOMA-FAM-V6" && edge.claimRef === "DMR-025-CLM-002" && edge.evidenceStatus === "source_checked_excerpt_only"), "The volume 6 publisher synopsis must not be presented as full-text chapter evidence.");
assert.ok(index.relationships.some(edge => edge.id === "REL-ZANIS-CHANDRA-CAPTAINCY-SUCCESSION" && edge.claimRef === "DMR-025-CLM-005" && edge.evidenceStatus === "secondary_checked"), "Zanis-to-Chandra succession must be marked as a secondary report, not a personal feud.");
assert.ok(index.relationships.some(edge => edge.id === "REL-ZANIS-ACCUSATION-LILI-CANOE" && edge.claimRef === "DMR-025-CLM-006" && edge.evidenceStatus === "secondary_checked"), "The reported Canoe accusation must be reachable without becoming a verdict of guilt.");
assert.ok(index.relationships.some(edge => edge.id === "REL-CHANDRA-HELPS-LILI-SECONDARY" && edge.claimRef === "DMR-025-CLM-009"), "Chandra's reported intervention must be a separate, qualified relationship.");
assert.ok(catalog.records.some(record => record.id === "FAM-SOMA" && record.path === "familias/soma-familia.md"), "Soma Familia must be an active navigable catalog entity.");
assert.equal(catalog.reservedIds.some(candidate => (typeof candidate === "string" ? candidate : candidate.id) === "CHAR-SOMA"), false, "Activated Soma ID must no longer remain reserved.");
assert.equal(catalog.reservedIds.some(candidate => (typeof candidate === "string" ? candidate : candidate.id) === "FAM-SOMA"), false, "Activated Soma Familia ID must no longer remain reserved.");
const somaSearch = corpus.search(index, { query: "Soma bebida divina Familia", continuity: "CONT-MAIN-LN", period: "ALL", aspect: "all", spoiler: "all" });
assert.ok(somaSearch.results.some(claim => claim.claimId === "DMR-025-CLM-007"), "The official volume 2 synopsis claim must be searchable.");
const somaCaptureSearch = corpus.search(index, { query: "Liliruca capturada Soma Familia War Game", continuity: "CONT-MAIN-LN", period: "ALL", aspect: "all", spoiler: "all" });
assert.ok(somaCaptureSearch.results.some(claim => claim.claimId === "DMR-025-CLM-002"), "The volume 6 capture context must be searchable as excerpt-only evidence.");

assert.ok(index.claims.every(claim => claim.claimId && claim.entryId && claim.claim && claim.sourceIds.length));
assert.equal(new Set(index.claims.map(claim => claim.entryId)).size, index.claims.length);
const historicalRyu = corpus.search(index, { query: "Ryu", characterId: "CHAR-RYUU-LION", continuity: "CONT-AR", period: "ASTREA_RECORD", aspect: "all", spoiler: "all" });
assert.ok(historicalRyu.totalMatches > 0);
assert.ok(historicalRyu.results.every(claim => claim.continuityScopes.includes("CONT-AR")));
assert.ok(!historicalRyu.results.some(claim => claim.entryId.endsWith("--CONT-ANIME")));
assert.ok(historicalRyu.results.some(claim => claim.claimId === "DMR-002-CLM-015"));
assert.ok(historicalRyu.results.some(claim => claim.claimId === "DMR-009-CLM-001"));
const ryuVReturn = corpus.search(index, { query: "Ryu Bell profundidad superficie", characterId: "CHAR-RYUU-LION", continuity: "CONT-ANIME", period: "ALL", aspect: "all", spoiler: "all" });
assert.ok(ryuVReturn.results.some(claim => claim.claimId === "DMR-013-CLM-001"), "DanMachi V shared-survival claim must be searchable in anime continuity.");
const ryuVWarGame = corpus.search(index, { query: "Ryu Astrea nivel magia guerra Familias", characterId: "CHAR-RYUU-LION", continuity: "CONT-ANIME", period: "ALL", aspect: "all", spoiler: "all" });
assert.ok(ryuVWarGame.results.some(claim => claim.claimId === "DMR-013-CLM-002"), "Astrea visit, level-up and War Game story must be searchable in anime continuity.");
const bellOpeningState = corpus.search(index, { query: "Bell Hestia medio mes único Familia", characterId: "DM-CHAR-BELL", continuity: "CONT-ANIME", period: "ALL", aspect: "all", spoiler: "all" });
assert.ok(bellOpeningState.results.some(claim => claim.claimId === "DMR-014-CLM-001"), "Bell opening state must be searchable without asserting the novel's exact meeting date.");
const bellOpeningCrisis = corpus.search(index, { query: "Bell quinto piso monstruo miedo espadachina", characterId: "DM-CHAR-BELL", continuity: "CONT-ANIME", period: "ALL", aspect: "all", spoiler: "all" });
assert.ok(bellOpeningCrisis.results.some(claim => claim.claimId === "DMR-014-CLM-002"), "The opening Dungeon crisis must be retrievable in anime continuity.");
const bellHestiaMeeting = corpus.search(index, { query: "Bell Hestia invitación Familia aspirante rechazado", characterId: "DM-CHAR-BELL", continuity: "CONT-MAIN-LN", period: "ALL", aspect: "all", spoiler: "all" });
assert.ok(bellHestiaMeeting.results.some(claim => claim.claimId === "DMR-015-CLM-001"), "Bell and Hestia first meeting must be retrievable from the official volume 1 synopsis in main-novel continuity.");
const einaAdvisor = corpus.search(index, { query: "Eina asesora Bell Guild Dungeon Orario", characterId: "DM-CHAR-EINA", continuity: "CONT-ANIME", period: "ALL", aspect: "all", spoiler: "all" });
assert.ok(einaAdvisor.results.some(claim => claim.claimId === "DMR-016-CLM-001"), "The Eina-Bell advisor relation must be retrievable in adaptation continuity.");
  const departure = corpus.search(index, { query: "Ryu Astrea venganza", characterId: "CHAR-RYUU-LION", continuity: "CONT-MAIN-LN", period: "ALL", aspect: "all", spoiler: "all" });
  assert.ok(departure.results.some(claim => claim.claimId === "DMR-010-CLM-002"), "The Astrea departure reason should be searchable with secondary-source status.");
  const laterAstrea = corpus.search(index, { query: "Ryu Astrea", characterId: "CHAR-RYUU-LION", continuity: "CONT-MAIN-LN", period: "ALL", aspect: "all", spoiler: "all" });
  assert.ok(laterAstrea.results.some(claim => claim.claimId === "DMR-010-CLM-005"), "The later Ryu-Astrea meeting should remain searchable from the publisher summary.");
const animeRyu = corpus.search(index, { query: "Ryu", characterId: "CHAR-RYUU-LION", continuity: "CONT-ANIME", period: "ALL", aspect: "all", spoiler: "all" });
assert.ok(animeRyu.totalMatches > 0);
assert.ok(animeRyu.results.every(claim => claim.continuityScopes.includes("CONT-ANIME")));
assert.ok(!animeRyu.results.some(claim => claim.entryId.endsWith("--CONT-AR")));
const aisLikes = corpus.search(index, { query: "", characterId: "DM-CHAR-AIS", continuity: "ALL", period: "ALL", aspect: "likes", spoiler: "all" });
assert.equal(aisLikes.totalMatches, 0);
assert.equal(aisLikes.abstain, true);
const mainRyu = corpus.search(index, { query: "Ryu", characterId: "CHAR-RYUU-LION", continuity: "CONT-MAIN-LN", period: "ALL", aspect: "all", spoiler: "all" });
assert.ok(mainRyu.results.some(claim => claim.claimId === "DMR-008-CLM-013" || claim.claimId === "DMR-008-CLM-014"), "volume dossiers should make Ryu discoverable in the main-story continuity");
assert.ok(mainRyu.results.every(claim => claim.continuityScopes.includes("CONT-MAIN-LN")));
const ryuChronicle = corpus.search(index, { query: "Ciudad Forjadora", characterId: "CHAR-RYUU-LION", continuity: "CONT-MAIN-LN", period: "ALL", aspect: "all", spoiler: "all" });
assert.ok(ryuChronicle.results.some(claim => claim.claimId === "DMR-009-CLM-008"));
const swordOratoria = corpus.search(index, { query: "Loki Familia", characterId: "CHAR-FINN-DEIMNE", continuity: "CONT-MAIN-LN", period: "ALL", aspect: "all", spoiler: "all" });
assert.ok(swordOratoria.results.some(claim => claim.claimId === "DMR-009-CLM-004" || claim.claimId === "DMR-009-CLM-005"));
const hestiaFamilyClaim = corpus.search(index, { query: "único miembro", characterId: "DM-CHAR-BELL", continuity: "CONT-ANIME", period: "ALL", aspect: "all", spoiler: "all" });
assert.ok(hestiaFamilyClaim.results.some(claim => claim.claimId === "DMR-004-CLM-001"), "Hestia Familia's opening state must be available through global lore search.");
const lokiFamilyClaim = corpus.search(index, { query: "Finn capitán", characterId: "CHAR-FINN-DEIMNE", continuity: "CONT-SO", period: "ALL", aspect: "all", spoiler: "all" });
assert.ok(lokiFamilyClaim.results.some(claim => claim.claimId === "DMR-005-CLM-002"), "Loki Familia's leadership claim must be available through global lore search.");
const astreaFamilyClaim = corpus.search(index, { query: "Alise capitana", characterId: "CHAR-ALISE-LOVELACE", continuity: "CONT-AR", period: "ASTREA_RECORD", aspect: "all", spoiler: "all" });
assert.ok(astreaFamilyClaim.results.some(claim => claim.claimId === "DMR-012-CLM-003"), "Astrea Familia's leadership claim must be available through global lore search.");
const astreaRecordConflict = corpus.search(index, { query: "Evilus", characterId: "CHAR-RYUU-LION", continuity: "CONT-AR", period: "ASTREA_RECORD", aspect: "all", spoiler: "all" });
assert.ok(astreaRecordConflict.results.some(claim => claim.claimId === "DMR-012-CLM-004"), "Astrea Record conflict summary must remain searchable in the historical continuity.");

const astreaAnimeClaim = corpus.search(index, { query: "Astrea justicia orden", characterId: "CHAR-ASTREA", continuity: "CONT-ANIME", period: "ALL", aspect: "all", spoiler: "all" });
assert.ok(astreaAnimeClaim.results.some(claim => claim.claimId === "DMR-012-CLM-005"), "Astrea adaptation facts must remain separate from the Astrea Record continuity.");

const unsupportedNovelPreference = corpus.search(index, { query: "Ryu", characterId: "CHAR-RYUU-LION", continuity: "CONT-MAIN-LN", period: "ALL", aspect: "likes", spoiler: "all" });
assert.equal(unsupportedNovelPreference.totalMatches, 0, "a personal preference cannot be filled in without evidence, even when the character appears in the main-story corpus.");

const aliseHistorical = corpus.search(index, { query: "Alise", characterId: "CHAR-ALISE-LOVELACE", continuity: "CONT-AR", period: "ALL", aspect: "all", spoiler: "all" });
assert.ok(aliseHistorical.results.some(claim => claim.entryId === "DMR-002-CLM-019--CONT-AR"));
assert.ok(!aliseHistorical.results.some(claim => claim.claim.includes("directa y de ánimo luminoso")));
const aliseAdaptation = corpus.search(index, { query: "Alise", characterId: "CHAR-ALISE-LOVELACE", continuity: "CONT-ANIME", period: "ALL", aspect: "all", spoiler: "all" });
assert.ok(aliseAdaptation.results.some(claim => claim.entryId === "DMR-002-CLM-019--CONT-ANIME"));

process.stdout.write("PASS lore search: 104 source claims, 107 entries, volume 21 atomic claims, Familia dossiers, main and side-story retrieval, continuity split and abstention verified.\n");

(async () => {
  const sourceDirectory = corpus.getOnlineSourceDirectory();
  assert.ok(sourceDirectory.some(source => source.category === "official" && source.url.includes("danmachi.com/chronology")));
  assert.ok(sourceDirectory.some(source => source.category === "official" && source.url.includes("danmachi.com/sword_oratoria/character")));
  assert.ok(sourceDirectory.some(source => source.category === "official" && source.url.includes("danmachi.com/news/news255.php")), "Official level-up announcement must remain available in the source directory.");
  assert.ok(sourceDirectory.some(source => source.category === "official" && source.url.includes("danmachi.com/danmachi/story/episode1.html")));
  assert.ok(sourceDirectory.some(source => source.category === "official" && source.url.includes("ga.sbcr.jp/product/9784815610173")));
  assert.ok(sourceDirectory.some(source => source.category === "community" && source.url.includes("danmachi.fandom.com")));
  assert.ok(sourceDirectory.every(source => source.title && source.url && source.limits));
  const requestedUrls = [];
  const mockFetch = async input => {
    const url = new URL(input); requestedUrls.push(url);
    const action=url.searchParams.get("action"), prop=url.searchParams.get("prop");
    if (url.hostname === "danmachi.fandom.com") {
      if(action==="parse") return {ok:true,status:200,json:async()=>({parse:{text:{"*":"<div><aside>Infobox data is not the lead.</aside><p>Ryuu Lion is an elven adventurer formerly affiliated with Astrea Familia.</p><p>She later works at the Hostess of Fertility and has a complicated history with Bell Cranel.</p></div>"}}})};
      if(action==="query"&&prop==="pageimages|info") return {ok:true,status:200,json:async()=>({query:{pages:{"2264":{pageid:2264,title:"Ryuu Lion",canonicalurl:"https://danmachi.fandom.com/wiki/Ryuu_Lion",thumbnail:{source:"https://static.wikia.nocookie.net/dungeon-ni-deai-o-motemeru/images/3/33/Ryuu.png"}}}}})};
      return {ok:true,status:200,json:async()=>({query:{search:[{
        pageid:2264,title:"Ryuu Lion",
        snippet:'<span class="searchmatch">Ryuu Lion</span> appears in Astrea Record &amp; the main series.',
        timestamp:"2025-01-01T00:00:00Z"
      }]}})};
    }
    if (url.hostname === "en.wikipedia.org") {
      if(action==="parse") return {ok:true,status:200,json:async()=>({parse:{text:{"*":"<div><p>Is It Wrong to Try to Pick Up Girls in a Dungeon? is a Japanese light novel series written by Fujino Omori.</p></div>"}}})};
      if(action==="query"&&prop==="pageimages|info") return {ok:true,status:200,json:async()=>({query:{pages:{"100":{pageid:100,title:"Is It Wrong to Try to Pick Up Girls in a Dungeon?",canonicalurl:"https://en.wikipedia.org/wiki/Is_It_Wrong_to_Try_to_Pick_Up_Girls_in_a_Dungeon",thumbnail:{source:"https://upload.wikimedia.org/wikipedia/en/a/a2/Danmachi.jpg"}}}}})};
      return {ok:true,status:200,json:async()=>({query:{search:[{pageid:100,title:"Is It Wrong to Try to Pick Up Girls in a Dungeon?",snippet:"A Japanese light novel series."}]}})};
    }
    throw new Error("Unexpected mock host: "+url.hostname);
  };
  const externalReport=await corpus.searchExternalSources("Ryu Lion",{fetchImpl:mockFetch});
  const searchRequests=requestedUrls.filter(url=>url.searchParams.get("list")==="search");
  assert.equal(searchRequests.length,2);
  assert.ok(requestedUrls.every(url=>url.searchParams.get("origin")==="*"));
  assert.ok(searchRequests.every(url=>url.searchParams.get("srsearch")==="Ryu Lion"));
  assert.equal(externalReport.results.length,2);
  assert.ok(externalReport.results.every(result=>result.authority.includes("secundaria")));
  assert.ok(externalReport.results[0].snippet.includes("Ryuu Lion"));
  assert.ok(!externalReport.results[0].snippet.includes("<span"));
  assert.ok(externalReport.results[0].snippet.includes("& the main series."));
  assert.ok(externalReport.results[0].extract.includes("elven adventurer"),"External lookup should include a useful article lead, not only the short search snippet.");
  assert.ok(externalReport.results[0].thumbnailUrl.startsWith("https://static.wikia.nocookie.net/"),"Wiki images should appear as secure external thumbnail links.");
  assert.ok(externalReport.results[0].imageCredit.includes("derechos de imagen"),"Image credit must retain rights attribution.");
  assert.ok(externalReport.results[0].imageCredit.includes("No se guarda"),"Remote images must not be copied into the local repository.");
  assert.ok(externalReport.results[1].thumbnailUrl.startsWith("https://upload.wikimedia.org/"));
  assert.equal(externalReport.hasFailures,false);
  assert.equal(corpus.allowedExternalImageUrl("http://evil.example/a.png","danmachi-wiki"),"");
  assert.equal(corpus.allowedExternalImageUrl("https://evil.example/a.png","danmachi-wiki"),"");
  assert.ok(corpus.extractExternalLead("<aside><p>hidden infobox content</p></aside><p>This paragraph is useful and long enough to be used as a visible article lead in the external research panel.</p>").includes("useful"));
  const partialFailure=await corpus.searchExternalSources("Ais",{fetchImpl:async input=>{
    const url=new URL(input);
    if(url.hostname==="danmachi.fandom.com")return{ok:false,status:503,json:async()=>({})};
    return{ok:true,status:200,json:async()=>({query:{search:[{title:"Ais Wallenstein",snippet:"Character overview"}]}})};
  }});
  assert.equal(partialFailure.providers.length,2);
  assert.ok(partialFailure.hasFailures);
  assert.ok(partialFailure.providers.some(provider=>provider.error&&provider.searchUrl));
  assert.ok(partialFailure.providers.some(provider=>provider.results.length===1));
  await assert.rejects(()=>corpus.searchExternalSources(" ",{fetchImpl:mockFetch}),/Escribí un tema/);
  // Regression: family retrieval accepts natural Spanish name order and never leaks characters.
  const astreaSpanish = corpus.searchEntities(catalog, { type: "familia", query: "Familia de Astrea" });
  assert.deepEqual(astreaSpanish.results.map(entity => entity.id), ["DM-FAM-ASTREA"]);
  assert.ok(astreaSpanish.results.every(entity => entity.type === "familia"));
  const lokiAlias = corpus.searchEntities(catalog, { entityType: "FAMILIA", query: "Loki Familia" });
  assert.deepEqual(lokiAlias.results.map(entity => entity.id), ["DM-FAM-LOKI"]);
  const hestiaAlias = corpus.searchEntities(catalog, { type: "familia", query: "Familia Hestia" });
  assert.deepEqual(hestiaAlias.results.map(entity => entity.id), ["DM-FAM-HESTIA"]);
  assert.equal(corpus.searchEntities(catalog, { type: "familia", query: "Bell Cranel" }).abstain, true);
  process.stdout.write("PASS web research: Fandom/Wikipedia search, secondary-source labels, safe snippets and graceful partial failure verified.\n");
})().catch(error=>{ console.error(error); process.exitCode=1; });

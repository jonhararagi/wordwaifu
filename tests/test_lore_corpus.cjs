const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const corpus = require("../src/lore-corpus.js");
const root = path.join(__dirname, "..", "lore", "danmachi");
const sourceLoader = fs.readFileSync(path.join(root, "../../src/lore-corpus.js"), "utf8");
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
  "research/inbox/DANMACHI-RESEARCH-013-soma-family-roster-and-dossiers.md",
  "research/inbox/DANMACHI-RESEARCH-014-loki-familia-individual-dossiers.md",
  "research/inbox/DANMACHI-RESEARCH-021-zeus-hera-familias.md",
  "research/inbox/DANMACHI-RESEARCH-025-wiki-informed-character-expansion.md",
  "research/inbox/DANMACHI-RESEARCH-026-dark-era-antagonist-dossiers.md",
  "research/inbox/DANMACHI-RESEARCH-027-astrea-minor-character-profiles.md",
  "research/inbox/DANMACHI-RESEARCH-028-barca-basram-vito-adi-airmid.md",
  "research/inbox/DANMACHI-RESEARCH-029-miach-naaza-dian-goibniu-hephaistos.md",
  "research/inbox/DANMACHI-RESEARCH-030-astrea-core-profiles.md",
  "research/inbox/DANMACHI-RESEARCH-031-loki-secondary-profiles.md",
  "research/inbox/DANMACHI-RESEARCH-032-orario-support-profiles.md",
  "research/inbox/DANMACHI-RESEARCH-033-dark-era-evilus-deities-and-dis-sisters.md",
  "research/inbox/DANMACHI-RESEARCH-034-wiki-expanded-hostess-and-loki-profiles.md",
  "research/inbox/DANMACHI-RESEARCH-035-loki-core-five-profiles.md",
  "research/inbox/DANMACHI-RESEARCH-036-freya-hostess-profiles.md",
  "research/inbox/DANMACHI-RESEARCH-039-miraheze-bilingual-revalidation.md",
  "research/inbox/DANMACHI-RESEARCH-040-astrea-five-miraheze-reread.md",
  "research/inbox/DANMACHI-RESEARCH-041-astrea-core-bilingual-review.md",
  "research/inbox/DANMACHI-RESEARCH-042-historical-five-miraheze-review.md",
  "research/inbox/DANMACHI-RESEARCH-043-evilus-missing-app-dossiers.md",
  "research/inbox/DANMACHI-RESEARCH-044-barca-dis-line-alicia.md",
  "research/inbox/DANMACHI-RESEARCH-038-zeus-hera-maxim-historical-profiles.md"
];
const documents = documentPaths.map(file => ({ path: file, content: fs.readFileSync(path.join(root, file), "utf8") }));
const dossierPaths = ["characters/mia-grand.md", "characters/anya-fromel.md", "characters/allen-fromel.md", "characters/alicia-forestlight.md", "characters/leene-arshe.md", "characters/hedin-selland.md", "characters/hogni-ragnar.md", "characters/heith-velvet.md", "characters/chloe-rolo.md", "characters/lunoa-faust.md", "characters/zeus.md", "characters/hera.md", "characters/maxim.md", "characters/dark-era/alfia.md", "characters/dark-era/zald.md"];
const dossierDocuments = dossierPaths.map(file => ({ path: file, content: fs.readFileSync(path.join(root, file), "utf8") }));
const index = corpus.buildIndex(catalog, documents, dossierDocuments);
const familyEntities = corpus.searchEntities(catalog, { type: "familia" });
assert.ok(Array.isArray(index.entityRecords), "Loaded lore index must expose typed catalog entities for the UI.");
assert.ok(index.entityRecords.some(entity => entity.id === "DM-FAM-HESTIA"));
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
assert.equal(index.sourceClaimCount, 294, "Indexed claims include research batches 033 through 044.");
assert.equal(index.entryCount, 297, "All claims including batches 033 through 044 are searchable.");
assert.ok(sourceLoader.includes("DANMACHI-RESEARCH-039-miraheze-bilingual-revalidation.md"), "Runtime query loader must include DMR-039.");
assert.ok(sourceLoader.includes("DANMACHI-RESEARCH-040-astrea-five-miraheze-reread.md"), "Runtime query loader must include DMR-040.");
assert.ok(sourceLoader.includes("DANMACHI-RESEARCH-041-astrea-core-bilingual-review.md"), "Runtime query loader must include DMR-041.");

const akiLateState = corpus.search(index, { query: "Cat Returns", characterId: "CHAR-LOKI-AKI", continuity: "CONT-SO", period: "ALL", aspect: "all", spoiler: "all" });
assert.ok(akiLateState.results.some(claim => claim.claimId === "DMR-031-CLM-001"), "Aki's later status, skills and equipment must be searchable.");
assert.ok(akiLateState.results.every(claim => claim.verificationStatus.includes("secondary")), "Aki's wiki state must remain secondary.");
const narviProfile = corpus.search(index, { query: "Narvi Roll", characterId: "CHAR-LOKI-NARFI", continuity: "CONT-SO", period: "ALL", aspect: "all", spoiler: "all" });
assert.ok(narviProfile.results.some(claim => claim.claimId === "DMR-031-CLM-003"), "Narvi's profile and legacy crosswalk must be retrievable under the stable ID.");
const cruzProfile = corpus.search(index, { query: "Cruz Bussell", characterId: "CHAR-LOKI-CRUZ", continuity: "CONT-SO", period: "ALL", aspect: "all", spoiler: "all" });
assert.ok(cruzProfile.results.some(claim => claim.claimId === "DMR-031-CLM-004"), "Cruz's visual profile and volume lead must be searchable.");
const elfyProfile = corpus.search(index, { query: "Lomoire", characterId: "CHAR-LOKI-ELFY-COLETTE", continuity: "CONT-GAME", period: "ALL", aspect: "all", spoiler: "all" });
assert.ok(elfyProfile.results.some(claim => claim.claimId === "DMR-031-CLM-006"), "Elfy's alias must be searchable with its game-continuity caveat.");
const raktaMapping = corpus.search(index, { query: "Knossos", characterId: "CHAR-LOKI-RAKTA-HAZE", continuity: "CONT-SO", period: "ALL", aspect: "all", spoiler: "all" });
assert.ok(raktaMapping.results.some(claim => claim.claimId === "DMR-031-CLM-007"), "Rakta's mapping role and separate scenes must be searchable.");


const aliseDossierExpansion = corpus.search(index, { query: "Lubrude", characterId: "CHAR-ALISE-LOVELACE", continuity: "CONT-AR", period: "ALL", aspect: "all", spoiler: "all" });
assert.ok(aliseDossierExpansion.results.some(claim => claim.claimId === "DMR-030-CLM-002"), "Alise's wiki-expanded magic/equipment claim must be searchable.");
assert.ok(aliseDossierExpansion.results.filter(claim => claim.claimId === "DMR-030-CLM-002").every(claim => claim.verificationStatus.includes("secondary")), "Alise's expanded combat profile must remain secondary.");
const kaguyaDossierExpansion = corpus.search(index, { query: "Gokou", characterId: "CHAR-KAGUYA", continuity: "CONT-AR", period: "ALL", aspect: "all", spoiler: "all" });
assert.ok(kaguyaDossierExpansion.results.some(claim => claim.claimId === "DMR-030-CLM-004"), "Kaguya's reported techniques/weapons must be searchable.");
const lyraDossierExpansion = corpus.search(index, { query: "Carnivore", characterId: "CHAR-LYRA", continuity: "CONT-AR", period: "ALL", aspect: "all", spoiler: "all" });
assert.ok(lyraDossierExpansion.results.some(claim => claim.claimId === "DMR-030-CLM-006"), "Lyra's reported magic/equipment and spoiler lead must be searchable.");
const astreaDossierExpansion = corpus.search(index, { query: "nogal", characterId: "CHAR-ASTREA", continuity: "CONT-AR", period: "ALL", aspect: "all", spoiler: "all" });
assert.ok(astreaDossierExpansion.results.some(claim => claim.claimId === "DMR-030-CLM-007"), "Astrea's secondary appearance reference must be searchable.");
const ryuuRelationshipExpansion = corpus.search(index, { query: "cartas", characterId: "CHAR-RYUU-LION", continuity: "CONT-MAIN-LN", period: "ALL", aspect: "all", spoiler: "all" });
assert.ok(ryuuRelationshipExpansion.results.some(claim => claim.claimId === "DMR-030-CLM-008"), "Ryuu's later relationship timeline must be searchable and scoped separately from Astrea Record.");
const ryuuMagicExpansion = corpus.search(index, { query: "ichor", characterId: "CHAR-RYUU-LION", continuity: "CONT-MAIN-LN", period: "ALL", aspect: "all", spoiler: "all" });
assert.ok(ryuuMagicExpansion.results.some(claim => claim.claimId === "DMR-030-CLM-010"), "The reported Astraea Record magic rule must be searchable.");

const meteriaAlfiaClaim = corpus.search(index, { query: "Meteria Alfia hermana gemela", continuity: "CONT-UNVERIFIED", period: "ALL", aspect: "all", spoiler: "all" });
assert.ok(meteriaAlfiaClaim.results.some(claim => claim.claimId === "DMR-021-CLM-004"), "Meteria-Alfia relationship lead must be retrievable and stay explicitly unverified.");
const meteriaBellClaim = corpus.search(index, { query: "Meteria madre Bell Cranel", continuity: "CONT-MAIN-LN", period: "ALL", aspect: "all", spoiler: "all" });
assert.ok(meteriaBellClaim.results.some(claim => claim.claimId === "DMR-021-CLM-005"), "Meteria's major-spoiler relationship to Bell must be retrievable from the research package.");
const olivasWiki = corpus.search(index, { query: "Olivas Vendetta Fanatic", characterId: "CHAR-DARK-OLIVAS-ACT", continuity: "CONT-SO", period: "ALL", aspect: "all", spoiler: "all" });
assert.ok(olivasWiki.results.some(claim => claim.claimId === "DMR-025-CLM-001" || claim.claimId === "DMR-025-CLM-002"), "Olivas alias/personality claims must be searchable under the Sword Oratoria continuity.");
assert.ok(olivasWiki.results.every(claim => claim.continuityScopes.includes("CONT-SO")), "Olivas claims must retain the Sword Oratoria continuity filter.");
assert.ok(olivasWiki.results.every(claim => claim.verificationStatus.includes("secondary_extract_only")), "Wiki-only Olivas claims must remain visibly unverified as primary evidence.");
assert.ok(olivasWiki.results.some(claim => claim.sourceUrls.includes("https://danmachi.fandom.com/wiki/Olivas_Act")), "Olivas results must retain the originating wiki URL.");

const rudraJuggernaut = corpus.search(index, { query: "Rudra Familia Juggernaut", characterId: "CHAR-DARK-RUDRA", continuity: "CONT-MAIN-LN", period: "ALL", aspect: "all", spoiler: "all" });
assert.ok(rudraJuggernaut.results.some(claim => claim.claimId === "DMR-025-CLM-006"), "Rudra Familia's reported Juggernaut incident must be discoverable without attributing every action to Rudra personally.");
assert.ok(rudraJuggernaut.results.every(claim => claim.continuityScopes.includes("CONT-MAIN-LN")), "Rudra timeline leads must respect main-novel continuity.");

const meteriaWikilookup = corpus.search(index, { query: "Meteria cabello Alfia madre Bell", characterId: "CHAR-METERIA", continuity: "CONT-MAIN-LN", period: "ALL", aspect: "all", spoiler: "all" });
assert.ok(meteriaWikilookup.results.some(claim => claim.claimId === "DMR-025-CLM-007"), "Meteria's extended family profile must be searchable while remaining secondary.");
assert.ok(meteriaWikilookup.results.filter(claim => claim.claimId === "DMR-025-CLM-007").every(claim => claim.spoilerLevel === "major"), "Meteria's family revelations must remain major spoilers.");

const ryanaMagic = corpus.search(index, { query: "Ryana Irivute fuego", characterId: "CHAR-RYANA-LIETZ", continuity: "CONT-AR", period: "ALL", aspect: "all", spoiler: "all" });
assert.ok(ryanaMagic.results.some(claim => claim.claimId === "DMR-025-CLM-009"), "Ryana's community-reported magic lead must be retrievable.");
assert.ok(ryanaMagic.results.every(claim => claim.verificationStatus.includes("secondary_extract_only")), "Ryana's magic must not be promoted to verified primary fact.");

const maryuuMagic = corpus.search(index, { query: "Maryuu Rea Vindemia maza", characterId: "CHAR-MARIYU-LEAGE", continuity: "CONT-AR", period: "ALL", aspect: "all", spoiler: "all" });
assert.ok(maryuuMagic.results.some(claim => claim.claimId === "DMR-025-CLM-011"), "Mariyu/Maryuu alias and healing-magic lead must be retrievable through one stable character ID.");

const alfiaResearch026 = corpus.search(index, { query: "Alfia enfermedad Leviathan", characterId: "CHAR-DARK-ALFIA", continuity: "CONT-AR", period: "ALL", aspect: "all", spoiler: "all" });
assert.ok(alfiaResearch026.results.some(claim => claim.claimId === "DMR-026-CLM-002"), "Alfia's history and illness must be searchable as a secondary lead.");
assert.ok(alfiaResearch026.results.every(claim => claim.verificationStatus.includes("secondary_extract_only")));
assert.ok(alfiaResearch026.results.some(claim => claim.sourceUrls.includes("https://danmachi.fandom.com/wiki/Alfia")));

const zaldResearch026 = corpus.search(index, { query: "Zald Behemoth veneno Ottar", characterId: "CHAR-DARK-ZALD", continuity: "CONT-AR", period: "ALL", aspect: "all", spoiler: "all" });
assert.ok(zaldResearch026.results.some(claim => claim.claimId === "DMR-026-CLM-004"), "Zald's Behemoth/poison account must be retrievable without being marked primary-verified.");
assert.ok(zaldResearch026.results.every(claim => claim.verificationStatus.includes("secondary_extract_only")));

const vallettaResearch026 = corpus.search(index, { query: "Valletta Shaldo Finn barrera", characterId: "CHAR-DARK-VALLETTA-GREDE", continuity: "CONT-SO", period: "ALL", aspect: "all", spoiler: "all" });
assert.ok(vallettaResearch026.results.some(claim => claim.claimId === "DMR-026-CLM-006"), "Valletta's reported magic and strategy must be searchable in Sword Oratoria continuity.");
assert.ok(vallettaResearch026.results.every(claim => claim.continuityScopes.includes("CONT-SO")));
assert.ok(vallettaResearch026.results.every(claim => claim.verificationStatus.includes("secondary_extract_only")));

const juraResearch026 = corpus.search(index, { query: "Jura Ryuu Juggernaut", characterId: "CHAR-DARK-JURA-HALMER", continuity: "CONT-MAIN-LN", period: "ALL", aspect: "all", spoiler: "all" });
assert.ok(juraResearch026.results.some(claim => claim.claimId === "DMR-026-CLM-008"), "Jura's relationship to Ryuu and the later Juggernaut incident must be discoverable under the main LN scope.");
assert.ok(juraResearch026.results.every(claim => claim.continuityScopes.includes("CONT-MAIN-LN")));
assert.ok(juraResearch026.results.every(claim => claim.verificationStatus.includes("secondary_extract_only")));

const erebusResearch026 = corpus.search(index, { query: "Erebus justicia Alfia Zald", characterId: "CHAR-DARK-EREBUS", continuity: "CONT-AR", period: "ALL", aspect: "all", spoiler: "all" });
assert.ok(erebusResearch026.results.some(claim => claim.claimId === "DMR-026-CLM-009"), "Erebus's ideology and reported cooperation must be retrievable as an unverified secondary summary.");
assert.ok(erebusResearch026.results.every(claim => claim.verificationStatus.includes("secondary_extract_only")));

const noinResearch027 = corpus.search(index, { query: "Noin Unic operación Iska", characterId: "CHAR-NOIN-UNIC", continuity: "CONT-AR", period: "ALL", aspect: "all", spoiler: "all" });
assert.ok(noinResearch027.results.some(claim => claim.claimId === "DMR-027-CLM-002"), "Noin's limited scene mention and short-story route must be retrievable without inventing a role.");
assert.ok(noinResearch027.results.every(claim => claim.verificationStatus.includes("secondary_extract_only")));
assert.ok(noinResearch027.results.some(claim => claim.sourceUrls.some(url => url.includes("Neze_Rankett"))));

const astaResearch027 = corpus.search(index, { query: "Asta Knox escudo nivel desconocido", characterId: "CHAR-ASTA-KNOX", continuity: "CONT-ANIME", period: "ALL", aspect: "all", spoiler: "all" });
assert.ok(astaResearch027.results.some(claim => claim.claimId === "DMR-027-CLM-003"), "Asta's reported shield and unresolved level must be retrievable.");
assert.ok(astaResearch027.results.every(claim => claim.verificationStatus.includes("secondary_extract_only")));

const nezeResearch027 = corpus.search(index, { query: "Neze Rankett luna llena Evilus aventurera", characterId: "CHAR-NEZE-RANKETT", continuity: "CONT-AR", period: "ALL", aspect: "all", spoiler: "all" });
assert.ok(nezeResearch027.results.some(claim => claim.claimId === "DMR-027-CLM-006"), "Neze's story-specific tactics and translated alias must be retrievable.");
assert.ok(nezeResearch027.results.every(claim => claim.continuityScopes.includes("CONT-AR")));
assert.ok(nezeResearch027.results.every(claim => claim.verificationStatus.includes("secondary_extract_only")));

const iskaBackground027 = corpus.search(index, { query: "Iska Bra orfanato moda belleza justicia", characterId: "CHAR-ISKA-BRA", continuity: "CONT-AR", period: "ALL", aspect: "all", spoiler: "all" });
assert.ok(iskaBackground027.results.some(claim => claim.claimId === "DMR-027-CLM-007"), "Iska's background and personal view of beauty/justice must be searchable.");
assert.ok(iskaBackground027.results.every(claim => claim.verificationStatus.includes("secondary_extract_only")));

const iskaConflicts027 = corpus.search(index, { query: "Iska edad 16 18 nivel", characterId: "CHAR-ISKA-BRA", continuity: "CONT-AR", period: "ALL", aspect: "all", spoiler: "all" });
assert.ok(iskaConflicts027.results.some(claim => claim.claimId === "DMR-027-CLM-008"), "Conflicting age and level values must be discoverable as unresolved data.");
assert.ok(iskaConflicts027.results.every(claim => claim.verificationStatus.includes("secondary_extract_only")));

const celtyHistory027 = corpus.search(index, { query: "Celty Yenite conocimiento Ryuu 13 15", characterId: "CHAR-CELTY-SROWA", continuity: "CONT-AR", period: "ALL", aspect: "all", spoiler: "all" });
assert.ok(celtyHistory027.results.some(claim => claim.claimId === "DMR-027-CLM-009"), "Celty's forest history, mutual respect with Ryuu and age conflict must be searchable.");
assert.ok(celtyHistory027.results.every(claim => claim.verificationStatus.includes("secondary_extract_only")));

const celtyMagic027 = corpus.search(index, { query: "Celty magia defensiva visión Kaguya", characterId: "CHAR-CELTY-SROWA", continuity: "CONT-AR", period: "ALL", aspect: "all", spoiler: "all" });
assert.ok(celtyMagic027.results.some(claim => claim.claimId === "DMR-027-CLM-010"), "Celty's reported support-magic role must be retrievable without inventing a spell name.");
assert.ok(celtyMagic027.results.every(claim => claim.verificationStatus.includes("secondary_extract_only")));

const adiResearch028 = corpus.search(index, { query: "Adi Ardee Varma justicia Ryuu Vyasa", characterId: "CHAR-DARK-ARDEE-VARMA", continuity: "CONT-AR", period: "ALL", aspect: "all", spoiler: "all" });
assert.ok(adiResearch028.results.some(claim => claim.claimId === "DMR-028-CLM-001" || claim.claimId === "DMR-028-CLM-002"), "Adi/Ardee romanization variants must resolve to one stable profile.");
assert.ok(adiResearch028.results.every(claim => claim.characterIds.includes("CHAR-DARK-ARDEE-VARMA")));
assert.ok(adiResearch028.results.every(claim => claim.verificationStatus.includes("secondary_extract_only")));

const barcaResearch028 = corpus.search(index, { query: "Barca Perdix Knossos", characterId: "CHAR-DARK-BARCA-PERDIX", continuity: "CONT-SO", period: "ALL", aspect: "all", spoiler: "all" });
assert.ok(barcaResearch028.results.some(claim => claim.claimId === "DMR-028-CLM-003" || claim.claimId === "DMR-028-CLM-004"), "Barca's Knossos/curse dossier must be retrievable under Sword Oratoria.");
assert.ok(barcaResearch028.results.every(claim => claim.continuityScopes.includes("CONT-SO")));
assert.ok(barcaResearch028.results.every(claim => claim.verificationStatus.includes("secondary_extract_only")));

const basramResearch028 = corpus.search(index, { query: "Basram Apate Familia Spirit Soldiers shakujō", characterId: "CHAR-DARK-BASRAM", continuity: "CONT-AR", period: "ALL", aspect: "all", spoiler: "all" });
assert.ok(basramResearch028.results.some(claim => claim.claimId === "DMR-028-CLM-005" || claim.claimId === "DMR-028-CLM-006"), "Basram's Apate/Spirit Soldier information must be retrievable.");
assert.ok(basramResearch028.results.every(claim => claim.continuityScopes.includes("CONT-AR")));
assert.ok(basramResearch028.results.every(claim => claim.verificationStatus.includes("secondary_extract_only")));

const vitoResearch028 = corpus.search(index, { query: "Vito sentidos sangre dolor", characterId: "CHAR-DARK-VITO", continuity: "CONT-UNVERIFIED", period: "ALL", aspect: "all", spoiler: "all" });
assert.ok(vitoResearch028.results.some(claim => claim.claimId === "DMR-028-CLM-008"), "Vito's sensory condition must be searchable while remaining continuity-unverified.");
assert.ok(vitoResearch028.results.every(claim => claim.continuityScopes.includes("CONT-UNVERIFIED")));
assert.ok(vitoResearch028.results.every(claim => claim.verificationStatus.includes("secondary_extract_only")));

const airmidResearch028 = corpus.search(index, { query: "Airmid Dia Fratel Tuired Well", characterId: "CHAR-DARK-AIRMID", continuity: "CONT-SO", period: "ALL", aspect: "all", spoiler: "all" });
assert.ok(airmidResearch028.results.some(claim => claim.claimId === "DMR-028-CLM-010"), "Airmid's healing dossier must be searchable in the Sword Oratoria scope.");
assert.ok(airmidResearch028.results.every(claim => claim.continuityScopes.includes("CONT-SO")));
assert.ok(airmidResearch028.results.every(claim => claim.verificationStatus.includes("secondary_extract_only")));
const airmidRecord028 = catalog.records.find(record => record.id === "CHAR-DARK-AIRMID");
assert.equal(airmidRecord028.path, "characters/airmid-teasanare.md", "Airmid should not remain filed under dark-era candidates.");
assert.ok(!airmidRecord028.tags.includes("Era Oscura") && !airmidRecord028.tags.includes("Astrea Record"), "Airmid's historical participation remains unconfirmed and must not be asserted by catalog tags.");
const airmidPath028 = path.join(root, airmidRecord028.path);
assert.ok(fs.existsSync(airmidPath028), "The moved Airmid dossier must exist at the catalog path.");
assert.ok(fs.readFileSync(airmidPath028, "utf8").includes("id: CHAR-DARK-AIRMID"), "Moving Airmid must preserve the stable character ID.");


const miachResearch029 = corpus.search(index, { query: "Miach pociones deuda Naaza", characterId: "CHAR-DARK-MIACH", continuity: "CONT-MAIN-LN", period: "ALL", aspect: "all", spoiler: "all" });
assert.ok(miachResearch029.results.some(claim => claim.claimId === "DMR-029-CLM-001" || claim.claimId === "DMR-029-CLM-002"), "Miach profile claims must be retrievable.");
assert.ok(miachResearch029.results.every(claim => claim.verificationStatus.includes("secondary_extract_only")));

const naazaResearch029 = corpus.search(index, { query: "Naaza prótesis Darbh Daol Miach", characterId: "CHAR-DARK-NAAZA", continuity: "CONT-MAIN-LN", period: "ALL", aspect: "all", spoiler: "all" });
assert.ok(naazaResearch029.results.some(claim => claim.claimId === "DMR-029-CLM-003" || claim.claimId === "DMR-029-CLM-004"), "Naaza's history and abilities must be retrievable.");
assert.ok(naazaResearch029.results.every(claim => claim.verificationStatus.includes("secondary_extract_only")));

const dianCechtResearch029 = corpus.search(index, { query: "Dian Cecht prótesis Familia Era Oscura", characterId: "CHAR-DARK-DIAN-CECHT", continuity: "CONT-UNVERIFIED", period: "ALL", aspect: "all", spoiler: "all" });
assert.ok(dianCechtResearch029.results.some(claim => claim.claimId === "DMR-029-CLM-006"), "Family-level historical activity must be searchable without asserting an individual scene.");
assert.ok(dianCechtResearch029.results.every(claim => claim.continuityScopes.includes("CONT-UNVERIFIED")));

const goibniuResearch029 = corpus.search(index, { query: "Goibniu armas construcción Hearth Mansion", characterId: "CHAR-DARK-GOIBNIU", continuity: "CONT-SO", period: "ALL", aspect: "all", spoiler: "all" });
assert.ok(goibniuResearch029.results.some(claim => claim.claimId === "DMR-029-CLM-007" || claim.claimId === "DMR-029-CLM-008"), "Goibniu's profile and smith-family links must be retrievable.");

const hephaistosResearch029 = corpus.search(index, { query: "Hephaistos Hestia Knife Memoria Freese", characterId: "CHAR-DARK-HEPHAISTOS", continuity: "CONT-UNVERIFIED", period: "ALL", aspect: "all", spoiler: "all" });
assert.ok(hephaistosResearch029.results.some(claim => claim.claimId === "DMR-029-CLM-010"), "Hephaistos event-only ability detail must remain visible with an unresolved continuity label.");

for (const [id, expectedPath] of [
  ["CHAR-DARK-MIACH", "characters/miach.md"],
  ["CHAR-DARK-NAAZA", "characters/naaza-erisuis.md"],
  ["CHAR-DARK-DIAN-CECHT", "characters/dian-cecht.md"],
  ["CHAR-DARK-GOIBNIU", "characters/goibniu.md"],
  ["CHAR-DARK-HEPHAISTOS", "characters/hephaistos.md"]
]) {
  const record = catalog.records.find(item => item.id === id);
  assert.ok(record, "Legacy identity must remain in the catalog: " + id);
  assert.equal(record.path, expectedPath, "General character profile must not remain filed as a confirmed Era Oscura dossier.");
  assert.ok(!record.tags.includes("Era Oscura") && !record.tags.includes("Astrea Record"), "Historical participation must not be asserted by tags: " + id);
  const profilePath = path.join(root, expectedPath);
  assert.ok(fs.existsSync(profilePath), "Moved profile must exist: " + expectedPath);
  assert.ok(fs.readFileSync(profilePath, "utf8").includes("id: " + id), "Move must preserve the stable ID: " + id);
}
for (const oldPath of [
  "characters/dark-era/miach.md",
  "characters/dark-era/naaza-erisuis.md",
  "characters/dark-era/dian-cecht.md",
  "characters/dark-era/goibniu.md",
  "characters/dark-era/hephaistos.md"
]) assert.ok(!fs.existsSync(path.join(root, oldPath)), "Obsolete historical path must not remain: " + oldPath);
assert.ok(catalog.documents.some(document => document.document_id === "RESEARCH-DM-029"), "Research batch 029 must be registered in the catalog.");

assert.ok(maryuuMagic.results.every(claim => claim.characterIds.includes("CHAR-MARIYU-LEAGE")), "Romanization variants must not create duplicate character identities.");

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



const somaClaim = corpus.search(index, { query: "Soma deidad bebidas", characterId: "CHAR-SOMA", continuity: "CONT-MAIN-LN", period: "ALL", aspect: "all", spoiler: "all" });
assert.ok(somaClaim.results.some(claim => claim.claimId === "DMR-013-CLM-001"), "Soma's sourced profile must be searchable.");
const liliSoma = corpus.search(index, { query: "Liliruca capturada Soma Familia", characterId: "CHAR-LILIRUCA-ARDE", continuity: "CONT-MAIN-LN", period: "ALL", aspect: "all", spoiler: "all" });
assert.ok(liliSoma.results.some(claim => claim.claimId === "DMR-013-CLM-002"), "Lili's past and later-family boundary must be retrievable.");
const zanisClaim = corpus.search(index, { query: "Zanis antiguo capitán", characterId: "CHAR-ZANIS-LUSTRA", continuity: "CONT-MAIN-LN", period: "ALL", aspect: "all", spoiler: "all" });
assert.ok(zanisClaim.results.some(claim => claim.claimId === "DMR-013-CLM-003"), "Zanis's status must be searchable with secondary-source status.");
const chandraClaim = corpus.search(index, { query: "Chandra capitán", characterId: "CHAR-CHANDRA-IHIT", continuity: "CONT-MAIN-LN", period: "ALL", aspect: "all", spoiler: "all" });
assert.ok(chandraClaim.results.some(claim => claim.claimId === "DMR-013-CLM-004"), "Chandra's status must be searchable with provenance.");
const liliAnimeScope = corpus.search(index, { query: "Liliruca supporter Hestia", characterId: "CHAR-LILIRUCA-ARDE", continuity: "CONT-ANIME", period: "ALL", aspect: "all", spoiler: "all" });
assert.ok(liliAnimeScope.results.some(claim => claim.claimId === "DMR-013-CLM-010"), "Official Lili adaptation profile must be retrievable.");
assert.ok(liliAnimeScope.results.every(claim => claim.continuityScopes.includes("CONT-ANIME")), "Anime-profile assertions must not leak into novel continuity.");
for (const id of ["CHAR-CANOE-BELWAY","CHAR-TSUKINOKAMI-KAEDE","CHAR-SHINONOME-MOMIJI","CHAR-COCO-COLLINS"]) {
  const roster = corpus.search(index, { query: "Soma Familia", characterId: id, continuity: "CONT-MAIN-LN", period: "ALL", aspect: "all", spoiler: "all" });
  assert.ok(roster.totalMatches > 0, id + " must be searchable from the roster research.");
}


const lokiFamilyEntity = corpus.searchEntities(catalog, { type: "familia", query: "Familia Loki" });
assert.ok(lokiFamilyEntity.results.some(entity => entity.id === "DM-FAM-LOKI"), "Loki Familia remains a distinct searchable organization.");
for (const [id,claimId] of [
  ["CHAR-RIVERIA-LJOS-ALF","DMR-014-CLM-001"],
  ["CHAR-GARETH-LANDROCK","DMR-014-CLM-002"],
  ["CHAR-BETE-LOGA","DMR-014-CLM-003"],
  ["CHAR-TIONA-HIRYUTE","DMR-014-CLM-004"],
  ["CHAR-TIONE-HIRYUTE","DMR-014-CLM-005"],
  ["CHAR-LEFIYA-VIRIDIS","DMR-014-CLM-006"]
]) {
  const query = id === "CHAR-TIONE-HIRYUTE" ? "Tione Finn" : "Loki Familia";
  const found = corpus.search(index,{query,characterId:id,continuity:"CONT-ANIME",period:"ALL",aspect:"all",spoiler:"all"});
  assert.ok(found.results.some(claim=>claim.claimId===claimId),id+" must be searchable via its official adaptation claim.");
}
const lefiyaSecondary = corpus.search(index,{query:"Lefiya Ais Riveria",characterId:"CHAR-LEFIYA-VIRIDIS",continuity:"CONT-SO",period:"ALL",aspect:"all",spoiler:"all"});
assert.ok(lefiyaSecondary.results.some(claim=>claim.claimId==="DMR-014-CLM-012"),"Lefiya's secondary mentorship claim must be kept under CONT-SO.");
assert.ok(lefiyaSecondary.results.every(claim=>claim.continuityScopes.includes("CONT-SO")),"Secondary Sword Oratoria evidence must not be reclassified as an anime profile.");

assert.ok(index.claims.every(claim => claim.claimId && claim.entryId && claim.claim && claim.sourceIds.length));
assert.equal(new Set(index.claims.map(claim => claim.entryId)).size, index.claims.length);
const historicalRyu = corpus.search(index, { query: "Ryu", characterId: "CHAR-RYUU-LION", continuity: "CONT-AR", period: "ASTREA_RECORD", aspect: "all", spoiler: "all" });
assert.ok(historicalRyu.totalMatches > 0);
assert.ok(historicalRyu.results.every(claim => claim.continuityScopes.includes("CONT-AR")));
assert.ok(!historicalRyu.results.some(claim => claim.entryId.endsWith("--CONT-ANIME")));
assert.ok(historicalRyu.results.some(claim => claim.claimId === "DMR-002-CLM-015"));
assert.ok(historicalRyu.results.some(claim => claim.claimId === "DMR-009-CLM-001"));
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
assert.ok(astreaFamilyClaim.results.some(claim => claim.claimId === "DMR-006-CLM-003"), "Astrea Familia's leadership claim must be available through global lore search.");
const astreaAnimeClaim = corpus.search(index, { query: "Astrea justicia orden", characterId: "CHAR-ASTREA", continuity: "CONT-ANIME", period: "ALL", aspect: "all", spoiler: "all" });
assert.ok(astreaAnimeClaim.results.some(claim => claim.claimId === "DMR-006-CLM-005"), "Astrea adaptation facts must remain separate from the Astrea Record continuity.");

const unsupportedNovelPreference = corpus.search(index, { query: "Ryu", characterId: "CHAR-RYUU-LION", continuity: "CONT-MAIN-LN", period: "ALL", aspect: "likes", spoiler: "all" });
assert.equal(unsupportedNovelPreference.totalMatches, 0, "a personal preference cannot be filled in without evidence, even when the character appears in the main-story corpus.");

const aliseHistorical = corpus.search(index, { query: "Alise", characterId: "CHAR-ALISE-LOVELACE", continuity: "CONT-AR", period: "ALL", aspect: "all", spoiler: "all" });
assert.ok(aliseHistorical.results.some(claim => claim.entryId === "DMR-002-CLM-019--CONT-AR"));
assert.ok(!aliseHistorical.results.some(claim => claim.claim.includes("directa y de ánimo luminoso")));
const aliseAdaptation = corpus.search(index, { query: "Alise", characterId: "CHAR-ALISE-LOVELACE", continuity: "CONT-ANIME", period: "ALL", aspect: "all", spoiler: "all" });
assert.ok(aliseAdaptation.results.some(claim => claim.entryId === "DMR-002-CLM-019--CONT-ANIME"));

process.stdout.write("PASS lore search: 174 source claims, 177 entries, batches 025–029, Familia dossiers, continuity split and abstention verified.\n");

(async () => {
  const sourceDirectory = corpus.getOnlineSourceDirectory();
  assert.ok(sourceDirectory.some(source => source.category === "official" && source.url.includes("danmachi.com/chronology")));
  assert.ok(sourceDirectory.some(source => source.category === "official" && source.url.includes("danmachi.com/sword_oratoria/character")));
  assert.ok(sourceDirectory.some(source => source.category === "official" && source.url.includes("danmachi.com/danmachi/story/episode1.html")));
  assert.ok(sourceDirectory.some(source => source.category === "official" && source.url.includes("ga.sbcr.jp/product/9784815610173")));
  assert.ok(sourceDirectory.some(source => source.category === "community" && source.url.includes("danmachi.fandom.com")));
  assert.ok(sourceDirectory.some(source => source.id === "community-danmachi-en" && source.url === "https://danmachien.miraheze.org/wiki/DanMachi_Wiki"), "Current English Miraheze wiki must be listed ahead of legacy Fandom.");
  assert.ok(sourceDirectory.some(source => source.id === "community-danmachi-es" && source.url.includes("danmachi.miraheze.org/wiki/")), "Current Spanish Miraheze wiki must be discoverable.");
  assert.ok(sourceDirectory.some(source => source.id === "community-fandom" && source.title.includes("archivo anterior")), "Fandom must be clearly labeled as a legacy archive.");
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
  
const somaFamilyEntity = corpus.searchEntities(catalog, { type: "familia", query: "Familia Soma" });
assert.deepEqual(somaFamilyEntity.results.map(entity => entity.id), ["FAM-SOMA"], "Soma Familia must be integrated as a distinct searchable organization.");

assert.equal(corpus.searchEntities(catalog, { type: "familia", query: "Bell Cranel" }).abstain, true);
  process.stdout.write("PASS web research: Fandom/Wikipedia search, secondary-source labels, safe snippets and graceful partial failure verified.\n");
})().catch(error=>{ console.error(error); process.exitCode=1; });


// DANMACHI-RESEARCH-032: five richer profiles plus corrective Olivas ability coverage.
const hermesResearch032 = corpus.search(index, { query: "Hermes Bell Asfi Ouranos", characterId: "CHAR-HERMES", continuity: "CONT-MAIN-LN", period: "ALL", aspect: "all", spoiler: "all" });
assert.ok(hermesResearch032.results.some(claim => claim.claimId === "DMR-032-CLM-001"), "Hermes profile and volume-5 route must be searchable.");
assert.ok(hermesResearch032.results.every(claim => claim.verificationStatus.includes("secondary_extract_only")), "Hermes profile claims must remain secondary.");
const ouranosResearch032 = corpus.search(index, { query: "Ouranos oración Dungeon Xenos Fels", characterId: "CHAR-OURANOS", continuity: "CONT-MAIN-LN", period: "ALL", aspect: "all", spoiler: "all" });
assert.ok(ouranosResearch032.results.some(claim => claim.claimId === "DMR-032-CLM-002"), "Ouranos prayer/Xenos profile must be retrievable.");
assert.ok(ouranosResearch032.results.every(claim => claim.continuityScopes.includes("CONT-MAIN-LN")), "Ouranos result must retain declared main-line scope.");
const ganeshaResearch032 = corpus.search(index, { query: "Ganesha Monsterphilia Xenos Ouranos", characterId: "CHAR-GANESHA", continuity: "CONT-MAIN-LN", period: "ALL", aspect: "all", spoiler: "all" });
assert.ok(ganeshaResearch032.results.some(claim => claim.claimId === "DMR-032-CLM-003"), "Ganesha/Monsterphilia profile must be searchable.");
assert.ok(ganeshaResearch032.results.every(claim => claim.verificationStatus.includes("secondary_extract_only")), "Ganesha profile must remain secondary.");
const daphneResearch032 = corpus.search(index, { query: "Daphne Raumure Laurus Wreath", characterId: "CHAR-DAPHNE-LAUROS", continuity: "CONT-MAIN-LN", period: "ALL", aspect: "all", spoiler: "all" });
assert.ok(daphneResearch032.results.some(claim => claim.claimId === "DMR-032-CLM-004"), "Daphne period/skills/magic profile must be searchable.");
assert.ok(daphneResearch032.results.every(claim => claim.verificationStatus.includes("secondary_extract_only")), "Daphne's levels and mechanics must remain secondary.");
const cassandraResearch032 = corpus.search(index, { query: "Cassandra Soullight sueños Daphne curación", characterId: "CHAR-CASSANDRA-ILION", continuity: "CONT-MAIN-LN", period: "ALL", aspect: "all", spoiler: "all" });
assert.ok(cassandraResearch032.results.some(claim => claim.claimId === "DMR-032-CLM-005"), "Cassandra's healing/prophecy profile must be searchable.");
assert.ok(cassandraResearch032.results.every(claim => claim.verificationStatus.includes("secondary_extract_only")), "Cassandra's prophecy and spell details must remain secondary.");
const olivasAbilities032 = corpus.search(index, { query: "Olivas Accelerated Healing Mind Enhanced Senses Tamer Violas Viscums", characterId: "CHAR-DARK-OLIVAS-ACT", continuity: "CONT-SO", period: "ALL", aspect: "all", spoiler: "all" });
assert.ok(olivasAbilities032.results.some(claim => claim.claimId === "DMR-032-CLM-006"), "Olivas's detailed regeneration/senses/monster-control claim must be indexed.");
assert.ok(olivasAbilities032.results.every(claim => claim.continuityScopes.includes("CONT-SO")), "Olivas ability claim must stay in Sword Oratoria continuity.");
assert.ok(olivasAbilities032.results.every(claim => claim.verificationStatus.includes("secondary_extract_only")), "Olivas ability details must remain secondary pending novel review.");
assert.ok(olivasAbilities032.results.some(claim => claim.sourceUrls.includes("https://danmachi.fandom.com/wiki/Olivas_Act")), "Olivas claim must retain originating wiki URL.");


// DANMACHI-RESEARCH-033 regression tests: deity profiles, Dis Sisters, continuity, identity crosswalk.
const thanatosResearch033 = corpus.search(index, { query: "Thanatos Evilus Ais Enyo Sword Oratoria", characterId: "CHAR-DARK-THANATOS", continuity: "CONT-SO", period: "ALL", aspect: "all", spoiler: "all" });
assert.ok(thanatosResearch033.results.some(claim => claim.claimId === "DMR-033-CLM-001" || claim.claimId === "DMR-033-CLM-002"), "Thanatos profile must be retrievable.");
assert.ok(thanatosResearch033.results.every(claim => claim.verificationStatus.includes("secondary_extract_only")), "Thanatos remains secondary pending novel check.");
const alectoResearch033 = corpus.search(index, { query: "Alecto Familia Dina Vena Evilus", characterId: "CHAR-DARK-ALECTO", continuity: "CONT-AR", period: "ALL", aspect: "all", spoiler: "all" });
assert.ok(alectoResearch033.results.some(claim => claim.claimId === "DMR-033-CLM-004"), "Alecto Familia context must be searchable.");
assert.ok(alectoResearch033.results.every(claim => claim.verificationStatus.includes("secondary_extract_only")), "Alecto remains secondary.");
const apateResearch033 = corpus.search(index, { query: "Apate Familia Spirit Soldiers Osiris maldiciones Evilus", characterId: "CHAR-DARK-APATE", continuity: "CONT-AR", period: "ALL", aspect: "all", spoiler: "all" });
assert.ok(apateResearch033.results.some(claim => claim.claimId === "DMR-033-CLM-003"), "Apate/Spirit Soldiers must be retrievable.");
assert.ok(apateResearch033.results.every(claim => claim.verificationStatus.includes("secondary_extract_only")), "Apate remains secondary.");
const dinaResearch033 = corpus.search(index, { query: "Dina Dis rubio dorado ojos verdes capitana Hogni", characterId: "CHAR-DARK-DINA-DIS", continuity: "CONT-AR", period: "ALL", aspect: "all", spoiler: "all" });
assert.ok(dinaResearch033.results.some(claim => claim.claimId === "DMR-033-CLM-005"), "Dina dossier is searchable.");
assert.ok(dinaResearch033.results.every(claim => claim.verificationStatus.includes("secondary_extract_only")), "Dina remains secondary.");
const venaResearch033 = corpus.search(index, { query: "Vena Dis Diaval Otua Hedin magia bastón", characterId: "CHAR-DARK-VENA-DIS", continuity: "CONT-AR", period: "ALL", aspect: "all", spoiler: "all" });
assert.ok(venaResearch033.results.some(claim => claim.claimId === "DMR-033-CLM-006"), "Vena dossier is searchable.");
assert.ok(venaResearch033.results.every(claim => claim.verificationStatus.includes("secondary_extract_only")), "Vena remains secondary.");
const disSistersMechanics033 = corpus.search(index, { query: "Diaval Stige estadísticas intercambia Diaval Luminis nivel 6", characterId: "CHAR-DARK-DIS-SISTERS", continuity: "CONT-AR", period: "ALL", aspect: "all", spoiler: "all" });
assert.ok(disSistersMechanics033.results.some(claim => claim.claimId === "DMR-033-CLM-007"), "Dis Sisters mechanics are searchable.");
assert.ok(disSistersMechanics033.results.every(claim => claim.verificationStatus.includes("secondary_extract_only")), "Dis Sisters mechanics remain secondary.");
const astreaVersionScope033 = corpus.search(index, { query: "Astrea Record novelización juego Dina Vena", characterId: "CHAR-DARK-DIS-SISTERS", continuity: "CONT-AR", period: "ALL", aspect: "all", spoiler: "all" });
assert.ok(astreaVersionScope033.results.some(claim => claim.claimId === "DMR-033-CLM-008"), "Light-novel/game provenance note is searchable.");
const samiraCrosswalk033 = corpus.search(index, { query: "Samira Hathor Ishtar identidad Era Oscura", characterId: "CHAR-DARK-SAMIRA", continuity: "CONT-UNVERIFIED", period: "ALL", aspect: "all", spoiler: "all" });
assert.ok(samiraCrosswalk033.results.some(claim => claim.claimId === "DMR-033-CLM-009"), "Samira unresolved identity crosswalk is searchable.");
assert.ok(samiraCrosswalk033.results.every(claim => claim.verificationStatus.includes("secondary_extract_only")), "Samira crosswalk remains secondary pending review.");


// DANMACHI-RESEARCH-034 regression tests: richer dossiers remain searchable and continuity-bounded.
assert.ok(index.profileDetails["CHAR-ALLEN-FROMEL"], "Allen's expanded structured profile must be available to the archive.");
assert.ok(index.profileDetails["CHAR-ANYA-FROMEL"], "Anya's expanded structured profile must be available to the archive.");
assert.ok(index.profileDetails["CHAR-MIA-GRAND"], "Mia's expanded structured profile must be available to the archive.");
assert.ok(index.profileDetails["CHAR-LOKI-ALICIA-FORESTLIGHT"], "Alicia's expanded structured profile must be available to the archive.");
assert.ok(index.profileDetails["CHAR-LEENE-ARSHE"], "Leene/Line's one stable identity must be available to the archive.");

const allenResearch034 = corpus.search(index, { query: "Gralineze Fromel velocidad", characterId: "CHAR-ALLEN-FROMEL", continuity: "CONT-MAIN-LN", period: "ALL", aspect: "all", spoiler: "all" });
assert.ok(allenResearch034.results.some(claim => claim.claimId === "DMR-034-CLM-003"), "Allen's magic/speed profile must be searchable.");
assert.ok(allenResearch034.results.every(claim => claim.verificationStatus.includes("secondary_extract_only")), "Allen's wiki claim must remain secondary.");
const anyaResearch034 = corpus.search(index, { query: "Remiste Felis sonora", characterId: "CHAR-ANYA-FROMEL", continuity: "CONT-MAIN-LN", period: "ALL", aspect: "all", spoiler: "all" });
assert.ok(anyaResearch034.results.some(claim => claim.claimId === "DMR-034-CLM-006"), "Anya's magic and limitations must be searchable.");
assert.ok(anyaResearch034.results.every(claim => claim.verificationStatus.includes("secondary_extract_only")), "Anya's wiki claim must remain secondary.");
const miaResearch034 = corpus.search(index, { query: "Ottar Hostess Freya", characterId: "CHAR-MIA-GRAND", continuity: "CONT-MAIN-LN", period: "ALL", aspect: "all", spoiler: "all" });
assert.ok(miaResearch034.results.some(claim => claim.claimId === "DMR-034-CLM-008"), "Mia's history and relationships must be searchable.");
assert.ok(miaResearch034.results.every(claim => claim.verificationStatus.includes("secondary_extract_only")), "Mia's wiki claim must remain secondary.");
const aliciaResearch034 = corpus.search(index, { query: "Hail Dust Grace Sagittarius Mage", characterId: "CHAR-LOKI-ALICIA-FORESTLIGHT", continuity: "CONT-SO", period: "ALL", aspect: "all", spoiler: "all" });
assert.ok(aliciaResearch034.results.some(claim => claim.claimId === "DMR-034-CLM-010"), "Alicia's magic profile must be searchable under Sword Oratoria.");
assert.ok(aliciaResearch034.results.every(claim => claim.verificationStatus.includes("secondary_extract_only")), "Alicia's wiki claim must remain secondary.");
const leeneResearch034 = corpus.search(index, { query: "Line Arshe Bete sentimientos relato", characterId: "CHAR-LEENE-ARSHE", continuity: "CONT-SO", period: "ALL", aspect: "all", spoiler: "all" });
assert.ok(leeneResearch034.results.some(claim => claim.claimId === "DMR-034-CLM-012"), "Leene/Line's short-story relation claim must be searchable.");
assert.ok(leeneResearch034.results.every(claim => claim.verificationStatus.includes("secondary_extract_only")), "Leene/Line's narrative claim must remain secondary.");
const leeneGameAlias034 = corpus.search(index, { query: "Locolyte", characterId: "CHAR-LEENE-ARSHE", continuity: "CONT-GAME", period: "ALL", aspect: "all", spoiler: "all" });
assert.ok(leeneGameAlias034.results.some(claim => claim.claimId === "DMR-034-CLM-013"), "Locolyte must be searchable only in the game continuity.");
assert.ok(leeneGameAlias034.results.every(claim => claim.continuityScopes.includes("CONT-GAME")), "Game-only Line/Leene details must remain isolated.");
const aliciaGameAlias034 = corpus.search(index, { query: "Elleaf Alicia", characterId: "CHAR-LOKI-ALICIA-FORESTLIGHT", continuity: "CONT-GAME", period: "ALL", aspect: "all", spoiler: "all" });
assert.ok(aliciaGameAlias034.results.some(claim => claim.claimId === "DMR-034-CLM-014"), "Elleaf must be searchable as a game-only alias.");
assert.ok(aliciaGameAlias034.results.every(claim => claim.continuityScopes.includes("CONT-GAME")), "Game-only Alicia alias must not leak into novel continuity.");


// DANMACHI-RESEARCH-035: detailed Loki profiles searchable, with secondary status preserved.
const bete035 = corpus.search(index, { query: "Vidar Familia Reene Luna", characterId: "CHAR-BETE-LOGA", continuity: "CONT-SO", period: "ALL", aspect: "all", spoiler: "all" });
assert.ok(bete035.results.some(claim => claim.claimId === "DMR-035-CLM-001"), "Bete's Vidar history must be searchable.");
assert.ok(bete035.results.every(claim => claim.verificationStatus.includes("secondary_extract_only")), "Bete's wiki history must remain secondary.");
const tiona035 = corpus.search(index, { query: "Telskyura Argonaut Wiene Kali", characterId: "CHAR-TIONA-HIRYUTE", continuity: "CONT-MAIN-LN", period: "ALL", aspect: "all", spoiler: "all" });
assert.ok(tiona035.results.some(claim => claim.claimId === "DMR-035-CLM-004"), "Tiona's history and Wiene decision must be searchable.");
assert.ok(tiona035.results.every(claim => claim.verificationStatus.includes("secondary_extract_only")), "Tiona's history must remain secondary.");
const tionaGear035 = corpus.search(index, { query: "Urga Blade Rolan Berserk Intense Heat", characterId: "CHAR-TIONA-HIRYUTE", continuity: "CONT-SO", period: "ALL", aspect: "all", spoiler: "all" });
assert.ok(tionaGear035.results.some(claim => claim.claimId === "DMR-035-CLM-005"), "Tiona's skills and weapons must be searchable.");
const tione035 = corpus.search(index, { query: "List Iorum Backdraft Zolas Filuka", characterId: "CHAR-TIONE-HIRYUTE", continuity: "CONT-MAIN-LN", period: "ALL", aspect: "all", spoiler: "all" });
assert.ok(tione035.results.some(claim => claim.claimId === "DMR-035-CLM-007"), "Tione's magic, abilities and weapons must be searchable.");
assert.ok(tione035.results.every(claim => claim.verificationStatus.includes("secondary_extract_only")), "Tione's magic must remain secondary.");
const lefiya035 = corpus.search(index, { query: "Fairy Canon Double Canon Elf Ring Fusillade Fallarica", characterId: "CHAR-LEFIYA-VIRIDIS", continuity: "CONT-SO", period: "ALL", aspect: "all", spoiler: "all" });
assert.ok(lefiya035.results.some(claim => claim.claimId === "DMR-035-CLM-009"), "Lefiya's magic profile must be searchable.");
assert.ok(lefiya035.results.every(claim => claim.verificationStatus.includes("secondary_extract_only")), "Lefiya's magic must remain secondary.");
const raul035 = corpus.search(index, { query: "Puente Heroes Gran Conflicto Aki", characterId: "CHAR-RAUL-NOORD", continuity: "CONT-SO", period: "ALL", aspect: "all", spoiler: "all" });
assert.ok(raul035.results.some(claim => claim.claimId === "DMR-035-CLM-010"), "Raul's progression with Aki must be searchable.");
const raulGear035 = corpus.search(index, { query: "Hunter Escape Protagonista Noble Bow Finn", characterId: "CHAR-RAUL-NOORD", continuity: "CONT-SO", period: "ALL", aspect: "all", spoiler: "all" });
assert.ok(raulGear035.results.some(claim => claim.claimId === "DMR-035-CLM-011"), "Raul's skills and weapons must be searchable.");
assert.ok(raulGear035.results.every(claim => claim.verificationStatus.includes("secondary_extract_only")), "Raul's wiki claims must remain secondary.");


// DANMACHI-RESEARCH-038: historical profiles remain searchable and source-bounded.
const zeus038 = corpus.search(index, { query: "Zeus Bell relatos héroes adoptivo", characterId: "CHAR-ZEUS", continuity: "CONT-MAIN-LN", period: "ALL", aspect: "all", spoiler: "all" });
assert.ok(zeus038.results.some(claim => claim.claimId === "DMR-038-CLM-001"), "Zeus's adoptive relation and upbringing must be retrievable.");
assert.ok(zeus038.results.every(claim => claim.verificationStatus.includes("secondary_reference")), "Zeus's wiki biography must remain secondary.");
const bellKnowledge038 = corpus.search(index, { query: "Bell Cranel Zeus vivo dios", characterId: "CHAR-ZEUS", continuity: "CONT-MAIN-LN", period: "ALL", aspect: "all", spoiler: "all" });
assert.ok(bellKnowledge038.results.some(claim => claim.claimId === "DMR-038-CLM-002"), "Zeus/Bell knowledge state must be retrievable with spoiler boundaries.");
const heraGuild038 = corpus.search(index, { query: "Hera Familia mapas Guild piso 71", characterId: "CHAR-HERA", continuity: "CONT-UNVERIFIED", period: "ALL", aspect: "all", spoiler: "all" });
assert.ok(heraGuild038.results.some(claim => claim.claimId === "DMR-038-CLM-003"), "Hera Familia's reported institutional contribution must be searchable.");
assert.ok(heraGuild038.results.filter(claim => claim.claimId === "DMR-038-CLM-003").every(claim => claim.verificationStatus.includes("secondary_reference")), "DMR-038 institution-level Hera claim must remain secondary.");
const maxim038 = corpus.search(index, { query: "Maxim capitán nivel 8 Zeus Familia", characterId: "CHAR-MAXIM", continuity: "CONT-MAIN-LN", period: "ALL", aspect: "all", spoiler: "all" });
assert.ok(maxim038.results.some(claim => claim.claimId === "DMR-038-CLM-005"), "Maxim's role and level snapshot must be searchable.");
assert.ok(maxim038.results.every(claim => claim.verificationStatus.includes("secondary_reference")), "Maxim profile claims must remain secondary.");
// Historical dossiers from the Era Oscura must load in the real archive profile registry.
for (const id of ["CHAR-ZEUS","CHAR-HERA","CHAR-MAXIM","CHAR-DARK-ALFIA","CHAR-DARK-ZALD"]) {
  assert.ok(index.profileDetails[id], id + " historical dossier must be available to the archive UI.");
  assert.ok(index.profileDetails[id].sections.length >= 2, id + " must expose multiple structured sections.");
}
const zeusProfileText = index.profileDetails["CHAR-ZEUS"].sections.map(section => section.text).join(" ");
assert.ok(zeusProfileText.includes("Behemoth") && zeusProfileText.includes("Leviathan"), "Zeus dossier must retain the shared official-reference boundary for the two Great Quests.");
const maximProfileText = index.profileDetails["CHAR-MAXIM"].sections.map(section => section.text).join(" ");
assert.ok(maximProfileText.includes("siguiente generación") && maximProfileText.includes("Dragón Negro"), "Maxim profile must expose the reported preparation of the next generation.");
const alfiaProfileText = index.profileDetails["CHAR-DARK-ALFIA"].sections.map(section => section.text).join(" ");
assert.ok(alfiaProfileText.includes("Meteria") && (alfiaProfileText.includes("pendiente") || alfiaProfileText.includes("secundaria")), "Alfia profile must keep its reported family relation and verification caveat.");
const zaldProfileText = index.profileDetails["CHAR-DARK-ZALD"].sections.map(section => section.text).join(" ");
assert.ok(zaldProfileText.includes("veneno") && zaldProfileText.includes("Alfia"), "Zald profile must keep his reported limitation and relationship lead.");

// DANMACHI-RESEARCH-036 regressions: Freya/Hostess dossiers searchable, still secondary.
for (const id of ["CHAR-HEDIN-SELLAND","CHAR-HOGNI-RAGNAR","CHAR-HEITH-VELVET","CHAR-CHLOE-ROLO","CHAR-LUNOA-FAUST"]) {
 assert.ok(index.profileDetails[id], id + " expanded dossier must be available to archive UI.");
}
const hedin036=corpus.search(index,{query:"Laurus Hildr Dizaria",characterId:"CHAR-HEDIN-SELLAND",continuity:"CONT-SO",period:"ALL",aspect:"all",spoiler:"all"});
assert.ok(hedin036.results.some(c=>c.claimId==="DMR-036-CLM-003"),"Hedin magic/weapon must be searchable.");
assert.ok(hedin036.results.every(c=>c.verificationStatus.includes("secondary_extract_only")),"Hedin wiki data must remain secondary.");
const hogni036=corpus.search(index,{query:"Dainsleif Victim Abyss",characterId:"CHAR-HOGNI-RAGNAR",continuity:"CONT-SO",period:"ALL",aspect:"all",spoiler:"all"});
assert.ok(hogni036.results.some(c=>c.claimId==="DMR-036-CLM-006"),"Hogni skills and weapon must be searchable.");
assert.ok(hogni036.results.every(c=>c.verificationStatus.includes("secondary_extract_only")),"Hogni wiki data must remain secondary.");
const heith036=corpus.search(index,{query:"Earth Gullveig Healing Power",characterId:"CHAR-HEITH-VELVET",continuity:"CONT-MAIN-LN",period:"ALL",aspect:"all",spoiler:"all"});
assert.ok(heith036.results.some(c=>c.claimId==="DMR-036-CLM-009"),"Heith healing abilities must be searchable.");
assert.ok(heith036.results.every(c=>c.verificationStatus.includes("secondary_extract_only")),"Heith wiki data must remain secondary.");
const chloe036=corpus.search(index,{query:"Feles Cruz Violetta",characterId:"CHAR-CHLOE-ROLO",continuity:"CONT-MAIN-LN",period:"ALL",aspect:"all",spoiler:"all"});
assert.ok(chloe036.results.some(c=>c.claimId==="DMR-036-CLM-012"),"Chloe magic/weapon must be searchable under stable ID.");
assert.ok(chloe036.results.every(c=>c.verificationStatus.includes("secondary_extract_only")),"Chloe wiki additions must remain secondary.");
const lunoa036=corpus.search(index,{query:"Fist Strike Fist Fighter",characterId:"CHAR-LUNOA-FAUST",continuity:"CONT-MAIN-LN",period:"ALL",aspect:"all",spoiler:"all"});
assert.ok(lunoa036.results.some(c=>c.claimId==="DMR-036-CLM-015"),"Lunoa/Lunoire combat must be searchable under stable ID.");
assert.ok(lunoa036.results.every(c=>c.verificationStatus.includes("secondary_extract_only")),"Lunoa/Lunoire wiki additions must remain secondary.");


/* DANMACHI-RESEARCH-039: current bilingual Miraheze pass remains explicitly secondary. */
const hed039 = corpus.search(index, { query: "Laurus Hildr Dizaria Arry", characterId: "CHAR-HEDIN-SELLAND", continuity: "CONT-SO", period: "ALL", aspect: "all", spoiler: "all" });
assert.ok(hed039.results.some(c => c.claimId === "DMR-039-CLM-001"), "Hedin's relationship and weapon detail must be searchable.");
assert.ok(hed039.results.every(c => c.verificationStatus.includes("secondary_extract_only")), "Hedin Miraheze claims must remain secondary.");
const hog039 = corpus.search(index, { query: "Dainsleif Victim Abyss Mind", characterId: "CHAR-HOGNI-RAGNAR", continuity: "CONT-MAIN-LN", period: "ALL", aspect: "all", spoiler: "all" });
assert.ok(hog039.results.some(c => c.claimId === "DMR-039-CLM-002"), "Hogni magic and cursed-weapon limits must be searchable.");
assert.ok(hog039.results.every(c => c.verificationStatus.includes("secondary_extract_only")), "Hogni Miraheze claims must remain secondary.");
const hei039 = corpus.search(index, { query: "Earth Gullveig Golden Mind", characterId: "CHAR-HEITH-VELVET", continuity: "CONT-MAIN-LN", period: "ALL", aspect: "all", spoiler: "all" });
assert.ok(hei039.results.some(c => c.claimId === "DMR-039-CLM-003"), "Heith's healing limits must be searchable.");
assert.ok(hei039.results.every(c => c.verificationStatus.includes("secondary_extract_only")), "Heith healing claims must remain secondary.");
const heiRel039 = corpus.search(index, { query: "Heith Freya Horn Bell", characterId: "CHAR-HEITH-VELVET", continuity: "CONT-UNVERIFIED", period: "ALL", aspect: "all", spoiler: "all" });
assert.ok(heiRel039.results.some(c => c.claimId === "DMR-039-CLM-004"), "Heith's sensitive relationship claim must preserve attribution.");
assert.ok(heiRel039.results.every(c => c.verificationStatus.includes("secondary_extract_only")), "Heith relationship claim must remain secondary.");
const chloe039 = corpus.search(index, { query: "Feles Cruz Violetta Shakti", characterId: "CHAR-CHLOE-ROLO", continuity: "CONT-SO", period: "ALL", aspect: "all", spoiler: "all" });
assert.ok(chloe039.results.some(c => c.claimId === "DMR-039-CLM-005"), "Chloe's mission and combat detail must be searchable.");
assert.ok(chloe039.results.every(c => c.verificationStatus.includes("secondary_extract_only")), "Chloe's Miraheze claims must remain secondary.");
const lunoa039 = corpus.search(index, { query: "Demeter Gulliver Ryuu Fist Fighter", characterId: "CHAR-LUNOA-FAUST", continuity: "CONT-MAIN-LN", period: "ALL", aspect: "all", spoiler: "all" });
assert.ok(lunoa039.results.some(c => c.claimId === "DMR-039-CLM-006"), "Lunoa/Lunoire's previous Familia and assignments must be searchable under one ID.");
assert.ok(lunoa039.results.every(c => c.verificationStatus.includes("secondary_extract_only")), "Lunoa/Lunoire claims must remain secondary.");

/* DMR-040: Miraheze claims remain secondary, but the public publisher preview verifies the duel scene only. */
const asta040=corpus.search(index,{query:"defensa impenetrable escudo Juggernaut Alfia",characterId:"CHAR-ASTA-KNOX",continuity:"CONT-AR",period:"ALL",aspect:"all",spoiler:"all"});
assert.ok(asta040.results.some(c=>c.claimId==="DMR-040-CLM-001"),"Asta's current wiki details must be searchable.");
assert.ok(asta040.results.filter(c=>c.claimId==="DMR-040-CLM-001").every(c=>c.verificationStatus.includes("secondary_extract_only")),"Asta must remain secondary.");
const celty040=corpus.search(index,{query:"Yenite rayo Mago Ryuu",characterId:"CHAR-CELTY-SROWA",continuity:"CONT-AR",period:"ALL",aspect:"all",spoiler:"all"});
assert.ok(celty040.results.some(c=>c.claimId==="DMR-040-CLM-002"),"Celty's origin and magical role must be searchable.");
assert.ok(celty040.results.filter(c=>c.claimId==="DMR-040-CLM-002").every(c=>c.verificationStatus.includes("secondary_extract_only")),"Celty's expanded claims must remain secondary.");
const iska040=corpus.search(index,{query:"Daidalos orfanato moda maquillaje",characterId:"CHAR-ISKA-BRA",continuity:"CONT-AR",period:"ALL",aspect:"all",spoiler:"all"});
assert.ok(iska040.results.some(c=>c.claimId==="DMR-040-CLM-003"),"Iska's background and motivations must be searchable.");
const neze040=corpus.search(index,{query:"Bloody Justice Fang garras viento lunar",characterId:"CHAR-NEZE-RANKETT",continuity:"CONT-AR",period:"ALL",aspect:"all",spoiler:"all"});
assert.ok(neze040.results.some(c=>c.claimId==="DMR-040-CLM-004"),"Neze's leadership and beastification details must be searchable.");
const noin040=corpus.search(index,{query:"velocidad magia nivel 4 Juggernaut",characterId:"CHAR-NOIN-UNIC",continuity:"CONT-AR",period:"ALL",aspect:"all",spoiler:"all"});
assert.ok(noin040.results.some(c=>c.claimId==="DMR-040-CLM-005"),"Noin's magic and timeline must be searchable.");
const hedin040=corpus.search(index,{query:"tres noches Freya Hedin Hogni",characterId:"CHAR-HEDIN-SELLAND",continuity:"CONT-FC",period:"ALL",aspect:"all",spoiler:"all"});
assert.ok(hedin040.results.some(c=>c.claimId==="DMR-040-CLM-006" && c.verificationStatus==="primary_preview_excerpt_verified"),"The public primary preview must verify only the duel subclaim for Hedin.");
const hogni040=corpus.search(index,{query:"tres noches Freya Hedin Hogni",characterId:"CHAR-HOGNI-RAGNAR",continuity:"CONT-FC",period:"ALL",aspect:"all",spoiler:"all"});
assert.ok(hogni040.results.some(c=>c.claimId==="DMR-040-CLM-007" && c.verificationStatus==="primary_preview_excerpt_verified"),"The public primary preview must verify only the duel subclaim for Hogni.");

/* DMR-041: detailed main Astrea-family profiles remain secondary, with conflicts visible. */
const alise041=corpus.search(index,{query:"Rubrud Beckia Crimson Order fuego",characterId:"CHAR-ALISE-LOVELACE",continuity:"CONT-AR",period:"ALL",aspect:"all",spoiler:"all"});
assert.ok(alise041.results.some(c=>c.claimId==="DMR-041-CLM-002"),"Alise's magic, skill and equipment profile must be searchable.");
assert.ok(alise041.results.filter(c=>c.claimId==="DMR-041-CLM-002").every(c=>c.verificationStatus.includes("secondary_extract_only")),"Alise mechanics must remain secondary.");
const kaguya041=corpus.search(index,{query:"Gojou Rokujou justicia imperial",characterId:"CHAR-KAGUYA",continuity:"CONT-AR",period:"ALL",aspect:"all",spoiler:"all"});
assert.ok(kaguya041.results.some(c=>c.claimId==="DMR-041-CLM-003"),"Kaguya's Far East origin and justice conflict must be searchable.");
const lyra041=corpus.search(index,{query:"prisioneros Mus Mine Carnivore Aegis Helga",characterId:"CHAR-LYRA",continuity:"CONT-AR",period:"ALL",aspect:"all",spoiler:"all"});
assert.ok(lyra041.results.some(c=>c.claimId==="DMR-041-CLM-005"),"Lyra's origin, tactics and equipment must be searchable.");
assert.ok(lyra041.results.filter(c=>c.claimId==="DMR-041-CLM-005").every(c=>c.verificationStatus.includes("secondary_extract_only")),"Lyra's reincarnation claim must remain secondary.");
const astrea041=corpus.search(index,{query:"Percepción Divina Arcanum Espejo Divino mentiras",characterId:"CHAR-ASTREA",continuity:"CONT-ANIME",period:"ALL",aspect:"all",spoiler:"all"});
assert.ok(astrea041.results.some(c=>c.claimId==="DMR-041-CLM-006"),"Astrea's divine abilities must be searchable.");
const ryuuTimeline041=corpus.search(index,{query:"Ryumilua Juggernaut Jura Gale",characterId:"CHAR-RYUU-LION",continuity:"CONT-AR",period:"ALL",aspect:"all",spoiler:"all"});
assert.ok(ryuuTimeline041.results.some(c=>c.claimId==="DMR-041-CLM-007"),"Ryuu's multi-stage timeline and Jura discrepancy must be searchable.");
const ryuuAbilities041=corpus.search(index,{query:"Mind Load Agaris Alvesynth Astraea Record Alf's Justitia",characterId:"CHAR-RYUU-LION",continuity:"CONT-MAIN-LN",period:"ALL",aspect:"all",spoiler:"all"});
assert.ok(ryuuAbilities041.results.some(c=>c.claimId==="DMR-041-CLM-008"),"Ryuu's stage-specific abilities must be searchable.");
assert.ok(ryuuAbilities041.results.filter(c=>c.claimId==="DMR-041-CLM-008").every(c=>c.verificationStatus.includes("secondary_extract_only")),"Ryuu's stage-specific mechanics must remain secondary.");

/* Strict continuity is the UI mode: broad multi-continuity summaries must not leak into a specific adaptation view. */
const ryuAnimeStrictContinuity = corpus.search(index, {
  query:"Hostess of Fertility", characterId:"CHAR-RYUU-LION", continuity:"CONT-ANIME",
  strictContinuity:true, period:"ALL", aspect:"all", spoiler:"all"
});
assert.ok(ryuAnimeStrictContinuity.results.some(c=>c.entryId==="DMR-001-CLM-010--CONT-ANIME"),"The explicitly split anime-specific Ryu claim must remain discoverable.");
assert.ok(ryuAnimeStrictContinuity.results.every(c=>c.continuityScopes.length===1 && c.continuityScopes[0]==="CONT-ANIME"),"Strict anime search must return only anime-scoped evidence.");
const ryuJuraMixed = corpus.search(index, {
  query:"Jura", characterId:"CHAR-RYUU-LION", continuity:"CONT-ANIME",
  period:"ALL", aspect:"all", spoiler:"all"
});
assert.ok(ryuJuraMixed.results.some(c=>c.claimId==="DMR-041-CLM-007"),"Non-strict research mode must retain cross-continuity claims for analysis.");
const ryuJuraStrict = corpus.search(index, {
  query:"Jura", characterId:"CHAR-RYUU-LION", continuity:"CONT-ANIME",
  strictContinuity:true, period:"ALL", aspect:"all", spoiler:"all"
});
assert.equal(ryuJuraStrict.results.some(c=>c.claimId==="DMR-041-CLM-007"),false,"The cross-continuity Jura claim must not be presented as anime-only evidence.");
assert.ok(ryuJuraStrict.results.every(c=>c.continuityScopes.length===1 && c.continuityScopes[0]==="CONT-ANIME"),"Every strict anime result must have one exact continuity scope.");

const zeus042=corpus.search(index,{query:"Bell montañosa fingió estar muerto",characterId:"CHAR-ZEUS",continuity:"CONT-MAIN-LN",period:"ALL",aspect:"all",spoiler:"all"});
assert.ok(zeus042.results.some(c=>c.claimId==="DMR-042-CLM-001"),"Zeus's Bell relationship and feigned-death report must be searchable.");
assert.ok(zeus042.results.filter(c=>c.claimId==="DMR-042-CLM-001").every(c=>c.verificationStatus.includes("secondary_extract_only")),"Zeus's personal biography must remain secondary.");
const families042=corpus.search(index,{query:"Behemoth Leviathan piso 71 Dragón Negro",characterId:"CHAR-ZEUS",continuity:"CONT-UNVERIFIED",period:"ALL",aspect:"all",spoiler:"all"});
assert.ok(families042.results.some(c=>c.claimId==="DMR-042-CLM-002"),"Joint Zeus/Hera institutional history must be searchable.");
const heraRoster042=corpus.search(index,{query:"Emperatriz capitana nivel 9 Hera Familia",characterId:"CHAR-HERA",continuity:"CONT-UNVERIFIED",period:"ALL",aspect:"all",spoiler:"all"});
assert.ok(heraRoster042.results.some(c=>c.claimId==="DMR-042-CLM-003"),"Hera's EN/ES roster discrepancy must remain retrievable.");
const maxim042=corpus.search(index,{query:"Maxim nivel 8 humillar siguiente generación",characterId:"CHAR-MAXIM",continuity:"CONT-UNVERIFIED",period:"ALL",aspect:"all",spoiler:"all"});
assert.ok(maxim042.results.some(c=>c.claimId==="DMR-042-CLM-004"),"Maxim's level and last challenge must be searchable.");
const alfiaBio042=corpus.search(index,{query:"Meteria hermana gemela What If Hera Familia",characterId:"CHAR-DARK-ALFIA",continuity:"CONT-AR",period:"ALL",aspect:"all",spoiler:"all"});
assert.ok(alfiaBio042.results.some(c=>c.claimId==="DMR-042-CLM-005"),"Alfia's family and continuity caveat must be searchable.");
const alfiaAbilities042=corpus.search(index,{query:"Satanas Verion Gif Blessing enfermedad Mind",characterId:"CHAR-DARK-ALFIA",continuity:"CONT-AR",period:"ALL",aspect:"all",spoiler:"all"});
assert.ok(alfiaAbilities042.results.some(c=>c.claimId==="DMR-042-CLM-006"),"Alfia's magic and illness effects must be searchable.");
const zaldBio042=corpus.search(index,{query:"veneno Behemoth Alfia Zeus Familia",characterId:"CHAR-DARK-ZALD",continuity:"CONT-AR",period:"ALL",aspect:"all",spoiler:"all"});
assert.ok(zaldBio042.results.some(c=>c.claimId==="DMR-042-CLM-007"),"Zald's Behemoth poison and Alfia relationship must be searchable.");
const zaldAbilities042=corpus.search(index,{query:"Deus Ambrosia Rea Ambrosia Afterglow Grattor",characterId:"CHAR-DARK-ZALD",continuity:"CONT-AR",period:"ALL",aspect:"all",spoiler:"all"});
assert.ok(zaldAbilities042.results.some(c=>c.claimId==="DMR-042-CLM-008"),"Zald's skill, magic and equipment must be searchable.");
for(const result of [maxim042,alfiaBio042,alfiaAbilities042,zaldBio042,zaldAbilities042])assert.ok(result.results.every(c=>c.verificationStatus.includes("secondary_extract_only")),"All DMR-042 profile claims must remain secondary.");

const alecto043=corpus.search(index,{query:"Alecto Familia Dina Vena Evilus",characterId:"CHAR-DARK-ALECTO",continuity:"CONT-AR",period:"ALL",aspect:"all",spoiler:"all"});
assert.ok(alecto043.results.some(c=>c.claimId==="DMR-043-CLM-001"),"Alecto's dossier claim must be searchable.");
const apate043=corpus.search(index,{query:"Apate Familia Spirit Soldiers Basram",characterId:"CHAR-DARK-APATE",continuity:"CONT-AR",period:"ALL",aspect:"all",spoiler:"all"});
assert.ok(apate043.results.some(c=>c.claimId==="DMR-043-CLM-002"),"Apate's claim must be searchable.");
const thanatos043=corpus.search(index,{query:"Thanatos Familia Knossos Evilus",characterId:"CHAR-DARK-THANATOS",continuity:"CONT-SO",period:"ALL",aspect:"all",spoiler:"all"});
assert.ok(thanatos043.results.some(c=>c.claimId==="DMR-043-CLM-003"),"Thanatos claim must be searchable.");
const basram043=corpus.search(index,{query:"Basram Spirit Soldiers Apate Familia",characterId:"CHAR-DARK-BASRAM",continuity:"CONT-AR",period:"ALL",aspect:"all",spoiler:"all"});
assert.ok(basram043.results.some(c=>c.claimId==="DMR-043-CLM-004"),"Basram claim must be searchable.");
const valletta043=corpus.search(index,{query:"Valletta Grede Thanatos Knossos Sword Oratoria",characterId:"CHAR-DARK-VALLETTA-GREDE",continuity:"CONT-SO",period:"ALL",aspect:"all",spoiler:"all"});
assert.ok(valletta043.results.some(c=>c.claimId==="DMR-043-CLM-005"),"Valletta claim must be searchable.");
for(const result of [alecto043,apate043,thanatos043,basram043,valletta043])assert.ok(result.results.every(c=>c.verificationStatus.includes("secondary_extract_only")),"DMR-043 evidence must remain secondary.");

const barca044=corpus.search(index,{query:"Daidalos Knossos Dix maldición",characterId:"CHAR-DARK-BARCA-PERDIX",continuity:"CONT-SO",period:"ALL",aspect:"all",spoiler:"all"});
assert.ok(barca044.results.some(c=>c.claimId==="DMR-044-CLM-001"),"Barca's Knossos/Dix conflict must be searchable.");
const barcaSkills044=corpus.search(index,{query:"Mystery Misterio armas malditas canto",characterId:"CHAR-DARK-BARCA-PERDIX",continuity:"CONT-SO",period:"ALL",aspect:"all",spoiler:"all"});
assert.ok(barcaSkills044.results.some(c=>c.claimId==="DMR-044-CLM-002"),"Barca's Mystery/cursed weapons claim must be searchable.");
const dina044=corpus.search(index,{query:"Dina Elfa Blanca Dialf Stige Dialf Luminis Hogni",characterId:"CHAR-DARK-DINA-DIS",continuity:"CONT-AR",period:"ALL",aspect:"all",spoiler:"all"});
assert.ok(dina044.results.some(c=>c.claimId==="DMR-044-CLM-003"),"Dina's individual profile and curses must be searchable.");
const vena044=corpus.search(index,{query:"Vena Elfa Oscura Dialf Dis Dialf Otua Hedin",characterId:"CHAR-DARK-VENA-DIS",continuity:"CONT-AR",period:"ALL",aspect:"all",spoiler:"all"});
assert.ok(vena044.results.some(c=>c.claimId==="DMR-044-CLM-004"),"Vena's individual magic claim must be searchable.");
const lineSO044=corpus.search(index,{query:"Line Arshe Leene Arshe Luna Sanatio Valletta",characterId:"CHAR-LEENE-ARSHE",continuity:"CONT-SO",period:"ALL",aspect:"all",spoiler:"all"});
assert.ok(lineSO044.results.some(c=>c.claimId==="DMR-044-CLM-005"),"Line/Leene identity and SO fate must be searchable.");
const lineGame044=corpus.search(index,{query:"Line DanMemo Airmid Bete maldición",characterId:"CHAR-LEENE-ARSHE",continuity:"CONT-GAME",strictContinuity:true,period:"ALL",aspect:"all",spoiler:"all"});
assert.ok(lineGame044.results.some(c=>c.claimId==="DMR-044-CLM-006"),"Line's alternate game survival must be retrievable in its own continuity.");
assert.ok(lineGame044.results.every(c=>c.continuityScopes.length===1 && c.continuityScopes[0]==="CONT-GAME"),"Strict CONT-GAME search must not mix Sword Oratoria death.");
const aliciaBio044=corpus.search(index,{query:"Fanache Riveria Fairy Force Ray Xenos",characterId:"CHAR-LOKI-ALICIA-FORESTLIGHT",continuity:"CONT-SO",period:"ALL",aspect:"all",spoiler:"all"});
assert.ok(aliciaBio044.results.some(c=>c.claimId==="DMR-044-CLM-007"),"Alicia's motivation and Xenos relationship must be searchable.");
const aliciaMagic044=corpus.search(index,{query:"Hail Dust Grace Sagittarius Mage Nivel 5",characterId:"CHAR-LOKI-ALICIA-FORESTLIGHT",continuity:"CONT-SO",period:"ALL",aspect:"all",spoiler:"all"});
assert.ok(aliciaMagic044.results.some(c=>c.claimId==="DMR-044-CLM-008"),"Alicia's spells and Mage development ability must be searchable.");
for(const r of [barca044,barcaSkills044,dina044,vena044,lineSO044,lineGame044,aliciaBio044,aliciaMagic044])assert.ok(r.results.every(c=>c.verificationStatus.includes("secondary_extract_only")),"All DMR-044 claims must remain secondary.");

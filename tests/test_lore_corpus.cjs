const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const corpus = require("../src/lore-corpus.js");
const root = path.join(__dirname, "..", "lore", "danmachi");
const appSource = fs.readFileSync(path.join(__dirname, "..", "src", "app.js"), "utf8");
assert.ok(appSource.includes('{ key:"interview", title:"Material complementario · entrevistas con autores"') && appSource.includes('badge:"ENTREVISTA AUTORAL"'), "The source browser must render author interviews in their own evidence tier, separate from official publisher pages and community leads.");
const catalog = JSON.parse(fs.readFileSync(path.join(root, "catalog.json"), "utf8"));
const documentPaths = corpus.getDefaultResearchPaths();
const documents = documentPaths.map(file => ({ path: file, content: fs.readFileSync(path.join(root, file), "utf8") }));
const detailIds = new Set(corpus.getDefaultDetailIds());
const profilePaths = catalog.records
  .filter(record => detailIds.has(record.id) && typeof record.path === "string" &&
    record.path.startsWith("characters/") && record.path.endsWith(".md"))
  .map(record => record.path);
const profileDocuments = profilePaths.map(file => ({ path: file, content: fs.readFileSync(path.join(root, file), "utf8") }));
const index = corpus.buildIndex(catalog, documents, profileDocuments);
const plainFieldFixture = [
  "### DMR-998-CLM-001 · Metadata sin backticks",
  "- claim_id: DMR-998-CLM-001",
  "- claim: Esta afirmación de prueba describe una habilidad verificable",
  "- character_ids: CHAR-RYUU-LION",
  "- aspect: ability",
  "- era_or_interval: test fixture",
  "- continuity_scope: CONT-AR",
  "- source_id: DMR-998-SRC-001",
  "- source_title: Test secondary source",
  "- source_type: COMMUNITY_WIKI",
  "- source_locator: test-only fixture",
  "- source_url: https://example.test/lore",
  "- evidence_type: test_fixture",
  "- verification_status: secondary_checked",
  "- spoiler_level: mild",
  "- confidence_note: fixture only"
].join("\n");
const plainFieldIndex = corpus.buildIndex(catalog, [{ path: "tests/fixture.md", content: plainFieldFixture }], []);
const bellCharacter = index.characters.find(character => character.id === "DM-CHAR-BELL");
const meteriaCharacter = index.characters.find(character => character.id === "CHAR-METERIA");
assert.equal(bellCharacter?.name, "Bell Cranel", "Bell's identity must remain searchable by his canonical display name.");
assert.ok(meteriaCharacter, "Meteria must be loaded when the historical source bundle is active.");
for (const [file, label] of [
  ["characters/dark-era/alfia.md", "Alfia"],
  ["characters/dark-era/zald.md", "Zald"]
]) {
  const dossier = fs.readFileSync(path.join(root, file), "utf8");
  assert.ok(dossier.includes("DMR-045-SRC-005") && dossier.includes("DMR-045-CLM-006"),
    label + " dossier must expose the same bounded Astrea Record 3 excerpt evidence used by its event relationship.");
  assert.ok(dossier.includes("source editorial") || dossier.includes("ficha editorial"),
    label + " dossier must explain the evidence limit rather than presenting the indexed synopsis as a narrative locator.");
}
assert.ok(![...(meteriaCharacter.aliases || []), ...(meteriaCharacter.keywords || [])]
  .some(value => corpus.normalize(value) === "bell cranel"),
  "Another character's relation tag must not make that character a false exact-name match for Bell Cranel.");

const plainFieldClaim = plainFieldIndex.claims.find(item => item.claimId === "DMR-998-CLM-001");
assert.ok(plainFieldClaim, "The parser must retain claims that use plain metadata keys.");
assert.equal(plainFieldClaim.claim, "Esta afirmación de prueba describe una habilidad verificable");
assert.equal(plainFieldClaim.verificationStatus, "secondary_checked");
assert.deepEqual(plainFieldClaim.sourceUrls, ["https://example.test/lore"]);
const secondaryOnly = corpus.search(plainFieldIndex, { query: "habilidad verificable", verificationStatus: "secondary_checked" });
assert.equal(secondaryOnly.totalMatches, 1, "Evidence status filter must retain matching claims in the selected verification tier.");
const sourceCheckedOnly = corpus.search(plainFieldIndex, { query: "habilidad verificable", verificationStatus: "source_checked" });
assert.equal(sourceCheckedOnly.totalMatches, 0, "Evidence status filter must exclude claims from other verification tiers.");
const allEvidenceStatuses = corpus.search(plainFieldIndex, { query: "habilidad verificable", verificationStatus: "ALL" });
assert.equal(allEvidenceStatuses.totalMatches, 1, "ALL evidence status must preserve the unfiltered search behavior.");
const excerptOnlyFixture = plainFieldFixture.replace("verification_status: secondary_checked", "verification_status: source_checked_excerpt_only");
const excerptOnlyIndex = corpus.buildIndex(catalog, [{ path: "tests/fixture-excerpt.md", content: excerptOnlyFixture }], []);
const sourceTierIncludesExcerpt = corpus.search(excerptOnlyIndex, { query: "habilidad verificable", verificationStatus: "source_checked" });
assert.equal(sourceTierIncludesExcerpt.totalMatches, 1, "The source-checked filter must include qualified primary-source evidence subtypes such as excerpt-only verification.");

for (const id of ["CHAR-SOMA", "CHAR-ZANIS-LUSTRA", "CHAR-CHANDRA-IHIT", "CHAR-CANOE-BELWAY"]) {
  assert.equal(index.profileDetails[id]?.id, id, "Active Soma coverage profile must be available to the detail view: " + id);
}
const familyEntities = corpus.searchEntities(catalog, { type: "familia" });
assert.ok(Array.isArray(index.entityRecords), "Loaded lore index must expose typed catalog entities for the UI.");
assert.ok(Array.isArray(index.relationships), "Loaded lore index must expose source-backed relationship edges.");
assert.ok(index.relationships.length >= 47, "The graph must retain the Astrea/Hestia edges and the newly source-backed Loki Family network.");
assert.ok(index.relationships.some(edge => edge.id === "REL-RIVERIA-VICECAPTAIN-LOKI-FAM" && edge.claimRef === "DMR-005-CLM-003" && edge.continuity === "CONT-SO"), "Riveria's vicecaptain relationship must be explicitly linked to the Sword Oratoria claim.");
assert.ok(index.relationships.some(edge => edge.id === "REL-TIONA-TIONE-TWINS" && edge.claimRef === "DMR-005-CLM-006"), "Twin-sister relationship must have its own evidence-backed edge.");
assert.ok(index.relationships.some(edge => edge.id === "REL-LEFIYA-ADMIRES-AIS" && edge.continuity === "CONT-SO"), "Lefiya's admiration for Ais must be explicit and continuity-scoped.");
assert.ok(index.relationships.length >= 70, "The graph must retain the sourced story paths, cross-continuity Zeus/Hera edges, Volume 21 rescue links, and the new Astrea Record route.");
for (const [id, path] of [["LOC-ORARIO","places/orario.md"],["LOC-BABEL","places/babel.md"],["LOC-HOSTESS","places/hostess-of-fertility.md"]]) {
  assert.ok(catalog.records.some(record => record.id === id && record.path === path), "Official-glossary location must be an active navigable record: " + id);
  assert.ok(!catalog.reservedIds.some(candidate => (typeof candidate === "string" ? candidate : candidate.id) === id), "Activated location ID must no longer remain reserved: " + id);
}
assert.ok(index.relationships.some(edge => edge.id === "REL-BABEL-DUNGEON-MANAGEMENT" && edge.from === "LOC-BABEL" && edge.to === "LOC-DUNGEON" && edge.continuity === "CONT-ANIME" && edge.evidenceStatus === "source_checked" && edge.claimRef === "DMR-026-CLM-002"), "Babel's Dungeon-management relationship must remain sourced and adaptation-scoped.");
assert.deepEqual(corpus.searchEntities(catalog, { type: "location", query: "Babel" }).results.map(entity => entity.id), ["LOC-BABEL"], "Babel must be directly searchable as a location.");
const babelEvidenceSearch = corpus.search(index, { query: "Babel Guild", continuity: "CONT-ANIME" });
assert.ok(babelEvidenceSearch.results.some(item => item.claimId === "DMR-026-CLM-002"), "The official Babel glossary claim must be retrievable.");
const hostessEvidenceSearch = corpus.search(index, { query: "Hostess Loki Familia", continuity: "CONT-ANIME" });
assert.ok(hostessEvidenceSearch.results.some(item => item.claimId === "DMR-026-CLM-003"), "The Hostess/Loki Familia relationship must be retrievable.");
assert.ok(catalog.records.some(record => record.id === "EVT-DM-ASTREA-DEPARTURE-001" && record.path === "events/candidates/EVT-DM-ASTREA-DEPARTURE-001.md" && record.status === "provisional_secondary_evidence"), "The mixed-evidence Astrea departure event must be registered without being promoted to confirmed canon.");
assert.ok(catalog.documents.some(document => document.document_id === "RESEARCH-DM-027" && document.path === "research/inbox/BATCH-DM-010-astrea-departure-and-ryu-revenge.md" && document.status === "provisional_secondary_evidence"), "The existing loaded Astrea/Ryu research package must have a unique catalog document entry.");
assert.ok(index.relationships.some(edge => edge.id === "REL-ASTREA-EVENT-TRAGEDY-ANIME" && edge.to === "EVT-DM-ASTREA-DEPARTURE-001" && edge.continuity === "CONT-ANIME" && edge.evidenceStatus === "source_checked" && edge.claimRef === "DMR-010-CLM-001"), "The official anime tragedy edge must be navigable and adaptation-scoped.");
assert.ok(index.relationships.some(edge => edge.id === "REL-RYU-EVENT-DEPARTURE-SECONDARY" && edge.to === "EVT-DM-ASTREA-DEPARTURE-001" && edge.continuity === "CONT-MAIN-LN" && edge.evidenceStatus === "pending_verification" && edge.claimRef === "DMR-010-CLM-002"), "The request for Astrea to leave must remain explicitly pending primary-source verification.");
assert.ok(index.relationships.some(edge => edge.id === "REL-RYU-EVENT-RETURN-PUBLISHER" && edge.to === "EVT-DM-ASTREA-DEPARTURE-001" && edge.continuity === "CONT-MAIN-LN" && edge.evidenceStatus === "source_checked" && edge.claimRef === "DMR-010-CLM-005"), "The later Ryu visit must be linked only to the publisher synopsis claim.");
const astreaDepartureSearch = corpus.search(index, { query: "Ryu Astrea Orario venganza", continuity: "CONT-MAIN-LN", period: "ALL", aspect: "all", spoiler: "all" });
assert.ok(astreaDepartureSearch.results.some(item => item.claimId === "DMR-010-CLM-002" && item.verificationStatus === "pending_verification"), "Search must return the disputed departure claim without losing its pending status.");

assert.ok(catalog.documents.some(document => document.document_id === "RESEARCH-DM-028" && document.path === "research/inbox/DANMACHI-RESEARCH-028-astrea-wiki-leads.md" && document.status === "secondary_checked_with_primary_gaps"), "The new Astrea wiki research dossier must be registered with its evidence limits.");

assert.ok(corpus.getDefaultResearchPaths().includes("research/inbox/DANMACHI-RESEARCH-021-zeus-hera-familias.md"),
  "The existing Zeus/Hera research must be part of the production search manifest.");
assert.ok(corpus.getDefaultResearchPaths().includes("research/inbox/DANMACHI-RESEARCH-029-historical-character-provenance.md"),
  "The historical-wiki research must be part of the production search manifest.");
assert.ok(catalog.documents.some(document => document.document_id === "DOC-DANMACHI-RESEARCH-021" && document.path === "research/inbox/DANMACHI-RESEARCH-021-zeus-hera-familias.md"),
  "The Zeus/Hera research file must remain registered in the catalog.");
assert.ok(catalog.documents.some(document => document.document_id === "DOC-DANMACHI-RESEARCH-029" && document.path === "research/inbox/DANMACHI-RESEARCH-029-historical-character-provenance.md"),
  "The historical-wiki research file must remain registered in the catalog.");
for (const id of ["CHAR-DARK-ALFIA", "CHAR-DARK-ZALD"]) {
  assert.ok(corpus.getDefaultDetailIds().includes(id), "Wiki-enriched historical profiles must be fetched into detail view: " + id);
  assert.equal(index.profileDetails[id]?.id, id, "Wiki-enriched profile must be available to the detail view: " + id);
}
const alfiaKitSearch = corpus.search(index, { query: "Alfia Satanas Verion Gif Blessing", continuity: "CONT-AR", period: "ALL", aspect: "all", spoiler: "all" });
assert.ok(alfiaKitSearch.results.some(item => item.claimId === "DMR-029-CLM-006" && item.verificationStatus === "secondary_checked" && item.sourceUrls.some(url => url.includes("Alfia/Habilidades"))),
  "Alfia's wiki-sourced magic and ability leads must be searchable with secondary provenance.");
const zaldKitSearch = corpus.search(index, { query: "Zald Deus Ambrosia Behemoth", continuity: "CONT-AR", period: "ALL", aspect: "all", spoiler: "all" });
assert.ok(zaldKitSearch.results.some(item => item.claimId === "DMR-029-CLM-007" && item.verificationStatus === "secondary_checked" && item.sourceUrls.some(url => url.includes("/Zald"))),
  "Zald's wiki-sourced ability and historical leads must be searchable with secondary provenance.");
const heraDeityClaim = index.claims.find(item => item.claimId === "DMR-021-CLM-002");

const zeusDeityClaim = index.claims.find(item => item.claimId === "DMR-021-CLM-001");
assert.ok(zeusDeityClaim?.claim.includes("identifica a Zeus como deidad patrona"),
  "Legacy Spanish bold-labelled Afirmación fields must populate the structured claim text.");
assert.ok(heraDeityClaim?.claim.includes("la identifica como su deidad patrona"),
  "Hera's legacy bold-labelled Afirmación field must populate the structured claim text.");

assert.ok(heraDeityClaim, "Hera's deity claim must be parsed from the registered research file.");
assert.deepEqual(heraDeityClaim.sourceIds.slice().sort(), ["DMR-021-SRC-002", "DMR-021-SRC-004"],
  "A following H2 claim for DMR-008 must not contaminate the preceding Hera claim's source list.");
const historicalWikiSourceDirectory = corpus.getOnlineSourceDirectory();
assert.ok(historicalWikiSourceDirectory.some(item => item.id === "community-alfia-abilities-es" && item.url === "https://danmachi.fandom.com/es/wiki/Alfia/Habilidades"),
  "Alfia's secondary wiki reference must be available from the source browser.");
assert.ok(historicalWikiSourceDirectory.some(item => item.id === "community-zald-es" && item.url === "https://danmachi.fandom.com/es/wiki/Zald"),
  "Zald's secondary wiki reference must be available from the source browser.");
const meteriaAuthorNoteSource = historicalWikiSourceDirectory.find(item => item.id === "official-author-note-meteria-alfia-zald-au");
assert.ok(meteriaAuthorNoteSource && meteriaAuthorNoteSource.url === "https://note.com/fujinoomori/n/n629829ac3fe4" && meteriaAuthorNoteSource.authority.includes("continuidad alternativa") && meteriaAuthorNoteSource.limits.includes("CONT-MAIN-LN"), "The author note must be browsable with its AU-only scope and main-LN limitation visible.");
const meteriaAuthorNoteAU = corpus.search(index, { query: "Meteria Alfia Zald crían Bell escenario alternativo", continuity: "CONT-AU", period: "ALL", aspect: "all", spoiler: "all" });
assert.ok(meteriaAuthorNoteAU.results.some(item => item.claimId === "DMR-029-CLM-012" && item.verificationStatus === "source_checked_excerpt_only" && item.sourceUrls.includes("https://note.com/fujinoomori/n/n629829ac3fe4") && item.profilePaths.includes("characters/dark-era/alfia.md") && item.profilePaths.includes("characters/dark-era/zald.md")), "The author note must be retrievable as AU evidence and offer navigation to Alfia and Zald profiles.");
assert.ok(meteriaAuthorNoteAU.results.some(item => item.claimId === "DMR-029-CLM-012" && item.profilePaths.includes("characters/dark-era/meteria.md") && item.profilePaths.includes("characters/bell-cranel.md")), "The AU claim must index all four involved dossiers, including Meteria and Bell.");
for (const [id,from,to,kind] of [
  ["REL-AU-ALFIA-BELL-CAREGIVER","CHAR-DARK-ALFIA","DM-CHAR-BELL","caregiver_of"],
  ["REL-AU-ZALD-BELL-CAREGIVER","CHAR-DARK-ZALD","DM-CHAR-BELL","caregiver_of"],
  ["REL-AU-METERIA-BELL-MOTHER","CHAR-METERIA","DM-CHAR-BELL","mother_of"]
]) {
  const edge = index.relationships.find(item => item.id === id);
  assert.ok(edge && edge.from === from && edge.to === to && edge.kind === kind, "AU relationship must be navigable with stable endpoints: " + id);
  assert.equal(edge.continuity, "CONT-AU", "Author-note relationship must remain in alternate continuity: " + id);
  assert.equal(edge.evidenceStatus, "source_checked_excerpt_only", "AU relationship must expose the source-limited evidence state: " + id);
  assert.equal(edge.claimRef, "DMR-029-CLM-012", "AU relationship must carry its exact claim provenance: " + id);
}
assert.ok(!index.relationships.some(item => item.id.startsWith("REL-AU-") && item.continuity === "CONT-MAIN-LN"), "AU-specific graph edges must never masquerade as main-light-novel relationships.");

const meteriaAuthorNoteMain = corpus.search(index, { query: "Meteria Alfia Zald crían Bell escenario alternativo", continuity: "CONT-MAIN-LN", period: "ALL", aspect: "all", spoiler: "all" });
assert.ok(!meteriaAuthorNoteMain.results.some(item => item.claimId === "DMR-029-CLM-012"), "The alternate author scenario must never leak into main light-novel search.");

// DMR-029 / DMR-045: keep the author's alternate scenario navigable but outside the main timeline.
const authorAuScenarioId = "EVT-DM-AU-ALFIA-ZALD-RAISE-BELL-001";
const authorAuScenarioPath = "events/candidates/" + authorAuScenarioId + ".md";
const authorAuScenarioRecord = catalog.records.find(record => record.id === authorAuScenarioId);
assert.ok(authorAuScenarioRecord && authorAuScenarioRecord.type === "event" && authorAuScenarioRecord.path === authorAuScenarioPath && authorAuScenarioRecord.status === "source_checked_excerpt_only", "The author alternate scenario must be a separately navigable catalog event with excerpt-limited evidence.");
const authorAuScenarioText = fs.readFileSync(path.join(root, authorAuScenarioPath), "utf8");
assert.ok(authorAuScenarioText.includes("continuity_scope: CONT-AU") && authorAuScenarioText.includes("DMR-029-CLM-012") && authorAuScenarioText.includes("No es un acontecimiento de la cronología principal"), "The scenario detail must state its provenance, AU continuity and exclusion from the main timeline.");
assert.ok(authorAuScenarioText.includes("no establece una duración exacta") && !authorAuScenarioText.includes("periodo de tres años"), "The AU scenario must not invent a duration that is absent from its registered evidence claim.");
for (const [id, from, kind] of [
  ["REL-AU-ALFIA-RAISE-BELL-SCENARIO","CHAR-DARK-ALFIA","participant_in"],
  ["REL-AU-ZALD-RAISE-BELL-SCENARIO","CHAR-DARK-ZALD","participant_in"],
  ["REL-AU-BELL-RAISE-BELL-SCENARIO","DM-CHAR-BELL","central_participant"],
  ["REL-AU-METERIA-RAISE-BELL-SCENARIO","CHAR-METERIA","narrative_connection"]
]) {
  const edge = index.relationships.find(item => item.id === id);
  assert.ok(edge && edge.from === from && edge.to === authorAuScenarioId && edge.kind === kind, "AU scenario navigation must use active endpoints: " + id);
  assert.equal(edge.continuity, "CONT-AU", "AU scenario edges must stay outside the main light novel: " + id);
  assert.equal(edge.evidenceStatus, "source_checked_excerpt_only", "AU scenario edges must keep the excerpt-level evidence limit: " + id);
  assert.equal(edge.claimRef, "DMR-029-CLM-012", "AU scenario edges must retain the author-note claim: " + id);
}
const authorAuTimeline = JSON.parse(fs.readFileSync(path.join(root, "timeline", "eras-and-events.json"), "utf8"));
assert.ok(!authorAuTimeline.events.some(event => event.id === authorAuScenarioId), "An alternate author scenario must not be inserted into the main reference timeline.");
assert.ok(!index.relationships.some(edge => edge.to === authorAuScenarioId && edge.continuity !== "CONT-AU"), "No scenario edge may expose the alternate event under another continuity.");
const astreaPublicationLineage = index.claims.find(item => item.claimId === "DMR-045-CLM-001");
assert.ok(astreaPublicationLineage && astreaPublicationLineage.characterIds.length === 0 && astreaPublicationLineage.sourceUrls.includes("https://danmachi.com/news/news131.php"), "The official Astrea Record publication notice must remain bibliographic and cannot substantiate individual character dossiers.");

const trialSwordLead = corpus.search(index, { query: "Leon Zald Alfia", continuity: "CONT-MAIN-LN", period: "ALL", aspect: "all", spoiler: "all" });
assert.ok(trialSwordLead.results.some(item => item.claimId === "DMR-045-CLM-005" && item.verificationStatus === "secondary_checked" && item.sourceUrls.includes("https://manga-tantei.com/danmachileon-18686")), "The volume 20 trial-sword article must be searchable only as a secondary research lead.");
assert.ok(corpus.getOnlineSourceDirectory().some(source => source.id === "community-leon-vardenburg-vol20-trial-sword-leads" && source.url === "https://manga-tantei.com/danmachileon-18686" && source.authority.includes("Fuente secundaria")), "The article must be visibly labeled secondary in the source browser.");
assert.ok(!index.relationships.some(edge => edge.claimRef === "DMR-045-CLM-005" || (edge.claimRefs || []).includes("DMR-045-CLM-005")), "A secondary interpretation of weapon names must not create canon character relationships.");

const astreaFinalDay = corpus.search(index, { query: "Alfia Zald Ottar Astrea Familia Siete Días de la Muerte", continuity: "CONT-AR", period: "ALL", aspect: "all", spoiler: "all" });
assert.ok(astreaFinalDay.results.some(item => item.claimId === "DMR-045-CLM-006" && item.verificationStatus === "source_checked_excerpt_only" && item.sourceUrls.includes("https://www.sbcr.jp/product/4815617554/")), "The Astrea Record final-day matchup excerpt must be searchable with excerpt-only provenance.");
assert.ok(corpus.getOnlineSourceDirectory().some(source => source.id === "official-sbcr-astrea-record-3-matchups-excerpt" && source.authority.includes("Fragmento de sinopsis editorial oficial indexado") && source.limits.includes("HTTP 503")), "The publisher excerpt must be visible with its direct-access limitation.");
for (const [id,from] of [
 ["REL-ALFIA-ASTREA-RECORD-FINAL-DAY-EXCERPT","CHAR-DARK-ALFIA"],
 ["REL-ZALD-ASTREA-RECORD-FINAL-DAY-EXCERPT","CHAR-DARK-ZALD"]
]) {
 const edge = index.relationships.find(item => item.id === id);
 assert.ok(edge && edge.from === from && edge.to === "EVT-DM-ASTREA-RECORD-FOUNDATIONS-001" && edge.continuity === "CONT-AR" && edge.evidenceStatus === "source_checked_excerpt_only" && edge.claimRef === "DMR-045-CLM-006", "Astrea Record matchup must be navigable only as an excerpt-limited CONT-AR event: " + id);
}
assert.ok(!index.relationships.some(edge => edge.claimRef === "DMR-045-CLM-006" && edge.continuity === "CONT-MAIN-LN"), "Astrea Record excerpt must not leak into main-light-novel continuity.");

assert.ok(index.relationships.some(edge => edge.id === "REL-RYU-KAGUYA-AR-ROSTER-SECONDARY" && edge.from === "CHAR-RYUU-LION" && edge.to === "CHAR-KAGUYA" && edge.evidenceStatus === "secondary_checked" && edge.claimRefs?.includes("DMR-028-CLM-003")), "The existing Ryu/Kaguya historical edge must also expose the wiki-derived moral disagreement without creating a duplicate reverse destination.");
assert.ok(index.relationships.some(edge => edge.id === "REL-LYRA-MEMBER-ASTREA-WIKI" && edge.from === "CHAR-LYRA" && edge.to === "DM-FAM-ASTREA" && edge.evidenceStatus === "secondary_checked" && edge.claimRef === "DMR-028-CLM-004"), "Lyra's reported membership must have a secondary-evidence relationship.");
const kaguyaJusticeSearch = corpus.search(index, { query: "Kaguya Ryu justicia salvar mayoría", continuity: "CONT-AR", period: "ALL", aspect: "all", spoiler: "all" });
assert.ok(kaguyaJusticeSearch.results.some(item => item.claimId === "DMR-028-CLM-003" && item.verificationStatus === "secondary_checked" && item.sourceUrls.some(url => url.includes("Gojouno_Kaguya"))), "Lore search must return the wiki-derived Kaguya/Ryu dynamic with secondary status and source URL.");

const kaguyaSnapshotSearch = corpus.search(index, { query: "Kaguya Yamato Rindou 19 167 nivel piso 41", continuity: "CONT-AR", period: "ALL", aspect: "all", spoiler: "all" });
assert.ok(kaguyaSnapshotSearch.results.some(item => item.claimId === "DMR-028-CLM-023" && item.verificationStatus === "secondary_checked" && item.sourceUrls.some(url => url.includes("Gojouno_Kaguya"))), "Kaguya's alias and reported profile snapshot must be searchable with provenance.");
const kaguyaKitSearch = corpus.search(index, { query: "Kaguya Gokou Shikai Kaina Blood Sakibeni Tekiheni", continuity: "CONT-AR", period: "ALL", aspect: "all", spoiler: "all" });
assert.ok(kaguyaKitSearch.results.some(item => item.claimId === "DMR-028-CLM-024" && item.verificationStatus === "secondary_checked"), "Kaguya's wiki-listed skills and magic must be retrievable without promoting mechanics to canon.");
const kaguyaPastSearch = corpus.search(index, { query: "Kaguya Gojou Rokujou Charm Konohanasakuya justicia", continuity: "CONT-AR", period: "ALL", aspect: "all", spoiler: "all" });
assert.ok(kaguyaPastSearch.results.some(item => item.claimId === "DMR-028-CLM-026" && item.verificationStatus === "secondary_checked"), "Kaguya's detailed past must be queryable and marked secondary.");
const kaguyaFutabaSearch = corpus.search(index, { query: "Kaguya Kodachi Futaba Ryuu", continuity: "CONT-AR", period: "ALL", aspect: "all", spoiler: "all" });
assert.ok(kaguyaFutabaSearch.results.some(item => item.claimId === "DMR-028-CLM-025" && item.verificationStatus === "secondary_checked"), "Kaguya's reported weapon transfer must be searchable as secondary evidence.");
assert.ok(index.relationships.some(edge => edge.id === "REL-RYU-KAGUYA-AR-ROSTER-SECONDARY" && edge.claimRefs?.includes("DMR-028-CLM-025") && edge.claimPaths?.includes("research/inbox/DANMACHI-RESEARCH-028-astrea-wiki-leads.md")), "Kaguya's reported Kodachi Futaba transfer must enrich the existing historical Ryu relationship instead of creating a duplicate destination.");
for (const edgeId of ["REL-KAGUYA-MEMBER-ASTREA-AR-WIKI","REL-WIKI-ALISE-ASTREA-JUGGERNAUT","REL-WIKI-KAGUYA-ASTREA-JUGGERNAUT","REL-WIKI-LYRA-ASTREA-JUGGERNAUT","REL-WIKI-RYUU-SURVIVES-ASTREA-JUGGERNAUT","REL-WIKI-ASTREA-ERA-TO-JUGGERNAUT-ORDER"]) {
  assert.ok(index.relationships.some(edge => edge.id === edgeId && edge.evidenceStatus === "secondary_checked"), "New wiki-derived historical relationship must be navigable and remain secondary: " + edgeId);
}
const lyraAbilitiesSearch = corpus.search(index, { query: "Lyra magia mina bombas", continuity: "CONT-AR", period: "ALL", aspect: "all", spoiler: "all" });
assert.ok(lyraAbilitiesSearch.results.some(item => item.claimId === "DMR-028-CLM-005" && item.verificationStatus === "secondary_checked"), "Lore search must retrieve wiki-lead details for Lyra while preserving source status.");
const celtyMagicSearch = corpus.search(index, { query: "Celty magia defensiva fuego inteligencia", continuity: "CONT-AR", period: "ALL", aspect: "all", spoiler: "all" });
assert.ok(celtyMagicSearch.results.some(item => item.claimId === "DMR-028-CLM-012" && item.verificationStatus === "secondary_checked" && item.sourceUrls.some(url => url.includes("Celty_Srowa"))), "Celty's wiki-derived magic must be searchable with provenance and secondary status.");
const iskaOriginSearch = corpus.search(index, { query: "Iska orfanato Daidalos", continuity: "CONT-AR", period: "ALL", aspect: "all", spoiler: "all" });
assert.ok(iskaOriginSearch.results.some(item => item.claimId === "DMR-028-CLM-015" && item.verificationStatus === "secondary_checked" && item.sourceUrls.some(url => url.includes("Iska_Bra"))), "Iska's wiki-derived background must be searchable without promotion to canon.");
const maryuuMagicSearch = corpus.search(index, { query: "Maryuu curación Rea Vindemia maza", continuity: "CONT-AR", period: "ALL", aspect: "all", spoiler: "all" });
assert.ok(maryuuMagicSearch.results.some(item => item.claimId === "DMR-028-CLM-018" && item.verificationStatus === "secondary_checked"), "Maryuu's healing magic and equipment leads must be retrievable as secondary.");
const astaDefenseSearch = corpus.search(index, { query: "Asta escudo defensa magia", continuity: "CONT-AR", period: "ALL", aspect: "all", spoiler: "all" });
assert.ok(astaDefenseSearch.results.some(item => item.claimId === "DMR-028-CLM-019" && item.verificationStatus === "secondary_checked"), "Asta's community-reported defense and equipment must remain source-labelled.");
assert.ok(index.relationships.some(edge => edge.id === "REL-CELTY-RYANA-WIKI-SECONDARY" && edge.from === "CHAR-CELTY-SROWA" && edge.to === "CHAR-RYANA-LIETZ" && edge.continuity === "CONT-AR" && edge.evidenceStatus === "secondary_checked" && edge.claimRef === "DMR-028-CLM-013"), "Celty-Ryana's wiki-reported relationship must be navigable with the claim explaining it.");
assert.ok(index.relationships.some(edge => edge.id === "REL-CELTY-RYUU-WIKI-SECONDARY" && edge.from === "CHAR-CELTY-SROWA" && edge.to === "CHAR-RYUU-LION" && edge.continuity === "CONT-AR" && edge.evidenceStatus === "secondary_checked" && edge.claimRef === "DMR-028-CLM-014"), "Celty's reported respect for Ryuu must be a distinct, evidence-labelled relationship.");
const expandedSourceDirectory = corpus.getOnlineSourceDirectory();
assert.ok(expandedSourceDirectory.some(source => source.id === "community-celty-srowa" && source.url === "https://danmachi.fandom.com/wiki/Celty_Srowa" && source.limits.includes("secundarias")), "Celty's community source must be available in the online source directory.");
assert.ok(expandedSourceDirectory.some(source => source.id === "community-iska-bra-es" && source.url === "https://danmachi.fandom.com/es/wiki/Iska_Bra"), "Iska's Spanish wiki source must be accessible from the source directory.");
const sourceDirectory = corpus.getOnlineSourceDirectory();
assert.ok(sourceDirectory.some(source => source.id === "community-kaguya" && source.url === "https://danmachi.fandom.com/wiki/Gojouno_Kaguya" && source.limits.includes("secundarios")), "The source browser must expose Kaguya's wiki page with secondary-source limits.");

assert.ok(index.relationships.some(edge => edge.id === "REL-RAUL-FINN-DELEGATED-COMMAND" && edge.claimRef === "DMR-005-CLM-008"), "Raul's delegated coordination role must link to the official claim.");
assert.deepEqual(corpus.searchEntities(catalog, { type: "character", query: "Raul Nord" }).results.map(entity => entity.id), ["CHAR-RAUL-NOORD"], "Raul must be individually discoverable.");
assert.ok(index.relationships.some(edge => edge.id === "REL-RYU-BELL-RETURN-ANIME" && edge.continuity === "CONT-ANIME" && edge.claimRef === "DMR-013-CLM-001"), "Ryu and Bell shared-return edge must be explicit and adaptation-scoped.");
assert.ok(index.relationships.some(edge => edge.id === "REL-RYU-ASTREA-VISIT-ANIME" && edge.continuity === "CONT-ANIME" && edge.claimRef === "DMR-013-CLM-002"), "Ryu visit to Astrea in the anime must remain separate from the novel relation.");
assert.ok(index.relationships.some(edge => edge.id === "REL-RYU-WARGAME-ANIME" && edge.to === "EVT-DM-RYUU-ASTREA-RETURN-ANIME-001"), "Ryu War Game participation must link to a navigable event record.");
assert.ok(index.relationships.some(edge => edge.id === "REL-BELL-ONLY-FOLLOWER-HESTIA-ANIME" && edge.continuity === "CONT-ANIME" && edge.claimRef === "DMR-014-CLM-001"), "Bell and Hestia opening-family state must be explicit and adaptation-scoped.");
assert.ok(index.relationships.some(edge => edge.id === "REL-BELL-OPENING-CRISIS-ANIME" && edge.to === "EVT-DM-BELL-OPENING-CRISIS-ANIME-001" && edge.claimRef === "DMR-014-CLM-002"), "Bell opening Dungeon crisis must link to its own source-backed event.");
assert.ok(index.relationships.some(edge => edge.id === "REL-BELL-MEETS-HESTIA-NOVEL-SYNOPSIS" && edge.continuity === "CONT-MAIN-LN" && edge.claimRef === "DMR-015-CLM-001"), "The main-novel Bell-Hestia meeting must be explicit and backed by the official publisher synopsis.");
assert.ok(index.relationships.some(edge => edge.id === "REL-BELL-MEMBER-HESTIA-MAIN-LN" && edge.from === "DM-CHAR-BELL" && edge.to === "DM-FAM-HESTIA" && edge.continuity === "CONT-MAIN-LN" && edge.evidenceStatus === "source_checked" && edge.claimRef === "DMR-015-CLM-001"), "Bell's membership in Hestia Familia must be navigable in the main novel continuity with publisher-synopsis provenance.");
assert.ok(index.relationships.some(edge => edge.id === "REL-BELL-FIRST-MEETING-EVENT" && edge.from === "DM-CHAR-BELL" && edge.to === "EVT-DM-BELL-MEETS-HESTIA-001" && edge.continuity === "CONT-MAIN-LN" && edge.evidenceStatus === "source_checked" && edge.claimRef === "DMR-015-CLM-001"), "Bell's first-meeting event must be navigable from his dossier with publisher-synopsis provenance.");
assert.ok(index.relationships.some(edge => edge.id === "REL-HESTIA-FIRST-MEETING-EVENT" && edge.from === "DM-CHAR-HESTIA" && edge.to === "EVT-DM-BELL-MEETS-HESTIA-001" && edge.continuity === "CONT-MAIN-LN" && edge.evidenceStatus === "source_checked" && edge.claimRef === "DMR-015-CLM-001"), "Hestia's invitation must link her dossier to the same source-backed novel event.");
assert.ok(index.relationships.some(edge => edge.id === "REL-BELL-MEETS-HESTIA-FAMILIA-EVENT" && edge.from === "EVT-DM-BELL-MEETS-HESTIA-001" && edge.to === "DM-FAM-HESTIA" && edge.continuity === "CONT-MAIN-LN" && edge.evidenceStatus === "source_checked" && edge.claimRef === "DMR-015-CLM-001"), "The meeting event must navigate to Hestia Familia without inventing Falna timing.");
assert.equal(index.relationships.filter(edge => edge.to === "EVT-DM-BELL-MEETS-HESTIA-001" || edge.from === "EVT-DM-BELL-MEETS-HESTIA-001").length, 3, "The first meeting event must have explicit links to both participants and the family supported by the same claim.");
assert.ok(index.relationships.some(edge => edge.id === "REL-EINA-ADVISOR-BELL-ANIME" && edge.continuity === "CONT-ANIME" && edge.claimRef === "DMR-016-CLM-001"), "Eina must link to Bell as assigned advisor in the official adaptation.");
assert.ok(index.relationships.some(edge => edge.id === "REL-EINA-WORKS-GUILD-ANIME" && edge.to === "DM-GUILD-001" && edge.continuity === "CONT-ANIME"), "Eina's role at the Guild must be navigable as a separate institutional relation.");
assert.ok(index.relationships.some(edge => edge.id === "REL-EINA-ADVISOR-EVENT-ANIME" && edge.from === "DM-CHAR-EINA" && edge.to === "EVT-DM-EINA-ADVISOR-ANIME-001" && edge.continuity === "CONT-ANIME" && edge.evidenceStatus === "source_checked" && edge.claimRef === "DMR-016-CLM-001"), "Eina's official anime advisory role must link to its navigable event.");
assert.ok(index.relationships.some(edge => edge.id === "REL-BELL-ADVISOR-EVENT-ANIME" && edge.from === "DM-CHAR-BELL" && edge.to === "EVT-DM-EINA-ADVISOR-ANIME-001" && edge.continuity === "CONT-ANIME" && edge.evidenceStatus === "source_checked" && edge.claimRef === "DMR-016-CLM-001"), "Bell's general advisory route must reach the same event without inventing a scene date.");
assert.ok(index.relationships.some(edge => edge.id === "REL-EINA-ADVISOR-GUILD-EVENT-ANIME" && edge.from === "EVT-DM-EINA-ADVISOR-ANIME-001" && edge.to === "DM-GUILD-001" && edge.continuity === "CONT-ANIME" && edge.evidenceStatus === "source_checked" && edge.claimRef === "DMR-016-CLM-001"), "The official anime advisory event must route to the Guild with source-backed institutional scope.");
assert.equal(index.relationships.filter(edge => edge.to === "EVT-DM-EINA-ADVISOR-ANIME-001" || edge.from === "EVT-DM-EINA-ADVISOR-ANIME-001").length, 3, "The Eina advisory event must link both characters and the Guild only at its documented general-role level.");
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
const expectedSourceClaimCount = documents.reduce((sum, document) => sum + [...document.content.matchAll(/^### DMR-\d{3}-CLM-\d{3} · .+$/gm)].length, 0);
assert.equal(index.sourceClaimCount, expectedSourceClaimCount, "The index source count must reflect every H3 claim in the exact production research manifest.");
assert.ok(index.entryCount >= index.sourceClaimCount, "All manifest claims must survive indexing; continuity-specific splits may create additional entries.");
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
assert.ok(index.relationships.some(edge => edge.id === "REL-ZANIS-CHANDRA-CAPTAINCY-SUCCESSION" && edge.claimRef === "DMR-046-CLM-006" && edge.claimPath === "research/inbox/DANMACHI-RESEARCH-046-solingen-astrea-and-soma-family-characters.md" && edge.evidenceStatus === "secondary_checked"), "Zanis-to-Chandra succession must be marked as a secondary report, not a personal feud.");
assert.ok(index.relationships.some(edge => edge.id === "REL-ZANIS-ACCUSATION-LILI-CANOE" && edge.claimRef === "DMR-046-CLM-005" && edge.claimPath === "research/inbox/DANMACHI-RESEARCH-046-solingen-astrea-and-soma-family-characters.md" && edge.evidenceStatus === "secondary_checked"), "The reported Canoe accusation must be reachable without becoming a verdict of guilt.");
assert.ok(index.relationships.some(edge => edge.id === "REL-CHANDRA-HELPS-LILI-SECONDARY" && edge.claimRef === "DMR-046-CLM-006" && edge.claimPath === "research/inbox/DANMACHI-RESEARCH-046-solingen-astrea-and-soma-family-characters.md"), "Chandra's reported intervention must be a separate, qualified relationship.");
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


// DMR-043: new historical profiles and secondary claims stay searchable with provenance.
assert.ok(corpus.getDefaultResearchPaths().includes("research/inbox/DANMACHI-RESEARCH-043-albert-aria-and-dark-era-review.md"), "DMR-043 must load into default lore retrieval.");
for (const id of ["CHAR-ALBERT-WALDSTEIN","CHAR-ARIA"]) {
  assert.ok(corpus.getDefaultDetailIds().includes(id), "New historical character must be in the detail manifest: " + id);
  assert.equal(index.profileDetails[id]?.id,id,"Historical character detail must resolve by stable ID: " + id);
}
const albertSearch=corpus.search(index,{query:"Albert Waldstein",continuity:"ALL",period:"ALL",aspect:"all",spoiler:"all"});
assert.ok(albertSearch.results.some(item=>item.claimId==="DMR-043-CLM-001"&&item.verificationStatus==="secondary_checked"&&item.sourceUrls.some(url=>url.includes("danmachi.fandom.com/wiki/Albert_Waldstein"))),"Albert must be searchable with wiki provenance.");
const ariaSearch=corpus.search(index,{query:"Aria Ais madre",continuity:"ALL",period:"ALL",aspect:"all",spoiler:"all"});
assert.ok(ariaSearch.results.some(item=>item.claimId==="DMR-043-CLM-003"&&item.verificationStatus==="secondary_checked"),"Aria's reported family relation must stay secondary.");
const juraSearch=corpus.search(index,{query:"Jura collar Lambton",continuity:"CONT-MAIN-LN",period:"ALL",aspect:"all",spoiler:"all"});
assert.ok(juraSearch.results.some(item=>item.claimId==="DMR-043-CLM-008"&&item.verificationStatus==="secondary_checked"),"Jura equipment details must be retrievable in main-novel continuity.");
for(const [id,url] of [
 ["community-albert-waldstein-en","https://danmachi.fandom.com/wiki/Albert_Waldstein"],
 ["community-valletta-grede","https://danmachi.fandom.com/wiki/Valletta_Grede"],
 ["community-thanatos","https://danmachi.fandom.com/wiki/Thanatos"],
 ["community-jura-halmer-es","https://danmachi.fandom.com/es/wiki/Jura_Halmer"],
 ["yenpress-danmachi-13","https://yenpress.com/titles/9781975328191-is-it-wrong-to-try-to-pick-up-girls-in-a-dungeon-vol-13-light-novel"]
]) assert.ok(corpus.getOnlineSourceDirectory().some(source=>source.id===id&&source.url===url),"Missing research source directory entry: "+id);

process.stdout.write("PASS lore search: source claims and entries, Astrea wiki research, volume 21 claims, Familia dossiers, continuity split and abstention verified.\n");

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
  // Secondary wiki claims stay searchable, sourced and explicitly provisional.
  const afterglowSearch = corpus.search(index, { query: "Afterglow Zeus Hera técnica", continuity: "CONT-AR", period: "ALL", aspect: "all", spoiler: "all" });
  assert.ok(afterglowSearch.results.some(item => item.claimId === "DMR-029-CLM-015" && item.verificationStatus === "secondary_checked"), "Afterglow must be discoverable without promoting a wiki claim to primary evidence.");
  const alfiaAbilitiesSearch = corpus.search(index, { query: "Alfia Silentium Eden Genos Angelus", continuity: "CONT-AR", period: "ALL", aspect: "all", spoiler: "all" });
  assert.ok(alfiaAbilitiesSearch.results.some(item => item.claimId === "DMR-029-CLM-019" && item.verificationStatus === "secondary_checked"), "Alfia's wiki-reported abilities must be searchable with secondary provenance.");
  const helgaOfficialGameSearch = corpus.search(index, { query: "Helga Fianna Omori", continuity: "CONT-GAME", period: "ALL", aspect: "all", spoiler: "all" });
  assert.ok(helgaOfficialGameSearch.results.some(item => item.claimId === "DMR-044-CLM-011" && item.verificationStatus === "source_checked" && item.sourceUrls.some(url => url === "https://www.wfs.games/news/20220623_01.html")), "Helga's official Memoria Freese story context must be searchable with its official source and must not be conflated with wiki-only details.");
  assert.ok(corpus.getOnlineSourceDirectory().some(source => source.id === "wfs-danmemo-knights-fianna" && source.url === "https://www.wfs.games/news/20220623_01.html" && source.limits.includes("reencarnación")), "The official WFS game announcement must be discoverable in the source browser with its evidence limits.");
  const lyraHelgaSearch = corpus.search(index, { query: "Lyra Helga reencarnación", continuity: "CONT-GAME", period: "ALL", aspect: "all", spoiler: "all" });
  assert.ok(lyraHelgaSearch.results.some(item => item.claimId === "DMR-044-CLM-009" && item.verificationStatus === "secondary_checked"), "Lyra/Helga's reported reincarnation claim must remain searchable and secondary.");
  assert.ok(index.relationships.some(edge => edge.id === "REL-WIKI-LYRA-HELGA-REINCARNATION" && edge.from === "CHAR-LYRA" && edge.to === "CHAR-HELGA" && edge.claimRef === "DMR-044-CLM-009" && edge.continuity === "CONT-GAME" && edge.evidenceStatus === "secondary_checked"), "Lyra/Helga must be linked with explicit secondary provenance.");
  assert.ok(index.relationships.some(edge => edge.id === "REL-WIKI-ZEUS-HERA-AFTERGLOW" && edge.from === "FAM-ZEUS" && edge.to === "FAM-HERA" && edge.claimRef === "DMR-029-CLM-015" && edge.evidenceStatus === "secondary_checked"), "Afterglow must link Zeus and Hera Familias through its source claim.");
  assert.ok(corpus.getDefaultDetailIds().includes("CHAR-HELGA"), "Helga's individual dossier must be loaded by the production detail manifest.");
  assert.ok(corpus.getOnlineSourceDirectory().some(source => source.id === "community-afterglow" && source.url === "https://danmachi.fandom.com/wiki/Terminology"), "Afterglow's community reference must be discoverable from the source directory.");

  assert.ok(corpus.getDefaultResearchPaths().includes("research/inbox/DANMACHI-RESEARCH-042-olivas-act-dossier.md"), "Olivas research must load through the default retrieval manifest.");
assert.ok(corpus.getDefaultDetailIds().includes("CHAR-OLIVAS-ACT"), "Olivas must load through the default detail profile manifest.");
assert.equal(index.profileDetails["CHAR-OLIVAS-ACT"]?.id, "CHAR-OLIVAS-ACT", "Olivas must be available as an individual detail profile.");
const olivasAbilitySearch = corpus.search(index, { query: "Olivas", continuity: "ALL", period: "ALL", aspect: "all", spoiler: "all" });
assert.ok(olivasAbilitySearch.results.some(item => item.claimId === "DMR-042-CLM-004" && item.verificationStatus === "secondary_checked" && item.sourceUrls.some(url => url.includes("danmachi.fandom.com/wiki/Olivas_Act"))), "Olivas's ability lead must be searchable with the original wiki URL and secondary status.");
const olivasPublisherSearch = corpus.search(index, { query: "Ais monstruos Rivira domador", continuity: "CONT-SO", period: "ALL", aspect: "all", spoiler: "all" });
assert.ok(olivasPublisherSearch.results.some(item => item.claimId === "DMR-042-CLM-008" && item.verificationStatus === "source_checked" && item.sourceUrls.some(url => url.includes("yenpress.com/titles/9780316318181"))), "Publisher search must return only the limited editorial context, separate from wiki ability claims.");
assert.ok(corpus.getOnlineSourceDirectory().some(source => source.id === "community-olivas-act" && source.url === "https://danmachi.fandom.com/wiki/Olivas_Act"), "The community source must be available in the browse directory.");
assert.ok(corpus.getOnlineSourceDirectory().some(source => source.id === "yenpress-sword-oratoria-03" && source.url.includes("9780316318181")), "The publisher synopsis must be available in the source directory.");

process.stdout.write("PASS web research: Fandom/Wikipedia search, secondary-source labels, safe snippets and graceful partial failure verified.\n");
})().catch(error=>{ console.error(error); process.exitCode=1; });


// Orario secondary wiki leads must be included in the production research manifest,
// remain searchable, and keep an explicit secondary-evidence status.
const orarioMapSearch = corpus.search(index, { query: "Orario ocho secciones mapa", continuity: "CONT-UNVERIFIED", period: "ALL", aspect: "all", spoiler: "all" });
assert.ok(orarioMapSearch.results.some(item => item.claimId === "DMR-031-CLM-001" && item.verificationStatus === "secondary_checked"), "The English Orario map and place inventory must be searchable as secondary evidence.");
const orarioRoadsSearch = corpus.search(index, { query: "Orario avenidas radialmente ocho murallas", continuity: "CONT-UNVERIFIED", period: "ALL", aspect: "all", spoiler: "all" });
assert.ok(orarioRoadsSearch.results.some(item => item.claimId === "DMR-031-CLM-003" && item.verificationStatus === "secondary_checked"), "Japanese wiki leads about the urban layout must be searchable without canon promotion.");
const orarioEconomySearch = corpus.search(index, { query: "Orario piedras mágicas ciudad desarrollo", continuity: "CONT-UNVERIFIED", period: "ALL", aspect: "all", spoiler: "all" });
assert.ok(orarioEconomySearch.results.some(item => item.claimId === "DMR-031-CLM-004" && item.verificationStatus === "secondary_checked"), "Wiki-sourced economic leads must remain retrievable and secondary-labelled.");
const guildBuildingSearch = corpus.search(index, { query: "Guild Pantheon mostradores biblioteca aventureros", continuity: "CONT-UNVERIFIED", period: "ALL", aspect: "all", spoiler: "all" });
assert.ok(guildBuildingSearch.results.some(item => item.claimId === "DMR-031-CLM-006" && item.verificationStatus === "secondary_checked"), "Guild/Pantheon building details must be retrievable separately from canon-confirmed facts.");
const babelFloorsSearch = corpus.search(index, { query: "Babel torre pisos Dungeon comerciales", continuity: "CONT-UNVERIFIED", period: "ALL", aspect: "all", spoiler: "all" });
assert.ok(babelFloorsSearch.results.some(item => item.claimId === "DMR-031-CLM-007" && item.verificationStatus === "secondary_checked"), "Detailed Babel floor claims must remain searchable but explicitly secondary.");
const orarioSources = corpus.getOnlineSourceDirectory();
for (const [id, url] of [
  ["community-orario-en", "https://danmachi.fandom.com/wiki/Orario"],
  ["community-orario-es", "https://danmachi.fandom.com/es/wiki/Orario"],
  ["community-guild", "https://danmachi.fandom.com/wiki/Guild"],
  ["community-babel", "https://danmachi.fandom.com/wiki/Babel"],
  ["community-orario-atwiki-ja", "https://w.atwiki.jp/danmachi/pages/53.html"]
]) {
  assert.ok(orarioSources.some(source => source.id === id && source.url === url && source.authority === "Fuente secundaria"), "Orario wiki sources must be available from the searchable source directory: " + id);
}


// Daedalus Street is source-checked for its mention in the anime and separately
// secondary-labelled for its detailed urban layout. Pantheon stays secondary-only.
assert.ok(corpus.getDefaultResearchPaths().includes("research/inbox/DANMACHI-RESEARCH-032-daedalus-street-official-anime-reference.md"), "Daedalus Street's official adaptation claim must be part of the production research manifest.");
const daedalusOfficialSearch = corpus.search(index, { query: "Daedalus Orario episodio", continuity: "CONT-ANIME", period: "ALL", aspect: "all", spoiler: "all" });
assert.ok(daedalusOfficialSearch.results.some(item => item.claimId === "DMR-032-CLM-001" && item.verificationStatus === "source_checked"), "The official anime mention of Daedalus Street must be searchable in CONT-ANIME.");
const daedalusWikiSearch = corpus.search(index, { query: "Daedalus residencial laberíntico Maria", continuity: "CONT-UNVERIFIED", period: "ALL", aspect: "all", spoiler: "all" });
assert.ok(daedalusWikiSearch.results.some(item => item.claimId === "DMR-031-CLM-009" && item.verificationStatus === "secondary_checked"), "Detailed Daedalus Street geography must remain searchable as secondary evidence.");
const pantheonSecondarySearch = corpus.search(index, { query: "Pantheon Guild edificio biblioteca", continuity: "CONT-UNVERIFIED", period: "ALL", aspect: "all", spoiler: "all" });
assert.ok(pantheonSecondarySearch.results.some(item => item.claimId === "DMR-031-CLM-006" && item.verificationStatus === "secondary_checked"), "Pantheon must remain searchable as a secondary-only physical-location lead.");
assert.ok(catalog.records.some(record => record.id === "LOC-DAEDALUS-STREET" && record.path === "places/daedalus-street.md" && record.type === "location"), "Daedalus Street must have an active location record.");
assert.ok(catalog.records.some(record => record.id === "LOC-PANTHEON" && record.path === "places/pantheon.md" && record.status === "source_checked_partial"), "Pantheon must reflect the newly sourced name while retaining explicitly secondary-only interior claims.");
assert.ok(!catalog.reservedIds.some(record => record.id === "LOC-DAEDALUS-STREET"), "An activated Daedalus Street ID must no longer remain reserved.");
assert.ok(index.relationships.some(edge => edge.id === "REL-DAEDALUS-ORARIO-OFFICIAL" && edge.claimRef === "DMR-032-CLM-001" && edge.evidenceStatus === "source_checked"), "Daedalus Street must have an officially sourced, adaptation-scoped relation to Orario.");
assert.ok(index.relationships.some(edge => edge.id === "REL-PANTHEON-GUILD-HEADQUARTERS-SECONDARY" && edge.claimRef === "DMR-031-CLM-006" && edge.evidenceStatus === "secondary_checked"), "Pantheon and the Guild must be linked without promoting the wiki claim.");
const pantheonEntitySearch = corpus.searchEntities(catalog, { type: "location", query: "Pantheon" });
assert.ok(pantheonEntitySearch.results.some(entity => entity.id === "LOC-PANTHEON"), "Pantheon must be discoverable as a location entity.");
const daedalusEntitySearch = corpus.searchEntities(catalog, { type: "location", query: "Daidalos" });
assert.ok(daedalusEntitySearch.results.some(entity => entity.id === "LOC-DAEDALUS-STREET"), "Daidalos must find the same location through its translation alias.");
const addedSources = corpus.getOnlineSourceDirectory();
assert.ok(addedSources.some(source => source.id === "official-danmachi3-story" && source.url === "https://danmachi.com/danmachi3/story/index.html"), "Official DanMachi III episode synopsis must be discoverable in the source directory.");
assert.ok(addedSources.some(source => source.id === "community-daedalus-street" && source.url === "https://danmachi.fandom.com/wiki/Daedalus_Street" && source.authority === "Fuente secundaria"), "Daedalus Street's wiki must be discoverable and secondary-labelled.");


// Distinguish Hestia Familia's former church from its post-War-Game mansion.
// The official synopsis proves the transition in CONT-ANIME; the claimed cause
// of church destruction stays a separately searchable wiki lead.
assert.ok(corpus.getDefaultResearchPaths().includes("research/inbox/DANMACHI-RESEARCH-033-hestia-familia-residences.md"), "The Hestia-residence evidence package must be included in production search.");
const hestiaResidenceOfficialSearch = corpus.search(index, { query: "Hestia Apollo iglesia mansión War Game", continuity: "CONT-ANIME", period: "ALL", aspect: "all", spoiler: "all" });
assert.ok(hestiaResidenceOfficialSearch.results.some(item => item.claimId === "DMR-033-CLM-001" && item.verificationStatus === "source_checked"), "The official synopsis must support the church-to-mansion transition in the anime.");
const abandonedChurchWikiSearch = corpus.search(index, { query: "iglesia Apollo Hestia Familia", continuity: "CONT-UNVERIFIED", period: "ALL", aspect: "all", spoiler: "all" });
assert.ok(abandonedChurchWikiSearch.results.some(item => item.claimId === "DMR-031-CLM-010" && item.verificationStatus === "secondary_checked"), "Apollo Familia's alleged responsibility for the church destruction must remain secondary.");
assert.ok(catalog.records.some(record => record.id === "LOC-HESTIA-HOME" && record.path === "places/hestia-familia-church.md" && record.type === "location"), "The former Hestia church must have a live location record.");
assert.ok(catalog.records.some(record => record.id === "LOC-APOLLO-MANOR" && record.path === "places/apollo-familia-mansion.md" && record.type === "location"), "The Apollo mansion must have its own stable physical-location record.");
assert.ok(!catalog.reservedIds.some(record => record.id === "LOC-HESTIA-HOME"), "The activated former-home ID must no longer remain reserved.");
assert.ok(index.relationships.some(edge => edge.id === "REL-HESTIA-CHURCH-FORMER-HOME-ANIME" && edge.from === "LOC-HESTIA-HOME" && edge.to === "DM-FAM-HESTIA" && edge.claimRef === "DMR-033-CLM-001" && edge.evidenceStatus === "source_checked"), "The former church must be linked to Hestia Familia with official adaptation provenance.");
assert.ok(index.relationships.some(edge => edge.id === "REL-APOLLO-MANOR-REPLACES-CHURCH" && edge.from === "LOC-APOLLO-MANOR" && edge.to === "LOC-HESTIA-HOME" && edge.claimRef === "DMR-033-CLM-001" && edge.evidenceStatus === "source_checked"), "The residential transition must connect two distinct places with a claim explaining it.");
assert.ok(corpus.searchEntities(catalog, { type: "location", query: "iglesia abandonada" }).results.some(entity => entity.id === "LOC-HESTIA-HOME"), "The former church must be discoverable by its secondary alias.");
assert.ok(corpus.searchEntities(catalog, { type: "location", query: "Apollo mansion" }).results.some(entity => entity.id === "LOC-APOLLO-MANOR"), "The mansion must be discoverable as a separate location.");
assert.ok(corpus.getOnlineSourceDirectory().some(source => source.id === "official-danmachi2-story" && source.url === "https://danmachi.com/danmachi2/story/index.html?slideNum=2"), "The official Season II synopsis must be available in the source directory.");


// Official Prototype source material enriches Orario while remaining separated
// from the published novel and anime. These tests defend the continuity boundary.
assert.ok(corpus.getDefaultResearchPaths().includes("research/inbox/DANMACHI-RESEARCH-034-orario-prototype-streets-commerce-babel.md"), "The Orario Prototype dossier must be included in the production research manifest.");
const prototypeRoadsSearch = corpus.search(index, { query: "Orario avenidas ocho nordeste noroeste", continuity: "CONT-PROTOTYPE", period: "ALL", aspect: "all", spoiler: "all" });
assert.ok(prototypeRoadsSearch.results.some(item => item.claimId === "DMR-034-CLM-002" && item.verificationStatus === "source_checked"), "The eight radial avenues must be searchable under the Prototype continuity.");
const prototypeBabelCommerceSearch = corpus.search(index, { query: "Babel tiendas aventureros Familias comerciales calidad", continuity: "CONT-PROTOTYPE", period: "ALL", aspect: "all", spoiler: "all" });
assert.ok(prototypeBabelCommerceSearch.results.some(item => item.claimId === "DMR-034-CLM-007" && item.verificationStatus === "source_checked"), "Prototype's Babel market detail must be searchable with its source status.");
const prototypeCentralParkSearch = corpus.search(index, { query: "Central Park Babel faroles piedras mágicas tabernas noche", continuity: "CONT-PROTOTYPE", period: "ALL", aspect: "all", spoiler: "all" });
assert.ok(prototypeCentralParkSearch.results.some(item => item.claimId === "DMR-034-CLM-009" && item.verificationStatus === "source_checked"), "Prototype's Central Park night scene must be searchable.");
const prototypeNotCanonSearch = corpus.search(index, { query: "Orario avenidas ocho nordeste noroeste", continuity: "CONT-MAIN-LN", period: "ALL", aspect: "all", spoiler: "all" });
assert.ok(!prototypeNotCanonSearch.results.some(item => /^DMR-034-CLM-/.test(item.claimId || "")), "Prototype-only claims must not leak into published-novel search.");
assert.ok(catalog.records.some(record => record.id === "LOC-ORARIO-MAIN-STREETS" && record.path === "places/main-streets.md" && record.status === "source_checked_partial"), "The Orario avenue network must be navigable as its own location entry.");
assert.ok(catalog.records.some(record => record.id === "LOC-CENTRAL-PARK" && record.path === "places/central-park.md" && record.status === "source_checked_partial"), "Central Park must be navigable as its own location entry.");
assert.ok(!catalog.reservedIds.some(record => ["LOC-ORARIO-MAIN-STREETS","LOC-CENTRAL-PARK"].includes(record.id)), "Activated Prototype locations must not remain reserved.");
assert.ok(index.relationships.some(edge => edge.id === "REL-ORARIO-MAIN-STREETS-OF-ORARIO" && edge.from === "LOC-ORARIO-MAIN-STREETS" && edge.to === "LOC-ORARIO" && edge.continuity === "CONT-PROTOTYPE" && edge.claimRef === "DMR-034-CLM-002"), "The avenue-network relation must carry Prototype provenance.");
assert.ok(index.relationships.some(edge => edge.id === "REL-CENTRAL-PARK-AROUND-BABEL-PROTOTYPE" && edge.from === "LOC-CENTRAL-PARK" && edge.to === "LOC-BABEL" && edge.continuity === "CONT-PROTOTYPE" && edge.claimRef === "DMR-034-CLM-003"), "Central Park must be linked to Babel only under the Prototype continuity.");
assert.ok(corpus.searchEntities(catalog, { type: "location", query: "avenidas principales" }).results.some(entity => entity.id === "LOC-ORARIO-MAIN-STREETS"), "Orario's street network must be findable as an entity.");
assert.ok(corpus.searchEntities(catalog, { type: "location", query: "Central Park" }).results.some(entity => entity.id === "LOC-CENTRAL-PARK"), "Central Park must be findable as an entity.");
const prototypeSources = corpus.getOnlineSourceDirectory();
for (const [id,url] of [
  ["official-prototype-03","https://danmachi.com/10_projects/prototype_03.php"],
  ["official-prototype-16","https://danmachi.com/10_projects/prototype_16.php"],
  ["official-prototype-26","https://danmachi.com/10_projects/prototype_26.php"]
]) {
  assert.ok(prototypeSources.some(source => source.id === id && source.url === url && source.authority.includes("continuidad separada")), "Prototype source must be searchable and explicitly separate: " + id);
}


// An official publisher synopsis is searchable as published-novel paratext,
// without treating it as a novel excerpt or using it for street-level geography.
assert.ok(corpus.getDefaultResearchPaths().includes("research/inbox/DANMACHI-RESEARCH-035-orario-volume1-publisher-synopsis.md"), "The volume 1 publisher synopsis must be included in the research manifest.");
const volumeOnePublisherSearch = corpus.search(index, { query: "Orario gran ciudad laberinto subterráneo Dungeon", continuity: "CONT-MAIN-LN", period: "ALL", aspect: "all", spoiler: "all" });
assert.ok(volumeOnePublisherSearch.results.some(item => item.claimId === "DMR-035-CLM-001" && item.verificationStatus === "source_checked"), "The publisher synopsis claim about the Orario-Dungeon premise must be searchable in the main-novel scope.");
assert.ok(!volumeOnePublisherSearch.results.some(item => /^DMR-034-CLM-/.test(item.claimId || "")), "Prototype-only geographic claims must remain excluded from published-novel search.");
assert.ok(index.relationships.some(edge => edge.id === "REL-ORARIO-DUNGEON-PUBLISHED-LN-SYNOPSIS" && edge.from === "LOC-ORARIO" && edge.to === "LOC-DUNGEON" && edge.continuity === "CONT-MAIN-LN" && edge.claimRef === "DMR-035-CLM-001" && edge.evidenceStatus === "source_checked"), "Orario's published-novel-synopsis relation to Dungeon must carry explicit paratext provenance.");
assert.ok(corpus.getOnlineSourceDirectory().some(source => source.id === "ga-ln-volume-01-synopsis" && source.url === "https://ga.sbcr.jp/product/9784797372809/" && source.authority.includes("paratexto")), "The official volume 1 publisher synopsis must be searchable and accurately classified.");



// DMR-047: one partial publisher-preview location remains isolated from adaptation/Prototype geography.
assert.ok(corpus.getDefaultResearchPaths().includes("research/inbox/DANMACHI-RESEARCH-047-orario-north-plaza-volume2-preview.md"), "DMR-047 must be in the default research manifest.");
const northPlazaSearch = corpus.search(index, { query: "Orario norte plaza semicircular avenida principal Eina equipo", continuity: "CONT-MAIN-LN", period: "ALL", aspect: "all", spoiler: "all" });
assert.ok(northPlazaSearch.results.some(item => item.claimId === "DMR-047-CLM-001" && item.verificationStatus === "source_checked_excerpt_only"), "The publisher-preview plaza detail must be searchable with its partial-excerpt status.");
assert.ok(catalog.records.some(record => record.id === "LOC-ORARIO-NORTH-PLAZA" && record.path === "places/north-plaza.md" && record.status === "source_checked_partial"), "The north plaza must be a separately navigable location with explicit evidence limits.");
assert.ok(corpus.searchEntities(catalog, { type: "location", query: "plaza semicircular norte Orario" }).results.some(entity => entity.id === "LOC-ORARIO-NORTH-PLAZA"), "The unnamed northern plaza must be discoverable through location search.");
assert.ok(index.relationships.some(edge => edge.id === "REL-ORARIO-NORTH-PLAZA-OF-ORARIO" && edge.from === "LOC-ORARIO-NORTH-PLAZA" && edge.to === "LOC-ORARIO" && edge.continuity === "CONT-MAIN-LN" && edge.claimRef === "DMR-047-CLM-001" && edge.evidenceStatus === "source_checked_excerpt_only"), "The location relation must carry the exact claim, continuity and evidence status.");
assert.ok(corpus.getOnlineSourceDirectory().some(source => source.id === "ga-ln-volume-02-trial" && source.url === "https://ga.sbcr.jp/sp/danmachi/trial02.pdf" && source.authority.includes("Extracto editorial")), "The official publisher preview must appear in the live source directory.");
const northPlazaPrototypeSearch = corpus.search(index, { query: "Orario norte plaza semicircular avenida principal", continuity: "CONT-PROTOTYPE", period: "ALL", aspect: "all", spoiler: "all" });
assert.ok(!northPlazaPrototypeSearch.results.some(item => item.claimId === "DMR-047-CLM-001"), "The main-novel excerpt must not leak into Prototype continuity.");

// DMR-048: primary publisher excerpt for Pantheon, with physical-layout uncertainty preserved.
assert.ok(corpus.getDefaultResearchPaths().includes("research/inbox/DANMACHI-RESEARCH-048-pantheon-main-novel-preview.md"), "DMR-048 must be in the default research manifest.");
const pantheonMainNovelSearch = corpus.search(index, { query: "Pantheon avenida comercios Guild mármol blanco", continuity: "CONT-MAIN-LN", period: "ALL", aspect: "all", spoiler: "all" });
assert.ok(pantheonMainNovelSearch.results.some(item => item.claimId === "DMR-048-CLM-001" && item.verificationStatus === "source_checked_excerpt_only"), "The official Pantheon excerpt must be searchable under main-novel continuity with excerpt-only evidence status.");
assert.ok(index.relationships.some(edge => edge.id === "REL-PANTHEON-ORARIO-MAIN-LN-PREVIEW" && edge.from === "LOC-PANTHEON" && edge.to === "LOC-ORARIO" && edge.continuity === "CONT-MAIN-LN" && edge.claimRef === "DMR-048-CLM-001" && edge.evidenceStatus === "source_checked_excerpt_only"), "Pantheon must link to Orario with the exact source-backed claim and evidence status.");
assert.ok(corpus.getOnlineSourceDirectory().some(source => source.id === "ga-ln-volume-03-trial" && source.url === "https://ga.sbcr.jp/sp/danmachi/trial03.pdf" && source.limits.includes("Babel")), "The official volume 3 preview must be available in the source browser with the building-identity limitation.");
const pantheonPrototypeSearch = corpus.search(index, { query: "Pantheon avenida tiendas Guild", continuity: "CONT-PROTOTYPE", period: "ALL", aspect: "all", spoiler: "all" });
assert.ok(!pantheonPrototypeSearch.results.some(item => item.claimId === "DMR-048-CLM-001"), "The main-novel Pantheon claim must not leak into Prototype continuity.");

// DMR-049: Sword Oratoria vol. 7 synopsis is searchable only in CONT-SO-LN, without promoting it to main LN.
assert.ok(corpus.getDefaultResearchPaths().includes("research/inbox/DANMACHI-RESEARCH-049-daedalus-street-sword-oratoria-vol7.md"), "DMR-049 must be in the default research manifest.");
const daedalusSwordOratoriaSearch = corpus.search(index, { query: "Daedalus Street Melen Loki Familia", continuity: "CONT-SO-LN", period: "ALL", aspect: "all", spoiler: "all" });
assert.ok(daedalusSwordOratoriaSearch.results.some(item => item.claimId === "DMR-049-CLM-001" && item.verificationStatus === "source_checked" && item.sourceUrls.includes("https://ga.sbcr.jp/product/9784797389340/")), "Daedalus Street must be searchable from the official Sword Oratoria vol. 7 synopsis with its source and continuity.");
assert.ok(index.relationships.some(edge => edge.id === "REL-DAEDALUS-STREET-LOKI-SO-VOL7" && edge.from === "LOC-DAEDALUS-STREET" && edge.to === "DM-FAM-LOKI" && edge.continuity === "CONT-SO-LN" && edge.claimRef === "DMR-049-CLM-001" && edge.evidenceStatus === "source_checked"), "The Loki Familia investigation relation must carry the Sword Oratoria claim provenance.");
assert.ok(corpus.getOnlineSourceDirectory().some(source => source.id === "official-sword-oratoria-vol-7" && source.url === "https://ga.sbcr.jp/product/9784797389340/" && source.limits.includes("CONT-SO-LN")), "Sword Oratoria vol. 7 must be discoverable in the source browser with explicit continuity limits.");
const daedalusMainLnSearch = corpus.search(index, { query: "Daedalus Street Melen Loki Familia", continuity: "CONT-MAIN-LN", period: "ALL", aspect: "all", spoiler: "all" });
assert.ok(!daedalusMainLnSearch.results.some(item => item.claimId === "DMR-049-CLM-001"), "Sword Oratoria evidence must not leak into main light-novel continuity.");

// DMR-050: the official short story is CONT-SHORT, distinct from main LN and Sword Oratoria.
assert.ok(corpus.getDefaultResearchPaths().includes("research/inbox/DANMACHI-RESEARCH-050-daedalus-street-official-short-story.md"), "DMR-050 must be in the default research manifest.");
const daedalusShortStorySearch = corpus.search(index, { query: "Daedalus Street Tiona Lefiya Filvis", continuity: "CONT-SHORT", period: "ALL", aspect: "all", spoiler: "all" });
assert.ok(daedalusShortStorySearch.results.some(item => item.claimId === "DMR-050-CLM-001" && item.verificationStatus === "source_checked_excerpt_only" && item.sourceUrls.includes("https://ga.sbcr.jp/sp/AIS/fifthanniv_ais.pdf")), "Daedalus Street must be searchable from the official supplemental short story with excerpt-only provenance.");
assert.ok(index.relationships.some(edge => edge.id === "REL-DAEDALUS-STREET-LOKI-CONT-SHORT" && edge.from === "LOC-DAEDALUS-STREET" && edge.to === "DM-FAM-LOKI" && edge.continuity === "CONT-SHORT" && edge.claimRef === "DMR-050-CLM-001" && edge.evidenceStatus === "source_checked_excerpt_only"), "The short-story location relationship must have CONT-SHORT provenance.");
assert.ok(corpus.getOnlineSourceDirectory().some(source => source.id === "official-daedalus-short-story" && source.url === "https://ga.sbcr.jp/sp/AIS/fifthanniv_ais.pdf" && source.authority.includes("CONT-SHORT")), "The official short story must be discoverable with its continuity label.");
const daedalusShortStoryMainSearch = corpus.search(index, { query: "Daedalus Street Tiona Lefiya Filvis", continuity: "CONT-MAIN-LN", period: "ALL", aspect: "all", spoiler: "all" });
assert.ok(!daedalusShortStoryMainSearch.results.some(item => item.claimId === "DMR-050-CLM-001"), "Official short-story evidence must not leak into main light-novel continuity.");
const daedalusShortStorySOSearch = corpus.search(index, { query: "Daedalus Street Tiona Lefiya Filvis", continuity: "CONT-SO-LN", period: "ALL", aspect: "all", spoiler: "all" });
assert.ok(!daedalusShortStorySOSearch.results.some(item => item.claimId === "DMR-050-CLM-001"), "Official short-story evidence must not leak into Sword Oratoria continuity.");

// DMR-044 historical dossiers: default retrieval and game-continuity isolation.
assert.ok(corpus.getDefaultResearchPaths().includes("research/inbox/DANMACHI-RESEARCH-044-kali-fianna-maxim-review.md"),"DMR-044 must be in the research manifest.");
for(const id of ["CHAR-MAXIM","CHAR-HELGA","CHAR-ARGANA-KALIF","CHAR-BACHE-KALIF","CHAR-SELDAS"]) {
  assert.ok(detailIds.has(id),"Missing default detail ID: "+id);
  assert.ok(index.profileDetails[id]?.id===id,"Profile detail must resolve by ID: "+id);
}
for(const [query,continuity,claimId] of [
 ["Maxim Zeus Familia nivel 8","CONT-MAIN-LN","DMR-044-CLM-001"],
 ["Argana Kalima resistencia","CONT-SO-LN","DMR-044-CLM-004"],
 ["Bache Velgus veneno","CONT-SO-LN","DMR-044-CLM-006"],
 ["Seldas Tione infancia","CONT-SO-LN","DMR-044-CLM-007"],
 ["Helga Lyra reencarnacion","CONT-GAME","DMR-044-CLM-009"]
]) {
 const found=corpus.search(index,{query,continuity,period:"ALL",aspect:"all",spoiler:"all"});
 assert.ok(found.results.some(item=>item.claimId===claimId&&item.verificationStatus==="secondary_checked"),"Claim should remain searchable with its evidence status: "+claimId);
}
for(const [id,url] of [
 ["community-maxim","https://danmachi.fandom.com/wiki/Maxim"],
 ["community-argana-kalif","https://danmachi.fandom.com/wiki/Argana_Kalif"],
 ["community-bache-kalif","https://danmachi.fandom.com/wiki/Bache_Kalif"],
 ["community-tione-hiryute","https://danmachi.fandom.com/wiki/Tione_Hiryute"],
 ["community-helga-danmemo","https://danmachi.fandom.com/wiki/Helga_%28DanMemo%29"],
 ["official-ga-sword-oratoria-06","https://ga.sbcr.jp/product/9784797388466/"],
 ["community-lyra","https://danmachi.fandom.com/wiki/Lyra"]
]) assert.ok(corpus.getOnlineSourceDirectory().some(source=>source.id===id&&source.url===url),"Missing source directory entry: "+id);
const swordOratoriaVol6Preview = historicalWikiSourceDirectory.find(item => item.id === "official-sword-oratoria-vol6-preview");
assert.ok(swordOratoriaVol6Preview && swordOratoriaVol6Preview.url === "https://r.binb.jp/epm/e1_27313_02062016113152/" && swordOratoriaVol6Preview.authority.includes("metadatos solamente") && swordOratoriaVol6Preview.limits.includes("no expone texto narrativo"), "The official Sword Oratoria 6 sample reader must appear in the source browser with its metadata-only evidence limit.");
const swordOratoriaSynopsisClaim = index.claims.find(item => item.claimId === "DMR-044-CLM-010");
assert.ok(swordOratoriaSynopsisClaim?.sourceUrls.includes("https://ga.sbcr.jp/product/9784797388466/") && !swordOratoriaSynopsisClaim.sourceUrls.includes("https://r.binb.jp/epm/e1_27313_02062016113152/"), "The Sword Oratoria vol. 6 synopsis claim must not misrepresent inaccessible sample pages as read evidence.");
const volume20OfficialSource = historicalWikiSourceDirectory.find(item => item.id === "official-ga-main-v20");
assert.ok(volume20OfficialSource && volume20OfficialSource.url === "https://ga.sbcr.jp/product/9784815628697/" && volume20OfficialSource.limits.includes("no menciona a Maxim"), "The official volume 20 publisher page must be searchable with its character-claim limitation visible.");
const maximHistoricalClaim = index.claims.find(item => item.claimId === "DMR-044-CLM-001");
assert.ok(maximHistoricalClaim?.sourceUrls.includes("https://danmachi.fandom.com/wiki/Maxim") && !maximHistoricalClaim.sourceUrls.includes("https://ga.sbcr.jp/product/9784815628697/"), "The volume 20 editorial synopsis must not be treated as evidence for Maxim's level, office or history.");



// DMR-045: historical-character continuity audit, editorial lineage and attribution limits.
assert.ok(corpus.getDefaultResearchPaths().includes("research/inbox/DANMACHI-RESEARCH-045-dark-era-characters-continuity-audit.md"),"DMR-045 must be in the default research manifest.");
assert.ok(detailIds.has("CHAR-METERIA")&&index.profileDetails["CHAR-METERIA"]?.id==="CHAR-METERIA","Meteria must be available through the default detail manifest.");
for(const [query,continuity,claimId,status] of [
 ["Astrea Record Memoria Freese tres volúmenes","CONT-AR","DMR-045-CLM-001","source_checked"],
 ["Rudra Familia trampa Dungeon Juggernaut responsabilidad personal","CONT-MAIN-LN","DMR-045-CLM-002","secondary_checked"],
 ["Erebus Absolute Evil","CONT-AR","DMR-045-CLM-003","secondary_checked"]
]) {
 const found=corpus.search(index,{query,continuity,period:"ALL",aspect:"all",spoiler:"all"});
 assert.ok(found.results.some(item=>item.claimId===claimId&&item.verificationStatus===status),"DMR-045 claim must be searchable with its evidence status: "+claimId);
}
assert.ok(corpus.getOnlineSourceDirectory().some(source=>source.id==="official-astrea-record-revision"&&source.url==="https://danmachi.com/news/news131.php"),"Official Astrea Record publication lineage must be in online source search.");
assert.ok(corpus.getOnlineSourceDirectory().some(source=>source.id==="official-ga-astrea-record-3-limited-edition"&&source.url==="https://ga.sbcr.jp/product/9784815617554/"),"The official Astrea Record 3 limited edition page must be reachable from the online source directory.");
const astreaLimitedEditionAU = corpus.search(index,{query:"Astrea Record 3 edición limitada cuadernillo",continuity:"CONT-AU",period:"ALL",aspect:"all",spoiler:"all"});
assert.ok(astreaLimitedEditionAU.results.some(item=>item.claimId==="DMR-045-CLM-004"&&item.verificationStatus==="source_checked"&&item.sourceUrls.includes("https://ga.sbcr.jp/product/9784815617554/")),"The limited edition product-page claim must be retrievable as official AU publication metadata.");
const astreaLimitedEditionMain = corpus.search(index,{query:"Astrea Record 3 edición limitada cuadernillo",continuity:"CONT-MAIN-LN",period:"ALL",aspect:"all",spoiler:"all"});
assert.ok(!astreaLimitedEditionMain.results.some(item=>item.claimId==="DMR-045-CLM-004"),"The alternative story's publication metadata must not leak into main light-novel continuity.");



// DMR-046: the seven files and claims are indexed for detail navigation and retrieval.
const dmr046Path = "research/inbox/DANMACHI-RESEARCH-046-solingen-astrea-and-soma-family-characters.md";
assert.ok(corpus.getDefaultResearchPaths().includes(dmr046Path), "DMR-046 must be in the default research manifest.");
for (const id of ["CHAR-CECIL-BLACKLIZA","CHAR-ISELINA","CHAR-SHAU","CHAR-ULANDA","CHAR-ZANIS-LUSTRA","CHAR-CHANDRA-IHIT","CHAR-CANOE-BELWAY"]) {
  assert.ok(detailIds.has(id) && index.profileDetails[id]?.id === id, "DMR-046 detail route must be available: " + id);
}
for (const [query,claimId] of [
  ["Cecil Blackliza herrera Blacksmith","DMR-046-CLM-003"],
  ["Iselina Shau Ulanda hombre lobo pallum","DMR-046-CLM-002"],
  ["Zanis acusa Liliruca desaparición Canoe","DMR-046-CLM-005"],
  ["Chandra Ihit capitán ayuda Liliruca","DMR-046-CLM-006"],
  ["Canoe Belway mapache nivel 1 fallecido","DMR-046-CLM-007"]
]) {
  const found = corpus.search(index,{query,continuity:"CONT-MAIN-LN",period:"ALL",aspect:"all",spoiler:"all"});
  assert.ok(found.results.some(item => item.claimId === claimId && item.verificationStatus === "secondary_checked"), "DMR-046 claim must be searchable with a visible secondary status: " + claimId);
}
for (const [id,url] of [
 ["community-astrea-family-es-current","https://danmachi.fandom.com/es/wiki/Familia_Astrea"],
 ["community-cecil-blackliza","https://danmachi.fandom.com/wiki/Cecil_Blackliza"],
 ["community-zanis-lustra","https://danmachi.fandom.com/wiki/Zanis_Lustra"],
 ["community-volume-6-synopsis","https://danmachi.fandom.com/wiki/DanMachi_Light_Novel_Volume_6/Synopsis"],
 ["community-chandra-ihit","https://danmachi.fandom.com/wiki/Chandra_Ihit"],
 ["community-canoe-belway","https://danmachi.fandom.com/wiki/Canoe_Belway"],
 ["official-ga-danmachi-06","https://ga.sbcr.jp/product/9784797380583/"]
]) assert.ok(corpus.getOnlineSourceDirectory().some(source => source.id === id && source.url === url), "Missing DMR-046 online source directory entry: " + id);

// DMR-045: metadata-only Astrea Record 1 sample reader; never use it to confirm character claims.
const astreaVol1Preview = historicalWikiSourceDirectory.find(item => item.id === "official-astrea-record-vol1-preview");
assert.ok(astreaVol1Preview && astreaVol1Preview.url === "https://r.binb.jp/epm/e1_260370_02092022101233/" && astreaVol1Preview.authority.includes("metadatos solamente") && String(astreaVol1Preview.limits).toLocaleLowerCase("es").includes("no respalda ninguna capacidad"), "The official Astrea Record preview must be discoverable with its metadata-only limitation visible.");
assert.ok(!astreaPublicationLineage.sourceUrls.includes("https://r.binb.jp/epm/e1_260370_02092022101233/"), "A trial-reader URL with no accessible narrative text must not be added as evidence for individual dossiers or as the official publication-notice claim.");

const danmachiVol20PreviewUrl = "https://viewer-trial.bookwalker.jp/03/21/viewer.html?cid=2996c502-7cb0-42b4-821a-b63df271d442";
const danmachiVol20Preview = historicalWikiSourceDirectory.find(item => item.id === "official-bookwalker-danmachi-vol20-page17");
assert.ok(danmachiVol20Preview && danmachiVol20Preview.url === danmachiVol20PreviewUrl && String(danmachiVol20Preview.coverage).includes("17/33") && String(danmachiVol20Preview.limits).includes("No demuestra ausencia"), "The DanMachi volume 20 sample locator must retain its exact page scope and avoid absence claims.");
assert.ok(!index.claims.some(item => item.sourceUrls.includes(danmachiVol20PreviewUrl)), "A single inspected sample page must not become generic evidence for the five historical dossiers.");

// DMR-045: author's supplementary interview supports only the Alfia -> Bell aunt relation.
const alfiaAuntInterviewUrl = "https://dengekionline.com/articles/189750/";
const alfiaAuntInterview = corpus.getOnlineSourceDirectory().find(source => source.id === "author-interview-alfia-aunt-bell");
assert.equal(alfiaAuntInterview?.category, "interview", "An author interview published by a media outlet must not be presented as an official publisher page.");
assert.ok(alfiaAuntInterview && alfiaAuntInterview.url === alfiaAuntInterviewUrl && alfiaAuntInterview.authority.includes("no texto de novela") && String(alfiaAuntInterview.limits).includes("No aporta capítulo/página"), "The author interview must be discoverable with its supplementary-evidence boundary visible.");
const alfiaAuntInAR = corpus.search(index, {query:"Alfia tía Bell",continuity:"CONT-AR",period:"ALL",aspect:"all",spoiler:"all"});
assert.ok(alfiaAuntInAR.results.some(item => item.claimId === "DMR-045-CLM-007" && item.verificationStatus === "source_checked" && item.sourceUrls.includes(alfiaAuntInterviewUrl)), "The author's Alfia-to-Bell kinship statement must be searchable as a scoped, source-backed claim.");
const alfiaAuntInMainLN = corpus.search(index, {query:"Alfia tía Bell",continuity:"CONT-MAIN-LN",period:"ALL",aspect:"all",spoiler:"all"});
assert.ok(!alfiaAuntInMainLN.results.some(item => item.claimId === "DMR-045-CLM-007"), "The interview claim scoped to Astrea Record must not leak into main-LN continuity.");
const alfiaAuntEdge = index.relationships.find(edge => edge.id === "REL-ALFIA-BELL-AUNT-INTERVIEW");
assert.ok(alfiaAuntEdge && alfiaAuntEdge.from === "CHAR-DARK-ALFIA" && alfiaAuntEdge.to === "DM-CHAR-BELL" && alfiaAuntEdge.kind === "aunt_of" && alfiaAuntEdge.continuity === "CONT-AR" && alfiaAuntEdge.claimRef === "DMR-045-CLM-007" && alfiaAuntEdge.evidenceStatus === "source_checked", "Alfia's aunt relationship to Bell must be explicitly graph-linked to the interview claim and continuity.");

// DMR-045: a separate 2020 author interview supports the aunt relation only within CONT-GAME.
const alfiaAuntGameInterviewUrl = "https://ln-news.com/articles/109766";
const alfiaAuntGameInterview = corpus.getOnlineSourceDirectory().find(source => source.id === "author-interview-alfia-aunt-game");
assert.equal(alfiaAuntGameInterview?.category, "interview", "The Memoria Freese interview must be classified as author interview, not official publisher material.");
assert.ok(alfiaAuntGameInterview && alfiaAuntGameInterview.url === alfiaAuntGameInterviewUrl && alfiaAuntGameInterview.authority.includes("no texto de novela") && String(alfiaAuntGameInterview.limits).includes("no nombra a la hermana como Meteria"), "The game-origin interview must expose its continuity and naming limitations.");
const alfiaAuntInGame = corpus.search(index, {query:"Alfia hermana Bell madre",continuity:"CONT-GAME",period:"ALL",aspect:"all",spoiler:"all"});
assert.ok(alfiaAuntInGame.results.some(item => item.claimId === "DMR-045-CLM-008" && item.verificationStatus === "source_checked" && item.sourceUrls.includes(alfiaAuntGameInterviewUrl)), "The game-scoped aunt relationship must be searchable with the author-interview source.");
const alfiaAuntInterviewNotMain = corpus.search(index, {query:"Alfia hermana Bell madre",continuity:"CONT-MAIN-LN",period:"ALL",aspect:"all",spoiler:"all"});
assert.ok(!alfiaAuntInterviewNotMain.results.some(item => item.claimId === "DMR-045-CLM-008"), "The original game reveal must not leak into main light-novel continuity.");
const alfiaAuntInterviewNotAR = corpus.search(index, {query:"Alfia hermana Bell madre",continuity:"CONT-AR",period:"ALL",aspect:"all",spoiler:"all"});
assert.ok(!alfiaAuntInterviewNotAR.results.some(item => item.claimId === "DMR-045-CLM-008"), "The game-origin interview claim must remain separate from the novelization-specific CONT-AR claim.");
const alfiaAuntGameEdge = index.relationships.find(edge => edge.id === "REL-ALFIA-BELL-AUNT-GAME-INTERVIEW");
assert.ok(alfiaAuntGameEdge && alfiaAuntGameEdge.from === "CHAR-DARK-ALFIA" && alfiaAuntGameEdge.to === "DM-CHAR-BELL" && alfiaAuntGameEdge.kind === "aunt_of" && alfiaAuntGameEdge.continuity === "CONT-GAME" && alfiaAuntGameEdge.claimRef === "DMR-045-CLM-008" && alfiaAuntGameEdge.evidenceStatus === "source_checked", "The game continuity must have a distinct explicit Alfia-to-Bell edge from the 2020 interview.");
assert.ok(!index.relationships.some(edge => edge.id === "REL-METERIA-BELL-MOTHER-GAME-INTERVIEW" || edge.claimRef === "DMR-045-CLM-008" && [edge.from,edge.to].includes("CHAR-METERIA")), "The interview does not name the sister; do not infer or graph-link Meteria from this claim.");

const bellPaternalGameClaim = index.claims.find(item => item.claimId === "DMR-045-CLM-012");
assert.ok(bellPaternalGameClaim, "The father's reported supporter role must be indexed as a distinct narrative claim.");
assert.deepEqual(bellPaternalGameClaim.characterIds, ["DM-CHAR-BELL"], "Do not create an identity for the unnamed father.");
assert.deepEqual(bellPaternalGameClaim.continuityScopes, ["CONT-GAME"], "Bell's reported paternal role must remain in original game continuity.");
assert.equal(bellPaternalGameClaim.verificationStatus, "source_checked", "The claim is tied to the affirmative author-interview exchange, not to a character caption.");
assert.ok(bellPaternalGameClaim.sourceIds.includes("DMR-045-SRC-009") && bellPaternalGameClaim.sourceUrls.includes("https://ln-news.com/articles/109766"), "The father's role must expose the interview source.");
const bellPaternalGameSearch = corpus.search(index, {query:"padre Bell supporter Zeus Familia",continuity:"CONT-GAME",period:"ALL",aspect:"all",spoiler:"all"});
assert.ok(bellPaternalGameSearch.results.some(item => item.claimId === "DMR-045-CLM-012"), "The game-context paternal role must be retrievable from narrative search.");
for (const continuity of ["CONT-MAIN-LN", "CONT-AR"]) {
  const noLeak = corpus.search(index, {query:"padre Bell supporter Zeus Familia",continuity,period:"ALL",aspect:"all",spoiler:"all"});
  assert.ok(!noLeak.results.some(item => item.claimId === "DMR-045-CLM-012"), "The game-context paternal role must not leak into " + continuity + ".");
}
const bellGameOriginEdge = index.relationships.find(edge => edge.id === "REL-BELL-BIRTH-ORIGIN-ASTREA-GAME");
assert.ok(bellGameOriginEdge && bellGameOriginEdge.from === "DM-CHAR-BELL" && bellGameOriginEdge.to === "EVT-DM-GAME-ASTREA-RECORD-001" && bellGameOriginEdge.continuity === "CONT-GAME" && bellGameOriginEdge.claimRef === "DMR-045-CLM-012" && bellGameOriginEdge.evidenceStatus === "source_checked", "Bell's source-backed game-origin claim must navigate to the original-game event.");
const bellManualDossierSource = fs.readFileSync(path.join(__dirname, "..", "src", "character-dossiers.js"), "utf8");
assert.ok(bellManualDossierSource.includes("DMR-045-CLM-012") && bellManualDossierSource.includes("EVT-DM-GAME-ASTREA-RECORD-001"), "The character UI must expose the game-origin claim and its event route.");
const bellMarkdownDossier = fs.readFileSync(path.join(root, "characters/bell-cranel.md"), "utf8");
assert.ok(bellMarkdownDossier.includes("DMR-045-CLM-012") && bellMarkdownDossier.includes("サポーター") && bellMarkdownDossier.includes("EVT-DM-GAME-ASTREA-RECORD-001"), "Bell's readable dossier must expose the Japanese role, claim provenance, and game event route.");
assert.ok(gameAstreaEventText.includes("DMR-045-CLM-012") && gameAstreaEventText.includes("no da el nombre del padre") && gameAstreaEventText.includes("Meteria"), "The event page must preserve unnamed-parent and non-identification limits.");

const astreaVol3PreviewUrl = "https://bookwalker.jp/dead6afbb1-d488-4cf3-a255-669537f7f049/?sample=1";
const astreaVol3Preview = historicalWikiSourceDirectory.find(item => item.id === "official-bookwalker-astrea-record-vol3-preview-metadata-only");
assert.ok(astreaVol3Preview && astreaVol3Preview.url === astreaVol3PreviewUrl && astreaVol3Preview.authority.includes("metadatos solamente") && String(astreaVol3Preview.coverage).includes("1/63") && String(astreaVol3Preview.limits).includes("No respalda ninguna capacidad"), "Astrea Record 3 public sample must remain discoverable as metadata-only when only its cover was accessible.");
assert.ok(!index.claims.some(item => item.sourceUrls.includes(astreaVol3PreviewUrl)), "A sample reader with no inspected narrative pages must not support an individual character, relationship, or event claim.");

const gameAstreaEventPath = path.join(root, "events/candidates/EVT-DM-GAME-ASTREA-RECORD-001.md");
const gameAstreaEventText = fs.readFileSync(gameAstreaEventPath, "utf8");
const gameAstreaCatalog = JSON.parse(fs.readFileSync(path.join(root, "catalog.json"), "utf8"));
assert.ok(gameAstreaCatalog.records.some(record => record.id === "EVT-DM-GAME-ASTREA-RECORD-001" && record.path === "events/candidates/EVT-DM-GAME-ASTREA-RECORD-001.md"), "The original Memoria Freese story needs its own navigable event record.");
assert.ok(gameAstreaEventText.includes("continuity_scope: CONT-GAME") && gameAstreaEventText.includes("CONT-AR") && gameAstreaEventText.includes("CONT-MAIN-LN"), "The original game event must explicitly distinguish the novelization and main light-novel continuity.");
assert.ok(!gameAstreaEventText.includes("time_anchor: T-7") && gameAstreaEventText.includes("in_world_date_unknown"), "Do not transplant the novelization's date anchor into the original game event.");

const gameCaptionIds = ["DMR-045-CLM-009", "DMR-045-CLM-010", "DMR-045-CLM-011"];
for (const claimId of gameCaptionIds) {
  const claim = index.claims.find(item => item.claimId === claimId);
  assert.ok(claim, claimId + " must be parsed and searchable from the source bundle.");
  assert.deepEqual(claim.continuityScopes, ["CONT-GAME"], claimId + " must stay in original game continuity.");
  assert.equal(claim.verificationStatus, "secondary_checked", claimId + " must remain a secondary editorial caption, not primary narrative verification.");
  assert.ok(claim.sourceIds.includes("DMR-045-SRC-009") && claim.sourceUrls.includes("https://ln-news.com/articles/109766"), claimId + " must expose the actual article source.");
}
const alfiaGameCaption = corpus.search(index, {query:"Alfia nivel 7 Hera Familia",continuity:"CONT-GAME",period:"ALL",aspect:"all",spoiler:"all"});
assert.ok(alfiaGameCaption.results.some(item => item.claimId === "DMR-045-CLM-010"), "Alfia's game-context profile caption must be discoverable in CONT-GAME.");
const alfiaCaptionNotAR = corpus.search(index, {query:"Alfia nivel 7 Hera Familia",continuity:"CONT-AR",period:"ALL",aspect:"all",spoiler:"all"});
assert.ok(!alfiaCaptionNotAR.results.some(item => item.claimId === "DMR-045-CLM-010"), "Alfia's game caption must not leak into the Astrea Record novelization filter.");
const alfiaCaptionNotMain = corpus.search(index, {query:"Alfia nivel 7 Hera Familia",continuity:"CONT-MAIN-LN",period:"ALL",aspect:"all",spoiler:"all"});
assert.ok(!alfiaCaptionNotMain.results.some(item => item.claimId === "DMR-045-CLM-010"), "Alfia's game caption must not leak into the main light-novel filter.");

const gameCaptionEdges = [
  ["REL-EREBUS-ORIGINAL-ASTREA-RECORD-GAME","CHAR-DARK-EREBUS","DMR-045-CLM-009"],
  ["REL-ALFIA-ORIGINAL-ASTREA-RECORD-GAME","CHAR-DARK-ALFIA","DMR-045-CLM-010"],
  ["REL-ZALD-ORIGINAL-ASTREA-RECORD-GAME","CHAR-DARK-ZALD","DMR-045-CLM-011"],
  ["REL-EDITORIAL-ALFIA-HERA-MEMBER-GAME","CHAR-DARK-ALFIA","DMR-045-CLM-010"],
  ["REL-EDITORIAL-ZALD-ZEUS-MEMBER-GAME","CHAR-DARK-ZALD","DMR-045-CLM-011"]
];
for (const [edgeId, from, claimRef] of gameCaptionEdges) {
  const edge = index.relationships.find(item => item.id === edgeId);
  assert.ok(edge && edge.from === from && edge.continuity === "CONT-GAME" && edge.claimRef === claimRef && edge.evidenceStatus === "secondary_checked", edgeId + " must be a continuity-specific, source-backed relationship.");
}
assert.ok(index.relationships.some(edge => edge.id === "REL-ALFIA-BELL-AUNT-GAME-INTERVIEW" && edge.continuity === "CONT-GAME"), "The existing author-interview edge must remain distinct from the caption-based character relationships.");
const gameCaptionSource = corpus.getOnlineSourceDirectory().find(source => source.id === "author-interview-alfia-aunt-game");
assert.ok(gameCaptionSource && gameCaptionSource.authority.includes("pies editoriales") && String(gameCaptionSource.limits).includes("no son palabras de Omori"), "The source directory must distinguish the article's editorial captions from the author's answer.");


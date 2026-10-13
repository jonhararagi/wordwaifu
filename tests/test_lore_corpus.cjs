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
  "research/inbox/BATCH-DM-010-astrea-departure-and-ryu-revenge.md"
];
const documents = documentPaths.map(file => ({ path: file, content: fs.readFileSync(path.join(root, file), "utf8") }));
const index = corpus.buildIndex(catalog, documents);
assert.equal(index.sourceClaimCount, 70);
assert.equal(index.entryCount, 73);
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
  const laterAstrea = corpus.search(index, { query: "Ciudad Forjadora", characterId: "CHAR-RYUU-LION", continuity: "CONT-MAIN-LN", period: "ALL", aspect: "all", spoiler: "all" });
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
const unsupportedNovelPreference = corpus.search(index, { query: "Ryu", characterId: "CHAR-RYUU-LION", continuity: "CONT-MAIN-LN", period: "ALL", aspect: "likes", spoiler: "all" });
assert.equal(unsupportedNovelPreference.totalMatches, 0, "a personal preference cannot be filled in without evidence, even when the character appears in the main-story corpus.");

const aliseHistorical = corpus.search(index, { query: "Alise", characterId: "CHAR-ALISE-LOVELACE", continuity: "CONT-AR", period: "ALL", aspect: "all", spoiler: "all" });
assert.ok(aliseHistorical.results.some(claim => claim.entryId === "DMR-002-CLM-019--CONT-AR"));
assert.ok(!aliseHistorical.results.some(claim => claim.claim.includes("directa y de ánimo luminoso")));
const aliseAdaptation = corpus.search(index, { query: "Alise", characterId: "CHAR-ALISE-LOVELACE", continuity: "CONT-ANIME", period: "ALL", aspect: "all", spoiler: "all" });
assert.ok(aliseAdaptation.results.some(claim => claim.entryId === "DMR-002-CLM-019--CONT-ANIME"));

process.stdout.write("PASS lore search: 64 source claims, 67 entries, main and side-story retrieval, continuity split and abstention verified.\n");

(async () => {
  const sourceDirectory = corpus.getOnlineSourceDirectory();
  assert.ok(sourceDirectory.some(source => source.category === "official" && source.url.includes("danmachi.com/chronology")));
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
  process.stdout.write("PASS web research: Fandom/Wikipedia search, secondary-source labels, safe snippets and graceful partial failure verified.\n");
})().catch(error=>{ console.error(error); process.exitCode=1; });

const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const corpus = require("../src/lore-corpus.js");
const root = path.join(__dirname, "..", "lore", "danmachi");
const catalog = JSON.parse(fs.readFileSync(path.join(root, "catalog.json"), "utf8"));
const documentPaths = [
  "research/inbox/BATCH-DM-003-era-oscura-y-personajes-multiepoca.md",
  "research/inbox/BATCH-DM-004-psicologia-personajes-y-retrieval.md",
  "research/inbox/BATCH-DM-005-astrea-familia-network.md"
];
const documents = documentPaths.map(file => ({ path: file, content: fs.readFileSync(path.join(root, file), "utf8") }));
const index = corpus.buildIndex(catalog, documents);
assert.equal(index.sourceClaimCount, 32);
assert.equal(index.entryCount, 35);
assert.ok(index.claims.every(claim => claim.claimId && claim.entryId && claim.claim && claim.sourceIds.length));
assert.equal(new Set(index.claims.map(claim => claim.entryId)).size, index.claims.length);
const historicalRyu = corpus.search(index, { query: "Ryu", characterId: "CHAR-RYUU-LION", continuity: "CONT-AR", period: "ASTREA_RECORD", aspect: "all", spoiler: "all" });
assert.ok(historicalRyu.totalMatches > 0);
assert.ok(historicalRyu.results.every(claim => claim.continuityScopes.includes("CONT-AR")));
assert.ok(!historicalRyu.results.some(claim => claim.entryId.endsWith("--CONT-ANIME")));
assert.ok(historicalRyu.results.some(claim => claim.claimId === "DMR-002-CLM-015"));
const animeRyu = corpus.search(index, { query: "Ryu", characterId: "CHAR-RYUU-LION", continuity: "CONT-ANIME", period: "ALL", aspect: "all", spoiler: "all" });
assert.ok(animeRyu.totalMatches > 0);
assert.ok(animeRyu.results.every(claim => claim.continuityScopes.includes("CONT-ANIME")));
assert.ok(!animeRyu.results.some(claim => claim.entryId.endsWith("--CONT-AR")));
const aisLikes = corpus.search(index, { query: "", characterId: "DM-CHAR-AIS", continuity: "ALL", period: "ALL", aspect: "likes", spoiler: "all" });
assert.equal(aisLikes.totalMatches, 0);
assert.equal(aisLikes.abstain, true);
const unsupportedNovel = corpus.search(index, { query: "Ryu", characterId: "CHAR-RYUU-LION", continuity: "CONT-MAIN-LN", period: "ALL", aspect: "all", spoiler: "all" });
assert.equal(unsupportedNovel.totalMatches, 0);

const aliseHistorical = corpus.search(index, { query: "Alise", characterId: "CHAR-ALISE-LOVELACE", continuity: "CONT-AR", period: "ALL", aspect: "all", spoiler: "all" });
assert.ok(aliseHistorical.results.some(claim => claim.entryId === "DMR-002-CLM-019--CONT-AR"));
assert.ok(!aliseHistorical.results.some(claim => claim.claim.includes("directa y de ánimo luminoso")));
const aliseAdaptation = corpus.search(index, { query: "Alise", characterId: "CHAR-ALISE-LOVELACE", continuity: "CONT-ANIME", period: "ALL", aspect: "all", spoiler: "all" });
assert.ok(aliseAdaptation.results.some(claim => claim.entryId === "DMR-002-CLM-019--CONT-ANIME"));

process.stdout.write("PASS lore search: 32 source claims, 35 entries, continuity split and abstention verified.\n");

(async () => {
  const sourceDirectory = corpus.getOnlineSourceDirectory();
  assert.ok(sourceDirectory.some(source => source.category === "official" && source.url.includes("danmachi.com/chronology")));
  assert.ok(sourceDirectory.some(source => source.category === "official" && source.url.includes("ga.sbcr.jp/product/9784815610173")));
  assert.ok(sourceDirectory.some(source => source.category === "community" && source.url.includes("danmachi.fandom.com")));
  assert.ok(sourceDirectory.every(source => source.title && source.url && source.limits));
  const requestedUrls = [];
  const mockFetch = async input => {
    const url = new URL(input); requestedUrls.push(url);
    if (url.hostname === "danmachi.fandom.com") return {
      ok:true,status:200,json:async()=>({query:{search:[{
        title:"Ryuu Lion",
        snippet:'<span class="searchmatch">Ryuu Lion</span> appears in Astrea Record &amp; the main series.',
        timestamp:"2025-01-01T00:00:00Z"
      }]}})
    };
    if (url.hostname === "en.wikipedia.org") return {
      ok:true,status:200,json:async()=>({query:{search:[{title:"Is It Wrong to Try to Pick Up Girls in a Dungeon?",snippet:"A Japanese light novel series."}]}})
    };
    throw new Error("Unexpected mock host: "+url.hostname);
  };
  const externalReport=await corpus.searchExternalSources("Ryu Lion",{fetchImpl:mockFetch});
  assert.equal(requestedUrls.length,2);
  assert.ok(requestedUrls.every(url=>url.searchParams.get("origin")==="*"));
  assert.ok(requestedUrls.every(url=>url.searchParams.get("srsearch")==="Ryu Lion"));
  assert.equal(externalReport.results.length,2);
  assert.ok(externalReport.results.every(result=>result.authority.includes("secundaria")));
  assert.ok(externalReport.results[0].snippet.includes("Ryuu Lion"));
  assert.ok(!externalReport.results[0].snippet.includes("<span"));
  assert.ok(externalReport.results[0].snippet.includes("& the main series."));
  assert.equal(externalReport.hasFailures,false);
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

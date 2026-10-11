(function (root, factory) {
  "use strict";
  const api = factory();
  if (typeof module === "object" && module.exports) module.exports = api;
  else root.WordWaifuLoreCorpus = api;
})(typeof globalThis !== "undefined" ? globalThis : this, function () {
  "use strict";
  const TICK = String.fromCharCode(96);
  const STOP_WORDS = new Set([
    "que","cual","cuales","como","donde","cuando","porque","para","por","con","sin",
    "una","uno","unas","unos","del","las","los","les","sus","sobre","entre",
    "esta","este","estos","estas","ser","son","fue","eran","era","hay","tiene",
    "tienen","tengo","quiero","saber","dime","me","te","se","su","mi","tu",
    "el","la","un","y","o","a","de","en","es","lo","le","al","quien","gustan","gusta","gustaria"
  ]);
  function normalize(value) {
    return String(value ?? "").normalize("NFD").replace(/[\u0300-\u036f]/g, "")
      .toLocaleLowerCase("es").replace(/[^a-z0-9\u3040-\u30ff\u4e00-\u9faf-]+/g, " ")
      .trim().replace(/\s+/g, " ");
  }
  function tokens(value) { return normalize(value).split(" ").filter(t => t.length >= 2 && !STOP_WORDS.has(t)); }
  function clean(value) {
    return String(value ?? "").trim()
      .replace(new RegExp("^" + TICK + "([^" + TICK + "]*)" + TICK + "$"), "$1")
      .replace(/\*\*([^*]+)\*\*/g, "$1").replace(/\*([^*]+)\*/g, "$1")
      .replace(new RegExp(TICK + "([^" + TICK + "]+)" + TICK, "g"), "$1")
      .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1").replace(/\s+/g, " ");
  }
  function field(block, key) {
    const m = new RegExp("^- " + TICK + key + TICK + ":\\s*(.*)$", "m").exec(block);
    return m ? clean(m[1]) : "";
  }
  function unique(values) { return [...new Set(values.filter(Boolean))]; }
  function findIds(value, regex) { return unique(String(value ?? "").match(regex) || []); }
  function parseSource(markdown, sourceDocument) {
    const headings = [...markdown.matchAll(/^### (DMR-\d{3}-CLM-\d{3}) · (.+)$/gm)];
    return headings.map((match, index) => {
      const block = markdown.slice(match.index, index + 1 < headings.length ? headings[index + 1].index : markdown.length);
      const urlField = field(block, "source_url");
      return {
        claimId: field(block, "claim_id") || match[1],
        entryId: field(block, "claim_id") || match[1],
        heading: clean(match[2]),
        claim: field(block, "claim"),
        characterIds: findIds(field(block, "character_id") + " " + field(block, "character_ids"), /\b(?:DM-CHAR|CHAR)-[A-Z0-9-]+\b/g),
        aspect: field(block, "aspect") || "general",
        eraOrInterval: field(block, "era_or_interval"),
        continuityScopes: findIds(field(block, "continuity_scope"), /\bCONT-[A-Z0-9-]+\b/g),
        sourceIds: findIds(block, /\bDMR-\d{3}-SRC-\d{3}\b/g),
        sourceTitle: field(block, "source_title"),
        sourceType: field(block, "source_type"),
        sourceLocator: field(block, "source_locator"),
        sourceUrls: findIds(urlField, /https?:\/\/[^\s;, )]+/g),
        evidenceType: field(block, "evidence_type") || field(block, "claim_type") || "unspecified",
        verificationStatus: clean(field(block, "verification_status") || "unverified").toLowerCase(),
        spoilerLevel: clean(field(block, "spoiler_level") || "unknown").toLowerCase(),
        confidenceNote: field(block, "confidence_note"),
        sourceDocument
      };
    });
  }
  function getAspects(claim) {
    const text = (claim.heading + " " + claim.aspect + " " + claim.claim).toLowerCase();
    const aspects = [];
    if (/gust|preferenc|afici[oó]n|comida|aversi[oó]n|favorite|favorit/.test(text)) aspects.push("likes");
    if (/miedo|temor|fear|inseguridad/.test(text)) aspects.push("fears");
    if (/voz|forma de hablar|habla|speech|expresi[oó]n verbal/.test(text)) aspects.push("voice");
    if (/evoluci[oó]n|crisis|cambio psicol[oó]gico|p[eé]rdida(s)? (que|durante)/.test(text)) aspects.push("evolution");
    if (/relaci[oó]n|v[ií]nculo|lealtad|afecto|rom[aá]ntic|gu[ií]a|capitana/.test(text)) aspects.push("relationships");
    if (/motivaci[oó]n|objetivo|deseo|valores?|justicia|prop[oó]sito/.test(text)) aspects.push("motivation");
    if (/personalidad|temperamento|car[aá]cter|misericordiosa|amable|luminoso|directa/.test(text)) aspects.push("personality");
    if (/conducta|comportamiento|liderazgo|presi[oó]n|entrenamiento|h[aá]bito|trabajando|pr[aá]ctico|competencia/.test(text)) aspects.push("behavior");
    return unique(aspects.length ? aspects : ["general"]);
  }
  function getPeriod(claim) {
    const text = (claim.eraOrInterval + " " + claim.claim + " " + claim.heading).toLowerCase();
    if (/au del oc|continuidad au|historia alternativa|au-/.test(text)) return "AU";
    if (/astrea record|era oscura|siete a[nñ]os antes|t[-−]7|死の七日間/.test(text)) return "ASTREA_RECORD";
    if (/historia principal|danmachi (iii|iv|v)|estado representado en danmachi|inicio de bell|bell cranel/.test(text)) return "MAIN_STORY";
    return "OTHER";
  }
  function splitContinuityClaims(claim) {
    if (claim.claimId === "DMR-001-CLM-010") {
      const base = { ...claim, characterIds: ["CHAR-RYUU-LION"] };
      return [
        { ...base, entryId: claim.claimId + "--CONT-AR", heading: "Ryu Lion · estado histórico",
          claim: "La sinopsis editorial del volumen 1 vincula a Ryu Lion con Astrea Familia durante el periodo histórico de Astrea Record.",
          aspect: "afiliación e identidad", eraOrInterval: "Era Oscura de Orario, aproximadamente siete años antes de la visita de Bell a Orario.",
          continuityScopes: ["CONT-AR"], sourceIds: ["DMR-001-SRC-003"], sourceTitle: "GA Bunko · Astrea Record, volumen 1",
          sourceType: "official_reference", sourceLocator: "Sinopsis editorial; Ryu Lion, Astrea y Alise como capitana.",
          sourceUrls: ["https://ga.sbcr.jp/product/9784815610173"], evidenceType: "explicit_publisher_synopsis",
          verificationStatus: "source_checked", confidenceNote: "Sinopsis oficial; no es un localizador interno del volumen." },
        { ...base, entryId: claim.claimId + "--CONT-ANIME", heading: "Ryu Lion · estado en la adaptación anime",
          claim: "El perfil oficial de la adaptación presenta a Ryu como antigua aventurera y trabajadora de Hostess of Fertility.",
          aspect: "estado y afiliación", eraOrInterval: "Estado posterior descrito por el perfil oficial de DanMachi IV; fecha interna no establecida.",
          continuityScopes: ["CONT-ANIME"], sourceIds: ["DMR-001-SRC-006"], sourceTitle: "Perfil oficial de personajes de DanMachi IV",
          sourceType: "official_reference", sourceLocator: "Entrada リュー・リオン en las secciones Astrea Familia y Hostess of Fertility.",
          sourceUrls: ["https://danmachi.com/danmachi4/character"], evidenceType: "explicit_character_profile",
          verificationStatus: "source_checked", confidenceNote: "Dato de adaptación, no debe transferirse automáticamente a la novela principal." },
        { ...base, entryId: claim.claimId + "--CROSS-CONTINUITY", heading: "Ryu Lion · vínculo entre versiones",
          claim: "La coincidencia del nombre sugiere una identidad común entre el estado histórico de Astrea Record y el posterior de la adaptación; sigue siendo una inferencia provisional.",
          aspect: "identidad y continuidad", eraOrInterval: "Comparación entre Astrea Record y un estado posterior de adaptación.",
          continuityScopes: ["CROSS-CONTINUITY"], sourceIds: ["DMR-001-SRC-003", "DMR-001-SRC-006"],
          sourceTitle: "GA Bunko Astrea Record vol. 1 y perfil oficial DanMachi IV", sourceType: "mixed_official_references",
          sourceLocator: "Sinopsis editorial y perfil de adaptación.",
          sourceUrls: ["https://ga.sbcr.jp/product/9784815610173", "https://danmachi.com/danmachi4/character"],
          evidenceType: "inference", verificationStatus: "provisional",
          confidenceNote: "No verifica el estado de Ryu en la novela principal." }
      ];
    }
    if (claim.claimId === "DMR-002-CLM-017") return [{
      ...claim, entryId: claim.claimId + "--CONT-ANIME", heading: "Astrea · perfil de adaptación",
      claim: "El perfil oficial del anime presenta a Astrea como diosa de justicia y orden, misericordiosa y amable.",
      aspect: "valores y temperamento", continuityScopes: ["CONT-ANIME"], sourceIds: ["DMR-002-SRC-002"],
      sourceTitle: "Perfil oficial de personajes de DanMachi IV", sourceType: "ADAPTATION",
      sourceLocator: "Entrada アストレア.", sourceUrls: ["https://danmachi.com/danmachi4/character"],
      evidenceType: "explicit_character_profile", verificationStatus: "source_checked",
      confidenceNote: "Esta afirmación procede de la adaptación."
    }];
    if (claim.claimId === "DMR-002-CLM-019") return [{
      ...claim, entryId: claim.claimId + "--CONT-ANIME", heading: "Alise Lovelace · perfil de adaptación",
      claim: "El perfil oficial del anime describe a Alise como directa y de ánimo luminoso.",
      aspect: "personalidad y temperamento", continuityScopes: ["CONT-ANIME"], sourceIds: ["DMR-002-SRC-002"],
      sourceTitle: "Perfil oficial de personajes de DanMachi IV", sourceType: "ADAPTATION",
      sourceLocator: "Entrada アリーゼ・ローヴェル.", sourceUrls: ["https://danmachi.com/danmachi4/character"],
      evidenceType: "explicit_character_profile", verificationStatus: "source_checked",
      confidenceNote: "Dato de adaptación; el papel histórico está documentado por separado."
    }];
    return [claim];
  }
  function buildIndex(catalog, documents) {
    const claims = documents.flatMap(doc => parseSource(doc.content, doc.path)).flatMap(splitContinuityClaims)
      .map(claim => ({ ...claim, aspects: getAspects(claim), periodKey: getPeriod(claim) }));
    const usedIds = new Set(claims.flatMap(claim => claim.characterIds));
    const characters = (catalog.records || [])
      .filter(record => ["character", "deity_character"].includes(record.type) && usedIds.has(record.id))
      .map(record => {
        const tags = record.tags || [];
        const name = tags.find(tag => typeof tag === "string" && !/^spoiler/i.test(tag)) || record.id;
        const aliases = unique([name, ...tags.filter(tag => !/familia|multi-era|motivation|leadership|training|loyalty|spoiler|deity|historical state|timeline|provisional/i.test(tag))]);
        return { id: record.id, name, aliases, profilePath: record.path };
      }).sort((a, b) => a.name.localeCompare(b.name, "es"));
    return { schemaVersion: 1, indexName: "WordWaifu DanMachi Lore Search", mode: "curated-claims",
      sourceClaimCount: documents.reduce((sum, doc) => sum + parseSource(doc.content, doc.path).length, 0),
      entryCount: claims.length, characters, claims };
  }
  async function load(basePath) {
    const base = basePath || "./lore/danmachi/";
    const paths = ["catalog.json", "research/inbox/BATCH-DM-003-era-oscura-y-personajes-multiepoca.md", "research/inbox/BATCH-DM-004-psicologia-personajes-y-retrieval.md"];
    const responses = await Promise.all(paths.map(path => fetch(base + path, { cache: "no-cache" })));
    for (let i = 0; i < responses.length; i++) if (!responses[i].ok) throw new Error("No se pudo cargar " + paths[i] + " (HTTP " + responses[i].status + ").");
    const catalog = await responses[0].json();
    const docs = await Promise.all(responses.slice(1).map(async (response, i) => ({
      path: paths[i + 1], content: await response.text()
    })));
    return buildIndex(catalog, docs);
  }
  function search(index, options) {
    const settings = options || {};
    const queryTokens = tokens(settings.query || "");
    const characterId = String(settings.characterId || "");
    const continuity = String(settings.continuity || "ALL");
    const period = String(settings.period || "ALL");
    const aspect = String(settings.aspect || "all");
    const spoiler = String(settings.spoiler || "all");
    const limit = Number.isInteger(settings.limit) ? Math.max(1, Math.min(settings.limit, 100)) : 20;
    const characterMap = new Map((index.characters || []).map(character => [character.id, character]));
    const results = [];
    for (const claim of index.claims || []) {
      if (characterId && !claim.characterIds.includes(characterId)) continue;
      if (continuity !== "ALL" && !claim.continuityScopes.includes(continuity)) continue;
      if (period !== "ALL" && claim.periodKey !== period) continue;
      if (aspect !== "all" && !(claim.aspects || []).includes(aspect)) continue;
      if (spoiler === "hide-major" && ["major", "endgame"].includes(claim.spoilerLevel)) continue;
      if (spoiler === "safe-only" && !["none", "mild"].includes(claim.spoilerLevel)) continue;
      const characterRecords = (claim.characterIds || []).map(id => characterMap.get(id)).filter(Boolean);
      const aliases = characterRecords.flatMap(character => character.aliases || []);
      const haystack = normalize([claim.heading, claim.claim, claim.aspect, claim.eraOrInterval, claim.periodKey,
        claim.continuityScopes.join(" "), claim.aspects.join(" "), aliases.join(" "), claim.sourceTitle,
        claim.sourceLocator, claim.sourceIds.join(" "), claim.claimId, claim.entryId].join(" "));
      const foundTokens = queryTokens.filter(token => haystack.includes(token));
      if (queryTokens.length && foundTokens.length !== queryTokens.length) continue;
      results.push({ ...claim, characterNames: characterRecords.map(character => character.name),
        profilePaths: characterRecords.map(character => character.profilePath).filter(Boolean),
        score: queryTokens.length ? foundTokens.length * 10 : 1 });
    }
    results.sort((a, b) => b.score - a.score || a.claimId.localeCompare(b.claimId, "en") || a.entryId.localeCompare(b.entryId, "en"));
    return { results: results.slice(0, limit), totalMatches: results.length, truncated: results.length > limit,
      abstain: results.length === 0, queryTokens };
  }
  return { load, buildIndex, search, normalize, tokens };
});

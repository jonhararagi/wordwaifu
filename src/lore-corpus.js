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
  const ONLINE_SOURCE_DIRECTORY = [
    { id:"official-chronology", category:"official", title:"Cronología oficial de DanMachi", publisher:"Portal oficial de la serie", authority:"Referencia oficial", url:"https://danmachi.com/chronology/", coverage:"Cronología de la serie y obras derivadas, incluida la presentación de Astrea Record.", limits:"Es una referencia oficial de cronología/promoción; no reemplaza el pasaje completo de una novela." },
    { id:"official-anime-v", category:"official", title:"Perfiles oficiales · DanMachi V", publisher:"Portal oficial del anime", authority:"Referencia oficial de adaptación", url:"https://danmachi.com/danmachi5/character/", coverage:"Perfiles de personajes y estado descrito para la adaptación de la quinta temporada.", limits:"Usar como CONT-ANIME; no transferir automáticamente todos los detalles a la novela ligera." },
    { id:"official-anime-iv", category:"official", title:"Perfiles oficiales · DanMachi IV", publisher:"Portal oficial del anime", authority:"Referencia oficial de adaptación", url:"https://danmachi.com/danmachi4/character/", coverage:"Perfiles de Astrea Familia y otros personajes de la adaptación.", limits:"La página oficial describe la adaptación; no constituye por sí sola un localizador de la novela." },
    { id:"official-sword-oratoria", category:"official", title:"Perfiles oficiales · Sword Oratoria", publisher:"Portal oficial del anime Sword Oratoria", authority:"Referencia oficial de adaptación", url:"https://danmachi.com/sword_oratoria/character/", coverage:"Perfiles de Loki Familia y personajes relacionados de Sword Oratoria.", limits:"Los cargos, edades y niveles corresponden al perfil de adaptación; no equivalen a una cronología exhaustiva de la novela." },
    { id:"official-anime-episode1", category:"official", title:"Sinopsis oficial · DanMachi episodio 1", publisher:"Portal oficial del anime DanMachi", authority:"Sinopsis oficial de adaptación", url:"https://danmachi.com/danmachi/story/episode1.html", coverage:"Punto de apertura de Bell y estado inicial de Hestia Familia en la sinopsis.", limits:"Usar como CONT-ANIME; cotejar el volumen 1 antes de atribuir todos los detalles a la novela." },
    { id:"official-anime-iii", category:"official", title:"Perfiles oficiales · DanMachi III", publisher:"Portal oficial del anime", authority:"Referencia oficial de adaptación", url:"https://danmachi.com/danmachi3/character/", coverage:"Perfiles publicados para personajes y estados representados en la tercera temporada.", limits:"Comprobar temporada y continuidad antes de reutilizar una afirmación." },
    { id:"ga-astrea-1", category:"official", title:"GA Bunko · Astrea Record, volumen 1", publisher:"GA Bunko / SB Creative", authority:"Ficha editorial oficial", url:"https://ga.sbcr.jp/product/9784815610173", coverage:"Sinopsis editorial oficial de la primera novela de Astrea Record.", limits:"La sinopsis no equivale al texto íntegro ni permite inventar capítulos, páginas o escenas." },
    { id:"ga-astrea-2", category:"official", title:"GA Bunko · Astrea Record, volumen 2", publisher:"GA Bunko / SB Creative", authority:"Ficha editorial oficial", url:"https://ga.sbcr.jp/product/9784815610180", coverage:"Sinopsis editorial oficial de la segunda novela de Astrea Record.", limits:"Sirve para afirmaciones realmente presentes en la sinopsis, no para reconstruir cada detalle." },
    { id:"ga-astrea-3", category:"official", title:"GA Bunko · Astrea Record, volumen 3", publisher:"GA Bunko / SB Creative", authority:"Ficha editorial oficial", url:"https://ga.sbcr.jp/product/9784815617554", coverage:"Sinopsis editorial oficial de la tercera novela de Astrea Record.", limits:"No sustituye la lectura y localización del pasaje en la novela." },
    { id:"community-fandom", category:"community", title:"DanMachi Wiki · Fandom", publisher:"Wiki comunitaria mantenida por colaboradores", authority:"Fuente secundaria", url:"https://danmachi.fandom.com/wiki/DanMachi_Wiki", coverage:"Índice amplio de personajes, familias, términos, volúmenes y cronología.", limits:"Usar para descubrir alias y posibles referencias; revisar las citas y confirmar con fuentes oficiales o novelas." },
    { id:"community-timeline", category:"community", title:"DanMachi Wiki · Timeline", publisher:"Wiki comunitaria mantenida por colaboradores", authority:"Fuente secundaria", url:"https://danmachi.fandom.com/wiki/Timeline", coverage:"Mapa de fechas aproximadas y acontecimientos de DanMachi, Sword Oratoria y Astrea Record.", limits:"La cronología puede simplificar o combinar continuidades; verificar cada dato antes de aprobarlo." },
    { id:"reference-wikipedia", category:"community", title:"Wikipedia · Is It Wrong to Try to Pick Up Girls in a Dungeon?", publisher:"Enciclopedia colaborativa", authority:"Referencia secundaria general", url:"https://en.wikipedia.org/wiki/Is_It_Wrong_to_Try_to_Pick_Up_Girls_in_a_Dungeon%3F", coverage:"Contexto general de la serie, publicaciones y adaptaciones.", limits:"No es la fuente adecuada para confirmar detalles finos de psicología, relaciones o cronología." }
  ];
  function normalize(value) {
    return String(value ?? "").normalize("NFD").replace(/[\u0300-\u036f]/g, "")
      .toLocaleLowerCase("es").replace(/[^a-z0-9\u3040-\u30ff\u4e00-\u9faf-]+/g, " ")
      .trim().replace(/\s+/g, " ");
  }
  // Small, explicit morphology bridges common Spanish noun/verb forms without
  // weakening the all-query-terms-must-match rule for unrelated words.
  const SEARCH_SYNONYMS = Object.freeze({
    venganza: ["venganza", "vengar", "vengarse"],
    vengar: ["venganza", "vengar", "vengarse"],
    vengarse: ["venganza", "vengar", "vengarse"]
  });
  function tokenMatches(haystack, token) {
    return (SEARCH_SYNONYMS[token] || [token]).some(form => haystack.includes(form));
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
    const scopes = Array.isArray(claim.continuityScopes) ? claim.continuityScopes : [];
    if (scopes.includes("CONT-UNVERIFIED")) return "OTHER";
    if (scopes.includes("CONT-MAIN-LN") && !scopes.includes("CONT-AR")) return "MAIN_STORY";
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
    if (claim.claimId === "DMR-002-CLM-019") {
      const base = { ...claim, characterIds: ["CHAR-ALISE-LOVELACE"] };
      return [
        { ...base, entryId: claim.claimId + "--CONT-AR", heading: "Alise Lovelace · capitanía y guía histórica",
          claim: "La sinopsis editorial identifica a Alise Lovelace como capitana de Astrea Familia y la presenta como guía de Ryu durante su búsqueda de justicia.",
          aspect: "liderazgo y relación documentada", eraOrInterval: "Periodo histórico de Astrea Record, aproximadamente siete años antes de la llegada de Bell.",
          continuityScopes: ["CONT-AR"], sourceIds: ["DMR-001-SRC-003"], sourceTitle: "GA Bunko · Astrea Record, volumen 1",
          sourceType: "official_reference", sourceLocator: "Sinopsis editorial con 団長アリーゼ; Alise como capitana y guía de Ryu.",
          sourceUrls: ["https://ga.sbcr.jp/product/9784815610173"], evidenceType: "explicit_publisher_synopsis",
          verificationStatus: "source_checked", spoilerLevel: "mild",
          confidenceNote: "Sinopsis editorial; no establece toda la historia privada del vínculo ni localizadores internos del volumen." },
        { ...base, entryId: claim.claimId + "--CONT-ANIME", heading: "Alise Lovelace · temperamento en la adaptación",
          claim: "El perfil oficial de la adaptación describe a Alise como directa y de ánimo luminoso.",
          aspect: "personalidad y temperamento", eraOrInterval: "Estado descrito por el perfil oficial de DanMachi IV; fecha interna no establecida.",
          continuityScopes: ["CONT-ANIME"], sourceIds: ["DMR-002-SRC-002"], sourceTitle: "Perfil oficial de personajes de DanMachi IV",
          sourceType: "ADAPTATION", sourceLocator: "Entrada アリーゼ・ローヴェル, descripción de temperamento.",
          sourceUrls: ["https://danmachi.com/danmachi4/character"], evidenceType: "explicit_character_profile",
          verificationStatus: "source_checked", spoilerLevel: "none",
          confidenceNote: "Dato de adaptación; no es evidencia de su estado en la novela principal." }
      ];
    }
    return [claim];
  }
  function parseCharacterProfile(markdown, sourceDocument) {
    const text = String(markdown || "");
    const front = /^---\s*\r?\n([\s\S]*?)\r?\n---(?:\s|$)/.exec(text);
    const metadata = front ? front[1] : "";
    const body = front ? text.slice(front[0].length) : text;
    const getMeta = (key) => {
      const match = new RegExp("^" + key + ":\\s*(.*)$", "m").exec(metadata);
      return match ? clean(match[1].replace(/[\\[\\],]/g, " ")) : "";
    };
    const id = getMeta("id");
    const titleMatch = /^#\s+(.+)$/m.exec(body);
    const headings = [...body.matchAll(/^##\s+(.+)$/gm)];
    const sections = headings.map((heading, index) => {
      const start = heading.index + heading[0].length;
      const end = index + 1 < headings.length ? headings[index + 1].index : body.length;
      const sectionText = body.slice(start, end)
        .replace(/^###\s+(.+)$/gm, "\n$1: ")
        .replace(/^\s*[-*]\s+/gm, "• ")
        .replace(/^\s*>\s?/gm, "")
        .replace(/\[([^\]]+)\]\(([^)]+)\)/g, "$1")
        .replace(/\*\*([^*]+)\*\*/g, "$1")
        .replace(/\*([^*]+)\*/g, "$1")
        .replace(new RegExp(String.fromCharCode(96) + "([^" + String.fromCharCode(96) + "]+)" + String.fromCharCode(96), "g"), "$1")
        .replace(/[ \t]+/g, " ")
        .replace(/\n{3,}/g, "\n\n")
        .trim();
      return { heading: clean(heading[1]), text: sectionText };
    }).filter(section => section.heading && section.text);
    return {
      id,
      title: titleMatch ? clean(titleMatch[1]) : id,
      status: getMeta("status") || "provisional",
      continuityScopes: unique(metadata.match(/\bCONT-[A-Z0-9-]+\b/g) || []),
      sourceRefs: unique(metadata.match(/\bDMR-\d{3}-SRC-\d{3}\b/g) || []),
      claimRefs: unique(metadata.match(/\bDMR-\d{3}-CLM-\d{3}\b/g) || []),
      sourceDocument,
      sections
    };
  }
  function claimsFromOfficialRoster(records, existingClaims) {
    const alreadyCovered = new Set((existingClaims || []).flatMap(claim => claim.characterIds || []));
    const generated = [];
    const usedClaimIds = new Set((existingClaims || []).map(claim => claim.claimId).filter(Boolean));
    let counter = 1;
    const make = (record, scope, aspect, heading, claim, dossier) => {
      if (!claim || !String(claim).trim()) return;
      const sourceUrl = dossier && dossier.sourceUrl ? dossier.sourceUrl : record.sourcePage;
      const sourceTitle = dossier && dossier.sourceLabel ? dossier.sourceLabel : (record.sourceTitle || "Perfil oficial de adaptación");
      const sourceType = dossier && dossier.sourceType ? "SECONDARY" : (record.evidenceType || "official_adaptation_profile");
      const sourceId = dossier && dossier.sourceType ? "DMR-007-SRC-001" : (record.sourceId || "DMR-006-SRC-001");
      let claimId;
      do { claimId = "DMR-008-CLM-" + String(counter++).padStart(3,"0"); } while (usedClaimIds.has(claimId));
      usedClaimIds.add(claimId);
      const period = scope === "CONT-AR" ? "Astrea Record · Era Oscura de Orario"
        : scope === "CONT-MAIN-LN" ? "Novela ligera principal · el punto temporal depende del pasaje referenciado"
        : scope === "CROSS-CONTINUITY" ? "Comparación entre novelas, relatos paralelos y adaptaciones"
        : "Estado descrito por " + (record.sourceTitle || "el perfil de adaptación");
      generated.push({
        claimId, entryId: claimId, heading: record.name + " · " + heading, claim: String(claim).trim(),
        characterIds: [record.id], aspect, eraOrInterval: period,
        continuityScopes: [scope], sourceIds: [sourceId], sourceTitle, sourceType,
        sourceLocator: dossier ? "Síntesis original por apartados; consultar el artículo citado y sus referencias primarias." : (record.locator || "Perfil de personaje publicado en la página oficial."),
        sourceUrls: dossier && Array.isArray(dossier.sources) ? unique([...(sourceUrl ? [sourceUrl] : []), ...dossier.sources.filter(url => typeof url === "string" && url.startsWith("https://"))]) : (sourceUrl ? [sourceUrl] : []), evidenceType: dossier ? "original_paraphrase_of_secondary_compendium" : "explicit_character_profile",
        verificationStatus: dossier ? "secondary_reference_checked" : "source_checked",
        spoilerLevel: dossier && dossier.spoilerLevel ? dossier.spoilerLevel : "none",
        confidenceNote: dossier
          ? "Resumen redactado de forma original a partir de una wiki comunitaria. Es una fuente secundaria y puede combinar novelas y adaptaciones; contrastar hechos finos con el volumen y la continuidad seleccionados."
          : (record.detailStatus || "Paráfrasis del perfil oficial de adaptación; no representa por sí sola toda la novela ligera."),
        sourceDocument: dossier ? dossier.sourceUrl : record.sourcePage
      });
    };
    for (const record of records || []) {
      if (!record || !record.id) continue;
      const dossierMap = record.dossiers && typeof record.dossiers === "object" ? record.dossiers : {};
      if (!alreadyCovered.has(record.id)) {
        const scope = record.continuity || "CONT-ANIME";
        make(record, scope, "identidad y contexto", "resumen del perfil", record.summary, null);
        make(record, scope, "personalidad y temperamento", "personalidad", record.personality, null);
        make(record, scope, "habilidades y combate", "capacidades", record.abilities, null);
        make(record, scope, "relaciones y vínculos", "relaciones destacadas", record.relationships, null);
        if (record.detailStatus) make(record, scope, "límites de evidencia", "cobertura documental", record.detailStatus, null);
      }
      for (const [scope, dossier] of Object.entries(dossierMap)) {
        if (!dossier || typeof dossier !== "object") continue;
        make(record, scope, "apariencia e identidad visual", "apariencia y presentación", dossier.appearance, dossier);
        make(record, scope, "evolución e historia", "historia y contexto", dossier.history, dossier);
        make(record, scope, "evolución psicológica", "evolución del personaje", dossier.development, dossier);
        make(record, scope, "habilidades y combate", "perfil de combate", dossier.combatProfile, dossier);
        make(record, scope, "hábitos y conducta", "hábitos y detalles distintivos", dossier.habits, dossier);
        make(record, scope, "motivación y función narrativa", "función narrativa", dossier.narrativeRole, dossier);
        for (const relation of dossier.relationshipDetails || []) {
          if (!relation || !relation.name || !relation.detail) continue;
          make(record, scope, "relaciones y vínculos", "relación con " + relation.name, relation.detail, dossier);
        }
        for (const ability of dossier.abilities || []) {
          if (!ability || !ability.name || !ability.detail) continue;
          make(record, scope, "habilidades y combate", ability.name, ability.detail, dossier);
        }
      }
      // Standalone narrative dossiers are also part of retrieval. Do not duplicate a
      // character/continuity already represented by a richer nested dossier.
      const standalone = typeof globalThis !== "undefined" && globalThis.WordWaifuCharacterDossiers
        ? globalThis.WordWaifuCharacterDossiers.get(record.id) : null;
      if (standalone && !dossierMap["CONT-MAIN-LN"]) {
        const sourceUrls = Array.isArray(standalone.sources) ? standalone.sources.filter(url => typeof url === "string" && url.startsWith("https://")) : [];
        const secondaryUrl = sourceUrls.find(url => url.includes("fandom.com")) || sourceUrls[0] || record.sourcePage;
        const retrievalDossier = {
          sourceUrl: secondaryUrl,
          sourceLabel: "Expediente ampliado WordWaifu · referencia secundaria por contrastar",
          sourceType: "secondary_compendium",
          spoilerLevel: "unknown",
          sources: sourceUrls
        };
        make(record, "CONT-MAIN-LN", "apariencia e identidad visual", "apariencia y presentación", standalone.appearance, retrievalDossier);
        make(record, "CONT-MAIN-LN", "evolución e historia", "historia y contexto", standalone.history, retrievalDossier);
        make(record, "CONT-MAIN-LN", "evolución psicológica", "personalidad y conducta", standalone.personality, retrievalDossier);
        make(record, "CONT-MAIN-LN", "habilidades y combate", "habilidades y estilo de combate", standalone.abilities, retrievalDossier);
        make(record, "CONT-MAIN-LN", "relaciones y vínculos", "vínculos y dinámica de grupo", standalone.relationships, retrievalDossier);
        make(record, "CONT-MAIN-LN", "límites de evidencia", "conflictos, límites e incertidumbres", standalone.conflict, retrievalDossier);
      }
    }
    return generated;
  }
  function buildIndex(catalog, documents, profileDocuments) {
    const parsedClaims = documents.flatMap(doc => parseSource(doc.content, doc.path)).flatMap(splitContinuityClaims)
      .map(claim => ({ ...claim, aspects: getAspects(claim), periodKey: getPeriod(claim) }));
    const officialRoster = typeof globalThis !== "undefined" && globalThis.WordWaifuOfficialCharacterRoster
      ? globalThis.WordWaifuOfficialCharacterRoster.list() : [];
    const generatedClaims = claimsFromOfficialRoster(officialRoster, parsedClaims)
      .map(claim => ({ ...claim, aspects: getAspects(claim), periodKey: getPeriod(claim) }));
    const claims = [...parsedClaims, ...generatedClaims];
    const usedIds = new Set(claims.flatMap(claim => claim.characterIds));
    const catalogSourceRecords = (catalog.records || [])
      .filter(record => ["character", "deity_character"].includes(record.type) && usedIds.has(record.id));
    const normalizeCharacterTag = value => String(value || "").normalize("NFD").replace(/[\u0300-\u036f]/g, "").trim().toLowerCase();
    const tagOwners = new Map();
    for (const record of catalogSourceRecords) {
      for (const tag of record.tags || []) {
        if (typeof tag !== "string") continue;
        const key = normalizeCharacterTag(tag);
        if (!key) continue;
        if (!tagOwners.has(key)) tagOwners.set(key, new Set());
        tagOwners.get(key).add(record.id);
      }
    }
    const catalogCharacters = catalogSourceRecords
      .map(record => {
        const tags = record.tags || [];
        const name = tags.find(tag => typeof tag === "string" && !/^spoiler/i.test(tag)) || record.id;
        const aliases = unique([name, ...tags.filter(tag => {
          if (typeof tag !== "string" || /familia|multi-era|motivation|leadership|training|loyalty|spoiler|deity|historical state|timeline|provisional/i.test(tag)) return false;
          // Catalog tags also hold names of related characters. Keep a tag as an
          // alias only when it is not shared by other character records; the
          // canonical name remains discoverable through the dedicated name field.
          const owners = tagOwners.get(normalizeCharacterTag(tag));
          return !owners || owners.size === 1;
        })]);
        return { id: record.id, name, aliases, keywords: unique(tags), profilePath: record.path };
      });
    // Official adaptation references extend discoverability without pretending to be
    // fully researched canonical dossier files. Each entry must have source-backed claims.
    const knownCharacterIds = new Set(catalogCharacters.map(character => character.id));
    const externalCharacters = officialRoster
      .filter(record => usedIds.has(record.id) && !knownCharacterIds.has(record.id))
      .map(record => ({ id: record.id, name: record.name, aliases: unique([record.name, ...(record.aliases || [])]), keywords: unique([record.family, record.role, record.sourceTitle, ...(record.aliases || [])]) }));
    // A character can be discovered through both the curated catalog and external roster
    // enrichment. Keep one directory identity per stable ID while preserving searchable aliases.
    const characterById = new Map();
    for (const character of [...catalogCharacters, ...externalCharacters]) {
      const previous = characterById.get(character.id);
      characterById.set(character.id, previous ? {
        ...previous,
        aliases: unique([...(previous.aliases || []), ...(character.aliases || [])]),
        keywords: unique([...(previous.keywords || []), ...(character.keywords || [])]),
        profilePath: previous.profilePath || character.profilePath
      } : character);
    }
    const characters = [...characterById.values()]
      .sort((a, b) => a.name.localeCompare(b.name, "es"));
    const profileDetails = Object.create(null);
    (profileDocuments || []).forEach(document => {
      const parsed = parseCharacterProfile(document.content, document.path);
      if (parsed.id) profileDetails[parsed.id] = parsed;
    });
    return { schemaVersion: 1, indexName: "WordWaifu DanMachi Lore Search", mode: "curated-claims",
      sourceClaimCount: documents.reduce((sum, doc) => sum + parseSource(doc.content, doc.path).length, 0),
      entryCount: claims.length, characters, claims, profileDetails,
      entityRecords: (catalog.records || []).filter(record => record && typeof record.id === "string" && typeof record.type === "string").map(record => ({
        id: record.id, path: record.path || "", type: record.type, status: record.status || "unknown",
        priority: record.priority || "normal", tags: Array.isArray(record.tags) ? record.tags.filter(tag => typeof tag === "string") : []
      })),
      profileDocumentCount: Object.keys(profileDetails).length };
  }
  async function load(basePath) {
    const base = basePath || "./lore/danmachi/";
    const paths = ["catalog.json", "research/inbox/BATCH-DM-003-era-oscura-y-personajes-multiepoca.md", "research/inbox/BATCH-DM-004-psicologia-personajes-y-retrieval.md", "research/inbox/BATCH-DM-005-astrea-familia-network.md", "research/inbox/BATCH-DM-006-oficial-roster-y-retratos.md", "research/inbox/BATCH-DM-007-astrea-family-network-and-journey.md", "research/inbox/BATCH-DM-008-main-story-volume-map.md", "research/inbox/BATCH-DM-009-parallel-stories-and-chronicles.md", "research/inbox/BATCH-DM-010-astrea-departure-and-ryu-revenge.md", "research/inbox/DANMACHI-RESEARCH-010-hestia-familia-dossier.md", "research/inbox/DANMACHI-RESEARCH-011-loki-familia-dossier.md", "research/inbox/DANMACHI-RESEARCH-012-astrea-familia-dossier.md", "research/inbox/DANMACHI-RESEARCH-013-soma-family-roster-and-dossiers.md", "research/inbox/DANMACHI-RESEARCH-014-loki-familia-individual-dossiers.md", "research/inbox/BATCH-DM-013-dark-era-missing-characters.md", "research/inbox/BATCH-DM-014-dark-era-temporal-boundaries.md", "research/inbox/DANMACHI-RESEARCH-021-zeus-hera-familias.md", "research/inbox/DANMACHI-RESEARCH-025-wiki-informed-character-expansion.md", "research/inbox/DANMACHI-RESEARCH-026-dark-era-antagonist-dossiers.md", "research/inbox/DANMACHI-RESEARCH-027-astrea-minor-character-profiles.md", "research/inbox/DANMACHI-RESEARCH-028-barca-basram-vito-adi-airmid.md", "research/inbox/DANMACHI-RESEARCH-029-miach-naaza-dian-goibniu-hephaistos.md", "research/inbox/DANMACHI-RESEARCH-030-astrea-core-profiles.md", "research/inbox/DANMACHI-RESEARCH-031-loki-secondary-profiles.md", "research/inbox/DANMACHI-RESEARCH-032-orario-support-profiles.md", "research/inbox/DANMACHI-RESEARCH-033-dark-era-evilus-deities-and-dis-sisters.md", "research/inbox/DANMACHI-RESEARCH-034-wiki-expanded-hostess-and-loki-profiles.md", "research/inbox/DANMACHI-RESEARCH-035-loki-core-five-profiles.md", "research/inbox/DANMACHI-RESEARCH-036-freya-hostess-profiles.md"];
    const responses = await Promise.all(paths.map(path => fetch(base + path, { cache: "no-cache" })));
    for (let i = 0; i < responses.length; i++) if (!responses[i].ok) throw new Error("No se pudo cargar " + paths[i] + " (HTTP " + responses[i].status + ").");
    const catalog = await responses[0].json();
    const docs = await Promise.all(responses.slice(1).map(async (response, i) => ({
      path: paths[i + 1], content: await response.text()
    })));
    const detailIds = new Set(["CHAR-RYUU-LION","CHAR-ALISE-LOVELACE","CHAR-ASTREA","DM-CHAR-BELL","DM-CHAR-HESTIA","DM-CHAR-AIS","DM-CHAR-EINA","CHAR-FINN-DEIMNE","CHAR-FREYA","CHAR-OTTAR","CHAR-KAGUYA","CHAR-LYRA","CHAR-ISKA-BRA","CHAR-MARIYU-LEAGE","CHAR-NOIN-UNIC","CHAR-NEZE-RANKETT","CHAR-ASTA-KNOX","CHAR-RYANA-LIETZ","CHAR-CELTY-SROWA","CHAR-DARK-ZALD","CHAR-DARK-ALFIA","CHAR-DARK-EREBUS","CHAR-DARK-RUDRA","CHAR-DARK-JURA-HALMER","CHAR-DARK-VITO","CHAR-DARK-OLIVAS-ACT","CHAR-DARK-ARDEE-VARMA","CHAR-DARK-VALLETTA-GREDE","CHAR-DARK-BARCA-PERDIX","CHAR-DARK-BASRAM","CHAR-DARK-DIS-SISTERS","CHAR-DARK-THANATOS","CHAR-DARK-APATE","CHAR-DARK-ALECTO","CHAR-DARK-AIRMID","CHAR-DARK-MIACH","CHAR-DARK-NAAZA","CHAR-DARK-DIAN-CECHT","CHAR-DARK-HEPHAISTOS","CHAR-DARK-GOIBNIU","CHAR-DARK-SAMIRA","CHAR-DARK-SELENIA", "CHAR-CECIL-BLACKLIZA","CHAR-ISELINA","CHAR-SHAU","CHAR-ULANDA","CHAR-METERIA","CHAR-ZEUS","CHAR-HERA","CHAR-MAXIM","CHAR-ALLEN-FROMEL","CHAR-ANYA-FROMEL","CHAR-MIA-GRAND","CHAR-LEENE-ARSHE","CHAR-LOKI-ALICIA-FORESTLIGHT","CHAR-HEDIN-SELLAND","CHAR-HOGNI-RAGNAR","CHAR-HEITH-VELVET","CHAR-CHLOE-ROLO","CHAR-LUNOA-FAUST"]);
    const profileRecords = (catalog.records || []).filter(record =>
      detailIds.has(record.id) && typeof record.path === "string" &&
      record.path.startsWith("characters/") && record.path.endsWith(".md"));
    const profileResponses = await Promise.all(profileRecords.map(record =>
      fetch(base + record.path, { cache: "no-cache" }).then(response => {
        if (!response.ok) throw new Error("No se pudo cargar ficha existente " + record.path + " (HTTP " + response.status + ").");
        return response.text().then(content => ({ path: record.path, content }));
      })));
    return buildIndex(catalog, docs, profileResponses);
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
      const foundTokens = queryTokens.filter(token => tokenMatches(haystack, token));
      if (queryTokens.length && foundTokens.length !== queryTokens.length) continue;
      results.push({ ...claim, characterNames: characterRecords.map(character => character.name),
        profilePaths: characterRecords.map(character => character.profilePath).filter(Boolean),
        score: queryTokens.length ? foundTokens.length * 10 : 1 });
    }
    results.sort((a, b) => b.score - a.score || a.claimId.localeCompare(b.claimId, "en") || a.entryId.localeCompare(b.entryId, "en"));
    return { results: results.slice(0, limit), totalMatches: results.length, truncated: results.length > limit,
      abstain: results.length === 0, queryTokens };
  }

  function searchEntities(catalog, options) {
    const settings = options || {};
    const requestedType = normalize(settings.type || settings.entityType || "all");
    const queryTokens = tokens(settings.query || "");
    const allowedTypes = new Set(["all", "familia", "character", "character group", "deity character", "monster", "setting",
      "institution and location", "world rule", "chronology", "event", "author event", "index"]);
    if (!allowedTypes.has(requestedType)) {
      return { results: [], totalMatches: 0, truncated: false, abstain: true, queryTokens,
        error: "Tipo de entidad no reconocido: " + requestedType };
    }
    const records = Array.isArray(catalog && catalog.records) ? catalog.records : [];
    const results = records.filter(record => {
      if (!record || typeof record.id !== "string" || typeof record.type !== "string") return false;
      if (requestedType !== "all" && normalize(record.type) !== requestedType) return false;
      const tags = Array.isArray(record.tags) ? record.tags.filter(tag => typeof tag === "string") : [];
      const haystack = normalize([record.id, record.path, record.type, record.status, record.priority, ...tags].join(" "));
      return queryTokens.every(token => tokenMatches(haystack, token));
    }).map(record => ({
      id: record.id, path: record.path || "", type: record.type, status: record.status || "unknown",
      priority: record.priority || "normal", tags: Array.isArray(record.tags) ? record.tags.slice() : []
    })).sort((a, b) => a.id.localeCompare(b.id, "en"));
    const limit = Number.isInteger(settings.limit) ? Math.max(1, Math.min(settings.limit, 100)) : 50;
    return { results: results.slice(0, limit), totalMatches: results.length, truncated: results.length > limit,
      abstain: results.length === 0, queryTokens };
  }

  function getOnlineSourceDirectory() {
    return ONLINE_SOURCE_DIRECTORY.map(source => ({ ...source }));
  }
  function cleanExternalText(value) {
    return String(value ?? "").replace(/<[^>]*>/g, " ")
      .replace(/&nbsp;/gi, " ").replace(/&#160;/g, " ")
      .replace(/&amp;/gi, "&").replace(/&lt;/gi, "<").replace(/&gt;/gi, ">")
      .replace(/&quot;/gi, '"').replace(/&#39;|&apos;/gi, "'")
      .replace(/&#(\d+);/g, (all, code) => {
        const number = Number(code);
        return Number.isFinite(number) && number > 0 && number <= 0x10ffff ? String.fromCodePoint(number) : all;
      })
      .replace(/&#x([0-9a-f]+);/gi, (all, code) => {
        const number = parseInt(code, 16);
        return Number.isFinite(number) && number > 0 && number <= 0x10ffff ? String.fromCodePoint(number) : all;
      })
      .replace(/\s+/g, " ").trim();
  }
  function extractExternalLead(html) {
    let source = String(html || "");
    source = source
      .replace(/<script\b[\s\S]*?<\/script>/gi, " ")
      .replace(/<style\b[\s\S]*?<\/style>/gi, " ")
      .replace(/<aside\b[\s\S]*?<\/aside>/gi, " ")
      .replace(/<figure\b[\s\S]*?<\/figure>/gi, " ")
      .replace(/<table\b[\s\S]*?<\/table>/gi, " ")
      .replace(/<sup\b[\s\S]*?<\/sup>/gi, " ");
    const paragraphs = [...source.matchAll(/<p\b[^>]*>([\s\S]*?)<\/p>/gi)]
      .map(match => cleanExternalText(match[1]))
      .filter(text => text.length > 45)
      .filter(text => !/^(jump to|navigation|contents|references|external links|categories)/i.test(text));
    let result = "";
    for (const paragraph of paragraphs.slice(0, 5)) {
      if (result.length + paragraph.length > 1300) {
        const remainder = 1300 - result.length;
        if (remainder > 100) result += (result ? "\n\n" : "") + paragraph.slice(0, remainder).trim();
        break;
      }
      result += (result ? "\n\n" : "") + paragraph;
    }
    return result.trim();
  }
  function allowedExternalImageUrl(value, providerId) {
    try {
      const url = new URL(String(value || ""));
      if (url.protocol !== "https:") return "";
      if (providerId === "danmachi-wiki" && /(?:^|\.)wikia\.nocookie\.net$/i.test(url.hostname)) return url.href;
      if (providerId === "wikipedia-en" && (url.hostname === "upload.wikimedia.org" || url.hostname === "en.wikipedia.org")) return url.href;
    } catch {}
    return "";
  }
  async function searchExternalSources(query, options) {
    const searchText = String(query ?? "").trim().slice(0, 160);
    const settings = options || {};
    if (!searchText) throw new TypeError("Escribí un tema o elegí un personaje antes de buscar en la web.");
    const fetcher = settings.fetchImpl || settings.fetch || (typeof fetch === "function" ? fetch : null);
    if (!fetcher) throw new Error("Este entorno no ofrece fetch para consultar fuentes web.");
    const providers = [
      { id:"danmachi-wiki", label:"DanMachi Wiki (Fandom)", authority:"Fuente secundaria · wiki comunitaria", note:"Úsala para localizar páginas, nombres alternativos y referencias; no confirma canon por sí sola.", endpoint:"https://danmachi.fandom.com/api.php", searchUrl:"https://danmachi.fandom.com/wiki/Special:Search?query="+encodeURIComponent(searchText), articleUrl:title=>"https://danmachi.fandom.com/wiki/"+encodeURIComponent(String(title||"").replace(/ /g,"_")) },
      { id:"wikipedia-en", label:"Wikipedia en inglés", authority:"Fuente secundaria · enciclopedia general", note:"Útil para contexto de serie/publicación; normalmente no basta para detalles específicos del canon.", endpoint:"https://en.wikipedia.org/w/api.php", searchUrl:"https://en.wikipedia.org/w/index.php?search="+encodeURIComponent(searchText), articleUrl:title=>"https://en.wikipedia.org/wiki/"+encodeURIComponent(String(title||"").replace(/ /g,"_")) }
    ];
    const providerReports = await Promise.all(providers.map(async provider => {
      try {
        const url = new URL(provider.endpoint);
        url.searchParams.set("action","query"); url.searchParams.set("list","search");
        url.searchParams.set("srsearch",searchText); url.searchParams.set("srnamespace","0");
        url.searchParams.set("srlimit","5"); url.searchParams.set("srprop","snippet|timestamp");
        url.searchParams.set("format","json"); url.searchParams.set("origin","*");
        const request = { method:"GET", mode:"cors", credentials:"omit", cache:"no-store", headers:{Accept:"application/json"} };
        if(settings.signal) request.signal = settings.signal;
        const response = await fetcher(url.href,request);
        if(!response || !response.ok) throw new Error("HTTP "+(response?response.status:"sin respuesta"));
        const payload = await response.json();
        const hits = payload && payload.query && Array.isArray(payload.query.search) ? payload.query.search : [];
        const results = hits.slice(0,5).map(hit=>({
          providerId:provider.id, providerLabel:provider.label, authority:provider.authority,
          title:cleanExternalText(hit.title)||"Resultado sin título",
          snippet:cleanExternalText(hit.snippet)||"La fuente no proporcionó un resumen para este resultado.",
          extract:"", thumbnailUrl:"", imageCredit:"",
          url:provider.articleUrl(hit.title), updatedAt:typeof hit.timestamp==="string"?hit.timestamp:"",
          pageId:Number.isSafeInteger(Number(hit.pageid))&&Number(hit.pageid)>0?Number(hit.pageid):null
        }));
        const pageIds = results.map(hit=>hit.pageId).filter(Boolean);
        if(pageIds.length){
          try {
            const imageRequestUrl = new URL(provider.endpoint);
            imageRequestUrl.searchParams.set("action","query");
            imageRequestUrl.searchParams.set("prop","pageimages|info");
            imageRequestUrl.searchParams.set("pageids",pageIds.join("|"));
            imageRequestUrl.searchParams.set("piprop","thumbnail");
            imageRequestUrl.searchParams.set("pithumbsize","320");
            imageRequestUrl.searchParams.set("inprop","url");
            imageRequestUrl.searchParams.set("format","json");
            imageRequestUrl.searchParams.set("origin","*");
            const imageResponse = await fetcher(imageRequestUrl.href,request);
            if(imageResponse&&imageResponse.ok){
              const imagePayload=await imageResponse.json();
              const pages=imagePayload&&imagePayload.query&&imagePayload.query.pages;
              const pageList=Array.isArray(pages)?pages:Object.values(pages||{});
              const byId=new Map(pageList.map(page=>[Number(page.pageid),page]));
              results.forEach(hit=>{
                const page=byId.get(hit.pageId);
                if(!page)return;
                hit.url=typeof page.canonicalurl==="string"&&page.canonicalurl.startsWith("https://")
                  ?page.canonicalurl:typeof page.fullurl==="string"&&page.fullurl.startsWith("https://")?page.fullurl:hit.url;
                hit.thumbnailUrl=allowedExternalImageUrl(page.thumbnail&&page.thumbnail.source,provider.id);
                if(hit.thumbnailUrl)hit.imageCredit="Miniatura alojada por "+provider.label+"; derechos de imagen de sus titulares. No se guarda en WordWaifu.";
              });
            }
          } catch { /* A failed thumbnail lookup must not erase the article search results. */ }
          const detailHits=results.filter(hit=>hit.pageId).slice(0,3);
          await Promise.all(detailHits.map(async hit=>{
            try {
              const detailUrl=new URL(provider.endpoint);
              detailUrl.searchParams.set("action","parse");
              detailUrl.searchParams.set("page",hit.title);
              detailUrl.searchParams.set("section","0");
              detailUrl.searchParams.set("prop","text");
              detailUrl.searchParams.set("format","json");
              detailUrl.searchParams.set("origin","*");
              const detailResponse=await fetcher(detailUrl.href,request);
              if(!detailResponse||!detailResponse.ok)return;
              const detailPayload=await detailResponse.json();
              const html=detailPayload&&detailPayload.parse&&detailPayload.parse.text&&detailPayload.parse.text["*"];
              const extract=extractExternalLead(html);
              if(extract)hit.extract=extract.slice(0,1300);
            } catch { /* Keep the safe search snippet if page lead extraction is unavailable. */ }
          }));
        }
        return {
          providerId:provider.id, providerLabel:provider.label, authority:provider.authority,
          note:provider.note, searchUrl:provider.searchUrl, error:"", results
        };
      } catch(error) {
        return {
          providerId:provider.id, providerLabel:provider.label, authority:provider.authority,
          note:provider.note, searchUrl:provider.searchUrl,
          error:cleanExternalText(error && error.message ? error.message : "Fuente no disponible"), results:[]
        };
      }
    }));
    return {
      query:searchText, providers:providerReports,
      results:providerReports.flatMap(provider=>provider.results),
      hasFailures:providerReports.some(provider=>Boolean(provider.error)),
      sourceDirectory:getOnlineSourceDirectory()
    };
  }

  return { load, buildIndex, search, searchEntities, normalize, tokens, parseCharacterProfile, getOnlineSourceDirectory, searchExternalSources, cleanExternalText, extractExternalLead, allowedExternalImageUrl };
});

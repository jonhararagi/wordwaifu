/* Local, deterministic fanfiction reviewer. It reports hypotheses, never edits manuscript text. */
(function (root, factory) {
  "use strict";
  const api = factory();
  if (typeof module === "object" && module.exports) module.exports = api;
  else root.WordWaifuFanficReview = api;
})(typeof globalThis !== "undefined" ? globalThis : this, function () {
  "use strict";
  const clean = value => String(value == null ? "" : value).trim();
  const escapeRegExp = value => value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const unique = values => Array.from(new Set(values.filter(Boolean)));
  function collectProfiles(projectCharacters = [], roster = []) {
    const byKey = new Map();
    (Array.isArray(roster) ? roster : []).forEach(record => {
      if (!record || !clean(record.name)) return;
      const dossierMap = record.dossiers && typeof record.dossiers === "object" ? record.dossiers : {};
      const dossier = dossierMap[record.continuity] || dossierMap["CONT-MAIN-LN"] || dossierMap["CONT-ANIME"] || Object.values(dossierMap)[0] || {};
      const source = record.sourceTitle || record.sourcePage || "Registro de adaptación";
      const profile = {
        id: record.id || record.name, name: record.name,
        aliases: unique([record.name].concat(Array.isArray(record.aliases) ? record.aliases : [])),
        role: clean(record.role), personality: clean(record.personality),
        summary: clean(record.summary), motivations: clean(record.motivations || dossier.motivation || dossier.development),
        voice: clean(record.voiceNotes || record.dialogueStyle || ""),
        abilities: clean(record.abilities || dossier.combatProfile || ""),
        source, sourceType: record.evidenceType || "reference_record",
        continuity: record.continuity || "unspecified",
        secondary: dossier && Object.keys(dossier).length > 0 ? {
          label: clean(dossier.sourceLabel || "Expediente complementario"),
          type: clean(dossier.sourceType || "secondary_compendium"),
          personality: clean(dossier.personality || dossier.development || ""),
          history: clean(dossier.history || "")
        } : null
      };
      byKey.set(profile.id, profile);
    });
    (Array.isArray(projectCharacters) ? projectCharacters : []).forEach(character => {
      if (!character || !clean(character.name)) return;
      const id = clean(character.id || character.name);
      const existing = byKey.get(id);
      const profile = existing || {
        id, name: clean(character.name), aliases: [clean(character.name)],
        role: "", personality: "", summary: "", motivations: "", voice: "",
        abilities: "", source: "Ficha del proyecto local", sourceType: "user_authored",
        continuity: "project", secondary: null
      };
      profile.aliases = unique(profile.aliases.concat(Array.isArray(character.aliases) ? character.aliases : []));
      if (!profile.personality) profile.personality = clean(Array.isArray(character.personality) ? character.personality.join(", ") : character.personality);
      if (!profile.role) profile.role = clean(character.role);
      if (!profile.motivations) profile.motivations = clean(character.motivation);
      if (!profile.summary) profile.summary = clean(character.description);
      byKey.set(id, profile);
    });
    return Array.from(byKey.values()).sort((a,b) => b.name.length - a.name.length);
  }
  function findCharacterMentions(text, profiles) {
    const found = [];
    profiles.forEach(profile => profile.aliases.forEach(alias => {
      alias = clean(alias);
      if (alias.length < 2) return;
      const re = new RegExp("(^|[^\\p{L}\\p{N}_])(" + escapeRegExp(alias) + ")(?=$|[^\\p{L}\\p{N}_])", "giu");
      let match;
      while ((match = re.exec(text))) {
        const start = match.index + match[1].length;
        found.push({ profile, alias, start, end: start + match[2].length });
        if (!match[0].length) re.lastIndex++;
      }
    }));
    return found.sort((a,b) => a.start-b.start || b.end-a.end);
  }
  function sentenceRanges(text) {
    const ranges = [];
    const re = /[^.!?\n]+(?:[.!?]+|\n|$)/g;
    let m;
    while ((m = re.exec(text))) {
      const start = m.index + (m[0].match(/^\s*/) || [""])[0].length;
      const value = m[0].trim();
      if (value) ranges.push({ start, end: start + value.length, text: value });
    }
    return ranges;
  }
  function quoteRanges(text) {
    const ranges = [];
    const re = /«([^»\n]{2,})»|“([^”\n]{2,})”|"([^"\n]{2,})"|‘([^’\n]{2,})’/g;
    let m;
    while ((m = re.exec(text))) {
      const content = m[1] || m[2] || m[3] || m[4];
      const offset = m[0].indexOf(content);
      ranges.push({ start: m.index + offset, end: m.index + offset + content.length, text: content, fullStart: m.index, fullEnd: m.index + m[0].length });
    }
    return ranges;
  }
  function analyze(textInput, options = {}) {
    const text = String(textInput || "");
    const profiles = collectProfiles(options.characters, options.roster);
    const mentions = findCharacterMentions(text, profiles);
    const sentences = sentenceRanges(text);
    const quotes = quoteRanges(text);
    const exceptions = Array.isArray(options.exceptions) ? options.exceptions : [];
    const issues = [];
    const add = issue => {
      const key = issue.rule + "|" + issue.profileId + "|" + issue.excerpt.toLocaleLowerCase();
      if (exceptions.some(item => item && item.key === key)) return;
      if (issues.some(item => item.key === key)) return;
      issues.push({ ...issue, key });
    };
    const profileFor = mention => mention && mention.profile;
    const mentionedProfiles = unique(mentions.map(m => m.profile.id)).map(id => profiles.find(p => p.id === id)).filter(Boolean);
    if (!text.trim()) return { issues: [], profiles: [], summary: "Escribí o pegá un fragmento del manuscrito para revisarlo.", analyzedCharacters: [] };
    mentionedProfiles.forEach(profile => {
      const hasEvidence = Boolean(profile.personality || profile.role || profile.summary || profile.motivations || profile.abilities || profile.secondary);
      if (!hasEvidence) add({
        rule: "insufficient-profile", severity: "info", confidence: "low", profileId: profile.id,
        character: profile.name, excerpt: profile.name,
        reason: "La ficha no contiene suficiente información conductual para evaluar esta escena. No se inferirá una personalidad inexistente.",
        evidence: "Sin evidencia conductual disponible.", source: "Ficha del proyecto",
        suggestions: ["Añadí ejemplos documentados de voz, valores, motivaciones o reacciones habituales.", "Mantené la escena: la falta de datos no demuestra una contradicción."]
      });
    });
    quotes.forEach(quote => {
      const nearby = mentions.filter(m => m.start >= Math.max(0, quote.fullStart - 180) && m.end <= Math.min(text.length, quote.fullEnd + 180));
      const before = text.slice(Math.max(0, quote.fullStart - 100), quote.fullStart);
      const after = text.slice(quote.fullEnd, Math.min(text.length, quote.fullEnd + 100));
      const candidates = unique(nearby.map(m => m.profile.id)).map(id => profiles.find(p => p.id === id)).filter(Boolean);
      const attribution = /(dijo|preguntó|respondió|contestó|susurró|gritó|murmuró|replicó|ordenó|advirtió|exclamó|demandó|añadió|insistió|dijo|dijo|dijo|said|asked|replied|whispered|shouted|ordered|warned)/i.test(before + " " + after);
      if (candidates.length > 1 && attribution) {
        add({
          rule: "ambiguous-attribution", severity: "info", confidence: "medium",
          profileId: candidates.map(p=>p.id).join(","), character: candidates.map(p=>p.name).join(" / "),
          excerpt: text.slice(Math.max(0, quote.fullStart - 45), Math.min(text.length, quote.fullEnd + 45)),
          start: Math.max(0, quote.fullStart - 45), end: Math.min(text.length, quote.fullEnd + 45),
          reason: "Hay más de un personaje cerca de este diálogo; la atribución no es inequívoca para un analizador local.",
          evidence: "Coincidencia de nombres próximos al diálogo; no es prueba de error.",
          source: "Estructura del manuscrito",
          suggestions: ["Aclarar el sujeto con una acción o etiqueta de diálogo.", "Si la atribución ya es clara por el contexto, ignorar este aviso."]
        });
      }
    });
    const blunt = /\b(vete de una vez|largate|lárgate|callate|cállate|no me importa|desaparece|te las arreglas solo|arréglate solo|me da igual)\b/i;
    quotes.forEach(quote => {
      if (!blunt.test(quote.text)) return;
      const contextMentions = mentions.filter(m => m.start >= Math.max(0, quote.fullStart - 180) && m.end <= Math.min(text.length, quote.fullEnd + 180));
      const profilesHere = unique(contextMentions.map(m => m.profile.id)).map(id => profiles.find(p=>p.id===id)).filter(Boolean);
      profilesHere.forEach(profile => {
        const cues = [profile.role, profile.personality, profile.summary, profile.motivations, profile.secondary && profile.secondary.personality].filter(Boolean).join(" ");
        const professional = /recepcionista|asesor|asesora|curador|médic|sanitari|instructor|profesor|responsable|precavid|prudente|cuidados|protector|compasiv|ayuda|servicio|atención/i.test(cues);
        if (!professional) return;
        const dossierEvidence = profile.secondary && (profile.secondary.personality || profile.secondary.history);
        add({
          rule: "possible-characterization-drift", severity: "review", confidence: dossierEvidence ? "medium-low" : "low",
          profileId: profile.id, character: profile.name,
          excerpt: text.slice(Math.max(0, quote.fullStart - 50), Math.min(text.length, quote.fullEnd + 50)),
          start: Math.max(0, quote.fullStart - 50), end: Math.min(text.length, quote.fullEnd + 50),
          reason: "Este diálogo suena brusco o desentendido. Puede contrastar con la función profesional o el perfil documentado del personaje, pero el contexto de la escena podría justificarlo.",
          evidence: [profile.role && "Función: " + profile.role, profile.personality && "Perfil: " + profile.personality, dossierEvidence && "Expediente complementario: " + profile.secondary.label + " (fuente secundaria)"].filter(Boolean).join("\n") || "La ficha no ofrece evidencia suficiente para afirmar que el diálogo contradiga el canon.",
          source: profile.source + (dossierEvidence ? " + " + profile.secondary.label : ""),
          suggestions: ["Mantener el diálogo y marcarlo como divergencia intencional (enojo, urgencia o cambio de relación).", "Añadir una frase que muestre por qué abandona su conducta habitual.", "Reformular el tono sin cambiar la intención de la escena."]
        });
      });
    });
    const factPatterns = [
      { key:"death", positive:/\b(murió|muerto|muerta|falleció|asesinaron|está muerto|está muerta)\b/i, negative:/\b(está vivo|está viva|sigue vivo|sigue viva|sobrevivió)\b/i, label:"estado de vida" },
      { key:"injury", positive:/\b(herida grave|pierna rota|brazo roto|está herido|está herida|sangraba profusamente)\b/i, negative:/\b(se recuperó por completo|herida curada|ya no está herido|ya no está herida)\b/i, label:"estado físico" }
    ];
    factPatterns.forEach(pattern => {
      const occurrences = [];
      sentences.forEach(sentence => {
        const relevant = mentions.filter(m => m.start < sentence.end && m.end > sentence.start);
        unique(relevant.map(m=>m.profile.id)).forEach(id => {
          const profile = profiles.find(p=>p.id===id);
          const pos = pattern.positive.test(sentence.text), neg = pattern.negative.test(sentence.text);
          if (pos || neg) occurrences.push({ sentence, profile, state: pos ? "positive" : "negative" });
        });
      });
      occurrences.forEach((current, index) => occurrences.slice(index+1).forEach(other => {
        if (current.profile.id !== other.profile.id || current.state === other.state) return;
        const pair = [current,other].sort((a,b)=>a.sentence.start-b.sentence.start);
        add({
          rule: "possible-continuity-contradiction", severity: "review", confidence: "low",
          profileId: current.profile.id, character: current.profile.name,
          excerpt: pair.map(item=>item.sentence.text).join(" … "),
          start: pair[0].sentence.start, end: pair[1].sentence.end,
          relatedSpans: pair.map(item=>({start:item.sentence.start,end:item.sentence.end,text:item.sentence.text})),
          reason: "Dos fragmentos del mismo manuscrito parecen describir estados incompatibles de " + pattern.label + ". Una elipsis temporal, una falsa muerte o una curación explicada pueden resolverlo.",
          evidence: "Fragmento A: " + pair[0].sentence.text + "\nFragmento B: " + pair[1].sentence.text,
          source: "Continuidad interna del borrador",
          suggestions: ["Añadir la transición o explicación que falta.", "Corregir el fragmento que no representa la continuidad deseada.", "Marcar la contradicción como intencional si forma parte de un giro."]
        });
      }));
    });
    return {
      issues,
      profiles: mentionedProfiles.map(profile => ({
        id: profile.id, name: profile.name, role: profile.role,
        personality: profile.personality, source: profile.source,
        sourceType: profile.sourceType, continuity: profile.continuity,
        secondary: profile.secondary
      })),
      analyzedCharacters: mentionedProfiles.map(p=>p.name),
      summary: issues.length ? issues.length + " aviso(s) para revisar; no se modificó el manuscrito." : "No se detectaron señales con las reglas locales disponibles. Esto no garantiza que todo sea coherente."
    };
  }
  function exceptionFor(issue) {
    return { key: issue.key, rule: issue.rule, profileId: issue.profileId, character: issue.character, excerpt: issue.excerpt, reason: issue.reason, intentional: true, createdAt: new Date().toISOString() };
  }
  return Object.freeze({ analyze, collectProfiles, findCharacterMentions, exceptionFor });
});

"use strict";

const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const corpus = require("../src/lore-corpus.js");
const archive = require("../src/character-archive.js");

const ledgerPath = path.join(__dirname, "..", "lore", "danmachi", "CHARACTER_UPDATE_LEDGER.md");
const ledger = fs.readFileSync(ledgerPath, "utf8");
assert.match(ledger, /Protocolo anti-repetición \(obligatorio\)/);
assert.match(ledger, /«No informado» no es lo mismo que «no existe»/);
assert.match(ledger, /no reescriben personalidades|No se reescribieron personalidades/i);
assert.match(ledger, /Reabrir una entrada únicamente si ocurre uno de estos disparadores/);

const astreaIds = [
  "CHAR-ALISE-LOVELACE",
  "CHAR-KAGUYA",
  "CHAR-LYRA",
  "CHAR-MARIYU-LEAGE",
  "CHAR-NEZE-RANKETT",
  "CHAR-NOIN-UNIC",
  "CHAR-ISKA-BRA",
  "CHAR-ASTA-KNOX",
  "CHAR-RYANA-LIETZ",
  "CHAR-CELTY-SROWA"
];
const heldDmr045Ids = [
  "CHAR-DARK-ALFIA",
  "CHAR-DARK-ZALD",
  "CHAR-METERIA",
  "CHAR-DARK-EREBUS",
  "CHAR-DARK-RUDRA"
];

function sectionFor(id) {
  const start = ledger.indexOf("### " + id + " —");
  assert.ok(start >= 0, "Ledger must contain " + id);
  const end = ledger.indexOf("\n### ", start + 5);
  return ledger.slice(start, end < 0 ? ledger.length : end);
}

for (const id of [...astreaIds, ...heldDmr045Ids]) {
  const matches = ledger.match(new RegExp("^### " + id + " —", "gm")) || [];
  assert.equal(matches.length, 1, "Each character must have exactly one update ledger entry: " + id);
  const entry = sectionFor(id);
  assert.match(entry, /\*\*Estado:\*\*/);
  assert.match(entry, /\*\*Cierre:\*\*|\*\*Reabrir solo si:\*\*|\*\*Reabrir solo cuando:\*\*/);
}

for (const id of heldDmr045Ids) {
  assert.match(sectionFor(id), /HOLD_FOR_PRIMARY_SOURCE/);
  assert.match(sectionFor(id), /Reabrir solo si:/);
}

const sourceDirectory = corpus.getOnlineSourceDirectory();
for (const id of [
  "community-astrea-family",
  "community-minor-characters",
  "community-ryuu-en",
  "community-alise",
  "community-kaguya",
  "community-lyra",
  "community-celty-srowa"
]) {
  assert.equal(sourceDirectory.filter(source => source.id === id).length, 1,
    "The ledger's supporting wiki route must exist exactly once: " + id);
}

const secondaryNotes = new Map([
  ["CHAR-ALISE-LOVELACE", ["Agaris Alvesynth", "Lubrude Bequia", "Batleate Asyrath"]],
  ["CHAR-KAGUYA", ["Tekiheni", "Sakibeni", "Gokou"]],
  ["CHAR-LYRA", ["Mūs Mine", "Wingus Smite", "Ratts Phil"]],
  ["CHAR-MARIYU-LEAGE", ["Rea Vindemia", "Unknown", "3–4"]],
  ["CHAR-NEZE-RANKETT", ["garras de viento", "Úlfheðinn", "3–4"]],
  ["CHAR-NOIN-UNIC", ["aumento de velocidad", "sin nombre"]],
  ["CHAR-ISKA-BRA", ["dos puños", "Unknown"]],
  ["CHAR-ASTA-KNOX", ["defensa impenetrable", "escudo"]],
  ["CHAR-RYANA-LIETZ", ["Irivute", "debilitación"]],
  ["CHAR-CELTY-SROWA", ["fuego", "rayo", "conflicto"]]
]);
for (const [id, requiredTerms] of secondaryNotes) {
  const note = archive.getExtendedInfo(id, "CONT-SECONDARY", null);
  assert.ok(note && note.references.length > 0, id + " must expose the secondary-only research note.");
  assert.ok(note.references.every(ref => ref.kind === "community"),
    id + " must preserve the secondary source type rather than label the page official.");
  const allText = [note.title, note.summary, ...note.sections.map(section => section.title + " " + section.text)].join("\n");
  for (const term of requiredTerms) {
    assert.ok(allText.toLowerCase().includes(term.toLowerCase()),
      id + " note must preserve the registered result/limit: " + term);
  }
  assert.ok(!note.sections.some(section => /reescribir su personalidad|nueva personalidad/i.test(section.text)),
    id + " note must not replace character research with another personality rewrite.");
}

assert.ok(archive.continuityLabels["CONT-SECONDARY"].includes("no cotejados"),
  "The archive must visibly label secondary-source data as not primary-checked.");
assert.ok(archive.continuityOrder.includes("CONT-SECONDARY"),
  "The separate secondary continuity must remain available to the interactive archive.");
console.log("PASS character update ledger: unique entries, stop/reopen rules, source typing and 10 secondary character notes verified.");

"use strict";
const assert = require("node:assert/strict");
const { analyze, collectProfiles, exceptionFor } = require("../src/fanfic-review.js");
const roster = [
  { id:"DM-CHAR-EINA", name:"Eina Tulle", aliases:["Eina"], role:"Recepcionista y asesora del Gremio", personality:"", summary:"Perfil oficial consultado", sourceTitle:"Perfil oficial", sourcePage:"https://danmachi.com/", evidenceType:"official_adaptation_profile", continuity:"CONT-ANIME", dossiers:{ "CONT-MAIN-LN": { sourceLabel:"Wiki secundaria", sourceType:"secondary_compendium", personality:"Responsable y precavida" } } },
  { id:"DM-CHAR-BELL", name:"Bell Cranel", aliases:["Bell"], role:"Aventurero", personality:"Compasivo y perseverante", abilities:"Combate rápido; carga Argonaut", sourceTitle:"Perfil oficial", continuity:"CONT-ANIME" }
];
let result = analyze('Eina Tulle le dijo «Vete de una vez a la Dungeon, no hace falta que te quedes a registrarte».', { roster });
assert.ok(result.issues.some(issue => issue.rule === "possible-characterization-drift"), "Eina's brusque dialogue should be a review prompt");
assert.ok(result.issues.find(issue => issue.rule === "possible-characterization-drift").evidence.includes("secundaria"), "evidence must preserve secondary-source provenance");
result = analyze("Eina Tulle abandonó su puesto y dejó solo al aventurero.", { roster });
assert.ok(result.issues.some(issue => issue.rule === "possible-characterization-drift"), "potentially atypical actions should also be reviewable");
assert.ok(!result.issues.some(issue => issue.severity === "error"), "the engine must not claim a canon violation");
const drift = result.issues.find(issue => issue.rule === "possible-characterization-drift");
const exception = exceptionFor(drift);
result = analyze('Eina Tulle le dijo «Vete de una vez a la Dungeon, no hace falta que te quedes a registrarte».', { roster, exceptions:[exception] });
assert.ok(!result.issues.some(issue => issue.key === drift.key), "intentional divergences must be suppressible");
result = analyze('Bell Cranel murió en el último combate. Bell sigue vivo al día siguiente.', { roster });
assert.ok(result.issues.some(issue => issue.rule === "possible-continuity-contradiction" && issue.relatedSpans.length === 2), "contradiction should point to both fragments");
result = analyze('Bell sigue vivo al día siguiente.', { roster, chapterNumber:5, chapterTitle:"El regreso", previousChapters:[{ number:4, title:"El combate", content:"Bell Cranel murió en el último combate." }] });
const crossChapter = result.issues.find(issue => issue.rule === "possible-continuity-contradiction");
assert.ok(crossChapter && crossChapter.relatedSpans.some(span => span.current === false) && crossChapter.relatedSpans.some(span => span.current === true), "review must compare the current chapter with earlier saved chapters");
result = analyze('Una persona desconocida entró y dijo «No me importa».', { roster:[] });
assert.equal(result.issues.length, 0, "unknown characters should not trigger invented diagnoses");
result = analyze('Eina y Bell se miraron. «Tenemos que irnos», dijo Eina.', { roster });
assert.ok(result.profiles.some(profile => profile.name === "Eina Tulle"));
const empty = analyze("", { roster });
assert.equal(empty.issues.length, 0);
assert.ok(collectProfiles([], []).length === 0);
console.log("Fanfic review tests passed.");

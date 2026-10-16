"use strict";
const assert = require("node:assert/strict");
const { generateStoryPlan, normalizeOptions, chapterFunction } = require("../src/story-foundry.js");
const input = { title:"La corona de ceniza", genre:"Fantasía oscura", premise:"Una aprendiz descubre que la magia cobra recuerdos.", world:"Un reino alrededor de un volcán dormido", protagonist:"Iria, aprendiz de cartógrafa", protagonistGoal:"detener el despertar del volcán", centralConflict:"cada hechizo consume un recuerdo compartido", companion:"Narel, exguardia", antagonist:"La regente del vidrio", loveInterest:"Sena, curandera", trauma:"Iria abandonó a su hermano durante una evacuación", power:"Cartografía mágica cuyo coste son recuerdos" };
for (const ending of ["closed","open","arc"]) {
  for (const count of [1,10,30]) {
    const plan = generateStoryPlan({...input, chapterCount:count, ending});
    assert.equal(plan.chapterCount,count);
    assert.equal(plan.chapters.length,count);
    assert.equal(plan.chapters[0].number,1);
    assert.equal(plan.chapters.at(-1).number,count);
    assert.equal(new Set(plan.chapters.map(ch=>ch.id)).size,count);
    assert.equal(plan.ending.type,ending);
    assert.equal(plan.ending.label,{"closed":"Final cerrado","open":"Final abierto","arc":"Final de arco"}[ending]);
    assert.equal(plan.chapters.at(-1).narrativeFunction,{"closed":"resolution","open":"open_question","arc":"arc_transition"}[ending]);
    assert.ok(plan.chapters.at(-1).summary.includes(plan.continuityChecklist.at(-1)));
    assert.ok(plan.chapters.every(ch=>ch.summary&&ch.status==="outline"));
    assert.ok(plan.chapters.every(ch=>ch.objective&&ch.obstacle&&ch.decision&&ch.change&&ch.consequence));
    assert.equal(plan.chapters[0].previousChapterId, null, "the opening chapter must not invent a predecessor");
    assert.ok(plan.chapters[0].continuityFrom.includes("estado inicial"));
    assert.ok(plan.chapters.slice(1).every((ch,i)=>ch.previousChapterId===plan.chapters[i].id && ch.continuityFrom.includes(plan.chapters[i].number.toString().padStart(3,"0"))), "each later chapter must explicitly inherit continuity from its immediate predecessor");
    if (count > 1) {
      assert.ok(plan.chapters.some((ch,i)=>i>0&&ch.narrativeFunction!==plan.chapters[i-1].narrativeFunction), "adjacent chapters must vary narrative function");
      assert.ok(plan.chapters.some((ch,i)=>i>0&&ch.objective!==plan.chapters[i-1].objective), "adjacent chapters must not reuse the same objective");
      assert.ok(plan.chapters.every((ch,i)=>i===0||plan.chapters[i-1].consequence.length>0), "prior consequence must be available to support continuity");
    }
  }
}
for (const count of [2,5,22,100,501,0,-3]) {
 const generated=generateStoryPlan({chapterCount:count});
 const expected=count<=0?30:Math.max(1,Math.min(500,Math.floor(count)||30));
 assert.equal(generated.chapterCount,expected);
 assert.deepEqual(generated.chapters.map(ch=>ch.number),Array.from({length:expected},(_,i)=>i+1));
}
assert.equal(normalizeOptions({ending:"anything"}).ending,"closed");
assert.equal(normalizeOptions({ending:"arc"}).ending,"arc");
assert.equal(chapterFunction(1,1,"arc").key,"arc_transition");
const plan = generateStoryPlan({...input, chapterCount:10, ending:"arc"});
assert.equal(plan.ending.terminalState,"arc-complete");
assert.match(plan.chapters.at(-1).summary,/siguiente arco/i);
assert.equal(plan.cast.length,4);
assert.ok(plan.development.some(item=>item.type==="wound"));
assert.ok(plan.development.some(item=>item.type==="power"));
assert.ok(plan.synopsis.includes("Iria"));
console.log("PASS Story Foundry: closed/open/arc endings, 1/10/30 chapters, distinct narrative functions, continuity fields and final-chapter semantics");

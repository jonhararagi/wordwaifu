"use strict";
const assert = require("node:assert/strict");
const { generateStoryPlan, normalizeOptions } = require("../src/story-foundry.js");
const plan = generateStoryPlan({ title:"La corona de ceniza", genre:"Fantasía oscura", premise:"Una aprendiz descubre que la magia cobra recuerdos.", world:"Un reino alrededor de un volcán dormido", protagonist:"Iria, aprendiz de cartógrafa", protagonistGoal:"detener el despertar del volcán", centralConflict:"cada hechizo consume un recuerdo compartido", companion:"Narel, exguardia", antagonist:"La regente del vidrio", loveInterest:"Sena, curandera", trauma:"Iria abandonó a su hermano durante una evacuación", power:"Cartografía mágica cuyo coste son recuerdos", chapterCount:30, ending:"open" });
assert.equal(plan.chapterCount,30);
assert.equal(plan.chapters.length,30);
assert.equal(plan.chapters[0].number,1);
assert.equal(plan.chapters.at(-1).number,30);
assert.equal(new Set(plan.chapters.map(ch=>ch.id)).size,30);
assert.equal(plan.ending.type,"open");
assert.equal(plan.ending.label,"Final abierto");
assert.ok(plan.arcs.some(arc=>/falsa seguridad/i.test(arc.name)));
assert.ok(plan.arcs.some(arc=>/caída/i.test(arc.name)));
assert.equal(plan.cast.length,4);
assert.ok(plan.development.some(item=>item.type==="wound"));
assert.ok(plan.development.some(item=>item.type==="power"));
assert.ok(plan.synopsis.includes("Iria"));
assert.ok(plan.chapters.every(ch=>ch.summary&&ch.status==="outline"));
for (const count of [1,2,5,10,22,30,100,501,0,-3]) {
 const generated=generateStoryPlan({chapterCount:count});
 const expected=count<=0?30:Math.max(1,Math.min(500,Math.floor(count)||30));
 assert.equal(generated.chapterCount,expected);
 assert.deepEqual(generated.chapters.map(ch=>ch.number),Array.from({length:expected},(_,i)=>i+1));
}
assert.equal(normalizeOptions({ending:"anything"}).ending,"closed");
assert.ok(generateStoryPlan({chapterCount:10,ending:"closed"}).chapters.at(-1).summary.includes("Resolver el conflicto central"));
console.log("PASS story foundry: arc allocation, stable chapter IDs, cast, character development and endings");

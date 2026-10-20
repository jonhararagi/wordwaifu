"use strict";
const assert=require("node:assert/strict");
const fs=require("node:fs");
const path=require("node:path");
const root=path.join(__dirname,"..");
const lore=path.join(root,"lore","danmachi");
const catalog=JSON.parse(fs.readFileSync(path.join(lore,"catalog.json"),"utf8"));
const records=new Map(catalog.records.map(r=>[r.id,r]));
const research=fs.readFileSync(path.join(lore,"research","inbox","DANMACHI-RESEARCH-034-orario-prototype-streets-commerce-babel.md"),"utf8");
const claimIds=new Set([...research.matchAll(/^### (DMR-\d+-CLM-\d{3}) · /gm)].map(m=>m[1]));
for(const id of ["LOC-ORARIO-CENTRAL-PARK-PROTOTYPE","LOC-ORARIO-AVENUES-PROTOTYPE","LOC-ORARIO-COMMERCIAL-STREETS-PROTOTYPE"]){
 const record=records.get(id);
 assert.ok(record,"Missing prototype place "+id);
 assert.equal(record.type,"location");
 const markdown=fs.readFileSync(path.join(lore,record.path),"utf8");
 assert.match(markdown,/continuity_scope: CONT-PROTOTYPE/);
 assert.ok(claimIds.has((markdown.match(/^  - (DMR-\d+-CLM-\d{3})$/m)||[])[1]),"Missing DMR-034 claim ref "+id);
 const edge=catalog.relationships.find(e=>e.from===id&&e.to==="LOC-ORARIO"&&e.continuity==="CONT-PROTOTYPE");
 assert.ok(edge,"Missing prototype-only city edge "+id);
 assert.equal(edge.evidenceStatus,record.status);
}
assert.ok(!catalog.records.some(r=>r.id==="LOC-CENTRAL-PARK"&&r.status==="complete"),"Prototype location must not be promoted to primary novel canon.");
process.stdout.write("PASS DanMachi Orario Prototype inventory: claims and continuity stay separated.\n");

"use strict";
const assert=require("node:assert/strict"),fs=require("node:fs"),path=require("node:path");
const root=path.join(__dirname,".."),lore=path.join(root,"lore","danmachi");
require(path.join(root,"src","official-character-roster.js"));require(path.join(root,"src","character-dossiers.js"));
const roster=globalThis.WordWaifuOfficialCharacterRoster.list(),dossiers=globalThis.WordWaifuCharacterDossiers;
const catalog=JSON.parse(fs.readFileSync(path.join(lore,"catalog.json"),"utf8")),records=new Map(catalog.records.map(r=>[r.id,r]));
const reserved=new Set(catalog.reservedIds.map(x=>typeof x==="string"?x:x.id)),ids=new Set();
for(const e of catalog.relationships){assert.ok(!ids.has(e.id),"Duplicate relation "+e.id);ids.add(e.id);assert.ok(records.has(e.from));assert.ok(records.has(e.to));}
assert.equal(roster.length,63);assert.equal(new Set(roster.map(p=>p.id)).size,roster.length);
for(const p of roster){const r=records.get(p.id);assert.ok(r,"Missing catalog identity "+p.id);assert.ok(!reserved.has(p.id));assert.ok(r.path.startsWith("characters/"));const md=fs.readFileSync(path.join(lore,r.path),"utf8");assert.equal((md.match(/^id:\s*(\S+)\s*$/m)||[])[1],p.id);assert.ok(dossiers.get(p.id),"Missing UI dossier "+p.id);assert.ok(catalog.relationships.some(e=>e.from===p.id||e.to===p.id),"No graph path "+p.id);}
for(const [id,p] of [["FAM-FREYA","familias/freya-familia.md"],["FAM-DIONYSUS","familias/dionysus-familia.md"],["FAM-HERMES","familias/hermes-familia.md"],["FAM-HEPHAISTOS","familias/hephaistos-familia.md"],["FAM-MIACH","familias/miach-familia.md"],["FAM-TAKEMIKAZUCHI","familias/takemikazuchi-familia.md"],["FAM-MODI","familias/modi-familia.md"],["FAM-MAGNI","familias/magni-familia.md"],["FAM-APOLLO","familias/apollo-familia.md"],["FAM-ISHTAR","familias/ishtar-familia.md"]])assert.equal(records.get(id)?.path,p);
assert.equal(records.get("ORG-GUILD")?.type,"institution_and_location");assert.equal(records.get("ORG-HOSTESS")?.type,"institution_and_location");
for(const id of ["CHAR-ALFRIGG-GULLIVER","CHAR-DVALINN-GULLIVER","CHAR-BERLING-GULLIVER","CHAR-GRER-GULLIVER"]){assert.ok(records.has(id));assert.ok(catalog.relationships.some(e=>e.from==="CHAR-GULLIVER-BROTHERS"&&e.to===id&&e.kind==="has_member"));}
assert.ok(catalog.relationships.some(e=>e.from==="ORG-HOSTESS"&&e.to==="LOC-HOSTESS"&&e.kind==="located_at"));assert.ok(!catalog.records.some(r=>r.status==="complete"));
process.stdout.write("PASS DanMachi character coverage: 63 identities synchronized across roster/catalog/Markdown/UI/graph.\\n");

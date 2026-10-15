#!/usr/bin/env node
"use strict";
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");
const root = path.resolve(__dirname, "..");
const atlasPath = path.join(root, "lore/eminence-in-shadow/atlas.html");
const catalogPath = path.join(root, "lore/eminence-in-shadow/visual-catalog.json");
const readmePath = path.join(root, "lore/eminence-in-shadow/README.md");
const appHtmlPath = path.join(root, "index.html");
const html = fs.readFileSync(atlasPath, "utf8");
const catalog = JSON.parse(fs.readFileSync(catalogPath, "utf8"));
const readme = fs.readFileSync(readmePath, "utf8");
const appHtml = fs.readFileSync(appHtmlPath, "utf8");
const inlineScript = html.split("<script>")[1]?.split("</script>")[0];
assert.ok(inlineScript, "atlas must contain its interaction script");
new vm.Script(inlineScript[1]);
assert.match(html, /id="shadow-map"/, "interactive Shadow map must exist");
assert.match(html, /data-tab="characters"/, "character image gallery must be navigable");
assert.match(html, /data-tab="powers"/, "powers section must be navigable");
assert.match(html, /data-tab="equipment"/, "equipment section must be navigable");
assert.match(html, /data-tab="sources"/, "source and rights section must be navigable");
assert.match(html, /map-warning/i, "map must disclose schematic/non-canonical geography");
assert.match(html, /character-search/, "character gallery must be searchable");
assert.match(html, /shadow-garden\.jp\/1st\/assets\/img\/character\/chara1_main1\.png/, "must reference exact official image URL");
assert.match(html, /derechos reservados/i, "official artwork rights must be disclosed");
assert.equal(catalog.atlas.locations.length, 8, "expected initial eight location records");
assert.equal(catalog.images.length, 12, "expected twelve sourced official character images");
for (const image of catalog.images) {
  assert.match(image.imageUrl, /^https:\/\/shadow-garden\.jp\//, image.id + " image should be hotlinked from official site");
  assert.match(image.sourceUrl, /^https:\/\/shadow-garden\.jp\/1st\/character\//, image.id + " must have a character source page");
  assert.equal(image.hosting, "external-hotlink");
  assert.equal(image.continuity, "anime-visual-reference");
}
for (const location of catalog.atlas.locations) {
  assert.ok(location.id && location.name && location.sourceUrl, "every mapped place needs ID, name and source");
  assert.ok(location.certainty, location.id + " must expose cartographic certainty");
}
assert.match(readme, /atlas\.html/, "README must link to the interactive atlas");
assert.match(readme, /visual-catalog\.json/, "README must link to the visual provenance catalog");
console.log("The Eminence in Shadow visual atlas: map, source attribution, image provenance, and uncertainty gates passed.");

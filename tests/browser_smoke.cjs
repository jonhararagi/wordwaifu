const assert = require("node:assert/strict");
const fs = require("node:fs");
const http = require("node:http");
const path = require("node:path");
const { chromium } = require("playwright");
const { validateAndNormalizeProject } = require("../src/project-schema.js");

const root = path.resolve(__dirname, "..");
const mimeTypes = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8"
};

function createServer() {
  return http.createServer((request, response) => {
    const url = new URL(request.url, "http://127.0.0.1");
    let pathname;
    try {
      pathname = decodeURIComponent(url.pathname);
    } catch {
      response.writeHead(400).end("Invalid path");
      return;
    }
    const relative = pathname === "/" ? "index.html" : pathname.replace(/^\/+/, "");
    const filePath = path.resolve(root, relative);
    if (filePath !== root && !filePath.startsWith(root + path.sep)) {
      response.writeHead(403).end("Forbidden");
      return;
    }
    fs.readFile(filePath, (error, data) => {
      if (error) {
        response.writeHead(error.code === "ENOENT" ? 404 : 500).end("File unavailable");
        return;
      }
      response.writeHead(200, {
        "Content-Type": mimeTypes[path.extname(filePath)] || "application/octet-stream",
        "Cache-Control": "no-store"
      });
      response.end(data);
    });
  });
}

async function run() {
  const server = createServer();
  let browser;
  const pageErrors = [];
  try {
    await new Promise((resolve, reject) => {
      server.once("error", reject);
      server.listen(0, "127.0.0.1", resolve);
    });
    const address = server.address();
    browser = await chromium.launch({ headless: true });
    const context = await browser.newContext();
    const page = await context.newPage();
    page.on("pageerror", (error) => pageErrors.push(error.message));
    await page.goto("http://127.0.0.1:" + address.port + "/", { waitUntil: "networkidle" });

    assert.match(await page.title(), /WordWaifu/);
    assert.equal(await page.locator("#project-name").innerText(), "Las Crónicas de Asteria");
    process.stdout.write("PASS browser load: application renders in Chromium.\n");

    await page.locator('g.map-marker[data-location="loc-velado"]').first().click();
    await page.locator("#details-panel h2").getByText("Bosque Velado").waitFor();
    process.stdout.write("PASS atlas navigation: selecting a map marker opens its location.\n");

    const asteriaMarker = page.locator('g.map-marker[data-location="loc-asteria"]').first();
    await page.locator("#layers-button").click();
    await page.locator('[data-layer="places"]').uncheck();
    assert.equal(await asteriaMarker.evaluate((node) => node.classList.contains("hidden")), true);
    await page.locator('[data-layer="places"]').check();
    assert.equal(await asteriaMarker.evaluate((node) => node.classList.contains("hidden")), false);
    await asteriaMarker.focus();
    await asteriaMarker.press("Enter");
    assert.equal(await page.locator("#details-panel h2").innerText(), "Asteria");
    await page.locator("#global-search").fill("Puerto Umbría");
    assert.equal(await page.locator("#details-panel h2").innerText(), "Puerto Umbría");
    await page.locator("#global-search").fill("Mira");
    assert.equal(await page.locator("#details-panel h2").innerText(), "Mira Solenne");
    process.stdout.write("PASS controls: layer filtering, keyboard marker activation and global search work.\n");

    await page.locator("#time-select").selectOption("chapter1");
    await page.locator('g.map-marker[data-location="loc-asteria"]').first().click();
    assert.match(await page.locator("#related-list").innerText(), /Mira Solenne/);
    await page.locator('#related-list [data-character="char-mira"]').click();
    assert.equal(await page.locator("#details-panel h2").innerText(), "Mira Solenne");
    await page.locator("#back-to-location").click();
    assert.equal(await page.locator("#details-panel h2").innerText(), "Asteria");
    await page.locator("#time-select").selectOption("chapter5");
    assert.match(await page.locator("#related-list").innerText(), /Kael Veyran/);
    await page.locator("#time-select").selectOption("chapter12");
    await page.locator('g.map-marker[data-location="loc-umbria"]').first().click();
    assert.match(await page.locator("#related-list").innerText(), /Mira Solenne/);
    process.stdout.write("PASS timeline: character presence follows chapter-specific location history.\n");

    const confirmPromise = page.waitForEvent("dialog");
    const newProjectClick = page.locator("#new-project-button").click();
    const confirmDialog = await confirmPromise;
    assert.equal(confirmDialog.type(), "confirm");
    await confirmDialog.accept();
    await newProjectClick;
    assert.equal(await page.locator("#global-search").inputValue(), "");
    assert.equal(await page.locator("#time-select").inputValue(), "now");
    await page.locator("#details-panel").getByText(/Todavía no hay lugares/).waitFor();
    process.stdout.write("PASS empty state: a new empty project renders without stale locations.\n");

    await page.locator("#add-button").click();
    await page.locator("#entity-type").selectOption("location");
    await page.locator("#entity-name").fill("Ciudad de Prueba");
    await page.locator("#entity-description").fill("Lugar creado por la prueba automatizada.");
    await page.locator('#entity-form button[type="submit"]').click();
    await page.locator('[data-view="places"]').click();
    await page.locator("#directory-view h3").filter({ hasText: "Ciudad de Prueba" }).waitFor();
    await page.locator('[data-view="atlas"]').click();
    await page.locator("g.map-marker.custom-marker").click();
    await page.locator("#details-panel h2").getByText("Ciudad de Prueba").waitFor();
    const targetLocationId = await page.evaluate(() => JSON.parse(localStorage.getItem("wordwaifu.project.v1")).locations.find((item) => item.name === "Ciudad de Prueba").id);
    process.stdout.write("PASS create/select: a new location appears in the directory and atlas.\n");

    await page.locator("#edit-location-button").click();
    assert.equal(await page.locator("#entity-name").inputValue(), "Ciudad de Prueba");
    await page.locator("#entity-name").fill("Ciudad Renombrada");
    await page.locator("#location-type").fill("Ciudad independiente");
    await page.locator("#entity-description").fill("Descripción actualizada desde la ficha del atlas.");
    await page.locator('#entity-form button[type="submit"]').click();
    assert.equal(await page.locator("#details-panel h2").innerText(), "Ciudad Renombrada");
    assert.equal(await page.locator("#details-panel .detail-type").innerText(), "Ciudad independiente");
    process.stdout.write("PASS edit: name, category and description update while preserving the ID.\n");

    const markerBeforeDrag = await page.evaluate((id) => JSON.parse(localStorage.getItem("wordwaifu.project.v1")).locations.find((item) => item.id === id).marker, targetLocationId);
    const draggableMarker = page.locator('g.map-marker[data-location="' + targetLocationId + '"]').first();
    const markerBox = await draggableMarker.boundingBox();
    assert.ok(markerBox, "The created location marker should be visible for dragging.");
    await page.mouse.move(markerBox.x + markerBox.width/2, markerBox.y + markerBox.height/2);
    await page.mouse.down();
    await page.mouse.move(markerBox.x + markerBox.width/2 + 42, markerBox.y + markerBox.height/2 + 26, { steps: 8 });
    await page.mouse.up();
    const markerAfterDrag = await page.evaluate((id) => JSON.parse(localStorage.getItem("wordwaifu.project.v1")).locations.find((item) => item.id === id).marker, targetLocationId);
    assert.ok(Math.hypot(markerAfterDrag[0]-markerBeforeDrag[0],markerAfterDrag[1]-markerBeforeDrag[1]) > 10, "Dragging should persist a new map position.");
    assert.ok(markerAfterDrag[0]>=12&&markerAfterDrag[0]<=888&&markerAfterDrag[1]>=12&&markerAfterDrag[1]<=588);
    process.stdout.write("PASS move: dragging a marker stores bounded SVG coordinates.\n");

    await page.reload({ waitUntil: "networkidle" });
    await page.locator("#project-name").getByText("Mi nuevo universo").waitFor();
    await page.locator("#details-panel h2").getByText("Ciudad Renombrada").waitFor();
    const markerAfterReload = await page.evaluate((id) => JSON.parse(localStorage.getItem("wordwaifu.project.v1")).locations.find((item) => item.id === id).marker, targetLocationId);
    assert.deepEqual(markerAfterReload, markerAfterDrag, "Moved marker coordinates should survive a reload.");
    process.stdout.write("PASS persistence: edited location and marker coordinates survive a reload.\n");

    const downloadPromise = page.waitForEvent("download");
    await page.locator("#export-button").click();
    const download = await downloadPromise;
    const exportedPath = await download.path();
    assert.ok(exportedPath, "Export should produce a local JSON download.");
    const exportedProject = JSON.parse(fs.readFileSync(exportedPath, "utf8"));
    const exportValidation = validateAndNormalizeProject(exportedProject);
    assert.equal(exportValidation.valid, true, exportValidation.errors.join("\n"));
    process.stdout.write("PASS export: downloaded project is valid JSON with intact references.\n");

    const validImportAlertPromise = page.waitForEvent("dialog");
    const validImportSelection = page.locator("#import-file").setInputFiles(exportedPath);
    const validImportAlert = await validImportAlertPromise;
    assert.equal(validImportAlert.type(), "alert");
    assert.match(validImportAlert.message(), /Proyecto importado correctamente/i);
    await validImportAlert.accept();
    await validImportSelection;
    await page.locator("#details-panel h2").getByText("Ciudad de Prueba").waitFor();
    process.stdout.write("PASS round-trip: an exported project imports back successfully.\n");

    const invalidProject = {
      schemaVersion: 1,
      project: { id: "bad-project", name: "Importación inválida" },
      locations: [{ id: "duplicate-id", name: "Lugar" }],
      characters: [{ id: "duplicate-id", name: "Personaje" }],
      events: []
    };
    const alertPromise = page.waitForEvent("dialog");
    const importFileSelection = page.locator("#import-file").setInputFiles({
      name: "invalid-wordwaifu-project.json",
      mimeType: "application/json",
      buffer: Buffer.from(JSON.stringify(invalidProject), "utf8")
    });
    const alertDialog = await alertPromise;
    assert.equal(alertDialog.type(), "alert");
    assert.match(alertDialog.message(), /no supera la validación/i);
    await alertDialog.accept();
    await importFileSelection;
    await page.locator("#project-name").getByText("Mi nuevo universo").waitFor();
    await page.locator("#details-panel h2").getByText("Ciudad Renombrada").waitFor();
    process.stdout.write("PASS safe import: malformed project is rejected without replacing active data.\n");

    const referenceFixture = JSON.parse(JSON.stringify(exportedProject));
    referenceFixture.locations.push({ id:"wf-test-child-location",name:"Distrito de Prueba",type:"Distrito",parentId:targetLocationId,
      description:"Ubicación hija creada para probar la limpieza de referencias.",tags:[],population:"Sin datos",government:"Sin datos",climate:"Sin datos",
      marker:[235,255],characters:["wf-test-resident"],events:["wf-test-event"] });
    referenceFixture.characters.push({ id:"wf-test-resident",name:"Habitante de Prueba",age:30,species:"Humana",role:"Habitante",personality:[],
      description:"Personaje vinculado al lugar que se borrará.",motivation:"",flaw:"",
      locationHistory:[{locationId:targetLocationId,from:"chapter1",to:"chapter5"},{locationId:"wf-test-child-location",from:"chapter5",to:"now"}],relationships:[],status:"proposal" });
    referenceFixture.events.push({ id:"wf-test-event",title:"Evento de Prueba",position:"chapter1",description:"Debe conservarse sin el lugar eliminado.",
      locationIds:[targetLocationId,"wf-test-child-location"],characterIds:["wf-test-resident"] });
    const fixtureImportPromise=page.waitForEvent("dialog");
    const fixtureImportSelection=page.locator("#import-file").setInputFiles({name:"wordwaifu-delete-reference-fixture.json",mimeType:"application/json",buffer:Buffer.from(JSON.stringify(referenceFixture),"utf8")});
    const fixtureImportAlert=await fixtureImportPromise;
    assert.equal(fixtureImportAlert.type(),"alert");
    assert.match(fixtureImportAlert.message(),/Proyecto importado correctamente/i);
    await fixtureImportAlert.accept();
    await fixtureImportSelection;
    await page.locator('g.map-marker[data-location="' + targetLocationId + '"]').first().click();
    await page.locator("#details-panel h2").getByText("Ciudad Renombrada").waitFor();

    const deleteDialogPromise=page.waitForEvent("dialog");
    const deleteClick=page.locator("#delete-location-button").click();
    const deleteDialog=await deleteDialogPromise;
    assert.equal(deleteDialog.type(),"confirm");
    assert.match(deleteDialog.message(),/ubicación\(es\) hija\(s\)/);
    assert.match(deleteDialog.message(),/historial de personajes/);
    assert.match(deleteDialog.message(),/acontecimiento\(s\)/);
    await deleteDialog.accept();
    await deleteClick;

    const afterDeletion=await page.evaluate(()=>JSON.parse(localStorage.getItem("wordwaifu.project.v1")));
    assert.equal(afterDeletion.locations.some((item)=>item.id===targetLocationId),false);
    const survivingChild=afterDeletion.locations.find((item)=>item.id==="wf-test-child-location");
    assert.ok(survivingChild);
    assert.equal(survivingChild.parentId,null);
    const survivingCharacter=afterDeletion.characters.find((item)=>item.id==="wf-test-resident");
    assert.ok(survivingCharacter);
    assert.equal(survivingCharacter.locationHistory.some((entry)=>entry.locationId===targetLocationId),false);
    const survivingEvent=afterDeletion.events.find((item)=>item.id==="wf-test-event");
    assert.ok(survivingEvent);
    assert.equal(survivingEvent.locationIds.includes(targetLocationId),false);
    process.stdout.write("PASS delete: confirmation, child reparenting and reference cleanup work.\n");

    await page.reload({waitUntil:"networkidle"});
    await page.locator("#details-panel h2").getByText("Distrito de Prueba").waitFor();
    const finalDownloadPromise=page.waitForEvent("download");
    await page.locator("#export-button").click();
    const finalDownload=await finalDownloadPromise, finalPath=await finalDownload.path();
    assert.ok(finalPath);
    const finalProject=JSON.parse(fs.readFileSync(finalPath,"utf8"));
    const finalValidation=validateAndNormalizeProject(finalProject);
    assert.equal(finalValidation.valid,true,finalValidation.errors.join("\n"));
    assert.equal(finalProject.locations.some((item)=>item.id==="wf-test-child-location"&&item.parentId===null),true);
    assert.equal(finalProject.characters.find((item)=>item.id==="wf-test-resident").locationHistory.length,1);
    assert.equal(finalProject.characters.find((item)=>item.id==="wf-test-resident").locationHistory[0].locationId,"wf-test-child-location");
    assert.deepEqual(finalProject.events.find((item)=>item.id==="wf-test-event").locationIds,["wf-test-child-location"]);
    const finalRoundTripAlertPromise=page.waitForEvent("dialog");
    const finalImportSelection=page.locator("#import-file").setInputFiles(finalPath);
    const finalRoundTripAlert=await finalRoundTripAlertPromise;
    assert.match(finalRoundTripAlert.message(),/Proyecto importado correctamente/i);
    await finalRoundTripAlert.accept();
    await finalImportSelection;
    await page.locator("#details-panel h2").getByText("Distrito de Prueba").waitFor();
    process.stdout.write("PASS post-delete round-trip: valid state survives reload, export and import.\n");

    assert.deepEqual(pageErrors, [], "Unexpected browser page errors: " + pageErrors.join("; "));
    process.stdout.write("PASS_REAL: Chromium browser smoke test completed without page errors.\n");
  } finally {
    if (browser) await browser.close();
    await new Promise((resolve) => server.close(resolve));
  }
}

run().catch((error) => {
  console.error("FAIL_REAL: " + (error && error.stack ? error.stack : error));
  process.exitCode = 1;
});

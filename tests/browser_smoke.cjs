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
  const consoleErrors = [];
  try {
    await new Promise((resolve, reject) => {
      server.once("error", reject);
      server.listen(0, "127.0.0.1", resolve);
    });
    const address = server.address();
    browser = await chromium.launch({ headless: true });
    const context = await browser.newContext();
    const page = await context.newPage();
    page.on("pageerror", (error) => pageErrors.push(error.stack || error.message));
    page.on("console", (message) => { if (message.type() === "error") consoleErrors.push(message.text()); });
    await page.goto("http://127.0.0.1:" + address.port + "/", { waitUntil: "networkidle" });

    assert.match(await page.title(), /WordWaifu/);
    assert.equal(await page.locator("#project-name").innerText(), "Las Crónicas de Asteria");
    process.stdout.write("PASS browser load: application renders in Chromium.\n");
    const initialPanel = await page.locator("#details-panel").innerHTML();
    if (!initialPanel.trim()) {
      throw new Error("Initial render diagnostic: " + JSON.stringify({ pageErrors, consoleErrors }));
    }

    const forestMarker = page.locator('g.map-marker[data-location="loc-velado"]').first();
    await forestMarker.click();
    const forestSelected = await page.waitForFunction(
      () => document.querySelector("#details-panel h2")?.textContent === "Bosque Velado",
      { timeout: 2500 }
    ).then(() => true).catch(() => false);
    if (!forestSelected) {
      const diagnostic = await page.evaluate(() => ({
        heading: document.querySelector("#details-panel h2")?.textContent || null,
        activeView: document.querySelector(".nav-item.active")?.dataset.view || null,
        mapVisible: !document.querySelector("#atlas-layout").classList.contains("hidden"),
        markers: Array.from(document.querySelectorAll('g.map-marker[data-location="loc-velado"]')).map((marker) => ({
          className: marker.getAttribute("class"),
          transform: marker.getAttribute("transform"),
          rect: (() => { const box = marker.getBoundingClientRect(); return { x: box.x, y: box.y, width: box.width, height: box.height }; })()
        })),
        headingHtml: document.querySelector("#details-panel").innerHTML.slice(0, 450)
      }));
      throw new Error("Marker click diagnostic: " + JSON.stringify(diagnostic));
    }
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
    assert.equal(await page.locator("#details-panel .detail-type").innerText(), "CIUDAD INDEPENDIENTE");
    process.stdout.write("PASS edit: name, category and description update while preserving the ID.\n");

    const markerBeforeDrag = await page.evaluate((id) => JSON.parse(localStorage.getItem("wordwaifu.project.v1")).locations.find((item) => item.id === id).marker, targetLocationId);
    const draggableMarker = page.locator('g.map-marker[data-location="' + targetLocationId + '"]').first();
    const dragHandle = draggableMarker.locator(".marker-drag-handle");
    const markerBox = await dragHandle.boundingBox();
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
    await page.locator("#details-panel h2").getByText("Ciudad Renombrada").waitFor();
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
      marker:[235,255],characters:["wf-test-resident","wf-test-witness"],events:["wf-test-event"] });
    referenceFixture.locations.push({ id:"wf-test-other-location",name:"Archivo de Prueba",type:"Archivo",parentId:null,
      description:"Ubicación adicional para verificar que editar un acontecimiento cambia sus referencias sin borrar otros lugares.",tags:[],population:"Sin datos",
      government:"Sin datos",climate:"Sin datos",marker:[640,340],characters:[],events:[] });
    referenceFixture.characters.push({ id:"wf-test-resident",name:"Habitante de Prueba",age:30,species:"Humana",role:"Habitante",personality:[],
      description:"Personaje vinculado al lugar que se borrará.",motivation:"",flaw:"",
      locationHistory:[{locationId:targetLocationId,from:"chapter1",to:"chapter5"},{locationId:"wf-test-child-location",from:"chapter5",to:"now"}],relationships:[],status:"proposal" });
    referenceFixture.characters.push({ id:"wf-test-witness",name:"Testigo de Prueba",age:26,species:"Humana",role:"Testigo",personality:["Atenta"],
      description:"Debe sobrevivir al borrado de otro personaje.",motivation:"",flaw:"",
      locationHistory:[{locationId:"wf-test-child-location",from:"chapter5",to:"now"}],relationships:["wf-test-resident"],status:"canon" });
    referenceFixture.events.push({ id:"wf-test-event",title:"Evento de Prueba",position:"chapter1",description:"Debe conservarse sin el lugar eliminado.",
      locationIds:[targetLocationId,"wf-test-child-location"],characterIds:["wf-test-resident","wf-test-witness"] });
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

    // Character CRUD: edit canonical fields without changing the stable ID.
    await page.locator('#related-list [data-character="wf-test-resident"]').click();
    const residentIdBefore = await page.evaluate(() => JSON.parse(localStorage.getItem("wordwaifu.project.v1")).characters.find((item) => item.id === "wf-test-resident").id);
    await page.locator("#edit-character-button").click();
    await page.locator("#entity-name").fill("Habitante Renombrado");
    await page.locator("#entity-description").fill("Ficha editada por Chromium.");
    await page.locator("#character-species").fill("Elfa");
    await page.locator("#character-age").fill("35");
    await page.locator("#character-role").fill("Archivista");
    await page.locator("#character-personality").fill("Analítica, Persistente");
    await page.locator("#character-motivation").fill("Conservar las rutas.");
    await page.locator("#character-flaw").fill("Desconfía de los mapas.");
    await page.locator("#character-status").selectOption("canon");
    await page.locator('#entity-form button[type="submit"]').click();
    await page.locator("#details-panel h2").getByText("Habitante Renombrado").waitFor();
    const editedResident = await page.evaluate(() => JSON.parse(localStorage.getItem("wordwaifu.project.v1")).characters.find((item) => item.id === "wf-test-resident"));
    assert.equal(editedResident.id, residentIdBefore, "Character editing must preserve its stable ID.");
    assert.equal(editedResident.age, 35);
    assert.equal(editedResident.species, "Elfa");
    assert.equal(editedResident.role, "Archivista");
    assert.deepEqual(editedResident.personality, ["Analítica", "Persistente"]);
    assert.equal(editedResident.status, "canon");
    process.stdout.write("PASS character edit: canonical fields update without changing the ID.\n");

    await page.reload({waitUntil:"networkidle"});
    const residentAfterReload = await page.evaluate(() => JSON.parse(localStorage.getItem("wordwaifu.project.v1")).characters.find((item) => item.id === "wf-test-resident"));
    assert.equal(residentAfterReload.name, "Habitante Renombrado");
    assert.equal(residentAfterReload.id, residentIdBefore);
    process.stdout.write("PASS character persistence: edited character survives reload.\n");

    // Character creation uses the same project schema and remains offline.
    await page.locator("#add-button").click();
    await page.locator("#entity-type").selectOption("character");
    await page.locator("#entity-name").fill("Personaje Creado por Prueba");
    await page.locator("#entity-description").fill("Ficha nueva creada desde el formulario.");
    await page.locator("#character-species").fill("Humana");
    await page.locator("#character-age").fill("21");
    await page.locator("#character-role").fill("Cronista");
    await page.locator("#character-personality").fill("Atenta, Metódica");
    await page.locator("#character-motivation").fill("Registrar lo ocurrido.");
    await page.locator("#character-flaw").fill("Se demora en decidir.");
    await page.locator("#character-status").selectOption("proposal");
    await page.locator('#entity-form button[type="submit"]').click();
    await page.locator("#directory-view h3").getByText("Personaje Creado por Prueba").waitFor();
    const createdCharacter = await page.evaluate(() => JSON.parse(localStorage.getItem("wordwaifu.project.v1")).characters.find((item) => item.name === "Personaje Creado por Prueba"));
    assert.ok(createdCharacter.id.startsWith("local-character-"));
    assert.equal(createdCharacter.age, 21);
    assert.deepEqual(createdCharacter.personality, ["Atenta", "Metódica"]);
    process.stdout.write("PASS character create: new character fields are saved to the project.\n");

    await page.locator("#add-button").click();
    await page.locator("#entity-type").selectOption("character");
    await page.locator("#entity-name").fill("Personaje de Edad Desconocida");
    await page.locator("#entity-description").fill("La edad no ha sido establecida.");
    await page.locator("#character-age").fill("");
    await page.locator('#entity-form button[type="submit"]').click();
    await page.locator("#directory-view .entity-card").filter({hasText:"Personaje de Edad Desconocida"}).getByText("Edad sin definir").waitFor();
    const unknownAgeCharacter = await page.evaluate(() => JSON.parse(localStorage.getItem("wordwaifu.project.v1")).characters.find((item) => item.name === "Personaje de Edad Desconocida"));
    assert.equal(unknownAgeCharacter.age, null);
    assert.doesNotMatch(await page.locator("#directory-view").innerText(), /null años/);
    process.stdout.write("PASS character unknown age: empty age is stored as null and rendered without leaking null into the UI.\n");

    // Deleting a character cleans incoming references but preserves other records.
    await page.locator('.nav-item[data-view="atlas"]').click();
    await page.locator('#related-list [data-character="wf-test-resident"]').click();
    const characterDeleteDialogPromise = page.waitForEvent("dialog");
    const characterDeleteClick = page.locator("#delete-character-button").click();
    const characterDeleteDialog = await characterDeleteDialogPromise;
    assert.equal(characterDeleteDialog.type(), "confirm");
    assert.match(characterDeleteDialog.message(), /relación\(es\)/);
    assert.match(characterDeleteDialog.message(), /referencia\(s\) en lugares/);
    assert.match(characterDeleteDialog.message(), /referencia\(s\) en acontecimientos/);
    await characterDeleteDialog.accept();
    await characterDeleteClick;
    const afterCharacterDelete = await page.evaluate(() => JSON.parse(localStorage.getItem("wordwaifu.project.v1")));
    assert.equal(afterCharacterDelete.characters.some((item) => item.id === "wf-test-resident"), false);
    assert.equal(afterCharacterDelete.characters.some((item) => item.id === "wf-test-witness"), true);
    assert.equal(afterCharacterDelete.characters.some((item) => item.name === "Personaje Creado por Prueba"), true);
    assert.deepEqual(afterCharacterDelete.characters.find((item) => item.id === "wf-test-witness").relationships, []);
    assert.equal(afterCharacterDelete.locations.some((item) => (item.characters || []).includes("wf-test-resident")), false);
    assert.equal(afterCharacterDelete.locations.some((item) => (item.characters || []).includes("wf-test-witness")), true);
    assert.equal(afterCharacterDelete.events.some((item) => (item.characterIds || []).includes("wf-test-resident")), false);
    assert.equal(afterCharacterDelete.events.some((item) => (item.characterIds || []).includes("wf-test-witness")), true);
    process.stdout.write("PASS character delete: relations, location links and event references are cleaned selectively.\n");

    await page.reload({waitUntil:"networkidle"});
    const deletedRoundTripDownloadPromise = page.waitForEvent("download");
    await page.locator("#export-button").click();
    const deletedRoundTripDownload = await deletedRoundTripDownloadPromise;
    const deletedRoundTripPath = await deletedRoundTripDownload.path();
    const deletedRoundTripProject = JSON.parse(fs.readFileSync(deletedRoundTripPath, "utf8"));
    const deletedRoundTripValidation = validateAndNormalizeProject(deletedRoundTripProject);
    assert.equal(deletedRoundTripValidation.valid, true, deletedRoundTripValidation.errors.join("\n"));
    assert.equal(deletedRoundTripProject.characters.some((item) => item.id === "wf-test-resident"), false);
    assert.equal(deletedRoundTripProject.characters.some((item) => item.id === "wf-test-witness"), true);
    const deletedRoundTripImportPromise = page.waitForEvent("dialog");
    const deletedRoundTripImport = page.locator("#import-file").setInputFiles(deletedRoundTripPath);
    const deletedRoundTripAlert = await deletedRoundTripImportPromise;
    assert.match(deletedRoundTripAlert.message(), /Proyecto importado correctamente/i);
    await deletedRoundTripAlert.accept();
    await deletedRoundTripImport;
    await page.locator("#details-panel h2").getByText("Distrito de Prueba").waitFor();
    process.stdout.write("PASS character export/import: the deleted reference graph remains valid after round-trip.\n");

    // Event CRUD: create, select, edit stable ID and synchronize both sides of location links.
    await page.locator('.nav-item[data-view="timeline"]').click();
    await page.locator("#add-button").click();
    assert.equal(await page.locator("#entity-type").inputValue(), "event");
    await page.locator("#entity-name").fill("Acontecimiento de Prueba");
    await page.locator("#entity-description").fill("El equipo encuentra una ruta desconocida.");
    await page.locator("#event-position").fill("chapter5");
    await page.locator("#event-locations").selectOption(["wf-test-child-location"]);
    await page.locator("#event-characters").selectOption(["wf-test-witness"]);
    await page.locator('#entity-form button[type="submit"]').click();
    await page.locator("#selected-event-details h2").getByText("Acontecimiento de Prueba").waitFor();
    const createdEvent = await page.evaluate(() => {
      const project = JSON.parse(localStorage.getItem("wordwaifu.project.v1"));
      return { event: project.events.find((item) => item.title === "Acontecimiento de Prueba"), child: project.locations.find((item) => item.id === "wf-test-child-location") };
    });
    assert.ok(createdEvent.event.id.startsWith("local-event-"));
    assert.equal(createdEvent.event.position, "chapter5");
    assert.deepEqual(createdEvent.event.locationIds, ["wf-test-child-location"]);
    assert.deepEqual(createdEvent.event.characterIds, ["wf-test-witness"]);
    assert.ok(createdEvent.child.events.includes(createdEvent.event.id));
    process.stdout.write("PASS event create: event fields and location reverse reference are saved.\n");

    const eventIdBeforeEdit = createdEvent.event.id;
    await page.locator('[data-event="' + eventIdBeforeEdit + '"]').click();
    await page.locator("#selected-event-details h2").getByText("Acontecimiento de Prueba").waitFor();
    await page.locator("#edit-event-button").click();
    await page.locator("#entity-name").fill("Acontecimiento Renombrado");
    await page.locator("#entity-description").fill("La ruta se registra en los archivos.");
    await page.locator("#event-position").fill("chapter12");
    await page.locator("#event-locations").selectOption(["wf-test-other-location"]);
    await page.locator("#event-characters").selectOption(["wf-test-witness", createdCharacter.id]);
    await page.locator('#entity-form button[type="submit"]').click();
    await page.locator("#selected-event-details h2").getByText("Acontecimiento Renombrado").waitFor();
    const editedEventGraph = await page.evaluate((id) => {
      const project = JSON.parse(localStorage.getItem("wordwaifu.project.v1"));
      return {
        event: project.events.find((item) => item.id === id),
        otherLocation: project.locations.find((item) => item.id === "wf-test-other-location"),
        child: project.locations.find((item) => item.id === "wf-test-child-location")
      };
    }, eventIdBeforeEdit);
    assert.equal(editedEventGraph.event.id, eventIdBeforeEdit, "Editing an event must preserve its ID.");
    assert.equal(editedEventGraph.event.title, "Acontecimiento Renombrado");
    assert.equal(editedEventGraph.event.position, "chapter12");
    assert.deepEqual(editedEventGraph.event.locationIds, ["wf-test-other-location"]);
    assert.deepEqual(editedEventGraph.event.characterIds, ["wf-test-witness", createdCharacter.id]);
    assert.ok(editedEventGraph.otherLocation.events.includes(eventIdBeforeEdit));
    assert.equal(editedEventGraph.child.events.includes(eventIdBeforeEdit), false, "Changing linked locations must remove the old reverse link.");
    process.stdout.write("PASS event edit/select: ID stays stable and location/participant references update selectively.\n");

    await page.reload({waitUntil:"networkidle"});
    await page.locator('.nav-item[data-view="timeline"]').click();
    await page.locator('[data-event="' + eventIdBeforeEdit + '"]').click();
    await page.locator("#selected-event-details h2").getByText("Acontecimiento Renombrado").waitFor();
    const persistedEvent = await page.evaluate((id) => JSON.parse(localStorage.getItem("wordwaifu.project.v1")).events.find((item) => item.id === id), eventIdBeforeEdit);
    assert.equal(persistedEvent.position, "chapter12");
    process.stdout.write("PASS event persistence: edited event survives a reload and remains selectable.\n");

    const deleteEventDialogPromise = page.waitForEvent("dialog");
    const deleteEventClick = page.locator("#delete-event-button").click();
    const deleteEventDialog = await deleteEventDialogPromise;
    assert.equal(deleteEventDialog.type(), "confirm");
    assert.match(deleteEventDialog.message(), /referencia\(s\) de lugar/);
    await deleteEventDialog.accept();
    await deleteEventClick;
    const afterEventDelete = await page.evaluate(() => JSON.parse(localStorage.getItem("wordwaifu.project.v1")));
    assert.equal(afterEventDelete.events.some((item) => item.id === eventIdBeforeEdit), false);
    assert.equal(afterEventDelete.locations.some((item) => (item.events || []).includes(eventIdBeforeEdit)), false);
    assert.ok(afterEventDelete.events.some((item) => item.id === "wf-test-event"), "Unrelated events must survive the delete.");
    assert.ok(afterEventDelete.locations.find((item) => item.id === "wf-test-child-location").events.includes("wf-test-event"));
    assert.equal(validateAndNormalizeProject(afterEventDelete).valid, true, "Event deletion should leave a valid project graph.");
    process.stdout.write("PASS event delete: confirmation removes only the event and its incoming location references.\n");

    await page.reload({waitUntil:"networkidle"});
    const eventExportPromise = page.waitForEvent("download");
    await page.locator("#export-button").click();
    const eventExport = await eventExportPromise;
    const eventExportPath = await eventExport.path();
    assert.ok(eventExportPath);
    const eventExportProject = JSON.parse(fs.readFileSync(eventExportPath, "utf8"));
    const eventExportValidation = validateAndNormalizeProject(eventExportProject);
    assert.equal(eventExportValidation.valid, true, eventExportValidation.errors.join("\n"));
    assert.equal(eventExportProject.events.some((item) => item.id === eventIdBeforeEdit), false);
    const eventRoundTripAlertPromise = page.waitForEvent("dialog");
    const eventRoundTripImport = page.locator("#import-file").setInputFiles(eventExportPath);
    const eventRoundTripAlert = await eventRoundTripAlertPromise;
    assert.match(eventRoundTripAlert.message(), /Proyecto importado correctamente/i);
    await eventRoundTripAlert.accept();
    await eventRoundTripImport;
    assert.equal(await page.evaluate(() => JSON.parse(localStorage.getItem("wordwaifu.project.v1")).events.some((item) => item.id === "wf-test-event")), true);
    process.stdout.write("PASS event export/import: valid references and unrelated events survive round-trip.\n");

    // Organization CRUD: use stable IDs for leaders, members and the base location.
    await page.locator('.nav-item[data-view="organizations"]').click();
    await page.locator("#add-button").click();
    assert.equal(await page.locator("#entity-type").inputValue(), "organization");
    await page.locator("#entity-name").fill("Orden del Archivo Vivo");
    await page.locator("#entity-description").fill("Custodia rutas y testimonios.");
    await page.locator("#organization-type").fill("Orden");
    await page.locator("#organization-ideology").fill("El conocimiento se comparte.");
    await page.locator("#organization-goals").fill("Preservar mapas, Formar aprendices");
    await page.locator("#organization-leaders").selectOption(["wf-test-witness"]);
    await page.locator("#organization-members").selectOption(["wf-test-witness", createdCharacter.id]);
    await page.locator("#organization-base-location").selectOption("wf-test-other-location");
    await page.locator("#organization-history").fill("Fundada tras una expedición.");
    await page.locator("#organization-status").selectOption("canon");
    await page.locator('#entity-form button[type="submit"]').click();
    await page.locator("#selected-organization-details h2").getByText("Orden del Archivo Vivo").waitFor();
    const createdOrganization = await page.evaluate(() => JSON.parse(localStorage.getItem("wordwaifu.project.v1")).organizations.find((item) => item.name === "Orden del Archivo Vivo"));
    assert.ok(createdOrganization.id.startsWith("local-organization-"));
    assert.equal(createdOrganization.organizationType, "Orden");
    assert.deepEqual(createdOrganization.goals, ["Preservar mapas", "Formar aprendices"]);
    assert.deepEqual(createdOrganization.leaderCharacterIds, ["wf-test-witness"]);
    assert.deepEqual([...createdOrganization.memberCharacterIds].sort(), [createdCharacter.id, "wf-test-witness"].sort());
    assert.equal(createdOrganization.baseLocationId, "wf-test-other-location");
    const createdOrganizationValidation = validateAndNormalizeProject(await page.evaluate(() => JSON.parse(localStorage.getItem("wordwaifu.project.v1"))));
    assert.equal(createdOrganizationValidation.valid, true, createdOrganizationValidation.errors.join("\n"));
    process.stdout.write("PASS organization create: fields reference existing people and locations by stable ID.\n");

    // Include a separate organization in this test project so deletion proves it does not touch unrelated records.
    await page.locator("#add-button").click();
    await page.locator("#entity-name").fill("Gremio Independiente");
    await page.locator("#entity-description").fill("Organización que debe sobrevivir al borrado de otra.");
    await page.locator("#organization-type").fill("Colectivo");
    await page.locator("#organization-goals").fill("Conservar sus propios archivos");
    await page.locator('#entity-form button[type="submit"]').click();
    await page.locator("#selected-organization-details h2").getByText("Gremio Independiente").waitFor();
    const unrelatedOrganization = await page.evaluate(() => JSON.parse(localStorage.getItem("wordwaifu.project.v1")).organizations.find((item) => item.name === "Gremio Independiente"));
    assert.ok(unrelatedOrganization);
    const unrelatedOrganizationId = unrelatedOrganization.id;
    process.stdout.write("PASS organization isolation fixture: unrelated organization exists before deletion.\n");

    const organizationIdBeforeEdit = createdOrganization.id;
    await page.locator('[data-organization="' + organizationIdBeforeEdit + '"]').click();
    await page.locator("#edit-organization-button").click();
    await page.locator("#entity-name").fill("Orden del Archivo Vivo Renovada");
    await page.locator("#organization-type").fill("Orden archivística");
    await page.locator("#organization-goals").fill("Conservar testimonios");
    await page.locator("#organization-members").selectOption(["wf-test-witness"]);
    await page.locator("#organization-base-location").selectOption("wf-test-child-location");
    await page.locator('#entity-form button[type="submit"]').click();
    await page.locator("#selected-organization-details h2").getByText("Orden del Archivo Vivo Renovada").waitFor();
    const editedOrganization = await page.evaluate((id) => JSON.parse(localStorage.getItem("wordwaifu.project.v1")).organizations.find((item) => item.id === id), organizationIdBeforeEdit);
    assert.equal(editedOrganization.id, organizationIdBeforeEdit, "Organization editing must preserve the ID.");
    assert.equal(editedOrganization.organizationType, "Orden archivística");
    assert.deepEqual(editedOrganization.goals, ["Conservar testimonios"]);
    assert.deepEqual(editedOrganization.memberCharacterIds, ["wf-test-witness"]);
    assert.equal(editedOrganization.baseLocationId, "wf-test-child-location");
    process.stdout.write("PASS organization edit: stable ID and existing entity references update correctly.\n");

    await page.reload({waitUntil:"networkidle"});
    await page.locator('.nav-item[data-view="organizations"]').click();
    await page.locator('[data-organization="' + organizationIdBeforeEdit + '"]').click();
    await page.locator("#selected-organization-details h2").getByText("Orden del Archivo Vivo Renovada").waitFor();
    process.stdout.write("PASS organization persistence: changes survive a browser reload.\n");

    const deleteOrganizationDialogPromise = page.waitForEvent("dialog");
    const deleteOrganizationClick = page.locator("#delete-organization-button").click();
    const deleteOrganizationDialog = await deleteOrganizationDialogPromise;
    assert.equal(deleteOrganizationDialog.type(), "confirm");
    assert.match(deleteOrganizationDialog.message(), /No se borrará ningún personaje ni lugar/);
    await deleteOrganizationDialog.accept();
    await deleteOrganizationClick;
    const afterOrganizationDelete = await page.evaluate(() => JSON.parse(localStorage.getItem("wordwaifu.project.v1")));
    assert.equal(afterOrganizationDelete.organizations.some((item) => item.id === organizationIdBeforeEdit), false);
    assert.ok(afterOrganizationDelete.organizations.some((item) => item.id === unrelatedOrganizationId), "Unrelated organizations must survive deletion.");
    assert.ok(afterOrganizationDelete.characters.some((item) => item.id === "wf-test-witness"), "Referenced characters must survive organization deletion.");
    assert.ok(afterOrganizationDelete.locations.some((item) => item.id === "wf-test-child-location"), "The base location must survive organization deletion.");
    const afterOrganizationDeleteValidation = validateAndNormalizeProject(afterOrganizationDelete);
    assert.equal(afterOrganizationDeleteValidation.valid, true, afterOrganizationDeleteValidation.errors.join("\n"));
    process.stdout.write("PASS organization delete: only the organization is deleted; linked records survive.\n");

    await page.reload({waitUntil:"networkidle"});
    const orgExportPromise = page.waitForEvent("download");
    await page.locator("#export-button").click();
    const orgExport = await orgExportPromise;
    const orgExportPath = await orgExport.path();
    const orgExportProject = JSON.parse(fs.readFileSync(orgExportPath, "utf8"));
    const orgExportValidation = validateAndNormalizeProject(orgExportProject);
    assert.equal(orgExportValidation.valid, true, orgExportValidation.errors.join("\n"));
    assert.equal(orgExportProject.organizations.some((item) => item.id === organizationIdBeforeEdit), false);
    const orgImportAlertPromise = page.waitForEvent("dialog");
    const orgImportSelection = page.locator("#import-file").setInputFiles(orgExportPath);
    const orgImportAlert = await orgImportAlertPromise;
    assert.match(orgImportAlert.message(), /Proyecto importado correctamente/i);
    await orgImportAlert.accept();
    await orgImportSelection;
    assert.equal(await page.evaluate((id) => JSON.parse(localStorage.getItem("wordwaifu.project.v1")).organizations.some((item) => item.id === id), unrelatedOrganizationId), true);
    process.stdout.write("PASS organization export/import: references remain valid after round-trip.\n");

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

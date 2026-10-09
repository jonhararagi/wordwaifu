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
    process.stdout.write("PASS create/select: a new location appears in the directory and atlas.\n");

    await page.reload({ waitUntil: "networkidle" });
    await page.locator("#project-name").getByText("Mi nuevo universo").waitFor();
    await page.locator("#details-panel h2").getByText("Ciudad de Prueba").waitFor();
    process.stdout.write("PASS persistence: the created location survives a page reload.\n");

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
    await page.locator("#details-panel h2").getByText("Ciudad de Prueba").waitFor();
    process.stdout.write("PASS safe import: malformed project is rejected without replacing active data.\n");

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

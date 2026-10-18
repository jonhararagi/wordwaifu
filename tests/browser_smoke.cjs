const assert = require("node:assert/strict");
const fs = require("node:fs");
const http = require("node:http");
const path = require("node:path");
const { chromium } = require("playwright");
const { validateAndNormalizeProject } = require("../src/project-schema.js");
require("./test_story_outline.cjs");
require("./test_story_forge.cjs");

const root = path.resolve(__dirname, "..");
const mimeTypes = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".svg": "image/svg+xml; charset=utf-8"
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
    const scriptSources = await page.evaluate(() =>
      Array.from(document.querySelectorAll("script[src]"))
        .map(script => new URL(script.src, document.baseURI).pathname)
    );
    const duplicateScriptSources = scriptSources.filter((source, index) => scriptSources.indexOf(source) !== index);
    assert.deepEqual(duplicateScriptSources, [], "Each classic script must be included only once; duplicate tags initialize modules and event handlers more than once.");
    assert.equal(scriptSources.filter(source => source === "/src/art-studio.js").length, 1,
      "Art Studio must initialize exactly once.");
    try {
      await page.waitForFunction(() => {
        const status = document.querySelector("#save-status")?.textContent || "";
        return [
          "Proyecto recuperado y guardado en IndexedDB", "Proyecto cargado desde IndexedDB",
          "Proyecto recuperado desde el respaldo local", "Guardado en IndexedDB",
          "Respaldo local disponible", "No se pudo guardar: exportá una copia"
        ].some(message => status.includes(message)) ||
          status.startsWith("Proyecto recuperado ·") || status.startsWith("Modo de recuperación");
      }, { timeout: 10000 });
    } catch (error) {
      const diagnostics = await page.evaluate(() => ({
        saveStatus: document.querySelector("#save-status")?.textContent || null,
        shellInert: document.querySelector(".app-shell")?.inert ?? null,
        appModuleLoaded: Boolean(window.WordWaifuLoreCorpus),
        repositoryLoaded: Boolean(window.WordWaifuProjectRepository)
      }));
      process.stdout.write("BOOT_DIAGNOSTICS: " + JSON.stringify({ diagnostics, pageErrors, consoleErrors }) + "\n");
      throw error;
    }

    assert.match(await page.title(), /WordWaifu/);
    assert.equal(await page.locator("#project-name").innerText(), "Las Crónicas de Asteria");
    const assistantStorageBefore = await page.evaluate(() => ({
      localStorage: Object.entries(localStorage).sort(([a], [b]) => a.localeCompare(b)),
      sessionStorage: Object.entries(sessionStorage).sort(([a], [b]) => a.localeCompare(b))
    }));
    const assistantExternalRequests = [];
    page.on("request", (request) => {
      if (!request.url().startsWith("http://127.0.0.1:")) assistantExternalRequests.push(request.url());
    });
    await page.locator("#narrative-assistant-open").click();
    assert.equal(await page.locator("#narrative-assistant-dialog").getAttribute("data-open"), "true");
    assert.equal(await page.evaluate(() => document.activeElement?.id), "na-task", "Opening the dialog should move keyboard focus inside it.");
    await page.keyboard.press("Shift+Tab");
    assert.equal(await page.evaluate(() => document.activeElement?.id), "na-close", "Shift+Tab from the first control must wrap to the last control.");
    await page.keyboard.press("Tab");
    assert.equal(await page.evaluate(() => document.activeElement?.id), "na-task", "Tab from the last control must wrap to the first control.");
    assert.equal(await page.locator("#na-copy").isDisabled(), true, "Prompt copying must be disabled before explicit consent.");
    await page.locator("#na-source").fill("Fragmento de prueba, sin datos privados.");
    await page.locator("#na-consent").check();
    assert.equal(await page.locator("#na-copy").isDisabled(), false, "Explicit consent plus a non-empty fragment should enable copying.");
    await page.locator("#na-context").fill("Contexto modificado después del consentimiento.");
    assert.equal(await page.locator("#na-consent").isChecked(), false, "Editing context must revoke consent for the previous prompt.");
    assert.equal(await page.locator("#na-copy").isDisabled(), true, "Editing context must disable sharing until consent is given again.");
    await page.locator("#na-consent").check();
    await page.locator("#na-task").selectOption("continuity");
    assert.equal(await page.locator("#na-consent").isChecked(), false, "Changing the task must revoke consent.");
    await page.locator("#na-consent").check();
    await page.locator("#na-source").fill("A different fragment.");
    assert.equal(await page.locator("#na-consent").isChecked(), false, "Editing the fragment must revoke consent.");
    assert.equal(await page.locator("#na-chatgpt").isDisabled(), true, "Provider handoff must stay disabled after an edit until re-consent.");
    await page.locator("#na-consent").check();
    await page.locator("#na-close").click();
    assert.equal(await page.locator("#na-consent").isChecked(), false, "Closing the micro-window must revoke the transient consent.");
    assert.equal(await page.evaluate(() => document.activeElement?.id), "narrative-assistant-open", "Closing the dialog must restore focus to its opener.");
    const assistantStorageAfter = await page.evaluate(() => ({
      localStorage: Object.entries(localStorage).sort(([a], [b]) => a.localeCompare(b)),
      sessionStorage: Object.entries(sessionStorage).sort(([a], [b]) => a.localeCompare(b))
    }));
    assert.deepEqual(assistantStorageAfter, assistantStorageBefore, "The assistant must not persist fragment/context/task or consent in web storage.");
    assert.deepEqual(assistantExternalRequests, [], "Editing and closing the assistant must not make external network requests.");
    process.stdout.write("PASS narrative assistant: sharing controls require explicit consent and reset on close.\\n");
    process.stdout.write("PASS browser load: application renders in Chromium.\n");
    const appPersistence = await page.evaluate(async () => {
      const repository = new window.WordWaifuProjectRepository.ProjectRepository();
      const recovery = await repository.loadActive();
      const project = recovery.project;
      const backup = repository.readBackup().project;
      const record = project ? await repository.read("projects", project.project.id) : null;
      const metadata = await repository.read("metadata", "activeProjectId");
      repository.close();
      return {
        backend: recovery.backend,
        projectName: project?.project.name,
        backupName: backup?.project.name,
        recordName: record?.data?.project?.name,
        activeProjectId: metadata?.value
      };
    });
    assert.equal(appPersistence.projectName, "Las Crónicas de Asteria");
    assert.equal(appPersistence.recordName, appPersistence.projectName, "The app boot must persist the initial project to IndexedDB.");
    assert.equal(appPersistence.activeProjectId, "project-asteria");
    assert.equal(appPersistence.backupName, appPersistence.projectName, "The local backup must match the loaded project.");
    process.stdout.write("PASS app persistence boot: IndexedDB record, active pointer and local backup agree.\n");
    // Mythic catalog: monster forms expose the three mandatory design pillars and are searchable by form details.
    await page.locator('.nav-item[data-view="mythic-catalog"]').click();
    await page.locator("#mythic-search").fill("Hidra de Lerna");
    await page.locator('#mythic-catalog-content [data-open-entity="GRC-HYDRA-LERNAEAN"]').click();
    const hydraDossier = await page.locator("#mythic-catalog-content").innerText();
    assert.match(hydraDossier, /Manifestaciones heroicas/);
    assert.match(hydraDossier, /Arma característica \/ arma natural/);
    assert.match(hydraDossier, /Vestimenta \/ símbolo del mito/);
    assert.match(hydraDossier, /Ataque que resume el mito/);
    assert.match(hydraDossier, /Hidra · Larva/);
    assert.match(hydraDossier, /Hidra · Épica/);
    assert.match(hydraDossier, /Hidra · Dark/);
    process.stdout.write("PASS mythic catalog: Hydra dossier renders four forms and the three weapon/outfit/myth-attack pillars.\\n");
    await page.locator("#mythic-draft-title").fill("Prueba de manifestación editable");
    await page.locator("#mythic-draft-manifestation-name").fill("Hidra · Prueba");
    await page.locator("#mythic-draft-manifestation-stage").fill("Épica");
    await page.locator("#mythic-draft-weapon").fill("Cabezas regenerativas");
    await page.locator("#mythic-draft-outfit").fill("Escamas de Lerna");
    await page.locator("#mythic-draft-totality-attack").fill("La regeneración obliga a resolver la raíz del mal");
    await page.locator("#mythic-save-draft").click();
    await page.waitForFunction(() => document.querySelector("#mythic-generator-status")?.textContent.includes("Propuesta guardada en el proyecto"), { timeout: 5000 });
    const savedManifestation = await page.locator("#mythic-saved-proposals").innerText();
    assert.match(savedManifestation, /Cabezas regenerativas/);
    assert.match(savedManifestation, /Escamas de Lerna/);
    assert.match(savedManifestation, /La regeneración obliga a resolver la raíz del mal/);
    process.stdout.write("PASS mythic editor: weapon, mythic outfit and totality attack are independently editable and saved in the project.\\n");
    // Story Foundry: create, edit, persist, import the repository's complete Markdown novel, and verify chapter text survives.
    await page.locator('.nav-item[data-view="stories"]').click();
    await page.locator("#story-create-button").click();
    await page.locator("#story-meta-form").waitFor();
    await page.locator("#story-meta-form [name='storyName']").fill("Historia de prueba");
    await page.locator("#story-meta-form [name='storyDescription']").fill("Sinopsis de prueba para comprobar el guardado.");
    await page.locator("#story-meta-form [name='storyPremise']").fill("Una premisa editable.");
    await page.locator("#story-meta-form [name='storyConflict']").fill("Un conflicto verificable.");
    await page.locator("#story-meta-form [name='storyArcs']").fill("Protagonista: miedo → decisión → cambio");
    await page.locator("#story-meta-form [name='storyWorldType']").selectOption("active-apocalypse-military-sf");
    await page.locator("#story-meta-form [name='storyWorldRules']").fill("La humanidad vive tras defensas; las salidas consumen recursos escasos.");
    await page.locator("#story-meta-form [name='storyWorldDynamics']").fill("Cada derrota reduce el territorio seguro y aumenta la presión sobre civiles y soldados.");
    await page.locator("#story-meta-form [name='storyRevealType']").selectOption("card-contract-game");
    await page.locator("#story-meta-form [name='storyRevealSecret']").fill("Las dos cartas centrales son entidades mitológicas creadas por la misma autora.");
    await page.locator("#story-meta-form [name='storyRevealClues']").fill("Las cartas comparten un símbolo antiguo y reaccionan antes de que se anuncie cada duelo.");
    await page.locator("#story-meta-form [name='storyRevealTiming']").fill("Final del segundo arco, tras descubrirse el archivo original.");
    await page.locator("#story-meta-form [name='storyRevealConsequences']").fill("Las reglas del juego cambian y los rivales deben decidir si cooperan.");
    await page.locator("#story-meta-form [name='storyPantheon']").fill("Diosa A: quiere recuperar su libertad, discute con el protagonista y protege a una amiga por una deuda antigua.");
    await page.locator("#story-meta-form [name='storyEnsemble']").fill("Piloto: teme fallar | rivalidad con el equipo | salva a un compañero | aprende a confiar | capítulos 2 y 5.");
    await page.locator("#story-meta-form [name='storyPowerCatalog']").fill("Nombre: Geas de mandato\nCategoría: mental / contrato\nPotencia: 4/5 · Técnica: alta\nActivación: contacto visual directo y orden verbal\nPrecio: erosiona la identidad\nLímites: una orden por objetivo\nEvolución: I control breve → II compulsión → III ya no puede desactivarse\nConsecuencias: el poder altera las relaciones.");
    await page.locator("#story-meta-form button[type='submit']").click();
    await page.waitForFunction(() => document.querySelector("#story-editor-status")?.textContent.includes("Historia guardada en el proyecto local."), { timeout: 10000 });
    assert.equal(await page.locator("#story-meta-form [name='storyWorldType']").inputValue(), "active-apocalypse-military-sf");
    assert.equal(await page.locator("#story-meta-form [name='storyWorldRules']").inputValue(), "La humanidad vive tras defensas; las salidas consumen recursos escasos.");
    assert.equal(await page.locator("#story-meta-form [name='storyWorldDynamics']").inputValue(), "Cada derrota reduce el territorio seguro y aumenta la presión sobre civiles y soldados.");
    assert.equal(await page.locator("#story-meta-form [name='storyRevealType']").inputValue(), "card-contract-game");
    assert.equal(await page.locator("#story-meta-form [name='storyRevealSecret']").inputValue(), "Las dos cartas centrales son entidades mitológicas creadas por la misma autora.");
    assert.equal(await page.locator("#story-meta-form [name='storyRevealClues']").inputValue(), "Las cartas comparten un símbolo antiguo y reaccionan antes de que se anuncie cada duelo.");
    assert.equal(await page.locator("#story-meta-form [name='storyRevealTiming']").inputValue(), "Final del segundo arco, tras descubrirse el archivo original.");
    assert.equal(await page.locator("#story-meta-form [name='storyRevealConsequences']").inputValue(), "Las reglas del juego cambian y los rivales deben decidir si cooperan.");
    assert.equal(await page.locator("#story-meta-form [name='storyPantheon']").inputValue(), "Diosa A: quiere recuperar su libertad, discute con el protagonista y protege a una amiga por una deuda antigua.");
    assert.equal(await page.locator("#story-meta-form [name='storyEnsemble']").inputValue(), "Piloto: teme fallar | rivalidad con el equipo | salva a un compañero | aprende a confiar | capítulos 2 y 5.");
    assert.ok((await page.locator("#story-meta-form [name='storyPowerCatalog']").inputValue()).includes("III ya no puede desactivarse"), "power evolution and irreversible stage must persist");
    // Power idea generator appends varied proposals without overwriting the user's hand-written Geass.
    await page.locator("#story-power-generate-button").click();
    await page.waitForFunction(() => document.querySelector("#story-power-generator-status")?.textContent.includes("Idea añadida:"), { timeout: 10000 });
    const firstGeneratedCatalog = await page.locator("#story-meta-form [name='storyPowerCatalog']").inputValue();
    await page.locator("#story-power-generate-button").click();
    await page.waitForFunction((previous) => {
      const current = document.querySelector("#story-meta-form [name='storyPowerCatalog']")?.value || "";
      return current.length > previous.length && (document.querySelector("#story-power-generator-status")?.textContent || "").includes("Idea añadida:");
    }, firstGeneratedCatalog, { timeout: 10000 });
    const generatedCatalog = await page.locator("#story-meta-form [name='storyPowerCatalog']").inputValue();
    const generatedNames = generatedCatalog.split("\n").filter(line => line.startsWith("Nombre: ")).map(line => line.slice("Nombre: ".length));
    assert.ok(generatedCatalog.includes("Geas de mandato"), "generator must preserve the user's existing power");
    assert.ok(generatedNames.length >= 3, "both generated proposals should be appended alongside the user's existing power");
    assert.equal(new Set(generatedNames).size, generatedNames.length, "generator must not duplicate names already in the catalog or earlier proposals");
    assert.ok(generatedCatalog.includes("Evolución:") && generatedCatalog.includes("Consecuencias:"), "generated ideas must include progression and narrative consequences");
    process.stdout.write("PASS power generator: appends varied powers, preserves manual entries, and includes evolution and consequences.\\n");
    // Synonym/antonym helper finds Spanish and English entries and replaces selected manuscript text without losing the draft.
    const premiseField = page.locator("#story-meta-form [name='storyPremise']");
    await premiseField.fill("El bosque era oscuro.");
    await premiseField.evaluate((node) => node.setSelectionRange(10, 13));
    await page.locator("#story-word-query").fill("era");
    await page.locator("#story-word-search-button").click();
    await page.getByRole("button", { name: "resultaba", exact: true }).click();
    assert.equal(await premiseField.inputValue(), "El bosque resultaba oscuro.", "clicking a synonym must replace the selected word in the active text field");
    await page.locator("#story-word-query").fill("grow");
    await page.locator("#story-word-search-button").click();
    assert.ok(await page.locator("#story-word-results").getByRole("button", { name: "flourish", exact: true }).count(), "word helper must support English input with Spanish alternatives");
    assert.ok(await page.locator("#story-word-results").getByRole("button", { name: "wither", exact: true }).count(), "word helper must display antonyms/contrasts");
    process.stdout.write("PASS word alternatives: searches synonyms/antonyms and replaces selected text.\\n");
    await page.locator("#story-add-chapter-button").click();
    await page.waitForFunction(() => document.querySelectorAll(".story-chapter-form").length === 1, { timeout: 5000 });
    assert.equal(await page.locator(".story-chapter-form").count(), 1, "The editor must add a chapter to a story.");
    await page.locator(".story-chapter-form [name='chapterTitle']").fill("Capítulo de prueba");
    await page.locator(".story-chapter-form [name='chapterContent']").fill("Texto de capítulo que debe persistir íntegro.");
    await page.locator(".story-chapter-form button[type='submit']").click();
    await page.waitForFunction(() => document.querySelectorAll(".story-chapter-form").length === 1);
    assert.equal(await page.locator(".story-chapter-form [name='chapterContent']").inputValue(), "Texto de capítulo que debe persistir íntegro.");
    page.once("dialog", dialog => dialog.accept());
    await page.locator("#story-import-file").setInputFiles({
      name: "las-campanas-de-asteria.md",
      mimeType: "text/markdown",
      buffer: fs.readFileSync(path.join(root, "stories", "original", "las-campanas-de-asteria.md"))
    });
    await page.waitForFunction(() => document.querySelectorAll(".story-chapter-form").length === 4, { timeout: 5000 });
    assert.equal(await page.locator("#story-meta-form [name='storyName']").inputValue(), "Las campanas de Asteria");
    assert.ok((await page.locator(".story-chapter-form [name='chapterContent']").first().inputValue()).length > 500,
      "Markdown import must preserve the full chapter body, not just its first paragraph.");
    assert.ok((await page.locator("#story-meta-form [name='storyArcs']").inputValue()).split("\n").length >= 4,
      "Markdown import must preserve the protagonist arcs, not stop at the first character. Actual: " + JSON.stringify(await page.locator("#story-meta-form [name='storyArcs']").inputValue()));
    assert.ok((await page.locator(".story-chapter-form [name='chapterTitle']").nth(3).inputValue()).includes("Un lugar en el mapa"));
    page.once("dialog", dialog => dialog.accept());
    await page.locator("#story-import-file").setInputFiles({ name: "twist-roundtrip.md", mimeType: "text/markdown", buffer: Buffer.from("# Prueba de revelación\n\n## Sinopsis\n\nUna partida altera el mundo.\n\n## Conflicto central\n\nDescubrir el origen del juego.\n\n## Cantidad de capítulos\n\n12\n\n## Tipo de final\n\nopen\n\n## Personajes centrales y objetivos\n\nMara protege el barrio y aprende a delegar.\n\n## Personalidades y voces del elenco\n\nMara usa humor defensivo; Ivo habla con precisión.\n\n## Antagonista o fuerza opositora\n\nLa directora controla la energía.\n\n## Romance y vínculos afectivos\n\nMara e Ivo construyen confianza lentamente.\n\n## Traumas, heridas y recuperación\n\nMara aprende a pedir apoyo tras una pérdida.\n\n## Tipo de mundo\n\nurban-supernatural\n\n## Reglas del mundo\n\nCada carta cobra un precio.\n\n## Dinámica del mundo\n\nLas derrotas alteran la ciudad.\n\n## Motor de revelación\n\ncard-contract-game\n\n## Secreto central\n\nLas cartas son entidades mitológicas.\n\n## Pistas y falsas interpretaciones\n\nComparten el mismo sello.\n\n## Momento de revelación\n\nFinal del segundo arco.\n\n## Consecuencias del giro\n\nLos antiguos rivales cooperan.\n\n## Panteón y papel de las diosas\n\nLa diosa quiere recuperar su libertad y protege a una amiga por una deuda antigua.\n\n## Reparto coral y arcos individuales\n\nPiloto: miedo al fracaso | rivalidad con el equipo | aprende a confiar.\n\n## Catálogo de poderes y evolución\n\nNombre: Geas de mandato\nCategoría: mental / contrato\nPotencia: 4/5\nActivación: contacto visual directo\nPrecio: erosiona la identidad\nEvolución: I control breve → III ya no puede desactivarse\n\n## Capítulo 1 — El primer duelo\n\nLa carta pronunció un nombre olvidado.", "utf8") });
    await page.waitForFunction(() => document.querySelector("#story-meta-form [name='storyName']")?.value === "Prueba de revelación", { timeout: 5000 });
    assert.equal(await page.locator("#story-meta-form [name='storyWorldType']").inputValue(), "urban-supernatural");
    assert.equal(await page.locator("#story-meta-form [name='storyWorldRules']").inputValue(), "Cada carta cobra un precio.");
    assert.equal(await page.locator("#story-meta-form [name='storyChapterCount']").inputValue(), "12", "Markdown import must preserve planned chapter count");
    assert.equal(await page.locator("#story-meta-form [name='storyEndingType']").inputValue(), "open", "Markdown import must preserve ending mode");
    assert.equal(await page.locator("#story-meta-form [name='storyCastPlan']").inputValue(), "Mara protege el barrio y aprende a delegar.");
    assert.equal(await page.locator("#story-meta-form [name='storyPersonalityPlan']").inputValue(), "Mara usa humor defensivo; Ivo habla con precisión.");
    assert.equal(await page.locator("#story-meta-form [name='storyAntagonistPlan']").inputValue(), "La directora controla la energía.");
    assert.equal(await page.locator("#story-meta-form [name='storyRomancePlan']").inputValue(), "Mara e Ivo construyen confianza lentamente.");
    assert.equal(await page.locator("#story-meta-form [name='storyTraumaPlan']").inputValue(), "Mara aprende a pedir apoyo tras una pérdida.");
    assert.equal(await page.locator("#story-meta-form [name='storyRevealType']").inputValue(), "card-contract-game");
    assert.equal(await page.locator("#story-meta-form [name='storyRevealSecret']").inputValue(), "Las cartas son entidades mitológicas.");
    assert.equal(await page.locator("#story-meta-form [name='storyRevealClues']").inputValue(), "Comparten el mismo sello.");
    assert.equal(await page.locator("#story-meta-form [name='storyRevealTiming']").inputValue(), "Final del segundo arco.");
    assert.equal(await page.locator("#story-meta-form [name='storyRevealConsequences']").inputValue(), "Los antiguos rivales cooperan.");
    assert.ok((await page.locator("#story-meta-form [name='storyPowerCatalog']").inputValue()).includes("III ya no puede desactivarse"), "Markdown import must preserve power evolution rules");
    assert.equal(await page.locator("#story-meta-form [name='storyPantheon']").inputValue(), "La diosa quiere recuperar su libertad y protege a una amiga por una deuda antigua.");
    assert.equal(await page.locator("#story-meta-form [name='storyEnsemble']").inputValue(), "Piloto: miedo al fracaso | rivalidad con el equipo | aprende a confiar.");
    process.stdout.write("PASS reveal framework: Markdown import preserves world rules, clues, reveal timing and consequences.\\n");
    // Full-story planner: requested chapter count, ending contract, cast/antagonist fields and six-phase index persist.
    await page.locator("#story-meta-form [name='storyChapterCount']").fill("12");
    await page.locator("#story-meta-form [name='storyEndingType']").selectOption("open");
    await page.locator("#story-meta-form [name='storyCastPlan']").fill("Mara quiere salvar el barrio; Ivo, coprotagonista, busca exponer a la corporación.");
    await page.locator("#story-meta-form [name='storyPersonalityPlan']").fill("Mara usa humor defensivo y evita pedir ayuda; Ivo habla con precisión y desconfía de las instituciones.");
    await page.locator("#story-meta-form [name='storyAntagonistPlan']").fill("La directora quiere mantener el orden a cualquier precio y controla el suministro de energía.");
    await page.locator("#story-meta-form [name='storyRomancePlan']").fill("Mara e Ivo aprenden a confiar pese a sus métodos opuestos.");
    await page.locator("#story-meta-form [name='storyTraumaPlan']").fill("Mara evita pedir ayuda tras una pérdida; el arco debe mostrar apoyo y recaídas.");
    page.once("dialog", dialog => dialog.accept());
    await page.locator("#story-generate-outline-button").click();
    await page.waitForFunction(() => document.querySelectorAll(".story-chapter-form").length === 12, { timeout: 10000 });
    assert.equal(await page.locator("#story-meta-form [name='storyChapterCount']").inputValue(), "12");
    assert.equal(await page.locator("#story-meta-form [name='storyEndingType']").inputValue(), "open");
    assert.equal(await page.locator("#story-meta-form [name='storyCastPlan']").inputValue(), "Mara quiere salvar el barrio; Ivo, coprotagonista, busca exponer a la corporación.");
    assert.equal(await page.locator("#story-meta-form [name='storyPersonalityPlan']").inputValue(), "Mara usa humor defensivo y evita pedir ayuda; Ivo habla con precisión y desconfía de las instituciones.");
    assert.equal(await page.locator("#story-meta-form [name='storyAntagonistPlan']").inputValue(), "La directora quiere mantener el orden a cualquier precio y controla el suministro de energía.");
    assert.equal(await page.locator("#story-meta-form [name='storyRomancePlan']").inputValue(), "Mara e Ivo aprenden a confiar pese a sus métodos opuestos.");
    assert.equal(await page.locator("#story-meta-form [name='storyTraumaPlan']").inputValue(), "Mara evita pedir ayuda tras una pérdida; el arco debe mostrar apoyo y recaídas.");
    assert.equal(await page.locator("#story-meta-form [name='storyWorldType']").inputValue(), "urban-supernatural");
    assert.equal(await page.locator("#story-meta-form [name='storyWorldRules']").inputValue(), "Cada carta cobra un precio.");
    assert.equal(await page.locator("#story-meta-form [name='storyWorldDynamics']").inputValue(), "Las derrotas alteran la ciudad.");
    assert.equal(await page.locator("#story-meta-form [name='storyRevealType']").inputValue(), "card-contract-game");
    assert.equal(await page.locator("#story-meta-form [name='storyRevealSecret']").inputValue(), "Las cartas son entidades mitológicas.");
    assert.equal(await page.locator("#story-meta-form [name='storyRevealClues']").inputValue(), "Comparten el mismo sello.");
    assert.equal(await page.locator("#story-meta-form [name='storyRevealTiming']").inputValue(), "Final del segundo arco.");
    assert.equal(await page.locator("#story-meta-form [name='storyRevealConsequences']").inputValue(), "Los antiguos rivales cooperan.");
    assert.ok((await page.locator("#story-meta-form [name='storyPowerCatalog']").inputValue()).includes("III ya no puede desactivarse"));
    assert.equal(await page.locator("#story-meta-form [name='storyPantheon']").inputValue(), "La diosa quiere recuperar su libertad y protege a una amiga por una deuda antigua.");
    assert.equal(await page.locator("#story-meta-form [name='storyEnsemble']").inputValue(), "Piloto: miedo al fracaso | rivalidad con el equipo | aprende a confiar.");
    assert.ok((await page.locator(".story-chapter-form [name='chapterSummary']").first().inputValue()).includes("presentar el mundo"), "opening chapters should introduce the world and premise");
    const declineTitle = await page.locator(".story-chapter-form [name='chapterTitle']").nth(7).inputValue();
    const declineSummary = (await page.locator(".story-chapter-form [name='chapterSummary']").nth(7).inputValue()).toLocaleLowerCase("es");
    assert.ok(declineTitle.toLocaleLowerCase("es").includes("falsa seguridad") || declineSummary.includes("falsa seguridad") || declineSummary.includes("victoria") || declineSummary.includes("seguridad recién ganada"),
      "middle-late chapters should include the false-security/decline phase; title=" + declineTitle + "; summary=" + declineSummary.slice(0, 450));
    assert.ok((await page.locator(".story-chapter-form [name='chapterSummary']").last().inputValue()).includes("dejar una pregunta central"), "open ending should deliberately leave a question while closing the immediate arc");
    await page.locator("#story-audit-outline-button").click();
    assert.ok((await page.locator("#story-outline-status").textContent()).includes("Auditoría"), "outline audit should report its result");
    process.stdout.write("PASS story outline planner: chapter count, six-phase structure, cast, antagonist, romance, trauma, ending type and audit.\\n");
    process.stdout.write("PASS story editor: metadata, chapters, persistence and full Markdown import.\\n");
    // Normal global search discovers an archive character outside the demo project and displays its local portrait.
    await page.locator('.nav-item[data-view="atlas"]').click();
    await page.locator("#global-search").fill("Ryu");
    await page.keyboard.press("Enter");
    try {
      await page.waitForFunction(() =>
        document.querySelector("#view-title")?.textContent === "Enciclopedia de personajes" &&
        document.querySelector("#character-archive-query")?.value === "Ryu" &&
        document.querySelectorAll('#character-archive-results [data-archive-open="CHAR-RYUU-LION"]').length === 1,
        null,
        { timeout: 12000 }
      );
    } catch (error) {
      const diagnostic = await page.evaluate(() => ({
        viewTitle: document.querySelector("#view-title")?.textContent || null,
        globalQuery: document.querySelector("#global-search")?.value || null,
        archiveQuery: document.querySelector("#character-archive-query")?.value || null,
        directoryStatus: document.querySelector("#archive-directory-status")?.textContent || null,
        visibleCards: document.querySelectorAll("#character-archive-results [data-archive-open]").length,
        pageErrors: window.__wordwaifuTestPageErrors || []
      }));
      process.stdout.write("GLOBAL_SEARCH_DIAGNOSTICS: " + JSON.stringify(diagnostic) + "\\n");
      throw error;
    }
    await page.waitForFunction(() => {
      const img = document.querySelector("#character-archive-results .archive-portrait-art");
      return !!img && img.complete && img.naturalWidth > 0;
    }, null, { timeout: 5000 });
    const archiveThemeBg = await page.locator("body").evaluate(el => getComputedStyle(el).backgroundColor);
    assert.equal(archiveThemeBg, "rgb(33, 30, 26)", "The warm night palette must be active.");
    // Character archive: compact search, profile navigation, evidence and temporal separation.
    await page.locator('.nav-item[data-view="lore"]').click();
    // In-app dossier navigation: a family/member/source route must not leave the encyclopedia.
    await page.waitForFunction(() => document.querySelector("#danmachi-entity-count")?.textContent.includes("registros"), null, { timeout: 10000 });
    await page.locator("#danmachi-entity-query").fill("DM-FAM-ASTREA");
    await page.waitForFunction(() => !!document.querySelector('#danmachi-entity-results [data-dossier-open="DM-FAM-ASTREA"]'), null, { timeout: 5000 });
    await page.locator('#danmachi-entity-results [data-dossier-open="DM-FAM-ASTREA"]').click();
    await page.waitForFunction(() => document.querySelector("#danmachi-dossier-dialog")?.open === true && document.querySelector("#danmachi-dossier-body")?.textContent.includes("Deidad principal"), null, { timeout: 10000 });
    assert.ok((await page.locator("#danmachi-dossier-title").innerText()).includes("Familia Astrea"), "Astrea Familia opens as an in-app dossier.");
    assert.ok((await page.locator("#danmachi-dossier-body").innerText()).includes("Astrea"), "The family dossier exposes its named deity.");
    await page.locator('#danmachi-dossier-related [data-dossier-open="CHAR-RYUU-LION"]').click();
    await page.waitForFunction(() => document.querySelector("#danmachi-dossier-title")?.textContent.includes("Ryu Lion"), null, { timeout: 10000 });
    await page.locator("#danmachi-dossier-back").click();
    await page.waitForFunction(() => document.querySelector("#danmachi-dossier-title")?.textContent.includes("Familia Astrea"), null, { timeout: 10000 });
    await page.locator("#danmachi-dossier-forward").click();
    await page.waitForFunction(() => document.querySelector("#danmachi-dossier-title")?.textContent.includes("Ryu Lion"), null, { timeout: 10000 });
    assert.equal(await page.locator("#danmachi-dossier-open-character").isVisible(), true, "The dossier can open the richer continuity-aware character profile.");
    await page.locator("#danmachi-dossier-open-character").click();
    await page.waitForFunction(() => document.querySelector("#archive-profile-name")?.textContent === "Ryu Lion", null, { timeout: 10000 });
    await page.locator("#archive-return-dossier").click();
    await page.waitForFunction(() => document.querySelector("#danmachi-dossier-dialog")?.open === true && document.querySelector("#danmachi-dossier-title")?.textContent.includes("Ryu Lion"), null, { timeout: 10000 });
    await page.locator("#danmachi-dossier-sources").click();
    await page.waitForFunction(() => document.querySelector("#danmachi-dossier-body")?.textContent.includes("Registro maestro de fuentes"), null, { timeout: 10000 });
    await page.locator("#danmachi-dossier-home").click();
    await page.waitForFunction(() => document.querySelector("#danmachi-dossier-body")?.textContent.includes("Índice maestro"), null, { timeout: 10000 });
    await page.locator("#danmachi-dossier-close").click();
    assert.equal(await page.locator("#danmachi-dossier-dialog").evaluate(dialog => dialog.open), false, "Closing a dossier returns to the same encyclopedia view.");

    await page.waitForFunction(() => document.querySelector("#archive-directory-status")?.textContent.includes("ficha(s) disponibles"), { timeout: 10000 });
    assert.equal(await page.locator("#archive-quick-filters [data-archive-scope]").count(), 3);
    await page.locator('#archive-quick-filters [data-archive-scope="CONT-AR"]').click();
    assert.equal(await page.locator("#archive-continuity").inputValue(), "CONT-AR", "Quick filter should apply Astrea Record without opening the select.");
    assert.equal(await page.locator('#archive-quick-filters [data-archive-scope="CONT-AR"]').getAttribute("aria-pressed"), "true");
    await page.locator("#archive-clear-filters").click();
    assert.equal(await page.locator("#character-archive-query").inputValue(), "");
    assert.equal(await page.locator("#archive-continuity").inputValue(), "ALL");
    assert.equal(await page.locator("#archive-spoiler").inputValue(), "all");
    assert.equal(await page.locator('#archive-quick-filters [data-archive-scope="ALL"]').getAttribute("aria-pressed"), "true");
    await page.waitForFunction(() => document.querySelectorAll("#character-archive-results [data-archive-open]").length >= 12, { timeout: 5000 });
    await page.locator("#character-archive-query").fill("");
    await page.waitForFunction(() => document.querySelectorAll("#character-archive-results [data-archive-open]").length >= 12, { timeout: 5000 });
    await page.locator("#character-archive-query").fill("Ryu");
    await page.waitForFunction(() => document.querySelectorAll("#character-archive-results [data-archive-open]").length === 1, { timeout: 5000 });
    assert.equal(await page.locator("#character-archive-results [data-archive-open]").getAttribute("data-archive-open"), "CHAR-RYUU-LION");
    await page.locator('#character-archive-results [data-archive-open="CHAR-RYUU-LION"]').click();
    assert.equal(await page.locator("#archive-profile-name").innerText(), "Ryu Lion");
    assert.equal(await page.locator("#archive-profile-continuity").inputValue(), "CONT-AR");
    assert.equal(await page.locator("#archive-profile-tabs [role=tab]").count(), 6);
    const ryuHistoricalPortrait = await page.locator("#archive-profile-portrait .archive-portrait-art").getAttribute("src");
    assert.ok(ryuHistoricalPortrait.includes("danmachi4/character/images/chara_tachi_15.png"),
      "Historical Ryu should use the official character reference from the Astrea Record adaptation era.");
    await page.waitForFunction(() => {
      const img = document.querySelector("#archive-profile-portrait .archive-portrait-art");
      return !!img && img.complete && img.naturalWidth > 0;
    }, null, { timeout: 5000 });
    assert.ok((await page.locator("#archive-profile-portrait .archive-portrait-caption").innerText()).includes("NO ESPECÍFICA DE ÉPOCA"),
      "Historical reference art must be clearly labeled as not era-specific.");
    await page.locator("#archive-tab-summary").click();
    assert.equal(await page.locator("#archive-profile-panel .archive-official-reference").count(), 0,
      "DanMachi V character data must not leak into the historical Astrea Record dossier.");
    assert.equal(await page.locator("#archive-profile-panel .archive-continuity-dossier").count(), 1,
      "The selected Astrea Record profile should expose its continuity-scoped research dossier.");
    assert.ok((await page.locator("#archive-profile-panel .archive-continuity-dossier").innerText()).includes("Fuente secundaria de consulta"),
      "A community research dossier must be labeled secondary and must not be presented as verified primary canon.");
    // Expanded reading must open a modal with a Spanish community reference and preserve continuity context.
    await page.locator("#archive-profile-panel [data-archive-more-info]").click();
    await page.waitForFunction(() => document.querySelector("#archive-more-info-dialog")?.open === true, { timeout: 3000 });
    assert.ok((await page.locator("#archive-more-info-title").innerText()).includes("Ryu Lion"));
    assert.ok((await page.locator("#archive-more-info-content").innerText()).includes("Referencias para seguir leyendo"));
    assert.ok(await page.locator("#archive-more-info-content a[href*='danmachi.fandom.com/es/wiki/Ryuu_Lion']").count() > 0);
    const expandedRyuText = await page.locator("#archive-more-info-content").innerText();
    assert.ok(expandedRyuText.includes("Estado temporal A"), "More Info must recover the existing historical Ryu dossier.");
    assert.ok(expandedRyuText.includes("Preguntas abiertas"), "More Info must preserve open research questions from the existing dossier.");
    assert.ok(!expandedRyuText.includes('Estado temporal B'), "The historical summary must not mix in Ryu's later anime state.");
    await page.locator("#archive-more-info-close").click();
    // The visible rights note correctly says that attribution is not a license.
    await page.locator("#content-rights-open").click();
    assert.equal(await page.locator("#content-rights-dialog").evaluate(el => el.open), true);
    assert.ok((await page.locator("#content-rights-dialog").innerText()).includes("ni concede una licencia"));
    await page.locator("#content-rights-close").click();
    await page.locator("#archive-tab-personality").click();
    const personalityText = await page.locator("#archive-profile-panel").innerText();
    assert.ok(personalityText.toLocaleLowerCase("es").includes("justicia"), "The personality tab must render evidence-backed motivation. Panel text: " + personalityText);
    assert.ok((await page.locator("#archive-profile-panel").innerText()).includes("Sin información suficiente"));
    await page.locator("#archive-tab-moments").click();
    const historicalMomentCount = await page.locator("#archive-profile-panel [data-moment-id]").count();
    assert.ok(historicalMomentCount >= 3);
    assert.equal(await page.locator("#archive-profile-panel .archive-moment-art").count(), 0,
      "Historical moments must not present generic placeholder illustrations as scene art.");
    assert.equal(await page.locator("#archive-profile-panel .archive-moment-visual-reference").count(), historicalMomentCount,
      "Every historical moment should show one sourced character-reference strip, even as the dossier grows.");
    assert.ok((await page.locator("#archive-profile-panel").innerText()).includes("NO ES UNA IMAGEN DE LA ESCENA"),
      "Reference portraits must not be mistaken for images of a specific canon event.");
    await page.waitForFunction(() => {
      const images = Array.from(document.querySelectorAll("#archive-profile-panel .archive-moment-character .archive-portrait-art"));
      return images.length >= 3 && images.every(img => img.complete && img.naturalWidth > 0 &&
        img.currentSrc.includes("danmachi.com/"));
    }, null, { timeout: 10000 });
    const momentPortraitUrls = await page.locator("#archive-profile-panel .archive-moment-character .archive-portrait-art").evaluateAll(images => images.map(img => img.currentSrc));
    assert.ok(momentPortraitUrls.every(url => url.includes("/danmachi4/character/images/chara_tachi_")),
      "Historical character-reference strips must use the official DanMachi IV/Astrea Record-era portraits.");
    await page.locator('#archive-profile-panel [data-moment-id="ryu-seven-days"] > summary').click();
    assert.ok(await page.locator('#archive-profile-panel [data-moment-id="ryu-seven-days"] .archive-evidence').count() >= 1);
    await page.locator("#archive-tab-relationships").click();
    assert.ok(await page.locator('#archive-profile-panel [data-character-link="CHAR-ALISE-LOVELACE"]').count() > 0);
    await page.locator('#archive-profile-panel [data-character-link="CHAR-ALISE-LOVELACE"]').first().click();
    assert.equal(await page.locator("#archive-profile-name").innerText(), "Alise Lovelace");
    assert.equal(await page.locator("#archive-profile-continuity").inputValue(), "CONT-AR");
    assert.ok((await page.locator("#archive-profile-portrait .archive-portrait-art").getAttribute("src")).includes("chara_tachi_17.png"));
    assert.ok(await page.locator('#archive-profile-panel [data-character-link="CHAR-ASTREA"]').count() > 0);
    await page.locator('#archive-profile-panel [data-character-link="CHAR-ASTREA"]').first().click();
    assert.equal(await page.locator("#archive-profile-name").innerText(), "Astrea");
    assert.ok((await page.locator("#archive-profile-portrait .archive-portrait-art").getAttribute("src")).includes("chara_tachi_16.png"));
    await page.locator("#archive-profile-back").click();
    assert.equal(await page.locator("#archive-profile-name").innerText(), "Alise Lovelace");
    await page.locator("#archive-profile-back").click();
    assert.equal(await page.locator("#archive-profile-name").innerText(), "Ryu Lion");
    await page.locator("#archive-profile-continuity").selectOption("CONT-MAIN-LN");
    await page.locator("#archive-tab-timeline").click();
    assert.ok((await page.locator("#archive-profile-panel").innerText()).includes("Viaje para visitar a Astrea"),
      "The later novel continuity should show Ryu's journey to see Astrea in the timeline.");
    await page.locator("#archive-tab-relationships").click();
    assert.ok(await page.locator('#archive-profile-panel [data-character-link="CHAR-ASTREA"]').count() > 0);
    await page.locator('#archive-profile-panel [data-character-link="CHAR-ASTREA"]').first().click();
    assert.equal(await page.locator("#archive-profile-name").innerText(), "Astrea");
    assert.equal(await page.locator("#archive-profile-continuity").inputValue(), "CONT-MAIN-LN");
    assert.ok(await page.locator('#archive-profile-panel [data-character-link="CHAR-CECIL-BLACKLIZA"]').count() > 0,
      "Astrea's later-family roster should expose the new captain as a provisional, source-tagged node.");
    await page.locator('#archive-profile-panel [data-character-link="CHAR-CECIL-BLACKLIZA"]').first().click();
    assert.equal(await page.locator("#archive-profile-name").innerText(), "Cecil Blackliza");
    await page.locator("#archive-profile-back").click();
    assert.equal(await page.locator("#archive-profile-name").innerText(), "Astrea");
    await page.locator("#archive-profile-back").click();
    assert.equal(await page.locator("#archive-profile-name").innerText(), "Ryu Lion");
    await page.locator("#archive-profile-continuity").selectOption("CONT-AR");
    await page.locator("#archive-tab-summary").click();
    // The summary itself now exposes more than two related people, with a navigable roster graph.
    assert.ok(await page.locator('#archive-profile-panel [data-character-link="CHAR-KAGUYA"]').count() > 0);
    assert.ok(await page.locator('#archive-profile-panel [data-character-link="CHAR-LYRA"]').count() > 0);
    await page.locator('#archive-profile-panel [data-character-link="CHAR-KAGUYA"]').first().click();
    assert.equal(await page.locator("#archive-profile-name").innerText(), "Gojouno Kaguya");
    assert.ok((await page.locator("#archive-profile-portrait .archive-portrait-art").getAttribute("src")).includes("chara_tachi_18.png"));
    await page.locator("#archive-profile-back").click();
    assert.equal(await page.locator("#archive-profile-name").innerText(), "Ryu Lion");
    await page.locator("#archive-profile-continuity").selectOption("CONT-ANIME");
    assert.ok((await page.locator("#archive-profile-summary").innerText()).includes("Hostess of Fertility"));
    const ryuAnimePortrait = await page.locator("#archive-profile-portrait .archive-portrait-art").getAttribute("src");
    assert.ok(ryuAnimePortrait.includes("danmachi5/character/images/chara_tachi_18.png"), "Ryu's anime state should use the official DanMachi V image.");
    await page.locator("#archive-tab-summary").click();
    assert.equal(await page.locator("#archive-profile-panel .archive-official-reference").count(), 1,
      "Official adaptation details should appear only in the anime continuity.");
    await page.locator("#archive-tab-relationships").click();
    assert.ok(await page.locator('#archive-profile-panel [data-character-link="CHAR-ALISE-LOVELACE"]').count() > 0,
      "Anime-continuity relationships should expose Alise as Ryu's formative captain.");
    assert.ok(await page.locator('#archive-profile-panel [data-character-link="CHAR-KAGUYA"]').count() > 0,
      "Anime-continuity relationships should expose the documented Ryu–Kaguya friction/respect dynamic.");
    assert.ok(await page.locator('#archive-profile-panel [data-character-link="CHAR-LYRA"]').count() > 0,
      "Anime-continuity relationships should expose Lyra's strategic support.");
    assert.ok(await page.locator('#archive-profile-panel [data-character-link="CHAR-ISKA-BRA"]').count() > 0,
      "Ryu's network should open a named member of the historic Astrea Familia roster.");
    await page.locator('#archive-profile-panel [data-character-link="CHAR-ISKA-BRA"]').first().click();
    assert.equal(await page.locator("#archive-profile-name").innerText(), "Iska Bra");
    assert.equal(await page.locator("#archive-profile-continuity").inputValue(), "CONT-ANIME");
    assert.ok((await page.locator("#archive-profile-portrait .archive-portrait-art").getAttribute("src")).includes("chara_tachi_25.png"),
      "Iska should use the linked official DanMachi IV portrait.");
    await page.locator("#archive-profile-back").click();
    assert.equal(await page.locator("#archive-profile-name").innerText(), "Ryu Lion");
    assert.ok(!(await page.locator("#archive-profile-panel").innerText()).includes("La sinopsis presenta a Ryu buscando su idea de justicia"));
    await page.locator("#archive-profile-continuity").selectOption("CONT-AR");
    await page.locator("#archive-profile-spoiler").selectOption("safe-only");
    await page.locator("#archive-tab-moments").click();
    assert.equal(await page.locator('#archive-profile-panel [data-moment-id="ryu-seven-days"]').count(), 0);
    await page.locator("#archive-profile-spoiler").selectOption("all");
    await page.locator("#archive-tab-sources").click();
    const firstSourceEvidence = page.locator('#archive-profile-panel details.archive-evidence').first();
    await firstSourceEvidence.locator("summary").click();
    assert.ok(await firstSourceEvidence.locator(".archive-source-links a").count() > 0);
    const sourceGroupLabels = await firstSourceEvidence.locator(".archive-source-group-label").allTextContents();
    assert.ok(sourceGroupLabels[0]?.includes("Lectura en español"),
      "Spanish-language community reading should appear before primary-language sources.");
    assert.ok(sourceGroupLabels.some(label => label.includes("Fuentes originales y oficiales")),
      "Primary and official sources should be identified separately, including Japanese pages.");
    await page.locator("#archive-tab-moments").click();
    const screenshotDirectory = path.join(root, "artifacts");
    fs.mkdirSync(screenshotDirectory, { recursive: true });
    await page.screenshot({ path: path.join(screenshotDirectory, "character-archive-ryu.png"), fullPage: true });
    await page.locator("#archive-return-search").click();
    assert.equal(await page.locator("#character-archive-query").inputValue(), "Ryu");
    assert.equal(await page.locator("#character-archive-results [data-archive-open]").count(), 1);
    // The newly curated anime roster loads an official image from its source host.
    await page.locator("#character-archive-query").fill("Bell Cranel");
    await page.waitForFunction(() => document.querySelectorAll("#character-archive-results [data-archive-open]").length === 1, { timeout: 5000 });
    const bellCardSelector = "#character-archive-results .archive-character-card:has([data-archive-open='DM-CHAR-BELL'])";
    const bellPortrait = page.locator(bellCardSelector + " .archive-portrait-art");
    assert.equal(await bellPortrait.count(), 1);
    await page.waitForFunction(() => {
      const button = document.querySelector("#character-archive-results [data-archive-open='DM-CHAR-BELL']");
      const img = button?.closest(".archive-character-card")?.querySelector(".archive-portrait-art");
      return !!img && img.complete && img.naturalWidth > 0;
    }, null, { timeout: 5000 });
    process.stdout.write("PASS character archive: compact search, tabs, links, continuity separation, spoiler filtering, evidence and screenshot.\\n");
    await page.locator("#lore-research-panel > summary").click();

// DanMachi lore retrieval: a single UI query must preserve temporal continuity.
    await page.locator('.nav-item[data-view="lore"]').click();
    await page.waitForFunction(() => document.querySelector("#lore-search-status")?.textContent.includes("Leídas"), { timeout: 5000 });
    await page.locator("#lore-character").selectOption("CHAR-RYUU-LION");
    await page.locator("#lore-continuity").selectOption("CONT-AR");
    await page.locator("#lore-period").selectOption("ASTREA_RECORD");
    await page.locator("#lore-aspect").selectOption("all");
    await page.locator("#lore-spoiler").selectOption("all");
    await page.locator("#lore-search-form button[type='submit']").click();
    await page.waitForFunction(() => document.querySelectorAll(".lore-result").length > 0, { timeout: 5000 });
    const ryuAr = await page.locator(".lore-result").evaluateAll(nodes => nodes.map(n => ({ claimId:n.dataset.claimId, entryId:n.dataset.entryId, continuity:n.dataset.continuity, text:n.innerText })));
    assert.ok(ryuAr.some(item => item.claimId === "DMR-002-CLM-015"));
    assert.ok(ryuAr.every(item => item.continuity === "CONT-AR"));
    process.stdout.write("PASS lore UI: Ryu in CONT-AR is retrieved separately.\n");
    await page.locator("#lore-continuity").selectOption("CONT-ANIME");
    await page.locator("#lore-period").selectOption("ALL");
    await page.locator("#lore-search-form button[type='submit']").click();
    await page.waitForFunction(() => document.querySelectorAll(".lore-result").length > 0, { timeout: 5000 });
    const ryuAnime = await page.locator(".lore-result").evaluateAll(nodes => nodes.map(n => ({ claimId:n.dataset.claimId, entryId:n.dataset.entryId, continuity:n.dataset.continuity, text:n.innerText })));
    assert.ok(ryuAnime.some(item => item.entryId.endsWith("--CONT-ANIME") || item.text.includes("Hostess of Fertility")));
    assert.ok(ryuAnime.every(item => item.continuity === "CONT-ANIME"));
    process.stdout.write("PASS lore UI: Ryu in CONT-ANIME is retrieved separately.\n");
    await page.locator("#lore-character").selectOption("DM-CHAR-AIS");
    await page.locator("#lore-continuity").selectOption("ALL");
    await page.locator("#lore-aspect").selectOption("likes");
    await page.locator("#lore-search-form button[type='submit']").click();
    await page.waitForFunction(() => document.querySelector("#lore-search-status")?.textContent.includes("No se encontró evidencia"), { timeout: 5000 });
    assert.equal(await page.locator(".lore-result").count(), 0);
    process.stdout.write("PASS lore UI: undocumented Ais likes produce explicit abstention.\n");
    await page.route("https://danmachi.fandom.com/api.php**", route => {
      const url = new URL(route.request().url());
      const action = url.searchParams.get("action");
      const prop = url.searchParams.get("prop");
      if(action==="parse") return route.fulfill({status:200,contentType:"application/json",body:JSON.stringify({parse:{text:{"*":"<aside><p>Hide infobox.</p></aside><p>Ryuu Lion is an elven adventurer whose history spans Astrea Familia and the main story of DanMachi.</p><p>She later works at the Hostess of Fertility.</p>"}}})});
      if(action==="query"&&prop==="pageimages|info") return route.fulfill({status:200,contentType:"application/json",body:JSON.stringify({query:{pages:{"2264":{pageid:2264,title:"Ryuu Lion",canonicalurl:"https://danmachi.fandom.com/wiki/Ryuu_Lion",thumbnail:{source:"https://static.wikia.nocookie.net/dungeon-ni-deai-o-motemeru/images/3/33/Ryuu.png"}}}}})});
      return route.fulfill({status:200,contentType:"application/json",body:JSON.stringify({query:{search:[{pageid:2264,title:"Ryuu Lion",snippet:'<span class="searchmatch">Ryuu Lion</span> profile and timeline.'}]}})});
    });
    await page.route("https://en.wikipedia.org/w/api.php**", route => {
      const url = new URL(route.request().url());
      const action = url.searchParams.get("action");
      const prop = url.searchParams.get("prop");
      if(action==="parse") return route.fulfill({status:200,contentType:"application/json",body:JSON.stringify({parse:{text:{"*":"<p>DanMachi is a Japanese light novel series written by Fujino Omori.</p>"}}})});
      if(action==="query"&&prop==="pageimages|info") return route.fulfill({status:200,contentType:"application/json",body:JSON.stringify({query:{pages:{"100":{pageid:100,title:"DanMachi",canonicalurl:"https://en.wikipedia.org/wiki/Is_It_Wrong_to_Try_to_Pick_Up_Girls_in_a_Dungeon",thumbnail:{source:"https://upload.wikimedia.org/wikipedia/en/a/a2/Danmachi.jpg"}}}}})});
      return route.fulfill({status:200,contentType:"application/json",body:JSON.stringify({query:{search:[{pageid:100,title:"DanMachi",snippet:"A Japanese light novel series."}]}})});
    });
    await page.route("https://static.wikia.nocookie.net/**", route => route.fulfill({status:200,contentType:"image/png",body:Buffer.from("iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAwMCAO+j8Z0AAAAASUVORK5CYII=","base64")}));
    await page.locator("#lore-query").fill("Ryu Lion");
    await page.locator("#lore-web-search-button").click();
    await page.waitForFunction(() => document.querySelectorAll("#lore-online-results .lore-online-result-card").length >= 2, {timeout:5000});
    assert.ok((await page.locator("#lore-online-status").innerText()).includes("pistas secundarias"));
    assert.ok((await page.locator("#lore-online-results").innerText()).includes("Ryuu Lion"));
    assert.ok(!((await page.locator("#lore-online-results").innerText()).includes("<span")));
    assert.ok(await page.locator("#lore-online-results .lore-online-preview img").count() >= 1,"External research should display a source-attributed thumbnail where the wiki provides one.");
    assert.ok((await page.locator("#lore-online-results .lore-online-extract").first().innerText()).includes("elven adventurer"),
      "External research should show a useful lead excerpt, not only the page search snippet.");
    assert.ok((await page.locator("#lore-online-results .lore-online-image-credit").first().innerText()).includes("No se guarda"));
    await page.locator("#lore-source-directory-details > summary").click();
    assert.ok((await page.locator("#lore-source-directory").innerText()).includes("GA Bunko"));
    assert.ok((await page.locator("#lore-source-directory").innerText()).includes("DanMachi Wiki"));
    process.stdout.write("PASS web UI: mocked wiki lookup, secondary-source warning and official-source directory.\n");
    await page.locator('.nav-item[data-view="atlas"]').click();

    const assertSnapshotContains = async (entityId, collection, reason) => {
      const evidence = await page.evaluate(async ({ entityId, collection, reason }) => {
        const project = JSON.parse(localStorage.getItem("wordwaifu.project.v1"));
        const repository = new window.WordWaifuProjectRepository.ProjectRepository();
        const summaries = await repository.listSnapshots(project.project.id);
        const summary = summaries.find((item) => item.reason === reason && item.valid);
        const snapshot = summary ? await repository.read("snapshots", summary.snapshotId) : null;
        repository.close();
        return {
          exists: Boolean(summary && snapshot),
          retained: Boolean(snapshot?.data?.[collection]?.some((item) => item.id === entityId))
        };
      }, { entityId, collection, reason });
      assert.equal(evidence.exists, true, "Expected a verified pre-delete snapshot for " + entityId + ".");
      assert.equal(evidence.retained, true, "The snapshot must preserve the prior " + collection + " record.");
      process.stdout.write("PASS pre-delete snapshot: " + reason + " preserves " + entityId + ".\\n");
    };


    // A successful import must snapshot the previous active project before replacing it.
    const preImportExportPromise = page.waitForEvent("download");
    await page.locator("#export-button").click();
    const preImportExport = await preImportExportPromise;
    const preImportExportPath = await preImportExport.path();
    assert.ok(preImportExportPath);
    const preImportAlertPromise = page.waitForEvent("dialog");
    const preImportSelection = page.locator("#import-file").setInputFiles(preImportExportPath);
    const preImportAlert = await preImportAlertPromise;
    assert.match(preImportAlert.message(), /Proyecto importado correctamente/i);
    await preImportAlert.accept();
    await preImportSelection;
    const preImportSnapshots = await page.evaluate(async () => {
      const repository = new window.WordWaifuProjectRepository.ProjectRepository();
      const snapshots = await repository.listSnapshots("project-asteria");
      repository.close();
      return snapshots.map((snapshot) => ({ id: snapshot.snapshotId, reason: snapshot.reason, valid: snapshot.valid }));
    });
    assert.ok(preImportSnapshots.some((snapshot) => snapshot.reason === "before-import" && snapshot.valid),
      "Successful import must leave a verified snapshot of the pre-import project.");
    const preImportSnapshotId = preImportSnapshots.find((snapshot) => snapshot.reason === "before-import" && snapshot.valid).id;
    process.stdout.write("PASS import safety: valid import creates a verified snapshot before replacement.\\n");

    // Upgrade a real v1 database without losing its projects, then exercise versioned snapshots.
    const snapshotRepositoryEvidence = await page.evaluate(async () => {
      const databaseName = "wordwaifu.snapshot-migration." + Date.now().toString(36);
      const storageKey = databaseName + ".backup";
      const baseProject = JSON.parse(localStorage.getItem("wordwaifu.project.v1"));
      const projectA = JSON.parse(JSON.stringify(baseProject));
      projectA.project = { ...projectA.project, id: "snapshot-project-a", name: "Universo Snapshot A" };
      const projectB = JSON.parse(JSON.stringify(baseProject));
      projectB.project = { ...projectB.project, id: "snapshot-project-b", name: "Universo Snapshot B" };

      await new Promise((resolve, reject) => {
        const openRequest = indexedDB.open(databaseName, 1);
        openRequest.onupgradeneeded = () => {
          openRequest.result.createObjectStore("projects", { keyPath: "projectId" });
          openRequest.result.createObjectStore("metadata", { keyPath: "key" });
        };
        openRequest.onerror = () => reject(openRequest.error || new Error("Could not create v1 test database."));
        openRequest.onsuccess = () => {
          const database = openRequest.result;
          const tx = database.transaction(["projects", "metadata"], "readwrite");
          tx.objectStore("projects").put({ projectId: projectA.project.id, data: projectA });
          tx.objectStore("projects").put({ projectId: projectB.project.id, data: projectB });
          tx.objectStore("metadata").put({ key: "activeProjectId", value: projectA.project.id });
          tx.oncomplete = () => { database.close(); resolve(); };
          tx.onerror = () => reject(tx.error || new Error("Could not seed v1 projects."));
          tx.onabort = () => reject(tx.error || new Error("v1 seed transaction aborted."));
        };
      });

      const repository = new window.WordWaifuProjectRepository.ProjectRepository({ databaseName, storageKey });
      const database = await repository.open();
      const migration = {
        version: database.version,
        hasSnapshots: database.objectStoreNames.contains("snapshots"),
        hasProjects: database.objectStoreNames.contains("projects"),
        hasMetadata: database.objectStoreNames.contains("metadata"),
        hasTrash: database.objectStoreNames.contains("trash"),
        nameA: (await repository.read("projects", projectA.project.id))?.data?.project?.name,
        nameB: (await repository.read("projects", projectB.project.id))?.data?.project?.name
      };

      const snapshotA = await repository.createSnapshot(projectA, { reason: "manual-test" });
      const snapshotB = await repository.createSnapshot(projectB, { reason: "isolation-test" });
      const limitProject = JSON.parse(JSON.stringify(projectA));
      limitProject.project = { ...limitProject.project, id: "snapshot-project-limit", name: "Universo límite de snapshots" };
      for (let index = 0; index < 25; index += 1) {
        await repository.createSnapshot(limitProject, { reason: "limit-test-" + index });
      }
      let snapshotLimitRejected = false;
      try { await repository.createSnapshot(limitProject, { reason: "limit-overflow" }); }
      catch (error) { snapshotLimitRejected = /límite de 25 snapshots/i.test(error.message); }
      const limitSnapshots = await repository.listSnapshots(limitProject.project.id);
      const listA = await repository.listSnapshots(projectA.project.id);
      const listB = await repository.listSnapshots(projectB.project.id);

      const invalidSnapshot = {
        snapshotId: "snapshot-invalid-" + Date.now().toString(36),
        projectId: projectA.project.id,
        createdAt: new Date().toISOString(),
        reason: "corrupted-test",
        data: { schemaVersion: 99, project: projectA.project, locations: [], characters: [], events: [], organizations: [], relationships: [], stories: [] }
      };
      await new Promise((resolve, reject) => {
        const tx = database.transaction("snapshots", "readwrite");
        tx.objectStore("snapshots").add(invalidSnapshot);
        tx.oncomplete = resolve;
        tx.onerror = () => reject(tx.error || new Error("Could not seed invalid snapshot."));
        tx.onabort = () => reject(tx.error || new Error("Invalid snapshot seed aborted."));
      });
      const listAfterInvalid = await repository.listSnapshots(projectA.project.id);
      let invalidRestoreRejected = false;
      try { await repository.restoreSnapshot(invalidSnapshot.snapshotId, projectA.project.id); }
      catch { invalidRestoreRejected = true; }

      const changedA = JSON.parse(JSON.stringify(projectA));
      changedA.project.description = "Mutated after the backup.";
      await repository.write(changedA);
      const restored = await repository.restoreSnapshot(snapshotA.snapshotId, projectA.project.id);
      const storedA = await repository.read("projects", projectA.project.id);
      const storedB = await repository.read("projects", projectB.project.id);
      const active = await repository.read("metadata", "activeProjectId");
      const snapshotsA = await repository.listSnapshots(projectA.project.id);
      let crossProjectDeleteRejected = false;
      try { await repository.deleteSnapshot(snapshotB.snapshotId, projectA.project.id); }
      catch { crossProjectDeleteRejected = true; }
      const snapshotBStillExists = Boolean(await repository.read("snapshots", snapshotB.snapshotId));
      const deleteResult = await repository.deleteSnapshot(snapshotA.snapshotId, projectA.project.id);
      const snapshotADeleted = !(await repository.read("snapshots", snapshotA.snapshotId));
      const rollbackSnapshotExists = Boolean(await repository.read("snapshots", restored.rollbackSnapshotId));
      const localBackupMatches = repository.readBackup().project?.project?.id === projectA.project.id &&
        repository.readBackup().project?.project?.description === storedA.data.project.description;
      const deletedProjectB = await repository.deleteProject(projectB.project.id);
      const snapshotBRemovedWithProject = !(await repository.read("snapshots", snapshotB.snapshotId));
      const projectBRemoved = !(await repository.read("projects", projectB.project.id));

      let activeProjectTrashRejected = false;
      try { await repository.moveProjectToTrash(projectA.project.id); }
      catch (error) { activeProjectTrashRejected = /proyecto activo/i.test(error.message); }
      const projectC = JSON.parse(JSON.stringify(projectA));
      projectC.project = { ...projectC.project, id: "trash-project-c", name: "Universo Papelera C" };
      await new Promise((resolve, reject) => {
        const tx = database.transaction("projects", "readwrite");
        tx.objectStore("projects").add({ projectId: projectC.project.id, data: projectC });
        tx.oncomplete = resolve;
        tx.onerror = () => reject(tx.error || new Error("Could not seed project C for trash test."));
        tx.onabort = () => reject(tx.error || new Error("Project C seed transaction aborted."));
      });
      const trashSnapshot = await repository.createSnapshot(projectC, { reason: "trash-retention-test" });
      const trashMove = await repository.moveProjectToTrash(projectC.project.id);
      const trashList = await repository.listTrash();
      const projectCAbsent = !(await repository.read("projects", projectC.project.id));
      const snapshotCAbsentWhileTrashed = !(await repository.read("snapshots", trashSnapshot.snapshotId));
      const trashRecord = await repository.read("trash", projectC.project.id);
      const trashRetainsSnapshot = Boolean(trashRecord?.snapshots?.some((item) => item.snapshotId === trashSnapshot.snapshotId));
      const projectCHiddenFromCatalog = !(await repository.listProjects()).some((item) => item.projectId === projectC.project.id);
      const collisionProject = JSON.parse(JSON.stringify(projectC));
      collisionProject.project.name = "Colisión que debe conservarse";
      await new Promise((resolve, reject) => {
        const tx = database.transaction("projects", "readwrite");
        tx.objectStore("projects").add({ projectId: collisionProject.project.id, data: collisionProject });
        tx.oncomplete = resolve;
        tx.onerror = () => reject(tx.error || new Error("Could not seed restoration ID collision."));
        tx.onabort = () => reject(tx.error || new Error("Restoration collision seed aborted."));
      });
      let trashRestoreCollisionRejected = false;
      try { await repository.restoreTrashedProject(projectC.project.id); }
      catch (error) { trashRestoreCollisionRejected = /ya existe un proyecto con ese ID/i.test(error.message); }
      const collisionDataPreserved = (await repository.read("projects", projectC.project.id))?.data?.project?.name === "Colisión que debe conservarse";
      const trashPreservedAfterCollision = Boolean(await repository.read("trash", projectC.project.id));
      await new Promise((resolve, reject) => {
        const tx = database.transaction("projects", "readwrite");
        tx.objectStore("projects").delete(projectC.project.id);
        tx.oncomplete = resolve;
        tx.onerror = () => reject(tx.error || new Error("Could not remove restoration collision fixture."));
        tx.onabort = () => reject(tx.error || new Error("Restoration collision cleanup aborted."));
      });
      const trashRestore = await repository.restoreTrashedProject(projectC.project.id);
      const projectCRestored = Boolean(await repository.read("projects", projectC.project.id));
      const snapshotCRestored = Boolean(await repository.read("snapshots", trashSnapshot.snapshotId));
      const trashEntryRemovedOnRestore = !(await repository.read("trash", projectC.project.id));
      const trashAgain = await repository.moveProjectToTrash(projectC.project.id);
      // Simulate a stale duplicate active-store record beside a valid trash tombstone.
      // Activation must reject the trashed ID atomically rather than switching active metadata.
      await new Promise((resolve, reject) => {
        const tx = database.transaction("projects", "readwrite");
        tx.objectStore("projects").put({ projectId: projectC.project.id, data: projectC });
        tx.oncomplete = resolve;
        tx.onerror = () => reject(tx.error || new Error("Could not seed stale project record beside trash tombstone."));
        tx.onabort = () => reject(tx.error || new Error("Stale project record seed was aborted."));
      });
      const activeIdBeforeRejectedTrashActivation = (await repository.read("metadata", "activeProjectId"))?.value || null;
      let trashedProjectActivationRejected = false;
      try { await repository.activateProject(projectC.project.id); }
      catch (error) { trashedProjectActivationRejected = /está en la papelera/i.test(error.message); }
      const activeIdAfterRejectedTrashActivation = (await repository.read("metadata", "activeProjectId"))?.value || null;
      await new Promise((resolve, reject) => {
        const tx = database.transaction("projects", "readwrite");
        tx.objectStore("projects").delete(projectC.project.id);
        tx.oncomplete = resolve;
        tx.onerror = () => reject(tx.error || new Error("Could not clean stale project record fixture."));
        tx.onabort = () => reject(tx.error || new Error("Stale project record cleanup was aborted."));
      });
      // A stale compatibility backup must not make a trashed universe searchable.
      const trashedBackupForSearchWritten = repository.saveBackup(projectC).written;
      const trashSearchReport = await repository.searchAcrossProjects("Mira", { entityType: "character" });
      const trashedProjectSearchExcluded = !trashSearchReport.results.some((item) => item.projectId === projectC.project.id);
      const unrelatedBackupProject = JSON.parse(JSON.stringify(projectC));
      unrelatedBackupProject.project = { ...unrelatedBackupProject.project, id: "trash-not-present-" + Date.now().toString(36) };
      const unrelatedBackupWritten = repository.saveBackup(unrelatedBackupProject).written;
      let missingTrashRejected = false;
      try { await repository.permanentlyDeleteTrashedProject(unrelatedBackupProject.project.id); }
      catch (error) { missingTrashRejected = /ya no está en la papelera/i.test(error.message); }
      const unrelatedBackupPreserved = repository.readBackup().project?.project?.id === unrelatedBackupProject.project.id;
      // Simulate a stale local backup left behind by an earlier cleanup failure.
      const residualBackupWritten = repository.saveBackup(projectC).written;
      // If the trash store cannot be read, the project catalog must fail closed
      // instead of presenting a stale localStorage backup as an active universe.
      const originalReadAllForCatalog = repository.readAll;
      repository.readAll = async function (storeName) {
        if (storeName === "trash") throw new Error("Simulated unreadable trash store.");
        return originalReadAllForCatalog.call(this, storeName);
      };
      let catalogBlockedOnUnreadableTrash = false;
      try { await repository.listProjects(); }
      catch (error) { catalogBlockedOnUnreadableTrash = /no se pudo verificar la papelera/i.test(error.message); }
      repository.readAll = originalReadAllForCatalog;
      const originalReadForProject = repository.read;
      repository.read = async function (storeName, key) {
        if (storeName === "trash") throw new Error("Simulated unreadable project tombstone.");
        return originalReadForProject.call(this, storeName, key);
      };
      const getProjectWhenTrashUnreadable = await repository.getProject(projectC.project.id);
      repository.read = originalReadForProject;
      const getProjectBlockedOnUnreadableTrash = getProjectWhenTrashUnreadable === null;
      const permanentDelete = await repository.permanentlyDeleteTrashedProject(projectC.project.id);
      const permanentMarker = await repository.read("trash", projectC.project.id);
      const permanentMarkerRetained = Boolean(permanentMarker?.permanentlyDeleted &&
        permanentMarker.projectData === undefined && permanentMarker.snapshots === undefined);
      const permanentMarkerHiddenFromTrashList = !(await repository.listTrash()).some(item => item.projectId === projectC.project.id);
      let permanentSaveRejected = false;
      try { await repository.saveActive(projectC); }
      catch (error) { permanentSaveRejected = error.code === "PROJECT_PERMANENTLY_DELETED"; }
      let permanentWriteRejected = false;
      try { await repository.write(projectC); }
      catch (error) { permanentWriteRejected = error.code === "PROJECT_PERMANENTLY_DELETED"; }
      await new Promise((resolve, reject) => {
        const tx = database.transaction("projects", "readwrite");
        tx.objectStore("projects").put({ projectId: projectC.project.id, data: projectC });
        tx.oncomplete = resolve;
        tx.onerror = () => reject(tx.error || new Error("Could not seed stale record beside permanent tombstone."));
        tx.onabort = () => reject(tx.error || new Error("Stale permanent-delete fixture aborted."));
      });
      let permanentActivationRejected = false;
      try { await repository.activateProject(projectC.project.id); }
      catch (error) { permanentActivationRejected = /borrado permanentemente/i.test(error.message); }
      await new Promise((resolve, reject) => {
        const tx = database.transaction("projects", "readwrite");
        tx.objectStore("projects").delete(projectC.project.id);
        tx.oncomplete = resolve;
        tx.onerror = () => reject(tx.error || new Error("Could not clean permanent-delete fixture."));
        tx.onabort = () => reject(tx.error || new Error("Permanent-delete fixture cleanup aborted."));
      });
      const residualBackupRemoved = localStorage.getItem(storageKey) === null;

      repository.close();
      await new Promise((resolve, reject) => {
        const request = indexedDB.deleteDatabase(databaseName);
        request.onsuccess = resolve;
        request.onerror = () => reject(request.error || new Error("Snapshot test cleanup failed."));
        request.onblocked = () => reject(new Error("Snapshot test cleanup blocked."));
      });
      localStorage.removeItem(storageKey);
      return {
        migration, listAIds: listA.map((item) => item.projectId), listBIds: listB.map((item) => item.projectId),
        snapshotLimitRejected, limitSnapshotCount: limitSnapshots.length,
        invalidMarked: listAfterInvalid.some((item) => item.snapshotId === invalidSnapshot.snapshotId && !item.valid),
        invalidRestoreRejected,
        restoredDescription: storedA.data.project.description, expectedDescription: projectA.project.description,
        otherProjectUnchanged: storedB.data.project.description === projectB.project.description,
        activeProjectId: active.value, snapshotsAAfterRestore: snapshotsA.length,
        crossProjectDeleteRejected, snapshotBStillExists, deleteResult, snapshotADeleted,
        rollbackSnapshotExists, localBackupMatches, deletedProjectB, snapshotBRemovedWithProject, projectBRemoved,
        activeProjectTrashRejected, trashMove, trashListed: trashList.some((item) => item.projectId === projectC.project.id),
        projectCAbsent, snapshotCAbsentWhileTrashed, trashRetainsSnapshot, projectCHiddenFromCatalog,
        trashRestoreCollisionRejected, collisionDataPreserved, trashPreservedAfterCollision,
        trashRestore, projectCRestored, snapshotCRestored, trashEntryRemovedOnRestore, trashAgain,
        trashedProjectActivationRejected, activeIdBeforeRejectedTrashActivation, activeIdAfterRejectedTrashActivation,
        trashedBackupForSearchWritten, trashedProjectSearchExcluded, trashSearchComplete: trashSearchReport.complete,
        unrelatedBackupWritten, missingTrashRejected, unrelatedBackupPreserved, residualBackupWritten,
        catalogBlockedOnUnreadableTrash, getProjectBlockedOnUnreadableTrash,
        permanentDelete, permanentMarkerRetained, permanentMarkerHiddenFromTrashList, permanentSaveRejected, permanentWriteRejected, permanentActivationRejected, residualBackupRemoved
      };
    });
    assert.equal(snapshotRepositoryEvidence.migration.version, 3);
    assert.equal(snapshotRepositoryEvidence.migration.hasSnapshots, true);
    assert.equal(snapshotRepositoryEvidence.migration.hasProjects, true);
    assert.equal(snapshotRepositoryEvidence.migration.hasMetadata, true);
    assert.equal(snapshotRepositoryEvidence.migration.hasTrash, true);
    assert.equal(snapshotRepositoryEvidence.migration.nameA, "Universo Snapshot A");
    assert.equal(snapshotRepositoryEvidence.migration.nameB, "Universo Snapshot B");
    assert.deepEqual(snapshotRepositoryEvidence.listAIds, ["snapshot-project-a"]);
    assert.deepEqual(snapshotRepositoryEvidence.listBIds, ["snapshot-project-b"]);
    assert.equal(snapshotRepositoryEvidence.snapshotLimitRejected, true, "The 26th snapshot must be rejected without deleting prior copies.");
    assert.equal(snapshotRepositoryEvidence.limitSnapshotCount, 25, "The snapshot cap must preserve exactly 25 existing copies.");
    assert.equal(snapshotRepositoryEvidence.invalidMarked, true);
    assert.equal(snapshotRepositoryEvidence.invalidRestoreRejected, true);
    assert.equal(snapshotRepositoryEvidence.restoredDescription, snapshotRepositoryEvidence.expectedDescription);
    assert.equal(snapshotRepositoryEvidence.otherProjectUnchanged, true);
    assert.equal(snapshotRepositoryEvidence.activeProjectId, "snapshot-project-a");
    assert.equal(snapshotRepositoryEvidence.snapshotsAAfterRestore, 3);
    assert.equal(snapshotRepositoryEvidence.crossProjectDeleteRejected, true);
    assert.equal(snapshotRepositoryEvidence.snapshotBStillExists, true);
    assert.equal(snapshotRepositoryEvidence.deleteResult.deleted, true);
    assert.equal(snapshotRepositoryEvidence.snapshotADeleted, true);
    assert.equal(snapshotRepositoryEvidence.rollbackSnapshotExists, true);
    assert.equal(snapshotRepositoryEvidence.localBackupMatches, true);
    assert.equal(snapshotRepositoryEvidence.deletedProjectB.deleted, true);
    assert.equal(snapshotRepositoryEvidence.snapshotBRemovedWithProject, true);
    assert.equal(snapshotRepositoryEvidence.projectBRemoved, true);
    assert.equal(snapshotRepositoryEvidence.activeProjectTrashRejected, true, "The active universe must not be moved to trash.");
    assert.equal(snapshotRepositoryEvidence.trashMove.moved, true);
    assert.equal(snapshotRepositoryEvidence.trashListed, true);
    assert.equal(snapshotRepositoryEvidence.projectCAbsent, true);
    assert.equal(snapshotRepositoryEvidence.snapshotCAbsentWhileTrashed, true);
    assert.equal(snapshotRepositoryEvidence.trashRetainsSnapshot, true, "Trash must retain the complete snapshot payload.");
    assert.equal(snapshotRepositoryEvidence.projectCHiddenFromCatalog, true, "A stale local backup must not resurrect a trashed ID.");
    assert.equal(snapshotRepositoryEvidence.trashRestoreCollisionRejected, true);
    assert.equal(snapshotRepositoryEvidence.collisionDataPreserved, true);
    assert.equal(snapshotRepositoryEvidence.trashPreservedAfterCollision, true);
    assert.equal(snapshotRepositoryEvidence.trashRestore.restored, true);
    assert.equal(snapshotRepositoryEvidence.projectCRestored, true);
    assert.equal(snapshotRepositoryEvidence.snapshotCRestored, true);
    assert.equal(snapshotRepositoryEvidence.trashEntryRemovedOnRestore, true);
    assert.equal(snapshotRepositoryEvidence.trashAgain.moved, true);
    assert.equal(snapshotRepositoryEvidence.trashedProjectActivationRejected, true,
      "A stale duplicate projects record must not allow activation when the trash tombstone exists.");
    assert.equal(snapshotRepositoryEvidence.activeIdAfterRejectedTrashActivation,
      snapshotRepositoryEvidence.activeIdBeforeRejectedTrashActivation,
      "Rejected activation must leave the previously active project unchanged.");
    assert.equal(snapshotRepositoryEvidence.trashedBackupForSearchWritten, true);
    assert.equal(snapshotRepositoryEvidence.trashedProjectSearchExcluded, true,
      "Multiverse search must not resurrect a trashed project from a stale localStorage backup.");
    assert.equal(snapshotRepositoryEvidence.trashSearchComplete, true,
      "Trash filtering should remain complete when the trash store is readable.");
    assert.equal(snapshotRepositoryEvidence.permanentDelete.permanentlyDeleted, true);
    assert.equal(snapshotRepositoryEvidence.permanentMarkerRetained, true, "Permanent deletion must retain a minimal anti-resurrection marker.");
    assert.equal(snapshotRepositoryEvidence.permanentMarkerHiddenFromTrashList, true, "Purged tombstones must not appear as recoverable trash entries.");
    assert.equal(snapshotRepositoryEvidence.permanentSaveRejected, true, "A stale tab must not recreate a permanently deleted project via saveActive.");
    assert.equal(snapshotRepositoryEvidence.permanentWriteRejected, true, "Atomic writes must reject a permanently deleted ID.");
    assert.equal(snapshotRepositoryEvidence.permanentActivationRejected, true, "A stale duplicate project record must not reactivate a permanently deleted ID.");
    assert.equal(snapshotRepositoryEvidence.residualBackupWritten, true);
    assert.equal(snapshotRepositoryEvidence.catalogBlockedOnUnreadableTrash, true,
      "The project catalog must fail closed when IndexedDB opens but trash cannot be read.");
    assert.equal(snapshotRepositoryEvidence.getProjectBlockedOnUnreadableTrash, true,
      "getProject must not recover a stale backup when its tombstone cannot be checked.");
    assert.equal(snapshotRepositoryEvidence.residualBackupRemoved, true, "Permanent deletion must remove a stale backup with the exact same project ID.");
    assert.equal(snapshotRepositoryEvidence.unrelatedBackupWritten, true);
    assert.equal(snapshotRepositoryEvidence.missingTrashRejected, true);
    assert.equal(snapshotRepositoryEvidence.unrelatedBackupPreserved, true, "An ID absent from trash must not trigger deletion of any local backup.");
    process.stdout.write("PASS trash repository: v1->v3 migration, active-project guard, snapshot retention, restore and permanent delete verified.\\n");

    // Visible snapshot controls create, restore and delete while preserving the active universe ID.
    await page.locator("#manage-projects-button").click();
    await page.locator("#project-dialog").waitFor({state:"visible"});
    await page.locator("#project-list").selectOption("project-asteria");
    await page.locator("#snapshot-create-button").click();
    await page.waitForFunction(() => Array.from(document.querySelectorAll("#snapshot-list option"))
      .some((option) => option.dataset.reason === "manual"));
    const uiSnapshotId = await page.locator('#snapshot-list option[data-reason="manual"]').first().getAttribute("value");
    assert.ok(uiSnapshotId);
    process.stdout.write("PASS snapshot UI create: a verified project snapshot appears in the project manager.\\n");
    await page.locator("#project-close-button").click();

    await page.locator("#add-button").click();
    await page.locator("#entity-name").fill("Temporal de snapshot");
    await page.locator("#entity-description").fill("Este registro debe desaparecer tras la restauración.");
    await page.locator('#entity-form button[type="submit"]').click();
    await page.waitForFunction(() => document.querySelector("#character-count")?.textContent === "5");
    assert.equal(await page.evaluate(() => JSON.parse(localStorage.getItem("wordwaifu.project.v1")).characters.some((item) => item.name === "Temporal de snapshot")), true);

    await page.locator("#manage-projects-button").click();
    await page.locator("#project-list").selectOption("project-asteria");
    await page.locator("#snapshot-list").selectOption(uiSnapshotId);
    assert.equal(await page.locator("#snapshot-restore-button").isEnabled(), true);
    const restoreUiDialogPromise = page.waitForEvent("dialog");
    const restoreUiClick = page.locator("#snapshot-restore-button").click();
    const restoreUiDialog = await restoreUiDialogPromise;
    assert.equal(restoreUiDialog.type(), "confirm");
    assert.match(restoreUiDialog.message(), /copia automática del estado actual/);
    await restoreUiDialog.accept();
    await restoreUiClick;
    await page.waitForFunction(() => document.querySelector("#character-count")?.textContent === "4");
    const restoredUiState = await page.evaluate(() => JSON.parse(localStorage.getItem("wordwaifu.project.v1")));
    assert.equal(restoredUiState.project.id, "project-asteria");
    assert.equal(restoredUiState.characters.some((item) => item.name === "Temporal de snapshot"), false);
    const automaticSnapshotId = await page.locator('#snapshot-list option[data-reason="before-restore"]').getAttribute("value");
    assert.ok(automaticSnapshotId, "Restore must keep an automatic snapshot of the previous state.");
    process.stdout.write("PASS snapshot UI restore: active project ID stays stable and a pre-restore snapshot is retained.\\n");

    for (const snapshotId of [uiSnapshotId, automaticSnapshotId]) {
      await page.locator("#snapshot-list").selectOption(snapshotId);
      const deleteUiDialogPromise = page.waitForEvent("dialog");
      const deleteUiClick = page.locator("#snapshot-delete-button").click();
      const deleteUiDialog = await deleteUiDialogPromise;
      assert.equal(deleteUiDialog.type(), "confirm");
      assert.match(deleteUiDialog.message(), /proyecto y los demás snapshots se conservarán/);
      await deleteUiDialog.accept();
      await deleteUiClick;
      await page.waitForFunction((deletedId) =>
        !Array.from(document.querySelectorAll("#snapshot-list option")).some((option) => option.value === deletedId),
      snapshotId);
    }
    await page.waitForFunction((ids) => {
      const options = Array.from(document.querySelectorAll("#snapshot-list option"));
      return options.some((option) => option.value === ids[0]) &&
        ids.slice(1).every((deletedId) => !options.some((option) => option.value === deletedId));
    }, [preImportSnapshotId, uiSnapshotId, automaticSnapshotId]);
    assert.equal(await page.locator('#snapshot-list option[value="' + preImportSnapshotId + '"]').count(), 1);
    assert.equal(await page.locator('#snapshot-list option[value="' + uiSnapshotId + '"]').count(), 0);
    assert.equal(await page.locator('#snapshot-list option[value="' + automaticSnapshotId + '"]').count(), 0);
    await page.locator("#project-close-button").click();
    process.stdout.write("PASS snapshot UI delete: selected copies require confirmation; older snapshots and the project survive.\\n");


    const backupOnlyDeleteGuard = await page.evaluate(async () => {
      const storageKey = "wordwaifu.delete-test.local-only";
      const databaseName = "wordwaifu.delete-test.local-only";
      const projectId = "backup-only-project";
      const backupProject = {
        schemaVersion: 1,
        project: { id: projectId, name: "Solo respaldo", description: "" },
        locations: [], characters: [], events: [], organizations: [], relationships: [], stories: [],
        settings: { time: "now" }
      };
      localStorage.setItem(storageKey, JSON.stringify(backupProject));
      const repository = new window.WordWaifuProjectRepository.ProjectRepository({ storageKey, databaseName });
      const catalog = await repository.listProjects();
      let rejection = "";
      try { await repository.deleteProject(projectId); } catch (error) { rejection = error.message; }
      const backupRetained = repository.readBackup().project?.project.id === projectId;
      repository.close();
      await new Promise((resolve, reject) => {
        const request = indexedDB.deleteDatabase(databaseName);
        request.onsuccess = resolve;
        request.onerror = () => reject(request.error || new Error("Backup-only test database cleanup failed."));
        request.onblocked = () => reject(new Error("Backup-only test database cleanup was blocked."));
      });
      localStorage.removeItem(storageKey);
      return { candidateSource: catalog.find((item) => item.projectId === projectId)?.source, rejection, backupRetained };
    });
    assert.equal(backupOnlyDeleteGuard.candidateSource, "localStorage");
    assert.match(backupOnlyDeleteGuard.rejection, /no tiene un registro verificado en IndexedDB/);
    assert.equal(backupOnlyDeleteGuard.backupRetained, true);
    process.stdout.write("PASS project delete guard: localStorage-only candidate cannot be falsely reported as deleted.\n");

    await page.locator("#manage-projects-button").click();
    await page.locator("#project-dialog").waitFor({state:"visible"});
    await page.locator("#project-list").selectOption("project-asteria");
    await page.locator("#create-project-name").fill("Universo Multiverso QA");
    await page.locator("#project-create-button").click();
    await page.waitForFunction(() => {
      const name = document.querySelector("#project-name")?.textContent || "";
      const status = document.querySelector("#project-list-status")?.textContent || "";
      return name === "Universo Multiverso QA" || status.includes("No se pudo crear el proyecto:");
    }, { timeout: 8000 });
    assert.equal(
      await page.locator("#project-name").innerText(),
      "Universo Multiverso QA",
      "Project creation failed: " + await page.locator("#project-list-status").innerText()
    );
    const createdUniverse = await page.evaluate(async () => {
      const repository = new window.WordWaifuProjectRepository.ProjectRepository();
      const active = await repository.read("metadata", "activeProjectId");
      const catalog = await repository.listProjects();
      repository.close();
      return { id: active?.value || null, name: catalog.find((item) => item.projectId === active?.value)?.name || null, ids: catalog.map((item) => item.projectId), names: catalog.map((item) => item.name) };
    });
    assert.ok(createdUniverse.id && createdUniverse.id !== "project-asteria", "New projects need distinct stable IDs.");
    assert.ok(createdUniverse.ids.includes("project-asteria"), "The original universe must remain in the catalog.");
    assert.ok(createdUniverse.ids.includes(createdUniverse.id), "The new universe must be listed after persistence.");
    assert.ok(createdUniverse.names.includes("Universo Multiverso QA"));
    process.stdout.write("PASS project catalog/create: distinct project IDs coexist in IndexedDB.\n");

    await page.locator("#manage-projects-button").click();
    await page.locator("#project-list").selectOption(createdUniverse.id);
    const projectDeletionSnapshotId = await page.evaluate(async (projectId) => {
      const repository = new window.WordWaifuProjectRepository.ProjectRepository();
      const project = await repository.getProject(projectId);
      const snapshot = await repository.createSnapshot(project, { reason: "project-delete-policy-test" });
      repository.close();
      return snapshot.snapshotId;
    }, createdUniverse.id);
    assert.ok(projectDeletionSnapshotId, "Precondition: a snapshot exists for the project targeted for deletion.");

    assert.equal(await page.locator("#project-delete-button").isDisabled(), true, "The active project must not expose deletion.");
    const activeDeleteGuard = await page.evaluate(async (projectId) => {
      const repository = new window.WordWaifuProjectRepository.ProjectRepository();
      let rejection = "";
      try { await repository.deleteProject(projectId); } catch (error) { rejection = error.message; }
      const active = await repository.read("metadata", "activeProjectId");
      const record = await repository.read("projects", projectId);
      repository.close();
      return { rejection, activeId: active?.value, recordId: record?.projectId };
    }, createdUniverse.id);
    assert.match(activeDeleteGuard.rejection, /No se puede borrar el proyecto activo/);
    assert.equal(activeDeleteGuard.activeId, createdUniverse.id);
    assert.equal(activeDeleteGuard.recordId, createdUniverse.id);
    process.stdout.write("PASS project delete guard: active universe is blocked at UI and repository layers.\n");
    await page.locator("#project-list").selectOption("project-asteria");
    await page.locator("#project-open-button").click();
    await page.locator("#project-name").getByText("Las Crónicas de Asteria").waitFor();
    assert.equal(await page.locator("#character-count").innerText(), "4");
    const activeDemoProject = await page.evaluate(async () => {
      const repository = new window.WordWaifuProjectRepository.ProjectRepository();
      const active = await repository.read("metadata", "activeProjectId");
      repository.close();
      return active?.value;
    });
    assert.equal(activeDemoProject, "project-asteria");
    process.stdout.write("PASS project switch: existing universe restored and active pointer follows its ID.\n");

    // Two separate universes may legally contain the same entity ID.
    const multiverseSearchFixture = await page.evaluate(async (projectId) => {
      const repository = new window.WordWaifuProjectRepository.ProjectRepository();
      const project = await repository.getProject(projectId);
      project.locations = [];
      project.characters = [{
        id: "char-mira", name: "Mira de Niebla", age: 22, species: "Humana", role: "Investigadora",
        personality: ["Curiosa"], description: "Busca archivos escondidos entre universos.",
        motivation: "Encontrar testimonios perdidos.", flaw: "No comparte todos sus hallazgos.",
        locationHistory: [], relationships: [], status: "canon"
      }];
      project.events = [];
      project.organizations = [];
      project.relationships = [];
      project.stories = [];
      const db = await repository.open();
      await new Promise((resolve, reject) => {
        const tx = db.transaction("projects", "readwrite");
        tx.objectStore("projects").put({ projectId, data: project });
        tx.oncomplete = resolve;
        tx.onerror = () => reject(tx.error || new Error("Master search fixture write failed."));
        tx.onabort = () => reject(tx.error || new Error("Master search fixture was aborted."));
      });
      const active = await repository.read("metadata", "activeProjectId");
      repository.close();
      return { projectId, activeId: active?.value || null, characterId: project.characters[0].id };
    }, createdUniverse.id);
    assert.equal(multiverseSearchFixture.activeId, "project-asteria", "The fixture must not change the active project.");
    const masterSearchApiEvidence = await page.evaluate(async () => {
      const repository = new window.WordWaifuProjectRepository.ProjectRepository();
      const report = await repository.searchAcrossProjects("Mira", { entityType: "character" });
      repository.close();
      return {
        complete: report.complete, totalMatches: report.totalMatches,
        scannedProjects: report.scannedProjects, warning: report.warning,
        results: report.results.map((item) => ({ projectId: item.projectId, name: item.name, entityId: item.entityId }))
      };
    });
    assert.equal(masterSearchApiEvidence.totalMatches, 2, "Direct multiverse search diagnostic: " + JSON.stringify(masterSearchApiEvidence));
    assert.equal(masterSearchApiEvidence.complete, true, "Search should be complete before injecting the read error: " + JSON.stringify(masterSearchApiEvidence));

    await page.locator("#manage-projects-button").click();
    await page.locator("#master-search-query").fill("Mira");
    await page.locator("#master-search-type").selectOption("character");
    await page.locator("#master-search-button").click();
    await page.waitForFunction(() => {
      const status = document.querySelector("#master-search-status")?.textContent || "";
      return status.includes("Búsqueda completa") || status.startsWith("BÚSQUEDA PARCIAL") || status.startsWith("No se pudo consultar");
    }, null, { timeout: 5000 });
    const masterSearchUiCount = await page.locator("#master-search-results .master-search-result").count();
    assert.equal(masterSearchUiCount, 2, "Master search UI result count mismatch; status: " + await page.locator("#master-search-status").innerText());
    const multiverseSearchResults = await page.locator("#master-search-results .master-search-result").evaluateAll((cards) => cards.map((card) => ({
      projectId: card.dataset.projectId, entityId: card.dataset.entityId, entityType: card.dataset.entityType, text: card.textContent
    })));
    assert.deepEqual(new Set(multiverseSearchResults.map((item) => item.projectId)), new Set(["project-asteria", createdUniverse.id]));
    assert.deepEqual(multiverseSearchResults.map((item) => item.entityId), ["char-mira", "char-mira"]);
    assert.ok(multiverseSearchResults.some((item) => item.text.includes("Mira Solenne")));
    assert.ok(multiverseSearchResults.some((item) => item.text.includes("Mira de Niebla")));
    assert.ok(multiverseSearchResults.every((item) => item.entityType === "character"));
    const afterMasterSearch = await page.evaluate(async (projectId) => {
      const repository = new window.WordWaifuProjectRepository.ProjectRepository();
      const active = await repository.read("metadata", "activeProjectId");
      const asteria = await repository.getProject("project-asteria");
      const other = await repository.getProject(projectId);
      repository.close();
      return { activeId: active?.value, asteriaCount: asteria?.characters?.length, otherCount: other?.characters?.length, otherName: other?.project?.name };
    }, createdUniverse.id);
    assert.equal(afterMasterSearch.activeId, "project-asteria");
    assert.equal(afterMasterSearch.asteriaCount, 4);
    assert.equal(afterMasterSearch.otherCount, 1);
    assert.equal(afterMasterSearch.otherName, "Universo Multiverso QA");
    assert.match(await page.locator("#master-search-status").innerText(), /Búsqueda completa/);
    process.stdout.write("PASS master index: duplicate entity IDs in separate universes return distinct project-scoped hits without changing or mutating the active project.\\n");

    // Search selected fields, not only entity names; diacritics should not block matching.
    await page.locator("#master-search-query").fill("cartografa");
    await page.locator("#master-search-type").selectOption("character");
    await page.locator("#master-search-button").click();
    await page.waitForFunction(() => document.querySelectorAll("#master-search-results .master-search-result").length === 1, null, { timeout: 5000 });
    assert.match(await page.locator("#master-search-results .master-search-result").innerText(), /Mira Solenne/);
    process.stdout.write("PASS master index selected fields: role search is accent-insensitive.\\n");

    await page.locator("#master-search-query").fill("capital");
    await page.locator("#master-search-type").selectOption("location");
    await page.locator("#master-search-button").click();
    await page.waitForFunction(() => document.querySelectorAll("#master-search-results .master-search-result").length === 1);
    assert.match(await page.locator("#master-search-results .master-search-result").innerText(), /Asteria/);
    assert.match(await page.locator("#master-search-status").innerText(), /Búsqueda completa/);
    process.stdout.write("PASS master index type filter: location tags and categories are searchable.\\n");

    await page.locator("#master-search-query").fill("termino-imposible-sin-resultados");
    await page.locator("#master-search-type").selectOption("all");
    await page.locator("#master-search-button").click();
    await page.waitForFunction(() => document.querySelector("#master-search-status")?.textContent.includes("0 coincidencia"), null, { timeout: 5000 });
    assert.match(await page.locator("#master-search-results").innerText(), /No se encontraron coincidencias/);
    assert.match(await page.locator("#master-search-status").innerText(), /Búsqueda completa/);
    process.stdout.write("PASS master index empty result: zero matches are reported only after a complete scan.\\n");

    await page.evaluate(() => {
      const prototype = window.WordWaifuProjectRepository.ProjectRepository.prototype;
      window.__masterSearchOriginalOpen = prototype.open;
      prototype.open = async function () { throw new Error("Simulated IndexedDB index read failure."); };
    });
    await page.locator("#master-search-type").selectOption("character");
    await page.locator("#master-search-query").fill("Mira");
    await page.locator("#master-search-button").click();
    await page.waitForFunction(() => document.querySelector("#master-search-status")?.textContent.includes("BÚSQUEDA PARCIAL"), null, { timeout: 5000 });
    const partialMasterResults = await page.locator("#master-search-results .master-search-result").evaluateAll((cards) => cards.map((card) => ({
      projectId: card.dataset.projectId, source: card.dataset.source, text: card.textContent
    })));
    assert.equal(partialMasterResults.length, 1, "Only the active local backup should be available when IndexedDB fails.");
    assert.equal(partialMasterResults[0].projectId, "project-asteria");
    assert.equal(partialMasterResults[0].source, "localStorage");
    assert.equal(await page.locator("#master-search-results [data-master-open]").isDisabled(), true,
      "A backup-only result must not be offered as a verified destination.");
    assert.match(await page.locator("#master-search-status").innerText(), /Simulated IndexedDB index read failure/);
    await page.evaluate(() => {
      const prototype = window.WordWaifuProjectRepository.ProjectRepository.prototype;
      prototype.open = window.__masterSearchOriginalOpen;
      delete window.__masterSearchOriginalOpen;
    });
    const activeAfterPartialSearch = await page.evaluate(async () => {
      const repository = new window.WordWaifuProjectRepository.ProjectRepository();
      const active = await repository.read("metadata", "activeProjectId");
      repository.close();
      return active?.value;
    });
    assert.equal(activeAfterPartialSearch, "project-asteria");
    process.stdout.write("PASS master index partial failure: IndexedDB read failure is explicit and never claims full coverage.\\n");

    const performMiraSearch = async () => {
      await page.locator("#master-search-query").fill("Mira");
      await page.locator("#master-search-type").selectOption("character");
      await page.locator("#master-search-button").click();
      await page.waitForFunction(() => {
        const status = document.querySelector("#master-search-status")?.textContent || "";
        return status.includes("Búsqueda completa") || status.startsWith("BÚSQUEDA PARCIAL");
      }, null, { timeout: 5000 });
    };

    // Simulate a stale search hit whose destination project was deleted after the query.
    await performMiraSearch();
    const vanishedProjectCard = page.locator('#master-search-results .master-search-result[data-project-id="' + createdUniverse.id + '"]');
    await vanishedProjectCard.evaluate((card) => { card.dataset.projectId = "project-removed-after-search"; });
    await page.locator('#master-search-results .master-search-result[data-project-id="project-removed-after-search"] [data-master-open]').click();
    await page.waitForFunction(() => (document.querySelector("#master-search-status")?.textContent || "").toLowerCase().includes("proyecto destino ya no existe"), null, { timeout: 5000 });
    const activeAfterMissingDestination = await page.evaluate(async () => {
      const repository = new window.WordWaifuProjectRepository.ProjectRepository();
      const active = await repository.read("metadata", "activeProjectId");
      repository.close();
      return active?.value;
    });
    assert.equal(activeAfterMissingDestination, "project-asteria");
    process.stdout.write("PASS master index stale destination: missing project is refused and active universe is preserved.\\n");

    // Simulate a stale entity ID from a hit cached before the record changed.
    await performMiraSearch();
    const vanishedEntityCard = page.locator('#master-search-results .master-search-result[data-project-id="project-asteria"]');
    await vanishedEntityCard.evaluate((card) => { card.dataset.entityId = "char-removed-after-search"; });
    await vanishedEntityCard.locator("[data-master-open]").click();
    await page.waitForFunction(() => (document.querySelector("#master-search-status")?.textContent || "").toLowerCase().includes("ficha exacta ya no existe"), null, { timeout: 5000 });
    const activeAfterMissingEntity = await page.evaluate(async () => {
      const repository = new window.WordWaifuProjectRepository.ProjectRepository();
      const active = await repository.read("metadata", "activeProjectId");
      repository.close();
      return active?.value;
    });
    assert.equal(activeAfterMissingEntity, "project-asteria");
    process.stdout.write("PASS master index stale entity: missing ID is refused without opening a similarly named record.\\n");

    // Simulate a target write that can only fall back to localStorage. Switching must roll back.
    await performMiraSearch();
    await page.evaluate(() => {
      const prototype = window.WordWaifuProjectRepository.ProjectRepository.prototype;
      window.__originalSaveActiveForContextOpen = prototype.saveActive;
      prototype.saveActive = async function (project) {
        if (project.project.id !== "project-asteria") return { backend: "localStorage", backupWritten: true, warning: "Simulated persistence failure." };
        return window.__originalSaveActiveForContextOpen.call(this, project);
      };
    });
    const failedSaveCard = page.locator('#master-search-results .master-search-result[data-project-id="' + createdUniverse.id + '"]');
    await failedSaveCard.locator("[data-master-open]").click();
    await page.waitForFunction(() => (document.querySelector("#master-search-status")?.textContent || "").toLowerCase().includes("no se pudo persistir y verificar"), null, { timeout: 5000 });
    const activeAfterSaveFailure = await page.evaluate(async () => {
      const repository = new window.WordWaifuProjectRepository.ProjectRepository();
      const active = await repository.read("metadata", "activeProjectId");
      repository.close();
      return active?.value;
    });
    assert.equal(activeAfterSaveFailure, "project-asteria");
    await page.evaluate(() => {
      const prototype = window.WordWaifuProjectRepository.ProjectRepository.prototype;
      prototype.saveActive = window.__originalSaveActiveForContextOpen;
      delete window.__originalSaveActiveForContextOpen;
    });
    process.stdout.write("PASS master index persistence failure: switching is rolled back to the previous universe.\\n");

    // A valid result from the active project opens its exact ID without switching universes.
    await performMiraSearch();
    const currentUniverseCard = page.locator('#master-search-results .master-search-result[data-project-id="project-asteria"]');
    await currentUniverseCard.locator("[data-master-open]").click();
    await page.locator("#details-panel h2").getByText("Mira Solenne").waitFor();
    const focusedCurrentEntity = await page.evaluate(() => ({
      tag: document.activeElement?.tagName,
      text: document.activeElement?.textContent?.trim(),
      inDetails: Boolean(document.activeElement?.closest("#details-panel"))
    }));
    assert.equal(focusedCurrentEntity.tag, "H2");
    assert.equal(focusedCurrentEntity.text, "Mira Solenne");
    assert.equal(focusedCurrentEntity.inDetails, true);
    process.stdout.write("PASS master index focus: exact active-project character receives keyboard focus.\\n");
    const activeAfterCurrentOpen = await page.evaluate(async () => {
      const repository = new window.WordWaifuProjectRepository.ProjectRepository();
      const active = await repository.read("metadata", "activeProjectId");
      repository.close();
      return active?.value;
    });
    assert.equal(activeAfterCurrentOpen, "project-asteria");
    process.stdout.write("PASS master index contextual open: active-project result focuses its exact character ID.\\n");

    // The second universe reuses the same character ID but stores a different character.
    await page.locator("#manage-projects-button").click();
    await performMiraSearch();
    const otherUniverseCard = page.locator('#master-search-results .master-search-result[data-project-id="' + createdUniverse.id + '"]');
    await otherUniverseCard.locator("[data-master-open]").click();
    await page.locator("#project-name").getByText("Universo Multiverso QA").waitFor();
    await page.locator("#details-panel h2").getByText("Mira de Niebla").waitFor();
    const focusedOtherEntity = await page.evaluate(() => ({
      tag: document.activeElement?.tagName,
      text: document.activeElement?.textContent?.trim(),
      inDetails: Boolean(document.activeElement?.closest("#details-panel"))
    }));
    assert.equal(focusedOtherEntity.tag, "H2");
    assert.equal(focusedOtherEntity.text, "Mira de Niebla");
    assert.equal(focusedOtherEntity.inDetails, true);
    process.stdout.write("PASS master index focus: exact character in a second universe receives keyboard focus.\\n");
    const activeAfterOtherOpen = await page.evaluate(async (createdId) => {
      const repository = new window.WordWaifuProjectRepository.ProjectRepository();
      const active = await repository.read("metadata", "activeProjectId");
      const original = await repository.getProject("project-asteria");
      const target = await repository.getProject(createdId);
      repository.close();
      return { activeId: active?.value, originalCharacterCount: original?.characters?.length, targetName: target?.project?.name };
    }, createdUniverse.id);
    assert.equal(activeAfterOtherOpen.activeId, createdUniverse.id);
    assert.equal(activeAfterOtherOpen.originalCharacterCount, 4);
    assert.equal(activeAfterOtherOpen.targetName, "Universo Multiverso QA");
    process.stdout.write("PASS master index contextual open: matching entity IDs in separate universes open the correct project-scoped character.\\n");

    await page.locator("#manage-projects-button").click();
    await page.locator("#project-close-button").click();

    await page.locator("#manage-projects-button").click();
    await page.locator("#project-list").selectOption(createdUniverse.id);
    await page.locator("#project-open-button").click();
    await page.locator("#project-name").getByText("Universo Multiverso QA").waitFor();
    await page.locator("#details-panel h2").getByText("Mira de Niebla").waitFor();
    const projectSwitchIntegrity = await page.evaluate(async (createdId) => {
      const repository = new window.WordWaifuProjectRepository.ProjectRepository();
      const original = await repository.getProject("project-asteria");
      const active = await repository.read("metadata", "activeProjectId");
      const selected = await repository.getProject(createdId);
      repository.close();
      return { originalCharacterCount: original?.characters?.length, activeId: active?.value, selectedId: selected?.project?.id };
    }, createdUniverse.id);
    assert.equal(projectSwitchIntegrity.originalCharacterCount, 4, "Switching projects must not overwrite the original universe.");
    assert.equal(projectSwitchIntegrity.activeId, createdUniverse.id);
    assert.equal(projectSwitchIntegrity.selectedId, createdUniverse.id);
    process.stdout.write("PASS project isolation: switching back preserves both universes and their own data.\n");

    await page.locator("#manage-projects-button").click();
    await page.locator("#project-list").selectOption("project-asteria");
    await page.locator("#project-open-button").click();
    await page.locator("#project-name").getByText("Las Crónicas de Asteria").waitFor();

    const neighborProject = await page.evaluate(async (sourceId) => {
      const repository = new window.WordWaifuProjectRepository.ProjectRepository();
      const source = await repository.getProject(sourceId);
      const neighborId = sourceId + "-neighbor";
      const neighbor = { ...source, project: { ...source.project, id: neighborId, name: "Universo Multiverso QA vecino" } };
      const db = await repository.open();
      await new Promise((resolve, reject) => {
        const tx = db.transaction("projects", "readwrite");
        tx.objectStore("projects").put({ projectId: neighborId, data: neighbor });
        tx.oncomplete = resolve;
        tx.onerror = () => reject(tx.error || new Error("Neighbor project fixture failed."));
        tx.onabort = () => reject(tx.error || new Error("Neighbor project fixture was aborted."));
      });
      repository.close();
      return { id: neighborId, name: neighbor.project.name };
    }, createdUniverse.id);

    await page.locator("#manage-projects-button").click();
    await page.locator("#project-list").selectOption(createdUniverse.id);
    assert.equal(await page.locator("#project-delete-button").isDisabled(), false, "An inactive IndexedDB project should be deletable.");
    const cancelProjectDeletePromise = page.waitForEvent("dialog");
    const cancelProjectDeleteClick = page.locator("#project-delete-button").click();
    const cancelProjectDeleteDialog = await cancelProjectDeletePromise;
    assert.equal(cancelProjectDeleteDialog.type(), "confirm");
    assert.match(cancelProjectDeleteDialog.message(), new RegExp(createdUniverse.id));
    await cancelProjectDeleteDialog.dismiss();
    await cancelProjectDeleteClick;
    const afterCancelDelete = await page.evaluate(async (ids) => {
      const repository = new window.WordWaifuProjectRepository.ProjectRepository();
      const catalog = await repository.listProjects();
      const neighbor = await repository.getProject(ids.neighbor);
      const active = await repository.read("metadata", "activeProjectId");
      repository.close();
      return { catalogIds: catalog.map((item) => item.projectId), neighborName: neighbor?.project.name, activeId: active?.value };
    }, { target: createdUniverse.id, neighbor: neighborProject.id });
    assert.ok(afterCancelDelete.catalogIds.includes(createdUniverse.id), "Dismissing confirmation must not remove the project.");
    assert.equal(afterCancelDelete.neighborName, neighborProject.name);
    assert.equal(afterCancelDelete.activeId, "project-asteria");
    process.stdout.write("PASS project delete cancel: both IDs remain intact when confirmation is dismissed.\n");

    const snapshotsBeforeTrash = await page.evaluate(async (id) => {
      const repository = new window.WordWaifuProjectRepository.ProjectRepository();
      const snapshots = await repository.listSnapshots(id);
      repository.close();
      return snapshots.length;
    }, createdUniverse.id);
    await page.locator("#project-list").selectOption(createdUniverse.id);
    const acceptProjectDeletePromise = page.waitForEvent("dialog");
    const acceptProjectDeleteClick = page.locator("#project-delete-button").click();
    const acceptProjectDeleteDialog = await acceptProjectDeletePromise;
    assert.match(acceptProjectDeleteDialog.message(), /papelera/i);
    assert.match(acceptProjectDeleteDialog.message(), /snapshots/i);
    assert.match(acceptProjectDeleteDialog.message(), new RegExp(createdUniverse.id));
    await acceptProjectDeleteDialog.accept();
    await acceptProjectDeleteClick;
    await page.waitForFunction((id) => !Array.from(document.querySelector("#project-list").options).some((option) => option.value === id), createdUniverse.id, { timeout: 8000 });
    await page.waitForFunction((id) => Array.from(document.querySelector("#trash-list").options).some((option) => option.value === id), createdUniverse.id, { timeout: 8000 });

    const afterProjectDelete = await page.evaluate(async (ids) => {
      const repository = new window.WordWaifuProjectRepository.ProjectRepository();
      const catalog = await repository.listProjects();
      const deletedRecord = await repository.read("projects", ids.target);
      const remainingSnapshots = await repository.listSnapshots(ids.target);
      const trashRecord = await repository.read("trash", ids.target);
      const neighbor = await repository.getProject(ids.neighbor);
      const active = await repository.read("metadata", "activeProjectId");
      const original = await repository.getProject("project-asteria");
      const compatibilityBackup = repository.readBackup().project;
      repository.close();
      return {
        listedTarget: catalog.some((item) => item.projectId === ids.target),
        deletedRecord: Boolean(deletedRecord),
        remainingSnapshotCount: remainingSnapshots.length,
        trashedRecord: Boolean(trashRecord),
        trashedProjectName: trashRecord?.projectData?.project?.name,
        trashedSnapshotCount: trashRecord?.snapshots?.length,
        trashFormatVersion: trashRecord?.formatVersion,
        neighborId: neighbor?.project.id,
        neighborName: neighbor?.project.name,
        activeId: active?.value,
        originalCharacterCount: original?.characters?.length,
        compatibilityBackupId: compatibilityBackup?.project?.id,
        compatibilityBackupName: compatibilityBackup?.project?.name,
        compatibilityBackupCharacters: compatibilityBackup?.characters?.length
      };
    }, { target: createdUniverse.id, neighbor: neighborProject.id });
    assert.equal(afterProjectDelete.listedTarget, false);
    assert.equal(afterProjectDelete.deletedRecord, false);
    assert.equal(afterProjectDelete.remainingSnapshotCount, 0, "Snapshots should move out of the active store with the project.");
    assert.equal(afterProjectDelete.trashedRecord, true, "Normal project deletion must move the universe to trash instead of destroying it.");
    assert.equal(afterProjectDelete.trashFormatVersion, 1, "Trash records must carry an explicit format version.");
    assert.equal(afterProjectDelete.trashedProjectName, createdUniverse.name);
    assert.equal(afterProjectDelete.trashedSnapshotCount, snapshotsBeforeTrash, "The exact snapshot collection must survive the move to trash.");
    assert.equal(afterProjectDelete.neighborId, neighborProject.id, "A similar ID must not be moved accidentally.");
    assert.equal(afterProjectDelete.neighborName, neighborProject.name);
    assert.equal(afterProjectDelete.activeId, "project-asteria", "Moving an inactive project must not change the active pointer.");
    assert.equal(afterProjectDelete.originalCharacterCount, 4, "The active universe's data must remain intact.");
    assert.equal(afterProjectDelete.compatibilityBackupId, "project-asteria", "Moving an unrelated project to trash must preserve the active project's local backup.");
    assert.equal(afterProjectDelete.compatibilityBackupName, "Las Crónicas de Asteria");
    assert.equal(afterProjectDelete.compatibilityBackupCharacters, 4, "The unrelated backup must not be replaced with the deleted project's contents.");
    process.stdout.write("PASS project trash action: exact ID moved to trash, snapshots and unrelated backup retained, neighbor and active universe preserved.\\n");
    await page.locator("#project-close-button").click();

    const initialPanel = await page.locator("#details-panel").innerHTML();
    if (!initialPanel.trim()) {
      throw new Error("Initial render diagnostic: " + JSON.stringify({ pageErrors, consoleErrors }));
    }

    // Exercise migration, recovery and fallback in isolated storage names.
    const repositoryReport = await page.evaluate(async () => {
      const api = window.WordWaifuProjectRepository;
      if (!api || typeof api.ProjectRepository !== "function") throw new Error("ProjectRepository script not loaded.");
      const storageKey = "wordwaifu.repository-test.legacy.v1";
      const databaseName = "wordwaifu.repository-test.v1";
      const seed = {
        schemaVersion: 1,
        project: { id: "repository-test-project", name: "Legacy Recovery Project", description: "Migration fixture." },
        locations: [], characters: [], events: [], organizations: [], relationships: [], stories: [],
        settings: { time: "now" }
      };
      localStorage.setItem(storageKey, JSON.stringify(seed));
      const migrationRepository = new api.ProjectRepository({ storageKey, databaseName });
      const migrated = await migrationRepository.loadActive();
      const migrationKeepsBackup = JSON.parse(localStorage.getItem(storageKey)).project.name === "Legacy Recovery Project";
      const changed = { ...migrated.project, project: { ...migrated.project.project, name: "Newest Local Backup" } };
      // Simulate a close between the verified local recovery write and its IndexedDB mirror.
      localStorage.setItem(storageKey, JSON.stringify(changed));
      const recoveryRepository = new api.ProjectRepository({ storageKey, databaseName });
      const recovered = await recoveryRepository.loadActive();
      const verificationRepository = new api.ProjectRepository({ storageKey, databaseName });
      const verified = await verificationRepository.loadActive();

      const memory = new Map();
      const fallbackStorage = {
        getItem: (key) => memory.has(key) ? memory.get(key) : null,
        setItem: (key, value) => memory.set(key, String(value))
      };
      const fallbackRepository = new api.ProjectRepository({ indexedDB: null, localStorage: fallbackStorage, storageKey: "fallback-project" });
      const fallbackSaved = await fallbackRepository.saveActive(seed);
      const fallbackLoaded = await fallbackRepository.loadActive();

      // A stale compatibility backup must not resurrect a project already in trash.
      const tombstoneStorageKey = "wordwaifu.repository-test.trashed.v1";
      const tombstoneDatabaseName = "wordwaifu.repository-test.trashed.v1";
      localStorage.setItem(tombstoneStorageKey, JSON.stringify(seed));
      const tombstoneRepository = new api.ProjectRepository({
        storageKey: tombstoneStorageKey,
        databaseName: tombstoneDatabaseName
      });
      const tombstoneDb = await tombstoneRepository.open();
      await new Promise((resolve, reject) => {
        const tx = tombstoneDb.transaction(["trash", "metadata"], "readwrite");
        tx.objectStore("trash").put({
          projectId: seed.project.id,
          formatVersion: 1,
          projectData: seed,
          snapshots: []
        });
        tx.objectStore("metadata").put({ key: "activeProjectId", value: seed.project.id });
        tx.oncomplete = resolve;
        tx.onerror = () => reject(tx.error || new Error("Tombstone fixture failed."));
        tx.onabort = () => reject(tx.error || new Error("Tombstone fixture was aborted."));
      });
      const tombstonedCandidate = {
        ...seed,
        project: { ...seed.project, name: "No debe resucitarse mediante escritura" }
      };
      let tombstoneSaveActiveRejected = false, tombstoneSaveActiveError = "";
      try { await tombstoneRepository.saveActive(tombstonedCandidate); }
      catch (error) { tombstoneSaveActiveRejected = true; tombstoneSaveActiveError = error.message; }
      let tombstoneDirectWriteRejected = false, tombstoneDirectWriteError = "";
      try { await tombstoneRepository.write(tombstonedCandidate); }
      catch (error) { tombstoneDirectWriteRejected = true; tombstoneDirectWriteError = error.message; }
      const tombstoneLoad = await tombstoneRepository.loadActive();
      const tombstoneProject = await tombstoneRepository.read("projects", seed.project.id);
      const tombstoneCatalog = await tombstoneRepository.listProjects();
      const tombstoneBackup = JSON.parse(localStorage.getItem(tombstoneStorageKey));
      const tombstoneBackupPreserved = tombstoneBackup.project.name === seed.project.name;

      // Simulate a trash move winning after saveActive's preflight but before its write transaction.
      const raceStorageKey = "wordwaifu.repository-test.race.v1";
      const raceDatabaseName = "wordwaifu.repository-test.race.v1";
      const raceSeed = {
        ...seed,
        project: { ...seed.project, id: "repository-race-project", name: "Respaldo previo intacto" }
      };
      localStorage.setItem(raceStorageKey, JSON.stringify(raceSeed));
      const raceRepository = new api.ProjectRepository({ storageKey: raceStorageKey, databaseName: raceDatabaseName });
      const originalRaceWrite = raceRepository.write.bind(raceRepository);
      raceRepository.write = async function (candidate) {
        const db = await this.open();
        await new Promise((resolve, reject) => {
          const tx = db.transaction(["trash"], "readwrite");
          tx.objectStore("trash").put({
            projectId: candidate.project.id, formatVersion: 1,
            projectData: candidate, snapshots: []
          });
          tx.oncomplete = resolve;
          tx.onerror = () => reject(tx.error || new Error("Race tombstone fixture failed."));
          tx.onabort = () => reject(tx.error || new Error("Race tombstone fixture aborted."));
        });
        return originalRaceWrite(candidate);
      };
      let raceSaveRejected = false;
      try {
        await raceRepository.saveActive({
          ...raceSeed, project: { ...raceSeed.project, name: "No debe quedar como respaldo fantasma" }
        });
      } catch (error) { raceSaveRejected = error.code === "PROJECT_IN_TRASH"; }
      const raceBackup = JSON.parse(localStorage.getItem(raceStorageKey));
      const raceBackupRestored = raceBackup.project.name === "Respaldo previo intacto";

      migrationRepository.close();
      recoveryRepository.close();
      verificationRepository.close();
      fallbackRepository.close();
      tombstoneRepository.close();
      raceRepository.close();
      await new Promise((resolve, reject) => {
        const request = indexedDB.deleteDatabase(raceDatabaseName);
        request.onsuccess = resolve;
        request.onerror = () => reject(request.error || new Error("Race test database cleanup failed."));
        request.onblocked = () => reject(new Error("Race test database cleanup was blocked."));
      });
      localStorage.removeItem(raceStorageKey);
      await new Promise((resolve, reject) => {
        const request = indexedDB.deleteDatabase(databaseName);
        request.onsuccess = resolve;
        request.onerror = () => reject(request.error || new Error("Test database cleanup failed."));
        request.onblocked = () => reject(new Error("Test database cleanup was blocked."));
      });
      localStorage.removeItem(storageKey);
      localStorage.removeItem(tombstoneStorageKey);
      await new Promise((resolve, reject) => {
        const request = indexedDB.deleteDatabase(tombstoneDatabaseName);
        request.onsuccess = resolve;
        request.onerror = () => reject(request.error || new Error("Tombstone test database cleanup failed."));
        request.onblocked = () => reject(new Error("Tombstone test database cleanup was blocked."));
      });
      return {
        migrationBackend: migrated.backend, migrated: migrated.migrated, migrationKeepsBackup,
        recoveryBackend: recovered.backend, recoveredBackup: recovered.recoveredBackup,
        verifiedName: verified.project && verified.project.project.name,
        fallbackBackend: fallbackSaved.backend, fallbackLoadedName: fallbackLoaded.project && fallbackLoaded.project.project.name,
        tombstoneLoadReturnedProject: Boolean(tombstoneLoad.project),
        tombstoneSaveActiveRejected, tombstoneSaveActiveError,
        tombstoneDirectWriteRejected, tombstoneDirectWriteError,
        tombstoneProjectWasNotResurrected: !tombstoneProject,
        tombstoneCatalogExcludedProject: !tombstoneCatalog.some((item) => item.projectId === seed.project.id),
        tombstoneBackupPreserved,
        raceSaveRejected, raceBackupRestored,
        tombstoneWarning: tombstoneLoad.warning
      };
    });
    assert.equal(repositoryReport.migrationBackend, "indexeddb");
    assert.equal(repositoryReport.migrated, true);
    assert.equal(repositoryReport.migrationKeepsBackup, true, "Migration must keep the localStorage recovery copy.");
    assert.equal(repositoryReport.recoveryBackend, "indexeddb");
    assert.equal(repositoryReport.recoveredBackup, true, "A newer local copy must repair stale IndexedDB.");
    assert.equal(repositoryReport.verifiedName, "Newest Local Backup");
    assert.equal(repositoryReport.fallbackBackend, "localStorage");
    assert.equal(repositoryReport.fallbackLoadedName, "Legacy Recovery Project");
    assert.equal(repositoryReport.tombstoneLoadReturnedProject, false, "A tombstoned active project must not load from its stale backup.");
    assert.equal(repositoryReport.tombstoneSaveActiveRejected, true, "saveActive must reject a project ID in trash before touching local backup.");
    assert.match(repositoryReport.tombstoneSaveActiveError, /está en la papelera/i);
    assert.equal(repositoryReport.tombstoneDirectWriteRejected, true, "The IndexedDB transaction must reject writes that race with a trash move.");
    assert.match(repositoryReport.tombstoneDirectWriteError, /está en la papelera/i);
    assert.equal(repositoryReport.tombstoneProjectWasNotResurrected, true, "Startup must not recreate a project that has a trash record.");
    assert.equal(repositoryReport.tombstoneCatalogExcludedProject, true, "A tombstoned project must remain absent from the normal catalog.");
    assert.equal(repositoryReport.tombstoneBackupPreserved, true, "Rejected writes must not replace the compatibility backup for a tombstoned ID.");
    assert.equal(repositoryReport.raceSaveRejected, true, "A tombstone created after preflight must reject the racing save.");
    assert.equal(repositoryReport.raceBackupRestored, true, "A racing tombstone must restore the exact previous compatibility backup.");
    assert.match(repositoryReport.tombstoneWarning, /papelera/i);
    process.stdout.write("PASS repository migration: localStorage stays as backup until IndexedDB is verified.\\n");
    process.stdout.write("PASS repository recovery: newest local backup repairs stale IndexedDB.\\n");
    process.stdout.write("PASS repository fallback: localStorage works when IndexedDB is unavailable.\\n");

    // A local-storage cleanup failure must never be reported as a permanent delete.
    const trashFailureReport = await page.evaluate(async () => {
      const api = window.WordWaifuProjectRepository;
      const source = JSON.parse(localStorage.getItem("wordwaifu.project.v1"));
      const candidate = JSON.parse(JSON.stringify(source));
      candidate.project = { ...candidate.project, id: "trash-failure-" + Date.now().toString(36), name: "Universo Respaldo Bloqueado" };
      const backupMemory = new Map([["trash-failure-backup", JSON.stringify(candidate)]]);
      const failingStorage = {
        getItem: (key) => backupMemory.has(key) ? backupMemory.get(key) : null,
        setItem: (key, value) => backupMemory.set(key, String(value)),
        removeItem: () => { throw new Error("simulated storage cleanup denial"); }
      };
      const databaseName = "wordwaifu.trash-failure-test." + Date.now().toString(36);
      const repository = new api.ProjectRepository({
        databaseName,
        storageKey: "trash-failure-backup",
        localStorage: failingStorage
      });
      const db = await repository.open();
      await new Promise((resolve, reject) => {
        const tx = db.transaction("projects", "readwrite");
        tx.objectStore("projects").put({ projectId: candidate.project.id, data: candidate });
        tx.oncomplete = resolve;
        tx.onerror = () => reject(tx.error || new Error("Could not seed failure-test project."));
        tx.onabort = () => reject(tx.error || new Error("Failure-test seed aborted."));
      });
      const move = await repository.moveProjectToTrash(candidate.project.id);
      let permanentDeleteRejected = false;
      try { await repository.permanentlyDeleteTrashedProject(candidate.project.id); }
      catch (error) { permanentDeleteRejected = /no se pudo retirar el respaldo local/i.test(error.message); }
      const trashRecord = await repository.read("trash", candidate.project.id);
      const activeRecord = await repository.read("projects", candidate.project.id);
      repository.close();
      await new Promise((resolve, reject) => {
        const request = indexedDB.deleteDatabase(databaseName);
        request.onsuccess = resolve;
        request.onerror = () => reject(request.error || new Error("Failure-test database cleanup failed."));
        request.onblocked = () => reject(new Error("Failure-test database cleanup blocked."));
      });
      return {
        moved: move.moved,
        backupCleanupWarning: !move.backupRemoved && Boolean(move.warning),
        permanentDeleteRejected,
        trashRecordPreserved: Boolean(trashRecord),
        activeRecordRemoved: !activeRecord,
        backupPreserved: backupMemory.has("trash-failure-backup")
      };
    });
    assert.equal(trashFailureReport.moved, true, "Moving to trash should retain the durable tombstone even if legacy-backup cleanup fails.");
    assert.equal(trashFailureReport.backupCleanupWarning, true, "Backup cleanup failure must be surfaced as a warning.");
    assert.equal(trashFailureReport.permanentDeleteRejected, true, "Permanent deletion must reject if a matching backup cannot be removed.");
    assert.equal(trashFailureReport.trashRecordPreserved, true, "A failed permanent delete must preserve the trash entry.");
    assert.equal(trashFailureReport.activeRecordRemoved, true);
    assert.equal(trashFailureReport.backupPreserved, true, "The failing storage fixture must not silently drop the backup.");
    process.stdout.write("PASS trash failure boundary: backup cleanup denial preserves trash and rejects permanent deletion.\\n");

    // Corrupt a trash snapshot deliberately to force an abort after the project and first snapshot have been queued.
    const trashAbortReport = await page.evaluate(async () => {
      const api = window.WordWaifuProjectRepository;
      const source = JSON.parse(localStorage.getItem("wordwaifu.project.v1"));
      const candidate = JSON.parse(JSON.stringify(source));
      candidate.project = { ...candidate.project, id: "trash-abort-" + Date.now().toString(36), name: "Universo Transacción Atómica" };
      const projectId = candidate.project.id;
      const firstSnapshotId = "trash-abort-snapshot-" + Date.now().toString(36);
      const databaseName = "wordwaifu.trash-abort-test." + Date.now().toString(36);
      const repository = new api.ProjectRepository({ databaseName, localStorage: null });
      const db = await repository.open();
      await new Promise((resolve, reject) => {
        const tx = db.transaction("trash", "readwrite");
        tx.objectStore("trash").put({
          projectId,
          deletedAt: new Date().toISOString(),
          projectData: candidate,
          snapshots: [
            { snapshotId: firstSnapshotId, projectId, createdAt: new Date().toISOString(), data: candidate },
            { snapshotId: "trash-abort-invalid", projectId: "wrong-project-id", createdAt: new Date().toISOString(), data: candidate }
          ]
        });
        tx.oncomplete = resolve;
        tx.onerror = () => reject(tx.error || new Error("Could not seed atomic-restore fixture."));
        tx.onabort = () => reject(tx.error || new Error("Atomic-restore fixture seed aborted."));
      });
      let restoreRejected = false;
      try { await repository.restoreTrashedProject(projectId); }
      catch (error) { restoreRejected = /snapshot inconsistente/i.test(error.message); }
      const projectAfterAbort = await repository.read("projects", projectId);
      const firstSnapshotAfterAbort = await repository.read("snapshots", firstSnapshotId);
      const trashAfterAbort = await repository.read("trash", projectId);
      repository.close();
      await new Promise((resolve, reject) => {
        const request = indexedDB.deleteDatabase(databaseName);
        request.onsuccess = resolve;
        request.onerror = () => reject(request.error || new Error("Atomic-restore database cleanup failed."));
        request.onblocked = () => reject(new Error("Atomic-restore database cleanup blocked."));
      });
      return {
        restoreRejected,
        projectWriteRolledBack: !projectAfterAbort,
        snapshotWriteRolledBack: !firstSnapshotAfterAbort,
        trashPreserved: Boolean(trashAfterAbort)
      };
    });
    assert.equal(trashAbortReport.restoreRejected, true, "An inconsistent snapshot must abort restoration.");
    assert.equal(trashAbortReport.projectWriteRolledBack, true, "An aborted restoration must not leave a partial project.");
    assert.equal(trashAbortReport.snapshotWriteRolledBack, true, "An aborted restoration must roll back earlier snapshot writes in the same transaction.");
    assert.equal(trashAbortReport.trashPreserved, true, "An aborted restoration must keep the original trash entry recoverable.");
    process.stdout.write("PASS trash atomicity: malformed snapshot abort rolls back project and snapshots, preserving trash.\\n");

    // A malformed local backup cannot be safely assigned to any project ID.
    const malformedBackupReport = await page.evaluate(async () => {
      const api = window.WordWaifuProjectRepository;
      const source = JSON.parse(localStorage.getItem("wordwaifu.project.v1"));
      const candidate = JSON.parse(JSON.stringify(source));
      candidate.project = { ...candidate.project, id: "trash-malformed-backup-" + Date.now().toString(36), name: "Universo Respaldo Ilegible" };
      const storageKey = "trash-malformed-backup";
      const memory = new Map([[storageKey, "{not-json"]]);
      const storage = {
        getItem: (key) => memory.has(key) ? memory.get(key) : null,
        setItem: (key, value) => memory.set(key, String(value)),
        removeItem: (key) => memory.delete(key)
      };
      const databaseName = "wordwaifu.trash-malformed-test." + Date.now().toString(36);
      const repository = new api.ProjectRepository({ databaseName, storageKey, localStorage: storage });
      const db = await repository.open();
      await new Promise((resolve, reject) => {
        const tx = db.transaction("projects", "readwrite");
        tx.objectStore("projects").put({ projectId: candidate.project.id, data: candidate });
        tx.oncomplete = resolve;
        tx.onerror = () => reject(tx.error || new Error("Could not seed malformed-backup fixture."));
        tx.onabort = () => reject(tx.error || new Error("Malformed-backup seed aborted."));
      });
      const move = await repository.moveProjectToTrash(candidate.project.id);
      let permanentDeleteRejected = false;
      try { await repository.permanentlyDeleteTrashedProject(candidate.project.id); }
      catch (error) { permanentDeleteRejected = /no se puede verificar el respaldo local/i.test(error.message); }
      const trashRecord = await repository.read("trash", candidate.project.id);
      const malformedBackupPreserved = memory.get(storageKey) === "{not-json";
      repository.close();
      await new Promise((resolve, reject) => {
        const request = indexedDB.deleteDatabase(databaseName);
        request.onsuccess = resolve;
        request.onerror = () => reject(request.error || new Error("Malformed-backup database cleanup failed."));
        request.onblocked = () => reject(new Error("Malformed-backup database cleanup blocked."));
      });
      return {
        moved: move.moved,
        warning: !move.backupRemoved && Boolean(move.warning),
        permanentDeleteRejected,
        trashPreserved: Boolean(trashRecord),
        malformedBackupPreserved
      };
    });
    assert.equal(malformedBackupReport.moved, true);
    assert.equal(malformedBackupReport.warning, true, "Malformed backup data must surface a warning during reversible trash movement.");
    assert.equal(malformedBackupReport.permanentDeleteRejected, true, "Permanent deletion must stop if a local backup cannot be parsed and attributed.");
    assert.equal(malformedBackupReport.trashPreserved, true);
    assert.equal(malformedBackupReport.malformedBackupPreserved, true, "Unknown backup data must not be silently removed.");
    process.stdout.write("PASS trash malformed backup: unknown backup preserved and permanent deletion blocked.\\n");

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

    // Blob URLs must stay alive through the initiating click task. Firefox has
    // reported that synchronous revokeObjectURL() can prevent the download.
    await page.evaluate(() => {
      const nativeRevoke = URL.revokeObjectURL.bind(URL);
      window.__wordWaifuOriginalRevokeObjectURL = URL.revokeObjectURL;
      window.__wordWaifuRevokeCalls = [];
      window.__wordWaifuRevokeDuringClick = false;
      window.__wordWaifuExportClickActive = false;
      URL.revokeObjectURL = function(url) {
        if (window.__wordWaifuExportClickActive) window.__wordWaifuRevokeDuringClick = true;
        window.__wordWaifuRevokeCalls.push(url);
        return nativeRevoke(url);
      };
      document.querySelector("#export-button").addEventListener("click", () => {
        window.__wordWaifuExportClickActive = true;
        queueMicrotask(() => { window.__wordWaifuExportClickActive = false; });
      }, { capture: true });
    });
    const downloadPromise = page.waitForEvent("download");
    await page.locator("#export-button").click();
    const download = await downloadPromise;
    await page.waitForFunction(() => (window.__wordWaifuRevokeCalls || []).length === 1, null, { timeout: 5000 });
    const revocationTiming = await page.evaluate(() => ({
      duringClick: window.__wordWaifuRevokeDuringClick,
      calls: window.__wordWaifuRevokeCalls.length
    }));
    assert.equal(revocationTiming.duringClick, false, "Export blob URL must not be revoked inside the initiating click task.");
    assert.equal(revocationTiming.calls, 1, "Export blob URL must be revoked after the download is scheduled.");
    await page.evaluate(() => {
      URL.revokeObjectURL = window.__wordWaifuOriginalRevokeObjectURL;
      delete window.__wordWaifuOriginalRevokeObjectURL;
      delete window.__wordWaifuRevokeCalls;
      delete window.__wordWaifuRevokeDuringClick;
      delete window.__wordWaifuExportClickActive;
    });
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
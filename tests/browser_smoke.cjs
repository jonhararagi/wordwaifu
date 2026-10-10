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
    await page.waitForFunction(() => {
      const shell = document.querySelector(".app-shell");
      return Boolean(shell && !shell.inert);
    }, { timeout: 5000 });

    assert.match(await page.title(), /WordWaifu/);
    assert.equal(await page.locator("#project-name").innerText(), "Las Crónicas de Asteria");
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
        rollbackSnapshotExists, localBackupMatches, deletedProjectB, snapshotBRemovedWithProject, projectBRemoved
      };
    });
    assert.equal(snapshotRepositoryEvidence.migration.version, 3, "The trash store must upgrade IndexedDB v1/v2 without losing existing snapshots.");
    assert.equal(snapshotRepositoryEvidence.migration.hasSnapshots, true);
    assert.equal(snapshotRepositoryEvidence.migration.hasProjects, true);
    assert.equal(snapshotRepositoryEvidence.migration.hasMetadata, true);
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
    process.stdout.write("PASS snapshot migration/API: v1->v2 is non-destructive; per-project isolation, invalid-snapshot rejection, guarded restore, rollback snapshot and selective delete work.\\n");

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
      return { id: active?.value || null, ids: catalog.map((item) => item.projectId), names: catalog.map((item) => item.name) };
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

    await page.locator("#project-list").selectOption(createdUniverse.id);
    const acceptProjectDeletePromise = page.waitForEvent("dialog");
    const acceptProjectDeleteClick = page.locator("#project-delete-button").click();
    const acceptProjectDeleteDialog = await acceptProjectDeletePromise;
    assert.match(acceptProjectDeleteDialog.message(), /Solo se moverá este ID exacto/);
    assert.match(acceptProjectDeleteDialog.message(), /snapshots se conservarán/i);
    assert.doesNotMatch(acceptProjectDeleteDialog.message(), /no existe recuperación posterior/i);
    await acceptProjectDeleteDialog.accept();
    await acceptProjectDeleteClick;
    await page.waitForFunction((id) => !Array.from(document.querySelector("#project-list").options).some((option) => option.value === id), createdUniverse.id, { timeout: 8000 });
    await page.waitForFunction((id) => Array.from(document.querySelector("#project-trash-list").options).some((option) => option.value === id), createdUniverse.id, { timeout: 8000 });

    const afterTrash = await page.evaluate(async (ids) => {
      const repository = new window.WordWaifuProjectRepository.ProjectRepository();
      const catalog = await repository.listProjects();
      const trashed = await repository.read("trash", ids.target);
      const snapshots = await repository.listSnapshots(ids.target);
      const neighbor = await repository.getProject(ids.neighbor);
      const active = await repository.read("metadata", "activeProjectId");
      const original = await repository.getProject("project-asteria");
      repository.close();
      return {
        listedTarget: catalog.some((item) => item.projectId === ids.target),
        trashedId: trashed?.projectId,
        trashedDataId: trashed?.data?.project?.id,
        snapshotCount: snapshots.length,
        neighborId: neighbor?.project.id,
        neighborName: neighbor?.project.name,
        activeId: active?.value,
        originalCharacterCount: original?.characters?.length
      };
    }, { target: createdUniverse.id, neighbor: neighborProject.id });
    assert.equal(afterTrash.listedTarget, false, "A trashed universe must disappear from the regular catalogue.");
    assert.equal(afterTrash.trashedId, createdUniverse.id);
    assert.equal(afterTrash.trashedDataId, createdUniverse.id, "Trash data must retain the exact project ID.");
    assert.ok(afterTrash.snapshotCount >= 1, "Trash must preserve snapshots until explicit permanent deletion.");
    assert.equal(afterTrash.neighborId, neighborProject.id, "A similar project ID must remain intact.");
    assert.equal(afterTrash.neighborName, neighborProject.name);
    assert.equal(afterTrash.activeId, "project-asteria");
    assert.equal(afterTrash.originalCharacterCount, 4);
    process.stdout.write("PASS project trash: exact ID is hidden from catalogue and snapshots are retained.\\n");

    await page.locator("#project-trash-list").selectOption(createdUniverse.id);
    const restoreTrashPromise = page.waitForEvent("dialog");
    const restoreTrashClick = page.locator("#project-trash-restore-button").click();
    const restoreTrashDialog = await restoreTrashPromise;
    assert.match(restoreTrashDialog.message(), /identidad original/i);
    await restoreTrashDialog.accept();
    await restoreTrashClick;
    await page.waitForFunction((id) => Array.from(document.querySelector("#project-list").options).some((option) => option.value === id), createdUniverse.id, { timeout: 8000 });
    const afterTrashRestore = await page.evaluate(async (id) => {
      const repository = new window.WordWaifuProjectRepository.ProjectRepository();
      const project = await repository.read("projects", id);
      const trash = await repository.read("trash", id);
      const snapshots = await repository.listSnapshots(id);
      repository.close();
      return {
        projectId: project?.projectId,
        dataId: project?.data?.project?.id,
        trashed: Boolean(trash),
        snapshotCount: snapshots.length,
        name: project?.data?.project?.name
      };
    }, createdUniverse.id);
    assert.equal(afterTrashRestore.projectId, createdUniverse.id);
    assert.equal(afterTrashRestore.dataId, createdUniverse.id);
    assert.equal(afterTrashRestore.trashed, false);
    assert.ok(afterTrashRestore.snapshotCount >= 1);
    assert.equal(afterTrashRestore.name, "Universo Multiverso QA");
    process.stdout.write("PASS project restore: original universe ID and snapshots return to the catalogue.\\n");

    // Trash it again, then explicitly purge it to prove the two deletion levels differ.
    await page.locator("#project-list").selectOption(createdUniverse.id);
    const retrashDialogPromise = page.waitForEvent("dialog");
    const retrashClick = page.locator("#project-delete-button").click();
    const retrashDialog = await retrashDialogPromise;
    await retrashDialog.accept();
    await retrashClick;
    await page.waitForFunction((id) => Array.from(document.querySelector("#project-trash-list").options).some((option) => option.value === id), createdUniverse.id, { timeout: 8000 });

    await page.locator("#project-trash-list").selectOption(createdUniverse.id);
    const purgeDialogPromise = page.waitForEvent("dialog");
    const purgeClick = page.locator("#project-trash-purge-button").click();
    const purgeDialog = await purgeDialogPromise;
    assert.match(purgeDialog.message(), /BORRADO PERMANENTE/);
    assert.match(purgeDialog.message(), /snapshot/i);
    await purgeDialog.accept();
    await purgeClick;
    await page.waitForFunction((id) => !Array.from(document.querySelector("#project-trash-list").options).some((option) => option.value === id), createdUniverse.id, { timeout: 8000 });

    const afterPurge = await page.evaluate(async (ids) => {
      const repository = new window.WordWaifuProjectRepository.ProjectRepository();
      const catalog = await repository.listProjects();
      const project = await repository.read("projects", ids.target);
      const trash = await repository.read("trash", ids.target);
      const snapshots = await repository.listSnapshots(ids.target);
      const neighbor = await repository.getProject(ids.neighbor);
      const active = await repository.read("metadata", "activeProjectId");
      repository.close();
      return {
        listedTarget: catalog.some((item) => item.projectId === ids.target),
        projectExists: Boolean(project),
        trashExists: Boolean(trash),
        snapshotCount: snapshots.length,
        neighborId: neighbor?.project.id,
        neighborName: neighbor?.project.name,
        activeId: active?.value
      };
    }, { target: createdUniverse.id, neighbor: neighborProject.id });
    assert.equal(afterPurge.listedTarget, false);
    assert.equal(afterPurge.projectExists, false);
    assert.equal(afterPurge.trashExists, false);
    assert.equal(afterPurge.snapshotCount, 0, "Permanent purge must delete snapshots belonging to the exact target ID.");
    assert.equal(afterPurge.neighborId, neighborProject.id);
    assert.equal(afterPurge.neighborName, neighborProject.name);
    assert.equal(afterPurge.activeId, "project-asteria");
    process.stdout.write("PASS project permanent purge: project, trash entry and snapshots removed by exact ID; neighbors survive.\\n");
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

      migrationRepository.close();
      recoveryRepository.close();
      verificationRepository.close();
      fallbackRepository.close();
      await new Promise((resolve, reject) => {
        const request = indexedDB.deleteDatabase(databaseName);
        request.onsuccess = resolve;
        request.onerror = () => reject(request.error || new Error("Test database cleanup failed."));
        request.onblocked = () => reject(new Error("Test database cleanup was blocked."));
      });
      localStorage.removeItem(storageKey);
      return {
        migrationBackend: migrated.backend, migrated: migrated.migrated, migrationKeepsBackup,
        recoveryBackend: recovered.backend, recoveredBackup: recovered.recoveredBackup,
        verifiedName: verified.project && verified.project.project.name,
        fallbackBackend: fallbackSaved.backend, fallbackLoadedName: fallbackLoaded.project && fallbackLoaded.project.project.name
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
    process.stdout.write("PASS repository migration: localStorage stays as backup until IndexedDB is verified.\\n");
    process.stdout.write("PASS repository recovery: newest local backup repairs stale IndexedDB.\\n");
    process.stdout.write("PASS repository fallback: localStorage works when IndexedDB is unavailable.\\n");

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
    // Keep this fixture link in the canonical graph; character-local arrays are only a compatibility projection.
    referenceFixture.relationships = (referenceFixture.relationships || []).concat([{
      id:"wf-test-relationship",name:"Vínculo de prueba",sourceCharacterId:"wf-test-resident",
      targetCharacterId:"wf-test-witness",relationshipType:"friendship",
      description:"Fixture para comprobar la limpieza de relaciones al borrar un personaje.",status:"canon"
    }]);
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
    await page.waitForFunction((id) => !JSON.parse(localStorage.getItem("wordwaifu.project.v1")).locations.some((item) => item.id === id), targetLocationId, { timeout: 5000 });
    await assertSnapshotContains(targetLocationId, "locations", "before-delete-location");

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
    const characterDeleteDialogType = characterDeleteDialog.type();
    const characterDeleteDialogMessage = characterDeleteDialog.message();
    // Resolve the dialog before assertions so a mismatch cannot strand Chromium.
    await characterDeleteDialog.accept();
    await characterDeleteClick;
    await page.waitForFunction((id) => !JSON.parse(localStorage.getItem("wordwaifu.project.v1")).characters.some((item) => item.id === id), "wf-test-resident", { timeout: 5000 });
    await assertSnapshotContains("wf-test-resident", "characters", "before-delete-character");
    assert.equal(characterDeleteDialogType, "confirm", characterDeleteDialogMessage);
    assert.match(characterDeleteDialogMessage, /relación\(es\)/);
    assert.match(characterDeleteDialogMessage, /referencia\(s\) en lugares/);
    assert.match(characterDeleteDialogMessage, /referencia\(s\) en acontecimientos/);
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
    await page.waitForFunction((id) => !JSON.parse(localStorage.getItem("wordwaifu.project.v1")).events.some((item) => item.id === id), eventIdBeforeEdit, { timeout: 5000 });
    await assertSnapshotContains(eventIdBeforeEdit, "events", "before-delete-event");
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
    await page.waitForFunction((id) => !JSON.parse(localStorage.getItem("wordwaifu.project.v1")).organizations.some((item) => item.id === id), organizationIdBeforeEdit, { timeout: 5000 });
    await assertSnapshotContains(organizationIdBeforeEdit, "organizations", "before-delete-organization");
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

    // Dedicated relationship CRUD: canonical records stay synchronized with old character-local lists.
    await page.locator('.nav-item[data-view="relationships"]').click();
    await page.locator("#add-button").click();
    assert.equal(await page.locator("#entity-type").inputValue(), "relationship");
    await page.locator("#entity-name").fill("Confianza recuperada");
    await page.locator("#relationship-source").selectOption("wf-test-witness");
    await page.locator("#relationship-target").selectOption(createdCharacter.id);
    await page.locator("#relationship-type").selectOption("friendship");
    await page.locator("#relationship-description").fill("Después de una discusión aprenden a confiar.");
    await page.locator("#relationship-status").selectOption("canon");
    await page.locator('#entity-form button[type="submit"]').click();
    await page.locator("#selected-relationship-details h2").getByText("Confianza recuperada").waitFor();
    const firstRelationship = await page.evaluate((targetId) => {
      const project = JSON.parse(localStorage.getItem("wordwaifu.project.v1"));
      return {
        relationship: project.relationships.find((item) => item.name === "Confianza recuperada"),
        source: project.characters.find((item) => item.id === "wf-test-witness"),
        target: project.characters.find((item) => item.id === targetId)
      };
    }, createdCharacter.id);
    assert.ok(firstRelationship.relationship.id.startsWith("local-relationship-"));
    assert.equal(firstRelationship.relationship.relationshipType, "friendship");
    assert.equal(firstRelationship.relationship.status, "canon");
    assert.ok(firstRelationship.source.relationships.includes(createdCharacter.id));
    assert.ok(firstRelationship.target.relationships.includes("wf-test-witness"));
    process.stdout.write("PASS relationship create: canonical record and reciprocal projection are saved.\\n");

    // Same pair + same type is blocked; a distinct type between that pair is allowed.
    await page.locator("#add-button").click();
    await page.locator("#entity-name").fill("Duplicado que no debe guardarse");
    await page.locator("#relationship-source").selectOption("wf-test-witness");
    await page.locator("#relationship-target").selectOption(createdCharacter.id);
    await page.locator("#relationship-type").selectOption("friendship");
    const duplicateRelationshipAlertPromise = page.waitForEvent("dialog");
    const duplicateRelationshipSubmit = page.locator('#entity-form button[type="submit"]').click();
    const duplicateRelationshipAlert = await duplicateRelationshipAlertPromise;
    assert.equal(duplicateRelationshipAlert.type(), "alert");
    assert.match(duplicateRelationshipAlert.message(), /Ya existe una relación/);
    await duplicateRelationshipAlert.accept();
    await duplicateRelationshipSubmit;
    assert.equal(await page.evaluate(() => JSON.parse(localStorage.getItem("wordwaifu.project.v1")).relationships.filter((item) => item.relationshipType === "friendship").length), 1);
    await page.locator("#relationship-type").selectOption("rivalry");
    await page.locator("#entity-name").fill("Rivalidad todavía viva");
    await page.locator("#relationship-description").fill("Compiten por motivos distintos.");
    await page.locator('#entity-form button[type="submit"]').click();
    await page.locator("#selected-relationship-details h2").getByText("Rivalidad todavía viva").waitFor();
    const secondRelationship = await page.evaluate(() => JSON.parse(localStorage.getItem("wordwaifu.project.v1")).relationships.find((item) => item.name === "Rivalidad todavía viva"));
    assert.ok(secondRelationship);
    process.stdout.write("PASS relationship uniqueness: duplicate pair/type rejected; another type accepted.\\n");

    const relationshipIdBeforeEdit = firstRelationship.relationship.id;
    await page.locator('[data-relationship="' + relationshipIdBeforeEdit + '"]').click();
    await page.locator("#edit-relationship-button").click();
    await page.locator("#entity-name").fill("Alianza reconstruida");
    await page.locator("#relationship-type").selectOption("alliance");
    await page.locator("#relationship-description").fill("Ahora coordinan sus esfuerzos.");
    await page.locator("#relationship-status").selectOption("canon");
    await page.locator('#entity-form button[type="submit"]').click();
    await page.locator("#selected-relationship-details h2").getByText("Alianza reconstruida").waitFor();
    const editedRelationship = await page.evaluate((id) => JSON.parse(localStorage.getItem("wordwaifu.project.v1")).relationships.find((item) => item.id === id), relationshipIdBeforeEdit);
    assert.equal(editedRelationship.id, relationshipIdBeforeEdit, "Editing a relationship must preserve its ID.");
    assert.equal(editedRelationship.relationshipType, "alliance");
    process.stdout.write("PASS relationship edit: stable ID and canonical fields update.\\n");

    await page.reload({waitUntil:"networkidle"});
    await page.locator('.nav-item[data-view="relationships"]').click();
    await page.locator('[data-relationship="' + relationshipIdBeforeEdit + '"]').click();
    await page.locator("#selected-relationship-details h2").getByText("Alianza reconstruida").waitFor();
    process.stdout.write("PASS relationship persistence: edits survive reload.\\n");

    const deleteRelationshipDialogPromise = page.waitForEvent("dialog");
    const deleteRelationshipClick = page.locator("#delete-relationship-button").click();
    const deleteRelationshipDialog = await deleteRelationshipDialogPromise;
    assert.equal(deleteRelationshipDialog.type(), "confirm");
    assert.match(deleteRelationshipDialog.message(), /Los dos personajes se conservarán/);
    await deleteRelationshipDialog.accept();
    await deleteRelationshipClick;
    await page.waitForFunction((id) => !JSON.parse(localStorage.getItem("wordwaifu.project.v1")).relationships.some((item) => item.id === id), relationshipIdBeforeEdit, { timeout: 5000 });
    await assertSnapshotContains(relationshipIdBeforeEdit, "relationships", "before-delete-relationship");
    const afterRelationshipDelete = await page.evaluate(() => JSON.parse(localStorage.getItem("wordwaifu.project.v1")));
    assert.equal(afterRelationshipDelete.relationships.some((item) => item.id === relationshipIdBeforeEdit), false);
    assert.ok(afterRelationshipDelete.relationships.some((item) => item.id === secondRelationship.id), "A relation of another type must survive.");
    assert.ok(afterRelationshipDelete.characters.some((item) => item.id === "wf-test-witness"), "The source character must survive.");
    assert.ok(afterRelationshipDelete.characters.some((item) => item.id === createdCharacter.id), "The target character must survive.");
    assert.equal(validateAndNormalizeProject(afterRelationshipDelete).valid, true, "Deleting a relationship should leave a valid graph.");
    process.stdout.write("PASS relationship delete: one edge removed; both character records survive.\\n");

    await page.reload({waitUntil:"networkidle"});
    const relationshipExportPromise = page.waitForEvent("download");
    await page.locator("#export-button").click();
    const relationshipExport = await relationshipExportPromise;
    const relationshipExportPath = await relationshipExport.path();
    const relationshipExportProject = JSON.parse(fs.readFileSync(relationshipExportPath, "utf8"));
    const relationshipExportValidation = validateAndNormalizeProject(relationshipExportProject);
    assert.equal(relationshipExportValidation.valid, true, relationshipExportValidation.errors.join("\\n"));
    assert.ok(relationshipExportProject.relationships.some((item) => item.id === secondRelationship.id));
    const relationshipImportAlertPromise = page.waitForEvent("dialog");
    const relationshipImport = page.locator("#import-file").setInputFiles(relationshipExportPath);
    const relationshipImportAlert = await relationshipImportAlertPromise;
    assert.match(relationshipImportAlert.message(), /Proyecto importado correctamente/i);
    await relationshipImportAlert.accept();
    await relationshipImport;
    assert.ok(await page.evaluate((id) => JSON.parse(localStorage.getItem("wordwaifu.project.v1")).relationships.some((item) => item.id === id), secondRelationship.id));
    process.stdout.write("PASS relationship export/import: IDs and graph survive round-trip.\\n");

    // IndexedDB must restore the app even if the local compatibility backup is absent.
    const persistedBeforeBackupRemoval = await page.evaluate(() => JSON.parse(localStorage.getItem("wordwaifu.project.v1")));
    await page.evaluate(() => localStorage.removeItem("wordwaifu.project.v1"));
    await page.reload({waitUntil:"networkidle"});
    await page.waitForFunction(() => {
      const shell = document.querySelector(".app-shell");
      return Boolean(shell && !shell.inert);
    }, { timeout: 5000 });
    assert.equal(await page.locator("#project-name").innerText(), persistedBeforeBackupRemoval.project.name);
    const databaseOnlyRecovery = await page.evaluate(async (relationshipId) => {
      const repository = new window.WordWaifuProjectRepository.ProjectRepository();
      const recovered = await repository.loadActive();
      repository.close();
      return {
        backend: recovered.backend,
        projectId: recovered.project?.project.id,
        relationshipFound: recovered.project?.relationships?.some((item) => item.id === relationshipId)
      };
    }, secondRelationship.id);
    assert.equal(databaseOnlyRecovery.backend, "indexeddb");
    assert.equal(databaseOnlyRecovery.projectId, persistedBeforeBackupRemoval.project.id);
    assert.equal(databaseOnlyRecovery.relationshipFound, true);
    process.stdout.write("PASS app persistence recovery: IndexedDB restores the current project and relationships without localStorage backup.\\n");

    // Slow consecutive IndexedDB writes to ensure the queue persists the newest state last.
    await page.locator('.nav-item[data-view="organizations"]').click();
    await page.evaluate(() => {
      const prototype = window.WordWaifuProjectRepository.ProjectRepository.prototype;
      window.__wordWaifuOriginalRepositoryWrite = prototype.write;
      prototype.write = async function (project) {
        await new Promise((resolve) => setTimeout(resolve, 150));
        return window.__wordWaifuOriginalRepositoryWrite.call(this, project);
      };
    });
    await page.locator('.nav-item[data-view="organizations"]').click();
    await page.locator("#add-button").click();
    await page.locator("#entity-name").fill("Guardado rápido A");
    await page.locator("#entity-description").fill("Primera escritura del lote.");
    await page.locator('#entity-form button[type="submit"]').click();
    await page.locator("#selected-organization-details h2").getByText("Guardado rápido A").waitFor();
    await page.locator("#add-button").click();
    await page.locator("#entity-name").fill("Guardado rápido B");
    await page.locator("#entity-description").fill("Última escritura del lote.");
    await page.locator('#entity-form button[type="submit"]').click();
    await page.locator("#selected-organization-details h2").getByText("Guardado rápido B").waitFor();
    await page.waitForFunction(() => document.querySelector("#save-status")?.textContent.includes("Guardado en IndexedDB"), { timeout: 5000 });
    const burstPersistence = await page.evaluate(async () => {
      const repository = new window.WordWaifuProjectRepository.ProjectRepository();
      const backup = repository.readBackup().project;
      const metadata = await repository.read("metadata", "activeProjectId");
      const record = metadata ? await repository.read("projects", metadata.value) : null;
      repository.close();
      const names = ["Guardado rápido A", "Guardado rápido B"];
      return {
        backupHasBoth: names.every((name) => backup.organizations.some((item) => item.name === name)),
        indexedDBHasBoth: Boolean(record && names.every((name) => record.data.organizations.some((item) => item.name === name))),
        backupName: backup.project.name,
        indexedDBName: record?.data?.project?.name
      };
    });
    assert.equal(burstPersistence.backupHasBoth, true);
    assert.equal(burstPersistence.indexedDBHasBoth, true, "The serialized queue must leave IndexedDB at the newest project snapshot.");
    assert.equal(burstPersistence.indexedDBName, burstPersistence.backupName);
    await page.evaluate(() => {
      const prototype = window.WordWaifuProjectRepository.ProjectRepository.prototype;
      prototype.write = window.__wordWaifuOriginalRepositoryWrite;
      delete window.__wordWaifuOriginalRepositoryWrite;
    });
    process.stdout.write("PASS persistence burst: consecutive writes leave local backup and IndexedDB at the newest snapshot.\\n");

    // A real integrated write failure must preserve the immediate local backup and report fallback honestly.
    await page.evaluate(() => {
      const prototype = window.WordWaifuProjectRepository.ProjectRepository.prototype;
      window.__wordWaifuOriginalRepositoryWrite = prototype.write;
      prototype.write = async function () { throw new Error("Simulated IndexedDB transaction failure."); };
    });
    await page.locator("#add-button").click();
    await page.locator("#entity-name").fill("Solo en respaldo local");
    await page.locator("#entity-description").fill("Este registro sobrevive a un fallo de IndexedDB.");
    await page.locator('#entity-form button[type="submit"]').click();
    await page.locator("#selected-organization-details h2").getByText("Solo en respaldo local").waitFor();
    await page.waitForFunction(() => document.querySelector("#save-status")?.textContent.includes("Respaldo local disponible"), { timeout: 5000 });
    const failedWriteEvidence = await page.evaluate(async () => {
      const backup = JSON.parse(localStorage.getItem("wordwaifu.project.v1"));
      const repository = new window.WordWaifuProjectRepository.ProjectRepository();
      const metadata = await repository.read("metadata", "activeProjectId");
      const record = metadata ? await repository.read("projects", metadata.value) : null;
      repository.close();
      return {
        backupHasNewRecord: backup.organizations.some((item) => item.name === "Solo en respaldo local"),
        indexedDBHasNewRecord: Boolean(record && record.data.organizations.some((item) => item.name === "Solo en respaldo local")),
        status: document.querySelector("#save-status").textContent,
        activeName: backup.project.name
      };
    });
    assert.equal(failedWriteEvidence.backupHasNewRecord, true);
    assert.equal(failedWriteEvidence.indexedDBHasNewRecord, false, "Injected transaction failure should leave IndexedDB unchanged.");
    assert.match(failedWriteEvidence.status, /Respaldo local disponible/);
    process.stdout.write("PASS integrated write failure: local backup survives and the UI reports fallback instead of claiming IndexedDB success.\\n");

    // If neither backend accepts an import, the active project must remain unchanged.
    const unpersistableCandidate = await page.evaluate(() => {
      const project = JSON.parse(localStorage.getItem("wordwaifu.project.v1"));
      project.project = { ...project.project, name: "Importación no persistible" };
      return project;
    });
    const activeNameBeforeRejectedImport = failedWriteEvidence.activeName;
    await page.evaluate((names) => {
      const prototype = window.WordWaifuProjectRepository.ProjectRepository.prototype;
      window.__wordWaifuOriginalSaveBackup = prototype.saveBackup;
      prototype.saveBackup = () => ({ written: false, warning: "Simulated local backup write failure." });
      // Permit the pre-import snapshot flush, then fail the candidate write itself.
      prototype.write = async function (project) {
        if (project && project.project && project.project.name === names.oldName) {
          return window.__wordWaifuOriginalRepositoryWrite.call(this, project);
        }
        if (project && project.project && project.project.name === names.newName) {
          throw new Error("Simulated candidate write failure.");
        }
        throw new Error("Unexpected project write during import failure test.");
      };
    }, { oldName: activeNameBeforeRejectedImport, newName: unpersistableCandidate.project.name });
    const rejectedImportAlertPromise = page.waitForEvent("dialog");
    const rejectedImportTask = page.locator("#import-file").setInputFiles({
      name: "unpersistable-project.json",
      mimeType: "application/json",
      buffer: Buffer.from(JSON.stringify(unpersistableCandidate))
    });
    const rejectedImportAlert = await rejectedImportAlertPromise;
    assert.equal(rejectedImportAlert.type(), "alert");
    assert.match(rejectedImportAlert.message(), /Fallaron IndexedDB y localStorage/);
    await rejectedImportAlert.accept();
    await rejectedImportTask;
    await page.evaluate(() => {
      const prototype = window.WordWaifuProjectRepository.ProjectRepository.prototype;
      prototype.write = window.__wordWaifuOriginalRepositoryWrite;
      prototype.saveBackup = window.__wordWaifuOriginalSaveBackup;
      delete window.__wordWaifuOriginalRepositoryWrite;
      delete window.__wordWaifuOriginalSaveBackup;
    });
    assert.equal(await page.locator("#project-name").innerText(), activeNameBeforeRejectedImport);
    assert.equal(await page.evaluate(() => JSON.parse(localStorage.getItem("wordwaifu.project.v1")).project.name), activeNameBeforeRejectedImport);
    process.stdout.write("PASS rejected import: if both persistence backends fail, active state and backup remain unchanged.\\n");

    const failedStorageExportPromise = page.waitForEvent("download");
    await page.locator("#export-button").click();
    const failedStorageExport = await failedStorageExportPromise;
    const failedStorageExportPath = await failedStorageExport.path();
    const failedStorageExportProject = JSON.parse(fs.readFileSync(failedStorageExportPath, "utf8"));
    const failedStorageExportValidation = validateAndNormalizeProject(failedStorageExportProject);
    assert.equal(failedStorageExportValidation.valid, true, failedStorageExportValidation.errors.join("\\n"));
    assert.equal(failedStorageExportProject.project.name, activeNameBeforeRejectedImport);
    assert.ok(failedStorageExportProject.organizations.some((item) => item.name === "Solo en respaldo local"));
    process.stdout.write("PASS export after storage failure: valid active project remains downloadable from memory.\\n");

    const deleteProtectionAtCap = await page.evaluate(async () => {
      const project = JSON.parse(localStorage.getItem("wordwaifu.project.v1"));
      const repository = new window.WordWaifuProjectRepository.ProjectRepository();
      let snapshots = await repository.listSnapshots(project.project.id);
      while (snapshots.length < 25) {
        await repository.createSnapshot(project, { reason: "delete-protection-cap-test" });
        snapshots = await repository.listSnapshots(project.project.id);
      }
      repository.close();
      return { projectId: project.project.id, count: snapshots.length };
    });
    assert.equal(deleteProtectionAtCap.count, 25);

    await page.locator('.nav-item[data-view="relationships"]').click();
    await page.locator('[data-relationship="' + secondRelationship.id + '"]').click();
    const capDeleteConfirmPromise = page.waitForEvent("dialog");
    const capDeleteClick = page.locator("#delete-relationship-button").click();
    const capDeleteConfirm = await capDeleteConfirmPromise;
    assert.equal(capDeleteConfirm.type(), "confirm");
    assert.match(capDeleteConfirm.message(), /copia recuperable antes de borrar/);
    const capDeleteFailurePromise = page.waitForEvent("dialog");
    await capDeleteConfirm.accept();
    const capDeleteFailure = await capDeleteFailurePromise;
    assert.equal(capDeleteFailure.type(), "alert");
    assert.match(capDeleteFailure.message(), /La eliminación se canceló para proteger el universo/);
    assert.match(capDeleteFailure.message(), /límite de 25 snapshots/i);
    await capDeleteFailure.accept();
    await capDeleteClick;
    const relationshipPreservedAtCap = await page.evaluate((id) =>
      JSON.parse(localStorage.getItem("wordwaifu.project.v1")).relationships.some((item) => item.id === id), secondRelationship.id);
    assert.equal(relationshipPreservedAtCap, true, "A full snapshot store must block a relationship deletion.");
    process.stdout.write("PASS fail-closed deletion: reaching 25 snapshots preserves the entity and explains the refusal.\\n");

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

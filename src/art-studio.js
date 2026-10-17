(function(root) {
  "use strict";
  const DB_NAME = "wordwaifu-art-studio";
  const DB_VERSION = 1;
  const STORE = "assignments";
  const FALLBACK_KEY = "wordwaifu.art.assignments.v1";
  const DELETED_KEY = "wordwaifu.art.deleted.v1";
  const MAX_FILE_BYTES = 5 * 1024 * 1024;
  let databasePromise;
  let assignmentLoadSequence = 0;
  let galleryRefreshSequence = 0;
  let imageReadSequence = 0;
  const memoryCache = new Map();
  // Keep a session cache, but persist deletion tombstones so stale fallback copies
  // cannot reappear after a reload when localStorage cleanup fails.
  const deletedKeys = new Set();

  function readDeletedKeys() {
    try {
      const value = JSON.parse(root.localStorage.getItem(DELETED_KEY) || "[]");
      return new Set(Array.isArray(value) ? value.filter(key => typeof key === "string") : []);
    } catch (_) { return new Set(); }
  }

  function writeDeletedKeys(keys) {
    root.localStorage.setItem(DELETED_KEY, JSON.stringify(Array.from(keys)));
  }

  function isDeleted(key, persisted = readDeletedKeys()) {
    return deletedKeys.has(key) || persisted.has(key);
  }

  function markDeleted(key) {
    const keys = readDeletedKeys();
    keys.add(key);
    writeDeletedKeys(keys);
    deletedKeys.add(key);
  }

  function clearDeleted(key) {
    const keys = readDeletedKeys();
    if (!keys.has(key)) {
      deletedKeys.delete(key);
      return;
    }
    keys.delete(key);
    writeDeletedKeys(keys);
    deletedKeys.delete(key);
  }

  function openDatabase() {
    if (databasePromise) return databasePromise;
    databasePromise = new Promise((resolve, reject) => {
      if (!root.indexedDB) return reject(new Error("IndexedDB no está disponible"));
      const request = root.indexedDB.open(DB_NAME, DB_VERSION);
      let blocked = false;
      request.onupgradeneeded = () => {
        const db = request.result;
        if (!db.objectStoreNames.contains(STORE)) db.createObjectStore(STORE, { keyPath: "key" });
      };
      request.onblocked = () => {
        blocked = true;
        reject(new Error("La apertura de IndexedDB está bloqueada por otra pestaña."));
      };
      request.onerror = () => reject(request.error || new Error("No se pudo abrir IndexedDB"));
      request.onsuccess = () => {
        const db = request.result;
        if (blocked) { db.close(); return; }
        db.onversionchange = () => {
          db.close();
          databasePromise = null;
        };
        resolve(db);
      };
    }).catch(error => {
      databasePromise = null;
      throw error;
    });
    return databasePromise;
  }

  function fallbackRead() {
    try {
      const value = JSON.parse(root.localStorage.getItem(FALLBACK_KEY) || "{}");
      return value && typeof value === "object" ? value : {};
    } catch (_) { return {}; }
  }

  async function readAll() {
    const persistedDeleted = readDeletedKeys();
    let indexedRecords = [];
    try {
      const db = await openDatabase();
      indexedRecords = await new Promise((resolve, reject) => {
        const transaction = db.transaction(STORE, "readonly");
        const request = transaction.objectStore(STORE).getAll();
        let result = [];
        request.onsuccess = () => { result = Array.isArray(request.result) ? request.result : []; };
        request.onerror = () => reject(request.error || new Error("No se pudieron leer los recursos de IndexedDB."));
        transaction.oncomplete = () => resolve(result);
        transaction.onerror = () => reject(transaction.error || request.error || new Error("Error en la lectura de IndexedDB."));
        transaction.onabort = () => reject(transaction.error || request.error || new Error("La lectura de IndexedDB fue cancelada."));
      });
    } catch (_) {
      // If IndexedDB cannot be opened or read, localStorage is the available store.
      return Object.values(fallbackRead()).filter(record => record && !isDeleted(record.key, persistedDeleted));
    }

    // A failed IndexedDB write can be safely stored in localStorage even while the
    // database remains readable. Merge both stores so the gallery does not hide
    // successful fallback saves; IndexedDB wins when both contain the same key.
    const records = new Map(indexedRecords.map(record => [record.key, record]));
    for (const record of Object.values(fallbackRead())) {
      if (record && record.key && !records.has(record.key) && !isDeleted(record.key, persistedDeleted)) records.set(record.key, record);
    }
    return Array.from(records.values()).filter(record => record && !isDeleted(record.key, persistedDeleted));
  }

  async function readOne(key) {
    if (isDeleted(key)) return null;
    if (memoryCache.has(key)) return memoryCache.get(key);
    try {
      const db = await openDatabase();
      const value = await new Promise((resolve, reject) => {
        const transaction = db.transaction(STORE, "readonly");
        const request = transaction.objectStore(STORE).get(key);
        let result = null;
        request.onsuccess = () => { result = request.result || null; };
        request.onerror = () => reject(request.error || new Error("No se pudo leer el recurso de IndexedDB."));
        transaction.oncomplete = () => resolve(result);
        transaction.onerror = () => reject(transaction.error || request.error || new Error("Error al leer el recurso de IndexedDB."));
        transaction.onabort = () => reject(transaction.error || request.error || new Error("La lectura del recurso fue cancelada."));
      });
      if (value) { memoryCache.set(key, value); return value; }
    } catch (_) {}
    const value = fallbackRead()[key] || null;
    if (value) memoryCache.set(key, value);
    return value;
  }

  async function persist(record) {
    let backend = "indexeddb";
    try {
      const db = await openDatabase();
      await new Promise((resolve, reject) => {
        const transaction = db.transaction(STORE, "readwrite");
        transaction.objectStore(STORE).put(record);
        transaction.oncomplete = resolve;
        transaction.onerror = () => reject(transaction.error);
        transaction.onabort = () => reject(transaction.error || new Error("Guardado cancelado"));
      });
    } catch (_) {
      backend = "local";
      const fallback = fallbackRead();
      if (record.fileDataUrl && record.fileDataUrl.length > 1400000) {
        throw new Error("El archivo excede el límite del respaldo local; usá IndexedDB o una URL externa.");
      }
      fallback[record.key] = record;
      try { root.localStorage.setItem(FALLBACK_KEY, JSON.stringify(fallback)); }
      catch (_) { throw new Error("No hay espacio disponible para guardar este recurso en el navegador."); }
    }
    try { clearDeleted(record.key); }
    catch (_) { throw new Error("El recurso se guardó, pero no se pudo retirar su marca de borrado; liberá espacio y volvé a guardar para reactivarlo."); }
    memoryCache.set(record.key, record);
    return backend;
  }

  async function removeRecord(key) {
    // Persist the tombstone first. If storage cannot record it, refuse deletion
    // rather than risk resurrecting a stale fallback copy after a reload.
    try { markDeleted(key); }
    catch (_) { throw new Error("No se pudo guardar la marca anti-resurrección; el recurso no se eliminó."); }
    memoryCache.delete(key);

    let db;
    try {
      db = await openDatabase();
    } catch (_) {
      // IndexedDB is unavailable: localStorage is the active store. The tombstone
      // still protects against a stale copy if fallback cleanup cannot be written.
      const fallback = fallbackRead();
      if (fallback[key]) {
        delete fallback[key];
        try { root.localStorage.setItem(FALLBACK_KEY, JSON.stringify(fallback)); }
        catch (_) { throw new Error("El recurso quedó marcado como eliminado, pero no se pudo limpiar el respaldo local."); }
      }
      // Once both stores are clean, the tombstone has done its job. Keep it only
      // if stale fallback cleanup failed, otherwise repeated deletes grow storage forever.
      try { clearDeleted(key); } catch (_) {}
      return;
    }

    try {
      await new Promise((resolve, reject) => {
        let transaction;
        try {
          transaction = db.transaction(STORE, "readwrite");
          transaction.objectStore(STORE).delete(key);
        } catch (error) {
          reject(error);
          return;
        }
        transaction.oncomplete = resolve;
        transaction.onerror = () => reject(transaction.error || new Error("No se pudo eliminar el recurso de IndexedDB."));
        transaction.onabort = () => reject(transaction.error || new Error("La eliminación del recurso fue cancelada."));
      });
    } catch (error) {
      try { clearDeleted(key); } catch (_) {}
      throw error;
    }

    const fallback = fallbackRead();
    if (fallback[key]) {
      delete fallback[key];
      try { root.localStorage.setItem(FALLBACK_KEY, JSON.stringify(fallback)); }
      catch (_) { throw new Error("El recurso se eliminó de IndexedDB, pero no se pudo limpiar el respaldo local; la marca anti-resurrección impedirá que reaparezca."); }
    }
    // A persisted marker is required only while a stale fallback copy may survive.
    // If cleanup succeeded (or no fallback copy existed), release its localStorage space.
    try { clearDeleted(key); } catch (_) {}
  }

  function makeKey(category, entityId) {
    return String(category || "character").trim().toLowerCase() + ":" + String(entityId || "").trim().toLowerCase();
  }

  function fileToDataUrl(file) {
    return new Promise((resolve, reject) => {
      if (!file || !/^image\/(png|jpeg|webp|gif|svg\+xml|avif)$/i.test(file.type)) {
        reject(new Error("Elegí una imagen PNG, JPEG, WebP, GIF, SVG o AVIF.")); return;
      }
      if (file.size > MAX_FILE_BYTES) { reject(new Error("La imagen supera el límite de 5 MB.")); return; }
      const reader = new FileReader();
      reader.onload = () => resolve(String(reader.result));
      reader.onerror = () => reject(new Error("No se pudo leer el archivo seleccionado."));
      reader.readAsDataURL(file);
    });
  }

  function normalizeImageUrl(value) {
    const input = String(value || "").trim();
    if (!input) return "";
    let url;
    try { url = new URL(input, root.location.href); } catch (_) { throw new Error("La URL de imagen no es válida."); }
    if (!["http:", "https:"].includes(url.protocol)) throw new Error("La imagen externa debe usar HTTP o HTTPS.");
    return url.href;
  }

  async function getAsset(category, entityId) {
    const record = await readOne(makeKey(category, entityId));
    if (!record) return null;
    const src = record.fileDataUrl || record.imageUrl || "";
    return src ? { ...record, src } : { ...record, src: "" };
  }

  async function listAssignments() {
    return (await readAll()).sort((a, b) => String(b.updatedAt || "").localeCompare(String(a.updatedAt || "")));
  }

  root.WordWaifuArtStudio = Object.freeze({ getAsset, listAssignments, makeKey });

  function $(selector) { return document.querySelector(selector); }
  function element(tag, className, text) {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (text !== undefined) node.textContent = text;
    return node;
  }

  function fillCharacterOptions() {
    const type = $("#art-target-type"), select = $("#art-target-character"), wrapper = $("#art-character-picker");
    if (!type || !select) return;
    wrapper.classList.toggle("hidden", type.value !== "character");
    select.replaceChildren(new Option("Elegí un personaje…", ""));
    const roster = root.WordWaifuOfficialCharacterRoster;
    if (type.value === "character" && roster) {
      roster.list().sort((a,b)=>a.name.localeCompare(b.name,"es")).forEach(person => {
        const option = new Option(person.name + " · " + person.id, person.id);
        option.dataset.name = person.name;
        select.appendChild(option);
      });
    }
  }

  function syncTargetFromRoster() {
    const select = $("#art-target-character"), option = select && select.selectedOptions[0];
    if (!option || !option.value) return;
    $("#art-target-id").value = option.value;
    $("#art-target-name").value = option.dataset.name || option.textContent.split(" · ")[0];
    updatePromptContext(); loadCurrentAssignment();
  }

  function updatePromptContext() {
    const type = $("#art-target-type").value, id = $("#art-target-id").value.trim(), name = $("#art-target-name").value.trim();
    const person = type === "character" && root.WordWaifuOfficialCharacterRoster && root.WordWaifuOfficialCharacterRoster.get(id);
    $("#art-context").textContent = person
      ? [person.name, person.role, person.family, person.species].filter(Boolean).join(" · ")
      : (name || id ? (name || id) + " · " + ({character:"Personaje",object:"Objeto",background:"Fondo"}[type] || type) : "Elegí o escribí una entidad para vincular un recurso.");
  }

  function generatePrompt() {
    const type = $("#art-target-type").value, id = $("#art-target-id").value.trim(), name = $("#art-target-name").value.trim();
    if (!id || !name) throw new Error("Elegí una entidad o completá su nombre e ID antes de generar el prompt.");
    const person = type === "character" && root.WordWaifuOfficialCharacterRoster && root.WordWaifuOfficialCharacterRoster.get(id);
    const dossier = type === "character" && root.WordWaifuCharacterDossiers && root.WordWaifuCharacterDossiers.get(id);
    const description = person ? [person.species, person.role, person.family, person.epithet].filter(Boolean).join("; ") : "";
    const lines = [
      "Ilustración original para un proyecto narrativo, recurso de tipo " + ({character:"personaje",object:"objeto o equipamiento",background:"fondo o escenario"}[type] || type) + ".",
      "ENTIDAD: " + name + " (ID estable: " + id + ").",
      description ? "REFERENCIAS DE PERSONAJE: " + description + "." : "",
      dossier ? "DESCRIPCIÓN VISUAL DE REFERENCIA: " + dossier.appearance : "",
      "ESTILO: " + ($("#art-style").value.trim() || "ilustración de fantasía detallada, acabado profesional y silueta legible") + ".",
      "ENCUADRE: " + ($("#art-framing").value.trim() || "composición vertical de cuerpo entero, sujeto centrado") + ".",
      "ATMÓSFERA: " + ($("#art-mood").value.trim() || "coherente con la personalidad y el papel narrativo") + ".",
      "ILUMINACIÓN: " + ($("#art-lighting").value.trim() || "luz cinematográfica suave con volumen y separación del fondo") + ".",
      "PALETA: " + ($("#art-palette").value.trim() || "colores coherentes con el diseño de referencia") + ".",
      type === "character" ? "Mantener rasgos identificables consistentes entre generaciones: rostro, edad aparente, cabello, ojos, complexión, ropa y accesorios. No cambiar la identidad visual entre poses." : "Diseñar el recurso con silueta clara, perspectiva consistente y detalle legible a tamaño pequeño.",
      "No incluir texto, tipografía, marcas de agua, logotipos, bordes ni elementos de interfaz.",
      "Salida limpia, fondo controlado y calidad suficiente para una biblioteca de assets de un videojuego o novela visual."
    ].filter(Boolean);
    $("#art-prompt").value = lines.join("\n\n");
    $("#art-status").textContent = "Prompt generado. Editalo libremente antes de guardar.";
  }

  function clearCurrentAssignmentFields() {
    imageReadSequence += 1;
    $("#art-prompt").value = "";
    $("#art-image-url").value = "";
    $("#art-image-file").value = "";
    $("#art-preview").removeAttribute("src");
    $("#art-preview-wrap").classList.add("hidden");
  }

  async function loadCurrentAssignment() {
    const id = $("#art-target-id").value.trim(), category = $("#art-target-type").value;
    const requestSequence = ++assignmentLoadSequence;
    const requestedKey = id ? makeKey(category, id) : "";
    clearCurrentAssignmentFields();
    if (!id) return;
    const record = await getAsset(category, id);
    if (requestSequence !== assignmentLoadSequence) return;
    if (requestedKey !== makeKey($("#art-target-type").value, $("#art-target-id").value.trim())) return;
    if (!record) return;
    $("#art-prompt").value = record.prompt || "";
    $("#art-image-url").value = record.imageUrl || "";
    const src = record.fileDataUrl || record.imageUrl;
    if (src) { $("#art-preview").src = src; $("#art-preview-wrap").classList.remove("hidden"); }
    $("#art-status").textContent = "Recurso recuperado para " + (record.entityName || id) + ".";
  }

  async function refreshGallery() {
    const gallery = $("#art-assignments");
    if (!gallery) return;
    const refreshSequence = ++galleryRefreshSequence;
    const records = await listAssignments();
    // Ignore older reads that finish after a newer refresh (especially after delete).
    if (refreshSequence !== galleryRefreshSequence) return;
    gallery.replaceChildren();
    $("#art-assignment-count").textContent = String(records.length);
    if (!records.length) { gallery.appendChild(element("p","art-empty","Todavía no hay recursos asignados. Guardá una URL, una imagen o un prompt para empezar.")); return; }
    records.forEach(record => {
      const card = element("article","art-assignment-card"), thumb = element("div","art-assignment-thumb");
      card.dataset.artKey = record.key;
      const src = record.fileDataUrl || record.imageUrl;
      if (src) {
        const image = element("img"); image.src = src; image.alt = ""; image.loading = "lazy";
        image.addEventListener("error",()=>thumb.replaceChildren(element("span","","Vista previa no disponible")));
        thumb.appendChild(image);
      } else thumb.appendChild(element("span","","PROMPT"));
      const copy = element("div","art-assignment-copy");
      copy.append(element("strong","",record.entityName || record.entityId),element("span","",record.category + " · " + record.entityId),
        element("small","",record.prompt ? record.prompt.slice(0,150) + (record.prompt.length>150?"…":"") : (record.imageUrl || "Sin imagen vinculada")));
      const actions = element("div","art-assignment-actions"), edit = element("button","outline-button","Editar");
      edit.type="button"; edit.addEventListener("click",()=>{
        assignmentLoadSequence += 1;
        clearCurrentAssignmentFields();
        $("#art-target-type").value=record.category;fillCharacterOptions();
        if(record.category==="character")$("#art-target-character").value=record.entityId;
        $("#art-target-id").value=record.entityId;$("#art-target-name").value=record.entityName||record.entityId;
        $("#art-image-url").value=record.imageUrl||"";$("#art-prompt").value=record.prompt||"";
        if(src){$("#art-preview").src=src;$("#art-preview-wrap").classList.remove("hidden");}
        updatePromptContext();root.scrollTo({top:0,behavior:"smooth"});
      });
      const remove = element("button","quiet-button","Eliminar");
      remove.type="button";remove.addEventListener("click",async()=>{
        remove.disabled=true;
        try {
          await removeRecord(record.key);
          await refreshGallery();
          $("#art-status").textContent="Asignación eliminada.";
        } catch(error) {
          // The IndexedDB delete may have succeeded while fallback cleanup failed.
          // Refresh from durable state so the deleted card disappears but the
          // warning remains visible; if deletion itself failed, the card remains.
          await refreshGallery();
          $("#art-status").textContent=error.message || "No se pudo eliminar el recurso.";
        } finally { remove.disabled=false; }
      });
      actions.append(edit,remove);copy.appendChild(actions);card.append(thumb,copy);gallery.appendChild(card);
    });
  }

  function bind() {
    if (!$("#art-view")) return;
    $("#art-target-type").addEventListener("change",()=>{fillCharacterOptions();$("#art-target-character").value="";$("#art-target-id").value="";$("#art-target-name").value="";updatePromptContext();loadCurrentAssignment();});
    $("#art-target-character").addEventListener("change",syncTargetFromRoster);
    $("#art-target-id").addEventListener("input",()=>{assignmentLoadSequence += 1;clearCurrentAssignmentFields();updatePromptContext();});
    $("#art-target-name").addEventListener("input",updatePromptContext);
    $("#art-generate-prompt").addEventListener("click",()=>{try{generatePrompt();}catch(error){$("#art-status").textContent=error.message;}});
    $("#art-copy-prompt").addEventListener("click",async()=>{
      const prompt=$("#art-prompt").value;if(!prompt.trim())return $("#art-status").textContent="No hay prompt para copiar.";
      try{await navigator.clipboard.writeText(prompt);$("#art-status").textContent="Prompt copiado.";}
      catch(_){$("#art-prompt").focus();$("#art-prompt").select();$("#art-status").textContent="Seleccioné el prompt; copiá con Ctrl+C.";}
    });
    $("#art-image-file").addEventListener("change",async event=>{
      const file=event.target.files&&event.target.files[0];if(!file)return;
      const readSequence = ++imageReadSequence;
      try{const data=await fileToDataUrl(file);if(readSequence!==imageReadSequence)return;$("#art-preview").src=data;$("#art-preview-wrap").classList.remove("hidden");$("#art-image-url").value="";$("#art-status").textContent=file.name+" listo para guardar.";}
      catch(error){if(readSequence!==imageReadSequence)return;$("#art-status").textContent=error.message;event.target.value="";}
    });
    $("#art-image-url").addEventListener("change",()=>{
      try{const url=normalizeImageUrl($("#art-image-url").value);$("#art-image-url").value=url;if(url){$("#art-image-file").value="";$("#art-preview").src=url;$("#art-preview-wrap").classList.remove("hidden");}}
      catch(error){$("#art-status").textContent=error.message;}
    });
    $("#art-preview").addEventListener("error",()=>{$("#art-status").textContent="No se pudo cargar la vista previa. Verificá la URL o elegí un archivo local.";});
    $("#art-save").addEventListener("click",async()=>{
      const category=$("#art-target-type").value,id=$("#art-target-id").value.trim(),name=$("#art-target-name").value.trim();
      if(!id||!name)return $("#art-status").textContent="Completá el nombre y el ID de la entidad.";
      const file=$("#art-image-file").files&&$("#art-image-file").files[0];
      const targetKey = makeKey(category, id);
      const targetSequence = assignmentLoadSequence;
      const fileSequence = imageReadSequence;
      try{
        const url=normalizeImageUrl($("#art-image-url").value),data=file?await fileToDataUrl(file):"";
        if (targetSequence !== assignmentLoadSequence ||
            targetKey !== makeKey($("#art-target-type").value, $("#art-target-id").value.trim()) ||
            fileSequence !== imageReadSequence) {
          throw new Error("El destino o la imagen cambió mientras se preparaba el guardado. Volvé a guardar el recurso.");
        }
        if(!data&&!url&&!$("#art-prompt").value.trim())return $("#art-status").textContent="Agregá una imagen, una URL o un prompt antes de guardar.";
        const record={key:makeKey(category,id),category,entityId:id,entityName:name,imageUrl:url,fileDataUrl:data,prompt:$("#art-prompt").value.trim(),updatedAt:new Date().toISOString()};
        const backend=await persist(record);
        $("#art-status").textContent="Guardado en "+(backend==="indexeddb"?"la biblioteca local del navegador":"el respaldo local")+". Se asignó a "+name+".";
        $("#art-image-file").value="";await refreshGallery();
      }catch(error){$("#art-status").textContent=error.message||"No se pudo guardar el recurso.";}
    });
    $("#art-clear-form").addEventListener("click",()=>{
      assignmentLoadSequence += 1;
      $("#art-target-id").value="";$("#art-target-name").value="";$("#art-target-character").value="";
      clearCurrentAssignmentFields();
      updatePromptContext();$("#art-status").textContent="Formulario limpio.";
    });
    fillCharacterOptions();updatePromptContext();refreshGallery();
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded",bind,{once:true}); else bind();
})(typeof window !== "undefined" ? window : globalThis);

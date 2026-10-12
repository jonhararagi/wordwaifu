(function () {
  "use strict";
  const KEY = "wordwaifu.art-studio.v1";
  const MAX_UPLOAD = 3 * 1024 * 1024;
  const read = () => { try { const value = JSON.parse(localStorage.getItem(KEY) || "[]"); return Array.isArray(value) ? value : []; } catch (_) { return []; } };
  const write = (items) => localStorage.setItem(KEY, JSON.stringify(items));
  const esc = (v) => String(v ?? "").replace(/[&<>"']/g, (c) => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
  const css = `
  .art-studio-dialog{width:min(980px,calc(100vw - 28px));max-width:none;max-height:calc(100dvh - 28px);padding:0;border:1px solid #344453;border-radius:18px;background:#111923;color:#eef3f6}
  .art-studio-dialog::backdrop{background:#05090dcc;backdrop-filter:blur(5px)}
  .art-studio-wrap{padding:24px;display:grid;gap:18px}.art-studio-head{display:flex;justify-content:space-between;align-items:start;gap:16px}
  .art-studio-head h2{margin:7px 0;font-size:26px;letter-spacing:-.7px}.art-studio-sub{color:#9baab8;font-size:12px;margin:0;line-height:1.6}
  .art-studio-grid{display:grid;grid-template-columns:minmax(0,1fr) minmax(250px,.8fr);gap:16px}
  .art-studio-fields,.art-studio-preview,.art-studio-library{background:#17212c;border:1px solid #2d3a49;border-radius:13px;padding:16px;min-width:0}
  .art-studio-fields{display:grid;gap:12px;align-content:start}.art-studio-fields label{display:grid;gap:6px;color:#b9c5d0;font-size:11px;font-weight:650}
  .art-studio-fields input,.art-studio-fields textarea,.art-studio-fields select{width:100%;min-width:0;background:#0f1721;color:#eef3f6;border:1px solid #354454;border-radius:8px;padding:10px;font:inherit;font-size:12px}
  .art-studio-fields textarea{min-height:94px;resize:vertical}.art-studio-preview{display:grid;grid-template-rows:auto minmax(200px,1fr) auto;gap:12px}
  .art-studio-image{width:100%;height:100%;min-height:220px;max-height:370px;object-fit:contain;background:#0c121a;border:1px dashed #354454;border-radius:10px;color:#92a2b2}
  .art-studio-actions{display:flex;flex-wrap:wrap;gap:8px}.art-studio-btn{border:1px solid #3a4a5b;border-radius:8px;padding:10px 12px;background:#202d3a;color:#eef3f6;font-size:11px;font-weight:700}.art-studio-btn.primary{background:#71d6c2;color:#102421;border-color:#71d6c2}
  .art-studio-status{font-size:11px;color:#a4dccc;min-height:16px;margin:0}.art-studio-library h3{margin:0 0 12px;font-size:14px}
  .art-studio-items{display:grid;gap:8px}.art-studio-item{display:grid;grid-template-columns:54px minmax(0,1fr) auto;align-items:center;gap:10px;padding:8px;border:1px solid #2d3a49;border-radius:9px}
  .art-studio-thumb{width:54px;height:60px;object-fit:cover;border-radius:6px;background:#0c121a}.art-studio-item strong{display:block;font-size:11px;overflow-wrap:anywhere}.art-studio-item small{display:block;color:#92a2b2;font-size:10px;margin-top:4px}
  .art-studio-item button{background:transparent;color:#a9e7d8;border:1px solid #3a4a5b;border-radius:6px;padding:7px;font-size:10px}.art-studio-empty{color:#91a0af;font-size:12px;padding:12px;border:1px dashed #354454;border-radius:8px}
  @media(max-width:700px){.art-studio-wrap{padding:15px}.art-studio-grid{grid-template-columns:1fr}.art-studio-preview{grid-template-rows:auto 250px auto}.art-studio-head h2{font-size:21px}}
  `;
  function init() {
    if (document.getElementById("art-studio-dialog")) return;
    let editingId = null;
    const style = document.createElement("style"); style.textContent = css; document.head.appendChild(style);
    const nav = document.querySelector(".main-nav");
    if (nav) {
      const button = document.createElement("button");
      button.type = "button"; button.className = "nav-item"; button.id = "art-studio-open";
      button.innerHTML = '<span aria-hidden="true">▧</span> Panel de arte';
      button.addEventListener("click", () => { document.getElementById("art-studio-dialog").showModal(); render(); });
      nav.appendChild(button);
    }
    const dialog = document.createElement("dialog"); dialog.id = "art-studio-dialog"; dialog.className = "art-studio-dialog";
    dialog.innerHTML = `
      <div class="art-studio-wrap">
        <header class="art-studio-head"><div><p class="eyebrow">VISUAL LIBRARY · ASSETS LOCALES</p><h2>Panel de arte</h2><p class="art-studio-sub">Vinculá imágenes por personaje, objeto o fondo. Guardá prompts y referencias; los archivos se conservan en este navegador.</p></div><button type="button" id="art-studio-close" class="art-studio-btn" aria-label="Cerrar panel">✕ Cerrar</button></header>
        <div class="art-studio-grid">
          <form id="art-studio-form" class="art-studio-fields">
            <label>Tipo de recurso<select id="art-kind"><option value="character">Personaje</option><option value="object">Objeto</option><option value="background">Fondo / escenario</option><option value="other">Otro</option></select></label>
            <label>Nombre o ID de la entidad<input id="art-entity" maxlength="140" required placeholder="Mira Solenne / char-mira"></label>
            <label>Nombre del recurso<input id="art-title" maxlength="140" placeholder="Retrato principal, fondo de taberna…"></label>
            <label>URL de imagen HTTPS<input id="art-url" type="url" maxlength="2048" placeholder="https://…"></label>
            <label>Subir archivo de imagen<input id="art-file" type="file" accept="image/png,image/jpeg,image/webp,image/gif,image/avif"></label>
            <label>Prompt de imagen<textarea id="art-prompt" maxlength="6000" placeholder="Describe sujeto, vestuario, composición, iluminación, ambiente y encuadre…"></textarea></label>
            <label>Notas / procedencia<input id="art-notes" maxlength="1000" placeholder="Referencia, versión, notas de continuidad…"></label>
            <div class="art-studio-actions"><button class="art-studio-btn primary" type="submit">Guardar y vincular</button><button class="art-studio-btn" type="button" id="art-clear">Limpiar formulario</button></div>
            <p id="art-status" class="art-studio-status" role="status" aria-live="polite"></p>
          </form>
          <section class="art-studio-preview" aria-label="Vista previa del recurso"><strong>Vista previa</strong><img id="art-preview" class="art-studio-image" alt="Vista previa del asset seleccionado" src="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="><div class="art-studio-actions"><button type="button" class="art-studio-btn" id="art-copy-prompt">Copiar prompt</button><button type="button" class="art-studio-btn" id="art-open-url">Abrir URL</button></div></section>
        </div>
        <section class="art-studio-library"><h3>Biblioteca vinculada <span id="art-count"></span></h3><div id="art-items" class="art-studio-items"></div></section>
      </div>`;
    document.body.appendChild(dialog);
    const $ = (s) => dialog.querySelector(s);
    $("#art-studio-close").addEventListener("click", () => dialog.close());
    dialog.addEventListener("click", (event) => { if (event.target === dialog) dialog.close(); });
    $("#art-url").addEventListener("input", () => { const url = safeURL($("#art-url").value); if (url) $("#art-preview").src = url; });
    $("#art-file").addEventListener("change", async () => {
      const file = $("#art-file").files && $("#art-file").files[0]; if (!file) return;
      if (!file.type.startsWith("image/")) { status("El archivo seleccionado no es una imagen."); $("#art-file").value = ""; return; }
      if (file.size > MAX_UPLOAD) { status("El archivo supera el límite de 3 MiB. Usá una imagen optimizada o una URL."); $("#art-file").value = ""; return; }
      try { $("#art-preview").src = await toDataURL(file); $("#art-url").value = ""; status("Archivo listo para guardar."); } catch (_) { status("No se pudo leer el archivo."); }
    });
    $("#art-studio-form").addEventListener("submit", (event) => {
      event.preventDefault();
      const entity = $("#art-entity").value.trim(), url = safeURL($("#art-url").value), preview = $("#art-preview").src;
      const uploaded = preview.startsWith("data:image/") && preview !== "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=";
      if (!entity) return status("Indicá la entidad que recibirá el recurso.");
      if (!url && !uploaded) return status("Agregá una URL HTTPS o subí un archivo de imagen.");
      const items = read();
      const item = { id: editingId || (crypto.randomUUID ? crypto.randomUUID() : String(Date.now()) + Math.random().toString(16).slice(2)), kind: $("#art-kind").value, entity, title: $("#art-title").value.trim() || entity, url: url || "", imageData: uploaded ? preview : "", prompt: $("#art-prompt").value.trim(), notes: $("#art-notes").value.trim(), updatedAt: new Date().toISOString() };
      try { const existing = items.findIndex((entry) => entry.id === editingId); if (existing >= 0) items[existing] = item; else items.unshift(item); write(items); editingId = null; $("#art-file").value = ""; status("Recurso guardado y vinculado a " + entity + "."); render(); }
      catch (_) { status("No hay espacio local suficiente. Probá con una imagen más pequeña o una URL HTTPS."); }
    });
    $("#art-clear").addEventListener("click", clearForm);
    $("#art-copy-prompt").addEventListener("click", async () => {
      const prompt = $("#art-prompt").value.trim(); if (!prompt) return status("Escribí un prompt primero.");
      try { await navigator.clipboard.writeText(prompt); status("Prompt copiado."); } catch (_) { $("#art-prompt").focus(); $("#art-prompt").select(); status("Seleccioná el texto y copialo con Ctrl+C."); }
    });
    $("#art-open-url").addEventListener("click", () => { const url = safeURL($("#art-url").value); if (url) window.open(url, "_blank", "noopener,noreferrer"); else status("No hay una URL HTTPS válida en el formulario."); });
    $("#art-items").addEventListener("click", (event) => {
      const button = event.target.closest("button[data-action]"); if (!button) return;
      const items = read(), item = items.find((entry) => entry.id === button.dataset.id); if (!item) return;
      if (button.dataset.action === "delete") { if (!window.confirm("¿Eliminar este vínculo de la biblioteca local?")) return; write(items.filter((entry) => entry.id !== item.id)); render(); status("Vínculo eliminado."); }
      if (button.dataset.action === "edit") {
        editingId = item.id; $("#art-kind").value = item.kind; $("#art-entity").value = item.entity; $("#art-title").value = item.title; $("#art-url").value = item.url; $("#art-prompt").value = item.prompt; $("#art-notes").value = item.notes;
        $("#art-preview").src = item.imageData || item.url || "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=";
        status("Recurso cargado para editar. Al guardar se creará una versión actualizada en la biblioteca.");
      }
    });
    function clearForm() { editingId = null; $("#art-studio-form").reset(); $("#art-preview").src = "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="; status(""); }
    function status(message) { $("#art-status").textContent = message; }
    function render() {
      const items = read(); $("#art-count").textContent = "(" + items.length + ")";
      $("#art-items").innerHTML = items.length ? items.map((item) => '<article class="art-studio-item"><img class="art-studio-thumb" alt="" src="' + esc(item.imageData || item.url || "") + '"><div><strong>' + esc(item.title) + '</strong><small>' + esc(item.kind) + " · " + esc(item.entity) + (item.prompt ? " · Prompt guardado" : " · Sin prompt") + '</small></div><div class="art-studio-actions"><button type="button" data-action="edit" data-id="' + esc(item.id) + '">Editar</button><button type="button" data-action="delete" data-id="' + esc(item.id) + '">Quitar</button></div></article>').join("") : '<div class="art-studio-empty">Todavía no hay recursos. Creá el primer vínculo desde el formulario.</div>';
    }
    function safeURL(value) { try { const parsed = new URL(value); return parsed.protocol === "https:" ? parsed.href : ""; } catch (_) { return ""; } }
    function toDataURL(file) { return new Promise((resolve, reject) => { const reader = new FileReader(); reader.onload = () => resolve(String(reader.result)); reader.onerror = reject; reader.readAsDataURL(file); }); }
    window.WordWaifuArtStudio = { list: read, find(kind, entity) { return read().filter((item) => item.kind === kind && item.entity.toLowerCase() === String(entity).toLowerCase()); } };
    function status(message) { $("#art-status").textContent = message; }
    render();
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init, { once: true }); else init();
})();
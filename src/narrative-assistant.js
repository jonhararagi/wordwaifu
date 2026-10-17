(function () {
  "use strict";
  const CHATGPT_URL = "https://chatgpt.com/";
  const GEMINI_URL = "https://gemini.google.com/app";
  const host = document.querySelector(".top-actions") || document.querySelector(".main-content");
  if (!host || document.getElementById("narrative-assistant-open")) return;
  const button = document.createElement("button");
  button.id = "narrative-assistant-open"; button.type = "button"; button.className = "outline-button";
  button.textContent = "Asistencia narrativa"; button.setAttribute("aria-haspopup", "dialog"); host.prepend(button);
  const style = document.createElement("style");
  style.textContent = "#narrative-assistant-dialog{position:fixed;inset:0;z-index:10000;display:none;align-items:center;justify-content:center;padding:20px;background:rgba(5,10,20,.72)}#narrative-assistant-dialog[data-open=true]{display:flex}#narrative-assistant-dialog .na-panel{width:min(760px,100%);max-height:92vh;overflow:auto;padding:22px;border:1px solid #475569;border-radius:16px;background:#111827;color:#f8fafc;box-shadow:0 24px 80px #0009}#narrative-assistant-dialog h2{margin:0 0 8px;font-size:1.35rem}#narrative-assistant-dialog p,#narrative-assistant-dialog small{color:#cbd5e1;line-height:1.5}#narrative-assistant-dialog label{display:block;margin:12px 0 6px;font-weight:600}#narrative-assistant-dialog select,#narrative-assistant-dialog textarea{width:100%;box-sizing:border-box;border:1px solid #64748b;border-radius:8px;padding:10px;background:#0f172a;color:#f8fafc;font:inherit}#narrative-assistant-dialog textarea{min-height:130px;resize:vertical}#narrative-assistant-dialog .na-consent{display:flex;gap:10px;align-items:flex-start;font-weight:400}#narrative-assistant-dialog .na-consent input{margin-top:5px}#narrative-assistant-dialog .na-actions{display:flex;flex-wrap:wrap;gap:8px;margin-top:16px}#narrative-assistant-dialog button{cursor:pointer}#narrative-assistant-dialog .na-status{min-height:1.5em}";
  document.head.appendChild(style);
  const dialog = document.createElement("section");
  dialog.id = "narrative-assistant-dialog"; dialog.setAttribute("role", "dialog"); dialog.setAttribute("aria-modal", "true"); dialog.setAttribute("aria-labelledby", "na-title");
  dialog.innerHTML = '<div class="na-panel"><h2 id="na-title">Microventana de asistencia narrativa</h2><p>WordWaifu prepara el contexto localmente. No se conecta a modelos, no lee sesiones web y no envía texto. Revisá el fragmento y autorizá explícitamente copiarlo a un servicio externo.</p><label for="na-task">Tarea</label><select id="na-task"><option value="translate">Proponer traducción al español</option><option value="context">Analizar contexto, personajes y relaciones</option><option value="continuity">Revisar continuidad sin inventar canon</option><option value="style">Revisar estilo y claridad sin cambiar hechos</option><option value="terms">Extraer términos para el glosario</option></select><label for="na-context">Contexto opcional (local hasta que lo copies)</label><textarea id="na-context" rows="3" placeholder="Nombres, glosario, época, reglas del mundo o instrucciones editoriales."></textarea><label for="na-source">Fragmento que querés compartir</label><textarea id="na-source" placeholder="Pegá aquí únicamente el texto que quieras enviar. La selección actual, si existe, se copia solo dentro de esta ventana."></textarea><label class="na-consent"><input id="na-consent" type="checkbox"><span>Confirmo que revisé este contenido y autorizo copiarlo al portapapeles para pegarlo manualmente en un servicio externo. Entiendo que, al pegarlo allí, sale de WordWaifu.</span></label><small>No se guarda el contenido en el proyecto ni se envía automáticamente. La cuenta de ChatGPT/Gemini puede tener límites propios; no se garantiza uso ilimitado o gratuito.</small><div class="na-actions"><button type="button" id="na-copy" class="primary-button" disabled>Copiar prompt autorizado</button><button type="button" id="na-chatgpt" class="outline-button" disabled>Abrir ChatGPT</button><button type="button" id="na-gemini" class="outline-button" disabled>Abrir Gemini</button><button type="button" id="na-close" class="quiet-button">Cerrar</button></div><p id="na-status" class="na-status" role="status" aria-live="polite"></p></div>';
  document.body.appendChild(dialog);
  const $ = (id) => dialog.querySelector("#" + id);
  const consent = $("na-consent"), source = $("na-source"), context = $("na-context"), task = $("na-task");
  const copyButton = $("na-copy"), chatgptButton = $("na-chatgpt"), geminiButton = $("na-gemini"), status = $("na-status");
  const taskLabels = {
    translate: "Proponer una traducción al español natural y fiel, conservar nombres propios y no añadir hechos.",
    context: "Analizar el fragmento: separar hechos explícitos, inferencias y dudas; identificar personajes y relaciones sin inventar datos.",
    continuity: "Auditar continuidad. Devolver evidencia textual, posibles contradicciones y preguntas; no convertir hipótesis en canon.",
    style: "Revisar claridad, ritmo y estilo sin alterar hechos, voz ni intención narrativa. Explicar cambios sugeridos.",
    terms: "Extraer términos y nombres relevantes en una tabla: original, propuesta española, contexto y confianza. No dar por aprobadas las propuestas."
  };
  function openDialog() {
    const selected = window.getSelection ? String(window.getSelection()).trim() : "";
    if (selected && !source.value.trim()) source.value = selected;
    dialog.dataset.open = "true";
    status.textContent = "Nada se ha compartido. La autorización solo habilita copiar el prompt.";
    $("na-task").focus(); syncConsent();
  }
  function buildPrompt() {
    return ["Actuá como asistente editorial de novelas. No afirmes que verificaste fuentes que no recibiste.",
      "TAREA: " + taskLabels[task.value],
      "REGLAS: distingue texto explícito, inferencias y desconocidos; no inventes canon; conserva los nombres y el sentido; señala incertidumbres.",
      context.value.trim() ? "CONTEXTO PROPORCIONADO POR EL AUTOR:\n" + context.value.trim() : "",
      "FRAGMENTO PROPORCIONADO POR EL AUTOR:\n" + source.value.trim(),
      "ENTREGA: respuesta estructurada, breve y verificable; marca las propuestas como propuestas, no como cambios aplicados."
    ].filter(Boolean).join("\n\n");
  }
  function syncConsent() {
    const enabled = consent.checked && Boolean(source.value.trim());
    copyButton.disabled = !enabled; chatgptButton.disabled = !enabled; geminiButton.disabled = !enabled;
    if (!consent.checked) status.textContent = "Para habilitar estas acciones, revisá el texto y marcá la autorización explícita.";
    else if (!source.value.trim()) status.textContent = "Agregá el fragmento que querés compartir.";
    else status.textContent = "Autorización activa para copiar el prompt. No hay envío automático.";
  }
  function closeDialog() {
    dialog.dataset.open = "false";
    consent.checked = false;
    syncConsent();
    button.focus();
  }
  button.addEventListener("click", openDialog);
  $("na-close").addEventListener("click", closeDialog);
  dialog.addEventListener("click", (event) => { if (event.target === dialog) closeDialog(); });
  function revokeConsentOnEdit() {
    if (consent.checked) consent.checked = false;
    syncConsent();
  }
  consent.addEventListener("change", syncConsent);
  source.addEventListener("input", revokeConsentOnEdit);
  context.addEventListener("input", revokeConsentOnEdit);
  task.addEventListener("change", revokeConsentOnEdit);
  copyButton.addEventListener("click", async () => {
    if (!consent.checked || !source.value.trim()) return;
    const prompt = buildPrompt();
    try { await navigator.clipboard.writeText(prompt); status.textContent = "Prompt copiado. Pegalo manualmente en el servicio que elijas."; }
    catch (_) {
      const fallback = document.createElement("textarea"); fallback.value = prompt; fallback.setAttribute("readonly", "");
      fallback.style.position = "fixed"; fallback.style.opacity = "0"; document.body.appendChild(fallback); fallback.select();
      const copied = document.execCommand("copy"); fallback.remove();
      status.textContent = copied ? "Prompt copiado. Pegalo manualmente en el servicio que elijas." : "No se pudo copiar automáticamente. Revisá permisos del navegador.";
    }
  });
  function openProvider(url) {
    if (!consent.checked || !source.value.trim()) return;
    window.open(url, "_blank", "noopener,noreferrer");
    status.textContent = "Se solicitó abrir el servicio en otra pestaña. Si todavía no copiaste el prompt, volvé aquí y usá Copiar prompt autorizado. Pegá y enviá manualmente; WordWaifu no transmite datos.";
  }
  chatgptButton.addEventListener("click", () => openProvider(CHATGPT_URL));
  geminiButton.addEventListener("click", () => openProvider(GEMINI_URL));
  document.addEventListener("keydown", (event) => {
    if (dialog.dataset.open !== "true") return;
    if (event.key === "Escape") { event.preventDefault(); closeDialog(); return; }
    if (event.key !== "Tab") return;
    const focusable = Array.from(dialog.querySelectorAll('button:not(:disabled), input:not(:disabled), select:not(:disabled), textarea:not(:disabled), [href], [tabindex]:not([tabindex="-1"])'))
      .filter((element) => element.getAttribute("aria-hidden") !== "true");
    if (!focusable.length) { event.preventDefault(); return; }
    const first = focusable[0], last = focusable[focusable.length - 1];
    if (event.shiftKey && (document.activeElement === first || !dialog.contains(document.activeElement))) {
      event.preventDefault(); last.focus();
    } else if (!event.shiftKey && (document.activeElement === last || !dialog.contains(document.activeElement))) {
      event.preventDefault(); first.focus();
    }
  });
})();

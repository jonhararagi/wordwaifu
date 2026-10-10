# Estado de WordWaifu

## Resumen
- Producto: WordWaifu · World & Story Foundry.
- Objetivo: aplicación local/offline-first para organizar universos, canon, atlas temporal, personajes, relaciones, acontecimientos, organizaciones e historias/novelas.
- **Avance global estimado: 19%** de la visión completa; estimación ponderada por alcance, no métrica de código ni cobertura.
- Tecnología actual: HTML/CSS/JavaScript, SVG, IndexedDB y respaldo de compatibilidad en localStorage.
- WordWaifu gestiona canon y planificación narrativa; BotImagen gestiona recursos visuales. La integración todavía no está implementada.

## GitHub
- Repositorio: `jonhararagi/wordwaifu`.
- Rama: `foundation/story-foundry-north-star`.
- Último commit de código/pruebas: `5fc991962c463ece2e9e46d2b40c79838c79b16d`.
- PR #1: [abierto en borrador](https://github.com/jonhararagi/wordwaifu/pull/1), sin fusionar.
- `main`: no modificada.
- Workflow #141: **FAIL_REAL** por carrera asíncrona en prueba de borrado de lugar; corregida con espera explícita.
- Workflows #142 y #143: **FAIL_REAL** porque la prueba buscaba el snapshot bajo un ID de proyecto fijo que no coincidía con el ID del proyecto importado.
- Corrección aplicada: la prueba obtiene el ID real del proyecto desde el estado persistido antes de enumerar snapshots.
- Workflow #144: **PASS_REAL** — [ejecución #38008108247](https://github.com/jonhararagi/wordwaifu/actions/runs/38008108247). Chromium smoke test y validación estructural terminaron con éxito tras corregir el ID usado por la prueba.
- Workflow #145: **IN_PROGRESS**; valida la misma revisión de código junto con los documentos de continuidad actualizados.
- Prueba manual en Windows 11: **NOT_RUN**.

## Funcionalidad con evidencia previa
- **WF-001-B:** CRUD de lugares, movimiento SVG y borrado seguro.
- **WF-002-A/B/C:** CRUD de personajes, acontecimientos y organizaciones con limpieza selectiva de referencias.
- **WF-003-A:** relaciones con ID estable y proyección compatible.
- **WF-004-B:** catálogo multiverso y búsqueda contextual por IDs.
- **WF-004-C.1 · PARCIAL:** snapshots versionados, migración IndexedDB v1→v2, restauración con copia previa y respaldo antes de importar.
- **WF-004-C.2 · PARCIAL / CI PENDIENTE:** snapshot verificado antes de borrar personajes, lugares, acontecimientos, organizaciones y relaciones; se cancela el borrado si falla el respaldo o se alcanza el límite. El borrado de universo comunica que sus snapshots también se eliminarán.

## Límites conocidos
- El borrado de un universo elimina sus snapshots y no tiene recuperación posterior.
- El límite de 25 snapshots rechaza la copia 26 sin sobrescribir las anteriores.
- Las pruebas nuevas de snapshot previo y límite 25/26 requieren CI verde.
- Novel Studio completo, generación narrativa avanzada, Continuity Guard integral y conexión con BotImagen siguen pendientes.

## Siguiente tarea activa
**WF-004-C.2 — Obtener CI verde y cerrar el contrato de snapshots.**
1. Confirmar el resultado del workflow #145 (la ejecución #144 ya está verde) y de cualquier ejecución posterior provocada por cambios documentales.
2. Corregir cualquier fallo con logs reales; no declarar PASS antes de que el workflow termine con éxito.
3. Confirmar snapshot de personaje y frontera 25/26.
4. Mantener el borrado de universo explícitamente irreversible hasta implementar una papelera independiente.
5. Registrar en `docs/DONE.md` el SHA exacto validado y la URL de CI.

## Protocolo
Leer `docs/DONE.md`, `docs/STATUS.md`, `docs/WORK_PROTOCOL.md`, `docs/MASTER_VISION.md`, `docs/DATA_MODEL.md` y `docs/TECHNICAL_RESEARCH.md`. Verificar HEAD, PR y CI vivos antes de tocar código. Una tarea activa por agente. No tocar `main` ni fusionar PR sin autorización.

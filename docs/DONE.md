# DONE — WordWaifu · Punto de continuidad

**Última subtarea cerrada con CI histórico:** WF-004-C.2 — protección de borrados destructivos y límite de snapshots.  
**Trabajo activo:** WF-004-C.3 — papelera y recuperación de universos completos.  
**Estado WF-004-C.3:** IMPLEMENTACIÓN PARCIAL / CI DE HEAD NO CONFIRMADO.  
**Avance global estimado:** 19% de la visión completa, estimación de alcance.  
**Fecha de actualización:** 2026-10-09.

## Estado de Git
- Repositorio: `jonhararagi/wordwaifu`.
- Rama de trabajo: `work/wf-004-c3-project-trash`.
- En la última comparación, la rama estaba **218 commits ahead / 0 behind** respecto de `main`; comprobar de nuevo el HEAD tras esta actualización.
- `main` de referencia: `15a9e0677bf27596dfaef97b5b7d7dfd1569eb98`; no se modificó durante esta tarea.
- PR #1: [abierto en borrador](https://github.com/jonhararagi/wordwaifu/pull/1), sin fusionar. Su head corresponde a otra rama; no contiene el trabajo WF-004-C.3.
- Commits relevantes: [guardia de activación](https://github.com/jonhararagi/wordwaifu/commit/6c80626a75b4791db296d47eb7d524608ea8977b), [regresión de activación](https://github.com/jonhararagi/wordwaifu/commit/d6a4d96c57243bd8ca0bb4a01a1da486894ccb35), [registro de continuidad](https://github.com/jonhararagi/wordwaifu/commit/aea71f6240eaef99ba0e5201416e361e9c8ad4ea), [workflow para ramas de trabajo](https://github.com/jonhararagi/wordwaifu/commit/4502475cdf9b536c0c5d6dbf51a83efc7408ae6d).

## Evidencia histórica — WF-004-C.2
- Los borrados de personaje, lugar, acontecimiento, organización y relación crean un snapshot verificado antes de modificar el canon.
- Chromium verificó el snapshot previo a cada tipo de borrado, referencias sobrevivientes y borrado conjunto de universo/snapshots.
- El límite de 25 snapshots se comprueba: la copia 26 se rechaza sin sobrescribir las anteriores.
- **PASS_REAL histórico:** [CI #38008260869](https://github.com/jonhararagi/wordwaifu/actions/runs/38008260869). Corresponde a la revisión histórica de WF-004-C.2; no acredita los cambios posteriores de WF-004-C.3.
- **NOT_RUN:** inspección manual visual en Windows 11.

## WF-004-C.3 — implementación registrada
- Migración IndexedDB v2→v3 no destructiva con almacén `trash`.
- API de papelera: envío, listado, restauración y borrado permanente por ID.
- Proyecto y snapshots se guardan juntos; la restauración recupera el ID original y rechaza conflicto de ID.
- UI integrada: acción reversible desde el catálogo, pantalla de papelera, restauración y borrado permanente con confirmación separada.
- El catálogo y la búsqueda multiverso filtran IDs en papelera y evitan resucitar proyectos mediante respaldos locales residuales.
- `getProject()` falla cerrado si no puede verificar el tombstone.
- `activateProject()` valida el proyecto y el tombstone dentro de una transacción que incluye `projects`, `metadata` y `trash`; verifica el valor persistido antes de confirmar activación.
- Regresión añadida: un registro residual duplicado en `projects` no permite reactivar un proyecto en papelera ni modificar el ID activo.
- Se documentaron fallos de limpieza, respaldos malformados, rollback por snapshots inconsistentes y límites de lectura de tombstones.

## Gates pendientes — no marcar GREEN
- **CI de HEAD actual: NOT_RUN / NO CONFIRMADO.** La integración consultada no devolvió ejecuciones para los commits revisados; esa respuesta no demuestra que no haya otras ejecuciones.
- Se ajustó `.github/workflows/validate.yml` para escuchar pushes a `main` y ramas `work/**`, además de PR a `main` y dispatch manual. El cambio se guardó en el commit `4502475cdf9b536c0c5d6dbf51a83efc7408ae6d`; todavía no hay evidencia confirmada de que Actions haya arrancado para esta rama.
- Ejecutar sintaxis, pruebas de esquema, Chromium y validador estructural para el HEAD exacto.
- Probar abortos de transacción y fallos reales de cuota de almacenamiento.
- Realizar revisión visual/manual en Windows 11.
- El análisis estático no sustituye la ejecución real de las pruebas.

## Bloqueo y siguiente paso
El workflow tenía `workflow_dispatch`, pero un intento anterior de iniciarlo mediante el navegador quedó bloqueado por falta de sesión autenticada. Para evitar depender de abrir un PR, se añadió el trigger de push para ramas `work/**`. Confirmar ahora si la nueva configuración activa un run; corregir fallos y volver a ejecutar hasta tener evidencia real.
No tocar `main`, no abrir PR nuevo y no fusionar sin autorización.

## Progreso global
**19% estimado** de la visión completa. Esta cifra describe el alcance del producto completo; no significa que WF-004-C.3 esté terminada ni que todas las funciones estén verificadas.

## Protocolo para la siguiente sesión
Leer `docs/STATUS.md`, `docs/WF-004-C3-TRASH-CONTRACT.md`, `docs/WORK_PROTOCOL.md`, `docs/MASTER_VISION.md`, `docs/DATA_MODEL.md` y `docs/TECHNICAL_RESEARCH.md`. Verificar HEAD, CI y PR antes de escribir. Mantener una tarea activa por agente.

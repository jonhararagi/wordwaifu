PARTIAL

# WordWaifu · Punto de continuidad

**Tarea activa:** WF-004-A · Repositorio de persistencia e introducción gradual de IndexedDB.
**Subtarea cerrada:** WF-004-A.2 · Integración de ProjectRepository en el ciclo de vida real de la aplicación.
**Estado:** código y suite automatizada completos para esta subtarea; la prueba manual en Windows 11 y pruebas extra de resiliencia de escritura en el runtime integrado siguen pendientes.
**Fecha:** 2026-10-09.

## Estado de Git
- Repositorio: `jonhararagi/wordwaifu`.
- Rama de trabajo: `foundation/story-foundry-north-star`.
- HEAD BEFORE de WF-004-A.2: `5801760f9ec102fd596aab9acb6369165c9f62c5`.
- HEAD de código validado: `b0adfdef92c8f8376a63d8a4f470d4ae5ce7bf21`.
- CI: **PASS**, [ejecución #37962660799](https://github.com/jonhararagi/wordwaifu/actions/runs/37962660799).
- PR #1: [abierto y en borrador](https://github.com/jonhararagi/wordwaifu/pull/1), no fusionado ni marcado listo.
- `main` permanece intacta en `15a9e0677bf27596dfaef97b5b7d7dfd1569eb98`.
- Este cierre documental genera un commit posterior al HEAD de código probado. Verificar el HEAD vivo al retomar.

## Cambios implementados
- `src/app.js` ya no accede directamente a `localStorage`; lectura de respaldo, copia local y almacenamiento se delegan a `ProjectRepository`.
- El arranque es asíncrono y mantiene la interfaz inerte durante la recuperación/migración, evitando que la demo se renderice primero y tape el proyecto recuperado.
- El guardado normal conserva una copia local inmediata mediante `ProjectRepository.saveBackup()` y encola escrituras IndexedDB verificadas en orden. Las escrituras anteriores no sobrescriben una copia local más reciente.
- La importación valida el archivo, bloquea interacciones durante el reemplazo y encola `saveActive(candidate)` detrás de las escrituras pendientes. El estado activo cambia solo después de que el repositorio confirme IndexedDB o el respaldo local.
- La exportación sigue usando el estado en memoria y no depende de que la última escritura haya tenido éxito.
- `src/project-repository.js` consolida `saveBackup()` y `saveActive()` reutiliza ese método.
- El smoke test verifica que el arranque sincronice registro IndexedDB, puntero activo y respaldo local; también quita el respaldo y confirma la recuperación del proyecto y sus relaciones desde IndexedDB.
- `scripts/validate_project.py` ahora exige los puntos de integración con el repositorio y rechaza el acceso directo a `localStorage` en `src/app.js`.

## Evidencia
- **PASS_REAL:** [CI #37962660799](https://github.com/jonhararagi/wordwaifu/actions/runs/37962660799), ejecución completa exitosa.
- **PASS_STATIC:** 18 pruebas de esquema, incluidas migración retrocompatible de relaciones, referencias válidas e IDs globales.
- **PASS_REAL:** Chromium verificó arranque con IndexedDB, registro activo y respaldo local, migración/fallback y los flujos CRUD existentes de lugares, personajes, acontecimientos, organizaciones y relaciones.
- **PASS_REAL:** se quitó la copia local al final del smoke test y la aplicación recuperó desde IndexedDB el proyecto vigente y sus relaciones.
- **PASS_STATIC:** sintaxis JavaScript y validación estructural terminaron en verde.
- **NOT_RUN:** prueba manual visual/funcional en Windows 11.
- **PARTIAL:** el gate mayor WF-004-A continúa abierto para pruebas extra de escritura fallida en la app integrada y validación manual. `localStorage` se conserva intencionalmente como respaldo/fallback.

## Progreso global
**Estimación: 14%** de la visión completa. Es una estimación ponderada por alcance, no una métrica de líneas o cobertura.

## Siguiente subtarea activa
**WF-004-A.3 — Resiliencia integrada: errores de escritura, cola de guardado y estado de recuperación.**

**TIMER inicial: 2–4 horas**, recalcular tras inspeccionar el runtime.

### Criterios de aceptación
1. Simular fallos de IndexedDB en la app y demostrar que el respaldo se conserva y el estado visible no afirma que IndexedDB guardó.
2. Probar una ráfaga de escrituras; el respaldo local y el registro IndexedDB deben terminar con el estado más reciente.
3. Verificar que una importación inválida o no persistible no sustituya el proyecto activo.
4. Confirmar que exportar funciona durante un fallo de almacenamiento.
5. Mantener 18 pruebas de esquema, CRUD Chromium y validación estructural en PASS.
6. CI PASS; actualizar la continuidad y no modificar ni fusionar `main`.
7. Mantener la validación manual de Windows como `NOT_RUN` hasta hacerla realmente.

### Para retomar
Leer `docs/DONE.md`, `docs/STATUS.md`, `docs/WORK_PROTOCOL.md`, `docs/MASTER_VISION.md`, `docs/DATA_MODEL.md` y `docs/TECHNICAL_RESEARCH.md`. Verificar HEAD/PR/CI actuales. Inspeccionar `src/app.js`, `src/project-repository.js`, `tests/browser_smoke.cjs` y `scripts/validate_project.py`.

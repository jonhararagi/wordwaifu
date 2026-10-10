# Estado de WordWaifu

## Resumen
- Producto: WordWaifu · World & Story Foundry.
- Objetivo: aplicación local/offline-first para organizar universos, canon, atlas temporal, personajes, relaciones, acontecimientos, organizaciones e historias/novelas.
- **Avance global estimado: 19%** de la visión completa; estimación ponderada por alcance, no métrica de código ni cobertura.
- Tecnología actual: HTML/CSS/JavaScript, SVG, IndexedDB y respaldo de compatibilidad en localStorage.
- WordWaifu gestiona canon y planificación narrativa; BotImagen gestiona recursos visuales. La integración todavía no está implementada.

## GitHub
- Repositorio: `jonhararagi/wordwaifu`.
- Rama base histórica: `foundation/story-foundry-north-star`.
- Rama activa de WF-004-C.3: `work/wf-004-c3-project-trash`.
- Commits de implementación de esta iteración: guardia atómica de activación `6c80626a75b4791db296d47eb7d524608ea8977b`; regresión de activación `d6a4d96c57243bd8ca0bb4a01a1da486894ccb35`; contrato actualizado `a59949b10c0437bde42ff013beffb6fa30e8eb1d`.
- PR #1: [abierto en borrador](https://github.com/jonhararagi/wordwaifu/pull/1), sin fusionar.
- `main`: no modificada.
- Workflows #141–#143: **FAIL_REAL** durante la iteración; se corrigieron carreras de aserciones asíncronas y un ID de proyecto fijo en una prueba.
- Workflow de código/pruebas: **PASS_REAL**, [#38008260869](https://github.com/jonhararagi/wordwaifu/actions/runs/38008260869). Verificó borrados con snapshots previos, la retención 25/26 y la cancelación segura al alcanzar la capacidad.
- PR #1 continúa abierto en borrador; `main` sigue intacta en `15a9e0677bf27596dfaef97b5b7d7dfd1569eb98`.
- Prueba manual en Windows 11: **NOT_RUN**.

## Funcionalidad con evidencia previa
- **WF-001-B:** CRUD de lugares, movimiento SVG y borrado seguro.
- **WF-002-A/B/C:** CRUD de personajes, acontecimientos y organizaciones con limpieza selectiva de referencias.
- **WF-003-A:** relaciones con ID estable y proyección compatible.
- **WF-004-B:** catálogo multiverso y búsqueda contextual por IDs.
- **WF-004-C.1 · PARCIAL:** snapshots versionados, migración IndexedDB v1→v2, restauración con copia previa y respaldo antes de importar.
- **WF-004-C.2 · DONE / PASS_REAL:** snapshots previos verificados para los cinco tipos de borrado; el tope de 25/26 se valida; una operación de borrado falla cerrada en el límite; el borrado de universo avisa y elimina sus snapshots en conjunto.

## Límites conocidos
- El borrado de un universo elimina sus snapshots y no tiene recuperación posterior; debe diseñarse una papelera.
- El límite de 25 snapshots rechaza la copia 26 sin sobrescribir las anteriores.
- La revisión manual de la interfaz en Windows 11 sigue pendiente.
- Novel Studio completo, generación narrativa avanzada, Continuity Guard integral y conexión con BotImagen siguen pendientes.

## Tarea activa
**WF-004-C.3 — Papelera y recuperación de universos completos eliminados (EN CURSO).**
- API del repositorio implementada en `work/wf-004-c3-project-trash`.
- Migración IndexedDB v2→v3 y pruebas del ciclo de papelera añadidas.
- **CI de esta rama: NOT_RUN.** Las pruebas nuevas se añadieron, pero no se ejecutaron en esta sesión.
- UI integrada: la acción estándar «Enviar a papelera» conserva datos y snapshots; en Papelera se restaura por ID o se borra permanentemente con confirmación.
- Cobertura adicional: fallo de limpieza y respaldo malformado mantienen la entrada de papelera; restauración con snapshot inconsistente revierte escrituras parciales; la búsqueda multiverso filtra los IDs en papelera y no debe volver a exponer universos desde respaldos locales residuales.
- Se añadió una regresión para impedir que la búsqueda multiverso exponga un proyecto en papelera desde un respaldo local residual.
- El catálogo, `getProject()` y `activateProject()` fallan cerrados ante tombstones no verificables o IDs en papelera; la activación valida proyecto, papelera y metadatos en una sola transacción y verifica el ID activo después de escribir. Se añadió una regresión con un registro residual duplicado para comprobar que un universo en papelera no puede reactivarse ni cambiar el proyecto activo.
- Intento previo de dispatch bloqueado: navegador sin sesión autenticada de GitHub.
- Pendiente: ejecutar GitHub Actions, probar fallos reales de cuota y realizar prueba manual Windows 11.

## Protocolo
Leer `docs/DONE.md`, `docs/STATUS.md`, `docs/WORK_PROTOCOL.md`, `docs/MASTER_VISION.md`, `docs/DATA_MODEL.md` y `docs/TECHNICAL_RESEARCH.md`. Verificar HEAD, PR y CI vivos antes de tocar código. Una tarea activa por agente. No tocar `main` ni fusionar PR sin autorización.

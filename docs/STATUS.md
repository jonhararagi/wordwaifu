# Estado de WordWaifu

## Resumen
- Producto: WordWaifu · World & Story Foundry.
- Objetivo: aplicación local/offline-first para organizar universos, canon, atlas temporal, personajes, relaciones, acontecimientos, organizaciones e historias/novelas.
- **Avance global estimado: 19%** de la visión completa. Estimación ponderada por alcance, no métrica de código ni cobertura.
- Tecnología actual: HTML/CSS/JavaScript con SVG, IndexedDB y una copia de compatibilidad en localStorage. Una migración a TypeScript/React/Vite sigue siendo posterior a estabilizar el modelo y los gates de datos.
- WordWaifu gestiona el canon y la planificación narrativa; BotImagen gestiona creación visual/recursos. La integración todavía no está implementada.

## GitHub
- Repositorio: `jonhararagi/wordwaifu`.
- Rama de trabajo principal: `foundation/story-foundry-north-star`.
- Último commit de código de esta iteración: `a04ebe13dcf2fbc3f23cae8e7bd101be02209ee2` (tests).
- PR #1: [abierto en borrador](https://github.com/jonhararagi/wordwaifu/pull/1), sin fusionar.
- `main`: no se modificó durante esta tarea.
- PR #2 de trabajo se abrió inicialmente contra la rama base de desarrollo; los cambios se trasladaron a la rama fuente de PR #1 para que el gate de validación existente pueda ejecutarse allí.
- CI de esta iteración: **PENDING / UNKNOWN** desde el conector en el momento de actualizar este documento. No declarar PASS hasta comprobar la ejecución real.
- Inspección manual en Windows 11: **NOT_RUN**.

## Funcionalidad con evidencia previa
- **WF-001-B:** CRUD de lugares, movimiento SVG y borrado seguro.
- **WF-002-A:** CRUD de personajes y limpieza selectiva de referencias.
- **WF-002-B:** CRUD de acontecimientos y sincronización de enlaces a lugares.
- **WF-002-C:** CRUD de organizaciones, responsables/miembros/sede por IDs existentes.
- **WF-003-A:** registros de relación con ID estable, validación de extremos y proyección compatible desde/hacia listas antiguas.
- **WF-004-B:** catálogo multiverso, búsqueda por entidad y apertura contextual por `projectId + entityType + entityId`.
- **WF-004-C.1 · PARCIAL:** snapshots versionados, migración IndexedDB v1→v2, gestor UI, restauración con copia previa y snapshot automático antes de importar.
- **WF-004-C.2 · IMPLEMENTACIÓN AÑADIDA, CI PENDIENTE:** personajes, lugares, acontecimientos, organizaciones y relaciones intentan crear y verificar un snapshot antes de eliminar. Si el respaldo falla o se alcanza el límite, se cancela el borrado. Se añade prueba de Chromium para comprobar que el snapshot de personaje conserva el registro previo y una prueba de frontera para el límite de 25 snapshots.

## Límites conocidos
- La eliminación de un universo completo elimina también sus snapshots. La confirmación ahora lo dice explícitamente; no hay papelera ni recuperación de universos eliminados.
- El límite de 25 snapshots rechaza la copia número 26 para no sobrescribir las existentes.
- Las pruebas nuevas todavía requieren una ejecución CI satisfactoria antes de etiquetarlas PASS_REAL.
- Generadores narrativos avanzados, Novel Studio, Continuity Guard completo y conexión con BotImagen siguen pendientes.

## Siguiente tarea activa
**WF-004-C.2 — Verificación CI y cierre del contrato de snapshots.**

Criterios:
1. Confirmar el resultado del workflow de Chromium para los commits de esta iteración.
2. Corregir cualquier fallo de sintaxis, prueba o flujo detectado; no declarar PASS con una ejecución pendiente.
3. Verificar que la prueba del borrado de personaje encuentra un snapshot válido que conserva el estado previo.
4. Verificar que se conservan 25 snapshots y se rechaza el intento 26.
5. Mantener la eliminación de universo explícita como irreversible hasta implementar una papelera independiente.
6. Actualizar `docs/DONE.md` con HEAD vivo, CI, archivos y limitaciones.

## Protocolo
Leer `docs/DONE.md`, `docs/STATUS.md`, `docs/WORK_PROTOCOL.md`, `docs/MASTER_VISION.md`, `docs/DATA_MODEL.md` y `docs/TECHNICAL_RESEARCH.md`. Verificar HEAD, PR y CI vivos antes de tocar código. Una tarea activa por agente. No tocar `main` ni fusionar PR sin autorización.

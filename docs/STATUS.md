# Estado del proyecto

## Resumen actual

- Producto: WordWaifu — World & Story Foundry.
- Objetivo: aplicación local para múltiples universos narrativos, con índice maestro, atlas 2D temporal, fichas y relaciones, generadores de historias/lore, planificación de novelas y auditoría de continuidad.
- **Estado global estimado: 9%** de la visión completa. Es una estimación ponderada por alcance, no una medición de líneas de código ni de cobertura. El gate de atlas MVP tiene CRUD de ubicaciones con pruebas automatizadas; la mayoría de módulos narrativos siguen pendientes.
- Dirección tecnológica futura: TypeScript + React + Vite después de estabilizar el prototipo actual.
- Núcleo: offline-first, sin IA/API obligatoria.
- Separación de producto: WordWaifu administra canon e historias; BotImagen administra diseño visual, referencias, prompts e imágenes. La integración futura mediante IDs/rutas/metadatos aún no está implementada.

## Estado de GitHub verificado

- Repositorio: `jonhararagi/wordwaifu`.
- Rama de trabajo: `foundation/story-foundry-north-star`.
- HEAD de código validado: `7132503de33a32473c297b12df9c4262fa07e032`.
- Rama `main`: no modificada por esta tarea; HEAD verificado `15a9e0677bf27596dfaef97b5b7d7dfd1569eb98`.
- PR #1: [abierto en borrador](https://github.com/jonhararagi/wordwaifu/pull/1).
- CI del HEAD validado: [PASS, ejecución #37922783841](https://github.com/jonhararagi/wordwaifu/actions/runs/37922783841).
- La persistencia de documentación genera un commit posterior; en la próxima sesión, inspeccionar siempre el HEAD real antes de actuar.

## Completado

### WF-001-A — Validación de importación y smoke test del atlas
- Validador/normalizador de proyectos en `src/project-schema.js`.
- Importación segura: un documento inválido no reemplaza el proyecto activo.
- 8 pruebas de esquema en `tests/test_project_schema.cjs`.
- Pruebas Playwright/Chromium integradas en CI.
- Corregida la prioridad de presencias cuando entradas de historial comparten un capítulo frontera.
- Corregido el reinicio de proyecto vacío para restablecer búsqueda, cronología, zoom, modo del mapa y capas.

### WF-001-B — CRUD básico de ubicaciones y marcadores
- Edición de nombre, categoría/tipo y descripción conservando ID.
- Movimiento de marcador SVG con coordenadas del espacio de diseño, límites y persistencia.
- Borrado con confirmación, reasignación de hijos y limpieza selectiva de referencias de historial/eventos.
- Prueba de Chromium cubre edición, arrastre, recarga, exportación/importación, rechazo seguro de importación inválida y borrado con relaciones cruzadas.
- **Gate WF-001 Atlas MVP: DONE en CI headless.**
- **NOT_RUN:** prueba visual y manual en la PC Windows 11 del usuario.

## Evidencia vigente
- **PASS_REAL:** smoke test de Chromium en [CI #37922783841](https://github.com/jonhararagi/wordwaifu/actions/runs/37922783841), incluyendo persistencia de coordenadas y referencias después de borrar/exportar/importar.
- **PASS_STATIC:** sintaxis JavaScript, 8 pruebas del esquema y validador estructural de CI.
- **NOT_RUN:** validación manual en Windows 11.
- **PARTIAL:** la fase general de canon local no está completa; el CRUD de personajes, organizaciones y eventos queda pendiente, igual que IndexedDB y copias de seguridad.

## Próxima tarea activa

**WF-002-A — CRUD de fichas de personaje con referencias seguras.**

**TIMER inicial: 2–4 horas** para implementación y pruebas automáticas; recalcular tras inspeccionar los campos y referencias reales.

Criterios:
1. Editar campos esenciales de un personaje sin cambiar su ID.
2. Borrar personaje con confirmación.
3. Eliminar referencias entrantes al personaje desde relaciones, ubicaciones y eventos, preservando las demás referencias y entidades.
4. Exportar/importar el proyecto tras los cambios y pasar el validador.
5. Añadir pruebas de navegador para editar, borrar, recargar y comprobar referencias.
6. Ejecutar CI; actualizar y sobrescribir `docs/DONE.md` al cerrar la tarea.

## Módulos mayores aún no implementados
- IndexedDB detrás de un repositorio desacoplado; actualmente se usa localStorage.
- Migración futura a TypeScript + React + Vite.
- Índice maestro completo multiverso.
- Atlas histórico con épocas configurables y comparación de estados.
- Red de relaciones completa, rutas y acontecimientos enlazados a escenas.
- Biblioteca de fuentes e importadores autorizados.
- Generador de ADN narrativo, historias/lore y elenco.
- Novel Studio y exportación de manuscritos.
- Content Guard y avisos por capítulo/escena.
- Integración WordWaifu/BotImagen.
- Copias de seguridad y validación manual en Windows.

## Continuidad
Antes de la próxima sesión:
1. Leer `docs/DONE.md`, `docs/STATUS.md`, `docs/WORK_PROTOCOL.md`, `docs/MASTER_VISION.md` y `docs/DATA_MODEL.md`.
2. Consultar rama/HEAD, PR y últimas ejecuciones de CI.
3. Retomar desde WF-002-A, sin saltar a los generadores narrativos.
4. **Sobrescribir `docs/DONE.md`** al cerrar el próximo trabajo; no convertirlo en un registro histórico interminable.

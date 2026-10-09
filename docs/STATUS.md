# Estado del proyecto

## Resumen actual

- Producto: WordWaifu — World & Story Foundry.
- Objetivo: aplicación local para varios universos narrativos, con índice maestro, atlas 2D temporal, fichas y relaciones, generadores de historias/lore, planificación de novelas y auditoría de continuidad.
- **Estado global estimado: 8%** de la visión completa. Es una estimación orientativa por alcance, no una medición de código. La documentación y la base técnica inicial están establecidas; la mayoría de módulos narrativos siguen sin implementarse.
- Dirección tecnológica de producción: TypeScript + React + Vite como migración futura, después de estabilizar el prototipo web actual.
- Núcleo: offline-first, sin IA/API obligatoria.
- Separación de producto: WordWaifu administra canon e historias; BotImagen administra diseño visual, referencias, prompts e imágenes. Integración futura mediante IDs/rutas/metadatos, aún no implementada.

## Estado de GitHub al registrar esta entrega

- Repositorio: `jonhararagi/wordwaifu`.
- Rama de trabajo: `foundation/story-foundry-north-star`.
- HEAD de código validado: `6375ac099f5b3ee9f3ef1a63fd83a1ad5efa3ffa`.
- Rama `main` inspeccionada sin modificaciones de esta tarea: `15a9e0677bf27596dfaef97b5b7d7dfd1569eb98`.
- PR #1: abierto en borrador, pendiente de revisión e integración: https://github.com/jonhararagi/wordwaifu/pull/1
- Validación CI del HEAD de código: PASS, ejecución https://github.com/jonhararagi/wordwaifu/actions/runs/37888290629
- Los documentos de continuidad se actualizan en un commit posterior a ese HEAD; al reanudar, inspeccionar siempre el HEAD actual de la rama en lugar de asumir que el SHA aquí citado sigue siendo el último.

## Hecho en esta tarea

### DONE — WF-001-A: validación de importación y smoke test del atlas
- Añadido `src/project-schema.js` para validar y normalizar proyectos JSON antes de importarlos.
- La importación rechaza IDs duplicados, referencias a entidades inexistentes, ciclos en la jerarquía de lugares, marcadores inválidos y otros campos mal formados.
- La aplicación no sustituye el proyecto activo si el archivo importado no supera la validación.
- Añadidas 8 pruebas de esquema en `tests/test_project_schema.cjs`.
- Añadida prueba de navegador Chromium en `tests/browser_smoke.cjs` y CI con Playwright.
- Corregida la prioridad de las presencias de un personaje cuando dos intervalos comparten un capítulo frontera.
- Corregido el flujo de crear un proyecto nuevo: restablece búsqueda, época, modo del mapa, zoom y capas.
- La prueba de Chromium confirma carga de app, selección de marcadores, capas, navegación por teclado, búsqueda, ubicación por capítulo, estado vacío, creación/selección de lugar, persistencia tras recarga, export JSON, round-trip de importación y rechazo seguro de importación inválida.

### Evidencia actual
- **PASS_REAL:** smoke test de Chromium en GitHub Actions; no se registraron errores no capturados de página.
- **PASS_STATIC:** sintaxis JavaScript, 8 pruebas del esquema y validador estructural.
- **NOT_RUN:** prueba manual en Windows 11 del usuario.
- **PARTIAL:** WF-001 completo. El prototipo todavía no ofrece todas las operaciones previstas para el marcador, especialmente editar, mover y eliminar ubicaciones desde la interfaz.

## Próxima tarea activa

**WF-001-B — Completar las operaciones CRUD del atlas para ubicaciones y marcadores.**

TIMER inicial: 2–4 horas para implementación y pruebas automatizadas; recalcular al inspeccionar el código.

Alcance:
1. Inspeccionar el flujo actual de creación de entidades y eventos.
2. Permitir abrir una ubicación existente para editar nombre, tipo y descripción, conservando su ID y relaciones.
3. Permitir mover su marcador en el mapa y guardar las coordenadas de forma estable.
4. Permitir eliminar una ubicación con confirmación y proteger/reasignar sus referencias (personajes, eventos y ubicaciones hijas); no dejar IDs rotos.
5. Añadir pruebas de navegador y actualizar el modelo/validador solo si es necesario.
6. Ejecutar CI y guardar el resultado. No declarar completa WF-001 mientras falte alguna operación requerida del atlas.

Criterios de aceptación:
- Se puede crear, seleccionar, editar, mover y eliminar una ubicación.
- La edición conserva el ID y las relaciones no afectadas.
- Las eliminaciones no producen referencias colgantes silenciosas.
- El estado sobrevive a recarga y exportación/importación.
- La prueba de Chromium pasa y no genera errores de página.
- El resultado y los límites se registran en `docs/DONE.md`.

## Funciones mayores aún no implementadas

- IndexedDB detrás de un repositorio desacoplado; en el prototipo la persistencia sigue siendo localStorage.
- Migración de producción a TypeScript + React + Vite.
- Índice maestro completo multiverso.
- Atlas histórico con épocas configurables y comparación de estados.
- Red de relaciones completa y rutas narrativas persistentes.
- Biblioteca de fuentes e importadores autorizados para wikis.
- Generador de ADN narrativo, historias y lore, protagonistas/elenco, Novel Studio.
- Content Guard y avisos por capítulo/escena antes de exportar.
- Integración entre WordWaifu y BotImagen.
- Prueba manual en Windows y una ronda más amplia de accesibilidad/usabilidad.

## Continuidad

Antes de comenzar la siguiente sesión:
1. Leer `docs/DONE.md`, `docs/WORK_PROTOCOL.md`, `docs/STATUS.md` y `docs/MASTER_VISION.md`.
2. Consultar la rama y HEAD actual, PR y últimos workflows.
3. Continuar desde WF-001-B, no empezar el generador de historias ni otro módulo independiente.
4. Actualizar y **sobrescribir `docs/DONE.md` al cerrar la tarea siguiente**, conservando el estado anterior solo si fuese útil como registro separado.

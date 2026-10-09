PARTIAL

# WordWaifu · Punto de continuidad

**Tarea activa:** WF-004-A · Repositorio de persistencia e introducción gradual de IndexedDB.
**Subtarea trabajada:** WF-004-A.1 · Adaptador de persistencia con migración verificada y fallback.
**Estado:** el adaptador y sus pruebas aisladas pasan CI. La aplicación principal todavía usa directamente `localStorage`; la integración con el arranque, guardado e importación sigue pendiente.
**Fecha:** 2026-10-09.

## Estado de Git
- Repositorio: `jonhararagi/wordwaifu`.
- Rama: `foundation/story-foundry-north-star`.
- HEAD BEFORE de WF-004-A.1: `e38abfbc8597d938e895c3fa21a92b72eddf708c`.
- HEAD de código validado: `6b0d70168e5a843b7deba4b78527dc34498e214e`.
- CI: **PASS**, [ejecución #37961153186](https://github.com/jonhararagi/wordwaifu/actions/runs/37961153186).
- PR #1: [abierto y en borrador](https://github.com/jonhararagi/wordwaifu/pull/1), sin fusionar ni marcar listo.
- `main` permanece intacta en `15a9e0677bf27596dfaef97b5b7d7dfd1569eb98`.
- Este commit actualiza documentación después del HEAD de código probado. En la próxima sesión consultar siempre el HEAD vivo de la rama.

## Cambios persistidos
- Nuevo `src/project-repository.js`, cargado antes de `src/app.js`, con una clase `ProjectRepository` que separa la API de persistencia de la lógica narrativa.
- Base IndexedDB con almacenes `projects` y `metadata`. Los proyectos se guardan como registros con clave `projectId` y contenido `data`; metadatos identifican el proyecto activo.
- `saveActive(project)` escribe primero la copia recuperable de `localStorage`, escribe proyecto y puntero activo dentro de una transacción IndexedDB, y relee el registro para verificar el contenido.
- La copia de `localStorage` no se borra tras migrar. Si IndexedDB no está disponible o la transacción falla, el adaptador usa el fallback local cuando pudo conservarlo; solo falla si no pudo guardar en ninguno de los dos sitios.
- `loadActive()` migra un proyecto anterior hacia IndexedDB, conserva el respaldo local y repara IndexedDB cuando la copia local difiere, cubriendo una posible interrupción entre ambas escrituras.
- Actualizada la validación estructural para comprobar el nuevo módulo y el orden de los scripts. CI revisa sintaxis del repositorio y del smoke test.
- Las pruebas Chromium usan claves y base de datos aisladas para no tocar datos normales del test.

## Evidencia
- **PASS_STATIC:** sintaxis JavaScript y 18 pruebas del esquema aprobadas en [CI #37961153186](https://github.com/jonhararagi/wordwaifu/actions/runs/37961153186).
- **PASS_REAL:** Chromium probó migración desde el respaldo antiguo, retención de la copia local, reparación desde una copia más reciente y fallback cuando IndexedDB no existe.
- **PASS_REAL:** el smoke test completo de la aplicación terminó sin errores de página en esa ejecución.
- **FAIL_REAL durante desarrollo, corregido:** la primera corrida detectó una clave IndexedDB incompatible con el formato del proyecto (`project.id`). Se cambió a una clave `projectId` con el documento dentro de `data`; la siguiente ejecución pasó.
- **PARTIAL:** el adaptador aún no sustituye las llamadas directas de `src/app.js` a `localStorage`. No declarar migrada la aplicación completa hasta integrar y probar el nuevo ciclo de arranque/guardado.
- **NOT_RUN:** prueba manual visual y funcional en Windows 11.

## Inventario de riesgo para la integración
- Lectura inicial síncrona en `loadProject()`.
- Escritura síncrona en `saveProject()`, usada desde múltiples operaciones CRUD.
- Escritura directa dentro de `importProject()`.
- Guardado al crear un proyecto y al inicializar la aplicación.
- Exportación produce el JSON desde memoria y debe seguir funcionando aunque falle el almacenamiento.

No convertir únicamente el backend de guardado en asíncrono mientras el arranque siga siendo síncrono. La integración debe definir un estado de inicialización, serializar escrituras y no sustituir el estado activo antes de validar y guardar correctamente una importación.

## Progreso global
**Estimación: 14%** de la visión completa. Estimación subjetiva ponderada por alcance, no por líneas ni cobertura. Esta subtarea es infraestructura probada en aislamiento y no justifica aumentar el porcentaje funcional.

## Siguiente subtarea activa
**WF-004-A.2 — Integrar ProjectRepository al arranque, guardado, proyecto nuevo e importación/exportación.**

**TIMER inicial: 3–5 horas**, recalcular tras inspeccionar todos los puntos de mutación.

### Criterios de aceptación
1. Arranque asíncrono: leer el proyecto activo por el repositorio y evitar que la demo se renderice y luego sobrescriba el proyecto recuperado.
2. Un único flujo de persistencia serializado; cambios rápidos no pueden dejar datos antiguos sobrescribiendo datos recientes.
3. Guardar y verificar IndexedDB; mantener `localStorage` como respaldo/fallback durante la transición.
4. Importar valida antes de sustituir el estado; el cambio activo ocurre solo tras una escritura exitosa. Exportar sigue disponible si falla el guardado.
5. Crear/borrar proyecto, organizaciones, relaciones y otras entidades conservan las pruebas previas.
6. Pruebas de recarga, migración, fallback, escritura fallida, proyecto vacío y round-trip; CI PASS.
7. Actualizar continuidad y documentos relacionados. No modificar ni fusionar `main`.

### Para retomar
Leer `docs/DONE.md`, `docs/STATUS.md`, `docs/WORK_PROTOCOL.md`, `docs/MASTER_VISION.md`, `docs/DATA_MODEL.md` y `docs/TECHNICAL_RESEARCH.md`. Verificar HEAD/PR/CI. Revisar `src/app.js` (`loadProject`, `saveProject`, `importProject`, creación de proyecto y guardado inicial), `src/project-repository.js` y `tests/browser_smoke.cjs`.

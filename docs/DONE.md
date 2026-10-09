DONE

# WordWaifu · Punto de continuidad

**Tarea cerrada:** WF-004-B.3 · Apertura contextual desde resultados del índice maestro.
**Estado:** PASS_REAL. La apertura cambia de universo de forma validada, enfoca la entidad exacta por ID y revierte el cambio si la persistencia o el destino fallan.
**Fecha:** 2026-10-09.

## Estado de Git
- Repositorio: `jonhararagi/wordwaifu`.
- Rama de trabajo: `foundation/story-foundry-north-star`.
- HEAD BEFORE de esta iteración: `a972cdcc76de4a9f5211626cbe4ed747b63a29c7`.
- HEAD de código probado: `83a7a6afb96725b3d1c5301c6dc0ed025c9ef205`.
- CI final de código y pruebas: **PASS_REAL**, [ejecución #38000904219](https://github.com/jonhararagi/wordwaifu/actions/runs/38000904219).
- CI anterior del mismo conjunto funcional: **PASS_REAL**, [ejecución #38000652000](https://github.com/jonhararagi/wordwaifu/actions/runs/38000652000).
- El cierre documental se añadirá como un commit posterior a `83a7a6afb96725b3d1c5301c6dc0ed025c9ef205`; verificar ese HEAD nuevo después del commit antes de la siguiente tarea.
- PR #1: [abierto y en borrador](https://github.com/jonhararagi/wordwaifu/pull/1), no fusionado ni marcado listo.
- `main` permanece intacta en `15a9e0677bf27596dfaef97b5b7d7dfd1569eb98`.

## Trabajo verificado
- El resultado del índice maestro mantiene la identidad compuesta `projectId + entityType + entityId`; un ID de ficha repetido en dos universos no colisiona.
- Antes de abrir, la aplicación guarda/verifica el proyecto activo en IndexedDB. El destino de otro universo se lee desde IndexedDB directamente, sin aceptar un respaldo local sin verificar como destino confiable.
- El proyecto destino se valida y la ficha se busca por tipo e ID exacto. Si el proyecto o la ficha desaparecen después de la búsqueda, no se abre una ficha con nombre parecido.
- La transición solo se confirma cuando la persistencia en IndexedDB se verifica. Si falla, la app restaura el proyecto y espacio de trabajo anteriores.
- Se conservan otros universos y sus registros; la búsqueda no edita el proyecto activo.
- El resultado abierto cierra el gestor de proyectos, muestra la ficha y traslada el foco de teclado al destino exacto.
- Añadidas aserciones explícitas de foco para el personaje exacto en el universo activo y para un personaje con el mismo ID en un segundo universo.

## Archivos cambiados en esta iteración
- `tests/browser_smoke.cjs`: dos comprobaciones de foco de teclado tras abrir desde el índice maestro. No se cambió lógica de producción porque ya implementaba el contrato y pasó su suite previa; este cierre confirma el comportamiento con una prueba adicional.
- `docs/DONE.md`: reemplazado por este punto de continuidad.
- `docs/STATUS.md`, `docs/ROADMAP.md`, `docs/WORK_PROTOCOL.md`: estado de hito y próxima tarea actualizados.
- `docs/TECHNICAL_RESEARCH.md`: nuevo registro de decisiones de navegación contextual y recuperación ante fallos.

## Evidencia
- **PASS_REAL:** [CI #38000904219](https://github.com/jonhararagi/wordwaifu/actions/runs/38000904219), incluye sintaxis, validador, prueba Chromium y validación estructural.
- **PASS_STATIC:** 18 pruebas de esquema aprobadas.
- **PASS_REAL:** Chromium verifica búsqueda multiverso por IDs compuestos, filtro por tipo/campos, normalización de acentos, resultado vacío tras búsqueda completa y error de IndexedDB declarado como búsqueda parcial.
- **PASS_REAL:** proyecto destino ausente, ficha eliminada tras la búsqueda y fallo simulado de persistencia son rechazados sin perder el proyecto anterior.
- **PASS_REAL:** apertura exacta en el universo actual y en un segundo universo; ambas fichas reciben foco de teclado.
- **PASS_REAL:** suite de regresión de CRUD de ubicaciones, personajes, acontecimientos, organizaciones, relaciones, persistencia IndexedDB, migración, import/export y fallos de almacenamiento completada sin errores de página.
- **NOT_RUN:** validación manual/visual en la PC Windows 11 del usuario; Chromium CI corre en modo headless.

## Límites conocidos
- La búsqueda reconstruye resultados desde proyectos locales en cada consulta; no hay índice invertido persistente.
- El respaldo local es un único snapshot compatible, no un historial versionado con selección y restauración.
- Aún no existe historial de revisiones del canon por entidad ni un mecanismo de comparación visual entre versiones.

## Progreso global
**Estimación: 18%** de la visión completa, ponderada subjetivamente por alcance. No representa porcentaje de código ni cobertura. Los circuitos CRUD, persistencia, selector multiverso, borrado seguro, índice maestro y apertura contextual tienen cobertura automatizada. Generadores narrativos, Novel Studio, Content Guard, snapshots versionados, auditoría temporal e integración con BotImagen siguen pendientes.

## Siguiente tarea activa
**WF-004-C.1 — Respaldos versionados y restauración segura.**

**TIMER inicial: 4–7 horas**, recalcular tras inspeccionar el esquema IndexedDB y los puntos de importación, borrado y cambio de proyecto.

### Criterios de aceptación
1. Migrar el esquema IndexedDB de forma no destructiva y añadir un almacén de snapshots versionados.
2. Registrar snapshot inmutable con ID propio, projectId, fecha, causa y copia de datos validable.
3. Crear respaldo antes de las acciones que sustituyen o destruyen datos; no llamar «respaldo verificado» a una copia cuyo guardado/lectura no haya sido comprobado.
4. Enumerar snapshots por proyecto, aislando por ID de proyecto incluso si dos universos comparten nombres.
5. Restaurar solo tras confirmación y validación; mantener el ID del proyecto y dejar intactos los demás proyectos.
6. Definir retención/capacidad y borrado individual de snapshots sin borrar el proyecto ni otros snapshots.
7. Probar migración de una base IndexedDB v1, crear/listar/restaurar, proyectos con nombres/IDs similares, JSON inválido, error de persistencia y que el activo no cambie si falla una restauración.
8. Chromium CI PASS, actualizar documentos y sobrescribir de nuevo `docs/DONE.md`.
9. Mantener `main` intacta, PR #1 en borrador y la prueba manual de Windows como `NOT_RUN` hasta ejecutarla.

### Antes de empezar
Leer `docs/DONE.md`, `docs/STATUS.md`, `docs/WORK_PROTOCOL.md`, `docs/MASTER_VISION.md`, `docs/DATA_MODEL.md` y `docs/TECHNICAL_RESEARCH.md`. Verificar HEAD/PR/CI vivos. Inspeccionar `src/project-repository.js`, `src/app.js`, `index.html`, `tests/browser_smoke.cjs` y las pruebas de migración existentes.

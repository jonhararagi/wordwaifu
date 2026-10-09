# Estado de WordWaifu

## Resumen
- Producto: WordWaifu · World & Story Foundry.
- Objetivo: aplicación local/offline-first para organizar universos, canon, atlas temporal, personajes, relaciones, acontecimientos, organizaciones e historias/novelas.
- **Avance global estimado: 18%** de la visión completa. Estimación ponderada por alcance, no métrica de código ni cobertura.
- Tecnología: HTML/CSS/JavaScript con SVG, IndexedDB y respaldo compatible en `localStorage`.
- WordWaifu gestiona canon y planificación narrativa; BotImagen gestiona creación visual y assets. La integración entre productos no está implementada.

## GitHub verificado
- Repositorio: `jonhararagi/wordwaifu`.
- Rama: `foundation/story-foundry-north-star`.
- HEAD de código probado: `83a7a6afb96725b3d1c5301c6dc0ed025c9ef205`.
- CI: [PASS_REAL, ejecución #38000904219](https://github.com/jonhararagi/wordwaifu/actions/runs/38000904219).
- PR #1: [abierto en borrador](https://github.com/jonhararagi/wordwaifu/pull/1), sin fusionar.
- `main`: intacta en `15a9e0677bf27596dfaef97b5b7d7dfd1569eb98`.
- El cierre documental generará un commit posterior al código probado; validar el HEAD vivo al retomar.

## Completado con CI
- **WF-001-A/B:** validador/importación segura, CRUD de ubicaciones, movimiento de marcadores, reparentado y borrado selectivo.
- **WF-002-A/B/C:** CRUD de personajes, acontecimientos y organizaciones con IDs estables y referencias protegidas.
- **WF-003-A:** relaciones canónicas de primera clase con migración retrocompatible.
- **WF-004-A:** repositorio desacoplado, IndexedDB, respaldo local y pruebas de recuperación/errores.
- **WF-004-B.1.1/B.1.2:** catálogo multiverso, creación/cambio de universo y borrado seguro con protección del proyecto activo.
- **WF-004-B.2:** índice maestro multiverso de solo lectura, filtro, búsqueda por campos y acentos, con estado parcial honesto cuando falla IndexedDB.
- **WF-004-B.3:** apertura contextual desde el índice maestro con validación exacta del proyecto/ficha, rollback ante fallos, protección frente a destinos obsoletos y foco de teclado en la ficha abierta.

## WF-004-B.3 — DONE
- **PASS_REAL:** [CI #38000904219](https://github.com/jonhararagi/wordwaifu/actions/runs/38000904219).
- **PASS_STATIC:** 18 pruebas de esquema y validación de estructura en CI.
- **PASS_REAL:** apertura por `projectId + entityType + entityId`; IDs de personajes repetidos en universos diferentes abren la ficha correcta.
- **PASS_REAL:** destino borrado, ficha exacta inexistente y fallo simulado al persistir el destino dejan el universo anterior activo.
- **PASS_REAL:** el foco de teclado se transfiere al encabezado de la ficha exacta en el universo actual y en uno distinto.
- **PASS_REAL:** CRUD, persistencia, import/export, recuperación de IndexedDB y pruebas de resiliencia siguen en verde.
- **NOT_RUN:** inspección manual en Windows 11.

## Límites y riesgos pendientes
- La búsqueda multiverso reconstruye resultados en cada consulta; un índice persistente solo debería añadirse con métricas y estrategia de invalidación.
- El respaldo local es una sola copia compatible, sin snapshots versionados ni historial de restauraciones.
- No hay historial de cambios/rollback por entidad del canon.
- Los generadores sin IA, Novel Studio, Continuity Guard e integración con BotImagen permanecen pendientes.

## Siguiente tarea activa
**WF-004-C.1 — Respaldos versionados y restauración segura.**
**TIMER inicial: 4–7 horas.** Añadir un almacén versionado en IndexedDB sin pérdida de la base existente; crear/listar/restaurar snapshots identificados por proyecto, con confirmación, validación, retención y pruebas de rollback ante fallos.

## Protocolo
Leer `docs/DONE.md`, `docs/STATUS.md`, `docs/WORK_PROTOCOL.md`, `docs/MASTER_VISION.md`, `docs/DATA_MODEL.md` y `docs/TECHNICAL_RESEARCH.md`. Verificar HEAD, PR y CI vivos antes de escribir. Ejecutar una tarea activa por vez. Sobrescribir `docs/DONE.md` al cerrar cada tarea. No tocar `main` ni fusionar el PR sin autorización. Mantener prueba manual de Windows como `NOT_RUN` hasta realizarla.

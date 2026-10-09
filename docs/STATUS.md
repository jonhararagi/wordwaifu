# Estado de WordWaifu

## Resumen
- Producto: WordWaifu · World & Story Foundry.
- Objetivo: aplicación local/offline-first para organizar universos, canon, atlas temporal, personajes, relaciones, acontecimientos e historias/novelas.
- **Avance global estimado: 16%** de la visión completa. Estimación ponderada por alcance, no métrica de código ni cobertura.
- Tecnología: HTML/CSS/JavaScript con SVG, IndexedDB y respaldo compatible en `localStorage`.
- WordWaifu gestiona canon y planificación narrativa; BotImagen gestiona creación visual y assets. La integración entre productos no está implementada.

## GitHub verificado
- Repositorio: `jonhararagi/wordwaifu`.
- Rama: `foundation/story-foundry-north-star`.
- HEAD de código candidato: `1f363739b931f2732fe076b60cb488414fbdbe71`.
- CI: [en ejecución al último chequeo, #37996000708](https://github.com/jonhararagi/wordwaifu/actions/runs/37996000708).
- PR #1: [abierto en borrador](https://github.com/jonhararagi/wordwaifu/pull/1), sin fusionar.
- `main`: intacta en `15a9e0677bf27596dfaef97b5b7d7dfd1569eb98`.
- Consultar HEAD y CI vivos antes de continuar; el commit documental siguiente tendrá otro SHA.

## Completado con CI en tareas anteriores
- **WF-001-A:** validador de JSON e importación segura.
- **WF-001-B:** CRUD de ubicaciones, movimiento de marcadores, reparentado y borrado selectivo. [CI #37922783841](https://github.com/jonhararagi/wordwaifu/actions/runs/37922783841).
- **WF-002-A:** CRUD de personajes y limpieza segura. [CI #37925820239](https://github.com/jonhararagi/wordwaifu/actions/runs/37925820239).
- **WF-002-B:** CRUD de acontecimientos y sincronización de referencias. [CI #37927849547](https://github.com/jonhararagi/wordwaifu/actions/runs/37927849547).
- **WF-002-C:** CRUD de organizaciones con referencias validadas. [CI #37936748101](https://github.com/jonhararagi/wordwaifu/actions/runs/37936748101).
- **WF-003-A:** relaciones canónicas con migración retrocompatible. [CI #37951860214](https://github.com/jonhararagi/wordwaifu/actions/runs/37951860214).
- **WF-004-A:** repositorio local, IndexedDB, respaldo y recuperación. [CI #37963611180](https://github.com/jonhararagi/wordwaifu/actions/runs/37963611180).
- **WF-004-B.1.1:** catálogo, creación y cambio de universos. [CI #37966133138](https://github.com/jonhararagi/wordwaifu/actions/runs/37966133138).
- **WF-004-B.1.2:** borrado seguro de proyectos y protección del activo. [CI #37988482281](https://github.com/jonhararagi/wordwaifu/actions/runs/37988482281).

## WF-004-B.2 — PARTIAL · Índice maestro multiverso
- Añadido servicio de búsqueda de solo lectura por IndexedDB para personajes, lugares, acontecimientos, organizaciones, relaciones e historias.
- Resultados incluyen proyecto, tipo y ID de entidad; filtra por tipo y campos seleccionados y normaliza acentos.
- La búsqueda no activa, guarda ni sustituye proyectos. IDs iguales en universos distintos son claves separadas por `projectId`.
- Los fallos de IndexedDB se muestran como consulta parcial apoyada solo por el respaldo disponible.
- **FAIL_REAL durante desarrollo:** CI detectó una llamada incorrecta a una tabla `Map` y un test de fallo con filtro equivocado. Ambos corregidos en el SHA candidato actual.
- **IN_PROGRESS / UNKNOWN:** el gate automatizado debe cerrarse al verificar [CI #37996000708](https://github.com/jonhararagi/wordwaifu/actions/runs/37996000708).
- **NOT_RUN:** validación manual en Windows 11.

## Siguiente acción obligatoria
Seguir con **WF-004-B.2**; no iniciar una tarea independiente hasta cerrar el gate. TIMER: **30–60 minutos** de continuación para confirmar CI y corregir cualquier fallo restante.

## Continuidad
Leer `docs/DONE.md`, `docs/STATUS.md`, `docs/WORK_PROTOCOL.md`, `docs/MASTER_VISION.md`, `docs/DATA_MODEL.md` y `docs/TECHNICAL_RESEARCH.md`. Verificar HEAD, PR y CI vivos. Mantener `main` intacta, PR #1 abierto en borrador, y sobrescribir `docs/DONE.md` al cerrar.

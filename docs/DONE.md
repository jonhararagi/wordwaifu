PARTIAL

# WordWaifu · Punto de continuidad

**Tarea activa:** WF-004-B.2 · Índice maestro multiverso, búsqueda entre proyectos sin mezclar datos.
**Estado:** implementación y pruebas ampliadas están en la rama. El último CI del SHA actual aún estaba en ejecución al redactar este punto de continuidad. No marcar como DONE hasta confirmar CI PASS.
**Fecha:** 2026-10-09.

## Estado de Git
- Repositorio: `jonhararagi/wordwaifu`.
- Rama: `foundation/story-foundry-north-star`.
- HEAD BEFORE de WF-004-B.2: `3874a73fd899b74d2464a2ca7b950f6420338923`.
- HEAD de código actual candidato a validación: `1f363739b931f2732fe076b60cb488414fbdbe71`.
- CI del HEAD actual: **IN_PROGRESS al último chequeo**, [ejecución #37996000708](https://github.com/jonhararagi/wordwaifu/actions/runs/37996000708).
- Los SHA previos de esta tarea tuvieron fallos REAL de smoke test, detectados y corregidos: uso de `Map` como función en la búsqueda de organizaciones y selector del test de respaldo parcial. No usar esos fallos como evidencia de comportamiento definitivo; revisar el CI nuevo.
- PR #1: [abierto en borrador](https://github.com/jonhararagi/wordwaifu/pull/1), no fusionado.
- `main` sigue intacta en `15a9e0677bf27596dfaef97b5b7d7dfd1569eb98`.
- Este punto de continuidad genera un commit documental posterior a `1f363739b931f2732fe076b60cb488414fbdbe71`. Inspeccionar el HEAD actual y el resultado del CI más reciente al retomar.

## Trabajo implementado en la rama
- `ProjectRepository.searchAcrossProjects(query, options)` consulta proyectos almacenados en IndexedDB mediante una transacción de solo lectura; no llama a `activateProject`, `write` ni cambia el puntero activo.
- La búsqueda abarca personajes, lugares, acontecimientos, organizaciones, relaciones e historias. Permite filtrar por tipo y busca en nombres y campos seleccionados, incluyendo alias, descripciones, rol, motivación, tipo/categoría, ideología, objetivos, etiquetas y texto del vínculo.
- Normaliza acentos y mayúsculas para búsqueda tolerante (por ejemplo, `cartografa` puede encontrar «Cartógrafa»).
- Cada resultado incluye `projectId`, nombre del universo, `entityType`, `entityId`, nombre y detalle. Los IDs se interpretan en el contexto del proyecto, de forma que dos universos pueden contener `char-mira` sin colisión.
- Se incorporó una sección «Índice maestro» al gestor de proyectos con consulta y filtro por tipo.
- Los resultados se crean con `textContent` y elementos DOM, sin insertar cadenas de registros en HTML.
- Si falla IndexedDB, el repositorio intenta mostrar únicamente el respaldo local disponible y devuelve `complete: false` con advertencia. El UI lo rotula como **BÚSQUEDA PARCIAL**; cero resultados en una consulta parcial nunca se presenta como ausencia definitiva.
- La búsqueda informa si omite registros de proyecto inconsistentes y permite limitar resultados sin perder el recuento total de coincidencias.

## Evidencia y límites
- **PASS_STATIC observado en CI del SHA candidato:** sintaxis JavaScript y 18 pruebas de esquema pasaron en las ejecuciones previas; la implementación del índice se cubre principalmente con Chromium.
- **FAIL_REAL durante desarrollo, corregido en el código actual:** la primera ejecución detectó una llamada incorrecta a `locationById` donde correspondía `locationById.get(...)`; una posterior detectó que el test del respaldo parcial no había fijado el filtro de tipo. Ambos puntos se corrigieron y el HEAD candidato tiene una nueva ejecución de CI.
- **UNKNOWN / IN_PROGRESS:** no afirmar que el nuevo smoke test del HEAD `1f363739b931f2732fe076b60cb488414fbdbe71` pasó hasta leer el resultado final de [#37996000708](https://github.com/jonhararagi/wordwaifu/actions/runs/37996000708).
- **NOT_RUN:** prueba visual/manual en Windows 11. El CI usa Chromium headless, no el PC del usuario.
- Limitación intencional del primer corte: el índice se reconstruye al consultar, no es un índice invertido persistido ni cacheado. La optimización se pospone hasta tener métricas; así se evita duplicar o desincronizar el canon.

## TIMER de continuación
**TIMER: 30–60 minutos para cerrar la verificación y corregir cualquier último fallo de CI; luego 2–4 horas para la siguiente iteración del índice**, según el resultado real.

## Criterios pendientes para cerrar WF-004-B.2
1. Verificar la última CI y los logs del browser smoke test; resolver cualquier fallo restante.
2. Confirmar en Chromium resultados del mismo ID de entidad en dos universos, tipo de entidad, búsqueda por campos y acentos, resultado vacío completo, aislamiento del proyecto activo y fallo parcial de IndexedDB.
3. Confirmar que el validador estático reconoce los nuevos controles y que todas las pruebas terminan en PASS.
4. Tras CI PASS, reemplazar este documento por un cierre `DONE` con el SHA probado y nuevo HEAD documental; actualizar `STATUS.md` y `ROADMAP.md`.
5. Mantener PR #1 abierto en borrador y `main` intacta. No fusionar.

## Inicio de la próxima sesión
Leer este archivo y `docs/STATUS.md`; inspeccionar el HEAD vivo de la rama y abrir [CI #37996000708](https://github.com/jonhararagi/wordwaifu/actions/runs/37996000708). Leer logs del job `validate`, particularmente `Run browser smoke test`. Código de la tarea: `src/project-repository.js`, `src/app.js`, `index.html`, `src/styles.css`, `tests/browser_smoke.cjs` y `scripts/validate_project.py`.

## Progreso global
**16% estimado** de la visión completa, ponderado por alcance; no representa porcentaje de código ni cobertura. El catálogo de proyectos y el repositorio IndexedDB están automatizados, y el índice maestro tiene una primera implementación. El gate del índice no está cerrado hasta CI PASS.

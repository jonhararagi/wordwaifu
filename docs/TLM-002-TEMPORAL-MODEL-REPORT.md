# TLM-002 — Informe de implementación del modelo temporal explícito

**Estado TLM-002:** DONE  
**Estado del atlas completo:** PARTIAL; TLM-003/TLM-004 no se ejecutaron.  
**Repositorio:** jonhararagi/wordwaifu  
**Rama:** work/story-completion-danmachi-audit-2026-10  
**HEAD BEFORE (verificado):** a97206f2ecb7f4f50aec6146160dbe0fe9a0e85f  
**SHA de implementación validado en CI:** 4d75c97aa690ddba73ec6ef09eb0fbefef06d342  
**Fecha:** 2026-10-16

## Modelo elegido

Se mantuvo schemaVersion 1 y se añadió temporalModelVersion 1. Cada acontecimiento conserva su dateLabel original y añade dos dimensiones explícitas:

- temporal: variante, precisión, ancla/referencias cuando corresponde, calificador/motivo y sourceUrls vinculadas a fuentes que ya pertenecen al propio acontecimiento.
- narrativeOrigin: published_reference, user_hypothesis, user_plan o author_au, independiente de evidenceStatus y continuityScopes.

Las seis variantes temporales son absolute_date, approximate_interval, relative_offset, relative_order, unknown y anchor. La validación exige calendario/precisión compatibles en las fechas, límites de intervalo ordenados, anclas/referencias existentes, unidades permitidas, fuentes HTTPS vinculadas al evento y reglas de aislamiento para hipótesis/planes/AU.

### Compatibilidad y no-regresión

La versión 1 del dataset y los 15 dateLabel originales se conservan. Un dataset heredado completo sin temporal/narrativeOrigin aún pasa por una ruta explícita de compatibilidad y se presenta como “Tiempo sin normalizar”; una migración parcial o una versión temporal desconocida se rechaza. No se reescribieron IDs, evidenceStatus, continuityScopes, sources ni detailPath.

## Correspondencia de migración — los 15 acontecimientos

| ID del acontecimiento | Variante temporal | Interpretación estructurada conservadora | Evidencia/limitación mantenida |
|---|---|---|---|
| EVT-DM-DESCENT-001 | unknown | Tiempo absoluto sin fijar; no se afirma orden entre las llegadas divinas. | La ruta oficial citada no fija fecha calendárica; localizador primario pendiente. |
| EVT-DM-GREAT-QUESTS-001 | relative_order | Antes de T0; distancia y orden entre expediciones desconocidos. | Sigue siendo candidato de catálogo; el expediente no equivale a confirmación primaria. |
| EVT-DM-ZH-OEBD-001 | relative_order | Antes de T0; no se inventa distancia temporal. | Fecha/orden pendientes; expediente candidato. |
| EVT-DM-ZH-FALL-001 | relative_order | Antes de T0; fecha y secuencia causal exactas abiertas. | No se infiere que la caída ocurra inmediatamente tras el enfrentamiento con el Dragón Negro. |
| EVT-DM-AR-ERA-001 | relative_offset | 7 años antes de T0, con precision approximate y anchorId T0-BELL-ARRIVAL. | Se mantienen fuentes oficiales/editoriales y estado official_publisher_timeframe_primary_scene_check_pending; no valida cada escena individual. |
| EVT-DM-ASTREA-FAMILIA-JUGGERNAUT-001 | relative_offset | 5 años antes de T0, aproximado. No se fusiona con T−7. | Se conservan Yen Press y la cronología secundaria; verificación de página primaria pendiente. |
| EVT-DM-RYUU-REVENGE-001 | relative_order | Entre la tragedia T−5 y T0, sin duración numérica. | Los dos límites son el evento T−5 y el ancla T0; los hitos intermedios no se inventan. |
| EVT-DM-HESTIA-DESCENT-001 | relative_order | Antes de T0; posición exacta con respecto a T−7/T−5 desconocida. | Candidato con localizador primario pendiente. |
| EVT-DM-BELL-ARRIVAL-001 | anchor | Define T0; no tiene año, mes ni día. | Sigue vinculado a la cronología oficial, que no publica una fecha de calendario. |
| EVT-DM-BELL-MEETS-HESTIA-001 | relative_order | Poco después de T0, sin cantidad de días calculable. | Localizador de capítulo pendiente; dateLabel queda intacto. |
| EVT-DM-BELL-AIS-MINOTAUR-001 | relative_order | Poco después de T0; intervalo no cuantificado. | La ruta de cronología es punto de entrada, no cotejo de escena/página. |
| EVT-DM-EINA-ADVISOR-001 | relative_order | Después de T0, dentro de los primeros volúmenes según la etiqueta; orden exacto no fijado. | Capítulo exacto pendiente, sin deducir un día. |
| EVT-DM-RYUU-JURA-PURSUIT-001 | relative_order | Después de T0; se conserva como calificador el marco de meses/volumen 13, sin transformarlo en una cantidad exacta. | Yen Press sitúa el arco general; la cronología secundaria es pista; día interno pendiente. |
| EVT-DM-JUGGERNAUT-RETURN-001 | relative_order | Después de T0; “meses después” queda como calificador, no como distancia numérica computada. | Sinopsis editorial y referencia comunitaria siguen diferenciadas; orden de escena pendiente. |
| EVT-DM-JUGGERNAUT-DEFEAT-001 | relative_order | Continuación del volumen 14, después de T0; fecha interna abierta. | Fuente editorial respalda el marco general de Bell/Ryu en los pisos, no cada detalle de la escena. |

En los 15 registros no se declaró una fecha absoluta ni un intervalo con límites numéricos porque la evidencia existente no los respalda. approximate_interval y absolute_date sí están implementados y probados con fixtures sintéticos en memoria; esos fixtures no se almacenan en la cronología DanMachi.

## Archivos modificados

En el commit de implementación 4d75c97aa690ddba73ec6ef09eb0fbefef06d342:

- lore/danmachi/timeline/eras-and-events.json — temporalModelVersion, eventId del ancla y migración tipada de los 15 eventos.
- src/danmachi-timeline.js — validador temporal versionado, compatibilidad legacy y presentación de clase/precisión en las tarjetas.
- lore/danmachi/tools/check-timeline.mjs — integra el validador temporal en la comprobación de catálogo/cronología.
- tests/test_danmachi_timeline.cjs — pruebas de los 15 registros, variantes, fixtures, reglas de origen, precisión, referencias, unidades, rangos, fuentes y compatibilidad.
- tests/browser_smoke.cjs — comprobación Chromium de los 15 eventos, T−7 aproximado, T0 como ancla, unknown y filtro de continuidad.
- src/styles.css — estilo diferenciado para clase/precisión temporal.
- docs/DANMACHI-TEMPORAL-MODEL.md — contrato del modelo.

## Pruebas y resultados para el SHA exacto

**PASS_CI — 4d75c97aa690ddba73ec6ef09eb0fbefef06d342:**

- [Validate WordWaifu — run #38941141919](https://github.com/jonhararagi/wordwaifu/actions/runs/38941141919): success. Pasó sintaxis, node lore/danmachi/tools/check-timeline.mjs, node tests/test_danmachi_timeline.cjs, pruebas de catálogo/continuidad y node tests/browser_smoke.cjs, entre los pasos del workflow.
- [DanMachi Lore and Retrieval Integrity — run #38941142159](https://github.com/jonhararagi/wordwaifu/actions/runs/38941142159): success. Pasó sintaxis, pruebas del corpus/catálogo y browser smoke, incluyendo las comprobaciones nuevas de la interfaz temporal.

**NOT_RUN local:** no se ejecutaron comandos Node o Playwright desde un entorno local de este agente; la evidencia real viene de los workflows CI citados.

## Límites conservados

- T0 sigue siendo ancla relativa, no fecha calendárica.
- T−7 y T−5 siguen siendo aproximados; el cotejo primario pendiente de T−5 no se degrada a exactitud.
- La clase temporal, el estado de evidencia, el origen narrativo y la continuidad son campos independientes.
- No se añadieron hechos hipotéticos a la cronología de referencia.
- No se asignaron lugares, IDs geográficos ni coordenadas. TLM-003 no se empezó.
- No se incorporaron imágenes. TLM-004 no se empezó.
- La revisión visual manual en Windows 11 sigue NOT_RUN.

## Próxima acción exacta

**TLM-003 — conectar eventos con lugares mediante IDs estables**, solo cuando sea ordenada explícitamente. No inventar ubicaciones o coordenadas; mostrar “ubicación desconocida” cuando falte evidencia. El atlas/producto permanece PARTIAL.

# Índice maestro de volúmenes, arcos y material paralelo

## Propósito

Establecer cobertura de lectura para que cada nueva tanda se complete de forma incremental y sin duplicar resúmenes o acontecimientos.

## Serie principal de novela ligera

Crear una entrada por volumen publicado y registrar:
- número y título oficial en la edición escogida;
- fecha de publicación solo si se verifica en una fuente bibliográfica fiable;
- arcos y capítulos incluidos;
- eventos principales, con IDs estables;
- primeras apariciones y cambios de estado de personajes;
- cambios a la cronología, reglas, ubicaciones y Familias;
- misterios introducidos, pistas, revelaciones y estado al final del volumen;
- referencias de edición y localizadores;
- spoilers y dependencias con volúmenes previos;
- diferencias relevantes entre ediciones/traducciones;
- controles de duplicación contra resúmenes existentes.

No se fija aquí un número final de volúmenes: primero hay que comprobar la bibliografía vigente. No inventar un final para una obra que pudiera seguir publicándose.

## Fuentes originales cargadas en `main/`

Los archivos de esta carpeta son las fuentes de trabajo de la novela ligera principal (`CONT-MAIN-LN`). Los nombres se conservan tal como fueron cargados; no son dossiers ni resúmenes. La traducción española aportada es privada y todavía no está cotejada con el japonés.

| Volumen | Archivo fuente | Estado de análisis |
|---|---|---|
| 1 | [Volumen [01] • DanMachi](main/Volumen%20%5B01%5D%20%E2%80%A2%20DanMachi.md) | DMR-061: extracción narrativa hasta PDF p. 214; tres pasadas documentadas solo para pp. 157–214. Revisión completa pendiente. |
| 2 | [Volumen [02] • DanMachi](main/Volumen%20%5B02%5D%20%E2%80%A2%20DanMachi.md) | DMR-060: extracción parcial y segmentación de eventos; tres pasadas completas pendientes. |
| 3 | [Volumen [03] • DanMachi](main/Volumen%20%5B03%5D%20%E2%80%A2%20DanMachi.md) | Fuente cargada; análisis pendiente. |
| 4 | [Volumen [04] • DanMachi](main/Volumen%20%5B04%5D%20%E2%80%A2%20DanMachi.md) | Fuente cargada; análisis pendiente. |
| 5 | [Volumen [05] • DanMachi](main/Volumen%20%5B05%5D%20%E2%80%A2%20DanMachi.md) | Fuente cargada; análisis pendiente. |

Los volúmenes 6–21 no tienen todavía un archivo fuente cargado en esta carpeta. Esto describe el contenido actual del repositorio, no el estado bibliográfico de publicación de la serie. No se crearán archivos vacíos ni resúmenes provisionales para simular fuentes disponibles.

## Spin-offs y continuidad relacionada

Crear registros separados para:
- Sword Oratoria.
- Familia Chronicle.
- Astrea Record.
- Episode/relatos oficiales complementarios.
- Adaptaciones y juegos, siempre con etiqueta propia de continuidad.

Un acontecimiento del spin-off debe enlazarse con el registro canónico relacionado si describe el mismo hecho. Si contradice, amplía o presenta una versión distinta, registrar el alcance y la fuente sin fusionar silenciosamente los datos.

## Plantilla para una entrada de volumen

- volume_id:
- series:
- volume_number:
- official_title:
- edition_language:
- publication_data_source:
- included_chapters:
- arc_ids:
- event_ids:
- introduced_entities:
- changed_states:
- locations:
- rules_expanded:
- clues_and_reveals:
- continuity_conflicts:
- primary_source_locators:
- summary_status: stub, draft, source_checked, cross_checked, approved
- duplicate_review:
- spoilers:
- notes:

## Puerta de calidad por volumen

Antes de marcar un volumen como cross_checked:
1. Revisar el resumen contra el texto fuente.
2. Separar cada acontecimiento.
3. Revisar nombres y alias para posibles duplicados.
4. Comprobar fechas y estados al final del volumen.
5. Enlazar personajes, lugares, Familias, reglas y eventos mediante IDs.
6. Registrar qué información es revelación para el lector y cuál conocen los personajes.
7. Verificar que no se haya copiado texto extenso protegido.
8. Dejar una lista de preguntas pendientes y casos que deben probarse.

## Dossiers de análisis y extracción

- [DMR-061 — extracción del volumen 1](../research/inbox/DANMACHI-RESEARCH-061-volume-01-event-extraction.md) — lectura secuencial y eventos localizados; no equivale a tres pasadas completas del volumen.
- [DMR-060 — extracción del volumen 2](../research/inbox/DANMACHI-RESEARCH-060-volume-02-event-extraction.md) — eventos parciales y checkpoints existentes; no equivale a tres pasadas completas del volumen.
- Los volúmenes 3, 4 y 5 aún no tienen dossier de análisis; su fuente original ya está cargada y debe analizarse desde el texto.
- No hay dossiers completos para los volúmenes 6–21 en esta carpeta. Mantenerlos fuera del catálogo de documentos hasta que exista material real que registrar.

## Historias paralelas y crónicas

Cada serie tiene su propia carpeta e índice. No mezclar sus textos con `CONT-MAIN-LN` ni convertir automáticamente datos de juego/adaptación en datos de novela.

- [Astrea Record](astrea-record/README.md) — separar la novelización (`CONT-AR`) del material original del juego (`CONT-GAME`).
- [Sword Oratoria](sword-oratoria/README.md) — continuidad de la novela derivada (`CONT-SO-LN`), con diferencias de perspectiva preservadas.
- [Familia Chronicle](familia-chronicle/README.md) — registrar cada entrega y su continuidad efectiva sin asumir que todas son equivalentes a la novela principal.
- Episode y relatos oficiales complementarios: registrar por separado con etiqueta propia de continuidad.

Un acontecimiento del spin-off debe enlazarse con el registro canónico relacionado si describe el mismo hecho. Si contradice, amplía o presenta una versión distinta, registrar el alcance y la fuente sin fusionar silenciosamente los datos.

- Paquete de búsqueda: `research/inbox/BATCH-DM-009-parallel-stories-and-chronicles.md`.

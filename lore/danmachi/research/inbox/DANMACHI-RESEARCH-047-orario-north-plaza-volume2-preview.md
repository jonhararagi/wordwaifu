# DANMACHI-RESEARCH-047 · Orario: plaza semicircular en una muestra editorial de la novela principal

- Fecha de consulta inicial: 2026-10-23; reconciliación del localizador y metadatos: 2026-10-24.
- Estado: `source_checked_excerpt_only`; el índice oficial conserva el título del capítulo y marcadores de folio, pero la página del PDF no pudo inspeccionarse visualmente.
- Continuidad: `CONT-MAIN-LN`.
- Objetivo: registrar un detalle urbano limitado extraído de una muestra de lectura publicada por GA Bunko, sin transferir a la novela los mapas o datos de `CONT-PROTOTYPE`.
- Método: la muestra oficial corresponde al volumen 2 según la ficha editorial [DanMachi 2](https://ga.sbcr.jp/product/9784797373073/) y está alojada en [GA Bunko, archivo trial02.pdf](https://ga.sbcr.jp/sp/danmachi/trial02.pdf). El índice del PDF conserva la cabecera del capítulo IV **「だからボクは力になりたい」** y los marcadores de folio **20–21** alrededor del pasaje donde el narrador espera en una plaza semicircular al norte de Orario, frente a una avenida principal. El contexto inmediato menciona la propuesta de Eina de ir a comprar equipo. La página editorial también mantiene la ficha bibliográfica del [volumen 2](https://ga.sbcr.jp/product/9784797373073/).
- Limitación de acceso: la apertura directa del PDF devolvió HTTP 503 y la herramienta de captura rechazó la referencia indexada por no tener un documento PDF abierto. Los rótulos de capítulo y folio proceden del texto indexado, no de una inspección visual del facsímil; por eso el estado sigue siendo `source_checked_excerpt_only`.

### DMR-047-CLM-001 · Una muestra de la novela principal sitúa una plaza semicircular al norte de Orario

- `claim_id`: DMR-047-CLM-001
- `claim`: El extracto de lectura de GA Bunko describe al narrador solo en una plaza semicircular situada en el norte de Orario y orientada hacia una avenida principal. El contexto inmediato menciona que Eina le había propuesto el día anterior ir a comprar equipo. El extracto no proporciona un nombre propio para la plaza ni permite fijar coordenadas, límites de barrio, distancias, el nombre de la avenida o la geometría general de la ciudad.
- `character_ids`: [LOC-ORARIO-NORTH-PLAZA, LOC-ORARIO]
- `aspect`: lugar urbano, posición relativa dentro de Orario y escena de la novela principal
- `era_or_interval`: escena de la novela principal representada en la muestra editorial; ancla temporal exacta no fijada en este paquete
- `continuity_scope`: CONT-MAIN-LN
- `source_id`: DMR-047-SRC-001
- `source_title`: GA Bunko — muestra de lectura de DanMachi, archivo trial02.pdf
- `source_type`: OFFICIAL_PUBLISHER_PREVIEW_EXCERPT
- `source_locator`: Capítulo IV 「だからボクは力になりたい」; el índice del PDF muestra marcadores de folio 20–21 junto al pasaje de la plaza. Los folios no fueron verificados visualmente porque el PDF directo responde HTTP 503.
- `source_url`: https://ga.sbcr.jp/sp/danmachi/trial02.pdf
- `evidence_type`: official_publisher_light_novel_preview_excerpt
- `verification_status`: source_checked_excerpt_only
- `spoiler_level`: mild
- `confidence_note`: La procedencia es la muestra de lectura alojada por la editorial, pero el PDF directo no se pudo abrir para verificar paginación o contexto integral. Se confirma únicamente el contenido que conserva el extracto indexado; no inferir un nombre oficial, un mapa a escala ni una red general de avenidas.

## Límites y preguntas pendientes

1. Reabrir el PDF oficial desde la página editorial y confirmar visualmente el capítulo IV y los folios 20–21 cuando el archivo vuelva a estar accesible.
2. Mantener «plaza semicircular al norte de Orario» como etiqueta descriptiva de trabajo; no convertirla en nombre propio canónico.
3. No asociarla con Central Park ni con las ocho avenidas de `CONT-PROTOTYPE`: el extracto no prueba que sean la misma ubicación o versión urbana.
4. No convertir el encuentro contextual con Eina en una relación personal nueva. La afirmación aquí es geográfica y local, no una ficha de biografía.
5. Buscar otros pasajes de la novela principal para determinar si la ubicación se vuelve a describir o se nombra en una escena posterior.

**Veredicto:** avance geográfico primario limitado para `CONT-MAIN-LN`; evidencia de extracto parcial, no geografía urbana completa ni verificación de página.

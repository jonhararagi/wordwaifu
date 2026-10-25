# DANMACHI-RESEARCH-026 · Orario, Babel, Hostess of Fertility y Rivira

- Estado: PARTIAL; cuatro lugares y ocho aristas navegables registradas a partir de un glosario oficial de la adaptación anime.
- Fecha de consulta: 2026-10-24.
- Continuidad: CONT-ANIME.
- Fuente principal: DMR-026-SRC-001, glosario oficial de lugares en https://danmachi.com/danmachi/special/index.html.
- Método: paráfrasis breve de entradas oficiales; no se copian descripciones completas ni se tratan como texto de novela ligera.
- Validación: los cuatro claims están encabezados con nivel `###`, formato que utiliza el validador de integridad para comprobar IDs, fuentes y continuidad.

### DMR-026-CLM-001 · Orario se presenta como ciudad laberíntica relacionada con el Dungeon y la Guild

- `claim_id`: DMR-026-CLM-001
- `claim`: El glosario oficial de la web del anime describe Orario como una gran ciudad que posee el Dungeon subterráneo y presenta a la Guild como institución central que gestiona ese laberinto.
- `character_ids`: [LOC-ORARIO, LOC-DUNGEON, ORG-GUILD]
- `aspect`: identidad geográfica e institución
- `era_or_interval`: Descripción general del glosario; sin fecha narrativa fijada
- `continuity_scope`: CONT-ANIME
- `source_id`: DMR-026-SRC-001
- `source_type`: ADAPTATION
- `source_url`: https://danmachi.com/danmachi/special/index.html
- `evidence_type`: official_anime_glossary
- `verification_status`: source_checked
- `spoiler_level`: none
- `confidence_note`: La fuente respalda el marco general de la ciudad, el Dungeon y la Guild; no ofrece un mapa ni detalla las normas completas de la institución.

### DMR-026-CLM-002 · Babel se describe como una instalación de la Guild para supervisar y gestionar el Dungeon

- `claim_id`: DMR-026-CLM-002
- `claim`: El glosario oficial presenta a Babel como el edificio más alto de Orario, propiedad de la Guild y destinado a la supervisión y gestión del Dungeon; también menciona instalaciones públicas/comerciales y la presencia de dioses en pisos superiores.
- `character_ids`: [LOC-BABEL, LOC-ORARIO, ORG-GUILD, LOC-DUNGEON]
- `aspect`: lugar e infraestructura
- `era_or_interval`: Descripción general del glosario; sin fecha narrativa fijada
- `continuity_scope`: CONT-ANIME
- `source_id`: DMR-026-SRC-001
- `source_type`: ADAPTATION
- `source_url`: https://danmachi.com/danmachi/special/index.html
- `evidence_type`: official_anime_glossary
- `verification_status`: source_checked
- `spoiler_level`: none
- `confidence_note`: La fuente apoya la función general de Babel; no demuestra que exista otro edificio independiente como sede física de la Guild.

### DMR-026-CLM-003 · Hostess of Fertility se presenta como taberna de Orario con vínculos explícitos de trabajo y clientela

- `claim_id`: DMR-026-CLM-003
- `claim`: El glosario oficial describe Hostess of Fertility como una taberna de Orario, nombra a Mia Grand como su dueña, indica que su personal es femenino, señala a Syr Flova como trabajadora y menciona a Loki Familia como clientela habitual.
- `character_ids`: [LOC-HOSTESS, LOC-ORARIO, DM-FAM-LOKI]
- `aspect`: establecimiento y vínculos de trabajo/clientela
- `era_or_interval`: Descripción general del glosario; sin fecha narrativa fijada
- `continuity_scope`: CONT-ANIME
- `source_id`: DMR-026-SRC-001
- `source_type`: ADAPTATION
- `source_url`: https://danmachi.com/danmachi/special/index.html
- `evidence_type`: official_anime_glossary
- `verification_status`: source_checked
- `spoiler_level`: none
- `confidence_note`: El glosario permite registrar los vínculos nombrados, pero no reconstruye el roster del establecimiento ni la cronología completa de sus trabajadores o clientes.

### DMR-026-CLM-004 · Rivira es un asentamiento comercial del piso seguro 18 del Dungeon

- `claim_id`: DMR-026-CLM-004
- `claim`: El glosario oficial del anime describe Rivira como una población levantada en el piso seguro 18 del Dungeon. Señala que la mayoría de sus construcciones son negocios para aventureros, con tiendas de armas y herramientas, alojamiento y tabernas.
- `character_ids`: [LOC-RIVIRA, LOC-DUNGEON]
- `aspect`: asentamiento, ubicación dentro del Dungeon y servicios comerciales
- `era_or_interval`: Descripción general del glosario; periodo narrativo exacto no indicado
- `continuity_scope`: CONT-ANIME
- `source_id`: DMR-026-SRC-001
- `source_type`: ADAPTATION
- `source_url`: https://danmachi.com/danmachi/special/index.html
- `evidence_type`: official_anime_glossary
- `verification_status`: source_checked
- `spoiler_level`: none
- `confidence_note`: El nombre del asentamiento, su ubicación en el piso seguro 18 y la orientación comercial se expresan en la referencia oficial de adaptación. No proporciona mapa, coordenadas ni periodo interno; no afirma que Rivira sea un barrio de superficie de Orario ni establece por sí sola esos detalles en CONT-MAIN-LN.

## Relaciones registradas

- REL-ORARIO-DUNGEON-GENERAL: Orario → Dungeon.
- REL-ORARIO-GUILD-CORE: Orario → Guild.
- REL-BABEL-ORARIO-LOCATION: Babel → Orario.
- REL-BABEL-GUILD-OWNED: Babel → Guild.
- REL-BABEL-DUNGEON-MANAGEMENT: Babel → Dungeon.
- REL-HOSTESS-ORARIO-LOCATION: Hostess of Fertility → Orario.
- REL-HOSTESS-LOKI-FAMILIA-REGULAR: Hostess of Fertility → Loki Familia.
- REL-RIVIRA-DUNGEON-SAFE-FLOOR-18: Rivira → Dungeon (piso seguro 18; CONT-ANIME).

## Pendientes de la tanda

1. Mantener las cuatro fichas en estado parcial hasta que se contrasten con fuentes específicas de la continuidad de novela.
2. No activar LOC-GUILD como ubicación separada mientras la fuente solo describa Babel como instalación de la Guild.
3. Mantener las fichas independientes de Mia Grand y Syr Flova con IDs estables, procedencia y estado de evidencia propios.
4. Para Rivira, conservar solo la relación al Dungeon bajo CONT-ANIME; no inferir una relación geográfica directa con Orario de superficie ni trasladar automáticamente su descripción a la novela principal.

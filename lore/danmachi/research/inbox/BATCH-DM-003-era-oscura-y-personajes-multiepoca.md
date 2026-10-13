# DANMACHI-RESEARCH-001 · Era Oscura de Orario y personajes multiepoca

- Archivo solicitado: `BATCH-DM-003-era-oscura-y-personajes-multiepoca.md`
- ID interno de ejecución: `DMR-001` (se evita reutilizar el identificador de cola BATCH-DM-003, ya reservado para ERA-00).
- Fecha de consulta: 2026-10-11
- Rama: `feature/danmachi-lore-poc`
- Estado de investigación: `partial`
- Regla de uso: los hechos proceden de páginas oficiales consultadas; no se abrió el texto íntegro de los volúmenes. No se actualizaron fichas canónicas ni se aprobó ningún hecho de la AU.

## 1. Resumen de hallazgos

1. La fuente oficial utiliza `オラリオの暗黒期`, literalmente “Era Oscura de Orario”, para presentar *Astrea Record*. El término no debe ampliarse a toda la historia antigua del mundo.
2. La cronología oficial y la sinopsis editorial sitúan *Astrea Record* aproximadamente siete años antes de que Bell visite Orario. Es una referencia temporal relativa, no un año absoluto ni una definición de cuándo empezó o terminó toda la era.
3. Las sinopsis oficiales describen la época como caótica y violenta, y presentan a Astrea Familia levantándose en nombre de la justicia.
4. La sinopsis del volumen 1 menciona a Ryu Lion, la diosa Astrea y Alise, identificada como capitana de la Familia. También anuncia una gran confrontación contra Evilus.
5. El volumen 2 menciona retrospectivamente `死の七日間` (“Los siete días de la muerte”) y una gran ofensiva de Evilus. El volumen 3 resume una batalla decisiva para impedir la destrucción de Orario. Estas sinopsis no proporcionan por sí solas la secuencia completa ni localizadores internos.
6. El anuncio oficial explica que *Astrea Record* se originó como escenario largo del tercer aniversario de *DanMemo* y fue revisado por el autor original para su publicación como trilogía. No se compararon los textos completos del juego y los libros; deben mantenerse como alcances de continuidad diferenciados.
7. Ryu es la candidata multiepoca mejor respaldada: su estado histórico se describe en la página editorial de *Astrea Record*, y un perfil oficial posterior de la adaptación anime conserva el mismo nombre y presenta un estado posterior distinto. La identidad común es una inferencia sólida, pero el estado de la adaptación no debe confundirse con un localizador directo de la novela principal.
8. Ninguna de las fuentes investigadas decide la Familia del OC, sus integrantes, el significado de “conocer” a esa Familia ni el punto de divergencia. Tampoco resuelven en esta tanda la fecha de llegada de Hestia ni la secuencia completa de Zeus/Hera y el Dragón Negro.

**Significado de `source_checked`:** una afirmación aparece explícitamente en una página oficial que se abrió y comprobó. No significa que se haya cotejado el pasaje del libro impreso o digital. Los localizadores internos de las novelas siguen pendientes.

## 2. Registro individual de afirmaciones

### DMR-001-CLM-001 · Denominación oficial
- `claim_id`: DMR-001-CLM-001
- `claim`: El portal oficial usa la expresión japonesa `オラリオの暗黒期`, traducible como “Era Oscura de Orario”, al presentar *Astrea Record*.
- `character_ids`: []
- `event_id`: null
- `era_or_interval`: Periodo de *Astrea Record*, anclado aproximadamente siete años antes de que Bell visite Orario.
- `continuity_scope`: `CONT-AR`
- `source_id`: DMR-001-SRC-001
- `source_title`: 年表 | アニメ「ダンまち」シリーズ公式サイト
- `source_type`: `official_reference`
- `source_locator`: Bloque oficial sobre *DanMemo Astrea Record*; términos `7年前` y `オラリオの暗黒期`.
- `source_url`: https://danmachi.com/chronology
- `verification_status`: `source_checked`
- `claim_type`: `explicit_fact`
- `spoiler_level`: `mild`
- `confidence_note`: Nombre explícito en el portal. No establece equivalencia con “Época Dorada” ni con toda la historia antigua.
- `related_claims`: [DMR-001-CLM-002, DMR-001-CLM-003, DMR-001-CLM-004]

### DMR-001-CLM-002 · Ancla temporal aproximada
- `claim_id`: DMR-001-CLM-002
- `claim`: La página editorial de GA Bunko describe la historia como aproximadamente siete años antes de que el muchacho visite la ciudad laberíntica; la cronología oficial también la marca como “siete años antes”.
- `character_ids`: [`CHAR-RYUU-LION` (ID reservado, ficha aún no creada)]
- `event_id`: null
- `era_or_interval`: Aproximadamente T−7 años respecto de la visita de Bell a Orario; fecha absoluta no localizada.
- `continuity_scope`: `CONT-AR`
- `source_id`: DMR-001-SRC-003; referencia concordante DMR-001-SRC-001
- `source_title`: アストレア・レコード１ 邪悪胎動 — página oficial de GA文庫
- `source_type`: `official_reference`
- `source_locator`: Sinopsis editorial con `約七年前`; cronología oficial con `7年前`.
- `source_url`: https://ga.sbcr.jp/product/9784815610173
- `verification_status`: `source_checked`
- `claim_type`: `explicit_fact`
- `spoiler_level`: `mild`
- `confidence_note`: Ancla relativa aproximada. No permite inventar calendario, inicio/fin de la era ni su duración total.
- `related_claims`: [DMR-001-CLM-001, DMR-001-CLM-005, DMR-001-CLM-010]

### DMR-001-CLM-003 · Caracterización de caos y violencia
- `claim_id`: DMR-001-CLM-003
- `claim`: La cronología oficial describe el periodo indicando que el orden fue sustituido por el caos y que la sangre se respondía con sangre.
- `character_ids`: []
- `event_id`: null
- `era_or_interval`: Era Oscura de Orario; ancla relativa de DMR-001-CLM-002.
- `continuity_scope`: `CONT-AR`
- `source_id`: DMR-001-SRC-001
- `source_title`: 年表 | アニメ「ダンまち」シリーズ公式サイト
- `source_type`: `official_reference`
- `source_locator`: Descripción del bloque *Astrea Record*, frase `秩序が混沌に塗り替えられ`.
- `source_url`: https://danmachi.com/chronology
- `verification_status`: `source_checked`
- `claim_type`: `explicit_fact`
- `spoiler_level`: `mild`
- `confidence_note`: Descripción promocional oficial, no una lista exhaustiva de delitos, combates o responsables.
- `related_claims`: [DMR-001-CLM-001, DMR-001-CLM-004, DMR-001-CLM-006]

### DMR-001-CLM-004 · Astrea Familia como grupo que se alza en nombre de la justicia
- `claim_id`: DMR-001-CLM-004
- `claim`: El portal oficial presenta a una Familia que defiende la justicia y se alza para acabar con la situación extrema de Orario; la sinopsis de GA Bunko vincula el relato con Astrea y sus integrantes.
- `character_ids`: [`CHAR-ASTREA` (reservado)]
- `event_id`: null
- `era_or_interval`: Era Oscura de Orario / periodo de *Astrea Record*.
- `continuity_scope`: `CONT-AR`
- `source_id`: DMR-001-SRC-001 y contexto editorial DMR-001-SRC-003
- `source_title`: 年表 | アニメ「ダンまち」シリーズ公式サイト
- `source_type`: `official_reference`
- `source_locator`: Sinopsis de *Astrea Record* sobre la Familia que se levanta en nombre de la justicia; contraste con la sinopsis editorial del volumen 1.
- `source_url`: https://danmachi.com/chronology
- `verification_status`: `source_checked`
- `claim_type`: `explicit_fact`
- `spoiler_level`: `mild`
- `confidence_note`: Respalda el papel general del grupo, no un roster completo ni acciones individuales.
- `related_claims`: [DMR-001-CLM-002, DMR-001-CLM-003, DMR-001-CLM-005]

### DMR-001-CLM-005 · Ryu y Alise en el estado histórico
- `claim_id`: DMR-001-CLM-005
- `claim`: La sinopsis del primer volumen presenta a Ryu Lion buscando su idea de justicia bajo Astrea y guiada por Alise, a quien identifica como capitana, junto a sus compañeras.
- `character_ids`: [`CHAR-RYUU-LION`, `CHAR-ALISE-LOVELACE`, `CHAR-ASTREA` (IDs reservados, aún sin fichas creadas)]
- `event_id`: null
- `era_or_interval`: Periodo de *Astrea Record*, aproximadamente siete años antes de la visita de Bell a Orario.
- `continuity_scope`: `CONT-AR`
- `source_id`: DMR-001-SRC-003
- `source_title`: アストレア・レコード１ 邪悪胎動 — página oficial de GA文庫
- `source_type`: `official_reference`
- `source_locator`: Sinopsis editorial que contiene `正義を司る女神アストレアのもと`, `リュー・リオン` y `団長アリーゼ`.
- `source_url`: https://ga.sbcr.jp/product/9784815610173
- `verification_status`: `source_checked`
- `claim_type`: `explicit_fact`
- `spoiler_level`: `mild`
- `confidence_note`: Sinopsis editorial, no texto íntegro. No permite fijar edades exactas, fecha de ingreso, roster completo ni destinos posteriores.
- `related_claims`: [DMR-001-CLM-002, DMR-001-CLM-004, DMR-001-CLM-010]

### DMR-001-CLM-006 · Conflicto mayor contra Evilus
- `claim_id`: DMR-001-CLM-006
- `claim`: La sinopsis oficial del volumen 1 anuncia una gran confrontación contra la facción conocida como Evilus y la vincula a una amenaza contra Orario.
- `character_ids`: [`CHAR-RYUU-LION`, `CHAR-ALISE-LOVELACE` (IDs reservados)]
- `event_id`: null
- `era_or_interval`: Tramo inicial descrito en el volumen 1.
- `continuity_scope`: `CONT-AR`
- `source_id`: DMR-001-SRC-003
- `source_title`: アストレア・レコード１ 邪悪胎動 — página oficial de GA文庫
- `source_type`: `official_reference`
- `source_locator`: Sinopsis del volumen 1, frase que menciona `闇派閥(イヴィルス)` y la gran confrontación.
- `source_url`: https://ga.sbcr.jp/product/9784815610173
- `verification_status`: `source_checked`
- `claim_type`: `explicit_fact`
- `spoiler_level`: `mild`
- `confidence_note`: El marco de conflicto está en la sinopsis; participantes, causalidad y resultados concretos siguen pendientes.
- `related_claims`: [DMR-001-CLM-003, DMR-001-CLM-007, DMR-001-CLM-008]

### DMR-001-CLM-007 · “Los siete días de la muerte”
- `claim_id`: DMR-001-CLM-007
- `claim`: La sinopsis oficial del volumen 2 se refiere a una pesadilla de Orario que luego recibió el nombre `死の七日間` y describe una gran ofensiva de Evilus.
- `character_ids`: [`CHAR-RYUU-LION` (reservado)]
- `event_id`: null
- `era_or_interval`: Tramo narrativo del volumen 2 de *Astrea Record*.
- `continuity_scope`: `CONT-AR`
- `source_id`: DMR-001-SRC-004
- `source_title`: アストレア・レコード２ 正義失墜 — página oficial de GA文庫
- `source_type`: `official_reference`
- `source_locator`: Sinopsis del producto que contiene `後に『死の七日間』と呼ばれる`.
- `source_url`: https://ga.sbcr.jp/product/9784815610180
- `verification_status`: `source_checked`
- `claim_type`: `explicit_fact`
- `spoiler_level`: `major`
- `confidence_note`: El nombre está en la sinopsis; no usarlo para fechar cada suceso ni decidir por sí solo la duración completa de la Era Oscura.
- `related_claims`: [DMR-001-CLM-006, DMR-001-CLM-008]

### DMR-001-CLM-008 · Batalla decisiva en la tercera entrega
- `claim_id`: DMR-001-CLM-008
- `claim`: La sinopsis oficial del volumen 3 presenta una batalla decisiva entre Evilus y los aventureros para impedir que Orario sea destruida.
- `character_ids`: [`CHAR-RYUU-LION` (reservado)]
- `event_id`: null
- `era_or_interval`: Tramo narrativo del volumen 3.
- `continuity_scope`: `CONT-AR`
- `source_id`: DMR-001-SRC-005
- `source_title`: アストレア・レコード３ 正邪決戦 — página oficial de GA文庫
- `source_type`: `official_reference`
- `source_locator`: Sinopsis que comienza `迷宮から大最悪を喚び出しオラリオを破壊せんとする闇派閥`.
- `source_url`: https://ga.sbcr.jp/product/9784815617554
- `verification_status`: `source_checked`
- `claim_type`: `explicit_fact`
- `spoiler_level`: `major`
- `confidence_note`: Resumen oficial; no demuestra el destino exacto de cada miembro ni el resultado de cada enfrentamiento individual.
- `related_claims`: [DMR-001-CLM-006, DMR-001-CLM-007, DMR-001-CLM-009]

### DMR-001-CLM-009 · Procedencia editorial de la trilogía
- `claim_id`: DMR-001-CLM-009
- `claim`: El anuncio oficial explica que *Astrea Record* nació como escenario largo del tercer aniversario de *DanMemo* y que el autor original lo revisó para publicarlo como tres volúmenes por GA Bunko.
- `character_ids`: []
- `event_id`: null
- `era_or_interval`: Historia editorial, no intervalo ficticio.
- `continuity_scope`: `CONT-GAME`, `CONT-AR`
- `source_id`: DMR-001-SRC-002
- `source_title`: ダンメモ3周年記念シナリオ「偉大冒険譚 アストレア・レコード」の書籍化が決定！
- `source_type`: `official_reference`
- `source_locator`: Anuncio fechado 2022-06-14, párrafo sobre el escenario del tercer aniversario, la revisión del autor y la lista de tres libros.
- `source_url`: https://danmachi.com/news/news131.php
- `verification_status`: `source_checked`
- `claim_type`: `explicit_fact`
- `spoiler_level`: `mild`
- `confidence_note`: Confirma la relación editorial, no que cada detalle del juego y las novelas sea idéntico.
- `related_claims`: [DMR-001-CLM-006, DMR-001-CLM-007, DMR-001-CLM-008]

### DMR-001-CLM-010 · Candidata a identidad multiepoca: Ryu
- `claim_id`: DMR-001-CLM-010
- `claim`: La sinopsis del volumen 1 vincula a Ryu Lion (`リュー・リオン`) con Astrea Familia durante el periodo histórico; el perfil oficial posterior de la adaptación anime presenta a Ryu como antigua aventurera y trabajadora de la taberna Hostess of Fertility. La organización más segura es una identidad común y estados separados.
- `character_ids`: [`CHAR-RYUU-LION` (ID reservado, ficha aún no creada)]
- `event_id`: null
- `era_or_interval`: Estado A: *Astrea Record*, aprox. T−7 años. Estado B: periodo posterior descrito por el perfil de la adaptación anime.
- `continuity_scope`: Estado A `CONT-AR`; estado B `CONT-ANIME`
- `source_id`: DMR-001-SRC-003 y DMR-001-SRC-006
- `source_title`: GA Bunko, *Astrea Record* vol. 1; perfil oficial de personajes de DanMachi IV.
- `source_type`: `official_reference`
- `source_locator`: Sinopsis del vol. 1 con el nombre de Ryu y Astrea; perfil de adaptación, entrada `リュー・リオン` bajo `アストレア・ファミリア` y `豊穣の女主人`.
- `source_url`: https://ga.sbcr.jp/product/9784815610173 ; https://danmachi.com/danmachi4/character
- `verification_status`: `provisional`
- `claim_type`: `inference`
- `spoiler_level`: `major`
- `confidence_note`: Relación de identidad apoyada por el nombre y los perfiles, pero cruza la novela derivada y la adaptación anime. La ficha del ID reservado aún no existe.
- `related_claims`: [DMR-001-CLM-002, DMR-001-CLM-005]

## 3. Cronología provisional

| Orden de trabajo | Intervalo | Hallazgo | Límite |
|---|---|---|---|
| 1 | Aproximadamente siete años antes de la visita de Bell a Orario | *Astrea Record* se presenta en la Era Oscura de Orario. | No hay fecha absoluta ni duración total comprobada. |
| 2 | Tramo del volumen 1 | La sinopsis menciona Ryu, Astrea, Alise y el conflicto con Evilus. | No lista todos los sucesos o participantes. |
| 3 | Tramo del volumen 2 | La sinopsis menciona “Los siete días de la muerte” y una ofensiva de Evilus. | No permite fijar horas, fechas ni ordenar todos los hitos. |
| 4 | Tramo del volumen 3 | La sinopsis describe una batalla decisiva para evitar la destrucción de Orario. | No inferir resultados individuales desde el resumen. |

No se ha probado aquí que la caída de Zeus/Hera coincida exactamente con el inicio de la Era Oscura ni la causalidad completa entre la expedición contra el Dragón Negro y la pérdida de su posición. Las fichas existentes `EVT-DM-ZH-OEBD-001` y `EVT-DM-ZH-FALL-001` deben permanecer pendientes de verificación independiente.

## 4. Personajes que conviene modelar por estados temporales

| Identidad propuesta | Estado histórico | Estado posterior | Resultado |
|---|---|---|---|
| Ryu/Ryuu Lion (`CHAR-RYUU-LION`, reservado) | Bajo Astrea; Alise aparece como capitana y guía importante. | Perfil de adaptación: antigua aventurera y trabajadora de Hostess of Fertility. | Candidata multiepoca; una identidad con estados distintos por periodo y continuidad. |
| Astrea (`CHAR-ASTREA`, reservado) | Diosa que encabeza la Familia en el marco histórico descrito. | Las fuentes de este paquete no confirman ubicación, estado vital ni conocimiento posterior. | Estado tardío por investigar. |
| Alise Lovelace (`CHAR-ALISE-LOVELACE`, reservado) | Capitana de Astrea Familia según la sinopsis del vol. 1. | No hay estado posterior sustentado en las fuentes consultadas. | No inferir supervivencia o destino. |
| Bell Cranel (`DM-CHAR-BELL`, existente) | Ancla temporal relativa; estas fuentes no le atribuyen participación en los sucesos históricos. | Personaje principal en su propia continuidad. | No añadir una aparición histórica por inferencia. |
| Hestia (`DM-CHAR-HESTIA`, existente) | Este paquete no confirma su presencia, llegada ni afiliación durante la Era Oscura. | Personaje central al inicio de Bell en los documentos existentes. | La fecha de llegada exige una investigación separada. |

Los IDs de Ryu, Astrea y Alise están en `reservedIds`; todavía no son fichas. No se crearon integrantes ni roster para ninguna Familia y no se reescribieron fichas canónicas.

## 5. Contradicciones y preguntas abiertas

1. **“Era Oscura” frente a “Época Dorada”.** Está confirmada la expresión oficial “Era Oscura de Orario” para *Astrea Record*. No se encontró una equivalencia con “Época Dorada”; conservar la etiqueta del autor por separado hasta encontrar una fuente.
2. **Ancla temporal.** “Aproximadamente siete años antes” no define una fecha de calendario ni la duración total del periodo.
3. **Hestia/Bell.** Falta cotejar directamente la novela principal para comprobar cuándo llega Hestia y cuánto tiempo transcurre hasta conocer a Bell.
4. **Zeus/Hera y el Dragón Negro.** La secuencia, causas, participantes, estado institucional y destinos individuales no se verifican aquí.
5. **Roster de Astrea Familia.** Las sinopsis no son prueba suficiente para completar participantes, niveles, muertes, supervivientes ni relaciones individualizadas.
6. **Familia del OC.** La investigación no decide quiénes son sus integrantes, qué significa exactamente “conoce a su Familia”, ni cuál es el punto de divergencia. Son incógnitas autorales, no huecos que se deban rellenar por inferencia.

## 6. Propuestas de conexión con registros existentes

No se modificaron estos registros; el siguiente agente puede conectarlos tras cotejar y validar:

- `timeline/00-mapa-de-eras.md`: anotar el término localizado `オラリオの暗黒期` y el ancla aproximada de siete años.
- `timeline/eras/06-periodo-previo-a-bell.md`: enlazar *Astrea Record* como cobertura relevante, sin afirmar que el archivo cubra por sí solo toda la Era Oscura.
- `continuity/00-matriz-de-continuidad.md`: mantener separados `CONT-AR`, `CONT-GAME` y `CONT-ANIME`; el origen editorial no demuestra identidad total entre versiones.
- `characters/01-identidad-y-variantes-temporales.md`: aplicar el modelo de identidad estable y estado por época a Ryu.
- `sources/00-registro-fuentes.md`: seis referencias se añaden en esta tanda con localizador web y limitaciones.
- `EVT-DM-ZH-OEBD-001`, `EVT-DM-ZH-FALL-001`, `EVT-DM-HESTIA-DESCENT-001` y `EVT-DM-BELL-MEETS-HESTIA-001`: usarlos como rutas de trabajo futuras; esta tanda no confirma sus detalles.

No se asigna un nuevo ID de evento canónico a “Era Oscura”: estas sinopsis son demasiado generales para atomizar eventos sin consultar los textos.

## 7. Bibliografía y localizadores consultados

| Source ID | Fuente oficial | Localizador | Qué respalda |
|---|---|---|---|
| DMR-001-SRC-001 | [Cronología oficial de DanMachi](https://danmachi.com/chronology) | Bloque *DanMemo Astrea Record*, `7年前`, `オラリオの暗黒期` | Denominación y ancla relativa promocional. |
| DMR-001-SRC-002 | [Anuncio oficial de publicación](https://danmachi.com/news/news131.php) | Aviso del 2022-06-14 | Origen del escenario de DanMemo y adaptación a libros. |
| DMR-001-SRC-003 | [GA Bunko, volumen 1](https://ga.sbcr.jp/product/9784815610173) | Sinopsis con `約七年前`, Ryu, Alise, Astrea y Evilus | Marco histórico inicial y personajes nombrados. |
| DMR-001-SRC-004 | [GA Bunko, volumen 2](https://ga.sbcr.jp/product/9784815610180) | Sinopsis con `死の七日間` y la ofensiva | Marco descrito por la segunda entrega. |
| DMR-001-SRC-005 | [GA Bunko, volumen 3](https://ga.sbcr.jp/product/9784815617554) | Sinopsis de la batalla decisiva contra Evilus | Marco descrito por la tercera entrega. |
| DMR-001-SRC-006 | [Perfiles oficiales de DanMachi IV](https://danmachi.com/danmachi4/character) | Perfil `リュー・リオン` en las secciones de Astrea Familia y Hostess of Fertility | Estado de Ryu en la adaptación, como comparación auxiliar. |

### Localizadores que no se obtuvieron

No se encontraron capítulos ni páginas impresas exactos. No se inventan. Para ascender las afirmaciones a verificación directa de los textos, el próximo agente debe abrir ejemplares legítimos de *Astrea Record* 1–3, anotar la edición y el idioma y registrar los localizadores precisos. Si no accede a los pasajes, debe conservar este límite de evidencia web oficial.

## 8. Límites de esta tanda

- Se abrieron páginas oficiales, no el texto completo de las novelas.
- Los perfiles del anime son evidencia de la adaptación, no un sustituto automático de la novela ligera.
- No se compararon línea por línea el evento de *DanMemo* y la trilogía publicada.
- No se usó una wiki como prueba primaria.
- No se reescribieron fichas, eventos canónicos ni datos de la AU.
- No se concluyó que Hestia estuviera presente durante la Era Oscura.
- Las afirmaciones DMR-001-CLM-001–DMR-001-CLM-009 se refieren a declaraciones explícitas en páginas oficiales; DMR-001-CLM-010 permanece como inferencia provisional.

## 9. Transferencia al siguiente agente

Se puede estructurar DMR-001-CLM-001–DMR-001-CLM-009 sin repetir la búsqueda de páginas oficiales: el término de fuente es “Era Oscura de Orario”; la referencia relativa es aproximadamente siete años antes de la visita de Bell; las sinopsis describen a Astrea Familia, Ryu y Alise, la confrontación con Evilus, “Los siete días de la muerte” y una batalla decisiva en el tercer volumen. El anuncio confirma que el evento de *DanMemo* fue revisado por el autor original para su edición en tres libros, pero no prueba que todas las versiones sean idénticas. DMR-001-CLM-010 sugiere una identidad estable de Ryu con estados temporales distintos, no dos personajes. La siguiente tanda recomendada es leer los volúmenes 1–3 para extraer eventos atómicos y localizadores internos; luego investigar por separado la cronología de Hestia/Bell.

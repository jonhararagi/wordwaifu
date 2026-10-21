# WORDWAIFU · DANMACHI-RESEARCH-002
## Psicología de personajes, cobertura multiepoca y auditoría de recuperación

- **Paquete:** `BATCH-DM-004-psicologia-personajes-y-retrieval.md`
- **ID interno:** `DANMACHI-RESEARCH-002`
- **Fecha:** 2026-10-11
- **Rama:** `feature/danmachi-lore-poc`
- **HEAD de preflight:** `3553289c5eb60a716bcd5f4fbf893e28c262b0e3`; `main` se mantiene en `c07ef226a61ad6e48b081890f1e3d96eecb585b5`.
- **Veredicto:** `PARTIAL`. Fuentes oficiales web comprobadas; faltan localizadores internos de novelas y la aplicación no recupera directamente el corpus de lore.

> **Numeración:** se conserva BATCH-DM-004 en el nombre de archivo solicitado; no se reutiliza como identificador de cola porque ya está reservado para ERA-01.

## 1. Qué se encontró

La aplicación actual tiene una base de proyectos narrativos: almacena personajes, lugares, eventos, organizaciones, relaciones e historias en IndexedDB y un respaldo local; admite importación/exportación JSON, validación y búsqueda textual a través de proyectos. Pero **WordWaifu no carga ni indexa automáticamente `lore/danmachi/` ni `catalog.json`**.

Evidencia:
- [`src/app.js`](https://github.com/jonhararagi/wordwaifu/blob/feature/danmachi-lore-poc/src/app.js#L520-L545) invoca `searchAcrossProjects`.
- [`src/project-repository.js`](https://github.com/jonhararagi/wordwaifu/blob/feature/danmachi-lore-poc/src/project-repository.js#L141-L294) busca por términos normalizados y coincidencia de subcadena entre entidades guardadas en proyectos locales.
- [`src/project-schema.js`](https://github.com/jonhararagi/wordwaifu/blob/feature/danmachi-lore-poc/src/project-schema.js) valida campos como `personality`, `motivation`, `flaw`, `backstory`, notas y relaciones, pero no define un modelo de afirmaciones probatorias con localizadores.
- [`index.html`](https://github.com/jonhararagi/wordwaifu/blob/feature/danmachi-lore-poc/index.html) inicia el prototipo offline-first con datos de demostración.

En los archivos inspeccionados no aparecen referencias a `lore/danmachi/`, `catalog.json`, `.md`, ni carga HTTP del corpus. La búsqueda existente es léxica, no semántica, y no filtra por continuidad, época, spoilers o tipo de evidencia ni devuelve citas del corpus.

### Auditoría frente a requisitos

| Requisito | Estado observado |
|---|---|
| Guardar/editar personajes, lugares, eventos, organizaciones, relaciones e historias | Existe en el modelo de proyecto local. |
| Buscar entidades de uno o varios proyectos | Existe; búsqueda textual por subcadena. |
| Leer los archivos DanMachi del repositorio durante la búsqueda | No encontrado. |
| Búsqueda semántica/híbrida | No encontrada. |
| Filtrar por época, continuidad y spoilers | No encontrado en el buscador actual. |
| Devolver fuentes/localizadores de cada afirmación recuperada | No encontrado para el corpus. |
| Abstenerse cuando no hay evidencia | No se encontró un motor de respuestas de lore que lo haga. |

`tests/browser_smoke.cjs` contiene comprobaciones de búsqueda sobre el demo (“Mira”, “Puerto Umbría”) y búsqueda maestra entre dos proyectos (véase [el test de búsqueda](https://github.com/jonhararagi/wordwaifu/blob/feature/danmachi-lore-poc/tests/browser_smoke.cjs#L450-L500)). Se inspeccionó el código, pero **no se ejecutaron esas pruebas en esta tanda**. No hay un test implementado/ejecutado que consulte Ryu por época o responda la consulta negativa de los gustos de Ais. El resultado honesto es que el corpus no es recuperable desde la aplicación actual por una ruta demostrada.

## 2. Cobertura transversal y perfiles

Se ampliaron siete fichas existentes y se crearon tres fichas individuales provisionales. Cada persona mantiene un ID estable; no se duplicó a Ryu/Ryuu por transliteración, ni se trató a Finn, Riveria y Gareth como un solo individuo.

| Grupo/personaje | Cambios en esta tanda | Estado/pendiente |
|---|---|---|
| Bell (`DM-CHAR-BELL`) | Motivación heroica y relación con Ais | Adaptación; falta cotejo de novela por escena. |
| Hestia (`DM-CHAR-HESTIA`) | Cuidado práctico y dinámica con Bell/Freya | Adaptación; no trasladar a época previa sin evidencia. |
| Ais (`DM-CHAR-AIS`) | Habilidad y curiosidad por el crecimiento de Bell | No inferir reciprocidad romántica desde una línea del perfil. |
| Eina (`DM-CHAR-EINA`) | Papel de asesora | La actitud orientadora es inferencia limitada; su estado anterior no está documentado aquí. |
| Finn (`CHAR-FINN-DEIMNE`) | Nueva ficha: liderazgo observable | Inferencias de su conducta bajo presión pendientes de escenas. |
| Freya (`CHAR-FREYA`) | Nueva ficha: motivo declarado respecto de Bell y Charm | Alias Syr no resuelto; spoiler protegido. |
| Ottar (`CHAR-OTTAR`) | Nueva ficha: entrenamiento y lealtad | Perfil de adaptación, no estado universal. |
| Ryu/Ryuu (`CHAR-RYUU-LION`) | Evolución moral bajo presión en CONT-AR | Sinopsis editorial; no mezclar con estado posterior CONT-ANIME. |
| Astrea (`CHAR-ASTREA`) | Valores y reputación social | “Misericordiosa/amable” procede del perfil de adaptación. |
| Alise (`CHAR-ALISE-LOVELACE`) | Liderazgo y confianza de las compañeras | Separar sinopsis histórica y temperamento de adaptación. |

El índice conserva además como rutas de investigación a Zeus, Hera, Alfia, Zard/Zald, Meteria, Albert Waldstein, Aria, Kaguya, Lyra; Loki Familia (Riveria, Gareth, Bete, Tiona, Tione, Lefiya); Freya Familia (Allen, Hedin, Hogni, Gulliver Brothers, Van, Anya según periodo); y Bell, Hestia, Welf, Liliruca, Mikoto, Haruhime, Hermes, Ouranos, Fels, personal de Guild y Hostess of Fertility. La lista es una cola transversal, no una afirmación de todas sus afiliaciones para cada época.

## 3. Registro de evidencia psicológica (20 afirmaciones)

Cada registro mantiene `character_id`, aspecto, claim, intervalo/época, continuidad, fuente, localizador, tipo de evidencia, verificación y nota de confianza.

### DMR-002-CLM-001 · DM-CHAR-BELL · motivación
- `character_id`: DM-CHAR-BELL
- `aspect`: motivación, habilidad y estado de adaptación
- `claim`: El perfil oficial de DanMachi V presenta a Bell como humano de nivel 5 con el epíteto Rabbit Foot; dice que llegó a Orario por admiración hacia los héroes y vincula su crecimiento acelerado con la habilidad Liaris Freese (リアリス・フレーゼ) y su admiración por Ais.
- `era_or_interval`: Historia principal; estado descrito en el perfil de DanMachi V, sin fecha interna exacta.
- `continuity_scope`: CONT-ANIME
- `source_id`: DMR-002-SRC-001
- `source_title`: DanMachi V · perfil oficial de personajes
- `source_type`: ADAPTATION
- `source_locator`: Entrada ベル・クラネル, descripción sobre admirar a los héroes y llegar a Orario.
- `source_url`: https://danmachi.com/danmachi5/character
- `evidence_type`: explicit_character_profile
- `verification_status`: source_checked
- `confidence_note`: Nivel, epíteto y habilidad son una instantánea del perfil DanMachi V; no deben proyectarse sin verificación al volumen 1 ni a todos los estados de la novela.

### DMR-002-CLM-002 · DM-CHAR-BELL · relación
- `character_id`: DM-CHAR-BELL
- `aspect`: relación
- `claim`: El perfil presenta a Ais como objeto de admiración de Bell y describe su madurez romántica como todavía incipiente.
- `era_or_interval`: Historia principal; estado descrito en DanMachi V.
- `continuity_scope`: CONT-ANIME
- `source_id`: DMR-002-SRC-001
- `source_title`: DanMachi V · perfil oficial de personajes
- `source_type`: ADAPTATION
- `source_locator`: Entrada ベル・クラネル, frases sobre アイズ y su inexperiencia romántica.
- `source_url`: https://danmachi.com/danmachi5/character
- `evidence_type`: explicit_character_profile
- `verification_status`: source_checked
- `confidence_note`: No demuestra que Ais corresponda románticamente ni puede proyectarse sin más a la AU.

### DMR-002-CLM-003 · DM-CHAR-HESTIA · valores y motivación
- `character_id`: DM-CHAR-HESTIA
- `aspect`: identidad divina, valores y motivación
- `claim`: El perfil oficial de DanMachi V presenta a Hestia como diosa del fuego y del horno y deidad principal de Hestia Familia; la describe como bondadosa y trabajando por turnos para contribuir al pago de la Hestia Knife que entregó a Bell.
- `era_or_interval`: Historia principal; perfil de DanMachi V.
- `continuity_scope`: CONT-ANIME
- `source_id`: DMR-002-SRC-001
- `source_title`: DanMachi V · perfil oficial de personajes
- `source_type`: ADAPTATION
- `source_locator`: Entrada ヘスティア, referencia a ヘスティア・ナイフ y trabajos a tiempo parcial.
- `source_url`: https://danmachi.com/danmachi5/character
- `evidence_type`: explicit_character_profile
- `verification_status`: source_checked
- `confidence_note`: El trabajo es una acción práctica descrita por la adaptación, no evidencia de un gusto alimentario. La deuda no se asigna como estado perpetuo en todos los periodos.

### DMR-002-CLM-004 · DM-CHAR-HESTIA · relación y conducta
- `character_id`: DM-CHAR-HESTIA
- `aspect`: relación y conducta
- `claim`: Hestia ama a Bell y vigila a Freya ante la posibilidad de que interfiera en ese vínculo; llamar a esto celos protectores es una interpretación.
- `era_or_interval`: Historia principal; perfil de DanMachi V.
- `continuity_scope`: CONT-ANIME
- `source_id`: DMR-002-SRC-001
- `source_title`: DanMachi V · perfil oficial de personajes
- `source_type`: ADAPTATION
- `source_locator`: Entrada ヘスティア, frase de cierre sobre la cautela frente a フレイヤ.
- `source_url`: https://danmachi.com/danmachi5/character
- `evidence_type`: explicit_profile_plus_inference
- `verification_status`: source_checked
- `confidence_note`: La cautela está en la sinopsis; “celos protectores” es lectura conductual, no diagnóstico.

### DMR-002-CLM-005 · DM-CHAR-AIS · conducta y relación
- `character_id`: DM-CHAR-AIS
- `aspect`: identidad, rango de perfil y relación
- `claim`: El perfil oficial de DanMachi III identifica a Ais como humana de nivel 6, con el epíteto Sword Princess (剣姫); resalta su capacidad con la espada y dice que le interesa el crecimiento inusualmente rápido de Bell.
- `era_or_interval`: Estado de la historia principal representado en DanMachi III; fecha interna no fijada.
- `continuity_scope`: CONT-ANIME
- `source_id`: DMR-002-SRC-003
- `source_title`: DanMachi III · perfil oficial de personajes
- `source_type`: ADAPTATION
- `source_locator`: Entrada アイズ・ヴァレンシュタイン, frases sobre sus hazañas y el crecimiento de Bell.
- `source_url`: https://danmachi.com/danmachi3/character
- `evidence_type`: explicit_character_profile
- `verification_status`: source_checked
- `confidence_note`: Es un estado del perfil de DanMachi III, no un rango perpetuo. El interés por el crecimiento de Bell no prueba por sí solo reciprocidad romántica.

### DMR-002-CLM-006 · DM-CHAR-AIS · límite de evidencia
- `character_id`: DM-CHAR-AIS
- `aspect`: límite de evidencia
- `claim`: El interés de Ais por el progreso de Bell no basta para concluir reciprocidad romántica en todos los momentos o continuidades.
- `era_or_interval`: Lectura conservadora del perfil de adaptación; sin cita de novela interna.
- `continuity_scope`: CONT-ANIME
- `source_id`: DMR-002-SRC-003
- `source_title`: DanMachi III · perfil oficial de personajes
- `source_type`: ADAPTATION
- `source_locator`: Entrada アイズ・ヴァレンシュタイン; el perfil describe interés en el crecimiento, no un veredicto general de reciprocidad.
- `source_url`: https://danmachi.com/danmachi3/character
- `evidence_type`: evidence_boundary
- `verification_status`: provisional
- `confidence_note`: No afirma que Ais carezca de sentimientos; solo limita la conclusión que esta fuente permite.

### DMR-002-CLM-007 · DM-CHAR-EINA · rol y relaciones
- `character_id`: DM-CHAR-EINA
- `aspect`: especie, rol profesional y relación
- `claim`: El perfil oficial de DanMachi III identifica a Eina Tulle como medio elfa y como una de las recepcionistas más populares de la Guild; es la asesora asignada a Bell y le proporciona información sobre el Dungeon y la ciudad.
- `era_or_interval`: Historia principal; perfil de DanMachi III, fecha interna sin determinar.
- `continuity_scope`: CONT-ANIME
- `source_id`: DMR-002-SRC-003
- `source_title`: DanMachi III · perfil oficial de personajes
- `source_type`: ADAPTATION
- `source_locator`: Entrada エイナ・チュール, descripción de su función de asesora y responsable de Bell.
- `source_url`: https://danmachi.com/danmachi3/character
- `evidence_type`: explicit_character_profile
- `verification_status`: source_checked
- `confidence_note`: Es el retrato de la adaptación; no fija su edad, el puesto exacto que ocupaba cinco años antes ni una relación con un OC previo a la trama.

### DMR-002-CLM-008 · DM-CHAR-EINA · conducta
- `character_id`: DM-CHAR-EINA
- `aspect`: conducta
- `claim`: La función asesora es compatible con un estilo práctico y orientador hacia un aventurero novato, pero es una inferencia basada en el rol.
- `era_or_interval`: Historia principal; adaptación anime.
- `continuity_scope`: CONT-ANIME
- `source_id`: DMR-002-SRC-003
- `source_title`: DanMachi III · perfil oficial de personajes
- `source_type`: ADAPTATION
- `source_locator`: Entrada エイナ・チュール, descripción de su papel como asesora.
- `source_url`: https://danmachi.com/danmachi3/character
- `evidence_type`: researcher_inference
- `verification_status`: provisional
- `confidence_note`: No atribuir automáticamente ese comportamiento a cada persona ni justificar una acción AU sin otra evidencia.

### DMR-002-CLM-009 · CHAR-FINN-DEIMNE · liderazgo
- `character_id`: CHAR-FINN-DEIMNE
- `aspect`: identidad, liderazgo y estado de adaptación
- `claim`: El perfil oficial de DanMachi III identifica a Finn como pallum de nivel 6 con el epíteto 勇者; lo presenta como líder de la Familia más grande de Orario con una capacidad de mando extraordinaria.
- `era_or_interval`: Estado representado en DanMachi III; fecha interna no establecida.
- `continuity_scope`: CONT-ANIME
- `source_id`: DMR-002-SRC-003
- `source_title`: DanMachi III · perfil oficial de personajes
- `source_type`: ADAPTATION
- `source_locator`: Entrada フィン・ディムナ: especie, nivel, epíteto y capacidad de mando.
- `source_url`: https://danmachi.com/danmachi3/character
- `evidence_type`: explicit_character_profile
- `verification_status`: source_checked
- `confidence_note`: Nivel 6 y 勇者 son una instantánea de DanMachi III, no estadísticas permanentes para todos los volúmenes. La competencia de mando no revela por sí sola sus motivos privados.

### DMR-002-CLM-010 · CHAR-FINN-DEIMNE · conducta bajo presión
- `character_id`: CHAR-FINN-DEIMNE
- `aspect`: conducta bajo presión
- `claim`: Una orientación a la planificación táctica es una hipótesis plausible por su función de mando, pero requiere escenas de decisión.
- `era_or_interval`: Historia principal, adaptación; sin fecha interna.
- `continuity_scope`: CONT-ANIME
- `source_id`: DMR-002-SRC-003
- `source_title`: DanMachi III · perfil oficial de personajes
- `source_type`: ADAPTATION
- `source_locator`: Entrada フィン・ディムナ, dato de su capacidad de liderazgo.
- `source_url`: https://danmachi.com/danmachi3/character
- `evidence_type`: researcher_inference
- `verification_status`: provisional
- `confidence_note`: No convertir una inferencia de rol en rasgo universal.

### DMR-002-CLM-011 · CHAR-FREYA · motivación
- `character_id`: CHAR-FREYA
- `aspect`: identidad divina y motivación
- `claim`: El perfil oficial de DanMachi V presenta a Freya como diosa de la belleza y líder de la Familia más fuerte de Orario; se siente atraída por el alma de Bell y desea que crezca hasta ser un compañero digno de ella.
- `era_or_interval`: Estado representado en DanMachi V; fecha interna no fijada.
- `continuity_scope`: CONT-ANIME
- `source_id`: DMR-002-SRC-001
- `source_title`: DanMachi V · perfil oficial de personajes
- `source_type`: ADAPTATION
- `source_locator`: Entrada フレイヤ: papel como diosa, liderazgo de Familia, atracción por el alma de Bell y deseo de convertirlo en compañero digno.
- `source_url`: https://danmachi.com/danmachi5/character
- `evidence_type`: explicit_character_profile
- `verification_status`: source_checked
- `confidence_note`: Instantánea oficial de DanMachi V; no explica toda su historia ni justifica cada decisión fuera de esa etapa.

### DMR-002-CLM-012 · CHAR-FREYA · conducta y relaciones
- `character_id`: CHAR-FREYA
- `aspect`: conducta y relaciones
- `claim`: El perfil describe su Charm como capaz de influir en humanos, dioses y monstruos, y una tendencia a querer para sí a quienes le atraen.
- `era_or_interval`: Estado de DanMachi V.
- `continuity_scope`: CONT-ANIME
- `source_id`: DMR-002-SRC-001
- `source_title`: DanMachi V · perfil oficial de personajes
- `source_type`: ADAPTATION
- `source_locator`: Entrada フレイヤ, frases sobre Charm y su interés por personas de la superficie.
- `source_url`: https://danmachi.com/danmachi5/character
- `evidence_type`: explicit_profile_plus_inference
- `verification_status`: source_checked
- `confidence_note`: “Posesiva” es resumen conductual, no diagnóstico; esta tanda no resuelve la identidad de Syr.

### DMR-002-CLM-013 · CHAR-OTTAR · motivación y hábito
- `character_id`: CHAR-OTTAR
- `aspect`: identidad, estado de adaptación, motivación y hábito
- `claim`: El perfil oficial de DanMachi V presenta a Ottar como boaz de nivel 7, aventurero más fuerte de Orario en esa instantánea, con el epíteto 猛者（おうじゃ）; también dice que busca ser más fuerte y entrena duramente siempre que tiene tiempo.
- `era_or_interval`: Estado representado en DanMachi V; rango/cargo no se proyecta a toda su historia.
- `continuity_scope`: CONT-ANIME
- `source_id`: DMR-002-SRC-001
- `source_title`: DanMachi V · perfil oficial de personajes
- `source_type`: ADAPTATION
- `source_locator`: Entrada オッタル: especie, nivel, epíteto, posición en Orario, deseo de fuerza y entrenamiento.
- `source_url`: https://danmachi.com/danmachi5/character
- `evidence_type`: explicit_character_profile
- `verification_status`: source_checked
- `confidence_note`: Nivel, epíteto y posición pertenecen al perfil DanMachi V; el entrenamiento está descrito, pero no prueba gustos adicionales ni ausencia de miedo.

### DMR-002-CLM-014 · CHAR-OTTAR · lealtad y conflicto
- `character_id`: CHAR-OTTAR
- `aspect`: lealtad y conflicto
- `claim`: El perfil caracteriza a Ottar como absolutamente leal a Freya y dispuesto a responder con dureza a quien la insulte.
- `era_or_interval`: Estado representado en DanMachi V.
- `continuity_scope`: CONT-ANIME
- `source_id`: DMR-002-SRC-001
- `source_title`: DanMachi V · perfil oficial de personajes
- `source_type`: ADAPTATION
- `source_locator`: Entrada オッタル, frase sobre lealtad a Freya y respuesta a sus detractores.
- `source_url`: https://danmachi.com/danmachi5/character
- `evidence_type`: explicit_character_profile
- `verification_status`: source_checked
- `confidence_note`: No establece todas sus relaciones ni su estado en periodos anteriores.

### DMR-002-CLM-015 · CHAR-RYUU-LION · motivación y valores
- `character_id`: CHAR-RYUU-LION
- `aspect`: motivación y valores
- `claim`: La sinopsis editorial presenta a Ryu buscando su propia comprensión de justicia bajo Astrea, guiada por Alise y sus compañeras.
- `era_or_interval`: Era Oscura de Orario, aprox. siete años antes de la llegada de Bell a Orario.
- `continuity_scope`: CONT-AR
- `source_id`: DMR-001-SRC-003
- `source_title`: Astrea Record vol. 1 · sinopsis oficial GA Bunko
- `source_type`: OFFICIAL_REFERENCE
- `source_locator`: Sinopsis con 正義を司る女神アストレアのもと, リュー・リオン y 団長アリーゼ.
- `source_url`: https://ga.sbcr.jp/product/9784815610173
- `evidence_type`: explicit_publisher_synopsis
- `verification_status`: source_checked
- `confidence_note`: Sinopsis oficial, no capítulo/página ni explicación completa de su filosofía.

### DMR-002-CLM-016 · CHAR-RYUU-LION · evolución bajo presión
- `character_id`: CHAR-RYUU-LION
- `aspect`: evolución bajo presión
- `claim`: La sinopsis del volumen 2 dice que las pérdidas durante el periodo llamado después “Los siete días de la muerte” sacuden la justicia de Ryu.
- `era_or_interval`: Era Oscura de Orario, tramo de Astrea Record vol. 2.
- `continuity_scope`: CONT-AR
- `source_id`: DMR-001-SRC-004
- `source_title`: Astrea Record vol. 2 · sinopsis oficial GA Bunko
- `source_type`: OFFICIAL_REFERENCE
- `source_locator`: Sinopsis con 後に『死の七日間』と呼ばれる y el pasaje sobre la justicia de Ryu debilitándose.
- `source_url`: https://ga.sbcr.jp/product/9784815610180
- `evidence_type`: explicit_publisher_synopsis
- `verification_status`: source_checked
- `confidence_note`: Cambio general explícito en sinopsis; la secuencia, personas afectadas y consecuencias requieren el volumen.

### DMR-002-CLM-017 · CHAR-ASTREA · valores y temperamento
- `character_id`: CHAR-ASTREA
- `aspect`: valores y temperamento
- `claim`: El perfil anime presenta a Astrea como diosa de justicia y orden, misericordiosa y amable; el material editorial de *Astrea Record* la vincula con la Familia que se levanta en nombre de la justicia.
- `era_or_interval`: Estado histórico de Astrea Record; los rasgos misericordiosa/amable proceden de la adaptación.
- `continuity_scope`: CONT-ANIME; CONT-AR
- `source_id`: DMR-002-SRC-002; DMR-001-SRC-003
- `source_title`: Perfil oficial DanMachi IV y sinopsis editorial GA Bunko, Astrea Record vol. 1
- `source_type`: ADAPTATION; OFFICIAL_REFERENCE
- `source_locator`: Perfil anime, entrada アストレア; GA Bunko vol. 1, sinopsis sobre Astrea Familia y la justicia.
- `source_url`: https://danmachi.com/danmachi4/character ; https://ga.sbcr.jp/product/9784815610173
- `evidence_type`: explicit_character_profile
- `verification_status`: source_checked
- `confidence_note`: Mantener la frase afectiva en CONT-ANIME; no citarla como pasaje de la novela derivada.

### DMR-002-CLM-018 · CHAR-ASTREA · relaciones y reputación
- `character_id`: CHAR-ASTREA
- `aspect`: relaciones y reputación
- `claim`: El perfil de adaptación dice que Astrea era querida por los miembros de su Familia y los habitantes de Orario.
- `era_or_interval`: Estado que describe el perfil; fecha interna no fijada.
- `continuity_scope`: CONT-ANIME
- `source_id`: DMR-002-SRC-002
- `source_title`: DanMachi IV · perfil oficial de personajes
- `source_type`: ADAPTATION
- `source_locator`: Entrada アストレア, frase sobre Familia y ciudadanos.
- `source_url`: https://danmachi.com/danmachi4/character
- `evidence_type`: explicit_character_profile
- `verification_status`: source_checked
- `confidence_note`: Evidencia reputación pública en esa continuidad, no todas las opiniones privadas.

### DMR-002-CLM-019 · CHAR-ALISE-LOVELACE · temperamento y motivación
- `character_id`: CHAR-ALISE-LOVELACE
- `aspect`: temperamento y motivación
- `claim`: La sinopsis editorial identifica a Alise como capitana que guía a Ryu; el perfil anime la describe como directa y de ánimo luminoso.
- `era_or_interval`: Era Oscura de Orario, aproximadamente siete años antes de la llegada de Bell, según la sinopsis; los adjetivos de temperamento proceden del perfil de adaptación.
- `continuity_scope`: CONT-AR; CONT-ANIME
- `source_id`: DMR-001-SRC-003; DMR-002-SRC-002
- `source_title`: GA Bunko, Astrea Record vol. 1; perfil oficial DanMachi IV
- `source_type`: OFFICIAL_REFERENCE; ADAPTATION
- `source_locator`: GA Bunko vol. 1, sinopsis con 団長アリーゼ; perfil de adaptación, entrada アリーゼ・ローヴェル.
- `source_url`: https://ga.sbcr.jp/product/9784815610173 ; https://danmachi.com/danmachi4/character
- `evidence_type`: explicit_publisher_synopsis_and_adaptation
- `verification_status`: source_checked
- `confidence_note`: El papel histórico procede de la sinopsis; los adjetivos de personalidad pertenecen a la continuidad de adaptación.

### DMR-002-CLM-020 · CHAR-ALISE-LOVELACE · liderazgo y relaciones
- `character_id`: CHAR-ALISE-LOVELACE
- `aspect`: liderazgo y relaciones
- `claim`: El perfil de adaptación retrata a Alise atrayendo la confianza de sus compañeras pese a un estilo de liderazgo poco convencional.
- `era_or_interval`: Estado histórico descrito por el perfil; fecha interna no fijada.
- `continuity_scope`: CONT-ANIME
- `source_id`: DMR-002-SRC-002
- `source_title`: DanMachi IV · perfil oficial de personajes
- `source_type`: ADAPTATION
- `source_locator`: Entrada アリーゼ・ローヴェル, descripción sobre temperamento y confianza de compañeras.
- `source_url`: https://danmachi.com/danmachi4/character
- `evidence_type`: explicit_character_profile
- `verification_status`: source_checked
- `confidence_note`: No implica que todas sus decisiones sean acertadas ni que administre siempre eficazmente.


## 3.1 Cómo leer el registro de evidencia

Los 20 registros anteriores contienen los campos requeridos: personaje, aspecto, afirmación, intervalo, continuidad, fuente y localizador, tipo de evidencia, estado de verificación y nota de confianza. Los datos de perfil oficial pertenecen a CONT-ANIME; las afirmaciones de Ryu durante *Astrea Record* pertenecen a CONT-AR. Las inferencias permanecen marcadas como provisionales.

## 4. Fuentes consultadas y límites

- **DMR-002-SRC-001**: [perfiles oficiales DanMachi V](https://danmachi.com/danmachi5/character), entradas Bell, Hestia, Freya y Ottar.
- **DMR-002-SRC-002**: [perfiles oficiales DanMachi IV](https://danmachi.com/danmachi4/character), entradas Astrea, Alise y Ryu.
- **DMR-002-SRC-003**: [perfiles oficiales DanMachi III](https://danmachi.com/danmachi3/character), entradas Eina, Finn y Ais.
- Se reutilizan [GA Bunko *Astrea Record* vol. 1](https://ga.sbcr.jp/product/9784815610173) y [vol. 2](https://ga.sbcr.jp/product/9784815610180) para Ryu/Alise; los IDs fuente están en el registro anterior DMR-001.

Los perfiles de anime son fuentes de **CONT-ANIME**, no pruebas automáticas de la novela principal. Las páginas de editorial son sinopsis, no capítulos/páginas de novela. No se localizaron datos fiables suficientes sobre comidas favoritas, aversiones, miedos o patrones de habla para todos los perfiles, así que esos campos quedan abiertos. No se infieren diagnósticos ni motivos privados como hechos.

## 5. Herramientas técnicas examinadas

Los metadatos del repositorio GitHub se consultaron el 2026-10-11; “no archivado” y actividad reciente no garantizan calidad o compatibilidad.

### SillyTavern World Info
- [Repositorio](https://github.com/SillyTavern/SillyTavern), licencia **AGPL-3.0**, no archivado (último push observado 2026-10-02).
- [Documentación World Info](https://docs.sillytavern.app/usage/core-concepts/worldinfo/).
- Entradas se activan por palabras clave, pueden activar otras recursivamente y asignarse a un personaje/persona/chat. La extensión Vector Storage puede activar por similitud con embeddings.
- **Aprovechable:** ideas de lorebooks compactos, contexto activable y límites de presupuesto.
- **Límite:** no ofrece por sí solo un registro de evidencia canónica con localizadores; controlar AU/época exige lógica adicional. Revisar AGPL si se fuera a reutilizar código.

### LlamaIndex
- [Repositorio](https://github.com/run-llama/llama_index), licencia **MIT**, no archivado (último push observado 2026-10-08).
- [Auto-retrieval con filtros de metadatos](https://docs.llamaindex.ai/en/stable/examples/vector_stores/chroma_auto_retriever) y [CitationQueryEngine](https://docs.llamaindex.ai/en/stable/examples/query_engine/citation_query_engine).
- Proporciona retrieval sobre fragmentos, filtros de metadatos y referencias a nodos fuente.
- **Aprovechable:** posible backend futuro si la búsqueda lexical se demuestra insuficiente.
- **Límite:** requiere backend Python, embeddings/store y proveedor de generación o modelos locales; demasiado pronto para instalarlo sin benchmark.

### AnythingLLM
- [Repositorio](https://github.com/Mintplex-Labs/anything-llm), licencia **MIT**, no archivado (último push observado 2026-10-09).
- [Uso de documentos](https://docs.anythingllm.com/chatting-with-documents/introduction), [límites de RAG](https://docs.anythingllm.com/chatting-with-documents/rag-in-anythingllm), [citas /proof](https://docs.anythingllm.com/channels/telegram).
- Ingesta documentos por workspace, divide en fragmentos, crea embeddings y devuelve pocos fragmentos relevantes; las citas ayudan a ver fuentes, pero RAG no entrega el corpus completo.
- **Aprovechable:** la mejor prueba externa para comparar recuperación de documentos sin integrar nada.
- **Límite:** los workspaces no equivalen a filtros narrativos completos por época/continuidad/conocimiento. Necesita modelo de embedding y LLM/provider.

### RAGFlow
- [Repositorio](https://github.com/infiniflow/ragflow), licencia **Apache-2.0**, no archivado (último push observado 2026-10-11).
- [README y docs del repositorio](https://github.com/infiniflow/ragflow#readme).
- Procesa muchos formatos, aplica estrategias de retrieval y puede mostrar referencias/citas.
- **Aprovechable:** posible si la biblioteca futura incluye grandes volúmenes de PDF/documentos complejos.
- **Límite:** Docker Compose y varios servicios hacen que sea demasiado pesado para la PoC actual offline-first.

## 6. Recomendación técnica mínima

No añadir todavía una base vectorial, embeddings ni un nuevo motor RAG. La aplicación no consulta aún su corpus documental y el corpus continúa siendo pequeño y curado. El paso razonable, tras autorización para implementar, es:

1. Mantener Markdown y `catalog.json` como fuente de verdad.
2. Generar un pequeño índice derivado de afirmaciones: ID del personaje, aspecto, claim, intervalo, continuidad, tipo de evidencia, spoiler, estado de verificación, ID de fuente, localizador y URL.
3. Filtrar **primero** por continuidad/época/spoiler y buscar texto **después**. Una consulta de Ryu en CONT-AR no debe incluir por defecto su perfil de la taberna en CONT-ANIME.
4. Mostrar cada resultado con fragmento, ID, época, continuidad, verificación, fuente/localizador y enlace.
5. Si no aparece evidencia, responder que el corpus consultado no aporta un dato sustentado y señalar la fuente pendiente. No inventar un gusto de Ais.
6. Medir recall y precisión en una lista breve de consultas antes de añadir búsqueda semántica. La similitud vectorial nunca debe reemplazar filtros de continuidad.

Esta capa de búsqueda puede funcionar sin API ni conexión; el LLM, si se añade más adelante, solo debe redactar a partir de fragmentos recuperados y conservar citas. No se instaló biblioteca, dependencia o componente durante esta investigación.

## 7. Pruebas ejecutadas y no ejecutadas

| Prueba | Estado de esta ejecución |
|---|---|
| Verificar rama y HEAD respecto de main | PASS en preflight. |
| Inspección de código y pruebas de búsqueda existentes | Completada por lectura de archivos. |
| Ejecutar `tests/browser_smoke.cjs` | No ejecutada en esta tanda. |
| Consultar lore Ryu con filtro época/continuidad desde la aplicación | No posible por una ruta existente demostrada; el runtime no carga el corpus. |
| Consulta negativa “¿Qué le gusta a Ais?” | No ejecutada; caso de aceptación futuro. La aplicación actual no tiene un motor de respuestas fundamentadas para esta consulta. |
| Validador y GitHub Actions para el commit de esta tanda | Pendiente de observar el resultado real después del commit. |

## 8. Transferencia al siguiente agente

- Claims a organizar: `DMR-002-CLM-001` a `DMR-002-CLM-020`. Los estados `source_checked` significan que la afirmación aparece en la página oficial identificada; no significan un pasaje de novela con página/capítulo verificado.
- Fuentes nuevas: `DMR-002-SRC-001` (DanMachi V), `DMR-002-SRC-002` (DanMachi IV), `DMR-002-SRC-003` (DanMachi III). Se reutilizan `DMR-001-SRC-003` y `DMR-001-SRC-004` para la psicología histórica de Ryu.
- La siguiente fase literaria debería localizar pasajes de novela/relato de Bell, Hestia, Ais y Eina; luego ampliar Ryu/Astrea/Alise con escenas de *Astrea Record* y estados previos/históricos documentados.
- La siguiente fase técnica debería definir pruebas de aceptación antes de implementar: recuperación de Ryu en CONT-AR, recuperación separada en CONT-ANIME y abstención para los gustos no documentados de Ais. No añadir LlamaIndex/AnythingLLM/RAGFlow como dependencia sin una comparación medible.
- `BATCH-DM-004` sigue reservado para ERA-01; esta investigación usa `DANMACHI-RESEARCH-002` para no pisar la cola cronológica.

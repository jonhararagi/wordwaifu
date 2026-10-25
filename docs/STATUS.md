# Estado de WordWaifu
## Estado operativo y verificación — 2026-10-24

<!-- DANMACHI-METRICS:BEGIN -->
- **Corpus DanMachi:** 178 registros activos; 29 IDs reservados; 131 documentos de apoyo.
- **Grafo de conocimiento:** 258 relaciones explícitas; 258/258 con ambos extremos activos y distintos; IDs de relación únicos.
- **Roster de adaptación:** 63 identidades; 63/63 tienen registro, ruta Markdown e expediente UI con el mismo ID.
- **Expedientes de interfaz:** 92 perfiles; 92/92 enlazados a catálogo y Markdown por ID.
- **Tipos en el catálogo:** 82 personajes; 5 grupos; 12 deidades con registro de personaje.
- **Marcadas `complete`:** 0/82 registros `character`; esto no define el universo de personajes esperados ni autoriza un porcentaje global de canon.
<!-- DANMACHI-METRICS:END -->

## Filtro de alineamiento de personajes — integrado y validado (2026-10-25)

- La PR [#115](https://github.com/jonhararagi/wordwaifu/pull/115) está integrada en `main` por el commit `3f9fb9536482f381f1cdd9b533ae75d34508f749`.
- La enciclopedia ahora tiene dos filtros independientes: orientación moral (bueno / neutral / malo) y conducta ante normas (legal / neutral / caótico), además de «Sin clasificar». La falta de evaluación no cuenta como neutralidad.
- El perfil muestra etiqueta interpretativa, justificación, continuidad, confianza baja y enlaces de fuente. Solo Alfia y Zald se clasificaron inicialmente como «caótico neutral» en CONT-AR; «caótico bueno» permanece como alternativa razonada, no canon oficial. El resto de personajes queda sin clasificar.
- **CI de la PR, exacto head SHA `2302a6e635c9208fe2c805e8154b7da991074948`:** [Validate WordWaifu](https://github.com/jonhararagi/wordwaifu/actions/runs/40193671503) y [DanMachi Lore and Retrieval Integrity](https://github.com/jonhararagi/wordwaifu/actions/runs/40193671496) — ambas exitosas.
- **CI post-merge, exacto SHA de `main` `3f9fb9536482f381f1cdd9b533ae75d34508f749`:** [Validate WordWaifu](https://github.com/jonhararagi/wordwaifu/actions/runs/40193807701) y [DanMachi Lore and Retrieval Integrity](https://github.com/jonhararagi/wordwaifu/actions/runs/40193807729) — ambas completadas con éxito.
- No se cambiaron IDs de personajes, relaciones explícitas ni métricas del catálogo. El filtro se mantiene como herramienta editorial, no como propiedad oficial de los personajes.


## Personajes históricos — correcciones de fichas interactivas DMR-045 (integrado y validado, 2026-10-24)

- La PR [#113](https://github.com/jonhararagi/wordwaifu/pull/113) se integró en `main` mediante el commit `9e5a2ee6041dd2a4283003993bfd6655a9a3d419`.
- Se corrigieron las fichas interactivas de Alfia, Zald, Meteria, Erebus y Rudra sin cambiar IDs, aristas ni estado de evidencia de los claims. Las apariencias y mecánicas de wiki permanecen marcadas como secundarias.
- Alfia: límites y costes atribuidos a Gif Blessing, Silentium Eden y Genos Angelus; Zald: snapshot histórico y límites reportados de Deus Ambrosia con el coste del veneno; Meteria: CONT-AU separado; Erebus: CONT-GAME separado y «Eren» excluido de los alias canónicos; Rudra: apariencia secundaria recuperada y la trampa sigue atribuida a Rudra Familia como grupo.
- Pruebas de la PR aprobadas: [Validate WordWaifu #3236](https://github.com/jonhararagi/wordwaifu/actions/runs/40151859509) y [DanMachi Lore and Retrieval Integrity #1689](https://github.com/jonhararagi/wordwaifu/actions/runs/40151859538).
- Pruebas posteriores a la integración, ambas con éxito y asociadas al SHA `9e5a2ee6041dd2a4283003993bfd6655a9a3d419`: [Validate WordWaifu #3237](https://github.com/jonhararagi/wordwaifu/actions/runs/40151959234) y [DanMachi Lore and Retrieval Integrity #1690](https://github.com/jonhararagi/wordwaifu/actions/runs/40151959233).
- **Pendiente real:** no se cerraron los localizadores narrativos primarios de Alfia, Zald, Meteria y Erebus, ni la responsabilidad personal de Rudra. Las métricas, el catálogo de identidades y las relaciones no cambiaron en este lote.

## Canoe Belway / Zanis Lustra / Liliruca — corrección de la atribución en fichas UI (integrado y validado, 2026-10-24)

- La PR [#114](https://github.com/jonhararagi/wordwaifu/pull/114) se integró en `main` mediante el commit `a7725802e2cef7ad9a3e648b7189e7986f1853fb`.
- Se corrigieron las fichas interactivas de Liliruca, Canoe Belway, Zanis Lustra y Chandra Ihit para distinguir `DMR-046-CLM-007` (destino de Canoe reportado por fuente comunitaria) de `DMR-046-CLM-005` (acusación atribuida a Zanis por el resumen comunitario del volumen 6).
- Las URLs editoriales de los volúmenes 2 y 6 se muestran como contexto general; no prueban el caso de Canoe, la acusación ni la acción individual de Chandra. No cambian IDs, aristas ni el estado `secondary_checked`.
- **CI de la PR (head SHA `1fe1d632565d303894956d0bae86f214cc4087f6`):** [DanMachi Lore and Retrieval Integrity](https://github.com/jonhararagi/wordwaifu/actions/runs/40152510473) y [Validate WordWaifu](https://github.com/jonhararagi/wordwaifu/actions/runs/40152510494) — ambas exitosas.
- **CI post-merge exacto de `main` (SHA `a7725802e2cef7ad9a3e648b7189e7986f1853fb`):** [DanMachi Lore and Retrieval Integrity](https://github.com/jonhararagi/wordwaifu/actions/runs/40152602203) y [Validate WordWaifu](https://github.com/jonhararagi/wordwaifu/actions/runs/40152602204) — ambas completadas con éxito. La segunda concluyó después de que se registrara provisionalmente como `in_progress`.
- **Pendiente factual:** cotejar en ediciones legítimas los pasajes de volúmenes 2 y 6 para establecer la secuencia de Canoe, qué sabía Zanis y si la acusación tiene fundamento. La discrepancia entre los resúmenes comunitarios no se ha declarado resuelta.

## Orario — localizador provisional de la plaza norte armonizado (2026-10-24)

- Se reconciliaron DMR-047 y `DMR-047-SRC-001`: la muestra oficial `trial02.pdf` corresponde al volumen 2; el índice textual conserva capítulo IV 「だからボクは力になりたい」 y marcadores de folio 20–21 junto a la escena de la plaza semicircular al norte de Orario.
- La descarga del PDF sigue devolviendo HTTP 503 y la captura no pudo inspeccionar visualmente la página. El localizador sirve como pista reproducible del índice, no como paginación cotejada; la certeza sigue en `source_checked_excerpt_only`.
- La muestra ya figura en el directorio de fuentes consultable con esos límites, y se añadieron regresiones para que ficha, registro central y directorio no contradigan el localizador ni eleven su estado.
- No cambian entidades, relaciones ni métricas del corpus. La tarea de localizar y verificar un pasaje primario visualmente inspeccionable permanece abierta.
- **Integración:** [PR #112](https://github.com/jonhararagi/wordwaifu/pull/112) se fusionó en `main` mediante squash, SHA [07784cb869428aadcc57d5bb3322dda8c5274127](https://github.com/jonhararagi/wordwaifu/commit/07784cb869428aadcc57d5bb3322dda8c5274127).
- **CI posterior al merge para ese SHA exacto:** [Validate WordWaifu](https://github.com/jonhararagi/wordwaifu/actions/runs/40150808803) y [DanMachi Lore and Retrieval Integrity](https://github.com/jonhararagi/wordwaifu/actions/runs/40150808868), ambas finalizadas con éxito.

## Orario — contraste parcial Pantheon / sede de la Guild / Babel (2026-10-24)

- La muestra editorial oficial del volumen 3, recuperada mediante indexación textual, presenta Pantheon como referencia en una avenida y después narra la entrada en la sede blanca de la Guild. La secuencia favorece interpretarlos como referencias físicas distintas; el PDF responde HTTP 503 al abrirse directamente y no se pudo verificar visualmente.
- El glosario oficial del anime describe Babel como el edificio más alto y una instalación propiedad de la Guild para supervisar y gestionar el Dungeon. No indica si la sede administrativa está dentro de Babel, es la misma estructura o se encuentra separada.
- La afirmación comunitaria que identifica Pantheon como sede principal permanece etiquetada como secundaria y en conflicto con la lectura provisional del extracto; no se añade una arista espacial o de identidad entre Pantheon, Babel y la sede.
- La conciliación se documenta en [DANMACHI-RESEARCH-051](../lore/danmachi/research/inbox/DANMACHI-RESEARCH-051-pantheon-babel-guild-headquarters-reconciliation.md). Continúan pendientes la inspección visual del pasaje, los localizadores primarios reproducibles y el inventario urbano completo.
- **Integración:** [PR #111](https://github.com/jonhararagi/wordwaifu/pull/111) se fusionó mediante squash en `main`, con SHA [f7ccf59e48d4cc2da6fe0b15b79fe794c535424a](https://github.com/jonhararagi/wordwaifu/commit/f7ccf59e48d4cc2da6fe0b15b79fe794c535424a).
- **CI posterior al merge para ese SHA exacto:** [DanMachi Lore and Retrieval Integrity](https://github.com/jonhararagi/wordwaifu/actions/runs/40150204443) y [Validate WordWaifu](https://github.com/jonhararagi/wordwaifu/actions/runs/40150204432), ambas finalizadas con éxito.

## Orario — Plaza del Amor registrada como pista secundaria navegable (2026-10-24)

- Se añadió `LOC-AMOR-SQUARE` a partir del claim `DMR-031-CLM-011` de una wiki comunitaria japonesa consultada directamente. La fuente describe el nombre `アモールの広場`, el acceso por un callejón desde la avenida principal suroeste, el pavimento, la vegetación y la iluminación nocturna.
- La relación `REL-AMOR-SQUARE-ORARIO-SECONDARY` conserva `CONT-UNVERIFIED` y `secondary_checked`; la ficha no afirma que el pasaje narrativo se haya localizado ni que el mapa comunitario sea cartografía oficial.
- La wiki en español sirve como contraste del nombre mostrado en su diagrama, no como verificación primaria independiente. La primera mención en la novela principal, la página y la precisión topológica siguen pendientes.
- La búsqueda del lore y el directorio de fuentes se actualizaron y se añadieron regresiones para comprobar que el claim se recupera en `CONT-UNVERIFIED` y no se filtra a `CONT-MAIN-LN`.
- **Estado final:** integrado y validado en `main` mediante [PR #109](https://github.com/jonhararagi/wordwaifu/pull/109), SHA `2342ccf464a6f6d88e0b31aa4c7f77af04695348`. [DanMachi Lore and Retrieval Integrity](https://github.com/jonhararagi/wordwaifu/actions/runs/40148575531) y [Validate WordWaifu](https://github.com/jonhararagi/wordwaifu/actions/runs/40148575536) finalizaron con éxito sobre ese SHA exacto.

## Orario — Rivira como asentamiento del Dungeon (2026-10-24)

- Se incorporó `LOC-RIVIRA` con una afirmación nueva (DMR-026-CLM-004) recuperada del glosario oficial del anime, que ubica el asentamiento en el piso seguro 18 y resume su actividad comercial.
- Se agregó una arista hacia `LOC-DUNGEON` bajo `CONT-ANIME`; no se conectó directamente a la ciudad de superficie `LOC-ORARIO` ni se trasladó la afirmación a `CONT-MAIN-LN`.
- La entrada se indexó en el catálogo, el índice de lugares, la búsqueda de lore y el directorio de fuentes. Las pruebas nuevas exigen que la búsqueda la encuentre en `CONT-ANIME` y la excluya de `CONT-MAIN-LN`.
- Fuente: [glosario oficial de lugares](https://danmachi.com/danmachi/special/index.html), entrada `リヴィラの街`. No aporta coordenadas ni un mapa del piso.
- **Estado final:** integrado y validado en `main` mediante el [PR #107](https://github.com/jonhararagi/wordwaifu/pull/107), SHA `2c93c79d93050e88260fc3c3a448ce40d1d6e7ee`. [Validate WordWaifu](https://github.com/jonhararagi/wordwaifu/actions/runs/40147234354) y [DanMachi Lore and Retrieval Integrity](https://github.com/jonhararagi/wordwaifu/actions/runs/40147234424) terminaron en verde sobre ese SHA.

## Orario — separación de Guild como organización (2026-10-24)

- Corrección estructural: `ORG-GUILD` y `ORG-HOSTESS` usan el tipo `organization`; `DM-GUILD-001` permanece con ID estable, pero pasa a `setting` como guía conceptual, no como organización ni ubicación.
- Las relaciones catalogadas que apuntaban al nodo mixto `DM-GUILD-001` se redirigen a `ORG-GUILD`, conservando sus claims, continuidad, tipos de evidencia e IDs de relación. Las listas de entidades de los claims del glosario también se actualizan.
- La sede física de la Guild no se da por resuelta. Babel solo retiene la evidencia de anime/Prototype en sus etiquetas respectivas; Pantheon permanece con el extracto parcial de novela y con vínculo secundario, sin afirmar ni negar que sea el mismo edificio que Babel.
- **No se modifican las métricas generadas** de corpus, relaciones, roster ni fichas; esta tanda cambia tipos y destinos de relaciones, no cantidades de registro.
- Regla de verificación: sólo se declara integrada/validada tras CI del PR y comprobación de CI del SHA resultante en `main`; el registro final debe seguir la evidencia real.

## Registro de acuerdos de conversación — 2026-10-24

- La política permanente quedó aprobada y documentada en [DEC-018/DEC-019](DECISIONS.md#dec-018--registro-persistente-de-acuerdos-de-conversación) y en [el registro de acuerdos](CONVERSATION_DECISION_LOG.md): anotar las instrucciones relevantes y consultar el historial antes de pedir al usuario que reenvíe mensajes o repita decisiones.
- Para DanMachi, las wikis reconocidas en inglés y español se utilizan como fuentes secundarias cuando no hay acceso a las novelas; las fuentes oficiales accesibles conservan prioridad y los datos de wiki no se presentan como escenas primarias cotejadas.
- Regla de comprobación: no declarar una modificación integrada ni validada hasta verificarla en `main` y revisar las pruebas del SHA exacto.
- El orden operativo y la prioridad actual quedaron registrados en [CONV-DM-2026-10-24-005](CONVERSATION_DECISION_LOG.md) y [DEC-DM-006](../lore/danmachi/06-registro-decisiones.md): cierre de la investigación pública de DMR-045 antes de retomar Orario. El directorio de fuentes consultables incorpora páginas comunitarias EN/ES de los cinco expedientes y una regresión automática; esto mejora trazabilidad, no convierte sus claims en canon primario.
- **DMR-045 — resultado del barrido secundario público:** se añadió el índice secundario de la aparición retrospectiva de Alfia en volumen 20, la pista de la rama de árbol sagrado (no verificada por fuente primaria), la caracterización del juego de Erebus bajo `CONT-GAME` y el recuerdo de la comida de Meteria bajo `CONT-AU`. No se modifican métricas generadas. DMR-045 sigue abierto por localizadores primarios; la prioridad activa pasa a Orario.


**Revisión adicional de expedientes manuales de personajes:** 82/82 registros `character` tienen un bloque manual en `src/character-dossiers.js`; los siete expedientes pendientes de bloque manual ahora están incorporados. Además, 10 bloques de interfaz corresponden a entradas heredadas de tipo deidad/grupo u otros IDs que no son registros `character`. Esta auditoría de cobertura manual no reemplaza la métrica automatizada de rutas.


**Esta sección prevalece sobre el historial inferior.** Los conteos describen estructura e integridad; no certifican un porcentaje global de cobertura del canon.

- **Rama de verificación integrada:** `main`; PR [#92](https://github.com/jonhararagi/wordwaifu/pull/92) fusionada en `f13bb96f882e19870965dd9570a17f488266e784`. Añade un evento propio para la versión original de Memoria Freese y relaciones en `CONT-GAME`, separadas de `CONT-AR` y `CONT-MAIN-LN`; los captions editoriales permanecen como evidencia secundaria.
- **Procedencia y continuidad:** `CONT-ANIME`, `CONT-MAIN-LN`, `CONT-SO`, `CONT-AR` y `CONT-AU` siguen separados. Sinopsis editoriales, perfiles de adaptación y wikis no equivalen a cotejar una escena del texto completo.
- **DMR-045 — avance verificable:** la entrevista de Dengeki Online a Fujino Omori afirma que la novelización de *Astrea Record* dejó explícito que Alfia es tía de Bell. `DMR-045-CLM-007` y `REL-ALFIA-BELL-AUNT-INTERVIEW` lo exponen como declaración autoral complementaria bajo `CONT-AR`; no sustituye el localizador de capítulo/página. Los otros huecos primarios de Alfia, Zald, Meteria, Erebus y Rudra continúan abiertos.
- **DMR-045 — segunda continuidad separada:** una entrevista a Omori publicada por LN News Online (2020) confirma la formulación de que, dentro de la historia de Memoria Freese, la madre de Bell es la hermana menor de Alfia. Se añadió `DMR-045-CLM-008` y `REL-ALFIA-BELL-AUNT-GAME-INTERVIEW` en `CONT-GAME`; como la respuesta no nombra a la hermana, Meteria no se identifica con ella ni se crea una arista Meteria–Bell desde esta fuente. No trasladar el hallazgo a `CONT-MAIN-LN`.
- **Corrección de evidencia en `CONT-AU`:** lectura directa de la nota original de Fujino Omori confirma tres años de convivencia con Alfia y Zald y sitúa a Bell cerca de cumplir siete en la escena alternativa. Claim `DMR-029-CLM-012`, detalle navegable y prueba se sincronizan; el padre de Bell sigue sin identificar y los cinco localizadores de biografía principal siguen abiertos.
- **Navegación desde fichas manuales:** Alfia, Zald y Meteria enlazan ahora al evento `EVT-DM-AU-ALFIA-ZALD-RAISE-BELL-001` y a la publicación original del autor desde su bloque de UI. La regresión comprueba las rutas sin convertir `CONT-AU` en continuidad principal.
- **Contexto autoral de Alfia/Zald:** `DMR-045-CLM-017` registra la explicación directa de Omori sobre el origen narrativo de Alfia y su cautela al usar a ambos por considerarlos demasiado fuertes. Se muestra en el historial UI con enlace a Dengeki; es evidencia sobre proceso creativo, no una escena de la novela ni una escala cuantitativa de poder. Los localizadores primarios individuales siguen abiertos.
- **Recuperación de procedencia desde la wiki:** el directorio de fuentes Dengeki ahora describe tanto `DMR-045-CLM-007` como `DMR-045-CLM-017`; las regresiones nuevas exigen que `DMR-045-CLM-017` se encuentre por búsqueda y en los perfiles de archivo de Alfia/Zald, sin filtrarse a `CONT-MAIN-LN`, `CONT-GAME`, `CONT-AU` ni anime. Esto mejora navegación de evidencia, no resuelve los localizadores narrativos pendientes.
- **PR #101 y lector primario vol. 14:** PR [#101](https://github.com/jonhararagi/wordwaifu/pull/101) quedó integrada en `6fd994f50df051e4b8f1abc647a9e5657529a186`; los workflows posteriores pasaron ([Validate #40125640096](https://github.com/jonhararagi/wordwaifu/actions/runs/40125640096), [Lore/Retrieval #40125640094](https://github.com/jonhararagi/wordwaifu/actions/runs/40125640094)). El lector oficial SBCr/BinB de DanMachi 14 se consultó, pero solo mostró la interfaz de carga; se registra como `DMR-045-SRC-015` sin claims. La trampa colectiva del capítulo 13 y el relato público del epílogo continúan parcialmente localizados, sin páginas impresas verificadas.
- **CI de integraciones recientes:** PR [#98](https://github.com/jonhararagi/wordwaifu/pull/98), commit `c0d913c5691617accac4898c6d2b3b18bba07ec7`, y PR [#99](https://github.com/jonhararagi/wordwaifu/pull/99), commit `4b982eb92bd86f8eb5fa7164e10752a917d48d31`, se encuentran fusionadas en `main`; sus dos workflows posteriores al merge pasaron sobre los SHAs exactos ([#98 Validate](https://github.com/jonhararagi/wordwaifu/actions/runs/40120951150) / [Lore](https://github.com/jonhararagi/wordwaifu/actions/runs/40120951026); [#99 Validate](https://github.com/jonhararagi/wordwaifu/actions/runs/40121414947) / [Lore](https://github.com/jonhararagi/wordwaifu/actions/runs/40121415026)).
- **Integración de cobertura DMR-045 (2026-10-24):** PR [#94](https://github.com/jonhararagi/wordwaifu/pull/94) (`0781a595ba640efda778fd38fd332a59b51c3308`), [#95](https://github.com/jonhararagi/wordwaifu/pull/95) (`5fb0ca5f14a188dab3bff90d57c795124c202734`) y [#96](https://github.com/jonhararagi/wordwaifu/pull/96) (`48aae6f6804bb6554a195ff611366ccf168ab31c`) están fusionadas en `main`; los workflows posteriores al merge pasaron en cada commit: PR #94 [Validate #40111555971](https://github.com/jonhararagi/wordwaifu/actions/runs/40111555971) / [Lore #40111555949](https://github.com/jonhararagi/wordwaifu/actions/runs/40111555949); PR #95 [Validate #40112683522](https://github.com/jonhararagi/wordwaifu/actions/runs/40112683522) / [Lore #40112683519](https://github.com/jonhararagi/wordwaifu/actions/runs/40112683519); PR #96 [Validate #40113328040](https://github.com/jonhararagi/wordwaifu/actions/runs/40113328040) / [Lore #40113328062](https://github.com/jonhararagi/wordwaifu/actions/runs/40113328062). El grafo está en 176 registros/256 relaciones, sin extremos huérfanos. PR [#97](https://github.com/jonhararagi/wordwaifu/pull/97), fusionada en `4e0a2d614e4f649d482d3f03dc7f242012d4b4dd`, añade regresiones para abrir el expediente de Afterglow desde las fichas de Alfia y Zald conservando `secondary_checked`; los workflows posteriores al merge pasaron ([Validate #40119677483](https://github.com/jonhararagi/wordwaifu/actions/runs/40119677483), [Lore/Retrieval #40119677431](https://github.com/jonhararagi/wordwaifu/actions/runs/40119677431)). Las pistas del volumen 20 conservan `secondary_checked`; su localización no equivale a leer los capítulos.
- **DMR-045 — pista secundaria de Afterglow en vol. 20:** `DMR-045-CLM-016` registra un comentario que orienta hacia retrospectivas de los capítulos 2–3 y menciona a Alfia/Zald. Se creó `EVT-DM-V20-AFTERGLOW-LEGACY-LEAD-001` con dos aristas `secondary_checked`; no se afirma que el texto primario esté cotejado, y la página exacta sigue pendiente.
- **DMR-045 — pista secundaria del prólogo de vol. 20:** `DMR-045-CLM-015` y `EVT-DM-V20-PROLOGUE-SEA-WITCH-LEAD-001` conservan un resumen comunitario que propone que la maga de cabello gris del prólogo podría ser Alfia. El grafo la enlaza como candidata, no como hecho confirmado. La sinopsis de Yen Press no describe la escena y el lector oficial consultado no expuso texto narrativo; identidad de la maga, criatura, testigo y página quedan pendientes.
- **DMR-045 — localizadores parciales de Rudra/Jura:** `DMR-045-CLM-013` registra un extracto del capítulo 13 de *DanMachi* vol. 14 sobre la trampa colectiva de Rudra Familia y la aparición posterior del Juggernaut; `DMR-045-CLM-014` registra el relato público del epílogo. El grafo conecta la Familia con el evento histórico y mantiene a Rudra como deidad sin atribución personal. Ambas afirmaciones siguen `source_checked_excerpt_only`: páginas exactas no verificadas y el intento posterior de Jura requiere cotejo integral. La misma respuesta amplía ahora el origen familiar con `DMR-045-CLM-012`: el padre es descrito como `サポーター` de Zeus Familia, sin nombre ni prueba de membresía formal; una arista conecta Bell con el evento `CONT-GAME` sin crear una identidad para el padre.
- **DMR-045 — grafo original de Memoria Freese integrado:** PR #92 añade `EVT-DM-GAME-ASTREA-RECORD-001`, los claims secundarios `DMR-045-CLM-009`–`011` para los captions editoriales de Erebus, Alfia y Zald y cinco aristas trazables a evento/afiliación. Los tres claims están acotados a `CONT-GAME`; no aportan localizadores de capítulo/página y no se exportan a `CONT-AR` ni a `CONT-MAIN-LN`. Los localizadores narrativos primarios para Alfia, Zald, Meteria, Erebus y Rudra continúan pendientes.
- **Estado factual:** la integración estructural del roster está validada; siguen pendientes pasajes primarios de la novela, cronologías escena por escena y el censo de personajes fuera del roster de adaptación.
- **Prioridad del lore:** Orario continúa en investigación; después siguen acontecimientos por fecha/lugar/causa/consecuencia y reconstrucción de historias individuales.
- **DANMACHI-RESEARCH-044 — cinco expedientes históricos:** Maxim, Argana, Bache, Seldas y Helga tienen fichas estructuradas y búsquedas por claim. Se indexó el lector oficial de muestra de *Sword Oratoria* 6 como `DMR-044-SRC-012` (`metadata_checked_only`): la extracción no mostró texto narrativo, por lo que el cotejo de escenas y capacidades individuales continúa pendiente. También se indexó la ficha editorial de *DanMachi* 20 como DMR-044-SRC-013 sin claims: su sinopsis no respalda los detalles comunitarios de Maxim.
- **DANMACHI-RESEARCH-047 — plaza semicircular al norte de Orario:** ubicación navegable añadida desde una muestra editorial; claim en `source_checked_excerpt_only` con capítulo IV y marcadores 20–21 en el índice textual, sin inspección visual del PDF. No trasladar datos de `CONT-PROTOTYPE` ni declarar Orario completa.
- **DANMACHI-RESEARCH-048 — Pantheon y avenida comercial:** mención de Pantheon recuperada del índice del extracto editorial del volumen 3; claim `source_checked_excerpt_only`, folios 36–37 no verificados visualmente y relación con la sede de la Guild/Babel aún sin resolver.
- **DANMACHI-RESEARCH-049 — Daedalus Street / Sword Oratoria vol. 7:** sinopsis oficial registrada como `CONT-SO-LN`; confirma el objetivo de investigación de Loki Familia, no la geometría de la calle ni la primera mención en la novela principal.
- **DANMACHI-RESEARCH-050 — Daedalus Street / relato corto oficial:** escena nocturna recuperada del índice del extra `迷宮街の恋愛話・裏`, bajo `CONT-SHORT` y `source_checked_excerpt_only`; no transferir a novela principal ni Sword Oratoria.
- **DANMACHI-RESEARCH-039 — lugares Prototype:** esta propuesta integra tres rutas parciales para avenidas, Central Park y comercio de calle; reutiliza claims DMR-034 en `CONT-PROTOTYPE` sin promoverlos a canon de novela.
- **DANMACHI-RESEARCH-040 — horizonte editorial:** al 2026-10-21, vol. 21 es el último tomo principal publicado consultado; vol. 22 (2026-12-15), Sword Oratoria 17 (2027-01-15) y episode Amid (2027-02-15) figuran como próximos, no como contenido ya publicado.
- **DANMACHI-RESEARCH-041 — episode Haze/Heith:** la variante de romanización se conecta al ID estable `CHAR-HEITH-VELVET`; se incorporó un evento parcial basado en la sinopsis editorial, con relaciones a Heith y Ottar. El texto completo y las escenas detalladas siguen pendientes.

- **Auditoría de ramas (corte GitHub 2026-10-24 UTC):** [informe y censo](BRANCH_AUDIT_2026-10-24.md). El snapshot inicial comparó 101 ramas no principales (87 divergidas, 14 solo detrás); un reescaneo paginado encontró 102 ramas no principales y la única omitida era la rama documental de publicación de la propia PR #88, cuyo contenido ya está en main. Clasificación actualizada: 88 divergidas, 14 solo detrás, 0 ahead-only. No hay rama apta para fusión íntegra. El índice contiene 85 PR: 60 fusionadas, 25 cerradas sin fusionar y 0 abiertas.
- **CI posterior a la integración funcional:** el SHA de `main` `f13bb96f882e19870965dd9570a17f488266e784` pasó ambos workflows: [Validate WordWaifu #40108970941](https://github.com/jonhararagi/wordwaifu/actions/runs/40108970941) y [DanMachi Lore and Retrieval Integrity #40108970837](https://github.com/jonhararagi/wordwaifu/actions/runs/40108970837). Ambos runs reportaron `success` sobre ese SHA exacto; las dos PR head checks también pasaron antes de la fusión.

## Snapshot operativo previo — 2026-10-20 (histórico, sustituido)

Las notas siguientes se conservan para trazabilidad. Sus cifras y referencias de rama/PR pertenecen al corte anterior y no prevalecen sobre el bloque generado que aparece al principio.

- **Expedientes de personajes:** 79 perfiles estructurados en `src/character-dossiers.js`, incluidas rutas ampliadas para Alfia, Zald, Erebus, Rudra, Jura, Valletta y Thanatos; estos perfiles no certifican por sí solos la evidencia primaria.
- **Lote histórico:** rutas distintas para Astrea Record, Rudra/Jura/Juggernaut y el pasado de Tiona/Tione en Sword Oratoria vol. 6. Las fichas con evidencia secundaria o sin localizador primario mantienen ese estado.

**Esta sección prevalece sobre el historial que sigue.** No se certifica un porcentaje global a partir de cantidad de archivos o tests.

- **Rama de propuesta:** `jonhararagi/wordwaifu` · `work/danmachi-character-completion-dark-era-2026-10`; CI de esta propuesta aún por verificar.
- **Cobertura estructural DanMachi propuesta:** 164 registros activos, 31 IDs reservados, 118 documentos de apoyo y 219 aristas; los recuentos no equivalen a un porcentaje de canon verificado.
- **Roster de adaptación:** 63 identidades. Cada una dispone de registro activo, ficha Markdown y expediente de interfaz. Los cuatro hermanos Gulliver tienen IDs y rutas independientes y enlazan con grupo y Freya Familia.
- **Hubs de navegación:** 18 registros de Familia, organizaciones Guild/Hostess, ubicación `LOC-HOSTESS` y nodo Xenos; las listas históricas siguen parciales.
- **Grafo:** 217 aristas explícitas en el catálogo propuesto. La Era Oscura añade rutas secundarias para Alfia/Zald/Erebus y pistas de Valletta/Thanatos marcadas `pending_verification`, no como canon confirmado.
- **Pruebas de cobertura:** además de las 63 identidades del roster, la propuesta comprueba el índice de Era Oscura, Kali Familia, el evento de las gemelas, los expedientes nuevos y la integridad del grafo. La aprobación definitiva depende de CI sobre el candidato.
- **Límite factual:** los perfiles del anime no se transfieren automáticamente a `CONT-MAIN-LN`, `CONT-SO` o `CONT-AR`. Las biografías escena por escena y el censo fuera del roster siguen abiertos.
- **DANMACHI-RESEARCH-037 — organizaciones separadas:** `ORG-GUILD` y `ORG-HOSTESS` se separan de ubicaciones y enlazan con Ouranos, Eina, Fels y el personal de Hostess con claims oficiales bajo `CONT-ANIME`.
- **Siguiente etapa:** Orario continúa parcialmente documentado; sucesos por tiempo, lugar, causas y consecuencias, y la reconstrucción de historias individuales, requieren sus propias fuentes primarias.
- **Nuevos perfiles Loki:** Riveria, Gareth, Lefiya, Tiona, Tione, Bete y Raul tienen ficha individual con alcance provisional `CONT-SO`; los datos oficiales de adaptación no se extrapolan automáticamente a la novela principal.
- **Familia Hestia:** el registro `DM-FAM-HESTIA` pasa a `source_checked_partial` porque seis claims trazables respaldan el estado inicial de la adaptación y un snapshot de los perfiles oficiales. Esto no cierra el roster por época ni la cronología de la novela ligera.
- **Mapas de historia añadidos:** Sword Oratoria 14 (los orígenes de los tres líderes) y el volumen principal 21 (expedición fallida / rescate del piso 60). Ambos son mapas parciales respaldados por la sinopsis editorial y, en el volumen 21, un fragmento oficial. No equivalen al libro entero ni a un final de la serie.
- **Historia Ryu–Bell–Astrea (DanMachi V):** nuevo evento enlazado a dos fuentes oficiales de la adaptación y tres relaciones con continuidad CONT-ANIME. La visita de Ryu a Astrea en la novela/Family Chronicle permanece separada. La ruta del volumen 21 pasó en el SHA b5222780d313a097496d5c368cabab4e8cafd54c; la navegación del evento desde Ryu y la búsqueda de fuentes en vivo pasaron en el SHA a332312c0cd39c7f1b61c7b8f6461b28b960f030. El nuevo recorrido Astrea Record requiere sus propios checks.
- **ID conflictivo corregido:** el paquete de Astrea ya no reutiliza `DMR-006-CLM-001..005`; usa `DMR-012-CLM-001..005`. El validador y las pruebas cubren identificación única y rutas a la fuente.
- **Rendimiento del Story Forge:** benchmark de Node en CI: medianas de 0,81 ms (100 capítulos), 1,61 ms (250) y 2,20 ms (500), nueve ejecuciones por tamaño. Son datos del runner de GitHub, no garantías de rendimiento en PC/browser.
- **Arquitectura:** se priorizó quitar trabajo O(n²) de la asignación de beats; no se añadió GPU ni Worker porque los benchmarks actuales no muestran necesidad. La decisión se revisará con mediciones reales de tareas largas en navegador.
- **CI verificado:** SHA `15c968dd846138defd80c6599a6bdab84c7673fd`: [Validate WordWaifu #39156859477 PASS](https://github.com/jonhararagi/wordwaifu/actions/runs/39156859477) y [DanMachi Lore and Retrieval Integrity #39156859489 PASS](https://github.com/jonhararagi/wordwaifu/actions/runs/39156859489). Incluye regresiones para la relación Bell–Hestia por sinopsis, la ruta Eina–Guild, la búsqueda transversal Zeus/Hera, la integridad de aristas y el smoke de navegador. Este SHA es la última revisión de código con evidencia completa antes de esta actualización documental.
- **CI del cierre de relaciones DanMachi (SHA `ad182ab5bba631930eae88339e1b9783d819ad89`):** [Validate WordWaifu #39155674818 PASS](https://github.com/jonhararagi/wordwaifu/actions/runs/39155674818) y [DanMachi Lore and Retrieval Integrity #39155674834 PASS](https://github.com/jonhararagi/wordwaifu/actions/runs/39155674834). El test regresivo ahora acepta `secondary_checked` o `pending_verification` para el motivo disputado de Ryu y prohíbe `source_checked` sin evidencia primaria. Esta evidencia corresponde exactamente a `ad182...`; los cambios documentales posteriores requieren sus propios checks.
- **Historia Astrea Record (CONT-AR):** EVT-DM-ASTREA-RECORD-FOUNDATIONS-001 conecta la referencia temporal relativa de unos siete años antes de Bell, la búsqueda de justicia de Ryu bajo Astrea, el papel de Alise como capitana/guía y el impacto general de las pérdidas y la escalada de Evilus. Usa las sinopsis oficiales de GA Bunko I–III; no equivale a leer los volúmenes completos ni fija destinos individuales.
- **Historia del volumen 21 (CONT-MAIN-LN):** `EVT-DM-V21-EXPEDITION-RESCUE-001` enlaza el fracaso de la expedición en el piso 60, la respuesta de Orario, el regreso de Bell y los fragmentos públicos del capítulo inicial/prólogo. Se distinguen `provisional_summary` de `source_checked_excerpt_only`; aún no equivale a una reconstrucción integral del volumen.
- **Historia Zeus/Hera (CROSS-CONTINUITY):** las fichas parciales de `FAM-ZEUS` y `FAM-HERA` enlazan a `EVT-DM-GREAT-QUESTS-001` con la respuesta oficial sobre Behemoth y Leviathan. La referencia no asigna un monstruo por Familia ni resuelve la misión del Dragón Negro; por eso el grafo admite `CROSS-CONTINUITY` como alcance explícito.
- **Ruta de orientación Bell–Eina–Guild (CONT-ANIME):** el perfil oficial de DanMachi III confirma que Eina es la asesora asignada a Bell y que trabaja en la Guild. El evento `EVT-DM-EINA-ADVISOR-ANIME-001` y dos aristas distinguen el vínculo personal de la afiliación institucional. La historia de asesoramiento en novela sigue sin localizador interno.
- **Primer encuentro Bell–Hestia (CONT-MAIN-LN):** la sinopsis editorial oficial del volumen 1 respalda el encuentro y la invitación a integrarse a la Familia. `EVT-DM-BELL-MEETS-HESTIA-001` queda `source_checked_partial`; todavía no hay localizador interno para la secuencia exacta ni el descenso de Hestia. Relación: `REL-BELL-MEETS-HESTIA-NOVEL-SYNOPSIS`.
- **Apertura de Bell (CONT-ANIME):** el evento `EVT-DM-BELL-OPENING-CRISIS-ANIME-001` permite recorrer el estado inicial de Hestia Familia y la crisis del quinto piso, respaldado por la sinopsis oficial del episodio 1. No cierra el día/orden exacto del primer encuentro en la novela ligera.
- **CI del cierre factual y de relaciones (SHA `19bbe40050496df71eec0a7e794ca08748a92fe7`):** [Validate WordWaifu #39157291171 PASS](https://github.com/jonhararagi/wordwaifu/actions/runs/39157291171) y [DanMachi Lore and Retrieval Integrity #39157291147 PASS](https://github.com/jonhararagi/wordwaifu/actions/runs/39157291147). En este SHA pasan los nuevos filtros de evidencia del volumen 21, las relaciones `CROSS-CONTINUITY`, la integridad del catálogo y el smoke del navegador. Los cambios de documentación de esta sección son posteriores y tienen sus propias ejecuciones de CI.
- **CI tras completar los enlaces narrativos del volumen 21:** SHA `b5222780d313a097496d5c368cabab4e8cafd54c`: [Validate WordWaifu #39157471779 PASS](https://github.com/jonhararagi/wordwaifu/actions/runs/39157471779) y [DanMachi Lore and Retrieval Integrity #39157471757 PASS](https://github.com/jonhararagi/wordwaifu/actions/runs/39157471757). Las fichas de volumen 21, Loki Familia, Ais, Finn y Bell enlazan a un evento que separa la sinopsis editorial de los fragmentos públicos. Este registro de CI documenta ese SHA, no los commits documentales posteriores.
- **Evidencia de las 70 aristas:** 61 `source_checked`, 3 `secondary_checked`, 1 `pending_verification`, 2 `provisional_summary` y 3 `source_checked_excerpt_only`. Las dos aristas históricas nuevas Ryu–Kaguya/Ryu–Lyra usan el roster comunitario DMR-007-CLM-005 y no representan vínculos personales confirmados.
- **CI del cierre funcional de navegación y búsqueda (SHA `a332312c0cd39c7f1b61c7b8f6461b28b960f030`):** [Validate WordWaifu #39158788753 PASS](https://github.com/jonhararagi/wordwaifu/actions/runs/39158788753) y [DanMachi Lore and Retrieval Integrity #39158788649 PASS](https://github.com/jonhararagi/wordwaifu/actions/runs/39158788649). El smoke real de Chromium abre desde la ficha de Ryu el expediente de evento enlazado, lo cierra conservando la ficha y verifica que la búsqueda de lore en vivo recupera los claims nuevos de Ryu y Eina.
- **CI de cierre de Astrea Record y navegación histórica (SHA `8e8947fb3e4f3b48ad734bc4db24daf17c2a7173`):** [Validate WordWaifu #39159428122 PASS](https://github.com/jonhararagi/wordwaifu/actions/runs/39159428122) y [DanMachi Lore and Retrieval Integrity #39159428052 PASS](https://github.com/jonhararagi/wordwaifu/actions/runs/39159428052). El smoke de Chromium recorrió Ryu → Alise → Ryu → Astrea en `CONT-AR`, abrió el nuevo evento y volvió conservando contexto.
- **Límite factual:** quedan pendientes localizadores de capítulo/página, mayor cobertura de miembros y Familias, caminos históricos completos, y el orden/desenlace de historias donde solo existe sinopsis o fragmento. No es honesto declarar 90% o 100% global mientras eso siga abierto.
- **Lección de actualizaciones técnicas:** las publicaciones recientes de GitHub sobre lockfiles y retención de Actions están documentadas en [investigación técnica](TECHNICAL_RESEARCH.md). Los checks se verifican por SHA, nombre de workflow y resultado concreto, no por conteos agregados.
- **Registro ampliado (2026-10-18):** [fallos y soluciones técnicas, pruebas de cierre y deuda factual](ENGINEERING_FAILURES_AND_FIXES.md). Se corrigieron los conteos del catálogo, el validador admite `pending_verification` cuando no hay fuente primaria y el parser/buscador acepta `CROSS-CONTINUITY` de forma explícita.

## Snapshot histórico de la auditoría previa
Los registros por debajo del separador incluyen historiales y resultados antiguos de otras iteraciones; no deben prevalecer sobre el estado operativo actual de esta sección.


---


## Resumen
- Producto: WordWaifu · World & Story Foundry.
- Objetivo: aplicación local/offline-first para organizar universos, canon, atlas temporal, personajes, relaciones, acontecimientos, organizaciones e historias/novelas.
- **Estimación histórica (snapshot antiguo): 19%**. No corresponde al HEAD actual ni se usa como medida de progreso vigente; véase la sección operativa superior.
- Tecnología: HTML/CSS/JavaScript, SVG, IndexedDB y respaldo de compatibilidad en localStorage.
- WordWaifu gestiona canon y planificación narrativa; BotImagen gestiona recursos visuales. Atlas, lore, expedientes, arte, papelera, Story Foundry, catálogo de poderes y catálogo mitológico quedaron reconciliados en `main` mediante PR #18. La cobertura factual y algunos gates manuales siguen parciales.

## GitHub y control de cambios
- Repositorio: `jonhararagi/wordwaifu`.
- Rama autorizada de esta misión: `work/story-completion-danmachi-audit-2026-10`. Las referencias a ramas de tareas anteriores en esta sección son contexto histórico, no la rama activa de esta auditoría.
- `main` se actualizó en esta misión: PR #18 está fusionada; el HEAD operativo se registra al inicio de este documento. No usar los SHA históricos de la sección antigua como estado actual.
- La comparación de ramas fechada el 2026-10-10 que sigue en el historial es histórica; no acredita la relación actual entre esta candidata y `main`.
- La lista de PR que aparece en el historial de esta sección es una instantánea antigua. Estado vigente: [PR #18](https://github.com/jonhararagi/wordwaifu/pull/18) integrada en `main`.
- Guardias y regresión de activación: [`6c80626`](https://github.com/jonhararagi/wordwaifu/commit/6c80626a75b4791db296d47eb7d524608ea8977b), [`d6a4d96`](https://github.com/jonhararagi/wordwaifu/commit/d6a4d96c57243bd8ca0bb4a01a1da486894ccb35).
- Registro de continuidad: [`aea71f6`](https://github.com/jonhararagi/wordwaifu/commit/aea71f6240eaef99ba0e5201416e361e9c8ad4ea).
- Workflow de validación configurado para pushes en `main` y `work/**`, PR hacia `main` y `workflow_dispatch`: [`4502475`](https://github.com/jonhararagi/wordwaifu/commit/4502475cdf9b536c0c5d6dbf51a83efc7408ae6d).

## Capacidad con evidencia automatizada
- **WF-001-B:** CRUD de lugares, movimiento SVG y borrado seguro.
- **WF-002-A/B/C:** CRUD de personajes, acontecimientos y organizaciones con limpieza selectiva de referencias.
- **WF-003-A:** relaciones con ID estable y proyección compatible.
- **WF-004-B:** catálogo multiverso y búsqueda contextual por IDs.
- **WF-004-C.1 · PARCIAL:** snapshots versionados, migración IndexedDB v1→v2, restauración con copia previa y respaldo antes de importar.
- **WF-004-C.2 · DONE / PASS_REAL histórico:** snapshots previos verificados para los cinco tipos de borrado; límite 25/26 validado. Evidencia histórica: [CI #38008260869](https://github.com/jonhararagi/wordwaifu/actions/runs/38008260869). No acredita cambios posteriores de C.3.

## HEAD de código validado más reciente
- SHA: `327360caa66875becbd11e5563fc2988196553a4`.
- CI: [#38022402137 PASS](https://github.com/jonhararagi/wordwaifu/actions/runs/38022402137).

## WF-004-C.3 — Papelera y recuperación (PARTIAL)
- IndexedDB v2→v3 añade el almacén `trash`; la API y la UI permiten enviar proyectos a la papelera, listar, restaurar por ID y borrar permanentemente con confirmación.
- El proyecto activo está protegido y se conservan/restauran sus snapshots. El catálogo y la búsqueda multiverso filtran tombstones.
- **Hardening de esta iteración:** `write(project)` valida el tombstone dentro de la transacción de escritura; `saveActive(project)` consulta la papelera antes de escribir el respaldo local y restaura el respaldo previo si detecta la carrera.
- Chromium verifica que escribir/guardar un ID en papelera se rechace, que el respaldo no sea sobrescrito y que el respaldo de otro universo sobreviva al movimiento y al borrado permanente.
- **PASS_STATIC:** sintaxis JavaScript y 18 pruebas de esquema.
- **PASS_REAL:** [CI #38023966741](https://github.com/jonhararagi/wordwaifu/actions/runs/38023966741), commit de código `2ef649202e1f27db0e0ff0a939e4307933e178de`; sintaxis, 18 pruebas de esquema, Chromium smoke y validador estructural completados.
- **PASS_REAL:** el smoke ahora crea dos universos con el mismo nombre y distintos IDs, mueve ambos a papelera, restaura uno, borra permanentemente el otro y verifica que sus snapshots e identidad no se mezclan.
- **NOT_RUN:** cuota real agotada; una excepción simulada no se presenta como cuota real. Revisión visual/manual en Windows 11 también sigue pendiente.
- **PARTIAL:** quedan los gates de cuota real y revisión manual en Windows 11.

## Gates pendientes — WF-004-C.3 sigue PARTIAL
- [x] CI de código y regresión duplicada en verde: sintaxis, 18 pruebas de esquema, Chromium y validación estructural; [#38023966741](https://github.com/jonhararagi/wordwaifu/actions/runs/38023966741).
- [x] El respaldo local de otro universo sobrevive al movimiento a papelera y al borrado permanente.
- [x] Proyectos con el mismo nombre y distintos IDs permanecen aislados en mover/restaurar/borrar.
- [ ] Cuota real agotada o limitación del entorno demostrada y documentada; excepciones inyectadas no equivalen a cuota real.
- [ ] Revisión visual/manual en Windows 11.
## Límites conocidos del producto
- Novel Studio completo, generación narrativa avanzada, Continuity Guard integral e integración con BotImagen siguen pendientes.
- La inspección visual manual en Windows 11 no está acreditada.
- WF-004-C.3 permanece parcial hasta superar los gates pendientes.

## Protocolo de continuidad
Leer `docs/DONE.md`, `docs/STATUS.md`, `docs/WF-004-C3-TRASH-CONTRACT.md`, `docs/WORK_PROTOCOL.md`, `docs/MASTER_VISION.md`, `docs/DATA_MODEL.md` y `docs/TECHNICAL_RESEARCH.md`. Verificar HEAD, CI y PR antes de escribir. Mantener una tarea activa por agente. Para nuevas integraciones, usar rama basada en `main`, CI verde en el SHA exacto y PR revisable; no usar force push ni borrar ramas.


## Actualización de continuidad — plan de cuota y Windows 11 (2026-10-10)
- Se añadió [`docs/WF-004-C3-QUOTA-WINDOWS-TEST-PLAN.md`](WF-004-C3-QUOTA-WINDOWS-TEST-PLAN.md) para definir evidencia `PASS_SIMULATED` frente a `PASS_REAL`, criterios seguros para investigar cuota real y una lista reproducible de revisión manual en Windows 11.
- Esta adición es documentación, no una ejecución de pruebas: no acredita cuota real ni inspección Windows.
- **WF-004-C.3 continúa PARTIAL.** Siguientes pasos: implementar/verificar la regresión automatizada de fallo simulado si aún falta; ejecutar CI; realizar cuota real solo en entorno aislado seguro si es viable; mantener Windows 11 como `NOT_RUN` hasta contar con ejecución real.

### Actualización incremental · 2026-10-18

En `main` se activaron cuatro expedientes secundarios de Hestia Familia que estaban reservados como candidatos: Liliruca Arde, Welf Crozzo, Mikoto Yamato y Haruhime Sanjouno. El catálogo ahora enlaza sus relaciones explícitas a claims del perfil oficial de DanMachi V con continuidad `CONT-ANIME`; esto mejora las fichas y la navegación, pero no implica que sus biografías de novela estén completamente cotejadas. Se mantiene la distinción entre perfil oficial de adaptación y canon de novela con localizador primario.


- **DANMACHI-RESEARCH-045:** los cinco expedientes históricos tienen fichas ampliadas y Meteria cuenta con perfil manual en la interfaz. La nota oficial de Fujino Omori está disponible en el directorio de fuentes y enlazada desde las fichas de Alfia y Zald como sección separada `CONT-AU`. `DMR-029-CLM-012` se clasifica como `source_checked_excerpt_only` solo en `CONT-AU`; las pruebas impiden su filtración a `CONT-MAIN-LN` y ofrecen rutas desde ese resultado a ambas fichas. Las sinopsis oficiales de Astrea Record 1–3 y DanMachi 20 fueron revisadas, pero no verifican biografías, relaciones ni capacidades individuales. El lector oficial de muestra de Astrea Record 1 quedó indexado como `metadata_checked_only` y sin claims porque la extracción no expone el texto narrativo. Los localizadores narrativos primarios de Alfia, Zald, Meteria, Erebus y Rudra siguen pendientes; la atribución personal a Rudra no se promueve. La posibilidad de crianza de Bell por Alfia/Zald ya tiene una ficha de navegación independiente `EVT-DM-AU-ALFIA-ZALD-RAISE-BELL-001`, fuera del timeline principal; sus cuatro aristas conservan `CONT-AU` y `DMR-029-CLM-012`. Se añadió `DMR-045-CLM-005` como pista secundaria sobre nombres atribuidos a las armas de Leon, sin aristas nuevas; el cotejo directo de los pasajes del volumen 20 sigue abierto. Se añadió `DMR-045-CLM-006` con un fragmento indexado de sinopsis oficial de `CONT-AR` que cita los enfrentamientos Zald–Ottar y Alfia–Astrea Familia en el último día de los Siete Días de la Muerte. Dos aristas al evento conservan `source_checked_excerpt_only`; la página editorial respondió HTTP 503 al abrirse directamente, y el texto narrativo de los cinco expedientes sigue pendiente. La muestra pública de *Astrea Record 3* en BOOK☆WALKER solo expuso portada y contador 1/63, por lo que quedó indexada como `DMR-045-SRC-006` / `metadata_checked_only`, sin claims. La muestra autorizada de DanMachi 20 aportó el localizador de página 17/33 (`DMR-045-SRC-007`), donde se ven `レオン` y `バルドル`; el localizador no tiene claims y no equipara `バルドル` con `ザルド`.


- **DANMACHI-RESEARCH-046 — Solingen y Soma Familia:** siete expedientes tienen ya ficha Markdown ampliada, ficha de UI manual, fuentes y tests de navegación/búsqueda. Los datos de wiki permanecen secundarios; la acusación de Zanis contra Liliruca no se presenta como culpabilidad probada.


## DMR-045 — ruta editorial licenciada añadida (2026-10-25)

- Se añadió al directorio interactivo la ficha oficial de Yen Press / Yen On para *Astrea Record, Vol. 3*, edición inglesa licenciada, ISBN 9781975379926, con fecha editorial del 26 de noviembre de 2024: [ficha oficial](https://yenpress.com/titles/9781975379926-astrea-record-vol-3-is-it-wrong-to-try-to-pick-up-girls-in-a-dungeon-tales-of-heroes).
- La ruta se muestra en las fichas de Alfia, Zald y Erebus y queda cubierta por regresiones del directorio de fuentes y de fichas.
- **Alcance limitado:** la página ofrece metadatos y sinopsis general; no contiene los pasajes narrativos ni localizadores de personaje. No se eleva ninguna afirmación secundaria a evidencia primaria y DMR-045 permanece abierto.
- **Integración:** [PR #116](https://github.com/jonhararagi/wordwaifu/pull/116), merge commit `6efb50779b17924e7064876af75afa3cbd1d3b67`.
- **CI de la PR:** [Validate WordWaifu](https://github.com/jonhararagi/wordwaifu/actions/runs/40196827871) y [DanMachi Lore and Retrieval Integrity](https://github.com/jonhararagi/wordwaifu/actions/runs/40196827863) — ambas exitosas.
- **CI post-merge sobre el SHA exacto de `main` `6efb50779b17924e7064876af75afa3cbd1d3b67`:** [Validate WordWaifu](https://github.com/jonhararagi/wordwaifu/actions/runs/40197003502) y [DanMachi Lore and Retrieval Integrity](https://github.com/jonhararagi/wordwaifu/actions/runs/40197003501) — ambas exitosas.
- **Siguiente trabajo:** seguir con Orario y los localizadores pendientes sin inferir la relación física entre Pantheon, Babel y la sede de la Guild.

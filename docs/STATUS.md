## Reconciliación de relaciones monstruo–evento V1 (2026-11-11)

- **Estado remoto inicial:** `main` en `deaf22afc230dfef2d634396ee8242367659ea26`; idéntico al checkpoint recibido. Sin cambios posteriores al inicio de la tarea.
- **Alcance:** cuatro fichas objetivo; eventos V1 existentes; convención `encounter_event_ids` en fichas de monstruos. No se modifican DMR-061, DMR-062, la fuente del volumen ni índices.
- **Resultado:** se confirma una relación nueva en alcance: `MON-DM-DUNGEON-LIZARD-001` → `EVT-DM-V01-BELL-FIGHTS-DUNGEON-LIZARD-GOBLIN-AND-RETURNS-001`. La referencia se basa en la participación explícita del Dungeon Lizard en PDF pp.117–119 y el expediente del evento en pp.117–120.
- **No se añadieron relaciones** para Frog Shooter (p.76: DMR-061 indica que no se crea evento aislado para su muerte), War Shadow (pp.79–85: combate sin desenlace/evento de encuentro cerrado; la actualización de pp.91–97 es posterior y no identifica monstruos como participantes) ni Battle Jabalí (p.156: demostración de domesticación, no encuentro de Bell; no confundir con la fuga posterior).
- **Límite detectado fuera de las cuatro fichas objetivo:** el evento Dungeon Lizard/Goblin también identifica al Goblin como participante; su ficha contiene la referencia en el texto narrativo, pero su frontmatter no enumera este evento. No se modifica por quedar fuera del conjunto objetivo explícito. Considerar como siguiente reconciliación acotada.
- **Estado técnico:** un solo archivo de monstruo actualizado; sin IDs/eventos nuevos, sin cambios en DMR-061/062 ni en el índice. CI pendiente de consultar sobre el SHA resultante.
- **Volumen 1:** permanece `PARTIAL / IN_PROGRESS`.

## DMR-062 — auditoría independiente Markdown↔PDF, Volumen 1, pp.57–72 (2026-11-06)

- **Integración directa en main**, sin rama ni PR. SHA inicial comprobado: 5c1ef56ae14b4112e5fb8f23dc4f4f19ab942f00; main comparado con ese SHA = identical antes de los cambios.
- Se cotejaron los folios físicos 57–72 contra el Markdown exacto (blob d2b3306b1661584d9a42d651f57dca8a6814b20b) y el PDF de 215 páginas (7.495.544 bytes; SHA-1 del payload 13ceaeb94727698f7e8c3b0e607a1ba4ffbd98c3). PDF recuperado y renderizado sin modificar; fuente original intacta.
- **Resultado:** 16/16 folios inspeccionados; 15 folios con texto cotejado (13 COMPLETE, 2 PARTIAL); p.70 es una ilustración de página completa sin bloque de imagen correspondiente en el tramo Markdown.
- **Hallazgos aceptados:** V1-MDPDF-068-001 y V1-MDPDF-071-001 (FORMATTING_LOSS, separadores × × × convertidos en encabezados); V1-MDPDF-070-001 (IMAGE_MISSING).
- No se detectó una nueva discrepancia textual demostrada, duplicación ni cambio de orden. El cotejo español↔japonés continúa pendiente; no se alteraron fuentes, fichas ni eventos.
- **Siguiente rango:** PDF pp.73–88. DMR-062 y V1 siguen PARTIAL / IN_PROGRESS; no iniciar Volumen 2.
- **CI:** no se dispone de una ejecución de Actions consultable para este commit en el conector; no se afirma CI aprobado.

# Estado de WordWaifu

## DMR-045 — adaptación manga oficial de Astrea Record registrada (2026-10-29)

- Se registra **DMR-045-SRC-058**: [página oficial SQUARE ENIX / Big Gangan](https://magazine.jp.square-enix.com/biggangan/introduction/danmachi_astrea/) y [ficha BookLive de Big Gangan 2026 Vol.06](https://booklive.jp/product/index/title_id/387660/vol_no/119). La serialización se anuncia desde el 2026-05-25; BookLive anuncia la adaptación como nueva serie y muestra opciones de lectura.
- No se obtuvo una página de manga legible. El navegador interactivo devolvió `insufficient_credits` antes de iniciar la navegación; la muestra no se pudo inspeccionar y no se afirma que el lector haya fallado.
- La fuente queda en `CONT-MANGA`, `metadata_checked_only`, con `claims_supported: []` y `events_supported: []`. La lista oficial inicial de personajes no demuestra ausencia de Alfia, Zald, Meteria, Erebus o Rudra en otros capítulos. No transferir detalles de manga a `CONT-AR` o `CONT-MAIN-LN`.
- **PR integrada:** [#201](https://github.com/jonhararagi/wordwaifu/pull/201), squash SHA de `main`: [`ad20a70e4b15e48901e5898780f21841d0979968`](https://github.com/jonhararagi/wordwaifu/commit/ad20a70e4b15e48901e5898780f21841d0979968).
- **CI pre-merge sobre el head final `6af090defaa128fbb26dcb034aeb03a915aa3bc5`:** [Validate WordWaifu #40929087678](https://github.com/jonhararagi/wordwaifu/actions/runs/40929087678) y [DanMachi Lore and Retrieval Integrity #40929087528](https://github.com/jonhararagi/wordwaifu/actions/runs/40929087528), ambos `success`.
- **Corrección de CI registrada:** el intento inicial de Validate [#40928846364](https://github.com/jonhararagi/wordwaifu/actions/runs/40928846364) falló porque el validador rechazó cuatro enlaces Markdown con ángulos alrededor de la URL. Se cambiaron a enlaces Markdown normales y la nueva ejecución sobre el head final pasó; no se ocultó el primer resultado.
- **CI post-merge sobre el SHA exacto `ad20a70e4b15e48901e5898780f21841d0979968`:** [Validate WordWaifu #40929383860](https://github.com/jonhararagi/wordwaifu/actions/runs/40929383860) y [DanMachi Lore and Retrieval Integrity #40929383855](https://github.com/jonhararagi/wordwaifu/actions/runs/40929383855), ambos `success`.
- **Estado factual:** la ruta añade procedencia y separación de continuidad, no una escena. Los cinco cotejos narrativos primarios de DMR-045 siguen abiertos y Orario permanece pospuesto.

## DMR-045 — nueva ruta de muestra dBook para Astrea Record 3 (2026-10-29)

- Se encontró una ruta pública de distribuidor para la edición japonesa de Astrea Record 3: [dBook / NTT DOCOMO](https://dbook.docomo.ne.jp/item/b1b573a541fb926b318d941d5c6181ceb595f28a264a162b9eb0c6f0d3f66cc9/2000/). La ficha anuncia 試し読み y está asociada a SB Creative / GA Bunko.
- Al seguir la acción de muestra se abrió [el lanzador de la aplicación dBook](https://dbook.docomo.ne.jp/applaunch/view/?launch=app&pid=b1b573a541fb926b318d941d5c6181ceb595f28a264a162b9eb0c6f0d3f66cc9); la extracción devolvió cero líneas. No se obtuvo texto narrativo ni localizador, y no se puede concluir que el lector falle en la aplicación normal.
- Se añadió la entrada DMR-045-SRC-056, un enlace en el directorio de fuentes de la aplicación y una regresión de descubribilidad. **Integración verificada:** PR [#196](https://github.com/jonhararagi/wordwaifu/pull/196), SHA de `main` `7b2da61c4b3353cf9eb1998f70f6cd4b6cbf0d91`. La ruta queda `metadata_checked_only`, sin claims ni eventos.

- **CI pre-merge sobre el head `19777ba299a968777e8e77b5e87c612038fa4caa`:** [Validate WordWaifu #40897980797](https://github.com/jonhararagi/wordwaifu/actions/runs/40897980797) terminó en `success`; [DanMachi Lore and Retrieval Integrity #40897980663](https://github.com/jonhararagi/wordwaifu/actions/runs/40897980663) terminó en `success` tras el segundo intento. El primer intento del workflow de lore agotó el timeout del smoke test al cargar retratos remotos; el reintento aprobó el smoke de navegador y el catálogo/enlaces.
- **CI post-merge sobre el SHA exacto `7b2da61c4b3353cf9eb1998f70f6cd4b6cbf0d91`:** [DanMachi Lore and Retrieval Integrity #40898517371](https://github.com/jonhararagi/wordwaifu/actions/runs/40898517371) terminó en `success`; [Validate WordWaifu #40898517407](https://github.com/jonhararagi/wordwaifu/actions/runs/40898517407) terminó en `success` tras el segundo intento. En el primer intento de Validate, el smoke de navegador excedió 10 s al esperar retratos oficiales de referencia en `danmachi.com`; el segundo intento pasó el smoke y la comprobación de estructura. El dato queda registrado como inestabilidad de carga externa, no como fallo del cambio dBook.
- La ruta es una alternativa de acceso licenciada, no corroboración narrativa independiente. Alfia, Zald, Meteria, Erebus y Rudra permanecen `HOLD_FOR_PRIMARY_SOURCE`; Orario sigue pospuesto.

## DMR-045 — revalidación del lector oficial SBCr para Astrea Record 3 (SRC-041, 2026-10-29)

- La [ficha oficial del producto](https://ebook.sbcr.jp/product/81561019JAAA03MBJE3X) ofrece 立ち読み（無料） y enlaza al [lector BinB](https://ebook.sbcr.jp/sbv.17050.sbcr/main.html?cid=81561019JAAA03MBJE3X&lginbtn=false).
- La extracción de la página del lector muestra el aviso «お使いのブラウザは新ビューワに対応しておりません。»; la ruta directa devolvió siete líneas y ninguna página narrativa. La sesión interactiva no pudo iniciar por `insufficient_credits`.
- Se actualizó la entrada existente SRC-041 en el registro de fuentes, directorio de fuentes de la aplicación, informe DMR-045, índice maestro, cola y pruebas. No se creó un SRC duplicado ni se añadieron claims/eventos.
- El aviso no prueba indisponibilidad general; no se confirmó el comportamiento en un navegador compatible. DMR-045 sigue `IN_PROGRESS`, Alfia/Zald/Meteria/Erebus/Rudra siguen `HOLD_FOR_PRIMARY_SOURCE` y Orario permanece pospuesto.

## DMR-058 — capacidades secundarias de Daphne y Cassandra (integrado y validado en main)

- Se reutilizan `CHAR-DAPHNE-LAUROS` y `CHAR-CASSANDRA-ILION`; los detalles funcionales quedan bajo `CONT-SECONDARY`, sin sobrescribir sus perfiles de adaptación.
- Informe: [DANMACHI-RESEARCH-058](../lore/danmachi/research/inbox/DANMACHI-RESEARCH-058-daphne-cassandra-capabilities.md). Fuentes DMR-058-SRC-001–005 en el [registro maestro](../lore/danmachi/sources/00-registro-fuentes.md) y en el directorio de fuentes de la aplicación.
- Alcance: notas del archivo interactivo, cinco entradas en `src/lore-corpus.js` y pruebas de recuperación/aislamiento; los costes y el efecto de Five Dimension Troia no informados siguen abiertos.
- **PR integrada:** [#194](https://github.com/jonhararagi/wordwaifu/pull/194), squash SHA `190b4313a21569aa056548f8a40f9022b900b028`; main fue consultado y apunta a ese SHA.
- **CI pre-merge sobre el head exacto** `ef14f8b914fb424cf816f0d6a27f258fbe230843`: [Validate WordWaifu #40867615144](https://github.com/jonhararagi/wordwaifu/actions/runs/40867615144) y [DanMachi Lore and Retrieval Integrity #40867615207](https://github.com/jonhararagi/wordwaifu/actions/runs/40867615207), ambos `success`.
- **CI post-merge sobre el SHA exacto de main** `190b4313a21569aa056548f8a40f9022b900b028`: [Validate WordWaifu #40867850127](https://github.com/jonhararagi/wordwaifu/actions/runs/40867850127) y [DanMachi Lore and Retrieval Integrity #40867850048](https://github.com/jonhararagi/wordwaifu/actions/runs/40867850048), ambos `success`.
- DMR-045 sigue `IN_PROGRESS`, con Alfia, Zald, Meteria, Erebus y Rudra en `HOLD_FOR_PRIMARY_SOURCE`. Orario continúa pospuesto.

## DMR-045 — ruta adicional de Google Play Books, volumen 20 (2026-10-29)

- Se localizó la ficha de [Google Play Books — volumen 20](https://play.google.com/store/books/details/Fujino_Omori_Is_It_Wrong_to_Pick_Up_Girls_i?id=XWHEEQAAQBAJ) desde la ficha editorial de [Yen Press](https://yenpress.com/titles/9798855437867-is-it-wrong-to-try-to-pick-up-girls-in-a-dungeon-vol-20-light-novel). La página del distribuidor anuncia “Free sample”, identifica a Yen Press LLC como vendedor y muestra 232 páginas para la edición inglesa (ISBN digital 9798855437867).
- Se registra como DMR-045-SRC-055 y como ruta del directorio de fuentes de la aplicación. Comparte el identificador de producto XWHEEQAAQBAJ con Google Books (SRC-018); no es evidencia independiente y no añade claims.
- La herramienta de navegador devolvió `insufficient_credits` antes de iniciar la navegación; la URL directa del lector tampoco fue accesible mediante la extracción web. El estado de la muestra es desconocido, no “fallido”. DMR-045 continúa IN_PROGRESS y mantiene abiertos los cinco cotejos primarios.
- **Integración:** [PR #192 — registro de la ruta de muestra](https://github.com/jonhararagi/wordwaifu/pull/192), fusionada por squash; SHA exacto de `main`: `6eb2db0161848de320c75abf7cc0241565a1644f` ([commit](https://github.com/jonhararagi/wordwaifu/commit/6eb2db0161848de320c75abf7cc0241565a1644f)). Head probado antes de fusionar: `fbd4c6fef0d65066ec53b39ea22b9d4bc5377dfa`.
- **CI pre-merge sobre el head `fbd4c6fef0d65066ec53b39ea22b9d4bc5377dfa`:** [Validate WordWaifu #40862116846](https://github.com/jonhararagi/wordwaifu/actions/runs/40862116846) y [DanMachi Lore and Retrieval Integrity #40862116852](https://github.com/jonhararagi/wordwaifu/actions/runs/40862116852), ambos `success`.
- **CI post-merge sobre el SHA exacto `6eb2db0161848de320c75abf7cc0241565a1644f`:** [Validate WordWaifu #40862327265](https://github.com/jonhararagi/wordwaifu/actions/runs/40862327265) y [DanMachi Lore and Retrieval Integrity #40862327234](https://github.com/jonhararagi/wordwaifu/actions/runs/40862327234), ambos `success`.
- Alcance: ruta metadata-only y regresiones; no se añadieron claims, relaciones, eventos, aliases ni cambios de personalidad. DMR-045 continúa IN_PROGRESS; Alfia, Zald, Meteria, Erebus y Rudra siguen en `HOLD_FOR_PRIMARY_SOURCE`.

## Integración y CI post-merge — PR #190 (2026-10-29)

- **PR:** [#190 — docs(danmachi): record DMR-045 primary-source gate](https://github.com/jonhararagi/wordwaifu/pull/190), fusionada por squash.
- **SHA exacto de main verificado:** 779980733c3f27ee5d9cb2f7adc2705d9ccadfaf ([commit](https://github.com/jonhararagi/wordwaifu/commit/779980733c3f27ee5d9cb2f7adc2705d9ccadfaf)).
- **Checks pre-merge** sobre el head a05567f854d8db7704403d9badaadda15b84316b: [Catalog, retrieval and browser smoke #40857051535](https://github.com/jonhararagi/wordwaifu/actions/runs/40857051535) y [validate #40857051732](https://github.com/jonhararagi/wordwaifu/actions/runs/40857051732), ambos success.
- **Checks post-merge sobre el SHA exacto anterior:** [Catalog, retrieval and browser smoke #40857268146](https://github.com/jonhararagi/wordwaifu/actions/runs/40857268146) y [validate #40857268310](https://github.com/jonhararagi/wordwaifu/actions/runs/40857268310), ambos success.
- La actualización documental deja DMR-045 en IN_PROGRESS y no cambia ningún claim, relación, habilidad, personalidad ni continuidad de canon.

## Corte de evidencia primaria y verificación de main — 2026-10-29

- **SHA de main comprobado al iniciar esta tanda:** 8348d5610382f45f5fe30073d70f53886d259ea4 ([commit](https://github.com/jonhararagi/wordwaifu/commit/8348d5610382f45f5fe30073d70f53886d259ea4)).
- **Validaciones sobre ese SHA exacto:** [Catalog, retrieval and browser smoke #40842395446](https://github.com/jonhararagi/wordwaifu/actions/runs/40842395446) y [validate #40842395510](https://github.com/jonhararagi/wordwaifu/actions/runs/40842395510), ambos success.
- **Estado de DMR-045:** sigue IN_PROGRESS; Alfia, Zald, Meteria, Erebus y Rudra continúan en HOLD_FOR_PRIMARY_SOURCE. La consulta pública de esta tanda no produjo un pasaje narrativo primario legible.
- **Fuentes revisadas sin duplicar IDs:** Yen Press Astrea Record 3 solo aporta una sinopsis general; Google Books volumen 20 corresponde a DMR-045-SRC-018 y sigue mostrando índice/términos sin narración legible; la ficha de GA Bunko del volumen 20 ya está registrada bajo DMR-044 y devolvió HTTP 503.
- **Límite:** no se añadieron claims, eventos, relaciones, aliases ni cambios de personalidad. No se promueve evidencia de CONT-SECONDARY, CONT-GAME o CONT-AU al canon principal.
- **Siguiente acción:** retomar solo con una página narrativa licenciada legible o una fuente oficial nueva que resuelva uno de los cinco cotejos; Orario permanece pospuesto.

## Estado operativo y verificación — 2026-10-29


### DMR-057 — capacidades secundarias de Aisha, Anya y Chloe (integrada, 2026-10-29)

- **Integración:** [PR #188](https://github.com/jonhararagi/wordwaifu/pull/188), squash SHA de `main` `6c1ffc257e2df45d3a32facb39fe684b71994f60`.
- **Head probado antes del merge:** `2eb0912ab7445d543eae6a2c790b4d9483ee63fe`.
- **CI pre-merge:** [Validate WordWaifu #40840588616](https://github.com/jonhararagi/wordwaifu/actions/runs/40840588616) y [DanMachi Lore and Retrieval Integrity #40840588548](https://github.com/jonhararagi/wordwaifu/actions/runs/40840588548), ambos `success`.
- **CI post-merge verificado** sobre el SHA exacto de integración `6c1ffc257e2df45d3a32facb39fe684b71994f60`: [DanMachi Lore and Retrieval Integrity #40841046104](https://github.com/jonhararagi/wordwaifu/actions/runs/40841046104) y [Validate WordWaifu #40841046125](https://github.com/jonhararagi/wordwaifu/actions/runs/40841046125), ambos `success`.
- Se registraron magia, habilidades de desarrollo, equipo y límites reportados para los tres personajes con `CONT-SECONDARY`; no se reescribieron personalidades ni se inventaron costes o skills ausentes.
- La página española de Anya informa una condición adicional de cancelación de Remiste Felis al perder el conocimiento; la página inglesa consultada no muestra ese detalle. Se conserva como diferencia secundaria, sin resolverla por intuición.
- Registro: [DANMACHI-RESEARCH-057](../lore/danmachi/research/inbox/DANMACHI-RESEARCH-057-aisha-anya-chloe-capabilities.md); fuentes DMR-057-SRC-001–005; [bitácora](../lore/danmachi/CHARACTER_UPDATE_LEDGER.md).
- DMR-045 sigue IN_PROGRESS; los cinco cotejos primarios no se cierran por esta tanda.


## Estado operativo y verificación — 2026-10-28

### DMR-056 — cohorte secundaria para comprobar recuperación de lore (integrada)

- Alcance: capacidades de Liliruca Arde, Mikoto Yamato y Haruhime; ficha nueva de Nina Tulle; seis rutas comunitarias registradas.
- Los datos `CONT-SECONDARY` quedan separados de los perfiles de adaptación. Nina conserva el conflicto de sus fuentes: el texto la llama pasante sin falna, mientras la tabla la marca activa.
- Alcance integrado vía [PR #186](https://github.com/jonhararagi/wordwaifu/pull/186); merge SHA `a51f3a8a92ceb74e12be0d9dad1e4c5ad4a7a470`.
- **CI de la PR:** [Validate WordWaifu #40773212555](https://github.com/jonhararagi/wordwaifu/actions/runs/40773212555) y [DanMachi Lore and Retrieval Integrity #40773212768](https://github.com/jonhararagi/wordwaifu/actions/runs/40773212768) terminaron en success para el head `4d299431611382a96ea0881bca1c0c722eb12e73` antes de integrar.
- **Post-merge:** la integración de `main` está confirmada, pero el conector de GitHub de esta sesión no devolvió ejecuciones pull-request para el merge SHA; por tanto, no se etiqueta el CI de push/post-merge como validado aquí.
- DMR-045 permanece abierto y en espera de evidencia primaria nueva.


### DMR-045 — nueva ruta de muestra japonesa localizada en Sony Reader Store (2026-10-28)
- Se abrió la ficha pública de [Sony Reader Store — Astrea Record, volumen 3](https://ebookstore.sony.jp/title/01237250/id/BT000123725000300301/), edición japonesa de GA Bunko / SB Creative.
- La página presenta el bloque de verificación de edad y explica que la portada, la muestra y la compra requieren confirmarla. No se avanzó a través del control ni se abrió texto narrativo; por tanto, esta ruta queda metadata_checked_only y no demuestra si el visor funciona tras la verificación.
- Registro DMR-045-SRC-054, CONT-AR, claims_supported vacío y events_supported vacío. No se añadieron hechos, relaciones ni localizadores.
- DMR-045 sigue IN_PROGRESS para Alfia, Zald, Meteria, Erebus y Rudra. DMR-055 y la interfaz de Tsubaki/Welf siguen como trabajos separados.

### DMR-045 — rutas candidatas de muestra revisadas el 2026-10-28
- **Google Books / Yen Press, Astrea Record vol. 3 en inglés:** se probaron las rutas seleccionadas PT10 y PT11; la extracción mostró solo la carcasa de página («Pages») y el índice devolvió error de caché. La ficha y los términos comunes son metadatos, no prueba narrativa. Registro DMR-045-SRC-053, metadata_checked_only, CONT-AR, claims_supported vacío.
- **BookLive, edición recopilatoria japonesa de Astrea Record 1–3:** la página comercial muestra un control de muestra, pero no fue posible iniciar la inspección del visor porque la herramienta de navegador devolvió insufficient_credits antes de navegar. El contenido del lector sigue sin comprobarse; no es un fallo del lector.
- No se agregaron claims, relaciones, sucesos ni localizadores narrativos. DMR-045 sigue IN_PROGRESS con los cinco cotejos primarios abiertos. DMR-055 y la ampliación de UI de Tsubaki/Welf permanecen separadas.


<!-- DANMACHI-METRICS:BEGIN -->
- **Corpus DanMachi:** 242 registros activos; 28 IDs reservados; 109 documentos de apoyo.
- **Grafo de conocimiento:** 263 relaciones explícitas; 263/263 con ambos extremos activos y distintos; IDs de relación únicos.
- **Roster de adaptación:** 63 identidades; 63/63 tienen registro, ruta Markdown e expediente UI con el mismo ID.
- **Expedientes de interfaz:** 93 perfiles; 93/93 enlazados a catálogo y Markdown por ID.
- **Tipos en el catálogo:** 84 personajes; 5 grupos; 14 deidades con registro de personaje.
- **Marcadas `complete`:** 0/84 registros `character`; esto no define el universo de personajes esperados ni autoriza un porcentaje global de canon.
<!-- DANMACHI-METRICS:END -->

## DMR-045 — lectores BinB enlazados desde la tienda oficial de SB Creative (2026-10-25)

- Se localizaron cuatro rutas de muestra 立ち読み desde el [catálogo oficial de la serie DanMachi de SB Creative](https://ebook.sbcr.jp/landing/p/danmachi): Astrea Record 1–3 y DanMachi vol. 14, registradas como DMR-045-SRC-039–042.
- La vista pública de las rutas directas solo expuso un iframe y Now loading...; no se recuperaron páginas narrativas ni localizadores. Esto no demuestra indisponibilidad general del lector.
- Los cuatro registros permanecen metadata_checked_only, con claims_supported vacío; tres pertenecen a CONT-AR y vol. 14 a CONT-MAIN-LN. No se añadieron hechos canónicos, aliases ni relaciones.
- PR #146 quedó integrada por SHA dc7fa0fe44d259e710902d5d741fe11a85b3e3a0. Los workflows de PR pasaron sobre head 634cd5cc403dbdb0360a2b72ecd77997206ff2bc (Validate: https://github.com/jonhararagi/wordwaifu/actions/runs/40261732974; Lore/Integrity: https://github.com/jonhararagi/wordwaifu/actions/runs/40261733009); el conector de consulta utilizado solo devuelve ejecuciones disparadas por pull_request y no permite confirmar el estado de los workflows push post-merge; no se afirma su resultado.
- DMR-045 sigue IN_PROGRESS; los cinco localizadores primarios continúan pendientes.

## DMR-045 — integración de las rutas oficiales SB Creative (PR #147)

- Las cuatro rutas BinB oficiales DMR-045-SRC-039–042 quedaron integradas en main mediante [PR #147](https://github.com/jonhararagi/wordwaifu/pull/147), merge SHA 58025c70e8fd26d6ce3c2043c8fd5d51e5cc0d98.
- Los workflows previos a la fusión pasaron sobre el head 32891061a411b66ac9a66000d8f5b0c4f2b0ba56: [Validate WordWaifu](https://github.com/jonhararagi/wordwaifu/actions/runs/40262391617) y [DanMachi Lore and Retrieval Integrity](https://github.com/jonhararagi/wordwaifu/actions/runs/40262391545).
- La consulta de workflows disponible solo devuelve ejecuciones disparadas por pull_request y no permite verificar aquí los workflows push post-merge del SHA de fusión; no se afirma que esos checks hayan pasado o fallado.
- DMR-045 permanece IN_PROGRESS. La incorporación de rutas no cierra ninguno de los cinco localizadores primarios.


## DMR-045 — reintento de vista previa autorizada de DanMachi vol. 20 (2026-10-25)

- La ficha pública licenciada de [Google Books vol. 20](https://books.google.com/books?id=XWHEEQAAQBAJ) se comprobó también desde su lector normal ([vista previa pública](https://www.google.com/books/edition/Is_It_Wrong_to_Try_to_Pick_Up_Girls_in_a/XWHEEQAAQBAJ?hl=en&newbks=1&gbpv=1&pg=PT29)). El lector anuncia `Preview · 28 pages` y muestra `1 of 4`, pero las páginas consultadas devuelven `Something went wrong / Page didn't load`; no se obtiene texto narrativo legible.
- Se actualizó el registro existente `DMR-045-SRC-018` y el directorio de fuentes para reflejar el fallo de renderizado. Sigue `metadata_checked_only`, con `claims_supported: []`; no se crean claims, relaciones ni localizadores a partir de la interfaz o del índice.
- **Integrado en `main`:** [PR #135](https://github.com/jonhararagi/wordwaifu/pull/135), merge SHA `e63fbdaa8b8b757b67446aecbe0ffec1382e4562`.
- **CI de la PR (head SHA `a10ba6062e6e6d5d11722625b132c569b66ccfb2`):** [Validate WordWaifu #3374](https://github.com/jonhararagi/wordwaifu/actions/runs/40232076731) y [DanMachi Lore and Retrieval Integrity #1766](https://github.com/jonhararagi/wordwaifu/actions/runs/40232076712), ambos `success`.
- **CI post-merge sobre el SHA exacto `e63fbdaa8b8b757b67446aecbe0ffec1382e4562`:** [Validate WordWaifu #3377](https://github.com/jonhararagi/wordwaifu/actions/runs/40232214960) y [DanMachi Lore and Retrieval Integrity #1767](https://github.com/jonhararagi/wordwaifu/actions/runs/40232214899), ambos `success`.
- **Pendiente:** localizar en una edición licenciada legible los pasajes individuales de Alfia, Zald, Meteria y Erebus y la evidencia narrativa que permita evaluar la atribución personal a Rudra. Los cinco huecos primarios de DMR-045 siguen abiertos.

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

## DMR-045 — nueva ruta licenciada de muestra para el volumen 14 (2026-10-25)

- Se comprobó la ficha japonesa de BOOK☆WALKER para [DanMachi, volumen 14](https://bookwalker.jp/deb74ef953-7194-47cb-8abb-7453a4b2e353/) y el enlace normal de muestra gratuita [試し読み](https://bookwalker.jp/deb74ef953-7194-47cb-8abb-7453a4b2e353/?sample=1).
- El producto identifica la edición japonesa de SB Creative / GA Bunko, pero el lector de muestra redirige a viewer-trial y devuelve “Could not download. Please check your network connection.” No se recuperó una página narrativa ni un localizador nuevo.
- La ruta queda registrada como DMR-045-SRC-028, metadata_checked_only, con claims_supported vacío, únicamente en CONT-MAIN-LN. No respalda el capítulo 13 ni el epílogo del volumen 14, no establece responsabilidad individual de Rudra y no prueba indisponibilidad global.
- **Estado:** investigación de la ruta realizada; DMR-045 sigue abierto. Siguiente tarea: cotejar el texto de una edición accesible sin convertir metadatos, fallos de visor o resúmenes comunitarios en evidencia primaria.
- **Integrado en main:** [PR #133](https://github.com/jonhararagi/wordwaifu/pull/133), merge SHA `1c53f9f7ca57a6aeebaedbf57234fb8b6e581f6f` (head de PR: `440e1e7a0891ee3ac9c979967cddec06f1bb64a2`).
- **CI de la PR, head SHA:** [Validate WordWaifu #3366](https://github.com/jonhararagi/wordwaifu/actions/runs/40231380471) y [DanMachi Lore and Retrieval Integrity #1759](https://github.com/jonhararagi/wordwaifu/actions/runs/40231380497), ambos `success`; incluyen las pruebas de directorio y de navegador.
- **CI post-merge sobre el SHA exacto de main:** [Validate WordWaifu #3367](https://github.com/jonhararagi/wordwaifu/actions/runs/40231489642) y [DanMachi Lore and Retrieval Integrity #1760](https://github.com/jonhararagi/wordwaifu/actions/runs/40231489669), ambos `success`.


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
- **DMR-045 — resultado del barrido secundario público (registro histórico):** se añadieron el índice secundario de la aparición retrospectiva de Alfia en volumen 20, la pista del árbol sagrado (sin cotejo primario), la caracterización de Erebus bajo `CONT-GAME` y el recuerdo de Meteria bajo `CONT-AU`. La prioridad de Orario anotada entonces fue revisada el 2026-10-25: primero sigue el cotejo primario de DMR-045; después Orario. No se modifican las métricas generadas.


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


## DMR-045 — acceso a la muestra licenciada japonesa (2026-10-25)

- Se agregaron la ficha japonesa de *Astrea Record 3* y su enlace a muestra gratuita de BOOK☆WALKER al directorio de fuentes y a las fichas interactivas de Alfia, Zald y Erebus.
- Se creó una agrupación visible independiente para distribuidores licenciados en el navegador de fuentes; la prueba de corpus verifica que la categoría no quede oculta por los grupos anteriores.
- La prueba automatizada siguió el enlace de muestra, pero el visor mostró «Could not download. Please check your network connection.»; no se recuperó texto narrativo ni páginas verificables.
- **Alcance:** la ruta se etiqueta como distribuidor licenciado, no como editorial ni evidencia narrativa cotejada. No se crearon claims ni aristas; los localizadores primarios siguen pendientes.
- Referencia: [ficha BOOK☆WALKER](https://bookwalker.jp/dead6afbb1-d488-4cf3-a255-669537f7f049/) · [muestra gratuita](https://bookwalker.jp/dead6afbb1-d488-4cf3-a255-669537f7f049/?sample=1).
- PR integrada: [#117](https://github.com/jonhararagi/wordwaifu/pull/117), merge commit [`1302145`](https://github.com/jonhararagi/wordwaifu/commit/1302145b9b222130069c9aa7393a115cbfd7284f).
- CI de la PR, SHA `a9ac60cbc29f7e41574ee541ba0eb5d5a432e133`: [Validate WordWaifu](https://github.com/jonhararagi/wordwaifu/actions/runs/40205349066) y [DanMachi Lore and Retrieval Integrity](https://github.com/jonhararagi/wordwaifu/actions/runs/40205349060), ambas exitosas.
- CI post-merge, exacto SHA `1302145b9b222130069c9aa7393a115cbfd7284f`: [Validate WordWaifu](https://github.com/jonhararagi/wordwaifu/actions/runs/40205481864) y [DanMachi Lore and Retrieval Integrity](https://github.com/jonhararagi/wordwaifu/actions/runs/40205481796), ambas exitosas.


## DMR-045 — precisión incremental de las fichas de Alfia y Zald (2026-10-25)

- **Integrado y validado:** PR [#118](https://github.com/jonhararagi/wordwaifu/pull/118), SHA exacto de `main` `d81766fc7003294c15d0a2b776ce2d59170da86c`.
- La ficha interactiva de Alfia expone el alcance (>100 metros) y la campana gris plateada reportados por las wikis para Genos Angelus, además del deterioro de salud atribuido a su uso contra Leviathan. Todo sigue explícitamente como evidencia secundaria.
- El expediente interactivo y la ficha Markdown de Zald explicitan el límite de Deus Ambrosia que describe la wiki: el ejemplo nivel 7 / poder equivalente a nivel 10 no se trata como regla universal verificada. El coste continuo del veneno de Behemoth permanece visible.
- Se agregaron regresiones a `tests/test_lore_corpus.cjs` para evitar pérdida de estos detalles y de sus límites de evidencia.
- **Integridad del corpus:** no se modifican IDs, claims, relaciones, aliases ni métricas. DMR-045 mantiene pendientes los localizadores narrativos primarios; esta corrección mejora la recuperación de referencias, no cierra esa investigación.
- **CI de la PR, head SHA `e870d5ef364639238000b7f991a4b855deafe136`:** [DanMachi Lore and Retrieval Integrity](https://github.com/jonhararagi/wordwaifu/actions/runs/40210105940) y [Validate WordWaifu](https://github.com/jonhararagi/wordwaifu/actions/runs/40210106029), ambas exitosas.
- **CI post-merge sobre `main`, SHA exacto `d81766fc7003294c15d0a2b776ce2d59170da86c`:** [DanMachi Lore and Retrieval Integrity](https://github.com/jonhararagi/wordwaifu/actions/runs/40210257785) y [Validate WordWaifu](https://github.com/jonhararagi/wordwaifu/actions/runs/40210257780), ambas exitosas.
- **Estado final:** integrado y validado; no se modificaron métricas ni estructura de relaciones.


## DMR-045 — acceso desde la UI a las habilidades secundarias (2026-10-25)

- Se detectó que el detalle de `src/character-dossiers.js` no bastaba para garantizar que los datos aparecieran en el diálogo “Más información”: ese diálogo usa entradas por continuidad del registro `EXTENDED` en `src/character-archive.js`.
- Se añadieron notas interactivas específicas de `CONT-AR` para Alfia y Zald. La ficha de Alfia muestra el reporte comunitario sobre Genos Angelus (campana gris plateada y alcance superior a 100 metros) con advertencia de evidencia secundaria; la de Zald muestra el ejemplo reportado nivel 7/nivel 10 sin presentarlo como fórmula universal.
- Se añadieron pruebas de API y de recorrido Playwright para verificar que buscar Alfia/Zald, abrir la ficha y pulsar “Más información” muestra las notas y enlaza las wikis comunitarias.
- **Integrado y validado:** PR [#120](https://github.com/jonhararagi/wordwaifu/pull/120), SHA exacto de `main` `742b0220590e45082972015684a0ecc6cbf14f04`.
- **CI de PR, head SHA `308ee68ed81673757ae4c99c1d8af95bae573cfe`:** [Validate WordWaifu](https://github.com/jonhararagi/wordwaifu/actions/runs/40211032458) y [DanMachi Lore and Retrieval Integrity](https://github.com/jonhararagi/wordwaifu/actions/runs/40211032504), ambas exitosas.
- **CI post-merge en `main`, SHA exacto `742b0220590e45082972015684a0ecc6cbf14f04`:** [Validate WordWaifu](https://github.com/jonhararagi/wordwaifu/actions/runs/40211145581) y [DanMachi Lore and Retrieval Integrity](https://github.com/jonhararagi/wordwaifu/actions/runs/40211145583), ambas exitosas.
- **Límite:** las entradas solo se muestran bajo `CONT-AR`; pistas de vol. 20 quedan en `CONT-MAIN-LN`, `CONT-GAME` y `CONT-AU` no se fusionan y los localizadores primarios de DMR-045 siguen pendientes.


## DMR-045 — notas interactivas para Meteria, Erebus y Rudra; vistas autorizadas (2026-10-25)

- **Integrado:** PR [#122](https://github.com/jonhararagi/wordwaifu/pull/122), SHA exacto de main: ba6363bce1b651a74ebfa9b782fb7e38f8804eef.
- La interfaz “Más información” incluye ahora una nota de Meteria bajo CONT-MAIN-LN y la nota autoral separada bajo CONT-AU; Erebus se documenta en CONT-GAME sin trasladar su ideología a la novelización; Rudra tiene una nota en CONT-MAIN-LN que mantiene sin demostrar su responsabilidad personal por acciones atribuidas a Rudra Familia.
- Las referencias distinguen la wiki comunitaria, entrevista, publicación autoral y metadatos de editorial. No se añade ningún claim, alias, ID ni arista canónica.
- Las rutas públicas autorizadas [Google Books vol. 20](https://books.google.com/books?id=XWHEEQAAQBAJ) y [BinB Astrea Record 3](https://r.binb.jp/epm/e1_270413_31102022103801/) quedaron registradas como DMR-045-SRC-018/019. No se recuperó texto narrativo legible. Los errores de consulta, incluido HTTP 429, no se interpretan como evidencia de ausencia de personajes.
- **CI de la PR, head SHA e03fdb17c5c6fc292fb9fffd321483eb1abf2b07:** [Validate WordWaifu](https://github.com/jonhararagi/wordwaifu/actions/runs/40222698644) y [DanMachi Lore and Retrieval Integrity](https://github.com/jonhararagi/wordwaifu/actions/runs/40222698535), ambas exitosas, incluida la prueba de navegador.
- **CI post-merge sobre main, SHA exacto ba6363bce1b651a74ebfa9b782fb7e38f8804eef:** [Validate WordWaifu](https://github.com/jonhararagi/wordwaifu/actions/runs/40222827902) y [DanMachi Lore and Retrieval Integrity](https://github.com/jonhararagi/wordwaifu/actions/runs/40222827809), ambas success. La segunda completó browser smoke, la validación de catálogo/enlaces y la subida de capturas.
- **Estado de la investigación:** las notas y las pruebas de UI están integradas; DMR-045 sigue abierto por localizadores de texto primario para los cinco expedientes.
- **Próxima prioridad aceptada:** continuar el cotejo primario de DMR-045 antes de retomar la expansión del escenario de Orario.


## DMR-045 — tres rutas oficiales de muestra SB Creative (2026-10-25)

- Se consultaron los enlaces públicos del lector BinB de SBCr eBook Store asociados a Astrea Record 1, 2 y 3: 81561017JAAA01MBJE3X, 81561018JAAA02MBJE3X y 81561019JAAA03MBJE3X.
- Las tres extracciones devolvieron “Now loading...” y controles de interfaz (bibliografía, índice, búsqueda, avance automático, lectura por voz, ajustes), sin páginas narrativas legibles. Se registran como DMR-045-SRC-020/021/022, metadata_checked_only, con claims_supported vacío y continuidad CONT-AR.
- Se añadieron las rutas al directorio consultable y regresiones para impedir que se traten como capítulos, páginas o pruebas de apariciones individuales.
- **Estado:** el intento de acceso está registrado; no completa el cotejo primario. La prioridad permanece DMR-045 y siguen abiertos los cinco expedientes.
- **PR #126 integrada:** [merge SHA 580fe272cb07cb10ad33e5648350840b63d41604](https://github.com/jonhararagi/wordwaifu/commit/580fe272cb07cb10ad33e5648350840b63d41604). CI post-merge de ese SHA: [Validate](https://github.com/jonhararagi/wordwaifu/actions/runs/40225402605) y [Lore/Retrieval](https://github.com/jonhararagi/wordwaifu/actions/runs/40225402638), ambas exitosas, incluida prueba de navegador y catálogo/enlaces.


## DMR-045 — integración de rutas de muestra SB Creative, PR #127 (2026-10-25)

- **Integrado:** [PR #127](https://github.com/jonhararagi/wordwaifu/pull/127), SHA exacto de main: 1a1bc2be356463edde3464e530015674dd8bc767.
- Se añadieron al directorio de fuentes tres rutas normales de muestra BinB/SBCr para Astrea Record 1, 2 y 3, con registros DMR-045-SRC-020/021/022. Las extracciones devolvieron “Now loading...” y controles de interfaz, sin páginas narrativas legibles.
- Las tres entradas están marcadas metadata_checked_only, sin claims, eventos ni localizadores. No se infiere presencia o ausencia de personajes a partir de la carga fallida.
- **CI de la PR, head SHA d39161c1622317f973b07cc66096019be2f9c84b:** [Validate WordWaifu](https://github.com/jonhararagi/wordwaifu/actions/runs/40225927385) y [DanMachi Lore and Retrieval Integrity](https://github.com/jonhararagi/wordwaifu/actions/runs/40225927413), ambas success.
- **CI post-merge sobre el SHA exacto 1a1bc2be356463edde3464e530015674dd8bc767:** [Validate WordWaifu](https://github.com/jonhararagi/wordwaifu/actions/runs/40226051519) y [DanMachi Lore and Retrieval Integrity](https://github.com/jonhararagi/wordwaifu/actions/runs/40226051508), ambas success.
- **Límite:** la tarea de encontrar rutas oficiales de consulta quedó registrada y validada técnicamente; el cotejo primario de DMR-045 permanece abierto para los cinco expedientes.


## DMR-045 — Google Play Books: muestras inglesas de Astrea Record (2026-10-25)

- Se añadieron al directorio de fuentes de la aplicación las tres fichas de Google Play Books: volumen 1 ([ficha](https://play.google.com/store/books/details/Fujino_Omori_Astrea_Record_Vol_1_Is_It_Wrong_to_Tr?id=M_3xEAAAQBAJ)), volumen 2 ([ficha](https://play.google.com/store/books/details/Fujino_Omori_Astrea_Record_Vol_2_Is_It_Wrong_to_Tr?id=cLwFEQAAQBAJ)) y volumen 3 ([ficha](https://play.google.com/store/books/details/Fujino_Omori_Astrea_Record_Vol_3_Is_It_Wrong_to_Tr?id=Z0gVEQAAQBAJ)).
- Los volúmenes 1 y 2 anuncian “Free sample”; la extracción pública solo mostró sinopsis y metadatos. La ficha del volumen 3 mostró una restricción regional en una vista, mientras que otra ficha indexada anunciaba una muestra. No se asume disponibilidad global uniforme.
- Se registran DMR-045-SRC-023–025 en el directorio de fuentes y en la auditoría/registro central. Los tres son metadata_checked_only, sin claims ni localizadores; no se ha leído una página narrativa y no cambia el estado de verificación de los personajes.
- Se actualizaron las pruebas de directorio de fuentes y de integridad de DMR-045 para exigir que los tres enlaces permanezcan accesibles con el límite de evidencia explícito.
- **Integrado y validado:** PR [#129](https://github.com/jonhararagi/wordwaifu/pull/129), merge SHA f450e98426c38c9c54b0c9befc6a1e5388ea99ac.
- **CI de la PR, cabeza 77cfd88def764f42ed60dc5a8360512074c848d2:** [Validate WordWaifu](https://github.com/jonhararagi/wordwaifu/actions/runs/40228737355) y [DanMachi Lore and Retrieval Integrity](https://github.com/jonhararagi/wordwaifu/actions/runs/40228737354), ambos success.
- **CI post-merge sobre el SHA exacto:** [Validate WordWaifu](https://github.com/jonhararagi/wordwaifu/actions/runs/40228879793) y [DanMachi Lore and Retrieval Integrity](https://github.com/jonhararagi/wordwaifu/actions/runs/40228879958), ambos success; incluyen browser smoke y validación del catálogo/enlaces.
- **Próxima prioridad:** conseguir una página narrativa realmente legible mediante acceso autorizado normal; mantener abiertos los cinco localizadores primarios de DMR-045.


## Corrección de prioridad en WORK_QUEUE — DMR-045 antes que Orario (2026-10-25)

- Se corrigió una contradicción de estructura: el encabezado de prioridad apuntaba a DMR-045, pero su cuerpo contenía las tareas geográficas de Orario.
- Ahora la cola presenta el trabajo primario aún pendiente de Alfia, Zald, Meteria, Erebus y Rudra, junto con el límite de evidencia de las rutas DMR-045-SRC-018 a DMR-045-SRC-028. El bloque extenso de Orario queda expresamente como etapa posterior.
- Se conserva la decisión del 2026-10-24 como historial, pero se marca como sustituida en el orden de ejecución por la directriz vigente del 2026-10-25.
- Las pruebas de integridad exigen ambos bloques y comprueban que SRC-026/027/028 estén visibles en la cola sin convertir los errores de acceso en hallazgos narrativos.
- **Integrado y validado:** PR [#140](https://github.com/jonhararagi/wordwaifu/pull/140), merge SHA exacto `e236c07cc475feae31c0fa2ab0697b26851c41d0`.
- **CI de la PR, head SHA `ae52715b0657f68bf65ecb7a3e158fad8bc1e6fd`:** [Validate WordWaifu](https://github.com/jonhararagi/wordwaifu/actions/runs/40232710265) y [DanMachi Lore and Retrieval Integrity](https://github.com/jonhararagi/wordwaifu/actions/runs/40232710323), ambos success.
- **CI post-merge sobre el SHA exacto:** [Validate WordWaifu](https://github.com/jonhararagi/wordwaifu/actions/runs/40232839057) y [DanMachi Lore and Retrieval Integrity](https://github.com/jonhararagi/wordwaifu/actions/runs/40232839130), ambos success; el segundo ejecutó browser smoke y validación de catálogo/enlaces.
- **Límite factual:** todavía no se dispone de un pasaje narrativo primario legible para cerrar DMR-045; el orden de trabajo se corrigió, no la evidencia del canon.


## DMR-045 — compendios de muestra BOOK☆WALKER Astrea Record 1–3 (2026-10-25)

- Se añadieron al directorio consultable tres rutas de compendios gratuitos del distribuidor licenciado BOOK☆WALKER: octubre 2022 (Astrea Record 1), noviembre 2022 (volumen 2) y diciembre 2022 (volumen 3).
- El compendio de octubre incluye explícitamente Astrea Record 1 y advierte que su muestra puede diferir parcialmente de la edición final. El enlace de lectura redirige al visor público, que no se pudo abrir en la extracción; un reintento de la URL del visor terminó en timeout. Los enlaces normales de muestra de noviembre y diciembre también terminaron en timeout.
- Se registran DMR-045-SRC-030, DMR-045-SRC-031 y DMR-045-SRC-032 en la auditoría y el registro central de fuentes. Son metadata_checked_only y no respaldan afirmaciones, relaciones, habilidades ni localizadores narrativos.
- Las pruebas de directorio exigen que las rutas aparezcan exactamente una vez, con las URLs correctas y los límites de evidencia; la prueba de DMR-045 comprueba que las tres entradas constan en auditoría, registro y cola.
- **Integrado y validado:** PR [#143](https://github.com/jonhararagi/wordwaifu/pull/143), merge SHA exacto `5cf3eb069bca47d2ce488a7ffb1128c1c830c7e4`.
- **CI de la PR, head SHA `9b032700559afcfdc3fd4ba1fd45f931829bf0fb`:** [Validate WordWaifu](https://github.com/jonhararagi/wordwaifu/actions/runs/40260108783) y [DanMachi Lore and Retrieval Integrity](https://github.com/jonhararagi/wordwaifu/actions/runs/40260108791), ambos success.
- **CI post-merge sobre el SHA exacto:** [Validate WordWaifu](https://github.com/jonhararagi/wordwaifu/actions/runs/40260414219) y [DanMachi Lore and Retrieval Integrity](https://github.com/jonhararagi/wordwaifu/actions/runs/40260414283), ambos success; el último ejecutó browser smoke y validación de catálogo/enlaces.
- **Próxima prioridad:** volver a intentar los lectores normales solo si la ruta pública carga sin eludir restricciones y, de aparecer texto legible, cotejar un localizador específico. DMR-045 permanece abierto.

## DMR-045 — fuentes secundarias Miraheze y ruta licenciada NOOK (2026-10-25)

- **SRC-033–037:** se añadieron cinco páginas comunitarias en inglés de Miraheze como referencias secundarias para Meteria, Alfia, Zald, Erebus y Rudra Familia. No son fuentes oficiales, no se presume independencia editorial respecto de otras wikis y no se elevan sus resúmenes a localizadores primarios.
- **SRC-038:** la ficha de Barnes & Noble para DanMachi vol. 14 muestra “Read sample” hacia el lector NOOK. La apertura de esa ruta devolvió “Cache miss” en esta consulta; no se obtuvieron páginas narrativas y el fallo no demuestra indisponibilidad global.
- **Integridad factual:** SRC-030–032 continúan reservados a las muestras recopilatorias BOOK☆WALKER de Astrea Record 1–3; los IDs SRC-033–037 corresponden a Miraheze y SRC-038 a NOOK. Todos los registros distinguen la fuente y su alcance de continuidad. No se crean claims, aliases, relaciones ni hechos canónicos nuevos.
- **Pendiente:** DMR-045 sigue IN_PROGRESS. Los cinco localizadores primarios permanecen abiertos; las fichas secundarias y los errores de visor no validan escenas ni responsabilidad personal de Rudra. Orario no vuelve a ser la prioridad activa.
- **Integración y CI (corrección registrada el 2026-10-26):** SRC-033–038 quedaron integrados en `main` mediante [PR #146](https://github.com/jonhararagi/wordwaifu/pull/146), merge SHA exacto `dc7fa0fe44d259e710902d5d741fe11a85b3e3a0`. CI de la PR (head `634cd5cc403dbdb0360a2b72ecd77997206ff2bc`): [Validate WordWaifu](https://github.com/jonhararagi/wordwaifu/actions/runs/40261732974) y [DanMachi Lore and Retrieval Integrity](https://github.com/jonhararagi/wordwaifu/actions/runs/40261733009), ambos `success`. CI post-merge sobre el SHA exacto: [Validate WordWaifu](https://github.com/jonhararagi/wordwaifu/actions/runs/40261844162) y [DanMachi Lore and Retrieval Integrity](https://github.com/jonhararagi/wordwaifu/actions/runs/40261844139), ambos `success`.

## DMR-045 — corrección de procedencia de los emparejamientos de Astrea Record 3 (2026-10-26)

- La revisión directa de la ficha editorial oficial de [SB Creative, Astrea Record 3](https://www.sbcr.jp/product/4815617554/) muestra una sinopsis general de la batalla final; no nombra los emparejamientos Zald–Ottar ni Alfia–Astrea Familia.
- Esos detalles aparecen en una reseña comunitaria en [BookLive](https://booklive.jp/review/list/title_id/1237250/vol_no/003), entrada “Posted by ブクログ” fechada el 11-02-2023. Se registra como DMR-045-SRC-043 (COMMUNITY_REVIEW, secondary_checked).
- DMR-045-CLM-006 ahora depende de SRC-043, no de SRC-005. SRC-005 conserva el alcance de sinopsis editorial general y ya no declara respaldar ese claim. Las fichas de Alfia y Zald quedaron corregidas y el test de integridad protege la atribución.
- **Estado de canon:** el detalle sigue siendo secundario; no se inventó capítulo/página ni se marca como cotejado en el texto de la novela. DMR-045 continúa IN_PROGRESS y los cinco localizadores primarios permanecen abiertos.

## DMR-045 — integración de la corrección de procedencia (PR #151)

- La corrección de DMR-045-CLM-006 quedó integrada en [PR #151](https://github.com/jonhararagi/wordwaifu/pull/151), merge SHA `fc3080189815805ae2e0853b177bae33d0cec516`.
- Los dos workflows de la PR pasaron sobre el head `4771a81e371f4c2997c4c2fb9414e809d1645ee9`: [Validate WordWaifu](https://github.com/jonhararagi/wordwaifu/actions/runs/40265979989) y [DanMachi Lore and Retrieval Integrity](https://github.com/jonhararagi/wordwaifu/actions/runs/40265980006). El segundo completó las pruebas de catálogo/grafo, retrieval y browser smoke.
- El validador del catálogo confirmó que las dos relaciones de Alfia y Zald coinciden con secondary_checked y community_review_summary; el registro central de DMR-045 tiene 40 IDs únicos, incluidos SRC-043.
- **Límite post-merge:** el conector disponible solo expone runs disparados por pull_request y no permitió verificar los workflows push del SHA de fusión. No se afirma su resultado.
- **Estado del lore:** DMR-045 sigue IN_PROGRESS; la reseña BookLive permanece como pista secundaria, y los cinco localizadores primarios continúan pendientes.

## DMR-045 — ruta BinB oficial adicional para DanMachi vol. 20 (2026-10-26)

- Se comprobó en el [catálogo oficial de SBCr eBook Store](https://ebook.sbcr.jp/landing/p/danmachi) que DanMachi vol. 20 tiene una entrada 立ち読み y se siguió el enlace normal al lector [BinB del volumen 20](https://ebook.sbcr.jp/sbv.17050.sbcr/main.html?cid=81562869JAAA20MBJE3X&lginbtn=false).
- **Resultado visible:** iframe, “Now loading...” y menú del lector; no se recuperó narración ni localizador de capítulo/página.
- **Registro:** `DMR-045-SRC-044`, añadido al directorio de fuentes de la aplicación y al registro central; queda `metadata_checked_only` en `CONT-MAIN-LN`, con claims/events vacíos.
- **Pruebas añadidas:** el test del directorio valida URL exacta, unicidad del ID, continuidad y prohibición de tratar la pantalla de carga como evidencia narrativa.
- **Límite factual:** no se identifica a la maga del prólogo, al testigo o a la criatura, y no se valida el uso de Afterglow en los capítulos 2–3. Los cinco localizadores primarios de DMR-045 siguen pendientes; Orario continúa aplazado.

## Integración y CI — ruta oficial de muestra de DanMachi vol. 20 (PR #153)

- **Integrado:** PR [#153](https://github.com/jonhararagi/wordwaifu/pull/153), merge SHA exacto de `main`: `1894e3acf3ced6c472b9e8979dcb53874bf40226`.
- **Head validado de la PR:** `857ac384f03fc62c624f74297736befc431e19d9`.
- **CI de PR:** [Validate WordWaifu](https://github.com/jonhararagi/wordwaifu/actions/runs/40284254967) y [DanMachi Lore and Retrieval Integrity](https://github.com/jonhararagi/wordwaifu/actions/runs/40284254924), ambos `success`.
- **CI post-merge sobre el SHA exacto de `main`:** [Validate WordWaifu](https://github.com/jonhararagi/wordwaifu/actions/runs/40284421948) y [DanMachi Lore and Retrieval Integrity](https://github.com/jonhararagi/wordwaifu/actions/runs/40284422026), ambos `success`.
- **Límite factual:** `DMR-045-SRC-044` sigue `metadata_checked_only`; el lector no expuso texto narrativo. La integración técnica no cierra los cinco localizadores primarios de DMR-045.


## DMR-045 — sinopsis comunitaria por capítulos del volumen 20

- **Fuente registrada:** DMR-045-SRC-045, [DanMachi Wiki · DanMachi Light Novel Volume 20/Synopsis](https://danmachi.fandom.com/wiki/DanMachi_Light_Novel_Volume_20/Synopsis), clasificada como fuente secundaria comunitaria.
- **Claims añadidos:** DMR-045-CLM-019 (pista sobre Alfia y Leon en el resumen del capítulo 2) y DMR-045-CLM-020 (pista sobre Zald, Leon y Udaeus en el resumen del capítulo 3). Ambos permanecen secondary_checked, en CONT-MAIN-LN.
- **UI:** las fichas de Alfia y Zald muestran el contexto resumido en sus expedientes y en las notas ampliadas de continuidad CONT-MAIN-LN, enlazando URL y tipo de fuente.
- **Corrección de procedencia adicional:** CI detectó que SRC-036 (Miraheze · Erebus) enumeraba CLM-018, aunque ese claim cita la ficha inglesa de Fandom DMR-029-SRC-006. SRC-036 ya no declara ese apoyo incorrecto.
- **PR #155:** [research(danmachi): add volume 20 community chapter leads](https://github.com/jonhararagi/wordwaifu/pull/155), integrada en `main` por SHA `21c55f905e28c419df0616e25247d8960533fde8`.
- **CI de la PR**, sobre head `bd707757659be7ee976d5b41bf88007b63482928`: [Validate WordWaifu #40348659487](https://github.com/jonhararagi/wordwaifu/actions/runs/40348659487) y [DanMachi Lore and Retrieval Integrity #40348659494](https://github.com/jonhararagi/wordwaifu/actions/runs/40348659494), ambos `success`.
- **CI post-merge sobre el SHA exacto de `main`:** [DanMachi Lore and Retrieval Integrity #40348901258](https://github.com/jonhararagi/wordwaifu/actions/runs/40348901258) y [Validate WordWaifu #40348901098](https://github.com/jonhararagi/wordwaifu/actions/runs/40348901098) terminaron en `success`; el estado anterior de instalación de Chromium fue una observación intermedia.
- **Límite:** el contenido se recuperó del índice de búsqueda; el acceso directo a la wiki quedó bloqueado. No se verificaron páginas de la novela ni se crearon aristas nuevas. Los cinco localizadores primarios de DMR-045 siguen pendientes.


## DMR-045 — pista secundaria individual de Rudra

- **Fuente registrada:** DMR-045-SRC-046, [DanMachi Wiki · resumen del volumen 14](https://danmachi.fandom.com/wiki/DanMachi_Light_Novel_Volume_14/Synopsis), clasificada como fuente secundaria comunitaria. La apertura directa devolvió HTTP 402; se trabajó con el contenido recuperado por el índice de búsqueda.
- **Claim añadido:** DMR-045-CLM-021, según el cual el resumen comunitario sitúa a Rudra apareciendo ante Ryuu después de la destrucción de Rudra Familia, haciendo un comentario sobre invitarla a su Familia y siendo capturado posteriormente por el Gremio. Estado `secondary_checked`, continuidad `CONT-MAIN-LN`.
- **Interfaz y fichas:** se amplió el perfil Markdown de Rudra, su resumen de personaje y la nota interactiva de `CONT-MAIN-LN`; se añadieron pruebas de regresión para la URL, el estado secundario y la barrera de atribución.
- **Integración:** PR [#157](https://github.com/jonhararagi/wordwaifu/pull/157) fusionada en `main`, SHA `364876830d0b16eccc81969ea928180c29ba9f35`. CI de PR sobre head `7efaaf78083989f737a0e85ce1f15dcff77b543e`: [Validate #40354723328](https://github.com/jonhararagi/wordwaifu/actions/runs/40354723328) y [Lore/Integrity #40354723341](https://github.com/jonhararagi/wordwaifu/actions/runs/40354723341), ambos `success`.
- **CI post-merge:** [Lore/Integrity #40354993811](https://github.com/jonhararagi/wordwaifu/actions/runs/40354993811) y [Validate #40354994039](https://github.com/jonhararagi/wordwaifu/actions/runs/40354994039) finalizaron en `success` sobre el SHA exacto de `main` `364876830d0b16eccc81969ea928180c29ba9f35` (confirmado el 2026-10-26).
- **Límite factual:** el dato no prueba que Rudra conociera, ordenara, diseñara o autorizara la trampa previa. No se crea arista canónica nueva ni se cierra el localizador primario de la escena.

## DMR-045 — reintento de lectura autorizada BOOK☆WALKER (2026-10-26)

- Se revisaron las páginas públicas de [DanMachi volumen 14](https://bookwalker.jp/deb74ef953-7194-47cb-8abb-7453a4b2e353/) y [Astrea Record 3](https://bookwalker.jp/dead6afbb1-d488-4cf3-a255-669537f7f049/), que muestran la opción de prueba `試し読み`.
- Al abrir la opción de DanMachi 14, la consulta web redirigió al visor de prueba pero no pudo recuperar su contenido narrativo. No se leyó un pasaje primario ni se obtuvo localizador. No se creó claim, relación ni fuente duplicada: las rutas estaban registradas de antes.
- La verificación primaria de Rudra y de los cuatro expedientes restantes continúa pendiente.


## Integración y validación documental — PR #158 (2026-10-26)
- **Integrado:** [PR #158](https://github.com/jonhararagi/wordwaifu/pull/158), squash SHA `b01eeb269622d5d8c243fdf05c2fb056a7008221`, verificado como cabeza actual de `main`.
- **CI pre-merge sobre el head** `671bdacba38e7e0b8d8e3322d2bcf2f1a0b3caec`: [Validate WordWaifu #40358799343](https://github.com/jonhararagi/wordwaifu/actions/runs/40358799343) y [DanMachi Lore and Retrieval Integrity #40358799938](https://github.com/jonhararagi/wordwaifu/actions/runs/40358799938), ambos `success`.
- **CI post-merge sobre el SHA exacto de `main`:** [Validate WordWaifu #40359137390](https://github.com/jonhararagi/wordwaifu/actions/runs/40359137390) y [DanMachi Lore and Retrieval Integrity #40359137265](https://github.com/jonhararagi/wordwaifu/actions/runs/40359137265), ambos `success`.
- **Límite factual:** la pista de Rudra sigue siendo secundaria, y la lectura autorizada de BOOK☆WALKER no entregó páginas narrativas. DMR-045 continúa `IN_PROGRESS`; no se cierra ninguno de los cinco localizadores primarios.


## DMR-045 — rutas BookLive de prueba autorizada (2026-10-26)
- **Registradas:** DMR-045-SRC-047, [BookLive · DanMachi vol. 14](https://booklive.jp/product/index/title_id/201522/vol_no/014); y DMR-045-SRC-048, [BookLive · Astrea Record 3](https://booklive.jp/product/index/title_id/1237250/vol_no/003). Las dos fichas muestran controles de prueba en navegador y app.
- **Verificación real:** se comprobó la metadata pública y la oferta de muestra, pero no se abrió el lector ni se examinó ninguna página narrativa. Ambas entradas son `metadata_checked_only` y tienen `claims_supported: []`.
- **Interfaz:** las rutas están disponibles en las fichas interactivas de Rudra (CONT-MAIN-LN) y de Alfia, Zald y Erebus (CONT-AR por separado). No se transfiere información de la versión de juego a la novelización.
- **Pendiente:** DMR-045 sigue `IN_PROGRESS`. Los cinco localizadores narrativos primarios continúan abiertos; no se crearon claims, relaciones o aliases a partir de los metadatos.


## Integración de BookLive metadata-only — PR #160 (2026-10-26)
- **Integrado:** [PR #160](https://github.com/jonhararagi/wordwaifu/pull/160), squash SHA real de `main`: `968ad23141ffdc2db032383228445fddc753b755`.
- **CI de PR sobre head** `6d89ea9a7846c64132b08f58b628ff70b075a302`: [Validate WordWaifu #40381631794](https://github.com/jonhararagi/wordwaifu/actions/runs/40381631794) y [DanMachi Lore and Retrieval Integrity #40381631812](https://github.com/jonhararagi/wordwaifu/actions/runs/40381631812), ambos `success`.
- **CI post-merge sobre el SHA exacto `968ad23141ffdc2db032383228445fddc753b755`:** [DanMachi Lore and Retrieval Integrity #40381983723](https://github.com/jonhararagi/wordwaifu/actions/runs/40381983723) y [Validate WordWaifu #40381983810](https://github.com/jonhararagi/wordwaifu/actions/runs/40381983810) finalizaron en `success`.
- **Rutas añadidas:** SRC-047 BookLive DanMachi vol. 14 (`CONT-MAIN-LN`) y SRC-048 BookLive Astrea Record 3 (`CONT-AR`). Las páginas comerciales muestran prueba en navegador/app, pero no se leyó el interior de las muestras. Ambas son `metadata_checked_only` con `claims_supported: []`.
- **Pendiente de investigación:** DMR-045 sigue `IN_PROGRESS`; los cinco localizadores primarios continúan abiertos. No se crean claims, relaciones o alias a partir de los botones de muestra.

## DMR-045 — pista secundaria sobre el cierre de Astrea Record 3 (2026-10-26)
- **Hallazgo:** el fragmento visible/indexado de la reseña comunitaria de BookLive DMR-045-SRC-043 parece resumir una ofrenda floral de Bell y Hermes ante tumbas de Erebus, Zald y Alfia.
- **Implementación:** DMR-045-CLM-022 se registra en `CONT-AR` como `secondary_checked`, desde la misma fuente SRC-043. La pista aparece en las notas interactivas separadas de Alfia, Zald y Erebus.
- **Límite:** no es lectura de la novela; no genera evento, aristas o relaciones, no confirma el destino individual y no importa la ideología de Erebus desde CONT-GAME.
- **Integración:** PR [#162](https://github.com/jonhararagi/wordwaifu/pull/162), merge SHA `09a771bd752a8a903984bf5f84510a36565f9206`. **Integración y CI de PR #162:** integrada por squash en `main`, merge SHA `09a771bd752a8a903984bf5f84510a36565f9206`. CI de la PR sobre head `3bbd6e89e6a1c73a338acf7b36574e6642392712`: [Validate WordWaifu #40394117882](https://github.com/jonhararagi/wordwaifu/actions/runs/40394117882) y [DanMachi Lore and Retrieval Integrity #40394118254](https://github.com/jonhararagi/wordwaifu/actions/runs/40394118254), ambos `success`. CI post-merge sobre el SHA exacto de `main`: [DanMachi Lore and Retrieval Integrity #40400987218](https://github.com/jonhararagi/wordwaifu/actions/runs/40400987218) y [Validate WordWaifu #40400987257](https://github.com/jonhararagi/wordwaifu/actions/runs/40400987257), ambos `success`.
- **Pendiente:** cotejar el cierre en una edición licenciada y registrar capítulo/página solo si las páginas narrativas son realmente visibles.

## DMR-045 — Kobo, vista previa anunciada para el volumen 20 (2026-10-26)

- Se encontró una ficha licenciada de Kobo cuyo resultado indexado muestra “Preview Now” y “Save Preview” para DanMachi vol. 20, edición inglesa (ISBN 9798855437867).
- La apertura directa desde la herramienta pública devolvió “Cache miss”; no se obtuvo narración ni localizador reproducible.
- La ruta se añade como DMR-045-SRC-049, metadata_checked_only, CONT-MAIN-LN, sin claims, eventos, relaciones o cambios de métricas. Las fichas de investigación de Alfia y Zald la enlazan como acceso pendiente de inspección manual.
- **Integración:** [PR #164](https://github.com/jonhararagi/wordwaifu/pull/164) fusionada por squash; `main` verificado en SHA `345db0189308b2e34a31bbf8f3930e75f0b4fc2f`.
- **CI de PR:** [Validate WordWaifu #40432114887](https://github.com/jonhararagi/wordwaifu/actions/runs/40432114887) y [DanMachi Lore and Retrieval Integrity #40432114895](https://github.com/jonhararagi/wordwaifu/actions/runs/40432114895) finalizaron `success` sobre el head probado `dc60cf91fba87a85419bc029d24dd7b8446420f6`.
- **Verificación post-merge:** no confirmada mediante los estados disponibles; no se registra como verde sin evidencia del SHA exacto. DMR-045 sigue abierto y los cinco cotejos primarios permanecen pendientes.

## DMR-045 — BOOK☆WALKER, muestra japonesa del volumen 20 (2026-10-27)

- La ficha comercial pública de [BOOK☆WALKER, volumen 20](https://bookwalker.jp/de2996c502-7cb0-42b4-821a-b63df271d442/) ofrece la ruta [試し読み](https://bookwalker.jp/de2996c502-7cb0-42b4-821a-b63df271d442/?sample=1).
- La apertura normal redirige al visor https://viewer-trial.bookwalker.jp/trial-page/03/view?cid=2996c502-7cb0-42b4-821a-b63df271d442, pero la herramienta devuelve «Internal Error» al seguir la redirección y señala «not accessible via this tool»; no se confirmó una respuesta HTTP del visor ni se obtuvo texto narrativo o localizador reproducible.
- Se añade como DMR-045-SRC-050 con `metadata_checked_only`, `CONT-MAIN-LN`, `claims_supported: []` y `events_supported: []`; el enlace se muestra en las notas de Alfia/Zald solamente dentro de la novela principal.
- **Integración:** [PR #166](https://github.com/jonhararagi/wordwaifu/pull/166) fusionada por squash; el SHA confirmado de `main` es `2951fa55396564cb878e00ab5c7d2b297966cd64` (la comparación con `main` devuelve `identical`).
- **CI de PR:** [Validate WordWaifu #40450101232](https://github.com/jonhararagi/wordwaifu/actions/runs/40450101232) y [DanMachi Lore and Retrieval Integrity #40450101166](https://github.com/jonhararagi/wordwaifu/actions/runs/40450101166) finalizaron `success` sobre el head de PR `80c5468f78812312898dbe3f6de709856f63d0d2`.
- **CI post-merge sobre el SHA exacto de `main`:** [Validate WordWaifu #40459532846](https://github.com/jonhararagi/wordwaifu/actions/runs/40459532846) y [DanMachi Lore and Retrieval Integrity #40459532519](https://github.com/jonhararagi/wordwaifu/actions/runs/40459532519) finalizaron `success` para `2951fa55396564cb878e00ab5c7d2b297966cd64`.
- No se modificaron claims, relaciones, sucesos, aliases o métricas. DMR-045 sigue `IN_PROGRESS`; los cinco cotejos primarios permanecen pendientes.


## DMR-045 — Diferencias comunitarias de Astrea Record 3 (2026-10-27)

- Se consultó [DanMachi Wiki · Astrea Record Novela Ligera Volumen 3/Diferencias](https://danmachi.fandom.com/es/wiki/Astrea_Record_Novela_Ligera_Volumen_3/Diferencias), que resume cambios atribuidos a la novelización frente a Memoria Freese relacionados con Alfia, Zald y Erebus.
- DMR-045-SRC-051 la registra como `secondary_checked`, alcance `CONT-AR`. La ficha no es narración primaria ni ofrece localizadores reproducibles.
- La página enlaza detalles útiles para buscar `Lugio`, `Gif Blessing`, `Genos Angelus`, `Deus Ambrosia` y la escena EXTRA, pero se conservan como pistas secundarias.
- La ruta normal de muestra ofrecida por la ficha editorial de [GA Bunko](https://ga.sbcr.jp/product/9784815617554/) redirige al lector BinB; la consulta pública mostró interfaz y créditos, no páginas narrativas legibles.
- **Integración:** PR [#168](https://github.com/jonhararagi/wordwaifu/pull/168) fusionada por squash; SHA de `main` `99a667e60f3651b98759a1993a26258ba37dd645`.
- **CI de PR:** [Validate WordWaifu #40510817854](https://github.com/jonhararagi/wordwaifu/actions/runs/40510817854) y [DanMachi Lore and Retrieval Integrity #40510817870](https://github.com/jonhararagi/wordwaifu/actions/runs/40510817870) finalizaron `success` sobre `16338edec86670b1692084bea446657bc657eb71`.
- **CI post-merge sobre el SHA exacto de main:** [Validate WordWaifu #40511064727](https://github.com/jonhararagi/wordwaifu/actions/runs/40511064727) y [DanMachi Lore and Retrieval Integrity #40511064313](https://github.com/jonhararagi/wordwaifu/actions/runs/40511064313) finalizaron `success` sobre `99a667e60f3651b98759a1993a26258ba37dd645`.
- Esta ampliación no añade claims, sucesos, relaciones, alias o métricas y no cierra ningún cotejo primario. DMR-045 sigue `IN_PROGRESS` con Alfia, Zald, Meteria, Erebus y Rudra pendientes.


## Corrección de runner para pruebas de navegador (2026-10-27)

- La PR #168 encontró que Playwright 1.55 no instala Chromium en el runner Ubuntu 26.04 al usar `ubuntu-latest`; el log devolvió `Playwright does not support chromium on ubuntu26.04`.
- Los workflows `.github/workflows/validate.yml` y `.github/workflows/danmachi-lore-check.yml` se fijaron a `ubuntu-24.04` para mantener el runtime de navegador sobre un runner compatible con la dependencia fijada. La migración de `ubuntu-latest` está documentada por [GitHub](https://github.blog/changelog/2026-09-17-ubuntu-26-generally-available-and-latest-migration/).
- Se corrigió una aserción nueva que dependía de mayúsculas y otra que no coincidía exactamente con la redacción registrada. Ambos workflows de la PR #168 y ambos workflows post-merge sobre `99a667e60f3651b98759a1993a26258ba37dd645` finalizaron en `success`: [Validate WordWaifu #40510817854](https://github.com/jonhararagi/wordwaifu/actions/runs/40510817854), [DanMachi Lore and Retrieval Integrity #40510817870](https://github.com/jonhararagi/wordwaifu/actions/runs/40510817870), [Validate WordWaifu #40511064727](https://github.com/jonhararagi/wordwaifu/actions/runs/40511064727) y [DanMachi Lore and Retrieval Integrity #40511064313](https://github.com/jonhararagi/wordwaifu/actions/runs/40511064313).

## Bitácora de actualizaciones de personajes (2026-10-27)

- Se creó [CHARACTER_UPDATE_LEDGER.md](../lore/danmachi/CHARACTER_UPDATE_LEDGER.md) con resultados por personaje, URLs revisadas, datos encontrados, campos no reportados/conflictos y disparadores explícitos de reapertura. Su regla clave es no repetir la misma pasada a la misma fuente y no reescribir personalidades por estilo.
- Primera cohorte: Alise Lovell, Gojouno Kaguya, Lyra, Maryuu Reage, Neze Rankett, Noin Unic, Iska Bra, Asta Knox, Ryana Lietz y Celty Srowa. Se añadieron notas interactivas en `CONT-SECONDARY`, sin alterar los estados de novela/anime/juego ni crear claims o relaciones.
- La revisión secundaria reporta magias, skills y equipo para ciertos miembros. También marca datos no informados (nombres de magia, costes, niveles exactos) y contradicciones como Tekiheni/Sakibeni en Kaguya y fuego/rayo en Celty. Los rangos genéricos 3–4 no se transforman en niveles individuales.
- DMR-045 queda en pausa por personaje en `HOLD_FOR_PRIMARY_SOURCE`: reabrir solo ante una página licenciada legible, una fuente oficial nueva, un cambio material de fuente o una contradicción nueva.
- Se creó `tests/test_character_update_ledger.cjs` y se añadió a `.github/workflows/validate.yml` y `.github/workflows/danmachi-lore-check.yml`.
- **Integración:** [PR #170](https://github.com/jonhararagi/wordwaifu/pull/170), squash SHA `034eb037f98ce25076de7fc4217a62cb960172eb`.
- **CI de PR:** [Validate WordWaifu #40525522243](https://github.com/jonhararagi/wordwaifu/actions/runs/40525522243) y [DanMachi Lore and Retrieval Integrity #40525522040](https://github.com/jonhararagi/wordwaifu/actions/runs/40525522040) finalizaron `success` sobre `e0cb29570ad8cd0b7b704ca73fa95882765e66a0`.
- **CI post-merge sobre el SHA exacto de main:** [Validate WordWaifu #40525793577](https://github.com/jonhararagi/wordwaifu/actions/runs/40525793577) y [DanMachi Lore and Retrieval Integrity #40525794301](https://github.com/jonhararagi/wordwaifu/actions/runs/40525794301) finalizaron `success` sobre `034eb037f98ce25076de7fc4217a62cb960172eb`.

## DMR-052 · Freya Familia: capacidades secundarias (2026-10-27)

- Se investigaron las páginas comunitarias de Allen Fromel, Hedin Selland, Hogni Ragnar y Hermanos Gulliver, con una pasada limitada a niveles reportados, magia, skills, equipo y límites.
- La investigación dejó notas recuperables en CONT-SECONDARY y registró ocho identidades en CHARACTER_UPDATE_LEDGER.md; no reescribe personalidades ni crea claims, eventos o relaciones.
- Campos no informados que se cierran provisionalmente: costes numéricos, efecto recuperable de Rasu Dain, listas individuales completas de skills de Allen y magias/skills con nombre para cada hermano Gulliver.
- **Integración:** PR [#172](https://github.com/jonhararagi/wordwaifu/pull/172), squash SHA real de `main` `79505bd740d47560d4bc67166c807d14090a950d`.
- **CI de PR:** [Validate WordWaifu #40572608737](https://github.com/jonhararagi/wordwaifu/actions/runs/40572608737) y [DanMachi Lore and Retrieval Integrity #40572608435](https://github.com/jonhararagi/wordwaifu/actions/runs/40572608435) finalizaron `success` sobre el SHA de rama `1ece6f0117dadf2fb0b0a4988d23c13df34d0609`.
- **CI post-merge sobre el SHA exacto de `main` `79505bd740d47560d4bc67166c807d14090a950d`: [Validate WordWaifu #40590376454](https://github.com/jonhararagi/wordwaifu/actions/runs/40590376454) y [DanMachi Lore and Retrieval Integrity #40590376362](https://github.com/jonhararagi/wordwaifu/actions/runs/40590376362), ambos `success`.
- **Pendiente sin repetir fuentes:** DMR-045 sigue a la espera de texto primario licenciable y legible para Alfia, Zald, Meteria, Erebus y Rudra. No reabrir las mismas muestras que solo dieron pantallas de carga salvo que aparezca un cambio material.


## DMR-053 · Familia Loki: capacidades de combate (2026-10-27)

- Cohorte investigada: Bete Loga, Tiona Hiryute y Tione Hiryute.
- Campos capturados en CONT-SECONDARY: skills, magia, habilidades de desarrollo, equipo, snapshots de nivel y discrepancias de fuente.
- Bitácora: tres entradas únicas añadidas a CHARACTER_UPDATE_LEDGER.md; el test de regresión exige fuentes detectables, notas secundarias y campos de límite.
- **Integración:** PR [#174](https://github.com/jonhararagi/wordwaifu/pull/174), squash SHA real de `main` `28ae6f34859bc0a59beaf7a711bfa54504265ffd`.
- **CI de PR sobre `37f50a3f0608cb00b3c355e75c008031e70bbe70`:** [Validate WordWaifu #40602468962](https://github.com/jonhararagi/wordwaifu/actions/runs/40602468962) y [DanMachi Lore and Retrieval Integrity #40602469069](https://github.com/jonhararagi/wordwaifu/actions/runs/40602469069), ambos `success`.
- **CI post-merge sobre el SHA exacto de `main` `28ae6f34859bc0a59beaf7a711bfa54504265ffd`:** [Validate WordWaifu #40602644529](https://github.com/jonhararagi/wordwaifu/actions/runs/40602644529) y [DanMachi Lore and Retrieval Integrity #40602644563](https://github.com/jonhararagi/wordwaifu/actions/runs/40602644563), ambos `success`.
- **No se modificó:** personalidad, pasado de Kali Familia, relaciones, eventos o claims narrativos.

## DMR-045 · Cruce de continuidad ya registrada (2026-10-27)

- Se verificó el encadenamiento de la fuente autoral existente DMR-029-SRC-016 con las fichas editoriales ya existentes DMR-045-SRC-002 y DMR-045-SRC-005.
- La nota original es legible y corresponde a un escenario hipotético; la edición especial confirma que se publicó una versión revisada en un cuadernillo, descrita como algo que podría haber sucedido.
- **Estado de la investigación primaria:** sin cambios. Los cinco cotejos narrativos de Alfia, Zald, Meteria, Erebus y Rudra siguen abiertos. No se crean claims ni relaciones principales a partir de CONT-AU.
- **Regla de reintento:** el mismo relato y las muestras oficiales que no devolvieron narración no se vuelven a recorrer sin cambio material; buscar solo un localizador primario nuevo.


## DMR-045 · Ruta adicional de BookLive (2026-10-27)

- **Fuente nueva registrada:** DMR-045-SRC-052, ficha licenciada de BookLive para DanMachi vol. 20.
- **Integración:** [PR #177](https://github.com/jonhararagi/wordwaifu/pull/177), SHA de main a9ab02584f857a9c3fabbba59b40e8799e7aaead.
- **CI de PR sobre aa20c6ebe92311d9b46b3410c1305ca3ef6802c8:** [Validate WordWaifu #40613817357](https://github.com/jonhararagi/wordwaifu/actions/runs/40613817357) y [DanMachi Lore and Retrieval Integrity #40613817354](https://github.com/jonhararagi/wordwaifu/actions/runs/40613817354), ambos success.
- **CI post-merge sobre el SHA exacto de main a9ab02584f857a9c3fabbba59b40e8799e7aaead:** [Validate WordWaifu #40613983958](https://github.com/jonhararagi/wordwaifu/actions/runs/40613983958) y [DanMachi Lore and Retrieval Integrity #40613983944](https://github.com/jonhararagi/wordwaifu/actions/runs/40613983944), ambos success.
- **Verificado:** metadatos públicos y presencia de controles de muestra en navegador y aplicación.
- **No verificado:** ninguna página narrativa ni localizador; el lector no se abrió, por lo que su estado es desconocido.
- **Estado de la investigación primaria:** sin cambios. Los cinco cotejos de Alfia, Zald, Meteria, Erebus y Rudra siguen abiertos.
- **Regla de reintento:** si no se obtiene texto narrativo, mantener metadata_checked_only y no repetir BookWalker/Kobo/Google Books/BinB sin un cambio material.


## DMR-054 · Hermes Familia: capacidades de Asfi y Lulune (2026-10-28)
- **Estado actual de esta tanda:** integrada y validada en `main` mediante [PR #179](https://github.com/jonhararagi/wordwaifu/pull/179); SHA `cf1aef26f0f2f1d3b4ffe4513c0ff80f65764ef6`.
- **Integración:** [PR #179](https://github.com/jonhararagi/wordwaifu/pull/179), squash merge; SHA exacto de `main`: `cf1aef26f0f2f1d3b4ffe4513c0ff80f65764ef6`.
- **CI de PR sobre `809ad6ccd67e0e90c01d7c842438b1f296ae2ad5`:** [Validate WordWaifu #40727748042](https://github.com/jonhararagi/wordwaifu/actions/runs/40727748042) y [DanMachi Lore and Retrieval Integrity #40727747907](https://github.com/jonhararagi/wordwaifu/actions/runs/40727747907), ambos `success`.
- **CI post-merge sobre el SHA exacto de `main`:** [Validate WordWaifu #40728030060](https://github.com/jonhararagi/wordwaifu/actions/runs/40728030060) y [DanMachi Lore and Retrieval Integrity #40728030297](https://github.com/jonhararagi/wordwaifu/actions/runs/40728030297), ambos `success`.
- **Cohorte:** Asfi Al Andromeda y Lulune Louie. La pasada se limita a capacidades, magia, skills, equipo y campos no reportados; no modifica personalidades.
- **Fuentes:** DMR-054-SRC-001 y DMR-054-SRC-002, ambas wikis comunitarias bajo `CONT-SECONDARY`.
- **Resultado:** Asfi tiene un listado comunitario de nivel, magia, skills y objetos; Lulune tiene nivel reportado y capacidades generales, pero el contenido recuperado no enumera magia/skills con nombre. No se infiere inexistencia en canon a partir de la omisión.
- **Control técnico:** la prueba `tests/test_character_update_ledger.cjs` se amplía para exigir entradas únicas de bitácora, fuentes detectables y notas interactivas de ambos personajes.
- **Límites de prioridad:** los cinco cotejos primarios de DMR-045 continúan abiertos. No se repiten las mismas páginas ni se reformulan personalidades sin un disparador nuevo.

## DMR-055 — cohorte secundaria (2026-10-28)
- **Estado:** investigación documental integrada y validada en `main`; la ampliación de fichas interactivas continúa pendiente por separado.
- **Integración:** [PR #182](https://github.com/jonhararagi/wordwaifu/pull/182), squash merge; SHA exacto de `main`: `25b019598e74c5f9756aa541b8e9f5f1fe7c633e`.
- **Cohorte:** Tsubaki Collbrande y Welf Crozzo, elegidos para avanzar a personajes distintos después de DMR-052/053/054, sin repetir búsquedas ya cerradas.
- **Fuentes:** DanMachi Wiki EN para Tsubaki y DanMachi Wiki ES para Welf; ambas comunitarias/secundarias bajo CONT-SECONDARY.
- **CI de PR sobre `3712b698375d48458b7c7cc0012df56e344a2686`:** [Validate WordWaifu #40744157365](https://github.com/jonhararagi/wordwaifu/actions/runs/40744157365) y [DanMachi Lore and Retrieval Integrity #40744157330](https://github.com/jonhararagi/wordwaifu/actions/runs/40744157330), ambos `success`.
- **CI post-merge sobre el SHA exacto de `main` `25b019598e74c5f9756aa541b8e9f5f1fe7c633e`:** [Validate WordWaifu #40751474055](https://github.com/jonhararagi/wordwaifu/actions/runs/40751474055) y [DanMachi Lore and Retrieval Integrity #40751474058](https://github.com/jonhararagi/wordwaifu/actions/runs/40751474058), ambos `success`.
- **Resultado:** se documentan niveles, magia/skills/equipo sí presentados por las fuentes y los campos que no aparecen. No se reescriben personalidades ni se crean claims narrativos, relaciones, eventos o alias.
- **Límite:** DMR-045 conserva los cinco cotejos primarios pendientes; DMR-055 no los sustituye. La integración de notas secundarias a la interfaz requiere cambios y pruebas separados.

## Estado operativo y verificación — 2026-10-29 (actualización DMR-057)

### DMR-057 — Aisha, Anya y Chloe (integrada)
- Integrado mediante [PR #188](https://github.com/jonhararagi/wordwaifu/pull/188); SHA de `main`: `6c1ffc257e2df45d3a32facb39fe684b71994f60`.
- Head sometido a CI: `2eb0912ab7445d543eae6a2c790b4d9483ee63fe`.
- CI pre-merge: [Validate WordWaifu #40840588616](https://github.com/jonhararagi/wordwaifu/actions/runs/40840588616) y [DanMachi Lore and Retrieval Integrity #40840588548](https://github.com/jonhararagi/wordwaifu/actions/runs/40840588548), ambos `success`.
- El conector no devolvió runs del CI post-merge para el SHA exacto; no se declara esa fase verificada.
- Se agregaron fuentes y notas de capacidades secundarias para Aisha Belka, Anya Fromel y Chloe Rollo, con cinco páginas comunitarias. Los datos permanecen bajo `CONT-SECONDARY`; se mantiene el conflicto EN/ES de Remiste Felis y los campos no informados.
- No se reescribieron personalidades ni se infirieron costes, skills, relaciones o escenas primarias.
- DMR-045 permanece `IN_PROGRESS`: los cinco cotejos primarios continúan pendientes. No repetir las mismas rutas de muestra hasta que exista texto legible o un cambio material de fuente.



### DMR-057 — notas en archivo interactivo (integrada, validada)

- Integración: [PR #189](https://github.com/jonhararagi/wordwaifu/pull/189), merge SHA `f50f8ab4d63fe2d57a0f0fcc057babd489be0424`; main actual consultado tras merge.
- Alcance: `src/character-archive.js` expone datos secundarios para Aisha Belka, Anya Fromel y Chloe Rollo en `CONT-SECONDARY`; `tests/test_character_archive.cjs` comprueba recuperación del dato, fuente comunitaria y no filtración hacia `CONT-ANIME` ni `CONT-MAIN-LN`.
- CI de PR: [Validate #40841939859](https://github.com/jonhararagi/wordwaifu/actions/runs/40841939859) y [Lore/Integrity #40841939917](https://github.com/jonhararagi/wordwaifu/actions/runs/40841939917), ambos success. La prueba del archivo y el smoke test de navegador terminaron en success.
- **CI post-merge:** [Lore/Integrity #40842144964](https://github.com/jonhararagi/wordwaifu/actions/runs/40842144964) y [Validate #40842144977](https://github.com/jonhararagi/wordwaifu/actions/runs/40842144977), ambos `success` sobre el SHA exacto `f50f8ab4d63fe2d57a0f0fcc057babd489be0424`.
- Se preserva la discrepancia EN/ES de Remiste Felis y los campos no informados. No se modificaron personalidad, relaciones, roster ni claims de continuidad primaria.
- DMR-045 continúa IN_PROGRESS; los cinco cotejos primarios de Alfia, Zald, Meteria, Erebus y Rudra siguen pendientes.

## DMR-045 — entrevista autoral sobre posible material futuro de Meteria (2026-10-29)

- Fuente revisada: [LN News Online, entrevista a Fujino Omori publicada el 2024-12-15](https://www.ln-news.com/articles/121215). El autor menciona como posibilidad futura una entrega de Familia Chronicle sobre Zeus o quizá Meteria, sin fecha ni confirmación editorial definitiva.
- Se registra como DMR-045-SRC-057 y aparece en el directorio de fuentes de WordWaifu; el test verifica que sus límites no se pierdan en la interfaz.
- **No es contenido narrativo:** no confirma la maternidad de Bell, el parentesco Meteria–Alfia ni escenas o habilidades de los otros expedientes. No se crean claims/eventos/relaciones y no cambia la continuidad.
- DMR-045 continúa IN_PROGRESS; Alfia, Zald, Meteria, Erebus y Rudra permanecen HOLD_FOR_PRIMARY_SOURCE. Orario sigue pospuesto.
- **Integración:** [PR #199](https://github.com/jonhararagi/wordwaifu/pull/199), squash SHA de main 65c4eb53d50e16c8bcca48393e51e35ebd5bc360.
- **CI pre-merge sobre el head PR 38eee8702e5d98fadcc160c8a7604eab1a6a42ab:** [Validate WordWaifu #40911237809](https://github.com/jonhararagi/wordwaifu/actions/runs/40911237809) y [DanMachi Lore and Retrieval Integrity #40911237807](https://github.com/jonhararagi/wordwaifu/actions/runs/40911237807), ambos success.
- **CI post-merge sobre el SHA exacto de main 65c4eb53d50e16c8bcca48393e51e35ebd5bc360:** [Validate WordWaifu #40911471211](https://github.com/jonhararagi/wordwaifu/actions/runs/40911471211) y [DanMachi Lore and Retrieval Integrity #40911471327](https://github.com/jonhararagi/wordwaifu/actions/runs/40911471327), ambos success. El primer intento de Validate falló en el smoke de navegador al esperar 5 s por un retrato remoto (tests/browser_smoke.cjs:517); se repitió únicamente ese job y el segundo intento pasó.


## DMR-060 / DMR-061 — integración y cierre de consolidación (2026-10-30)

- **DMR-061 / Volumen 1:** PR [#215](https://github.com/jonhararagi/wordwaifu/pull/215) integrada por squash en `main`, SHA `8e6fcedaeed4e6c38e6f63a7c099cc8e27ad3441`; lectura secuencial documentada hasta PDF p. 177, próxima p. 178. CI pre-merge y post-merge de Validate WordWaifu y DanMachi Lore and Retrieval Integrity: `success` en los HEAD exactos.
- **DMR-060 / Volumen 2:** PR [#216](https://github.com/jonhararagi/wordwaifu/pull/216) integrada por squash en `main`, SHA `7de2acca6975d3700b7c5b5ca71c004211fb308e`; segmentación de cinco acontecimientos nuevos de la secuencia de Lili, actualización de eventos existentes y corrección del grafo temporal. CI pre-merge y post-merge: `success` en los SHA exactos.
- **Cronología/catálogo:** 42 eventos únicos; 36 referencias de ubicación; 215 registros activos; 30 IDs reservados; 263 relaciones. No hay IDs duplicados en los 42 eventos ni los 215 registros.
- **ID retirado:** `(x) EVT-DM-V02-SOMA-BETRAYAL-BELL-RESCUE-001` queda reservado como `superseded`; los eventos activos y las referencias temporales usan la captura de Gedo, la traición/cebo de Kanu y miembros de Soma, el rescate y la recontratación por separado.
- **PR heredada:** [#209](https://github.com/jonhararagi/wordwaifu/pull/209) cerrada como `(x) SUPERSEDED BY #216`. No se fusionó su snapshot divergente ni se borró su rama histórica; el trabajo único útil quedó portado y validado en #216.
- **CI post-merge #216 sobre `7de2acca6975d3700b7c5b5ca71c004211fb308e`:** [Validate WordWaifu run 41129998675](https://github.com/jonhararagi/wordwaifu/actions/runs/41129998675) y [DanMachi Lore and Retrieval Integrity run 41129998580](https://github.com/jonhararagi/wordwaifu/actions/runs/41129998580), ambos `success`.
- **Límites de investigación:** DMR-060-SRC-001 y DMR-061-SRC-001 son traducciones privadas no cotejadas con japonés. Las pasadas individuales de personajes, las inspecciones visuales integrales y los cotejos lingüísticos pendientes no se declaran completados.

## DMR-061 — continuación del corpus primario del Volumen 1 (2026-10-30)

- **Separación de carpetas:** los extractos del PDF del volumen 1 se conservan en `lore/danmachi/volumes/main/` y sus eventos `CONT-MAIN-LN`; no se incorporan al repositorio de hallazgos de wikis/búsqueda web. El objetivo es contrastar más tarde ambos corpus sin mezclar la autoridad de sus fuentes.
- **Lectura integrada:** PDF pp. 11–24. El rescate de Bell por Ais está localizado en el evento existente `EVT-DM-BELL-AIS-MINOTAUR-001`; la conversación y asesoramiento de Eina se localizan en `EVT-DM-EINA-ADVISOR-001`. Los registros están en DMR-061 y en el dossier del volumen.
- **Nuevos datos localizados:** reputación de Ais comunicada por Eina; advertencia y ánimo de Eina; canje de 1.200 Varisu; biografía temprana de Bell sobre su abuelo y su motivación para viajar a Orario; llegada a una iglesia deteriorada aún sin ID de lugar.
- **Inspección visual:** PDF p. 22 inspeccionada a página completa. La identidad de la figura queda sin confirmar por ausencia de rótulo; no se infiere por apariencia.
- **Continuación integrada:** PDF pp. 25–30 leídas de forma secuencial e inspeccionadas visualmente a página completa. El recuerdo del primer encuentro Bell–Hestia (p. 29) se enlazó al evento existente. La actualización de Estado iniciada en p. 30 continúa hasta pp. 31–36 y ahora tiene un evento separado con su snapshot y la Habilidad revelada desde la perspectiva de Hestia.
- **Rama del checkpoint pp. 11–24:** `research/danmachi-volume-01-primary-canon-2026-10-30`, integrada mediante PR #210; SHA de `main` `042e302ef8fc18495c41ca8c8a0a9c74a6714a7d`.
- **Integración y validación:** PR [#210](https://github.com/jonhararagi/wordwaifu/pull/210) fusionada por squash; `main` SHA `042e302ef8fc18495c41ca8c8a0a9c74a6714a7d`. CI pre y post-merge `success`, con sus runs enlazados en el historial de esta sección. PR [#211](https://github.com/jonhararagi/wordwaifu/pull/211) fusionada por squash; `main` verificado en SHA `fd201fc6f1825299630d2ef04d4436fa02f50d60`. CI pre-merge sobre HEAD `69ed2d6a69a1ed1fc1d280cf253500fb873a119e`: [Validate #41053605873](https://github.com/jonhararagi/wordwaifu/actions/runs/41053605873) y [Lore/Integrity #41053605851](https://github.com/jonhararagi/wordwaifu/actions/runs/41053605851), ambos `success`. CI post-merge sobre SHA exacto `fd201fc6f1825299630d2ef04d4436fa02f50d60`: [Validate #41054208200](https://github.com/jonhararagi/wordwaifu/actions/runs/41054208200) y [Lore/Integrity #41054208192](https://github.com/jonhararagi/wordwaifu/actions/runs/41054208192), ambos `success`. No se ejecutaron pruebas locales.

## DMR-061 — continuación del Volumen 1, PDF pp. 25–30 (2026-10-30)

- **Corpus:** `CONT-MAIN-LN`, separado de los dossiers web/wikis. Fuente DMR-061-SRC-001; traducción privada sin cotejo con el japonés.
- **Lectura:** p. 25 describe la iglesia y la habitación subterránea donde Bell encuentra a Hestia; pp. 26–28 contienen conversación cotidiana y explicación de dioses, Familias y Gracia; p. 29 recuerda cómo Hestia invitó a Bell y él aceptó; p. 30 muestra una actualización rutinaria del Estado mediante sangre de Hestia.
- **Evento existente:** el recuerdo del primer encuentro Bell–Hestia (PDF p. 29) se añadió a `EVT-DM-BELL-MEETS-HESTIA-001`; no se creó un ID duplicado. La concesión inicial de Falna de pp. 211–214 y la actualización con entrega de daga de pp. 193–196 permanecen como eventos separados.
- **Límites:** no se identifica la estatua de la iglesia, la iglesia como lugar catalogado ni la amiga de Hestia. P. 30 no aporta valores de atributos ni prueba de un evento nuevo con resultado cuantificable.
- **Inspección visual:** PDF pp. 25–30 inspeccionadas a página completa; son folios de texto continuo sin ilustraciones. Permanecen pendientes pp. 19–21 y 23–24 de la tanda visual previa.
- **Siguiente folio al cerrar este bloque:** PDF p. 31; esa continuación se completó después hasta PDF p. 36, documentada en la sección siguiente. Las cinco pasadas continúan abiertas; no se marca `+` a personajes.
- **Integración:** la rama `research/danmachi-v1-primary-pp25-30-2026-10-30` quedó integrada mediante [PR #211](https://github.com/jonhararagi/wordwaifu/pull/211), squash SHA `fd201fc6f1825299630d2ef04d4436fa02f50d60`. CI pre-merge sobre HEAD `69ed2d6a69a1ed1fc1d280cf253500fb873a119e`: [Validate #41053605873](https://github.com/jonhararagi/wordwaifu/actions/runs/41053605873) y [Lore/Integrity #41053605851](https://github.com/jonhararagi/wordwaifu/actions/runs/41053605851), ambos `success`. CI post-merge sobre el SHA exacto `fd201fc6f1825299630d2ef04d4436fa02f50d60`: [Validate #41054208200](https://github.com/jonhararagi/wordwaifu/actions/runs/41054208200) y [Lore/Integrity #41054208192](https://github.com/jonhararagi/wordwaifu/actions/runs/41054208192), ambos `success`.

## DMR-061 — continuación del Volumen 1, PDF pp. 31–36 (2026-10-30)

- **Corpus:** `CONT-MAIN-LN`, exclusivamente DMR-061-SRC-001 y la traducción privada aportada; sin mezcla con wikis o búsquedas web.
- **Lectura:** p. 31 continúa la inscripción del Estado y la explicación de Puntos de Experiencia; p. 32 contiene el diálogo de Hestia sobre Familias y dificultades entre facciones; p. 33 entrega el snapshot de Bell Lv. 1; p. 34 trata Magia/Habilidades; pp. 35–36 muestran la perspectiva interna de Hestia y la habilidad `Deseo Inquebrantable`.
- **Nuevo evento:** `EVT-DM-V01-HESTIA-UPDATES-BELL-AFTER-MINOTAUR-001`, separado de Falna inicial (pp. 211–214) y de actualización con daga (pp. 193–196). Se conserva el límite de conocimiento: la copia de Bell aparece vacía en Habilidades; el lector ve la habilidad desde el POV de Hestia.
- **Snapshot Bell (PDF p. 33):** Lv. 1; Fuerza I77→I82; Resistencia I13; Destreza I93→I96; Agilidad H148→H172; Magia I0. Bell se pregunta si el aumento de Agilidad deriva de escapar del Minotauro; no se registra como causa probada.
- **Inspección visual:** pp. 31–36 renderizadas e inspeccionadas a página completa. P. 33 contiene la tabla de atributos; pp. 35–36 la entrada de Habilidad. Son páginas de texto sin ilustraciones.
- **Fichas:** Bell y Hestia reciben una sección temporal de `CONT-MAIN-LN`; no se marcan `+` por esta pasada grupal.
- **Siguiente folio al cerrar el bloque:** PDF p. 37; esa continuación se completó después hasta PDF p. 42, documentada en la sección siguiente. Siguen pendientes inspecciones visuales de pp. 19–21 y 23–24, cotejo individual completo y contraste posterior con el corpus web separado.
- **Integración:** PR [#212](https://github.com/jonhararagi/wordwaifu/pull/212) integrada por squash; `main` verificado en SHA `30ace01e17d94d5eeaa23424bcba10fc7028329a`. CI pre-merge sobre HEAD `3242b98c8520a435f853286d28e44b3b374f07f5`: [Validate #41056002967](https://github.com/jonhararagi/wordwaifu/actions/runs/41056002967) y [Lore/Integrity #41056002935](https://github.com/jonhararagi/wordwaifu/actions/runs/41056002935), ambos `success`. CI post-merge sobre el SHA exacto de `main`: [Validate #41056197850](https://github.com/jonhararagi/wordwaifu/actions/runs/41056197850) y [Lore/Integrity #41056197884](https://github.com/jonhararagi/wordwaifu/actions/runs/41056197884), ambos `success`.

## DMR-061 — continuación del Volumen 1, PDF pp. 37–42 (2026-10-30)

- **Corpus:** `CONT-MAIN-LN`, fuente DMR-061-SRC-001, traducción privada no cotejada con japonés; no se incluyen hallazgos web/wiki.
- **Lectura:** p. 37 abre el capítulo 2; pp. 38–39 narran la mañana de Bell y Hestia en la base subterránea; p. 40 ilustra la escena; p. 41 Bell se libera, sale y descubre que olvidó desayunar; p. 42 percibe una mirada y conoce a una joven humana que aún no se identifica por nombre.
- **Precauciones:** la portadilla de p. 37 no identifica nominalmente a la figura; p. 42 tampoco nombra a la joven. No afirmar que son la misma persona por semejanza. No identificar al aventurero que observa a Bell, porque el texto no determina cuál de las personas presentes lo miraba.
- **Eventos y personajes:** no se crea un evento ni una ficha de personaje por el encuentro incompleto de p. 42. La escena queda como lead para cotejar con la continuación de la lectura. No se marcan personajes con `+`.
- **Inspección visual:** PDF pp. 37–42 renderizadas e inspeccionadas a página completa. Pp. 37 y 40 contienen ilustraciones; las otras cuatro son páginas de texto.
- **Siguiente folio al cerrar el bloque:** PDF p. 43; esa continuación se completó después hasta PDF p. 48, documentada en la sección siguiente. Cinco pasadas abiertas; siguen pendientes pp. 19–21 y 23–24 de la inspección visual, auditoría individual y comparación posterior con el corpus web.
- **Integración:** la rama `research/danmachi-v1-primary-pp37-42-2026-10-30` quedó integrada mediante PR [#213](https://github.com/jonhararagi/wordwaifu/pull/213), squash SHA `3a0702faecfd817219717d3ab340ef2a269ca671`. CI pre-merge sobre HEAD `aa60e3db255822d68a7d34a4a1dd28024300b1ba`: [Validate #41056686864](https://github.com/jonhararagi/wordwaifu/actions/runs/41056686864) y [Lore/Integrity #41056686938](https://github.com/jonhararagi/wordwaifu/actions/runs/41056686938), ambos `success`. CI post-merge sobre el SHA exacto `3a0702faecfd817219717d3ab340ef2a269ca671`: [Validate #41056932254](https://github.com/jonhararagi/wordwaifu/actions/runs/41056932254) y [Lore/Integrity #41056932256](https://github.com/jonhararagi/wordwaifu/actions/runs/41056932256), ambos `success`.

## DMR-061 — continuación del Volumen 1, PDF pp. 43–48 (2026-10-30)

- **Corpus:** `CONT-MAIN-LN`, DMR-061-SRC-001; traducción privada no cotejada con japonés y separada de fuentes web/wiki.
- **Seal Flover:** las pp. 43–46 confirman el nombre de la joven presentada a Bell en p. 42. Se crea la ficha provisional `DM-CHAR-SEAL-FLOVER`; la figura de p. 37 no se identifica como Seal.
- **Nuevo evento:** `EVT-DM-V01-BELL-MEETS-SEAL-FLOVER-001` registra la devolución de la Piedra Mágica, la oferta de pan y queso, la invitación aceptada a cenar y el intercambio de nombres (pp. 42–46). No se registra como sucedida la cena futura; el local no recibe nombre.
- **Dungeon/Kobolds:** p. 46 contiene exposición sobre el Dungeon anterior al descenso de los dioses y antiguos combatientes sin Gracia. En pp. 46–47 Bell es perseguido por seis Kobolds después de matar dos de un grupo inicial de ocho. P. 48 muestra una emboscada parcial; el enfrentamiento queda abierto y sin evento cerrado.
- **Inspección visual:** pp. 43–48 inspeccionadas a página completa; son folios de texto continuo sin ilustraciones.
- **Próximo folio:** PDF p. 49. Las cinco pasadas siguen abiertas; faltan las inspecciones visuales de pp. 19–21 y 23–24, cotejo individual y comparación con el corpus web.
- **Rama:** `research/danmachi-v1-primary-pp43-48-2026-10-30`, creada desde el SHA integrado de `main` `3a0702faecfd817219717d3ab340ef2a269ca671`. Esta tanda aún requiere PR y CI; no se declara integrada.

## DMR-061 — continuación del Volumen 1, PDF pp. 49–54 (2026-10-30)

- **Sesión controlada por hora argentina:** inicio 10:03:52; límite de seis minutos 10:09:52; cierre registrado a las 10:09:52 (UTC−03:00).
- **Corpus:** `CONT-MAIN-LN`, DMR-061-SRC-001, traducción privada no cotejada con japonés; sin mezcla de fuentes web/wiki.
- **Lectura:** pp. 49–50 cierran el combate contra Kobolds y documentan fragmentos de Piedra Mágica; p. 51 registra una garra como botín y la carga que Bell debe transportar; p. 52 explica el Dungeon «vivo», mapas, autorreparación y nacimiento de monstruos; p. 53 documenta un Goblin y un Diente de Goblin; p. 54 muestra una retirada planificada a la superficie y un snapshot de Estado.
- **Eventos reutilizados:** ya existían en la rama `EVT-DM-V01-BELL-DEFEATS-KOBOLD-PARTY-001` (pp. 46–51) y `EVT-DM-V01-BELL-DEFEATS-GOBLIN-AND-GETS-TOOTH-001` (p. 53). No se crearon IDs duplicados; esta tanda los integrará en los índices y catálogo centrales.
- **Snapshot Bell, PDF p. 54, Lv. 1:** Fuerza I82→H120; Resistencia I13→I42; Destreza I96→H139; Agilidad H172→G225; Magia I0. Magia y Habilidades aparecen vacías. No se atribuyen los aumentos a un solo monstruo.
- **Límite:** el nuevo ataque sorpresa de p. 54 queda abierto; no se registra un evento cerrado. El próximo folio es p. 55.
- **Inspección visual:** pp. 49–54 se leyeron mediante el texto extraído; el extractor no entregó imágenes de página y no se hizo render en esa sesión. La inspección visual de esos folios, incluida la tabla de p. 54, permanece pendiente.
- **Próximo trabajo:** lectura desde p. 55; inspecciones visuales pendientes pp. 19–21 y 23–24; cotejo individual y contraste web permanecen abiertos.
- **Rama:** `research/danmachi-v1-primary-pp49-54-2026-10-30`, basada en `main` SHA `12f2e60d79b8a3dbe9e1a998a375ecd7cafef684`. No se declara integrada ni validada todavía.

## DMR-061 — continuación del Volumen 1, PDF pp. 55–60 (2026-10-30)

- **Corpus:** CONT-MAIN-LN, DMR-061-SRC-001; traducción privada no cotejada con japonés y sin importar información de wikis o juegos.
- **Lectura:** p. 55 registra la reacción de Bell al Estado que Hestia le entrega; p. 56 muestra el enfado silencioso de Hestia y su salida a una fiesta de su lugar de trabajo; p. 57 identifica el local de Seal como **La Señora de la Abundancia**; pp. 58–59 registran la primera entrada de Bell, el personal observado y el asiento apartado que Seal le prepara; p. 60 conserva la conversación con la jefa («Mia mama») y las cifras económicas dichas por Bell.
- **Precisión de stats:** el «29» que Bell menciona para Resistencia en p. 55 es compatible con el incremento I 13 → I 42 del snapshot anterior de p. 54; no se trata como total nuevo aislado ni se atribuye toda la subida a un único ataque.
- **Límite narrativo:** Bell aún está revisando el menú al final de p. 60. No se registra que haya terminado de cenar ni se crea evento definitivo sin revisar primero el catálogo.
- **Inspección visual:** pp. 55–60 fueron renderizadas desde el PDF local a 110 dpi y revisadas; son folios de texto continuo, sin ilustraciones. La lectura embebida de Files no proporcionó las imágenes, por lo que se usó el render local.
- **Rama:** research/danmachi-v1-primary-pp49-54-2026-10-30, con base main SHA 12f2e60d79b8a3dbe9e1a998a375ecd7cafef684. En el cierre de esta sesión la rama aún no tiene PR ni CI; no se ejecutaron pruebas locales.
- **Próximo folio:** PDF p. 61. Siguen abiertas las cinco pasadas, la inspección visual de pp. 19–21, 23–24 y 49–54, los cotejos individuales y la comparación secundaria separada.

## DMR-061 — continuación del Volumen 1, PDF pp. 61–66 (2026-10-30)

- **Lectura:** Bell cena en La Señora de la Abundancia, habla con Seal, escucha la descripción de su jefa Mia y recibe la explicación del interés de Seal por conocer personas. La Familia Loki llega para celebrar el regreso de una expedición; Bell reconoce a Ais. En pp. 65–66 los aventureros cuentan el rescate del Minotauro y se burlan del novato cubierto de sangre, que Bell reconoce como su propia experiencia.
- **Enlace de evento:** pp. 65–66 amplían el rescate previo de EVT-DM-BELL-AIS-MINOTAUR-001; se evita crear un ID duplicado para el mismo combate. La primera visita a la taberna queda como candidato independiente hasta revisar el resto del pasaje.
- **Precaución de continuidad:** existe CHAR-MIA-GRAND en alcance CONT-ANIME; esta tanda de CONT-MAIN-LN solo respalda el nombre «Mia» y la información relatada en PDF p. 62. No se copia apellido ni atributos de adaptación.
- **Inspección visual:** pp. 61–66 renderizadas a 110 dpi e inspeccionadas; seis folios de texto continuo, sin ilustraciones.
- **Rama:** research/danmachi-v1-primary-pp49-54-2026-10-30, base main 12f2e60d79b8a3dbe9e1a998a375ecd7cafef684. La rama sigue sin PR, sin CI y sin pruebas locales.
- **Próximo folio:** PDF p. 67. Continúan abiertas cinco pasadas, inspecciones visuales de pp. 19–21, 23–24 y 49–54, cotejos individuales y contraste web secundario.

## DMR-061 — continuación del Volumen 1, PDF pp. 137–146 (2026-10-30)

- **Continuidad/fuente:** `CONT-MAIN-LN`, `DMR-061-SRC-001`; traducción privada española no cotejada con el japonés.
- **Lectura y auditoría:** pp. 137–146 leídas secuencialmente; revisión por página y hoja de contactos renderizada a 110 dpi. No se observaron ilustraciones en este bloque.
- **Hallazgos:** pp. 137–138 describen el Festival de Monstruos y el encargo del monedero de Seal; Bell sale con él hacia el Coliseo, pero la devolución aún no aparece. pp. 139–145 contienen la reunión Freya–Loki–Ais, la sospecha de Loki sobre el interés de Freya y la observación de Bell entre la multitud. pp. 145–146 muestran a Hephaistos entregando a Hestia la daga terminada; la deuda sigue vigente.
- **Eventos:** se conservan por separado `EVT-DM-V01-HESTIA-PETITIONS-HEPHAISTOS-DAGGER-001` (petición/aceptación y comienzo de forja, p. 115 y pp. 129–133) y `EVT-DM-V01-HEPHAISTOS-GIVES-DAGA-HESTIA-001` (entrega física pp. 145–146). La reunión se registra en `EVT-DM-V01-FREYA-LOKI-CAFE-MEETING-001`; el seguimiento visual de Ais se limita a lo que el texto narra, sin convertirlo en reconocimiento verbal. Los tres IDs figuran en los índices de eventos y se enlazan a la fuente DMR-061-SRC-001.
- **Pendientes:** devolución del monedero a Seal; continuar lectura desde PDF p. 147. Las dos pociones ya quedaron identificadas en p. 127 como pociones de recuperación; no atribuirles fórmula o propiedades adicionales sin pasaje.
- **Estado Git:** la extracción permanece en la rama independiente `research/danmachi-v1-primary-pp49-54-2026-10-30`; `main` no se modificó. El HEAD y la distancia exacta se consultan en vivo al retomar, porque este archivo de estado también se versiona en la propia rama y su actualización cambia el SHA. PR #209 pertenece a otra rama y no se modificó.
- **Pruebas/CI:** no se ejecutaron pruebas de código ni CI para esta pasada documental. No se creó PR ni se modificó `main`.
- **Control horario de la lectura:** el checkpoint de `lore/danmachi/WORK_QUEUE.md` registra inicio 16:53:11, minuto 6 a las 16:59:11 y límite de 10 minutos a las 17:03:11 (Argentina, UTC−03:00). La verificación documental posterior no añadió una medición independiente.


## DMR-061 — Volumen 1 hasta PDF p. 156 (2026-10-30)
- Lectura secuencial hasta p. 156 en CONT-MAIN-LN, fuente DMR-061-SRC-001 (traducción privada no cotejada).
- Hestia encuentra a Freya y recibe indicaciones para localizar a Bell; después propone una cita. Bell mantiene presente el encargo del monedero de Seal; devolución pendiente.
- Pp. 150–155 amplían EVT-DM-V01-BELL-HESTIA-FESTIVAL-DATE-001. P. 156 cambia al Coliseo y describe el inicio del espectáculo con Battle Jabalí y domadora de Ganesha Familia.
- Diez páginas renderizadas a 110 dpi; p. 154 única ilustración, inspeccionada ampliada. Sin pruebas de código ni CI.
- Referencia histórica de entrada: rama research/danmachi-v1-primary-pp49-54-2026-10-30, HEAD fe082141ad06e897481ac29c176e1b69b8db05c9; main 12f2e60d79b8a3dbe9e1a998a375ecd7cafef684; 71 adelante/0 detrás. Los commits de documentación posteriores movieron el HEAD; no usar aquella referencia como estado actual. Una comparación posterior al guardado inicial arrojó 78 adelante/0 detrás. Resolver HEAD y distancia vigentes en GitHub al reanudar. Sin PR propia; PR #209 no modificada. Próxima página: PDF p. 157. Cinco pasadas siguen abiertas.

## DMR-061 — Volumen 1, PDF pp. 157–177 (2026-10-30)

- **Fuente/continuidad:** DMR-061-SRC-001, CONT-MAIN-LN, traducción privada no cotejada con japonés.
- **Páginas:** 157–177 completadas con tres pasadas obligatorias por página; cuarta pasada correctiva en pp. 165–167. Próxima página exacta: PDF p. 178.
- **Visual:** 21 páginas renderizadas a 110 dpi; p. 169 contiene la única ilustración, inspeccionada ampliada. Las demás son páginas de texto.
- **Hallazgos clave:** Eina cuestiona el riesgo del Festival; Bell/Hestia vuelven a encontrarse con Eina y siguen buscando a Seal; Freya incapacita personal de los establos y libera un Silverback; el monstruo primero busca a Freya y luego recibe la orden de perseguir a una «pequeña Diosa» (probablemente Hestia); Ganesha responde a nueve fugas y Eina coordina ayuda con Ais/Loki; Bell y Hestia comienzan la persecución hacia la Calle Dédalo.
- **Correcciones:** se conserva la discrepancia de apariencia de Seal entre pp. 42 y 165; se corrige la atribución de objetivo del Silverback, sin afirmar que Freya ordenó atacar a Bell ni que liberó personalmente los nueve monstruos.
- **Archivos:** dossier de volumen, inbox DMR-061, cuatro eventos, fichas de Seal/Freya, índices de eventos, WORK_QUEUE, registro de acuerdos y STATUS.
- **Estado Git de entrada:** rama research/danmachi-v1-primary-pp49-54-2026-10-30, HEAD b972852b0b720f769af1115afbcad8778324d63e; main 12f2e60d79b8a3dbe9e1a998a375ecd7cafef684; 80 adelante/0 detrás. Sin PR propia, sin CI en ese HEAD y sin pruebas locales. PR #209 corresponde a otra rama; main no se modificó. El HEAD cambia al guardar estos archivos y se verifica de nuevo al cierre.
- **Pruebas:** no se ejecutaron pruebas locales. No se declara CI para estos cambios documentales hasta que exista una ejecución sobre el HEAD actualizado.
- **Pendientes:** devolución del monedero de Seal y continuación de la persecución.

## DMR-061 — Volumen 1, PDF pp. 178–214 (2026-10-30)

- **Continuidad/fuente:** CONT-MAIN-LN, DMR-061-SRC-001; traducción privada en español no cotejada con japonés.
- **Estado de lectura:** pp. 178–214 incorporadas a partir del checkpoint integrado hasta p.177. El PDF termina en p.214; no existe una p.215.
- **Tres pasadas:** extracción, auditoría visual y continuidad/duplicados completadas para todas las pp.178–214. Pp.208–210 incluyen tres tarjetas/ilustraciones revisadas ampliadas.
- **Cuarta pasada correctiva:** p.200 (corrección de atribución sobre el colapso); pp.203–205 (reencuentro de Seal y fatiga de Hestia); p.208 (Agilidad D512 narrativo frente a D521 visual).
- **Hallazgos:** cierre de la fuga y reacción de Ais (pp.201–203); Bell y Hestia se recuperan en La Señora de la Abundancia, con Seal (pp.203–204); Hestia explica la daga y el préstamo (pp.205–208); retrospectiva del primer encuentro y concesión de Falna (pp.211–214).
- **Correcciones de continuidad:** p.204 describe el cabello de Seal como gris oscuro, apoyando parcialmente el recuerdo de p.165; los ojos continúan en discrepancia con p.42. La narración p.203 confirma fatiga de Hestia; p.205 menciona dogeza de 30 horas, sin afirmar que sea la única causa del colapso.
- **Eventos existentes actualizados:** persecución hasta p.195; respuesta Ganesha/Gremio pp.170–203; derrota Silverback pp.196–203; explicación daga y préstamo pp.203–208; concesión inicial de Falna pp.211–214. Se amplió el candidato del primer encuentro Bell–Hestia sin crear un duplicado.
- **Archivos:** dossier V1, inbox DMR-061, eventos mencionados, candidato de primer encuentro, fichas de Seal y Freya, reglas de Piedra Mágica, índice de equipo, índices de eventos, WORK_QUEUE, STATUS y MASTER_INDEX.
- **Personajes/objetos:** no se crean personajes ni objetos duplicados. La tarjeta p.209 ya estaba reflejada en el perfil de Bell y se confirmó visualmente; no se repite su registro.
- **Pendientes:** identidad del responsable de la fuga; mirada no identificada de p.186; Familia de la azotea desde la que Freya observa en p.200; vínculo exacto entre la pequeña caja de p.190 y la daga que Hestia entrega en p.193 (probable por continuidad, no dicho en p.190); color de ojos de Seal; reconciliar la secuencia de Seal p.98–102 con el reencuentro pp.203–204 antes de crear otro evento.
- **Alcance histórico:** esta actualización no cierra las inspecciones visuales pendientes registradas por PR #215 (pp.19–21, 23–24 y 49–54). Tampoco declara revisadas las pp.1–10, que no constan en el dossier secuencial actual.


## DMR-062 — auditoría cruzada de la transcripción MD del Volumen 1 (2026-10-30)

- Se inicia auditoría específica del archivo Markdown privado derivado del Volumen 1. Contiene 7.251 líneas y cargas Base64; no ofrece paginación física consistente, por lo que no se usa para inventar localizadores PDF.
- La extracción narrativa secuencial del PDF queda integrada hasta p.214 en `main` (merge SHA `c00b582ad3f8a03930243b0cfb69b33cd3cdded9`); Validate WordWaifu #3710 y DanMachi Lore and Retrieval Integrity #2088 pasaron en ese SHA.
- La auditoría DMR-062 añadió diez fichas de monstruos del Volumen 1 y las registró en el índice y catálogo. Su estado es `source_checked_translation_unverified`: la traducción sigue sin cotejo con japonés.
- Informe: `lore/danmachi/research/inbox/DANMACHI-RESEARCH-062-volume-01-markdown-cross-audit.md`.
- Pendiente: cotejar pp.1–10, completar inspecciones visuales antiguas, revisar reglas/objetos atomizados y evaluar los eventos candidatos sin duplicar IDs.


## DMR-061 — segunda pasada V1, PDF pp. 73–76 (2026-10-31)

- **Resultado:** pasada 2 completada para PDF pp.73–76 mediante cotejo de la extracción secuencial con la transcripción Markdown original. Se precisaron la hoja básica de Bell, los motivos de Eina para considerar prematuro el quinto piso, la distinción entre el riesgo de Bell y la anomalía del Minotauro, el alcance limitado de la promesa de Eina y la reacción ambigua/autorracionalizada ante el «te amo». p.76 conserva «Un solo pasó» y la primera muerte del Frog Shooter; la referencia a «esa persona» se localiza en p.77 tras comprobar el PDF físico.
- **Integridad de canon:** ampliado el expediente existente `EVT-DM-EINA-ADVISOR-001`; no se creó ID nuevo ni se duplicó la ficha Frog Shooter. Se preservan los límites de `CONT-MAIN-LN`; DMR-061-SRC-001 sigue siendo una traducción privada no cotejada con japonés.
- **Fuente original:** `lore/danmachi/volumes/main/Volumen [01] • DanMachi.md`, sin modificaciones. En la reanudación se renderizaron pp.73–80 a 130 dpi: p.73 es portadilla ilustrada; p.79 es texto continuo. p.86 no se reexaminó.
- **Reconciliación de dossier:** `lore/danmachi/volumes/main/volume-01.md` no está en el `main` actual porque fue eliminado en la limpieza intencional [`c1a4b9298c8118534f6babf5a5324b873e51c41c`](https://github.com/jonhararagi/wordwaifu/commit/c1a4b9298c8118534f6babf5a5324b873e51c41c) para dejar la carpeta lista para recargar fuentes originales. El Markdown original de V1 sí permanece. No se restauró el dossier eliminado en la carpeta de fuentes.
- **Git/CI:** HEAD de entrada `c9253b8f1b190827a06cc751bc0b2bb41470ba2c`. La consulta de checks y workflow runs sobre ese SHA no devolvió resultados. Esta tanda solo cambia documentación; no se ejecutaron pruebas locales ni se declara validación técnica/CI.
- **Siguiente acción:** continuar pasada 2 desde PDF p.77; después completar pasada 3 pp.9–156 y reconciliar la primera pasada. V1 sigue `IN_PROGRESS`.


## DMR-061 — segunda pasada V1, PDF pp. 77–80 (2026-10-31)

- **Resultado:** pasada 2 completada para pp.77–80 tras leer el PDF físico y contrastar con la extracción Markdown. Se precisaron las heridas/equipo de Bell, su objetivo no nombrado («esa persona») en p.77, la llegada al sexto piso y el callejón sin salida en p.78, el nacimiento de la primera War Shadow en p.79 y la aparición de la segunda en p.80.
- **Rectificación de localizadores:** la anotación previa había situado «esa persona» en p.76; el PDF físico confirma p.77. «Un solo pasó» permanece en p.76, sin convertirlo en duración. La frase se corrigió en DMR-061 y WORK_QUEUE.
- **Rectificación visual:** render directo 130 dpi de pp.73–80 confirma portadilla ilustrada en p.73 y páginas de texto en pp.74–80. La clasificación previa de p.79 como ilustración se corrigió. La figura abstracta de p.73 no se identifica. p.86 no se reexaminó.
- **Canon/duplicados:** se amplía la ficha existente `MON-DM-WAR-SHADOW-001`; el encuentro queda abierto al final de p.80 y no se crea evento cerrado ni ficha duplicada antes de cotejar pp.81–85.
- **Paginación:** `pdf_inspect` sobre el PDF original confirma 215 páginas físicas. La lectura interna del indexador que mostraba 214 no reemplaza este dato.
- **Git/CI:** HEAD de entrada `bdddc750e7a7002070c731898b77fd9e15f198ba`. No se ejecutaron pruebas de código; las consultas de CI del commit documental anterior no devolvieron checks ni workflow runs. No se declara validación técnica.
- **Siguiente acción:** continuar pasada 2 desde PDF p.81; luego completar pasada 3 pp.9–156 y reconciliar pasada 1. V1 sigue `IN_PROGRESS`.


## DMR-061 — segunda pasada V1, PDF pp. 81–90 (2026-10-31)

- **Resultado:** pasada 2 completada para pp.81–90 mediante extracción página por página, render a 130 dpi e inspección visual, y revisión de continuidad/duplicados.
- **Combate War Shadow (pp.81–85):** Bell resiste el ataque coordinado; golpea la cabeza de una criatura, que cae de rodillas sin que el texto confirme destrucción de su Piedra Mágica; la segunda muere explícitamente cuando Bell rompe la piedra de su pecho. El Dungeon genera cuatro War Shadows nuevas y entran monstruos del quinto piso que bloquean la salida. Bell recoge un «Dedo de War Shadow» como equipo improvisado y comienza a luchar en p.85. El enfrentamiento permanece abierto.
- **Hestia y regreso de Bell (pp.87–90):** Hestia pasa la noche buscándolo y lo encuentra a las 5:00. Bell regresa herido y sin equipo defensivo, admite que entró al Dungeon y Hestia lo ayuda. Se conserva como percepción de Hestia su interpretación sobre Aizu y el crecimiento de Bell; no se confirma reciprocidad romántica. La escena continúa al final de p.90.
- **Visuales:** pp.81–85 y pp.87–90 son texto; p.86 es una ilustración de capítulo a página completa, inspeccionada ahora. La figura permanece sin identificar. Queda resuelto el pendiente de inspección de p.86 que figuraba en el checkpoint anterior.
- **Canon y duplicados:** ampliada la ficha existente `MON-DM-WAR-SHADOW-001`; sin nueva ficha de especie, sin ficha de arma para el dedo, sin evento cerrado para el combate ni para el regreso de Bell.
- **Fuente y límite:** DMR-061-SRC-001, traducción privada no cotejada con japonés. Se trabajó directamente sobre el PDF físico; no se declara cotejo con el Markdown de 4 MB porque la conexión de GitHub no permitió recuperarlo íntegramente.
- **Git/CI:** HEAD de entrada `61b07f8ac640dcb06f265ceff7eaab2c9d58d422`. No se ejecutaron pruebas de código; el estado combinado de checks y la consulta de workflow runs asociadas a ese SHA no devolvieron resultados. No se declara validación técnica ni CI.
- **Siguiente acción:** continuar pasada 2 desde PDF p.91; después completar pasada 3 pp.9–156 y reconciliar pasada 1. DMR-062 conserva sus pendientes independientes. V1 sigue `IN_PROGRESS`.

## DMR-061 — segunda pasada V1, PDF pp. 91–100 (2026-10-31)

- **Resultado:** pasada 2 completada para pp.91–100. Pp.98–102 se renderizaron e inspeccionaron visualmente como páginas de texto; p.98 contiene una nota al pie del traductor sobre «nekomusume», no una ilustración.
- **Estado de Bell (p.91):** Lv.1; Fuerza H123→G221, Resistencia I42→H101, Destreza H139→G232, Agilidad G225→F313, Magia I0. La columna anterior de Fuerza H123 contradice el snapshot de p.54 (H120); diferencia abierta.
- **Habilidad:** Hestia vuelve a ver [Deseo Inquebrantable] y decide no revelársela a Bell. Le explica el crecimiento anormal sin darle nombre ni efectos.
- **Promesa y Banquete:** Bell promete no sobreesforzarse ni dejar sola a Hestia. Ella decide usar la invitación al Banquete de Ganesha para intentar contactar con Hephaistos; asistencia y encuentro aún no confirmados.
- **Seal:** Bell regresa a La Señora de la Abundancia, se disculpa y paga lo adeudado; Seal lo perdona y le entrega una cesta. La conversación con Mia-mama continúa al final de p.100. No se confirma romance ni identidad de empleadas anónimas.
- **Integridad:** dos acontecimientos nuevos separados; no se fusionan con Falna, updates anteriores, primer encuentro con Seal ni la escena de la taberna de pp.57–72. No se importan datos de CONT-ANIME.
- **Siguiente folio:** PDF p.101. Pasada 3 pp.9–156 y reconciliación de pasada 1 pendientes. V1 sigue IN_PROGRESS.

## DMR-061 — segunda pasada V1 · PDF pp.111–120 (2026-10-31)

- **Resultado:** tres revisiones por página completadas en pp.111–120: extracción; inspección visual del PDF; auditoría de continuidad y duplicados. Cuarta revisión correctiva de p.116 y p.119.
- **Visual:** p.116 es una ilustración de capítulo a página completa, sin identidad asignada. Las otras nueve páginas son texto; p.116 fue inspeccionada ampliada.
- **Banquete:** pp.104–115 formalizadas en EVT-DM-V01-GANESHA-GOD-BANQUET-001. La petición de arma de p.115 permanece en su evento existente, no duplicado.
- **Dungeon:** pp.117–120 formalizadas en EVT-DM-V01-BELL-FIGHTS-DUNGEON-LIZARD-GOBLIN-AND-RETURNS-001. Se reutilizan las fichas de Dungeon Lizard, Goblin y Kobold; no se añaden individuos ni estadísticas no respaldadas.
- **Fichas:** ampliados perfiles de Bell, Hestia, Freya, Loki y Ganesha; Ganesha Familia; lugares Orario, Dungeon y Babel. Hephaistos mantiene ficha individual provisional CHAR-HEPHAISTOS.
- **Siguiente página:** PDF p.121.
- **Pendientes:** pasada 2 pp.121–156; pasada 3 pp.9–156; reconciliación de pasada 1; DMR-062 (pp.1–10, reglas/objetos, candidatos de monstruos y revisión de personajes). V1 permanece IN_PROGRESS.
- **Procedencia:** DMR-061-SRC-001, traducción privada no cotejada con japonés. PDF de 215 páginas físicas: p.8 blanca, p.214 última página narrativa, p.215 créditos.



## DMR-061 — segunda pasada V1 · PDF pp.121–130 (2026-10-31)

- **Resultado:** tres revisiones obligatorias por folio completadas en pp.121–130: extracción; render e inspección visual; auditoría de continuidad, entidades, cronología y duplicados. Cuarta revisión correctiva en p.125 y p.130 (ancla temporal de dos días), p.126 (ilustración sin identidad) y pp.128–129 (daga de escaparate no identificada).
- **Visual:** pp.121–125 y pp.127–130 son páginas de texto; p.126 es ilustración monocroma a página completa, inspeccionada a 130 dpi y sin identidad asignada.
- **Hallazgos:** Babel como cubierta del Dungeon; preparativos del Festival de Monstruos y cajas de transporte vistos por Bell; Eina trabajando en el Gremio; ocho avenidas en Orario y anclas urbanas entre avenidas Noreste/Oeste; encuentro con Miach y entrega gratuita de dos pociones de recuperación; daga blanca no comprada en escaparate de Hephaistos Familia; Hestia continúa la dogeza iniciada durante el Banquete.
- **Cronología:** p.125 confirma que el Banquete de Ganesha fue exactamente dos días antes. La incursión de Bell, los preparativos observados y el encuentro con Miach se anclan a ese intervalo. La insistencia de Hestia continúa durante los dos días posteriores al Banquete. No se asignan fechas de calendario.
- **Eventos nuevos:** EVT-DM-V01-BELL-OBSERVES-MONSTER-FESTIVAL-PREPARATIONS-001 (pp.121–123) y EVT-DM-V01-BELL-RECEIVES-RECOVERY-POTIONS-FROM-MIACH-001 (pp.124–127). La petición de la daga continúa en el evento existente, no duplicado.
- **Entidades y lugares:** se crea CHAR-MIACH usando el ID reservado; se amplían Miach Familia, Babel, Orario, la red de avenidas, la iglesia de Hestia, Seal, Eina, Bell, Ganesha y Hephaistos. No se crean especies de monstruos por las cajas ni un arma para la daga no comprada.
- **Siguiente página:** PDF p.131. **Pendientes:** pasada 2 pp.131–156; pasada 3 pp.9–156; reconciliación de pasada 1; tareas independientes DMR-062. V1 permanece IN_PROGRESS.
- **Fuente:** DMR-061-SRC-001, traducción privada no cotejada con japonés. PDF de 215 páginas físicas: p.8 en blanco, p.214 último folio narrativo y p.215 créditos.

## DMR-061 — segunda pasada V1 · PDF pp.131–140 (2026-10-31)

- **Resultado:** tres revisiones por página completadas para pp.131–140: extracción de narración y diálogos; inspección visual real del PDF; revisión de continuidad, relaciones, eventos e IDs existentes. No se necesitó cuarta pasada correctiva.
- **Visual:** diez páginas de texto continuo; sin ilustraciones, tablas de Estado ni fichas gráficas.
- **Hallazgos:** Hestia explica su deseo de ayudar a Bell; Hephaistos acepta la forja y elige mithril y martillo carmesí; el diseño queda en dilema por la fuerza del usuario (pp.131–134). Bell planea el quinto piso, pero Anya le encarga llevar el monedero olvidado de Seal al Coliseo (pp.135–138). El Festival llena la Calle Principal del Este; Freya espera en una cafetería y Loki llega con Ais (pp.139–140).
- **Continuidad:** se amplían la petición/forja ya existente y el encuentro Freya–Loki–Ais ya existente. Anya/Ryuu reutilizan fichas estables con evidencia CONT-MAIN-LN; no se transfieren capacidades de otras continuidades. El monedero sigue sin entregar y no se crea evento de cierre prematuro.
- **Siguiente página:** PDF p.141. Pendiente segunda pasada pp.141–156; tercera pasada pp.9–156; reconciliación integral de pasada 1; DMR-062. V1 permanece IN_PROGRESS.



## DMR-061 — segunda pasada V1 · PDF pp.141–150 (2026-10-31)

- **Resultado:** tres controles completados por folio: extracción, inspección visual del PDF físico y auditoría de continuidad/duplicados. No se necesitó cuarta revisión correctiva.
- **Hallazgos:** pp.141–145 amplían el encuentro Freya–Loki–Ais sin confirmar romance ni interacción directa entre Ais y Bell; p.146 registra la entrega física de la Daga de Hestia y mantiene la deuda; pp.147–150 Hestia usa el folleto, un carruaje y la indicación de Freya para localizar a Bell.
- **Continuidad:** se amplían eventos existentes de Freya/Loki/Ais, entrega de la daga y encuentro Bell/Hestia. El monedero de Seal sigue sin devolverse en p.150; no se crea un evento duplicado.
- **Visual:** diez páginas de texto continuo, sin ilustraciones ni tablas de Estado.
- **Siguiente folio:** PDF p.151.

## DMR-061 — segunda pasada V1 · PDF pp.151–156 (2026-10-31)

- **Resultado:** tres controles completados por página: extracción; render a 130 dpi e inspección visual; continuidad, relaciones y duplicados. No se necesitó cuarta pasada correctiva.
- **Hallazgos:** pp.151–155 desarrollan la salida de Bell y Hestia durante la búsqueda de Seal. p.154 es una ilustración monocroma a página completa de ambos compartiendo un crepe. p.156 inicia el espectáculo del Coliseo con un Battle Jabalí de unos dos metros y una domadora anónima de Ganesha Familia.
- **Continuidad:** se amplía EVT-DM-V01-BELL-HESTIA-FESTIVAL-DATE-001; se reutiliza MON-DM-BATTLE-JABALI-001. El monedero de Seal aún no se entrega. No se crean personajes, monstruos ni eventos duplicados.
- **Cobertura:** queda completada la pasada 2 de pp.9–156. Las pp.157–214 conservan las tres pasadas anteriores ya documentadas.
- **Siguiente fase:** pasada 3 integral de pp.9–156, empezando en p.9, más reconciliación de la pasada 1 con matriz de cobertura. DMR-062 mantiene sus tareas independientes. V1 continúa IN_PROGRESS.
- **Fuente:** DMR-061-SRC-001, traducción privada española no cotejada con japonés. PDF físico de 215 folios: p.8 blanca, p.214 último folio narrativo, p.215 créditos.


## DMR-061 — cierre de segunda pasada y reparación de catálogo · CI post-commit (2026-10-31)

- **Integración en main:** commit 090f15bb55cd49105f77fea39143b28daec95176 cerró la segunda pasada de pp.151–156, sincronizó la cola y añadió al catálogo dos eventos preexistentes que ya estaban en la cronología y tenían archivos Markdown. No se crearon acontecimientos nuevos.
- **Métricas:** commit d698c1907f5a1114adc95919b8355fd8505fd11a sincronizó el bloque generado de métricas con el catálogo, que pasó a 233 registros.
- **CI post-commit sobre SHA exacto d698c1907f5a1114adc95919b8355fd8505fd11a:** Validate WordWaifu #3851 y DanMachi Lore and Retrieval Integrity #2229, ambos success. Pasaron validación temporal y enlaces de eventos, métricas generadas, pruebas de catálogo/retrieval y smoke test de navegador.
- Los fallos de los intentos anteriores no se ocultan: el primero detectó dos registros ausentes del catálogo; tras repararlos, el segundo detectó métricas desactualizadas. Ambos problemas se corrigieron y los dos workflows pasaron sobre el SHA indicado.

## DMR-061 — tercera pasada V1 · PDF pp.9–18 (2026-10-31)

- **Resultado:** tres controles por folio completados: contraste de extracción, inspección visual del PDF físico y auditoría de continuidad/duplicados. Revisión correctiva específica en p.18 por ambigüedad de la traducción.
- **Visual:** p.12 ilustración del rescate; p.15 portadilla ilustrada del capítulo 1; restantes páginas del bloque son texto. No hay tablas de Estado.
- **Hallazgos:** Bell formula su fantasía heroica inicial; el rescate identifica textualmente a Aizu Wallenstein (nivel 5, Loki Familia); p.16 describe a Eina como mezcla de humana y elfa y recuerda a Bell con 14 años en su registro; p.18 recoge su consejo de seguridad.
- **Continuidad:** se amplían fichas/eventos existentes. La frase sobre el piso habitual del Minotauro permanece abierta; no se inventa una técnica de corte ni reciprocidad de Ais.
- **Siguiente folio:** PDF p.19. La tercera pasada de pp.19–156 y la reconciliación de la pasada 1 siguen pendientes. V1 continúa IN_PROGRESS.


## DMR-061 — tercera pasada V1 · PDF pp.19–28 (2026-10-31)

- **Resultado:** tres controles completados por folio: contraste de extracción, inspección visual del PDF físico a 130 dpi y auditoría de continuidad.
- **Visual:** p.22 es una ilustración de Eina contextualizada por la conversación de pp.19–21; las restantes páginas del bloque son texto. No hay tablas de Estado.
- **Hallazgos:** Eina informa a Bell sobre la situación sentimental de Ais y lo anima a progresar; Bell recibe 1200 Varisu por piedras de Goblins y Dríadas; pp.23–24 desarrollan el papel del abuelo y el libro favorito de Bell; pp.24–26 describen la iglesia y la habitación subterránea; pp.27–28 explican las Familias, la Gracia y la limitación del Poder Divino.
- **Continuidad:** se reutilizan el expediente de asesoramiento de Eina, las fichas de Bell/Hestia y LOC-HESTIA-HOME. No se crea una segunda escena de primer encuentro con Hestia. Las reglas nuevas se anotan como fuente parcial, no como sistema exhaustivo.
- **Procedencia:** DMR-061-SRC-001, traducción privada no cotejada con japonés.
- **Siguiente folio:** PDF p.29. La tercera pasada integral de pp.29–156 y la reconciliación de la pasada 1 continúan pendientes; V1 permanece IN_PROGRESS.

## Evidencia CI — tercera pasada inicial de DMR-061 (pp.9–18)

- **Commit:** ee3307983ce95fb1d98940ff904205da8169facb.
- **Validate WordWaifu #3852:** success.
- **DanMachi Lore and Retrieval Integrity #2230:** success.
- Ambos workflows pasaron validación de JavaScript, métricas/catálogo, continuidad temporal, integridad del lore y smoke test de navegador sobre el SHA citado.


## DMR-061 — tercera pasada V1 · PDF pp.29–38 (2026-10-31)

- **Resultado:** tres controles por página completados (extracción, inspección visual física y continuidad). Cuarta revisión correctiva en pp.34–36 para separar el Estado que Bell recibe de la Habilidad revelada desde la perspectiva de Hestia.
- **Visual:** p.33 contiene la tabla física del Estado; p.37 es ilustración a página completa de apertura del capítulo 2, con figura no identificada; ocho páginas restantes son texto.
- **Hallazgos:** p.29 amplía el primer encuentro Bell–Hestia y la promesa personal de Bell; pp.30–36 contienen el primer Estado posterior al Minotauro y la revelación de [Deseo Inquebrantable] solo al lector; p.38 describe la lámpara de Piedra Mágica y la rutina doméstica en la base subterránea.
- **Continuidad:** se amplían eventos existentes; no se crea un nuevo primer encuentro ni una nueva actualización de Estado. La Falna inicial del epílogo, la actualización de pp.30–36, la segunda actualización de pp.91–96 y la entrega de la daga de pp.193–196 siguen separadas.
- **Precauciones:** el pasaje p.29 solo dice que Hestia descendió «recientemente», sin intervalo medible; el plazo recordado de medio año no queda confirmado. Las afirmaciones de Hestia sobre matrimonios entre Familias y costumbres raciales quedan atribuidas, no universalizadas.
- **Siguiente folio de tercera pasada:** PDF p.49. Restan pp.49–156 (108 folios) para completar la tercera pasada; la reconciliación de pasada 1 sigue pendiente. V1 permanece IN_PROGRESS.

## Evidencia CI · checkpoint anterior

Sobre SHA 4423efcfc55920b02fdf949927ae7a4033bf1033:
- [Validate WordWaifu #3853](https://github.com/jonhararagi/wordwaifu/actions/runs/41185474561): success.
- [DanMachi Lore and Retrieval Integrity #2231](https://github.com/jonhararagi/wordwaifu/actions/runs/41185474555): success.



## DMR-061 — tercera pasada V1 · PDF pp.39–48 (2026-10-31)

- **Resultado:** tres controles por página completados: extracción, inspección visual del PDF físico y auditoría de continuidad. Cuarta revisión correctiva en pp.42–43 y p.48.
- **Visual:** p.40 es ilustración completa de Bell y Hestia; p.43 lleva una nota al pie del traductor sobre el término «riñonera». Las otras ocho páginas son texto; no hay tablas de Estado.
- **Hallazgos:** Bell sale de la base al amanecer y olvida desayunar; Seal Flover le devuelve una Piedra Mágica, le ofrece pan y queso y obtiene su aceptación para cenar esa noche; p.46 sitúa la existencia del Dungeon antes del descenso de los dioses y menciona personas antiguas que luchaban sin Gracia; pp.47–48 inician el combate contra ocho Kobolds en el primer piso.
- **Continuidad:** se reutilizan los eventos existentes de encuentro con Seal y combate con Kobolds, además de sus fichas. La mirada de p.42 no se atribuye a Seal; el origen de la Piedra Mágica no se inventa; la cifra de bajas de p.48 permanece abierta.
- **Equipo:** Bell declara llevar una sola arma, una daga de 20 cm. No es la futura Daga de Hestia.
- **Checkpoint:** tercera pasada completada pp.9–48; próxima página PDF p.49. Restan pp.49–156 (108 folios) de la tercera pasada. La reconciliación de la pasada 1 sigue pendiente; V1 permanece IN_PROGRESS.
- **Procedencia:** DMR-061-SRC-001, traducción privada no cotejada con japonés.

## Evidencia CI — checkpoint anterior 79adcaf6cf244a6867a1b518e7106dd45408fbb6

- [Validate WordWaifu #3854](https://github.com/jonhararagi/wordwaifu/actions/runs/41186194780): success.
- [DanMachi Lore and Retrieval Integrity #2232](https://github.com/jonhararagi/wordwaifu/actions/runs/41186194814): success.


## DMR-061 — tercera pasada V1 · PDF pp.49–58 · 2026-10-31

- **Estado:** tres pasadas completas por cada folio (extracción, visual y continuidad); cuarta revisión correctiva puntual en pp.49–58 por ambigüedad de bajas, alcance de reglas, conocimiento de Bell, actualización de Estado e identidad de personal.
- **Visual:** pp.49–58 renderizadas e inspeccionadas individualmente a 130 dpi. Las diez son páginas de texto; p.54 contiene la tabla de Estado, cuyos valores coinciden con la extracción. No se observan ilustraciones ni notas al pie en el bloque.
- **pp.49–51:** termina la lucha de Kobolds; Bell relata que no tiene heridas y adopta una estrategia de menor riesgo. Recupera Fragmentos de Piedra Mágica y una garra como botín. La cifra final de bajas permanece ambigua.
- **pp.52–53:** se registran explicaciones sobre el Dungeon y la gestión por la Guild, con separación expresa entre narración, información oída e hipótesis de Bell. Bell derrota a un Goblin y recoge un diente; su teoría sobre monstruos fuera de Orario y reproducción no se eleva a regla.
- **p.54:** tabla: Fuerza I82→H120; Resistencia I13→I42; Destreza I96→H139; Agilidad H172→G225; Magia I0. Se reutiliza el evento de segunda actualización del Estado. La discrepancia H120 (p.54) / H123 (valor anterior en p.91) continúa abierta.
- **pp.55–56:** Bell no comprende el incremento de Resistencia; Hestia no revela la causa. Su mención de una fiesta en el trabajo no se identifica con el Banquete de Ganesha.
- **pp.57–58:** Bell llega a La Señora de la Abundancia y Seal lo recibe. Se reutiliza la visita nocturna que continúa en pp.57–72; no se duplica el primer encuentro con Seal ni el regreso y disculpa de pp.98–100. No se asignan nombres a las trabajadoras anónimas.
- **Registros ampliados:** evento de Kobolds y ficha MON-DM-KOBOLD-001; guía conceptual DM-GUILD-001; reglas de monstruos y Piedras Mágicas; evento de la visita de Bell a la taberna con Seal incluida en sus participantes.
- **Checkpoint:** tercera pasada completada pp.9–58 (50 folios). Próxima página física PDF p.59. Restan pp.59–156 (98 folios) en tercera pasada. La reconciliación integral de la pasada 1 sigue pendiente. V1 permanece IN_PROGRESS; traducción privada no cotejada con japonés.


## DMR-061 — tercera pasada V1 · PDF pp.59–68 · 2026-10-31

- **Estado:** tres controles por folio completados (extracción, visual física y continuidad); revisión correctiva puntual en p.62 y pp.67–68.
- **pp.59–62:** Bell cena en La Señora de la Abundancia. Seal revela que pidió a Mia tratarlo con hospitalidad. Bell calcula unos 4.400 Varisu de ingresos ese día; su daga actual costó 3.600 Varisu mediante préstamo del Gremio, deuda que dice haber saldado. La jefa aparece nombrada solo como «Mia» en esta continuidad; no se importa el perfil de adaptación ni el apellido Grand. Mia fue aventurera, construyó el local y permanece semiactiva en su Familia con permiso de su dios, según el diálogo.
- **pp.63–66:** entran miembros de la Familia Loki y Ais relata el incidente de los Minotauros. El episodio del piso 17 y la persecución hasta el quinto piso son contexto retrospectivo del rescate ya registrado; no se crea un evento nuevo.
- **pp.67–68:** Riveria reprende a Bete. Ais considera normal que Bell tuviera miedo dadas las circunstancias; no se confirma reciprocidad romántica. El rechazo explícito se refiere a Bete. Bell sale del local.
- **Continuidad:** se amplía EVT-DM-V01-BELL-HEARS-LOKI-RETELL-MINOTAUR-001 y se reutiliza EVT-DM-BELL-AIS-MINOTAUR-001. No se crean IDs de evento, personaje, lugar u objeto. La daga que Bell ya posee permanece separada de la Daga de Hestia. Las voces y la empleada no identificadas siguen anónimas.
- **Visual:** diez páginas de texto inspeccionadas individualmente a 130 dpi; sin ilustraciones, tablas, diagramas ni notas al pie.
- **Checkpoint:** tercera pasada completada pp.9–68 (60 folios). Próxima página PDF p.69; restan pp.69–156 (88 folios). La pasada 2 pp.9–156 está completada. La reconciliación de la pasada 1 sigue pendiente. V1 continúa IN_PROGRESS y DMR-061-SRC-001 no se ha cotejado con japonés.



## Evidencia de integración · PR #224 · DMR-061 pp.59–68

- **PR:** [#224](https://github.com/jonhararagi/wordwaifu/pull/224), integrado mediante squash.
- **SHA exacto de main:** 890df8bd16a75b3368957159b80e1e546e8a43b7.
- **CI de PR, sobre f5466fffd6c8ca2260c94567265cbf1bb4ac196b:** [Validate WordWaifu #41191070911](https://github.com/jonhararagi/wordwaifu/actions/runs/41191070911) y [DanMachi Lore and Retrieval Integrity #41191070961](https://github.com/jonhararagi/wordwaifu/actions/runs/41191070961), ambos success.
- **CI post-merge, sobre el SHA exacto de main:** [Validate WordWaifu #41191262262](https://github.com/jonhararagi/wordwaifu/actions/runs/41191262262) y [DanMachi Lore and Retrieval Integrity #41191262276](https://github.com/jonhararagi/wordwaifu/actions/runs/41191262276), ambos success.

## DMR-061 — tercera pasada V1 · PDF pp.69–78 · 2026-10-31

- **Estado:** tres controles por folio completados; cuarta revisión puntual en pp.72 y 78.
- **pp.69–72:** Ais observa la marcha de Bell y Loki la distrae con su contacto físico; Bete acaba atado mientras Riveria le pisa la cabeza. Bell corre hacia Babel/Dungeon y dirige la vergüenza contra su propia debilidad, no contra Bete. «Esa persona» se conserva sin identificar.
- **p.73:** portadilla ilustrada del capítulo 3, «La Noche Antes del Despertar» en la traducción; silueta sin identidad asignada.
- **pp.74–76:** Eina y Misha trabajan hasta tarde en la sede del Gremio durante la lluvia y la gestión del Festival. Eina considera peligroso que Bell avance al quinto piso sin preparación suficiente; su frase de no dejarlo avanzar es una intención como asesora, no una regla institucional. Misha no recibe ficha individual; la interacción amplía el evento de asesoramiento ya existente.
- **p.76:** Bell mata un Frog Shooter. Se actualiza MON-DM-FROG-SHOOTER-001 con el ojo grande único y la lengua larga. La nota al pie sobre «Rana Tiradora» se conserva como comentario del traductor.
- **pp.77–78:** Bell sigue cazando monstruos con el equipo dañado, alcanza el sexto piso sin proponérselo y llega a un callejón sin salida. El sonido «Bikiri» cierra p.78; su causa se deja abierta hasta revisar pp.79–85.
- **Visual:** diez páginas inspeccionadas; ilustraciones en pp.70 y 73, nota al pie en p.76; no hay tablas.
- **Checkpoint:** tercera pasada completada pp.9–78 (70 folios). Próxima página física PDF p.79; restan pp.79–156 (78 folios). La pasada 2 pp.9–156 está completada. La reconciliación de la pasada 1 sigue pendiente. V1 continúa IN_PROGRESS y DMR-061-SRC-001 no se ha cotejado con japonés.



## Evidencia de integración · PR #225 · DMR-061 pp.69–78

- **PR:** [#225](https://github.com/jonhararagi/wordwaifu/pull/225), integrado mediante squash.
- **SHA exacto de main:** 23cd07e803cf4e5bc3f917a23e3d6c5e368119cd.
- **CI de PR, sobre e920f818ebb69d88f3916da279105017e25bfa62:** [Validate WordWaifu #41191511344](https://github.com/jonhararagi/wordwaifu/actions/runs/41191511344) y [DanMachi Lore and Retrieval Integrity #41191511369](https://github.com/jonhararagi/wordwaifu/actions/runs/41191511369), ambos success.
- **CI post-merge, sobre el SHA exacto de main:** [Validate WordWaifu #41191716820](https://github.com/jonhararagi/wordwaifu/actions/runs/41191716820) y [DanMachi Lore and Retrieval Integrity #41191716801](https://github.com/jonhararagi/wordwaifu/actions/runs/41191716801), ambos success.

## DMR-061 — tercera pasada V1 · PDF pp.79–88 · 2026-10-31

- **Estado:** tres controles por folio completos; cuarta revisión correctiva en pp.83–85 y pp.87–88.
- **pp.79–85:** aparecen War Shadows desde las paredes del sexto piso. Bell combate contra dos; golpea con el puño el rostro-espejo de la primera, que cae de rodillas sin confirmación expresa de destrucción de Piedra Mágica. La segunda muere cuando Bell le rompe la Piedra Mágica con la daga. Nacen cuatro War Shadows adicionales y monstruos del quinto piso bloquean la única salida. Bell recoge un «Dedo de War Shadow» y decide seguir luchando; el desenlace queda fuera de estas páginas.
- **p.86:** ilustración monocroma a página completa del capítulo 4, «Así que quería convertirme en su fuerza» en la traducción. Figura de cabello claro con copa, sin identidad asignada.
- **p.87:** Hestia lleva la noche buscando a Bell y, a las 5:00 a. m., vuelve a casa sin haberlo localizado. Sus celos, culpa y temor a un incidente se registran como pensamientos propios, no como hechos objetivos.
- **p.88:** Bell vuelve embarrado, exhausto y herido; tiene pantalones rotos y tres marcas de garra en la rodilla derecha con sangre seca. Admite que entró al Dungeon, pero no cuenta qué ocurrió ni cómo salió.
- **Continuidad:** se amplía MON-DM-WAR-SHADOW-001. No se crea todavía evento cerrado para la lucha: p.85 termina con Bell empezando otra fase de combate. La búsqueda de Hestia y el regreso de Bell siguen hasta pp.89–90; se decidirá el evento una vez terminada la tercera pasada de ese tramo. No se fusiona con la actualización de Estado pp.91–97.
- **Visual:** p.79 tiene nota al pie 2 («Sombra de Guerra»); p.86 es la única ilustración de página completa; las demás páginas son texto. Sin tablas ni cuadros de Estado.
- **Checkpoint:** tercera pasada completada pp.9–88 (80 folios). Próxima página física PDF p.89; restan pp.89–156 (68 folios). La pasada 2 pp.9–156 permanece completada. La reconciliación integral de la pasada 1 sigue pendiente. V1 continúa IN_PROGRESS; DMR-061-SRC-001 no se ha cotejado con japonés.

 

## DMR-061 — tercera pasada V1 · PDF pp.89–98 · 2026-10-31

- **Estado:** tres controles por folio; cuarta revisión en pp.91, 93–96 y p.98.
- **pp.89–90:** Hestia deja de interrogar a Bell, lo ayuda a caminar por la rodilla herida y le ofrece su cama. Bell acepta literalmente la broma de dormir juntos y dice que quiere hacerse más fuerte.
- **pp.91–97:** nueva actualización del Estado. Lv.1; Fuerza H123→G221, Resistencia I42→H101, Destreza H139→G232, Agilidad G225→F313, Magia I0. [Deseo Inquebrantable] permanece oculta para Bell. Se conserva H120 (p.54)/H123 (valor anterior p.91) como discrepancia abierta. Hestia y Bell prometen prudencia y apoyo mutuo.
- **p.98:** Bell vuelve a La Señora de la Abundancia y pregunta por Seal y la jefa. Dos empleadas sin nombre lo reconocen. La nota sobre «nekomusume» se conserva como nota del traductor.
- **Eventos:** nuevo evento de búsqueda/cuidado pp.87–90; ampliación del evento de actualización pp.91–97; ampliación del regreso a Seal con p.98 únicamente. No se fusionan.
- **Visual:** bloque del Estado en p.91; nota al pie en p.98; sin ilustraciones.
- **Checkpoint:** tercera pasada pp.9–98 (90 folios); siguiente p.99; restan 58 folios. Pasada 2 pp.9–156 completada; reconciliación de pasada 1 pendiente. V1 IN_PROGRESS; traducción privada no cotejada con japonés.

 

## DMR-061 — tercera pasada V1 · PDF pp.99–108 · 2026-10-31

- **Resultado:** tres controles completos por folio; cuarta revisión correctiva puntual en pp.101, 105, 107 y 108.
- **pp.99–102:** Bell devuelve a Seal el dinero que debía, acepta una cesta de comida y recibe de Mia-mama un consejo centrado en sobrevivir y no intentar parecer genial. Mia-mama menciona a una elfa llamada Ryu, sin confirmar qué acción habría tomado. Bell sale de la tienda en p.102; después del separador comienza una descripción nocturna de Orario.
- **pp.102–103:** la descripción de la muralla circular, la ciudad iluminada con Lámparas de Piedra Mágica y Babel en el centro coincide con las fichas existentes LOC-ORARIO y Babel. No se añadieron coordenadas ni relaciones espaciales nuevas.
- **pp.104–105:** comienza el Banquete de Ganesha en el recinto «Yo Soy Ganesha», con una estatua de elefante de unos 30 metros. Ganesha anuncia la Philia dentro de tres días. Hestia asiste y come en el buffet; las bromas y rumores de otros dioses sobre su posible empleo permanecen como comentarios no confirmados.
- **pp.106–108:** reencuentro Hestia–Hephaistos, recuerdo de la ayuda previa y llegada de Freya. p.107 contiene dos notas al pie del traductor. La diosa de cabello y ojos escarlata que aparece al final de p.108 no se identifica todavía.
- **Eventos:** se amplía el evento existente de regreso a Seal (pp.98–102) y el Banquete de Ganesha (pp.104–115). No se crean IDs nuevos; el Banquete no se fusiona con el encuentro Freya–Loki–Ais del Festival (pp.139–145).
- **Visual:** diez páginas de texto; no hay ilustraciones, tablas ni diagramas. Dos notas al pie en p.107.
- **Checkpoint:** tercera pasada completada pp.9–108 (100 folios). Siguiente página PDF p.109; restan 48 folios. La pasada 2 pp.9–156 sigue completa; la reconciliación de la pasada 1 sigue pendiente. V1 permanece IN_PROGRESS; traducción privada no cotejada con japonés.



## DMR-061 — tercera pasada V1 · PDF pp.109–118 · 2026-10-31

- **Resultado:** tres controles completos por página; cuarta revisión correctiva puntual en pp.110–113, p.115, p.116 y p.118.
- **pp.109–113:** Loki se reúne con Hestia, Hephaistos y Freya; Hestia pregunta por Ais y Loki hace afirmaciones enfáticas sobre ella. El intercambio de burlas termina en un forcejeo cómico. Freya comenta que Loki parece más dulce que antes; después dice que ya confirmó lo que quería escuchar y se marcha. No se infiere reciprocidad de Ais ni espionaje de Freya.
- **pp.114–115:** Hestia recuerda su objetivo y pide a Hephaistos un arma para Bell. Se registra por separado de la aceptación/forja posterior y de la entrega física.
- **p.116:** ilustración monocroma a página completa, con figura no identificada; no se atribuye a ningún personaje por apariencia.
- **pp.117–118:** inicia el capítulo 5 y la secuencia de combate de Bell contra Goblin y Dungeon Lizard. La criatura cae tras recibir una puñalada, pero Bell no sabe si dañó la Piedra Mágica. La mochila golpea al Goblin al final de p.118; el desenlace queda para p.119.
- **Eventos y fichas:** ampliados los eventos existentes del Banquete, la petición de arma y el combate en Dungeon; se reutilizan Loki, Freya, Hephaistos, Hestia, Dungeon Lizard y Goblin. No se crean IDs nuevos.
- **Visual:** p.116 es la única ilustración del bloque; no hay tablas ni notas al pie.
- **Checkpoint:** tercera pasada completada pp.9–118 (110 folios). Siguiente página PDF p.119; restan 38 folios. La pasada 2 pp.9–156 sigue completa; la reconciliación de la pasada 1 sigue pendiente. V1 permanece IN_PROGRESS; traducción privada no cotejada con japonés.


## DMR-061 — tercera pasada V1 · PDF pp.119–128 · 2026-10-31

- **Resultado:** tres controles completos por página; cuarta revisión correctiva puntual en p.119, pp.121–123, p.125, p.126 y p.128.
- **p.119:** la mochila derriba al Goblin y Bell confirma el fin del combate. La rodilla derecha ya se mueve completamente y Bell la considera curada. Percibe un aumento de capacidad, sin nuevos valores de Estado. Recupera fragmentos de Piedra Mágica de ambos monstruos y piensa en una persona que no nombra.
- **p.120:** regresa del cuarto al primer piso, vence encuentros menores con Goblins y Kobolds, y llega al vestíbulo subterráneo de Babel. Recuerda que Hestia está fuera desde hace dos días.
- **pp.121–123:** observa cajas de transporte con ruedas; una se mueve y emite un rugido, por lo que Bell sospecha que contiene un monstruo, sin confirmarlo. Oye que Ganesha Familia prepara el Festival de Monstruos y ve a Eina trabajando en el Gremio; no la interrumpe. Completa su trámite y sale de noche.
- **p.123–124:** se confirman las ocho avenidas radiales y el papel de la Calle Principal del Noreste. Los datos ya estaban incorporados a LOC-ORARIO; no se añaden coordenadas.
- **pp.124–127:** Bell se encuentra con Miach. Este confirma que no asistió al Banquete pese a haber sido invitado y entrega a Bell dos pociones de recuperación recién preparadas como cortesía. Bell las guarda en la funda de la pierna izquierda.
- **p.126:** ilustración monocroma de página completa, con una figura de cabello oscuro frente a Bell; no se le asigna identidad por apariencia.
- **p.127:** reflexión sobre la variedad de actividades comerciales y productivas de las Familias; se conserva como exposición narrativa, no como definición jurídica.
- **p.128:** Bell observa una daga blanca hecha con dientes de monstruo en el escaparate de Hephaistos Familia. Es demasiado cara para él; no la compra y no se identifica con la Daga de Hestia.
- **Eventos y fichas:** se amplían los eventos existentes de combate, preparativos del Festival y entrega de pociones. Se reutilizan Bell, Miach, Eina, Hephaistos, Ganesha Familia, Orario y Babel. No se crean IDs nuevos.
- **Visual:** p.126 es la única ilustración; no hay tablas ni notas al pie.
- **Checkpoint:** tercera pasada completada pp.9–128 (120 folios). Siguiente página PDF p.129; restan 28 folios. La pasada 2 pp.9–156 sigue completa; la reconciliación integral de la pasada 1 sigue pendiente. V1 permanece IN_PROGRESS; traducción privada no cotejada con japonés.


## DMR-061 — tercera pasada V1 · PDF pp.129–138 · 2026-10-31

- **Resultado:** tres controles completos por folio; cuarta revisión correctiva puntual en pp.130–134, p.135 y pp.136–138.
- **pp.129–134:** Hestia mantiene la dogeza; Hephaistos recuerda por qué rechazó la petición y termina aceptando fabricar el arma. La deuda debe pagarse íntegra, aunque tarde décadas o siglos. Selecciona mithril y martillo carmesí y decide hacer ella misma la forja con ayuda de Hestia. En p.134 aún está resolviendo cómo equilibrar poder y crecimiento de Bell.
- **p.135:** Bell planea volver al Dungeon y dirigirse al quinto piso con la pierna recuperada. Cree que su Estado mejoró, pero no hay cifras nuevas ni se confirma que haya entrado o combatido.
- **pp.136–138:** Anya entrega a Bell el monedero que Seal olvidó al salir en su día libre hacia el Festival de Monstruos. Ryuu completa la explicación y habla de la domesticación en el Festival anual de Ganesha Familia. Bell acepta llevar el monedero por la Calle Principal del Este; la entrega a Seal aún no sucede.
- **Eventos y fichas:** se amplía el evento existente de petición/forja y se reutilizan fichas de Hestia, Hephaistos, Bell, Anya, Ryuu y Seal. No se crea evento de devolución ni se transfieren datos de otras continuidades.
- **Visual:** las diez páginas son texto continuo; sin ilustraciones, tablas o notas al pie.
- **Checkpoint:** tercera pasada completada pp.9–138 (130 folios). Siguiente página PDF p.139; restan 18 folios. La pasada 2 pp.9–156 sigue completa; la reconciliación integral de la pasada 1 sigue pendiente. V1 permanece IN_PROGRESS; traducción privada no cotejada con japonés.


## DMR-061 — tercera pasada V1 · PDF pp.149–156 · 2026-10-31

- **pp.149–155:** Freya indica a Hestia dónde cree haber visto a Bell; Hestia lo encuentra y pasan juntos parte del Festival. Bell mantiene presente el encargo de devolver el monedero de Seal; Hestia propone combinar la búsqueda con la salida. Comparten crepes y ella le pide que le limpie la mejilla. No se registra la devolución del monedero ni una relación formal.
- **p.154:** ilustración monocroma de Bell y Hestia compartiendo el crepe, coherente con el texto.
- **p.156:** empieza una escena paralela en el Coliseo: una domadora no identificada de Ganesha Familia intenta domar un Battle Jabalí de unos dos metros ante 50.000 espectadores. Eina y el personal del Gremio realizan tareas de admisión y orientación; el Gremio dirige la planificación.
- **Eventos y perfiles:** se amplía el evento existente Bell–Hestia y se actualizan Hestia, Bell, Freya y Eina. La escena de domar al Battle Jabalí queda registrada en DMR-061 y la ficha de Eina; no se crea un evento paralelo prematuramente ni IDs nuevos.
- **Límites:** Freya no explica su motivo al orientar a Hestia; no se demuestra engaño. No identificar a la domadora. La daga sigue sin entregarse a Bell. La traducción privada no se ha cotejado con japonés.
- **Visual:** ocho páginas inspeccionadas individualmente a 130 dpi; p.154 es ilustración; no se aprecian tablas ni notas al pie.
- **Checkpoint:** tercera pasada completada pp.9–156 (148 folios). Pasada 2 pp.9–156 completa. Reconciliación integral de pasada 1 pendiente. V1 permanece IN_PROGRESS.


## Auditoría V1 — reconciliación focal de PDF pp.1–10 (2026-11-01)

- **PDF original localizado y comprobado:** `Volumen [01] • DanMachi.pdf`, 7.495.544 bytes; inspección del archivo físico confirma 215 páginas. El folio p.8 está completamente en blanco; el indexador de Files omite ese folio y por eso presenta 214 páginas.
- **Inspección visual:** pp.1–7 renderizadas y revisadas; p.1 cubierta, pp.2–5 ilustraciones (p.3 rotula Hestia/Loki/Freya; p.4 rotula Hephaistos; p.5 no rotula a las dos figuras), p.6 portadilla gráfica y p.7 portadilla de prólogo. p.8 blanca. pp.9–10 son páginas de texto, sin ilustraciones.
- **Contenido narrativo:** p.9 registra la fantasía heroica inicial de Bell (rescate, vínculos con mujeres de distintas razas y harén) como pensamiento inmaduro contextual, no rasgo absoluto. p.10 lo sitúa como aventurero Lv.1 perseguido por el Minotauro tras descender del segundo al quinto piso y quedar acorralado.
- **Incorporación existente comprobada:** estos datos ya aparecen en la tercera pasada de DMR-061, en `EVT-DM-BELL-AIS-MINOTAUR-001` y en la sección de apertura `CONT-MAIN-LN` de `characters/bell-cranel.md`. No se creó evento ni ficha duplicada.
- **Límite:** no se pudo recuperar el texto del Markdown fuente desde la API de GitHub (blob `d2b3306b1661584d9a42d651f57dca8a6814b20b`); por ello, la comparación directa MD↔PDF de pp.1–10 sigue pendiente. La revisión PDF↔registros funcionales de pp.9–10 sí queda documentada.
- **Estado global:** pp.1–10 reconciliadas contra el PDF y los registros existentes, excepto el cotejo textual directo con el MD; la matriz global de pasada 1 para el resto del volumen sigue pendiente. V1 continúa `IN_PROGRESS`.

## DanMachi V1 — auditoría y trazabilidad documental (2026-11-01)

- **Rama y HEAD de inicio del ciclo:** main, d0e56517ff10c5bd8c73ac65284095609f451a16. Los cambios de documentación se integraron después directamente en main, sin crear ramas.
- **Pasadas:** P2 y P3 de PDF pp.9–156 documentadas como completas; pp.157–214 conservan tres pasadas. P1 pp.9–156 no está certificada globalmente: requiere reconciliación folio por folio. pp.9–10 tienen revisión focal del PDF y registros funcionales; el cotejo directo del MD queda pendiente.
- **PDF:** fuente física localizada y verificada, 215 páginas. pp.1–7 front matter visual inspeccionado; p.8 blanca; pp.9–10 texto; p.215 créditos. DMR-061 contiene registros posteriores de visualización de pp.19–24 y 49–54, que cierran esos pendientes antiguos de DMR-062.
- **Matriz DMR-062:** 14 hallazgos priorizados: 9 COMPLETE, 2 PARTIAL, 2 CONTRADICTORY, 1 UNRESOLVED, 0 MISSING y 0 SECONDARY_ONLY. No es un censo de todos los hallazgos del volumen.
- **Cambios implementados en main:** ficha individual OBJ-DM-HESTIA-DAGGER-001 y enlace al índice de equipo; actualización de la cobertura de La Señora de la Abundancia (LOC-HOSTESS); corrección del estado de las ocho avenidas en CONT-MAIN-LN; sincronización de source_refs/localizadores de Ais y Eina; matriz de trazabilidad DMR-062 y sincronización de WORK_QUEUE/MASTER_INDEX.
- **Discrepancias abiertas:** Bell Fuerza H120 (p.54) frente a H123 (columna anterior de p.91); Agilidad D512 narrativa (p.195) frente a D521 visual (p.208); ambigüedad del piso habitual del Minotauro en p.18; diferencias descriptivas de Seal entre pp.42,165,204. No normalizar por inferencia.
- **Fuente MD:** blob d2b3306b1661584d9a42d651f57dca8a6814b20b existe en main, pero la API de GitHub no entrega su contenido por tamaño/lectura. El cotejo integral MD↔PDF sigue pendiente; no se declara completado.
- **Pruebas y CI:** no se ejecutaron tests locales. Consultas de estado/checks del SHA de esta tanda no han devuelto evidencia de CI; no afirmar CI verde. Pendiente validar los commits documentales en workflows de main si la plataforma produce runs/checks.
- **Estado de cierre:** V1 permanece IN_PROGRESS / PARTIAL. No comenzar V2.

### Commits de esta tanda

- Daga de Hestia: 68af980c646b2c7c34a9d83865130411dd32ed0d.
- Índice de equipo: 6269f4b7dea11cd105144048eb90e1b596a7e02a.
- Matriz DMR-062: 7da37be0b5bd23f53aaafdd61521d9eab81379c3 y actualización e6413e9b43ff8a3c5e1dac8ed62bf0db8e78e068.
- DMR-061 matriz de cobertura: 4969401508c476a04dac936bbe581f89fbb3996a.
- WORK_QUEUE: 45bd70d1696fc1cb4bfb86bb0748a16af1adab58.
- MASTER_INDEX: 7fd6f7b5e8a3dba96617a6f76c11757ea66a542a.
- Lugar La Señora de la Abundancia: 1051b5f9c1724dd6afb85adee398fd7cc11b50e2; índice de lugares: 3180ec2e9afdfdd90253dbd60b005cc90251f26c.
- Ais: 49da0090229829d76eca98cab9a0c493299bc416; Eina: 2f42dfe2b5ba7a28b42b1998b404588d4336dc77.

## CI observado durante la auditoría V1 — 2026-11-01

Sobre el SHA de main `926adcec167d4b3645d4769dfaab2023f29a3994` se iniciaron automáticamente:
- [Validate WordWaifu #41327734686](https://github.com/jonhararagi/wordwaifu/actions/runs/41327734686) — `in_progress` en la última consulta.
- [DanMachi Lore and Retrieval Integrity #41327734707](https://github.com/jonhararagi/wordwaifu/actions/runs/41327734707) — `in_progress` en la última consulta.

Los pasos previos visibles en Validate incluían syntax, catalog IDs/relations, generadores, import validation, character dossiers, roster coverage, lore IDs/links y sus pruebas asociadas; estaban en success. En Lore estaban en success los pasos de retrieval/abstention, timeline/continuity, event links, archive model, Hostess/Guild graph y Prototype location separation; el browser smoke y la validación final de catálogo/enlaces seguían en ejecución. No se declara el workflow completo como success mientras GitHub no publique la conclusión final.

**Tests locales:** no ejecutados; la conexión de esta sesión permite leer/escribir GitHub, pero no proporciona un checkout ejecutable del repositorio local. **CI:** los workflows anteriores son evidencia de ejecución en GitHub, no un resultado final aún.

## DMR-061 — avance de reconciliación P1 · 2026-11-01

- **PDF pp.9–18:** reconciliadas con fichas/eventos funcionales; no se detectó ausencia sustantiva. La frase traducida de p.18 sobre el piso habitual del Minotauro permanece UNRESOLVED.
- **PDF pp.19–28:** reconciliadas con fichas/eventos/reglas/lugar existentes. Se detectaron y corrigieron dos omisiones factuales: valoración de la esgrima de Ais y elogio «Aizu no tiene paralelo en el mundo» reportado en p.19; motivo concreto del menor ingreso de Bell (menos tiempo en Dungeon al huir de Ais) en p.21. Se añadió también el diálogo del «gran barco» de p.26 como metáfora no interpretada literalmente.
- **IDs:** no se crearon eventos, personajes ni relaciones nuevas para pp.9–28; se reutilizaron Bell, Ais, Eina, Hestia, Minotauro y los expedientes existentes.
- **Siguiente bloque P1:** PDF pp.29–38. No repetir P2/P3 de ese rango.
- **Pendientes globales:** P1 pp.29–156; cotejo textual MD↔PDF por el blob MD inaccesible; granularidad de reglas/objetos; cotejo japonés; validación final de workflows sobre el último SHA.
- **Estado:** V1 sigue IN_PROGRESS / PARTIAL.


## DMR-061 — avance de reconciliación P1 · 2026-11-01 (actualización pp.29–38)

- **PDF pp.29–38:** reconciliadas contra la fuente física y fichas/eventos funcionales. Puntos p.29, encuentro/promesa y analogía familiar ya estaban en los destinos; p.30, procedimiento y broma referida; p.31, experiencia y conocimiento por POV; p.32, advertencia de afiliación; p.33, snapshot y escala ahora reflejada también en canon/04; p.34, magia/habilidades parciales ya en canon/08; pp.35–36, perspectiva y habilidad oculta; p.37, arte editorial no identificado; p.38, lámpara y rutina doméstica en LOC-HESTIA-HOME.
- **Correcciones:** se añadió la escala de atributos y el límite de dominio descritos en p.33 a canon/04, sin inventar intervalos no enumerados; se añadió a Hestia la generalización dialogada sobre costumbres de Elfos/Amazonas con atribución y límite de no universalizar.
- **P1 completada (PDF↔registros funcionales):** pp.9–38. P1 restante: pp.39–156. P2/P3 pp.9–156 permanecen documentadas; pp.157–214 conservan tres pasadas.
- **Siguiente bloque P1:** PDF pp.39–48.
- **Límites:** ambigüedad de p.18 sigue UNRESOLVED; traducción privada no cotejada con japonés; cotejo textual MD↔PDF pendiente por inaccesibilidad del blob MD.
- **Estado:** V1 sigue IN_PROGRESS / PARTIAL. No abrir V2.


## DMR-061 — avance de reconciliación P1 · 2026-11-01 (actualización pp.39–48)

- **PDF pp.39–48:** reconciliadas contra la fuente física y registros funcionales. Bell/Hestia pp.39–41 se amplió en ambos perfiles, distinguiendo el contacto y las acciones de Bell de la frase final de Hestia después de que él sale. p.40 ilustración inspeccionada, sin identidad/relación extra. p.42 sensación de vigilancia no atribuida; Seal tiene ropa/rasgos localizados y edad como impresión de Bell. p.43 Piedra Mágica sin procedencia resuelta y nota de traductor; pp.44–46 cesta/invitación no consumada/intercambio de nombres; p.46 historia del Dungeon ya incorporada en canon/03; pp.47–48 ocho Kobolds, seis perseguidores, daga de 20 cm y cuenta de bajas sin normalizar.
- **Corrección funcional:** la escena doméstica de pp.39–41 se amplió en Bell y Hestia. No se crearon eventos, fichas ni IDs nuevos.
- **P1 completada (PDF↔registros funcionales):** pp.9–48. P1 restante: pp.49–156. P2/P3 pp.9–156 permanecen documentadas; pp.157–214 conservan tres pasadas.
- **Siguiente bloque P1:** PDF pp.49–58.
- **Límites:** ambigüedad de p.18 sigue UNRESOLVED; cuenta de bajas Kobold no normalizada; traducción privada no cotejada con japonés; cotejo textual MD↔PDF pendiente por inaccesibilidad del blob MD.
- **Estado:** V1 sigue IN_PROGRESS / PARTIAL. No abrir V2.


## DMR-061 — avance de reconciliación P1 · 2026-11-01 (actualización pp.49–58)

- **PDF pp.49–58:** reconciliadas contra la fuente física y registros funcionales. P49: decisión táctica de Bell tras el combate (sin maestro/senpai, no pedir entrenamiento a otras Familias por la complejidad social, priorizar 1 contra 1, no cazar profundo y usar terreno) añadida a Bell y evento Kobold. P50–51: se ampliaron Piedra Mágica, ejemplos tecnológicos, exportación como información oída/conjetura, valor de botín y límites de mochila/Ayudante en canon/05, Bell y evento Kobold. P52: cartografía, mayor tamaño de áreas inferiores y aclaración de «Dungeon vivo» añadidas a canon/03. P53–58: Goblin/teoría, snapshot/diálogo de Hestia, fiesta y visita nocturna de La Señora de la Abundancia ya tenían registros funcionales.
- **P1 completada (PDF↔registros funcionales):** pp.9–58. P1 restante: pp.59–156. P2/P3 pp.9–156 permanecen documentadas; pp.157–214 conservan tres pasadas.
- **Siguiente bloque P1:** PDF pp.59–68.
- **Pendientes:** ambigüedad del piso habitual del Minotauro p.18; recuento final de bajas Kobold; discrepancias H120/H123 y D512/D521; traducción sin cotejo japonés; cotejo MD↔PDF pendiente porque el blob del Markdown original no se puede leer mediante la API.
- **Matriz de DMR-062:** 20 hallazgos priorizados: 15 COMPLETE, 2 PARTIAL, 2 CONTRADICTORY y 1 UNRESOLVED. No es un censo global de todo el volumen.
- **Estado:** V1 continúa IN_PROGRESS / PARTIAL. No comenzar V2.


## Corrección de granularidad P1 · Volumen 1 · PDF p.57 · 2026-11-01

La auditoría visual directa de pp.49–58 confirmó diez páginas de texto y el snapshot de Estado en p.54. Se detectó que la fila p.57 de DMR-062 solo enlazaba la taberna y omitía la escena urbana nocturna descrita por Bell. La ficha `lore/danmachi/places/orario.md` ya conserva esa observación con localizador físico y límites: actividad de bares/comercios, regreso de aventureros, música y habitantes observados en una calle principal; no se generaliza a toda la ciudad ni a todas las personas de cada raza. DMR-061 y DMR-062 quedaron sincronizados; sin IDs/eventos nuevos.

**Checkpoint:** P1 reconciliada pp.9–58; próximo bloque PDF pp.59–68. P2/P3 no se repiten. V1 continúa IN_PROGRESS/PARTIAL.



## DMR-061 — avance de reconciliación P1 · PDF pp.59–68 · 2026-11-01

- **PDF pp.59–62:** cena de Bell, asiento apartado, hospitalidad solicitada por Seal, broma de Mia, pobreza/desayuno omitido de Bell y conversación sobre el local. Los importes de 4.400/2.000/50/500/3.600/300 Varisu ya están en Bell, atribuidos como declaraciones/contexto de esa jornada, no como tarifas universales ni saldo total. La daga actual sigue distinta de la Daga de Hestia.
- **PDF pp.63–64:** entrada de unas diez personas de Loki Familia, reconocimiento de Ais y celebración de su expedición; la persona que brinda permanece anónima.
- **PDF p.65:** se añadió a canon/03 la explicación sobre recorrido físico por pisos, regreso por tramos, provisiones y previsión del momento de retirada en expediciones profundas. No se inventa una norma formal de Guild.
- **PDF pp.66–68:** el relato retrospectivo se mantiene enlazado al rescate original. Ais dice que con Bete es «absolutamente imposible»; el rechazo se dirige a Bete. La pregunta posterior sobre aceptar a Bell si se declarara no obtiene una respuesta verbal concluyente. Se actualizaron el evento de visita y la ficha de Ais.
- **Visual:** las diez páginas se renderizaron e inspeccionaron individualmente a 130 dpi; no hay ilustraciones, tablas, diagramas ni notas al pie.
- **P1 completada (PDF↔registros funcionales):** pp.9–68. Siguiente bloque P1: pp.69–78. P2/P3 no se repiten.
- **Límites:** traducción privada no cotejada con japonés; MD↔PDF integral pendiente; V1 sigue IN_PROGRESS / PARTIAL.


## DMR-061 — avance de reconciliación P1 · PDF pp.69–78 · 2026-11-01

- **pp.69–72:** Ais reconoce el nombre de Bell y este le resuena más que los llamados de sus compañeros; no se infiere romance. El evento de la taberna incorpora la reacción cómica de Loki tras la bofetada (p.71). Bell dirige la vergüenza a su propia debilidad y deja sin identificar a «esa persona» (p.72).
- **p.73:** portadilla del capítulo 3 con silueta abstracta no identificada; se mantiene como material editorial.
- **pp.74–76:** Eina y Misha trabajan horas extra a las 21:00 durante la lluvia y la gestión del Festival. Se reutiliza EVT-DM-EINA-ADVISOR-001; no se crea ficha para Misha. El pensamiento de Eina sobre Bell queda limitado a su POV.
- **pp.76–78:** Bell mata un Frog Shooter (ficha existente); «Rana Tiradora» se elimina de aliases, pues solo es propuesta editorial. Bell continúa sin armadura, con ropa y arma dañadas, alcanza inadvertidamente el sexto piso y oye «Bikiri» repetido. El sonido queda sin origen; no se anticipa War Shadow antes de p.79.
- **Visual:** ilustraciones en pp.70 y 73; nota al pie en p.76; no hay tablas de Estado.
- **P1 completada (PDF↔registros funcionales):** pp.9–78. Siguiente bloque P1: pp.79–88. P2/P3 no se repiten.
- **Límites:** traducción privada no cotejada con japonés; MD↔PDF integral pendiente; ambigüedad p.18, recuento Kobold y discrepancias estadísticas siguen abiertas. V1 continúa IN_PROGRESS / PARTIAL.


## DMR-061 — reconciliación de pasada 1 V1 · PDF pp.79–88 (2026-11-01)

- **Resultado:** diez folios físicos cotejados contra el PDF original, DMR-061, la matriz individual de DMR-062 y los destinos funcionales existentes en `main`.
- **Corrección funcional:** `characters/bell-cranel.md` incorpora el combate, la pérdida de la daga, las heridas, el cerco y el equipo improvisado de pp.79–85. La ficha existente `monsters/war-shadow.md` ya contenía los datos de especie y conserva separados los desenlaces de los dos ejemplares. El evento `EVT-DM-V01-HESTIA-SEARCHES-BELL-AND-CARES-FOR-HIM-001` ya cubría pp.87–88; no se duplicó.
- **Sincronización documental:** DMR-061, DMR-062, MASTER_INDEX y WORK_QUEUE actualizados. El encabezado histórico de MASTER_INDEX que decía pp.59–68 se corrigió a pp.69–78, conservando el historial.
- **Cobertura P1:** reconciliada pp.9–88; próximo bloque pp.89–98. P2/P3 pp.9–156 permanecen documentadas y no se repitieron; pp.157–214 conservan sus tres pasadas.
- **Integración en main:** [commit `a0085d54ebc362d7725315654a5545ccaf7f9369`](https://github.com/jonhararagi/wordwaifu/commit/a0085d54ebc362d7725315654a5545ccaf7f9369) y corrección documental/perfil [commit `042539839cbbf82fc7dc43485651c4010747e95e`](https://github.com/jonhararagi/wordwaifu/commit/042539839cbbf82fc7dc43485651c4010747e95e). Ambos commits se publicaron directamente en `main`, sin ramas ni PR.
- **CI sobre el SHA exacto `042539839cbbf82fc7dc43485651c4010747e95e`:** Validate WordWaifu [run #41344580942](https://github.com/jonhararagi/wordwaifu/actions/runs/41344580942), `success`; DanMachi Lore and Retrieval Integrity [run #41344580943](https://github.com/jonhararagi/wordwaifu/actions/runs/41344580943), `success`. Incluyen validación de catálogo/IDs/enlaces y browser smoke.
- **Tests locales:** no se ejecutaron; la validación registrada corresponde exclusivamente a GitHub Actions.
- **Límites:** la traducción privada sigue sin cotejo con japonés. El cotejo integral independiente MD↔PDF continúa pendiente porque GitHub no devuelve los bytes del blob de la transcripción original. Permanecen abiertas la ambigüedad de p.18, la cuenta final de bajas Kobold y las discrepancias estadísticas ya registradas.
- **Estado:** Volumen 1 continúa `PARTIAL / IN_PROGRESS`; no iniciar Volumen 2.

## DMR-061 — reconciliación de pasada 1 V1 · PDF pp.89–98 (2026-11-01)

- **Resultado:** diez folios físicos contrastados con DMR-061, matriz individual de DMR-062 y destinos funcionales actuales en `main`.
- **Correcciones funcionales:** evento Hestia pp.87–90 ampliado en p.89; evento Estado pp.91–97 completado con descanso/grito/método de actualización y corrección del valor anterior de Magia; perfil Bell y evento de visita p.98 completados con el objetivo nombrado «Wallenstein-san».
- **Registros reutilizados:** `EVT-DM-V01-HESTIA-SEARCHES-BELL-AND-CARES-FOR-HIM-001`, `EVT-DM-V01-HESTIA-UPDATES-BELL-AFTER-WAR-SHADOW-001`, `EVT-DM-V01-BELL-RETURNS-TO-SEAL-AND-APOLOGIZES-001`; habilidad existente `[Deseo Inquebrantable]`; `LOC-HOSTESS` y su índice. Sin IDs, eventos, objetos o entidades nuevos.
- **Discrepancia:** V1-AUD-007 H120 p.54 / H123 p.91 permanece `CONTRADICTORY`; no se inventa actualización intermedia. Bell no conoce la habilidad; no se reidentifican retroactivamente referencias anónimas de pp.77/85.
- **Cobertura P1:** reconciliada pp.9–98; siguiente bloque pp.99–108. P2/P3 pp.9–156 siguen documentadas y no se repiten; pp.157–214 conservan sus tres pasadas.
- **Límites:** traducción privada no cotejada con japonés; cotejo integral independiente MD↔PDF pendiente porque el blob de la transcripción original no devuelve bytes; ambigüedad p.18, cuenta de bajas Kobold y discrepancias estadísticas siguen abiertas.
- **Tests locales:** no ejecutados. La validación se realizará mediante GitHub Actions sobre el SHA final.
- **Estado:** Volumen 1 continúa `PARTIAL / IN_PROGRESS`; no iniciar Volumen 2.

## DMR-061 — reconciliación de pasada 1 V1 · PDF pp.99–108 (2026-11-02)

- **Resultado:** diez folios físicos cotejados con el PDF original, la extracción y tercera pasada existentes de DMR-061, los bloques P2 ya completados, la matriz individual de DMR-062 y los destinos funcionales de main.
- **Única corrección funcional necesaria:** el evento existente EVT-DM-V01-BELL-RETURNS-TO-SEAL-AND-APOLOGIZES-001 tenía source_locators [PDF pp. 98–100] pese a describir el retorno hasta la salida de Bell en p.102. Se corrige a PDF pp.98–102.
- **Destinos reutilizados y confirmados:** evento de regreso a Seal; evento del Banquete de Ganesha; perfiles de Ganesha, Hestia, Hephaistos y Freya; fichas de Ganesha Familia, Orario y Babel. Hephaistos ya contenía apariencia y antecedente de ayuda a Hestia (pp.106–107); no se duplicó.
- **Límites preservados:** Ryu no se identifica con CHAR-RYUU-LION; Mia-mama no se fusiona con la ficha de anime; rumores sobre Hestia no se convierten en biografía; las notas de p.107 son editoriales; la figura de cabello y ojos escarlata de p.108 sigue sin identidad. El comentario de dioses anónimos sobre Takemikazuchi no crea relación ni perfil.
- **IDs:** no se crean personajes, eventos, lugares, objetos, relaciones, alias ni identificadores nuevos.
- **Cobertura P1:** reconciliada pp.9–108; siguiente bloque pp.109–118. P2/P3 pp.9–156 siguen documentadas y no se repiten; pp.157–214 conservan sus tres pasadas.
- **Visual:** las diez páginas físicas son texto; p.107 contiene dos notas al pie; no hay ilustraciones, tablas o diagramas.
- **Tests locales:** no ejecutados. La revisión visual del PDF y el contraste funcional se distinguen de la validación automática; la CI se comprobará sobre el SHA final de main.
- **Límites globales:** traducción privada no cotejada con japonés; cotejo integral independiente MD↔PDF pendiente; ambigüedad p.18, recuento de bajas Kobold y discrepancias estadísticas permanecen abiertas.
- **Estado:** Volumen 1 continúa PARTIAL / IN_PROGRESS; no iniciar Volumen 2.

## DMR-061 — reconciliación de pasada 1 V1 · PDF pp.109–118 (2026-11-02)

- **Resultado:** diez páginas físicas contrastadas con DMR-061, los registros P2 pp.101–110 y pp.111–120, P3 pp.109–118 y los destinos funcionales reales de main. No se repitieron P2/P3.
- **Corrección funcional:** se amplía EVT-DM-V01-GANESHA-GOD-BANQUET-001 con tres detalles omitidos del resumen funcional: interacción de Freya con el camarero anónimo (p.109), respuesta de Freya sobre su relación con Loki (p.112) y mirada/sonrisa de Freya con reacción de Hestia (p.113). Sin inferir intención ni espionaje.
- **Destinos existentes confirmados:** evento del Banquete; evento separado de petición/forja de la daga; evento de combate de Bell; perfiles de Hestia, Hephaistos, Loki y Freya; Familia de Hephaistos; fichas MON-DM-DUNGEON-LIZARD-001 y MON-DM-GOBLIN-001.
- **Límites preservados:** declaraciones de Loki sobre Ais no se convierten en reciprocidad; pensamiento de Hestia permanece POV; respuesta de Freya sobre Loki no se transforma en relación formal; Freya no queda confirmada como espía; figura/objeto aparente de p.116 siguen sin identificar; no se adelanta el desenlace de Goblin de p.119 ni se resuelve la Piedra Mágica del Lizard.
- **IDs:** no se crean personajes, eventos, lugares, objetos, relaciones, aliases ni identificadores nuevos.
- **Visual:** la ilustración de p.116 ya había sido inspeccionada a página completa en P3; se reutiliza esa evidencia y no se repite la inspección. Las nueve páginas restantes son de texto; p.117 incluye el título del capítulo.
- **Cobertura P1:** reconciliada pp.9–118; siguiente bloque pp.119–128. P2/P3 pp.9–156 siguen documentadas y no se repiten; pp.157–214 conservan sus tres pasadas.
- **Tests locales:** no ejecutados. La inspección física y revisión documental se distinguen de CI automatizada; los workflows se comprobarán sobre el SHA final.
- **Límites globales:** traducción privada no cotejada con japonés; cotejo integral MD↔PDF pendiente; ambigüedad p.18, recuento de bajas Kobold y discrepancias estadísticas continúan abiertas.
- **Estado:** Volumen 1 continúa PARTIAL / IN_PROGRESS; no iniciar Volumen 2.

## DMR-061 — reconciliación P1 · Volumen 1 · PDF pp.119–128 · 2026-11-02

- **Resultado:** 10/10 folios reconciliados entre fuente/P1 registrada, DMR-061, DMR-062 y destinos funcionales existentes.
- **Pasadas reutilizadas:** P2 de PDF pp.121–130 y P3 de pp.119–128; la documentación ya indica inspección visual individual a 130 dpi, con p.126 como ilustración monocroma de página completa y las otras nueve páginas de texto. No se repitieron extracción ni render.
- **Correcciones funcionales:** se precisó el desenlace del Goblin y el vestíbulo de Babel en el evento de combate; se amplió Babel con la descripción visible de p.120; se corrigió en el evento de Miach que Bell inicia la pregunta sobre Hestia; se añadió la sucursal roja a la ficha existente de Hephaistos Familia; y el perfil de Bell ahora conserva el pensamiento de p.128 sobre llegar a usar una daga semejante en el contexto de alcanzar a Wallenstein.
- **Destinos ya cubiertos sin cambios:** evento de preparativos del Festival; perfil de Eina; Familia de Ganesha; avenidas principales y Orario; perfiles y Familia de Miach; categoría/almacenamiento de las dos pociones; ficha de Hephaistos con la daga blanca sin nombre. La ilustración p.126 continúa sin identidad.
- **Integridad:** no se crean IDs, eventos, personajes, monstruos individuales, objetos, relaciones, aliases ni lugares independientes. No se modifica catálogo ni timeline JSON. Los dos días se mantienen como ancla relativa; no se añaden precios, conteos, estadísticas ni datos de pociones.
- **Checkpoint:** P1 reconciliada PDF↔registros funcionales pp.9–128. Siguiente bloque P1: pp.129–138. P2/P3 pp.9–156 siguen documentadas y no se repiten. Los bloques pp.157–214 conservan sus tres pasadas.
- **Pendientes:** cotejo integral Markdown↔PDF; traducción privada española sin cotejo japonés; ambigüedad de p.18; recuento de bajas Kobold; V1-AUD-007 H120/H123 y discrepancias estadísticas posteriores; P1 pp.129–156.
- **Estado:** Volumen 1 permanece PARTIAL / IN_PROGRESS. No iniciar Volumen 2.
- **Validación local:** no se ejecutó, porque el entorno no pudo resolver github.com para clonar el repositorio. La validación final se hará mediante los workflows de GitHub sobre el SHA integrado; no se presenta este bloqueo como prueba superada.



## DMR-061 — reconciliación P1 · Volumen 1 · PDF pp.129–138 · 2026-11-02

- **Resultado:** 10/10 folios reconciliados con DMR-061, DMR-062 y destinos funcionales actuales.
- **Pasadas reutilizadas:** P2 y P3 ya documentadas para este rango; P3 registró inspección visual individual a 130 dpi de las diez páginas, todas de texto continuo. No se repitieron extracción, render ni inspección.
- **Destinos confirmados:** evento de petición/forja y perfiles de Hestia/Hephaistos; perfil de Bell para su preparación al Dungeon; perfiles de Anya, Ryuu y Seal para el encargo del monedero; ficha del establecimiento y Familia de Ganesha.
- **Correcciones funcionales:** localizador secundario del evento de petición/forja armonizado para incluir p.134; Bell registra que deja su mochila en La Señora de la Abundancia y la ficha del local registra la acción; Ganesha Familia conserva la explicación del Festival y domesticación como diálogo atribuido a Anya/Ryuu.
- **Límites:** pp.129–134 no implican diseño terminado ni entrega de la daga; Bell no recibe la daga en este rango. La intención de ir al quinto piso en p.135 no es una incursión. La salida de Seal es información referida; el monedero sigue pendiente. No se crea regla universal de domesticación ni un segundo evento del Festival.
- **Integridad:** no se crean IDs, personajes, monstruos, objetos, habilidades, eventos, aliases ni relaciones; no se modifican catálogos ni timeline JSON.
- **Checkpoint:** P1 reconciliada pp.9–138. Siguiente bloque P1: pp.139–148. P2/P3 pp.9–156 siguen documentadas y no se repiten; pp.157–214 conservan sus tres pasadas.
- **Pendientes:** cotejo integral Markdown↔PDF; traducción privada española sin cotejo japonés; ambigüedad p.18; recuento Kobold; V1-AUD-007 H120/H123 y discrepancias estadísticas posteriores; P1 pp.139–156. V1 sigue PARTIAL / IN_PROGRESS; no iniciar V2.
- **Tests locales:** no ejecutados; el entorno de trabajo no dispone de clon local operativo. La CI se comprobará sobre el SHA final de main y no se considera superada hasta que ambos workflows terminen.

## DMR-061 — reconciliación P1 · Volumen 1 · PDF pp.139–148 · 2026-11-02

- **Resultado:** 10/10 folios reconciliados con DMR-061, DMR-062 y destinos funcionales.
- **Pasadas reutilizadas:** P2 pp.131–140 y P3 pp.139–148. La inspección individual P3 a 130 dpi ya está documentada para las diez páginas, todas de texto continuo y sin ilustraciones, tablas, diagramas ni notas al pie. No se repitieron extracción, render ni inspección.
- **Correcciones funcionales:** se completó el evento existente Freya/Loki/Ais con el emblema de Ganesha, la mención de Ais como Princesa de la Espada, la retirada del empleado y advertencia de Loki, el límite de conocimiento en p.143 y el equipo estándar de Bell en p.144. El perfil de Freya ahora ubica el inicio del encuentro casual con Hestia en p.148. Se añadió pp.147–148 como localizadores del preámbulo ya registrado en el evento Bell–Hestia.
- **Destinos ya cubiertos sin cambios:** llegada de Loki y Ais y broma sobre el Banquete; entrega física de la daga a Hestia, nombre y deuda; folleto del Festival, carruaje, tarifa exacta de 90 Varisu y confusión sobre la propina. La daga no se entrega a Bell en pp.145–148.
- **Integridad:** no se crean IDs, eventos, personajes, relaciones, objetos, ubicaciones, aliases ni habilidades. No se modifican catálogo ni timeline JSON. La cafetería, empleado, conductor, dios que popularizó «taxi» y callejón permanecen sin identidad nominal.
- **Checkpoint:** P1 reconciliada PDF↔registros funcionales pp.9–148. Próximo bloque P1: pp.149–156. P2/P3 pp.9–156 siguen documentadas; pp.157–214 conservan sus tres pasadas.
- **Pendientes globales:** cotejo integral Markdown↔PDF; traducción privada española no cotejada con japonés; ambigüedad de p.18; recuento de bajas Kobold; V1-AUD-007 H120/H123 y discrepancias estadísticas posteriores. V1 continúa PARTIAL / IN_PROGRESS; no iniciar Volumen 2.
- **Validación local:** no se ejecutó, porque no hay un clon local operativo en este entorno. La integración no se considerará validada hasta que los dos workflows terminen sobre el SHA final.

## DMR-061 — cierre de reconciliación P1 · Volumen 1 · PDF pp.9–156 · 2026-11-02

- **Resultado P1:** reconciliación completa de PDF pp.9–156 contra DMR-061, DMR-062 y destinos funcionales; el bloque final pp.149–156 queda 8/8.
- **Pasadas reutilizadas:** P2 pp.141–150 y pp.151–156, P3 pp.149–156. La inspección visual P3 ya estaba documentada a 130 dpi: p.154 es la única ilustración del rango y fue inspeccionada ampliada. No se repitieron extracción, render ni inspección.
- **Correcciones funcionales:** p.149 añadida a los localizadores del evento Bell–Hestia; se detallan el reencuentro y la reserva de la noticia de la daga en p.150, la cita/búsqueda/crepes y las reacciones de Bell en pp.151–153, la secuencia del pañuelo/sonrojo/manos en p.155; se completa la división de responsabilidades del Festival en la ficha de Ganesha Familia.
- **Destinos sin cambio:** Eina ya contiene el despliegue, admisión/orientación, espectadores, altavoz, espectáculo y separación de su puesto frente a la actuación. MON-DM-BATTLE-JABALI-001 ya contiene tamaño aproximado, domadora anónima y finalidad de domesticación. La ilustración p.154 ya tenía los límites correctos.
- **Continuidad:** el encargo del monedero de Seal sigue abierto; Hestia no comunica la noticia de la daga a Bell en p.150; no se registra entrega del arma a Bell; las croquetas son una propuesta. El espectáculo p.156 es paralelo al paseo y continúa después de ese folio, por lo que no se crea evento.
- **Integridad:** no se crean IDs, personajes, eventos, monstruos individuales, objetos, ubicaciones, relaciones o aliases. No se modifican `catalog.json` ni `eras-and-events.json`.
- **Checkpoint:** P1 pp.9–156 reconciliada. No queda otro rango P1 pendiente dentro de pp.9–156 ni se asigna un siguiente rango. P2/P3 pp.9–156 permanecen completas; pp.157–214 conservan sus tres pasadas.
- **Pendientes globales:** cotejo integral e independiente Markdown↔PDF; DMR-061-SRC-001, traducción privada española no cotejada con japonés; ambigüedad p.18; recuento de bajas Kobold; V1-AUD-007 Fuerza H120/H123; discrepancias estadísticas posteriores y las contradicciones abiertas en DMR-062. V1 sigue PARTIAL / IN_PROGRESS.
- **Validación local:** no se ejecutaron pruebas locales, porque este entorno no dispone de un clon local operativo. La validación automática se comprobará en GitHub Actions sobre el SHA final de main.


## DMR-062 — auditoría independiente MD↔PDF V1 · 2026-11-03

- **Checkpoint:** primera tanda PDF pp.1–24 examinada; 13 folios con texto cotejados por secuencia alfanumérica normalizada. Se detectan tres pérdidas de formato (pp.9, 13, 14) y tres imágenes ausentes en la transcripción (pp.12, 15, 22).
- **Front matter:** siete bloques Base64 en MD líneas 1–13; correspondencia visual individual con PDF pp.1–7 aún parcial. PDF p.8 está en blanco.
- **Integridad:** los blobs fuente MD/PDF coinciden con los SHA registrados en DMR-062; PDF físico de 215 páginas.
- **Continuidad:** P1 pp.9–156 sigue reconciliada; P2/P3 pp.9–156 siguen completas; tres pasadas pp.157–214 se conservan. Ninguna se reabrió. No se modificaron perfiles ni eventos funcionales.
- **Siguiente trabajo MD↔PDF:** terminar el mapeo visual de pp.1–7 y continuar con PDF pp.25–40. La ambigüedad de p.18, recuento Kobold, V1-AUD-007/008, deuda/condiciones de la daga y monedero de Seal siguen abiertos.
- **Estado global:** Volumen 1 y DMR-062 permanecen PARTIAL / IN_PROGRESS. No iniciar Volumen 2.


## DMR-062 — checkpoint de auditoría independiente MD↔PDF · 2026-11-03

El cotejo inicial cubre PDF pp.1–24. Se confirmó visualmente la correspondencia individual de las siete imágenes Markdown de líneas 1–13 con PDF pp.1–7; p.8 es blanca. Se mantienen tres omisiones de imagen (pp.12, 15, 22), tres pérdidas de formato (pp.9, 13, 14) y la ambigüedad de traducción de p.18. El PDF materializado conserva el SHA del blob Git y sus 215 páginas. Próxima tanda: PDF pp.25–40. DMR-062 y V1 siguen PARTIAL / IN_PROGRESS; P1/P2/P3 no se reabren.


## DMR-062 — auditoría independiente MD↔PDF · checkpoint 2026-11-04 · PDF pp.25–40

- **Fuentes:** repositorio privado main 15be6908ea02e2e083a6b14b538ba1a71245ac6e; MD blob d2b3306b1661584d9a42d651f57dca8a6814b20b; PDF blob fd43a5395983850ab1a953bb39da732b27331dcc, 7.495.544 bytes y 215 páginas. El git hash-object de la copia materializada coincide con el blob PDF.
- **Cobertura nueva:** 16/16 folios físicos examinados; 14 folios con texto cotejados y dos folios solo ilustrados.
- **Hallazgos:** V1-MDPDF-035-001 FORMATTING_LOSS (separador p.35 como encabezado Markdown); V1-MDPDF-037-001 y V1-MDPDF-040-001 IMAGE_MISSING. 13 folios COMPLETE, 3 PARTIAL. No hay error de transcripción, orden, duplicación ni imagen incorrecta demostrado.
- **Continuidad:** se conservan los hallazgos pp.1–24; no se repiten P1/P2/P3, que permanecen intactas. No se modifican DMR-061, fuentes originales ni registros funcionales.
- **Próxima tanda independiente:** PDF pp.41–56. La traducción española sigue sin cotejo japonés. V1 y DMR-062 permanecen PARTIAL / IN_PROGRESS; no iniciar Volumen 2.


## DMR-062 — auditoría independiente MD↔PDF · checkpoint 2026-11-04 · PDF pp.41–56

- **Fuentes:** WordWaifu main inicial `60e14ec29b8979d37da0d51d5e8261155bf53e04`; repositorio privado main `15be6908ea02e2e083a6b14b538ba1a71245ac6e`. El checkpoint anterior está integrado: comparación `60e14ec... ↔ main` = identical, 0 ahead / 0 behind.
- **Integridad:** Markdown blob `d2b3306b1661584d9a42d651f57dca8a6814b20b`, 4.035.130 bytes, 7.251 líneas y 16 imágenes Base64; hash Git calculado y coincidente. PDF blob `fd43a5395983850ab1a953bb39da732b27331dcc`, 7.495.544 bytes, 215 páginas; hash Git calculado y coincidente.
- **Cobertura nueva:** 16/16 folios físicos examinados y 16/16 con texto cotejado; 14 COMPLETE y 2 PARTIAL (pp.46 y 54).
- **Hallazgos:** `V1-MDPDF-046-001` y `V1-MDPDF-054-001`, ambos `FORMATTING_LOSS` por el separador `× × ×` representado como encabezado `##`. No se detectan TRANSCRIPTION_ERROR, IMAGE_MISSING, IMAGE_MISMATCH, ORDER_ERROR, DUPLICATION ni PAGE_MAPPING_UNRESOLVED.
- **Controles:** nota al pie de p.43 preservada mediante referencia `[^1]` (línea 962) y definición (línea 7240); tarjeta de Estado de p.54 conserva los valores del PDF.
- **Continuidad:** se preservan todos los hallazgos de pp.1–40; no se repiten P1/P2/P3. No se modifican los archivos fuente ni DMR-061. Próximo rango MD↔PDF: pp.57–72. DMR-062 y V1 siguen PARTIAL / IN_PROGRESS.
## DMR-062 — auditoría independiente MD↔PDF V1 · checkpoint 2026-11-06 · pp.73–88

- 16/16 folios físicos inspeccionados; 14 con texto cotejado. Resultado: 12 COMPLETE, 2 PARTIAL por FORMATTING_LOSS (pp.76, 80) y 2 IMAGE_MISSING (ilustraciones pp.73, 86).
- Hallazgos aceptados: `V1-MDPDF-073-001`, `V1-MDPDF-076-001`, `V1-MDPDF-080-001`, `V1-MDPDF-086-001`. No se demuestra error de transcripción, orden o duplicación; notas al pie de Frog Shooter y War Shadow conservadas.
- PDF verificado: 7.495.544 bytes, 215 páginas, SHA-1 `13ceaeb94727698f7e8c3b0e607a1ba4ffbd98c3`, Git blob `fd43a5395983850ab1a953bb39da732b27331dcc`. MD blob `d2b3306b1661584d9a42d651f57dca8a6814b20b`.
- Fuentes originales intactas. Traducción española no cotejada con japonés. DMR-062 y V1 siguen `PARTIAL / IN_PROGRESS`. Próxima tanda: PDF pp.89–104. No iniciar Volumen 2.
- No se ejecutaron pruebas locales; no hay evidencia de CI para este cambio y no se declara aprobada.



## DMR-062 — auditoría independiente MD↔PDF · checkpoint 2026-11-06 · pp.89–104

- **Cobertura:** 16/16 folios físicos inspeccionados y cotejados; todos contienen texto. 13 COMPLETE y 3 PARTIAL por pérdidas de formato (pp.91, 97 y 102).
- **Hallazgos aceptados:** `V1-MDPDF-091-001`, `V1-MDPDF-097-001`, `V1-MDPDF-102-001` (`FORMATTING_LOSS`: divisor físico `× × ×` representado como encabezado Markdown).
- **Controles:** valores del Estado de p.91 coinciden con el PDF (Fuerza H123→221 G); nota al pie de nekomusume preservada. No se demuestra error de transcripción, orden, duplicación ni imagen ausente.
- **Fuentes:** PDF 7.495.544 bytes, 215 páginas, SHA-1 `13ceaeb94727698f7e8c3b0e607a1ba4ffbd98c3`, blob `fd43a5395983850ab1a953bb39da732b27331dcc`; MD blob `d2b3306b1661584d9a42d651f57dca8a6814b20b`.
- **Siguiente tanda:** PDF pp.105–120. Fuentes originales intactas; traducción española sin cotejo japonés; DMR-062 y V1 permanecen `PARTIAL / IN_PROGRESS`. No iniciar Volumen 2.
- **Validación:** cotejo manual y render realizados; pruebas automatizadas locales no ejecutadas.



## DMR-062 — auditoría independiente MD↔PDF · checkpoint 2026-11-06 · PDF pp.105–120

- **Cobertura:** 16/16 folios físicos revisados; 15 páginas con texto cotejadas y una ilustración (p.116) visualmente cotejada con la imagen Markdown de línea 3672. Resultado: 15 COMPLETE, 1 PARTIAL.
- **Hallazgo aceptado:** `V1-MDPDF-117-001` (`TRANSCRIPTION_ERROR`): PDF p.117 dice «dos o tres oscilaciones consecutivas»; Markdown línea 3686 dice «dos 1. tres oscilaciones consecutivas». No modificar el original.
- **Controles:** notas al pie 2 y 3 de p.107 conservadas; ilustración p.116 presente y coincidente. No se detectan IMAGE_MISSING, IMAGE_MISMATCH, ORDER_ERROR, DUPLICATION ni PAGE_MAPPING_UNRESOLVED.
- **Fuentes:** PDF 7.495.544 bytes, 215 páginas, SHA-1 `13ceaeb94727698f7e8c3b0e607a1ba4ffbd98c3`, blob `fd43a5395983850ab1a953bb39da732b27331dcc`; Markdown blob `d2b3306b1661584d9a42d651f57dca8a6814b20b`.
- **Siguiente tanda:** PDF pp.121–136. No repetir P1/P2/P3, no modificar originales y no iniciar Volumen 2.
- **Estado:** DMR-062 y Volumen 1 permanecen `PARTIAL / IN_PROGRESS`. Pruebas automatizadas locales no ejecutadas; CI pendiente de comprobación sobre el SHA final.


## DMR-062 — auditoría independiente MD↔PDF V1 · checkpoint 2026-11-06 · pp.121–136

- **Cobertura:** 16/16 folios físicos inspeccionados; 15 con texto cotejado y p.126 ilustrada. Resultado: 13 COMPLETE y 3 PARTIAL por pérdida de formato en pp.123, 129 y 134.
- **Hallazgos aceptados:** `V1-MDPDF-123-001`, `V1-MDPDF-129-001`, `V1-MDPDF-134-001` (`FORMATTING_LOSS`: divisor físico `× × ×` convertido en encabezado Markdown).
- **Controles:** secuencia textual preservada en los quince folios con texto; imagen Markdown de línea 4000 coincide visualmente con PDF p.126. No se demuestra error de transcripción, orden, duplicación ni imagen ausente.
- **Fuentes:** PDF 7.495.544 bytes, 215 páginas, SHA-1 `13ceaeb94727698f7e8c3b0e607a1ba4ffbd98c3`, blob `fd43a5395983850ab1a953bb39da732b27331dcc`; MD blob `d2b3306b1661584d9a42d651f57dca8a6814b20b`.
- **Siguiente tanda:** PDF pp.137–152. Fuentes originales intactas; traducción española sin cotejo japonés; DMR-062 y V1 siguen `PARTIAL / IN_PROGRESS`. CI del nuevo SHA pendiente de comprobación.


## DMR-062 — auditoría independiente MD↔PDF V1 · checkpoint 2026-11-06 · pp.137–152

- **Cobertura:** 16/16 folios físicos con texto cotejados; 13 COMPLETE y 3 PARTIAL por FORMATTING_LOSS en pp.138, 145 y 149.
- **Hallazgos aceptados:** `V1-MDPDF-138-001`, `V1-MDPDF-145-001`, `V1-MDPDF-149-001`. No se demuestra error textual, de orden, duplicación ni imagen ausente.
- **Siguiente tanda:** PDF pp.153–168. DMR-062 y V1 siguen `PARTIAL / IN_PROGRESS`; traducción privada sin cotejo japonés.


## DMR-062 — auditoría independiente MD↔PDF V1 pp.153–168 (2026-11-07)

- **Fuente:** PDF original recuperado de la Biblioteca; 7.495.544 bytes, 215 páginas, SHA-1 verificado 13ceaeb94727698f7e8c3b0e607a1ba4ffbd98c3. Markdown fuente blob d2b3306b1661584d9a42d651f57dca8a6814b20b; ambas fuentes originales intactas.
- **Resultado:** 16/16 folios inspeccionados; quince folios con texto coinciden exactamente tras retirar marcado Markdown y normalizar espacios/escapes; p.154 es una ilustración cuya imagen Markdown de línea 5032 coincide visualmente.
- **Hallazgos aceptados:** V1-MDPDF-156-001, V1-MDPDF-160-001, V1-MDPDF-165-001, V1-MDPDF-166-001, V1-MDPDF-167-001 (FORMATTING_LOSS: separadores físicos × × × representados como encabezados Markdown). 11 COMPLETE y 5 PARTIAL.
- **No demostrados:** TRANSCRIPTION_ERROR, ORDER_ERROR, DUPLICATION, IMAGE_MISSING, IMAGE_MISMATCH y PAGE_MAPPING_UNRESOLVED en este rango.
- **Límites:** cotejo de la traducción privada española contra su PDF, no contra el original japonés. No se modificaron fuentes, DMR-061 ni destinos funcionales. Pruebas automatizadas locales no ejecutadas.
- **Siguiente tanda:** DMR-062 PDF pp.169–184. V1 y DMR-062 continúan PARTIAL / IN_PROGRESS; no iniciar Volumen 2. CI del nuevo SHA pendiente de consulta.


## DMR-062 — auditoría independiente MD↔PDF V1 · checkpoint 2026-11-07 · pp.169–184

- **Cobertura:** 16/16 folios físicos inspeccionados; p.169 es una ilustración cuya imagen Markdown de línea 5576 coincide visualmente. Los quince folios pp.170–184 contienen texto cotejado.
- **Resultado:** 15 COMPLETE y 1 PARTIAL. El único parcial es p.173 por FORMATTING_LOSS del separador físico `× × ×`, representado como encabezado Markdown de nivel 1.
- **Hallazgo aceptado:** `V1-MDPDF-173-001`, línea Markdown 5712. No se demuestra error de transcripción, orden, duplicación ni imagen ausente en este bloque.
- **Fuentes:** PDF 7.495.544 bytes, 215 páginas, SHA-1 `13ceaeb94727698f7e8c3b0e607a1ba4ffbd98c3`; Markdown blob `d2b3306b1661584d9a42d651f57dca8a6814b20b`. Fuentes originales intactas.
- **Límites:** cotejo de la traducción privada española contra su PDF, no contra el original japonés. No se modifican DMR-061 ni destinos funcionales. P1/P2/P3 no se repiten.
- **Siguiente tanda:** DMR-062 PDF pp.185–200. DMR-062 y V1 siguen `PARTIAL / IN_PROGRESS`; no iniciar Volumen 2.
- **Validación:** comparación textual por página y render/inspección visual manual efectuados; pruebas automatizadas locales no ejecutadas. CI debe comprobarse sobre el SHA final.

## DMR-062 — auditoría independiente MD↔PDF V1 · checkpoint 2026-11-07 · pp.185–200

- **Cobertura:** 16/16 folios físicos inspeccionados; quince folios con texto cotejados y p.199 es una ilustración cuya imagen Markdown de línea 6774 coincide visualmente.
- **Resultado:** 13 COMPLETE y 3 PARTIAL. Los tres parciales corresponden a pérdidas de formato por separadores físicos × × × convertidos en encabezados Markdown.
- **Hallazgos aceptados:** V1-MDPDF-194-001 (línea 6602), V1-MDPDF-196-001 (línea 6684) y V1-MDPDF-200-001 (línea 6796), todos FORMATTING_LOSS. No se demuestra error textual, de orden, duplicación ni imagen ausente.
- **Fuentes:** PDF original 7.495.544 bytes, 215 páginas, SHA-1 13ceaeb94727698f7e8c3b0e607a1ba4ffbd98c3; Markdown original blob d2b3306b1661584d9a42d651f57dca8a6814b20b. Fuentes originales intactas.
- **Límites:** cotejo de traducción privada española contra PDF, no contra japonés. No se modificaron DMR-061 ni destinos funcionales. Pruebas automatizadas locales no ejecutadas.
- **Siguiente tanda:** DMR-062 PDF pp.201–214; p.215 contiene créditos. V1 y DMR-062 permanecen PARTIAL / IN_PROGRESS; no iniciar Volumen 2.


## DMR-062 — auditoría independiente MD↔PDF V1 · checkpoint 2026-11-08 · pp.201–214

- **Cobertura:** 14/14 folios físicos inspeccionados. Once contienen texto (pp.201–207 y 211–214); pp.208–210 son ilustraciones.
- **Imágenes:** las tres imágenes Markdown (líneas 7100, 7102 y 7104) coinciden visualmente con los folios 208–210 del PDF, incluidos los textos integrados en las dos fichas.
- **Resultado:** 12 COMPLETE y 2 PARTIAL por FORMATTING_LOSS en pp.201 y 203, donde separadores físicos ××× aparecen como encabezados Markdown.
- **Hallazgos aceptados:** V1-MDPDF-201-001 y V1-MDPDF-203-001. No se demuestra pérdida textual, orden, duplicación ni imagen ausente en este rango.
- **Fuentes:** PDF 7.495.544 bytes, 215 páginas, SHA-1 13ceaeb94727698f7e8c3b0e607a1ba4ffbd98c3; Markdown blob d2b3306b1661584d9a42d651f57dca8a6814b20b. Fuentes originales intactas.
- **Límites:** cotejo de traducción privada española contra PDF, no contra japonés. No se modificaron DMR-061 ni destinos funcionales. Pruebas automatizadas locales no ejecutadas.
- **Cobertura narrativa DMR-062:** alcanzado el último folio narrativo p.214; p.215 contiene créditos. DMR-062 y V1 permanecen PARTIAL / IN_PROGRESS por hallazgos parciales acumulados y pendientes globales.


## WordWaifu — checkpoint operativo V1 y discrepancias estadísticas · 2026-11-08

- **Estado general:** V1, DMR-061 y DMR-062 permanecen `PARTIAL / IN_PROGRESS`. DMR-061: pasada 1 reconciliada pp.9–156; pasadas 2 y 3 completadas pp.9–156; tres pasadas previas pp.157–214 conservadas. DMR-062: cotejo independiente MD↔PDF documentado hasta el último folio narrativo p.214; p.215 contiene créditos.
- **Cribado parcial de estadísticas:** `V1-AUD-007` conserva H120 (p.54) frente a H123 como valor anterior en p.91; no hay evidencia suficiente para explicar o corregir la diferencia. `V1-AUD-008` conserva D512 narrativo (p.195) frente a D521 visual (p.208); la imagen coincide con el Markdown, pero la discordancia interna del PDF persiste.
- **Clasificación:** ambos casos quedan `Verificado parcialmente / Pendiente`; no se crean identificadores ni se modifican los expedientes fuente, el PDF o el Markdown original. La traducción española sigue sin cotejo con japonés.
- **Siguiente tarea:** revisar el recuento de bajas Kobold y la ambigüedad traductora de p.18; luego revalidar el estado de la economía de la Daga de Hestia y la devolución del monedero de Seal. No repetir P1/P2/P3, no iniciar Volumen 2.
- **Cola sincronizada:** `lore/danmachi/WORK_QUEUE.md` contiene el inventario corregido y el dictamen de los dos conflictos.


## Auditoría residual V1 — Tarea 1, Kobolds · 2026-11-08

- **Resultado:** verificado parcialmente. El texto parte de ocho Kobolds; dos ya estaban abatidos antes de que seis persiguieran a Bell. Los ordinales de pp.48–49 y la mención posterior del «último» apuntan a una lectura de siete bajas, pero después de «sólo quedan dos» no se explica el destino del otro. El total exacto permanece pendiente.
- **Registros:** se reutilizan `EVT-DM-V01-BELL-DEFEATS-KOBOLD-PARTY-001` y `MON-DM-KOBOLD-001`; sin IDs nuevos, sin modificar fuentes originales y sin repetir las pasadas P1/P2/P3 ni el cotejo DMR-062 pp.41–56.
- **Siguiente tarea:** Tarea 2, p.18 — determinar el alcance de la frase traducida «decimoquinto piso o por debajo», conservando la ambigüedad si no hay prueba suficiente.
- **Estado global:** V1, DMR-061 y DMR-062 continúan `PARTIAL / IN_PROGRESS`; no iniciar Volumen 2.


## Auditoría residual V1 — Tarea 2, frase del piso 15 · 2026-11-08

- **Resultado:** verificado parcialmente. «Decimoquinto piso o por debajo» en p.18 es un umbral/rango, no una ubicación única. El contexto del mismo volumen (pp.63–66) favorece la lectura piso 15 y niveles más profundos, pues el relato describe Minotauros que suben desde el 17 hacia el 5.
- **Límite:** la traducción privada no está cotejada con japonés; la dirección de «por debajo» sigue pendiente lingüísticamente. No se modifica la cita ni se crea ID.
- **Siguiente tarea:** revisar la economía de la Daga de Hestia, préstamos, deuda y condiciones en los registros existentes.
- **Estado global:** V1, DMR-061 y DMR-062 siguen `PARTIAL / IN_PROGRESS`; no iniciar Volumen 2.


## Auditoría residual V1 — Tarea 3, economía de la Daga de Hestia · 2026-11-08

- **Resultado:** verificado parcialmente. La obligación de pagar incluso si toma décadas/siglos aparece en pp.132–133; la entrega confirma que el préstamo no se condona en pp.145–146; la tarjeta visual p.208 da 35 años / 420 plazos y trabajo en la sucursal Babel de Hephaistos Familia.
- **Pendiente:** precio total, interés/tasa, importe de cada cuota y calendario de vencimientos no están establecidos por los registros/source extract examinados. La ficha existente ya conserva esta limitación; no se crean eventos ni objetos.
- **Siguiente tarea:** Tarea 4 — verificar la devolución explícita del monedero de Seal, sin confundir el encargo y la posesión con su entrega efectiva.
- **Estado global:** V1 y DMR-061/062 continúan `PARTIAL / IN_PROGRESS`; no iniciar Volumen 2.


## Auditoría residual V1 — Tarea 4, monedero de Seal · 2026-11-08

- **Resultado:** verificado parcialmente. Anya/Ryuu encargan a Bell llevar el monedero (PDF pp.136–138); Bell aún lo recuerda como tarea en p.151. El reencuentro con Seal en pp.203–204 y la disculpa de ella por olvidar el bolso no describen explícitamente el traspaso ni confirman recepción.
- **Límite:** no marcar como devuelto; la escena anterior `EVT-DM-V01-BELL-RETURNS-TO-SEAL-AND-APOLOGIZES-001` (pp.98–102) es otro episodio. No crear ID de devolución sin pasaje claro.
- **Estado:** las cuatro tareas del orden solicitado se cribaron; T1 y T4 tienen resultados parcialmente verificados con detalles pendientes, T2 requiere cotejo lingüístico independiente y T3 conserva términos no publicados. V1, DMR-061 y DMR-062 siguen `PARTIAL / IN_PROGRESS`.


## DMR-063 — extracción Markdown del Volumen 2, Parte 1 · 2026-11-14

- **Estado:** Parte 1 integrada y verificada parcialmente. Volumen 2 continúa parcial; no se declara cerrado.
- **Fuente:** `lore/danmachi/volumes/main/Volumen [02] • DanMachi.md`; blob de entrada `9b884520a3b5aa30d25b8b2dfc8721d54b52464e`. Solo se utilizó texto del Markdown, sin PDF ni imágenes.
- **Cobertura:** prólogo y Capítulo 01, líneas Markdown 13–1391. Próximo encabezado: Capítulo 02, línea 1395.
- **Integración:** tres acontecimientos nuevos, ficha Ant Killer, dos fichas descriptivas de equipo y enlaces a fichas existentes; Daga de Hestia y entidades previas reutilizadas.
- **Commits directos en main:** `f84b7e86f91f760d5537bc28942ff15aab9e5e82` (extracción funcional) y `3a74834ee6ab8540077db95e7f930c66670a1f5e` (Babel en el modelo temporal). La sincronización de métricas y ajuste del test se registra en el siguiente commit de esta tanda.
- **Pendiente:** identidad del narrador, afiliación del perseguidor, contratación formal de Lili, equivalencia «Welf Crosso»/Welf Crozzo, nombre y material de la protección de muñeca y cotejo de matices lingüísticos.

# Estado de WordWaifu

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
- **Corpus DanMachi:** 179 registros activos; 29 IDs reservados; 132 documentos de apoyo.
- **Grafo de conocimiento:** 258 relaciones explícitas; 258/258 con ambos extremos activos y distintos; IDs de relación únicos.
- **Roster de adaptación:** 63 identidades; 63/63 tienen registro, ruta Markdown e expediente UI con el mismo ID.
- **Expedientes de interfaz:** 93 perfiles; 93/93 enlazados a catálogo y Markdown por ID.
- **Tipos en el catálogo:** 83 personajes; 5 grupos; 12 deidades con registro de personaje.
- **Marcadas `complete`:** 0/83 registros `character`; esto no define el universo de personajes esperados ni autoriza un porcentaje global de canon.
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

# Registro permanente de acuerdos de conversación

**Propósito:** conservar las instrucciones, preferencias, correcciones, acuerdos de investigación y resultados relevantes de las conversaciones de trabajo para que no sea necesario volver a pedir al usuario que reenvíe los mismos mensajes.

## Procedimiento obligatorio

1. Antes de proponer o ejecutar una tarea, consultar este registro, las decisiones globales, la cola correspondiente y el estado del repositorio.
2. Registrar en el mismo ciclo de trabajo cada instrucción, corrección, preferencia estable, decisión aceptada o alcance de investigación que afecte al proyecto. Actualizar también el documento de dominio apropiado cuando corresponda (por ejemplo, `WORK_QUEUE.md`, el registro de decisiones DanMachi o las fichas de investigación).
3. Guardar una entrada con identificador, fecha, decisión o instrucción, alcance, estado, documentos/tareas afectados y contexto o fuentes. Enlazarla desde la hoja de estado si afecta al modo de trabajo.
4. Reutilizar el registro como memoria operativa: no pedir que se repita un acuerdo ya documentado. Si un detalle está incompleto, aprovechar primero el contexto y preguntar solo lo imprescindible.
5. Si una nueva instrucción cambia una anterior, marcar la anterior como revisada/sustituida, registrar la nueva y actualizar las tareas afectadas; no borrar el historial.
6. Diferenciar la aceptación de una instrucción del estado factual de sus afirmaciones. Una orden del usuario puede quedar aceptada como criterio de trabajo sin convertir una afirmación de wiki en canon verificado.
7. Las exploraciones o hipótesis se conservan como propuestas abiertas cuando el usuario no las haya decidido expresamente. No se presentan como decisiones aprobadas ni como hechos confirmados.
8. Solo informar que algo quedó registrado, integrado o verificado después de comprobar el cambio en el repositorio correspondiente.

## Registro de acuerdos

### CONV-DM-2026-10-24-001 — Registrar los acuerdos de conversación
- **Fecha:** 2026-10-24.
- **Estado:** ACCEPTED.
- **Decisión:** Todo contenido relevante para el trabajo del proyecto que se acuerde en conversación —instrucciones, preferencias, correcciones, decisiones, criterios de investigación y tareas— debe quedar aceptado/registrado en documentación persistente para evitar que el usuario tenga que enviar de nuevo esos mensajes.
- **Alcance:** WordWaifu y, dentro de este repositorio, el universo DanMachi y sus flujos de investigación.
- **Aplicación:** actualizar este registro y el documento de dominio pertinente en el mismo ciclo; revisar el registro antes de volver a preguntar o repetir una auditoría.
- **Límite:** registrar no equivale a afirmar que una tarea está implementada o que una fuente prueba un hecho. Estado de ejecución y evidencia se conservan por separado.

### CONV-DM-2026-10-24-002 — Investigar wikis conocidas cuando no hay acceso a las novelas
- **Fecha:** 2026-10-24.
- **Estado:** ACCEPTED.
- **Decisión:** Cuando no se puedan consultar las novelas ligeras, usar wikis comunitarias reconocidas de DanMachi —incluidas las ediciones en inglés y español de DanMachi Wiki/Fandom— para ampliar e investigar personajes, Familias, lugares, sucesos, habilidades, relaciones y otros registros.
- **Prioridad y etiqueta:** consultar fuentes oficiales accesibles cuando existan; las wikis sirven como fuentes secundarias importantes y pistas de investigación, pero no se describen como fuentes oficialmente autorizadas por la editorial ni como prueba primaria de la novela.
- **Aplicación:** conservar URL, título/página consultada, idioma, continuidad, detalle respaldado, estado de verificación y conflictos/lagunas conocidos. No inventar capítulos o páginas inaccesibles ni elevar automáticamente una afirmación secundaria a canon primario.
- **Vínculos:** matriz de continuidad DanMachi, registro de fuentes, fichas y cola de trabajo.

### CONV-DM-2026-10-24-003 — Contraste simple y categorías consistentes
- **Fecha:** 2026-10-24.
- **Estado:** RECORDED.
- **Resultado solicitado:** al comparar WordWaifu con las wikis, separar siempre personajes, Familias, lugares, eventos/sucesos y otros registros; explicar qué cuenta cada cifra y advertir sobre duplicados, categorías solapadas y diferencias de cobertura.
- **Aplicación:** no comparar el total de artículos de una wiki directamente con entidades únicas de WordWaifu como si fueran la misma métrica.

### CONV-DM-2026-10-24-004 — Resumen de obras con alcance y estado
- **Fecha:** 2026-10-24.
- **Estado:** RECORDED.
- **Resultado solicitado:** al resumir las obras de DanMachi en WordWaifu, listar cada serie/continuidad por separado, qué datos tiene y cuáles son los vacíos, manteniendo diferenciados novela principal, Sword Oratoria, Astrea Record, Familia Chronicle, anime, juegos, Prototype, relatos cortos, manga y material AU cuando corresponda.

### CONV-DM-2026-10-24-005 — Prompt maestro operativo y orden de prioridades
- **Fecha:** 2026-10-24.
- **Estado:** ACCEPTED.
- **Tipo:** instrucción operativa y prioridad de investigación.
- **Decisión:** aplicar el ciclo INSPECTAR → PRIORIZAR → INVESTIGAR → IMPLEMENTAR → PROBAR → REGISTRAR → INTEGRAR → VERIFICAR → INFORMAR, usando el estado real del repositorio como fuente de verdad. Ejecutar trabajo concreto cuando haya herramientas; registrar decisiones y fuentes, evitar auditorías repetidas y no confundir lo documentado con lo implementado.
- **Autorización y destino:** trabajar sobre ramas nacidas del `main` actual y dirigir los cambios aprobados a `main`; integrar únicamente cuando las comprobaciones pertinentes, conflictos y CI permitan verificar una fusión segura. Confirmar el SHA real de `main` y los resultados de CI de ese SHA.
- **Orden actual de DanMachi:** cerrar primero las tareas públicas pendientes de DANMACHI-RESEARCH-045 (Alfia, Zald, Meteria, Erebus y Rudra, con fuentes y continuidad separadas); después retomar Orario, luego acontecimientos, personajes principales/secundarios, historias individuales y auditoría de continuidad. No duplicar fichas existentes ni inventar los localizadores primarios que siguen sin estar disponibles.
- **Criterio de fuentes y métricas:** usar wikis EN/ES como fuentes secundarias cuando falten novelas accesibles; fuentes oficiales y texto primario conservan su alcance específico. Separar conteos por tipo y estados de evidencia; los recuentos estructurales no deben presentarse como porcentaje global de canon cubierto.
- **Documentos afectados:** `docs/STATUS.md`, `docs/DECISIONS.md`, `lore/danmachi/06-registro-decisiones.md`, `lore/danmachi/WORK_QUEUE.md`, registros DMR-045 y validaciones de la aplicación.
- **Siguiente acción:** completar el cierre de búsqueda pública de DMR-045 y después continuar con la etapa Orario; mantener como pendientes los pasajes no cotejados.

### CONV-DM-2026-10-24-006 — Resultado del barrido secundario público de DMR-045
- **Fecha:** 2026-10-24.
- **Estado:** RECORDED.
- **Tipo:** resultado de investigación y actualización de prioridad.
- **Resultado:** se revisaron las páginas públicas ya registradas de DanMachi Wiki EN/ES, la nota autoral directa y la entrevista pública de Dengeki. Se añadió a la ficha de Alfia una pista secundaria que indexa una aparición retrospectiva en el volumen 20 y se preservó como no resuelta la identidad de la maga del prólogo; el detalle del árbol sagrado permanece secundario porque no se cotejó el pasaje subyacente. Se registró la caracterización ideológica de Erebus bajo CONT-GAME y el recuerdo de la comida de Meteria únicamente bajo CONT-AU. La información pública del plan posterior de Jura ya se encuentra en DMR-043 y su ficha; no se duplicó. No se encontró evidencia pública que atribuya a Rudra personalmente la orden o conocimiento del plan de su Familia.
- **Estado factual:** el barrido de fuentes secundarias consultables queda completado; la investigación DMR-045 no está completa a nivel primario y conserva pendientes de capítulo/página o localizador digital.
- **Cambio de prioridad registrado el 2026-10-24 (histórico; revisado el 2026-10-25):** en ese momento Orario se anotó como etapa inmediata, mientras se conservaban los pendientes primarios de DMR-045.
- **Revisión de prioridad (2026-10-25):** la instrucción más reciente vuelve a priorizar el cotejo de texto primario de Alfia, Zald, Meteria, Erebus y Rudra antes de ampliar Orario. La prioridad de Orario registrada en este resultado histórico queda sustituida como orden de ejecución vigente por CONV-DM-2026-10-25-006; no se borra el resultado del barrido secundario ni sus límites.
- **Documentos afectados:** DMR-045, DMR-029, registro maestro de fuentes, fichas Alfia/Erebus/Meteria, WORK_QUEUE.md, MASTER_INDEX.md y STATUS.md.
- **Siguiente acción vigente:** cotejar localizadores primarios verificables de DMR-045; Orario permanece en cola para retomarse después, sin trasladar datos de Prototype, anime, juego o wikis a CONT-MAIN-LN sin verificación.

### CONV-DM-2026-10-24-007 — Tipos de entidad de Guild y lugares de Orario

- **Fecha:** 2026-10-24.
- **Tipo:** corrección de modelado, implementación y control de calidad.
- **Estado final:** integrado y validado el 2026-10-24 mediante el [PR #106](https://github.com/jonhararagi/wordwaifu/pull/106), SHA `dd61b90142e9e5f6382ab4456ff4f7316157b599`. CI posterior a la integración: [Validate WordWaifu](https://github.com/jonhararagi/wordwaifu/actions/runs/40140711145) y [DanMachi Lore and Retrieval Integrity](https://github.com/jonhararagi/wordwaifu/actions/runs/40140711295), ambos en verde sobre ese SHA.
- **Requisito aplicado:** separar la organización Guild de la guía histórica compuesta y de cualquier edificio físico; la misma regla se aplica a la organización/personal de Hostess of Fertility y su lugar físico.
- **Cambios:** `ORG-GUILD` y `ORG-HOSTESS` se tipan como `organization`; `DM-GUILD-001` conserva su ID estable como guía conceptual de tipo `setting`; las relaciones institucionales catalogadas se conectan a `ORG-GUILD`; las menciones del glosario de anime apuntan al mismo nodo organizativo.
- **Límites preservados:** Babel conserva sus alcances `CONT-ANIME` y `CONT-PROTOTYPE`; Pantheon sigue siendo una referencia de la muestra parcial de la novela principal y la relación de sede es secundaria. No se crea una ubicación física independiente para la Guild ni se decide la identidad física Pantheon–Babel sin pasaje suficiente.
- **Pruebas:** se amplía la regresión existente de grafo organizativo y se actualizan las expectativas del buscador; la aprobación final depende de CI del PR y de `main` tras la integración.

### CONV-DM-2026-10-24-008 — Rivira añadida desde el glosario oficial de adaptación

- **Fecha:** 2026-10-24.
- **Tipo:** hallazgo de investigación, implementación y prueba de continuidad.
- **Estado final:** integrado y validado en `main` mediante el [PR #107](https://github.com/jonhararagi/wordwaifu/pull/107), SHA `2c93c79d93050e88260fc3c3a448ce40d1d6e7ee`.
- **Hallazgo:** el glosario oficial del anime ya utilizado en DMR-026 contiene una entrada de `リヴィラの街` (Rivira) que faltaba en el inventario del corpus. Describe una población en el piso seguro 18 del Dungeon y servicios comerciales orientados a aventureros.
- **Cambios:** creado `LOC-RIVIRA`, añadido `DMR-026-CLM-004`, extendido `DMR-026-SRC-001`, registrada la arista `REL-RIVIRA-DUNGEON-SAFE-FLOOR-18`, actualizado el catálogo, el índice y el directorio de fuentes y añadida una regresión de recuperación.
- **Continuidad y límites:** únicamente `CONT-ANIME`; la única arista geográfica nueva apunta a `LOC-DUNGEON`. No se infiere una conexión de superficie con `LOC-ORARIO`, coordenadas, mapa exacto ni equivalencia automática con `CONT-MAIN-LN`.
- **Fuente:** https://danmachi.com/danmachi/special/index.html — entrada oficial de adaptación en japonés; consultada directamente durante esta tarea.
- **Verificación posterior a la integración:** [Validate WordWaifu](https://github.com/jonhararagi/wordwaifu/actions/runs/40147234354) y [DanMachi Lore and Retrieval Integrity](https://github.com/jonhararagi/wordwaifu/actions/runs/40147234424), ambos finalizados con éxito sobre el SHA exacto `2c93c79d93050e88260fc3c3a448ce40d1d6e7ee`.

### CONV-DM-2026-10-24-009 — Plaza del Amor registrada como pista secundaria navegable

- **Fecha:** 2026-10-24.
- **Tipo:** investigación e implementación de lugar.
- **Estado final:** integrado y validado en `main` mediante [PR #109](https://github.com/jonhararagi/wordwaifu/pull/109), SHA `2342ccf464a6f6d88e0b31aa4c7f77af04695348`.
- **Hallazgo:** la wiki comunitaria japonesa ダンまち @ ウィキ, entrada オラリオ, describe アモールの広場 (Plaza del Amor) como punto de encuentro al que se llega por un callejón desde la avenida principal suroeste; también resume su pavimento, flores y lámparas de piedra mágica. La wiki en español lista Plaza del Amor en su esquema de Orario, pero el esquema no es cartografía oficial.
- **Implementación realizada:** creado `LOC-AMOR-SQUARE` con estado `secondary_reference_primary_locator_pending`, claim `DMR-031-CLM-011`, relación `REL-AMOR-SQUARE-ORARIO-SECONDARY`, búsqueda recuperable y prueba de no filtración a `CONT-MAIN-LN`.
- **Alcance:** claim y relación únicamente en `CONT-UNVERIFIED`; no se usa como confirmación narrativa de la novela principal y no asigna coordenadas. La primera mención primaria y su localizador reproducible siguen abiertos; el bloqueo HTTP 503 de las muestras GA Bunko tampoco queda resuelto por este lote.
- **Documentos afectados:** DMR-031, registro de fuentes, catálogo, ficha/índice de lugares, índice maestro, cola, directorio de fuentes, pruebas y estado del proyecto.
- **Verificación posterior al merge:** [DanMachi Lore and Retrieval Integrity](https://github.com/jonhararagi/wordwaifu/actions/runs/40148575531) y [Validate WordWaifu](https://github.com/jonhararagi/wordwaifu/actions/runs/40148575536), ambos finalizaron con éxito sobre el SHA exacto `2342ccf464a6f6d88e0b31aa4c7f77af04695348`.
- **Siguiente acción:** localizar el pasaje primario de la Plaza del Amor en la novela ligera con capítulo/página o localizador digital reproducible, antes de promover detalles a `CONT-MAIN-LN`.

### CONV-DM-2026-10-24-010 — Contrastar Pantheon, sede de la Guild y Babel sin inferencias

- **Fecha:** 2026-10-24.
- **Estado:** RECORDED; investigación parcial documentada y límites preservados.
- **Tipo:** instrucción de investigación y resultado factual limitado.
- **Criterio aceptado:** completar el inventario de Orario a partir de fuentes verificables y no inferir la relación física entre Pantheon, la sede de la Guild y Babel.
- **Hallazgo:** el texto indexado de la muestra editorial del volumen 3 favorece leer Pantheon como referencia que se pasa antes de entrar en la sede blanca de la Guild. La afirmación comunitaria de que Pantheon es la sede principal queda registrada como discrepancia. El glosario oficial del anime define Babel como instalación propiedad de la Guild para supervisar/gestionar el Dungeon, pero no demuestra si la sede administrativa está dentro de Babel ni su posición relativa.
- **Límite:** la descarga de `trial03.pdf` respondió HTTP 503 y no pudo comprobarse la página visualmente; la lectura queda `source_checked_excerpt_only`. No se crea una relación física nueva ni se inventan coordenadas.
- **Documentos afectados:** DMR-048, DMR-051, fichas de Pantheon/Babel/Orario, índice de lugares, catálogo, registro de fuentes, MASTER_INDEX, WORK_QUEUE y STATUS.
- **Siguiente acción:** recuperar un localizador primario verificable, continuar el inventario de lugares de Orario y resolver la relación con Babel solo si una fuente primaria lo demuestra.
- **Integración:** incorporado mediante [PR #111](https://github.com/jonhararagi/wordwaifu/pull/111) a `main` con SHA [f7ccf59e48d4cc2da6fe0b15b79fe794c535424a](https://github.com/jonhararagi/wordwaifu/commit/f7ccf59e48d4cc2da6fe0b15b79fe794c535424a).
- **Verificación posterior al merge del SHA anterior:** [DanMachi Lore and Retrieval Integrity](https://github.com/jonhararagi/wordwaifu/actions/runs/40150204443) y [Validate WordWaifu](https://github.com/jonhararagi/wordwaifu/actions/runs/40150204432), ambas finalizadas con `success`.

### CONV-DM-2026-10-24-011 — Armonizar el localizador provisional de la plaza norte

- **Fecha:** 2026-10-24.
- **Tipo:** corrección de procedencia, mejora del directorio de fuentes y prueba de regresión.
- **Estado final:** integrado y validado en `main` mediante [PR #112](https://github.com/jonhararagi/wordwaifu/pull/112), SHA [07784cb869428aadcc57d5bb3322dda8c5274127](https://github.com/jonhararagi/wordwaifu/commit/07784cb869428aadcc57d5bb3322dda8c5274127).
- **Hallazgo:** DMR-047 ya conservaba en el claim el capítulo IV 「だからボクは力になりたい」 y los marcadores de folio 20–21 de la muestra oficial del volumen 2, pero el registro central de fuentes decía que no se asignaba capítulo/página.
- **Cambio:** alineados el registro `DMR-047-SRC-001`, la entrada del directorio de fuentes, la investigación y el índice maestro; añadidas regresiones para comprobar que el registro central y el directorio exponen el localizador provisional sin abandonar `source_checked_excerpt_only`.
- **Límites:** el PDF no se pudo inspeccionar visualmente; los folios no cuentan como páginas cotejadas. No se asigna nombre oficial a la plaza, coordenadas ni vecindad no documentada.
- **Verificación CI sobre el PR:** [DanMachi Lore and Retrieval Integrity](https://github.com/jonhararagi/wordwaifu/actions/runs/40150720025) y [Validate WordWaifu](https://github.com/jonhararagi/wordwaifu/actions/runs/40150720014), ambas finalizadas con éxito.
- **Verificación posterior al merge sobre el SHA exacto:** [Validate WordWaifu](https://github.com/jonhararagi/wordwaifu/actions/runs/40150808803) y [DanMachi Lore and Retrieval Integrity](https://github.com/jonhararagi/wordwaifu/actions/runs/40150808868), ambas finalizadas con éxito.
- **Siguiente acción:** continuar el inventario de lugares de Orario y buscar un pasaje primario que pueda verificarse directamente; la inspección visual de esta muestra sigue pendiente.

## Plantilla para entradas futuras

- **ID:**
- **Fecha:**
- **Tipo:** instrucción / decisión / preferencia / corrección / investigación / resultado.
- **Estado:** accepted / recorded / open / revised / completed.
- **Contenido:**
- **Alcance y continuidad:**
- **Documentos, registros o pruebas afectados:**
- **Contexto o fuentes:**
- **Siguiente acción:** 



### CONV-DM-2026-10-24-012 — Corregir la información de personajes en las fichas interactivas
- **Fecha:** 2026-10-24.
- **Estado:** INTEGRADO Y VALIDADO EN `main`.
- **Instrucción aplicada:** continuar la corrección efectiva de personajes, no limitarse a una propuesta o auditoría general. Usar wikis reconocidas como evidencia secundaria cuando el texto primario no es accesible, mostrando procedencia y límites.
- **Alcance del lote:** fichas interactivas de Alfia, Zald, Meteria, Erebus y Rudra (DMR-045), con pruebas de regresión. Los datos de wiki permanecen secundarios; la nota alternativa de Meteria continúa en CONT-AU; los detalles de Erebus del juego permanecen en CONT-GAME; «Eren» no se añade como alias canónico; la trampa del Juggernaut se atribuye a Rudra Familia como grupo, no personalmente a Rudra.
- **PR integrada:** [#113](https://github.com/jonhararagi/wordwaifu/pull/113), commit `9e5a2ee6041dd2a4283003993bfd6655a9a3d419`.
- **Validación de PR:** [Validate WordWaifu #3236](https://github.com/jonhararagi/wordwaifu/actions/runs/40151859509); [DanMachi Lore and Retrieval Integrity #1689](https://github.com/jonhararagi/wordwaifu/actions/runs/40151859538) — ambas exitosas.
- **Validación posterior a la integración, exacto SHA de `main`:** [Validate WordWaifu #3237](https://github.com/jonhararagi/wordwaifu/actions/runs/40151959234); [DanMachi Lore and Retrieval Integrity #1690](https://github.com/jonhararagi/wordwaifu/actions/runs/40151959233) — ambas exitosas.
- **Pendiente:** no cambia IDs, relaciones ni niveles de evidencia. Los localizadores primarios de Alfia, Zald, Meteria, Erebus y la atribución personal de Rudra siguen abiertos.


### CONV-DM-2026-10-24-013 — Separar acusación de Zanis y destino de Canoe en fichas UI
- **Fecha:** 2026-10-24.
- **Estado:** INTEGRADO Y VALIDADO EN `main`.
- **Objetivo:** corregir la lectura cruzada entre Liliruca, Canoe Belway, Zanis Lustra y Chandra Ihit en la capa interactiva, conservando los estados `secondary_checked` de DMR-046.
- **Corrección:** DMR-046-CLM-007 registra el destino de Canoe según una fuente comunitaria; DMR-046-CLM-005 registra la acusación que una sinopsis comunitaria de volumen 6 atribuye a Zanis. La acusación no demuestra culpabilidad de Lili, conocimiento cierto de Zanis ni el destino de Canoe.
- **Fuentes editoriales enlazadas y límite:** se reutilizan las páginas ya registradas de volumen 2 y volumen 6 (`https://ga.sbcr.jp/product/9784797373073/`, `https://ga.sbcr.jp/product/9784797380583/`) solo para contexto editorial. Sus sinopsis generales no verifican a Canoe, la acusación de Zanis ni la intervención personal de Chandra.
- **Archivos afectados:** `src/character-dossiers.js`, `tests/test_lore_corpus.cjs`, DMR-046, `lore/danmachi/WORK_QUEUE.md` y `docs/STATUS.md`.
- **PR integrada:** [#114](https://github.com/jonhararagi/wordwaifu/pull/114), commit `a7725802e2cef7ad9a3e648b7189e7986f1853fb`.
- **Validación de PR, exacto head SHA `1fe1d632565d303894956d0bae86f214cc4087f6`:** [DanMachi Lore and Retrieval Integrity](https://github.com/jonhararagi/wordwaifu/actions/runs/40152510473) y [Validate WordWaifu](https://github.com/jonhararagi/wordwaifu/actions/runs/40152510494) — ambas exitosas.
- **Validación post-merge, exacto SHA `a7725802e2cef7ad9a3e648b7189e7986f1853fb`:** [DanMachi Lore and Retrieval Integrity](https://github.com/jonhararagi/wordwaifu/actions/runs/40152602203) y [Validate WordWaifu](https://github.com/jonhararagi/wordwaifu/actions/runs/40152602204) — ambas completadas con éxito.
- **Decisión de continuidad:** no modificar el grafo ni promocionar afirmaciones secundarias. Los pasajes primarios legítimos de volúmenes 2 y 6 siguen pendientes.


### CONV-DM-2026-10-25-001 — Incorporar filtros de alineamiento moral y de conducta
- **Fecha:** 2026-10-25.
- **Estado:** INTEGRADO Y VALIDADO EN `main`.
- **Instrucción aceptada:** añadir filtros de bueno / neutral / malo y legal / neutral / caótico a la enciclopedia de personajes, además de representar personajes cuyo alineamiento no haya sido evaluado.
- **Diseño:** dos ejes independientes combinables, más un estado explícito «Sin clasificar». La ausencia de datos jamás se interpreta como neutralidad.
- **Alfia y Zald:** la propuesta del usuario fue «caótico bueno». La implementación inicial los presenta como «caótico neutral», interpretación provisional de baja confianza, por las descripciones secundarias de objetivos protectores junto con aceptación consciente de caos, muerte y desesperación. «Caótico bueno» queda visible como alternativa razonada, no como canon oficial.
- **Fuentes secundarias:** https://danmachi.fandom.com/wiki/Alfia ; https://danmachi.fandom.com/es/wiki/Alfia ; https://danmachi.fandom.com/wiki/Zald ; https://danmachi.fandom.com/es/wiki/Zald. No se atribuyen estos alineamientos a Fujino Omori ni a las editoriales.
- **PR integrada:** [#115](https://github.com/jonhararagi/wordwaifu/pull/115), commit `3f9fb9536482f381f1cdd9b533ae75d34508f749`.
- **CI de PR, exacto head SHA `2302a6e635c9208fe2c805e8154b7da991074948`:** [Validate WordWaifu](https://github.com/jonhararagi/wordwaifu/actions/runs/40193671503) y [DanMachi Lore and Retrieval Integrity](https://github.com/jonhararagi/wordwaifu/actions/runs/40193671496) — ambas exitosas.
- **CI post-merge, exacto SHA de `main` `3f9fb9536482f381f1cdd9b533ae75d34508f749`:** [Validate WordWaifu](https://github.com/jonhararagi/wordwaifu/actions/runs/40193807701) y [DanMachi Lore and Retrieval Integrity](https://github.com/jonhararagi/wordwaifu/actions/runs/40193807729) — ambas exitosas.
- **Archivos afectados:** `src/character-alignments.js`, `index.html`, `src/app.js`, `src/styles.css`, pruebas de ficha y recuperación, `docs/DECISIONS.md`, `docs/STATUS.md`, `lore/danmachi/WORK_QUEUE.md` y DMR-045.
- **Límite factual:** solo Alfia y Zald reciben alineamiento inicial; el resto permanece «Sin clasificar». No cambian IDs, relaciones ni métricas. Las fuentes primarias individuales de DMR-045 siguen pendientes.


### CONV-DM-2026-10-25-002 — Añadir acceso editorial licenciado sin falsear la evidencia primaria
- **Fecha:** 2026-10-25.
- **Estado:** INTEGRADO Y VALIDADO en `main`.
- **Objetivo:** continuar mejorando la consulta de los expedientes históricos de Alfia, Zald, Erebus sin declarar resueltos los localizadores narrativos pendientes.
- **Cambio:** registrar la ficha oficial de Yen Press / Yen On para *Astrea Record, Vol. 3* (ISBN 9781975379926; publicación indicada: 26 de noviembre de 2024) en el directorio de fuentes y exponerla en los tres expedientes interactivos.
- **Límite obligatorio:** la fuente es metadato editorial y sinopsis general; no se usa como prueba de una escena, habilidad, relación, alias o alineamiento individual. DMR-045 permanece abierto y DMR-045-SRC-016 queda en `metadata_checked_only`, sin claims.
- **Pruebas añadidas:** unicidad/URL/autoridad/límites del registro editorial y presencia del acceso licenciado en las tres fichas.
- **PR integrada:** [#116](https://github.com/jonhararagi/wordwaifu/pull/116), merge commit `6efb50779b17924e7064876af75afa3cbd1d3b67`.
- **CI de la PR, head SHA `7e903eb6eda4dae6f3d4c69d5af0257ce8eeddbb`:** [Validate WordWaifu](https://github.com/jonhararagi/wordwaifu/actions/runs/40196827871) y [DanMachi Lore and Retrieval Integrity](https://github.com/jonhararagi/wordwaifu/actions/runs/40196827863), ambas exitosas.
- **CI post-merge sobre `main`, SHA exacto `6efb50779b17924e7064876af75afa3cbd1d3b67`:** [Validate WordWaifu](https://github.com/jonhararagi/wordwaifu/actions/runs/40197003502) y [DanMachi Lore and Retrieval Integrity](https://github.com/jonhararagi/wordwaifu/actions/runs/40197003501), ambas exitosas.
- **Prioridad siguiente:** continuar el inventario de Orario y buscar localizadores narrativos reales; no deducir la topología Pantheon–Babel–Guild.


### CONV-DM-2026-10-25-003 — Agregar acceso a muestra licenciada sin ascender metadatos a canon
- **Fecha:** 2026-10-25.
- **Estado final:** INTEGRADO Y VALIDADO EN `main` mediante PR [#117](https://github.com/jonhararagi/wordwaifu/pull/117); merge commit `1302145b9b222130069c9aa7393a115cbfd7284f`.
- **Hallazgo:** BOOK☆WALKER ofrece ficha y enlace de muestra gratuita para la edición japonesa de *Astrea Record 3*; el visor probado devolvió un error de descarga y no mostró narración legible.
- **Cambio:** se añadió al directorio consultable y a las fichas de Alfia, Zald y Erebus la ficha del distribuidor licenciado y el enlace de muestra. Se añadieron regresiones del directorio y de las tres fichas. También se creó un grupo visible propio (`licensed_retailer`) en la interfaz y una regresión estática del renderizador.
- **Límite:** `DMR-045-SRC-017` queda como `metadata_checked_only`, sin claims. El error observado no prueba que el libro no esté disponible para otros usuarios y no se inventan páginas o escenas.
- **Próximo paso:** reintentar el visor autorizado o cotejar una edición licenciada que permita establecer capítulo/página para cada personaje; Rudra y Meteria conservan sus preguntas independientes.
- **SHA de la PR:** `a9ac60cbc29f7e41574ee541ba0eb5d5a432e133`. CI de la PR: [DanMachi Lore and Retrieval Integrity](https://github.com/jonhararagi/wordwaifu/actions/runs/40205349060) y [Validate WordWaifu](https://github.com/jonhararagi/wordwaifu/actions/runs/40205349066), ambas exitosas.
- **CI posterior al merge, SHA exacto de `main` `1302145b9b222130069c9aa7393a115cbfd7284f`:** [Validate WordWaifu](https://github.com/jonhararagi/wordwaifu/actions/runs/40205481864) y [DanMachi Lore and Retrieval Integrity](https://github.com/jonhararagi/wordwaifu/actions/runs/40205481796), ambas exitosas.


### CONV-DM-2026-10-25-004 — Alinear el detalle mecánico de las fichas de Alfia y Zald
- **Fecha:** 2026-10-25.
- **Estado final:** INTEGRADO Y VALIDADO EN `main` mediante PR [#118](https://github.com/jonhararagi/wordwaifu/pull/118), merge SHA `d81766fc7003294c15d0a2b776ce2d59170da86c`.
- **Objetivo:** corregir una diferencia entre el nivel de detalle de las fichas Markdown y los expedientes interactivos, sin crear más identidades ni elevar pistas comunitarias a canon.
- **Cambios:** la ficha UI de Alfia ahora muestra que las wikis atribuyen a Genos Angelus una campana gris plateada, alcance superior a 100 metros y un empeoramiento de su salud al usarlo contra Leviathan; todo queda marcado como dato secundario pendiente de cotejo. Las fichas UI y Markdown de Zald explicitan el ejemplo comunitario de Deus Ambrosia (nivel 7 frente a poder equivalente al nivel 10) como límite reportado, no como fórmula universal comprobada.
- **Fuentes/continuidad:** https://danmachi.fandom.com/es/wiki/Alfia/Habilidades y https://danmachi.fandom.com/es/wiki/Zald; los detalles continúan bajo CONT-AR con evidencia secundaria y localizador primario pendiente.
- **Archivos afectados:** `src/character-dossiers.js`, `lore/danmachi/characters/dark-era/zald.md`, `tests/test_lore_corpus.cjs`, `lore/danmachi/research/inbox/DANMACHI-RESEARCH-045-dark-era-characters-continuity-audit.md`, `lore/danmachi/WORK_QUEUE.md` y `docs/STATUS.md`.
- **Límite:** no se agregan claims, relaciones, aliases ni IDs nuevos; DMR-045 y sus localizadores narrativos primarios siguen abiertos.
- **CI de PR, head SHA `e870d5ef364639238000b7f991a4b855deafe136`:** [DanMachi Lore and Retrieval Integrity](https://github.com/jonhararagi/wordwaifu/actions/runs/40210105940) y [Validate WordWaifu](https://github.com/jonhararagi/wordwaifu/actions/runs/40210106029), ambas exitosas.
- **CI post-merge sobre el SHA exacto de `main` `d81766fc7003294c15d0a2b776ce2d59170da86c`:** [DanMachi Lore and Retrieval Integrity](https://github.com/jonhararagi/wordwaifu/actions/runs/40210257785) y [Validate WordWaifu](https://github.com/jonhararagi/wordwaifu/actions/runs/40210257780), ambas exitosas.


### CONV-DM-2026-10-25-005 — Abrir los resúmenes de habilidad de Alfia y Zald desde la enciclopedia
- **Fecha:** 2026-10-25.
- **Estado final:** integrada y validada en `main` mediante PR [#120](https://github.com/jonhararagi/wordwaifu/pull/120), merge SHA `742b0220590e45082972015684a0ecc6cbf14f04`.
- **Problema observado:** las fichas detalladas de `src/character-dossiers.js` almacenaban el detalle corregido, pero el diálogo “Más información” de la enciclopedia dependía del registro `EXTENDED` de `src/character-archive.js`. Sin entrada específica por continuidad, la UI podía mostrar únicamente las afirmaciones curadas y no el detalle de habilidades esperado.
- **Cambio:** añadir entradas explícitas `CONT-AR` de Alfia y Zald al diálogo ampliado, con fuente comunitaria visible y límites de evidencia/continuidad. Añadir pruebas Node y Playwright que abran ambas fichas reales desde la búsqueda de la enciclopedia y comprueben que los detalles se ven en el diálogo.
- **Regla de continuidad:** las notas de habilidades se ofrecen únicamente bajo `CONT-AR`; las pistas del volumen 20 se mantienen señaladas como `CONT-MAIN-LN`, y los contenidos de juego/`CONT-AU` no se fusionan.
- **Integridad:** no se crean identidades, claims, relaciones ni alias; no se convierten datos de wiki en canon confirmado. DMR-045 conserva pendiente el cotejo primario.
- **CI de PR, head SHA `308ee68ed81673757ae4c99c1d8af95bae573cfe`:** [Validate WordWaifu](https://github.com/jonhararagi/wordwaifu/actions/runs/40211032458) y [DanMachi Lore and Retrieval Integrity](https://github.com/jonhararagi/wordwaifu/actions/runs/40211032504), ambas exitosas.
- **CI post-merge, SHA exacto de `main` `742b0220590e45082972015684a0ecc6cbf14f04`:** [Validate WordWaifu](https://github.com/jonhararagi/wordwaifu/actions/runs/40211145581) y [DanMachi Lore and Retrieval Integrity](https://github.com/jonhararagi/wordwaifu/actions/runs/40211145583), ambas exitosas, incluida la prueba de navegador.
- **Estado final:** integrado y validado; DMR-045 sigue abierto para el cotejo de fuentes primarias.


### CONV-DM-2026-10-25-006 — Notas interactivas faltantes y evidencia de muestras licenciadas
- **Fecha:** 2026-10-25.
- **Estado:** IMPLEMENTED, MERGED; la validación posterior a la fusión se registra por separado.
- **Instrucción operativa aplicada:** continuar las correcciones de DMR-045 antes de ampliar Orario; actualizar las fichas existentes y la interfaz, no duplicar personajes ni convertir un resumen secundario en canon primario.
- **Integración:** PR [#122](https://github.com/jonhararagi/wordwaifu/pull/122), SHA exacto de main: ba6363bce1b651a74ebfa9b782fb7e38f8804eef. CI de la PR, head e03fdb17c5c6fc292fb9fffd321483eb1abf2b07: [Validate WordWaifu](https://github.com/jonhararagi/wordwaifu/actions/runs/40222698644) y [DanMachi Lore and Retrieval Integrity](https://github.com/jonhararagi/wordwaifu/actions/runs/40222698535), ambas exitosas, incluida la prueba de navegador.
- **Implementación:** el diálogo “Más información” muestra notas separadas para Meteria (CONT-MAIN-LN y CONT-AU), Erebus (CONT-GAME) y Rudra (CONT-MAIN-LN). La UI tipa por separado wikis comunitarias, entrevistas, publicación autoral y metadatos editoriales.
- **Investigación de acceso legal:** se registran DMR-045-SRC-018 (Google Books, vol. 20) y DMR-045-SRC-019 (BinB, Astrea Record 3) en la auditoría y el registro central de fuentes. Los lectores consultados no proporcionaron páginas narrativas legibles; el HTTP 429 para dos consultas no se cuenta como resultado de búsqueda.
- **Límites:** no se crean IDs, claims ni aristas; la filiación de Meteria, las motivaciones de Erebus y la responsabilidad personal de Rudra no se promueven a canon. DMR-045 sigue abierto para localizadores primarios.
- **Documentos afectados:** UI, registro de fuentes, DMR-045, estado, cola, índice maestro y pruebas de API/Playwright.
- **Siguiente acción aceptada:** continuar primero el cotejo primario de los cinco expedientes de DMR-045. Si las muestras licenciadas siguen sin exponer páginas narrativas, conservar el bloqueo concreto y completar solo huecos verificables antes de retomar la expansión de Orario.


#### Verificación posterior a la integración de CONV-DM-2026-10-25-006
- **SHA comprobado en main:** ba6363bce1b651a74ebfa9b782fb7e38f8804eef.
- **Validate WordWaifu:** [ejecución post-merge](https://github.com/jonhararagi/wordwaifu/actions/runs/40222827902) — success.
- **DanMachi Lore and Retrieval Integrity:** [ejecución post-merge](https://github.com/jonhararagi/wordwaifu/actions/runs/40222827809) — success; completó browser smoke y validación de catálogo/enlaces.
- **Resultado:** PR #122 está integrada y validada sobre el SHA indicado; el cotejo primario de DMR-045 sigue abierto.


### CONV-DM-2026-10-25-007 — Registrar muestras editoriales consultadas por volumen sin confundir acceso con lectura
- **Fecha:** 2026-10-25.
- **Estado:** IMPLEMENTADO, INTEGRADO y VALIDADO; [PR #127](https://github.com/jonhararagi/wordwaifu/pull/127) quedó en main mediante SHA `1a1bc2be356463edde3464e530015674dd8bc767`.
- **Resultado de investigación:** los lectores públicos de SBCr eBook Store asociados a Astrea Record 1, 2 y 3 devolvieron “Now loading...” y controles de menú, sin página narrativa visible. Se registran DMR-045-SRC-020/021/022 como metadata_checked_only, sin claims, eventos ni localizadores individuales.
- **CI de la PR, head SHA `d39161c1622317f973b07cc66096019be2f9c84b`:** [Validate WordWaifu](https://github.com/jonhararagi/wordwaifu/actions/runs/40225927385) y [DanMachi Lore and Retrieval Integrity](https://github.com/jonhararagi/wordwaifu/actions/runs/40225927413), ambas exitosas, incluida la prueba de navegador y la validación de catálogo/enlaces.
- **CI post-merge sobre el SHA exacto de main `1a1bc2be356463edde3464e530015674dd8bc767`:** [Validate WordWaifu](https://github.com/jonhararagi/wordwaifu/actions/runs/40226051519) y [DanMachi Lore and Retrieval Integrity](https://github.com/jonhararagi/wordwaifu/actions/runs/40226051508), ambas exitosas.
- **Regla reforzada:** el registro de una ruta editorial legal no equivale a leer el texto; un visor que queda cargando no demuestra ausencia de un personaje y no cierra DMR-045.
- **Archivos afectados:** src/lore-corpus.js, pruebas de directorio y barrido de DMR-045, auditoría DMR-045, registro central de fuentes, WORK_QUEUE, MASTER_INDEX y STATUS.
- **Orden vigente:** continuar el cotejo primario de los cinco expedientes; Orario sigue en cola.


### CONV-DM-2026-10-25-008 — Rutas de muestra Google Play Books para Astrea Record 1–3
- **Fecha:** 2026-10-25.
- **Estado:** IMPLEMENTED, INTEGRATED and VALIDATED.
- **Motivo:** continuar la búsqueda de texto primario en rutas licenciadas después de que los lectores japoneses de SB Creative/BinB no expusieran páginas narrativas.
- **Resultado:** se identificaron las páginas públicas de Google Play Books para los tres volúmenes ingleses de Astrea Record. Las páginas de los volúmenes 1 y 2 anuncian una muestra gratuita, pero la extracción solo obtuvo metadatos y sinopsis editoriales. La página del volumen 3 presentó una variante regional que indica que el elemento no está disponible en esa región, aunque una ficha indexada distinta anuncia una muestra.
- **Límites de evidencia:** los tres registros DMR-045-SRC-023–025 se conservan como metadata_checked_only, con claims_supported vacíos. No se atribuye presencia, acción o habilidad de ningún personaje a una página no leída; el estado regional no se interpreta como indisponibilidad global.
- **Integración comprobada:** [PR #129](https://github.com/jonhararagi/wordwaifu/pull/129), merge SHA f450e98426c38c9c54b0c9befc6a1e5388ea99ac. CI de la cabeza 77cfd88def764f42ed60dc5a8360512074c848d2: [Validate WordWaifu](https://github.com/jonhararagi/wordwaifu/actions/runs/40228737355) y [DanMachi Lore and Retrieval Integrity](https://github.com/jonhararagi/wordwaifu/actions/runs/40228737354), ambos success. CI post-merge sobre el SHA exacto f450e98426c38c9c54b0c9befc6a1e5388ea99ac: [Validate WordWaifu](https://github.com/jonhararagi/wordwaifu/actions/runs/40228879793) y [DanMachi Lore and Retrieval Integrity](https://github.com/jonhararagi/wordwaifu/actions/runs/40228879958), ambos success, incluida la prueba de navegador y la validación de catálogo/enlaces.
- **Nota de corrección de pruebas:** la primera ejecución detectó que el test buscaba SRC-023/SRC-024/SRC-025 por separado, mientras la cola usaba la abreviatura 023–025. Se cambió la cola a enumeración explícita y la nueva ejecución pasó ambos workflows.
- **Documentos integrados:** directorio de fuentes de la aplicación, DMR-045, registro central de fuentes, cola, índice maestro, estado y pruebas de regresión de fuentes/continuidad.
- **Prioridad vigente:** continuar el cotejo primario de los cinco expedientes de DMR-045; Orario permanece en cola.


### CONV-DM-2026-10-25-009 — Registrar el intento de muestra licenciada de DanMachi vol. 14
- **Fecha:** 2026-10-25.
- **Estado:** cambio documental implementado, integrado y validado; la evidencia primaria sobre la narración sigue pendiente.
- **Resultado:** se consultaron la ficha y el enlace normal de muestra de BOOK☆WALKER para DanMachi vol. 14 (edición japonesa de SB Creative / GA Bunko). La ficha anuncia 試し読み, pero el lector devuelve “Could not download. Please check your network connection.” La ruta se catalogó como DMR-045-SRC-028, metadata_checked_only, sin claims ni localizador narrativo.
- **Límite factual:** no se modifica DMR-045-CLM-013/014, no se confirma la página exacta y no se atribuye a Rudra conocimiento, autorización u orden del plan. Un error de visor no prueba indisponibilidad general ni presencia/ausencia de personajes.
- **Prioridad vigente:** continuar el cotejo primario de los cinco expedientes de DMR-045 antes de expandir Orario. Si una muestra legal no entrega narración, conservar el bloqueo y no crear afirmaciones para llenar el hueco.
- **Documentos afectados:** auditoría DMR-045, registro central de fuentes, directorio de fuentes UI y su prueba, cola de trabajo, índice maestro, estado y registro de decisiones.
- **Integración verificada:** PR [#133](https://github.com/jonhararagi/wordwaifu/pull/133), merge SHA `1c53f9f7ca57a6aeebaedbf57234fb8b6e581f6f`.
- **CI de la PR:** [Validate WordWaifu #3366](https://github.com/jonhararagi/wordwaifu/actions/runs/40231380471) y [DanMachi Lore and Retrieval Integrity #1759](https://github.com/jonhararagi/wordwaifu/actions/runs/40231380497), success.
- **CI post-merge del SHA exacto de main:** [Validate WordWaifu #3367](https://github.com/jonhararagi/wordwaifu/actions/runs/40231489642) y [DanMachi Lore and Retrieval Integrity #1760](https://github.com/jonhararagi/wordwaifu/actions/runs/40231489669), success.

### CONV-DM-2026-10-25-010 — Reintento de la vista previa licenciada de Google Books vol. 20
- **Fecha:** 2026-10-25.
- **Hallazgo:** la página pública autorizada de Google Books anuncia `Preview · 28 pages`; el lector muestra `1 of 4`, pero las páginas consultadas no cargaron y devolvieron `Something went wrong / Page didn't load`.
- **Registro actualizado:** se conserva el ID existente `DMR-045-SRC-018` en `metadata_checked_only`, con claims vacíos. Se actualizan la auditoría de DMR-045, el registro central de fuentes, el directorio de fuentes de la aplicación, la cola, el índice maestro, el estado y las regresiones.
- **Límite factual:** la vista previa que no se renderiza no es un localizador narrativo; no confirma presencia/ausencia de personajes ni respalda habilidades, relaciones o escenas. Las búsquedas previas que fallaron con HTTP 429 siguen siendo errores, no resultados negativos.
- **Prioridad vigente:** mantener abiertos los localizadores primarios individuales de Alfia, Zald, Meteria y Erebus, y la atribución personal de Rudra; no ampliar Orario hasta completar o acotar honestamente esta investigación.
- **Estado:** IMPLEMENTED, INTEGRATED y VALIDATED: PR [#135](https://github.com/jonhararagi/wordwaifu/pull/135), merge SHA `e63fbdaa8b8b757b67446aecbe0ffec1382e4562`.
- **CI de la PR (head SHA `a10ba6062e6e6d5d11722625b132c569b66ccfb2`):** [Validate WordWaifu #3374](https://github.com/jonhararagi/wordwaifu/actions/runs/40232076731) y [DanMachi Lore and Retrieval Integrity #1766](https://github.com/jonhararagi/wordwaifu/actions/runs/40232076712), ambos `success`.
- **CI post-merge sobre el SHA exacto `e63fbdaa8b8b757b67446aecbe0ffec1382e4562`:** [Validate WordWaifu #3377](https://github.com/jonhararagi/wordwaifu/actions/runs/40232214960) y [DanMachi Lore and Retrieval Integrity #1767](https://github.com/jonhararagi/wordwaifu/actions/runs/40232214899), ambos `success`.


### CONV-DM-2026-10-25-011 — Sincronizar la prioridad activa con el bloque correcto de WORK_QUEUE
- **Fecha:** 2026-10-25.
- **Estado:** IMPLEMENTED, INTEGRATED y VALIDATED tras la fusión de PR #140.
- **Corrección encontrada:** WORK_QUEUE tenía un encabezado que decía DMR-045 como prioridad actual, pero debajo contenía el listado extenso de trabajo geográfico de Orario. Además, el resultado histórico del barrido secundario aún decía que Orario debía activarse inmediatamente, pese a la decisión posterior de volver a priorizar la verificación primaria.
- **Cambio:** se creó un bloque de prioridad DMR-045 con las cinco tareas primarias, los límites comunes de SRC-018–028 y enlaces al registro de fuentes; el listado urbano fue renombrado como etapa posterior y el orden de Orario de 2026-10-24 quedó conservado como histórico/sustituido, no borrado.
- **Prueba:** se ampliaron las regresiones para exigir ambos encabezados, comprobar los SRC-026/027/028 en la cola y rechazar la instrucción antigua que promovía Orario a prioridad siguiente.
- **Sin cambios de canon:** no se añadieron IDs, relaciones ni claims de personajes. DMR-045 sigue abierto; las rutas de muestras permanecen metadata_checked_only cuando no se leyó narrativa.


#### Verificación posterior a la integración de CONV-DM-2026-10-25-011
- **PR:** [#140](https://github.com/jonhararagi/wordwaifu/pull/140), integración por merge SHA `e236c07cc475feae31c0fa2ab0697b26851c41d0`.
- **CI de la PR (head `ae52715b0657f68bf65ecb7a3e158fad8bc1e6fd)):** [Validate WordWaifu #3380](https://github.com/jonhararagi/wordwaifu/actions/runs/40232710265) y [DanMachi Lore and Retrieval Integrity #1775](https://github.com/jonhararagi/wordwaifu/actions/runs/40232710323), ambos `success`.
- **CI post-merge sobre el SHA exacto de main:** [Validate WordWaifu #3384](https://github.com/jonhararagi/wordwaifu/actions/runs/40232839057) y [DanMachi Lore and Retrieval Integrity #1776](https://github.com/jonhararagi/wordwaifu/actions/runs/40232839130), ambos `success`.
- **Ramas/PR obsoletas cerradas sin fusionar:** #132 (solapada con #131/#133), #134 y #137 (intentos documentales con base desfasada), sustituidas por #140.
- **Resultado:** el encabezado activo, las tareas de los cinco expedientes, los límites de las fuentes y la etapa posterior de Orario ya están sincronizados en `main`. DMR-045 no queda cerrado en cuanto al canon: las páginas narrativas primarias siguen pendientes.


### CONV-DM-2026-10-25-012 — Registrar páginas comunitarias Miraheze como fuentes secundarias de DMR-045
- **Fecha:** 2026-10-25.
- **Resultado:** las fichas públicas de Meteria, Alfia, Zald, Erebus y Rudra Familia se registran como DMR-045-SRC-033–037, tras reservar SRC-030–032 para los compendios BOOK☆WALKER ya integrados.
- **Límites:** las páginas no son oficiales y no se ha establecido su independencia editorial respecto de otras wikis. Sus resúmenes y listas de apariciones son pistas de búsqueda, no pasajes primarios. “Eren” sigue sin aprobarse como alias de la novelización y la trampa se atribuye al grupo Rudra Familia, no personalmente al dios Rudra.
- **Impacto:** directorio de fuentes, registro central, auditoría, fichas Markdown, pruebas, cola, índice maestro y registro de decisiones. No se añaden claims, relaciones ni aliases; los cinco localizadores primarios continúan abiertos.

### CONV-DM-2026-10-25-013 — Tres compendios gratuitos de BOOK☆WALKER para Astrea Record 1–3
- **Fecha:** 2026-10-25.
- **Estado:** INTEGRATED and VALIDATED in main.
- **Origen:** búsqueda pública de distribuidores licenciados encontró los compendios de muestras de octubre, noviembre y diciembre de 2022, que incluyen Astrea Record 1, 2 y 3. Es un tipo de recurso diferente de las fichas individuales ya registradas, así que se guardan sus tres rutas normales sin duplicar IDs existentes.
- **Acceso observado:** el compendio de octubre lleva al lector público; la extracción no pudo abrir esa vista y el reintento directo del lector terminó en timeout. Las rutas normales de muestra de noviembre y diciembre también terminaron en timeout.
- **Límite de evidencia:** DMR-045-SRC-030–032 quedan metadata_checked_only, con claims_supported vacíos y sin localizadores narrativos. El compendio de octubre advierte además que su contenido de muestra puede diferir de la edición final. Ninguna ruta confirma técnica, relación o escena de Alfia, Zald, Meteria, Erebus o Rudra.
- **Integración confirmada:** PR [#143](https://github.com/jonhararagi/wordwaifu/pull/143) integrada en main por SHA exacto `5cf3eb069bca47d2ce488a7ffb1128c1c830c7e4`.
- **CI de la PR, head SHA `9b032700559afcfdc3fd4ba1fd45f931829bf0fb`:** [Validate WordWaifu](https://github.com/jonhararagi/wordwaifu/actions/runs/40260108783) y [DanMachi Lore and Retrieval Integrity](https://github.com/jonhararagi/wordwaifu/actions/runs/40260108791), ambos success.
- **CI post-merge sobre el SHA exacto:** [Validate WordWaifu](https://github.com/jonhararagi/wordwaifu/actions/runs/40260414219) y [DanMachi Lore and Retrieval Integrity](https://github.com/jonhararagi/wordwaifu/actions/runs/40260414283), ambos success; el segundo completó browser smoke, validación de catálogo/enlaces y subida de capturas.
- **Implementación integrada:** directorio de fuentes de la aplicación, auditoría DMR-045, registro central, cola, índice maestro y pruebas de directorio/integridad.
- **Prioridad vigente:** conseguir texto primario legible por vía autorizada para los cinco expedientes; Orario continúa en cola.

### CONV-DM-2026-10-25-014 — Añadir la ruta de muestra NOOK de DanMachi vol. 14
- **Fecha:** 2026-10-25.
- **Resultado:** la ficha de Barnes & Noble enlaza una ruta “Read sample” hacia NOOK, registrada como DMR-045-SRC-038. La apertura del endpoint devolvió “Cache miss” en esta consulta; no se obtuvo texto narrativo.
- **Límite factual:** metadata_checked_only, claims_supported vacío, CONT-MAIN-LN. No confirma el capítulo 13, el epílogo, la trampa de grupo ni una orden/conocimiento personal de Rudra.
- **Impacto:** fuente accesible desde el directorio UI, el registro central y la auditoría, con regresiones para preservar el límite de evidencia. No se añaden claims ni relaciones; DMR-045 continúa abierto.

### CONV-DM-2026-10-25-015 — Registrar rutas oficiales BinB de muestras de SB Creative

- **Fecha:** 2026-10-25.
- **Hallazgo:** el catálogo electrónico oficial de SB Creative (https://ebook.sbcr.jp/landing/p/danmachi) ofrece enlaces 立ち読み para Astrea Record 1, 2 y 3 y DanMachi vol. 14. Las rutas BinB directas se conservan individualmente como DMR-045-SRC-039–042.
- **Resultado del acceso:** la vista pública del lector mostró un iframe y “Now loading...”, sin página narrativa ni localizador verificable. Esto no demuestra indisponibilidad general.
- **Decisión:** cada ruta permanece metadata_checked_only con claims_supported vacío y continuidad individual preservada (CONT-AR para los tres Astrea Record; CONT-MAIN-LN para vol. 14). No se crean claims, relaciones ni aliases.
- **Estado de PR #146:** integrada por SHA dc7fa0fe44d259e710902d5d741fe11a85b3e3a0; los workflows pre-merge pasaron; el conector de consulta de workflows solo devuelve ejecuciones disparadas por pull_request y no permite verificar los workflows push posteriores a la fusión; no se afirma su resultado.

### CONV-DM-2026-10-25-016 — Registrar integración de las rutas oficiales BinB
- **Fecha:** 2026-10-25.
- **Integración:** PR #147, merge SHA 58025c70e8fd26d6ce3c2043c8fd5d51e5cc0d98; SRC-039–042 ya están en main.
- **CI de PR:** Validate WordWaifu success (https://github.com/jonhararagi/wordwaifu/actions/runs/40262391617) y DanMachi Lore and Retrieval Integrity success (https://github.com/jonhararagi/wordwaifu/actions/runs/40262391545), ambos sobre head 32891061a411b66ac9a66000d8f5b0c4f2b0ba56.
- **CI post-merge:** la consulta de workflows disponible filtra ejecuciones pull_request y no permitió verificar las ejecuciones push asociadas al SHA de fusión; no se afirma su resultado.
- **Resultado de lore:** cuatro rutas oficiales adicionales siguen metadata_checked_only, sin claims nuevos y sin localizadores narrativos; los cinco huecos primarios de DMR-045 siguen pendientes.


### CONV-DM-2026-10-26-001 — Corregir la evidencia de integración de las fuentes DMR-045
- **Fecha:** 2026-10-26.
- **Estado al registrar:** implementación documental realizada en la rama `docs/fix-stale-dmr045-status-integration-2026-10-26`; pendiente de revisión de PR y CI de esta corrección.
- **Hallazgo:** la última nota de DMR-045 en `docs/STATUS.md` todavía decía que la ampliación de fuentes Miraheze/NOOK estaba pendiente de CI y fusión, aunque la PR #146 ya estaba integrada en `main`.
- **Corrección:** sustituir esa nota obsoleta por la evidencia de integración de la PR [#146](https://github.com/jonhararagi/wordwaifu/pull/146), merge SHA `dc7fa0fe44d259e710902d5d741fe11a85b3e3a0`, y los dos workflows exitosos de la PR más los dos workflows exitosos del push posterior a la fusión.
- **CI anterior verificada:** PR head `634cd5cc403dbdb0360a2b72ecd77997206ff2bc`; [Validate WordWaifu](https://github.com/jonhararagi/wordwaifu/actions/runs/40261732974), [DanMachi Lore and Retrieval Integrity](https://github.com/jonhararagi/wordwaifu/actions/runs/40261733009); post-merge sobre `dc7fa0fe44d259e710902d5d741fe11a85b3e3a0`: [Validate WordWaifu](https://github.com/jonhararagi/wordwaifu/actions/runs/40261844162), [DanMachi Lore and Retrieval Integrity](https://github.com/jonhararagi/wordwaifu/actions/runs/40261844139). Los cuatro terminaron en `success`.
- **Límite factual mantenido:** los registros DMR-045-SRC-033–038 documentan referencias comunitarias secundarias y una ruta de muestra licenciada cuyo visor no entregó texto narrativo. Los cinco localizadores primarios de Alfia, Zald, Meteria, Erebus y Rudra siguen pendientes. No se añadieron claims, aliases, relaciones ni hechos de lore.
- **Documentos afectados:** `docs/STATUS.md` y este registro. La prioridad de DMR-045 y la cola de Orario no cambian.

### CONV-DM-2026-10-26-002 — Corregir la atribución editorial de DMR-045-CLM-006
- **Fecha:** 2026-10-26.
- **Hallazgo:** la ficha oficial de SB Creative para Astrea Record 3 muestra una sinopsis general, pero no nombra los emparejamientos Zald–Ottar y Alfia–Astrea Familia. El detalle específico aparece en una reseña comunitaria de BookLive atribuida a ブクログ y fechada el 2023-02-11.
- **Corrección:** el detalle se reasigna a DMR-045-SRC-043 (COMMUNITY_REVIEW) y DMR-045-CLM-006 pasa a secondary_checked; SRC-005 mantiene el alcance general de la sinopsis y ya no respalda ese claim.
- **Impacto:** se actualizan el directorio de fuentes, el registro central, la auditoría, las fichas de Alfia/Zald, el grafo, la cola, el índice maestro, el estado y las pruebas. No se añaden hechos ni relaciones nuevas; se corrige el tipo de evidencia.
- **Pendiente:** encontrar y cotejar la escena en un ejemplar o lector licenciado con texto legible antes de elevar el dato a evidencia primaria.

### CONV-DM-2026-10-26-003 — Registrar integración de la corrección de procedencia
- **Fecha:** 2026-10-26.
- **Integración:** PR #151, merge SHA fc3080189815805ae2e0853b177bae33d0cec516.
- **CI de PR:** Validate WordWaifu success (https://github.com/jonhararagi/wordwaifu/actions/runs/40265979989) y DanMachi Lore and Retrieval Integrity success (https://github.com/jonhararagi/wordwaifu/actions/runs/40265980006), ambos sobre head 4771a81e371f4c2997c4c2fb9414e809d1645ee9.
- **CI post-merge:** el conector de workflows utilizado filtra por pull_request y no permitió comprobar los runs push asociados al SHA de fusión; no se afirma ese resultado.
- **Resultado de lore:** SRC-005 quedó limitado a la sinopsis oficial general; SRC-043 es la reseña comunitaria para CLM-006; claim y dos relaciones figuran secondary_checked. DMR-045 sigue abierto para cotejo primario.


### CONV-DM-2026-10-26-004 — Registrar la ruta oficial BinB del volumen 20 sin ascenderla a evidencia narrativa
- **Fecha:** 2026-10-26.
- **Estado final:** integrada y validada en `main` mediante PR [#153](https://github.com/jonhararagi/wordwaifu/pull/153), merge SHA `1894e3acf3ced6c472b9e8979dcb53874bf40226`.
- **Fuente:** el [catálogo oficial de SBCr eBook Store](https://ebook.sbcr.jp/landing/p/danmachi) lista DanMachi vol. 20 con enlace 立ち読み; se comprobó la ruta normal de lector https://ebook.sbcr.jp/sbv.17050.sbcr/main.html?cid=81562869JAAA20MBJE3X&lginbtn=false.
- **Resultado real:** el lector solo mostró iframe, “Now loading...” y menú; no se recuperó texto narrativo ni localizador.
- **Decisión de evidencia:** registrar el acceso como DMR-045-SRC-044, `metadata_checked_only`, continuidad `CONT-MAIN-LN` y claims vacíos. No inferir identidades ni escenas del prólogo o de los capítulos 2–3 a partir del enlace, su índice o el error de carga.
- **Archivos afectados:** `src/lore-corpus.js`, `tests/test_danmachi_lore_source_directory.cjs`, registro central de fuentes, auditoría DMR-045, `WORK_QUEUE.md`, `MASTER_INDEX.md`, `docs/STATUS.md` y este registro.
- **CI de PR:** Validate WordWaifu [run 40284254967](https://github.com/jonhararagi/wordwaifu/actions/runs/40284254967) y DanMachi Lore and Retrieval Integrity [run 40284254924](https://github.com/jonhararagi/wordwaifu/actions/runs/40284254924), ambos success sobre head `857ac384f03fc62c624f74297736befc431e19d9`.
- **CI post-merge:** Validate WordWaifu [run 40284421948](https://github.com/jonhararagi/wordwaifu/actions/runs/40284421948) y DanMachi Lore and Retrieval Integrity [run 40284422026](https://github.com/jonhararagi/wordwaifu/actions/runs/40284422026), ambos success sobre el SHA exacto de `main`.
- **Prioridad:** DMR-045 continúa antes de Orario; siguen pendientes los cinco localizadores primarios.


### CONV-DM-2026-10-26-005 — Integrar la sinopsis comunitaria por capítulos del volumen 20 como pista secundaria
- **Fecha:** 2026-10-26.
- **Tipo:** investigación, incorporación de evidencia secundaria y ampliación de UI.
- **Decisión operativa:** cuando una wiki reconocida ofrece una sinopsis por capítulos más concreta que la ficha editorial, puede utilizarse para ampliar la investigación si se etiqueta como secundaria, conserva el capítulo del resumen como localizador comunitario (no página de novela) y deja pendiente el cotejo licenciado.
- **Hallazgo:** [https://danmachi.fandom.com/wiki/DanMachi_Light_Novel_Volume_20/Synopsis](https://danmachi.fandom.com/wiki/DanMachi_Light_Novel_Volume_20/Synopsis) resume una retrospectiva de Alfia en el capítulo 2 y el episodio de Zald/Udaeus en el capítulo 3. El acceso directo quedó bloqueado en esta consulta, pero se recuperó contenido indexado por búsqueda; la evidencia se limita al resumen visto.
- **Implementación en rama:** registra DMR-045-SRC-045, DMR-045-CLM-019 y DMR-045-CLM-020; añade las pistas a las fichas de Alfia y Zald, al expediente interactivo CONT-MAIN-LN, al directorio de fuentes y a las pruebas. No crea aristas nuevas ni eleva claims a evidencia primaria.
- **Alcance y continuidad:** CONT-MAIN-LN como referencia secundaria; no trasladar las escenas a CONT-AR. Los cinco localizadores primarios de DMR-045 siguen abiertos.
- **Documentos afectados:** auditoría DMR-045, registro de fuentes, fichas de Alfia y Zald, dossier interactivo, directorio de fuentes, pruebas, cola, índice maestro, docs/STATUS.md, docs/DECISIONS.md y registro DanMachi.
- **Corrección surgida de CI:** se retiró DMR-045-CLM-018 de `claims_supported` en SRC-036 (Miraheze), porque ese claim cita la ficha inglesa de Fandom `DMR-029-SRC-006`. El registro ya no atribuye a una wiki el respaldo de otra. No cambia el contenido factual del claim ni su estado secundario.
- **Integración y validación:** PR [#155](https://github.com/jonhararagi/wordwaifu/pull/155) integrada en `main` por SHA `21c55f905e28c419df0616e25247d8960533fde8`. CI de la PR: [Validate #40348659487](https://github.com/jonhararagi/wordwaifu/actions/runs/40348659487) y [Lore/Integrity #40348659494](https://github.com/jonhararagi/wordwaifu/actions/runs/40348659494), ambos success sobre head `bd707757659be7ee976d5b41bf88007b63482928`. CI post-merge: [Lore/Integrity #40348901258](https://github.com/jonhararagi/wordwaifu/actions/runs/40348901258) y [Validate #40348901098](https://github.com/jonhararagi/wordwaifu/actions/runs/40348901098) terminaron en `success`; la observación previa de `Install Chromium` fue intermedia.
- **Estado del lore:** las dos pistas están integradas, en `CONT-MAIN-LN` y `secondary_checked`; la verificación narrativa primaria sigue pendiente.


### CONV-DM-2026-10-26-007 — Registrar la aparición posterior de Rudra sin inferir autorización previa
- **Fecha:** 2026-10-26.
- **Tipo:** investigación secundaria y mejora del expediente interactivo DMR-045.
- **Hallazgo:** la sinopsis comunitaria del volumen 14 describe que Rudra aparece ante Ryuu después de la venganza contra Rudra Familia, comenta que le habría gustado invitar a la Ryuu de ese momento a su Familia y es capturado por el Gremio después de que ella se marcha. Fuente: https://danmachi.fandom.com/wiki/DanMachi_Light_Novel_Volume_14/Synopsis. La consulta directa falló con HTTP 402; se usó el resultado indexado.
- **Implementación:** DMR-045-SRC-046 y DMR-045-CLM-021; notas en la ficha de Rudra, el resumen de personaje y la vista interactiva `CONT-MAIN-LN`; pruebas para la fuente, el claim y la frontera de atribución.
- **Límite aceptado:** la escena posterior no prueba que Rudra conociera, ordenara, diseñara o autorizara la trampa de Rudra Familia. No se añade relación canónica nueva; la afirmación sigue `secondary_checked` hasta cotejo licenciado.
- **Integración y validación:** **Integración:** PR [#157](https://github.com/jonhararagi/wordwaifu/pull/157), merge SHA `364876830d0b16eccc81969ea928180c29ba9f35`.
- **CI de PR (head `7efaaf78083989f737a0e85ce1f15dcff77b543e`):** [Validate #40354723328](https://github.com/jonhararagi/wordwaifu/actions/runs/40354723328) y [Lore/Integrity #40354723341](https://github.com/jonhararagi/wordwaifu/actions/runs/40354723341), ambos `success`.
- **CI post-merge sobre el SHA exacto de `main`:** [Lore/Integrity #40354993811](https://github.com/jonhararagi/wordwaifu/actions/runs/40354993811) y [Validate #40354994039](https://github.com/jonhararagi/wordwaifu/actions/runs/40354994039), ambos `success` (confirmado el 2026-10-26).
- **Límite factual:** `DMR-045-CLM-021` sigue `secondary_checked`; no se cotejó una página de la novela, no se añadió una arista canónica y no se atribuye a Rudra conocimiento u orden de la trampa previa.
- **Estado del lore:** el detalle posterior se ha incorporado a la ficha de Rudra y su UI como pista secundaria de CONT-MAIN-LN. El cotejo primario y la atribución de conocimiento/orden previos siguen abiertos.

### CONV-DM-2026-10-26-008 — Reintento de muestra licenciada para DMR-045
- **Fecha:** 2026-10-26.
- **Estado:** RECORDED.
- **Resultado:** se confirmaron páginas públicas de BOOK☆WALKER para DanMachi vol. 14 y Astrea Record 3 con opción `試し読み`. El enlace de prueba de vol. 14 redirigió a un visor cuyo contenido no pudo recuperarse con la consulta web disponible; no se leyó texto narrativo, capítulo ni página.
- **Alcance:** no se crea un ID de fuente duplicado, claim, alias o arista. Las rutas ya existentes siguen siendo simples rutas de lectura autorizada; los cinco cotejos primarios de DMR-045 permanecen abiertos.
- **Límite operativo:** no se utilizó ningún espejo no autorizado ni se intentó eludir la limitación del visor. El siguiente paso útil es leer una vista previa que efectivamente muestre páginas narrativas en una sesión normal, o consultar una edición licenciada accesible.


### CONV-DM-2026-10-26-009 — Cierre de la validación post-merge de la PR documental #158
- **Fecha:** 2026-10-26.
- **Estado:** INTEGRATED_AND_VALIDATED (documentación; checks automatizados del commit resultante).
- **Main resultante:** `b01eeb269622d5d8c243fdf05c2fb056a7008221`, confirmado en la referencia real `main`.
- **CI post-merge sobre ese SHA exacto:** [Validate WordWaifu #40359137390](https://github.com/jonhararagi/wordwaifu/actions/runs/40359137390) y [DanMachi Lore and Retrieval Integrity #40359137265](https://github.com/jonhararagi/wordwaifu/actions/runs/40359137265), ambos `success`.
- **Alcance:** PR #158 actualiza la trazabilidad del cambio de Rudra y el intento de muestra licenciada. La integración documental no añade evidencia narrativa ni cambia el estado `secondary_checked` de DMR-045-CLM-021.
- **Pendiente:** los cinco cotejos primarios de DMR-045 siguen abiertos; la lectura autorizada no proporcionó texto narrativo verificable.


### CONV-DM-2026-10-26-010 — Registrar rutas BookLive sin elevar certeza narrativa
- **Fecha:** 2026-10-26.
- **Resultado:** las fichas públicas de [BookLive · DanMachi vol. 14](https://booklive.jp/product/index/title_id/201522/vol_no/014) y [BookLive · Astrea Record 3](https://booklive.jp/product/index/title_id/1237250/vol_no/003) exponen controles de prueba en navegador y app. Solo se consultaron páginas comerciales y metadatos; no se leyó contenido del visor.
- **Implementación:** DMR-045-SRC-047/048, dos entradas `metadata_checked_only` con claims vacíos, enlaces visibles en el directorio de fuentes y en las fichas interactivas de Rudra, Alfia, Zald y Erebus; pruebas de regresión añadidas.
- **Límite:** no se añaden claims, aristas, aliases ni hechos narrativos. Los cinco localizadores primarios siguen abiertos y la separación CONT-MAIN-LN / CONT-AR / CONT-GAME se conserva.


### CONV-DM-2026-10-26-011 — Integración de rutas BookLive metadata-only
- **Integración:** PR [#160](https://github.com/jonhararagi/wordwaifu/pull/160) fusionada con squash en `main`, SHA `968ad23141ffdc2db032383228445fddc753b755`.
- **CI pre-merge sobre head** `6d89ea9a7846c64132b08f58b628ff70b075a302`: [Validate #40381631794](https://github.com/jonhararagi/wordwaifu/actions/runs/40381631794) y [DanMachi Lore and Retrieval Integrity #40381631812](https://github.com/jonhararagi/wordwaifu/actions/runs/40381631812), ambos `success`.
- **CI post-merge final:** [Lore/Integrity #40381983723](https://github.com/jonhararagi/wordwaifu/actions/runs/40381983723) y [Validate #40381983810](https://github.com/jonhararagi/wordwaifu/actions/runs/40381983810) terminaron en `success` sobre el SHA exacto de `main` `968ad23141ffdc2db032383228445fddc753b755`. El estado previo `in_progress` de Chromium fue transitorio.
- **Alcance factual:** SRC-047 (DanMachi vol. 14, CONT-MAIN-LN) y SRC-048 (Astrea Record 3, CONT-AR) son fichas BookLive con oferta de vista previa, no narración leída. Ambos conservan `metadata_checked_only` y claims/events vacíos. No se añadieron claims, aristas ni aliases y no se elevaron los niveles de evidencia de Alfia, Zald, Meteria, Erebus o Rudra.

### CONV-DM-2026-10-26-012 — Pista de cierre de Astrea Record 3 en reseña BookLive
- **Fecha:** 2026-10-26.
- **Estado:** RECORDED; claim secundario añadido, verificación primaria pendiente.
- **Hallazgo:** el fragmento visible/indexado de la reseña comunitaria BookLive SRC-043 parece mencionar una ofrenda floral de Bell y Hermes ante tumbas de Erebus, Zald y Alfia.
- **Implementación:** DMR-045-CLM-022, continuity_scope `CONT-AR`, status `secondary_checked`; enlace desde las notas interactivas de los tres personajes y pruebas de regresión.
- **Límites:** no se crea un evento ni relaciones; no se infiere vínculo privado o destino individual a partir de la reseña. No se trasladan a la novelización los detalles de Erebus pertenecientes a CONT-GAME.
- **Siguiente paso:** cotejar la escena en el texto licenciado; la reseña no reemplaza capítulo o página narrativa.
- **Integración y CI de PR #162:** integrada por squash en `main`, merge SHA `09a771bd752a8a903984bf5f84510a36565f9206`. CI de la PR sobre head `3bbd6e89e6a1c73a338acf7b36574e6642392712`: [Validate WordWaifu #40394117882](https://github.com/jonhararagi/wordwaifu/actions/runs/40394117882) y [DanMachi Lore and Retrieval Integrity #40394118254](https://github.com/jonhararagi/wordwaifu/actions/runs/40394118254), ambos `success`. CI post-merge sobre el SHA exacto de `main`: [DanMachi Lore and Retrieval Integrity #40400987218](https://github.com/jonhararagi/wordwaifu/actions/runs/40400987218) y [Validate WordWaifu #40400987257](https://github.com/jonhararagi/wordwaifu/actions/runs/40400987257), ambos `success`.
- **Estado después de CI:** el claim y su UI quedan integrados y validados técnicamente; DMR-045 permanece abierto y CLM-022 sigue siendo una pista secundaria, sin relaciones ni evento.

### CONV-DM-2026-10-26-013 — Registrar ruta Kobo del volumen 20 con límites de evidencia
- **Fecha:** 2026-10-26.
- **Estado:** IMPLEMENTADO E INTEGRADO EN main; CI de PR aprobado; estado post-merge no confirmado.
- **PR e integración:** [PR #164](https://github.com/jonhararagi/wordwaifu/pull/164) fusionada por squash en main. Head probado: dc60cf91fba87a85419bc029d24dd7b8446420f6; SHA resultante de main confirmado: 345db0189308b2e34a31bbf8f3930e75f0b4fc2f.
- **CI de PR sobre el head exacto:** [Validate WordWaifu #40432114887](https://github.com/jonhararagi/wordwaifu/actions/runs/40432114887) y [DanMachi Lore and Retrieval Integrity #40432114895](https://github.com/jonhararagi/wordwaifu/actions/runs/40432114895), ambos `success`; incluyen sintaxis JS, expedientes, directorio de fuentes y smoke test de navegador.
- **Verificación post-merge:** no confirmada. La consulta del SHA de main no devolvió contextos de estado ni ejecuciones accesibles mediante las consultas disponibles; no se afirma que los workflows post-merge estén en verde.

- **Tipo:** investigación de fuente y navegación en la enciclopedia.
- **Contenido:** el resultado público indexado de Kobo muestra “Preview Now” y “Save Preview” para la edición inglesa de DanMachi vol. 20; la apertura directa devolvió “Cache miss”. La ruta se registra como metadata_checked_only, sin afirmar que se haya leído la novela.
- **Alcance y continuidad:** DMR-045, CONT-MAIN-LN; acceso desde las notas de investigación de Alfia y Zald únicamente en esa continuidad.
- **Documentos, registros o pruebas afectados:** DMR-045-SRC-049, registro central de fuentes, src/lore-corpus.js, archivo interactivo de personajes, pruebas de directorio y fichas, cola, índice y estado.
- **Límite:** no cambia claims, acontecimientos, relaciones, aliases, conocimiento de personajes ni estado de canon. La prioridad primaria de DMR-045 sigue abierta.
- **Siguiente acción:** ejecutar CI del PR y abrir manualmente la vista previa desde una sesión normal; solo registrar localizador narrativo si aparece texto legible.

### CONV-DM-2026-10-27-001 — Registrar ruta de muestra BOOK☆WALKER para el volumen 20
- **Fecha:** 2026-10-27.
- **Estado:** IMPLEMENTADO E INTEGRADO; CI DE PR APROBADO; CI POST-MERGE APROBADO.
- **Tipo:** investigación de fuente y mejora de navegación.
- **Contenido:** la ficha de BOOK☆WALKER para DanMachi vol. 20 ofrece 試し読み; la apertura normal redirige al visor de prueba, inaccesible para la herramienta: al seguir la redirección devuelve «Internal Error» y señala «not accessible via this tool»; no se confirmó una respuesta HTTP del visor. No se inspeccionaron páginas narrativas.
- **Alcance y continuidad:** DMR-045-SRC-050, `CONT-MAIN-LN`; enlace desde las notas de Alfia y Zald de la novela principal, sin filtrarse a `CONT-AR` ni `CONT-GAME`.
- **Archivos afectados:** directorio de fuentes, archivo de personajes, pruebas de directorio/fichas, auditoría DMR-045, cola, índice, estado y decisiones.
- **Integración:** [PR #166](https://github.com/jonhararagi/wordwaifu/pull/166) fusionada por squash; SHA confirmado de `main`: `2951fa55396564cb878e00ab5c7d2b297966cd64`.
- **CI de PR:** [Validate WordWaifu #40450101232](https://github.com/jonhararagi/wordwaifu/actions/runs/40450101232) y [DanMachi Lore and Retrieval Integrity #40450101166](https://github.com/jonhararagi/wordwaifu/actions/runs/40450101166) finalizaron `success` sobre el head `80c5468f78812312898dbe3f6de709856f63d0d2`.
- **CI post-merge sobre el SHA exacto de main:** [Validate WordWaifu #40459532846](https://github.com/jonhararagi/wordwaifu/actions/runs/40459532846) y [DanMachi Lore and Retrieval Integrity #40459532519](https://github.com/jonhararagi/wordwaifu/actions/runs/40459532519), ambos `success` sobre `2951fa55396564cb878e00ab5c7d2b297966cd64`.
- **Límite:** fuente `metadata_checked_only`, sin claims, eventos, relaciones, aliases o cambios de métricas. Los cinco localizadores narrativos siguen abiertos.
- **Siguiente acción:** confirmar los workflows post-merge y, por separado, abrir la muestra en un navegador normal; registrar un pasaje solo si el texto queda realmente visible con localizador reproducible.


### CONV-DM-2026-10-27-002 — Usar la página de diferencias de Astrea Record 3 solo como guía secundaria
- **Fecha:** 2026-10-27.
- **Estado:** INVESTIGACIÓN SECUNDARIA REGISTRADA; IMPLEMENTADA, INTEGRADA Y VALIDADA TÉCNICAMENTE.
- **Hallazgo:** la página comunitaria [Astrea Record Volumen 3/Diferencias](https://danmachi.fandom.com/es/wiki/Astrea_Record_Novela_Ligera_Volumen_3/Diferencias) resume cambios entre el juego y la novelización relacionados con habilidades de Alfia, el uso de la esgrima de Zald, Deus Ambrosia y una escena EXTRA que incluye a Erebus.
- **Criterio aplicado:** la página se clasifica como `secondary_checked`, `CONT-AR`; sirve para localizar temas y preguntas, no para afirmar que se leyó el texto primario. La ficha oficial de GA Bunko ofrece `試し読み`, pero la vista pública consultada no expuso páginas narrativas legibles.
- **Alcance de implementación:** directorio de fuentes y notas interactivas de Alfia, Zald y Erebus bajo `CONT-AR`, con pruebas para impedir filtración a `CONT-MAIN-LN` y `CONT-GAME`.
- **Integración:** PR [#168](https://github.com/jonhararagi/wordwaifu/pull/168), squash SHA `99a667e60f3651b98759a1993a26258ba37dd645`.
- **CI de PR sobre `16338edec86670b1692084bea446657bc657eb71`:** [Validate WordWaifu #40510817854](https://github.com/jonhararagi/wordwaifu/actions/runs/40510817854) y [DanMachi Lore and Retrieval Integrity #40510817870](https://github.com/jonhararagi/wordwaifu/actions/runs/40510817870), ambos `success`.
- **CI post-merge sobre `99a667e60f3651b98759a1993a26258ba37dd645`:** [Validate WordWaifu #40511064727](https://github.com/jonhararagi/wordwaifu/actions/runs/40511064727) y [DanMachi Lore and Retrieval Integrity #40511064313](https://github.com/jonhararagi/wordwaifu/actions/runs/40511064313), ambos `success`.
- **Límite:** no se crean claims, eventos, relaciones, aliases ni métricas; Meteria sigue sin identificación por pasaje primario y los cinco expedientes de DMR-045 continúan abiertos.


### CONV-DM-2026-10-27-003 — Fijar el runner de CI para Playwright 1.55
- **Fecha:** 2026-10-27.
- **Estado:** Corregido e integrado mediante PR #168; CI de PR y post-merge aprobados.
- **Hallazgo:** la acción de integridad falló en `Install Chromium` con el error observado `Playwright does not support chromium on ubuntu26.04`. El runner de GitHub se resolvió a Ubuntu 26.04 mediante `ubuntu-latest`.
- **Decisión técnica:** fijar a `ubuntu-24.04` los workflows `.github/workflows/validate.yml` y `.github/workflows/danmachi-lore-check.yml`, ambos con Playwright 1.55. La migración oficial de la etiqueta `ubuntu-latest` a Ubuntu 26.04 está documentada por [GitHub](https://github.blog/changelog/2026-09-17-ubuntu-26-generally-available-and-latest-migration/); la versión de Playwright usada por el repo falló en esa imagen.
- **Corrección de test:** hacer que una aserción de límites de fuente no falle por diferencia irrelevante de mayúsculas.
- **Resultado:** los workflows sobre la cabeza de PR `16338edec86670b1692084bea446657bc657eb71` finalizaron en `success` ([Validate WordWaifu #40510817854](https://github.com/jonhararagi/wordwaifu/actions/runs/40510817854); [DanMachi Lore and Retrieval Integrity #40510817870](https://github.com/jonhararagi/wordwaifu/actions/runs/40510817870)). Los workflows sobre el SHA de `main` `99a667e60f3651b98759a1993a26258ba37dd645` también finalizaron en `success` ([Validate WordWaifu #40511064727](https://github.com/jonhararagi/wordwaifu/actions/runs/40511064727); [DanMachi Lore and Retrieval Integrity #40511064313](https://github.com/jonhararagi/wordwaifu/actions/runs/40511064313)).
- **Límite:** cambio de entorno de pruebas; no altera la funcionalidad narrativa ni la jerarquía de evidencia de DMR-045.

### CONV-DM-2026-10-27-004 — Bitácora anti-repetición y avance hacia otros personajes
- **Fecha:** 2026-10-27.
- **Estado:** implementada, integrada y validada por PR #170.
- **Instrucción aceptada:** dejar de repetir pasadas generales sobre personajes ya analizados y no reescribir personalidades por estilo. Si las wikis o el juego no informan un nivel/poder/skill, registrarlo como «no informado en las fuentes consultadas»; no inferir automáticamente que no existe en el canon ni inventar un dato para llenar la ficha.
- **Implementación:** crear [CHARACTER_UPDATE_LEDGER.md](../lore/danmachi/CHARACTER_UPDATE_LEDGER.md), con estado, fuentes, hallazgos, campos no reportados, conflictos y un disparador concreto de reapertura por personaje. Añadir la continuidad de archivo `CONT-SECONDARY` para exponer los resultados comunitarios sin mezclarlos con `CONT-AR`, `CONT-GAME` o `CONT-ANIME`.
- **Primera cohorte:** Alise, Kaguya, Lyra, Maryuu, Neze, Noin, Iska, Asta, Ryana y Celty; se documentaron niveles, magias/skills/equipo donde la fuente los enumera y las lagunas/conflictos donde no. DMR-045 (Alfia, Zald, Meteria, Erebus, Rudra) queda en `HOLD_FOR_PRIMARY_SOURCE` hasta evidencia nueva.
- **Protección contra bucles:** una pasada secundaria por fuente basta. No volver a visitar una misma wiki para conseguir un dato que no contiene; reabrir solo con texto licenciado legible, una fuente oficial nueva, un cambio material en la fuente o una contradicción nueva.
- **Integración:** [PR #170](https://github.com/jonhararagi/wordwaifu/pull/170), squash SHA `034eb037f98ce25076de7fc4217a62cb960172eb`; la comparación de GitHub confirma que `main` coincide.
- **CI de PR sobre `e0cb29570ad8cd0b7b704ca73fa95882765e66a0`:** [Validate WordWaifu #40525522243](https://github.com/jonhararagi/wordwaifu/actions/runs/40525522243) y [DanMachi Lore and Retrieval Integrity #40525522040](https://github.com/jonhararagi/wordwaifu/actions/runs/40525522040), ambos `success`.
- **CI post-merge sobre `034eb037f98ce25076de7fc4217a62cb960172eb`:** [Validate WordWaifu #40525793577](https://github.com/jonhararagi/wordwaifu/actions/runs/40525793577) y [DanMachi Lore and Retrieval Integrity #40525794301](https://github.com/jonhararagi/wordwaifu/actions/runs/40525794301), ambos `success`.
- **Límite:** las notas siguen siendo secundarias; no se crean claims/eventos/aristas ni se cambian personalidades en esta tanda. El test `tests/test_character_update_ledger.cjs` queda conectado a ambos workflows.

### CONV-DM-2026-10-27-005 — Aplicar la bitácora a otra Familia y registrar capacidades faltantes
- **Fecha:** 2026-10-27.
- **Estado:** implementado e integrado en `main` mediante PR #172; los dos workflows de PR aprobaron; CI post-merge registrado por separado.
- **Instrucción aplicada:** al haber repetido varios intentos sobre los mismos expedientes, pasar a otros personajes; no repetir la actualización de personalidad. Si las wikis/juegos no informan un poder, nivel, skill, magia o coste, anotar que la fuente no lo informa y continuar sin inventarlo.
- **Cohorte:** Allen Fromel, Hedin Selland, Hogni Ragnar y Alfrigg, Dvalinn, Berling y Grer Gulliver. Se consulta la información comunitaria de capacidades, skills, magia y equipo.
- **Implementación:** [DMR-052](../lore/danmachi/research/inbox/DANMACHI-RESEARCH-052-freya-familia-secondary-capabilities.md); ampliación de CONT-SECONDARY, bitácora anti-repetición, directorio de fuentes y pruebas.
- **Límites:** todos los hallazgos de esta tanda son secundarios; no se crean claims/eventos/relaciones nuevos ni se modifican personalidades. Los cinco cotejos primarios de DMR-045 siguen pendientes y se reabrirán solo ante evidencia nueva.
- **Integración:** [PR #172](https://github.com/jonhararagi/wordwaifu/pull/172), squash SHA de `main` `79505bd740d47560d4bc67166c807d14090a950d`.
- **CI de PR:** [Validate WordWaifu #40572608737](https://github.com/jonhararagi/wordwaifu/actions/runs/40572608737) y [DanMachi Lore and Retrieval Integrity #40572608435](https://github.com/jonhararagi/wordwaifu/actions/runs/40572608435), ambos `success` sobre `1ece6f0117dadf2fb0b0a4988d23c13df34d0609`.
- **CI post-merge sobre el SHA exacto de `main` `79505bd740d47560d4bc67166c807d14090a950d`: [Validate WordWaifu #40590376454](https://github.com/jonhararagi/wordwaifu/actions/runs/40590376454) y [DanMachi Lore and Retrieval Integrity #40590376362](https://github.com/jonhararagi/wordwaifu/actions/runs/40590376362), ambos `success`.


### CONV-DM-2026-10-27-006 — Pasar a otra cohorte de capacidades sin reescribir personalidades
- **Fecha:** 2026-10-27.
- **Estado:** implementado e integrado en `main` mediante PR [#174](https://github.com/jonhararagi/wordwaifu/pull/174); CI de PR y post-merge aprobados.
- **Instrucción aplicada:** después de múltiples pasadas sobre los mismos personajes y fuentes, avanzar a otra cohorte cuando sea más útil; limitar la actualización al campo con evidencia nueva y no reformular personalidad como sustituto de información factual.
- **Cohorte:** Bete Loga, Tiona Hiryute y Tione Hiryute. Pasada limitada a nivel reportado, skills, magia, habilidades de desarrollo, equipo, snapshots de estado y límites de la evidencia comunitaria.
- **Implementación:** DMR-053, notas interactivas bajo CONT-SECONDARY, fuentes DMR-053-SRC-001..004, bitácora de actualizaciones y regresión para los tres expedientes.
- **Reglas de evidencia:** las cabeceras de nivel 6 y tablas de estadísticas de nivel 5 se mantienen separadas; las grafías Flosvirt/Frosvirt se guardan como diferencia entre fuentes; magia no listada se anota como no listada en esa fuente, sin afirmar ausencia universal.
- **Límites:** no se reescriben personalidades, no se modifican los expedientes históricos de las gemelas, y no se crean claims, eventos o relaciones narrativas nuevos. DMR-045 conserva los cinco cotejos primarios pendientes.
- **SHA de `main`:** `28ae6f34859bc0a59beaf7a711bfa54504265ffd`.
- **CI de PR sobre `37f50a3f0608cb00b3c355e75c008031e70bbe70`:** [Validate WordWaifu #40602468962](https://github.com/jonhararagi/wordwaifu/actions/runs/40602468962) y [DanMachi Lore and Retrieval Integrity #40602469069](https://github.com/jonhararagi/wordwaifu/actions/runs/40602469069), ambos `success`.
- **CI post-merge sobre el SHA exacto de `main` `28ae6f34859bc0a59beaf7a711bfa54504265ffd`:** [Validate WordWaifu #40602644529](https://github.com/jonhararagi/wordwaifu/actions/runs/40602644529) y [DanMachi Lore and Retrieval Integrity #40602644563](https://github.com/jonhararagi/wordwaifu/actions/runs/40602644563), ambos `success`.

### CONV-DM-2026-10-27-007 — Cruce de una fuente autoral alternativa ya registrada
- **Fecha:** 2026-10-27.
- **Estado:** implementado en rama; CI e integración pendientes.
- **Resultado:** el relato de Fujino Omori «それは遥か彼方の静穏の夢» ya estaba registrado como DMR-029-SRC-016 y era visible en el directorio de fuentes. La edición especial de Astrea Record 3 ya estaba registrada en DMR-045-SRC-002 y DMR-045-SRC-005.
- **Cambio real:** se enlaza explícitamente esa evidencia editorial con el expediente DMR-045 y se agrega una regresión para evitar duplicar la fuente o trasladar su escenario hipotético al canon principal.
- **Continuidad:** el relato es CONT-AU; la editorial describe el cuadernillo como una versión revisada de algo que podría haber sucedido. El marco alternativo no verifica acontecimientos, habilidades o costes de CONT-MAIN-LN ni cierra el cotejo primario de Meteria, Alfia o Zald.
- **Regla anti-repetición:** no volver a consultar el mismo relato o las mismas muestras bloqueadas para repetir el resultado. Reabrir solo ante un nuevo localizador primario legible o cambio material de fuente.


### CONV-DM-2026-10-27-008 — Nueva ruta licenciada de metadatos para DMR-045
- **Fecha:** 2026-10-27.
- **Estado:** implementado e integrado en main mediante [PR #177](https://github.com/jonhararagi/wordwaifu/pull/177); CI de PR aprobada.
- **SHA de main:** a9ab02584f857a9c3fabbba59b40e8799e7aaead.
- **CI de PR sobre aa20c6ebe92311d9b46b3410c1305ca3ef6802c8:** [Validate WordWaifu #40613817357](https://github.com/jonhararagi/wordwaifu/actions/runs/40613817357) y [DanMachi Lore and Retrieval Integrity #40613817354](https://github.com/jonhararagi/wordwaifu/actions/runs/40613817354), ambos success.
- **CI post-merge sobre el SHA exacto de main a9ab02584f857a9c3fabbba59b40e8799e7aaead:** [Validate WordWaifu #40613983958](https://github.com/jonhararagi/wordwaifu/actions/runs/40613983958) y [DanMachi Lore and Retrieval Integrity #40613983944](https://github.com/jonhararagi/wordwaifu/actions/runs/40613983944), ambos success.
- **Ruta:** BookLive, volumen 20: https://booklive.jp/product/index/title_id/201522/vol_no/020, registrada como DMR-045-SRC-052.
- **Resultado confirmado:** la ficha pública muestra metadatos del volumen y los controles ブラウザ試し読み / アプリ試し読みはこちら.
- **Límite:** no se abrió el lector ni se inspeccionaron páginas narrativas; el estado del lector es desconocido. No afirmar que la muestra falló ni que proporciona texto legible.
- **Regla anti-repetición:** esta ruta es distinta de BookWalker, Kobo, Google Books y BinB ya registradas. No repetir aquellas consultas bloqueadas sin cambio material.
- **Prioridad:** DMR-045 continúa IN_PROGRESS; Alfia, Zald, Meteria, Erebus y Rudra conservan sus cinco cotejos primarios pendientes.


### CONV-DM-2026-10-28-001 — Avanzar a otros personajes y cerrar campos no reportados
- **Fecha:** 2026-10-28.
- **Estado:** integrado en `main` y validado.
- **Integración:** [PR #179](https://github.com/jonhararagi/wordwaifu/pull/179), squash merge; SHA exacto de `main`: `cf1aef26f0f2f1d3b4ffe4513c0ff80f65764ef6`.
- **CI de PR sobre `809ad6ccd67e0e90c01d7c842438b1f296ae2ad5`:** [Validate WordWaifu #40727748042](https://github.com/jonhararagi/wordwaifu/actions/runs/40727748042) y [DanMachi Lore and Retrieval Integrity #40727747907](https://github.com/jonhararagi/wordwaifu/actions/runs/40727747907), ambos `success`.
- **CI post-merge sobre el SHA exacto de `main`:** [Validate WordWaifu #40728030060](https://github.com/jonhararagi/wordwaifu/actions/runs/40728030060) y [DanMachi Lore and Retrieval Integrity #40728030297](https://github.com/jonhararagi/wordwaifu/actions/runs/40728030297), ambos `success`.
- **Instrucción aceptada:** después de varios intentos sin información nueva sobre los mismos personajes, avanzar a otras identidades en lugar de reescribir personalidades. Si la wiki o el juego consultados no proporcionan nivel, poder, skill, magia, equipo o coste, registrar «no informado en el contenido consultado» y no inferir inexistencia universal ni rellenar por analogía.
- **Cohorte nueva:** Asfi Al Andromeda y Lulune Louie de Hermes Familia, usando páginas comunitarias no oficiales bajo `CONT-SECONDARY`.
- **Hallazgos acotados:** Asfi tiene en la wiki una lista concreta de nivel, magia, skills y objetos; Lulune tiene nivel reportado y descripciones de combate/sentidos/cartografía, pero el contenido recuperado no enumera magia o skills con nombre.
- **Implementación:** DMR-054, ampliación de la bitácora, fuentes, notas interactivas, enlaces desde las dos fichas y regresión específica.
- **Límites:** no se reescriben personalidades, historia, relaciones, eventos o claims; no se elevan datos secundarios a novela principal. DMR-045 conserva sus cinco cotejos primarios pendientes hasta un pasaje nuevo legible.

### CONV-DM-2026-10-28-001 — Bitácora anti-repetición y cambio de cohorte
- **Fecha:** 2026-10-28.
- **Estado:** ACCEPTED.
- **Instrucción:** tras varios intentos sobre los mismos personajes, avanzar a otros personajes en vez de repetir búsquedas genéricas o reformular personalidades. Consultar la bitácora antes de cada ficha.
- **Regla de evidencia:** cuando una wiki o juego no informa un nivel, poder, magia, skill, arma o coste, registrar «no informado en el contenido consultado». No inventar el campo ni afirmar que no existe en todo el canon sin evidencia explícita.
- **Aplicación:** una pasada estructurada por URL y seguimiento solo con fuente nueva, cambio material, contradicción relevante o texto primario accesible. Los datos comunitarios siguen en CONT-SECONDARY.
- **Primera aplicación de esta instrucción en esta tanda:** DMR-055, Tsubaki Collbrande y Welf Crozzo; sin reescritura de personalidad.

### Resultado de ejecución — CONV-DM-2026-10-28-001 / DMR-055
- **Estado:** integrado y validado documentalmente.
- **PR #182:** https://github.com/jonhararagi/wordwaifu/pull/182
- **SHA de main:** `25b019598e74c5f9756aa541b8e9f5f1fe7c633e`.
- **CI de PR:** Validate [#40744157365](https://github.com/jonhararagi/wordwaifu/actions/runs/40744157365) y Lore/Integrity [#40744157330](https://github.com/jonhararagi/wordwaifu/actions/runs/40744157330), ambos success.
- **CI post-merge sobre ese SHA:** Validate [#40751474055](https://github.com/jonhararagi/wordwaifu/actions/runs/40751474055) y Lore/Integrity [#40751474058](https://github.com/jonhararagi/wordwaifu/actions/runs/40751474058), ambos success.
- **Alcance real:** Tsubaki Collbrande y Welf Crozzo, wikis comunitarias bajo CONT-SECONDARY; no hubo actualización de personalidades ni de fichas interactivas. DMR-045 mantiene sus cinco cotejos primarios abiertos.

### CONV-DM-2026-10-28-002 — Prioridad de DMR-045 y ruta BookLive sin verificar por bloqueo de herramienta
- **Fecha:** 2026-10-28.
- **Estado:** registrado; no constituye verificación narrativa ni cierre de DMR-045.
- **Prioridad reafirmada:** DMR-045 sigue siendo el trabajo de lore prioritario y no queda sustituido por DMR-055 ni por otras tandas de personajes. La ampliación de las fichas interactivas de Tsubaki y Welf permanece separada, bajo `CONT-SECONDARY`, hasta incorporar sus pruebas.
- **Ruta candidata observada:** [BookLive — edición recopilatoria de Astrea Record, tres volúmenes](https://booklive.jp/product/index/title_id/1295720/vol_no/001). La página pública muestra la ficha comercial y el control «ブラウザ試し読み» (muestra en navegador).
- **Resultado exacto:** el servicio de automatización de navegador disponible rechazó el inicio de la consulta con `insufficient_credits`, antes de abrir el visor. Por tanto, **no se comprobó el contenido del lector**. No debe etiquetarse como lector fallido, no accesible o sin texto; tampoco aporta un hecho narrativo o un localizador. No se asigna un nuevo ID de fuente ni se crea ningún claim basándose únicamente en la ficha comercial.
- **Siguiente acción:** mantener abiertos los cinco cotejos primarios. Reintentar esta ruta solo cuando pueda abrirse realmente el control de muestra o cuando haya un pasaje de edición licenciada con localizador reproducible. No repetir en paralelo las rutas ya registradas que solo mostraron metadatos/cargas.

### CONV-DM-2026-10-28-003 — Nueva ruta licenciada de Google Books para Astrea Record, volumen 3
- **Fecha:** 2026-10-28.
- **Estado:** registrado; sin nuevo hallazgo narrativo primario.
- **Ruta consultada:** [Google Books — Astrea Record, Vol. 3 (edición inglesa de Yen Press)](https://books.google.com/books/about/Astrea_Record_Vol_3_Is_It_Wrong_to_Try_t.html?id=Z0gVEQAAQBAJ); se abrieron además las rutas seleccionadas [PT10](https://books.google.com/books?cad=1&id=Z0gVEQAAQBAJ&pg=PT10&source=gbs_selected_pages) y [PT11](https://books.google.com/books?cad=1&id=Z0gVEQAAQBAJ&pg=PT11&source=gbs_selected_pages).
- **Resultado observado:** la ficha muestra índice y términos comunes, pero las páginas seleccionadas solo expusieron la carcasa «Pages», sin texto narrativo visible. La ruta de la tabla de contenidos falló con un error de caché. Los nombres dentro de «Common terms and phrases» no son prueba suficiente de escenas ni de claims.
- **Registro persistente:** DMR-045-SRC-053 en el expediente y el registro maestro de fuentes, estado metadata_checked_only, continuidad CONT-AR, claims_supported vacío y events_supported vacío. No se añade ningún hecho, relación ni localizador narrativo.
- **Anti-repetición:** esta consulta fue para el volumen 3 de la edición inglesa licenciada; no debe confundirse con el intento de Google Books del volumen 20. Reabrir solo cuando se pueda ver texto narrativo real, no por la mera presencia de nombres o encabezados.
- **Estado global:** DMR-045 sigue pendiente para Alfia, Zald, Meteria, Erebus y Rudra; no se sustituye por la tanda secundaria DMR-055.

### CONV-DM-2026-10-28-004 — Ruta Sony Reader Store localizada; lectura no verificada
- **Fecha:** 2026-10-28.
- **Estado:** investigación de ruta registrada; no constituye cotejo narrativo primario.
- **Fuente:** [Sony Reader Store — Astrea Record, volumen 3, edición japonesa](https://ebookstore.sony.jp/title/01237250/id/BT000123725000300301/).
- **Resultado:** la página identifica el volumen y presenta una verificación de edad antes de permitir portada, muestra y compra. La investigación se detuvo en esa pantalla; no se confirmó edad, no se abrió la muestra y no se afirma que el visor falle o que esté disponible después de confirmar.
- **Registro:** DMR-045-SRC-054 en el expediente y el registro maestro de fuentes, CONT-AR, metadata_checked_only, claims_supported y events_supported vacíos.
- **Límites:** no se crearon claims, relaciones, eventos, alias ni localizadores narrativos. Los cinco cotejos primarios de DMR-045 continúan pendientes. DMR-055 y la ampliación UI de Tsubaki/Welf siguen separadas bajo CONT-SECONDARY.
- **Anti-repetición:** esta es una ficha de distribuidor distinta de las rutas ya registradas. Solo reabrirla siguiendo el flujo normal del sitio si puede accederse legítimamente a la muestra, y anotar escenas únicamente tras ver texto real.


## CONV-DM-2026-10-28-005 — Completar personajes y datos de DanMachi para probar WordWaifu
- **Fecha:** 2026-10-28.
- **Decisión del usuario:** completar personajes y datos faltantes de DanMachi para comprobar WordWaifu como segundo cerebro de lore, con memoria estructurada y controles de continuidad.
- **Aplicación:** priorizar DMR-056 (Liliruca Arde, Mikoto Yamato, Haruhime y ficha nueva de Nina Tulle), enlazar fuentes y probar el archivo interactivo. Datos de wiki bajo `CONT-SECONDARY`.
- **Límites:** no inventar habilidades/costes que la fuente no informa; registrar contradicciones sin resolverlas por intuición; no reescribir personalidades sin evidencia nueva; no cerrar DMR-045 ni repetir lectores agotados sin texto primario nuevo.
- **Estado:** integrada en `main` mediante [PR #186](https://github.com/jonhararagi/wordwaifu/pull/186), merge SHA `a51f3a8a92ceb74e12be0d9dad1e4c5ad4a7a470`. Head probado: `4d299431611382a96ea0881bca1c0c722eb12e73`. Validate WordWaifu [#40773212555](https://github.com/jonhararagi/wordwaifu/actions/runs/40773212555) y DanMachi Lore and Retrieval Integrity [#40773212768](https://github.com/jonhararagi/wordwaifu/actions/runs/40773212768) quedaron en success antes del merge. La comprobación CI post-merge no pudo confirmarse desde el conector disponible; no se declara verificada.


### CONV-DM-2026-10-29-002 — Integración de DMR-057 en main

- **Fecha:** 2026-10-29.
- **Tipo:** integración técnica y actualización de estado.
- **Estado:** INTEGRADO Y VALIDADO.
- **Resultado:** la PR [#188](https://github.com/jonhararagi/wordwaifu/pull/188) se fusionó mediante squash en `main`; SHA exacto de integración: `6c1ffc257e2df45d3a32facb39fe684b71994f60`.
- **CI pre-merge sobre `2eb0912ab7445d543eae6a2c790b4d9483ee63fe`:** [Validate #40840588616](https://github.com/jonhararagi/wordwaifu/actions/runs/40840588616) y [Lore/Integrity #40840588548](https://github.com/jonhararagi/wordwaifu/actions/runs/40840588548), ambos `success`.
- **CI post-merge sobre el SHA exacto de integración:** [Lore/Integrity #40841046104](https://github.com/jonhararagi/wordwaifu/actions/runs/40841046104) y [Validate #40841046125](https://github.com/jonhararagi/wordwaifu/actions/runs/40841046125), ambos `success`.
- **Alcance:** capacidades secundarias de Aisha, Anya y Chloe bajo CONT-SECONDARY; se conserva la diferencia EN/ES sobre Remiste Felis y los campos no informados.
- **Límite:** DMR-045 sigue abierto; no se promueve evidencia comunitaria a primaria ni se reescriben personalidades.


### CONV-DM-2026-10-29-003 — Notas DMR-057 en el archivo interactivo

- **Estado:** INTEGRADO Y VALIDADO; CI pre-merge y post-merge aprobados.
- **PR:** [#189](https://github.com/jonhararagi/wordwaifu/pull/189), squash SHA integrado `f50f8ab4d63fe2d57a0f0fcc057babd489be0424`; head sometido a CI `fedb22bc44bd6e2c25aad39e3589db39a0720620`.
- **Cambio:** añade `EXTENDED[id]["CONT-SECONDARY"]` para Aisha Belka, Anya Fromel y Chloe Rollo y pruebas de recuperación desde el archivo interactivo, referencias comunitarias, campos no reportados y aislamiento frente a `CONT-ANIME`/`CONT-MAIN-LN`.
- **CI de PR:** [Validate WordWaifu #40841939859](https://github.com/jonhararagi/wordwaifu/actions/runs/40841939859) y [DanMachi Lore and Retrieval Integrity #40841939917](https://github.com/jonhararagi/wordwaifu/actions/runs/40841939917), ambos `success` sobre el head indicado. La prueba del archivo y el smoke test de navegador también finalizaron en success.
**CI post-merge:** [Lore/Integrity #40842144964](https://github.com/jonhararagi/wordwaifu/actions/runs/40842144964) y [Validate #40842144977](https://github.com/jonhararagi/wordwaifu/actions/runs/40842144977), ambos `success` sobre el SHA exacto `f50f8ab4d63fe2d57a0f0fcc057babd489be0424`.
- **Límite:** no edita roster, grafo de relaciones, personalidad ni escenas primarias. La discrepancia EN/ES de Remiste Felis se conserva como secundaria. DMR-045 sigue abierto.

### CONV-DM-2026-10-29-004 — Revalidación de la puerta de evidencia primaria de DMR-045

- **Fecha:** 2026-10-29.
- **Tipo:** investigación, control anti-repetición y estado de integración.
- **Estado:** registrado; DMR-045 sigue abierto.
- **Resultado:** la ficha editorial de Yen Press para Astrea Record 3 solo ofrece contexto general; la ruta existente DMR-045-SRC-018 de Google Books expone índice/términos, no narración legible; la ficha oficial de GA Bunko del volumen 20 (fuente ya registrada bajo DMR-044) devolvió HTTP 503. Ninguna aporta un pasaje primario nuevo.
- **Regla aplicada:** no duplicar fuentes ni crear claims por sinopsis, índice, términos, metadatos o errores del lector. No actualizar personalidades ni convertir fuentes CONT-AU/CONT-GAME/CONT-SECONDARY en canon de la novela principal o la novelización.
- **SHA de main comprobado al iniciar esta tanda:** 8348d5610382f45f5fe30073d70f53886d259ea4. Los checks [Catalog, retrieval and browser smoke #40842395446](https://github.com/jonhararagi/wordwaifu/actions/runs/40842395446) y [validate #40842395510](https://github.com/jonhararagi/wordwaifu/actions/runs/40842395510) terminaron con success.
- **Pendiente por personaje:** Alfia (habilidades/costes/escenas), Zald (técnica, Udaeus y secuencia con Ottar), Meteria (identificación/maternidad/parentesco, sin inferir el padre de Bell), Erebus (escenas y diálogo de CONT-AR separados de CONT-GAME) y Rudra (responsabilidad personal frente a la trampa colectiva de su Familia).
- **Siguiente acción:** solo reabrir al obtener texto licenciado narrativo realmente legible o una fuente oficial nueva que resuelva uno de esos puntos. Orario sigue pospuesto; las cinco fichas conservan HOLD_FOR_PRIMARY_SOURCE.

### CONV-DM-2026-10-29-005 — Verificación post-merge de PR #190

- **Fecha:** 2026-10-29.
- **Estado:** INTEGRADO Y VALIDADO.
- **PR:** [#190 — docs(danmachi): record DMR-045 primary-source gate](https://github.com/jonhararagi/wordwaifu/pull/190).
- **SHA de integración verificado en main:** 779980733c3f27ee5d9cb2f7adc2705d9ccadfaf.
- **CI pre-merge sobre el head a05567f854d8db7704403d9badaadda15b84316b:** [Catalog, retrieval and browser smoke #40857051535](https://github.com/jonhararagi/wordwaifu/actions/runs/40857051535) y [validate #40857051732](https://github.com/jonhararagi/wordwaifu/actions/runs/40857051732), ambos success.
- **CI post-merge sobre el SHA exacto 779980733c3f27ee5d9cb2f7adc2705d9ccadfaf:** [Catalog, retrieval and browser smoke #40857268146](https://github.com/jonhararagi/wordwaifu/actions/runs/40857268146) y [validate #40857268310](https://github.com/jonhararagi/wordwaifu/actions/runs/40857268310), ambos success.
- **Alcance:** actualiza documentos persistentes, registra que la consulta actual no produjo narración primaria legible y deja DMR-045 abierto para Alfia, Zald, Meteria, Erebus y Rudra. No se añadieron claims ni se alteró el canon.

### CONV-DM-2026-10-29-006 — Ruta Google Play Books del volumen 20; muestra aún no inspeccionada

- **Fecha:** 2026-10-29.
- **Tipo:** hallazgo de investigación, actualización de fuente y regresiones de recuperación.
- **Estado:** INTEGRADO Y VALIDADO; PR [#192](https://github.com/jonhararagi/wordwaifu/pull/192) fusionada por squash en `main`.
- **SHA de integración verificado en main:** `6eb2db0161848de320c75abf7cc0241565a1644f` ([commit](https://github.com/jonhararagi/wordwaifu/commit/6eb2db0161848de320c75abf7cc0241565a1644f)); head probado antes del merge: `fbd4c6fef0d65066ec53b39ea22b9d4bc5377dfa`.
- **CI pre-merge sobre el head exacto:** [Validate WordWaifu #40862116846](https://github.com/jonhararagi/wordwaifu/actions/runs/40862116846) y [DanMachi Lore and Retrieval Integrity #40862116852](https://github.com/jonhararagi/wordwaifu/actions/runs/40862116852), ambos `success`.
- **CI post-merge sobre el SHA exacto de main:** [Validate WordWaifu #40862327265](https://github.com/jonhararagi/wordwaifu/actions/runs/40862327265) y [DanMachi Lore and Retrieval Integrity #40862327234](https://github.com/jonhararagi/wordwaifu/actions/runs/40862327234), ambos `success`.

- **Hallazgo verificable:** la ficha de Google Play Books para la edición inglesa de DanMachi vol. 20 anuncia “Free sample”, indica a Yen Press LLC como vendedor y muestra 232 páginas; la ficha editorial de Yen Press da el ISBN digital 9798855437867 y fecha de publicación del 11 de agosto de 2026. Producto: https://play.google.com/store/books/details/Fujino_Omori_Is_It_Wrong_to_Try_to_Pick_Up_Girls_i?id=XWHEEQAAQBAJ; editor: https://yenpress.com/titles/9798855437867-is-it-wrong-to-try-to-pick-up-girls-in-a-dungeon-vol-20-light-novel.
- **Límite de acceso:** la herramienta de navegador disponible devolvió `insufficient_credits` antes de comenzar la navegación; la apertura directa de https://play.google.com/books/reader?id=XWHEEQAAQBAJ no fue accesible mediante la extracción web. No se observó respuesta del lector ni texto narrativo. Esto no demuestra que el lector falle.
- **Registro:** DMR-045-SRC-055, `metadata_checked_only`, `claims_supported: []`, `events_supported: []`, `CONT-MAIN-LN`. Comparte el identificador XWHEEQAAQBAJ con la ruta de Google Books DMR-045-SRC-018; es una vía de acceso alternativa, no evidencia independiente.
- **Acción:** añadir la ruta a la investigación y al directorio de fuentes de WordWaifu con una prueba de regresión; reabrir el cotejo solo cuando haya páginas narrativas licenciadas legibles y localizador reproducible. Alfia, Zald, Meteria, Erebus y Rudra permanecen `HOLD_FOR_PRIMARY_SOURCE`; Orario sigue pospuesto.

### CONV-DM-2026-10-29-007 — DMR-058: capacidades secundarias de Daphne y Cassandra

- **Fecha:** 2026-10-29.
- **Tipo:** investigación de lore, actualización del archivo de personajes y regresiones de continuidad.
- **Estado:** integrado y validado en `main`; CI pre-merge y post-merge aprobados.
- **Motivo:** al no haber texto primario nuevo que permita cerrar DMR-045, avanzar con una cohorte distinta y útil sin volver a recorrer fuentes ya agotadas.
- **Resultado:** se enriquecen las notas interactivas de los IDs existentes CHAR-DAPHNE-LAUROS y CHAR-CASSANDRA-ILION bajo CONT-SECONDARY. Las fuentes comunitarias reportan Raumure, Elios Passion, Laurus Wreath, Escape, Fencer Laureate, Soullight, Cure Ephialtes, Five Dimension Troia, Treatment y equipo; los costes no informados y el efecto desconocido de Five Dimension Troia quedan explícitos.
- **Fuentes:** DMR-058-SRC-001–005 en lore/danmachi/sources/00-registro-fuentes.md.
- **CI pre-merge:** [Validate WordWaifu #40867615144](https://github.com/jonhararagi/wordwaifu/actions/runs/40867615144) y [DanMachi Lore and Retrieval Integrity #40867615207](https://github.com/jonhararagi/wordwaifu/actions/runs/40867615207), ambos `success` sobre el head `ef14f8b914fb424cf816f0d6a27f258fbe230843`.
- **Integración:** PR [#194](https://github.com/jonhararagi/wordwaifu/pull/194) fusionada por squash; `main` verificado en `190b4313a21569aa056548f8a40f9022b900b028`.
- **CI post-merge sobre el SHA exacto de main** `190b4313a21569aa056548f8a40f9022b900b028`: [Validate WordWaifu #40867850127](https://github.com/jonhararagi/wordwaifu/actions/runs/40867850127) y [DanMachi Lore and Retrieval Integrity #40867850048](https://github.com/jonhararagi/wordwaifu/actions/runs/40867850048), ambos `success`.
- **Límite de canon:** wikis secundarias; no se agregan IDs, claims del grafo, relaciones, eventos, aliases ni reescrituras de personalidad. DMR-045 sigue abierta; Orario sigue pospuesto.


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
- **Integración y validación:** PR [#155](https://github.com/jonhararagi/wordwaifu/pull/155) integrada en `main` por SHA `21c55f905e28c419df0616e25247d8960533fde8`. CI de la PR: [Validate #40348659487](https://github.com/jonhararagi/wordwaifu/actions/runs/40348659487) y [Lore/Integrity #40348659494](https://github.com/jonhararagi/wordwaifu/actions/runs/40348659494), ambos success sobre head `bd707757659be7ee976d5b41bf88007b63482928`. CI post-merge: [Lore/Integrity #40348901258](https://github.com/jonhararagi/wordwaifu/actions/runs/40348901258) success; [Validate #40348901098](https://github.com/jonhararagi/wordwaifu/actions/runs/40348901098) sigue in_progress en `Install Chromium` a la última consulta.
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
- **Estado post-merge en primera comprobación:** [Lore/Integrity #40381983723](https://github.com/jonhararagi/wordwaifu/actions/runs/40381983723) terminó en `success`; [Validate #40381983810](https://github.com/jonhararagi/wordwaifu/actions/runs/40381983810) estaba todavía `in_progress` en `Install Chromium`. No dar por finalizado este último hasta consultar su conclusión.
- **Alcance factual:** SRC-047 (DanMachi vol. 14, CONT-MAIN-LN) y SRC-048 (Astrea Record 3, CONT-AR) son fichas BookLive con oferta de vista previa, no narración leída. Ambos conservan `metadata_checked_only` y claims/events vacíos. No se añadieron claims, aristas ni aliases y no se elevaron los niveles de evidencia de Alfia, Zald, Meteria, Erebus o Rudra.
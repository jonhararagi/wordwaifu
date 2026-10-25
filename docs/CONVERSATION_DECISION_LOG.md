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
- **Cambio de prioridad:** Orario pasa a ser la prioridad de trabajo activa. Los pendientes primarios de DMR-045 se conservan para retomarlos si aparece un texto licenciado accesible.
- **Documentos afectados:** DMR-045, DMR-029, registro maestro de fuentes, fichas Alfia/Erebus/Meteria, WORK_QUEUE.md, MASTER_INDEX.md y STATUS.md.
- **Siguiente acción:** continuar la etapa Orario sin trasladar datos de Prototype, anime, juego o wikis a CONT-MAIN-LN sin verificación.

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


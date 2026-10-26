# Registro de decisiones del autor

Este documento conserva decisiones que deben aplicarse en revisiones posteriores. No convierte automáticamente una sugerencia de la IA en canon.

## Decisiones abiertas

### DEC-DM-001 — Referencia temporal de “cinco años antes”
- Estado: OPEN.
- Pregunta: ¿cinco años antes de qué fecha o acontecimiento?
- Efecto: sin respuesta, las afirmaciones cronológicas relacionadas deben marcarse como ambiguas o pendientes.

### DEC-DM-002 — Significado de “Loki lo llama Bell”
- Estado: OPEN.
- Pregunta: ¿es un apodo, una confusión, una identidad asumida, una decisión de Loki u otra situación?
- Efecto: la revisión no debe inventar una explicación.

### DEC-DM-003 — Instrucción de Eina sobre entrar sin registro
- Estado: OPEN.
- Pregunta: ¿Eina realmente da esa instrucción, el OC la interpreta así o la situación es distinta?
- Efecto: no juzgar la regla implicada antes de fijar el sentido exacto de la escena y verificar la fuente.

### DEC-DM-004 — Divergencias aprobadas de la AU
- Estado: OPEN.
- Pregunta: ¿cuáles acontecimientos del canon desea cambiar deliberadamente el autor?
- Efecto: una divergencia necesita una decisión explícita y un registro au_override antes de tratarla como excepción aprobada.

## Plantilla para una decisión nueva

- decision_id:
- date:
- question:
- author_decision:
- rationale:
- affected_record_ids:
- canon_claims_superseded:
- applies_from:
- applies_until:
- source_or_context:
- status: open, accepted, rejected o revised.

### DEC-DM-007 — Guild como organización separada de una sede física
- **Fecha:** 2026-10-24.
- **Estado:** ACCEPTED (regla de modelado del corpus; no decisión de canon narrativo).
- **Decisión:** `ORG-GUILD` es el nodo de organización y `DM-GUILD-001` queda como guía conceptual histórica (`setting`), manteniendo su ID para no romper enlaces antiguos. Las relaciones institucionales nuevas o ya catalogadas deben usar `ORG-GUILD`.
- **Límites:** Babel, Pantheon y la sede física mencionada en el extracto no se fusionan ni se declaran distintos por inferencia. La ficha de Pantheon conserva evidencia parcial y secundaria; no crear `LOC-GUILD` hasta obtener respaldo suficiente.
- **Documentos afectados:** catálogo, ficha de guía conceptual, fichas de organización, claims DMR-026, regresiones de grafo/búsqueda, cola y documentación de estado.

## Historial

No se ha aprobado aún ninguna excepción de canon en este paquete. La secuencia del OC está guardada como premisa del autor, pendiente de aclaración y evaluación.

### DEC-DM-005 — Wikis reconocidas como apoyo cuando no se dispone de las novelas
- Fecha: 2026-10-24.
- Estado: ACCEPTED.
- Decisión: consultar también DanMachi Wiki/Fandom en inglés y español cuando los textos de las novelas no estén disponibles, para investigar personajes, Familias, lugares, sucesos y otros datos. Usar las fuentes oficiales accesibles como autoridad primaria cuando sea posible y conservar la wiki como evidencia secundaria con URL, idioma, continuidad y límites explícitos.
- Motivo: evitar dejar huecos innecesarios por falta de acceso a los libros, sin presentar como cotejadas escenas que no podemos consultar.
- Documentación relacionada: [registro permanente de acuerdos](../../docs/CONVERSATION_DECISION_LOG.md), [matriz de continuidad](continuity/00-matriz-de-continuidad.md).
- Estado factual: la aceptación de esta metodología no confirma por sí sola cada dato recuperado de la wiki.


### DEC-DM-006 — Prompt maestro operativo y prioridad de DMR-045
- Fecha: 2026-10-24.
- Estado: ACCEPTED para el método; prioridad operativa revisada el 2026-10-25 por DEC-DM-008.
- Decisión: continuar desde el estado verificable de `main`, preservar los acuerdos en los registros permanentes y aplicar el ciclo de investigación, implementación, pruebas, integración y verificación. El destino final para cambios aprobados es `main`, tras revisar seguridad, conflictos y CI sobre los commits correspondientes.
- Prioridad inicial: cerrar primero la investigación pública útil de `DANMACHI-RESEARCH-045`; los detalles sin localizador narrativo reproducible permanecen pendientes.
- Resultado de ejecución registrado el 2026-10-24: el barrido secundario disponible se documentó en DMR-045/DMR-029; se conserva abierta la verificación primaria. Orario se había anotado entonces como siguiente etapa, pero esa orden quedó revisada el 2026-10-25.
- Orden vigente (2026-10-25): la verificación primaria de DMR-045 para los cinco expedientes tiene prioridad de ejecución antes de la expansión de Orario. Esta corrección modifica el orden de trabajo, no elimina ni contradice el resultado histórico del barrido secundario.
- Reglas: las wikis inglesa y española se etiquetan como fuentes secundarias; no confundir una acción de Rudra Familia con responsabilidad personal de Rudra, no equiparar Meteria con la hermana sin nombre citada en la entrevista de Memoria Freese, y no transferir contenido de `CONT-AU` a `CONT-MAIN-LN`/ `CONT-AR`.
- Documentos afectados: registro de conversación, estado, cola, DMR-045/DMR-029, fichas y directorio de fuentes recuperables desde la aplicación.


### DEC-DM-008 — Metadatos de muestras licenciadas no equivalen a lectura narrativa
- **Fecha:** 2026-10-25.
- **Estado:** ACCEPTED como regla de investigación y PRESENT como implementación UI/documental.
- **Decisión:** Las rutas licenciadas de Google Books, BOOK☆WALKER y BinB pueden registrarse para futuras consultas humanas. La ficha de producto, el índice, los controles del visor y una búsqueda sin resultados no se consideran lectura de un pasaje narrativo. HTTP 429 es error de acceso y no evidencia de ausencia.
- **Aplicación de continuidad:** DMR-045-SRC-018 permanece en CONT-MAIN-LN solo como metadatos/índice del volumen 20; DMR-045-SRC-019 permanece en CONT-AR como interfaz/metadatos de la muestra japonesa de Astrea Record 3. Ambas tienen claims_supported vacíos.
- **Límite de canon:** la entrevista sobre la madre de Bell no identifica por sí sola a la hermana como Meteria; la ideología de Erebus en CONT-GAME no se traslada a la novelización; una acción atribuida a Rudra Familia no demuestra que Rudra personalmente la ordenara, autorizara o conociera el plan.
- **Prioridad operativa:** se actualiza la directriz de DEC-DM-006 para retomar primero el cotejo primario de DMR-045 conforme al prompt vigente del usuario; Orario se mantiene en cola, no se cancela.
- **Revisión adicional del 2026-10-25:** la muestra gratuita normal de BOOK☆WALKER para DanMachi vol. 14 (edición japonesa licenciada de SB Creative) se comprobó desde [la ficha del volumen](https://bookwalker.jp/deb74ef953-7194-47cb-8abb-7453a4b2e353/). El lector devolvió “Could not download. Please check your network connection.” Se registra como DMR-045-SRC-028, metadata_checked_only y sin claims; no demuestra el contenido de la escena ni el conocimiento personal de Rudra. La modificación quedó integrada por [PR #133](https://github.com/jonhararagi/wordwaifu/pull/133), merge SHA `1c53f9f7ca57a6aeebaedbf57234fb8b6e581f6f`. CI de la PR ([Validate](https://github.com/jonhararagi/wordwaifu/actions/runs/40231380471), [Lore Integrity](https://github.com/jonhararagi/wordwaifu/actions/runs/40231380497)) y CI post-merge del SHA exacto de `main` ([Validate](https://github.com/jonhararagi/wordwaifu/actions/runs/40231489642), [Lore Integrity](https://github.com/jonhararagi/wordwaifu/actions/runs/40231489669)) terminaron en `success`.
- **Referencias:** [DANMACHI-RESEARCH-045](research/inbox/DANMACHI-RESEARCH-045-dark-era-characters-continuity-audit.md), [registro central de fuentes](sources/00-registro-fuentes.md), [PR #122](https://github.com/jonhararagi/wordwaifu/pull/122).

### DEC-DM-009 — Usar páginas comunitarias alternativas accesibles sin promoverlas a fuente primaria
- **Fecha:** 2026-10-25.
- **Estado:** Aplicación de la metodología aceptada en DEC-DM-005/006; registro de implementación pendiente de fusión.
- **Decisión operativa:** cuando la extracción de DanMachi Wiki/Fandom en inglés o español esté bloqueada, se permite consultar otra copia pública comunitaria accesible para localizar nombres, relaciones reportadas y referencias a obras; debe registrarse con su URL e idioma como `COMMUNITY_WIKI`, no como editorial oficial.
- **Límites obligatorios:** no se asume independencia editorial de otras wikis; la repetición de un mismo resumen no cuenta como corroboración primaria independiente. Una lista de apariciones no es lectura de escena ni localizador de capítulo/página. Los datos nuevos deben enlazarse a claims existentes cuando corresponda, sin duplicar IDs, relaciones o biografías.
- **Aplicación a DMR-045:** se registran DMR-045-SRC-033–037 para Meteria, Alfia, Zald, Erebus y Rudra Familia desde páginas comunitarias públicas de Miraheze. Las relaciones y apariciones de esos perfiles siguen siendo secundarias. El parentesco de Meteria no se promueve a canon primario a partir de la ficha sola; “Eren” sigue sin aprobarse como alias de la novelización; la trampa sigue atribuida a Rudra Familia como grupo, sin inferir orden o conocimiento personal de Rudra.
- **Resultado:** mejor acceso y trazabilidad de fuentes, sin nuevos claims, alias, aristas ni cambios de continuidad. Los cinco localizadores primarios de DMR-045 permanecen abiertos; Orario sigue como etapa posterior.

### DEC-DM-010 — Mantener IDs únicos y límites de evidencia para nuevas rutas de consulta
- **Fecha:** 2026-10-25.
- **Estado:** Integrada mediante PR #146, merge SHA dc7fa0fe44d259e710902d5d741fe11a85b3e3a0; los workflows pre-merge para head 634cd5cc403dbdb0360a2b72ecd77997206ff2bc pasaron (Validate: https://github.com/jonhararagi/wordwaifu/actions/runs/40261732974; Lore/Integrity: https://github.com/jonhararagi/wordwaifu/actions/runs/40261733009). El conector de consulta de workflows solo expone ejecuciones disparadas por pull_request; no permitió verificar la ejecución push post-merge de ese SHA, por lo que su resultado no se afirma.
- **Decisión operativa:** conservar DMR-045-SRC-030–032 para los compendios licenciados de muestras BOOK☆WALKER de Astrea Record 1–3; asignar SRC-033–037 a las páginas comunitarias de Miraheze para Meteria, Alfia, Zald, Erebus y Rudra Familia; asignar SRC-038 a la ruta NOOK de DanMachi vol. 14; y reservar SRC-039–042 para las rutas BinB oficiales de SB Creative (Astrea Record 1–3 y DanMachi vol. 14). No reutilizar identificadores por cada nueva ruta aunque distintas fuentes hablen de los mismos personajes.
- **Límites de evidencia:** las wikis comunitarias siguen siendo fuentes secundarias y no se presume independencia editorial. Las páginas de producto, los compendios y los errores de visor no equivalen a leer pasajes de novela. Las nuevas muestras permanecen metadata_checked_only con claims_supported vacío y no cierran los localizadores primarios de DMR-045.
- **Resultado esperado:** mejor trazabilidad de la investigación sin IDs de claims, aristas, aliases ni hechos canónicos nuevos. Los cinco huecos primarios siguen abiertos y Orario permanece diferido.

### DEC-DM-011 — Registrar lectores oficiales que no exponen narración en extracción pública
- **Fecha:** 2026-10-25.
- **Estado:** Integrada mediante PR #147, merge SHA 58025c70e8fd26d6ce3c2043c8fd5d51e5cc0d98. Los workflows de PR pasaron sobre head 32891061a411b66ac9a66000d8f5b0c4f2b0ba56 (Validate: https://github.com/jonhararagi/wordwaifu/actions/runs/40262391617; Lore/Integrity: https://github.com/jonhararagi/wordwaifu/actions/runs/40262391545). La consulta de workflows disponible solo devuelve ejecuciones disparadas por pull_request; no permitió verificar los workflows push post-merge de ese SHA y no se afirma ese resultado.
- **Decisión:** la presencia de una opción oficial 立ち読み solo autoriza registrar la ruta de muestra. Si la extracción solo muestra “Now loading...”, no se establece que la obra sea globalmente inaccesible ni se crea una afirmación narrativa. Los registros quedan metadata_checked_only y claims_supported vacío.
- **Aplicación:** DMR-045-SRC-039–042 corresponden a SB Creative BinB; CONT-AR para Astrea Record 1–3 y CONT-MAIN-LN para DanMachi vol. 14. Reintentar desde sesión normal y añadir un localizador únicamente tras ver texto narrativo legible.

### DEC-DM-012 — La procedencia de un detalle debe coincidir con el texto accesible de la fuente
- **Fecha:** 2026-10-26.
- **Estado:** Integrada mediante [PR #151](https://github.com/jonhararagi/wordwaifu/pull/151), merge SHA `fc3080189815805ae2e0853b177bae33d0cec516`. Ambos workflows de PR pasaron sobre head `4771a81e371f4c2997c4c2fb9414e809d1645ee9`: [Validate WordWaifu](https://github.com/jonhararagi/wordwaifu/actions/runs/40265979989) y [DanMachi Lore and Retrieval Integrity](https://github.com/jonhararagi/wordwaifu/actions/runs/40265980006). El conector de consulta solo devuelve ejecuciones disparadas por pull_request, por lo que no se afirma un resultado para los workflows push post-merge.
- **Decisión:** cuando una frase detallada aparece en una reseña de usuario y la sinopsis oficial no la contiene, el claim debe citar la reseña como fuente secundaria y la ficha editorial debe limitarse a lo que efectivamente muestra. No inferir procedencia por proximidad al título o por un resultado de búsqueda agregado.
- **Aplicación:** DMR-045-CLM-006 se vincula a la reseña comunitaria DMR-045-SRC-043 y queda secondary_checked; DMR-045-SRC-043 registra BookLive; SRC-005 deja de listar ese claim. El detalle de combate continúa pendiente de cotejo primario.


### DEC-DM-013 — Sinopsis comunitaria por capítulos como pista secundaria trazable
- **Fecha:** 2026-10-26.
- **Estado:** ACCEPTED.
- **Decisión:** una sinopsis de wiki puede servir para investigar escenas concretas cuando el texto licenciado no se ha podido leer, siempre que cada afirmación tenga su claim, URL, capítulo del resumen, continuidad y límite de evidencia. El capítulo de la wiki no se presenta como página de la novela y la paráfrasis no se atribuye a una ficha editorial.
- **Aplicación:** DMR-045-SRC-045 sustenta los claims secundarios DMR-045-CLM-019 (Alfia/Leon, resumen del capítulo 2) y DMR-045-CLM-020 (Zald/Leon/Udaeus, resumen del capítulo 3). Los datos son secondary_checked; no crean aristas nuevas y no cierran la verificación primaria.
- **Contexto:** https://danmachi.fandom.com/wiki/DanMachi_Light_Novel_Volume_20/Synopsis; contenido recuperado por el índice de búsqueda el 2026-10-26, mientras el acceso directo quedó bloqueado.


### DEC-DM-014 — Oferta de muestra en ficha BookLive: ruta, no pasaje narrativo
- **Fecha:** 2026-10-26.
- **Estado:** Implementada e integrada mediante [PR #160](https://github.com/jonhararagi/wordwaifu/pull/160), SHA `968ad23141ffdc2db032383228445fddc753b755`; Validación post-merge incompleta mientras el workflow Validate #40381983810 siga en curso.
- **Decisión operativa:** se puede registrar una ficha pública de BookLive si expone controles de prueba en navegador/app, pero el enlace se describe como oferta de muestra hasta que el visor presente páginas narrativas realmente legibles.
- **Aplicación:** DMR-045-SRC-047 (DanMachi vol. 14, CONT-MAIN-LN) y SRC-048 (Astrea Record 3, CONT-AR) permanecen `metadata_checked_only`, con `claims_supported: []` y `events_supported: []`.
- **Límites:** no se añade narración, relación, alias ni claim; no se infiere presencia/ausencia y no se fusionan las continuidades. Alfia, Zald, Meteria, Erebus y Rudra conservan sus localizadores primarios pendientes.


### Estado de implementación — DEC-DM-014 / BookLive
- Las rutas SRC-047/048 y la navegación fueron integradas mediante [PR #160](https://github.com/jonhararagi/wordwaifu/pull/160), SHA `968ad23141ffdc2db032383228445fddc753b755`; los dos workflows de PR pasan sobre el head `6d89ea9a7846c64132b08f58b628ff70b075a302` ([Validate #40381631794](https://github.com/jonhararagi/wordwaifu/actions/runs/40381631794), [Lore/Integrity #40381631812](https://github.com/jonhararagi/wordwaifu/actions/runs/40381631812)).
- Post-merge Lore/Integrity [#40381983723](https://github.com/jonhararagi/wordwaifu/actions/runs/40381983723) pasa; Validate [#40381983810](https://github.com/jonhararagi/wordwaifu/actions/runs/40381983810) continuaba en curso en la comprobación inicial.
- **Límite:** únicamente se verificaron páginas de producto y controles de muestra; no se leyó narración. No cambiar claims ni cerrar los localizadores de DMR-045 a partir de estos metadatos.
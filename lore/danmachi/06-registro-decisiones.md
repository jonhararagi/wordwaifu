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
- **Estado:** Implementada, integrada y validada mediante [PR #160](https://github.com/jonhararagi/wordwaifu/pull/160), SHA `968ad23141ffdc2db032383228445fddc753b755`; los dos workflows post-merge terminan en `success` ([Lore/Integrity #40381983723](https://github.com/jonhararagi/wordwaifu/actions/runs/40381983723), [Validate #40381983810](https://github.com/jonhararagi/wordwaifu/actions/runs/40381983810)).
- **Decisión operativa:** se puede registrar una ficha pública de BookLive si expone controles de prueba en navegador/app, pero el enlace se describe como oferta de muestra hasta que el visor presente páginas narrativas realmente legibles.
- **Aplicación:** DMR-045-SRC-047 (DanMachi vol. 14, CONT-MAIN-LN) y SRC-048 (Astrea Record 3, CONT-AR) permanecen `metadata_checked_only`, con `claims_supported: []` y `events_supported: []`.
- **Límites:** no se añade narración, relación, alias ni claim; no se infiere presencia/ausencia y no se fusionan las continuidades. Alfia, Zald, Meteria, Erebus y Rudra conservan sus localizadores primarios pendientes.


### Estado de implementación — DEC-DM-014 / BookLive
- Las rutas SRC-047/048 y la navegación fueron integradas mediante [PR #160](https://github.com/jonhararagi/wordwaifu/pull/160), SHA `968ad23141ffdc2db032383228445fddc753b755`; los dos workflows de PR pasan sobre el head `6d89ea9a7846c64132b08f58b628ff70b075a302` ([Validate #40381631794](https://github.com/jonhararagi/wordwaifu/actions/runs/40381631794), [Lore/Integrity #40381631812](https://github.com/jonhararagi/wordwaifu/actions/runs/40381631812)).
- Post-merge Lore/Integrity [#40381983723](https://github.com/jonhararagi/wordwaifu/actions/runs/40381983723) y Validate [#40381983810](https://github.com/jonhararagi/wordwaifu/actions/runs/40381983810) terminaron en `success`.
- **Límite:** únicamente se verificaron páginas de producto y controles de muestra; no se leyó narración. No cambiar claims ni cerrar los localizadores de DMR-045 a partir de estos metadatos.

### DEC-DM-015 — Reseña comunitaria como pista secundaria, no localizador
- **Fecha:** 2026-10-26.
- **Estado:** Aplicada; pendiente de cotejo primario.
- **Decisión de trabajo:** una reseña pública de lector puede aportar una pista atómica si queda etiquetada como secundaria y separada de afirmaciones verificadas en el texto.
- **Aplicación:** DMR-045-SRC-043 sustenta DMR-045-CLM-022 como pista `secondary_checked` sobre una posible ofrenda floral al cierre de Astrea Record 3. No se crea un evento, arista o alias ni se transfiere material de CONT-GAME a CONT-AR.
- **Límite:** no elevar a canon confirmado ni registrar capítulo/página hasta leer una edición licenciada.
- **Integración y validación:** PR [#162](https://github.com/jonhararagi/wordwaifu/pull/162), SHA `09a771bd752a8a903984bf5f84510a36565f9206`. **Integración y CI de PR #162:** integrada por squash en `main`, merge SHA `09a771bd752a8a903984bf5f84510a36565f9206`. CI de la PR sobre head `3bbd6e89e6a1c73a338acf7b36574e6642392712`: [Validate WordWaifu #40394117882](https://github.com/jonhararagi/wordwaifu/actions/runs/40394117882) y [DanMachi Lore and Retrieval Integrity #40394118254](https://github.com/jonhararagi/wordwaifu/actions/runs/40394118254), ambos `success`. CI post-merge sobre el SHA exacto de `main`: [DanMachi Lore and Retrieval Integrity #40400987218](https://github.com/jonhararagi/wordwaifu/actions/runs/40400987218) y [Validate WordWaifu #40400987257](https://github.com/jonhararagi/wordwaifu/actions/runs/40400987257), ambos `success`.

### DEC-DM-016 — Ruta Kobo del volumen 20: vista previa anunciada, no leída
- **Fecha:** 2026-10-26.
- **Estado:** INTEGRADO en main mediante [PR #164](https://github.com/jonhararagi/wordwaifu/pull/164); CI de PR aprobado; validación post-merge no confirmada.
- **PR e integración:** [PR #164](https://github.com/jonhararagi/wordwaifu/pull/164) fusionada por squash en main. Head probado: dc60cf91fba87a85419bc029d24dd7b8446420f6; SHA resultante de main confirmado: 345db0189308b2e34a31bbf8f3930e75f0b4fc2f.
- **CI de PR sobre el head exacto:** [Validate WordWaifu #40432114887](https://github.com/jonhararagi/wordwaifu/actions/runs/40432114887) y [DanMachi Lore and Retrieval Integrity #40432114895](https://github.com/jonhararagi/wordwaifu/actions/runs/40432114895), ambos `success`; incluyen sintaxis JS, expedientes, directorio de fuentes y smoke test de navegador.
- **Verificación post-merge:** no confirmada. La consulta del SHA de main no devolvió contextos de estado ni ejecuciones accesibles mediante las consultas disponibles; no se afirma que los workflows post-merge estén en verde.

- **Decisión:** añadir rutas de distribuidores licenciados como metadata-only si la ficha anuncia una vista previa, incluso cuando el lector no pueda inspeccionarse. La existencia de un botón no equivale a acceso al texto.
- **Aplicación:** DMR-045-SRC-049 registra el ebook inglés de DanMachi vol. 20 en Kobo; el índice público muestra “Preview Now” y “Save Preview”, mientras la apertura directa devolvió “Cache miss”. Se expone desde Alfia y Zald en CONT-MAIN-LN solamente.
- **Límites:** no crea claims, eventos, aristas ni aliases; no confirma las pistas secundarias DMR-045-CLM-019 o CLM-020 y no cambia la continuidad. Los cinco cotejos primarios continúan pendientes.

### DEC-DM-017 — BOOK☆WALKER vol. 20: el enlace 試し読み no equivale a lectura
- **Fecha:** 2026-10-27.
- **Estado:** Implementada e integrada mediante PR #166; CI de PR aprobado; CI post-merge aprobado.
- **Decisión:** registrar la muestra licenciada como ruta de consulta aun cuando la herramienta no pueda abrir el visor, indicando el resultado observado con precisión.
- **Aplicación:** DMR-045-SRC-050 guarda la ficha y ruta de prueba del volumen 20 japonés. La herramienta devolvió «Internal Error» al seguir la redirección y señaló «not accessible via this tool»; no se confirmó una respuesta HTTP del visor ni se recuperó texto.
- **Integración:** [PR #166](https://github.com/jonhararagi/wordwaifu/pull/166), SHA de `main` `2951fa55396564cb878e00ab5c7d2b297966cd64`; la comparación GitHub confirmó que el SHA coincide con `main`.
- **CI de PR:** [Validate #40450101232](https://github.com/jonhararagi/wordwaifu/actions/runs/40450101232) y [Lore/Integrity #40450101166](https://github.com/jonhararagi/wordwaifu/actions/runs/40450101166), ambos `success` sobre el head probado `80c5468f78812312898dbe3f6de709856f63d0d2`.
- **CI post-merge sobre el SHA exacto de main:** [Validate WordWaifu #40459532846](https://github.com/jonhararagi/wordwaifu/actions/runs/40459532846) y [DanMachi Lore and Retrieval Integrity #40459532519](https://github.com/jonhararagi/wordwaifu/actions/runs/40459532519), ambos `success` sobre `2951fa55396564cb878e00ab5c7d2b297966cd64`.
- **Límites:** mantiene `CONT-MAIN-LN), no modifica claims/eventos/aristas/aliases y no mezcla las referencias con `CONT-AR` o `CONT-GAME`. Los cinco cotejos primarios siguen abiertos.


### DEC-DM-018 — Diferencias de la novelización de Astrea Record como guía secundaria
- **Fecha:** 2026-10-27.
- **Estado:** Implementada e integrada mediante PR #168; CI de PR y post-merge aprobados.
- **Decisión aplicada:** se puede enlazar una comparación comunitaria de la novelización para orientar la búsqueda de escenas, pero su etiqueta debe seguir siendo secundaria y ceñirse a la continuidad descrita.
- **Aplicación:** DMR-045-SRC-051 enlaza la página de diferencias de Astrea Record 3 y se expone en las notas interactivas de Alfia, Zald y Erebus únicamente bajo `CONT-AR`.
- **Integración y validación:** PR [#168](https://github.com/jonhararagi/wordwaifu/pull/168), SHA `99a667e60f3651b98759a1993a26258ba37dd645`. CI de PR sobre `16338edec86670b1692084bea446657bc657eb71`: [Validate WordWaifu #40510817854](https://github.com/jonhararagi/wordwaifu/actions/runs/40510817854) y [DanMachi Lore and Retrieval Integrity #40510817870](https://github.com/jonhararagi/wordwaifu/actions/runs/40510817870), ambos `success`; CI post-merge sobre `99a667e60f3651b98759a1993a26258ba37dd645`: [Validate WordWaifu #40511064727](https://github.com/jonhararagi/wordwaifu/actions/runs/40511064727) y [DanMachi Lore and Retrieval Integrity #40511064313](https://github.com/jonhararagi/wordwaifu/actions/runs/40511064313), ambos `success`.
- **Límites:** sin claims ni eventos nuevos; no se afirma lectura directa de la novela, no se inventan páginas, no se crea una relación familiar para el padre de Bell y no se importa la ideología de Erebus del juego a la novelización.


### DEC-DM-019 — Bitácora anti-repetición de personajes y campos no reportados
- **Fecha:** 2026-10-27.
- **Estado:** implementada, integrada y validada por PR #170.
- **Regla de trabajo:** reutilizar la pasada secundaria ya documentada en vez de actualizar repetidamente la personalidad. Registrar por identidad los enlaces revisados, hechos secundarios, campos no reportados, discrepancias y condición precisa para reabrir.
- **Aplicación:** `lore/danmachi/CHARACTER_UPDATE_LEDGER.md`; continuidad adicional `CONT-SECONDARY`; notas de habilidades de una primera cohorte de diez miembros de Astrea Familia; test automatizado agregado a ambos workflows.
- **Integración y validación:** PR [#170](https://github.com/jonhararagi/wordwaifu/pull/170), SHA `034eb037f98ce25076de7fc4217a62cb960172eb`. CI de PR sobre `e0cb29570ad8cd0b7b704ca73fa95882765e66a0`: [Validate WordWaifu #40525522243](https://github.com/jonhararagi/wordwaifu/actions/runs/40525522243) y [DanMachi Lore and Retrieval Integrity #40525522040](https://github.com/jonhararagi/wordwaifu/actions/runs/40525522040), ambos `success`; CI post-merge sobre `034eb037f98ce25076de7fc4217a62cb960172eb`: [Validate WordWaifu #40525793577](https://github.com/jonhararagi/wordwaifu/actions/runs/40525793577) y [DanMachi Lore and Retrieval Integrity #40525794301](https://github.com/jonhararagi/wordwaifu/actions/runs/40525794301), ambos `success`.
- **Límite de inferencia:** ausencia en una wiki/juego significa que esa fuente no reportó el dato, no que el canon niegue explícitamente la habilidad. No completar nombres, costes o niveles exactos por inferencia. DMR-045 se mantiene `HOLD_FOR_PRIMARY_SOURCE` hasta evidencia nueva; no se cambia la prioridad hacia Orario por esta tanda.

### DEC-DM-020 — Avanzar a otra cohorte cuando la fuente ya fue agotada
- **Fecha:** 2026-10-27.
- **Estado:** implementada e integrada en `main` mediante PR #172; CI de PR aprobado; post-merge registrado por separado.
- **Pruebas de PR:** [Validate #40572608737](https://github.com/jonhararagi/wordwaifu/actions/runs/40572608737) y [Lore/Integrity #40572608435](https://github.com/jonhararagi/wordwaifu/actions/runs/40572608435), ambos `success` sobre `1ece6f0117dadf2fb0b0a4988d23c13df34d0609`.
- **Merge:** [PR #172](https://github.com/jonhararagi/wordwaifu/pull/172), SHA `79505bd740d47560d4bc67166c807d14090a950d`. CI post-merge aprobada: [Validate #40590376454](https://github.com/jonhararagi/wordwaifu/actions/runs/40590376454) y [Lore/Integrity #40590376362](https://github.com/jonhararagi/wordwaifu/actions/runs/40590376362), ambos `success` sobre ese SHA.
- **Decisión operativa:** no reiterar análisis de personalidad ni volver a recorrer la misma wiki/juego solo para buscar un nivel, poder, skill, magia o coste que no reporta. Anotar el campo como no informado por esa fuente y avanzar a otro personaje/grupo.
- **Aplicación:** DMR-052 incorpora capacidades secundarias de Allen Fromel, Hedin Selland, Hogni Ragnar y los cuatro hermanos Gulliver. Las fuentes y los límites se registran en DMR-052 y CHARACTER_UPDATE_LEDGER.md.
- **Límites:** lo no reportado por una wiki no demuestra inexistencia en canon; los snapshots y mecanismos permanecen secundarios; no se reescribe personalidad ni se inventan localizadores.
- **Relación con prioridad:** DMR-045 conserva la prioridad de cotejo primario, pero sus páginas de muestra sin narración legible no se vuelven a consultar sin un desencadenante nuevo. DMR-052 avanza en paralelo una cohorte diferente mientras se conserva ese bloqueo.


### DEC-DM-021 — Pasada de capacidades Loki sin iteración de personalidad
- **Fecha:** 2026-10-27.
- **Estado:** implementado e integrado en `main` mediante PR [#174](https://github.com/jonhararagi/wordwaifu/pull/174); CI de PR y post-merge aprobados.
- **Decisión operativa:** cuando una fuente ya fue recorrida varias veces, no repetirla sin un cambio material. Pasar a otro personaje/grupo y limitar la ampliación a capacidades, equipo o límites verificables; no volver a redactar personalidad.
- **Aplicación:** DMR-053 registra Hati, Úlfheðinn, Fenris Wolf y Solmani para Bete; Berserk e Intense Heat para Tiona; Berserk, Backdraft y List Iorum para Tione, con sus armas/habilidades de desarrollo reportadas.
- **Límites:** las fuentes son wikis comunitarias, bajo CONT-SECONDARY; tablas de nivel 5 y encabezados de nivel 6 son snapshots distintos; “no listado” no prueba inexistencia universal.
- SHA de `main`: `28ae6f34859bc0a59beaf7a711bfa54504265ffd`.
- **CI de PR sobre `37f50a3f0608cb00b3c355e75c008031e70bbe70`:** [Validate WordWaifu #40602468962](https://github.com/jonhararagi/wordwaifu/actions/runs/40602468962) y [DanMachi Lore and Retrieval Integrity #40602469069](https://github.com/jonhararagi/wordwaifu/actions/runs/40602469069), ambos `success`.
- **CI post-merge sobre el SHA exacto de `main` `28ae6f34859bc0a59beaf7a711bfa54504265ffd`:** [Validate WordWaifu #40602644529](https://github.com/jonhararagi/wordwaifu/actions/runs/40602644529) y [DanMachi Lore and Retrieval Integrity #40602644563](https://github.com/jonhararagi/wordwaifu/actions/runs/40602644563), ambos `success`.

### DEC-DM-022 — Reutilizar la fuente alternativa ya registrada sin reabrir canon
- **Fecha:** 2026-10-27.
- **Estado:** implementado en rama; validación e integración pendientes.
- **Decisión:** no volver a rastrear ni duplicar el relato alternativo «それは遥か彼方の静穏の夢». Su texto ya está documentado como DMR-029-SRC-016; el catálogo editorial que confirma la edición especial está en DMR-045-SRC-002 y DMR-045-SRC-005.
- **Alcance permitido:** utilizar detalles solo dentro de CONT-AU. La ficha editorial acredita la existencia y la presentación alternativa del cuadernillo, no las escenas específicas de la novela principal.
- **Pendiente preservado:** Alfia, Zald, Meteria, Erebus y Rudra continúan con los cotejos primarios de DMR-045 abiertos; no se añadieron claims ni relaciones a CONT-MAIN-LN.


### DEC-DM-023 — Separar metadatos de distribuidor de la lectura narrativa
- **Fecha:** 2026-10-27.
- **Estado:** implementado e integrado en main por [PR #177](https://github.com/jonhararagi/wordwaifu/pull/177); CI de PR aprobada.
- SHA de main: a9ab02584f857a9c3fabbba59b40e8799e7aaead.
- **CI de PR sobre aa20c6ebe92311d9b46b3410c1305ca3ef6802c8:** [Validate WordWaifu #40613817357](https://github.com/jonhararagi/wordwaifu/actions/runs/40613817357) y [DanMachi Lore and Retrieval Integrity #40613817354](https://github.com/jonhararagi/wordwaifu/actions/runs/40613817354), ambos success.
- **CI post-merge sobre el SHA exacto de main a9ab02584f857a9c3fabbba59b40e8799e7aaead:** [Validate WordWaifu #40613983958](https://github.com/jonhararagi/wordwaifu/actions/runs/40613983958) y [DanMachi Lore and Retrieval Integrity #40613983944](https://github.com/jonhararagi/wordwaifu/actions/runs/40613983944), ambos success.
- **Decisión:** registrar una ficha de distribuidor solo como metadata_checked_only cuando se han visto datos de producto o controles de muestra pero no se ha leído narración.
- **Aplicación:** DMR-045-SRC-052, BookLive vol. 20. No se considera un intento fallido de lectura porque el lector no se abrió en esta pasada.
- **Prioridad conservada:** los cinco cotejos primarios de Alfia, Zald, Meteria, Erebus y Rudra siguen abiertos. No se reintentan muestras ya bloqueadas salvo evidencia nueva.


### DEC-DM-024 — Pasada de capacidades Hermes sin reescritura de personalidad
- **Fecha:** 2026-10-28.
- **Estado:** integrada y validada en `main`.
- **Integración:** [PR #179](https://github.com/jonhararagi/wordwaifu/pull/179), squash merge; SHA exacto de `main`: `cf1aef26f0f2f1d3b4ffe4513c0ff80f65764ef6`.
- **CI de PR sobre `809ad6ccd67e0e90c01d7c842438b1f296ae2ad5`:** [Validate WordWaifu #40727748042](https://github.com/jonhararagi/wordwaifu/actions/runs/40727748042) y [DanMachi Lore and Retrieval Integrity #40727747907](https://github.com/jonhararagi/wordwaifu/actions/runs/40727747907), ambos `success`.
- **CI post-merge sobre el SHA exacto de `main`:** [Validate WordWaifu #40728030060](https://github.com/jonhararagi/wordwaifu/actions/runs/40728030060) y [DanMachi Lore and Retrieval Integrity #40728030297](https://github.com/jonhararagi/wordwaifu/actions/runs/40728030297), ambos `success`.
- **Decisión:** pasar a personajes distintos cuando la fuente ya se agotó. Registrar la falta de un dato como «no informado en el contenido consultado» y no como prueba de inexistencia en canon.
- **Aplicación:** DMR-054 documenta a Asfi Al Andromeda y Lulune Louie bajo CONT-SECONDARY. Asfi: nivel, Kalov Argol, skills y equipo que la wiki enumera; Lulune: nivel reportado, combate acrobático, sentidos y cartografía, con magia/skills nombradas no recuperadas en la página consultada.
- **Límites:** no se reescriben personalidades ni historia, no se crean claims/eventos/relaciones/aliases, y DMR-045 mantiene sus cinco cotejos primarios.

### DEC-DM-025 — Cohorte secundaria DMR-055 con protocolo anti-repetición
- **Fecha:** 2026-10-28.
- **Estado:** integrada y validada en main.
- **Integración:** [PR #182](https://github.com/jonhararagi/wordwaifu/pull/182), squash merge; SHA exacto de main `25b019598e74c5f9756aa541b8e9f5f1fe7c633e`.
- **CI de PR:** [Validate #40744157365](https://github.com/jonhararagi/wordwaifu/actions/runs/40744157365) y [DanMachi Lore and Retrieval Integrity #40744157330](https://github.com/jonhararagi/wordwaifu/actions/runs/40744157330), ambos success.
- **CI post-merge sobre el SHA exacto:** [Validate #40751474055](https://github.com/jonhararagi/wordwaifu/actions/runs/40751474055) y [DanMachi Lore and Retrieval Integrity #40751474058](https://github.com/jonhararagi/wordwaifu/actions/runs/40751474058), ambos success.
- **Decisión operativa:** después de una pasada secundaria estructurada sin datos nuevos, no repetir la misma URL ni reformular la personalidad. Avanzar a otra identidad; marcar como «no informado en el contenido consultado» el campo ausente, sin inventarlo ni concluir que está universalmente ausente del canon.
- **Aplicación:** DMR-055 documenta Tsubaki Collbrande y Welf Crozzo. Las fuentes permanecen secundarias y no se crean claims narrativos, relaciones o eventos. La actualización de fichas interactivas queda separada y requiere pruebas propias.
- **Prioridad:** los cinco cotejos narrativos primarios de DMR-045 siguen abiertos; las muestras ya agotadas no se repiten sin evidencia nueva.


### DEC-DM-026 — Nueva cohorte Hestia para probar recuperación y contradicciones
- **Fecha:** 2026-10-28.
- **Estado:** en validación de PR; integración pendiente.
- **Decisión operativa:** cuando los lectores primarios ya probados no ofrecen texto nuevo, no repetir las mismas URL sin un desencadenante. Seguir completando personajes de otra cohorte con fuentes secundarias claramente delimitadas y pruebas de recuperación.
- **Aplicación:** DMR-056 reúne Liliruca Arde, Mikoto Yamato, Haruhime Sanjouno y crea la ficha CHAR-NINA-TULLE; se añaden notas `CONT-SECONDARY`, seis entradas al directorio de fuentes y regresiones automatizadas.
- **Contradicción preservada:** Nina figura como pasante sin falna en el texto descriptivo, pero como activa en tablas de miembros. Su afiliación formal queda sin resolver.
- **Límites:** no se añaden claims, eventos, relaciones o alias; DMR-045 mantiene los cinco cotejos primarios pendientes y solo se reabre con evidencia nueva.

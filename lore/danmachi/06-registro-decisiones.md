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
- **Revisión adicional del 2026-10-25:** la muestra gratuita normal de BOOK☆WALKER para DanMachi vol. 14 (edición japonesa licenciada de SB Creative) se comprobó desde [la ficha del volumen](https://bookwalker.jp/deb74ef953-7194-47cb-8abb-7453a4b2e353/). El lector devolvió “Could not download. Please check your network connection.” Se registra como DMR-045-SRC-028, metadata_checked_only y sin claims; no demuestra el contenido de la escena ni el conocimiento personal de Rudra.
- **Referencias:** [DANMACHI-RESEARCH-045](research/inbox/DANMACHI-RESEARCH-045-dark-era-characters-continuity-audit.md), [registro central de fuentes](sources/00-registro-fuentes.md), [PR #122](https://github.com/jonhararagi/wordwaifu/pull/122).

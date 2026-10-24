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
- Estado: ACCEPTED.
- Decisión: continuar desde el estado verificable de `main`, preservar los acuerdos en los registros permanentes y aplicar el ciclo de investigación, implementación, pruebas, integración y verificación. El destino final para cambios aprobados es `main`, tras revisar seguridad, conflictos y CI sobre los commits correspondientes.
- Prioridad: cerrar primero la investigación pública aún útil de `DANMACHI-RESEARCH-045` para Alfia, Zald, Meteria, Erebus y Rudra; después continuar con Orario. Los detalles sin localizador narrativo reproducible permanecen pendientes.
- Reglas: las wikis inglesa y española se etiquetan como fuentes secundarias; no confundir una acción de Rudra Familia con responsabilidad personal de Rudra, no equiparar Meteria con la hermana sin nombre citada en la entrevista de Memoria Freese, y no transferir contenido de `CONT-AU` a `CONT-MAIN-LN`/ `CONT-AR`.
- Documentos afectados: registro de conversación, estado, cola, DMR-045 y directorio de fuentes recuperables desde la aplicación.

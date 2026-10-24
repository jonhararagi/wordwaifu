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


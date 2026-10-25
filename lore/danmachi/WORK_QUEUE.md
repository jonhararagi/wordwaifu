# Cola de trabajo para futuras tandas de lore

Esta cola sigue la cobertura cronológica, desde las eras antiguas hasta el último volumen principal publicado que se pueda verificar. Las tareas se dividen para no mezclar épocas, fuentes o continuidades. Ningún número de volumen ni final se inventará para llenar huecos.



## REGLA PERMANENTE · Registro de acuerdos de conversación

- [x] Registrar en el repositorio los acuerdos, requisitos, preferencias, correcciones y criterios de investigación relevantes tratados con el usuario, para no pedir que se reenvíen mensajes ya conocidos.
- [x] Consultar [el registro permanente de acuerdos](../../docs/CONVERSATION_DECISION_LOG.md) antes de iniciar nuevas tareas o repetir preguntas/auditorías.
- [x] Aplicar la directriz aceptada de utilizar wikis reconocidas en inglés/español cuando no haya acceso a las novelas, manteniéndolas clasificadas como fuentes secundarias y registrando procedencia.
- [ ] En cada nueva tanda, actualizar este registro y el documento específico afectado; verificar que estado, fuente y continuidad estén documentados antes de informar finalización.

Esta regla preserva el contexto, pero no sustituye validación factual, pruebas técnicas ni confirmación de integración.

## WordWaifu — filtros de alineamiento interpretativo (2026-10-25)

- [x] Añadir metadatos de alineamiento con ejes separados: moralidad (bueno / neutral / malo) y conducta (legal / neutral / caótico).
- [x] Añadir filtros de ambos ejes a la enciclopedia de personajes y mostrar justificación, continuidad, confianza y fuentes en la ficha.
- [x] Tratar «sin clasificar» como ausencia de evaluación, no como una alineación neutral; añadir pruebas de regresión.
- [x] Registrar la clasificación provisional de Alfia y Zald como caótico neutral de baja confianza, con «caótico bueno» descrito como alternativa interpretativa y fuentes secundarias visibles.
- [ ] Ampliar la clasificación a más personajes solo después de revisar motivaciones, decisiones y consecuencias por continuidad; no asignar alineamientos en masa ni deducirlos únicamente del temperamento.
- **Estado:** PR [#115](https://github.com/jonhararagi/wordwaifu/pull/115) integrada en `main` por `3f9fb9536482f381f1cdd9b533ae75d34508f749`; CI de la PR y post-merge aprobada. El alcance sigue limitado a Alfia y Zald con alineamiento provisional de baja confianza; ampliar el censo requiere una revisión individual.


## DANMACHI-RESEARCH-045 — Resultado del barrido secundario público (2026-10-24)

**Estado del subtrabajo:** DONE para las fuentes públicas consultadas. **DMR-045 sigue abierto** respecto de la verificación primaria.

- [x] Revisar las fuentes públicas registradas en inglés y español, consolidar los datos secundarios útiles y documentar los límites por claim, fuente y continuidad.
- [x] Añadir al directorio consultable de la aplicación las rutas comunitarias EN/ES de Alfia, Meteria, Zald, Erebus y Rudra, con límites y continuidad visibles.
- [x] Añadir una prueba automatizada de esas referencias.
- [x] Enriquecer la ficha de Alfia con el detalle secundario sobre la rama de árbol sagrado, y usar el índice comunitario del volumen 20 únicamente como pista de búsqueda.
- [x] Registrar la filosofía atribuida a Erebus bajo `CONT-GAME` y ampliar el recuerdo de Meteria exclusivamente dentro de `CONT-AU`.
- [x] Reutilizar la información ya registrada en DMR-043 y la ficha de Jura para su plan posterior de Juggernaut, sin duplicar claims.
- [x] Documentar que las fuentes públicas revisadas no prueban una orden ni conocimiento personal de Rudra sobre el plan de su Familia.
- [ ] Cotejar los localizadores primarios pendientes de Alfia/Zald/Erebus, Meteria y Rudra cuando el texto licenciado sea accesible; no inventar páginas ni convertir wikis/entrevistas en escenas del libro.
- [x] Corregir los cinco resúmenes de UI de DMR-045 para recuperar detalles secundarios útiles y mostrar su procedencia/continuidad; añadir regresiones sobre límites de Gif Blessing/Deus Ambrosia, CONT-AU de Meteria, CONT-GAME de Erebus, alias «Eren» y atribución colectiva de Rudra Familia (PR #113 integrada; CI de PR y de main aprobada).
- [x] Tras terminar este barrido secundario, activar la etapa de Orario como siguiente prioridad sin borrar los pendientes primarios de DMR-045.

**Límite:** el barrido secundario completado no equivale a cinco biografías verificadas en el texto primario. Los localizadores no disponibles permanecen abiertos.

## Cobertura integrada del roster · DANMACHI-RESEARCH-036

- [x] Crear fichas Markdown individuales para las 63 identidades del roster de adaptación, incluidos los cuatro hermanos Gulliver.
- [x] Integrar cada ID del roster en catálogo, Markdown y expediente de interfaz con seis secciones sustanciales.
- [x] Añadir hubs navegables para Familias principales/secundarias, Hostess of Fertility y Xenos.
- [x] Conectar afiliaciones explícitas con fuente y continuidad; separar afiliaciones históricas y roster secundario provisional.
- [x] Sincronizar el índice y añadir pruebas de cobertura para que no reaparezcan personajes del roster sin ficha.
- [ ] Cotejar capítulo/página de novela para completar biografías por escenas, evolución y relaciones personales.
- [ ] Ampliar el censo más allá de las 63 identidades de adaptación, incluyendo novelas paralelas, Familias antiguas y personajes de juegos.
- [ ] Mantener aislados los candidatos históricos cuyas fuentes no permiten afirmar una relación canónica.

Este lote cierra la integración estructural del roster ampliado, no el trabajo factual completo de Orario, la cronología o las biografías de novela.

## DANMACHI-RESEARCH-038 · Era Oscura y pasado de las hermanas Hiryute

Estado: estructura integrada en `main`; las validaciones estructurales de roster y lore pasaron en la integración. La verificación primaria escena por escena sigue abierta.

- [x] Crear un índice narrativo con rutas separadas para Astrea Record (T-7), Rudra/Jura y Juggernaut (fase posterior) y el pasado Hiryute en Sword Oratoria.
- [x] Crear un nodo de Evilus como red de facciones, no como una sola Familia.
- [x] Añadir fichas y hub navegable de Kali Familia, con Kali, Argana Kalif, Bache Kalif y Seldas.
- [x] Añadir el evento parcial del pasado Hiryute en Melen con la sinopsis editorial oficial.
- [x] Conectar personajes a sucesos y facciones con estados de evidencia explícitos; dejar las pistas de Valletta/Thanatos pendientes.
- [x] Incorporar DMR-038 al buscador y añadir expedientes de interfaz para Kali, Argana, Bache y Seldas.
- [ ] Cotejar Astrea Record I-III en texto completo y obtener capítulo/página para acciones individuales de Alfia, Zald, Erebus y otros antagonistas.
- [ ] Cotejar Sword Oratoria vol. 6 en texto completo para la infancia de Tiona/Tione y los detalles de Argana, Bache y Seldas.
- [ ] Confirmar individualmente la aparición y función de Thanatos antes de aceptar una relación canónica.
- [ ] Mantener el arco T-7 separado del incidente posterior de Rudra/Jura/Juggernaut.
- [ ] Reanudar la auditoría general de secundarios e historias individuales después de esta tanda; no declarar cobertura global completa.

Criterio factual: claims de wiki permanecen secundarios; leads sin pasaje localizado permanecen pending_verification. Una ficha estructural no equivale a biografía verificada.

## DANMACHI-RESEARCH-039 · Inventario separado de lugares del Prototype

**Estado:** inventario estructural integrado en `main` y validado por tests; investigación factual de Orario sigue abierta.

- [x] Registrar avenidas, Central Park y comercio de calle como conceptos separados con IDs estables.
- [x] Vincular cada ficha a los claims DMR-034 existentes, sin duplicar ni elevar su evidencia.
- [x] Mantener `CONT-PROTOTYPE` y conectar las fichas con el nodo de Orario.
- [x] Añadir recuperación predeterminada, índices y prueba contra mezcla de continuidades.
- [ ] Localizar menciones equivalentes en una edición identificada de la novela principal con volumen y capítulo/página o localizador electrónico.
- [ ] Si no existe evidencia en novela, conservar el registro como Prototype y no transformarlo en un hecho de `CONT-MAIN-LN`.

Este lote mejora la navegación de las fuentes recuperadas; no cierra el mapa de Orario.

## PRIORIDAD ACTUAL — Etapa 1: Orario como escenario

**Estado:** IN_PROGRESS. El barrido secundario disponible de DMR-045 ya está documentado; sus pasajes primarios individuales continúan pendientes y no impiden avanzar a esta etapa. El método y la matriz inicial están creados; el análisis factual de la ciudad sigue parcial.  
**Guía:** [Método de análisis progresivo](research/inbox/DANMACHI-RESEARCH-030-metodo-de-analisis-progresivo.md) · [Ficha central de Orario](places/orario.md).

- [x] Establecer una ficha central con el alcance de la evidencia actual y límites explícitos.
- [x] Definir el protocolo común de análisis para que lugares, sucesos y biografías reutilicen los mismos datos sin duplicarlos.
- [x] Registrar el marco general Orario–Dungeon de la sinopsis editorial del volumen 1 en [DANMACHI-RESEARCH-035](research/inbox/DANMACHI-RESEARCH-035-orario-volume1-publisher-synopsis.md), con tipo de fuente paratextual explícito.
- [ ] Localizar un pasaje narrativo de la novela publicada con capítulo/página; la sinopsis editorial no verifica la geografía interna de Orario ni completa esta tarea.
- [x] Registrar como avance parcial el extracto de lectura de GA Bunko que describe una plaza semicircular al norte de Orario; el índice textual permite acotar capítulo IV y folios 20–21, pero el PDF directo devolvió HTTP 503 y no se verificó visualmente. El localizador se conserva como pista, no como página cotejada.
- [x] Separar el nodo organizativo `ORG-GUILD` de la guía conceptual histórica `DM-GUILD-001`; mover las aristas institucionales al nodo organizativo sin cambiar su continuidad ni su procedencia.
- [x] Añadir `LOC-RIVIRA` como asentamiento del piso seguro 18 del Dungeon a partir del glosario oficial del anime (DMR-026-CLM-004); relación única al Dungeon bajo `CONT-ANIME`, sin inferir un barrio de superficie ni trasladarlo a la novela principal.
- [ ] Completar el inventario de lugares de la ciudad con IDs estables y relaciones respaldadas; la evidencia parcial favorece distinguir Pantheon de la sede de la Guild, pero la sede física exacta y el vínculo Pantheon–Babel siguen pendientes; véase [DMR-051](research/inbox/DANMACHI-RESEARCH-051-pantheon-babel-guild-headquarters-reconciliation.md).
- [ ] Verificar distritos, calles, accesos, orientación y mapas. Mantener las ubicaciones sin respaldo como esquema/pregunta; las wikis solo aportan pistas.
- [ ] Analizar instituciones, Familias, población, vida cotidiana, comercio, abastecimiento y seguridad, afirmación por afirmación.
- [ ] Describir el estado de Orario por periodos históricos y enlazar los eventos existentes sin narrarlos aquí de nuevo.
- [ ] Revisar huecos, contradicciones, aliases, enlaces y pruebas automáticas antes de declarar la etapa cerrada.
- [x] Recuperar pistas secundarias de geografía urbana, mapa, Guild/Pantheon y economía de wikis ES/EN/JA en [DANMACHI-RESEARCH-031](research/inbox/DANMACHI-RESEARCH-031-orario-wiki-geography-leads.md), registrando fuente, localizador y límites.
- [x] Crear ficha parcial de Daedalus Street con la mención oficial de DanMachi III, episodio 12, separando la geografía de wiki como secundaria.
- [x] Crear una ficha secundaria de Pantheon como edificio atribuido a la Guild, separada de la organización en la navegación y sin elevarla a canon de novela.
- [x] Crear ficha de exploración navegable de Plaza del Amor a partir de DMR-031-CLM-011; conservar nombre/entorno como evidencia secundaria y relación con Orario en `CONT-UNVERIFIED`.
- [ ] Rastrear las referencias de las wikis hasta fuentes primarias; las fichas exploratorias secundarias no equivalen a verificación de la novela ni cierran la etapa.
- [x] Registrar por separado la antigua iglesia y la mansión adquirida de Apollo Familia como residencias en CONT-ANIME, con la transición sustentada en la sinopsis oficial de DanMachi II, episodio 5.
- [x] Recuperar del portal oficial Prototype los detalles de avenidas, Central Park, comercio de calle y usos de Babel en [DANMACHI-RESEARCH-034](research/inbox/DANMACHI-RESEARCH-034-orario-prototype-streets-commerce-babel.md), manteniéndolos bajo CONT-PROTOTYPE.
- [x] Localizar una mención de Pantheon en el extracto oficial de volumen 3 (capítulo I y folios 36–37 conservados por el índice) e integrarla como `source_checked_excerpt_only`.
- [x] Contrastar la afirmación comunitaria sobre Pantheon con la secuencia del extracto editorial: el texto indexado favorece que Pantheon sea una referencia distinta de la sede blanca de la Guild; discrepancia registrada en DMR-051, con cautela por falta de verificación visual.
- [ ] Abrir visualmente el PDF del volumen 3 y resolver, con nuevos localizadores si hace falta, si la sede de la Guild está dentro de Babel o en una estructura separada; el glosario oficial de anime no establece la relación física.
- [x] Registrar la sinopsis editorial oficial de Sword Oratoria vol. 7 como evidencia separada de la investigación de Loki Familia sobre Daedalus Street (DMR-049, `CONT-SO-LN`).
- [ ] Localizar la primera mención de Daedalus Street en la novela principal; DMR-049 no satisface esta tarea porque pertenece a Sword Oratoria.
- [ ] Localizar el pasaje primario de `アモールの広場` (Plaza del Amor) con capítulo/página o localizador digital para confirmar la descripción y evaluar si algún dato puede asignarse a `CONT-MAIN-LN`.
- [x] Registrar como claim independiente el relato corto oficial `迷宮街の恋愛話・裏` en `CONT-SHORT` (DMR-050); el PDF aún no se verificó visualmente.
- [ ] Cotejar en CONT-MAIN-LN las ocho avenidas, Central Park, la zona comercial junto al Dungeon, los servicios de Babel y el límite comercial del piso veinte; no cerrar esos puntos usando sólo Prototype.
- [ ] Localizar en fuente primaria la primera descripción de la iglesia y de la mansión, verificar quién destruyó la iglesia y establecer su ubicación urbana.

**Criterio de cierre:** cada área relevante tiene contenido respaldado o una incógnita declarada; los lugares importantes son navegables; los hechos están delimitados por fuente y continuidad; no quedan mapas o datos secundarios presentados como canon sin verificación. No se exige fingir un porcentaje global de completitud.

## Etapas posteriores — bloqueadas por el orden de trabajo

1. [ ] Sucesos ocurridos en Orario: fichas atómicas con tiempo, lugar, causas, participantes, consecuencias y fuentes.
2. [ ] Personajes principales: perfil y estados por periodo.
3. [ ] Personajes secundarios: mismas reglas de procedencia y continuidad, con profundidad proporcional.
4. [ ] Historias individuales: secuencias personales construidas a partir de eventos existentes.
5. [ ] Auditoría integrada de cobertura, relaciones, contradicciones y duplicados.


## BATCH-DM-001 — Esqueleto cronológico y catálogo
- Estado: DONE como estructura documental.
- Resultado: ERA-00 a ERA-10 y ERA-AU; índices por categoría; 20 plantillas iniciales de volúmenes; matriz de continuidad, índice de arcos, plantillas narrativas reutilizables; 6 eventos de canon candidatos y 4 eventos AU propuestos; catálogo JSON; validador de integridad. Los stubs no afirman que el volumen 20 sea el último.
- Evidencia y límites: consultar BATCH_LOG.md. El contenido canónico aún necesita fuentes primarias.

## Premisa narrativa autoral incorporada

- [x] Durante la época que el autor denomina “Era Oscura”, el OC conoce a su Familia.
- [x] La historia principal/canónica posterior está muy cambiada respecto de la original.
- [ ] Precisar si “conoce” significa encuentro, ingreso formal a la Familia o ambas cosas.
- [ ] Identificar integrantes, ancla temporal, punto de divergencia y consecuencias para el estado posterior de los personajes.
- [x] Confirmada una equivalencia oficial limitada: «オラリオの暗黒期» (Era Oscura de Orario) en *Astrea Record*, aproximadamente siete años antes de la visita de Bell a Orario. No equivale automáticamente a toda la historia antigua ni a «Época Dorada».
- [x] Incorporar el modelo de identidad estable + estados por época y continuidad.

## Estado provisional de eventos candidatos
- Fichas creadas: descenso de las deidades, expedición de Zeus/Hera contra el Dragón Negro, caída/pérdida de posición de esas Familias, llegada de Hestia, encuentro Bell-Hestia y Eina como asesora.
- Eventos AU propuestos: llegada del OC, interacción con Eina, reclutamiento por Loki y Loki lo llama “Bell”.
- Todos los eventos canónicos candidatos están pendientes de cotejo. Los eventos AU esperan aclaración/decisión expresa.

## BATCH-DM-002 — Verificación prioritaria para la premisa del OC
- Estado: pendiente.
- [ ] Identificar el término oficial detrás de “Época Dorada” antes de nombrar una era canónica.
- [ ] Cotejar la cronología de Hestia y Bell en fuente primaria.
- [ ] Cotejar el papel de Eina, el registro en la Guild y la entrada al Dungeon.
- [ ] Aclarar qué significa que Loki llame “Bell” al OC y si Bell Cranel existe como entidad separada en la AU.
- [ ] Registrar decisiones del autor; no aceptar overrides por inferencia.
- [x] Ejecutado por GitHub Actions: [PASS_REAL #38137048288](https://github.com/jonhararagi/wordwaifu/actions/runs/38137048288). La ejecución manual en el equipo local sigue sin realizarse; reparar cualquier fallo futuro que aparezca.

## DANMACHI-RESEARCH-001 · Investigación documental de la Era Oscura

- Estado: PARTIAL; fuentes oficiales web cotejadas, textos completos de los volúmenes 1–3 pendientes.
- Paquete: [BATCH-DM-003-era-oscura-y-personajes-multiepoca.md](research/inbox/BATCH-DM-003-era-oscura-y-personajes-multiepoca.md).
- [x] Verificar la denominación «Era Oscura de Orario» (`オラリオの暗黒期`).
- [x] Registrar la ancla temporal aproximada de siete años antes de la visita de Bell a Orario.
- [x] Recopilar la información editorial oficial sobre Astrea Familia, Ryu, Alise y Evilus.
- [x] Distinguir el evento original de DanMemo y la trilogía novelada.
- [ ] Consultar directamente los volúmenes 1–3 y guardar localizadores internos.
- [ ] Verificar estados posteriores de Ryu, Astrea y Alise mediante fuente de continuidad adecuada.
- [ ] Investigar por separado la cronología de Hestia/Bell y el orden de eventos de Zeus/Hera.
- [ ] Mantener sin resolver el roster del OC y el punto de divergencia hasta decisión expresa del autor.
- Nota: el nombre de archivo solicitado contiene BATCH-DM-003, pero la clave de cola ya está reservada a ERA-00. Se usa DANMACHI-RESEARCH-001 como ID interno para evitar colisiones.

## Orden de cobertura histórica

### BATCH-DM-003 — ERA-00: historia antigua y terminología
- [ ] Resolver traducciones y denominaciones de las eras.
- [ ] Registrar mitos, héroes, monstruos y hechos antiguos con fuentes.
- [ ] Distinguir relato, rumor, teoría y hecho confirmado.
- [ ] Actualizar mapa de eras y catálogo.

### BATCH-DM-004 — ERA-01: descenso de las deidades
- [ ] Registrar llegada, límites y condiciones que indiquen las fuentes.
- [ ] Crear registros individuales para reglas independientes.
- [ ] Separar las creencias de los personajes del relato objetivo.

### BATCH-DM-005 — ERA-02 y ERA-03: Orario, Dungeon, héroes y Familias tempranas
- [ ] Verificar la historia documentada de Orario, Babel y Guild.
- [ ] Rellenar los índices institucionales y geográficos.
- [ ] Registrar expediciones y figuras históricas.
- [ ] No inventar fechas de fundación ni cronología absoluta.

### BATCH-DM-006 — ERA-04 y ERA-05: Zeus, Hera, Dragón Negro y consecuencias
- [ ] Identificar acontecimientos y orden temporal respaldado.
- [ ] Registrar los miembros confirmados por periodo.
- [ ] Documentar expediciones, caída y consecuencias.
- [ ] Separar la historia principal de los hechos conocidos por material paralelo.
- [ ] Registrar rumores, datos disputados y supervivientes sin fusionar versiones.

### BATCH-DM-007 — Pasado de Astrea Familia y Ryuu
- [x] Crear fichas iniciales de Ryu, Astrea y Alise a partir de sinopsis oficiales, con alcance y límites explícitos.
- [x] Registrar para Ryu estados temporales separados por continuidad (Astrea Record frente a perfil de adaptación).
- [ ] Completar fichas de personajes y eventos con pasajes de los textos íntegros.
- [ ] Reconstruir estados y afiliaciones por periodo más allá de los datos de sinopsis.
- [ ] Enlazar relatos paralelos sin duplicar los mismos acontecimientos.
- [ ] Añadir localizadores internos de las novelas; las URLs de sinopsis no bastan para cerrar esta tarea.

### BATCH-DM-008 — ERA-06: periodo previo a Bell
- [ ] Completar Hestia, Loki, Freya, Eina y familias relevantes por fecha.
- [ ] Verificar ubicaciones, edad aproximada, afiliaciones y conocimiento.
- [ ] Revisar las alertas de la premisa del OC.
- [ ] Registrar cada divergencia AU que el autor apruebe.

### BATCH-DM-009 — ERA-07: inicio de la historia principal
- [ ] Inventariar el volumen 1 con edición y localizadores.
- [ ] Atomizar acontecimientos por escena/evento.
- [ ] Actualizar los estados iniciales de Bell, Hestia, Eina y otras entidades relevantes.
- [ ] Verificar reglas del Dungeon y de la Guild según el texto.

### BATCH-DM-010 — ERA-08: volúmenes principales posteriores
- [ ] Confirmar bibliografía vigente antes de fijar el total.
- [ ] Trabajar por volumen o sub-batches pequeños.
- [ ] Registrar eventos, estados, habilidades, reglas, lugares, Familias, pistas y revelaciones.
- [ ] Comparar cada registro con los anteriores para evitar duplicados.
- [ ] Diferenciar orden de publicación y cronología interna.
- [ ] Mantener spoiler level y conocimiento por personaje.

### BATCH-DM-011 — ERA-09: spin-offs y material paralelo
- [ ] Inventariar Sword Oratoria, Familia Chronicle, Astrea Record y otros materiales incluidos en el alcance.
- [ ] Etiquetar cada fuente y continuidad.
- [ ] Enlazar eventos compartidos en lugar de volver a registrarlos.
- [ ] Registrar diferencias entre novela, anime, manga y juego.

### BATCH-DM-012 — ERA-10: último volumen publicado y cierre
- [ ] Comprobar el estado real de publicación y la edición utilizada.
- [ ] Documentar el último volumen principal publicado.
- [ ] Si hay final publicado, registrar eventos finales, estado de personajes, misterios resueltos y asuntos abiertos.
- [ ] Si la obra sigue en curso, marcar FINAL CANÓNICO NO PUBLICADO.
- [ ] No tratar teorías como hechos ni crear un final especulativo dentro del canon.

## DANMACHI-RESEARCH-002 · Psicología de personajes y auditoría de retrieval

- Estado: PARTIAL; perfiles iniciales y fuentes oficiales añadidos, sin lectura íntegra de novelas ni pruebas reales de consulta al corpus desde la aplicación.
- Paquete: [BATCH-DM-004-psicologia-personajes-y-retrieval.md](research/inbox/BATCH-DM-004-psicologia-personajes-y-retrieval.md).
- [x] Confirmar HEAD y separar main.
- [x] Inventariar grupos y prioridades multiepoca.
- [x] Ampliar perfiles existentes de Bell, Hestia, Ais, Eina, Ryu, Astrea y Alise.
- [x] Crear fichas provisionales individuales para Finn, Freya y Ottar con sus IDs reservados.
- [x] Registrar 20 afirmaciones con tipo de evidencia, continuidad, fuente, localizador y confianza.
- [x] Añadir tres perfiles oficiales de adaptación al registro de fuentes.
- [x] Auditar el código de almacenamiento/búsqueda y las pruebas existentes de WordWaifu.
- [x] Comparar SillyTavern World Info, LlamaIndex, AnythingLLM y RAGFlow.
- [ ] Consultar novelas y relatos directamente para obtener localizadores de escenas y profundizar en rasgos psicológicos.
- [ ] En una futura tarea autorizada, integrar el índice de lore al buscador con filtros por época/continuidad/spoiler y citas.
- [ ] Ejecutar consultas de aceptación: Ryu en CONT-AR, Ryu en CONT-ANIME por separado y consulta sin evidencia sobre gustos de Ais.
- Nota: el archivo conserva BATCH-DM-004 por instrucción, pero esta clave sigue asignada a ERA-01. ID de investigación: DANMACHI-RESEARCH-002.

## Reporte obligatorio por tanda

- Batch ID:
- Fuentes exactas consultadas:
- Localizadores comprobados:
- IDs nuevos:
- IDs actualizados:
- Alias incorporados:
- Duplicados evitados/fusionados:
- Conflictos entre fuentes:
- Datos pendientes:
- Validador ejecutado y resultado:
- Veredicto: partial, source_checked, cross_checked o approved.
- Próximo batch:

## Regla

Una tanda se cierra por calidad y evidencia, no por cantidad de archivos. No transformar un resumen escrito desde conocimiento general en canon verificado solo por guardarlo en GitHub.

## DANMACHI-RETRIEVAL-001 · Buscador local de lore

- Estado: implementación en la rama de trabajo; CI por confirmar.
- El navegador lee directamente los paquetes de investigación curados y catalog.json; no requiere un bot instalado, backend ni índice duplicado.
- Filtros: personaje, continuidad, periodo, aspecto psicológico/temático y spoiler.
- Ryu queda dividido en CONT-AR y CONT-ANIME; la inferencia que conecta ambas versiones se muestra como CROSS-CONTINUITY/provisional.
- La consulta Ais + gustos debe abstenerse cuando no existan afirmaciones de apoyo.
- Pruebas: casos unitarios y browser smoke en GitHub Actions.
- Límite: búsqueda textual normalizada sobre los 30 claims actuales. No es IA, no usa RAG y no cubre toda la franquicia.


## DANMACHI-RESEARCH-006 · Hestia/Bell y puerta de divergencia AU
- Estado: PARTIAL; afirmaciones oficiales de cronología inicial y Astrea Record documentadas por separado; intervalo de seis meses para el descenso de Hestia sigue siendo evidencia secundaria.
- Paquete: [DANMACHI-RESEARCH-006](research/inbox/DANMACHI-RESEARCH-006-hestia-bell-au-timeline.md).
- Fuente oficial: episodio 1 del anime indica que Bell llevaba medio mes como único miembro de Hestia Familia al ocurrir el incidente inicial; cronología oficial sitúa Astrea Record siete años antes y usa el término オラリオの暗黒期.
- Fuente secundaria: DanMachi Wiki propone seis meses entre el descenso de Hestia y el inicio de la serie; no se eleva a canon aprobado sin localizador primario.
- Decisión de autor pendiente: mantener cinco años de adelanto con override AU, cambiar la fecha o precisar el punto de referencia; aclarar si Bell Cranel existe aparte del OC.
- Próxima prueba: conflicto de cronología sin override y aceptación de divergencia con override aprobado y acotado.
- Veredicto: mejora documental incorporada; DanMachi global permanece PARTIAL y la historia AU no está escrita/validada por esta tanda.


## DANMACHI-RESEARCH-007 · Red de Astrea Familia y viaje de Ryu
- Estado: PARTIAL; se añadieron relaciones explícitas de la adaptación, una sinopsis editorial y pistas de roster secundario claramente separadas.
- Paquete: [BATCH-DM-007](research/inbox/BATCH-DM-007-astrea-family-network-and-journey.md).
- Próxima tarea: cotejar la primera Familia, tragedia/Juggernaut, memorial y roster de Solingen con los volúmenes; no ascender fuentes comunitarias a canon aprobado sin localizadores.
- Continuidad: perfiles de adaptación (`CONT-ANIME`), etapa histórica (`CONT-AR`), novela posterior (`CONT-MAIN-LN`) y análisis comparativo (`CROSS-CONTINUITY`) permanecen separados.


## DANMACHI-RESEARCH-008 · Novela principal, volúmenes 1–21

- Estado: dossiers de orientación incorporados; localizadores completos por capítulo pendientes.
- Paquete: [afirmaciones y fuentes editoriales](research/inbox/BATCH-DM-008-main-story-volume-map.md).
- Índice: [volúmenes principales](volumes/00-indice-volumenes-y-arcos.md).
- Siguiente paso: extraer eventos por capítulo, crear fichas faltantes y conectar relaciones con tipo, estado temporal y fuente.
- [x] Atomizar tres hechos de la sinopsis editorial del volumen 21 en claims recuperables y enlazarlos a la fuente oficial.
- [ ] Conseguir/cotejar el texto íntegro del volumen 21 y añadir capítulo/página/sección; no elevar las sinopsis a evidencia de escena.
- Mantener por separado CONT-MAIN-LN, CONT-ANIME, CONT-AR y CONT-AU. El volumen 22 figura anunciado para fecha futura al corte de esta tanda; no se inventa su trama ni un final.


## DANMACHI-RESEARCH-009 — Historias paralelas y crónicas

- Estado: 11 afirmaciones indexadas; resúmenes editoriales, no cotejo integral.
- Paquete: `research/inbox/BATCH-DM-009-parallel-stories-and-chronicles.md`.
- Próximo trabajo: secuencia de eventos de Astrea Record, relaciones por integrante de Astrea Familia, sincronización de Sword Oratoria y extracción de escenas por Familia Chronicle.


## DANMACHI-RESEARCH-010 · Familia Hestia: expediente de organización con fuentes
- Estado: PARTIAL; ampliación incorporada en `familias/hestia-familia.md`.
- [x] Registrar dos páginas oficiales de adaptación con IDs de fuente y localizadores descriptivos.
- [x] Separar estado inicial de Bell y snapshot de roster de DanMachi IV.
- [x] Añadir relaciones y utilidad narrativa sin convertirlas en relaciones universales o atemporales.
- [x] Documentar unknowns sobre sede, economía completa, cambios de miembros y localizadores de novela.
- [ ] Ejecutar/confirmar CI del commit final de la tanda.
- [ ] Cotejar la misma estructura contra el texto de novela ligera, por volumen/capítulo, sin elevar automáticamente los perfiles de anime a canon de novela.
- [ ] Repetir el trabajo para Familia Loki y Familia Astrea con relaciones por miembro y periodos.


## DANMACHI-RESEARCH-011 · Familia Loki: expediente de liderazgo y relaciones
- Estado: PARTIAL; ampliación integrada en `familias/loki-familia.md`.
- [x] Registrar fuente oficial de Sword Oratoria y sus perfiles por nombre.
- [x] Separar roles documentados (capitán, vicecapitana, veteranos) de inferencias sobre autoridad en escenas.
- [x] Registrar ocho afirmaciones trazables con continuidad `CONT-SO`.
- [x] Añadir reglas de AU para no sustituir a Bell ni reescribir el roster canónico por inferencia.
- [ ] Confirmar CI del último commit, incluido el validador de catálogo y las pruebas de navegador.
- [ ] Reconstruir las afiliaciones históricas por evento y por volumen; los perfiles promocionales no fijan la fecha de ingreso.
- [ ] Continuar con Familia Astrea y el roster histórico de sus integrantes, manteniendo la procedencia secundaria claramente marcada.


## DANMACHI-RESEARCH-012 · Familia Astrea: justicia y roster histórico
- Estado: PARTIAL; expediente integrado en `familias/astrea-familia.md`.
- [x] Crear un registro de Familia con ID estable y continuidad separada.
- [x] Relacionar Astrea, Alise y Ryu con evidencia de sinopsis oficial.
- [x] Añadir cuatro afirmaciones trazables y enlazarlas al registro de fuentes.
- [x] Mantener Kaguya/Lyra como pistas secundarias, sin promoverlas a canon verificado.
- [ ] Extender pruebas automatizadas a Familia Astrea y comprobar el CI del último commit.
- [ ] Cotejar los volúmenes completos de *Astrea Record* para construir eventos y relaciones por escena.
- [ ] Registrar roster histórico completo solo cuando existan fuentes identificables por integrante.


## DANMACHI-RESEARCH-013 · Integración de Familias en búsqueda global
- Estado: IMPLEMENTADO; confirmación completa de CI del commit más reciente pendiente.
- Regresión de navegador encontrada en CI: el smoke tenía el total 75/75 codificado, pero el catálogo canónico ya contiene 80 entidades. Se corrigió la raíz: el test ahora obtiene el total de `data/catalog/mythic-arsenal.json`, exige que todos estén visibles y restablece los filtros antes de comprobarlo. El cambio no reduce la cobertura; valida contra la fuente de verdad. Evidencia del fallo anterior: workflows 38477415589 y 38477722186; ambos expiraron por la aserción de total en `tests/browser_smoke.cjs`.
- [x] Añadir los paquetes 010–012 a la carga de `src/lore-corpus.js`.
- [x] Registrar las fuentes oficiales nuevas en el directorio de fuentes en línea.
- [x] Convertir 19 afirmaciones de Familia a campos legibles por el parser de recuperación.
- [x] Añadir pruebas de búsqueda para estado inicial de Hestia Familia, liderazgo de Loki Familia y capitanía de Alise.
- [x] Corregir IDs de claim duplicados detectados por la primera ejecución de CI.
- [x] Separar el claim de Astrea histórica del perfil de adaptación para que una afirmación no mezcle CONT-AR y CONT-ANIME.
- [ ] Confirmar que los workflows de recuperación, validación de catálogo, navegador y estructura concluyan con éxito en el último commit.
- [x] Implementar búsqueda directa por entidades de tipo Familia en `searchEntities`; el filtro devuelve registros `familia` sin mezclar personajes/eventos. Regresión ampliada en `tests/test_lore_corpus.cjs` para Hestia, Loki, Astrea, variantes de consulta en español y abstención ante nombres de personajes. La ejecución CI del commit de prueba queda pendiente de evidencia.


## DANMACHI-RESEARCH-011 · Estado bibliográfico actualizado (2026-10-13)
- [x] Verificar la cronología oficial de Astrea Record como ancla relativa aproximada de siete años antes de la llegada de Bell.
- [x] Verificar en GA Bunko el volumen principal 21 como último publicado comprobado.
- [x] Registrar el volumen 22 como anunciado para el 2026-12-15, no como ya publicado.
- [x] Actualizar ERA-10 y registrar fuentes DMR-011-SRC-001–003.
- [ ] Volver a verificar el estado editorial después del 2026-12-15.
- [ ] Cotejar los acontecimientos del volumen 21 con localizadores internos; la sinopsis editorial no basta para cerrar su contenido.


## DANMACHI-RESEARCH-016 · Ancla histórica de las Tres Grandes Misiones
- [x] Verificar en una referencia oficial de franquicia que Zeus Familia y Hera Familia son la respuesta conjunta para las derrotas de Behemoth y Leviathan.
- [x] Registrar fuente y afirmación recuperable DMR-008-CLM-027 con continuidad auxiliar explícita.
- [x] Crear el registro de evento `EVT-DM-GREAT-QUESTS-001`, enlazarlo al catálogo y a los índices de eventos/cronología sin declararlo cronológicamente completo.
- [ ] Localizar en novela principal o relato oficial narrativo el periodo, las expediciones, roster y caída de Zeus/Hera Familia.
- [ ] Verificar qué se afirma exactamente sobre la misión del Dragón Negro, sus bajas, supervivientes y consecuencias; no extrapolar desde la respuesta del cuestionario.

## DANMACHI-RESEARCH-018 · Pista temporal del Dragón Negro
- Estado: PRELIMINAR; la relación temporal no se promueve a claim canónico.
- [x] Encontrar la ficha editorial oficial del volumen 15 (GA Bunko, ISBN 978-4-7973-9622-5).
- [x] Registrar como pista no verificada que una copia no editorial contiene una referencia a cinco años; no usar esa copia como evidencia canónica ni como localizador.
- [x] Comparar esa pista con el ancla oficial aproximada de siete años de *Astrea Record*, dejando explícito que «aprox. 12 años antes de Bell» es una deducción condicional.
- [x] Comprobar la vista previa oficial del volumen 15: los términos buscados no dieron coincidencias; la vista previa no verifica el pasaje.
- [ ] Verificar el pasaje en una edición legítima completa y obtener localizador interno estable.
- [ ] Solo tras obtener localizador primario, decidir si registrar una relación temporal relativa en los eventos; no inferir año absoluto, roster ni causalidad institucional.
- Regla de autoría: los datos ausentes permanecen desconocidos; los espacios para la historia propia se mantienen en `CONT-AU` y nunca se completan por inferencia.


## DANMACHI-RESEARCH-019 — Triangulación inicial de wikis ES/EN/JA
- Estado: PARTIAL / SECONDARY-LEAD-ONLY; se consultaron extractos de wiki en español e inglés y una wiki japonesa de DanMemo, más una página oficial japonesa para contraste de personajes.
- Paquete: [DANMACHI-RESEARCH-019-wiki-triangulation-es-en-ja.md](research/inbox/DANMACHI-RESEARCH-019-wiki-triangulation-es-en-ja.md).
- [x] Registrar enlaces exactos, idioma, límites de acceso y alcance de los extractos.
- [x] Separar el «hace cinco años» del incidente Astrea/Juggernaut de la pista no verificada de Zeus/Hera; no son el mismo acontecimiento.
- [x] Registrar como pistas secundarias los nombres/niveles de Zeus Familia y el supuesto piso 71, sin elevarlos a canon aprobado.
- [ ] Rastrear las referencias de las wikis a novela, Astrea Record, Sword Oratoria, DanMemo u otras fuentes oficiales.
- [ ] Verificar roster histórico, niveles, récord real de exploración y fecha/efectos de la expulsión mediante fuentes con localizadores.
- [ ] Incorporar claims recuperables solo después de identificar evidencia suficiente y continuidad adecuada.
- Regla: las wikis ayudan a encontrar y traducir datos; la coincidencia entre wikis no equivale a confirmación primaria. No rellenar historias AU ni incógnitas autorales.


### Seguimiento de DANMACHI-RESEARCH-019 — fuentes originales rastreadas (2026-10-13)
- [x] Abrir la publicación original de Fujino Omori citada por la ficha española de Meteria: `note.com/fujinoomori/n/n629829ac3fe4`.
- [x] Registrar que el texto describe a Meteria a través de Alfia, pero usa un escenario alternativo en el que Alfia/Zald crían a Bell; no importar sus sucesos a la continuidad principal.
- [x] Localizar la ficha editorial oficial de *Familia Chronicle: Episode Freya* (GA Bunko, ISBN 978-4-8156-0464-6), que confirma la obra como fuente potencial sobre el pasado de Ottar.
- [ ] Cotejar en una edición legítima de *Episode Freya* la escena de los aventureros nivel 8/9 y obtener localizador interno antes de aprobar nombres, niveles o cronología.
- [x] Recuperar el contenido visible original de los dos tuits de Omori citados; registrar por separado qué dice cada uno y no extrapolar el segundo a la Emperatriz.
- [x] Localizar el lector oficial de vista previa de *Episode Freya* desde el portal de DanMachi; los extractos anunciados son «最強の起源» y «それぞれの昔日».
- [x] Registrar que el lector no expuso el texto en la herramienta de consulta; la escena nivel 8/9 sigue sin cotejo primario.
- [x] Primer intento de abrir los dos tuits: X/Twitter no devolvió contenido en esa sesión.
- [x] Reintento mediante extracción directa de página: ambos textos y fechas se recuperaron; el del 9 de julio describe una posibilidad hipotética de Alfia frente a la Emperatriz de nivel 9, y el del 15 de julio trata de una vicecapitana sin identificar por sí solo a la Emperatriz.
- [x] Reintentar el visor oficial BinB embebido: tampoco expone el texto de las páginas, por lo que el pasaje nivel 8/9 de Episode Freya sigue sin localizador primario.

- Paquete actualizado: [DANMACHI-RESEARCH-019](research/inbox/DANMACHI-RESEARCH-019-wiki-triangulation-es-en-ja.md).
- Regla de continuidad: publicación del autor no equivale automáticamente a continuidad principal; el relato alternativo se etiqueta como tal. Los campos de historia propia AU siguen vacíos hasta que el autor los complete.


## DANMACHI-RESEARCH-020 · Lugares principales y topología del Dungeon

- Estado: PARTIAL; primera ficha de lugar integrada al catálogo navegable.
- [x] Añadir `places/dungeon.md` con identidad, función narrativa, relaciones hacia Orario/Guild/Bell/Hestia y límites de certeza.
- [x] Registrar la ficha editorial oficial de GA文庫 para el volumen 1 como `DMR-012-SRC-001`; la fuente respalda la descripción general de Orario y el Dungeon, no detalles de pisos ni escenas concretas.
- [x] Promover `LOC-DUNGEON` de ID reservado a registro activo; actualizar el índice de lugares y validar unicidad de IDs.
- [ ] Crear fichas separadas para Guild como institución y sede física, Babel, Hostess of Fertility y residencia de Hestia cuando las fuentes permitan definir su alcance.
- [ ] Cotejar pisos, accesos, monstruos, recursos, reglas de expedición y peligros con fuentes por volumen/capítulo.
- [ ] Añadir enlaces inversos desde los índices de canon, eventos y personajes solo cuando el destino sea una relación sustentada.
- Regla: la sinopsis editorial es fuente oficial de alcance general, no sustituto del texto íntegro; no inventar geografía ni localizadores.


## DANMACHI-RESEARCH-021 · Loki Familia y mapas de historias respaldados por fuentes editoriales

- [x] Activar fichas individuales para Riveria, Gareth, Lefiya, Tiona, Tione, Bete y Raul a partir de los perfiles oficiales de la adaptación Sword Oratoria.
- [x] Añadir aristas con continuidad CONT-SO, claim de respaldo y nota de alcance; no extrapolar niveles/cargos a todos los volúmenes.
- [x] Corregir el índice de personajes para diferenciar registros activos de candidatos.
- [x] Registrar la ficha oficial editorial de Sword Oratoria 14 (DMR-005-SRC-002) y crear un mapa parcial sobre el comienzo de Finn, Riveria y Gareth.
- [x] Crear un mapa parcial del volumen principal 21 con la sinopsis y la muestra pública del capítulo inicial.
- [ ] Leer el resto de los volúmenes íntegros con acceso legítimo y anotar localizadores de capítulo/página.
- [ ] Convertir los mapas parciales en cronologías de escenas solo cuando el texto y sus secuencias estén comprobados.
- [ ] Ampliar la red relacional al resto de la Familia Loki y a las Familias restantes; registrar conflictos, poderes y estados temporales por periodo.
- **Estado:** estructura y aristas iniciales completas para este lote; cobertura factual global todavía parcial.


## DANMACHI-RESEARCH-025 · Red relacional de Soma

- [x] Activar fichas navegables para Soma, Soma Familia, Zanis Lustra, Chandra Ihit y Canoe Belway con IDs estables.
- [x] Incorporar nueve aristas al catálogo estructurado, cada una con claim, ruta de evidencia, continuidad y estado.
- [x] Cargar el paquete DMR-025 en el buscador local y agregar pruebas de relaciones y recuperación de afirmaciones.
- [x] Separar el contexto editorial del volumen 6 de los detalles secundarios; mantener la acusación relacionada con Canoe sin resolución.
- [ ] Verificar en una edición legítima de la novela los cargos de Zanis y Chandra, la afiliación previa de Lili y la intervención atribuida a Chandra.
- [ ] Localizar el pasaje primario relacionado con Canoe antes de elevar cualquier afirmación sobre destino, causa o responsabilidad.
- **Estado:** conexiones integradas; cobertura factual global y cotejo de novela siguen parciales.

## DANMACHI-RESEARCH-026 · Orario, Babel y Hostess of Fertility

- Estado: PARTIAL; se activaron tres fichas geográficas a partir del glosario oficial de la web del anime.
- [x] Registrar Orario como lugar separado del registro de contexto general.
- [x] Crear Babel con sus relaciones verificadas hacia Orario, la Guild y el Dungeon.
- [x] Crear Hostess of Fertility y relacionarla con Orario y la clientela habitual documentada (Familia Loki).
- [x] Registrar la fuente oficial de adaptación y tres claims recuperables en CONT-ANIME.
- [x] Añadir pruebas de integridad, búsqueda por entidad y recuperación de claims.
- [ ] No elevar estos datos a continuidad de novela sin cotejo específico.
- [ ] Localizar una fuente que permita distinguir una sede física de la Guild de la instalación de Babel antes de activar LOC-GUILD.
- [ ] Añadir Mia Grand y Syr Flova como fichas relacionadas solo en una tanda aparte, con alcance y estado de evidencia propios.
- **Fuente:** https://danmachi.com/danmachi/special/index.html
- **Límite:** el glosario oficial de anime acredita descripciones generales; no proporciona mapa detallado, historia completa de locales ni estado de cada integrante en todas las épocas.
## BATCH-DM-010 · Salida de Astrea y venganza de Ryu

- [x] Registrar EVT-DM-ASTREA-DEPARTURE-001 en el catálogo de eventos y el índice maestro.
- [x] Registrar las tres fuentes citadas y asociar los seis claims existentes al documento RESEARCH-DM-027.
- [x] Separar la evidencia de la sinopsis del anime y de la sinopsis editorial de la afirmación sobre la salida reportada solo por una fuente secundaria.
- [x] Añadir pruebas de registro, navegabilidad, búsqueda y estado pendiente.
- [ ] Localizar el pasaje primario de la novela donde Ryu pide a Astrea salir de Orario.
- [ ] Cotejar con la novela el orden entre tragedia, salida de Astrea, campaña de venganza y ayuda de Syr/Mia.
- [ ] No completar la cronología exacta ni la pertenencia de las nuevas seguidoras solo a partir de sinopsis.
- Fuentes: https://danmachi.com/danmachi4/story/index.php?slideNum=1 ; https://ga.sbcr.jp/product/9784815623692/
- Límite: el registro es de evidencia mixta; los datos secundarios siguen etiquetados como secundarios o pendientes.


## DANMACHI-RESEARCH-028 · Seguimiento a pistas recuperadas de wiki (2026-10-19)

- [x] Integrar en el corpus las páginas comunitarias de Astrea Familia, Kaguya, Lyra, Alise, Ryuu y Timeline con tipo y URL de fuente.
- [x] Añadir diez afirmaciones secundarias consultables y conservar los estados `secondary_checked` / `provisional` por separado de la evidencia oficial.
- [x] Añadir las relaciones secundarias de Kaguya–Ryu, Lyra–Astrea Familia y la función pública histórica.
- [ ] Abrir las referencias enlazadas desde las páginas de wiki y localizar volumen/capítulo/página para cada afirmación sobre Kaguya, Lyra, Alise, la aparición del Juggernaut y la nueva generación.
- [ ] Resolver de forma explícita cualquier discrepancia entre páginas comunitarias antes de cambiar el estatus de una claim.
- [ ] Después de localizar pasajes primarios, actualizar solo las claims afectadas y sus aristas; no ascender automáticamente toda la ficha o la cronología.

## DANMACHI-RESEARCH-028 — ampliación de pistas de wikis (2026-10-19)
- [x] Recuperar detalles secundarios de historia/motivación para Celty e Iska y capacidades atribuidas a Maryuu, Asta, Neze, Noin y Ryana.
- [x] Enlazar relación reportada Celty–Ryana y Celty–Ryuu con claims y procedencia navegables.
- [x] Exponer las cuatro nuevas fuentes comunitarias en el directorio local y probar la búsqueda de sus afirmaciones.
- [ ] Cotejar cada claim con capítulos/escenas de las novelas o relatos oficiales antes de elevar el estado por encima de secondary_checked.
- [ ] Mantener por separado las estadísticas ambiguas, la continuidad histórica de Astrea Record y la presentación del anime.

## INTEGRATION-BATCH-001 — cronología histórica DanMachi
- [x] Recuperar el módulo temporal, dataset, validador y test desde la rama histórica.
- [x] Integrar 16 registros para los eventos temporales y entidades enlazadas sin sobrescribir el catálogo actual.
- [x] Montar el panel en la enciclopedia y cargar el script antes de la inicialización de la app.
- [x] Añadir reglas CSS adaptables y un control para las vistas temporal/relacional.
- [x] Incorporar la validación del modelo y pruebas de montaje en el workflow de lore.
- [ ] Validar la PR completa con los workflows generales, test temporal, validación de catálogo y navegador.
- [ ] Revisar en un navegador que los enlaces a personajes y eventos conservan contexto, especialmente los personajes sin ficha de dossier en main.
## INTEGRATION-BATCH-001B — procedencia de personajes históricos
- [x] Reemplazar los claim_refs de Alfia, Zald, Erebus, Jura y Rudra por claims que realmente corresponden a esos personajes.
- [x] Registrar las fuentes secundarias de los perfiles históricos y separar el contexto editorial oficial.
- [x] Importar la investigación Zeus/Hera y exponerla desde el índice de lore.
- [x] Mantener Thanatos y Valletta como pistas sin claim narrativo nuevo ni promoción a canon.
- [ ] Ejecutar nuevamente validador de catálogo, corpus, cronología y navegador en la PR.

## INTEGRATION-BATCH-002 — completar información útil de wikis sin elevarla a canon primario
- [x] Ampliar Alfia y Zald con habilidades, historia, costes y límites encontrados en wikis inglesa y española.
- [x] Activar las fichas reservadas CHAR-ZEUS, CHAR-HERA y CHAR-METERIA; eliminar solo esas tres reservas al crear sus nodos únicos.
- [x] Enriquecer Zeus Familia y Hera Familia con pistas secundarias de roster, exploración, Gremio y la capitana mortal de Hera de identidad no resuelta.
- [x] Registrar la nota de Fujino Omori como contexto alternativo del autor (CONT-AU), sin importar sus sucesos a CONT-MAIN-LN.
- [x] Añadir relaciones navegables con estado secondary_checked, claimRef y procedencia.
- [x] Enlazar los eventos candidatos de Dragón Negro y caída de Zeus/Hera a las wikis, conservando pending_verification.
- [ ] Ejecutar los validadores de catálogo, corpus de búsqueda, cronología y navegador en la PR.
- [ ] Localizar pasajes primarios para la expedición del Dragón Negro y el estado institucional de ambas Familias.


## DANMACHI-RESEARCH-037 · Separación de Guild/Hostess

- Estado: cambios en rama; CI pendiente.
- [x] Crear `ORG-GUILD` sin reemplazar `DM-GUILD-001`, la ficha introductoria conjunta Dungeon/Guild.
- [x] Crear `ORG-HOSTESS` separado del lugar `LOC-HOSTESS`.
- [x] Conectar Ouranos, Eina, Fels y el personal de la taberna mediante claims oficiales existentes.
- [x] Actualizar el índice de Familias y alinear los recuentos del estado.
- [ ] Validar catálogo, enlaces Markdown y navegación en CI.


## DANMACHI-RESEARCH-041 · Familia Chronicle episode Haze / Heith

**Estado:** sinopsis editorial y alias oficial conectados; la historia íntegra continúa pendiente.

- [x] Resolver `episodeヘイズ` / Haze / Heizu con la forma de personaje oficial `ヘイズ・ベルベット` y el ID existente `CHAR-HEITH-VELVET`.
- [x] Ampliar tags/alias del registro existente; no crear `CHAR-HAZE` ni una segunda ficha.
- [x] Crear la ficha de evento parcial `EVT-DM-FC-HAZE-001` y conectar Heith y Ottar con claims oficiales de sinopsis, bajo `CROSS-CONTINUITY`.
- [x] Añadir la investigación DMR-041 al catálogo, fuentes, recuperación por defecto, índice maestro e interfaz de lore.
- [ ] Leer el volumen íntegro con acceso legítimo y localizar escenas para los integrantes del grupo, la recompensa del troll y sus consecuencias.
- [ ] Desglosar la secuencia en eventos y relaciones atómicas solo cuando estén respaldados por el texto; mantener separados anime, novela principal y Familia Chronicle.

La sinopsis confirma el marco promocional, no una cronología completa ni los resultados de las escenas.

## DANMACHI-RESEARCH-040 · Calendario editorial y horizonte de cobertura

**Alcance:** control de publicaciones; no desplaza la prioridad de analizar Orario y sus sucesos.

- [x] Registrar el corte editorial: novela principal vol. 21 publicada y vol. 22 anunciado para 2026-12-15.
- [x] Registrar Sword Oratoria 17 para 2027-01-15 y Familia Chronicle episode Amid para 2027-02-15, ambos aún no publicados a la fecha de corte.
- [x] Registrar episode Haze, publicado el 2026-05-15, como obra pendiente de censo profundo.
- [x] Agregar las fuentes de la editorial al directorio de fuentes del buscador sin tratarlas como texto completo.
- [x] Resolver Haze/Heizu del título japonés con el perfil oficial de Heith Velvet y apuntarlo al ID estable `CHAR-HEITH-VELVET`, sin identidad duplicada.
- [x] Registrar sinopsis editorial de episode Haze, conectar el evento parcial a Heith y Ottar y añadir pruebas de búsqueda/procedencia.
- [ ] Auditar el texto íntegro de episode Haze en una copia legítima: censo de personajes, sucesos, lugares y relaciones con localizadores reproducibles.
- [ ] Tras cada fecha prevista, comprobar publicación real y reconstruir las fichas desde material publicado; nunca importar anticipadamente contenido especulativo.

Fuentes: https://ga.sbcr.jp/product/9784815632946/ · https://ga.sbcr.jp/product/9784815642907/ · https://ga.sbcr.jp/product/9784815642914/ · https://ga.sbcr.jp/product/9784815642938/ · https://ga.sbcr.jp/product/9784815640675/


## DANMACHI-RESEARCH-042 · Olivas Act y auditoría de expedientes previos

- [x] Incorporar una ficha individual para Olivas Act, con aliases agrupados bajo CHAR-OLIVAS-ACT.
- [x] Separar lo que afirma la wiki inglesa de lo que realmente dice la sinopsis editorial de Sword Oratoria, volumen 3.
- [x] Registrar como secundarios el origen de Evilus, el incidente del piso 27, la forma Creature, ingestión de piedras mágicas, regeneración, coste de recursos, control de monstruos y asociación de escena con Revis.
- [x] Añadir el expediente a catálogo, interfaz, índice de personajes y recuperación por defecto.
- [x] Revisar Maryuu/Mariyu, Ryana, Meteria y Rudra sin elevar su evidencia previa ni crear alias como personas nuevas.
- [x] Añadir pruebas para ID único, fuentes, rutas, relaciones secundarias y búsqueda con procedencia.
- [ ] Localizar las escenas concretas de Sword Oratoria, volumen 3, antes de elevar cualquier dato biográfico o de habilidades.
- [ ] Diferenciar la continuidad exacta del evento del piso 27 y comprobar si la wiki mezcla versiones, sin asumir que pertenece al mismo intervalo que todas las escenas de Sword Oratoria.
- [ ] Resolver las diferencias entre las wikis inglesa y española y cotejar la denominación o relación con Enyo.

**Estado factual:** ficha útil y recuperable; biografía todavía secundaria y pendiente de cotejo primario.
- [x] Confirmar la cobertura estructural de los cinco expedientes y su recuperación en el código de `main` probado en SHA `c6b636b1074b6d2e7ebaac66988e04692303cd79`: los workflows [Validate WordWaifu #39979366390](https://github.com/jonhararagi/wordwaifu/actions/runs/39979366390) y [DanMachi Lore and Retrieval Integrity #39979366342](https://github.com/jonhararagi/wordwaifu/actions/runs/39979366342) finalizaron en `success`; las aserciones del corpus exigen los cinco IDs y la arista Lyra → Helga con `CONT-GAME` y `secondary_checked`.
- [ ] Mantener abierto el cotejo de las escenas primarias: los resultados estructurales y la presencia de una sinopsis editorial no elevan las afirmaciones comunitarias a canon verificado.


## DANMACHI-RESEARCH-043 · personajes históricos faltantes y revisión de continuidad

- [x] Activar Albert Waldstein y Aria bajo los IDs que estaban reservados; evitar fichas duplicadas y conservar las rutas como secundarias.
- [x] Registrar el parentesco reportado de Albert y Aria con Ais sin resolver por inferencia el origen temporal de Ais.
- [x] Ampliar Valletta Grede y Thanatos con información de las fichas inglesas y volver buscables sus perfiles de Sword Oratoria vol. 7.
- [x] Corregir el alcance de continuidad de Valletta y Thanatos a CONT-SO; mantener pendiente su participación individual en Astrea Record.
- [x] Expandir Jura con datos de wiki, quitar la etiqueta de Astrea Record y dejar explícita la discrepancia del rótulo de debut entre artículos.
- [x] Revisar Mariyu/Maryuu, Ryana/Liana, Meteria, Rudra y Olivas; preservar IDs, separar adaptaciones/AU y no promover claims secundarios.
- [x] Añadir fuentes, relaciones, recuperación por defecto y pruebas de integridad.
- [ ] Cotejar escenas de Sword Oratoria vols. 1 y 7 y DanMachi vol. 13 con localizadores primarios legítimos antes de elevar los estados de evidencia.

Criterio de cierre: el detalle comunitario aporta utilidad de búsqueda, pero no se etiqueta como biografía primaria verificada.


## DANMACHI-RESEARCH-044 · cinco expedientes históricos
- [x] Ampliar Maxim con los datos atribuidos de cargo, nivel, derrota histórica y objetivo de fortalecer la generación siguiente.
- [x] Ampliar Argana y Bache con estilo de combate, maldición/magia y sus costes o límites reportados.
- [x] Ampliar Seldas con el vínculo infantil con Tione y la tragedia reportada, marcando el spoiler y el cotejo pendiente.
- [x] Ampliar Helga a partir de la ficha comunitaria de DanMemo y aislarla en CONT-GAME.
- [x] Registrar fuentes y claims, asociar las relaciones existentes con su procedencia y añadir pruebas del corpus.
- [x] Registrar DMR-044-SRC-013, ficha editorial oficial de DanMachi vol. 20, como metadato sin claims y añadir una regresión que impide tratar la sinopsis general como prueba de Maxim.
- [ ] Localizar escenas primarias de Sword Oratoria vol. 6, DanMachi vol. 20 y el evento/versionado de DanMemo antes de elevar la evidencia.
- [x] Registrar el lector oficial gratuito de Sword Oratoria vol. 6 como `DMR-044-SRC-012` y mostrarlo en el navegador de fuentes con estado `metadata_checked_only`; la extracción automatizada solo expone interfaz y metadatos, no páginas narrativas.


## DANMACHI-RESEARCH-045 · Alfia, Zald, Meteria, Erebus y Rudra

**Integraciones recientes verificadas (2026-10-24):** PR [#98](https://github.com/jonhararagi/wordwaifu/pull/98) quedó fusionada en `c0d913c5691617accac4898c6d2b3b18bba07ec7`; los workflows posteriores al merge pasaron ([Validate #40120951150](https://github.com/jonhararagi/wordwaifu/actions/runs/40120951150), [Lore/Retrieval #40120951026](https://github.com/jonhararagi/wordwaifu/actions/runs/40120951026)). PR [#99](https://github.com/jonhararagi/wordwaifu/pull/99) quedó fusionada en `4b982eb92bd86f8eb5fa7164e10752a917d48d31`; los workflows posteriores al merge también pasaron ([Validate #40121414947](https://github.com/jonhararagi/wordwaifu/actions/runs/40121414947), [Lore/Retrieval #40121415026](https://github.com/jonhararagi/wordwaifu/actions/runs/40121415026)). PR [#100](https://github.com/jonhararagi/wordwaifu/pull/100) quedó fusionada en `e554ea8f4aa57f4ef61c8b0a7fb14b4df78d7aad`; ambos workflows posteriores al merge pasaron ([Validate #40122126727](https://github.com/jonhararagi/wordwaifu/actions/runs/40122126727), [Lore/Retrieval #40122126726](https://github.com/jonhararagi/wordwaifu/actions/runs/40122126726)). PR [#101](https://github.com/jonhararagi/wordwaifu/pull/101) quedó fusionada en `6fd994f50df051e4b8f1abc647a9e5657529a186`; los workflows de CI posteriores pasaron ([Validate #40125640096](https://github.com/jonhararagi/wordwaifu/actions/runs/40125640096), [Lore/Retrieval #40125640094](https://github.com/jonhararagi/wordwaifu/actions/runs/40125640094)).

**Integración registrada (2026-10-24):** PR [#91](https://github.com/jonhararagi/wordwaifu/pull/91) quedó en `main` en `c1641b3f8a14d05af83dd3f0215d101af5c7e531`; sus dos workflows de cabeza fueron `success`, aunque no se pudo verificar entonces una ejecución posterior de ese SHA. PR [#92](https://github.com/jonhararagi/wordwaifu/pull/92) quedó fusionada en `f13bb96f882e19870965dd9570a17f488266e784`; los checks de la cabeza exacta `861387fc1580a88c60df8a461ae8dcd359c7c726` y los dos workflows posteriores sobre el commit de `main` `f13bb96f882e19870965dd9570a17f488266e784` terminaron en `success` ([Validate WordWaifu #40108970941](https://github.com/jonhararagi/wordwaifu/actions/runs/40108970941), [DanMachi Lore and Retrieval Integrity #40108970837](https://github.com/jonhararagi/wordwaifu/actions/runs/40108970837)). PR [#94](https://github.com/jonhararagi/wordwaifu/pull/94) quedó integrada en `0781a595ba640efda778fd38fd332a59b51c3308`; la cabeza `3db126b6097fa2b73ac2ef09fc0142877e306a74` pasó ambos workflows y la CI posterior de `main` terminó en éxito ([Validate #40111555971](https://github.com/jonhararagi/wordwaifu/actions/runs/40111555971), [Lore/Retrieval #40111555949](https://github.com/jonhararagi/wordwaifu/actions/runs/40111555949)). PR [#95](https://github.com/jonhararagi/wordwaifu/pull/95) quedó integrada en `5fb0ca5f14a188dab3bff90d57c795124c202734`; la cabeza `ad0952bd54663fc3a2c1e44e12d3e56c4598d3a5` y los dos workflows posteriores de `main` terminaron en éxito ([Validate #40112683522](https://github.com/jonhararagi/wordwaifu/actions/runs/40112683522), [Lore/Retrieval #40112683519](https://github.com/jonhararagi/wordwaifu/actions/runs/40112683519)). PR [#96](https://github.com/jonhararagi/wordwaifu/pull/96) quedó integrada en `48aae6f6804bb6554a195ff611366ccf168ab31c`; los workflows posteriores del commit exacto también terminaron en éxito ([Validate #40113328040](https://github.com/jonhararagi/wordwaifu/actions/runs/40113328040), [Lore/Retrieval #40113328062](https://github.com/jonhararagi/wordwaifu/actions/runs/40113328062)). PR [#97](https://github.com/jonhararagi/wordwaifu/pull/97) quedó fusionada en `4e0a2d614e4f649d482d3f03dc7f242012d4b4dd`; la cabeza `ddbfc8fa6ebdfb511fb4d8f1b2d90b9bb4af528f` pasó ambos workflows y la CI posterior al merge también terminó en éxito ([Validate #40119677483](https://github.com/jonhararagi/wordwaifu/actions/runs/40119677483), [Lore/Retrieval #40119677431](https://github.com/jonhararagi/wordwaifu/actions/runs/40119677431)).

- [x] Revisar las cinco fichas existentes y expandir el contenido individual sin elevar las wikis a evidencia primaria.
- [x] Añadir a Meteria una ficha manual sustancial de interfaz, manteniendo parentesco y salud como evidencia secundaria y el padre de Bell sin identificar.
- [x] Registrar la procedencia editorial oficial de Astrea Record como claim bibliográfico, no como prueba de las capacidades individuales.
- [x] Corregir la atribución de la crisis del Juggernaut: la fuente comunitaria habla de Rudra Familia en conjunto y no demuestra responsabilidad personal de Rudra.
- [x] Ampliar el perfil secundario de Erebus sin incorporar «Eren» al campo de aliases canónicos.
- [x] Sincronizar DMR-045 en catálogo, manifest de recuperación, índice y registro de fuentes; actualizar las aristas de Erebus/Evilus y Rudra/Juggernaut para que apunten a claims específicos.
- [x] Añadir pruebas para dossier manual de Meteria, recuperación de los tres claims, continuidad y procedencia.
- [x] Incorporar al directorio de fuentes la nota oficial de Fujino Omori con advertencia explícita `CONT-AU`; clasificar `DMR-029-CLM-012` como `source_checked_excerpt_only` y probar que no se filtre a `CONT-MAIN-LN`.
- [x] Comprobar que las sinopsis editoriales oficiales de Astrea Record 1–3 y DanMachi 20 no se utilizan como evidencia de relaciones o capacidades individuales.
- [x] Registrar DMR-045-CLM-005 como pista secundaria sobre los nombres atribuidos a tres armas de Leon; conservar `secondary_checked` y no crear relaciones canónicas con Alfia/Zald/Maxim.
- [x] Registrar el lector oficial de muestra de Astrea Record 1 como `DMR-045-SRC-003` y hacerlo visible en el navegador de fuentes, marcado `metadata_checked_only` y sin claims, porque la extracción no expone el texto narrativo.
- [x] Enlazar desde las fichas de Alfia y Zald el escenario autoral `CONT-AU` como sección independiente; probar que la búsqueda de ese claim ofrece las dos rutas de ficha sin filtrarlo a `CONT-MAIN-LN`.
- [x] Añadir al grafo de conocimiento las relaciones de cuidado Alfia/Zald → Bell y la mención Meteria → Bell dentro de `CONT-AU`, con procedencia `DMR-029-CLM-012`, extremos activos y pruebas de que no se filtran al canon principal.
- [x] Crear la ficha `events/candidates/EVT-DM-AU-ALFIA-ZALD-RAISE-BELL-001.md` como ruta independiente para el escenario CONT-AU, con Alfia, Zald, Meteria y Bell enlazados por cuatro aristas trazables; mantenerla fuera de `timeline/eras-and-events.json`.
- [x] Leer directamente la nota autoral `DMR-029-SRC-016` y corregir el alcance temporal del escenario AU: tres años de convivencia, Bell próximo a cumplir siete, Meteria recordada por Alfia y padre de Bell no identificado. Actualizar claim, ficha de evento y regresión sin modificar hechos de `CONT-MAIN-LN`/`CONT-AR`.
- [x] Añadir a los expedientes manuales de UI de Alfia, Zald y Meteria una ruta directa al evento `CONT-AU` y a la nota autoral; regresión comprueba los IDs y URLs sin cambiar los alcances de continuidad.
- [x] Registrar `DMR-045-CLM-017` desde entrevista directa a Omori: contexto de creación de Alfia/Zald y diferencia entre juego y novelización; mostrarlo en el historial UI de ambas fichas como proceso creativo, sin convertir «demasiado fuertes» en estadísticas ni cerrar los localizadores narrativos.
- [x] Indexar la entrevista Dengeki que respalda `DMR-045-CLM-017` en el directorio de fuentes y agregar regresiones para búsqueda por claim, lectura desde los perfiles de Alfia/Zald y aislamiento de `CONT-AR` respecto de la novela principal, juego y `CONT-AU`.
- [x] Añadir DMR-045-CLM-006 a la ruta interactiva de Astrea Record: fragmento indexado oficial que menciona el inicio de Zald–Ottar y Alfia–Astrea Familia el último día; dos relaciones hacia el evento marcadas `source_checked_excerpt_only`, con prueba de continuidad.
- [x] Registrar la muestra pública de Astrea Record 3 como `metadata_checked_only`: el visor solo mostró portada y contador `1/63`, sin páginas narrativas inspeccionables ni claims asociados.
- [ ] Cotejar Astrea Record vols. 1–3 para Alfia, Zald y Erebus, con edición/volumen/capítulo reproducible.
- [x] Conservar `DMR-045-SRC-007`: muestra autorizada de DanMachi vol. 20, página 17/33, con `レオン` y `バルドル`; `claims_supported: []`, delimitación a una página y prueba contra extrapolación al volumen completo.
- [x] Incorporar la entrevista de Dengeki Online donde Omori confirma que la novelización de Astrea Record dejó explícito que Alfia es tía de Bell; exponer claim, fuente y arista en `CONT-AR`, con aviso de que no es un localizador de capítulo/página.
- [x] Registrar por separado la entrevista de LN News Online de 2020: Omori confirma, en el contexto de la historia de Memoria Freese, que la madre de Bell es la hermana menor de Alfia; crear claim/arista `CONT-GAME` sin identificar a la hermana como Meteria ni trasladar el dato a `CONT-MAIN-LN`.
- [x] Ampliar esa misma entrevista con `DMR-045-CLM-012`: el autor confirma el resumen del entrevistador de que el padre de Bell era descrito como `サポーター` de Zeus Familia; conectar Bell con el evento original del juego y la búsqueda, sin inventar nombre, afiliación formal ni identidad de la madre como Meteria.
- [x] Añadir los tres pies editoriales de Erebus, Alfia y Zald como claims secundarios CONT-GAME, con nivel/afiliación/participación limitados a lo dicho en los pies; añadir un nodo de evento independiente para la versión original del juego y aristas a sus personajes.
- [ ] Obtener localizadores narrativos primarios para Alfia, Zald y Erebus; los captions no equivalen a capítulo/página ni elevan perfiles a canon de la novelización.
- [x] Registrar la pista comunitaria del prólogo de vol. 20 como DMR-045-CLM-015 y conectarla con Alfia mediante una arista secundaria/candidata; no dar por confirmado que la maga sea Alfia, la criatura sea Leviathan o el testigo sea Leon.
- [x] Registrar DMR-045-CLM-016 como pista comunitaria independiente para buscar Afterglow en las retrospectivas de los capítulos 2–3 del volumen 20; enlazar Alfia y Zald al evento candidato con estado secondary_checked, sin promover usos individuales a canon confirmado.
- [ ] Cotejar en una edición licenciada el prólogo del vol. 20 y los pasajes de los capítulos 2–3 sugeridos por DMR-045-CLM-015/016; el lector oficial consultado no expuso narración legible y las pistas comunitarias no verifican identidades, habilidad ni páginas. Mantener separados los nombres de armas atribuidos secundariamente, las escenas biográficas y el parentesco pendiente de Meteria.
- [x] Localizar parcialmente en DanMachi vol. 14, cap. 13, la trampa de Rudra Familia y la aparición del Juggernaut (`DMR-045-CLM-013`); conectar la acción colectiva de la Familia con el evento histórico sin atribuir una orden a la deidad.
- [x] Localizar parcialmente en el epílogo del vol. 14 (`You'll Be Back II`) el relato público sobre Jura, otros supervivientes de Rudra Familia y la supuesta muerte de Gale Wind (`DMR-045-CLM-014`); conservarlo como versión pública, no como prueba de que Ryuu murió.
- [ ] Completar el cotejo de los volúmenes 13–14 con una edición accesible para establecer páginas reproducibles y detallar el plan posterior de Jura; la autoría/autoridad personal de Rudra continúa pendiente.
- [x] Consultar el lector gratuito oficial de DanMachi vol. 14 (SBCr/BinB) como ruta primaria alternativa; la extracción no expuso páginas narrativas. Registrar `DMR-045-SRC-015` como `metadata_checked_only`, sin claims, y mantener pendiente el cotejo real del capítulo 13.

**Estado factual:** fichas más completas y buscables; el lote sigue en secondary_checked_with_primary_gaps. No se declara verificación primaria de las biografías.


- [x] Registrar y exponer en la interfaz la ficha oficial de Yen Press para la edición inglesa licenciada de *Astrea Record, Vol. 3* (ISBN 9781975379926; publicada el 26-11-2024) como ruta de consulta legal para Alfia, Zald y Erebus; etiquetarla como metadatos editoriales, sin claims narrativos. Integrado por [PR #116](https://github.com/jonhararagi/wordwaifu/pull/116); CI post-merge sobre `6efb50779b17924e7064876af75afa3cbd1d3b67`: [Validate](https://github.com/jonhararagi/wordwaifu/actions/runs/40197003502) y [Lore Integrity](https://github.com/jonhararagi/wordwaifu/actions/runs/40197003501), ambas exitosas.
- [ ] Cotejar el texto de esa edición con capítulos y páginas reproducibles para cada afirmación individual de Alfia, Zald y Erebus; la sinopsis editorial no satisface este criterio.
- [x] Añadir la ficha del distribuidor licenciado BOOK☆WALKER y su enlace de muestra gratuita de la edición japonesa de *Astrea Record 3* al directorio de fuentes y a las fichas de Alfia, Zald y Erebus, con prueba de regresión. La categoría `licensed_retailer` tiene un grupo propio visible en el navegador de fuentes.
- [ ] Reintentar la lectura de la muestra autorizada de BOOK☆WALKER o cotejar la edición licenciada fuera del visor bloqueado; obtener capítulo/página individual antes de confirmar datos narrativos de Alfia, Zald o Erebus.

## DANMACHI-RESEARCH-046 · Solingen y red de Soma Familia

- [x] Expandir las fichas de Cecil Blackliza, Iselina, Shau y Ulanda con datos de roster, límites explícitos y rutas de navegación.
- [x] Expandir Zanis Lustra, Chandra Ihit y Canoe Belway con sus cargos/datos reportados y relaciones con procedencia visible.
- [x] Separar la acusación de Zanis contra Liliruca del estado/destino que las fuentes comunitarias atribuyen a Canoe.
- [x] Añadir DMR-046 al catálogo, registro de fuentes, búsqueda en vivo y manifest de detalle.
- [x] Añadir bloques de UI manuales sustanciales para los siete expedientes.
- [x] Añadir pruebas de cobertura de los siete perfiles, búsqueda de claims y procedencia de relaciones.
- [ ] Localizar las escenas de Solingen y cotejar individualmente cargo, nivel y biografía de la nueva Astrea Familia.
- [ ] Cotejar los volúmenes 2 y 6 para resolver la secuencia de Canoe y el alcance de la acusación de Zanis.
- [x] Corregir las fichas UI de Liliruca, Canoe Belway, Zanis Lustra y Chandra Ihit para enlazar DMR-046-CLM-005/007, distinguir la acusación de Zanis del destino reportado de Canoe y limitar el alcance de las sinopsis editoriales; añadir pruebas de regresión. El cotejo primario de volúmenes 2 y 6 permanece abierto.
- [ ] Localizar las escenas del volumen 6 para Chandra y Zanis con capítulo/página, sin elevar el resumen comunitario a fuente primaria.

**Estado factual:** las fichas y rutas son más completas, pero DMR-046 conserva el estado secondary_checked_with_primary_gaps. Ninguna afirmación individual de wiki se ha promocionado a canon primario.

## DANMACHI-RESEARCH-047 · Plaza semicircular al norte de Orario en muestra editorial

- [x] Registrar el pasaje indexado de la muestra oficial de lectura de GA Bunko como una afirmación atómica bajo `CONT-MAIN-LN`.
- [x] Crear la ficha `LOC-ORARIO-NORTH-PLAZA` como lugar navegable, sin inventar un nombre propio para la plaza.
- [x] Conectar ficha, claim, fuente, catálogo, índice de lugares, buscador y nodo de Orario.
- [x] Añadir regresiones para recuperación de la afirmación, ruta de lugar, relación con procedencia y separación de `CONT-PROTOTYPE`.
- [ ] Reabrir el archivo editorial [trial02.pdf](https://ga.sbcr.jp/sp/danmachi/trial02.pdf) y verificar portada, volumen/edición interna, página y contexto completo; la descarga devolvió HTTP 503 durante esta consulta.
- [ ] Buscar en el texto completo de la novela principal otros pasajes que nombren la plaza o sitúen sus calles respecto de otros lugares.
- [ ] Cotejar independientemente avenidas, Central Park, Babel, distritos y servicios urbanos; no trasladar a `CONT-MAIN-LN` los nueve claims de `CONT-PROTOTYPE`.

**Estado factual:** avance de geografía de novela principal con evidencia de extracto parcial. El índice conserva capítulo IV y folios 20–21, pero sigue sin inspección visual; el nombre propio de la plaza y la topología general siguen abiertos.

## DANMACHI-RESEARCH-048 · Pantheon y avenida comercial en muestra de novela principal

- [x] Recuperar del índice oficial de GA Bunko el pasaje de trial03.pdf que menciona Pantheon en el recorrido por una avenida con comercios.
- [x] Registrar el claim bajo `CONT-MAIN-LN` con estado `source_checked_excerpt_only`; capítulo I 「剣姫異来」 y marcadores de folio 36–37 proceden del índice textual, no de inspección visual.
- [x] Conectar Pantheon con Orario mediante una arista de procedencia primaria que no sustituye la arista secundaria existente.
- [x] Mantener por separado la mención de Pantheon, la entrada en la sede de la Guild y los datos comunitarios sobre las instalaciones interiores.
- [x] Añadir el claim al manifiesto del buscador, registro de fuentes, ficha Pantheon, índice de lugares, hub de Orario y pruebas de continuidad.
- [ ] Reabrir el PDF y verificar visualmente el capítulo y los folios; el servidor devolvió HTTP 503 durante esta sesión.
- [ ] Resolver con el contexto completo si Pantheon designa la sede de la Guild o un hito distinto, y cómo se relaciona físicamente con Babel.
- [ ] Localizar por separado una referencia a Daedalus Street en la novela principal.

**Estado factual:** la mención al nombre Pantheon y su contexto urbano están recuperados de una muestra editorial oficial, pero los folios no se verificaron visualmente y la identidad física de los edificios no se declara resuelta.

## DANMACHI-RESEARCH-049 · Daedalus Street en Sword Oratoria, volumen 7

- [x] Consultar la sinopsis editorial oficial de GA Bunko para el volumen 7 (ISBN 978-4-7973-8934-0).
- [x] Registrar el claim de que Loki Familia investiga Daedalus Street tras obtener una pista en Melen, bajo `CONT-SO-LN`.
- [x] Añadir la procedencia al registro de fuentes, la ficha existente del lugar, el catálogo y el índice maestro.
- [x] Añadir una arista de investigación Daedalus Street → Loki Familia con el claim y la continuidad de Sword Oratoria.
- [x] Incorporar búsqueda predeterminada y regresiones para que el claim sea recuperable en `CONT-SO-LN` pero no en `CONT-MAIN-LN`.
- [ ] Localizar el pasaje del volumen 7 con capítulo/página antes de confirmar más detalle del incidente que el resumen editorial.
- [ ] Investigar de forma separada la primera mención de Daedalus Street en la novela principal.
- [ ] No elevar las descripciones comunitarias del trazado, las avenidas vecinas ni el orfanato de Maria sin evidencia independiente.

**Estado factual:** evidencia editorial oficial del argumento de Sword Oratoria; la geometría del lugar y la primera mención en la novela principal siguen abiertas.

## DANMACHI-RESEARCH-050 · Daedalus Street en relato corto oficial

- [x] Registrar el relato corto complementario «迷宮街の恋愛話・裏» desde el PDF oficial alojado por GA Bunko.
- [x] Acotar el claim al estado `source_checked_excerpt_only` y a la continuidad `CONT-SHORT`; el acceso directo al PDF devolvió HTTP 503.
- [x] Enlazar la afirmación a la ficha existente de Daedalus Street, el registro de fuentes, el catálogo y una arista separada de `CONT-SO-LN`.
- [x] Añadir recuperación de búsqueda y pruebas que impiden que el claim se filtre a `CONT-MAIN-LN` o `CONT-SO-LN`.
- [ ] Inspeccionar visualmente el PDF y obtener edición/contexto/página cuando el archivo esté accesible.
- [ ] No convertir la mención de un callejón intrincado en geometría oficial de la calle ni transferir el episodio a la novela principal.
- [ ] Mantener abierta la búsqueda de la primera mención de Daedalus Street en `CONT-MAIN-LN`.

**Estado factual:** escena del lugar recuperada de un extra oficial en `CONT-SHORT`; sin inspección visual del PDF, mapa ni inferencias sobre la primera mención de la novela principal.


## AUDITORÍA DE RAMAS · corte 2026-10-24 UTC

- [x] Enumerar las 101 referencias no principales del snapshot y compararlas con main en `21f0482f3ba23142866e5534d2368ba43233668f`.
- [x] Recontar todas las referencias actuales en búsqueda paginada: 103 ramas en total, incluida `main`; 102 no principales. La única rama que faltaba en la tabla inicial era la rama documental de publicación de la auditoría (#88), ya integrada en `main`.
- [x] Clasificar el inventario actualizado: 88 ramas divergidas, 14 solo retrasadas y cero ahead-only; no fusionar ninguna rama completa.
- [x] Cruzar el estado de las 85 PR consultadas: 60 fusionadas, 25 cerradas sin fusionar, 0 abiertas.
- [x] Verificar la integración del código funcional de entrevistas/fuentes en PR #85, #86 y #87 y los dos workflows exitosos en el main resultante.
- [x] Documentar las sustituciones conocidas y conservar las ramas remotas archivadas para consulta; [informe de auditoría](../../docs/BRANCH_AUDIT_2026-10-24.md).
- [ ] Continuar DMR-045 con los localizadores primarios faltantes; no avanzar a una nueva tanda de lore por el solo hecho de que el censo de ramas esté cerrado.


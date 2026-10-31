# Cola de trabajo para futuras tandas de lore

Esta cola sigue la cobertura cronológica, desde las eras antiguas hasta el último volumen principal publicado que se pueda verificar. Las tareas se dividen para no mezclar épocas, fuentes o continuidades. Ningún número de volumen ni final se inventará para llenar huecos.




## PRIORIDAD OPERATIVA · Tres pasadas completas sobre los volúmenes fuente de la novela principal

**Continuidad:** `CONT-MAIN-LN`.

**Jerarquía:** los archivos fuente de `volumes/main/` son la referencia prioritaria para el canon de la novela principal dentro de WordWaifu. Wikis y adaptaciones quedan como apoyo secundario y no pueden sobrescribir un dato del texto fuente. Si la traducción privada resulta ambigua o no está cotejada con japonés, conservar esa limitación en el claim.

### Método obligatorio por volumen

- [ ] **Pasada 1 — lectura integral:** recorrer el 100 % del volumen en orden y extraer escenas, eventos, personajes, lugares, organizaciones, objetos, reglas, habilidades, estados, pistas y cronología.
- [ ] **Pasada 2 — auditoría de detalle:** releer el 100 % buscando nombres/alias, números, costes, condiciones, límites, equipo, heridas, relaciones, motivaciones, conocimiento individual, diálogos relevantes, notas e información visual; distinguir explícito de inferido.
- [ ] **Pasada 3 — verificación de omisiones:** releer el 100 % y contrastar cada nota con su localizador; comparar fichas/eventos/relaciones con el corpus existente; detectar duplicados, contradicciones, atribuciones incorrectas y datos ausentes.

Se permiten bloques y checkpoints para evitar pérdida de contexto, pero cada pasada debe cubrir todos los bloques. Nunca convertir una página ilegible, no extraída o una ilustración no inspeccionada en una página revisada. No declarar un volumen terminado hasta documentar las tres pasadas completas y cerrar la revisión de duplicados/localizadores.

### Inventario comprobado en main

Conteos aproximados de palabras tras excluir las cargas base64 de imágenes y elementos Markdown; sirven como inventario, no como medición editorial de páginas:

| Volumen | Archivo fuente | Palabras aprox. | Imágenes incrustadas | Estado de análisis |
|---|---|---:|---:|---|
| 1 | `Volumen [01] • DanMachi.md` | 63.168 | 16 | DMR-061: pasada 2 re-auditada en pp. 9–60; tres pasadas previas conservadas para pp. 157–214; pp. 61–72 tienen pasada 2 completada; pp. 73–80 tienen pasada 2 completada; pp. 81–156 siguen pendientes de pasada 2 y pp. 61–156 de pasada 3. PDF físico: 215 folios (p.8 blanca; p.215 créditos). V1 sigue IN_PROGRESS. |
| 2 | `Volumen [02] • DanMachi.md` | 74.125 | 19 | DMR-060 contiene extracción parcial; falta certificar las tres pasadas completas. |
| 3 | `Volumen [03] • DanMachi.md` | 53.883 | 21 | Fuente cargada; análisis integral pendiente. |
| 4 | `Volumen [04] • DanMachi.md` | 64.892 | 23 | Fuente cargada; análisis integral pendiente. |
| 5 | `Volumen [05] • DanMachi.md` | 83.074 | 23 | Fuente cargada; análisis integral pendiente. |

Inventario verificado sobre `main` SHA `0946ace89a29e7439fbcbe4e0d4315aec8418f62`; el commit de ese SHA añadió los archivos fuente de los volúmenes 3–5. No renombrar ni sobrescribir los originales al crear expedientes de análisis.

### Orden de ejecución

1. **Volumen 1:** reconciliar DMR-061, conservar los tres pases ya documentados en pp. 157–214 y auditar los rangos anteriores sin repetir a ciegas lo ya verificado. Marcar por rango qué pasada está completa y cuál falta.
2. **Volumen 2:** reutilizar DMR-060 y los IDs/eventos existentes; completar las tres pasadas sobre todo el texto.
3. **Volúmenes 3, 4 y 5:** comenzar las tres pasadas desde el principio, uno por uno, sin convertir una sinopsis previa en extracción primaria.
4. Tras cada volumen, actualizar su expediente, las fichas/relaciones/eventos afectados, la bitácora y los localizadores. No crear IDs si el hecho ya existe.

**DMR-045:** permanece abierto y no se elimina; queda después de esta prioridad operativa de extracción de los volúmenes principales, salvo nueva instrucción del usuario.


## DMR-061 — checkpoint de tres pasadas V1 (2026-10-30)

- **Integrado directamente en main:** actualización del expediente [DANMACHI-RESEARCH-061](research/inbox/DANMACHI-RESEARCH-061-volume-01-event-extraction.md), commit a02a46ddfed7d5f53d72b83fcd65ff19ebe2ec70.
- **Pasada 2:** relectura de detalle terminada para PDF pp.9–60. El siguiente folio es p.61.
- **Pasada 1:** la extracción secuencial histórica de pp.9–156 permanece como evidencia de lectura previa, pero debe reconciliarse por rangos antes de certificarla bajo el estándar de tres pasadas.
- **Pasada 3:** pp.9–156 pendientes. Las tres pasadas anteriores de pp.157–214 se conservan sin repetirlas.
- **Visual:** inspeccionadas las 16 imágenes incrustadas del MD; renderizadas p.8 (blanca), p.19–24, p.49–54 y p.215 (créditos). Las páginas 19–21, 23–24 y 49–54 ya no son pendientes visuales.
- **Paginación:** el PDF tiene 215 folios físicos; p.8 está en blanco y p.215 es créditos. No tratar el contador 214 del lector Files como paginación física.
- **Límite:** traducción privada no cotejada con japonés; CONT-MAIN-LN; V1 continúa IN_PROGRESS. No afirmar CI verde: el endpoint consultado no expuso runs/checks para el SHA previo a este checkpoint.

### DMR-061 — checkpoint integrado de segunda pasada V1 (2026-10-31)

- [x] Cotejar el resumen DMR-061 con el texto fuente Markdown y completar la pasada 2 de PDF pp.61–72.
- [x] Añadir detalles omitidos de pp.67–70: respuesta explícita de Ais de que Bate es una pareja «absolutamente imposible»; separar esa respuesta de la no-respuesta sobre Bell; secuencia física de Ais apartando, golpeando con el codo y abofeteando a Loki; reacción de Loki; reducción y sujeción de Bate.
- [x] Registrar la variante «Riviera/Riveria» sin normalizarla por fuentes externas.
- [x] Completar pasada 2 de PDF pp.73–76, sin repetir pp.61–72.
- [ ] Continuar pasada 2 desde PDF p.77 hasta p.156.
- [ ] Realizar pasada 3 de PDF pp.9–156 y reconciliar la cobertura de pasada 1 por rangos.
- **Límite:** no se modifica el archivo fuente original; el Markdown es transcripción derivada y la traducción sigue sin cotejarse con japonés. No se declara V1 terminado. Próxima página de pasada 2: PDF p.77.


### DMR-061 — checkpoint de segunda pasada V1, PDF pp. 73–76 (2026-10-31)

- [x] Releer la transcripción Markdown original y contrastar la escena nocturna de Eina/Misha y la primera muerte de Frog Shooter con la extracción secuencial existente.
- [x] Precisar la hoja básica de Bell, su avance imprudente, las razones concretas de Eina para considerar prematuro el quinto piso y la distinción entre ese riesgo y la anomalía del Minotauro.
- [x] Limitar la promesa de Eina a su función de asesora; conservar la broma de Misha, el recuerdo de la frase de Bell y la autoexplicación de Eina sin confirmar romance.
- [x] Ampliar el expediente existente `EVT-DM-EINA-ADVISOR-001`; no crear evento nuevo para la escena de asesoramiento ni duplicar la ficha de Frog Shooter.
- [x] Preservar la expresión incierta «Un solo pasó» de p.76 sin convertirla en duración; rectificar que «esa persona» está en p.77, no en pp.73–76.
- [ ] Continuar la pasada 2 desde PDF p.77 hasta p.156.
- [ ] Realizar la pasada 3 de PDF pp.9–156 y reconciliar la cobertura de pasada 1 por rangos.
- **Visual (rectificación del 2026-10-31):** PDF pp.73–80 renderizadas a 130 dpi. p.73 es portadilla ilustrada; pp.74–80 son páginas de texto. Se corrige la clasificación anterior de p.79 como ilustración; p.86 no se reexaminó en este bloque.
- **Fuente:** DMR-061-SRC-001; traducción privada no cotejada con japonés. No se modifica el original `Volumen [01] • DanMachi.md`.
- **Estado global:** V1 continúa `IN_PROGRESS`; no certificar hasta el 100 % de cobertura de las tres pasadas y los controles visuales.
- **Próximo folio de pasada 2:** PDF p.77.


### DMR-061 — checkpoint de segunda pasada V1, PDF pp. 77–80 (2026-10-31)

- [x] Releer directamente el PDF físico pp.77–80 y contrastar la extracción anterior.
- [x] Precisar la condición física de Bell, la referencia no identificada a «esa persona», el cambio del Dungeon al sexto piso, la sala sin salida y el momento exacto en que aparecen las War Shadows.
- [x] Registrar por separado la primera War Shadow (p.79) y la segunda (p.80); conservar el 2 contra 1 y no anticipar el desenlace del combate.
- [x] Ampliar la ficha existente `MON-DM-WAR-SHADOW-001`; no crear especie duplicada ni evento cerrado antes de revisar pp.81–85.
- [x] Renderizar e inspeccionar pp.77–80 a 130 dpi. Confirmar que p.79 es texto, no ilustración; corregir la marca visual histórica. La portadilla ilustrada está en p.73.
- [ ] Continuar pasada 2 desde PDF p.81 hasta p.156.
- [ ] Completar pasada 3 de PDF pp.9–156 y reconciliar la cobertura histórica de pasada 1.
- **Fuente:** DMR-061-SRC-001, traducción privada no cotejada con japonés. El archivo Markdown original de V1 no se modificó.
- **Estado global:** V1 continúa `IN_PROGRESS`; no certificar hasta el 100 % de las tres pasadas y los controles visuales.
- **Próximo folio de pasada 2:** PDF p.81.

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


## Cohortes secundarias recientes para probar la memoria de lore · DMR-056–058

- [x] Cambiar el siguiente lote de ejecución a una cohorte distinta porque las rutas públicas ya registradas de DMR-045 no proporcionaron texto narrativo legible; **DMR-045 no se cierra** y sus cinco cotejos continúan abiertos hasta una fuente primaria nueva.
- [x] Integrar DMR-056 en `main` mediante PR #186: Liliruca Arde, Mikoto Yamato, Haruhime Sanjouno y el expediente nuevo de Nina Tulle, limitado a capacidades secundarias.
- [x] Probar recuperación por continuidad, lectura de límites de habilidades, snapshots temporales de Haruhime y detección de la contradicción de afiliación de Nina en CI de PR #186 (ambos workflows en success).
- [x] Seleccionar otra cohorte distinta en DMR-057 (Aisha, Anya y Chloe) y DMR-058 (Daphne y Cassandra), sin duplicar IDs ni reabrir páginas agotadas de DMR-045.
- [ ] Próximo paso DMR-045: reabrir los cinco cotejos primarios solo si una edición licenciada muestra páginas narrativas legibles o aparece una fuente oficial nueva; no crear otra ronda de metadatos.

### DMR-045 — Pasada individual documentada (2026-10-29)

- [x] Completar la pasada pública individual de Alfia, Zald, Meteria, Erebus y Rudra, respetando el orden de fuentes principales y sin saltar personajes.
- [x] Marcar con + los cinco nombres en CHARACTER_UPDATE_LEDGER.md y registrar por personaje datos/precisiones reutilizables, enlaces visitados y campos pendientes.
- [ ] No marcar los expedientes canónicos como cerrados: los cinco siguen en HOLD_FOR_PRIMARY_SOURCE hasta que exista texto narrativo licenciado legible o una fuente oficial nueva que resuelva el dato pendiente.
- **Resultado factual:** no se añadieron claims de lore, relaciones, eventos, habilidades ni cambios de personalidad en esta pasada. Las wikis siguen siendo secundarias; CONT-GAME, CONT-AR, CONT-AU y CONT-MAIN-LN se mantienen separados. No inferir el padre de Bell ni atribuir a Rudra órdenes/conocimiento personal sin evidencia.
- **Informe:** [DANMACHI-RESEARCH-045](research/inbox/DANMACHI-RESEARCH-045-dark-era-characters-continuity-audit.md); la marca + significa pasada de investigación registrada, no validación primaria.
### DMR-058 — Daphne Lauros y Cassandra Ilion (integrado y validado en main)

- [x] Corregir el nombre del dossier: el contenido siempre fue Daphne/Cassandra, no Miach; usar `DANMACHI-RESEARCH-058-daphne-cassandra-capabilities.md` y no interpretar el nombre antiguo como una investigación de Miach Familia.

- [x] Reutilizar CHAR-DAPHNE-LAUROS y CHAR-CASSANDRA-ILION; no crear IDs ni alterar la continuidad del perfil existente.
- [x] Registrar cinco fuentes comunitarias y las capacidades, condiciones de uso, equipo y campos no informados en un dossier dedicado.
- [x] Añadir notas interactivas bajo CONT-SECONDARY y pruebas de aislamiento frente a CONT-ANIME y CONT-MAIN-LN.
- [x] CI pre-merge aprobado, PR [#194](https://github.com/jonhararagi/wordwaifu/pull/194) integrada por squash; main SHA `190b4313a21569aa056548f8a40f9022b900b028`.
- [x] Registrar checks pre-merge del head `ef14f8b914fb424cf816f0d6a27f258fbe230843`: [Validate #40867615144](https://github.com/jonhararagi/wordwaifu/actions/runs/40867615144) y [Lore/Integrity #40867615207](https://github.com/jonhararagi/wordwaifu/actions/runs/40867615207), ambos success.
- [x] CI post-merge sobre el SHA exacto `190b4313a21569aa056548f8a40f9022b900b028`: [Validate #40867850127](https://github.com/jonhararagi/wordwaifu/actions/runs/40867850127) y [Lore/Integrity #40867850048](https://github.com/jonhararagi/wordwaifu/actions/runs/40867850048), ambos `success`.
- **Regla factual:** no validar wikis como canon primario, no reescribir personalidad y no inferir costes ni efectos no publicados. El efecto de Five Dimension Troia permanece desconocido.

## PRIORIDAD ACTUAL — DMR-045: cotejo primario de los cinco expedientes

**Estado:** IN_PROGRESS. El barrido secundario está registrado y se han probado rutas de consulta licenciadas, pero ninguna muestra consultada expuso páginas narrativas legibles. Los cinco expedientes continúan abiertos para verificación primaria.
- [x] Registrar DMR-045-SRC-058 como nueva ruta oficial de adaptación manga en `CONT-MANGA`: la ficha de SQUARE ENIX/Big Gangan y la ficha BookLive del número de estreno aportan metadatos y opciones anunciadas de muestra, pero no páginas narrativas. El navegador interactivo devolvió `insufficient_credits` antes de navegar; estado del lector desconocido. No crea claims/eventos ni resuelve Alfia, Zald, Meteria, Erebus o Rudra.
- [ ] Inspeccionar la muestra de `CONT-MANGA` solo cuando una sesión pública normal permita ver páginas reales; mantener todo hallazgo bajo esa continuidad y no transferirlo a `CONT-AR` o `CONT-MAIN-LN`.
- **Integración y CI:** [PR #201](https://github.com/jonhararagi/wordwaifu/pull/201) fusionada por squash. Head validado `6af090defaa128fbb26dcb034aeb03a915aa3bc5`: [Validate #40929087678](https://github.com/jonhararagi/wordwaifu/actions/runs/40929087678) y [Lore/Integrity #40929087528](https://github.com/jonhararagi/wordwaifu/actions/runs/40929087528), ambos success. Primer Validate [#40928846364](https://github.com/jonhararagi/wordwaifu/actions/runs/40928846364) falló por formato de cuatro enlaces Markdown; corregidos antes del head final. Post-merge sobre `ad20a70e4b15e48901e5898780f21841d0979968`: [Validate #40929383860](https://github.com/jonhararagi/wordwaifu/actions/runs/40929383860) y [Lore/Integrity #40929383855](https://github.com/jonhararagi/wordwaifu/actions/runs/40929383855), ambos success.
- [x] Localizar una ruta legal distinta de muestra del volumen 3 en Sony Reader Store: la ficha japonesa presenta una verificación de edad previa a portada/muestra/compra. Registrar DMR-045-SRC-054 como metadata_checked_only, sin claims ni localizadores; la muestra no se abrió.
- [ ] Si se retoma la ruta de Sony Reader Store, continuar solo mediante el flujo normal de verificación de edad y comprobar si aparecen páginas narrativas; no registrar resultado de muestra hasta verlas.


- [x] Probar las rutas públicas seleccionadas PT10/PT11 de Google Books para la edición inglesa licenciada de Astrea Record vol. 3. No se obtuvo narración visible; DMR-045-SRC-053 queda metadata_checked_only, sin claims ni localizador narrativo.
- [x] Identificar la ficha BookLive de la edición recopilatoria japonesa de Astrea Record 1–3 como ruta candidata distinta. La inspección no pudo iniciarse porque el servicio de navegador devolvió insufficient_credits antes de navegar; el estado del lector sigue desconocido.
- [ ] Reintentar cualquiera de estas rutas solo cuando sea posible abrir páginas narrativas reales mediante una sesión autorizada. No repetir pantallas de metadatos, índices o carcasas de página como si fueran pasajes primarios.

- [x] Registrar las rutas autorizadas y los límites de acceso de DMR-045-SRC-018 a DMR-045-SRC-044, incluidos los compendios BOOK☆WALKER, las referencias Miraheze y las rutas BinB oficiales; las fichas, sinopsis, índices, búsquedas limitadas, errores de red y pantallas de carga no equivalen a leer el texto narrativo.
- [x] Revisión de procedencia: DMR-045-CLM-006 queda respaldado por la reseña comunitaria SRC-043 (`secondary_checked`); la sinopsis editorial SRC-005 no nombra esos emparejamientos y solo mantiene la descripción general del conflicto.
- [x] Identificar por separado DMR-045-SRC-026 (BOOK☆WALKER Astrea Record vol. 1: error de descarga), DMR-045-SRC-027 (vol. 2: timeout) y DMR-045-SRC-028 (BOOK☆WALKER DanMachi vol. 14: error de descarga); los tres permanecen metadata_checked_only y sin claims.
- [x] Consultar y registrar como referencias secundarias las páginas comunitarias en inglés alojadas en Miraheze: DMR-045-SRC-033 (Meteria), DMR-045-SRC-034 (Alfia), DMR-045-SRC-035 (Zald), DMR-045-SRC-036 (Erebus) y DMR-045-SRC-037 (Rudra Familia). No son fuentes oficiales; no se presume independencia editorial ni se crean claims o relaciones a partir de ellas.
- [x] Registrar DMR-045-SRC-038 como ruta de muestra NOOK enlazada desde Barnes & Noble para DanMachi vol. 14; el endpoint devolvió Cache miss en esta consulta, sin páginas narrativas ni claims.
- [x] Registrar las rutas BinB oficiales de lectura de muestra enlazadas desde la tienda electrónica de SB Creative: DMR-045-SRC-039 (Astrea Record 1), DMR-045-SRC-040 (Astrea Record 2), DMR-045-SRC-041 (Astrea Record 3) y DMR-045-SRC-042 (DanMachi vol. 14). En la primera pasada los lectores solo mostraron “Now loading...”; quedan `metadata_checked_only`, sin páginas narrativas ni claims.
- [x] Revalidar la ruta ya registrada SRC-041 el 2026-10-29: la ficha oficial del producto (https://ebook.sbcr.jp/product/81561019JAAA03MBJE3X) anuncia 立ち読み（無料）; la página del lector muestra «お使いのブラウザは新ビューワに対応しておりません。» y la extracción directa no expone páginas narrativas. La sesión interactiva no pudo iniciar por `insufficient_credits`. Este es un resultado de acceso limitado, no una ruta nueva ni evidencia de que el lector falle para todos los usuarios.
- [ ] Reabrir SRC-041 únicamente cuando una sesión normal autorizada y compatible permita ver una página narrativa con localizador reproducible; no repetir la misma extracción ni crear un ID duplicado.
- [x] Corregir la procedencia de DMR-045-CLM-006: los emparejamientos Zald–Ottar y Alfia–Astrea Familia proceden de una reseña comunitaria BookLive (DMR-045-SRC-043), no de la sinopsis editorial oficial. SRC-005 queda limitado a la sinopsis general; el dato de los combates sigue secondary_checked y pendiente de cotejo en la novela.
- [x] Registrar DMR-045-SRC-044 como ruta oficial BinB de muestra para DanMachi vol. 20; el lector solo mostró “Now loading...” y no aportó texto narrativo ni claims.
- [x] Incorporar DMR-045-SRC-045, resumen comunitario por capítulos del volumen 20, como evidencia secundaria explícita: CLM-019 (Alfia/Leon, cap. 2) y CLM-020 (Zald/Leon/Udaeus, cap. 3), con notas en fichas, directorio de fuentes y UI.
- [x] Añadir DMR-045-SRC-046 y DMR-045-CLM-021 a partir del resumen comunitario del volumen 14: Rudra aparece ante Ryuu tras la destrucción de Rudra Familia, hace un comentario sobre invitarla y luego es capturado por el Gremio. El claim se limita a esa escena posterior y no atribuye a Rudra conocimiento u orden de la trampa previa.
- [x] Reintentar la lectura autorizada por las páginas públicas de BOOK☆WALKER para DanMachi vol. 14 y Astrea Record 3; sus páginas anuncian `試し読み`, pero la consulta del visor de vol. 14 redirigió a un endpoint que la herramienta de lectura no pudo abrir. No se obtuvo texto narrativo ni localizador.
- [ ] Cotejar CLM-021 con la edición licenciada del volumen 14 y un localizador narrativo reproducible; mantener pendiente cualquier atribución de conocimiento o autorización personal de Rudra.
- **Integración PR #157:** merge SHA `364876830d0b16eccc81969ea928180c29ba9f35`; CI de PR [Validate](https://github.com/jonhararagi/wordwaifu/actions/runs/40354723328) y [Lore/Integrity](https://github.com/jonhararagi/wordwaifu/actions/runs/40354723341) `success`. Post-merge [Lore/Integrity](https://github.com/jonhararagi/wordwaifu/actions/runs/40354993811) y [Validate](https://github.com/jonhararagi/wordwaifu/actions/runs/40354994039) `success` sobre ese SHA (confirmado el 2026-10-26).
- [ ] Cotejar ambos indicios con la edición licenciada del volumen 20; el resumen de wiki no reemplaza página narrativa ni confirma la formulación exacta.
- **Integración:** PR [#155](https://github.com/jonhararagi/wordwaifu/pull/155), merge SHA `21c55f905e28c419df0616e25247d8960533fde8`. CI de PR [Validate](https://github.com/jonhararagi/wordwaifu/actions/runs/40348659487) y [Lore/Integrity](https://github.com/jonhararagi/wordwaifu/actions/runs/40348659494) success. CI post-merge [Lore/Integrity](https://github.com/jonhararagi/wordwaifu/actions/runs/40348901258) y `Validate` [#40348901098](https://github.com/jonhararagi/wordwaifu/actions/runs/40348901098) finalizaron en `success` (confirmado el 2026-10-26).
- **Integración y CI:** DMR-045-SRC-044 quedó integrado en [PR #153](https://github.com/jonhararagi/wordwaifu/pull/153), SHA `1894e3acf3ced6c472b9e8979dcb53874bf40226`; CI de PR [Validate](https://github.com/jonhararagi/wordwaifu/actions/runs/40284254967) y [Lore/Integrity](https://github.com/jonhararagi/wordwaifu/actions/runs/40284254924), y CI post-merge [Validate](https://github.com/jonhararagi/wordwaifu/actions/runs/40284421948) y [Lore/Integrity](https://github.com/jonhararagi/wordwaifu/actions/runs/40284422026), todos success.
- [ ] Reintentar la ruta oficial de vol. 20 únicamente mediante una sesión normal autorizada; si la narración llega a verse, cotejar el prólogo y los pasajes sugeridos por DMR-045-CLM-015/016 con un localizador real. No inferir identidad o habilidad a partir de índices o wikis.
- [ ] Alfia y Zald: conseguir un pasaje identificable de Astrea Record y cotejar habilidades, límites y secuencias concretas; no inventar capítulo ni página.
- [ ] Meteria: localizar la identificación primaria y cotejar parentesco, afiliación e historia en la continuidad publicada; mantener el recuerdo autoral en CONT-AU.
- [ ] Erebus: localizar sus escenas en la novelización CONT-AR; conservar los datos del juego en CONT-GAME y no asumir que las versiones son idénticas.
- [ ] Rudra: leer directamente el pasaje del volumen 14 y su retrospectiva/epílogo antes de validar qué hizo Rudra Familia y qué conocimiento u orden personal puede atribuirse a Rudra.
- [ ] En cada nuevo intento, registrar título, idioma, URL, continuidad, estado exacto de acceso y localizador solo después de ver el pasaje. Si el visor falla, dejarlo como metadata_checked_only y mantener claims_supported vacío.

**Integración y CI:** la corrección del orden de trabajo quedó integrada en [PR #140](https://github.com/jonhararagi/wordwaifu/pull/140), merge SHA `e236c07cc475feae31c0fa2ab0697b26851c41d0`. CI de PR: [Validate](https://github.com/jonhararagi/wordwaifu/actions/runs/40232710265) y [Lore/Retrieval](https://github.com/jonhararagi/wordwaifu/actions/runs/40232710323), ambos success. CI post-merge sobre el SHA exacto: [Validate](https://github.com/jonhararagi/wordwaifu/actions/runs/40232839057) y [Lore/Retrieval](https://github.com/jonhararagi/wordwaifu/actions/runs/40232839130), ambos success.

**Regla de cierre:** DMR-045 no se cierra hasta cotejar los localizadores primarios pertinentes para los cinco expedientes. Orario permanece como etapa posterior. Véanse [la auditoría DMR-045](research/inbox/DANMACHI-RESEARCH-045-dark-era-characters-continuity-audit.md) y el [registro central de fuentes](sources/00-registro-fuentes.md).

## DANMACHI-RESEARCH-045 — Resultado histórico del barrido secundario público (2026-10-24)

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
- [x] Decisión histórica del 2026-10-24: tras este barrido se anotó Orario como siguiente etapa. Esa secuencia fue sustituida el 2026-10-25: el cotejo primario de DMR-045 vuelve a ser la prioridad antes de ampliar Orario; véanse CONV-DM-2026-10-25-006 y DEC-DM-008.

**Límite:** el barrido secundario completado no equivale a cinco biografías verificadas en el texto primario. Los localizadores no disponibles permanecen abiertos.

## Corrección incremental de personajes — precisión de habilidades secundarias (2026-10-25)

- [x] Completar el resumen interactivo de Genos Angelus de Alfia con el alcance reportado (>100 metros), la campana gris plateada y el coste para su salud, manteniendo cada detalle como pista comunitaria pendiente de cotejo primario.
- [x] Alinear la ficha Markdown y el expediente UI de Zald para explicitar el ejemplo reportado de Deus Ambrosia (nivel 7 frente a poder equivalente al nivel 10) sin tratarlo como fórmula universal verificada.
- [x] Añadir regresiones automatizadas para la precisión, la consistencia UI/Markdown y los límites de evidencia.
- [x] Ejecutar CI de PR y posintegración para el SHA exacto de `main`; las cuatro ejecuciones terminaron con éxito (véase la evidencia enlazada en `docs/STATUS.md` y el registro de acuerdos).
- **Integración:** PR [#118](https://github.com/jonhararagi/wordwaifu/pull/118) integrada; SHA `d81766fc7003294c15d0a2b776ce2d59170da86c`. La CI de PR y la CI post-merge aprobaron ambos workflows.
- **Límite:** no se crean claims ni relaciones nuevos, no cambia ningún ID ni el estado de canon; los localizadores primarios individuales de DMR-045 siguen abiertos.

## Acceso interactivo a habilidades secundarias de Alfia y Zald (2026-10-25)

- [x] Añadir entradas del diálogo ampliado por continuidad `CONT-AR` para Alfia y Zald; conservar las wikis como fuentes comunitarias, no oficiales ni equivalentes a texto primario.
- [x] Añadir pruebas de API para fuentes, detalles de Genos Angelus y el ejemplo de Deus Ambrosia; verificar que estas notas no se exponen como perfiles de `CONT-MAIN-LN`.
- [x] Añadir regresiones Playwright que buscan, abren y leen el diálogo “Más información” de ambas fichas en la aplicación real.
- [x] Ejecutar los workflows de PR y posintegración; ambos workflows pasaron tanto en la PR como en el SHA de `main`.
- **Integración:** PR [#120](https://github.com/jonhararagi/wordwaifu/pull/120) integrada en `main` por SHA `742b0220590e45082972015684a0ecc6cbf14f04`. CI de PR y post-merge: Validate WordWaifu ([PR](https://github.com/jonhararagi/wordwaifu/actions/runs/40211032458), [main](https://github.com/jonhararagi/wordwaifu/actions/runs/40211145581)) y Lore Integrity ([PR](https://github.com/jonhararagi/wordwaifu/actions/runs/40211032504), [main](https://github.com/jonhararagi/wordwaifu/actions/runs/40211145583)), todos exitosos.
- **Límite:** sin cambios a IDs, claims o aristas; DMR-045 sigue abierto para cotejo de localizadores primarios.

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

## Etapa posterior — Orario y cobertura de la ciudad (pendiente tras DMR-045)

**Estado:** PENDIENTE; este bloque conserva las tareas de cobertura de Orario para ejecutarlas después de verificar DMR-045. No representa la prioridad operativa actual. Las casillas siguientes expresan el estado puntual de cada tarea, pero no adelantan su orden de ejecución.  
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

**Actualización de interfaz y nuevas rutas autorizadas (2026-10-25):**
**Nuevas rutas de compendios de muestra de distribuidor licenciado (2026-10-25):**
- [x] Localizar los compendios gratuitos BOOK☆WALKER de octubre, noviembre y diciembre de 2022, que ofrecen muestras de Astrea Record 1, 2 y 3: DMR-045-SRC-030, DMR-045-SRC-031 y DMR-045-SRC-032.
- [x] Seguir los enlaces de muestra normales. El compendio de octubre redirigió a un lector que no fue posible abrir; un reintento directo terminó en timeout. Los enlaces normales de muestra de noviembre y diciembre también terminaron en timeout. Ninguno expuso páginas narrativas.
- [ ] Reintentar esas muestras solo por el lector normal; no tratar la vista de un compendio como edición final ni registrar pasajes que no se puedan leer.
- **Estado:** los tres IDs son metadata_checked_only y tienen claims vacíos; no cierran la verificación primaria de DMR-045.
- **Integración:** PR [#143](https://github.com/jonhararagi/wordwaifu/pull/143), merge SHA `5cf3eb069bca47d2ce488a7ffb1128c1c830c7e4`.
- **CI de PR:** [Validate](https://github.com/jonhararagi/wordwaifu/actions/runs/40260108783) y [Lore/Retrieval](https://github.com/jonhararagi/wordwaifu/actions/runs/40260108791), ambos success.
- **CI post-merge:** [Validate](https://github.com/jonhararagi/wordwaifu/actions/runs/40260414219) y [Lore/Retrieval](https://github.com/jonhararagi/wordwaifu/actions/runs/40260414283), ambos success; browser smoke y enlaces/catálogo pasaron.

**Rutas oficiales adicionales consultadas (2026-10-25):**
- [x] Abrir por su URL pública normal el lector de muestra de SBCr eBook Store para Astrea Record 1/2/3; registrar DMR-045-SRC-020, DMR-045-SRC-021 y DMR-045-SRC-022 como metadata_checked_only, sin claims ni localizadores.
- [x] Añadir las tres rutas al directorio consultable y cubrirlas con pruebas de regresión. Las tres devolvieron “Now loading...” y controles, sin páginas narrativas legibles.
- [x] Localizar y verificar las fichas públicas de Google Play Books para las ediciones inglesas de Astrea Record 1–3: DMR-045-SRC-023, DMR-045-SRC-024 y DMR-045-SRC-025. Volúmenes 1/2 anuncian “Free sample”; el resultado extraído solo contiene ficha y sinopsis, no páginas narrativas. Vol. 3 presenta variantes regionales de disponibilidad.
- **Integración/CI:** PR [#129](https://github.com/jonhararagi/wordwaifu/pull/129), SHA f450e98426c38c9c54b0c9befc6a1e5388ea99ac. CI de la PR: [Validate](https://github.com/jonhararagi/wordwaifu/actions/runs/40228737355) y [Lore/Retrieval](https://github.com/jonhararagi/wordwaifu/actions/runs/40228737354); CI post-merge sobre el SHA exacto: [Validate](https://github.com/jonhararagi/wordwaifu/actions/runs/40228879793) y [Lore/Retrieval](https://github.com/jonhararagi/wordwaifu/actions/runs/40228879958). Los cuatro workflows terminaron en success.
- [ ] Abrir manualmente las muestras inglesas mediante el lector normal de Google Play Books o una edición licenciada legible; registrar capítulo/página solo después de ver el pasaje concreto.
- [ ] Reintentar manualmente los visores japoneses mediante su uso normal o consultar otra edición autorizada legible; solo registrar capítulo/página después de ver el pasaje concreto.
- **Límite:** los accesos fallidos no demuestran que un personaje no aparezca ni que los libros sean indisponibles. Los registros DMR-045-SRC-018–032 son metadata_checked_only y tienen claims vacíos. DMR-045 continúa abierto para verificación primaria.
- **Integración y CI:** [PR #127](https://github.com/jonhararagi/wordwaifu/pull/127), main SHA `1a1bc2be356463edde3464e530015674dd8bc767`; PR CI [Validate](https://github.com/jonhararagi/wordwaifu/actions/runs/40225927385) y [Lore/Retrieval](https://github.com/jonhararagi/wordwaifu/actions/runs/40225927413), ambos success; CI post-merge [Validate](https://github.com/jonhararagi/wordwaifu/actions/runs/40226051519) y [Lore/Retrieval](https://github.com/jonhararagi/wordwaifu/actions/runs/40226051508), ambos success.

- [x] Exponer en “Más información” la nota de Meteria bajo CONT-MAIN-LN y su recuerdo alternativo por separado en CONT-AU.
- [x] Exponer el resumen secundario de Erebus solo bajo CONT-GAME; mantener “Eren” sin aprobar como alias canónico y no atribuir automáticamente la motivación a la novelización CONT-AR.
- [x] Añadir para Rudra una nota navegable que distinga la trampa atribuida a Rudra Familia de una orden/conocimiento personal no demostrado.
- [x] Etiquetar en la interfaz wikis, entrevistas, publicaciones autorales y metadatos editoriales por su tipo, sin llamar “texto primario” a una ficha de producto.
- [x] Registrar Google Books vol. 20 como DMR-045-SRC-018 y BinB Astrea Record 3 como DMR-045-SRC-019; ambos se mantienen metadata_checked_only y sin claims.
- [x] Reintentar la vista previa licenciada de Google Books vol. 20 mediante la página pública normal: el lector anuncia `Preview · 28 pages`, pero las páginas mostraron `Page didn't load`; actualizar SRC-018, el directorio de fuentes y las regresiones sin crear claims ni localizadores.
- **Integración y CI:** PR [#135](https://github.com/jonhararagi/wordwaifu/pull/135), merge SHA `e63fbdaa8b8b757b67446aecbe0ffec1382e4562`; CI de la PR [Validate #3374](https://github.com/jonhararagi/wordwaifu/actions/runs/40232076731) y [Lore/Retrieval #1766](https://github.com/jonhararagi/wordwaifu/actions/runs/40232076712), ambos `success`; CI post-merge sobre ese SHA [Validate #3377](https://github.com/jonhararagi/wordwaifu/actions/runs/40232214960) y [Lore/Retrieval #1767](https://github.com/jonhararagi/wordwaifu/actions/runs/40232214899), ambos `success`.
- [x] Ejecutar regresiones API y Playwright para los tres expedientes y sus etiquetas de fuente.
- **Integración de código:** [PR #122](https://github.com/jonhararagi/wordwaifu/pull/122), SHA ba6363bce1b651a74ebfa9b782fb7e38f8804eef. CI de la PR: [Validate WordWaifu](https://github.com/jonhararagi/wordwaifu/actions/runs/40222698644) y [DanMachi Lore and Retrieval Integrity](https://github.com/jonhararagi/wordwaifu/actions/runs/40222698535), ambas exitosas. CI post-merge sobre el SHA exacto: [Validate](https://github.com/jonhararagi/wordwaifu/actions/runs/40222827902) y [Lore/Retrieval](https://github.com/jonhararagi/wordwaifu/actions/runs/40222827809), ambas exitosas, incluida la prueba de navegador y la validación de catálogo/enlaces.
- [ ] Cotejar el texto narrativo/licenciado de Astrea Record vols. 1–3 para Alfia, Zald y Erebus con localizador reproducible.
- [ ] Localizar el texto primario que identifique a Meteria, su parentesco/afiliación y los detalles de su historia en la continuidad publicada.
- [ ] Verificar en lectura directa la retrospectiva del vol. 14 y mantener pendiente la atribución personal a Rudra.
- **Estado factual:** las nuevas rutas legales no expusieron pasajes narrativos. Un resultado de búsqueda limitado no demuestra ausencia de un personaje; HTTP 429 no es resultado de búsqueda. Los cinco localizadores primarios siguen abiertos.


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
- [x] Consultar la ficha y la ruta normal de muestra licenciada de BOOK☆WALKER para DanMachi vol. 14; registrar `DMR-045-SRC-028` como `metadata_checked_only`, sin claims y sin localizador narrativo, porque el lector devolvió un error de descarga.
- [ ] Reintentar el capítulo 13 y el epílogo solo mediante una edición o muestra legítima que exponga la página narrativa; mantener sin confirmar la atribución personal a Rudra.

**Estado factual:** fichas más completas y buscables; el lote sigue en secondary_checked_with_primary_gaps. El lector de muestra de vol. 14 añadió una ruta registrada pero no una página legible. No se declara verificación primaria de las biografías.
- **Integración:** PR [#133](https://github.com/jonhararagi/wordwaifu/pull/133), merge SHA `1c53f9f7ca57a6aeebaedbf57234fb8b6e581f6f`.
- **Verificación post-merge del SHA exacto de `main`:** [Validate WordWaifu #3367](https://github.com/jonhararagi/wordwaifu/actions/runs/40231489642) y [DanMachi Lore and Retrieval Integrity #1760](https://github.com/jonhararagi/wordwaifu/actions/runs/40231489669), ambos `success`.


- [x] Registrar y exponer en la interfaz la ficha oficial de Yen Press para la edición inglesa licenciada de *Astrea Record, Vol. 3* (ISBN 9781975379926; publicada el 26-11-2024) como ruta de consulta legal para Alfia, Zald y Erebus; etiquetarla como metadatos editoriales, sin claims narrativos. Integrado por [PR #116](https://github.com/jonhararagi/wordwaifu/pull/116); CI post-merge sobre `6efb50779b17924e7064876af75afa3cbd1d3b67`: [Validate](https://github.com/jonhararagi/wordwaifu/actions/runs/40197003502) y [Lore Integrity](https://github.com/jonhararagi/wordwaifu/actions/runs/40197003501), ambas exitosas.
- [ ] Cotejar el texto de esa edición con capítulos y páginas reproducibles para cada afirmación individual de Alfia, Zald y Erebus; la sinopsis editorial no satisface este criterio.
- [x] Añadir la ficha del distribuidor licenciado BOOK☆WALKER y su enlace de muestra gratuita de la edición japonesa de *Astrea Record 3* al directorio de fuentes y a las fichas de Alfia, Zald y Erebus, con prueba de regresión. La categoría `licensed_retailer` tiene un grupo propio visible en el navegador de fuentes.
- [ ] Reintentar la lectura de la muestra autorizada de BOOK☆WALKER o cotejar la edición licenciada fuera del visor bloqueado; obtener capítulo/página individual antes de confirmar datos narrativos de Alfia, Zald o Erebus.
- **Integración/validación:** PR [#117](https://github.com/jonhararagi/wordwaifu/pull/117) integrada; exacto `main` SHA `1302145b9b222130069c9aa7393a115cbfd7284f`. CI de PR: [Validate](https://github.com/jonhararagi/wordwaifu/actions/runs/40205349066), [Lore](https://github.com/jonhararagi/wordwaifu/actions/runs/40205349060); CI post-merge: [Validate](https://github.com/jonhararagi/wordwaifu/actions/runs/40205481864), [Lore](https://github.com/jonhararagi/wordwaifu/actions/runs/40205481796) — todas exitosas.

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



## DMR-045 — Ruta adicional licenciada para el volumen 14 (2026-10-25)

- [x] Añadir [Google Play Books, volumen 14](https://play.google.com/store/books/details/Fujino_Omori_Is_It_Wrong_to_Try_to_Pick_Up_Girls_i?id=PLS9DwAAQBAJ) como ruta normal de muestra anunciada, con metadatos y límites visibles en el navegador de fuentes.
- [x] Enlazar la muestra desde “Más información” de Rudra, junto a la ficha editorial y la ruta ya registrada de BOOK☆WALKER.
- [x] Añadir regresiones API y Playwright para garantizar que el acceso se ofrece bajo CONT-MAIN-LN sin afirmar que se leyó la novela.
- [ ] Inspeccionar un pasaje narrativo del capítulo 13 o del epílogo del volumen 14. Google Play Books anunció Free sample, pero esta consulta solo recuperó metadatos; Google Books mostró la cubierta y la ficha bibliográfica. No se leyó la retrospectiva de Rudra Familia ni el pasaje del epílogo.
- **Estado:** implementado en la rama de trabajo; DMR-045-SRC-029 está metadata_checked_only, sin claims ni aristas. El localizador primario de Rudra sigue pendiente.


### Cierre técnico de la PR documental #158
- [x] Integrar por squash y confirmar en `main`: [PR #158](https://github.com/jonhararagi/wordwaifu/pull/158), SHA `b01eeb269622d5d8c243fdf05c2fb056a7008221`.
- [x] Validar el head pre-merge `671bdacba38e7e0b8d8e3322d2bcf2f1a0b3caec`: [Validate #40358799343](https://github.com/jonhararagi/wordwaifu/actions/runs/40358799343) y [Lore/Integrity #40358799938](https://github.com/jonhararagi/wordwaifu/actions/runs/40358799938), ambos `success`.
- [x] Validar ambos workflows post-merge sobre el SHA exacto de `main`: [Validate #40359137390](https://github.com/jonhararagi/wordwaifu/actions/runs/40359137390) y [Lore/Integrity #40359137265](https://github.com/jonhararagi/wordwaifu/actions/runs/40359137265), ambos `success`.
- [ ] Mantener abierta la investigación narrativa primaria de Alfia, Zald, Meteria, Erebus y Rudra; las muestras consultadas no produjeron texto reproducible.


- [x] Registrar como pista secundaria DMR-045-CLM-022 a partir de la entrada de reseña BookLive ya existente DMR-045-SRC-043: el resumen parece mencionar una ofrenda floral de Bell y Hermes ante tumbas de Erebus, Zald y Alfia. No crear aristas ni relaciones y no tratarlo como lectura de la novela.
- [x] Integrar DMR-045-CLM-022 y sus tres notas interactivas mediante [PR #162](https://github.com/jonhararagi/wordwaifu/pull/162), merge SHA `09a771bd752a8a903984bf5f84510a36565f9206`; CI de PR y post-merge documentados a continuación.
- [x] Validar PR #162: [Validate #40394117882](https://github.com/jonhararagi/wordwaifu/actions/runs/40394117882) y [Lore/Integrity #40394118254](https://github.com/jonhararagi/wordwaifu/actions/runs/40394118254), ambos `success` sobre head `3bbd6e89e6a1c73a338acf7b36574e6642392712`.
- [x] Validar post-merge sobre el SHA exacto de `main`: [Lore/Integrity #40400987218](https://github.com/jonhararagi/wordwaifu/actions/runs/40400987218) y [Validate #40400987257](https://github.com/jonhararagi/wordwaifu/actions/runs/40400987257), ambos `success`.
- [ ] Cotejar el cierre de Astrea Record 3 en una edición licenciada: confirmar si la escena y los personajes mencionados en CLM-022 aparecen en el texto, con localizador reproducible. Mantener el claim secundario hasta entonces.

### DMR-045 — rutas BookLive de prueba gratuita (2026-10-26)
- [x] Registrar DMR-045-SRC-047 (BookLive, DanMachi vol. 14) y DMR-045-SRC-048 (BookLive, Astrea Record 3) como ofertas de prueba en navegador/app, solo metadatos, con `claims_supported: []` y pruebas de directorio e interfaz.
- [x] Exponer las rutas desde los expedientes interactivos pertinentes sin mezclar CONT-MAIN-LN, CONT-AR y CONT-GAME.
- [ ] Leer una muestra licenciada que exponga páginas narrativas reales y registrar un localizador reproducible antes de actualizar cualquier claim. La ficha y los controles de muestra, por sí solos, no son evidencia narrativa.


### Integración de rutas BookLive — PR #160
- [x] Registrar y enlazar SRC-047 (BookLive DanMachi vol. 14) y SRC-048 (BookLive Astrea Record 3) como metadatos de muestra, sin claims ni eventos, mediante [PR #160](https://github.com/jonhararagi/wordwaifu/pull/160), SHA `968ad23141ffdc2db032383228445fddc753b755`.
- [x] CI de PR sobre head `6d89ea9a7846c64132b08f58b628ff70b075a302`: [Validate #40381631794](https://github.com/jonhararagi/wordwaifu/actions/runs/40381631794) y [Lore/Integrity #40381631812](https://github.com/jonhararagi/wordwaifu/actions/runs/40381631812), ambos `success`.
- [x] CI post-merge Lore/Integrity [#40381983723](https://github.com/jonhararagi/wordwaifu/actions/runs/40381983723) `success`.
- [x] Confirmar la conclusión final de post-merge Validate [#40381983810](https://github.com/jonhararagi/wordwaifu/actions/runs/40381983810): `success` sobre `968ad23141ffdc2db032383228445fddc753b755`.
- [ ] Leer texto narrativo real de una muestra licenciada y registrar un localizador reproducible antes de actualizar cualquier claim. Los cinco localizadores primarios de DMR-045 permanecen abiertos.

### DMR-045-SRC-049 — ruta Kobo de vista previa, solo metadatos (2026-10-26)
- [x] Localizar la ficha licenciada de Kobo para DanMachi vol. 20 en inglés; el resultado público indexado muestra “Preview Now” y “Save Preview”.
- [x] Registrar la ruta como metadata_checked_only en CONT-MAIN-LN, con claims_supported vacío, sin claims, eventos o relaciones nuevos.
- [x] Enlazar la ruta desde las fichas de investigación de Alfia y Zald bajo CONT-MAIN-LN, sin trasladarla a CONT-AR o CONT-GAME.
- [x] Añadir regresiones de unicidad, URL, estado de evidencia y separación de continuidad.
- [ ] Abrir la muestra en una sesión normal accesible y registrar capítulo/página solo si una página narrativa queda realmente legible; la herramienta pública devolvió “Cache miss”.
- [x] Integrar la ruta metadata-only mediante [PR #164](https://github.com/jonhararagi/wordwaifu/pull/164), squash SHA `345db0189308b2e34a31bbf8f3930e75f0b4fc2f`.
- [x] Confirmar CI de PR sobre `dc60cf91fba87a85419bc029d24dd7b8446420f6`: [Validate #40432114887](https://github.com/jonhararagi/wordwaifu/actions/runs/40432114887) y [Lore/Integrity #40432114895](https://github.com/jonhararagi/wordwaifu/actions/runs/40432114895), ambos `success`.
- [ ] Verificar evidencia post-merge de los workflows sobre el SHA exacto de main; las consultas disponibles no devolvieron estados que permitan declararlos verdes.
- **Estado factual:** ruta implementada e integrada, con CI de PR aprobado; no equivale a texto primario y no cierra los cinco localizadores de DMR-045.

### DMR-045-SRC-050 — BOOK☆WALKER, muestra japonesa del volumen 20
- [x] Localizar la ficha oficial de BOOK☆WALKER y su enlace 試し読み para DanMachi vol. 20.
- [x] Intentar la ruta de muestra normal; el visor redirigido no es accesible desde la herramienta de consulta (Internal Error de la herramienta al seguir la redirección; no se confirmó una respuesta HTTP del visor).
- [x] Registrar la ruta como `metadata_checked_only`, `CONT-MAIN-LN`, sin claims, eventos, relaciones ni aliases nuevos.
- [x] Enlazarla desde los expedientes de investigación de Alfia y Zald solo en `CONT-MAIN-LN`, con pruebas para la frontera de continuidad.
- [x] Integrar mediante [PR #166](https://github.com/jonhararagi/wordwaifu/pull/166), squash SHA de `main` `2951fa55396564cb878e00ab5c7d2b297966cd64`.
- [x] Validar CI de PR: [Validate #40450101232](https://github.com/jonhararagi/wordwaifu/actions/runs/40450101232) y [Lore/Integrity #40450101166](https://github.com/jonhararagi/wordwaifu/actions/runs/40450101166), ambos `success` sobre `80c5468f78812312898dbe3f6de709856f63d0d2`.
- [x] Confirmar CI post-merge sobre el SHA exacto de `main`: [Validate WordWaifu #40459532846](https://github.com/jonhararagi/wordwaifu/actions/runs/40459532846) y [DanMachi Lore and Retrieval Integrity #40459532519](https://github.com/jonhararagi/wordwaifu/actions/runs/40459532519), ambos `success` para `2951fa55396564cb878e00ab5c7d2b297966cd64`.
- [ ] Abrir la muestra en un navegador normal y registrar capítulo/página únicamente si el texto narrativo queda realmente visible.
- **Estado factual:** integrado; CI de PR y CI post-merge aprobados sobre los SHA registrados. La consulta manual de la muestra sigue pendiente; la ruta no confirma pistas secundarias ni cierra los cinco localizadores de DMR-045.


### DMR-045-SRC-051 — Diferencias comunitarias de Astrea Record 3
- [x] Consultar la página de diferencias de DanMachi Wiki en español y registrar su alcance como fuente secundaria de `CONT-AR`.
- [x] Añadir la fuente al directorio buscable y enlazarla desde las notas de Alfia, Zald y Erebus solo en `CONT-AR`.
- [x] Añadir regresiones para procedencia secundaria, descubribilidad y separación de continuidad.
- [x] Comprobar la ruta normal de muestra enlazada por la ficha editorial de GA Bunko; el lector BinB no mostró páginas narrativas legibles en la consulta pública.
- [ ] Cotejar con texto licenciado los detalles de `Lugio`, `Gif Blessing`, `Genos Angelus`, `Deus Ambrosia` y la escena EXTRA Zald/Alfia/Erebus; no inventar capítulo/página.
- [x] Integrar mediante [PR #168](https://github.com/jonhararagi/wordwaifu/pull/168), squash SHA de `main` `99a667e60f3651b98759a1993a26258ba37dd645`.
- [x] Validar CI de PR sobre `16338edec86670b1692084bea446657bc657eb71`: [Validate WordWaifu #40510817854](https://github.com/jonhararagi/wordwaifu/actions/runs/40510817854) y [DanMachi Lore and Retrieval Integrity #40510817870](https://github.com/jonhararagi/wordwaifu/actions/runs/40510817870), ambos `success`.
- [x] Validar CI post-merge sobre `99a667e60f3651b98759a1993a26258ba37dd645`: [Validate WordWaifu #40511064727](https://github.com/jonhararagi/wordwaifu/actions/runs/40511064727) y [DanMachi Lore and Retrieval Integrity #40511064313](https://github.com/jonhararagi/wordwaifu/actions/runs/40511064313), ambos `success`.
- **Estado factual:** fuente secundaria integrada y validada técnicamente; no crea claims, eventos ni relaciones. Queda pendiente el cotejo de texto primario para los detalles listados y los cinco expedientes DMR-045.

- **Corrección técnica de CI en PR #168:** los checks iniciales detectaron dos aserciones de texto mal ajustadas y que Playwright 1.55 no instala Chromium en Ubuntu 26.04. Se corrigieron las aserciones y se fijaron ambos workflows a `ubuntu-24.04`. CI de PR y post-merge aprobados: [Validate WordWaifu #40510817854](https://github.com/jonhararagi/wordwaifu/actions/runs/40510817854), [DanMachi Lore and Retrieval Integrity #40510817870](https://github.com/jonhararagi/wordwaifu/actions/runs/40510817870), [Validate WordWaifu #40511064727](https://github.com/jonhararagi/wordwaifu/actions/runs/40511064727) y [DanMachi Lore and Retrieval Integrity #40511064313](https://github.com/jonhararagi/wordwaifu/actions/runs/40511064313).

### Bitácora anti-repetición de actualizaciones de personajes — cohorte 2026-10-27
- [x] Crear `lore/danmachi/CHARACTER_UPDATE_LEDGER.md` con resultados, fuentes, campos no reportados, contradicciones y disparadores de reapertura.
- [x] Añadir una continuidad `CONT-SECONDARY` al archivo interactivo sin trasladar datos de wikis a `CONT-AR`, `CONT-ANIME` o `CONT-GAME`.
- [x] Completar una pasada secundaria acotada para Alise, Kaguya, Lyra, Maryuu, Neze, Noin, Iska, Asta, Ryana y Celty.
- [x] Marcar `HOLD_FOR_PRIMARY_SOURCE` para los cinco expedientes DMR-045 hasta evidencia nueva; no repetir el barrido general ni reescribir personalidades.
- [x] Registrar la pasada de `DMR-028-SRC-002` a `SRC-010` en el registro de fuentes existente, conservando los IDs y anotando las discrepancias relevantes.
- [x] Añadir `tests/test_character_update_ledger.cjs` y conectarlo con ambos workflows de CI.
- [x] Revisar el diff completo y corregir los fallos detectados por CI (fuente Celty, límites secundarios de Kaguya, sobrescritura de notas secundarias y vocabulario de la magia de Noin).
- [x] Abrir PR [#170](https://github.com/jonhararagi/wordwaifu/pull/170) y fusionarla por squash; SHA de `main`: `034eb037f98ce25076de7fc4217a62cb960172eb`.
- [x] CI de PR sobre `e0cb29570ad8cd0b7b704ca73fa95882765e66a0`: [Validate WordWaifu #40525522243](https://github.com/jonhararagi/wordwaifu/actions/runs/40525522243) y [DanMachi Lore and Retrieval Integrity #40525522040](https://github.com/jonhararagi/wordwaifu/actions/runs/40525522040), ambos `success`.
- [x] CI post-merge sobre `034eb037f98ce25076de7fc4217a62cb960172eb`: [Validate WordWaifu #40525793577](https://github.com/jonhararagi/wordwaifu/actions/runs/40525793577) y [DanMachi Lore and Retrieval Integrity #40525794301](https://github.com/jonhararagi/wordwaifu/actions/runs/40525794301), ambos `success`.
- **Regla permanente:** si una fuente consultada no informa el nivel/nombre/efecto/coste, registrar «no informado en esta fuente» y pasar a otro personaje; solo reabrir con un desencadenante documentado. No afirmar que el dato no existe en el canon sin evidencia expresa.

## DANMACHI-RESEARCH-052 · Freya Familia: capacidades, magia y equipo (2026-10-27)

- [x] Revisar una sola vez las páginas comunitarias de Allen Fromel, Hedin Selland, Hogni Ragnar y Hermanos Gulliver.
- [x] Registrar datos disponibles de magia, skills, equipo y límites en DMR-052, la bitácora y la continuidad separada CONT-SECONDARY.
- [x] Registrar como no informados los costes y nombres individuales que las páginas consultadas no expusieron; no interpretar la omisión como prueba de inexistencia en canon.
- [x] Ampliar las notas de Allen, Hedin, Hogni y los cuatro hermanos, preservando las personalidades existentes.
- [x] Añadir una regresión automática para comprobar las ocho entradas de la bitácora y la disponibilidad de las fuentes.
- [x] Revisar el diff y aprobar los dos workflows de PR; integrar solo tras comprobarlos.
- [x] Integrar mediante PR [#172](https://github.com/jonhararagi/wordwaifu/pull/172), SHA de `main` `79505bd740d47560d4bc67166c807d14090a950d`.
- [x] Registrar los workflows de PR aprobados sobre `1ece6f0117dadf2fb0b0a4988d23c13df34d0609`: [Validate #40572608737](https://github.com/jonhararagi/wordwaifu/actions/runs/40572608737) y [Lore/Integrity #40572608435](https://github.com/jonhararagi/wordwaifu/actions/runs/40572608435).
- [x] Confirmar la conclusión de CI post-merge sobre `79505bd740d47560d4bc67166c807d14090a950d`: [Validate #40590376454](https://github.com/jonhararagi/wordwaifu/actions/runs/40590376454) y [Lore/Integrity #40590376362](https://github.com/jonhararagi/wordwaifu/actions/runs/40590376362), ambos `success`.
- **Límite:** fuente secundaria; no añade claims, eventos o relaciones ni cierra cotejos primarios.
- **Convivencia con DMR-045:** la búsqueda primaria de los cinco expedientes históricos sigue pendiente. Mientras no haya una nueva fuente licenciada legible, no se reintentan las mismas páginas sin cambios; se permite avanzar sobre una cohorte distinta como esta, conforme a la directriz anti-repetición.


## DANMACHI-RESEARCH-053 — Familia Loki: capacidades de Bete, Tiona y Tione (2026-10-27)

- [x] Revisar una sola vez las páginas comunitarias elegidas para habilidades, magia, habilidades de desarrollo y equipo.
- [x] Distinguir los encabezados de nivel 6 de las tablas estadísticas de nivel 5.
- [x] Registrar la divergencia ortográfica Flosvirt/Frosvirt sin adjudicar un cambio de canon.
- [x] Añadir las notas de CONT-SECONDARY para Bete Loga, Tiona Hiryute y Tione Hiryute, sin reescribir personalidad ni historia.
- [x] Registrar cuatro fuentes comunitarias y añadir una regresión del protocolo anti-repetición.
- [x] Ejecutar ambos workflows y aprobar el CI de PR: [Validate #40602468962](https://github.com/jonhararagi/wordwaifu/actions/runs/40602468962), [Lore/Integrity #40602469069](https://github.com/jonhararagi/wordwaifu/actions/runs/40602469069).
- [x] Integrar mediante [PR #174](https://github.com/jonhararagi/wordwaifu/pull/174), SHA de `main` `28ae6f34859bc0a59beaf7a711bfa54504265ffd`.
- [x] Verificar CI post-merge: [Validate #40602644529](https://github.com/jonhararagi/wordwaifu/actions/runs/40602644529) y [Lore/Integrity #40602644563](https://github.com/jonhararagi/wordwaifu/actions/runs/40602644563), ambos `success`.
- **Límite:** datos secundarios; no se crean claims narrativos, eventos o relaciones.
- **Convivencia con DMR-045:** los cinco cotejos primarios de Alfia, Zald, Meteria, Erebus y Rudra siguen pendientes. DMR-053 no reemplaza esa prioridad ni justifica repetir las muestras no legibles.

## DMR-045 · Cruce de la nota autoral y la edición especial (2026-10-27)

- [x] Confirmar que la nota «それは遥か彼方の静穏の夢» ya está registrada como DMR-029-SRC-016 y en el directorio de fuentes interactivo.
- [x] Relacionarla con las fichas editoriales ya registradas DMR-045-SRC-002 y DMR-045-SRC-005, que confirman la inclusión revisada del relato en el cuadernillo.
- [x] Añadir pruebas para mantener la fuente en CONT-AU y evitar que el escenario hipotético se use como evidencia de la línea principal.
- [x] Registrar el resultado en DMR-045 y CHARACTER_UPDATE_LEDGER.md sin reescribir personalidades, crear claims ni duplicar fuentes.
- [ ] Continuar los cinco cotejos primarios solo ante una ruta narrativa licenciada nueva y legible: Alfia, Zald, Meteria, Erebus y Rudra.
- **Cierre del subtrabajo:** completado; DMR-045 en conjunto permanece IN_PROGRESS.


## DMR-045 · Ruta BookLive para DanMachi vol. 20 (2026-10-27)

- [x] Comprobar la ficha pública de BookLive y registrar el control visible de muestra.
- [x] Añadir DMR-045-SRC-052 con estado metadata_checked_only, sin claims ni eventos.
- [x] Añadir la ruta al directorio interactivo y una regresión para comprobar su clasificación y visibilidad.
- [x] Integrar mediante [PR #177](https://github.com/jonhararagi/wordwaifu/pull/177), SHA de main a9ab02584f857a9c3fabbba59b40e8799e7aaead.
- [x] Aprobar CI de PR: [Validate #40613817357](https://github.com/jonhararagi/wordwaifu/actions/runs/40613817357) y [Lore/Integrity #40613817354](https://github.com/jonhararagi/wordwaifu/actions/runs/40613817354).
- [x] Confirmar CI post-merge sobre a9ab02584f857a9c3fabbba59b40e8799e7aaead: [Validate #40613983958](https://github.com/jonhararagi/wordwaifu/actions/runs/40613983958) y [Lore/Integrity #40613983944](https://github.com/jonhararagi/wordwaifu/actions/runs/40613983944), ambos success.
- [ ] Inspeccionar el lector normal solo si se puede abrir desde el control de BookLive y muestra texto narrativo legible; registrar un localizador reproducible si aparece.
- [ ] Continuar los cinco cotejos primarios de Alfia, Zald, Meteria, Erebus y Rudra cuando exista texto licenciable legible.
- **Límite:** DMR-045 sigue IN_PROGRESS; los metadatos no verifican apariciones, habilidades, costes, relaciones ni ausencia de personajes.


## DANMACHI-RESEARCH-054 · Hermes Familia: capacidades de Asfi y Lulune (2026-10-28)

- [x] Consultar páginas comunitarias nuevas para Asfi Al Andromeda y Lulune Louie en lugar de repetir las tandas ya cerradas.
- [x] Registrar DMR-054-SRC-001 y DMR-054-SRC-002 en el registro maestro de fuentes, con continuidad CONT-SECONDARY y sin claims/eventos.
- [x] Documentar skills, magia, equipo y limitaciones reportados para Asfi; registrar el nivel y capacidades generales que sí aparecen para Lulune.
- [x] Marcar explícitamente como no informados en el contenido consultado los nombres de magia/skills y equipo individual de Lulune que la página no enumera.
- [x] Añadir notas separadas CONT-SECONDARY al archivo interactivo y enlaces en las dos fichas, sin tocar personalidades ni el alcance CONT-ANIME.
- [x] Añadir regresión automática para las dos entradas, sus fuentes y los campos no reportados.
- [x] Aprobar los dos workflows de PR, integrar a `main` y verificar los workflows post-merge.
- **Integración:** [PR #179](https://github.com/jonhararagi/wordwaifu/pull/179), squash merge; SHA exacto de `main`: `cf1aef26f0f2f1d3b4ffe4513c0ff80f65764ef6`.
- **CI de PR sobre `809ad6ccd67e0e90c01d7c842438b1f296ae2ad5`:** [Validate WordWaifu #40727748042](https://github.com/jonhararagi/wordwaifu/actions/runs/40727748042) y [DanMachi Lore and Retrieval Integrity #40727747907](https://github.com/jonhararagi/wordwaifu/actions/runs/40727747907), ambos `success`.
- **CI post-merge sobre el SHA exacto de `main`:** [Validate WordWaifu #40728030060](https://github.com/jonhararagi/wordwaifu/actions/runs/40728030060) y [DanMachi Lore and Retrieval Integrity #40728030297](https://github.com/jonhararagi/wordwaifu/actions/runs/40728030297), ambos `success`.
- **Límite:** información comunitaria secundaria; no se crean claims, eventos, relaciones o aliases. DMR-045 conserva los cinco cotejos primarios abiertos.

## DMR-055 — Herreros de Hephaistos: Tsubaki y Welf (2026-10-28)

- [x] Elegir una cohorte nueva tras DMR-052, DMR-053 y DMR-054, sin repetir las mismas búsquedas ni reescribir personalidades.
- [x] Registrar DMR-055-SRC-001 (Tsubaki Collbrande, wiki EN) y DMR-055-SRC-002 (Welf Crozzo, wiki ES) como fuentes secundarias.
- [x] Documentar capacidades, magia/skills/equipo reportados y campos no informados en un informe dedicado.
- [x] Añadir resultados a la bitácora anti-repetición.
- [x] Integrar documentación, bitácora, fuentes e índice en `main` mediante [PR #182](https://github.com/jonhararagi/wordwaifu/pull/182).
- [x] Validar CI de PR y CI post-merge sobre el SHA exacto de `main`.
- [ ] Si se incorporan los hallazgos a las fichas interactivas, mantenerlos exclusivamente bajo CONT-SECONDARY y añadir regresión de interfaz antes de integrar.
- **SHA de main:** `25b019598e74c5f9756aa541b8e9f5f1fe7c633e`.
- **CI de PR:** [Validate #40744157365](https://github.com/jonhararagi/wordwaifu/actions/runs/40744157365) y [Lore/Integrity #40744157330](https://github.com/jonhararagi/wordwaifu/actions/runs/40744157330), ambos success.
- **CI post-merge:** [Validate #40751474055](https://github.com/jonhararagi/wordwaifu/actions/runs/40751474055) y [Lore/Integrity #40751474058](https://github.com/jonhararagi/wordwaifu/actions/runs/40751474058), ambos success sobre el SHA de main indicado.
- **Límite:** pasada documental secundaria, sin cotejo primario de novelas. Los campos omitidos solo se reabren ante fuente nueva, actualización material o pasaje primario legible.



## DANMACHI-RESEARCH-057 · Aisha, Anya y Chloe: capacidades secundarias (2026-10-29)

- [x] Consultar páginas comunitarias EN/ES de Aisha Belka, Anya Fromel y Chloe Rollo, una cohorte distinta de DMR-052/054/056.
- [x] Registrar DMR-057-SRC-001–005 en el registro maestro de fuentes y limitar la evidencia a `CONT-SECONDARY`.
- [x] Documentar magia, habilidades de desarrollo, armas y límites expresamente reportados, sin reescribir personalidades.
- [x] Registrar como no informados los nombres de skills individuales y costes que no aparecen en las páginas consultadas.
- [x] Preservar la diferencia secundaria sobre si Remiste Felis se cancela al perder Anya el conocimiento.
- [x] Añadir los resultados a la bitácora anti-repetición para evitar búsquedas idénticas en las mismas páginas.
- [x] Incorporar y verificar las notas en las fichas interactivas mediante PR #189; CI de PR y post-merge aprobadas (detalle en la sección de integración al final de esta cola).
- **Límite:** esta tanda no resuelve los cinco cotejos primarios de DMR-045; permanecen pendientes hasta obtener texto narrativo accesible. No repetir metadatos comerciales como sustituto de evidencia.


## DANMACHI-RESEARCH-057 · Aisha, Anya y Chloe — integración

- [x] Añadir la pasada secundaria estructurada, cinco rutas comunitarias y notas de límites para Aisha Belka, Anya Fromel y Chloe Rollo.
- [x] Integrar mediante [PR #188](https://github.com/jonhararagi/wordwaifu/pull/188), squash SHA de `main` `6c1ffc257e2df45d3a32facb39fe684b71994f60`.
- [x] Validar ambos workflows en el head pre-merge: [Validate #40840588616](https://github.com/jonhararagi/wordwaifu/actions/runs/40840588616) y [Lore/Integrity #40840588548](https://github.com/jonhararagi/wordwaifu/actions/runs/40840588548), ambos `success`.
- [x] Comprobar el CI post-merge del SHA exacto de integración `6c1ffc257e2df45d3a32facb39fe684b71994f60`: [Lore/Integrity #40841046104](https://github.com/jonhararagi/wordwaifu/actions/runs/40841046104) y [Validate #40841046125](https://github.com/jonhararagi/wordwaifu/actions/runs/40841046125), ambos success.
- [x] Mantener diferencia EN/ES de Remiste Felis y campos no informados; no reescribir personalidades ni elevar fuentes comunitarias a primarias.
- [x] Verificar que las capacidades secundarias de Aisha, Anya y Chloe se recuperan desde el expediente interactivo mediante [PR #189](https://github.com/jonhararagi/wordwaifu/pull/189), integrada en `main` con SHA `f50f8ab4d63fe2d57a0f0fcc057babd489be0424`. Las pruebas de modelo y browser smoke pasaron en la CI de PR.
- [x] Confirmar CI post-merge sobre el SHA exacto: [Lore/Integrity #40842144964](https://github.com/jonhararagi/wordwaifu/actions/runs/40842144964) y [Validate #40842144977](https://github.com/jonhararagi/wordwaifu/actions/runs/40842144977), ambos `success`.
- **Siguiente tarea de cohorte:** no abrir una cohorte nueva hasta registrar la conclusión del CI post-merge; luego continuar DMR-045 solo con evidencia primaria nueva y legible, sin repetir rutas ya cerradas.
- **Límite persistente:** DMR-045 continúa prioritario para cualquier nueva evidencia primaria y no se cierra por DMR-057. Los cinco cotejos de Alfia, Zald, Meteria, Erebus y Rudra siguen abiertos.

## DMR-045 — Control de repetición tras DMR-057 (2026-10-29)

- [x] Reconciliar el último estado de main: al inicio de esta revisión, SHA 8348d5610382f45f5fe30073d70f53886d259ea4; [Catalog/retrieval/browser smoke #40842395446](https://github.com/jonhararagi/wordwaifu/actions/runs/40842395446) y [validate #40842395510](https://github.com/jonhararagi/wordwaifu/actions/runs/40842395510) finalizaron en success.
- [x] Confirmar que la exposición interactiva de DMR-057 está integrada por [PR #189](https://github.com/jonhararagi/wordwaifu/pull/189), con CI post-merge #40842144964 y #40842144977 en verde sobre el SHA de integración indicado en el índice.
- [x] Revisar el estado público disponible de Yen Press Astrea Record 3, la ruta existente DMR-045-SRC-018 de Google Books volumen 20 y la ficha oficial de GA Bunko ya registrada bajo DMR-044. No se obtuvo texto narrativo nuevo: sinopsis general, índice/términos sin páginas legibles y HTTP 503, respectivamente.
- [x] Registrar la ruta comercial de Google Play Books para la edición inglesa de DanMachi vol. 20 como DMR-045-SRC-055 y exponerla en el directorio de fuentes de la aplicación. La ficha anuncia “Free sample”, pero no se abrió el lector: la herramienta de navegador no llegó a iniciar por insufficient_credits y la extracción web no pudo abrir la URL directa.
- [ ] Reintentar la muestra de SRC-055 solo cuando la sesión pública autorizada pueda abrir el lector normalmente; no tratar la insuficiencia de créditos como fallo del distribuidor ni como evidencia narrativa. SRC-018 y SRC-055 comparten identificador del producto y no constituyen corroboración independiente.
- [x] Evitar IDs y claims duplicados; no crear hechos, eventos, relaciones o alias ni modificar personalidades.
- [ ] Reanudar los cinco cotejos primarios únicamente cuando una edición licenciada muestre narración legible o una nueva fuente oficial resuelva un punto concreto. Mantener Alfia, Zald, Meteria, Erebus y Rudra en HOLD_FOR_PRIMARY_SOURCE; no iniciar expansión de Orario mientras tanto.

## Verificación de integración — puerta de evidencia DMR-045 (PR #190, 2026-10-29)

- PR [#190](https://github.com/jonhararagi/wordwaifu/pull/190) fusionada por squash; SHA exacto de main 779980733c3f27ee5d9cb2f7adc2705d9ccadfaf.
- **CI pre-merge sobre a05567f854d8db7704403d9badaadda15b84316b:** [Catalog/retrieval/browser smoke #40857051535](https://github.com/jonhararagi/wordwaifu/actions/runs/40857051535) y [validate #40857051732](https://github.com/jonhararagi/wordwaifu/actions/runs/40857051732), success.
- **CI post-merge sobre el SHA exacto 779980733c3f27ee5d9cb2f7adc2705d9ccadfaf:** [Catalog/retrieval/browser smoke #40857268146](https://github.com/jonhararagi/wordwaifu/actions/runs/40857268146) y [validate #40857268310](https://github.com/jonhararagi/wordwaifu/actions/runs/40857268310), success.
- **Límite persistente:** DMR-045 sigue IN_PROGRESS; los cinco expedientes continúan HOLD_FOR_PRIMARY_SOURCE. No se abren tareas nuevas de Orario por esta integración documental.

## Integración de DMR-045-SRC-055 — PR #192 (2026-10-29)

- [x] Registrar en fuentes y directorio de la aplicación la ficha de Google Play Books de DanMachi vol. 20 como ruta licenciada `metadata_checked_only`, sin claims/eventos y sin tratar el error de herramientas como fallo del lector.
- [x] Integrar mediante [PR #192](https://github.com/jonhararagi/wordwaifu/pull/192), squash SHA exacto de `main` `6eb2db0161848de320c75abf7cc0241565a1644f`; head de PR verificado: `fbd4c6fef0d65066ec53b39ea22b9d4bc5377dfa`.
- [x] CI pre-merge: [Validate WordWaifu #40862116846](https://github.com/jonhararagi/wordwaifu/actions/runs/40862116846) y [DanMachi Lore and Retrieval Integrity #40862116852](https://github.com/jonhararagi/wordwaifu/actions/runs/40862116852), ambos `success`.
- [x] CI post-merge sobre el SHA exacto `6eb2db0161848de320c75abf7cc0241565a1644f`: [Validate WordWaifu #40862327265](https://github.com/jonhararagi/wordwaifu/actions/runs/40862327265) y [DanMachi Lore and Retrieval Integrity #40862327234](https://github.com/jonhararagi/wordwaifu/actions/runs/40862327234), ambos `success`.
- [ ] Reabrir la investigación del texto solo cuando una sesión autorizada exponga páginas narrativas licenciadas legibles y un localizador reproducible. Alfia, Zald, Meteria, Erebus y Rudra permanecen en `HOLD_FOR_PRIMARY_SOURCE`; Orario sigue pospuesto.

## DMR-045 — ruta de muestra dBook para Astrea Record 3 (2026-10-29)

- [x] Localizar una ruta nueva de distribuidor para la edición japonesa de Astrea Record 3: [dBook / NTT DOCOMO](https://dbook.docomo.ne.jp/item/b1b573a541fb926b318d941d5c6181ceb595f28a264a162b9eb0c6f0d3f66cc9/2000/); la ficha anuncia 試し読み y atribuye la obra a Fujino Omori / SB Creative・GA Bunko.
- [x] Seguir la acción de muestra. El destino es [el lanzador dBook](https://dbook.docomo.ne.jp/applaunch/view/?launch=app&pid=b1b573a541fb926b318d941d5c6181ceb595f28a264a162b9eb0c6f0d3f66cc9); la extracción web devolvió cero líneas y ninguna página narrativa. No confundir este resultado con un fallo general del lector.
- [x] Registrar DMR-045-SRC-056 como `metadata_checked_only`, sin claims/eventos, exponer la ruta en `src/lore-corpus.js` y añadir una prueba de regresión de su presencia y límites.
- [ ] Reintentar solo cuando una sesión normal y autorizada pueda mostrar páginas narrativas legibles y un localizador reproducible. No repetir la inspección de la ficha comercial como sustituto de leer el texto.
- [ ] Mantener abiertos los cinco cotejos primarios: Alfia (habilidades/costes/escenas), Zald (técnica, Udaeus y enfrentamiento con Ottar), Meteria (identificación/maternidad/parentesco sin inferir al padre de Bell), Erebus (novelización separada del juego) y Rudra (responsabilidad personal no inferida de actos colectivos).
- **Límite:** esta ruta nueva mejora las opciones de consulta manual, pero no resuelve ninguno de los cinco huecos. No se cambian personajes, claims, relaciones, eventos, alias ni personalidad; Orario permanece pospuesto.

## Verificación de integración — DMR-045-SRC-056 / PR #196 (2026-10-29)

- [x] Integrar la nueva ruta dBook de Astrea Record 3 mediante [PR #196](https://github.com/jonhararagi/wordwaifu/pull/196), squash SHA `7b2da61c4b3353cf9eb1998f70f6cd4b6cbf0d91`; `main` fue consultado y apunta a ese SHA.
- [x] CI pre-merge del head `19777ba299a968777e8e77b5e87c612038fa4caa`: [Validate #40897980797](https://github.com/jonhararagi/wordwaifu/actions/runs/40897980797) y [DanMachi Lore/Integrity #40897980663](https://github.com/jonhararagi/wordwaifu/actions/runs/40897980663), ambos success (el segundo tras reintento).
- [x] CI post-merge sobre `7b2da61c4b3353cf9eb1998f70f6cd4b6cbf0d91`: [Validate #40898517407](https://github.com/jonhararagi/wordwaifu/actions/runs/40898517407) y [DanMachi Lore/Integrity #40898517371](https://github.com/jonhararagi/wordwaifu/actions/runs/40898517371), ambos success. Validate pasó en el segundo intento después de un timeout de 10 s al cargar retratos remotos en el primer intento; el cambio dBook pasó también su prueba de directorio de fuentes.
- [ ] Retomar los cotejos narrativos primarios solo si una edición licenciada ofrece texto legible y localizador reproducible o aparece una fuente oficial nueva que resuelva una pregunta. Alfia, Zald, Meteria, Erebus y Rudra siguen `HOLD_FOR_PRIMARY_SOURCE`; no iniciar Orario todavía.

**Resultado limitado:** se integró la ruta de acceso; no se obtuvo narración. DMR-045 continúa `IN_PROGRESS`.

## DMR-045-SRC-057 — entrevista autoral sobre posibles planes futuros (2026-10-29)

- [x] Revisar la entrevista pública de LN News Online a Fujino Omori publicada el 2024-12-15, en la sección final sobre proyectos futuros de Zeus/Hera.
- [x] Registrar DMR-045-SRC-057 como fuente primaria de intención editorial, no como texto narrativo; exponerla en el directorio de fuentes y añadir una regresión sobre alcance y continuidad.
- [x] Registrar que una entrega de Familia Chronicle sobre Zeus o quizá Meteria es una posibilidad futura sin fecha confirmada; no derivar hechos de la ficción.
- [ ] Mantener abiertos los cinco cotejos primarios: Alfia (habilidades/costes/escenas), Zald (técnica/Udaeus/Ottar), Meteria (maternidad/parentesco en narración primaria), Erebus (novelización separada del juego) y Rudra (responsabilidad personal).
- **Límite:** no se añadieron claims, relaciones o eventos. Orario continúa pospuesto.

## Verificación de integración — DMR-045-SRC-057 / PR #199 (2026-10-29)

- [x] Integrar la entrevista de autor como fuente de contexto editorial, sin claims narrativos, con regresión del directorio in-app.
- [x] Fusionar [PR #199](https://github.com/jonhararagi/wordwaifu/pull/199) por squash; SHA de main verificado: 65c4eb53d50e16c8bcca48393e51e35ebd5bc360.
- [x] CI pre-merge: [Validate #40911237809](https://github.com/jonhararagi/wordwaifu/actions/runs/40911237809) y [Lore/Integrity #40911237807](https://github.com/jonhararagi/wordwaifu/actions/runs/40911237807), ambos success sobre el head 38eee8702e5d98fadcc160c8a7604eab1a6a42ab.
- [x] CI post-merge del SHA exacto: [Validate #40911471211](https://github.com/jonhararagi/wordwaifu/actions/runs/40911471211) y [Lore/Integrity #40911471327](https://github.com/jonhararagi/wordwaifu/actions/runs/40911471327), ambos success.
- **Nota de CI:** el primer intento post-merge de Validate expiró al esperar la imagen remota del retrato de Ryuu en el smoke de navegador (5 s, línea 517); solo se repitió ese job y el segundo intento pasó.
- **Límite:** la entrevista no es narración y no resuelve ninguno de los cinco cotejos de DMR-045. Orario sigue pospuesto.


## DMR-059 — Finn Deimne, Riveria Ljos Alf y Gareth Landrock

- [x] Reutilizar `CHAR-FINN-DEIMNE`, `CHAR-RIVERIA-LJOS-ALF` y `CHAR-GARETH-LANDROCK`; no crear identidades nuevas ni alterar sus perfiles oficiales de adaptación.
- [x] Registrar cinco referencias comunitarias DMR-059-SRC-001–005 con idioma, URL, alcance y límites.
- [x] Registrar el conflicto EN/ES de Finn (piso alcanzado 61 frente a 59) sin elegir una versión por intuición.
- [x] Separar las nueve magias de falna de Riveria de Flare Burn, descrita aparte como magia congénita.
- [x] Añadir notas recuperables bajo `CONT-SECONDARY` y pruebas de aislamiento frente a `CONT-ANIME`, `CONT-SO` y `CONT-MAIN-LN`.
- [ ] Cotejo narrativo primario de cada mecánica pendiente; los costes numéricos y localizadores no reportados permanecen ausentes.
- **Límite persistente:** DMR-045 continúa abierto y sus cinco cotejos primarios siguen pendientes. No repetir las páginas de Finn/Riveria/Gareth para buscar campos que no enumeran; reabrir solo ante fuente nueva, actualización material o pasaje licenciado legible.


### Verificación de integración — DMR-059 (PR #204, 2026-10-29)

- [x] Integrar el dossier de Finn Deimne, Riveria Ljos Alf y Gareth Landrock; reutilizar IDs y mantener los datos en `CONT-SECONDARY`.
- [x] Registrar la discrepancia EN/ES de Finn (piso 61 frente a 59) y separar Flare Burn congénita de las nueve magias de falna de Riveria.
- [x] Fusionar [PR #204](https://github.com/jonhararagi/wordwaifu/pull/204) por squash; SHA exacto de integración en `main`: `6c62170dee51ec7a57b87dff4e0e0d189dadc2bc`.
- [x] CI pre-merge sobre el head `54717ffae9f3e7cc00357da06eef5b8da5d67800`: [Validate WordWaifu #40952467958](https://github.com/jonhararagi/wordwaifu/actions/runs/40952467958) y [DanMachi Lore and Retrieval Integrity #40952468323](https://github.com/jonhararagi/wordwaifu/actions/runs/40952468323), ambos `success`.
- [x] CI post-merge sobre el SHA exacto `6c62170dee51ec7a57b87dff4e0e0d189dadc2bc`: [Validate WordWaifu #40952682496](https://github.com/jonhararagi/wordwaifu/actions/runs/40952682496) y [DanMachi Lore and Retrieval Integrity #40952682505](https://github.com/jonhararagi/wordwaifu/actions/runs/40952682505), ambos `success`.
- [ ] Mantener pendiente el cotejo narrativo primario de las mecánicas y los costes no reportados; no repetir las mismas páginas sin evidencia nueva.
- **DMR-045:** permanece abierto; los cinco cotejos primarios no cambian.


#### Aclaración de evidencia sobre la pasada individual del 2026-10-29

- PR [#207](https://github.com/jonhararagi/wordwaifu/pull/207) quedó integrada en `main` por `720d7c3ac1c9e9d02696510de97b8cc19289b8b0`; sus dos workflows pre-merge finalizaron `success` sobre el head `d265131abb3d57e9f6d8a7432a21f80aea007db3`.
- **Límite de honestidad:** la PR documenta las rutas y hallazgos por personaje, pero no guarda marcas horarias ni evidencia que permita demostrar que cada personaje recibió efectivamente 5–10 minutos. No presentar la duración como verificada. El signo `+` solo acredita que existe una pasada pública documentada.
- **Hallazgo adicional posterior:** DMR-045-SRC-009 permite registrar que el padre de Bell era un *supporter* de Zeus Familia, sin nombre; la madre era la hermana menor de Alfia. Omori confirma el resumen del entrevistador. Sigue siendo `CONT-GAME`; no identifica a Meteria por nombre.


## DMR-060 / DMR-061 — revisión de volúmenes 1 y 2 en cinco pasadas

- [x] Completar la primera pasada de lectura narrativa secuencial hasta V1 PDF p. 214 y V2 PDF p. 243, con límites de extracción indicados en los informes.
- [x] Crear registros temporales independientes para nueve acontecimientos adicionales de V1 y siete ampliaciones/segmentaciones de V2; mantener siete eventos V2 anteriores con sus IDs y separar traición, rescate y reencuentro.
- [x] Añadir a la cronología offsets relativos exactos: una semana después de Udaeus (rumor de Ais), tres días antes de visita a Naaza, un día antes de incursión al piso 10 y dos días después del rescate para recontratación; conservar «unos días» en pisos 8–9 sin inventar cifra.
- [x] Corregir crédito de traducción: Sorotrans (inglés), Mugetsu123 (traducción inglés-español/corrección/edición); Kurosaki-Vizard es marca de agua.
- [ ] Completar la inspección visual de todas las ilustraciones y fichas de ambos PDF, registrando página física y detalle extra.
- [ ] Releer y cotejar sistemáticamente los pasajes iniciales V1 pp. 1–140 con los eventos y personajes existentes, sin duplicar Arrival/Minotaur ni otras IDs.
- [ ] Auditar las fichas de Bell, Hestia, Liliruca, Ais, Freya y Eina, Estados de Falna, equipo, atributos, relaciones y localizadores exactos. No marcar + por esta extracción grupal.
- [ ] Ejecutar tests de cronología/recuperación, validadores y workflows CI; solo después integrar por PR en main.
- **Estado:** IN_PROGRESS; primera pasada sustancial completada, pasadas 2–5 pendientes.

## Continuación independiente DMR-061 · Solo Volumen 1 (2026-10-30)

- [x] Mantener la extracción de la novela principal en `lore/danmachi/volumes/main/`, separada de carpetas de búsqueda web/wikis y de otras continuidades, para utilizarla luego como corpus de contraste.
- [x] Retomar la lectura desde PDF p. 11 y registrar pp. 11–18 sin duplicar el evento Bell–Ais–Minotauro; el ID existente `EVT-DM-BELL-AIS-MINOTAUR-001` conserva el localizador actualizado.
- [x] Continuar con pp. 19–24: reputación de Ais comunicada por Eina, consejo profesional/personal de Eina, canje de 1.200 Varisu, pasado e ideal heroico de Bell y llegada a una iglesia deteriorada sin identificación todavía.
- [x] Actualizar el evento existente `EVT-DM-EINA-ADVISOR-001` con el localizador de novela principal pp. 16–21 y 23, sin mezclar su perfil CONT-ANIME ni inferir reciprocidad romántica.
- [x] Inspeccionar visualmente PDF p. 22; registrar descripción sin asignar identidad por semejanza contextual.
- [x] Leer secuencialmente PDF pp. 25–30 e inspeccionar visualmente los seis folios completos; son páginas de texto continuo, sin ilustraciones.
- [x] Enlazar el recuerdo del primer encuentro Bell–Hestia (PDF p. 29) al evento existente `EVT-DM-BELL-MEETS-HESTIA-001`, sin crear ID duplicado.
- [x] Registrar la actualización de Estado de Bell en PDF pp. 30–36 como evento separado `EVT-DM-V01-HESTIA-UPDATES-BELL-AFTER-MINOTAUR-001`, sin confundirla con la concesión inicial de Falna (pp. 211–214) ni con la actualización y entrega de daga (pp. 193–196).
- [x] Cerrar el checkpoint secuencial PDF pp. 25–30; al cierre de ese bloque el siguiente folio era p. 31. La continuación pp. 31–36 quedó completada en las tareas posteriores de esta misma cola.
- [ ] Inspeccionar a página completa las pp. 19–21 y 23–24; separar este trabajo de la lectura textual ya hecha.
- [ ] Seguir cotejando el texto inicial con eventos, personajes, vínculos, objetos y cronología ya existentes; actualizar los registros de canon primario y no crear IDs duplicados.
- [ ] Completar después el cotejo individual de fichas y la comparación con el corpus web/secundario; no añadir `+` por esta pasada grupal.
- [x] Continuar lectura secuencial desde PDF p. 31 hasta p. 36; registrar snapshot de Estado de p. 33 y Habilidad desde POV de Hestia en pp. 35–36.
- [x] Leer secuencialmente PDF pp. 37–42 e inspeccionar los seis folios a página completa; no asignar identidad a la figura de p. 37 ni a la joven de p. 42 sin confirmación textual.
- [x] Leer secuencialmente PDF pp. 43–48; confirmar por diálogo el nombre Seal Flover, crear ficha y evento de primer encuentro; mantener abierta la pelea contra Kobolds porque p. 48 no muestra su desenlace.
- [x] Leer secuencialmente PDF pp. 49–54; cerrar la pelea contra Kobolds en p. 49, registrar fragmentos de Piedra Mágica y garra, información del Dungeon, Goblin/diente y snapshot de Estado en p. 54.
- [x] Continuar lectura secuencial desde PDF p. 55 hasta p. 72; los bloques pp. 55–60, 61–66 y 67–72 están documentados en el dossier de volumen y en DANMACHI-RESEARCH-061.
- [x] Registrar el evento independiente `EVT-DM-V01-BELL-HEARS-LOKI-RETELL-MINOTAUR-001` para la escena de la taberna, enlazado al rescate original sin duplicar el combate; verificar archivo, índice, catálogo y registro de fuentes.
- [x] Continuar lectura secuencial desde PDF p. 73 hasta p. 106; siguiente folio pendiente: p. 107.
- [ ] Completar inspección visual a página completa de pp. 19–21, 23–24 y 49–54; para pp. 67–72, en esta verificación el lector de archivos solo devolvió la imagen embebida de p. 70 y reportó imágenes no disponibles para pp. 67–69 y 71–72. No marcar esas cinco páginas como reinspeccionadas visualmente en esta sesión.
- **Integración anterior:** pp. 19–24 integradas mediante PR [#210](https://github.com/jonhararagi/wordwaifu/pull/210), squash SHA `042e302ef8fc18495c41ca8c8a0a9c74a6714a7d`; CI pre y post-merge `success`, registrados en `docs/STATUS.md`.
- **Checkpoint pp. 25–30:** PR [#211](https://github.com/jonhararagi/wordwaifu/pull/211) integrada por squash, SHA de `main` `fd201fc6f1825299630d2ef04d4436fa02f50d60`. CI pre-merge sobre HEAD `69ed2d6a69a1ed1fc1d280cf253500fb873a119e`: Validate [#41053605873](https://github.com/jonhararagi/wordwaifu/actions/runs/41053605873) y Lore/Integrity [#41053605851](https://github.com/jonhararagi/wordwaifu/actions/runs/41053605851), ambos `success`. CI post-merge sobre SHA exacto: Validate [#41054208200](https://github.com/jonhararagi/wordwaifu/actions/runs/41054208200) y Lore/Integrity [#41054208192](https://github.com/jonhararagi/wordwaifu/actions/runs/41054208192), ambos `success`.
- **Checkpoint pp. 31–36:** PR [#212](https://github.com/jonhararagi/wordwaifu/pull/212) integrada por squash, SHA de `main` `30ace01e17d94d5eeaa23424bcba10fc7028329a`. CI pre-merge sobre HEAD `3242b98c8520a435f853286d28e44b3b374f07f5`: Validate [#41056002967](https://github.com/jonhararagi/wordwaifu/actions/runs/41056002967) y Lore/Integrity [#41056002935](https://github.com/jonhararagi/wordwaifu/actions/runs/41056002935), ambos `success`. CI post-merge sobre SHA exacto: Validate [#41056197850](https://github.com/jonhararagi/wordwaifu/actions/runs/41056197850) y Lore/Integrity [#41056197884](https://github.com/jonhararagi/wordwaifu/actions/runs/41056197884), ambos `success`.
- **Checkpoint pp. 37–42:** PR [#213](https://github.com/jonhararagi/wordwaifu/pull/213) integrada por squash, SHA de `main` `3a0702faecfd817219717d3ab340ef2a269ca671`. CI pre-merge sobre HEAD `aa60e3db255822d68a7d34a4a1dd28024300b1ba`: Validate [#41056686864](https://github.com/jonhararagi/wordwaifu/actions/runs/41056686864) y Lore/Integrity [#41056686938](https://github.com/jonhararagi/wordwaifu/actions/runs/41056686938), ambos `success`. CI post-merge sobre SHA exacto: Validate [#41056932254](https://github.com/jonhararagi/wordwaifu/actions/runs/41056932254) y Lore/Integrity [#41056932256](https://github.com/jonhararagi/wordwaifu/actions/runs/41056932256), ambos `success`.

### Registro horario de la sesión · 2026-10-30 (Argentina, UTC−03:00)
- **Inicio:** 10:03:52.
- **Límite de trabajo:** 10:09:52 (seis minutos desde el inicio).
- **Alcance:** continuación del Volumen 1 desde PDF p. 49; cerrar con un checkpoint de lectura, visual, cambios, estado GitHub y siguiente página.
- **Regla de cierre:** no comenzar otro bloque después de 10:09:52; guardar el estado y esperar la siguiente confirmación.
- **Cierre de sesión:** 10:09:52 (hora de Argentina). Se guarda este checkpoint y se detiene el trabajo hasta nueva confirmación.

### Checkpoint de lectura primaria DMR-061 · PDF pp. 55–60
- **Estado:** bloque narrativo leído y documentado; lectura secuencial siguiente: PDF p. 61.
- **Contenido incorporado:** reacción de Bell al Estado del día; silencio/enfado de Hestia y su salida a una fiesta laboral; identificación del local de Seal como La Señora de la Abundancia; primera entrada de Bell, asiento apartado, intervención de «Mia mama» y cifras económicas expresadas por Bell.
- **Pendiente de catalogación:** revisar si ya existe un evento para la primera visita de Bell al local antes de crear cualquier ID. No crear fichas individuales a partir de la observación grupal del personal.
- **Precisión de stats:** el «29» mencionado por Bell en p. 55 es compatible con el incremento I 13 → I 42 de p. 54; conservarlo como incremento interpretado y no como valor total independiente.
- **Inspección visual:** PDF pp. 55–60 renderizadas e inspeccionadas; seis folios de texto continuo, sin ilustraciones. El sistema de lectura de archivos no entregó imágenes embebidas, por lo que se renderizaron desde el PDF local.
- **Sesión horaria (Argentina, UTC−03:00):** inicio 10:18:01; límite de seis minutos 10:24:01. Cierre y estado final se añaden al terminar la sesión. La sesión no autoriza continuar después del límite.
- **Otras tareas aún abiertas:** cinco pasadas; visual pp. 19–21 y 23–24; cotejo individual completo; contraste web secundario separado; revisión pendiente de PR #209 sin mezclarla con esta extracción V1.

### Checkpoint de lectura primaria DMR-061 · PDF pp. 61–66
- **Estado:** páginas leídas secuencialmente; próximo folio PDF p. 67.
- **Contenido:** Bell paga su pasta y describe los gastos de su equipo; Seal explica datos de la taberna y de su jefa Mia; entra un grupo de la Familia Loki; Bell reconoce a Ais y oye a los aventureros contar el rescate del Minotauro y la historia del «chico tomate».
- **Personajes/entidades:** existe CHAR-MIA-GRAND, pero su alcance actual es CONT-ANIME; no introducir su apellido, nivel o datos de adaptación como hechos de CONT-MAIN-LN. El texto de p. 62 solo dice «Mia». No crear fichas por la observación grupal de empleados ni por el hombre bestia sin nombre.
- **Eventos:** pp. 65–66 amplían como relato posterior el mismo rescate ya registrado en EVT-DM-BELL-AIS-MINOTAUR-001; no crear otro ID para ese combate. La visita de Bell a la taberna queda como evento candidato pendiente de catálogo y posterior decisión de registro.
- **Inspección visual:** PDF pp. 61–66 renderizadas a 110 dpi e inspeccionadas; son páginas de texto continuo, sin ilustraciones.
- **Otras tareas abiertas:** cinco pasadas; inspección visual pp. 19–21, 23–24 y 49–54; cotejos individuales y contraste secundario separado; revisión PR #209 sin mezclarla con DMR-061.


### Checkpoint DMR-061 · Volumen 1, PDF pp. 67–72 · sesión confirmada
- **Estado narrativo:** lectura secuencial completada hasta PDF p. 72; siguiente folio: p. 73.
- **Estado documental verificado:** el dossier `lore/danmachi/volumes/main/volume-01.md` y el informe `DANMACHI-RESEARCH-061-volume-01-event-extraction.md` contienen el bloque pp. 67–72. El evento `EVT-DM-V01-BELL-HEARS-LOKI-RETELL-MINOTAUR-001` existe en `events/timeline/`; también está referenciado en `00-registro-fuentes.md`, `03-indice-eventos.md`, `00-indice-candidatos.md` y `catalog.json`.
- **Hallazgos:** Bate se burla de Bell; Riveria le recuerda que el escape del Minotauro fue responsabilidad de Loki Familia; Ais no responde verbalmente a la pregunta hipotética sobre Bell; Bell se marcha. Desde su perspectiva, Ais reconoce a Bell y su nombre resuena en ella, sin confirmación romántica. Loki abraza/toca a Ais, que la aparta y la abofetea; Bate acaba atado. Bell corre llorando y decide fortalecerse contra su propia debilidad, no por venganza.
- **Continuidad:** CONT-MAIN-LN, DMR-061-SRC-001, traducción privada no cotejada con japonés. El relato de pp. 65–66 sigue enlazado al rescate original; el evento nuevo representa la escena posterior de la taberna, no otro combate.
- **Inspección visual comprobable en esta sesión:** el lector devolvió la ilustración de p. 70 (Loki abrazando a Ais). Indicó que las imágenes de pp. 67–69 y 71–72 no estaban disponibles. No se declara inspección visual completa de las seis páginas basándose solo en texto extraído.
- **GitHub:** el checkpoint narrativo ya estaba presente en el dossier y en el informe; esta actualización completa la cola. La rama de trabajo está 38 commits por delante de `main`, sin retraso. No se ha abierto PR ni ejecutado CI/pruebas en esta sesión; no integrar hasta validar el head y sus workflows.
- **Pendiente:** inspecciones visuales pp. 19–21, 23–24 y 49–54; cinco pasadas, cotejo individual de fichas y contraste secundario separado. No marcar personajes con `+`.
- **Próxima acción:** continuar desde PDF p. 73, sin reabrir pp. 67–72 salvo discrepancia concreta.

### Registro horario de sesión primaria · 2026-10-30 (Argentina, UTC−03:00)
- Inicio: 11:15:21.
- Límite de seis minutos: 11:21:21.
- Cierre: checkpoint guardado antes del límite; siguiente folio PDF p. 67.
- Regla: detener la sesión al llegar al límite y esperar nueva confirmación.


### Checkpoint DMR-061 · Volumen 1, PDF pp. 73–96 · sesión 2026-10-30
- **Inicio registrado (Argentina, UTC−03:00):** 12:09:55. **Cierre operativo previsto:** antes de 12:16:55; trabajo de lectura detenido al alcanzar aproximadamente seis minutos.
- **Lectura:** páginas físicas PDF 73–96 completadas. Siguiente folio exacto: p. 97.
- **Registro histórico (rectificado el 2026-10-31):** en aquella sesión se añadió el bloque pp.73–96 al dossier auxiliar `volumes/main/volume-01.md` y al informe `research/inbox/DANMACHI-RESEARCH-061-volume-01-event-extraction.md`. El dossier auxiliar fue eliminado después por la limpieza intencional de la carpeta en el commit [`c1a4b9298c8118534f6babf5a5324b873e51c41c`](https://github.com/jonhararagi/wordwaifu/commit/c1a4b9298c8118534f6babf5a5324b873e51c41c), para reservarla a las cargas originales. En el `main` actual, la extracción se conserva en DMR-061 y los registros vinculados; no restaurar el dossier en la carpeta de fuentes.
- **Snapshot p. 91:** Lv. 1; Fuerza H 123 → G 221; Resistencia I 42 → H 101; Destreza H 139 → G 232; Agilidad G 225 → F 313; Magia I 0. [Deseo Inquebrantable] sigue siendo conocimiento de Hestia/lector; Hestia oculta deliberadamente nombre y existencia a Bell. Bell recibe solo la explicación de crecimiento extraordinariamente rápido.
- **Eventos aún no creados:** revisar y separar adecuadamente (a) excursión nocturna/War Shadows pp. 76–85, (b) regreso y cuidado pp. 87–90, (c) actualización, explicación parcial y promesa pp. 91–96. Revisar además si Eina asesora a Bell existente debe ampliar localizadores a pp. 74–76. No asignar IDs hasta comprobar límites/cronología y evitar duplicados.
- **Visual (rectificado el 2026-10-31):** la hoja de contactos de pp.73–96 se había interpretado como portadillas/ilustraciones en pp.73, 79 y 86. La renderización directa confirma p.73 como portadilla y p.79 como texto continuo, no imagen; la clasificación de p.79 queda corregida. p.86 no se reexaminó en esta tanda y su figura permanece sin identidad asignada. Se mantienen pendientes revisiones visuales completas anteriores de pp.19–21, 23–24 y 49–54.
- **Continuidad/fuente:** solo CONT-MAIN-LN y DMR-061-SRC-001, traducción privada no cotejada con japonés. No se usaron wikis para completar escenas; no hay marcas `+`.
- **Verificación técnica:** no se ejecutaron pruebas locales ni CI en esta sesión. No PR ni merge. Verificar los commits resultantes y distancia exacta con `main` en la siguiente sesión.
- **Estado de partida:** el checkpoint de pp. 67–72 y el evento de la taberna ya estaban presentes antes de esta sesión; no se releyeron ni duplicaron. `main` se mantuvo en el SHA comprobado al inicio.
- **Próximo paso:** desde p. 97, tras revisar HEAD/cola y considerar la catalogación de los tres eventos candidatos descritos arriba.



### Checkpoint DMR-061 · Volumen 1, PDF pp. 97–106 · sesión 2026-10-30
- **Inicio (Argentina, UTC−03:00):** 14:23:13. **Minuto 6:** 14:29:13; se detuvo la lectura en ese umbral. **Límite de 7 minutos:** 14:30:13.
- **Lectura y tres pasadas:** primera extracción de pp. 97–106; segunda revisión de texto y hoja de contactos renderizada a 110 dpi (diez páginas de texto, sin ilustraciones); tercera auditoría de continuidad con índices y dossiers existentes.
- **Hallazgos a registrar en volume-01.md y en DANMACHI-RESEARCH-061-volume-01-event-extraction.md:** Hestia sale esa noche y quizá un par de días para ver viejos amigos; permite a Bell volver al Dungeon, pero le exige prudencia por la rodilla. Bell visita por segunda vez La Señora de la Abundancia, pide disculpas a Seal y paga lo pendiente; Seal le entrega comida preparada para animarlo. Mia aconseja priorizar sobrevivir y no aparentar ser fuerte; menciona que Seal intentó perseguirlo y que Ryu estuvo a punto de tomar medidas, pero la fuente no aclara qué haría Ryu. Una empleada nekomusume y una elfa no quedan identificadas por nombre. Bell toma el consejo como motivación para fortalecerse sin sobreexigirse.
- **pp. 102–105:** vista nocturna de Orario/Babel y Banquete de Ganesha. Ganesha anuncia la Philia dentro de tres días, pero la frase siguiente de la traducción es ambigua. Hestia asiste y come del buffet; las burlas de asistentes anónimos sobre su trabajo no se convierten en datos biográficos confirmados.
- **p. 106:** Hestia se reúne con Hephaistos. La traducción la describe con cabello rojo largo, vestido rojo, pendiente dorado y parche sobre el ojo derecho. Se afirma que Hephaistos cuidó de Hestia antes de Bell y que la falta de Familia/trabajo de Hestia en Orario redujo la confianza de Hephaistos. La conversación queda abierta.
- **Continuidad:** la segunda visita a Seal es candidata de evento independiente de los encuentros de pp. 42–46 y 57–72. El Banquete de pp. 104–106 podría ser la misma reunión de Ganesha registrada en pp. 170–173; no duplicar ni fusionar hasta leer la secuencia y comprobarlo. No transferir el nivel/epíteto de Mia desde CONT-ANIME; no identificar a la nekomusume; no inferir la acción de Ryu; no confundir el encuentro de Hephaistos con la entrega de la daga de pp. 145–146.
- **Estado de escritura:** la actualización de volume-01.md y del informe DMR-061 intentó ejecutarse pero la herramienta bloqueó la operación; no afirmar que esos dos archivos fueron modificados. Este checkpoint de la cola preserva los hallazgos y el punto de recuperación.
- **Pruebas:** render e inspección visual de diez páginas completados; sin pruebas de código ni CI. No PR ni merge. main no fue modificada.
- **Próximo folio:** PDF p. 107. Antes de continuar, copiar los hallazgos de este checkpoint a volume-01.md y al informe DMR-061, verificar los tres documentos y confirmar HEAD/cola. Cinco pasadas generales aún abiertas; no marcar personajes con +.

### Reconciliación documental DMR-061 · PDF pp. 97–106 · sesión 2026-10-30
- **Comprobación de estado:** el dossier `lore/danmachi/volumes/main/volume-01.md` ya contenía la sección pp. 97–106 en el HEAD consultado; su escritura no estaba pendiente en el estado real de la rama, pese a la nota de cierre previa. No se duplicó ni se volvió a modificar.
- **Sincronización completada:** se añadió la sección pp. 97–106 a `lore/danmachi/research/inbox/DANMACHI-RESEARCH-061-volume-01-event-extraction.md`; commit `e44efef657f60d388b9e4c50ef4c7a8d025ee4e7`. La lectura posterior confirmó la sección y el próximo folio p. 107.
- **Alcance de esta reconciliación:** no se crearon eventos nuevos, no se modificaron personajes ni índices, no se añadieron marcas `+`.
- **Inicio de sesión bajo protocolo ampliado:** 14:41:05 (Argentina, UTC−03:00). Duración objetivo: 10 minutos. En esta sesión se priorizó reconciliar el estado GitHub real antes de avanzar.
- **Siguiente paso:** continuar desde PDF p. 107, objetivo p. 107–116, tres pasadas. Mantener pendiente la catalogación de la segunda visita a Seal y la comparación del Banquete con pp. 170–173.

### Checkpoint DMR-061 · Volumen 1, PDF pp. 107–116 · sesión 2026-10-30
- **Inicio (Argentina, UTC−03:00):** 14:41:05. **Duración objetivo:** 10 minutos según el protocolo ampliado.
- **Lectura secuencial:** PDF pp. 107–116 leídas. Próxima página exacta: p. 117.
- **Tres pasadas:** (1) extracción de p. 107–115 y lectura de la ilustración de p. 116; (2) relectura/auditoría de diálogos, secuencia del banquete y examen visual de las diez páginas renderizadas a 110 dpi, incluida inspección completa de p. 116; (3) cotejo con catálogo, fichas e índice/eventos para evitar duplicados y mantener los límites de CONT-MAIN-LN.
- **Hallazgos:** se amplía la historia de la ayuda de Hephaistos a Hestia (casa oculta en una iglesia y organización de su trabajo); Freya aparece durante el banquete, después llega Loki; Hestia pregunta por Ais y Loki declara que la considera su amada, sin que ello pruebe una relación formal de Ais; Hestia y Loki protagonizan un forcejeo de tono cómico; Freya recuerda a Bell por la descripción de cabello blanco y ojos rojos y dice que ya confirmó lo que quería escuchar; Hestia pide a Hephaistos un arma para Bell (p. 115), sin que en este bloque aparezcan la respuesta ni los términos.
- **Continuidad/eventos:** pp. 104–115 continúan el banquete iniciado en pp. 103–106. Es distinto de la respuesta de Ganesha a las fugas de monstruos en pp. 170–173, que pertenece a la secuencia posterior del Festival de Monstruos. La petición de p. 115 queda como antecedente potencial de `EVT-DM-V01-HEPHAISTOS-GIVES-DAGA-HESTIA-001` (entrega pp. 145–146); no se crea otro evento ni se da por entregada el arma. Reutilizadas las fichas existentes de Hestia, Loki y Freya; Hephaistos aún no tiene ficha independiente en el catálogo consultado.
- **Ilustración:** p. 116 es una portadilla monocroma del capítulo 5 con el título japonés 女神のイタズラ. La figura se describe visualmente, pero queda sin identidad asignada.
- **GitHub:** `volume-01.md` e informe DMR-061 contienen pp. 107–116; ambos cambios se releen desde GitHub. Últimos commits de esta tanda: volumen `35db10bc0db43bc240cf0368a91562e042c7bdb9`; informe `1a971ae690608dc42ef2a50cd9e0347c4a38b0fd`. No se modificaron fichas de personajes, índice de eventos ni catálogo; no hay marcas `+`.
- **Pendiente:** leer la respuesta de Hephaistos y el resto de la secuencia desde p. 117; determinar el límite del banquete y el alcance exacto de la petición de arma antes de modelar eventos o crear ficha de Hephaistos.


### Checkpoint DMR-061 · Volumen 1, PDF pp. 117–126 · sesión 2026-10-30
- **Inicio (Argentina, UTC−03:00):** 16:04:37. **Duración objetivo:** 10 minutos según el protocolo más reciente que figura en la cola; cierre efectuado dentro de ese margen.
- **Lectura:** PDF pp. 117–126 completadas. Próxima página exacta: p. 127.
- **Pasada 1 — extracción:** combate de Bell contra un Dungeon Lizard y un Goblin en el cuarto piso (pp. 117–119); rodilla ya recuperada y percepción cualitativa de crecimiento; regreso a superficie y salida por Babel (pp. 119–121); cajas que transportan monstruos, comentarios sobre el Festival de Monstruos y aparición de Eina en labores del Gremio (pp. 121–123); paseo por las avenidas y encuentro con Miach, quien entrega dos pociones (pp. 123–125); ilustración monocroma en p. 126.
- **Pasada 2 — auditoría:** relectura por página y render a 110 dpi de los diez folios; pp. 117–125 son texto y p. 126 contiene la ilustración inspeccionada a página completa. Se comprobó que no hay nuevo snapshot numérico de Estado; la curación de rodilla es la percepción narrada por Bell; el daño de la Piedra Mágica del Lizard es solo una duda del protagonista; no se infieren nombre ni efectos de las pociones.
- **Pasada 3 — continuidad:** cotejados catálogo e índices de eventos. El nuevo combate no duplica el Goblin de p. 53 ni el grupo de Kobolds de pp. 46–51. El banquete divino de pp. 103–115 no es el Festival de Monstruos: pp. 121–123 muestran su preparación/traslado de monstruos y enlazan con el Festival de pp. 150–159 y con la fuga/respuesta de pp. 170–173. Miach ya tiene referencia de catálogo; el registro de Miach Familia está delimitado a CONT-ANIME y no se amplía automáticamente con esta evidencia.
- **Límites y candidatos abiertos:** combate Dungeon Lizard/Goblin; observación de preparativos del Festival; encuentro/entrega de dos pociones por Miach (requiere pp. 127+). No se creó ningún ID nuevo ni se modificaron fichas, índices o catálogo. No se añadieron marcas +.
- **Escritura GitHub:** se incorporaron pp. 117–126 a volumes/main/volume-01.md y research/inbox/DANMACHI-RESEARCH-061-volume-01-event-extraction.md; este checkpoint documenta la lectura y el punto de recuperación. Verificar lectura posterior de los tres archivos y HEAD antes de declarar el guardado cerrado.
- **Visual:** /mnt/data/dmr061/contact_117_126.jpg; página 126 ampliada e inspeccionada. No se asignan identidades a las figuras.
- **Tests/CI:** no se ejecutaron tests de código ni CI; fue una sesión de documentación y lectura del corpus.
- **Siguiente paso:** continuar desde PDF p. 127, primero leer qué contienen las dos pociones y la continuación del encuentro con Miach; luego seguir los límites de escenas sin repetir pp. 117–126.


### Checkpoint DMR-061 · Volumen 1, PDF pp. 127–136 · sesión 2026-10-30
- **Inicio (Argentina, UTC−03:00):** 16:45:29. **Minuto 6:** 16:51:29. **Límite de 10 minutos:** 16:55:29.
- **Lectura:** PDF pp. 127–136 leídas de forma secuencial; siguiente folio: p. 137.
- **Pasada 1 — extracción:** p. 127 completa la conversación con Miach: las dos sustancias recibidas son pociones de recuperación y se guardan en una funda de la pierna. p. 127 expone que Miach Familia sostiene tienda de objetos/pociones y que las Familias divinas pueden tener actividades comerciales diversas. pp. 128–129 Bell contempla la herrería de Hephaistos y cambia la escena a la sucursal de la Avenida Principal del Noreste. pp. 129–133 Hephaistos rechaza inicialmente el pedido, escucha la motivación de Hestia, acepta y prepara la forja personal con martillo carmesí y mithril. p. 134 aparece el dilema de diseño y la ausencia de Hestia en la casa. pp. 135–136 Bell prepara el quinto piso y Anya/Ryuu le encargan entregar el monedero de Seal, que está en el Festival durante su día libre.
- **Pasada 2 — auditoría:** relectura por página, extracción aislada y hoja de contactos a 110 dpi. Los diez folios son texto continuo; no se observan ilustraciones. Se distingue la broma de dogeza de una regla efectiva; la deuda de Hestia permanece exigible y sin condonación; no se conoce todavía el diseño final del arma ni los nombres/efectos particulares de las pociones; el importe del monedero no se especifica; Bell solo planea alcanzar el quinto piso y considera consultar a Eina.
- **Pasada 3 — continuidad:** comparación con evento existente EVT-DM-V01-HEPHAISTOS-GIVES-DAGA-HESTIA-001 (entrega pp. 145–146): aceptación/forja pp. 129–133 es antecedente, no la entrega misma. La escena de las pociones Miach–Bell se mantiene abierta hasta completar sus consecuencias. El encargo de llevar el monedero a Seal se mantiene abierto desde p. 136; es distinto del primer encuentro Bell–Seal pp. 42–46 y de la disculpa/pago pp. 98–102. Anya y Ryuu quedan nombradas en la novela principal; solo apellidos/identidad estable permanecen provisionales al estar ausentes del pasaje. No transferir datos anime/AR.
- **Cambios narrativos:** se añadió pp. 127–136 a volumes/main/volume-01.md y al informe DANMACHI-RESEARCH-061-volume-01-event-extraction.md. No se crearon eventos, no se tocaron índices ni catálogo, no se modificaron fichas de personajes ni se añadieron marcas +.
- **Visual:** render a 110 dpi en /mnt/data/dmr061/renders_127_136/; hoja de contactos /mnt/data/dmr061/contact_127_136.jpg. Todo el bloque son páginas de texto, sin ilustraciones.
- **Tests/CI:** no se ejecutaron pruebas de código ni CI.
- **Estado de la rama al inicio:** HEAD 4a67e4653a176d4fae798aa7ec90fe96dc2ddb8c; base main 12f2e60d79b8a3dbe9e1a998a375ecd7cafef684; 52 commits ahead/0 behind. Reconfirmar después de guardar.
- **Próxima acción:** comenzar en PDF p. 137; continuar con las consecuencias de la entrega del monedero a Seal y la evolución de la petición de Hestia. No releer pp. 127–136 salvo discrepancia concreta.


### Checkpoint DMR-061 · Volumen 1, PDF pp. 137–146 · sesión 2026-10-30
- **Inicio (Argentina, UTC−03:00):** 16:53:11. **Minuto 6:** 16:59:11. **Límite de 10 minutos:** 17:03:11.
- **Lectura:** PDF pp. 137–146 completadas. Próxima página exacta: p. 147.
- **Pasada 1 — extracción:** Anya y Ryuu explican el Festival y la domesticación de monstruos (pp. 137–138); Bell acepta llevar el bolso olvidado por Seal al Coliseo; descripción del ambiente festivo (pp. 138–139); Freya se reúne con Loki y Ais, Loki sospecha que recopila información sobre un joven, Freya reconoce a Bell entre la multitud y Ais sigue su cabello con la mirada (pp. 139–145); Hephaistos entrega a Hestia la daga terminada, llamada Daga de Hestia, y recalca que la deuda continúa (pp. 145–146).
- **Pasada 2 — auditoría:** relectura por página y render a 110 dpi de los diez folios; contacto visual inspeccionado. Todo el bloque es texto continuo, sin ilustraciones. Se conservan como diálogo las explicaciones de Anya/Ryuu y los comentarios de Loki. El texto no muestra la entrega del bolso a Seal ni la entrega de la daga a Bell. No confundir la familiaridad protectora de Loki hacia Ais con romance.
- **Pasada 3 — continuidad:** se comprobó catálogo e índices. Reunión Freya/Loki/Ais es posterior al Banquete de los Dioses, anterior a Bell/Hestia en el Festival (pp. 150–159) y distinta de la liberación del Silverback (pp. 159–164). Petición y aceptación de fabricar la daga (p. 115; pp. 129–133) se separan de la entrega física de pp. 145–146. Domesticación se añade bajo CONT-MAIN-LN con alcance limitado a lo que dicen las empleadas. Apellidos y perfiles adaptativos de Anya/Ryuu no se importan a esta escena.
- **Eventos creados:** EVT-DM-V01-FREYA-LOKI-CAFE-MEETING-001 (pp. 139–145); EVT-DM-V01-HESTIA-PETITIONS-HEPHAISTOS-DAGGER-001 (p. 115 y pp. 129–133). El evento existente EVT-DM-V01-HEPHAISTOS-GIVES-DAGA-HESTIA-001 conserva la entrega de pp. 145–146 y queda enlazado con la petición. El Banquete divino pp. 103–115 sigue pendiente de formalizar como acontecimiento independiente; no equivale al Festival.
- **Otros cambios:** se incorporaron pp. 137–146 a volume-01.md y al informe DMR-061; se actualizó canon/05-monstruos-y-piedras-magicas.md con domesticación bajo CONT-MAIN-LN, índices, catálogo, registro de fuentes y evento de entrega de la daga. No se modificaron fichas individuales de Anya/Ryuu ni se añadieron marcas +.
- **Visual:** render /mnt/data/dmr061/renders_137_146/; hoja /mnt/data/dmr061/contact_137_146.jpg.
- **Tests/CI:** no se ejecutaron tests de código ni CI. Fue una sesión de extracción de lore.
- **Próximo trabajo:** continuar desde PDF p. 147; seguir con Bell hacia el Coliseo y la entrega efectiva del monedero a Seal. No releer pp. 137–146 salvo discrepancia concreta. Mantener pendiente la formalización del Banquete de los Dioses pp. 103–115.


### Checkpoint DMR-061 · Volumen 1 PDF pp. 147–156 · 2026-10-30
- Inicio Argentina UTC−03:00: 17:22 (precisión de minuto; sin segundos verificables). Cierre real: 17:26:34; duración aproximada 4 min 34 s. El umbral de seis minutos no se alcanzó; se cerró anticipadamente tras completar las diez páginas y guardar el checkpoint.
- Lectura secuencial pp. 147–156 completada; próxima página exacta: PDF p. 157.
- Pasada 1: Hestia busca a Bell, viaja en carruaje, encuentra a Freya y recibe indicaciones; alcanza a Bell, propone una cita y acepta combinarla con la búsqueda de Seal. Comparten crepes. En paralelo, comienza el espectáculo del Coliseo con Battle Jabalí y domadora de Ganesha Familia.
- Pasada 2: diez folios renderizados a 110 dpi y hoja de contactos inspeccionada; p. 154 única ilustración, revisada ampliada. Verificados 90 Varisu, 50.000 espectadores, altura aproximada de dos metros, participantes y orden. Domadora/conductor sin nombre.
- Pasada 3: pp. 150–155 amplían EVT-DM-V01-BELL-HESTIA-FESTIVAL-DATE-001; sin duplicado. Hestia/Freya pp. 148–149 es contexto previo, separado de Freya/Loki/Ais. P. 156 no recibe ID aislado. Sin cambios de fichas ni marcas +.
- El monedero de Seal sigue pendiente; Bell mantiene presente el encargo.
- Referencia histórica al iniciar el bloque: rama research/danmachi-v1-primary-pp49-54-2026-10-30, HEAD fe082141ad06e897481ac29c176e1b69b8db05c9; main 12f2e60d79b8a3dbe9e1a998a375ecd7cafef684; 71 adelante/0 detrás. Los commits de documentación posteriores movieron el HEAD; no reutilizar ese SHA ni esa distancia como estado actual. Una comparación posterior al primer guardado del checkpoint mostró 78 adelante/0 detrás. Resolver siempre el HEAD vivo en GitHub al reanudar. Sin PR propia; PR #209 de otra rama no tocada. Sin pruebas locales ni CI; main no modificada.
- Próxima acción: continuar PDF p. 157 y confirmar cuándo se devuelve el monedero. Cinco pasadas generales y auditorías adicionales siguen abiertas.

### Checkpoint DMR-061 · Volumen 1, PDF pp. 157–177 · 2026-10-30

- **Protocolo vigente:** por página son obligatorias tres pasadas (extracción documental, auditoría visual y continuidad/duplicados); una cuarta pasada correctiva se aplica cuando haya discrepancia o ambigüedad relevante. No existe límite de minutos ni de páginas por sesión. Los antiguos apuntes de cinco pasadas generales y cronómetros quedan subordinados a esta instrucción para la lectura secuencial.
- **Lectura:** pp. 157–177 completadas. Próxima página exacta: PDF p. 178.
- **Pasada 1:** Eina cuestiona los riesgos y la autorización del Festival (p.157); Bell/Hestia se reúnen con Eina y continúan buscando a Seal (pp.158–159,165); el Encanto de Freya incapacita personal de los establos y ella libera un Silverback (pp.160–164); el monstruo primero sigue a Freya y luego recibe la orden de perseguir a una «pequeña Diosa», probablemente Hestia (pp.166–168); Ganesha y el Gremio responden a nueve fugas y Eina coordina ayuda con Ais/Loki (pp.170–173); el Silverback comienza a perseguir a Hestia, Bell interviene y ambos escapan hacia la Calle Dédalo (pp.173–177).
- **Pasada 2:** 21 páginas renderizadas a 110 dpi e inspeccionadas. Solo p.169 contiene ilustración; fue ampliada y revisada. Las demás son páginas de texto.
- **Pasada 3:** se reutilizan los eventos existentes de Bell/Hestia en el Festival, Freya/Silverback, respuesta de Ganesha y persecución; no se crean IDs duplicados. Sin nuevas fichas de personajes ni lugares. No se registran niveles/estadísticas nuevos.
- **Cuarta pasada correctiva:** pp.165–167. Se conserva la contradicción de apariencia de Seal (p.42: cabello/ojos oscuros; p.165: Bell recuerda cabello/ojos grises). Se corrige el evento de Freya: el Silverback busca primero a Freya y luego recibe la orden de perseguir a una «pequeña Diosa» (probablemente Hestia); no se afirma que Freya ordenó atacar a Bell.
- **Eventos ampliados:** EVT-DM-V01-BELL-HESTIA-FESTIVAL-DATE-001 (pp.150–165); EVT-DM-V01-FREYA-CHARMS-AND-RELEASES-SILVERBACK-001 (pp.159–167); EVT-DM-V01-GANESHA-RESPONDS-TO-MONSTER-ESCAPE-001 (pp.170–173); EVT-DM-V01-BELL-HESTIA-SILVERBACK-CHASE-001 (pp.173–190, inicio detallado pp.173–177).
- **Personajes:** ficha de Seal ampliada con discrepancia sin resolver; perfil de Freya corregido para no atribuirle una orden directa contra Bell. Misha aparece nombrada, sin crear ficha por falta de datos suficientes.
- **Pendientes:** el monedero de Seal no aparece devuelto; la persecución sigue abierta. La identidad contextual de la «pequeña Diosa» como Hestia no se convierte en literalidad de la traducción.
- **Estado Git de entrada:** rama research/danmachi-v1-primary-pp49-54-2026-10-30, HEAD b972852b0b720f769af1115afbcad8778324d63e; main 12f2e60d79b8a3dbe9e1a998a375ecd7cafef684; 80 adelante/0 detrás. Sin PR propia, sin CI en el HEAD de entrada y sin pruebas locales. PR #209 pertenece a otra rama. main no se modifica.
- **Próxima acción:** continuar desde PDF p.178 y no releer pp.157–177 salvo discrepancia concreta.


## DMR-060 — consolidación del PR #209 en rama limpia (2026-10-30)

- [x] Auditar PR #209 contra `main` posterior a #215; identificar 98 commits de adelanto y 6 de retraso en el snapshot antiguo, y separar trabajo único de cambios V1 obsoletos.
- [x] Crear rama `integration/dmr060-v2-timeline-pr209-2026-10-30` desde main SHA `8e6fcedaeed4e6c38e6f63a7c099cc8e27ad3441`.
- [x] Trasladar cinco eventos V2 independientes para pasado de Lili, revelación Hobbit, conversación Eina–Hestia, captura de Gedo y abandono como cebo por miembros de Soma.
- [x] Actualizar localizadores y límites de las fichas de emboscada, abandono y rescate; mantener separada la recontratación.
- [x] Retirar el evento combinado `EVT-DM-V02-SOMA-BETRAYAL-BELL-RESCUE-001` de catálogo/cronología y reservarlo como `(x) superseded`; conservar los enlaces en eventos sustitutos y documentación.
- [x] Portar el grafo temporal dirigido para `before`, `after`, `between` y offsets relativos, y actualizar pruebas para 42 eventos/36 referencias de ubicación.
- [x] Actualizar dossier V2, DMR-060 inbox, fuente, índices y perfiles de Bell, Eina, Hestia y Liliruca; conservar las correcciones más nuevas de Freya y el material V1 de main.
- [x] Ejecutar Validate WordWaifu y DanMachi Lore and Retrieval Integrity en el HEAD final `d0487e94d833be67e0d27ba57add265372c373c1`; ambos `success` (runs #41129690702 y #41129690671).
- [x] Integrar mediante PR [#216](https://github.com/jonhararagi/wordwaifu/pull/216), squash SHA `7de2acca6975d3700b7c5b5ca71c004211fb308e`; CI post-merge runs #41129998675 y #41129998580, ambos `success`.
- [x] Marcar PR [#209](https://github.com/jonhararagi/wordwaifu/pull/209) como `(x) SUPERSEDED BY #216` y cerrarlo. La rama histórica queda conservada; no se borra.

### Checkpoint DMR-061 · Volumen 1, PDF pp. 178–214 · 2026-10-30

- **Lectura:** pp.178–214 registradas sobre el checkpoint ya integrado hasta p.177. El PDF tiene 214 páginas; la lectura secuencial de este archivo llega a su última página y no existe p.215.
- **Pasada 1:** persecución y separación de Bell/Hestia del Silverback; señuelo; actualización de Estado y Daga de Hestia; derrota; reacción de Ais; recuperación en La Señora de la Abundancia; reencuentro con Seal; explicación de la daga/deuda; retrospectiva del primer encuentro y concesión de Falna.
- **Pasada 2:** pp.178–200 renderizadas e inspeccionadas (p.199 ilustración ampliada); pp.201–214 renderizadas e inspeccionadas, con tarjetas/ilustraciones p.208–210 revisadas ampliadas. Las demás páginas de estos bloques son texto.
- **Pasada 3:** reutilizados eventos existentes para persecución (pp.173–195), respuesta a las fugas (pp.170–203), derrota del Silverback (pp.196–203), explicación de la Daga de Hestia/préstamo (pp.203–208) y concesión inicial de Falna (pp.211–214). Se enriqueció el candidato de primer encuentro Bell–Hestia; no se duplicó el evento de Falna ni se crearon perfiles de personajes anónimos.
- **Cuarta pasada correctiva:** pp.165–167 (Seal/Silverback, registrada en checkpoint anterior); p.200 (colapso de Hestia, causa no asumida al leer solo esa página); pp.203–205 (fatiga de Hestia y cabello de Seal); p.208 (D512 narrativo frente a D521 visual).
- **Correcciones y límites:** p.204 describe cabello de Seal como gris oscuro; solo reduce parcialmente la discrepancia p.42/p.165. Los ojos no se resuelven. La fatiga de Hestia se confirma por Seal (p.203) y la dogeza de 30 horas se cuenta en p.205; no se atribuye como causa única del colapso. La frase p.203 sobre ausencia de heridos coexiste con Bell como el más lesionado; se registra la tensión sin resolverla.
- **Archivos actualizados:** volume-01.md, inbox DMR-061, eventos de persecución/Ganesha/derrota/explicación de daga/Falna, candidato Bell–Hestia, perfiles Seal/Freya, canon de Piedra Mágica y equipo, índices de eventos, STATUS, WORK_QUEUE y MASTER_INDEX.
- **Pendientes:** identidad del responsable de la fuga; mirada no identificada p.186; Familia de la azotea de Freya p.200; contenido exacto de la caja p.190 (vínculo con la daga de p.193 solo contextual); color de ojos de Seal; reconciliar el reencuentro pp.203–204 con la visita/disculpa p.98–102 para decidir si requiere un evento propio.
- **Pendientes anteriores preservados:** inspección visual de pp.19–21, 23–24 y 49–54, indicadas por PR #215; pp.1–10 no constan en el dossier secuencial y no se declaran revisadas.
- **Estado Git al abrir este bloque:** rama research/danmachi-v1-primary-pp178-214-2026-10-30 creada desde main SHA 21215d847eff8709919dc86ae60f31e6c1160439, para no fusionar directamente la rama antigua divergente. HEAD final se verifica al cierre.
- **Pruebas:** no se han ejecutado pruebas locales. CI se solicitará sobre el HEAD final de la PR; no se declara validado antes de su ejecución.
- **Siguiente acción:** cierre de extracción del PDF; completar las inspecciones visuales antiguas pendientes y revisar las pp.1–10 para determinar si son preliminares relevantes. No existe siguiente página narrativa dentro de este archivo.


## DMR-062 — auditoría cruzada de la transcripción Markdown del Volumen 1 (2026-10-30)

**Estado:** IN_PROGRESS. La transcripción MD se trata como material de navegación derivado de DMR-061-SRC-001, no como fuente independiente ni como paginación del PDF.

- [x] Inspeccionar estructura, encabezados, extensión textual y cargas Base64 del MD; confirmar que sus líneas no equivalen a páginas físicas del PDF.
- [x] Comparar la estructura del MD con el dossier V1 integrado hasta PDF p.214, el catálogo, el índice de eventos y los índices de personajes/lugares/Familias/reglas.
- [x] Crear un expediente de auditoría con alcance, cobertura, límites de fuente, diferencias y pendientes: [DANMACHI-RESEARCH-062](research/inbox/DANMACHI-RESEARCH-062-volume-01-markdown-cross-audit.md).
- [x] Crear diez fichas individuales de monstruos del Volumen 1 con referencias DMR-061-SRC-001 y localizadores PDF; ninguna ficha añade estadísticas, niveles, debilidades o habilidades ausentes.
- [x] Añadir las fichas al índice de monstruos y al catálogo estructurado, sin modificar los eventos existentes ni duplicar especies/individuos.
- [ ] Cotejar MD contra PDF en pp.1–10 y determinar si contienen material narrativo que falta en el dossier secuencial.
- [x] Inspección visual de pp.19–24 y 49–54 completada: p.22 es la única ilustración de pp.19–24; pp.49–54 son texto. La tabla de Estado p.54 se revisó junto con el snapshot extraído.
- [ ] Atomizar solo las reglas y objetos que necesiten ficha propia: Dungeon (nacimiento/reparación/desplazamiento de monstruos), Piedras Mágicas, Falna/Estado y Daga de Hestia.
- [ ] Revisar eventos candidatos de Frog Shooter/War Shadows y Dungeon Lizard contra el catálogo antes de asignar IDs.
- [ ] Revisar personajes nombrados en el MD sin importar atributos de CONT-ANIME o CONT-AR.

**Límite permanente:** DMR-061-SRC-001 es una traducción privada no cotejada con japonés. No usar número de línea MD como página; no convertir personajes/objetos anónimos en fichas; no dar por cerrada la inspección integral por haber llegado a PDF p.214.


### Checkpoint DMR-061 · Volumen 1, PDF pp. 81–90 · 2026-10-31

- **Protocolo:** tres pasadas obligatorias por página: (1) extracción, (2) inspección visual real y (3) continuidad/relaciones/duplicados. No hay límite arbitrario de tiempo o páginas. La traducción privada no está cotejada con japonés.
- **Pasada 2 completada:** pp.81–85: combate contra dos War Shadows, caída de la primera tras un golpe a la cabeza sin confirmación explícita de destrucción de su Piedra Mágica; muerte de la segunda al romper Bell su Piedra Mágica; cuatro nuevas apariciones y bloqueo de la salida por monstruos del quinto piso; Bell recoge un «Dedo de War Shadow» y comienza el nuevo combate en p.85.
- **Pasada 2 completada:** pp.87–90: Hestia busca a Bell durante la noche, él regresa a las 5:00 herido y sin equipo defensivo, admite haber entrado al Dungeon y ella lo ayuda. La perspectiva y los sentimientos de Hestia se mantienen diferenciados de hechos objetivos; no se infiere relación romántica recíproca.
- **Visuales:** pp.81–85 y pp.87–90 son texto; p.86 es ilustración de capítulo a página completa y ahora está inspeccionada. La figura no se identifica. Se resuelve el pendiente anterior de p.86.
- **Continuidad:** ampliar `MON-DM-WAR-SHADOW-001`; sin ID de evento para el combate o el regreso de Bell porque ambas secuencias continúan abiertas. El «Dedo» se registra solo como equipo improvisado, sin ficha independiente.
- **Pendientes que permanecen:** pasada 2 pp.91–156; pasada 3 pp.9–156; reconciliación de la pasada 1; tareas DMR-062 (pp.1–10, reglas/objetos atomizados, candidatos de monstruos y revisión de personajes). No marcar esas tareas como completadas por este bloque.
- **Siguiente folio:** PDF p.91.
- **Integridad de fuente:** se trabajó desde la copia PDF física. El Markdown original permanece versionado en `volumes/main/`, pero el conector no pudo devolver íntegramente su contenido de 4 MB; no se afirma un cotejo MD↔PDF en este checkpoint.

### Checkpoint DMR-061 · Volumen 1, PDF pp. 91–100 · 2026-10-31

- [x] Pasada 2 pp.91–100: extracción, inspección de páginas y revisión de continuidad/duplicados.
- [x] Registrar la segunda actualización del Estado de Bell y la promesa con Hestia en un evento separado de los updates anteriores.
- [x] Conservar discrepancia de Fuerza entre PDF p.54 (H120) y p.91 (valor anterior H123); no corregir por inferencia.
- [x] Registrar la visita de Bell a La Señora de la Abundancia, disculpa, devolución del dinero y cesta ofrecida por Seal; no fusionarla con la cena aceptada en pp.44–45.
- [x] Mantener sin identidad las empleadas anónimas y sin transferencia automática a CONT-MAIN-LN el perfil anime de Mia Grand.
- [ ] Pasada 2 pp.101–156.
- [ ] Pasada 3 pp.9–156.
- [ ] Reconciliar pasada 1 con matriz de cobertura y localizadores.
- [ ] Completar tareas DMR-062 (pp.1–10, reglas/objetos, candidatos de monstruos y revisión de personajes).
- **Siguiente folio:** PDF p.101. V1 continúa IN_PROGRESS; traducción privada no cotejada con japonés.

### Checkpoint vigente DMR-061 · Volumen 1 · PDF pp.111–120 · 2026-10-31

- **Pasada 2:** completada para pp.111–120 con tres revisiones por página: extracción narrativa; render e inspección visual de cada folio; auditoría de continuidad, entidades, eventos y duplicados. Cuarta revisión correctiva en p.116 (ilustración sin identidad) y p.119 (persona no nombrada).
- **Visual:** pp.111–115 y pp.117–120 son texto; p.116 es ilustración monocroma de capítulo 5, inspeccionada a página completa y sin identificación.
- **Banquete:** pp.104–115 queda registrado en EVT-DM-V01-GANESHA-GOD-BANQUET-001. El anuncio de Philia dentro de tres días no se registra como acontecimiento ya celebrado. La petición de arma de p.115 sigue enlazada al evento independiente EVT-DM-V01-HESTIA-PETITIONS-HEPHAISTOS-DAGGER-001.
- **Incursión de Bell:** pp.117–120 queda registrada en EVT-DM-V01-BELL-FIGHTS-DUNGEON-LIZARD-GOBLIN-AND-RETURNS-001. Se reutilizan las fichas existentes Dungeon Lizard, Goblin y Kobold; no se duplican especies ni individuos.
- **Continuidad:** no se identifica a la figura de p.116 ni a la persona que Bell piensa en p.119. La duda sobre la Piedra Mágica del Dungeon Lizard permanece abierta; no se confirma su destrucción. El vestíbulo de Babel se describe sin inventar planta, coordenadas ni mapa interior.
- **Fichas ampliadas:** Bell, Hestia, Freya, Loki, Ganesha, Ganesha Familia, Orario, Dungeon y Babel. Hephaistos tiene ficha individual provisional CHAR-HEPHAISTOS creada e indexada, con procedencia de la novela principal.
- **Próximo folio:** PDF p.121.
- **Pendientes:** pasada 2 pp.121–156; pasada 3 pp.9–156; reconciliación integral de la pasada 1 con matriz de cobertura; tareas DMR-062 (pp.1–10, reglas/objetos, candidatos y auditoría de personajes).
- **Estado global:** V1 permanece IN_PROGRESS. DMR-061-SRC-001 sigue siendo una traducción privada no cotejada con japonés. El PDF tiene 215 páginas físicas: p.8 está en blanco, p.214 es el último folio narrativo y p.215 contiene créditos.


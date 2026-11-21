---
id: DANMACHI-RESEARCH-063
universe: danmachi
type: source_extraction
status: source_checked_translation_unverified
continuity_scope: CONT-MAIN-LN
source_refs:
  - DMR-063-SRC-001
tags: [volume-02, markdown-only, parts-1-3, Bell, Eina, Liliruca, Ryuu, Ant Killer, Spartoi, Udaeus]
---
# DANMACHI-RESEARCH-063 — Volumen 2: extracción Markdown, Partes 1–3

## Alcance y método

- **Repositorio:** `jonhararagi/wordwaifu`, rama `main`.
- **Fuente exclusiva:** `lore/danmachi/volumes/main/Volumen [02] • DanMachi.md`.
- **Blob Git de la fuente al inicio:** `9b884520a3b5aa30d25b8b2dfc8721d54b52464e`.
- **Checkpoint inicial de main:** `338f79f0bde5495bf57df72e53dbaba782291dd3`.
- **Localizador:** líneas Markdown 13–1391.
- **Límite de la Parte 1:** prólogo y Capítulo 01, líneas 13–1391; se detuvo antes del encabezado de Capítulo 02 (línea 1395). La Parte 2 de este expediente procesa ese capítulo, líneas 1395–3470.
- **Regla de fuente:** se leyó el texto del blob Markdown; las líneas que contienen imágenes incrustadas/Base64 no se inspeccionaron ni se usaron. No se consultaron PDF, imágenes, sitios externos ni otras continuidades.
- **Reserva:** la traducción que contiene el Markdown no ha sido cotejada con el original japonés. Este expediente demuestra lo que expresa el Markdown del proyecto, no la fidelidad de la traducción frente al original.
- **Continuidad:** toda integración narrativa nueva de esta tanda se etiqueta `CONT-MAIN-LN`. No se importan hechos de `CONT-GAME`, `CONT-AR`, `CONT-SECONDARY` o `CONT-AU`.

## Bloque narrativo

### Prólogo — Las Burlas de los Débiles · líneas 13–73

El prólogo describe a los Ayudantes como no combatientes que recuperan Piedras Mágicas y botín y los transportan de forma segura a la superficie, además de asumir tareas de apoyo. El narrador relata desprecio, insultos y violencia de algunos aventureros hacia quienes cargan el equipaje; recuerda el dicho de que los Ayudantes son «héroes anónimos», pero cuestiona que los aventureros valoren realmente su trabajo.

- **Identidad del narrador:** Pendiente. Las líneas procesadas no lo nombran.
- **Regla:** no asignar al narrador la identidad de Liliruca ni de otro personaje por inferencia.

### Capítulo 01 — Tras el Encuentro, un Ayudante · líneas 75–1391

#### Combate en el séptimo piso · líneas 75–173

Bell combate a una Ant Killer en una Habitación del séptimo piso. El texto describe su caparazón duro, cuatro garras en el brazo delantero y la emisión de una señal hormonal que atrae a otras Ant Killers cuando está en peligro. Bell corta una garra y remata al monstruo atravesándole la cabeza con la Daga de Hestia; recupera la Piedra Mágica y continúa explorando.

- **Integración:** nueva ficha `MON-DM-ANT-KILLER-001`; nuevo evento `EVT-DM-V02-BELL-DEFEATS-ANT-KILLER-001`.
- **Reutilización:** Bell (`DM-CHAR-BELL`), Daga de Hestia (`OBJ-DM-HESTIA-DAGGER-001`) y Dungeon (`LOC-DUNGEON`).

#### Bell informa a Eina · líneas 181–393

Eina reprende a Bell por haber avanzado hasta el séptimo piso y le pide ver el Estado grabado en su espalda. La transcripción muestra Lv.1: Fuerza E403, Resistencia H199, Destreza E412, Agilidad D521 y Magia I0. Eina no consigue leer el contenido de las ventanas de Magia y Habilidades, que Hestia había protegido mediante su propio sistema de escritura.

- **Integración:** se añade este snapshot temporal a la ficha de Bell y se conserva la frontera de conocimiento: Eina lee los atributos, pero no los textos protegidos de Magia/Habilidades.
- **No sobrescribir:** otros snapshots de Bell ya existentes; este es un momento distinto.

#### Compras en Babel · líneas 397–1045

Eina lleva a Bell a Babel para comprar equipo y explica funciones del edificio, locales de Hephaistos Familia, sistemas de herrería, Habilidades de Desarrollo, Espadas Mágicas y Enigma. La historia de la Piedra Filosofal se atribuye a la explicación de Eina, no se convierte en evento histórico confirmado.

Bell compra una armadura ligera por 9.900 Varisu; llevaba 10.000 y conserva 100. En la coraza aparece la firma «Welf Crosso». Eina le regala una protección de muñeca color jade que cubre desde la muñeca hasta el codo. Bell ve a Hestia trabajando en una tienda de Babel; el pasaje menciona una paga de 30 Varisu por hora.

- **Integración:** eventos `EVT-DM-V02-BELL-EINA-ARMOR-SHOPPING-001`, objetos `OBJ-DM-BELL-LIGHT-ARMOR-001` y `OBJ-DM-BELL-JADE-WRIST-GUARD-001`.
- **Reutilización:** fichas de Bell, Eina, Hestia, Babel y Hephaistos Familia.
- **Pendiente:** correspondencia de «Welf Crosso» con la ficha existente Welf Crozzo; nombre propio/material de la protección de muñeca; términos completos del empleo de Hestia. No se normaliza ni se infiere.

#### Primer encuentro con Liliruca · líneas 1049–1391

Al anochecer, Bell ve a una joven Hobbit perseguida por un aventurero desconocido y se interpone para protegerla. Ryuu interviene, muestra una kodachi y consigue que el perseguidor se retire; el texto no describe lesiones ni atribuye afiliación al hombre. La joven huye. A la mañana siguiente se acerca a Bell en el entorno de Babel, se presenta como Liliruca Arde y ofrece trabajar como Ayudante. Bell expresa que probablemente querría uno, pero el bloque termina sin confirmar una contratación formal.

- **Integración:** nuevo evento `EVT-DM-V02-BELL-FIRST-MEETS-LILI-001`; se reutilizan las fichas existentes de Bell, Lili y Ryuu.
- **Pendiente:** identidad/afiliación del perseguidor y resultado contractual de la oferta.

## Reconciliación funcional

- **Personajes existentes reutilizados:** Bell (`DM-CHAR-BELL`), Eina (`DM-CHAR-EINA`), Hestia (`DM-CHAR-HESTIA`), Liliruca (`CHAR-LILIRUCA-ARDE`) y Ryuu (`CHAR-RYUU-LION`).
- **Familia:** Hephaistos Familia (`FAM-HEPHAISTOS`), ya existente.
- **Lugares:** Dungeon (`LOC-DUNGEON`), Babel (`LOC-BABEL`) y Orario (`LOC-ORARIO`), ya existentes.
- **Monstruo:** Ant Killer (`MON-DM-ANT-KILLER-001`), nuevo ID porque no había ficha previa con ese nombre.
- **Objetos:** Daga de Hestia reutilizada; armadura ligera y protección de muñeca color jade con fichas descriptivas nuevas porque no existían registros individuales.
- **Acontecimientos:** tres eventos nuevos, separados de los registros posteriores de V2. En particular, el primer encuentro con Lili no se fusiona con `EVT-DM-V02-BELL-WITNESSES-LILI-HARASSMENT-001`, que corresponde a otra escena.
- **Cronología:** solo relaciones relativas expresas; no se inventan fechas de calendario.
- **Estadísticas:** snapshot de Bell añadido como estado temporal; no se reemplazan snapshots previos.
- **Fuentes:** se registra `DMR-063-SRC-001` como fuente Markdown del repositorio, independiente de la fuente PDF anterior DMR-060.

## Pendientes del bloque

1. Identidad del narrador del prólogo.
2. Identidad/afiliación del aventurero perseguidor.
3. Contratación formal de Lili, que no ocurre dentro del fragmento procesado.
4. Normalización o equivalencia de «Welf Crosso» con Welf Crozzo.
5. Nombre propio y material de la protección de muñeca.
6. Condiciones laborales completas de Hestia en la tienda.
7. Traducción y matices lingüísticos no verificados contra el japonés.

## Checkpoint de Parte 1

- **Última línea procesada en la Parte 1:** 1391.
- **Primer encabezado de continuación:** `## Capítulo 02 – Las Circunstancias de la Ayudante`, línea 1395.
- **Estado de aquella tanda:** prólogo y Capítulo 01 delimitados y documentados.


## Parte 2 · Capítulo 02 — Las Circunstancias de la Ayudante · líneas 1395–3470

### Contrato de prueba y primera expedición · líneas 1395–2095

Lili confirma que pertenece a Soma Familia y describe la exclusión que sufre dentro de ella: dice que no puede permanecer en la residencia y busca un alojamiento barato (1405–1447). Su apariencia al descubrirse la capucha lleva a Bell a pensar que es Dogman y no la joven Hobbit que había visto la víspera; el capítulo no explica todavía esta discrepancia de apariencia (1461–1511).

Bell acepta que Lili lo acompañe únicamente durante ese día de prueba y acuerdan inicialmente una participación del 30 % de los ingresos (1537–1549). En el séptimo piso, Bell combate mientras Lili recupera piedras mágicas y botín, mueve restos de monstruos y aplica conocimientos de rutas y seguridad. El texto contabiliza cuatro Ant Killers, tres Polillas Púrpuras y cinco Needle Rabbits en la secuencia (1555–1795). Lili avisa del peligro de las esporas de las Polillas Púrpuras y propone regresar cuando el antídoto que llevaba ya se había utilizado (1871–1913). Al final ofrece los objetos recuperados para demostrar confianza; Bell no formaliza aún un vínculo sin límite temporal (1915–1947).

Después Bell consulta a Eina sobre Lili y Soma Familia. La descripción del vino, del tamaño y fuerza de la Familia, de la conducta de sus miembros y de la aparente distancia de Soma respecto de otros dioses se conserva como información que Eina atribuye al expediente del Gremio o a lo que ha oído (1951–2027). Eina señala el bajo prestigio social de los Ayudantes y deja a Bell la decisión final (2033–2079).

### Daga de Hestia: ausencia, tasación y devolución · líneas 2115–2501

Bell descubre que la Daga de Hestia ya no está en su funda (2115–2137). En una escena paralela, Lili aparece en una tienda antigua con la daga; el comerciante ofrece 30 Varisu, oferta que no se acepta (2139–2223). Ryuu, que vuelve de hacer compras junto a Seal, reconoce el grabado del arma, persigue a quien la lleva y luego comprende que ha confundido a Lili, de apariencia Dogman, con el Hobbit masculino que buscaba. Finalmente devuelve la daga a Bell (2225–2459). Después de que Bell se aleja, Seal susurra a Lili «No te dejes llevar»; Lili reacciona con temor y pide a Bell que no la lleve a la Señora de la Abundancia (2463–2501). El texto no aclara el referente de la advertencia ni la razón completa de la petición.

**Límite de inferencia:** el capítulo muestra a Lili con la daga y luego la devolución, pero no narra directamente el acto inicial de tomarla ni contiene una confesión explícita de Lili ante Bell. El evento se denomina por la devolución de Ryuu, no por un robo presentado como hecho confesado.

### Contrato sin fecha límite y segunda expedición · líneas 2505–2872

Al día siguiente Bell vuelve al Dungeon con Lili y afirma que la contrata sin fecha límite, como integrante de un equipo de dos personas (2505–2513). Lili menciona que posee una habilidad de apoyo, sin decir su nombre, y afirma que no ha obtenido Magia (2567–2585). La conversación posterior sobre el reparto y las palabras sarcásticas de Lili no reciben una explicación definitiva; se conservan como ambigüedad (2595–2635).

Una escena intercalada en el Gremio muestra una disputa de un aventurero de Soma Familia por la tasación de su botín; Eina y una compañera comentan que incidentes semejantes se repiten (2639–2694). El pasaje no permite generalizar la conducta a cada miembro. En la segunda expedición, la ayuda de Lili permite a Bell permanecer más tiempo en el Dungeon. El intercambio de oro entrega 26.000 Varisu; Bell divide el dinero y da 13.000 a Lili (2695–2821). El apretón de manos y el agradecimiento se registran como interacción de esa jornada, no como vínculo romántico permanente.

El perfil final de Bell presenta Lv. 1, Fuerza D 591, Resistencia G 233, Destreza C 607, Agilidad B 702 y Magia I 0. Incluye la habilidad [Deseo Inquebrantable], pero no demuestra que Bell conozca su nombre o efectos (2823–2853). El equipo listado incluye Armadura de Conejo MK-II y Protector de Jade (2855–2869). La posible equivalencia de la armadura listada con la pieza comprada antes permanece pendiente; el Protector de Jade amplía la descripción del objeto que Eina entregó a Bell.

### Interludio y salida de Bell y Hestia · líneas 2873–3470

Hestia ve a Bell junto a Lili, los ve sostenerse de la mano y malinterpreta momentáneamente la escena como una aventura amorosa (2903–2929). Habla con Miach y expresa celos, pero él advierte que no hay pruebas de infidelidad ni de una relación de pareja (2933–2981). A la mañana siguiente Bell la cuida durante la resaca, decide descansar y la invita a comer como agradecimiento (3015–3145). La cita se fija para las 18:00 en la Plaza del Amor.

Hestia se prepara y cuenta a Deméter y a otras diosas que la otra persona es un humano de su Familia; expresa que le gusta todo de él (3165–3281). En la plaza, otras diosas rodean a Bell e interrumpen la salida. Hestia y Bell escapan hacia una torre del reloj; Bell promete que volverán a salir, comerán algo rico y contemplarán otra vez la vista nocturna de Orario (3283–3457). El texto no confirma que la comida se realizara esa noche ni una relación exclusiva o formal.

### Auditoría de detalle complementaria · Capítulo 02

La lectura directa del blob fuente permitió documentar detalles que la síntesis inicial mantenía demasiado comprimidos. Se incorporan como precisiones de los cuatro eventos y de fichas existentes, sin crear IDs adicionales:

- **Convenciones de trato de los Ayudantes (1709–1749):** Lili pide a Bell que la llame «Lili» y no añada «-san». Explica que los Ayudantes deben conservar una posición subordinada y una distancia formal para no perder futuras oportunidades de contratación. Se registra como explicación de Lili en esta escena, no como regla universal verificada fuera del pasaje.
- **Indicio físico no identificado durante la primera expedición (1859–1867):** mientras Bell corta el cuerpo de la Ant Killer incrustada en la pared, siente que algo es retirado de su cintura. Al volverse, ve a Lili junto al monstruo, pero el texto no identifica el objeto ni narra expresamente el acto de extracción. La posterior desaparición de la Daga de Hestia y la aparición de una daga en manos de Lili contextualizan el indicio, pero no permiten convertirlo aisladamente en una sustracción demostrada.
- **Susurro al terminar la prueba (1933–1939):** aparece un murmullo «te lo daré como regalo de despedida»; Bell pregunta a Lili si dijo algo y ella responde que no. La voz, el referente y el significado no se atribuyen como hechos concluyentes.
- **Almacenamiento de la daga y reacción de Lili (2519–2527):** Bell explica que guarda la Daga de Hestia junto con su vaina dentro del brazal/protector de jade para no perderla otra vez. Lili inclina la cabeza con decepción y ya parecía poco animada; el pasaje no explica el motivo. Se reutiliza `OBJ-DM-BELL-JADE-WRIST-GUARD-001`.
- **Comentarios ambiguos durante la segunda jornada (2795–2821):** Lili pregunta «¿No vas a monopolizarlas…?» cuando Bell propone ir a un bar. El referente de «las» y el sentido de la pregunta no quedan claros; después coloca su mano sobre la de Bell y murmura «Qué extraño», frase que Bell no oye. No se convierte el intercambio en relación permanente.
- **Snapshot y equipo al cierre del capítulo (2823–2869):** además de los atributos ya resumidos, la ficha muestra piso alcanzado 7, las armas Daga de Hestia y Daga, dinero 18.900 Varisu y el equipo Armadura de Conejo MK-II y Protector de Jade. La primera figura como serie defensiva creada por «Welf Crosso», usa Piel del Conejo de Metal y se describe con defensa alta; el pasaje menciona un incidente y un cambio de nombre, sin explicar el incidente. No se resuelve su equivalencia con la armadura comprada antes ni la variante nominal Crosso/Crozzo. El Protector de Jade se integra en la ficha de objeto existente.
- **Interludio de Hestia (2883–2891; 3047–3065):** Hestia regresa de trabajar en la sucursal de Hephaistos Familia en Babel y vuelve agotada por el trabajo. A la mañana siguiente Bell la alimenta con trozos de manzana; Hestia se apoya y lo abraza durante el cuidado de la resaca. Es una interacción doméstica puntual, no evidencia de exclusividad o relación formal.

**Resultado de la auditoría:** los indicios ambiguos permanecen pendientes; los datos verificables se añaden a registros existentes bajo `CONT-MAIN-LN`. No se crea ningún evento, personaje, objeto, relación permanente ni estadística adicional fuera del snapshot ya presente.

## Reconciliación funcional de la Parte 2

- **Personajes reutilizados:** Bell (DM-CHAR-BELL), Eina (DM-CHAR-EINA), Hestia (DM-CHAR-HESTIA), Liliruca (CHAR-LILIRUCA-ARDE), Ryuu (CHAR-RYUU-LION) y Seal (DM-CHAR-SEAL-FLOVER). No se crea ninguna ficha nueva de personaje.
- **Familia reutilizada:** Soma Familia (FAM-SOMA); el capítulo añade observaciones atribuidas a Eina y a personal del Gremio, no una descripción universal de sus miembros.
- **Objetos reutilizados:** Daga de Hestia (OBJ-DM-HESTIA-DAGGER-001) y protección de muñeca color jade (OBJ-DM-BELL-JADE-WRIST-GUARD-001). El perfil la denomina Protector de Jade; no se duplica.
- **Eventos nuevos:** EVT-DM-V02-BELL-LILI-TRIAL-AND-FIRST-EXPEDITION-001; EVT-DM-V02-RYUU-RETURNS-HESTIA-DAGGER-001; EVT-DM-V02-BELL-CONFIRMS-LILI-TEAM-AND-SHARES-REWARDS-001; EVT-DM-V02-BELL-HESTIA-EVENING-OUTING-INTERRUPTED-001.
- **No duplicados:** el encuentro inicial del Capítulo 01 permanece separado del período de prueba; la contratación sin fecha límite del Capítulo 02 permanece separada de la recontratación tras el rescate registrada en DMR-060.
- **Sin relaciones nuevas:** no se crea una relación permanente Bell–Lili ni se transforma la salida con Hestia en una pareja formal.
- **Continuidad:** solo CONT-MAIN-LN. No se importa Cinder Ella, skills o atributos de otras continuidades.
- **Traducción:** los nombres y matices se conservan según el Markdown español privado; no están cotejados independientemente con japonés.

## Pendientes preservados

1. Discrepancia de apariencia Hobbit/Dogman presentada entre el cierre del Capítulo 01 y el Capítulo 02; mecanismo no explicado en este bloque.
2. Acto inicial e intención de la desaparición de la Daga de Hestia: inferidos por la secuencia, no confesados.
3. Referente de la advertencia que Seal susurra a Lili («No te dejes llevar») y motivo de la petición de evitar la Señora de la Abundancia: no resueltos; no inferir una causa ni una relación permanente.
4. Sentido exacto del comentario sarcástico de Lili sobre el reparto: no resuelto.
5. Nombre de la habilidad de apoyo de Lili y su contenido de Estado: no revelados.
6. Equivalencia nominal de Armadura de Conejo MK-II con la armadura comprada en el bloque anterior: pendiente.
7. Correspondencia del Protector de Jade con el objeto encontrado posteriormente por Ais: pendiente.
8. Matices de traducción española no cotejados con japonés.
9. Indicio de que algo fue retirado de la cintura de Bell durante la primera expedición (1859–1867): objeto y autor no identificados.
10. Susurro «te lo daré como regalo de despedida» (1933–1939): hablante, destinatario y significado no confirmados.
11. Comentario «¿No vas a monopolizarlas…?» y murmullo «Qué extraño» (2795–2821): referente e intención no resueltos; la segunda frase no es oída por Bell.
12. Reacción decepcionada de Lili cuando Bell explica dónde guarda la Daga de Hestia (2519–2527): causa desconocida.
13. Identidad de «Armadura de Conejo MK-II» frente a la armadura comprada en Babel y correspondencia «Welf Crosso»/«Welf Crozzo» (2855–2862): pendientes.

## Checkpoint vigente · después de la Parte 2

- **Última línea procesada:** 3470.
- **Primer punto pendiente:** Capítulo 03, encabezado del Markdown en la línea 3471.
- **Bloque reconciliado:** Capítulo 02, líneas 1395–3470.
- **Estado de DMR-063:** Parte 1 y Parte 2 documentadas; el expediente sigue abierto.
- **Estado global del Volumen 2:** PARTIAL / IN_PROGRESS.
- **Fuente original:** no modificada.


## Parte 3 · Capítulo 03 — primera escena: Spartoi, Udaeus y rumor · líneas 3471–3685

### Derrota de Spartoi y composición del grupo · líneas 3475–3535

El fragmento abre con Ais Wallenstein derrotando a más de diez Spartoi en el piso 37. El Markdown describe a los Spartoi como monstruos esqueleto de base humanoide, con una forma semejante a armadura y varias armas de hueso blanco; la narración los compara con un monstruo fuerte de nivel 4. No se infieren armas concretas, habilidades ni debilidades que el texto no nombra.

La escena identifica un grupo de siete integrantes de Loki Familia, incluidos Ayudantes: cinco aventureros de Primera Clase y dos Ayudantes que habían alcanzado recientemente el nivel 3. Entre los presentes nombrados están Ais, Finn, Riveria, Tiona y Tione. Los dos Ayudantes no reciben nombre. La actividad se distingue de una Expedición formal: se presenta como una exploración personal entre compañeros, con el propósito adicional de pasar el tiempo.

Tiona y Tione conversan sobre la posible ausencia de «Bate» y sobre una referencia de Tione a que Ais lo había rechazado; el contenido llega como diálogo de los personajes, no como escena directa del rechazo. Se conserva la grafía «Bate» del Markdown sin identificarla automáticamente con la ficha existente de Bete Loga.

### Ais pide permanecer en el piso 37 · líneas 3537–3613

Ais pide a Finn y Riveria quedarse sola un poco más. Tiona y Tione objetan que dejarla sola en los Pisos Inferiores sería peligroso. Finn inicialmente no lo permite. Riveria propone quedarse con Ais; Finn termina autorizándolo y pasa al lado de apoyo, alejándose de Ais junto con el resto del equipo. El diálogo deja ver confianza entre Ais y Riveria, pero no se crea una relación nueva ni se amplía una relación permanente a partir de esta escena.

### Aparición de Udaeus · líneas 3615–3681

El suelo del piso 37 tiembla y emerge un monstruo gigantesco de huesos negros, de más de diez metros, con la parte inferior todavía bajo tierra y una Piedra Mágica flotando en el aire. La narración lo compara con una versión ampliada de Spartoi. Ais reconoce que han pasado «3 meses» y el texto explica a continuación la categoría de monstruos especiales que el Gremio llama «Rey Solitario del Dungeon»: solo uno de ellos puede aparecer en cada piso y su reaparición requiere un intervalo especial. El pasaje no fija por sí solo el punto inicial de esos tres meses ni autoriza a convertirlo en una regla exacta de reaparición para Udaeus.

El texto describe a estos monstruos como extraordinariamente fuertes y refiere que su nivel se calcularía agregando dos al nivel del piso; también registra las denominaciones «Jefe de piso» y «Jefe Nivel B» en la traducción. Ais pide a Riveria que no la ayude, se aproxima a Udaeus y afirma que terminará rápidamente.

**Límite decisivo:** las líneas 3471–3681 terminan cuando Ais se acerca a Udaeus. Este bloque Markdown no narra el resultado del combate. La ficha preexistente del enfrentamiento conserva su propia procedencia DMR-060; DMR-063 solo añade el contexto preparatorio y no se utiliza aquí para certificar la victoria.

### Rumor posterior · línea 3683

El texto indica que, una semana después, se extendió por las calles de Orario el rumor de que la Princesa de la Espada había alcanzado el nivel 6. Se reutiliza el evento existente `EVT-DM-V02-AIS-REACHES-LV6-RUMOR-001`; el rumor no se convierte en un Estado confirmado.

### Reconciliación funcional de este bloque

- **Eventos reutilizados:** `EVT-DM-V02-AIS-UDAEUS-001` y `EVT-DM-V02-AIS-REACHES-LV6-RUMOR-001`. No se crean eventos duplicados.
- **Personajes reutilizados:** Ais (`DM-CHAR-AIS`), Finn (`CHAR-FINN-DEIMNE`), Riveria (`CHAR-RIVERIA-LJOS-ALF`), Tiona (`CHAR-TIONA-HIRYUTE`) y Tione (`CHAR-TIONE-HIRYUTE`). Los dos Ayudantes permanecen anónimos; no se crean fichas.
- **Familia reutilizada:** Loki Familia (`DM-FAM-LOKI`).
- **Monstruos nuevos:** `MON-DM-SPARTOI-001` y `MON-DM-UDAEUS-001`, porque no existían fichas ni IDs activos equivalentes en el catálogo. Udaeus no se fusiona con Spartoi: el texto lo compara con una versión ampliada de esa especie.
- **Lugar:** Dungeon (`LOC-DUNGEON`), piso 37.
- **Continuidad:** `CONT-MAIN-LN` exclusivamente. Los perfiles existentes mantienen separados sus datos de `CONT-ANIME` y `CONT-SO`.
- **Fuente:** `DMR-063-SRC-001`, Markdown del repositorio, líneas 3471–3685. La traducción española no se ha cotejado independientemente con japonés.

### Pendientes preservados

1. Resultado del combate contra Udaeus dentro de este bloque Markdown: no aparece en las líneas 3471–3681.
2. Referente exacto de «Ya han pasado 3 meses» y cómputo del intervalo de reaparición de Udaeus.
3. Matiz y alcance terminológico de «Rey Solitario del Dungeon», «Jefe de piso» y «Jefe Nivel B» en la traducción.
4. Variante «Bate» y su correspondencia exacta con «Bete»; no se normaliza automáticamente.
5. Identidad y datos de los dos Ayudantes anónimos.
6. Título del capítulo: el Markdown lo divide entre dos encabezados consecutivos en las líneas 3471 y 3473; no se corrige el original.
7. Traducción española sin cotejo independiente con japonés.

## Checkpoint vigente · después del primer bloque de Parte 3

- **Última línea narrativa procesada:** 3683.
- **Separador revisado:** línea 3685 (`# × × ×`).
- **Primera línea pendiente:** 3687.
- **Bloque reconciliado:** Capítulo 03, líneas 3471–3685.
- **Estado de DMR-063:** Partes 1, 2 y primer bloque de Parte 3 documentadas; expediente abierto.
- **Estado global del Volumen 2:** `PARTIAL / IN_PROGRESS`.
- **Fuente original:** blob `9b884520a3b5aa30d25b8b2dfc8721d54b52464e`, sin modificación.

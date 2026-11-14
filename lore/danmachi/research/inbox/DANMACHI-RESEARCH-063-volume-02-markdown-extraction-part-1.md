---
id: DANMACHI-RESEARCH-063
universe: danmachi
type: source_extraction
status: source_checked_translation_unverified
continuity_scope: CONT-MAIN-LN
source_refs:
  - DMR-063-SRC-001
tags: [volume-02, markdown-only, part-1, Bell, Eina, Liliruca, Ryuu, Ant Killer]
---
# DANMACHI-RESEARCH-063 — Volumen 2: extracción Markdown, Parte 1

## Alcance y método

- **Repositorio:** `jonhararagi/wordwaifu`, rama `main`.
- **Fuente exclusiva:** `lore/danmachi/volumes/main/Volumen [02] • DanMachi.md`.
- **Blob Git de la fuente al inicio:** `9b884520a3b5aa30d25b8b2dfc8721d54b52464e`.
- **Checkpoint inicial de main:** `338f79f0bde5495bf57df72e53dbaba782291dd3`.
- **Localizador:** líneas Markdown 13–1391.
- **Límite:** el bloque termina antes de `## Capítulo 02 – Las Circunstancias de la Ayudante` (línea 1395). No se ha procesado contenido posterior.
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

## Checkpoint

- **Última línea procesada:** 1391.
- **Primer encabezado pendiente:** `## Capítulo 02 – Las Circunstancias de la Ayudante`, línea 1395.
- **Estado:** Parte 1 delimitada y documentada; Volumen 2 continúa parcial.

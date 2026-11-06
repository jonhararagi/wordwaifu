# DMR-062 — Auditoría cruzada de la transcripción Markdown del Volumen 1

- **Estado:** PARTIAL / IN_PROGRESS
- **Continuidad examinada:** CONT-MAIN-LN
- **Volumen:** DanMachi, novela ligera principal, Volumen 1.
- **Archivo de trabajo:** Volumen [01] • DanMachi.md, repositorio privado jonhararagi/botimagen-referencias-privadas, rama main.
- **Blob SHA de la transcripción examinada:** d2b3306b1661584d9a42d651f57dca8a6814b20b.
- **Fuente de evidencia registrada:** DMR-061-SRC-001, PDF del Volumen 1, traducción privada española no editorial y no cotejada con japonés.
- **Destino:** jonhararagi/wordwaifu.

## 1. Objetivo y conclusión metodológica

Esta auditoría compara la transcripción Markdown con el dossier primario ya integrado en WordWaifu, el índice de eventos, el catálogo y las fichas temáticas. El MD es una **transcripción de trabajo derivada del mismo material**, no una segunda edición independiente ni una fuente que permita confirmar por sí sola la fidelidad de la traducción.

El archivo tiene 7.251 líneas y contiene imágenes incrustadas en Base64. Tras retirar las cargas de imagen, el texto legible ronda 391.000 caracteres. La transcripción no inserta números de página física del PDF de forma sistemática; sus líneas y encabezados **no equivalen a páginas**. Por tanto:

1. Los hechos canónicos de esta extracción siguen citando DMR-061-SRC-001.
2. Los localizadores de los registros nuevos son páginas físicas del PDF que ya aparecen en el dossier V1 y fueron documentadas en el trabajo secuencial.
3. Las líneas/encabezados del MD sirven para navegar la transcripción, no para inventar localizadores PDF p. N.
4. No se abre un segundo expediente de fuente primaria ni se duplican los eventos por haber revisado la transcripción.
5. Se conservan como pendientes los matices que la traducción no resuelve.

## 2. Estructura detectada en el MD

| Sección | Encabezado aproximado en MD | Alcance narrativo |
|---|---|---|
| Prólogo | «¿Está mal esperar un encuentro en el Calabozo?» | Expectativas de Bell y encuentro con Ais/Minotauro |
| Capítulo 1 | «El Mundo, Realidad y Aspiraciones» | Bell, Eina, rescate y primeros pasos |
| Capítulo 2 | «Y Entonces Corrí» | Seal, primera incursión, Kobolds y Goblins |
| Interludio | «¡Mortificante!» | Continuación de la reacción de Bell |
| Capítulo 3 | «La Noche Antes del Despertar» | Incursión nocturna, Frog Shooter y War Shadows |
| Capítulo 4 | «Así que quería convertirme en su fuerza» | Recuperación, Hestia, crecimiento y promesa |
| Capítulo 5 | «La Broma de la Diosa» | Banquete, Familias, preparación del Festival y daga |
| Capítulo 6 | «¡Golpe de Pollo!» | Coliseo, fuga de monstruos, Freya, Silverback y persecución |
| Epílogo | «El Mito de la Familia» | Primer encuentro Bell–Hestia y concesión de Falna |

La división ayuda a navegar y comparar escenas, pero no sustituye los límites de escena y localizadores físicos que ya conserva volume-01.md.

## 3. Resultado de la auditoría por categoría

### 3.1 Personajes

**Ya existen registros o referencias de trabajo para el núcleo del volumen:** Bell Cranel, Hestia, Ais Wallenstein, Eina Tulle, Seal Flover, Freya, Loki, Ganesha, Mia y otros personajes recurrentes. El MD conserva grafías de esta traducción como «Aizu» y «Bate»; no deben convertirse automáticamente en personas nuevas ni en romanizaciones definitivas.

**Regla aplicada:** no crear fichas para empleados, domadores, porteros, observadores, librero o voces sin nombre. Misha, Anya y Ryuu aparecen en diálogo; cualquier detalle adicional debe respetar el alcance y la continuidad de la fuente principal, sin importar perfiles de anime u otras obras.

### 3.2 Familias y organizaciones

El volumen implica Hestia Familia, Loki Familia, Freya Familia, Ganesha Familia, Hephaistos Familia, Miach Familia y el Gremio. WordWaifu ya dispone de fichas de Familia/organización para el núcleo institucional. La auditoría no crea Familias duplicadas por menciones del Festival ni confunde el Gremio como organización con sus edificios.

### 3.3 Lugares, ciudad y mundo

**Registros existentes que cubren el marco:** Orario, Dungeon, Babel, Calle Dédalo, iglesia/residencia inicial de Hestia, La Señora de la Abundancia, avenidas principales y Coliseo como parte del índice de lugares.

**Candidatos que requieren decisión separada:** recinto subterráneo de establos bajo el Coliseo, alcantarillas y espacios de la Calle Dédalo, plaza/fuente de la persecución y tienda de libros del epílogo. El librero no tiene nombre; la tienda se describe como «en mal estado», sin un nombre propio ni una ubicación urbana verificable. No se le asigna ID de lugar por inferencia.

La transcripción también recoge la historia antigua del Dungeon: ya existía antes del descenso de los dioses; había calles construidas sobre él; se menciona a personas que luchaban sin Gracia y un predecesor del Gremio. El wording traducido sobre quién construyó las calles no debe ampliarse hasta cotejar otra edición.

### 3.4 Monstruos

Antes de esta tanda, lore/danmachi/monsters/ solo contenía una ficha individual: Juggernaut. El Volumen 1, en cambio, nombra y describe suficientes especies como para empezar un bestiario sin inventar estadísticas. Esta tanda añade fichas de alcance deliberadamente limitado para:

- Minotauro.
- Goblin.
- Kobold.
- Frog Shooter / Rana Tiradora.
- War Shadow.
- Dungeon Lizard.
- Silverback.
- Troll.
- Ciervo Espada.
- Battle Jabalí.

Las fichas registran únicamente apariciones y propiedades descritas en el Volumen 1. No crean individuos independientes por cada ejemplar; tampoco completan niveles, estadísticas, debilidades, tasas de aparición o habilidades no indicadas.

### 3.5 Sistemas, reglas y objetos

El MD contiene material para mantener y ampliar las siguientes áreas ya existentes en WordWaifu:

- Falna/Gracia, Estado, actualizaciones, atributos, Magia y Habilidades.
- Puntos de Experiencia y crecimiento.
- Nacimiento de monstruos en las paredes del Dungeon, permanencia habitual en el piso de origen y desplazamientos excepcionales.
- Reparación de estructuras del Dungeon y límites del conocimiento disponible.
- Piedras Mágicas, fragmentos, cenizas, botines y aplicaciones económicas.
- Domesticación de monstruos como habilidad cuya eficacia depende de la persona.
- Daga de Hestia: mithril, Texto Sagrado/Estado propio, crecimiento ligado a la experiencia del usuario y restricción de uso a portadores de la Gracia de Hestia.
- Pociones, armadura y daga inicial de Bell.

El contenido general existe en los archivos canon/02, canon/03, canon/04, canon/05 y canon/08, pero eso no significa que cada regla u objeto tenga aún una ficha atómica con todos sus límites, excepciones y localizadores. Esa normalización queda en la cola de trabajo; no se presenta como completada en este informe.

### 3.6 Acontecimientos y relaciones

Los acontecimientos principales ya tienen IDs: rescate Bell–Ais/Minotauro, primeros combates de Bell, actualizaciones de Estado, primera visita a Seal, Banquete, cita del Festival, reunión Freya–Loki–Ais, liberación del Silverback, respuesta de Ganesha/Gremio, persecución, derrota del Silverback, explicación/entrega de la daga y Falna inicial.

La auditoría reutiliza esos eventos. No crea un evento nuevo para cada párrafo, criatura, objeto o mención. La relación entre Bell y Ais distingue el rescate de la narración posterior que Bell oye; la relación Bell–Hestia distingue el primer encuentro y la concesión de Falna de las actualizaciones posteriores.

## 4. Discrepancias y límites que permanecen abiertos

1. **Minotauro y pisos:** Eina sitúa el encuentro de Bell en el piso 5, identifica al monstruo como nivel 2 y explica que normalmente debería aparecer en el piso 15. La traducción añade una formulación ambigua («o por debajo»); se conserva sin normalizar la dirección.
2. **War Shadow:** los rasgos físicos y el combate se toman de la traducción; no se convierten en estadísticas generales o una lista exhaustiva de habilidades.
3. **Silverback:** primero sigue el rastro de Freya y después recibe la orden de perseguir a una «pequeña Diosa». La identificación de esa destinataria como Hestia es contextual, no una mención nominal en la orden.
4. **Fuga del Festival:** el responsable sigue sin identificar; el aparente hechizo sobre quienes tuvieron contacto con él no se eleva a mecanismo confirmado.
5. **Observador de p. 186:** la mirada que sigue a Bell no está identificada.
6. **Familia de la azotea:** la Familia desde cuya azotea observa Freya no está identificada.
7. **Seal Flover:** la traducción conserva diferencias entre cabello/ojos oscuros y grises en distintos pasajes; p. 204 favorece cabello gris oscuro, pero no resuelve el color de ojos.
8. **Daga/caja:** el vínculo exacto entre la caja observada en p. 190 y la daga explicada después no se convierte en hecho más allá de lo que el dossier ya registra.
9. **Epílogo:** el dueño de la tienda de libros no tiene nombre y no se proporciona un nombre propio del establecimiento.
10. **Tramo inicial:** el dossier secuencial integrado documenta pp. 11–214; pp. 1–10 y las inspecciones visuales antiguas pendientes no se declaran cubiertas por haber leído el MD.

## 5. Cambios de esta tanda

- Se abre este expediente de auditoría cruzada DMR-062.
- Se añaden diez fichas individuales de monstruos del Volumen 1, todas bajo CONT-MAIN-LN y con DMR-061-SRC-001 como procedencia.
- Se conserva volume-01.md y el expediente DMR-061 como fuente narrativa secuencial; no se reemplazan ni duplican.
- Se actualizan el índice de monstruos, el catálogo, el índice maestro y la cola de trabajo.
- No se crean nuevos personajes, Familias, localizaciones ni IDs de acontecimientos en esta tanda.

## 6. Próximas tareas

- [ ] Cotejar el texto MD contra el PDF en el tramo narrativo inicial PDF pp. 1–10 y decidir qué información falta en el dossier secuencial.
- [ ] Cerrar las inspecciones visuales pendientes de PDF pp. 19–21, 23–24 y 49–54 (p. 54 ya tiene revisión específica de la tabla de Estado; el resto no se marca como completo).
- [ ] Auditar por separado las reglas del Dungeon, las Piedras Mágicas, la Falna/Estado y la Daga de Hestia para decidir qué merece una ficha atómica frente a una sección de canon existente.
- [ ] Revisar los eventos candidatos de Frog Shooter/War Shadows y Dungeon Lizard sin crear IDs antes de delimitar secuencia y duplicados.
- [ ] Revisar las menciones de Anya, Ryuu, Misha y Hephaistos en CONT-MAIN-LN sin importar datos de CONT-ANIME o CONT-AR.
- [ ] Contrastar discrepancias de traducción con otra edición o con el japonés cuando haya una ruta legítima accesible.

**Criterio de cierre:** esta auditoría será parcial hasta terminar la comparación de los tramos no cubiertos y las tareas visuales. Un archivo Markdown estructurado no convierte por sí solo una extracción en canon cotejado.


## Addendum — estado de los archivos tras la limpieza de cargas (2026-10-31)

- **Corrección del estado actual:** la frase histórica de la sección 5 sobre conservar `lore/danmachi/volumes/main/volume-01.md` describe la disposición anterior a la limpieza posterior de la carpeta. En el `main` actual ese dossier separado ya no existe en esa ruta.
- **Evidencia de la eliminación:** el historial de GitHub muestra el commit [`c1a4b9298c8118534f6babf5a5324b873e51c41c`](https://github.com/jonhararagi/wordwaifu/commit/c1a4b9298c8118534f6babf5a5324b873e51c41c), cuyo mensaje es `chore(danmachi): clear main volume imports for clean reupload`. Su diff elimina el dossier `volume-01.md` y otros archivos de esa carpeta, y deja un `.gitkeep` para volver a cargar las fuentes originales limpias.
- **Versión histórica:** el dossier anterior existía en el padre `fd0144b2a1c599844b9f172ba7f3c14fb6d9f332`, con blob SHA `89c4316a0f7841bd69f6301e30756c240414d950`. Esta referencia acredita que existió; no significa que el archivo esté presente en el `main` actual.
- **Fuente original vigente:** `lore/danmachi/volumes/main/Volumen [01] • DanMachi.md` permanece en `main`, blob SHA `d2b3306b1661584d9a42d651f57dca8a6814b20b`. El texto de extracción y los localizadores narrativos continúan en DMR-061 y en los registros de eventos vinculados.
- **Decisión de integridad:** no restaurar silenciosamente `volume-01.md` dentro de `volumes/main/`, porque esa carpeta está reservada a las cargas originales de volúmenes. No se perdió el texto fuente original ni debe confundirse la eliminación intencional del dossier con una rama pendiente de integrar.


## Addendum — reconciliación de controles visuales y estado vigente (2026-11-01)

- **Controles visuales anteriormente pendientes:** DMR-061 documenta posteriormente la inspección física/renderizada de PDF pp.19–24 y pp.49–54. En particular, el checkpoint de tres pasadas pp.1–60 registra pp.19–24 y pp.49–54 renderizadas; p.22 y otros folios ilustrados se describen sin inferir identidades no rotuladas. Estas tareas visuales de la lista histórica quedan resueltas por esa evidencia, sin afirmar que el MD sea una fuente independiente.
- **Paginación inicial:** PDF pp.1–7 fueron inspeccionadas visualmente; p.8 está en blanco. Las pp.9–10 se cotejaron directamente con el PDF y ya están incorporadas en la auditoría de tercera pasada de DMR-061, en `EVT-DM-BELL-AIS-MINOTAUR-001` y en la sección de apertura `CONT-MAIN-LN` de `characters/bell-cranel.md`: p.9 conserva la fantasía heroica inicial de Bell y p.10 su crisis como aventurero Lv.1 perseguido por el Minotauro. No se crea un evento nuevo. La reconciliación de pasada 1 del resto del volumen sigue pendiente.
- **Pasadas:** DMR-061 registra pasadas 2 y 3 completas en pp.9–156 y conserva las tres pasadas documentadas en pp.157–214. La pasada 1 de pp.9–214 aún necesita reconciliación explícita por folio; la cobertura secuencial histórica no basta para certificarla.
- **Pendientes DMR-062 que permanecen:** normalización granular de reglas del Dungeon, Piedras Mágicas, Falna/Estado y Daga de Hestia; revisión de candidatos Frog Shooter/War Shadows/Dungeon Lizard sin duplicar eventos; comprobación de personajes/menciones Anya, Ryuu, Misha y Hephaistos bajo CONT-MAIN-LN; discrepancias de traducción y cotejo japonés/otra edición cuando sea accesible.
- **Límite de esta actualización:** el conector de GitHub sigue devolviendo contenido vacío al solicitar el archivo fuente Markdown de V1 (blob `d2b3306b1661584d9a42d651f57dca8a6814b20b`). Por ello, este addendum reconcilia los controles ya documentados en DMR-061; no afirma una nueva comparación integral MD↔PDF ni una lectura nueva del original.
- **Estado:** DMR-062 continúa `PARTIAL / IN_PROGRESS`; no se declara cerrado el Volumen 1.


## Matriz inicial de trazabilidad funcional — hallazgos priorizados (2026-11-01)

Esta matriz registra hallazgos contrastados directamente contra el PDF físico, DMR-061 y los archivos funcionales de `main`. **No es todavía el censo exhaustivo de todas las afirmaciones del volumen**; la reconciliación global de la pasada 1 por folio permanece pendiente.

| ID | Página física | Elemento | Información fuente / contraste | Archivo destino | Estado | Acción / evidencia |
|---|---:|---|---|---|---|---|
| V1-AUD-001 | 9–10 | Apertura de Bell | p.9 contiene la fantasía heroica inicial; p.10 presenta a Bell Lv.1 perseguido por el Minotauro tras bajar del segundo al quinto piso. | `characters/bell-cranel.md`; `events/timeline/EVT-DM-BELL-AIS-MINOTAUR-001.md`; DMR-061 | COMPLETE | Datos ya incorporados; no crear evento nuevo. DMR-061, tercera pasada pp.9–18; PDF pp.9–10 inspeccionadas en esta auditoría. |
| V1-AUD-002 | 1–8, 215 | Material editorial | pp.1–7 son cubierta/ilustraciones/portadillas; p.8 está en blanco; p.215 contiene créditos. El PDF físico tiene 215 páginas. | DMR-061; STATUS; MASTER_INDEX | COMPLETE | Tratar p.8 como folio blanco y p.215 como créditos, no como páginas narrativas. PDF físico y `pdfinfo`; DMR-061 checkpoint pp.1–60. |
| V1-AUD-003 | 19–24; 49–54 | Inspección visual | DMR-061 documenta pp.19–24 y 49–54 renderizadas; p.22 es ilustración contextual y p.54 incluye snapshot de Bell. | DMR-061; DMR-062; `characters/bell-cranel.md` | COMPLETE | Cierra la antigua lista visual de DMR-062; p.54 fue revisada junto con la tabla. DMR-061 checkpoint pp.1–60. |
| V1-AUD-004 | 11–18, 63–66 | Minotauro | El pasaje de Eina en p.18 formula de modo ambiguo el piso habitual («15» y expresión direccional traducida); el relato posterior de Loki Familia cuenta que el grupo escapó desde el piso 17 y el último llegó al 5. | `monsters/minotaur.md`; `events/timeline/EVT-DM-BELL-AIS-MINOTAUR-001.md` | UNRESOLVED | Mantener ambas formulaciones con atribución y no normalizar la frase de p.18 sin otra edición/japonés. DMR-061, pp.11–18 y pp.63–66. |
| V1-AUD-005 | 79–85 | War Shadow | Dos ejemplares iniciales tienen desenlaces distintos: uno cae tras el golpe en la cabeza sin Piedra Mágica rota confirmada; el otro muere al romperse su Piedra Mágica. Cuatro más aparecen en p.84. | `monsters/war-shadow.md` | COMPLETE | La ficha conserva la diferencia entre individuo y especie y no crea un evento cerrado prematuro. DMR-061, segunda y tercera pasadas pp.79–85. |
| V1-AUD-006 | 159–168; 170–173 | Silverback / fuga | Freya libera personalmente un Silverback; el informe posterior cifra nueve monstruos fugados, sin demostrar que Freya liberara a los nueve. | `monsters/silverback.md`; eventos de fuga y liberación | COMPLETE | Mantener separado el ejemplar manipulado por Freya del total de la fuga. DMR-061 y ficha MON-DM-SILVERBACK-001. |
| V1-AUD-007 | 54 y 91 | Estado de Bell: Fuerza | p.54 muestra I82→H120; la columna anterior de p.91 muestra H123→G221. | `characters/bell-cranel.md`; `events/timeline/EVT-DM-V01-HESTIA-UPDATES-BELL-AFTER-WAR-SHADOW-001.md` | CONTRADICTORY | Conservar H120 y H123 con sus localizadores; no inventar una actualización intermedia. DMR-061 segunda pasada pp.91–100; tabla física p.54 y p.91. |
| V1-AUD-008 | 195 y 208 | Estado de Bell: Agilidad | La narración de p.195 muestra D512; la tarjeta gráfica de p.208 muestra D521. | `characters/bell-cranel.md`; `events/timeline/EVT-DM-V01-HESTIA-UPDATES-BELL-GIVES-DAGA-001.md` | CONTRADICTORY | Mantener ambos valores y registrar la diferencia entre narración y ficha visual; no corregir por inferencia. DMR-061 pp.178–200 y pp.201–214; inspección visual de p.208 en esta auditoría. |
| V1-AUD-009 | 132–146, 193–200, 208 | Daga de Hestia | La tarjeta visual detalla mithril, cabello/sangre divina de Hestia, Texto Sagrado y Estado propio, crecimiento por experiencia, restricción de Gracia y préstamo/contrato. | `equipment/daga-de-hestia.md`; `canon/08-indice-magia-habilidades-y-equipo.md` | PARTIAL | Se creó `OBJ-DM-HESTIA-DAGGER-001` y se enlazó desde el índice. Sigue pendiente cotejar japonés y precisar condiciones económicas que la traducción no desarrolla. PDF pp.132–146, 193–195 y p.208. |
| V1-AUD-010 | 181, 193–200, 208–209 | Dagas distintas | La daga consumible inicial de Bell se rompe contra el Silverback (p.181); la Daga de Hestia se entrega en pp.193–194 y destruye la Piedra Mágica; p.209 describe la daga inicial como consumible de bajo nivel, con coste conjunto de equipo de 8.600 Varisu. | ficha de Bell; ficha OBJ-DM-HESTIA-DAGGER-001; eventos de persecución y derrota | COMPLETE | No fusionar el arma inicial, la Daga de Hestia ni la daga blanca del escaparate (pp.128–129). PDF p.181, pp.193–200 y fichas visuales pp.208–209. |
| V1-AUD-011 | 57–63, 98–100, 203–204 | La Señora de la Abundancia | p.57 identifica el local con su nombre y edificio de dos pisos; p.58 describe el interior; p.62 identifica a la jefa como Mia en la traducción. Las visitas posteriores y la ayuda de Seal están localizadas. | `places/hostess-of-fertility.md`; `places/00-indice-lugares.md`; fichas de Seal y Mia | COMPLETE | Se añadió sección CONT-MAIN-LN y localizadores a la ficha del local, se actualizó el índice y se mantuvo Mia sin apellido importado de anime. La ficha sigue parcial como entidad geográfica global, pero el hallazgo de cobertura V1 está incorporado. DMR-061 y PDF pp.57–63, 98–100, 203–204. |
| V1-AUD-012 | 123–124 | Ocho avenidas | La novela principal confirma ocho avenidas orientadas desde el centro hasta las murallas; el trazado como cuatro líneas que cruzan el centro pertenece solo a Prototype. | `places/main-streets.md`; `places/00-indice-lugares.md` | COMPLETE | Se corrigió el estado para reconocer la evidencia de novela principal y mantener el trazado de cuatro líneas exclusivamente en CONT-PROTOTYPE. PDF pp.123–124. |
| V1-AUD-013 | 1–214 | Comparación MD↔PDF | El PDF está disponible y el expediente Markdown de trabajo declara 7.251 líneas, pero la API de GitHub devuelve contenido vacío para el blob original del MD (SHA `d2b3306b1661584d9a42d651f57dca8a6814b20b`). | DMR-062; fuente MD original | PARTIAL | No afirmar cotejo integral del MD. Seguir pendiente hasta recuperar los bytes o texto completo de la transcripción. DMR-062 §1 y addenda 2026-11-01. |
| V1-AUD-014 | 12–14, 19–22; 140–145 | Ais y Eina | Las fichas contienen localizadores específicos de V1, pero sus cabeceras aún conservan «localizador pendiente» y sus secciones de verificación sugieren que las primeras apariciones no se revisaron. | `characters/ais-wallenstein.md`; `characters/eina-tulle.md` | COMPLETE | Se sincronizaron source_refs y se sustituyeron los avisos obsoletos sobre primeras apariciones por localizadores V1 concretos. Las biografías amplias siguen incompletas, pero no forman parte de este hallazgo de localización. DMR-061 y fichas actuales. |

| V1-AUD-015 | 19 | Reputación/epíteto reportado de Ais | Eina valora su esgrima en la cima de los aventureros y refiere el elogio «Aizu no tiene paralelo en el mundo» entre los dioses, además de la derrota individual de un grupo de monstruos Lv.5. | characters/ais-wallenstein.md; events/candidates/EVT-DM-EINA-ADVISOR-001.md | COMPLETE | Hallazgo ausente del primer cruce; añadido a ambas fichas/evento con atribución a Eina/traducción. Se conserva como elogio reportado, no como alias oficial estable. PDF p.19, DMR-061 y commits de esta tanda. |

| V1-AUD-016 | 33 | Escala de atributos y dominio | El cuadro de Bell Lv.1 presenta cinco atributos; la explicación de p.33 enumera grados S–I, define I=0–99, H=100–199 y un máximo de 999; relaciona el aumento con acciones conectadas al atributo. | canon/04-aventureros-y-progresion.md; EVT-DM-V01-HESTIA-UPDATES-BELL-AFTER-MINOTAUR-001.md | COMPLETE | La escala parcial y ejemplos se añadieron a la ficha funcional de progresión, sin inventar rangos intermedios ni fórmula. PDF p.33, DMR-061 y commit d20baac273a1ca95ef0b81d169e8985fffe17729. |
| V1-AUD-017 | 31 | Comentario sobre costumbres raciales | Bell dice haber oído que los Elfos no se dan la mano sin aceptación mutua; Hestia contrapone otras costumbres y habla de Amazonas que podrían unirse a hombres fuertes para tener hijos fuertes. | characters/hestia.md; EVT-DM-V01-HESTIA-UPDATES-BELL-AFTER-MINOTAUR-001.md | COMPLETE | Se añadió a la ficha de Hestia con atribución a la conversación, separando el rumor de Bell y la generalización de Hestia de reglas universales o juicios sobre individuos. PDF p.31, commit 0d091bea26b5c6d0bd6eab827e1e400a7ac0e5e1. |

| V1-AUD-018 | 39–41 | Convivencia Bell/Hestia | Bell abraza suavemente a Hestia, se siente abrumado por la proximidad, la aparta, la cubre y sale; Hestia murmura «Bell-kun, idiota» después de su salida. | characters/bell-cranel.md; characters/hestia.md | COMPLETE | La descripción funcional se amplió en ambos perfiles con separación de perspectivas y límite de conocimiento; no se crea evento o relación formal. PDF pp.39–41, DMR-061 y commits 7c9ae0758b880fcdf9587fa585783a67393ce0bc / f31bb9ca96c96c943808cede2dab19013b0499f8. |

| V1-AUD-019 | 49, 51 | Táctica de supervivencia y carga de equipo | Bell no tiene maestro ni compañeros; considera socialmente arriesgado pedir métodos a otras Familias y elige luchar 1 contra 1, no cazar profundo y aprovechar el terreno. La mochila no es mágica, el peso permanece y no tiene Ayudante. | characters/bell-cranel.md; EVT-DM-V01-BELL-DEFEATS-KOBOLD-PARTY-001 | COMPLETE | Se incorporó la decisión y las limitaciones de transporte en ficha y evento; no generalizar la estrategia ni una prohibición de pedir ayuda. PDF pp.49, 51. |
| V1-AUD-020 | 50–52 | Economía de Piedra Mágica y cartografía del Dungeon | p.50 enumera usos de encendido/congelación y exportación de productos; p.51 señala que las partes de monstruo suelen valer más que las Piedras Mágicas; p.52 menciona mapas vendibles al Gremio, mayor tamaño de zonas inferiores y pisos sin mapas completos. | canon/05-monstruos-y-piedras-magicas.md; canon/03-dungeon-y-guild.md | COMPLETE | Se añadieron usos/valor de botín y mapas/topografía. Exportación y ganancias siguen como información oída/conjetura de Bell, no contabilidad confirmada. PDF pp.50–52. |

### Alcance de la matriz y conteo

En esta **matriz priorizada de 20 hallazgos** hay 15 `COMPLETE`, 2 `PARTIAL`, 2 `CONTRADICTORY`, 1 `UNRESOLVED`, 0 `MISSING` y 0 `SECONDARY_ONLY`. Esos conteos describen únicamente las filas anteriores; **no son el conteo global del volumen**, porque la pasada 1 aún no ha sido reconciliada de manera exhaustiva folio por folio.

### Correcciones de esta sesión

- Se creó la ficha individual `equipment/daga-de-hestia.md` con ID `OBJ-DM-HESTIA-DAGGER-001`; conserva propiedades, materiales, limitaciones, préstamo y localizadores de la tarjeta visual.
- Se enlazó la ficha individual desde `canon/08-indice-magia-habilidades-y-equipo.md`.
- Sincronizaciones funcionales verificadas en main: ficha y índice de La Señora de la Abundancia, estado de ocho avenidas, source_refs y localizadores vigentes de Ais/Eina. Los hallazgos V1 AUD-011, AUD-012 y AUD-014 pasan a COMPLETE en esta matriz. Continúan pendientes la ficha completa de otros campos biográficos, el cotejo MD↔PDF y la reconciliación global de la pasada 1.


## Reconciliación de pasada 1 — PDF pp.9–18 · 2026-11-01

**Resultado del bloque:** contraste directo página a página entre el PDF físico y los destinos funcionales existentes. No se encontró una omisión sustantiva que requiera nueva ficha o evento. Se reutilizan los IDs existentes. La ambigüedad de p.18 permanece abierta como hallazgo específico; no impide documentar los demás hechos de la página.

| Página física | Elemento / hecho de la fuente | Archivo funcional destino | Estado P1 | Acción / evidencia |
|---:|---|---|---|---|
| 9 | Prólogo: fantasía de Bell de ser héroe, rescatar a una chica, relacionarse con mujeres de otras razas, celos y harén; narrador lo califica de pensamiento inmaduro. | characters/bell-cranel.md · DMR-061 | COMPLETE | La ficha lo conserva como aspiración/contexto inicial y no como rasgo permanente. PDF p.9; DMR-061 tercera pasada pp.9–18. |
| 10 | Bell Lv.1, baja del piso 2 al 5, es perseguido por un Minotauro, queda acorralado y teme morir. | characters/bell-cranel.md · EVT-DM-BELL-AIS-MINOTAUR-001 · monsters/minotaur.md | COMPLETE | Hecho y localizador existentes; no inventar equipo ni técnica. PDF p.10; DMR-061 tercera pasada pp.9–18. |
| 11 | Bell queda sin salida; una línea atraviesa al Minotauro y lo despedaza; Bell ve un destello plateado y queda cubierto de sangre. La fuente no identifica arma, skill ni técnica. | EVT-DM-BELL-AIS-MINOTAUR-001 · monsters/minotaur.md | COMPLETE | Se registra el resultado sin nombrar técnica ni atribuir arma concreta. PDF p.11; evento existente. |
| 12 | Ilustración del rescate: mujer armada y figura oscura, sin rótulo nominal. | EVT-DM-BELL-AIS-MINOTAUR-001 · characters/ais-wallenstein.md | COMPLETE | Identidad contextualizada por texto de p.13, nunca deducida solo de la imagen. PDF p.12, inspección visual documentada. |
| 13 | Identificación textual: «Aizu Wallenstein», Princesa de la Espada, nivel 5, Loki Familia; cabello rubio, ojos dorados y armadura ligera azul. | characters/ais-wallenstein.md · EVT-DM-BELL-AIS-MINOTAUR-001 | COMPLETE | Variante «Aizu» preservada como grafía de la traducción; nivel 5 se limita a esta escena. PDF p.13. |
| 14 | Bell queda prendado de Ais y reafirma que no se equivocó al desear un encuentro en el Dungeon. No hay reciprocidad. | characters/bell-cranel.md · EVT-DM-BELL-AIS-MINOTAUR-001 | COMPLETE | Reacción unilateral ya registrada; no crear relación romántica confirmada. PDF p.14. |
| 15 | Portadilla ilustrada del capítulo 1 con texto japonés; no es una escena narrativa ni identifica nominalmente a la figura. | characters/ais-wallenstein.md · DMR-061 | COMPLETE | Se conserva como material editorial sin asignar identidad por apariencia. PDF p.15, inspección visual documentada. |
| 16 | Eina trabaja como asesora del Gremio; apariencia/vestimenta y condición mezcla de humana y elfa. Recuerda haber conocido a Bell casi dos semanas antes durante sus trámites; tenía 14 años entonces. Bell entra cubierto de sangre negra y pide información de Ais. | characters/eina-tulle.md · characters/bell-cranel.md · EVT-DM-EINA-ADVISOR-001 | COMPLETE | Detalles principales, edad contextual de Bell y primer contacto profesional ya constan con localizador. No fijar fecha absoluta ni edad de Eina. PDF p.16. |
| 17 | Bell y Eina conversan en una sala separada del Gremio; Eina le reprocha llegar directamente del Dungeon con sangre/mal olor y escucha el relato del rescate, incluida la huida avergonzada antes de agradecer a Ais. | EVT-DM-EINA-ADVISOR-001 · EVT-DM-BELL-AIS-MINOTAUR-001 | COMPLETE | Separación correcta entre rescate y relato posterior; no crear un segundo rescate ni una nueva identidad. PDF p.17. |
| 18 | Eina da su máxima de priorizar preparación y seguridad; considera anómalo un Minotauro Lv.2 en el piso 5; Bell promete recordar el consejo y quiere volver a encontrar a Ais. | EVT-DM-EINA-ADVISOR-001 · monsters/minotaur.md · EVT-DM-BELL-AIS-MINOTAUR-001 | COMPLETE para los hechos; UNRESOLVED para la dirección del piso habitual | La regla se atribuye a Eina como consejo, no a una norma formal de Guild. La frase traducida «decimoquinto piso o por debajo» queda sin normalizar. PDF p.18. |

### Resultado del bloque P1 pp.9–18

- 10 folios contrastados directamente con la fuente y los destinos funcionales; no se detectó información sustantiva ausente que justifique crear otra ficha o evento.
- La ambigüedad de p.18 permanece UNRESOLVED y no se corrige por inferencia.
- Ningún ID nuevo era necesario: se reutilizan Bell, Ais/Aizu, Eina, Minotauro y los eventos de rescate/asesoramiento ya existentes.
- La revisión de p.12 y p.15 conserva ambas imágenes sin identificar figuras por apariencia.
- **Siguiente bloque de reconciliación P1:** PDF pp.19–28. No repetir las pasadas 2 y 3 ya documentadas para ese tramo.
- **Límite:** el cotejo textual directo de la transcripción MD con el PDF no está incluido porque el blob MD sigue inaccesible mediante la API. Esta reconciliación es PDF↔DMR-061↔registros funcionales.

## Matriz de reconciliación de pasada 1 — PDF pp.19–28 · 2026-11-01

**Resultado del bloque:** después del contraste con PDF, DMR-061 y registros funcionales, el bloque queda reconciliado sin omisiones sustantivas pendientes. Durante el cotejo se detectaron dos detalles de la fuente no desarrollados en las fichas (reputación de Ais en p.19 y motivo del menor ingreso de Bell en p.21); se incorporaron en esta sesión. No se crean fichas ni eventos nuevos.

| Página física | Elemento / hecho de la fuente | Archivo funcional destino | Estado P1 | Acción / evidencia |
|---:|---|---|---|---|
| 19 | Eina atribuye a Ais el dominio de la espada situado en la cima de los aventureros y la derrota individual de un grupo de monstruos Lv.5; la traducción refiere el elogio «Aizu no tiene paralelo en el mundo» entre los dioses; también cita 1000 cortejos fallidos como hipérbole y dice, por oídas, que no tiene pareja. | characters/ais-wallenstein.md; events/candidates/EVT-DM-EINA-ADVISOR-001.md | COMPLETE | Se añadieron la valoración de esgrima y el elogio traducido, separados de un título oficial estable; se conserva la hipérbole y el dato sentimental atribuido a Eina. PDF p.19. |
| 20 | Eina recuerda que Bell tiene la Gracia de otra deidad y que Ais es miembro clave de Loki Familia; aconseja ver la realidad, sin ordenar a Bell abandonar sus sentimientos. | events/candidates/EVT-DM-EINA-ADVISOR-001.md; canon/02-falna-familias.md | COMPLETE | La conversación se mantiene como consejo de Eina, no como ley general de matrimonios/afiliaciones ni como prohibición formal del Gremio. PDF p.20. |
| 21 | Bell canjea Piedras Mágicas de Goblins y Dríadas por 1200 Varisu; explica que el ingreso es inferior porque pasó menos tiempo en el Dungeon al huir de Ais. Menciona reparación del arma y gastos de comida como presión para reponer equipo. Eina le anima a hacerse fuerte y confiable. | characters/bell-cranel.md; events/candidates/EVT-DM-EINA-ADVISOR-001.md | COMPLETE | Se añadió el contexto de por qué el tiempo fue menor, atribuido a Bell y a esa incursión concreta, no como tarifa o tasa general. PDF p.21. |
| 22 | Ilustración de una mujer con uniforme del Gremio y una taza; la secuencia la contextualiza como Eina, sin hechos nuevos deducidos de la imagen. | characters/eina-tulle.md; events/candidates/EVT-DM-EINA-ADVISOR-001.md | COMPLETE | Se conserva la lectura contextual y no se crea ficha ni evento visual nuevo. PDF p.22, inspección a página completa. |
| 23 | Bell se despide gritando «Eina-san, ¡Te amo!» y luego «¡Gracias!»; Eina se sorprende y se ruboriza. | characters/eina-tulle.md; events/candidates/EVT-DM-EINA-ADVISOR-001.md | COMPLETE | Se conserva el orden del diálogo y su contexto de agradecimiento; no se afirma romance ni reciprocidad. PDF p.23. |
| 24 | Bell describe su pueblo rural cercano a Orario, su abuelo como tutor, la muerte de este, la riqueza restante, las historias heroicas y el libro favorito «El Laberinto Sagrado “Calabozo”». La posible intención del abuelo al comprarlo es conjetura de Bell. | characters/bell-cranel.md | COMPLETE | Los campos constan con localizadores separados; no se inventan nombre del abuelo, cantidad de riqueza ni causa de muerte para p.24 (esta se localiza en p.184). PDF p.24. |
| 25 | Bell llega por un callejón a la iglesia deteriorada; estatua de deidad sin identificar, entrada principal sin puerta, maleza entre pisos rotos, techo derrumbado, altar conservado, habitación tras el altar con estanterías vacías y escalera. | places/hestia-familia-church.md | COMPLETE | La ficha conserva el edificio como LOC-HESTIA-HOME y no le asigna nombre oficial, coordenadas o identidad a la estatua. PDF p.25. |
| 26 | Bell encuentra a Hestia en el sótano; ella comprueba que no esté herido y expresa preocupación por su muerte; Bell promete no dejarla en la calle. Hestia cuenta un trabajo pequeño en una tienda y las croquetas; bromea con que Bell debe tener clara su decisión si un día se sube a un «gran barco». | characters/hestia.md; places/hestia-familia-church.md | COMPLETE | Se conserva el trabajo como contribución ocasional, la comida sin volverla gusto permanente y la frase del barco como metáfora/ocurrencia no interpretada literalmente. PDF p.26. |
| 27 | Explicación atribuida a Hestia: los dioses descendieron por aburrimiento del cielo, algunos permanecieron en el Mundo Inferior y buscaban experimentar desde la posición de sus «niños» y disfrutar de experiencias culturales/sociales. Familia se explica como grupo/facción de una deidad. | characters/hestia.md; canon/02-falna-familias.md | COMPLETE | La explicación se atribuye a narración/Hestia y no se generaliza a la motivación idéntica de todos los dioses. PDF p.27. |
| 28 | Se explica que los dioses no pueden usar Poder Divino en el Mundo Inferior; la Gracia se concede a miembros de una Familia, quienes ayudan a la deidad; la Gracia puede repeler monstruos de nivel inferior; Hestia llama a la relación intercambio equivalente. | canon/02-falna-familias.md; characters/hestia.md | COMPLETE | Se incorporan los límites tal como aparecen, sin inventar condiciones, excepciones o fórmula completa de Falna. PDF p.28. |

### Resultado del bloque P1 pp.19–28

- 10 folios reconciliados contra PDF, DMR-061 y registros funcionales; las dos omisiones factuales detectadas (p.19 y p.21) fueron incorporadas en las fichas/eventos existentes.
- 0 fichas, eventos o IDs nuevos; se reutilizaron Bell, Ais, Eina, Hestia, LOC-HESTIA-HOME y expedientes existentes.
- p.22 fue revisada visualmente; no se crea identidad independiente por ilustración. Los restantes folios de este bloque son páginas de texto según la inspección física documentada en DMR-061.
- **Próximo bloque de reconciliación P1:** PDF pp.29–38. No repetir P2/P3 ya documentadas.
- El cotejo textual integral MD↔PDF sigue pendiente por la inaccesibilidad del blob original de la transcripción.

## Matriz de reconciliación de pasada 1 — PDF pp.29–38 · 2026-11-01

**Resultado del bloque:** contraste de diez páginas con el PDF físico, DMR-061 y los registros funcionales. La información sustantiva ya estaba mayoritariamente incorporada. Se corrigieron dos huecos de modelado: el resumen de la escala de atributos/domino de p.33 no figuraba en el documento funcional de progresión; el comentario de Hestia sobre costumbres atribuidas a Elfos/Amazonas estaba en el evento, pero no en su ficha individual. Ambos destinos ya están actualizados. No se crean eventos ni IDs.

| Página física | Elemento / hecho de la fuente | Archivo funcional destino | Estado P1 | Acción / evidencia |
|---:|---|---|---|---|
| 29 | Recuerdo del primer encuentro: Bell llega desde su aldea rural, las Familias con plazas prefieren experiencia/oficio, Hestia lo invita y Bell la sigue; la Familia se compara con tienda/imperio; Hestia había descendido recientemente y vivido en Familia de una amiga, sin fecha o identidad de la amiga. Bell formula una promesa personal de ayudarla. | events/candidates/EVT-DM-BELL-MEETS-HESTIA-001.md; characters/bell-cranel.md; characters/hestia.md; canon/02-falna-familias.md | COMPLETE | Hechos y límites ya registrados; no duplicar el encuentro del epílogo ni la concesión de Falna. PDF p.29. |
| 30 | Inicio de actualización de Estado; Hestia obtiene sangre divina y la deposita en la espalda de Bell; comentario referido de otros dioses «Loli de Pechos Grandes»; Bell ve su cabello blanco/piel pálida en el espejo. | EVT-DM-V01-HESTIA-UPDATES-BELL-AFTER-MINOTAUR-001.md; characters/hestia.md; characters/bell-cranel.md | COMPLETE | Procedimiento y broma contextual ya registrados; la expresión no se convierte en título formal. PDF p.30. |
| 31 | Hestia graba el Texto Sagrado; explica Puntos de Experiencia por acontecimientos (cantidad/calidad); Bell menciona lo que oyó sobre contacto físico de los Elfos; Hestia generaliza sobre costumbres de otras razas y Amazonas; Bell expresa que no renunciará a Ais. | EVT-DM-V01-HESTIA-UPDATES-BELL-AFTER-MINOTAUR-001.md; canon/04-aventureros-y-progresion.md; characters/hestia.md | COMPLETE | La explicación de experiencia ya estaba; se añadió el comentario racial a la ficha de Hestia con atribución y límites. PDF p.31. |
| 32 | Hestia advierte de la complejidad de vínculos/matrimonio entre Hestia Familia y Loki Familia, plantea la cuestión de la Familia de un hijo de padres de dos Familias, y posibles abusos/conflictos; después redacta una copia del Estado para Bell en lengua común. | EVT-DM-V01-HESTIA-UPDATES-BELL-AFTER-MINOTAUR-001.md; canon/02-falna-familias.md | COMPLETE | El evento ya conserva la advertencia como explicación de Hestia, no como ley universal; se mantiene sin afirmar que Bell conozca el Texto Sagrado. PDF p.32. |
| 33 | Tabla Bell Lv.1: Fuerza I77→I82; Resistencia I13; Destreza I93→I96; Agilidad H148→H172; Magia I0. Escala diez grados S–I, I=0–99, H=100–199, tope 999; acciones relacionadas con atributos contribuyen al dominio. | characters/bell-cranel.md; evento de actualización; canon/04-aventureros-y-progresion.md | COMPLETE | Snapshot ya estaba en Bell/evento; escala y relación entre acción y atributo se incorporaron a canon04 sin inventar los intervalos no enumerados. PDF p.33. |
| 34 | Hestia no sabe cuándo Bell podrá usar magia; la traducción dice que la magia fue privilegio de ciertas razas antes del descenso, aunque otros también la descubrieron; se describen entre una y tres magias, siendo más de una raro; skills son efectos bajo condiciones y más raras de descubrir. | canon/08-indice-magia-habilidades-y-equipo.md; EVT-DM-V01-HESTIA-UPDATES-BELL-AFTER-MINOTAUR-001.md | COMPLETE | Explicación parcial ya indexada con límites; no se inventan condiciones o cantidades de slots adicionales. PDF p.34. |
| 35 | La narración pasa a la perspectiva de Hestia; compara la copia de Bell con el Estado grabado y piensa que los mortales cambian en cuerpo/mente a diferencia de los dioses. | characters/hestia.md; evento de actualización | COMPLETE | Pensamiento interno ya registrado; no atribuirlo a Bell. PDF p.35. |
| 36 | Hestia ve en el Estado grabado [Deseo Inquebrantable]: acelera crecimiento, dura mientras los sentimientos de Bell no cambien y su intensidad depende de ellos. Bell no ve ni conoce el nombre/efectos en la copia. | characters/bell-cranel.md; characters/hestia.md; canon/08-indice-magia-habilidades-y-equipo.md; evento de actualización | COMPLETE | Datos, efectos y límite de conocimiento ya están en registros funcionales; no crear una segunda ficha de habilidad. PDF p.36. |
| 37 | Portadilla ilustrada del capítulo 2: figura femenina lleva una caja grande; no tiene rótulo nominal. | DMR-061; no requiere personaje/evento adicional | COMPLETE | La imagen está descrita e inspeccionada, sin inferencia de identidad; no se abre ficha por cameo editorial no identificable. PDF p.37. |
| 38 | Bell despierta alrededor de las 5:00 en el espacio subterráneo de Hestia Familia; lámpara de Piedra Mágica en techo; Bell durmió en sofá y Hestia sobre su pecho; comentario sobre tecnología humana práctica. | places/hestia-familia-church.md; characters/bell-cranel.md; characters/hestia.md | COMPLETE | Lámpara y rutina doméstica ya incorporadas; no convertir cercanía en relación romántica ni crear evento independiente. PDF p.38. |

### Resultado del bloque P1 pp.29–38

- 10 folios contrastados con PDF, DMR-061 y destinos funcionales; 2 huecos de modelado detectados y corregidos (escala p.33 en canon04; diálogo p.31 en ficha Hestia).
- No se crean personajes, eventos o IDs nuevos; se reutilizan evento de actualización, primer encuentro, perfiles y fichas de reglas/lugar.
- p.37 permanece como material editorial sin identidad; p.33 la tabla se contrasta con la copia visual y se conserva el snapshot exacto; p.36 no atribuye conocimiento de la habilidad a Bell.
- **Próximo bloque de reconciliación P1:** PDF pp.39–48. No repetir P2/P3 ya documentadas.
- El cotejo textual directo del Markdown original con el PDF sigue pendiente porque la API de GitHub no devuelve el blob MD.


## Matriz de reconciliación de pasada 1 — PDF pp.29–38 · 2026-11-01

**Resultado:** diez folios contrastados con el PDF, DMR-061 y registros funcionales. La mayor parte ya estaba integrada; se corrigieron dos huecos de modelado: la escala de dominio/rangos de p.33 en canon/04 y el comentario sobre costumbres raciales de p.31 en la ficha individual de Hestia. No se crean eventos ni entidades.

| Página física | Elemento fuente | Archivo funcional destino | Estado P1 | Evidencia / acción |
|---:|---|---|---|---|
| 29 | Recuerdo del primer encuentro, calle de reclutamiento no identificada, datos de Hestia comunicados por ella, analogía Familia/tienda y promesa personal de Bell. | EVT-DM-BELL-MEETS-HESTIA-001; Bell; Hestia; canon/02-falna-familias.md | COMPLETE | Ya incorporado con atribución y límites; no fecha absoluta, amiga ni lugar inventados. PDF p.29. |
| 30 | Inicio de actualización con sangre divina; broma «Loli de Pechos Grandes» referida de otros dioses; Bell ve pelo blanco/piel pálida en espejo. | EVT-DM-V01-HESTIA-UPDATES-BELL-AFTER-MINOTAUR-001; Hestia; Bell | COMPLETE | Procedimiento, broma como cita referida y rasgos observados ya constan; no título formal. PDF p.30. |
| 31 | Puntos de Experiencia según Hestia; comentario de Bell sobre Elfos y respuesta de Hestia sobre otras costumbres/Amazonas. | EVT-DM-V01-HESTIA-UPDATES-BELL-AFTER-MINOTAUR-001; canon/04; Hestia | COMPLETE | XP ya estaba; diálogo racial incorporado a la ficha de Hestia, como generalización del personaje, no ley universal. PDF p.31. |
| 32 | Hestia habla de restricciones sociales y conflicto potencial entre Familias al considerar matrimonio/hijo de dos afiliaciones. | EVT-DM-V01-HESTIA-UPDATES-BELL-AFTER-MINOTAUR-001; canon/02 | COMPLETE | Ya está atribuido a Hestia y contextualizado; no convertirlo en una ley universal sin cotejo/excepciones. PDF p.32. |
| 33 | Estado Bell Lv.1: I77→I82 Fuerza; I13 Resistencia; I93→I96 Destreza; H148→H172 Agilidad; I0 Magia. Escala S–I, I 0–99, H 100–199, tope 999; dominio sube con acciones pertinentes. | Bell; evento de actualización; canon/04 | COMPLETE | Snapshot ya estaba; faltaba resumen funcional de rango/acciones. Añadido a canon/04 sin completar los intervalos de grados no enumerados ni inventar fórmula. PDF p.33. |
| 34 | Magia antes del descenso, privilegio de ciertas razas pero posible descubrimiento sin Gracia; una a tres magias, varias son raras; Habilidades son efectos bajo condiciones y más raras de descubrir. | canon/08; evento de actualización | COMPLETE | El índice ya conserva la explicación parcial y la incertidumbre de Hestia sobre cuándo Bell podrá usar magia. PDF p.34. |
| 35 | Reflexión interna de Hestia sobre mortales que cambian frente a dioses que no cambian. | Hestia; evento de actualización | COMPLETE | Ya consta como pensamiento de Hestia, no audible para Bell. PDF p.35. |
| 36 | [Deseo Inquebrantable] aparece en el Estado grabado; acelera crecimiento, depende de sentimientos; la copia de Bell no lo muestra. | Bell; Hestia; canon/08; evento de actualización | COMPLETE | Ficha y evento ya separan perspectiva y conocimiento; no duplicar habilidad ni atribuírsela a Bell. PDF p.36. |
| 37 | Portadilla ilustrada del capítulo 2 con figura y caja sin rótulo nominal. | DMR-061 | COMPLETE | Ilustración inspeccionada y descrita como material editorial; no se crea personaje/evento. PDF p.37. |
| 38 | Despertar alrededor de 5:00; lámpara de Piedra Mágica; Bell durmió en sofá y Hestia sobre su pecho; escena doméstica. | LOC-HESTIA-HOME; Bell; Hestia | COMPLETE | Lámpara y rutina ya constan; no relación romántica ni evento nuevo. PDF p.38. |

### Resultado del bloque P1 pp.29–38

- 10 folios reconciliados PDF↔DMR-061↔registros funcionales.
- 2 huecos de modelado corregidos: escala p.33 incorporada a canon/04 y comentario racial p.31 incorporado a Hestia con atribución.
- No se crearon IDs, entidades o eventos nuevos. p.37 queda como material editorial no identificado.
- Próximo bloque P1: PDF pp.39–48; no repetir P2/P3 ya documentadas.
- La comparación directa MD↔PDF sigue pendiente por inaccesibilidad del blob de la transcripción.

## Matriz de reconciliación de pasada 1 — PDF pp.39–48 · 2026-11-01

**Resultado:** diez folios contrastados con el PDF físico, DMR-061 y los registros funcionales. Se amplió el registro de convivencia Bell/Hestia de pp.39–41; las demás informaciones comprobadas ya estaban en destinos funcionales existentes.

| Página física | Elemento fuente | Archivo funcional destino | Estado P1 | Evidencia / acción |
|---:|---|---|---|---|
| 39 | Bell permite el abrazo de Hestia y le corresponde con un abrazo suave; se avergüenza por la proximidad. | characters/bell-cranel.md; characters/hestia.md | COMPLETE | Se amplía la secuencia doméstica en ambos perfiles, sin atribuir relación formal. PDF p.39. |
| 40 | Ilustración monocroma de Bell y Hestia sobre el sofá. | DMR-061 | COMPLETE | Imagen contextualizada con las pp.39 y 41; no aporta identidad o relación independiente. PDF p.40. |
| 41 | Bell aparta a Hestia al sentirse abrumado, la cubre con una manta y sale; el comentario de «casi asfixia» es exageración cómica; Hestia murmura una queja cuando él ya salió; Bell recuerda que olvidó desayunar. | Bell; Hestia | COMPLETE | Se añadieron la salida y los límites de POV; no afirmar que Bell oye el comentario de Hestia. PDF p.41. |
| 42 | Bell percibe una mirada/presencia peligrosa, inspecciona la calle sin identificar a nadie; Seal aparece y su ropa/rasgos se describen. La edad 1–2 años mayor es solo estimación de Bell. | Bell; Seal; evento Bell–Seal | COMPLETE | La vigilancia permanece sin autor; Seal ficha conserva ropa y rasgos, edad como percepción. PDF p.42. |
| 43 | Seal devuelve una Piedra Mágica azul violácea; Bell recuerda haber entregado las demás al Gremio, pero no conoce el origen/caída de esta. Nota al pie explica «riñonera». | Seal; Bell; evento Bell–Seal | COMPLETE | Origen y momento quedan desconocidos; nota del traductor no se modela como lore. PDF p.43. |
| 44–45 | Seal trae pan y queso porque Bell no desayunó; propone que cene esa noche en el local para aumentar su sueldo; Bell acepta. | evento EVT-DM-V01-BELL-MEETS-SEAL-FLOVER-001; Seal | COMPLETE | Se conserva como desayuno e invitación aceptada; la cena no se marca como celebrada. PDF pp.44–45. |
| 46 | Intercambio de nombres Bell Cranel/Seal Flover; explicación de que Dungeon existía antes del descenso de los dioses y un precursor del Gremio combatía monstruos sin Gracia. | evento Bell–Seal; canon/03-dungeon-y-guild.md | COMPLETE | El expediente del Dungeon ya contiene el dato como narración reportada; no se inventan nombre o fecha del predecesor. PDF p.46. |
| 47–48 | Bell encuentra ocho Kobolds en el primer piso, dos ya abatidos y seis persiguen; su experiencia de novato considera inusual que se agrupen; lleva solo una daga de 20 cm y embosca a los perseguidores. | Bell; MON-DM-KOBOLD-001; EVT-DM-V01-BELL-DEFEATS-KOBOLD-PARTY-001 | COMPLETE | Grupo, perspectiva limitada y longitud/uso del arma ya registrados. Recuento final no se normaliza. PDF pp.47–48. |

### Resultado del bloque P1 pp.39–48

- 10 folios reconciliados PDF↔DMR-061↔registros funcionales.
- El único hueco de modelado sustantivo encontrado fue la secuencia Bell/Hestia de pp.39–41; se completó en ambas fichas sin crear evento o relación formal.
- El resto —Seal, mirada sin identificar, Piedra Mágica de origen desconocido, invitación no consumada, historia del Dungeon y combate Kobold— ya tenía destinos con procedencia y límites.
- Próximo bloque P1: PDF pp.49–58; no repetir P2/P3.
- El cotejo integral MD↔PDF sigue pendiente por inaccesibilidad del blob MD.

## Matriz de reconciliación de pasada 1 — PDF pp.49–58 · 2026-11-01

**Resultado del bloque:** diez páginas físicas contrastadas con PDF, DMR-061 y destinos funcionales. Se identificaron omisiones funcionales en la estrategia de supervivencia de Bell (p.49), las limitaciones reales de mochila/Ayudante (p.51), el detalle económico de Piedras Mágicas/botín (pp.50–51) y la cartografía del Dungeon (p.52). Ya se añadieron a los archivos funcionales. Los restantes folios ya tenían destinos comprobables.

| Página física | Elemento fuente | Archivo funcional destino | Estado P1 | Evidencia / acción |
|---:|---|---|---|---|
| 49 | Bell termina el combate sin heridas, pero reconoce no tener maestro, senpai ni compañeros de Familia; pedir ayuda a otras Familias podría complicar la relación con Hestia. Decide uno contra uno, evitar cazar profundo, usar el terreno y recordar las enseñanzas de Eina. | characters/bell-cranel.md; EVT-DM-V01-BELL-DEFEATS-KOBOLD-PARTY-001 | COMPLETE | Se añadió la decisión contextual a Bell y al evento. No es una regla universal ni rechazo permanente de ayuda. Recuento final de bajas continúa sin normalizar. PDF p.49. |
| 50 | Fragmentos rojo-violáceos, tamaño uña en pisos 1–4, intercambio, núcleo/fuente de vida y cuerpo que se vuelve cenizas; ejemplos de uso tecnológico para encender y conservar alimentos congelados; exportación de productos y beneficio de Orario/Gremio como información oída/reflexión de Bell; romper la Piedra Mágica la vuelve inútil. | canon/05-monstruos-y-piedras-magicas.md; EVT-DM-V01-BELL-DEFEATS-KOBOLD-PARTY-001 | COMPLETE | Se añadieron ejemplos tecnológicos y economía con atribución; no inventar valores, tasas ni beneficios exactos. La fuente de vida se atribuye a Eina; la idea de quién recibe el beneficio queda como conjetura de Bell. PDF p.50. |
| 51 | Garra derecha de Kobold recuperada como botín; algunas partes sirven como materiales de arma/armadura y normalmente superan el valor de las Piedras Mágicas, con precios variables. Bell explica que su mochila no es mágica, tiene límites y el peso permanece; sin Ayudante debe transportar él mismo el botín, lo que estorba en combate. | canon/05-monstruos-y-piedras-magicas.md; characters/bell-cranel.md; EVT-DM-V01-BELL-DEFEATS-KOBOLD-PARTY-001 | COMPLETE | Se amplió canon/05 sobre valor de botín; mochila/Ayudante y carga se añadieron a Bell y al evento. No se crea una ficha de garra ni de bolsa mágica. PDF p.51. |
| 52 | Dungeon: los pisos no cambian su terreno y no existen paredes que ataquen; la «vida» del Dungeon se refiere a autorreparación. Aventureros exploran y hacen mapas vendibles al Gremio; al descender crece rápidamente el tamaño de las áreas y muchos pisos no tienen mapa completo. | canon/03-dungeon-y-guild.md | COMPLETE | Se añadió la precisión de topografía estable y cartografía, separando rumor de observación y sin inventar mapas, nombres ni tamaños. PDF p.52. |
| 53 | Bell derrota a un Goblin y recoge un diente; recuerda un ataque cuando era niño y especula que Goblins fuera de Orario descienden de monstruos que escaparon y que los monstruos se reproducen. | EVT-DM-V01-BELL-DEFEATS-GOBLIN-AND-GETS-TOOTH-001; canon/05-monstruos-y-piedras-magicas.md | COMPLETE | El evento registra el encuentro y el diente; canon/05 conserva la hipótesis como reflexión de Bell, no regla del mundo. No fusionar con el Goblin sorpresa de p.54. PDF p.53. |
| 54 | Bell decide regresar; snapshot Lv.1: Fuerza I82→H120, Resistencia I13→I42, Destreza I96→H139, Agilidad H172→G225, Magia I0; Magia y Habilidades vacías en la copia. | EVT-DM-V01-HESTIA-UPDATES-BELL-AFTER-FIRST-EXCURSION-001; characters/bell-cranel.md | COMPLETE | Tabla visual y números ya registrados; no atribuir causa a un monstruo específico. PDF p.54. |
| 55 | Bell cuestiona el +29 de Resistencia porque recuerda un solo golpe de Goblin; Hestia guarda silencio y no explica la habilidad oculta. | EVT-DM-V01-HESTIA-UPDATES-BELL-AFTER-FIRST-EXCURSION-001; Bell; Hestia | COMPLETE | El evento ya conserva el diálogo, el POV y el límite de conocimiento. PDF p.55. |
| 56 | Hestia dice que va a una fiesta en su trabajo y anima a Bell a descansar/comer; la escena no identifica la fiesta con el Banquete de Ganesha. | EVT-DM-V01-HESTIA-UPDATES-BELL-AFTER-FIRST-EXCURSION-001; Hestia | COMPLETE | El evento ya conserva la fiesta sin nombrarla ni confundirla con otros acontecimientos. PDF p.56. |
| 57 | Bell cruza una calle principal al anochecer: trabajadores terminan su turno, aventureros regresan del Dungeon, bares y comercios llenan la vía de voces, luces y música; observa hobbits/gnomos cantando, enanos reunidos, mujeres bestia y amazonas entre la multitud. Encuentra el local de Seal, edificio de piedra de dos pisos. | places/orario.md; places/hostess-of-fertility.md; places/00-indice-lugares.md; EVT-DM-V01-BELL-HEARS-LOKI-RETELL-MINOTAUR-001 | COMPLETE | Se añadió la escena urbana a Orario como observación localizada de Bell, no como censo ni regla racial; el edificio sigue en la ficha de la taberna. No inventar nombre de calle ni dirección. PDF p.57. |
| 58 | Interior: enana en mostrador (Bell supone que es la jefa, sin confirmación en este folio), mujeres gato en cocina, camarera y elfa; Bell se siente incómodo; Seal lo reconoce y lo recibe. | places/hostess-of-fertility.md; EVT-DM-V01-BELL-HEARS-LOKI-RETELL-MINOTAUR-001; characters/seal-flover.md | COMPLETE | El evento y la ficha del lugar distinguen empleados anónimos de Mia nombrada más adelante; no crear nombres por apariencia. PDF p.58. |

### Resultado del bloque P1 pp.49–58

- 10 páginas físicas cotejadas y hallazgos asignados a registros funcionales.
- Se corrigieron detalles que antes solo estaban en DMR-061: estrategia de supervivencia de Bell (p.49), límites de mochila y carga sin Ayudante (p.51), cartografía y topografía estable del Dungeon (p.52), ejemplos económicos/tecnológicos de Piedras Mágicas (pp.50–51).
- La actualización de Estado p.54 y fiesta p.56 ya estaban integradas; visita nocturna pp.57–58 permanece en LOC-HOSTESS y el evento de la Familia Loki. La escena urbana de p.57 (movimiento nocturno, bares, música y habitantes observados por Bell) se añadió a `places/orario.md`, sin convertirla en censo demográfico ni duplicar cena/presentación de Seal.
- La cuenta final de Kobolds continúa sin normalizar. La teoría de Bell sobre Goblins/reproducción en p.53 permanece hipótesis, no regla confirmada.
- **Próximo bloque P1:** PDF pp.59–68; no repetir P2/P3 ya documentadas.
- El cotejo integral MD↔PDF sigue pendiente por inaccesibilidad del blob original del MD.



## Matriz de reconciliación de pasada 1 — PDF pp.59–68 · 2026-11-01

**Resultado:** diez páginas físicas contrastadas con PDF, DMR-061 y destinos funcionales. Se corrigieron dos puntos de modelado: la explicación de logística de expediciones de p.65 y el alcance exacto de la respuesta de Ais en p.68. Los detalles financieros de Bell, Mia y Seal ya estaban en sus destinos.

| Página física | Elemento fuente | Destino funcional | Estado P1 | Evidencia / acción |
|---:|---|---|---|---|
| 59 | Seal recibe a Bell, lo sienta en un rincón aislado de la barra y Mia bromea con que Bell comerá mucho y pagará por más platos. | EVT-DM-V01-BELL-HEARS-LOKI-RETELL-MINOTAUR-001; LOC-HOSTESS | COMPLETE | Detalle integrado al evento de la visita; no crear evento de cena independiente. PDF p.59. |
| 60 | Seal admite que pidió a Mia tratar a Bell con hospitalidad; Bell dice que su Familia es pobre y olvidó desayunar. Ingreso del día: 4.400 Varisu; habitual aproximado 2.000; comida sencilla 50; poción al menos 500. | Bell Cranel; EVT-DM-V01-BELL-HEARS-LOKI-RETELL-MINOTAUR-001 | COMPLETE | Cifras ya están en el perfil de Bell y se contextualizan en el evento. No convertirlas en tarifa universal ni saldo total. PDF p.60. |
| 61 | Daga inicial 3.600 Varisu mediante préstamo del Gremio, deuda ya pagada con obligaciones del equipo defensivo; pasta 300 Varisu; rechaza inicialmente vino por el precio. | Bell Cranel; evento de la visita; OBJ-DM-HESTIA-DAGGER-001 (solo como contraste) | COMPLETE | El perfil distingue la daga inicial de la Daga de Hestia; sin ficha nueva ni equivalencia contable con la tarjeta p.209. PDF p.61. |
| 62 | Mia construyó el local, fue aventurera y está semiactiva en su Familia con permiso de su dios; el local emplea solo mujeres y acoge a personas con distintas circunstancias. Seal disfruta conocer a desconocidos y observar cómo cambian. | LOC-HOSTESS; CHAR-SEAL-FLOVER; evento de visita | COMPLETE | Los detalles ya tienen destino. «Mia» no recibe apellido ni atributos importados de CONT-ANIME. La motivación de Seal queda contextual a su diálogo. PDF p.62. |
| 63 | Entra un grupo de unas diez personas; Bell reconoce a Ais por cabello rubio y ojos dorados; clientes identifican a Loki Familia por su emblema y comentan su fuerza. | Evento de visita; Ais; Loki Familia | COMPLETE | Se conserva aproximación numérica y reconocimiento textual; no asignar identidad individual a cada integrante. PDF p.63. |
| 64 | Loki Familia celebra el regreso de una expedición; quien brinda aparece de espaldas; Ais come modestamente y conversa con compañeras. | Evento de visita | COMPLETE | Se conserva como contexto de la misma cena; el integrante que brinda permanece anónimo. No inferir rasgos estables a partir de la escena. PDF p.64. |
| 65 | Relato de Minotauros en el piso 17 y explicación sobre desplazamiento físico piso a piso, repetición de tramos en el regreso, provisiones y cálculo del momento de retirada en expediciones profundas. | EVT-DM-V01-BELL-HEARS-LOKI-RETELL-MINOTAUR-001; canon/03-dungeon-y-guild.md | COMPLETE | Se amplió canon/03 con localizador p.65 y límites: explicación narrativa, no norma formal ni ruta cuantificada. No se crea evento independiente para logística. PDF p.65. |
| 66 | Ais relata que el último Minotauro llegó al piso 5 y que ella lo derrotó; Bell entiende que él era el «chico tomate». | EVT-DM-BELL-AIS-MINOTAUR-001; evento de visita | COMPLETE | Se reutiliza el rescate original; relato retrospectivo no es combate nuevo. PDF p.66. |
| 67 | Bete se burla de Bell; Riveria recuerda que el escape fue responsabilidad de Loki Familia y reprende la burla; voz que llama a Bell sin atribución segura. | Evento de visita; CHAR-BETE-LOGA; CHAR-RIVERIA-LJOS-ALF | COMPLETE | Reutilizar entidades existentes; conservar voz anónima y no crear relaciones/identidades por inferencia. PDF p.67. |
| 68 | Ais considera normal el miedo de Bell; dice que con Bete es «absolutamente imposible»; la pregunta posterior sobre aceptar a Bell si se declarara queda sin respuesta verbal concluyente. Bell abandona el local y una empleada lo sigue sin identificar. | Evento de visita; CHAR-AIS-WALLENSTEIN | COMPLETE | Se corrigió el matiz: rechazo explícito a Bete, no elección romántica de Bell; sin reciprocidad confirmada. Empleada anónima. PDF p.68. |

### Resultado P1 pp.59–68

- Diez folios físicos cotejados; inspección visual individual a 130 dpi: todas son páginas de texto, sin ilustraciones, tablas, diagramas ni notas al pie.
- Correcciones funcionales: canon/03 registra la logística de expediciones explicada en p.65; el evento de visita y la ficha de Ais distinguen el rechazo a Bete de la falta de respuesta sobre Bell en p.68.
- Los importes de p.60–61 ya estaban en Bell; la escena de Mia ya estaba en LOC-HOSTESS y la motivación de Seal en su ficha.
- No se crean IDs ni eventos nuevos.
- **Próximo bloque P1:** PDF pp.69–78; no repetir P2/P3.
- **Límite:** la traducción sigue sin cotejo japonés; el cotejo directo MD↔PDF completo permanece pendiente.


## Matriz de reconciliación de pasada 1 — PDF pp.69–78 · 2026-11-01

**Resultado:** diez páginas físicas contrastadas con DMR-061 y destinos funcionales. P2/P3 ya estaban documentadas y no se repitieron. Se corrigieron omisiones en la reacción cómica de Loki (p.71), el estado temporal de Bell (pp.72, 77–78) y un alias indebido de Frog Shooter.

| Página física | Elemento fuente | Destino funcional | Estado P1 | Evidencia / acción |
|---:|---|---|---|---|
| 69 | Ais sigue con la mirada a Bell, oye a una empleada gritar su nombre y piensa que «Bell» resuena más que los llamados de sus compañeros. | EVT-DM-V01-BELL-HEARS-LOKI-RETELL-MINOTAUR-001 | COMPLETE | El evento ya conserva la reacción limitada; no inferir romance ni la razón de la resonancia. PDF p.69. |
| 70 | Ilustración monocroma de Ais delante y Loki abrazándola por detrás. | DMR-061; evento de visita | COMPLETE | Contextualiza la escena; no crea identidad o relación nueva. PDF p.70. |
| 71 | Loki queda con marca roja tras la bofetada, llora/tiembla brevemente y recupera el ánimo con la exclamación «fría Aizu-tan»/«moe»; Bete queda atado y Riveria le pisa la cabeza. | EVT-DM-V01-BELL-HEARS-LOKI-RETELL-MINOTAUR-001 | COMPLETE | Se amplía el evento existente con la reacción cómica que faltaba; no se crea evento nuevo. PDF p.71. |
| 72 | Bell dirige su vergüenza contra su propia debilidad, no contra Bete ni el grupo. Piensa que no merece estar junto a «esa persona» y corre hacia Babel/Dungeon. | EVT-DM-V01-BELL-HEARS-LOKI-RETELL-MINOTAUR-001; characters/bell-cranel.md | COMPLETE | Evento existente y ficha de Bell; no identificar «esa persona» como Ais. PDF p.72. |
| 73 | Portadilla ilustrada del capítulo 3, título traducido «La Noche Antes del Despertar» y silueta abstracta. | DMR-061 | COMPLETE | Material editorial; silueta sin identificar. PDF p.73. |
| 74 | Eina y Misha trabajan a las 21:00 bajo lluvia, con horas extra por la gestión del Festival; Misha revisa la hoja de Bell preparada para el líder del equipo. | EVT-DM-EINA-ADVISOR-001 | COMPLETE | El evento existente lo documenta; Misha se mantiene como colega humana sin ficha. PDF p.74. |
| 75 | Misha comenta que Bell alcanzó el quinto piso en medio mes; Eina explica su avance imprudente, falta de preparación y riesgo, separándolo de la fuga del Minotauro por Loki Familia. Eina dice que no lo dejará avanzar mientras lo asesora. | EVT-DM-EINA-ADVISOR-001 | COMPLETE | Intención personal de Eina, no prohibición de la Guild. PDF p.75. |
| 76 | Eina recuerda «te amo» de Bell dos días antes, se ruboriza y lo considera como un hermano menor; luego Bell vuelve al Dungeon y mata un Frog Shooter. Nota propone «Rana Tiradora». | EVT-DM-EINA-ADVISOR-001; MON-DM-FROG-SHOOTER-001 | COMPLETE | El evento y la ficha existentes contienen la escena. «Rana Tiradora» se elimina de aliases porque solo es propuesta editorial. PDF p.76. |
| 77 | Bell avanza sin armadura personal, herido y con ropa/daga dañadas; sigue cazando fatigado, impulsado por deseo de alcanzar a «esa persona» no nombrada. | characters/bell-cranel.md | COMPLETE | Se añade como estado temporal; no se crea relación o equipo nuevo. PDF p.77. |
| 78 | Bell llega inadvertidamente al sexto piso, agotado, en una sala cuadrada sin salida aparente; sin reloj no sabe cuánto tiempo lleva. Oye «Bikiri» y luego «Bikiri, Bikiri». | characters/bell-cranel.md; DMR-061 | COMPLETE | Se registra estado físico/espacial y sonido sin origen; no anticipar War Shadow (primera aparición p.79). PDF p.78. |

### Resultado P1 pp.69–78

- Diez folios físicos cotejados; ilustraciones en pp.70 y 73; nota al pie en p.76; no hay tablas de Estado.
- Se corrigió la omisión de la reacción cómica de Loki en p.71.
- Se eliminó «Rana Tiradora» del campo aliases de MON-DM-FROG-SHOOTER-001; solo queda como propuesta de la nota, no nombre confirmado.
- No se crean IDs, eventos, fichas de Misha ni entidades para silueta/sonido.
- **Próximo bloque P1:** PDF pp.79–88; no repetir P2/P3.
- **Límites:** traducción privada no cotejada con japonés; sonido de p.78 sin origen; combate continúa pp.79–85; cotejo MD↔PDF integral pendiente.


## Matriz de reconciliación de pasada 1 — PDF pp.79–88 · 2026-11-01

**Alcance:** diez folios físicos inspeccionados en el PDF original y contrastados con DMR-061, las filas temáticas existentes de DMR-062 y los destinos funcionales en `main`. P2/P3 se reutilizan como evidencia y no se repiten. Esta matriz no sustituye el cotejo integral MD↔PDF, que permanece pendiente mientras no se recuperen los bytes de la transcripción original.

| Página física | Información de la fuente | Destino funcional | Estado P1 | Acción realizada / razón sin cambio | Localizador y evidencia |
|---:|---|---|---|---|---|
| 79 | Nacimiento de una War Shadow desde la pared del sexto piso; altura aproximada 160 cm, cuerpo negro humanoide, cabeza en cruz y rostro-espejo; nota editorial «Sombra de Guerra». | `monsters/war-shadow.md`; DMR-061 | COMPLETE | La ficha de especie ya contiene los rasgos y el origen. No añadir «Sombra de Guerra» como alias canónico. | PDF p.79, render e inspección física; DMR-061 extracción pp.79–80. |
| 80 | Segunda War Shadow; emboscada dos contra uno; ausencia de órganos vocales, tres dedos largos por mano, velocidad y valoración narrativa de capacidad de combate. | `monsters/war-shadow.md`; `characters/bell-cranel.md` | COMPLETE | La especie ya está documentada; el perfil de Bell incorpora la experiencia de la emboscada. Sin entidad individual. | PDF p.80; DMR-061; ficha MON-DM-WAR-SHADOW-001. |
| 81 | Ataques desde varios ángulos, brazos largos y retráctiles; cortes en ropa y piel de Bell, sudor, sangre y percepción de peligro mortal. | `monsters/war-shadow.md`; `characters/bell-cranel.md` | COMPLETE | Táctica de especie ya integrada; se añadió la experiencia y el daño temporal de Bell a su ficha. | PDF p.81; DMR-061; diff de `characters/bell-cranel.md`. |
| 82 | Bell reflexiona sobre el crecimiento anormal del Estado; el Texto Sagrado parece reaccionar a sus pensamientos; recibe un golpe en el hombro, suelta la daga y recuerda la sonrisa de la deidad que le concedió la Gracia. | `characters/bell-cranel.md` | COMPLETE | Se incorporó el episodio sin inventar snapshot, mecanismo ni causa de la anomalía. | PDF p.82; DMR-061; perfil Bell. |
| 83 | Primera War Shadow cae de rodillas tras el golpe al rostro sin confirmación de Piedra Mágica rota; segunda muere cuando Bell rompe su Piedra Mágica y se vuelve cenizas. | `monsters/war-shadow.md`; `characters/bell-cranel.md` | COMPLETE | La ficha de especie ya conserva la distinción; el perfil de Bell la refleja. No declarar muerta a la primera. | PDF p.83; DMR-061; ficha War Shadow y perfil Bell. |
| 84 | Cuatro War Shadows adicionales nacen; monstruos del quinto piso bloquean la salida y rodean también a las War Shadows; Bell conserva una calma inusual y recoge un «Dedo de War Shadow» de las cenizas. | `monsters/war-shadow.md`; `characters/bell-cranel.md` | COMPLETE | Ya integrado en la ficha de especie; el perfil Bell añade el cerco y su reacción. La autocorrección sexto/quinto piso no se universaliza. | PDF p.84; DMR-061; ficha War Shadow y perfil Bell. |
| 85 | Bell equipa el dedo como pieza improvisada junto a una daga sin empuñadura; sus manos sangran, reafirma su aspiración de alcanzar cierta altura y comienza a luchar contra los monstruos entrantes. | `monsters/war-shadow.md`; `characters/bell-cranel.md` | COMPLETE | Se añadió a Bell sin identificar el objeto de su aspiración. No se crea ficha de objeto ni se atribuyen propiedades, estadísticas o poderes al dedo. El combate permanece abierto. | PDF p.85; DMR-061; perfil Bell. |
| 86 | Ilustración monocroma de página completa con una figura sosteniendo una copa y el título japonés del capítulo 4. | DMR-061; sin destino de entidad | COMPLETE | Se inspeccionó la imagen original; se conserva sin identidad, ficha o relación inferida. | PDF p.86, render a 110 dpi y revisión visual; DMR-061. |
| 87 | Hestia busca a Bell durante la noche, mira el reloj a las 5:00 y teme que haya sufrido un incidente; celos y culpa pertenecen a su POV. | `EVT-DM-V01-HESTIA-SEARCHES-BELL-AND-CARES-FOR-HIM-001` | COMPLETE | El evento existente cubre la búsqueda y el conocimiento limitado de Hestia; no duplicar. | PDF p.87; evento existente, secuencia p.87. |
| 88 | Bell vuelve embarrado, agotado, con pantalones rotos y tres marcas de garra en la rodilla derecha; admite haber entrado al Dungeon, sin explicar lo ocurrido. | `EVT-DM-V01-HESTIA-SEARCHES-BELL-AND-CARES-FOR-HIM-001` | COMPLETE | El evento existente ya registra su aspecto y la admisión; Hestia no recibe conocimiento del combate. | PDF p.88; evento existente, secuencia p.88. |

### Resultado de P1 pp.79–88

- **10/10 folios** reconciliados contra el PDF físico y destinos funcionales.
- Omisión real corregida: `characters/bell-cranel.md` no registraba el combate y cerco de pp.79–85; se añadió la secuencia con alcance temporal y límites de conocimiento.
- `monsters/war-shadow.md` ya contenía los hallazgos de especie y la diferencia entre los dos desenlaces; no se duplicó ni amplió con propiedades no indicadas.
- El evento de Hestia ya cubría pp.87–88 dentro de pp.87–90; no se duplicó ni se fusionó con la actualización de Estado de pp.91–97.
- No se crean IDs, alias, personajes, monstruos individuales, objetos ni relaciones.
- Próximo bloque P1: PDF pp.89–98. P2/P3 no se repiten.
- DMR-062 sigue `PARTIAL / IN_PROGRESS`; el cotejo integral MD↔PDF y la traducción privada frente al japonés siguen pendientes.

## Matriz de reconciliación de pasada 1 — PDF pp.89–98 · 2026-11-01

**Alcance:** diez folios físicos del PDF cotejados contra DMR-061, las filas temáticas existentes de DMR-062 y los destinos funcionales de `main`. Se reutiliza evidencia P2/P3 ya registrada; no se repiten esas pasadas ni sus inspecciones visuales.

| Página física | Información de la fuente | Destino funcional | Estado P1 | Acción realizada / razón sin cambio | Localizador y evidencia |
|---:|---|---|---|---|---|
| 89 | Hestia observa numerosas cicatrices, ausencia de equipo defensivo y la daga que Bell conserva como amuleto; Bell no explica la incursión. Hestia suaviza el tono, le pide bañarse y ofrece limpiar/curar las heridas; lo sostiene por la rodilla lesionada. | `EVT-DM-V01-HESTIA-SEARCHES-BELL-AND-CARES-FOR-HIM-001` | COMPLETE | Se amplía el evento existente con la observación de Hestia, el silencio de Bell y su cuidado. No se crea otro evento. | PDF p.89; DMR-061 tercera pasada; evento funcional. |
| 90 | Hestia cede la cama y bromea sobre dormir juntos; Bell acepta literalmente por agotamiento; Hestia se avergüenza; Bell expresa que quiere hacerse más fuerte. | `EVT-DM-V01-HESTIA-SEARCHES-BELL-AND-CARES-FOR-HIM-001` | COMPLETE | El evento existente ya contiene la escena y termina antes de la actualización de Estado. No confirma romance ni se fusiona con pp.91–97. | PDF p.90; evento funcional. |
| 91 | Tras una noche, Bell durmió todo el día anterior por fatiga y grita al advertir que durmió con Hestia. Hestia se sienta sobre su espalda, usa sangre divina para inscribir el Texto Sagrado y actualiza el Estado. Lv.1; Fuerza H123→G221; Resistencia I42→H101; Destreza H139→G232; Agilidad G225→F313; Magia I0. [Deseo Inquebrantable] aparece con tres efectos. | `EVT-DM-V01-HESTIA-UPDATES-BELL-AFTER-WAR-SHADOW-001`; `characters/bell-cranel.md`; `canon/08-indice-magia-habilidades-y-equipo.md` | COMPLETE | Se completa el evento con la transición omitida y método de actualización; Magia se corrige para no inventar valor anterior. Se reutiliza la habilidad existente; Hestia/lector la conocen, Bell no. V1-AUD-007 conserva H120/H123 como contradicción. | PDF p.91, bloque físico del Estado; evento y perfil Bell. |
| 92 | Hestia considera el crecimiento un salto anormal, compara el ritmo de Bell con el de otros aventureros y recuerda un muro de crecimiento. | `EVT-DM-V01-HESTIA-UPDATES-BELL-AFTER-WAR-SHADOW-001` | COMPLETE | Se conserva como estimación/recuerdo de Hestia, no como fórmula ni regla universal. | PDF p.92; DMR-061; evento funcional. |
| 93 | Hestia sopesa revelar la habilidad; teme arrogancia, accidentes y perder a Bell; también considera que ocultarla podría hacerle sentir engañado, y decide confiar en su voluntad. | `EVT-DM-V01-HESTIA-UPDATES-BELL-AFTER-WAR-SHADOW-001` | COMPLETE | Se precisa el POV de Hestia y su decisión de confiar. | PDF p.93; DMR-061; evento funcional. |
| 94 | Hestia considera [Deseo Inquebrantable] rara/no confirmada y teme el interés de otros dioses. En su POV cifra sus celos por Wallenstein en «70%, no, 90%». | `EVT-DM-V01-HESTIA-UPDATES-BELL-AFTER-WAR-SHADOW-001` | COMPLETE | Se conserva el porcentaje como pensamiento subjetivo, no regla ni rasgo permanente. | PDF p.94; DMR-061; evento funcional. |
| 95 | Hestia comunica crecimiento anormal pero oculta el nombre/efectos; reconoce aprendizaje autodidacta, técnica y experiencia de Bell; pide que no se sobreesfuerce. | `EVT-DM-V01-HESTIA-UPDATES-BELL-AFTER-WAR-SHADOW-001`; `characters/bell-cranel.md` | COMPLETE | Se precisa el reconocimiento de las capacidades propias de Bell sin atribuir todo a la habilidad. | PDF p.95; DMR-061; evento y perfil. |
| 96 | Hestia ofrece ayudarlo y prestarle su poder; pide que no la deje sola. Bell promete ser prudente, esforzarse y no dejarla sola. Hestia decide usar la invitación al Banquete para ver a Hephaistos. | `EVT-DM-V01-HESTIA-UPDATES-BELL-AFTER-WAR-SHADOW-001` | COMPLETE | La promesa y la invitación ya estaban documentadas; no se crea evento ni se afirma que el Banquete ya se celebró. | PDF p.96; evento funcional. |
| 97 | Hestia anuncia que saldrá esa noche y quizá varios días; permite que Bell vuelva al Dungeon pero pide recordar que sigue herido y considerar regresar. | `EVT-DM-V01-HESTIA-UPDATES-BELL-AFTER-WAR-SHADOW-001`; `characters/bell-cranel.md` | COMPLETE | Ya incorporado al evento y perfil de Bell. Se conserva el orden temporal respecto a la visita a Seal. | PDF p.97; evento funcional. |
| 98 | Bell recuerda no forzarse, nombra explícitamente «Wallenstein-san» como la persona a la que quiere alcanzar y piensa que recientemente ha notado atracción por los elfos al oír a una empleada elfa. Entra en La Señora de la Abundancia; dos empleadas anónimas lo reconocen. Nota 1 define nekomusume. | `characters/bell-cranel.md`; `EVT-DM-V01-BELL-RETURNS-TO-SEAL-AND-APOLOGIZES-001`; `places/hostess-of-fertility.md`; `places/00-indice-lugares.md` | COMPLETE | Se añade al perfil solo el pensamiento explícito de p.98, sin resolver referencias anónimas de pp.77/85. Evento/lugar ya contenían la visita; nota editorial, no claim. No fichar empleadas. | PDF p.98, nota al pie 1; DMR-061; evento, perfiles y lugar. |

### Resultado de P1 pp.89–98

- **10/10 folios** reconciliados contra PDF físico, DMR-061, DMR-062 y destinos funcionales. P2/P3 se reutilizaron y no se repitieron.
- Omisiones funcionales corregidas en el evento de cuidado p.89, evento de Estado p.91 y perfil/evento de Bell p.98.
- Destinos ya correctos: habilidad existente y sus tres efectos, promesa pp.95–96, visita a Seal pp.98–100, LOC-HOSTESS e índice de lugares.
- V1-AUD-007 H120/H123 continúa `CONTRADICTORY`; V1-AUD-011 ya contiene la cobertura funcional del local. No se crean IDs ni relaciones.
- Próximo bloque P1: PDF pp.99–108. P2/P3 no se repiten. Cotejo integral MD↔PDF y traducción privada frente al japonés siguen pendientes.

## Matriz de reconciliación de pasada 1 — PDF pp.99–108 · 2026-11-02

**Alcance:** diez folios físicos cotejados contra DMR-061, los destinos funcionales existentes y las inspecciones P2/P3 ya documentadas. Se reutilizan P2 pp.91–100 y pp.101–110 y P3 pp.99–108; no se repiten esas pasadas ni sus controles visuales.

| Página física | Información de la fuente | Destino funcional | Estado P1 | Acción realizada / razón sin cambio | Localizador y evidencia |
|---:|---|---|---|---|---|
| 99 | Bell se disculpa por haberse marchado sin pagar y entrega el dinero; Seal dice que su regreso ya la hace feliz y asume parte de la culpa, que Bell rechaza. | EVT-DM-V01-BELL-RETURNS-TO-SEAL-AND-APOLOGIZES-001 | COMPLETE | El evento existente ya contiene el diálogo. Se corrige su source_locators a PDF pp.98–102, pues el episodio concluye cuando Bell sale en p.102. | PDF p.99; P2 pp.91–100; P3 pp.99–108; metadatos y cuerpo del evento. |
| 100 | Seal trae la cesta de comida; aparece Mia-mama y bromea con el juguete perdido y una posible relación entre Bell y Seal. | EVT-DM-V01-BELL-RETURNS-TO-SEAL-AND-APOLOGIZES-001 | COMPLETE | Cesta y diálogo ya representados. No inferir romance, amenaza literal ni contenido exacto de la cesta. | PDF p.100; DMR-061 P2/P3; evento. |
| 101 | Mia-mama relata que Seal intentó seguir a Bell y que una elfa llamada Ryu iba a tomar medidas; aconseja priorizar sobrevivir. | EVT-DM-V01-BELL-RETURNS-TO-SEAL-AND-APOLOGIZES-001 | COMPLETE | Se preservan la atribución a Mia-mama y el carácter de advertencia/hipérbole. No se identifica a Ryu ni se confirma una acción de su parte. | PDF p.101; DMR-061 P2/P3; evento. |
| 102 | Bell se despide, decide fortalecerse sin sobreesforzarse y sobrevivir; tras salir del local, un separador inicia la descripción nocturna de Orario. | Evento de Seal; places/orario.md | COMPLETE | Separa el final de la visita de la escena urbana posterior. Orario ya recoge el cambio de escena; no se abre otro evento para la salida. | PDF p.102; DMR-061 P2/P3; evento y ficha Orario. |
| 103 | Descripción de Orario, murallas, distribución relativa de edificios, lámparas de Piedra Mágica y Babel sobre el Dungeon. Unos dioses anónimos se burlan de Takemikazuchi por la pobreza de su Familia. | places/orario.md; places/babel.md; nota contextual DMR-061 | COMPLETE | Las fichas ya contienen los datos de ciudad y Babel. La burla no se convierte en relación ni perfil: el comentario proviene de dioses anónimos y la ficha existente de Takemikazuchi Familia es CONT-ANIME. | PDF p.103; DMR-061 P3; fichas Orario/Babel. |
| 104 | Recinto de Ganesha Familia, «Yo Soy Ganesha», estatua de elefante de unos 30 metros y anuncio de Philia dentro de tres días. | EVT-DM-V01-GANESHA-GOD-BANQUET-001; characters/ganesha.md; familias/ganesha-familia.md | COMPLETE | Las fichas/evento ya registran la evidencia de CONT-MAIN-LN. No crear una ubicación individual para la estatua ni afirmar que Philia ya ocurrió. | PDF p.104; evento, perfil de Ganesha y ficha de Familia. |
| 105 | Buffet, servicio, banda y asistencia de Hestia; taburete y comida relacionados por la narración con la situación económica. Rumores burlones de dioses anónimos sobre un supuesto empleo no confirmado. | EVT-DM-V01-GANESHA-GOD-BANQUET-001; characters/hestia.md | COMPLETE | Destinos existentes ya recogen la escena y el carácter no verificado de los rumores. No convertirlos en biografía. | PDF p.105; DMR-061 P3; evento y perfil. |
| 106 | Reencuentro de Hephaistos y Hestia; apariencia visible de Hephaistos y referencia a su ayuda previa. | EVT-DM-V01-GANESHA-GOD-BANQUET-001; characters/hephaistos.md | COMPLETE | Perfil existente ya contiene los rasgos visibles y el reencuentro; no se crea otra ficha ni se infiere el ojo cubierto. | PDF p.106; DMR-061 P3; evento y perfil. |
| 107 | Antecedente de dependencia de Hestia, expulsión de la residencia y ayuda de Hephaistos con una vivienda oculta en iglesia y un empleo. Notas 2 y 3 de traducción. | EVT-DM-V01-GANESHA-GOD-BANQUET-001; characters/hephaistos.md | COMPLETE | El antecedente ya está representado en ambos destinos; las notas se mantienen como aparato de traducción, no como reglas o datos del mundo. | PDF p.107, notas 2 y 3; DMR-061 P3; evento y perfil. |
| 108 | Freya se acerca a Hestia/Hephaistos; incomodidad de Hestia y respuesta de Freya; exposición de la cautela hacia dioses de la Belleza. Al final aparece una diosa de cabello/ojos escarlata sin nombre en este folio. | EVT-DM-V01-GANESHA-GOD-BANQUET-001; characters/freya.md; figura no identificada retenida en DMR-061 | COMPLETE | Evento y ficha Freya ya contienen la escena. No atribuir un efecto mecánico concreto a Belleza ni anticipar la identidad de la figura final. | PDF p.108; DMR-061 P3; evento y perfil. |

### Resultado de P1 pp.99–108

- **10/10 folios** reconciliados contra PDF físico, DMR-061, DMR-062 y destinos funcionales reales. P2/P3 se reutilizaron sin repetirlas.
- Corrección funcional: el evento existente de regreso a Seal conserva ahora el localizador correcto PDF pp.98–102, sin crear un segundo evento.
- Destinos existentes confirmados: Seal; Banquete de Ganesha; Ganesha y su Familia; Hestia; Hephaistos; Freya; Orario y Babel.
- No se crean IDs, relaciones ni entidades. Las identidades no confirmadas y los rumores permanecen sin resolver; las notas p.107 no se elevan a canon.
- Visual: diez folios de texto; p.107 tiene dos notas del traductor; no hay ilustraciones, tablas ni diagramas.
- Próximo bloque P1: PDF pp.109–118. P2/P3 no se repiten. Cotejo integral MD↔PDF y comparación de traducción privada con japonés siguen pendientes.

## Matriz de reconciliación de pasada 1 — PDF pp.109–118 · 2026-11-02

**Alcance:** diez folios físicos cotejados contra DMR-061, DMR-062 y los destinos funcionales de main. Se reutilizan P2 pp.101–110 y pp.111–120 y P3 pp.109–118; no se repiten sus extracciones, inspecciones visuales ni auditorías de continuidad.

| Página física | Hecho o elemento comprobado | Destino funcional | Estado P1 | Corrección / razón sin cambio | Localizador físico y evidencia |
|---:|---|---|---|---|---|
| 109 | Loki se incorpora, saluda a Hephaistos/Freya y habla de su Familia; Hestia pregunta por la Princesa de la Espada. Freya sonríe y cierra los ojos mientras seduce al camarero anónimo que lleva las copas. | EVT-DM-V01-GANESHA-GOD-BANQUET-001; Loki y Freya | COMPLETE | Se añade al evento el gesto/interacción de Freya que faltaba en el resumen funcional. El camarero sigue anónimo; sin ficha ni relación. | PDF p.109; DMR-061 P2 pp.101–110 / P3 pp.109–118; evento/perfiles. |
| 110 | Loki llama a Ais «su amada» y dice que no permitirá que se case; la narración describe que Ais está protegida por Loki y es tratada como un tesoro. Hestia piensa en el cuidado de Bell y desea tener pareja. | EVT-DM-V01-GANESHA-GOD-BANQUET-001; characters/loki.md; characters/hestia.md | COMPLETE | Se mantienen las atribuciones separadas. El perfil de Hestia ya contiene su comparación interna; no se añade relación recíproca o romántica a Ais. | PDF p.110; DMR-061 P2/P3; evento y perfiles. |
| 111 | Forcejeo cómico de Loki/Hestia con tirones de mejillas y apuestas de los dioses. | EVT-DM-V01-GANESHA-GOD-BANQUET-001 | COMPLETE | La escena ya está representada y no requiere evento por broma o apuesta. No se infiere conflicto formal entre Familias. | PDF p.111; DMR-061 P2/P3; evento. |
| 112 | Loki termina el forcejeo y se marcha; Freya valora su cambio de conducta. Hestia pregunta por el vínculo entre Freya y Loki y Freya responde que es tan limitado como el que mantiene con Hestia. | EVT-DM-V01-GANESHA-GOD-BANQUET-001; perfiles Freya/Loki | COMPLETE | Se amplía el evento con la respuesta de Freya. Se conserva como diálogo atribuido, no como relación formal ni cronología completa de ambas diosas. | PDF p.112; DMR-061 P2/P3; evento y perfiles. |
| 113 | Freya dice que confirmó lo que quería escuchar; Hephaistos sospecha que oyó conversaciones ajenas, sin probarlo. Freya mira a Hestia con una sonrisa distinta; Hestia parpadea. | EVT-DM-V01-GANESHA-GOD-BANQUET-001; characters/freya.md | COMPLETE | Se añade la mirada y reacción observable; no se inventa intención ni se afirma espionaje. | PDF p.113; DMR-061 P2/P3; evento y perfil. |
| 114 | Hestia recupera el propósito de su visita y decide pedir ayuda; Hephaistos le recuerda que había prometido no molestarla y exige que exponga la petición. | EVT-DM-V01-GANESHA-GOD-BANQUET-001; EVT-DM-V01-HESTIA-PETITIONS-HEPHAISTOS-DAGGER-001 | COMPLETE | El evento del Banquete cubre la vacilación; la petición explícita se conserva en su evento separado desde p.115. No se fusionan preludio y solicitud. | PDF p.114; DMR-061 P2/P3; eventos funcionales. |
| 115 | Hestia pide explícitamente un arma para Bell. La narración presenta Hephaistos Familia como Familia de herreros famosa y con alcance fuera de Orario. | Evento de Banquete; evento de petición/forja; familias/hephaistos-familia.md | COMPLETE | Solicitud y fama de la Familia ya están correctamente representadas. p.115 no prueba aceptación, diseño, precio ni fabricación. | PDF p.115; DMR-061 P2/P3; eventos y ficha de Familia. |
| 116 | Ilustración monocroma a página completa con figura de cabello oscuro, ropa clara y brazo extendido/elemento alargado; no aparece nombre. | DMR-061; sin destino individual | COMPLETE | Se reutiliza la inspección visual P3 ya documentada; la figura y el objeto aparente siguen sin identificar. No se crea personaje u objeto. | PDF p.116; DMR-061 P3, control visual individual 130 dpi. |
| 117 | Título de capítulo «La Broma de la Diosa»; Bell esquiva a un Goblin y evita el salto sorpresa de un Dungeon Lizard desde la pared. | Evento de combate; MON-DM-GOBLIN-001; MON-DM-DUNGEON-LIZARD-001 | COMPLETE | Se reutilizan evento y especies existentes. No se abre un evento por el comienzo del combate ni se identifica un individuo nuevo. | PDF p.117; DMR-061 P2/P3; evento y fichas. |
| 118 | Dungeon Lizard de bajo nivel (pisos 2–4), se adhiere a paredes/techo; Bell lo ataca por la espalda y su cuerpo cae sin cenizas. No sabe si dañó la Piedra Mágica. Goblin aún activo al impacto de la mochila, sin desenlace en p.118. | Evento de combate; fichas de Dungeon Lizard y Goblin | COMPLETE | Las fichas existentes cubren anatomía/adhesión, el cuerpo sin cenizas y la incertidumbre. El desenlace del Goblin se deja para p.119 y no se atribuye ausencia de Piedra Mágica al Lizard. | PDF p.118; DMR-061 P2/P3; evento y fichas. |

### Resultado de P1 pp.109–118

- **10/10 folios** reconciliados contra el PDF físico, DMR-061, P2/P3 existentes y destinos funcionales.
- Corrección funcional limitada al evento del Banquete: se integran gesto de Freya con el camarero, respuesta sobre su relación con Loki y mirada/sonrisa hacia Hestia con su reacción. Los demás destinos ya contenían los datos pertinentes.
- No se crean IDs, personajes, monstruos individuales, eventos, objetos, relaciones ni aliases.
- La afirmación de Loki sobre Ais sigue siendo diálogo de Loki; la descripción del narrador y la reflexión de Hestia no se fusionan en una relación recíproca. Freya no queda confirmada como espía. La ilustración p.116 continúa sin identidad.
- **Próximo bloque P1:** PDF pp.119–128. P2/P3 se conservan sin repetición. Cotejo MD↔PDF integral y traducción frente al japonés siguen pendientes.

## Matriz de reconciliación de pasada 1 — PDF pp.119–128 · 2026-11-02

**Alcance:** los diez folios se cotejaron con los resultados P2 (PDF pp.121–130) y P3 (pp.119–128) ya documentados en DMR-061/062 y con los registros funcionales de `main`. No se repitieron extracción, render ni inspección visual. DMR-061-SRC-001 sigue siendo traducción privada no cotejada con japonés.

| Página física | Información cotejada | Destino funcional | Estado P1 | Acción realizada / razón sin cambio | Localizador y evidencia |
|---:|---|---|---|---|---|
| 119 | Desenlace del Goblin: agarra la mochila, rueda, convulsiona y queda inmóvil; cae la cabeza. Bell da por terminado el combate. Rodilla derecha recuperada según su percepción; mejora física sin nuevo snapshot numérico; fragmentos de Piedra Mágica de ambos enemigos; persona a alcanzar no nombrada. | `EVT-DM-V01-BELL-FIGHTS-DUNGEON-LIZARD-GOBLIN-AND-RETURNS-001`; `characters/bell-cranel.md` | COMPLETE | Evento completado con la secuencia final y la rodilla derecha; no hay números nuevos. El referente permanece anónimo y no se enlaza con Ais/Wallenstein. | PDF p.119; DMR-061 P2 pp.121–130 / P3 pp.119–128; evento y perfil. |
| 120 | Ascenso cuarto→primer piso, tres tramos de escaleras; Goblins/Kobolds del trayecto sin recuento. Entrada por «Inicio del Camino», escalera espiral y gran vestíbulo de Babel con columnas, mobiliario, placas negras, decoración azul/blanca y representación del cielo. | Evento de combate y regreso; `places/babel.md` | COMPLETE | Se añadió detalle explícito de la llegada/vestíbulo al evento y a la ficha Babel. Sin coordenadas ni mapa; la comparación de capacidad para miles no es una medición. | PDF p.120; DMR-061 P3 pp.119–128; evento y ficha Babel. |
| 121 | Cajas con ruedas para provisiones, repuestos y botín; una se mueve y ruge. Bell deduce posible presencia de un monstruo. Babel como cubierta del Dungeon y explicación histórica. | Evento de preparativos; `places/babel.md` | COMPLETE | Destinos existentes ya conservaban los detalles y límites. No identificar especies ni cantidades ni extender arquitectura. | PDF p.121; DMR-061 P2 pp.121–130 / P3 pp.119–128; evento y lugar. |
| 122 | Conversación oída sobre Festival, Ganesha Familia y encargo del Gremio; emblema de elefante. Eina trabaja con otro empleado en documentos y Bell no interrumpe. | Evento de preparativos; `characters/eina-tulle.md`; `familias/ganesha-familia.md` | COMPLETE | Datos ya presentes en evento y fichas; conversación sigue atribuida a interlocutores oídos y Eina no interactúa con Bell. | PDF p.122; DMR-061 P2/P3; evento y fichas. |
| 123 | Ducha, entrega de botín/Piedras Mágicas al Gremio y salida nocturna; ocho avenidas, referencias NE/Oeste. | Evento de preparativos; `places/main-streets.md`; `places/orario.md` | COMPLETE | Destinos ya cubiertos. Sin importes, precios, coordenadas ni traslado de la geometría de Prototype a la novela principal. | PDF p.123; DMR-061 P2/P3; evento y fichas de ciudad. |
| 124 | Actividad comercial de la Calle Principal del Noreste y encuentro de Bell con Miach mientras compra ingredientes para la cena. | Evento de pociones; `characters/miach.md`; `places/main-streets.md` | COMPLETE | Los destinos ya conservan escena, personaje y localización urbana; no crear lugar o biografía nueva. | PDF p.124; DMR-061 P2/P3; evento y fichas. |
| 125 | Bell pregunta por Hestia y sitúa su ausencia en dos días; Miach identifica el Banquete, dice que no asistió pese a estar invitado y que ayudaba a producir artículos familiares. Entrega dos tubos de líquido azul oscuro. | `EVT-DM-V01-BELL-RECEIVES-RECOVERY-POTIONS-FROM-MIACH-001`; Miach y Miach Familia | COMPLETE | Corrección real de atribución en el evento: Bell inicia la pregunta; Miach identifica el Banquete y explica su ausencia. Se mantienen el ancla relativa sin fecha y la cortesía sin pago. | PDF p.125; DMR-061 P2/P3; evento y perfiles. |
| 126 | Ilustración monocroma a página completa con dos figuras no identificadas. | DMR-061; sin entidad individual | COMPLETE | Inspección P3 existente reutilizada. No se repite ni se asignan identidades por semejanza o contexto. | PDF p.126; DMR-061 P3, inspección individual 130 dpi. |
| 127 | Bell identifica dos pociones de recuperación, las guarda en la funda de pierna izquierda; Miach pide apoyar su Familia; exposición de actividades de Familias. | Evento de pociones; Miach y Miach Familia | COMPLETE | Contenido ya funcional. No se añade receta, ingrediente, dosis, precio, calidad, efecto ni definición legal exhaustiva. | PDF p.127; DMR-061 P2/P3; evento y fichas. |
| 128 | Sucursal roja de Hephaistos Familia y su marca; escaparate de armas y daga blanca de dientes de monstruo, no nombrada/no comprada. Bell piensa en llegar a poder usar un arma así en el contexto de alcanzar a Wallenstein. | `familias/hephaistos-familia.md`; `characters/hephaistos.md`; `characters/bell-cranel.md` | COMPLETE | Se incorpora la sucursal a la ficha de Familia y el pensamiento explícito al perfil Bell. P2 nombra a Wallenstein; P3 resume el deseo pero no repite el nombre. No identificar con la Daga de Hestia ni retroresolver las referencias anónimas previas. | PDF p.128; DMR-061 P2 pp.121–130 / P3 pp.119–128; dossier y perfiles. |

### Resultado de P1 pp.119–128

- **10/10 folios** reconciliados contra DMR-061, la matriz previa y los destinos funcionales. No se repitieron P2/P3 ni la inspección de p.126.
- Omisiones/correcciones reales: atribución de la pregunta p.125; secuencia física final del Goblin y detalle del vestíbulo p.120; sucursal de Hephaistos Familia y pensamiento de Bell en p.128.
- Los demás destinos ya contenían la información. No se crean IDs, perfiles, eventos, monstruos individuales, objetos, localizaciones, relaciones ni aliases nuevos; no se alteran catálogo ni timeline JSON.
- El intervalo de dos días sigue relativo al Banquete. Las dos pociones son cortesía, no compra, y no se mezclan con la poción de Poder Mental de V2.
- La daga blanca permanece sin nombre, sin compra y separada de la Daga de Hestia. La ilustración p.126 permanece sin identidad.
- **Siguiente bloque P1:** PDF pp.129–138. Cotejo integral MD↔PDF y traducción española frente al japonés siguen pendientes; V1 PARTIAL / IN_PROGRESS.



## Matriz de reconciliación P1 · PDF pp.129–138 · 2026-11-02

**Alcance:** contraste por folio físico entre DMR-061, los resultados P2/P3 ya documentados y los destinos funcionales de main. No se repiten las pasadas ni el render visual: P3 ya registró las diez páginas inspeccionadas individualmente a 130 dpi, todas de texto continuo.

| Página | Contenido cotejado | Destino funcional | Estado P1 | Acción / razón sin cambio | Localizador |
|---:|---|---|---|---|---|
| 129 | Hestia mantiene la dogeza en la sucursal; la petición sigue sin respuesta. | Evento de petición/forja; Hestia; Hephaistos. | COMPLETE | El evento existente conserva la insistencia y no anticipa aceptación. | PDF p.129; DMR-061 P2/P3; evento y perfiles. |
| 130 | Dos días desde el Banquete; negativa por falta de dinero y por respeto al trabajo de los herreros. | Evento de petición/forja; Hephaistos Familia. | COMPLETE | Ya cubierto. Se conserva el intervalo relativo; no se inventan precio, rebaja ni condonación. | PDF p.130; DMR-061 P2/P3; evento. |
| 131 | Motivación expresada por Hestia para apoyar a Bell; broma sobre «Take»/Takemikazuchi. | Evento de petición/forja; Hestia. | COMPLETE | Ya cubierto y atribuido a Hestia. No crear técnica, habilidad ni regla universal. | PDF p.131; DMR-061 P2/P3; evento/perfil. |
| 132 | Aceptación de Hephaistos, deuda íntegra incluso a décadas/siglos y dificultad de Hestia al levantarse por el entumecimiento. | Evento de petición/forja. | COMPLETE | El detalle de entumecimiento ya estaba en el cuerpo del evento. Se armoniza su localizador secundario para incluir p.134. | PDF p.132; DMR-061 P2/P3; evento. |
| 133 | Mithril, martillo carmesí, forja personal privada, ayuda de Hestia y explicación traducida sobre Poder Divino. | Evento de petición/forja; Hephaistos Familia. | COMPLETE | Ya cubierto; no afirmar que el arma esté terminada ni entregada. | PDF p.133; DMR-061 P2/P3; evento. |
| 134 | Dilema de diseño desde la perspectiva de Hephaistos; edad/tiempo desde Falna como recuerdos suyos. | Evento de petición/forja; Hephaistos; Bell. | COMPLETE | Ya cubierto; no convertir el recuerdo en metadatos permanentes ni resolver el diseño. | PDF p.134; DMR-061 P2/P3; evento/perfiles. |
| 135 | Preparación de Bell para regresar al Dungeon, intención de llegar al quinto piso, expectativa de mejora del Estado y posible consulta a Eina. | Bell; Eina. | COMPLETE | Perfil de Bell ya lo conserva. No registrar incursión ni cifras de Estado. | PDF p.135; DMR-061 P2/P3; perfiles. |
| 136 | Anya llama a Bell «Cabello Blanco» y le entrega el encargo del monedero de Seal. | Anya; Bell; La Señora de la Abundancia. | COMPLETE | Ya cubierto en los perfiles y la ficha del local; no añadir apellido ni contenido no visible. | PDF p.136; DMR-061 P2/P3; perfiles/lugar. |
| 137 | Ryuu corrige la explicación; Seal salió en su día libre para visitar el Festival y olvidó el monedero. | Ryuu; Anya; Seal. | COMPLETE | Ya cubierto y atribuido a las empleadas. Bell no presenció la salida de Seal. | PDF p.137; DMR-061 P2/P3; perfiles. |
| 138 | Explicación dialogada de domesticación; Bell acepta llevar el monedero por la Calle Principal del Este y deja su mochila en el establecimiento. | Bell; Ganesha Familia; La Señora de la Abundancia. | COMPLETE | Se añade la mochila dejada en el local al perfil de Bell y a la ficha del lugar; la explicación sobre domesticación se incorpora a Ganesha Familia con atribución a Anya/Ryuu y alcance limitado. El monedero no se marca como entregado. | PDF p.138; DMR-061 P2/P3; perfiles y fichas. |

### Resultado de reconciliación P1 pp.129–138

- **10/10 COMPLETE.** No se repitieron P2/P3 ni la inspección visual.
- Correcciones funcionales: localizador del evento de petición/forja armonizado hasta p.134; mochila de Bell registrada en el perfil y el lugar; explicación del Festival y domesticación añadida a Ganesha Familia como información dialogada atribuida.
- No se crea evento para la devolución, no se duplica el Festival ni se crean entidades, habilidades, monstruos, objetos, aliases o IDs.
- La petición/forja permanece separada de la entrega a Hestia en pp.145–146. El encargo del monedero permanece abierto.
- Próximo bloque P1: PDF pp.139–148. P2/P3 pp.9–156 siguen documentadas; pp.157–214 conservan sus tres pasadas. V1 PARTIAL / IN_PROGRESS.

## Matriz de reconciliación P1 · PDF pp.139–148 · 2026-11-02

**Alcance:** contraste individual por folio entre la fuente física registrada en DMR-061-SRC-001, P2 pp.131–140, P3 pp.139–148 y los destinos funcionales actuales. Se reutiliza la inspección física P3 de las diez páginas a 130 dpi; todas son páginas de texto continuo, sin ilustraciones, tablas, diagramas ni notas al pie. No se repiten extracción, render ni pasadas.

| Página física | Información cotejada | Destino funcional | Estado P1 | Acción realizada / razón sin cambio | Localizador y evidencia |
|---:|---|---|---|---|---|
| 139 | Avenida concurrida por el Festival, público diverso, niños y aventureros, banderas y emblemas de Ganesha; Freya observa desde una cafetería sin nombre con capa azul. | `EVT-DM-V01-FREYA-LOKI-CAFE-MEETING-001` | COMPLETE | Se completa el detalle del entorno festivo y el emblema de Ganesha que faltaban en el evento. No crear cafetería ni censo de Orario. | PDF p.139; DMR-061 P2 pp.131–140/P3 pp.139–148; evento actualizado. |
| 140 | Loki llega acompañada de Ais, bromea sobre la borrachera/desmayo de Freya después del Banquete y refiere la preocupación de miembros de Freya Familia; presenta a Ais. | `EVT-DM-V01-FREYA-LOKI-CAFE-MEETING-001` | COMPLETE | Diálogo y atribución ya conservados; se mantiene «unos días después» como intervalo aproximado, sin fecha absoluta. | PDF p.140; DMR-061 P2/P3; evento. |
| 141 | Fama de Ais como Princesa de la Espada; Loki le recomienda descansar tras la Expedición, acaricia su cabeza y Ais acepta. | `EVT-DM-V01-FREYA-LOKI-CAFE-MEETING-001` | COMPLETE | Se añade al evento la referencia a la fama de Ais. El gesto ya estaba; no se infiere romance o reciprocidad. | PDF p.141; DMR-061 P2/P3; evento actualizado. |
| 142 | Confrontación de Loki; el empleado se retira y el local queda vacío; Loki advierte que intervendrá si Freya perjudica a su lado. | `EVT-DM-V01-FREYA-LOKI-CAFE-MEETING-001` | COMPLETE | Se completan la retirada del empleado y el alcance de la advertencia, atribuidos a la escena y a Loki. El empleado continúa anónimo. | PDF p.142; DMR-061 P2/P3; evento actualizado. |
| 143 | Loki deduce que Freya se interesa por un joven de otra Familia y menciona el riesgo de arrebatárselo a otro dios; Freya no lo identifica expresamente aún. | `EVT-DM-V01-FREYA-LOKI-CAFE-MEETING-001` | COMPLETE | Se hace explícito el límite de conocimiento: es deducción de Loki, no identificación ni confesión de Freya en este folio. | PDF p.143; DMR-061 P2/P3; evento actualizado. |
| 144 | Freya describe al joven como vulnerable, pero puro y encantador; reconoce a Bell, de cabello blanco y equipo estándar, en dirección al Coliseo. | `EVT-DM-V01-FREYA-LOKI-CAFE-MEETING-001` | COMPLETE | Se añade el equipo estándar y se mantiene la observación a distancia; no se atribuye a Bell conocimiento del grupo. | PDF p.144; DMR-061 P2/P3; evento actualizado. |
| 145 | Freya deja la cafetería; Ais sigue con la mirada el cabello blanco de Bell. Un separador inicia la entrega de la daga a Hestia. | Evento Freya/Loki/Ais; `EVT-DM-V01-HEPHAISTOS-GIVES-DAGA-HESTIA-001` | COMPLETE | Los dos eventos ya están separados; se explicita el corte de escena en el primero y se conserva la entrega en el segundo. No fusionar acontecimientos. | PDF p.145; DMR-061 P2/P3; ambos eventos. |
| 146 | Hephaistos entrega la caja con daga/vaina negras, propone «Daga de Hestia» y confirma que el dinero sigue siendo préstamo. | `EVT-DM-V01-HEPHAISTOS-GIVES-DAGA-HESTIA-001`; `equipment/daga-de-hestia.md` | COMPLETE | Nombre, receptora inicial y deuda no condonada ya estaban documentados con localizador correcto. Bell todavía no recibe la daga. | PDF p.146; DMR-061 P2/P3; evento y ficha de equipo. |
| 147 | Hestia ve el folleto/programa del Festival, deduce que Bell podría ir al Coliseo y toma el carruaje llamado «taxi»; dios que popularizó el término no identificado. | `EVT-DM-V01-BELL-HESTIA-FESTIVAL-DATE-001` | COMPLETE | El preámbulo ya estaba en el cuerpo del evento; se añaden pp.147–148 al frontmatter de localizadores. No crear evento de taxi ni identificar al dios. | PDF p.147; DMR-061 P2/P3; evento actualizado. |
| 148 | Trayecto detenido por la multitud; 90 Varisu exactos; Hestia interpreta el pago como propina, el conductor aclara la tarifa y ella ya se ha marchado; sigue a pie con la caja y se cruza casualmente con Freya. | `EVT-DM-V01-BELL-HESTIA-FESTIVAL-DATE-001`; `characters/freya.md` | COMPLETE | El evento ya registra tarifa, confusión y encuentro; el perfil de Freya amplía el inicio del encuentro a p.148. No crear conductor, callejón ni evento separado. La conversación posterior queda fuera del rango. | PDF p.148; DMR-061 P2/P3; evento y perfil actualizados. |

### Resultado P1 pp.139–148

- **10/10 COMPLETE.** P2/P3 y la inspección visual ya documentadas se reutilizaron; no se repitieron.
- Correcciones funcionales en el evento Freya/Loki/Ais, el localizador del preámbulo Bell–Hestia y el inicio del encuentro Hestia–Freya en el perfil de Freya.
- La entrega de la daga, el nombre, la deuda y los 90 Varisu ya estaban correctamente representados en sus destinos; no se creó un segundo evento.
- No se crean IDs, entidades, relaciones, alias o registros nuevos; no se modifican `catalog.json` ni `eras-and-events.json`.
- **Próximo bloque P1:** PDF pp.149–156. P2/P3 pp.9–156 permanecen documentadas; pp.157–214 mantienen sus tres pasadas. V1 sigue PARTIAL / IN_PROGRESS.
- La traducción privada española no está cotejada con japonés y el cotejo integral independiente Markdown↔PDF sigue pendiente.

## Matriz de reconciliación P1 · PDF pp.149–156 · 2026-11-02

**Alcance:** contraste folio por folio entre DMR-061-SRC-001, P2 pp.141–150 y pp.151–156, P3 pp.149–156 y los destinos funcionales actuales. Se reutiliza la inspección física individual P3 a 130 dpi; p.154 es la única ilustración, ya inspeccionada ampliada. No se repiten extracción, render ni inspección.

| Página física | Información cotejada | Destino funcional | Estado P1 | Acción realizada / razón sin cambio | Localizador y evidencia |
|---:|---|---|---|---|---|
| 149 | Hestia pregunta a Freya por Bell y lo describe por cabello blanco y ojos rojos; Freya ofrece una indicación de ruta y su sonrisa cambia brevemente. Hestia sigue la ruta y ve a Bell al final del folio. | `characters/hestia.md`; `EVT-DM-V01-BELL-HESTIA-FESTIVAL-DATE-001` | COMPLETE | La ficha de Hestia ya conservaba la orientación; se añade p.149 al localizador del evento Bell–Hestia como preludio inmediato. No inferir motivo, engaño o plan de Freya. | PDF p.149; DMR-061 P2/P3; perfil Hestia y evento actualizado. |
| 150 | Hestia llama a Bell; él se sorprende porque creía que había desaparecido varios días, pregunta qué ocurrió y ella aplaza revelar la daga; le toma la mano. | Evento Bell–Hestia; Bell; Hestia | COMPLETE | Se completa el evento con sorpresa/pregunta y la intención de Hestia de reservar la noticia; Bell no conoce todavía esa información. No crear segundo evento. | PDF p.150; DMR-061 P2/P3; evento y perfiles. |
| 151 | Hestia propone una cita y pide dos crepes de mermelada; Bell recuerda la búsqueda y el monedero de Seal, y teme que las empleadas se preocupen. | Evento Bell–Hestia; Bell | COMPLETE | El evento ya conservaba cita/búsqueda y Bell conservaba el encargo; se precisa la orden de dos crepes y la preocupación. No marcar la tarea como abandonada ni atribuir a Hestia el conocimiento de Seal. | PDF p.151; DMR-061 P2/P3; evento y perfil Bell. |
| 152 | Hestia ofrece su crepe y alimenta a Bell; él se avergüenza por la cercanía y porque ella es una diosa. | Evento Bell–Hestia; Bell | COMPLETE | Se precisa la perspectiva/reacción de Bell; no convierte el gesto en relación formal o reciprocidad. | PDF p.152; DMR-061 P2/P3; evento y perfil Bell. |
| 153 | Hestia pide probar el crepe de Bell; él accede, observa mermelada/salsa blanca en su mejilla y empieza a levantar la mano. | Evento Bell–Hestia; Bell | COMPLETE | Se completa la secuencia como acción iniciada, sin adelantar el desenlace de p.155. | PDF p.153; DMR-061 P2/P3; evento y perfil Bell. |
| 154 | Ilustración monocroma de Bell y Hestia compartiendo el crepe, coherente con pp.152–153. | Evento Bell–Hestia; Bell | COMPLETE | La inspección ampliada y el límite de no extraer hechos independientes ya estaban documentados; no se repite la inspección ni se añade ficha/evento. | PDF p.154; DMR-061 P2/P3, inspección ampliada 130 dpi; evento y perfil Bell. |
| 155 | Bell no tiene pañuelo; Hestia le toma la mano y pide que limpie la mejilla; ambos se sonrojan, siguen tomados de la mano y ella propone croquetas. Bell disfruta el tiempo de ocio compartido. | Evento Bell–Hestia; Bell; Hestia | COMPLETE | Se completan el pañuelo ausente y el sonrojo; se conserva que comer croquetas es solo una propuesta. Ya estaba el reconocimiento de Bell sobre el poco ocio compartido. | PDF p.155; DMR-061 P2/P3; evento y perfiles. |
| 156 | Espectáculo paralelo: aproximadamente 50.000 asistentes; Battle Jabalí de unos dos metros; domadora anónima de Ganesha Familia intenta domesticarlo; altavoz de Piedras Mágicas; Eina y empleados del Gremio atienden admisión/orientación; el Gremio planifica el Festival y apoya tareas de Ganesha. | `characters/eina-tulle.md`; `monsters/battle-jabali.md`; `familias/ganesha-familia.md` | COMPLETE | Eina y MON-DM-BATTLE-JABALI-001 ya estaban completos; se añade a Ganesha la división organizativa Gremio/empleados y Familia. No crear evento, domadora, comentarista ni ejemplar individual. | PDF p.156; DMR-061 P2/P3; perfiles Eina, Battle Jabalí y Ganesha Familia. |

### Resultado P1 pp.149–156

- **8/8 COMPLETE.** P2/P3 y la inspección visual ya documentadas se reutilizaron sin repetición.
- Omisiones funcionales corregidas: detalle de p.150 y p.151–155 en el evento Bell–Hestia; matices de perspectiva en Bell y reserva de la noticia de la daga en Hestia; localizador p.149 en el evento; coordinación institucional del Gremio/Ganesha en el perfil de Ganesha.
- Eina y MON-DM-BATTLE-JABALI-001 no necesitaron cambios. p.154 no genera hechos independientes. No se creó un evento del espectáculo, que continúa después de p.156.
- No se cierran el encargo de Seal, la deuda de Hestia ni se confirma consumo de croquetas; Bell no recibe la daga en estas páginas.
- No se crean IDs, entidades, relaciones, aliases o registros duplicados. No se modifican `catalog.json` ni `eras-and-events.json`.
- **P1 pp.9–156 queda reconciliada** contra DMR-061, DMR-062 y destinos funcionales. No se asigna un siguiente rango P1 dentro de este tramo. P2/P3 pp.9–156 siguen completadas; pp.157–214 conservan sus tres pasadas. V1 permanece PARTIAL / IN_PROGRESS.
- La traducción privada española sigue sin cotejo japonés y el cotejo integral independiente Markdown↔PDF continúa pendiente.


## Auditoría independiente MD↔PDF · primera tanda · PDF pp.1–24 · 2026-11-03

**Estado de la tanda:** PARTIAL. El cotejo textual de las páginas narrativas con texto extraíble quedó realizado para 13 folios; se detectaron tres omisiones de imágenes y tres pérdidas de formato. No se reabren P1, P2 ni P3.

### Procedencia e integridad de los archivos

- **Repositorio de fuentes:** jonhararagi/botimagen-referencias-privadas, rama main, HEAD comprobado 15be6908ea02e2e083a6b14b538ba1a71245ac6e.
- **Markdown:** Volumen [01] • DanMachi.md, blob d2b3306b1661584d9a42d651f57dca8a6814b20b. Recuperado íntegramente por fetch_blob: 7.251 líneas y 4.025.426 caracteres devueltos. Contiene 16 bloques JPEG Base64; los 16 cumplen la estructura de alfabeto y padding Base64. No se editó el archivo fuente.
- **PDF:** Volumen [01] • DanMachi.pdf, blob fd43a5395983850ab1a953bb39da732b27331dcc, 7.495.544 bytes. La copia de lectura materializada desde la Biblioteca coincide exactamente con el SHA Git calculado mediante git hash-object. pdfinfo confirma 215 páginas; la extracción de texto funciona. No se convirtió, recomprimió ni guardó sobre el original.
- **Alcance de integridad:** los SHA y el tamaño verifican identidad de los objetos fuente. La prueba de Base64 realizada en esta tanda valida la forma de los 16 payloads, no una comparación binaria de cada imagen contra el raster de su página PDF.

### Método reproducible de emparejamiento

1. Extraer el texto PDF por página física, conservando los marcadores de página; no usar el número de línea Markdown como paginación.
2. Quitar las cargas Base64 del flujo de comparación, manteniendo sus líneas como anclas de imagen.
3. Localizar cada página mediante secuencias iniciales de palabras y continuidad del texto.
4. Comparar por folio la secuencia alfanumérica normalizada, retirando únicamente espacios, puntuación y sintaxis Markdown. La igualdad normalizada detecta omisiones/añadidos de palabras, pero no certifica puntuación, separación de párrafos ni fidelidad de traducción.
5. Registrar por separado la presentación de imágenes y el formato de títulos, diálogos y notas.

### Matriz por folio físico

| PDF | Localizador MD | Ancla / contenido que permite emparejar | Resultado | Categoría | Estado |
|---:|---|---|---|---|---|
| 1 | líneas 1–13, bloque de imagen 1 | Material editorial/imagen inicial; correspondencia exacta con el folio pendiente de comparación visual individual | Hay bloque Base64; no se certifica aún la correspondencia exacta | PAGE_MAPPING_UNRESOLVED | PARTIAL |
| 2 | líneas 1–13, bloque de imagen 2 | Material editorial/imagen inicial; correspondencia exacta pendiente | Hay bloque Base64; no se certifica aún la correspondencia exacta | PAGE_MAPPING_UNRESOLVED | PARTIAL |
| 3 | líneas 1–13, bloque de imagen 3 | Material editorial/imagen inicial; correspondencia exacta pendiente | Hay bloque Base64; no se certifica aún la correspondencia exacta | PAGE_MAPPING_UNRESOLVED | PARTIAL |
| 4 | líneas 1–13, bloque de imagen 4 | Material editorial/imagen inicial; correspondencia exacta pendiente | Hay bloque Base64; no se certifica aún la correspondencia exacta | PAGE_MAPPING_UNRESOLVED | PARTIAL |
| 5 | líneas 1–13, bloque de imagen 5 | Material editorial/imagen inicial; correspondencia exacta pendiente | Hay bloque Base64; no se certifica aún la correspondencia exacta | PAGE_MAPPING_UNRESOLVED | PARTIAL |
| 6 | líneas 1–13, bloque de imagen 6 | Material editorial/imagen inicial; correspondencia exacta pendiente | Hay bloque Base64; no se certifica aún la correspondencia exacta | PAGE_MAPPING_UNRESOLVED | PARTIAL |
| 7 | líneas 1–13, bloque de imagen 7 | Material editorial/imagen inicial; correspondencia exacta pendiente | Hay bloque Base64; no se certifica aún la correspondencia exacta | PAGE_MAPPING_UNRESOLVED | PARTIAL |
| 8 | sin bloque narrativo; separador antes de MD línea 15 | PDF p.8 está en blanco, según la verificación previa | No hay texto que transcribir; no se cuenta como omisión narrativa | — | COMPLETE |
| 9 | líneas 15–51 | «Prólogo — ¿Está mal esperar un encuentro en el Calabozo?» | Secuencia alfanumérica exacta; la palabra «Conclusión» queda partida como «Conclusió n» en MD línea 47 | FORMATTING_LOSS | PARTIAL |
| 10 | líneas 53–91 | Bell perseguido por el Minotauro; «¡¡Huaaaaaaaaaah!!» | Secuencia alfanumérica exacta | — | COMPLETE |
| 11 | líneas 93–131 | Callejón sin salida, corte al Minotauro y «¿Estás bien?» | Secuencia alfanumérica exacta | — | COMPLETE |
| 12 | sin bloque de imagen entre MD líneas 131 y 133 | Ilustración física de una mujer armada junto a una figura en sombra, sin rótulo nominal; descripción visual ya registrada en DMR-061 | El PDF contiene una ilustración y el MD no inserta imagen en la posición correspondiente | IMAGE_MISSING | PARTIAL |
| 13 | líneas 133–171 | Descripción textual de Aizu Wallenstein y reacción de Bell | Secuencia alfanumérica exacta; MD línea 145 separa «mirándome» como «mirándo me» | FORMATTING_LOSS | PARTIAL |
| 14 | líneas 173–176 | «¿Estaba equivocado pidiendo un encuentro fortuito…?» y «Re-conclusión» | Las palabras coinciden al normalizar, pero MD convierte el pasaje en una tabla de cuatro columnas y parte «Re-conclusión» como «Re-conclusió n» | FORMATTING_LOSS | PARTIAL |
| 15 | sin bloque de imagen entre MD líneas 176 y 178 | Portadilla ilustrada del capítulo 1 con texto japonés; no es una escena narrativa, según DMR-061 | El PDF contiene la portadilla y el MD no inserta imagen en la posición correspondiente | IMAGE_MISSING | PARTIAL |
| 16 | líneas 178–210 | «Capítulo 01 — El Mundo, Realidad y Aspiraciones»; Bell llama a Eina | Secuencia alfanumérica exacta | — | COMPLETE |
| 17 | líneas 214–252 | Conversación privada Bell–Eina y explicación del rescate | Secuencia alfanumérica exacta | — | COMPLETE |
| 18 | líneas 254–286 | «Los Aventureros no deben ir a la aventura»; explicación del piso habitual del Minotauro | Secuencia alfanumérica exacta en ambos archivos. La expresión «decimoquinto piso o por debajo» continúa siendo ambigua en esta traducción | TRANSLATION_AMBIGUITY | UNRESOLVED |
| 19 | líneas 288–322 | Eina describe la reputación de Ais y Bell pregunta por sus aficiones | Secuencia alfanumérica exacta | — | COMPLETE |
| 20 | líneas 324–358 | Salida del despacho, conversación sobre la Gracia y canje de piedras mágicas | Secuencia alfanumérica exacta | — | COMPLETE |
| 21 | líneas 360–380 | Recompensa de 1.200 Varisu y consejo de Eina | Secuencia alfanumérica exacta | — | COMPLETE |
| 22 | sin bloque de imagen entre MD líneas 380 y 382 | Ilustración monocroma de una mujer con uniforme del Gremio y una taza; la contextualización previa no autoriza a inferir identidad solo por apariencia | El PDF contiene una ilustración y el MD no inserta imagen en la posición correspondiente | IMAGE_MISSING | PARTIAL |
| 23 | líneas 382–416 | Despedida de Bell a Eina y transición a su biografía | Secuencia alfanumérica exacta | — | COMPLETE |
| 24 | líneas 418–448 | Recuerdos del abuelo, historias heroicas y llegada a la iglesia deteriorada | Secuencia alfanumérica exacta | — | COMPLETE |

### Discrepancias demostradas

**A. FORMATTING_LOSS — tres casos**

1. **PDF p.9 / MD línea 47:** el PDF contiene «Conclusión:»; el MD muestra «Conclusió n:». La secuencia de letras coincide al retirar espacios, pero el marcado divide la palabra.
   - Impacto: menor; afecta la presentación de un rótulo.
   - Acción propuesta: conservar el hallazgo y no editar la fuente original en esta auditoría.

2. **PDF p.13 / MD línea 145:** el PDF contiene «mirándome»; el MD muestra «mirándo me».
   - Impacto: menor; separación espuria dentro de una palabra.
   - Acción propuesta: registrar como pérdida de formato, no como cambio de traducción.

3. **PDF p.14 / MD líneas 173–176:** el texto continuo del PDF aparece como tabla Markdown de cuatro columnas. Además, «Re-conclusión» queda como «Re-conclusió n».
   - Impacto: moderado; altera la lectura de la pregunta y del rótulo de conclusión.
   - Acción propuesta: registrar la necesidad de restaurar párrafos/rótulos en una futura copia derivada, sin modificar el original MD.

**B. IMAGE_MISSING — tres casos**

- **PDF p.12:** ilustración de rescate sin rótulo nominal.
- **PDF p.15:** portadilla ilustrada del capítulo 1.
- **PDF p.22:** ilustración monocroma contextualizada previamente junto a la conversación de Eina.

En las posiciones correspondientes no hay bloques de imagen Markdown. Los siete bloques iniciales de MD (líneas 1, 3, 5, 7, 9, 11 y 13) están antes del prólogo; no sustituyen ni se pueden reasignar por inferencia a las imágenes físicas de pp.12, 15 y 22. No se identifica a ninguna figura sin rótulo.

### Resultado cuantitativo de la primera tanda

- **Rango físico examinado:** PDF pp.1–24 (24 folios).
- **Texto cotejado:** 13 páginas con texto extraíble (pp.9–11, 13–14, 16–21 y 23–24). Las 13 secuencias alfanuméricas coinciden exactamente tras normalizar espacios, puntuación y marcado Markdown.
- **Páginas ilustradas con omisión MD demostrada:** 3 (pp.12, 15 y 22).
- **Front matter pp.1–7:** existen siete bloques de imagen en MD, pero la correspondencia exacta imagen↔folio no queda certificada en esta tanda.
- **p.8:** folio en blanco, COMPLETE.
- **Omisiones/añadidos de palabras:** no se detectaron en las 13 páginas de texto tras normalización.
- **ORDER_ERROR / DUPLICATION:** no detectados en este rango.
- **TRANSCRIPTION_ERROR:** ninguno demostrado como cambio de palabra; los tres problemas localizados son de separación/formato.
- **TRANSLATION_AMBIGUITY:** p.18 permanece UNRESOLVED y la formulación es idéntica en PDF y MD.
- **IMAGE_MISMATCH:** no se declara ninguno; los tres casos anteriores son ausencia de imagen, no imágenes incorrectas.
- **Estado global de esta tanda:** PARTIAL; no equivale al cierre de DMR-062 ni del Volumen 1.

### Límites y continuidad

- Este cotejo demuestra correspondencia de la secuencia textual española entre PDF y MD, no fidelidad de la traducción frente al japonés.
- No se modifica la ambigüedad de p.18, el recuento de bajas Kobold, V1-AUD-007 H120/H123, V1-AUD-008 D512/D521, las condiciones económicas de la Daga de Hestia ni el monedero de Seal.
- No se repiten P1 pp.9–156, P2/P3 pp.9–156 ni las tres pasadas pp.157–214.
- No se modifican perfiles, eventos, IDs, el Markdown fuente ni el PDF.

### Próximo checkpoint

1. Resolver la correspondencia visual exacta de los siete bloques Markdown de líneas 1–13 con los folios físicos pp.1–7, sin volver a dar por hecha la relación solo por su orden.
2. Mantener registradas las tres omisiones IMAGE_MISSING y las tres pérdidas FORMATTING_LOSS; no editar el archivo original.
3. **Siguiente rango narrativo propuesto:** PDF pp.25–40, con la misma matriz de página física↔líneas MD y sin repetir P1/P2/P3.
4. DMR-062 permanece PARTIAL / IN_PROGRESS; Volumen 1 permanece PARTIAL / IN_PROGRESS. No iniciar Volumen 2.


## Addendum — cierre del mapeo visual del front matter · 2026-11-03

- **PDF físico:** materializado en modo de solo lectura desde el archivo original de la Biblioteca. Tamaño: 7.495.544 bytes. SHA-1 Git calculado sobre los bytes: `fd43a5395983850ab1a953bb39da732b27331dcc`, idéntico al blob registrado en el repositorio privado. PyMuPDF abre el archivo y confirma 215 páginas. No se guardó ni transformó el PDF.
- **Markdown:** recuperado por blob Git exacto `d2b3306b1661584d9a42d651f57dca8a6814b20b`; 7.251 líneas, 4.025.426 caracteres y 16 bloques JPEG Base64.
- **Correspondencia visual resuelta:** las siete imágenes Markdown de las líneas 1, 3, 5, 7, 9, 11 y 13 se renderizaron individualmente y se compararon visualmente con PDF pp.1–7. Cada una corresponde a su folio físico respectivo. Se cierran `PAGE_MAPPING_UNRESOLVED` para pp.1–7; resultado `COMPLETE` en la correspondencia imagen↔folio.
- **p.8:** sin texto ni imagen; folio en blanco, `COMPLETE`.
- **Omisiones de imagen confirmadas:** PDF pp.12, 15 y 22 contienen cada una una imagen física, pero no existe un bloque Markdown en la posición correspondiente. Se mantienen como `IMAGE_MISSING`, estado `PARTIAL`; no se infieren identidades a partir de las ilustraciones.
- **Anclas textuales revalidadas:** PDF p.9 / MD línea 47 (`Conclusión` / `Conclusió n`); PDF p.13 / MD línea 145 (`mirándome` / `mirándo me`); PDF p.14 / MD líneas 173–176 (pasaje convertido en tabla y `Re-conclusió n`). Se mantienen las tres `FORMATTING_LOSS` registradas. PDF p.18 y MD líneas 254–262 contienen la misma formulación traducida; `TRANSLATION_AMBIGUITY` permanece `UNRESOLVED`, sin corrección inferida.
- **Cobertura:** pp.1–24 examinadas (24 folios): siete folios ilustrados del front matter con correspondencia confirmada; p.8 en blanco; trece folios con texto cotejados según la matriz previa; pp.12, 15 y 22 con omisión de imagen; pp.9, 13 y 14 con pérdida de formato; p.18 conserva ambigüedad de traducción. No se detecta ni registra `ORDER_ERROR`, `DUPLICATION` o `TRANSCRIPTION_ERROR` demostrado en la matriz existente.
- **Método y límites:** la copia del PDF se obtuvo de la Biblioteca, no de un clon autenticado; la identidad byte a byte quedó comprobada mediante el SHA Git del blob. El cotejo MD↔PDF no demuestra fidelidad de la traducción frente al japonés.
- **Siguiente rango narrativo:** PDF pp.25–40. No repetir el mapeo pp.1–7 ni las pasadas P1/P2/P3.
- **Estado:** DMR-062 y Volumen 1 siguen `PARTIAL / IN_PROGRESS`. No se modificaron el MD fuente, el PDF ni registros funcionales.


## DMR-062 — segunda tanda de cotejo independiente MD↔PDF · Volumen 1 · PDF pp.25–40 · 2026-11-04

### 1. Procedencia e integridad verificada en esta ejecución

- **WordWaifu:** main inicial 12cf848fda1a3c5373f496125abc6c5c21f53bad.
- **Repositorio privado de fuentes:** main 15be6908ea02e2e083a6b14b538ba1a71245ac6e; no se modificó.
- **Markdown exacto:** Volumen [01] • DanMachi.md, blob Git d2b3306b1661584d9a42d651f57dca8a6814b20b, tamaño Git 4.035.130 bytes. El contenido recuperado desde ese blob contiene 7.251 líneas, 4.025.426 caracteres y 16 bloques JPEG Base64. No se sustituyó por otra copia ni edición.
- **PDF exacto:** Volumen [01] • DanMachi.pdf, blob Git fd43a5395983850ab1a953bb39da732b27331dcc, tamaño 7.495.544 bytes. La copia de lectura materializada de la Biblioteca conserva exactamente ese identificador mediante git hash-object; pdfinfo confirma 215 páginas y el archivo abre y renderiza. El SHA-1 plano del payload es 13ceaeb94727698f7e8c3b0e607a1ba4ffbd98c3; no debe confundirse con el SHA del objeto Git, que incorpora la cabecera del objeto.
- **Integridad:** el SHA de cada archivo coincide con su blob esperado. No se guardó, recomprimió, convirtió ni modificó el PDF. El Markdown fuente tampoco se editó.

### 2. Método aplicado

- Se renderizaron individualmente los 16 folios físicos PDF pp.25–40 a 150 dpi y se inspeccionaron visualmente en cuatro hojas de contacto.
- Se extrajo texto por página física como apoyo y se cotejó contra el contenido recuperado del blob exacto Markdown, usando anclas iniciales/finales, secuencia de párrafos, diálogos, cifras, separadores y continuidad.
- La paginación de referencia es siempre la física del PDF. Los números de línea MD son localizadores de navegación y no equivalen a folios.
- La revisión P1/P2/P3 previa se reutiliza solo como contexto de continuidad. No se repitió extracción funcional ni se reabrieron pasadas anteriores.
- Las 16 posiciones se revisaron de manera independiente. Las páginas solo ilustradas se registran aunque no contengan texto extraíble.

### 3. Matriz de cobertura por folio físico

| PDF físico | Localizador MD | Ancla / contenido de control | Resultado MD↔PDF | Estado |
|---:|---|---|---|---|
| 25 | líneas 450–480 | Entrada a la iglesia; estatua sin identificar; sala subterránea; primer diálogo de regreso y preocupación. | Secuencia textual y orden coincidentes; sin omisión, añadido o duplicación demostrados. | COMPLETE |
| 26 | líneas 482–514 | Respuesta sobre no dejar a Hestia en la calle; comentario del gran barco; descripción de la habitación y de la deidad; croquetas. | Texto y orden coincidentes. La frase del barco se conserva sin interpretación añadida. | COMPLETE |
| 27 | líneas 516–544 | Descenso de los Dioses, Mundo Inferior, aburrimiento, Gracia, Familias y límite del Poder Divino. | Texto, atribuciones y continuidad coincidentes. Los escapes Markdown de los signos angulares no cambian el texto visible. | COMPLETE |
| 28 | líneas 546–578 | Apoyo económico de las Familias, beneficios de la Gracia, intercambio equivalente y reflexión de Bell sobre Hestia. | Texto y orden coincidentes; sin cifras o párrafos omitidos. | COMPLETE |
| 29 | líneas 580–606 | Recuerdo del encuentro inicial, reclutamiento, condición de Hestia y promesa de Bell. | Texto y orden coincidentes; no se añade fecha ni identidad de la amiga de Hestia. | COMPLETE |
| 30 | líneas 608–644 | Preparación de la actualización de Estado, sangre divina y procedimiento sobre la espalda. | Diálogo, acciones y secuencia coincidentes. | COMPLETE |
| 31 | líneas 646–674 | Comentario sobre Elfos/Amazonas, explicación de Puntos de Experiencia y conversación sobre Ais. | Texto y orden coincidentes; no se cambian atribuciones de diálogo. | COMPLETE |
| 32 | líneas 676–708 | Restricciones entre Familias, advertencia de Hestia, reflexión de Bell y entrega del papel de Estado. | Texto y orden coincidentes; el papel se entrega al final del folio, como en el PDF. | COMPLETE |
| 33 | líneas 710–744 | Tarjeta de Bell Lv.1, Fuerza I77→I82, Resistencia I13, Destreza I93→I96, Agilidad H148→H172, Magia I0; explicación de grados y dominio. | Valores, palabras y secuencia coincidentes. El bloque estadístico MD conserva los mismos datos; no se interpreta el formato inline como cambio de cifras. | COMPLETE |
| 34 | líneas 746–780 | Explicación de magia, habilidades, secciones vacías y preparación de la cena. | Texto y orden coincidentes; no se detecta omisión de diálogo, párrafo o condición. | COMPLETE |
| 35 | líneas 782–820 | Salida de Bell hacia la cocina; cambio de POV a Hestia; repetición del Estado y primera línea de Deseo Inquebrantable. | Texto y datos coincidentes. El separador físico centrado × × × se convierte en encabezado Markdown de nivel 2 en la línea 786. | PARTIAL |
| 36 | líneas 821–824 | Continuación de los efectos de Deseo Inquebrantable y reflexión final de Hestia. | Las dos viñetas restantes y el párrafo final aparecen en el mismo orden. | COMPLETE |
| 37 | sin bloque de imagen entre líneas 824–826 | Folio ilustrado de capítulo; imagen a página completa con título japonés incrustado. | El PDF contiene una ilustración; no existe bloque de imagen Markdown en esa posición. No se infiere identidad por apariencia ni se traduce el texto incrustado. | PARTIAL |
| 38 | líneas 826–859 | Encabezado Capitulo 02 – Y Entonces Corrí y despertar de Bell en la habitación de Hestia; lámpara de Piedra Mágica y almohada. | Título, texto y secuencia coincidentes. | COMPLETE |
| 39 | líneas 860–870 | Continuación de la escena de la almohada y cierre del folio antes de la ilustración siguiente. | Texto y orden coincidentes; la repetición intencional de la escena en el PDF no se clasifica como duplicación del MD. | COMPLETE |
| 40 | sin bloque de imagen después de línea 870 y antes del texto posterior | Ilustración monocroma de página completa. | El PDF contiene una ilustración; no existe bloque de imagen Markdown en esa posición. No se atribuyen identidades a las figuras por su apariencia. | PARTIAL |

### 4. Registro de discrepancias demostradas

| ID | PDF | Localizador MD | Categoría | Evidencia PDF | Evidencia transcripción | Gravedad / impacto | Estado | Acción propuesta |
|---|---:|---|---|---|---|---|---|---|
| V1-MDPDF-035-001 | 35 | línea 786 | FORMATTING_LOSS | El separador × × × está centrado como divisor visual entre el POV de Bell y el de Hestia; no es un título de capítulo. | ## × × × lo convierte en encabezado de nivel 2 y crea jerarquía de sección. | Baja; no altera palabras ni acontecimientos, pero sí la semántica estructural del separador. | ACEPTADO | Mantener el hallazgo. En una futura copia derivada, representarlo como divisor neutral/centrado. No editar la fuente original. |
| V1-MDPDF-037-001 | 37 | ausencia de bloque entre líneas 824–826 | IMAGE_MISSING | El folio físico contiene una ilustración de página completa y el título japonés forma parte de la imagen. | No hay bloque Base64 ni imagen Markdown en la posición correspondiente; el encabezado del capítulo aparece en la página siguiente. | Media; se pierde material visual del volumen, aunque no texto narrativo adicional verificable. | ACEPTADO | Registrar la omisión; incorporar la imagen exacta solo en una derivación autorizada. No inferir identidad ni traducir texto gráfico sin cotejo. |
| V1-MDPDF-040-001 | 40 | ausencia de bloque de imagen después de línea 870 | IMAGE_MISSING | El folio físico contiene una ilustración monocroma de página completa. | No hay bloque Base64 ni imagen Markdown entre el texto de p.39 y la continuación textual posterior. | Media; se pierde material visual, sin añadir hechos narrativos por inferencia. | ACEPTADO | Registrar la omisión; incorporar la imagen exacta solo en una derivación autorizada. No identificar figuras solo por apariencia. |

### 5. Resultado cuantitativo

- **Folios físicos examinados:** 16/16 (pp.25–40).
- **Folios con texto cotejados:** 14/14 (pp.25–36 y pp.38–39). El texto se conserva en secuencia y sin omisiones, añadidos, cambios de palabra/cifra o atribuciones nuevas demostradas.
- **Folios solo ilustrados:** 2 (pp.37 y 40); ambos tienen IMAGE_MISSING en la posición correspondiente del MD.
- **Hallazgos nuevos:** 3 (1 FORMATTING_LOSS, 2 IMAGE_MISSING).
- **Estado por folio:** 13 COMPLETE y 3 PARTIAL (p.35, p.37 y p.40). El bloque está examinado en su totalidad, pero las tres discrepancias permanecen registradas.
- **No detectados en este rango:** TRANSCRIPTION_ERROR, ORDER_ERROR, DUPLICATION, IMAGE_MISMATCH, ADDED_MD o PAGE_MAPPING_UNRESOLVED.
- **Traducción:** no se detecta una ambigüedad nueva que pueda resolverse por cotejo MD↔PDF. Esta auditoría no verifica fidelidad frente al japonés.

### 6. Límites y continuidad

- Las omisiones de imagen p.37 y p.40 son nuevas en la matriz MD↔PDF; no se duplican las omisiones anteriores de pp.12, 15 y 22.
- El separador de p.35 no se clasifica como error textual. La repetición de la tarjeta de Estado entre pp.33 y 35 también aparece en el PDF y es intencional; no es DUPLICATION.
- No se modificaron perfiles, eventos, fichas, DMR-061, catálogo ni timeline. P1 pp.9–156 continúa completa; P2/P3 pp.9–156 continúan documentadas; las tres pasadas pp.157–214 se conservan.
- Se mantienen pendientes el cotejo español↔japonés, la ambigüedad de p.18, el recuento Kobold, V1-AUD-007 H120/H123, V1-AUD-008 D512/D521, las condiciones económicas de la Daga de Hestia y el monedero de Seal.
- **Siguiente tanda obligatoria:** PDF pp.41–56.
- **Estado global:** DMR-062 y Volumen 1 permanecen PARTIAL / IN_PROGRESS. No iniciar Volumen 2.

### DMR-062 — tercera tanda de cotejo independiente MD↔PDF · Volumen 1 · PDF pp.41–56 · 2026-11-04

#### 1. Procedencia e integridad

- **WordWaifu:** main inicial `60e14ec29b8979d37da0d51d5e8261155bf53e04`. Se comparó el checkpoint con `main`: `identical`, `ahead_by=0`, `behind_by=0`; no había commits posteriores sin revisar.
- **Repositorio privado de fuentes:** main `15be6908ea02e2e083a6b14b538ba1a71245ac6e`; no se modificó.
- **Markdown exacto:** blob `d2b3306b1661584d9a42d651f57dca8a6814b20b`; 4.035.130 bytes UTF-8, 7.251 líneas, 4.025.426 caracteres y 16 bloques JPEG Base64. Se recuperó por SHA de blob y se recalculó el Git blob SHA sobre `blob 4035130\\0 + contenido`, con coincidencia exacta.
- **PDF exacto:** blob `fd43a5395983850ab1a953bb39da732b27331dcc`; 7.495.544 bytes, 215 páginas. La copia materializada de Biblioteca conserva el hash Git esperado; SHA-1 plano del payload `13ceaeb94727698f7e8c3b0e607a1ba4ffbd98c3`. El PDF abre y se renderizó sin conversión ni modificación.
- **Ejecuciones previas:** Validate WordWaifu run `41853635617` = `completed / success`; DanMachi Lore and Retrieval Integrity run `41853635652` = `completed / success`. Son resultados del checkpoint anterior, no CI de este cambio.

#### 2. Método

- Se renderizaron individualmente PDF pp.41–56 a 115 dpi y se inspeccionaron las 16 páginas; se revisaron ampliadas las páginas con nota al pie y separadores/estadísticas.
- Se extrajo texto por página física y se cotejó contra el blob Markdown exacto mediante anclas iniciales/finales, párrafos, diálogos, cifras, notas y continuidad.
- Los folios se numeran por página física PDF. Las líneas Markdown son localizadores de navegación, no equivalencias de paginación.
- No se repitieron P1/P2/P3 ni el cotejo de pp.1–40.

#### 3. Matriz de cobertura

| PDF físico | Localizador Markdown | Ancla / contenido de control | Resultado MD↔PDF | Estado |
|---:|---|---|---|---|
| 41 | líneas 872–906 | Salida de Bell del sofá; caminata matutina; hambre y decisión de comprar desayuno. | Texto, diálogo y secuencia cotejados; sin discrepancia demostrada. | COMPLETE |
| 42 | líneas 908–944 | Sensación de ser observado; reacción de Bell; aparición de la empleada de la cafetería y disculpas. | Texto, descripción y atribuciones cotejados. | COMPLETE |
| 43 | líneas 946–988; nota al pie definida en línea 7240 | Piedra Mágica devuelta; riñonera; conversación; referencia de nota `[^1]` y definición. | Texto y nota preservados; la referencia y definición enlazan correctamente. | COMPLETE |
| 44 | líneas 990–1028 | Reacción al hambre de Bell; cesta con pan y queso; invitación indirecta a comer. | Texto y secuencia cotejados; regla de nota al pie presente en el PDF. | COMPLETE |
| 45 | líneas 1030–1072 | Intercambio con la empleada; invitación a cenar; Bell pregunta su nombre. | Texto y diálogo cotejados. | COMPLETE |
| 46 | líneas 1074–1116 | Seal responde su nombre; transición a explicación del Calabozo y guerreros antiguos. | El separador físico centrado `× × ×` aparece como `## × × ×` en línea 1078, creando una jerarquía de encabezado no presente en el PDF. | PARTIAL |
| 47 | líneas 1118–1152 | Bell huye de seis Kobolds por el primer piso y prepara una emboscada. | Secuencia de acciones y texto cotejados. | COMPLETE |
| 48 | líneas 1154–1194 | Daga de 20 cm; enfrentamiento; primeros Kobolds abatidos. | Texto, cifras y secuencia cotejados. | COMPLETE |
| 49 | líneas 1196–1234 | Continuación del combate; victoria; decisión de luchar con prudencia y usar el terreno. | Texto y orden cotejados. | COMPLETE |
| 50 | líneas 1236–1262 | Extracción de Piedras Mágicas; explicación de su valor y desaparición del monstruo. | Texto y secuencia cotejados; sin cifras o párrafos omitidos demostrados. | COMPLETE |
| 51 | líneas 1264–1292 | Garra como Botín; reglas de recuperación; mochila y peso del equipo. | Texto y orden cotejados. | COMPLETE |
| 52 | líneas 1294–1332 | Misterios del Calabozo, su estructura, generación de monstruos y pisos. | Texto y continuidad cotejados. | COMPLETE |
| 53 | líneas 1334–1358 | Encuentro con Goblin y obtención de Botín. | Texto y orden cotejados. | COMPLETE |
| 54 | líneas 1360–1398 | Bell decide reparar la mochila; combate; separador y tarjeta de Estado. | El separador físico centrado `× × ×` aparece como `## × × ×` en línea 1384. Los valores de la tarjeta coinciden: Fuerza I82→H120, Resistencia I13→I42, Destreza I96→H139, Agilidad H172→G225, Magia I0. | PARTIAL |
| 55 | líneas 1400–1438 | Bell cuestiona el incremento del Estado y Hestia se enfada. | Texto, cifras referidas y atribuciones cotejados. | COMPLETE |
| 56 | líneas 1440–1484 | Reacción de Hestia, salida de la casa y preparación para ir a la tienda de Seal. | Texto y secuencia cotejados; sin discrepancia demostrada. | COMPLETE |

#### 4. Hallazgos nuevos

| ID | PDF | Localizador MD | Categoría | Evidencia PDF | Evidencia Markdown | Gravedad / impacto | Estado | Acción propuesta |
|---|---:|---|---|---|---|---|---|---|
| V1-MDPDF-046-001 | 46 | línea 1078 | FORMATTING_LOSS | El signo `× × ×` aparece centrado como separador entre el diálogo de presentación de Seal y el bloque narrativo sobre el Calabozo. | `## × × ×` lo transforma en encabezado Markdown de nivel 2. | Baja; no cambia palabras ni hechos, pero añade jerarquía estructural inexistente. | ACEPTADO | Mantener el hallazgo; en una derivación autorizada, representar el signo como divisor neutral. No editar la fuente. |
| V1-MDPDF-054-001 | 54 | línea 1384 | FORMATTING_LOSS | El signo `× × ×` aparece centrado como separador entre la escena del Goblin y la tarjeta de Estado de Bell. | `## × × ×` lo transforma en encabezado Markdown de nivel 2. | Baja; no cambia palabras ni cifras, pero añade jerarquía estructural inexistente. | ACEPTADO | Mantener el hallazgo; en una derivación autorizada, representar el signo como divisor neutral. No editar la fuente. |

#### 5. Controles específicos y categorías no detectadas

- **Nota al pie p.43:** el PDF muestra la nota 1 al pie. El Markdown contiene la referencia `riñonera[^1]` en línea 962 y la definición completa en línea 7240; no se registra omisión.
- **Tarjeta de Estado p.54:** los valores y el orden coinciden con el PDF; no hay discrepancia numérica demostrada.
- **Imágenes:** no hay ilustraciones de página completa en pp.41–56; no se detecta `IMAGE_MISSING` ni `IMAGE_MISMATCH`.
- **No detectados:** `TRANSCRIPTION_ERROR`, `ORDER_ERROR`, `DUPLICATION`, `PAGE_MAPPING_UNRESOLVED` ni nueva `TRANSLATION_AMBIGUITY`.
- **Cobertura:** 16/16 folios examinados y con texto cotejado; 14 COMPLETE, 2 PARTIAL (pp.46 y 54); 2 hallazgos nuevos, ambos FORMATTING_LOSS.
- **Límites:** cotejo MD↔PDF; no demuestra fidelidad de la traducción española frente al original japonés.

#### 6. Continuidad

- Se conservan los hallazgos de pp.1–40, sin duplicarlos.
- No se modifican el PDF ni el Markdown fuente, DMR-061, fichas, eventos ni destinos funcionales.
- P1 pp.9–156, P2/P3 pp.9–156 y tres pasadas pp.157–214 permanecen fuera de alcance y conservadas.
- **Próximo rango obligatorio:** PDF pp.57–72.
- **Estado:** DMR-062 y Volumen 1 permanecen `PARTIAL / IN_PROGRESS`; no iniciar Volumen 2.


### DMR-062 — cuarta tanda de cotejo independiente MD↔PDF · Volumen 1 · PDF pp.57–72 · 2026-11-06

#### 1. Procedencia e integridad

- **WordWaifu:** main inicial 5c1ef56ae14b4112e5fb8f23dc4f4f19ab942f00; comparación main...5c1ef56 = identical, ahead_by=0, behind_by=0.
- **Markdown:** blob exacto d2b3306b1661584d9a42d651f57dca8a6814b20b, recuperado por SHA desde el repositorio. 4.035.130 bytes UTF-8, 7.251 líneas, 16 bloques JPEG incrustados. La fuente original no se modificó.
- **PDF:** Volumen [01] • DanMachi.pdf, recuperado de Biblioteca; 7.495.544 bytes, 215 páginas. SHA-1 plano del payload: 13ceaeb94727698f7e8c3b0e607a1ba4ffbd98c3, coincidente con el checkpoint de procedencia del blob Git fd43a5395983850ab1a953bb39da732b27331dcc.
- **Inspección:** se extrajo el texto de cada folio físico y se renderizaron/inspeccionaron visualmente pp.57–72 a 115 dpi. La p.70 es una ilustración de página completa sin texto extraíble. Se contrastaron los pasajes con el blob Markdown exacto, no con una copia reconstruida.
- Los localizadores Markdown indican líneas de navegación y no equivalencias de paginación.

#### 2. Matriz de cobertura

| PDF físico | Localizador Markdown | Ancla / contenido de control | Resultado MD↔PDF | Estado |
|---:|---|---|---|---|
| 57 | líneas 1482–1513 | Bell sale de la casa de Hestia y llega al establecimiento de Seal; presentación exterior de la taberna. | Texto y secuencia cotejados; sin omisión textual demostrada. | COMPLETE |
| 58 | líneas 1514–1549 | Bell observa el interior y duda antes de entrar; Seal lo recibe. | Texto, diálogos y secuencia cotejados. | COMPLETE |
| 59 | líneas 1550–1589 | Recepción en la taberna, bienvenida de Mia y reacción ante el apetito de Bell. | Texto y atribuciones cotejados. | COMPLETE |
| 60 | líneas 1590–1629 | Bell protesta por la comida; conversación sobre el coste del equipo y reparación de armas. | Texto y cifras visibles cotejados. | COMPLETE |
| 61 | líneas 1630–1671 | Precio de la daga, préstamo del Gremio, pago de deudas y conversación sobre la cena. | Texto, cifras y secuencia cotejados. | COMPLETE |
| 62 | líneas 1672–1707 | Historia de la Señora de la Abundancia, Mia y Seal; entrada del grupo de diez aventureros. | Texto, descripciones y transición cotejados. | COMPLETE |
| 63 | líneas 1708–1749 | Bell reconoce a Aizu Wallenstein; reacción de clientes y reconocimiento de la Familia Loki. | Texto, diálogos y atribuciones cotejados. | COMPLETE |
| 64 | líneas 1750–1785 | Reacción de Bell, observación de Aizu y explicación de la relación de la Familia Loki con la taberna. | Texto y secuencia cotejados. | COMPLETE |
| 65 | líneas 1786–1819 | Bell observa a Aizu; conversación sobre la expedición y los Minotauros que escaparon. | Texto, orden y explicación del recorrido cotejados. | COMPLETE |
| 66 | líneas 1820–1863 | Relato del encuentro previo con el Minotauro y burlas de los miembros de Loki Familia. | Texto, diálogos y continuidad cotejados. | COMPLETE |
| 67 | líneas 1864–1905 | Continúan las burlas; Riviera reprende a Bete; Aizu responde sobre la reacción de Bell. | Texto y atribuciones cotejados. | COMPLETE |
| 68 | líneas 1906–1948 | Bete insiste en humillar a Bell; Bell abandona la taberna; separador de escena y reacción inicial de los presentes. | El separador físico centrado × × × aparece como encabezado Markdown de nivel 2 en línea 1940, añadiendo jerarquía no presente en el PDF. | PARTIAL |
| 69 | líneas 1950–1990 | Aizu observa la salida de Bell; interacción de Aizu con Loki y reacción de los presentes. | Texto, acciones y secuencia cotejados. | COMPLETE |
| 70 | sin localizador Markdown en el tramo 1482–2054 | Ilustración monocromática de página completa; no hay texto extraíble en el folio. | La ilustración está presente en el PDF, pero no existe bloque de imagen correspondiente en la posición del pasaje del Markdown. | IMAGE_MISSING |
| 71 | líneas 1992–2032 | Continuación de la escena de Aizu y Loki; separador; transición a Bell corriendo por la ciudad. | El separador físico centrado × × × aparece como encabezado Markdown de nivel 2 en línea 2014, añadiendo jerarquía no presente en el PDF. | PARTIAL |
| 72 | líneas 2034–2054 | Monólogo de Bell sobre su frustración y decisión de dirigirse al Calabozo. | Texto, orden y cierre de escena cotejados. | COMPLETE |

#### 3. Hallazgos nuevos

| ID | PDF | Localizador MD | Categoría | Evidencia PDF | Evidencia Markdown | Gravedad / impacto | Estado | Acción propuesta |
|---|---:|---|---|---|---|---|---|---|
| V1-MDPDF-068-001 | 68 | línea 1940 | FORMATTING_LOSS | El signo × × × está centrado como divisor entre la salida de Bell y la reacción dentro de la taberna. | Se convierte en encabezado de nivel 2. | Baja; no altera la narración, pero añade una jerarquía inexistente. | ACEPTADO | Conservar el hallazgo; no editar la fuente. En una derivación autorizada, representar el signo como divisor neutral. |
| V1-MDPDF-070-001 | 70 | sin bloque correspondiente; tramo narrativo entre líneas 1990–1992 | IMAGE_MISSING | El PDF contiene una ilustración monocromática de página completa. | No hay bloque de imagen en el tramo Markdown que corresponde a este folio; los bloques de imagen existentes están en otras posiciones del archivo. | Media; se pierde contenido visual de la fuente aunque el texto de la escena continúa en la página siguiente. | ACEPTADO | Registrar la ausencia; no reconstruir ni insertar una imagen sin autorización y procedencia verificable. |
| V1-MDPDF-071-001 | 71 | línea 2014 | FORMATTING_LOSS | El signo × × × aparece centrado como divisor antes del regreso al monólogo de Bell. | Se convierte en encabezado de nivel 2. | Baja; no altera la narración, pero añade una jerarquía inexistente. | ACEPTADO | Conservar el hallazgo; no editar la fuente. En una derivación autorizada, representar el signo como divisor neutral. |

#### 4. Controles específicos y categorías no detectadas

- **Cobertura:** 16/16 folios físicos inspeccionados; 15 folios con texto cotejado (13 COMPLETE y 2 PARTIAL); 1 folio ilustrado sin bloque de imagen correspondiente (p.70).
- **Separadores:** se detectan dos pérdidas de formato nuevas, pp.68 y 71. Se conserva el hallazgo previo de p.46; no se duplica.
- **Imágenes:** p.70 presenta IMAGE_MISSING; no se declara que la ilustración esté ausente del PDF. No se detectan otras ilustraciones de página completa dentro del rango.
- **No detectados en este bloque:** TRANSCRIPTION_ERROR, ORDER_ERROR, DUPLICATION, PAGE_MAPPING_UNRESOLVED ni nueva TRANSLATION_AMBIGUITY.
- **Límite:** cotejo de la transcripción española privada contra su PDF; no demuestra fidelidad frente al original japonés ni resuelve las ambigüedades de traducción ya abiertas.

#### 5. Continuidad y siguiente tarea

- Se preservan los hallazgos y el trabajo previo de pp.1–56; no se repiten P1/P2/P3 ni se modifican los originales.
- El Volumen 1 y DMR-062 permanecen PARTIAL / IN_PROGRESS.
- **Próxima tanda obligatoria:** cotejo independiente MD↔PDF, PDF pp.73–88.
- No iniciar Volumen 2.


### DMR-062 — quinta tanda de cotejo independiente MD↔PDF · Volumen 1 · PDF pp.73–88 · 2026-11-06

- **Procedencia:** PDF privado original `Volumen [01] • DanMachi.pdf`, 7.495.544 bytes, 215 páginas; SHA-1 de archivo `13ceaeb94727698f7e8c3b0e607a1ba4ffbd98c3`; Git blob `fd43a5395983850ab1a953bb39da732b27331dcc`. Markdown fuente blob `d2b3306b1661584d9a42d651f57dca8a6814b20b`. Ambos se conservaron sin modificación.
- **Método:** extracción textual de folios físicos 73–88 y renderizado visual del bloque a 110 dpi para identificar ilustraciones de página completa; comparación de secuencia narrativa, diálogos, notas al pie, separadores y presencia de imágenes en el MD.

### Matriz de cobertura por folio físico

| PDF | Localizador Markdown | Contenido cotejado | Resultado |
|---:|---|---|---|
| 73 | Sin bloque de imagen junto al inicio del capítulo 3 (línea 2056) | Ilustración de apertura del capítulo 3; el PDF contiene arte de página completa y la transcripción pasa directamente al encabezado. | IMAGE_MISSING |
| 74 | líneas 2056–2093 | Apertura del capítulo 3: lluvia, oficina del Gremio, Eina y Misha; cierre de la conversación y presentación del informe de Bell. | COMPLETE |
| 75 | líneas 2094–2131 | Informe de Bell, quinto piso, Minotauro, advertencias de Eina y preocupación por Bell. | COMPLETE |
| 76 | líneas 2132–2169 | Cierre de la escena Eina–Misha; divisor × × ×; Bell inicia la incursión nocturna y derrota al Frog Shooter; nota [^1]. | PARTIAL |
| 77 | líneas 2170–2215 | Desplazamiento solitario de Bell, equipo deteriorado, agotamiento y pérdida de orientación. | COMPLETE |
| 78 | líneas 2216–2249 | Descenso al sexto piso, cambio de entorno, habitación amplia y búsqueda de monstruos. | COMPLETE |
| 79 | líneas 2250–2289 | Nacimiento de monstruos desde la pared y descripción de War Shadow; nota [^2]. | COMPLETE |
| 80 | líneas 2290–2314 | Segunda War Shadow, combate dos contra uno y divisor × × × antes de la descripción táctica. | PARTIAL |
| 81 | líneas 2316–2367 | Dedos y alcance de War Shadow, ataques coordinados y comienzo de la reflexión de Bell sobre seguir vivo. | COMPLETE |
| 82 | líneas 2368–2411 | Reflexión sobre el Estado, golpe recibido, pérdida de la daga y recuerdos de Bell. | COMPLETE |
| 83 | líneas 2412–2453 | Contraataque de Bell, derrota de la primera War Shadow y remate de la segunda. | COMPLETE |
| 84 | líneas 2454–2495 | Consecuencias del combate, aparición de más monstruos, bloqueo de la salida y obtención del dedo de War Shadow. | COMPLETE |
| 85 | líneas 2496–2511 | Bell decide continuar luchando pese a quedar rodeado. | COMPLETE |
| 86 | Sin bloque de imagen junto al inicio del capítulo 4 (línea 2512) | Ilustración de apertura del capítulo 4 a página completa; la transcripción pasa directamente al encabezado y al texto. | IMAGE_MISSING |
| 87 | líneas 2512–2551 | Inicio del capítulo 4: Hestia espera a Bell, recuerda la discusión y sale a buscarlo. | COMPLETE |
| 88 | líneas 2552–2585 | Hestia recibe el golpe de la puerta; Bell regresa herido y explica que entró al Calabozo. | COMPLETE |

### Hallazgos nuevos

| ID | PDF | Localizador Markdown | Categoría | Evidencia PDF / Markdown | Estado | Acción |
|---|---:|---|---|---|---|---|
| V1-MDPDF-073-001 | 73 | Sin bloque correspondiente, antes de línea 2056 | IMAGE_MISSING | Ilustración monocromática de apertura del capítulo 3 en el PDF; no existe bloque de imagen correspondiente en esa posición del MD. | ACEPTADO | Registrar la pérdida visual; no modificar la fuente ni reconstruir la imagen. |
| V1-MDPDF-076-001 | 76 | línea 2150 | FORMATTING_LOSS | El divisor físico × × × entre la escena Eina–Misha y la incursión de Bell se representa como encabezado Markdown de nivel 2. | ACEPTADO | Conservar el hallazgo; no editar la fuente original. |
| V1-MDPDF-080-001 | 80 | línea 2314 | FORMATTING_LOSS | El divisor físico × × × antes de la explicación de las capacidades de War Shadow se representa como encabezado Markdown de nivel 2. | ACEPTADO | Conservar el hallazgo; no editar la fuente original. |
| V1-MDPDF-086-001 | 86 | Sin bloque correspondiente, antes de línea 2512 | IMAGE_MISSING | Ilustración monocromática de apertura del capítulo 4 a página completa en el PDF; no existe bloque de imagen correspondiente en esa posición del MD. | ACEPTADO | Registrar la pérdida visual; no modificar la fuente ni reconstruir la imagen. |

### Resultado cuantitativo y límites

- **Cobertura:** 16/16 folios físicos inspeccionados; 14 folios con texto extraído y cotejado; 12 COMPLETE, 2 PARTIAL por pérdida de formato y 2 IMAGE_MISSING por ilustraciones no representadas en su posición Markdown.
- **Separadores:** nuevos hallazgos FORMATTING_LOSS en pp.76 y 80. Los IDs son nuevos y no duplican los registros previos de pp.46, 54, 68 y 71.
- **Imágenes:** IMAGE_MISSING en pp.73 y 86. Ambas ilustraciones están presentes en el PDF; la ausencia corresponde a la transcripción Markdown. No se insertan imágenes.
- **Texto y orden:** no se demuestra TRANSCRIPTION_ERROR, ORDER_ERROR, DUPLICATION ni PAGE_MAPPING_UNRESOLVED en este bloque. Los dos marcadores de nota al pie sobre Frog Shooter y War Shadow están presentes en el MD.
- **Integridad:** PDF de 7.495.544 bytes y 215 páginas; SHA-1 del archivo 13ceaeb94727698f7e8c3b0e607a1ba4ffbd98c3 y Git blob SHA fd43a5395983850ab1a953bb39da732b27331dcc. Markdown examinado desde el blob d2b3306b1661584d9a42d651f57dca8a6814b20b.
- **Límite:** auditoría de la transcripción española privada contra su PDF; no certifica fidelidad frente al original japonés ni resuelve las ambigüedades de traducción pendientes.
- **Siguiente tanda:** cotejo independiente MD↔PDF, PDF pp.89–104. DMR-062 y Volumen 1 permanecen PARTIAL / IN_PROGRESS; no iniciar Volumen 2.
- **Validación:** no se ejecutaron pruebas locales. La consulta de workflows asociada al checkpoint previo no devolvió ejecuciones; no se afirma CI aprobada para este trabajo.



### DMR-062 — sexta tanda de cotejo independiente MD↔PDF · Volumen 1 · PDF pp.89–104 · 2026-11-06

- **Procedencia e integridad:** PDF original `Volumen [01] • DanMachi.pdf`, 7.495.544 bytes, 215 páginas; SHA-1 de archivo `13ceaeb94727698f7e8c3b0e607a1ba4ffbd98c3`; Git blob `fd43a5395983850ab1a953bb39da732b27331dcc`. Markdown fuente Git blob `d2b3306b1661584d9a42d651f57dca8a6814b20b`, 4.035.130 bytes y 7.251 líneas. Fuentes originales preservadas sin modificación.
- **Método:** extracción textual de los 16 folios físicos PDF pp.89–104, cotejo secuencial contra los localizadores Markdown y revisión visual del bloque renderizado. Se comprobó contenido, atribución de diálogos, límites de página, separadores, estructura del Estado y notas al pie.

#### Matriz de cobertura por folio físico

| PDF | Localizador Markdown | Contenido cotejado | Resultado |
|---:|---|---|---|
| 89 | líneas 2596–2637 | Hestia reprende a Bell por entrar al Dungeon sin equipo defensivo y permanecer toda la noche; heridas, silencio de Bell, baño y apoyo por la lesión de rodilla. | COMPLETE |
| 90 | líneas 2638–2681 | Hestia acompaña a Bell al baño, le cede la cama y bromea sobre dormir juntos; Bell responde sin comprender la insinuación por su agotamiento. | COMPLETE |
| 91 | líneas 2682–2725 | Bell expresa que quiere ser más fuerte; separador; snapshot de Estado Lv.1 con Fuerza H123→221 G, Resistencia I42→H101, Destreza H139→G232, Agilidad G225→F313 y Magia I0; habilidad Deseo Inquebrantable y contexto de la actualización. | PARTIAL |
| 92 | líneas 2726–2765 | Hestia observa el crecimiento anormal de Bell, compara su progresión con aventureros Lv.2, reconoce el papel de Deseo Inquebrantable y oculta sus celos. | COMPLETE |
| 93 | líneas 2766–2805 | Dilema de Hestia sobre revelar la habilidad, riesgo de arrogancia, confianza en Bell y decisión de explicar verbalmente su crecimiento sin nombrar la habilidad. | COMPLETE |
| 94 | líneas 2806–2843 | Explicación de habilidades comunes y raras, decisión de ocultar Deseo Inquebrantable y pregunta de Hestia sobre el rápido crecimiento; Bell recuerda su incursión al sexto piso. | COMPLETE |
| 95 | líneas 2844–2883 | Hestia reprende a Bell por subir de piso sin equipo; explica el período de crecimiento, reconoce su talento y experiencia propia y le pide prometer que no volverá a sobreesforzarse. | COMPLETE |
| 96 | líneas 2884–2927 | Bell promete no dejar sola a Hestia; ella acepta su decisión de hacerse más fuerte, le devuelve la ropa y decide contactar a Hephaistos mediante la invitación al Banquete de Ganesha. | COMPLETE |
| 97 | líneas 2928–2967 | Hestia informa que saldrá por una reunión; Bell acepta; ella permite que vuelva al Dungeon con cautela. Separador y transición al punto de vista de Bell antes del mediodía. | PARTIAL |
| 98 | líneas 2968–3005 | Bell decide no forzarse, reconoce que perseguir a Wallenstein requiere paciencia y visita La Señora de la Abundancia; describe el cartel de cerrado, la preparación del local y la reacción inicial de Anya/Ryuu. | COMPLETE |
| 99 | líneas 3006–3045 | Reencuentro con Seal; Bell se disculpa por marcharse sin pagar, entrega el dinero y ella lo perdona; Seal prepara una canasta de comida para Bell. | COMPLETE |
| 100 | líneas 3046–3091 | Seal anima a Bell con la comida; aparece Mia; conversación sobre el dinero, la comida que Seal sacrifica y la broma de Anya sobre sus sentimientos. | COMPLETE |
| 101 | líneas 3092–3133 | Grito de Seal; Mia explica que Seal intentó perseguir a Bell y que Ryuu estuvo cerca de actuar; Mia aconseja luchar por sobrevivir y promete una fiesta a quienes regresen. | COMPLETE |
| 102 | líneas 3134–3171 | Bell agradece y sale de la taberna; cierre de la escena diurna, separador y transición nocturna hacia las murallas y la ciudad de Orario. | PARTIAL |
| 103 | líneas 3172–3207 | Descripción del centro de Orario, Babel, Dungeon, aventureros, Piedras Mágicas, Botín, fama y llegada de los dioses al entorno del banquete. | COMPLETE |
| 104 | líneas 3208–3244 | Conversación entre dioses; descripción exterior de la fortaleza de Ganesha, estatua elefante, instalación Yo Soy Ganesha y explicación del Banquete de Dios; Ganesha anuncia la Philia dentro de tres días. | COMPLETE |

#### Hallazgos nuevos

| ID | PDF | Localizador Markdown | Categoría | Evidencia PDF / Markdown | Estado | Acción |
|---|---:|---|---|---|---|---|
| V1-MDPDF-091-001 | 91 | línea 2696 | FORMATTING_LOSS | El divisor centrado físico × × × entre la escena de Hestia y la presentación del Estado aparece como encabezado Markdown de nivel 2. Los valores y atributos del Estado se conservan. | ACEPTADO | Registrar la pérdida estructural; no modificar el original. En una derivación autorizada, usar un divisor neutral. |
| V1-MDPDF-097-001 | 97 | línea 2958 | FORMATTING_LOSS | El divisor físico × × × que separa la escena de Hestia del punto de vista de Bell aparece como encabezado Markdown de nivel 2. | ACEPTADO | Registrar la pérdida estructural; no modificar el original. En una derivación autorizada, usar un divisor neutral. |
| V1-MDPDF-102-001 | 102 | línea 3150 | FORMATTING_LOSS | El divisor físico × × × que separa la salida de Bell de la transición nocturna a Orario aparece como encabezado Markdown de nivel 2. | ACEPTADO | Registrar la pérdida estructural; no modificar el original. En una derivación autorizada, usar un divisor neutral. |

#### Resultado cuantitativo y límites

- **Cobertura:** 16/16 folios físicos inspeccionados; los 16 contienen texto cotejado; 13 COMPLETE y 3 PARTIAL por FORMATTING_LOSS.
- **Separadores:** tres hallazgos nuevos: pp.91, 97 y 102. Los IDs no duplican los registros previos de pp.35, 46, 54, 68, 71, 76 y 80.
- **Imágenes:** no se detectan ilustraciones de página completa ni bloques de imagen ausentes en este rango.
- **Estado:** el snapshot de p.91 conserva todos los valores visibles en el PDF; Fuerza es H123→221 G. No usar este dato para cerrar por sí solo discrepancias estadísticas globales fuera del rango.
- **Notas:** la referencia de nota al pie de nekomusume en p.98 está presente en el MD como `[^1]` y su definición se conserva en el bloque de notas al final del archivo.
- **No detectados:** TRANSCRIPTION_ERROR, ORDER_ERROR, DUPLICATION, IMAGE_MISSING, IMAGE_MISMATCH o PAGE_MAPPING_UNRESOLVED. No se demuestra pérdida textual ni alteración del orden en este bloque.
- **Límite:** cotejo de la traducción privada española contra su PDF; no certifica fidelidad frente al original japonés ni resuelve ambigüedades de traducción globales.
- **Continuidad:** se preservan hallazgos y rangos anteriores; no se reabren P1/P2/P3, no se modifican DMR-061, perfiles, eventos ni otros destinos funcionales. DMR-062 y Volumen 1 permanecen `PARTIAL / IN_PROGRESS`.
- **Siguiente tanda:** cotejo independiente MD↔PDF, PDF pp.105–120. No iniciar Volumen 2.
- **Validación:** cotejo y render manual realizados; pruebas locales automatizadas no ejecutadas. La CI que se informe debe corresponder al SHA final de los commits documentales.

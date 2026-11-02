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

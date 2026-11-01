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

### Alcance de la matriz y conteo

En esta **matriz priorizada de 14 hallazgos** hay 9 `COMPLETE`, 2 `PARTIAL`, 2 `CONTRADICTORY`, 1 `UNRESOLVED`, 0 `MISSING` y 0 `SECONDARY_ONLY`. Esos conteos describen únicamente las filas anteriores; **no son el conteo global del volumen**, porque la pasada 1 aún no ha sido reconciliada de manera exhaustiva folio por folio.

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

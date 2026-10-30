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

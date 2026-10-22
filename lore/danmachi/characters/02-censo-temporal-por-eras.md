# Censo temporal de personajes de DanMachi

**Corte:** 2026-10-21  
**Rama de trabajo:** \`work/story-completion-danmachi-audit-2026-10\`  
**Estado:** primera matriz multiera; deliberadamente parcial hasta cotejar novelas y localizadores.  
**Propósito:** vincular los personajes ya censados con sus estados por periodo sin crear duplicados ni mezclar versiones incompatibles.

## 1. Regla central: una identidad, varios estados

Este documento complementa el [censo maestro](00-censo-maestro.md) y el [índice de personajes](00-indice-personajes.md). No abre una ficha distinta porque la persona envejezca, cambie de Familia, sobreviva a un suceso o aparezca en otra obra. Cada personaje conserva su ID estable y recibe estados separados por **época + continuidad + punto narrativo**.

- **Época** indica cuándo ocurre el estado.
- **Continuidad** indica desde qué obra o línea se está tomando la evidencia: novela principal, Astrea Record, Sword Oratoria, anime, manga, juego o AU.
- **Estado** registra afiliación, relaciones activas, condición vital, capacidades y conocimiento en ese momento.
- **Evidencia** diferencia hechos con apoyo oficial, roster candidato, fuente secundaria, inferencia y dato pendiente.

«No está documentado» no significa «no estaba presente». Tampoco puede darse por muerto, vivo, amigo, enemigo o miembro activo de una Familia a alguien solo porque figure en un roster general.

## 2. Anclas temporales operativas

| Clave de trabajo | Qué cubre | Restricción |
|---|---|---|
| ERA-03/04/05 · historia antigua e Historial Zeus/Hera | Héroes, antiguas Familias, caída y consecuencias | La fecha individual y la secuencia exacta de cada personaje siguen pendientes. |
| ERA-06A · Era Oscura de Orario / Astrea Record | Aproximadamente T−7, según sinopsis oficiales | Es una franja del relato de Astrea Record; no representa por sí sola toda la historia antigua ni demuestra la duración completa de la Era Oscura. |
| ERA-06B · estado posterior a la tragedia de Astrea Familia | Retrospectiva asociada al periodo aproximado T−5 en el mapa de cronología | Debe mantenerse en CONT-MAIN-LN; no es la misma escena ni el mismo evento que el regreso posterior del Juggernaut en los volúmenes 13–14. |
| ERA-06C · periodo previo a Bell | Estado de deidades, Guild, Familias y personajes antes de la llegada de Bell | No trasladar automáticamente relaciones, rangos ni conocimientos que solo aparecen después. |
| T0 · llegada de Bell a Orario | Ancla puntual de la historia principal | T0 no equivale a todo el volumen 1 ni al conjunto de los primeros arcos. |
| ERA-07 · apertura de la historia principal | Primeros encuentros, incursiones y cambios de Familia posteriores a T0 | Fijar el primer capítulo/escena de cada aparición; no todos los personajes participan en el instante exacto de la llegada. |
| ERA-08 · arcos posteriores | Cambios de afiliación, relaciones, conocimiento y capacidades | El estado debe registrarse por arco/volumen, no como una versión «actual» que reemplace todos los estados anteriores. |
| ERA-09 · spin-offs y adaptaciones | Sword Oratoria, Familia Chronicle, Astrea Record, anime, manga y juego | Una etiqueta de continuidad no prueba automáticamente el mismo detalle en la novela principal. |
| ERA-AU · historia alternativa del OC | Divergencias explícitas que afectan al pasado o al presente | Se conservan los hechos canónicos base y se registran por separado la divergencia y sus consecuencias. |

Las anclas T−7, T−5 y T0 son referencias relativas ya usadas en el [mapa de eras](../timeline/00-mapa-de-eras.md). No son fechas absolutas. «Post-Era Oscura» se usa aquí como etiqueta práctica para estados posteriores a los sucesos históricos relevantes, no como afirmación de que la franquicia haya fijado un límite formal único para toda la era.

## 3. ERA-06A · Era Oscura / Astrea Record (T−7 aproximado)

### Hechos que sí tienen apoyo en las fuentes oficiales consultadas

| Personaje | Estado que puede registrarse | Límite |
|---|---|---|
| [Ryuu / Ryu Lion](ryuu-lion.md) · CHAR-RYUU-LION | La sinopsis editorial de Astrea Record vol. 1 la presenta buscando una justicia en la que pueda creer, bajo Astrea, con Alise y sus compañeras como guía. Este es un ideal en formación, no una filosofía ya inmutable. | La fuente es una sinopsis oficial; faltan localizadores de capítulo/página de la novela para detalles de conducta, edad, capacidades y relaciones escena por escena. |
| [Diosa Astrea](astrea.md) · CHAR-ASTREA | Está vinculada a Astrea Familia en el contexto histórico presentado por la sinopsis. | No inferir de esta fuente su ubicación, actividad ni relaciones en T0 o en periodos posteriores. |
| [Alise Lovelace](alise-lovelace.md) · CHAR-ALISE-LOVELACE | La sinopsis la identifica como capitana de Astrea Familia y una influencia/guía importante para Ryuu. | El desenlace individual y cualquier estado posterior no se deben completar por inferencia. |

Fuente editorial principal: [GA文庫 · Astrea Record, volumen 1](https://ga.sbcr.jp/product/9784815610173/). El mapa de la ERA-06 recoge además las sinopsis oficiales de los volúmenes 2 y 3 y sus límites: [ERA-06 · periodo previo a Bell](../timeline/eras/06-periodo-previo-a-bell.md).

### Roster de investigación: no equivale a presencia comprobada en cada escena

Estas fichas están enlazadas por el catálogo con Astrea Record, Astrea Familia o la carpeta de Era Oscura. Deben tratarse como **candidatos de roster y lectura**, pendientes de localizador primario individual; no se afirma que todos estén juntos, vivos o activos en el mismo momento.

- **Astrea Familia y entorno ligado a Astrea Record:** [Asta Knox](asta-knox.md), [Celty Srowa](celty-srowa.md), [Iska Bra](iska-bra.md), [Gojouno Kaguya](gojouno-kaguya.md), [Lyra](lyra.md), [Mariyu Leage](maryuu-reage.md), [Neze Rankett](neze-rankett.md), [Noin Unic](noin-unic.md), [Ryana Lietz](ryana-lietz.md).
- **Personajes, dioses y facciones con expedientes ligados a la Era Oscura:** [Alecto](dark-era/alecto.md), [Alfia](dark-era/alfia.md), [Apate](dark-era/apate.md), [Ardee Varma](dark-era/ardee-varma.md), [Barca Perdix](dark-era/barca-perdix.md), [Basram](dark-era/basram.md), [Dis Sisters](dark-era/dis-sisters.md), [Erebus](dark-era/erebus.md), [Jura Halmer](dark-era/jura-halmer.md), [Olivas Act](dark-era/olivas-act.md), [Rudra](dark-era/rudra.md), [Samira](dark-era/samira.md), [Selenia](dark-era/selenia.md), [Thanatos](dark-era/thanatos.md), [Valletta Grede](dark-era/valletta-grede.md), [Vito](dark-era/vito.md), [Zald](dark-era/zald.md).
- **Perfiles generales con presencia individual en la Era Oscura no confirmada:** [Airmid Teasanare](airmid-teasanare.md), [Dian Cecht](dian-cecht.md), [Goibniu](goibniu.md), [Hephaistos](hephaistos.md), [Miach](miach.md), [Naaza Erisuis](naaza-erisuis.md). La actividad histórica atribuida a una Familia no demuestra que su dios o cada miembro aparezca personalmente en una escena.

**Regla de publicación:** aparecer en esta lista significa que el personaje tiene una ruta de investigación asociada al periodo. No convierte su afiliación, nivel, participación en combate ni destino en un dato confirmado.

## 4. ERA-06B · Estados posteriores y tragedia de Astrea Familia (ancla aproximada T−5)

La cronología de WordWaifu separa el recuerdo de la tragedia histórica en la novela principal del relato de Astrea Record. También separa ese suceso del retorno del Juggernaut en los volúmenes 13–14, que corresponde a otro acontecimiento posterior a T0. Esta distinción evita duplicar eventos o atribuir el mismo historial a dos apariciones diferentes.

| Identidad | Estado anterior | Estado posterior que se puede utilizar | Qué queda abierto |
|---|---|---|---|
| [Ryuu / Ryu Lion](ryuu-lion.md) | CONT-AR: búsqueda de justicia todavía en desarrollo bajo Astrea y con influencia de Alise. | La sinopsis de Astrea Record vol. 2 indica que las pérdidas durante el periodo llamado «Los siete días de la muerte» sacuden su sentido de justicia. Es una transformación general respaldada por la sinopsis, no un mapa completo de su psicología posterior. | Localizador primario de la tragedia, secuencia precisa, estado vital/afiliación por escena y duración exacta de sus consecuencias. |
| [Astrea](astrea.md) | Deidad vinculada a Astrea Familia en la sinopsis histórica. | Sin estado posterior asignado en este censo. | Actividad, ubicación, vínculos y estado en cada periodo después del suceso. |
| [Alise Lovelace](alise-lovelace.md) | Capitana de Astrea Familia en la sinopsis del volumen 1. | No se infiere supervivencia, muerte ni participación posterior por aparecer en el roster histórico. | Resultado individual y fuente/localizador primario. |
| Resto del roster de Astrea Record | Estado individual previo pendiente de cotejo. | No asumir que todos sufrieron el mismo destino, estuvieron en el incidente o compartieron una escena. | Cerrar cada trayectoria persona por persona a partir de la novela y los eventos vinculados. |

Los expedientes de [Jura Halmer](dark-era/jura-halmer.md), [Olivas Act](dark-era/olivas-act.md), [Valletta Grede](dark-era/valletta-grede.md), [Rudra](dark-era/rudra.md), [Erebus](dark-era/erebus.md), [Thanatos](dark-era/thanatos.md) y [Zald](dark-era/zald.md) deben cotejarse con los eventos exactos antes de etiquetar a cualquiera como responsable, aliado, superviviente o víctima del suceso concreto. El vínculo de un expediente con la Era Oscura no demuestra automáticamente su participación en la tragedia de T−5.

## 5. ERA-06C · Periodo previo a Bell

Este estado debe modelar lo que cada personaje era **antes** de su primer encuentro pertinente con Bell; no reconstruir su biografía posterior hacia atrás.

| Identidad / grupo | Qué separar en el registro | Pendiente temporal |
|---|---|---|
| [Hestia](hestia.md) | Vida previa a Bell frente al inicio de la Hestia Familia y los cambios posteriores. | Anclar su llegada, decisiones iniciales y primer vínculo con Bell en la novela. |
| [Eina Tulle](eina-tulle.md) | Estado laboral previo, tareas de la Guild y momento en que empieza a asesorar a Bell. | Primera escena y conocimiento disponible en cada encuentro. |
| [Loki](loki.md) | Situación de la diosa y organización de Loki Familia antes de la historia principal. | Composición efectiva del roster y relaciones activas en cada fecha. |
| [Freya](freya.md) y [Ottar](ottar.md) | Situación previa de Freya Familia, intereses individuales y relaciones antes de que Bell intervenga en sus decisiones. | No convertir el arco posterior vinculado a Bell en una motivación intemporal; precisar cada estado por fuente. |
| [Zeus](zeus.md), [Hera](hera.md), [Maxim](maxim.md), [Meteria](dark-era/meteria.md) y [Alfia](dark-era/alfia.md) | Mantener la historia histórica separada de los estados contemporáneos; las relaciones biográficas no indican presencia física en T0. | Cotejo primario, fechas relativas y consecuencia concreta de cada hecho sobre personas posteriores. |

## 6. T0 · llegada de Bell y ERA-07 · primeros arcos

**T0 es una ancla puntual: la llegada de Bell a Orario.** Para que el generador no anticipe relaciones o conocimientos, hay que separar ese instante de las primeras escenas y de los arcos posteriores.

### Núcleo que debe modelarse primero

| Personaje / registro | Regla de estado |
|---|---|
| [Bell Cranel](bell-cranel.md) | Anclar el punto de partida, conocimientos, capacidades y motivaciones iniciales; no proyectar su crecimiento posterior. |
| [Hestia](hestia.md) | Registrar sus decisiones al inicio y la creación/estado de su Familia en el orden demostrado por la novela. |
| [Eina Tulle](eina-tulle.md) | No asignar a la escena anterior al primer contacto con Bell recuerdos, opiniones o intimidad que solo se desarrollan después. |
| [Ais Wallenstein](ais-wallenstein.md) | Separar el estado inicial de sus encuentros posteriores con Bell y los hechos que conoce en cada arco. |
| [Loki](loki.md), [Finn Deimne](finn-deimne.md), [Riveria Ljos Alf](riveria-ljos-alf.md), [Gareth Landrock](gareth-landrock.md) | Registrar el roster efectivo y no confundir que alguien pertenezca a Loki Familia con que participe en cada evento. |
| [Bete Loga](bete-loga.md), [Tiona Hiryute](tiona-hiryute.md), [Tione Hiryute](tione-hiryute.md), [Lefiya Viridis](lefiya-viridis.md), [Raul Nord](raul-nord.md) | Mantener una línea temporal por personaje; Lefiya y el resto de Sword Oratoria no deben heredar sin cotejo detalles exclusivos de anime/manga. |

No se presenta a todos los personajes de esta tabla como presentes en el instante exacto de llegada. La tabla indica el **primer núcleo de cronología que debe verificarse** en la apertura de la novela y los primeros arcos.

### Estados múltiples y transición de afiliación

- **Freya y Freya Familia:** [Allen Fromel](allen-fromel.md), [Hedin Selland](hedin-selland.md), [Hogni Ragnar](hogni-ragnar.md), [Horn / Herun](horn.md), [Heith / Haze Velvet](heith-velvet.md), [Van](van.md), [Ottar](ottar.md) y [Gulliver Brothers](gulliver-brothers.md) deben tener estado por arco. No heredar a toda la Familia la motivación personal de Freya.
- **Anya, Mia y taberna:** [Anya Fromel](anya-fromel.md), [Mia Grand](mia-grand.md), [Chloe Rollo/Rolo](chloe-rolo.md) y [Lunoa Faust](lunoa-faust.md) necesitan al menos un estado de afiliación/ocupación anterior y otro en Hostess of Fertility, con el momento de transición probado por fuente. El perfil oficial del anime puede respaldar el estado de adaptación, pero no sustituye una cita de la novela principal.
- **Soma Familia y personajes asociados:** [Soma](soma.md), [Liliruca Arde](liliruca-arde.md), [Chandra Ihit](chandra-ihit.md), [Zanis Lustra](zanis-lustra.md), [Canoe Belway](canoe-belway.md), [Coco Collins](coco-collins.md), [Shinonome Momiji](shinonome-momiji.md) y [Tsukinokami Kaede](tsukinokami-kaede.md). Distinguir novela, roster comunitario y perfiles exclusivos del juego; fecha de entrada/salida, parentescos y destinos se validan individualmente.
- **Loki Familia y Sword Oratoria:** registrar por separado integrantes respaldados por la novela, fichas derivadas de adaptación y candidatos que aparezcan solo en manga o fuentes comunitarias. El roster de una Familia cambia, así que no es una foto intemporal.
- **Nueva Astrea Familia / Solingen:** [Cecil Blackliza](cecil-blackliza.md), [Iselina](iselina.md), [Shau](shau.md) y [Ulanda](ulanda.md) se mantienen en una cola temporal independiente. El expediente existente no basta para ubicarlos en T−7 ni en T0; no confundirlos con el roster histórico de Astrea Familia.

## 7. Matriz de estados multiera que deben mantenerse separados

| Identidad | Era Oscura / T−7 (CONT-AR) | Estado posterior / T−5 (CONT-MAIN-LN) | T0 y desarrollo posterior | Regla de seguridad |
|---|---|---|---|---|
| Ryuu Lion | Búsqueda de justicia en formación; influencia de Astrea y Alise respaldada por sinopsis editorial. | La sinopsis de vol. 2 recoge que las pérdidas alteran su sentido de justicia; detalle de escena pendiente. | Su perfil oficial de anime registra un estado posterior como exaventurera y trabajadora de Hostess of Fertility; no traslada automáticamente toda esa información a la novela. | Misma identidad CHAR-RYUU-LION, tres estados separados. |
| Astrea | Vínculo histórico con Astrea Familia documentado por sinopsis. | Sin resultado individual añadido en esta matriz. | Estado/ubicación posteriores no fijados por la evidencia de este expediente. | No inferir ausencia, muerte, regreso o presencia. |
| Alise Lovelace | Capitana de Astrea Familia y guía de Ryuu en la sinopsis oficial. | Destino y resultado individual no completados aquí. | No proyectar su papel histórico como relación actual activa. | Relación con Ryu lleva época y fuente. |
| Alfia | Expediente histórico y carpeta ligada a Astrea Record. | Participación y estado en cada evento deben verificarse por separado. | No asumir que relación familiar equivale a presencia en la historia principal. | Separar historia previa, Era Oscura y revelaciones posteriores. |
| Anya Fromel | Su estado anterior requiere ancla aparte; no se llena desde su ocupación posterior. | No aplica sin evidencia de presencia. | El registro distingue su pasado ligado a Freya Familia y su estado en la taberna, pendientes de fechas exactas por fuente. | La afiliación cambia por periodo; no conservar ambas como estado simultáneo sin prueba. |
| Mia Grand | Historia de aventurera previa a precisar. | Sin ancla histórica en este censo. | Propietaria de la taberna en el estado posterior descrito por adaptación; el tramo de transición queda por verificar. | Pasado y ocupación actual no se fusionan. |
| Liliruca Arde | Sin estado asignado. | Antes/después de su salida de Soma Familia debe fijarse por arco. | Relación con Hestia Familia cambia respecto de su estado anterior. | La pertenencia a dos Familias en su biografía no significa pertenencia simultánea. |
| Freya | Estado anterior a la historia principal debe ir separado de sus decisiones sobre Bell. | No rellenar con el resultado del arco posterior. | La conducta ligada a Bell se registra como estado condicionado por evento, no como alineamiento constante. | Mantener el criterio del autor sobre su alineamiento como regla editorial separada del canon. |
| Finn / Riveria / Gareth | No asignar participación en la Era Oscura sin una fuente explícita. | No completar presencia por analogía. | Roster de Loki Familia por arco, edad/experiencia y relación activa en el punto exacto. | Registro colectivo de comparación no sustituye tres identidades. |
| Integrantes de Nueva Astrea Familia | No ubicarlos en la Familia histórica por el nombre. | Época aún no fijada por el expediente actual. | Estado futuro/actual pendiente de localizar por volumen y continuidad. | Diferenciar organización, época y continuidad. |
| Zeus / Hera / Maxim / Meteria | Cohorte histórica con hitos no fechados por completo. | Consecuencias históricas por documentar. | No trasladar presencia a T0 solo por sus vínculos con personajes de la novela principal. | Antecedente familiar no equivale a presencia o conocimiento del personaje. |

## 8. Continuidades que no deben mezclarse en una misma columna de canon

- **CONT-AR:** Astrea Record. Su marco temporal puede informar la Era Oscura, pero los eventos y las escenas deben enlazarse por separado.
- **CONT-MAIN-LN:** novela principal. La tragedia histórica narrada retrospectivamente no es el regreso posterior del Juggernaut en los volúmenes 13–14.
- **CONT-SO:** Sword Oratoria. Puede cubrir escenas o personajes ausentes de la novela principal, sin convertirlos automáticamente en acontecimientos de la misma novela.
- **CONT-ANIME:** el estado de Ryuu en Hostess of Fertility y los perfiles oficiales de la adaptación tienen procedencia propia. No usar la adaptación para completar silenciosamente los huecos de la novela.
- **CONT-MANGA:** personajes de manga, en especial roster ampliado de Sword Oratoria, deben seguir etiquetados hasta que se localice una fuente primaria pertinente.
- **CONT-GAME:** perfiles de juego, como varios miembros asociados a Soma Familia, no demuestran por sí mismos un estado en la novela principal.
- **CONT-AU:** cada divergencia del OC debe apuntar a un evento detonante y revisar después afiliaciones, relaciones, conocimiento y eventos afectados. Nunca sobrescribe el registro base.

## 9. Prioridad de trabajo para convertir este censo inicial en fichas cerradas

1. **Primero Ryuu:** cotejar la evolución T−7 → tragedia histórica/T−5 → historia principal, y separar fuente editorial de localizador de novela y perfil de anime.
2. **Luego Astrea Familia:** fijar el roster real por volumen/escena, el resultado individual de cada integrante y las relaciones activas en cada corte. No marcar el destino de todas por inferencia colectiva.
3. **Después núcleo Bell–Hestia–Eina–Ais:** reconstruir cada estado desde T0 y registrar el orden de los primeros encuentros.
4. **Familias Loki, Freya y Soma:** obtener roster por arco, fecha relativa de afiliación y relaciones que cambian; evitar una única lista de miembros atemporal.
5. **Zeus/Hera, Alfia y Meteria:** anclar primero la historia antigua y sus consecuencias; evitar spoilers fuera del punto narrativo seleccionado.
6. **Continuidades paralelas:** resolver candidatos manga/juego/anime con etiquetas claras, sin borrar su procedencia.
7. **Validación:** localizar capítulo/página o sección oficial por afirmación. Si no se encontró, mantener «pendiente» y no presentar una inferencia como canon.

## 10. Fuentes y documentos de control

- [GA文庫 · Astrea Record, volumen 1](https://ga.sbcr.jp/product/9784815610173/) — sinopsis editorial que sitúa a Ryuu, Astrea y Alise en el marco histórico.
- [Portal oficial de personajes de DanMachi IV](https://danmachi.com/danmachi4/character/) — perfil de adaptación de Ryuu en un estado posterior; conservar CONT-ANIME.
- [Mapa maestro de eras](../timeline/00-mapa-de-eras.md) — definiciones de T−7, T−5, T0 y barreras anti-mezcla.
- [ERA-06 · periodo previo a Bell](../timeline/eras/06-periodo-previo-a-bell.md) — evidencia preliminar y límites.
- [Modelo temporal de identidad y variantes](01-identidad-y-variantes-temporales.md) — identidad estable, estados por época y separación de AU.
- [Censo maestro de personajes](00-censo-maestro.md) — recuento de IDs y categorías narrativas.

## 11. Apéndice · todas las identidades y grupos que ya figuran en el catálogo

La pista temporal que se muestra en este apéndice proviene de las etiquetas y del estado de la ficha existente. **Es una guía para investigar, no prueba de aparición en una escena ni de presencia/ausencia durante toda una era.** Los estados de verificación se conservan tal como están en el catálogo.

| Identidad / ficha | ID estable | Pista temporal / continuidad que hay que revisar | Estado actual del catálogo |
|---|---|---|---|
| [Alise Lovelace](alise-lovelace.md) | CHAR-ALISE-LOVELACE | ERA-06 / Astrea Record: apoyo parcial en sinopsis oficial; no sustituye cotejo de novela | provisional |
| [Asta Knox](asta-knox.md) | CHAR-ASTA-KNOX | ERA-06 / CONT-AR: expediente candidato; presencia, rol y estado individual aún requieren localizador primario | provisional |
| [Astrea](astrea.md) | CHAR-ASTREA | ERA-06 / Astrea Record: apoyo parcial en sinopsis oficial; no sustituye cotejo de novela | provisional |
| [Bete Loga](bete-loga.md) | CHAR-BETE-LOGA | ERA-07/08 y/o CONT-SO: no asumir presencia en el instante T0; fechar roster y continuidad | official adaptation profile secondary lore primary locator pending |
| [Canoe Belway](canoe-belway.md) | CHAR-CANOE-BELWAY | Sin ancla temporal fiable en el registro actual; dejar pendiente, no inferir ausencia | secondary reference disputed details primary check pending |
| [Cecil Blackliza](cecil-blackliza.md) | CHAR-CECIL-BLACKLIZA | Nueva Astrea Familia / Solingen: época exacta sin anclar; no proyectar hacia T−7 ni T0 | provisional |
| [Celty Srowa](celty-srowa.md) | CHAR-CELTY-SROWA | ERA-06 / CONT-AR: expediente candidato; presencia, rol y estado individual aún requieren localizador primario | provisional |
| [Chandra Ihit](chandra-ihit.md) | CHAR-CHANDRA-IHIT | Sin ancla temporal fiable en el registro actual; dejar pendiente, no inferir ausencia | secondary reference partial primary check pending |
| [Coco Collins](coco-collins.md) | CHAR-COCO-COLLINS | CONT-GAME: conservar separado; no trasladar a novela principal sin fuente independiente | secondary game profile checked primary novel pending |
| [Airmid Teasanare](airmid-teasanare.md) | CHAR-DARK-AIRMID | ERA-06 / CONT-AR: expediente candidato; presencia, rol y estado individual aún requieren localizador primario | pending primary text check |
| [Alecto](dark-era/alecto.md) | CHAR-DARK-ALECTO | ERA-06 / CONT-AR: expediente candidato; presencia, rol y estado individual aún requieren localizador primario | pending primary text check |
| [Alfia](dark-era/alfia.md) | CHAR-DARK-ALFIA | ERA-04/05 histórico y/o ERA-06: etiquetas cruzadas; separar etapas y comprobar la participación | pending primary text check |
| [Apate](dark-era/apate.md) | CHAR-DARK-APATE | ERA-06 / CONT-AR: expediente candidato; presencia, rol y estado individual aún requieren localizador primario | pending primary text check |
| [Ardee Varma](dark-era/ardee-varma.md) | CHAR-DARK-ARDEE-VARMA | ERA-06 / CONT-AR: expediente candidato; presencia, rol y estado individual aún requieren localizador primario | pending primary text check |
| [Barca Perdix](dark-era/barca-perdix.md) | CHAR-DARK-BARCA-PERDIX | ERA-06 / CONT-AR: expediente candidato; presencia, rol y estado individual aún requieren localizador primario | pending primary text check |
| [Basram](dark-era/basram.md) | CHAR-DARK-BASRAM | ERA-06 / CONT-AR: expediente candidato; presencia, rol y estado individual aún requieren localizador primario | pending primary text check |
| [Dian Cecht](dian-cecht.md) | CHAR-DARK-DIAN-CECHT | Perfil medicinal de la línea principal/Sword Oratoria; presencia personal en ERA-06 no confirmada. La actividad de Dian Cecht Familia no basta como prueba individual. | secondary profile; historical presence unconfirmed |
| [Dis Sisters](dark-era/dis-sisters.md) | CHAR-DARK-DIS-SISTERS | ERA-06 / CONT-AR: expediente candidato; presencia, rol y estado individual aún requieren localizador primario | pending primary text check |
| [Erebus](dark-era/erebus.md) | CHAR-DARK-EREBUS | ERA-06 / CONT-AR: expediente candidato; presencia, rol y estado individual aún requieren localizador primario | pending primary text check |
| [Goibniu](goibniu.md) | CHAR-DARK-GOIBNIU | Perfil de herrero en la línea principal/Sword Oratoria; presencia personal en ERA-06 no confirmada. | secondary profile; historical presence unconfirmed |
| [Hephaistos](hephaistos.md) | CHAR-DARK-HEPHAISTOS | Perfil de herrera en la línea principal/Sword Oratoria; presencia personal en ERA-06 no confirmada. | secondary profile; historical presence unconfirmed |
| [Jura Halmer](dark-era/jura-halmer.md) | CHAR-DARK-JURA-HALMER | ERA-06 / CONT-AR: expediente candidato; presencia, rol y estado individual aún requieren localizador primario | pending primary text check |
| [Miach](miach.md) | CHAR-DARK-MIACH | Perfil de vendedor de pociones y deidad de Miach Familia en la línea principal; presencia personal en ERA-06 no confirmada. | secondary profile; historical presence unconfirmed |
| [Naaza Erisuis](naaza-erisuis.md) | CHAR-DARK-NAAZA | Perfil de farmacéutica y capitana de Miach Familia en la línea principal; presencia personal en ERA-06 no confirmada. | secondary profile; historical presence unconfirmed |
| [Olivas Act](dark-era/olivas-act.md) | CHAR-DARK-OLIVAS-ACT | ERA-06 / CONT-AR: expediente candidato; presencia, rol y estado individual aún requieren localizador primario | pending primary text check |
| [Rudra](dark-era/rudra.md) | CHAR-DARK-RUDRA | ERA-06 / CONT-AR: expediente candidato; presencia, rol y estado individual aún requieren localizador primario | pending primary text check |
| [Samira](dark-era/samira.md) | CHAR-DARK-SAMIRA | ERA-06 / CONT-AR: expediente candidato; presencia, rol y estado individual aún requieren localizador primario | pending primary text check |
| [Selenia](dark-era/selenia.md) | CHAR-DARK-SELENIA | ERA-06 / CONT-AR: expediente candidato; presencia, rol y estado individual aún requieren localizador primario | pending primary text check |
| [Thanatos](dark-era/thanatos.md) | CHAR-DARK-THANATOS | ERA-06 / CONT-AR: expediente candidato; presencia, rol y estado individual aún requieren localizador primario | pending primary text check |
| [Valletta Grede](dark-era/valletta-grede.md) | CHAR-DARK-VALLETTA-GREDE | ERA-06 / CONT-AR: expediente candidato; presencia, rol y estado individual aún requieren localizador primario | pending primary text check |
| [Vito](dark-era/vito.md) | CHAR-DARK-VITO | ERA-06 / CONT-AR: expediente candidato; presencia, rol y estado individual aún requieren localizador primario | pending primary text check |
| [Zald](dark-era/zald.md) | CHAR-DARK-ZALD | ERA-04/05 histórico y/o ERA-06: etiquetas cruzadas; separar etapas y comprobar la participación | pending primary text check |
| [Finn Deimne](finn-deimne.md) | CHAR-FINN-DEIMNE | ERA-07/08 y/o CONT-SO: no asumir presencia en el instante T0; fechar roster y continuidad | provisional |
| [Freya](freya.md) | CHAR-FREYA | Estados múltiples previos y posteriores a T0; afiliación y aparición deben fecharse por arco | provisional |
| [Gareth Landrock](gareth-landrock.md) | CHAR-GARETH-LANDROCK | ERA-07/08 y/o CONT-SO: no asumir presencia en el instante T0; fechar roster y continuidad | official adaptation profile secondary lore primary locator pending |
| [Hera](hera.md) | CHAR-HERA | ERA-03/04/05 histórico Zeus/Hera: rango temporal y estado concreto pendientes de cotejo | secondary reference primary locator pending |
| [Iselina](iselina.md) | CHAR-ISELINA | Nueva Astrea Familia / Solingen: época exacta sin anclar; no proyectar hacia T−7 ni T0 | provisional |
| [Iska Bra](iska-bra.md) | CHAR-ISKA-BRA | ERA-06 / CONT-AR: expediente candidato; presencia, rol y estado individual aún requieren localizador primario | provisional |
| [Gojouno Kaguya](gojouno-kaguya.md) | CHAR-KAGUYA | ERA-06 / CONT-AR: expediente candidato; presencia, rol y estado individual aún requieren localizador primario | provisional |
| [Leene Arshe](leene-arshe.md) | CHAR-LEENE-ARSHE | ERA-07/08 y/o CONT-SO: no asumir presencia en el instante T0; fechar roster y continuidad | secondary reference identity crosswalk pending |
| [Lefiya Viridis](lefiya-viridis.md) | CHAR-LEFIYA-VIRIDIS | ERA-07/08 y/o CONT-SO: no asumir presencia en el instante T0; fechar roster y continuidad | official adaptation profile secondary lore primary locator pending |
| [Liliruca Arde](liliruca-arde.md) | CHAR-LILIRUCA-ARDE | ERA-07/08: arco o roster relacionado con Soma; fijar entrada, salida y estado por volumen | secondary reference partial primary check pending |
| [Aki](aki.md) | CHAR-LOKI-AKI | ERA-07/08 y/o CONT-SO: no asumir presencia en el instante T0; fechar roster y continuidad | secondary reference primary locator pending |
| [Alicia Forestlight](alicia-forestlight.md) | CHAR-LOKI-ALICIA-FORESTLIGHT | Sin ancla temporal fiable en el registro actual; dejar pendiente, no inferir ausencia | primary novel locator pending |
| [Anju](anju.md) | CHAR-LOKI-ANJU | CONT-MANGA: presencia o detalle de manga no equivale a localizador de la novela | secondary reference manga only primary check pending |
| [Arcs](arcs.md) | CHAR-LOKI-ARCS | ERA-07/08 y/o CONT-SO: no asumir presencia en el instante T0; fechar roster y continuidad | secondary reference primary locator pending |
| [Bara](bara.md) | CHAR-LOKI-BARA | CONT-GAME: conservar separado; no trasladar a novela principal sin fuente independiente | secondary reference historical member primary check pending |
| [Carmilia](carmilia.md) | CHAR-LOKI-CARMILIA | CONT-MANGA: presencia o detalle de manga no equivale a localizador de la novela | secondary reference manga roster primary check pending |
| [Claire](claire.md) | CHAR-LOKI-CLAIRE | CONT-MANGA: presencia o detalle de manga no equivale a localizador de la novela | secondary reference manga only primary check pending |
| [Coco (Loki Familia manga character)](coco-loki.md) | CHAR-LOKI-COCO-MANGA | CONT-MANGA: presencia o detalle de manga no equivale a localizador de la novela | secondary reference manga only primary check pending |
| [Cruz](cruz.md) | CHAR-LOKI-CRUZ | ERA-07/08 y/o CONT-SO: no asumir presencia en el instante T0; fechar roster y continuidad | secondary reference primary locator pending |
| [Cynthia](cynthia.md) | CHAR-LOKI-CYNTHIA | ERA-07/08 y/o CONT-SO: no asumir presencia en el instante T0; fechar roster y continuidad | secondary reference primary locator pending |
| [Dain](dain.md) | CHAR-LOKI-DAIN | CONT-GAME: conservar separado; no trasladar a novela principal sin fuente independiente | secondary reference historical member primary check pending |
| [Elfy Colette](elfy-colette.md) | CHAR-LOKI-ELFY-COLETTE | ERA-07/08 y/o CONT-SO: no asumir presencia en el instante T0; fechar roster y continuidad | secondary reference primary locator pending |
| [Kalos](kalos.md) | CHAR-LOKI-KALOS | CONT-MANGA: presencia o detalle de manga no equivale a localizador de la novela | secondary reference manga only primary check pending |
| [Kevin](kevin.md) | CHAR-LOKI-KEVIN | ERA-07/08 y/o CONT-SO: no asumir presencia en el instante T0; fechar roster y continuidad | secondary reference roster only primary check pending |
| [Liza](liza.md) | CHAR-LOKI-LIZA | CONT-MANGA: presencia o detalle de manga no equivale a localizador de la novela | secondary reference manga only primary check pending |
| [Lloyd](lloyd.md) | CHAR-LOKI-LLOYD | CONT-MANGA: presencia o detalle de manga no equivale a localizador de la novela | secondary reference manga only primary check pending |
| [Lox](lox.md) | CHAR-LOKI-LOX | ERA-07/08 y/o CONT-SO: no asumir presencia en el instante T0; fechar roster y continuidad | secondary reference roster only primary check pending |
| [Morel](morel.md) | CHAR-LOKI-MOREL | ERA-07/08 y/o CONT-SO: no asumir presencia en el instante T0; fechar roster y continuidad | secondary reference roster only primary check pending |
| [Narfi](narfi.md) | CHAR-LOKI-NARFI | ERA-07/08 y/o CONT-SO: no asumir presencia en el instante T0; fechar roster y continuidad | secondary reference identity crosswalk pending |
| [Nick](nick.md) | CHAR-LOKI-NICK | CONT-MANGA: presencia o detalle de manga no equivale a localizador de la novela | secondary reference manga only primary check pending |
| [Nicole](nicole.md) | CHAR-LOKI-NICOLE | CONT-MANGA: presencia o detalle de manga no equivale a localizador de la novela | secondary reference manga only primary check pending |
| [Noir Sachsen](noir-sachsen.md) | CHAR-LOKI-NOIR-SACHSEN | CONT-GAME: conservar separado; no trasladar a novela principal sin fuente independiente | secondary reference non main continuity primary check pending |
| [Orba](orba.md) | CHAR-LOKI-ORBA | ERA-07/08 y/o CONT-SO: no asumir presencia en el instante T0; fechar roster y continuidad | secondary reference conflict pending primary check |
| [Rakta Haze](rakta-haze.md) | CHAR-LOKI-RAKTA-HAZE | ERA-07/08 y/o CONT-SO: no asumir presencia en el instante T0; fechar roster y continuidad | secondary reference primary locator pending |
| [Remilia (Loki)](remilia-loki.md) | CHAR-LOKI-REMILIA-HISTORICAL | CONT-MANGA: presencia o detalle de manga no equivale a localizador de la novela | secondary reference manga only identity disambiguation pending |
| [Ruuni](ruuni.md) | CHAR-LOKI-RUUNI | CONT-MANGA: presencia o detalle de manga no equivale a localizador de la novela | secondary reference manga only primary check pending |
| [Sharon](sharon.md) | CHAR-LOKI-SHARON | ERA-07/08 y/o CONT-SO: no asumir presencia en el instante T0; fechar roster y continuidad | secondary reference roster only primary check pending |
| [Shifon](shifon.md) | CHAR-LOKI-SHIFON | CONT-MANGA: presencia o detalle de manga no equivale a localizador de la novela | secondary reference manga only primary check pending |
| [Sonia](sonia.md) | CHAR-LOKI-SONIA | ERA-07/08 y/o CONT-SO: no asumir presencia en el instante T0; fechar roster y continuidad | secondary reference roster only primary check pending |
| [Stark](stark.md) | CHAR-LOKI-STARK | CONT-MANGA: presencia o detalle de manga no equivale a localizador de la novela | secondary reference manga only primary check pending |
| [Lyra](lyra.md) | CHAR-LYRA | ERA-06 / CONT-AR: expediente candidato; presencia, rol y estado individual aún requieren localizador primario | provisional |
| [Mariyu Leage](maryuu-reage.md) | CHAR-MARIYU-LEAGE | ERA-06 / CONT-AR: expediente candidato; presencia, rol y estado individual aún requieren localizador primario | provisional |
| [Maxim](maxim.md) | CHAR-MAXIM | ERA-03/04/05 histórico Zeus/Hera: rango temporal y estado concreto pendientes de cotejo | secondary reference primary locator pending |
| [Meteria](dark-era/meteria.md) | CHAR-METERIA | ERA-04/05 histórico y/o ERA-06: etiquetas cruzadas; separar etapas y comprobar la participación | secondary reference primary locator pending |
| [Neze Rankett](neze-rankett.md) | CHAR-NEZE-RANKETT | ERA-06 / CONT-AR: expediente candidato; presencia, rol y estado individual aún requieren localizador primario | provisional |
| [Noin Unic](noin-unic.md) | CHAR-NOIN-UNIC | ERA-06 / CONT-AR: expediente candidato; presencia, rol y estado individual aún requieren localizador primario | provisional |
| [Ottar](ottar.md) | CHAR-OTTAR | Estados múltiples previos y posteriores a T0; afiliación y aparición deben fecharse por arco | provisional |
| [Raul Nord](raul-nord.md) | CHAR-RAUL-NOORD | ERA-07/08 y/o CONT-SO: no asumir presencia en el instante T0; fechar roster y continuidad | provisional |
| [Riveria Ljos Alf](riveria-ljos-alf.md) | CHAR-RIVERIA-LJOS-ALF | ERA-07/08 y/o CONT-SO: no asumir presencia en el instante T0; fechar roster y continuidad | official adaptation profile secondary lore primary locator pending |
| [Ryana Lietz](ryana-lietz.md) | CHAR-RYANA-LIETZ | ERA-06 / CONT-AR: expediente candidato; presencia, rol y estado individual aún requieren localizador primario | provisional |
| [Ryu Lion](ryuu-lion.md) | CHAR-RYUU-LION | ERA-06 / Astrea Record: apoyo parcial en sinopsis oficial; no sustituye cotejo de novela | provisional |
| [Shau](shau.md) | CHAR-SHAU | Nueva Astrea Familia / Solingen: época exacta sin anclar; no proyectar hacia T−7 ni T0 | provisional |
| [Shinonome Momiji](shinonome-momiji.md) | CHAR-SHINONOME-MOMIJI | CONT-GAME: conservar separado; no trasladar a novela principal sin fuente independiente | secondary game profile checked primary novel pending |
| [Soma](soma.md) | CHAR-SOMA | ERA-07/08: arco o roster relacionado con Soma; fijar entrada, salida y estado por volumen | secondary reference partial primary check pending |
| [Tiona Hiryute](tiona-hiryute.md) | CHAR-TIONA-HIRYUTE | ERA-07/08 y/o CONT-SO: no asumir presencia en el instante T0; fechar roster y continuidad | official adaptation profile secondary lore primary locator pending |
| [Tione Hiryute](tione-hiryute.md) | CHAR-TIONE-HIRYUTE | ERA-07/08 y/o CONT-SO: no asumir presencia en el instante T0; fechar roster y continuidad | official adaptation profile secondary lore primary locator pending |
| [Tsukinokami Kaede](tsukinokami-kaede.md) | CHAR-TSUKINOKAMI-KAEDE | CONT-GAME: conservar separado; no trasladar a novela principal sin fuente independiente | secondary game profile checked primary novel pending |
| [Ulanda](ulanda.md) | CHAR-ULANDA | Nueva Astrea Familia / Solingen: época exacta sin anclar; no proyectar hacia T−7 ni T0 | provisional |
| [Zanis Lustra](zanis-lustra.md) | CHAR-ZANIS-LUSTRA | Sin ancla temporal fiable en el registro actual; dejar pendiente, no inferir ausencia | secondary reference partial primary check pending |
| [Zeus](zeus.md) | CHAR-ZEUS | ERA-03/04/05 histórico Zeus/Hera: rango temporal y estado concreto pendientes de cotejo | secondary reference primary locator pending |
| [Ais Wallenstein](ais-wallenstein.md) | DM-CHAR-AIS | ERA-07: núcleo de historia principal; separar instante de llegada y encuentros posteriores | draft |
| [Bell Cranel](bell-cranel.md) | DM-CHAR-BELL | ERA-07: núcleo de historia principal; separar instante de llegada y encuentros posteriores | draft |
| [Eina Tulle](eina-tulle.md) | DM-CHAR-EINA | ERA-07: núcleo de historia principal; separar instante de llegada y encuentros posteriores | draft |
| [Hestia](hestia.md) | DM-CHAR-HESTIA | ERA-07: núcleo de historia principal; separar instante de llegada y encuentros posteriores | draft |
| [Loki](loki.md) | DM-CHAR-LOKI | ERA-07/08 y/o CONT-SO: no asumir presencia en el instante T0; fechar roster y continuidad | draft |
| [Grupo comparativo Finn / Riveria / Gareth](finn-riveria-gareth.md) | DM-CHAR-LOKI-LEADERS | Registro colectivo; no contabilizar como persona ni extender a cada integrante los datos del grupo | draft |
| [Allen Fromel](allen-fromel.md) | CHAR-ALLEN-FROMEL | Estados múltiples previos y posteriores a T0; afiliación y aparición deben fecharse por arco | official adaptation profile primary novel locator pending |
| [Hedin Selland](hedin-selland.md) | CHAR-HEDIN-SELLAND | Estados múltiples previos y posteriores a T0; afiliación y aparición deben fecharse por arco | official adaptation profile primary novel locator pending |
| [Hogni Ragnar](hogni-ragnar.md) | CHAR-HOGNI-RAGNAR | Estados múltiples previos y posteriores a T0; afiliación y aparición deben fecharse por arco | official adaptation profile primary novel locator pending |
| [Horn](horn.md) | CHAR-HORN | Estados múltiples previos y posteriores a T0; afiliación y aparición deben fecharse por arco | official adaptation profile primary novel locator pending |
| [Heith Velvet](heith-velvet.md) | CHAR-HEITH-VELVET | Estados múltiples previos y posteriores a T0; afiliación y aparición deben fecharse por arco | official adaptation profile primary novel locator pending |
| [Van](van.md) | CHAR-VAN | Estados múltiples previos y posteriores a T0; afiliación y aparición deben fecharse por arco | official adaptation profile primary novel locator pending |
| [Anya Fromel](anya-fromel.md) | CHAR-ANYA-FROMEL | Estados múltiples previos y posteriores a T0; afiliación y aparición deben fecharse por arco | official adaptation profile primary novel locator pending |
| [Mia Grand](mia-grand.md) | CHAR-MIA-GRAND | Estados múltiples previos y posteriores a T0; afiliación y aparición deben fecharse por arco | official adaptation profile primary novel locator pending |
| [Chloe Rollo](chloe-rolo.md) | CHAR-CHLOE-ROLO | Estados múltiples previos y posteriores a T0; afiliación y aparición deben fecharse por arco | official adaptation profile primary novel locator pending |
| [Lunoa Faust](lunoa-faust.md) | CHAR-LUNOA-FAUST | Estados múltiples previos y posteriores a T0; afiliación y aparición deben fecharse por arco | official adaptation profile primary novel locator pending |
| [Alfrigg](gulliver-alfrigg.md) | CHAR-GULLIVER-ALFRIGG | Estados múltiples previos y posteriores a T0; afiliación y aparición deben fecharse por arco | official adaptation profile primary novel locator pending |
| [Dvalinn](gulliver-dvalinn.md) | CHAR-GULLIVER-DVALINN | Estados múltiples previos y posteriores a T0; afiliación y aparición deben fecharse por arco | official adaptation profile primary novel locator pending |
| [Berling](gulliver-berling.md) | CHAR-GULLIVER-BERLING | Estados múltiples previos y posteriores a T0; afiliación y aparición deben fecharse por arco | official adaptation profile primary novel locator pending |
| [Grer](gulliver-grer.md) | CHAR-GULLIVER-GRER | Estados múltiples previos y posteriores a T0; afiliación y aparición deben fecharse por arco | official adaptation profile primary novel locator pending |
| [Gulliver Brothers (registro grupal)](gulliver-brothers.md) | CHAR-GULLIVER-BROTHERS | Estados múltiples previos y posteriores a T0; afiliación y aparición deben fecharse por arco | official adaptation profile primary novel locator pending |

**Control de cobertura:** el catálogo de entrada contenía 151 registros en total y 113 filas de tipo personaje, deidad-personaje o grupo. Estas filas no equivalen a 113 identidades personales únicas comprobadas: alias, grupos y cruces de continuidad siguen en revisión. El nuevo censo temporal no crea personajes adicionales.

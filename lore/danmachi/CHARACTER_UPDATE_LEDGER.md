# Bitácora de actualizaciones de personajes — DanMachi

- **Última actualización:** 2026-10-28.
- **Propósito:** evitar análisis repetidos sin datos nuevos; registrar qué se consultó, qué información apareció, qué no está reportado y qué resultado debe reutilizarse.
- **Alcance de las pasadas documentadas:** datos de niveles, magia, habilidades, habilidades de desarrollo y equipo de la primera Astrea Familia; cierre de búsqueda secundaria de los cinco expedientes DMR-045; y pasada de capacidades de la cohorte Freya Familia DMR-052. **No se reescribieron personalidades.**
- **Integración:** [PR #170](https://github.com/jonhararagi/wordwaifu/pull/170), SHA de `main` `034eb037f98ce25076de7fc4217a62cb960172eb`.
- **CI de PR sobre `e0cb29570ad8cd0b7b704ca73fa95882765e66a0`:** [Validate WordWaifu #40525522243](https://github.com/jonhararagi/wordwaifu/actions/runs/40525522243) y [DanMachi Lore and Retrieval Integrity #40525522040](https://github.com/jonhararagi/wordwaifu/actions/runs/40525522040), ambos `success`.
- **CI post-merge sobre `034eb037f98ce25076de7fc4217a62cb960172eb`:** [Validate WordWaifu #40525793577](https://github.com/jonhararagi/wordwaifu/actions/runs/40525793577) y [DanMachi Lore and Retrieval Integrity #40525794301](https://github.com/jonhararagi/wordwaifu/actions/runs/40525794301), ambos `success`.
- **Fuente primaria de estado del proyecto:** [WORK_QUEUE](WORK_QUEUE.md), [índice maestro](MASTER_INDEX.md) y el [registro central de fuentes](sources/00-registro-fuentes.md).

## Protocolo anti-repetición (obligatorio)

1. **Leer esta bitácora antes de tocar una ficha.** Si la ficha tiene un pase terminado, reutilizar el resultado y no volver a ejecutar la misma búsqueda genérica en la misma wiki/juego.
2. Cada pase registra **ID del personaje, continuidad, URLs revisadas, datos encontrados, campos no reportados, conflictos y disparador exacto para reabrir**.
3. Usar estos estados:
   - `SECONDARY_PASS_COMPLETE`: búsqueda secundaria estructurada terminada; no repetirla sin una fuente nueva.
   - `PARTIAL_NOT_REPORTED`: ciertos datos se encontraron, pero la wiki/juego consultado no informa el campo faltante.
   - `SECONDARY_CONFLICT`: las fuentes secundarias difieren; conservar ambas atribuciones sin escoger por intuición.
   - `HOLD_FOR_PRIMARY_SOURCE`: la investigación secundaria ya fue agotada razonablemente y falta un pasaje primario accesible.
4. **«No informado» no es lo mismo que «no existe».** Significa que la fuente consultada no da ese dato. No escribir un nivel, nombre de magia, skill o coste ausente para completar una ficha. Tampoco afirmar que la habilidad no existe en el canon salvo que una fuente lo diga explícitamente.
5. Las personalidades no se vuelven a reformular por estilo. Solo se cambian con una cita/localizador nuevo, una contradicción documental, una nueva publicación relevante o una petición explícita del usuario.
6. Permitir **una pasada estructurada por fuente y un seguimiento solo ante evidencia nueva**. Si el resultado es «no informado», cerrar ese campo y continuar con otro personaje. No visitar de nuevo la misma página solo para intentar extraer un dato que no presenta.
7. Reabrir una entrada únicamente si ocurre uno de estos disparadores:
   - se obtiene una página narrativa legible de edición licenciada;
   - aparece una fuente oficial nueva (novela, folleto, entrevista autoral) que resuelve el campo;
   - una de las fuentes registradas cambia y agrega una afirmación/localizador;
   - surge una contradicción material que afecte a la continuidad o a la ficha interactiva.
8. El estado de la bitácora registra **investigación y límites de evidencia**, no significa automáticamente que el texto primario esté validado ni autoriza a elevar una wiki a canon confirmado.

## Pasada secundaria 2026-10-27 — primera Astrea Familia

Fuentes comunes consultadas como fuentes secundarias:
- [DanMachi Wiki — Astraea Familia](https://danmachi.fandom.com/wiki/Astraea_Familia): roster con una columna de niveles; algunas filas dicen `Unknown`.
- [DanMachi Wiki — Minor Characters](https://danmachi.fandom.com/wiki/Minor_Characters): resúmenes de personajes menores; en varios casos ofrece el rango amplio `3–4`, no un nivel individual exacto.
- [DanMachi Wiki — Ryuu Lion](https://danmachi.fandom.com/wiki/Ryuu_Lion): resumen comunitario que reporta varias magias de las compañeras de Ryu, algunas sin nombre.
- Para personajes individuales se consultaron los perfiles enlazados abajo. Estas rutas son secundarias y no sustituyen la novela.

### CHAR-ALISE-LOVELACE — Alise Lovell

- **Estado:** `SECONDARY_PASS_COMPLETE`.
- **Continuidad de trabajo:** datos atribuidos a Astrea Record; los rasgos del perfil de adaptación siguen separados.
- **URLs consultadas:** [perfil de Alise](https://danmachi.fandom.com/wiki/Alise_Lovell), [lista comunitaria de habilidades](https://danmachi.fandom.com/wiki/Skills).
- **Datos encontrados:** nivel 4; magia de fuego/enchantment `Agaris Alvesynth`; skills `Lubrude Bequia` y `Batleate Asyrath`; habilidades de desarrollo reportadas `Hunter`, `Abnormal Resistance` y `Fire Flash`; equipo nombrado `Crimson Order` y `Crimson Flower Heat Dress`.
- **No informado en estas páginas:** localizador de página narrativa para cada mecánica y un coste numérico primario por uso.
- **Cierre:** no reescribir su personalidad en esta pasada. Reabrir solo si aparece un pasaje primario que corrija una mecánica/coste o un detalle nuevo requerido.

### CHAR-KAGUYA — Gojouno Kaguya

- **Estado:** `SECONDARY_CONFLICT` para el nombre de una skill; el pase de niveles/magia está completado.
- **URLs consultadas:** [perfil de Kaguya](https://danmachi.fandom.com/wiki/Gojouno_Kaguya), [lista española de habilidades](https://danmachi.fandom.com/es/wiki/Habilidades), [lista inglesa de habilidades](https://danmachi.fandom.com/wiki/Skills).
- **Datos encontrados:** nivel 4; magias reportadas `Gokou` y `Shikai`; skill común reportada `Kaina Blood`; arma `Higanbana` y kodachi `Futaba`; habilidad de desarrollo `Night Fight` y `Abnormal Resistance`.
- **Conflicto registrado:** la página individual inglesa usa `Tekiheni` en el apartado de skills, mientras que el listado español usa `Sakibeni`. No convertir uno en alias del otro ni «corregir» la ficha sin un pasaje primario.
- **No informado:** descripción completa en fuente primaria para cada skill; localizador narrativo exacto de las técnicas de espada.
- **Cierre:** no volver a buscar el nombre de la skill en las mismas dos páginas. Reabrir solo si hay una publicación primaria que lo resuelva.

### CHAR-LYRA — Lyra

- **Estado:** `SECONDARY_PASS_COMPLETE`; efecto de un hechizo permanece no detallado.
- **URLs consultadas:** [perfil de Lyra](https://danmachi.fandom.com/wiki/Lyra), [lista comunitaria de habilidades](https://danmachi.fandom.com/wiki/Skills).
- **Datos encontrados:** nivel 3; magias nombradas `Mūs Mine` y `Wingus Smite`; skills `Ratts Phil` y `Agile Salt`; habilidad de desarrollo `Abnormal Resistance`; armas tipo boomerang `Carnivore`, bombas y objeto mágico `Aegis`.
- **No informado en la referencia consultada:** efecto explicado de `Wingus Smite`, costes precisos y localizadores de página.
- **Cierre:** usar lo ya recogido; no reabrir su personalidad para reformular adjetivos.

### CHAR-MARIYU-LEAGE — Maryuu Reage / Mariyu Reage

- **Estado:** `PARTIAL_NOT_REPORTED` para nivel; magia/equipo reportados.
- **URLs consultadas:** [Minor Characters](https://danmachi.fandom.com/wiki/Minor_Characters), [Astraea Familia](https://danmachi.fandom.com/wiki/Astraea_Familia), [Ryuu Lion](https://danmachi.fandom.com/wiki/Ryuu_Lion).
- **Datos encontrados:** magia curativa de área `Rea Vindemia`, descrita como capaz de curar heridas y restaurar resistencia; arma/equipo reportado: maza.
- **Nivel:** la página de roster marca `Unknown`; el artículo agregador da `3–4`. No hay un nivel individual exacto consistente en estas referencias; no convertir el rango en un nivel exacto.
- **No informado:** nombre de otras skills, nombre de otros hechizos, estados numéricos y costes.
- **Cierre:** no repetir búsqueda de nivel en las mismas páginas. Reabrir solo ante una fuente nueva con nivel exacto o localizador narrativo.

### CHAR-NEZE-RANKETT — Neze Rankett

- **Estado:** `SECONDARY_CONFLICT` para la exactitud del nivel y una skill atribuida.
- **URLs consultadas:** [Astraea Familia](https://danmachi.fandom.com/wiki/Astraea_Familia), [Minor Characters](https://danmachi.fandom.com/wiki/Minor_Characters), [Ryuu Lion](https://danmachi.fandom.com/wiki/Ryuu_Lion), [lista inglesa de skills](https://danmachi.fandom.com/wiki/Skills), [lista española de habilidades](https://danmachi.fandom.com/es/wiki/Habilidades).
- **Datos encontrados:** el roster de Familia indica nivel 4; el artículo agregador usa rango `3–4`. Ryuu Lion atribuye a Neze una magia de garras de viento, pero no da nombre.
- **Conflicto registrado:** una vista de la lista española asocia `Úlfheðinn` con Neze, mientras que la lista inglesa recuperada muestra Bete y Cole Kuster. No asignar esa skill a Neze hasta que un localizador primario lo confirme.
- **No informado:** nombre de la magia de garras, coste, descripción individual de skill y página narrativa que identifique su nivel.
- **Cierre:** no volver a consultar las mismas listas para buscar un nombre que no dan. Reabrir solo si aparece una entrada fuente nueva o un pasaje primario.

### CHAR-NOIN-UNIC — Noin Unic

- **Estado:** `PARTIAL_NOT_REPORTED`.
- **URLs consultadas:** [Astraea Familia](https://danmachi.fandom.com/wiki/Astraea_Familia), [Minor Characters](https://danmachi.fandom.com/wiki/Minor_Characters), [Ryuu Lion](https://danmachi.fandom.com/wiki/Ryuu_Lion).
- **Datos encontrados:** nivel 4 en el roster de Familia; el agregador ofrece el rango amplio `3–4`. Ryuu Lion menciona una magia de aumento de velocidad sin nombre.
- **No informado:** nombre del hechizo, skills con nombre, costes y estadísticas por nivel en las páginas consultadas.
- **Cierre:** su magia queda registrada como «aumento de velocidad (sin nombre reportado)». No seguir intentando dar nombre; reabrir solo ante fuente nueva.

### CHAR-ISKA-BRA — Iska Bra

- **Estado:** `PARTIAL_NOT_REPORTED`.
- **URLs consultadas:** [Astraea Familia](https://danmachi.fandom.com/wiki/Astraea_Familia), [Minor Characters](https://danmachi.fandom.com/wiki/Minor_Characters), [Ryuu Lion](https://danmachi.fandom.com/wiki/Ryuu_Lion).
- **Datos encontrados:** la lista de Familia deja el nivel como `Unknown`; el agregador ofrece el rango amplio `3–4`. Ryuu Lion menciona una magia de ataque de dos puños sin nombre.
- **No informado:** nivel exacto individual, nombre del hechizo, skills nombradas y costes.
- **Cierre:** mantener el nivel como no resuelto y el hechizo como «dos puños, sin nombre reportado». No reabrir por ausencia de datos en la misma fuente.

### CHAR-ASTA-KNOX — Asta Knox

- **Estado:** `PARTIAL_NOT_REPORTED`.
- **URLs consultadas:** [Astraea Familia](https://danmachi.fandom.com/wiki/Astraea_Familia), [Minor Characters](https://danmachi.fandom.com/wiki/Minor_Characters), [Ryuu Lion](https://danmachi.fandom.com/wiki/Ryuu_Lion).
- **Datos encontrados:** el roster de Familia marca el nivel como `Unknown`; el artículo agregador ofrece `3–4`; equipo reportado: escudo. Ryuu Lion menciona una magia de defensa impenetrable, sin nombre.
- **No informado:** nivel individual exacto, nombre de la magia, skills con nombre y coste.
- **Cierre:** registrar «magia defensiva sin nombre reportado»; no generar un nombre ni volver a preguntar a la misma wiki.

### CHAR-RYANA-LIETZ — Ryana Lietz

- **Estado:** `PARTIAL_NOT_REPORTED`.
- **URLs consultadas:** [Astraea Familia](https://danmachi.fandom.com/wiki/Astraea_Familia), [Minor Characters](https://danmachi.fandom.com/wiki/Minor_Characters), [Ryuu Lion](https://danmachi.fandom.com/wiki/Ryuu_Lion).
- **Datos encontrados:** el artículo de Ryuu informa la magia `Irivute`, de fuego, con función de ataque/debilitación: los impactos dejan marcas que reducen el poder y los efectos mágicos. El artículo agregador también menciona magia de fuego capaz de matar a una aventurera de segunda clase, pero sin nombre. El roster de Familia no individualiza nivel; el agregador da `3–4`.
- **No informado:** nivel exacto por un localizador primario; skills y costes numéricos.
- **Cierre:** utilizar `Irivute` como nombre reportado secundariamente. No crear una segunda magia solo por la formulación genérica de la página agregadora.

### CHAR-CELTY-SROWA — Celty Srowa

- **Estado:** `SECONDARY_CONFLICT` para el elemento mágico y `PARTIAL_NOT_REPORTED` para nivel exacto.
- **URLs consultadas:** [perfil de Celty](https://danmachi.fandom.com/wiki/Celty_Srowa), [Astraea Familia](https://danmachi.fandom.com/wiki/Astraea_Familia), [Minor Characters](https://danmachi.fandom.com/wiki/Minor_Characters), [Ryuu Lion](https://danmachi.fandom.com/wiki/Ryuu_Lion).
- **Datos encontrados:** una descripción individual atribuye a Celty magia de fuego capaz de matar a una aventurera de segunda clase; el resumen de Ryuu le atribuye magia de rayo. El roster marca el nivel como `Unknown`; el agregador usa `3–4`.
- **Conflicto registrado:** las páginas no aclaran si se describen dos magias diferentes, si una atribución es errónea o si una entrada está desactualizada. No elegir fuego o rayo ni afirmar que posee ambas sin evidencia explícita.
- **No informado:** nombre de cada magia, coste, lista de skills y nivel exacto.
- **Cierre:** mantener «elemento mágico en conflicto» y no volver a buscar en las mismas páginas.

## Expedientes DMR-045 en pausa hasta evidencia nueva

Estos cinco expedientes ya tienen repetidos barridos secundarios y rutas de muestra licenciada probadas. El resultado actual debe reutilizarse; **no repetir una vuelta general ni reescribir personalidad**.

### CHAR-DARK-ALFIA — Alfia

- **Estado:** `HOLD_FOR_PRIMARY_SOURCE`.
- **Último resultado reutilizable:** se registraron pistas secundarias sobre `Genos Angelus`, `Gif Blessing`, `Limit Off`, `Silentium Eden` y la retrospectiva del volumen 20. La página comunitaria de diferencias de Astrea Record 3 se incorporó por [PR #168](https://github.com/jonhararagi/wordwaifu/pull/168) como guía secundaria.
- **Pendiente real:** texto licenciado legible y localizador reproducible de escena/coste. Las rutas consultadas de las muestras no expusieron páginas narrativas.
- **Reabrir solo si:** aparece una página narrativa nueva accesible o una fuente oficial que aporte un localizador concreto.
- **Cruce de fuente (2026-10-27):** el relato de Fujino Omori ya registrado como DMR-029-SRC-016 y la confirmación editorial de su versión revisada en el cuadernillo de Astrea Record 3 (DMR-045-SRC-002/005) pertenecen a CONT-AU. No elevan habilidades ni escenas de CONT-AR/CONT-MAIN-LN a evidencia primaria; mantener HOLD_FOR_PRIMARY_SOURCE.

### CHAR-DARK-ZALD — Zald

- **Estado:** `HOLD_FOR_PRIMARY_SOURCE`.
- **Último resultado reutilizable:** se registraron como pistas secundarias `Deus Ambrosia`, veneno de Behemoth, el combate con Udaeus y la secuencia de Ottar; no se afirmaron como lectura directa.
- **Pendiente real:** técnica de espada, coste/efecto por escena y localizador de la novela.
- **Reabrir solo si:** hay un pasaje primario accesible que resuelva una de esas cuestiones.
- **Cruce de fuente (2026-10-27):** la convivencia hipotética de Alfia y Zald criando a Bell pertenece al relato alternativo ya registrado DMR-029-SRC-016 (CONT-AU), cuyo cuadernillo se confirma por DMR-045-SRC-002/005. No verifica el combate con Ottar, Afterglow, costes ni la secuencia principal; mantener HOLD_FOR_PRIMARY_SOURCE.

### CHAR-METERIA — Meteria

- **Estado:** `HOLD_FOR_PRIMARY_SOURCE`.
- **Último resultado reutilizable:** las wikis asocian a Meteria con maternidad y parentesco, pero la entrevista de LN News sobre la versión original del juego no pronuncia el nombre Meteria. No identifica al padre de Bell.
- **Pendiente real:** pasaje primario que identifique inequívocamente a Meteria; la personalidad no se modifica a partir de `CONT-AU`.
- **Reabrir solo si:** aparece un pasaje narrativo o una declaración oficial explícita que resuelva la identidad.
- **Cruce de fuente (2026-10-27):** DMR-029-SRC-016 ya contiene texto del autor que nombra a Meteria dentro de CONT-AU; DMR-045-SRC-002/005 confirman la publicación revisada del relato alternativo. Esto no identifica a Meteria en un pasaje de CONT-MAIN-LN; mantener HOLD_FOR_PRIMARY_SOURCE.

### CHAR-DARK-EREBUS — Erebus

- **Estado:** `HOLD_FOR_PRIMARY_SOURCE`.
- **Último resultado reutilizable:** la ideología reportada para la versión de Memoria Freese permanece en `CONT-GAME`; la wiki de diferencias sirve únicamente para localizar la escena EXTRA en `CONT-AR`.
- **Pendiente real:** escenas/diálogos legibles de la novelización, separados del juego.
- **Reabrir solo si:** se obtiene la escena EXTRA o un capítulo de Astrea Record en una muestra/licencia legible.

### CHAR-DARK-RUDRA — Rudra

- **Estado:** `HOLD_FOR_PRIMARY_SOURCE`.
- **Último resultado reutilizable:** las fuentes comunitarias atribuyen actos a Rudra Familia; esto no demuestra que Rudra personalmente los diseñara, ordenara o conociera.
- **Pendiente real:** cotejo primario del volumen 14 para separar responsabilidad grupal de acción individual del dios.
- **Reabrir solo si:** el capítulo/epílogo aparece legible y se puede registrar un localizador reproducible.

## Próxima actualización permitida

**Pasar a otros personajes en lugar de iterar sobre los ya cerrados.** Para esta cohorte, el siguiente lote debe ser de otra Familia/otro grupo y usar el mismo pase único. No reabrir los 10 registros de Astrea ni los cinco DMR-045 sin uno de los disparadores enumerados arriba.


## Pasada secundaria 2026-10-27 — Freya Familia: capacidades y equipo

Esta es una cohorte distinta, abierta porque las fuentes primarias de DMR-045 siguen inaccesibles. No se repiten las páginas de Astrea ya cerradas y no se reescriben personalidades. Detalle completo y referencias: [DANMACHI-RESEARCH-052](research/inbox/DANMACHI-RESEARCH-052-freya-familia-secondary-capabilities.md).

### CHAR-ALLEN-FROMEL — Allen Fromel
- **Estado:** PARTIAL_NOT_REPORTED.
- **URLs consultadas:** [DanMachi Wiki · Allen Fromel](https://danmachi.fandom.com/wiki/Allen_Fromel).
- **Datos encontrados:** snapshot de nivel 6; magia Gralineze Fromel, cuya velocidad y poder destructivo aumentan con la aceleración; lanza.
- **No informado en la pasada:** costes numéricos y lista individual completa de skills con nombres.
- **Cierre:** usar como nota secundaria; no reformular personalidad ni completar huecos por analogía.

### CHAR-HEDIN-SELLAND — Hedin Selland
- **Estado:** PARTIAL_NOT_REPORTED.
- **URLs consultadas:** [perfil en inglés](https://danmachi.fandom.com/wiki/Hedin_Selland) y [Habilidades en español](https://danmachi.fandom.com/es/wiki/Hedin_Selland/Habilidades).
- **Datos encontrados:** snapshot nivel 6; magias Caelus Hildr, Varian Hildr y Laurus Hildr; skills Hildr Blood, Fairy Hildr, Diu Hjaðningavíg y Solvato Eo; habilidades de desarrollo Mage, Abnormal Resistance, Magic Resistance, Spirit Healing y Destructive Lightning; arma Dizaria con estado posterior incierto.
- **No informado/limitado:** coste numérico general, duración fija de encantamientos y confirmación del arma posterior.
- **Cierre:** la restricción de Laurus Hildr (no autoaplicación, objetivo reconocido, alto consumo de mente) queda secundaria; no se reabre para buscar costes en las mismas páginas sin novedad.

### CHAR-HOGNI-RAGNAR — Hogni Ragnar
- **Estado:** PARTIAL_NOT_REPORTED.
- **URL consultada:** [DanMachi Wiki · Hogni Ragnar](https://danmachi.fandom.com/wiki/Hogni_Ragnar).
- **Datos encontrados:** snapshot nivel 6; magias Dainsleif, Burn Dain, Rasu Dain; skills Fairy Nocturne, Vow Hjaðningavíg, Dark In; desarrollos Hunter, Mage, Abnormal Resistance, Swordsman y Flash Cut; arma Victim Abyss.
- **No informado/limitado:** efecto explicado de Rasu Dain en el contenido recuperado; costes exactos. La extensión de hoja reportada para Victim Abyss se conserva como secundaria.
- **Cierre:** no repetir búsqueda de Rasu Dain en la misma página sin actualización. No confundir efecto de Dainsleif con personalidad permanente.

### CHAR-GULLIVER-BROTHERS — Hermanos Gulliver
- **Estado:** SECONDARY_PASS_COMPLETE para los datos conjuntos.
- **URL consultada:** [Wiki DanMachi · Hermanos Gulliver](https://danmachi.fandom.com/es/wiki/Hermanos_Gulliver) y contraste de [la página inglesa](https://danmachi.fandom.com/wiki/Gulliver_Brothers).
- **Datos encontrados:** snapshot grupal nivel 5; coordinación descrita como comparable a nivel 6 si están sincronizados; especialidades diferenciadas entre cálculo/decisión, detección mágica, búsqueda de enemigos y observación; armas individuales nombradas.
- **No informado/limitado:** lista individual completa de magias y skills. Resistencia Anormal se atribuye expresamente a Dvalinn, no a todos los hermanos.
- **Cierre:** no convertir la capacidad conjunta en atributos individuales. Reabrir ante fuente nueva o texto primario.

### CHAR-ALFRIGG-GULLIVER — Alfrigg
- **Estado:** PARTIAL_NOT_REPORTED.
- **URL:** [Hermanos Gulliver](https://danmachi.fandom.com/es/wiki/Hermanos_Gulliver).
- **Dato encontrado:** lanza; análisis y decisiones rápidas basadas en lo que detectan los hermanos.
- **No informado:** skill/magia individual con nombre, coste y nivel individual independiente.
- **Cierre:** no duplicar los datos colectivos como stats personales.

### CHAR-DVALINN-GULLIVER — Dvalinn
- **Estado:** PARTIAL_NOT_REPORTED.
- **URL:** [Hermanos Gulliver](https://danmachi.fandom.com/es/wiki/Hermanos_Gulliver).
- **Dato encontrado:** martillo; detección de magia; Resistencia Anormal atribuida individualmente, sin asignar aquí rango numérico.
- **No informado:** nombres de magia/skill y coste.
- **Cierre:** no transferir esta habilidad a los otros tres sin evidencia.

### CHAR-BERLING-GULLIVER — Berling
- **Estado:** PARTIAL_NOT_REPORTED.
- **URL:** [Hermanos Gulliver](https://danmachi.fandom.com/es/wiki/Hermanos_Gulliver).
- **Dato encontrado:** hacha; búsqueda de enemigos y vigilancia ante emboscadas.
- **No informado:** magia/skill individual con nombre y costes.
- **Cierre:** no inferir habilidades formales de la descripción táctica.

### CHAR-GRER-GULLIVER — Grer
- **Estado:** PARTIAL_NOT_REPORTED.
- **URL:** [Hermanos Gulliver](https://danmachi.fandom.com/es/wiki/Hermanos_Gulliver).
- **Dato encontrado:** espadón; observación de hábitos y debilidades del adversario.
- **No informado:** magia/skill individual con nombre y costes.
- **Cierre:** no renombrar la especialidad como skill formal.

**Regla de toda la cohorte:** las referencias son secundarias y no se crearon claims, eventos ni relaciones. Reabrir solo con página primaria legible, fuente oficial nueva, actualización material de la wiki o contradicción nueva.


## Cierre de integración — cohorte Freya Familia DMR-052 (2026-10-27)
- Integrado mediante [PR #172](https://github.com/jonhararagi/wordwaifu/pull/172), SHA de `main` `79505bd740d47560d4bc67166c807d14090a950d`.
- CI de PR: [Validate #40572608737](https://github.com/jonhararagi/wordwaifu/actions/runs/40572608737) y [Lore/Integrity #40572608435](https://github.com/jonhararagi/wordwaifu/actions/runs/40572608435), ambos `success`.
- CI post-merge sobre ese SHA exacto: [Validate #40590376454](https://github.com/jonhararagi/wordwaifu/actions/runs/40590376454) y [Lore/Integrity #40590376362](https://github.com/jonhararagi/wordwaifu/actions/runs/40590376362), ambos `success`.
- Estado de evidencia sin cambios: fuentes secundarias; lo no reportado no se convierte en inexistencia canónica; no reabrir expedientes ni reescribir personalidades sin un disparador documentado.

## Pasada secundaria 2026-10-27 — Familia Loki: capacidades de combate

### CHAR-BETE-LOGA — Bete Loga

- **Estado:** PARTIAL_NOT_REPORTED.
- **URLs consultadas:** [DanMachi Wiki · Bete Loga](https://danmachi.fandom.com/wiki/Bete_Loga) y [Habilidades en español](https://danmachi.fandom.com/es/wiki/Bete_Loga/Habilidades).
- **Datos encontrados:** nivel 6 reportado; Hati; skills Úlfheðinn, Fenris Wolf y Solmani; equipo Flosvirt/Frosvirt y Dual Rolan. La tabla detallada de estadísticas se presenta como nivel 5.
- **No informado/conflicto:** no se recuperó coste numérico de Hati. La grafía Flosvirt/Frosvirt varía entre las páginas inglesa y española.
- **Cierre:** conservar la diferencia de snapshots y de grafía; no mezclar estadísticas del nivel 5 con el encabezado de nivel 6.
- **Reabrir solo si:** una fuente oficial nueva o un pasaje primario legible resuelve la mecánica/nombre, o las páginas se actualizan materialmente.

### CHAR-TIONA-HIRYUTE — Tiona Hiryute

- **Estado:** PARTIAL_NOT_REPORTED.
- **URL consultada:** [DanMachi Wiki · Tiona Hiryute](https://danmachi.fandom.com/wiki/Tiona_Hiryute).
- **Datos encontrados:** nivel 6 reportado; skills Berserk e Intense Heat; habilidades de desarrollo Fist Strike, Diving, Abnormal Resistance y Crush; armas Urga, Blade Rolan y Corbel Edge.
- **No informado:** la ficha consultada no enumera una magia con nombre ni coste mágico; la tabla detallada de estadísticas corresponde al estado de nivel 5.
- **Cierre:** no interpretar que una magia no listada en esta página esté universalmente ausente; no cambiar su personalidad ni volver a investigar su pasado en esta tanda.
- **Reabrir solo si:** aparece texto primario legible o una actualización material de la fuente sobre sus capacidades.

### CHAR-TIONE-HIRYUTE — Tione Hiryute

- **Estado:** PARTIAL_NOT_REPORTED.
- **URL consultada:** [DanMachi Wiki · Tione Hiryute](https://danmachi.fandom.com/wiki/Tione_Hiryute).
- **Datos encontrados:** nivel 6 reportado; skills Berserk y Backdraft; magia List Iorum; habilidades de desarrollo Fist Strike, Diving, Abnormal Resistance y Healing Power; equipo Zolas, Filuka, Halberd Rolan y Corbel Edge.
- **No informado:** coste/duración precisos de List Iorum; la tabla detallada de estadísticas corresponde al estado de nivel 5.
- **Cierre:** no transferir las habilidades de una gemela a la otra por analogía; no volver a reformular personalidad o historial.
- **Reabrir solo si:** aparece un pasaje primario legible o una actualización material de la fuente.

## Cierre de integración — cohorte Loki Familia DMR-053 (2026-10-27)
- Integrado mediante [PR #174](https://github.com/jonhararagi/wordwaifu/pull/174), SHA de `main` `28ae6f34859bc0a59beaf7a711bfa54504265ffd`.
- **CI de PR sobre `37f50a3f0608cb00b3c355e75c008031e70bbe70`:** [Validate WordWaifu #40602468962](https://github.com/jonhararagi/wordwaifu/actions/runs/40602468962) y [DanMachi Lore and Retrieval Integrity #40602469069](https://github.com/jonhararagi/wordwaifu/actions/runs/40602469069), ambos `success`.
- **CI post-merge sobre el SHA exacto de `main` `28ae6f34859bc0a59beaf7a711bfa54504265ffd`:** [Validate WordWaifu #40602644529](https://github.com/jonhararagi/wordwaifu/actions/runs/40602644529) y [DanMachi Lore and Retrieval Integrity #40602644563](https://github.com/jonhararagi/wordwaifu/actions/runs/40602644563), ambos `success`.
- La cohorte conserva fuentes secundarias, la variante Flosvirt/Frosvirt y snapshots de nivel 5 separados de encabezados de nivel 6. No se modifica personalidad ni historial; “no listado” se mantiene como límite de la fuente.


## Pasada secundaria 2026-10-28 — Hermes Familia: capacidades de Asfi y Lulune

### CHAR-ASFI-AL-ANDROMEDA — Asfi Al Andromeda

- **Estado:** `PARTIAL_NOT_REPORTED` para costes/duración generales y cotejo narrativo primario.
- **URLs consultadas:** [DanMachi Wiki · Asfi Al Andromeda](https://danmachi.fandom.com/wiki/Asfi_Al_Andromeda).
- **Datos encontrados:** nivel 4 reportado; magia `Kalov Argol`; skills `Trismegistus`, `Argeiphontes`, `Petasos`, `Special General` y `Andromedas`; habilidades de desarrollo enumeradas por la wiki y equipo `Canoval Dagger`, `Burst Oil`, `Talaria`, `White Cloud Chlamys`, `Cithara`, `Hades Head` y `Crizea`.
- **No informado/cotejado:** costes numéricos completos, duración/cooldowns generales y localizadores de página primaria para cada mecánica.
- **Cierre:** reutilizar la pasada secundaria; no reescribir personalidad ni elevar a canon cotejado. Reabrir solo ante fuente oficial nueva, cambio material de la página o pasaje narrativo licenciable legible.

### CHAR-LULUNE-LOUIE — Lulune Louie

- **Estado:** `PARTIAL_NOT_REPORTED`.
- **URL consultada:** [DanMachi Wiki · Lulune Louie](https://danmachi.fandom.com/wiki/Lulune_Louie).
- **Datos encontrados:** nivel 3 reportado; estilo de combate acrobático, destreza general con cuchillo, tácticas de guerrilla/disrupción, sentidos agudizados y capacidad de cartografía.
- **No informado en el contenido recuperado:** nombres de magia, skills, habilidades de desarrollo o arma específica; estadísticas detalladas, costes y localizadores narrativos. La página menciona cuchillos en términos generales, sin nombrar un arma.
- **Cierre:** no interpretar la ausencia de una lista como inexistencia en canon. No volver a consultar la misma página para buscar nombres que no presenta; reabrir ante una actualización material o una fuente nueva.

**Regla de toda la cohorte DMR-054:** se amplían solo capacidades con respaldo comunitario y se mantienen dentro de `CONT-SECONDARY`. No se modifica personalidad, historia, relaciones, eventos ni claims narrativos; no se crea una lista ficticia para completar campos vacíos.

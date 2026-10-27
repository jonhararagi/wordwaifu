# Bitácora de actualizaciones de personajes — DanMachi

- **Última actualización:** 2026-10-27.
- **Propósito:** evitar análisis repetidos sin datos nuevos; registrar qué se consultó, qué información apareció, qué no está reportado y qué resultado debe reutilizarse.
- **Alcance de esta pasada:** datos de niveles, magia, habilidades, habilidades de desarrollo y equipo de la primera Astrea Familia, más el cierre de búsqueda secundaria de los cinco expedientes DMR-045. **No se reescribieron personalidades.**
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

### CHAR-DARK-ZALD — Zald

- **Estado:** `HOLD_FOR_PRIMARY_SOURCE`.
- **Último resultado reutilizable:** se registraron como pistas secundarias `Deus Ambrosia`, veneno de Behemoth, el combate con Udaeus y la secuencia de Ottar; no se afirmaron como lectura directa.
- **Pendiente real:** técnica de espada, coste/efecto por escena y localizador de la novela.
- **Reabrir solo si:** hay un pasaje primario accesible que resuelva una de esas cuestiones.

### CHAR-METERIA — Meteria

- **Estado:** `HOLD_FOR_PRIMARY_SOURCE`.
- **Último resultado reutilizable:** las wikis asocian a Meteria con maternidad y parentesco, pero la entrevista de LN News sobre la versión original del juego no pronuncia el nombre Meteria. No identifica al padre de Bell.
- **Pendiente real:** pasaje primario que identifique inequívocamente a Meteria; la personalidad no se modifica a partir de `CONT-AU).
- **Reabrir solo si:** aparece un pasaje narrativo o una declaración oficial explícita que resuelva la identidad.

### CHAR-DARK-EREBUS — Erebus

- **Estado:** `HOLD_FOR_PRIMARY_SOURCE`.
- **Último resultado reutilizable:** la ideología reportada para la versión de Memoria Freese permanece en `CONT-GAME); la wiki de diferencias sirve únicamente para localizar la escena EXTRA en `CONT-AR).
- **Pendiente real:** escenas/diálogos legibles de la novelización, separados del juego.
- **Reabrir solo si:** se obtiene la escena EXTRA o un capítulo de Astrea Record en una muestra/licencia legible.

### CHAR-DARK-RUDRA — Rudra

- **Estado:** `HOLD_FOR_PRIMARY_SOURCE`.
- **Último resultado reutilizable:** las fuentes comunitarias atribuyen actos a Rudra Familia; esto no demuestra que Rudra personalmente los diseñara, ordenara o conociera.
- **Pendiente real:** cotejo primario del volumen 14 para separar responsabilidad grupal de acción individual del dios.
- **Reabrir solo si:** el capítulo/epílogo aparece legible y se puede registrar un localizador reproducible.

## Próxima actualización permitida

**Pasar a otros personajes en lugar de iterar sobre los ya cerrados.** Para esta cohorte, el siguiente lote debe ser de otra Familia/otro grupo y usar el mismo pase único. No reabrir los 10 registros de Astrea ni los cinco DMR-045 sin uno de los disparadores enumerados arriba.


## Estado de integración y validación — 2026-10-27

- [PR #170](https://github.com/jonhararagi/wordwaifu/pull/170) integró la bitácora, la vista `CONT-SECONDARY`, la primera cohorte y las regresiones automatizadas; squash SHA de `main`: `034eb037f98ce25076de7fc4217a62cb960172eb`.
- CI de PR sobre `e0cb29570ad8cd0b7b704ca73fa95882765e66a0`: [Validate WordWaifu #40525522243](https://github.com/jonhararagi/wordwaifu/actions/runs/40525522243) y [DanMachi Lore and Retrieval Integrity #40525522040](https://github.com/jonhararagi/wordwaifu/actions/runs/40525522040), ambos `success`.
- CI post-merge sobre `034eb037f98ce25076de7fc4217a62cb960172eb`: [Validate WordWaifu #40525793577](https://github.com/jonhararagi/wordwaifu/actions/runs/40525793577) y [DanMachi Lore and Retrieval Integrity #40525794301](https://github.com/jonhararagi/wordwaifu/actions/runs/40525794301), ambos `success`.
- No se crearon claims, eventos o aristas nuevos. Las fuentes de la cohorte permanecen secundarias y DMR-045 sigue en `HOLD_FOR_PRIMARY_SOURCE` hasta evidencia primaria nueva.

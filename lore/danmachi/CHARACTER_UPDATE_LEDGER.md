# Bitácora de actualizaciones de personajes — DanMachi

- **Última actualización:** 2026-10-29.
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

**Convención del signo `+` (desde 2026-10-29):** indica que se completó una pasada pública estructurada por ese personaje, registrando páginas consultadas, datos secundarios útiles y vacíos. **No** significa que el cotejo primario esté completo ni que los datos secundarios hayan sido promovidos a canon. Los cinco estados `HOLD_FOR_PRIMARY_SOURCE` se conservan hasta obtener texto narrativo licenciado legible o una fuente oficial nueva que resuelva el punto.

### CHAR-DARK-ALFIA — Alfia +

- **Estado:** `HOLD_FOR_PRIMARY_SOURCE`.
- **Último resultado reutilizable:** se registraron pistas secundarias sobre `Genos Angelus`, `Gif Blessing`, `Limit Off`, `Silentium Eden` y la retrospectiva del volumen 20. La página comunitaria de diferencias de Astrea Record 3 se incorporó por [PR #168](https://github.com/jonhararagi/wordwaifu/pull/168) como guía secundaria.
- **Pendiente real:** texto licenciado legible y localizador reproducible de escena/coste. Las rutas consultadas de las muestras no expusieron páginas narrativas.
- **Reabrir solo si:** aparece una página narrativa nueva accesible o una fuente oficial que aporte un localizador concreto.
- **Pasada pública 2026-10-29 (+):** se volvieron a contrastar [Alfia (EN)](https://danmachi.fandom.com/wiki/Alfia), [Alfia/Habilidades (ES)](https://danmachi.fandom.com/es/wiki/Alfia/Habilidades) y [Diferencias de Astrea Record 3 (ES)](https://danmachi.fandom.com/es/wiki/Astrea_Record_Novela_Ligera_Volumen_3/Diferencias). Se consolidó como nota de investigación —no como nuevo claim— que la wiki reporta `Gif Blessing`/`Limit Off`, la caída progresiva de atributos/estamina/mente y las tres magias `Satanas Verion`, `Silentium Eden` y `Genos Angelus`; el 5% «por turno» sigue siendo atribución secundaria, sin pasaje narrativo primario ni coste de escena verificado. No se añadió lore ni se modificó la ficha interactiva.
- **Cruce de fuente (2026-10-27):** el relato de Fujino Omori ya registrado como DMR-029-SRC-016 y la confirmación editorial de su versión revisada en el cuadernillo de Astrea Record 3 (DMR-045-SRC-002/005) pertenecen a CONT-AU. No elevan habilidades ni escenas de CONT-AR/CONT-MAIN-LN a evidencia primaria; mantener HOLD_FOR_PRIMARY_SOURCE.

### CHAR-DARK-ZALD — Zald +

- **Estado:** `HOLD_FOR_PRIMARY_SOURCE`.
- **Último resultado reutilizable:** se registraron como pistas secundarias `Deus Ambrosia`, veneno de Behemoth, el combate con Udaeus y la secuencia de Ottar; no se afirmaron como lectura directa.
- **Pendiente real:** técnica de espada, coste/efecto por escena y localizador de la novela.
- **Reabrir solo si:** hay un pasaje primario accesible que resuelva una de esas cuestiones.
- **Pasada pública 2026-10-29 (+):** se contrastaron [Zald (EN)](https://danmachi.fandom.com/wiki/Zald), [Zald (ES)](https://danmachi.fandom.com/es/wiki/Zald), las listas de [habilidades (ES)](https://danmachi.fandom.com/es/wiki/Habilidades) y [skills (EN)](https://danmachi.fandom.com/wiki/Skills), [sinopsis comunitaria de DanMachi vol. 20, capítulo 3](https://danmachi.fandom.com/wiki/DanMachi_Light_Novel_Volume_20/Synopsis) y [Leon Vardenburg (EN)](https://danmachi.fandom.com/wiki/Leon_Vardenburg). Se documentó como pista secundaria que `Rea Ambrosia` recubre el arma y que `Afterglow` se describe como un corte de onda de choque repetible; la sinopsis de vol. 20 atribuye a Zald derrotar a Udaeus de un golpe usando Afterglow y que Leon buscó aprender su técnica. `Deus Ambrosia`/`Overeat` se vincula al aumento según lo ingerido. Se conservó la distinción entre la confrontación anterior con Ottar resumida en la página de diferencias del vol. 1 (un ataque) y el combate final del Gran Conflicto descrito en el perfil de Zald como prolongado y condicionado por el veneno. Son resúmenes secundarios: no se fusionan escenas ni se afirma que el texto primario haya sido cotejado.
- **Cruce de fuente (2026-10-27):** la convivencia hipotética de Alfia y Zald criando a Bell pertenece al relato alternativo ya registrado DMR-029-SRC-016 (CONT-AU), cuyo cuadernillo se confirma por DMR-045-SRC-002/005. No verifica el combate con Ottar, Afterglow, costes ni la secuencia principal; mantener HOLD_FOR_PRIMARY_SOURCE.

### CHAR-METERIA — Meteria +

- **Estado:** `HOLD_FOR_PRIMARY_SOURCE`.
- **Último resultado reutilizable:** las wikis asocian a Meteria con maternidad y parentesco, pero la entrevista de LN News sobre la versión original del juego no pronuncia el nombre Meteria. No identifica al padre de Bell.
- **Pendiente real:** pasaje primario que identifique inequívocamente a Meteria; la personalidad no se modifica a partir de `CONT-AU`.
- **Reabrir solo si:** aparece un pasaje narrativo o una declaración oficial explícita que resuelva la identidad.
- **Pasada pública 2026-10-29 (+):** se contrastaron [Meteria (EN)](https://danmachi.fandom.com/wiki/Meteria), [Meteria (ES)](https://danmachi.fandom.com/es/wiki/Meteria), la [nota de Fujino Omori](https://note.com/fujinoomori/n/n629829ac3fe4) y la [entrevista de LN News de 2024](https://www.ln-news.com/articles/121215). Las dos wikis coinciden en maternidad y parentesco, pero siguen siendo secundarias; la nota del autor es `CONT-AU` y no prueba por sí sola la continuidad principal. La entrevista de 2024 trata la diferencia entre juego y novelización, pero no menciona a Meteria. No se infiere ni se propone un nombre para el padre de Bell; no se añadió un claim canónico.
- **Precisión adicional de fuente autoral (2026-10-29):** relectura focalizada de [la entrevista de Omori en LN News (2020)](https://ln-news.com/articles/109766), DMR-045-SRC-009, sección sobre el nacimiento de Bell. El entrevistador resume que el padre era un *supporter* de Zeus Familia y que la madre era la hermana menor de Alfia; Omori responde afirmativamente. Esto permite registrar el rol/afiliación general del padre, pero **no su nombre**. La entrevista tampoco pronuncia el nombre Meteria para la hermana. Continuidad `CONT-GAME`; no identifica a Meteria en `CONT-MAIN-LN` ni convierte la wiki en fuente primaria.
- **Cruce de fuente (2026-10-27):** DMR-029-SRC-016 ya contiene texto del autor que nombra a Meteria dentro de CONT-AU; DMR-045-SRC-002/005 confirman la publicación revisada del relato alternativo. Esto no identifica a Meteria en un pasaje de CONT-MAIN-LN; mantener HOLD_FOR_PRIMARY_SOURCE.

### CHAR-DARK-EREBUS — Erebus +

- **Estado:** `HOLD_FOR_PRIMARY_SOURCE`.
- **Último resultado reutilizable:** la ideología reportada para la versión de Memoria Freese permanece en `CONT-GAME`; la wiki de diferencias sirve únicamente para localizar la escena EXTRA en `CONT-AR`.
- **Pendiente real:** escenas/diálogos legibles de la novelización, separados del juego.
- **Reabrir solo si:** se obtiene la escena EXTRA o un capítulo de Astrea Record en una muestra/licencia legible.
- **Pasada pública 2026-10-29 (+):** se contrastaron [Erebus (EN)](https://danmachi.fandom.com/wiki/Erebus), [Astraea Record (EN)](https://danmachi.fandom.com/wiki/Astraea_Record), [Diferencias de Astrea Record 3 (ES)](https://danmachi.fandom.com/es/wiki/Astrea_Record_Novela_Ligera_Volumen_3/Diferencias) y la [entrevista a Omori de 2024](https://www.ln-news.com/articles/121215). La wiki describe su ideología en `CONT-GAME`; la página de diferencias funciona como pista para una escena EXTRA con Zald, Alfia y Erebus en `CONT-AR`, sin texto narrativo ni localizador primario accesible. La entrevista autoral explica que la novelización reescribe y añade material frente al juego, pero no verifica el diálogo específico de Erebus. Se mantiene la separación juego/novela.

### CHAR-DARK-RUDRA — Rudra +

- **Estado:** `HOLD_FOR_PRIMARY_SOURCE`.
- **Último resultado reutilizable:** las fuentes comunitarias atribuyen actos a Rudra Familia; esto no demuestra que Rudra personalmente los diseñara, ordenara o conociera.
- **Pendiente real:** cotejo primario del volumen 14 para separar responsabilidad grupal de acción individual del dios.
- **Reabrir solo si:** el capítulo/epílogo aparece legible y se puede registrar un localizador reproducible.
- **Pasada pública 2026-10-29 (+):** se contrastaron [Rudra (ES)](https://danmachi.fandom.com/es/wiki/Rudra), [Rudra Familia (EN)](https://danmachi.fandom.com/wiki/Rudra_Familia), [Ryuu Lion (ES)](https://danmachi.fandom.com/es/wiki/Ryuu_Lion) y el resumen comunitario del [volumen 14 (EN)](https://danmachi.fandom.com/wiki/DanMachi_Light_Novel_Volume_14/Synopsis). Se reiteró la distinción entre la trampa atribuida a Rudra Familia como grupo, la aparición del Juggernaut y la escena posterior en que Rudra aparece ante Ryuu. Eso no prueba que Rudra diseñara, ordenara o conociera personalmente la trampa. El claim parcial ya registrado para el capítulo 13 sigue limitado a la secuencia grupal; no se amplía la responsabilidad individual.

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


## Cierre de integración — cohorte Hermes DMR-054 (2026-10-28)
- **Cohorte:** Asfi Al Andromeda y Lulune Louie.
- **Integración:** [PR #179](https://github.com/jonhararagi/wordwaifu/pull/179), SHA de `main` `cf1aef26f0f2f1d3b4ffe4513c0ff80f65764ef6`.
- **CI de PR sobre `809ad6ccd67e0e90c01d7c842438b1f296ae2ad5`:** [Validate #40727748042](https://github.com/jonhararagi/wordwaifu/actions/runs/40727748042) y [Lore/Integrity #40727747907](https://github.com/jonhararagi/wordwaifu/actions/runs/40727747907), ambos `success`.
- **CI post-merge sobre el SHA exacto de `main`:** [Validate #40728030060](https://github.com/jonhararagi/wordwaifu/actions/runs/40728030060) y [Lore/Integrity #40728030297](https://github.com/jonhararagi/wordwaifu/actions/runs/40728030297), ambos `success`.
- **Límite de evidencia:** datos comunitarios únicamente; no se reescribieron personalidades ni se crearon claims, eventos, relaciones o aliases. Los campos que la página no enumera permanecen como «no informados en el contenido consultado».

## Pasada secundaria 2026-10-28 — herreros de Hephaistos (DMR-055)

Fuentes consultadas:
- [Tsubaki Collbrande — DanMachi Wiki](https://danmachi.fandom.com/wiki/Tsubaki_Collbrande), inglés.
- [Welf Crozzo — DanMachi Wiki](https://danmachi.fandom.com/es/wiki/Welf_Crozzo), español.

### CHAR-TSUBAKI-COLLBRANDE — Tsubaki Collbrande
- **Estado:** PARTIAL_NOT_REPORTED para magia/skills personales; capacidades secundarias documentadas.
- **Hallazgos:** nivel 5 reportado; Hephaistos Familia; Herrero y Resistencia Anormal; maestría en forja y manejo versátil de armas; Benishigure aparece como naginata propia.
- **No informado en las secciones consultadas:** lista nominal de magia/skills, costes numéricos, estadísticas completas y localizadores narrativos primarios.
- **Cierre:** no repetir esta URL para buscar los campos ausentes. Reabrir solo ante actualización material o fuente primaria accesible.

### CHAR-WELF-CROZZO — Welf Crozzo
- **Estado:** SECONDARY_PASS_COMPLETE para la pasada acotada de capacidades; costes exactos y cotejo primario pendientes.
- **Hallazgos:** nivel 2 reportado en la ficha consultada; Will-o-Wisp; Crozzo Blood; Veritas Burn; Herrero; gran espada, Shikou Kazuki y equipo nombrado en DMR-055. Will-o-Wisp tiene límites descritos por la fuente y no se modela como cancelación universal; las espadas que dependen de la magia del usuario pueden agotar al portador.
- **No informado de forma cotejable:** costes numéricos completos, preparación exacta en todas las condiciones y localizadores primarios para cada mecánica.
- **Cierre:** no repetir la misma página para los campos ausentes ni reformular la personalidad.

**Regla DMR-055:** todos estos hallazgos son CONT-SECONDARY; no se crean claims narrativos, relaciones, eventos o alias. «No informado» no significa «inexistente en canon».

## Cierre de integración — cohorte DMR-055 (2026-10-28)
- **PR:** [#182](https://github.com/jonhararagi/wordwaifu/pull/182), squash merge; SHA de `main`: `25b019598e74c5f9756aa541b8e9f5f1fe7c633e`.
- **CI de PR:** [Validate #40744157365](https://github.com/jonhararagi/wordwaifu/actions/runs/40744157365) y [Lore/Integrity #40744157330](https://github.com/jonhararagi/wordwaifu/actions/runs/40744157330), ambos `success` sobre el head `3712b698375d48458b7c7cc0012df56e344a2686`.
- **CI post-merge:** [Validate #40751474055](https://github.com/jonhararagi/wordwaifu/actions/runs/40751474055) y [Lore/Integrity #40751474058](https://github.com/jonhararagi/wordwaifu/actions/runs/40751474058), ambos `success` sobre el SHA exacto de `main`.
- **Límite:** DMR-055 solo cubre la pasada secundaria de Tsubaki y Welf. Las fichas interactivas no se actualizaron; no se modificaron personalidades ni se añadieron claims narrativos.

## Pasada secundaria 2026-10-28 — Hestia Familia: capacidades de apoyo/curación

### CHAR-LILIRUCA-ARDE — Liliruca Arde
- **Estado:** `SECONDARY_PASS_COMPLETE`.
- **Continuidad:** `CONT-SECONDARY`; el perfil oficial ya existente se mantiene en su alcance original.
- **URL revisada:** https://danmachi.fandom.com/es/wiki/Liliruca_Arde
- **Datos encontrados:** nivel 2 reportado; Cinder Ella, Artel Assist, Command Call, Abnormal Resistance, Sciurus Walnut, Rikka, Goliath Robe y Supporter Glove.
- **Límites/no informado:** copia física limitada por su estado; Command Call depende de intensidad del grito/escala de combate/falna/nivel. Costes, duración y localizadores primarios no informados en el extracto.
- **Reabrir solo si:** aparece una fuente oficial nueva o un pasaje primario legible; no repetir el mismo artículo.

### CHAR-MIKOTO-YAMATO — Mikoto Yamato
- **Estado:** `SECONDARY_PASS_COMPLETE`.
- **Continuidad:** `CONT-SECONDARY`.
- **URL revisada:** https://danmachi.fandom.com/wiki/Yamato_Mikoto
- **Datos encontrados:** nivel 2 reportado; Futsunomitama (campo descrito de unos 10 metros), Yatanokurogarasu, Yatanoshirogarasu, Abnormal Resistance y armas nombradas.
- **Límites/no informado:** las hazañas contra Black Goliath/Gulliver tienen condiciones contextuales; las skills solo cubren el conjunto y rango descritos. Costes, duración general y radios exactos no informados en el extracto.
- **Reabrir solo si:** aparece fuente oficial nueva o pasaje primario legible; no repetir el mismo artículo.

### CHAR-SANJOUNO-HARUHIME — Sanjouno Haruhime
- **Estado:** `SECONDARY_PASS_COMPLETE`.
- **Continuidad:** `CONT-SECONDARY`.
- **URL revisada:** https://danmachi.fandom.com/wiki/Sanjouno_Haruhime
- **Datos encontrados:** Uchide no Kozuchi, Kokonoe, Mikuzumenohou, Mage y equipo. Se registran snapshots de 15/10 minutos a nivel 1 y 20/9 minutos a nivel 2/War Game; la fuente también habla de un máximo general de nueve colas y seis en el snapshot del War Game.
- **Límites/no informado:** no reconciliar snapshots por intuición; coste numérico de Mind y localizadores primarios no recuperados.
- **Reabrir solo si:** aparece fuente oficial nueva o pasaje primario legible; no repetir el mismo artículo.

### CHAR-NINA-TULLE — Nina Tulle
- **Estado:** `SECONDARY_CONFLICT` para afiliación/membresía; ficha nueva provisional.
- **Continuidad:** `CONT-SECONDARY`.
- **URLs revisadas:** https://danmachi.fandom.com/wiki/Nina_Tulle; https://danmachi.fandom.com/wiki/Hestia_Familia; https://danmachi.fandom.com/es/wiki/Familia_Hestia
- **Datos encontrados:** nivel 2 y piso 29 reportados; Magia Kris, Lagriel Krisheim; skills enumeradas Fairy Cradle y Alf Minister; Mage, Anmistil Staff y Magic Bringer MK-4: Fierce Wind.
- **Conflicto:** los párrafos de las páginas EN/ES dicen que Nina es pasante y aún no miembro oficial sin falna de Hestia, pero las tablas de roster la marcan como activa. Mantener discrepancia abierta.
- **Límites/no informado:** efectos individuales de las dos skills no están descritos en el extracto; no crear alias, aristas ni hechos canónicos a partir de esta pasada.
- **Reabrir solo si:** aparece fuente oficial nueva, página materialmente actualizada o pasaje primario legible.



## Verificación de integración — DANMACHI-RESEARCH-056

- **PR:** [#186](https://github.com/jonhararagi/wordwaifu/pull/186), fusionada a `main`.
- **Merge SHA:** `a51f3a8a92ceb74e12be0d9dad1e4c5ad4a7a470`; head probado antes del merge: `4d299431611382a96ea0881bca1c0c722eb12e73`.
- **CI pre-merge:** [Validate WordWaifu #40773212555](https://github.com/jonhararagi/wordwaifu/actions/runs/40773212555) y [DanMachi Lore and Retrieval Integrity #40773212768](https://github.com/jonhararagi/wordwaifu/actions/runs/40773212768) concluyeron en success. El head probado validó los campos sustanciales de Nina, las fuentes y el conflicto de membresía, catálogo, bitácora, notas de archivo y smoke tests de navegador.
- **Límite de evidencia CI:** la vista de workflow disponible en el conector solo devuelve ejecuciones asociadas a pull requests; no devolvió runs para el merge SHA. Por ello no se declara verificado el CI de push/post-merge.
- **Continuidad:** todos los datos DMR-056 permanecen bajo `CONT-SECONDARY`; DMR-045 conserva abiertos los cinco cotejos narrativos primarios. No se añadieron relaciones, eventos, claims ni alias.


## Pasada secundaria 2026-10-29 — DMR-057: Aisha, Anya y Chloe

- **Estado global:** pasada secundaria estructurada completada; sin cotejo primario.
- **Fuentes:** DMR-057-SRC-001–005 en el [registro maestro](sources/00-registro-fuentes.md).
- **Expedientes:** DMR-057-CLM-001 Aisha Belka; DMR-057-CLM-002 Anya Fromel; DMR-057-CLM-003 Chloe Rollo.
- **Datos reutilizables:** Aisha — Hell Kaios, Great Podao Zaga y habilidades de desarrollo reportadas; Anya — Remiste Felis y sus límites de área/sonido/recarga; Chloe — Feles Cruz, dos espejismos no ofensivos/defensivos, Abnormal Resistance, Mixing, Escape y cuchillo Violetta.
- **Campos no informados:** no se inventan skills individuales ni costes numéricos de magia cuando las páginas consultadas no los ofrecen.
- **Diferencia que conservar:** la página española de Anya indica que Remiste Felis se cancela si pierde el conocimiento; la página inglesa consultada no incluye esa condición en el fragmento revisado. No resolver sin evidencia nueva.
- **Continuidad:** `CONT-SECONDARY`; las páginas comunitarias no prueban por sí solas la formulación del canon de una novela.
- **Regla de cierre:** no repetir estas mismas páginas para buscar los campos que no enumeran. Reabrir solo con un pasaje primario legible, fuente oficial nueva, actualización material de la wiki o conflicto que afecte a la ficha.


## Verificación de integración — DANMACHI-RESEARCH-057

- **PR:** [#188](https://github.com/jonhararagi/wordwaifu/pull/188), integrada mediante squash.
- **SHA de `main`:** `6c1ffc257e2df45d3a32facb39fe684b71994f60`; head probado: `2eb0912ab7445d543eae6a2c790b4d9483ee63fe`.
- **CI pre-merge:** [Validate WordWaifu #40840588616](https://github.com/jonhararagi/wordwaifu/actions/runs/40840588616) y [DanMachi Lore and Retrieval Integrity #40840588548](https://github.com/jonhararagi/wordwaifu/actions/runs/40840588548), ambos `success`.
- **CI post-merge:** verificado sobre el SHA exacto de integración `6c1ffc257e2df45d3a32facb39fe684b71994f60`: [Lore/Integrity #40841046104](https://github.com/jonhararagi/wordwaifu/actions/runs/40841046104) y [Validate #40841046125](https://github.com/jonhararagi/wordwaifu/actions/runs/40841046125), ambos `success`.
- **Contenido:** Aisha Belka, Anya Fromel y Chloe Rollo; cinco referencias comunitarias; continuidad `CONT-SECONDARY`; diferencia EN/ES de Remiste Felis conservada. Costes y skills ausentes se mantienen como no informados en las páginas revisadas.
- **Reapertura:** solo ante fuente oficial nueva, pasaje narrativo legible, actualización material o contradicción relevante. DMR-045 sigue abierto.



## Verificación de integración — DMR-057 expediente interactivo

- PR [#189](https://github.com/jonhararagi/wordwaifu/pull/189), integrada mediante squash en `main`; merge SHA `f50f8ab4d63fe2d57a0f0fcc057babd489be0424`.
- Incluye notas `CONT-SECONDARY` en `src/character-archive.js` para Aisha Belka, Anya Fromel y Chloe Rollo; pruebas en `tests/test_character_archive.cjs` para recuperación, fuente, campos faltantes y aislamiento frente a CONT-ANIME/CONT-MAIN-LN.
- CI de PR: [Validate #40841939859](https://github.com/jonhararagi/wordwaifu/actions/runs/40841939859) y [Lore/Integrity #40841939917](https://github.com/jonhararagi/wordwaifu/actions/runs/40841939917), ambos success. Browser smoke pasó.
- **CI post-merge:** [Lore/Integrity #40842144964](https://github.com/jonhararagi/wordwaifu/actions/runs/40842144964) y [Validate #40842144977](https://github.com/jonhararagi/wordwaifu/actions/runs/40842144977), ambos `success` sobre el SHA exacto `f50f8ab4d63fe2d57a0f0fcc057babd489be0424`.
- Mantener la diferencia EN/ES de Remiste Felis; no modificar personalidad, relaciones ni claims primarios. DMR-045 sigue abierto.

## DANMACHI-RESEARCH-045 — corte de evidencia primaria (2026-10-29)

- **Estado común:** HOLD_FOR_PRIMARY_SOURCE para Alfia, Zald, Meteria, Erebus y Rudra. La ronda pública no obtuvo un pasaje narrativo primario legible.
- **Rutas y resultados reutilizables:**
  - Yen Press, Astrea Record vol. 3: sinopsis editorial general, no una escena individual ni un diálogo localizable.
  - Google Books, DanMachi vol. 20: ruta existente DMR-045-SRC-018; índice/términos visibles, páginas narrativas no legibles. No inferir presencia/ausencia ni afirmar escenas desde el índice.
  - GA Bunko, DanMachi vol. 20: URL de producto ya registrada bajo DMR-044; respondió HTTP 503 en esta consulta. No duplicar como una fuente DMR-045.
- **Resultado:** no añadir fuentes nuevas, claims, eventos, relaciones, alias, habilidades/costes no informados ni cambios de personalidad. Se mantienen separadas CONT-MAIN-LN, CONT-AR, CONT-GAME y CONT-AU.
- **Reapertura:** solo al disponer de texto licenciado realmente legible o de una fuente oficial nueva que resuelva un campo concreto. Reutilizar las notas existentes y no repetir los mismos lectores.
- **Control CI de contexto:** main estaba en 8348d5610382f45f5fe30073d70f53886d259ea4 al inicio; [Catalog/retrieval/browser smoke #40842395446](https://github.com/jonhararagi/wordwaifu/actions/runs/40842395446) y [validate #40842395510](https://github.com/jonhararagi/wordwaifu/actions/runs/40842395510) finalizaron en success.

## Pasada secundaria 2026-10-29 — DMR-058: Daphne Lauros y Cassandra Ilion

- **Corrección documental:** el dossier se había guardado con un nombre de archivo que mencionaba erróneamente a Miach. El contenido corresponde a Daphne y Cassandra; el nombre correcto es `DANMACHI-RESEARCH-058-daphne-cassandra-capabilities.md`. No se ha investigado ni añadido información de Miach Familia en DMR-058.

- **Estado:** pasada secundaria estructurada; no es cotejo de texto primario.
- **Continuidad:** CONT-SECONDARY; reutiliza los IDs existentes CHAR-DAPHNE-LAUROS y CHAR-CASSANDRA-ILION. No cambia sus perfiles oficiales de adaptación.
- **Fuentes registradas:** DMR-058-SRC-001–005: Daphne EN/ES, Cassandra EN, índices comunitarios de Magia ES y Habilidades ES. Son referencias comunitarias, no fuentes primarias ni necesariamente independientes.
- **Daphne — encontrado:** nivel 3/piso 37 reportados además de snapshot anterior nivel 2; Raumure, Elios Passion, Laurus Wreath, Abnormal Resistance, Escape y Fencer Laureate. Escape queda condicionado a persecución y a Elios Passion.
- **Daphne — no informado/cotejado:** costes numéricos, incrementos exactos, duración/cooldowns universales y localizadores primarios por mecánica.
- **Cassandra — encontrado:** nivel 3/piso 37 reportados además de snapshot anterior nivel 2; Soullight, Cure Ephialtes, Five Dimension Troia, Treatment, Holy Crystal Rod y Rabbit Charm. El efecto de Five Dimension Troia sigue desconocido; el precio de la vara no se etiqueta como coste de uso mágico.
- **Cassandra — no informado/cotejado:** costes de Mind, duración/cooldowns exactos, efecto de Five Dimension Troia y localizadores narrativos primarios.
- **Anti-repetición:** no consultar estas mismas páginas de nuevo para buscar datos no reportados. Reabrir solo ante fuente nueva/materialmente actualizada, contradicción pertinente o pasaje licenciado legible.
- **Integración:** [PR #194](https://github.com/jonhararagi/wordwaifu/pull/194), squash SHA de `main` `190b4313a21569aa056548f8a40f9022b900b028`; incluye informe, registro de fuentes, archivo interactivo, directorio in-app y regresiones.
- **CI pre-merge:** [Validate #40867615144](https://github.com/jonhararagi/wordwaifu/actions/runs/40867615144) y [Lore/Integrity #40867615207](https://github.com/jonhararagi/wordwaifu/actions/runs/40867615207), ambos `success` sobre `ef14f8b914fb424cf816f0d6a27f258fbe230843`.
- **CI post-merge sobre el SHA exacto `190b4313a21569aa056548f8a40f9022b900b028`:** [Validate #40867850127](https://github.com/jonhararagi/wordwaifu/actions/runs/40867850127) y [Lore/Integrity #40867850048](https://github.com/jonhararagi/wordwaifu/actions/runs/40867850048), ambos `success`.
- **Límite:** no se reescriben personalidades ni se crean claims canónicos, sucesos, relaciones, aliases o IDs duplicados. DMR-045 permanece abierto.

## DMR-045 — ruta dBook para Astrea Record 3 (2026-10-29)

- **Ruta nueva:** ficha de dBook/NTT DOCOMO para la edición japonesa de Astrea Record 3, con acción 試し読み.
- **Resultado reutilizable:** la acción lleva al lanzador de la aplicación dBook; la extracción pública devolvió cero líneas y no expuso una página narrativa. El estado del lector dentro de la aplicación queda desconocido.
- **Estado:** DMR-045-SRC-056 `metadata_checked_only`; no aporta claims. No volver a consultar los metadatos ni interpretar el lanzador como un fallo general.
- **Cierre por personaje:** Alfia, Zald, Meteria, Erebus y Rudra siguen `HOLD_FOR_PRIMARY_SOURCE`. No se cambian personalidades ni se infiere al padre de Bell o responsabilidad individual de Rudra desde los actos de su Familia.
- **Reabrir solo si:** una sesión autorizada muestra texto narrativo legible con localizador reproducible o aparece evidencia oficial nueva que resuelva una pregunta concreta.

## DMR-045 — integración verificada de la ruta dBook (PR #196, 2026-10-29)

- **Integración:** [PR #196](https://github.com/jonhararagi/wordwaifu/pull/196), merge SHA `7b2da61c4b3353cf9eb1998f70f6cd4b6cbf0d91`.
- **CI post-merge:** [Validate #40898517407](https://github.com/jonhararagi/wordwaifu/actions/runs/40898517407) y [Lore/Integrity #40898517371](https://github.com/jonhararagi/wordwaifu/actions/runs/40898517371), ambos success sobre el SHA indicado. Validate necesitó un segundo intento por un timeout transitorio al cargar imágenes de referencia oficiales.
- **Bitácora anti-repetición:** no repetir metadatos ni lanzar de nuevo el visor dBook sin cambiar la condición de acceso. Reabrir solo cuando una sesión normal autorizada exponga páginas narrativas con localizador reproducible o una fuente oficial nueva resuelva un punto.
- **Estado por personaje:** Alfia, Zald, Meteria, Erebus y Rudra permanecen `HOLD_FOR_PRIMARY_SOURCE`. Sin cambios de personalidad, claims o relaciones.

## DMR-045 — revalidación de SRC-041 sin contenido narrativo (2026-10-29)

- **Ruta existente:** muestra oficial SBCr/BinB para Astrea Record 3; reutilizar el ID existente, sin duplicarlo.
- **Observación:** la ficha del producto ofrece 立ち読み（無料）; el visor muestra «お使いのブラウザは新ビューワに対応しておりません。». La extracción directa no expuso páginas y la sesión interactiva no pudo iniciar por `insufficient_credits`.
- **Estado:** `DMR-045-SRC-041` permanece `metadata_checked_only`; no aporta claims ni eventos. No se cambian relaciones o personalidades. El aviso no demuestra que el lector falle en todos los navegadores.
- **Anti-repetición:** no repetir esta ruta hasta que se disponga de una sesión normal autorizada y compatible que muestre páginas narrativas con localizador reproducible. Los cinco expedientes siguen `HOLD_FOR_PRIMARY_SOURCE`.



## Pasada secundaria 2026-10-29 — DMR-059: Finn, Riveria y Gareth

- **Estado:** `SECONDARY_PASS_COMPLETE` para las páginas consultadas; contraste EN/ES parcial, sin cotejo narrativo primario.
- **IDs reutilizados:** `CHAR-FINN-DEIMNE`, `CHAR-RIVERIA-LJOS-ALF`, `CHAR-GARETH-LANDROCK`.
- **Fuentes:** DMR-059-SRC-001–005. Finn EN/ES, Riveria EN, Gareth EN y tabla comunitaria Habilidades ES; las páginas relacionadas no son fuentes independientes.
- **Finn:** Hell Finegas refuerza capacidades y perjudica el juicio por el impulso de combate; Tir na Nog se reporta con uso una vez cada 24 horas; se describen cinco skills. **Conflicto EN/ES:** piso alcanzado 61 en inglés y 59 en español; conservar ambas atribuciones sin fechar los snapshots.
- **Riveria:** Fairy Anthem y Alf Regina; nueve magias de falna en tres grupos. Flare Burn figura aparte como magia congénita sin falna; no es una décima magia del sistema de nueve.
- **Gareth:** Dvergr Enhance, Ardigalea y Earth Raid; esta última se reporta condicionada al contacto con el suelo.
- **No informado/cotejado:** costes numéricos de Mind, duración/cooldowns universales, incrementos exactos y localizadores primarios por mecánica.
- **Anti-repetición:** no volver a recorrer estas mismas páginas para completar campos ausentes. Reabrir con texto licenciado legible, actualización material o contradicción nueva.
- **Continuidad:** `CONT-SECONDARY` únicamente. No reescribir personalidad ni importar datos automáticamente a `CONT-MAIN-LN` o a perfiles `CONT-ANIME`/`CONT-SO`.
- **DMR-045:** permanece abierto con sus cinco cotejos primarios pendientes.


## Verificación de integración — DMR-059 (PR #204, 2026-10-29)

- **Integración:** [PR #204](https://github.com/jonhararagi/wordwaifu/pull/204), fusionada por squash; SHA exacto de `main`: `6c62170dee51ec7a57b87dff4e0e0d189dadc2bc`.
- **CI pre-merge sobre `54717ffae9f3e7cc00357da06eef5b8da5d67800`:** [Validate #40952467958](https://github.com/jonhararagi/wordwaifu/actions/runs/40952467958) y [Lore/Integrity #40952468323](https://github.com/jonhararagi/wordwaifu/actions/runs/40952468323), ambos `success`.
- **CI post-merge sobre el SHA exacto:** [Validate #40952682496](https://github.com/jonhararagi/wordwaifu/actions/runs/40952682496) y [Lore/Integrity #40952682505](https://github.com/jonhararagi/wordwaifu/actions/runs/40952682505), ambos `success`.
- **Resultado:** tres identidades existentes enriquecidas con notas interactivas `CONT-SECONDARY`; cinco fuentes registradas; tests de recuperación, conflicto EN/ES y aislamiento de continuidad aprobados.
- **Límite:** no se validaron narrativamente las wikis; costes y localizadores ausentes siguen pendientes. DMR-045 continúa abierto.


## DMR-060 / DMR-061 — primera pasada narrativa de volúmenes 1 y 2 (2026-10-29)

- **Material:** Volumen 1 y Volumen 2 PDF aportados por el usuario; novela ligera original oficial, traducciones privadas no cotejadas.
- **Lectura secuencial:** V1 PDF pp. 1–214 y V2 PDF pp. 1–243 revisados sustancialmente en bloques. Algunas páginas no devolvieron texto extraíble; no se declara cotejo de cada línea.
- **V1:** encuentro Bell–Hestia y Falna, entrega de Daga de Hestia, Festival, Encanto de Freya y fuga de un Silverback, respuesta de Ganesha/Gremio, persecución, actualización de Bell, derrota del Silverback y explicación del préstamo/arma. IDs enumerados en DMR-061.
- **V2:** rumor de Ais una semana después de Udaeus; Bell agota pociones tres días antes de Naaza; compra de poción; hostigamiento a Lili; Lili observa Firebolt el día previo al piso 10; traición a Lili, rescate/reconciliación y reencuentro dos días después. IDs enumerados en DMR-060.
- **Corrección de atribución:** prueba de Firebolt y vuelta de Ais del piso 37 no corresponden a V1 pp. 153–158; esa atribución previa se retira. La lectura directa de V1 pp. 141–160 muestra la cita Bell–Hestia y comienzo del Festival.
- **Visual:** V1 pp. 208–209 y V2 pp. 244–245 incorporan fichas y datos no presentes en la narración continua. La inspección visual completa permanece pendiente.
- **Bitácora de personaje:** no se añade signo + ni se declara pasada individual completa de 5–10 min para Bell, Hestia, Lili, Ais, Freya o Eina; esta tanda es una extracción por volumen, no una revisión individual cronometrada.
- **Próximo paso:** completar páginas iniciales V1 con localizadores, inspección visual página a página, cotejo de perfiles/objetos/estadísticas y pruebas de cronología interactiva antes de integrar a main.

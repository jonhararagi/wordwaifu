# DANMACHI-RESEARCH-058 · Capacidades secundarias de Daphne Lauros y Cassandra Ilion

- **Fecha de consulta:** 2026-10-29.
- **Estado:** pasada secundaria estructurada e integrada en `main` mediante PR [#194](https://github.com/jonhararagi/wordwaifu/pull/194); CI pre-merge y post-merge aprobó ambos workflows. Sigue siendo evidencia secundaria, no cotejo narrativo primario.
- **Continuidad:** `CONT-SECONDARY`.
- **Expedientes reutilizados:** `CHAR-DAPHNE-LAUROS` (`characters/daphnelauros.md`) y `CHAR-CASSANDRA-ILION` (`characters/cassandrailion.md`). No se crean identidades ni se cambian IDs.
- **Objetivo:** hacer recuperables las capacidades funcionales que las referencias comunitarias describen, registrar qué campos no informan y probar que esos datos no se filtren a continuidades oficiales.
- **Anti-repetición:** no recorrer estas mismas páginas otra vez para buscar datos que no ofrecen. Reabrir solo ante actualización material, contradicción pertinente o pasaje narrativo licenciado legible.
- **Integración verificada:** squash SHA `190b4313a21569aa056548f8a40f9022b900b028`. CI pre-merge: [Validate #40867615144](https://github.com/jonhararagi/wordwaifu/actions/runs/40867615144) y [Lore/Integrity #40867615207](https://github.com/jonhararagi/wordwaifu/actions/runs/40867615207), ambos `success`. CI post-merge sobre el SHA exacto: [Validate #40867850127](https://github.com/jonhararagi/wordwaifu/actions/runs/40867850127) y [Lore/Integrity #40867850048](https://github.com/jonhararagi/wordwaifu/actions/runs/40867850048), ambos `success`.

## Fuentes consultadas

| ID | Fuente | Idioma | Alcance |
|---|---|---|---|
| DMR-058-SRC-001 | [Daphne Lauros — DanMachi Wiki](https://danmachi.fandom.com/wiki/Daphne_Lauros) | Inglés | Estado/nivel, magia, skills, desarrollo y equipo. |
| DMR-058-SRC-002 | [Daphne Lauros — DanMachi Wiki ES](https://danmachi.fandom.com/es/wiki/Daphne_Lauros) | Español | Contraste de magia, skills, Escape y equipo. |
| DMR-058-SRC-003 | [Cassandra Ilion — DanMachi Wiki](https://danmachi.fandom.com/wiki/Cassandra_Ilion) | Inglés | Estado/nivel, magias, skill, desarrollo y equipo. |
| DMR-058-SRC-004 | [Magia — DanMachi Wiki ES](https://danmachi.fandom.com/es/wiki/Magia) | Español | Entradas de Raumure, Soullight y Cure Ephialtes. |
| DMR-058-SRC-005 | [Habilidades — DanMachi Wiki ES](https://danmachi.fandom.com/es/wiki/Habilidades) | Español | Entrada de Five Dimension Troia. |

Son fuentes comunitarias de Fandom; las páginas EN/ES no se tratan como publicaciones independientes ni sustituyen novelas licenciadas.

## DMR-058-OBS-001 · Daphne Lauros

- **Estado:** `secondary_checked`; no es cotejo de texto primario.
- **Nivel/estado:** la wiki inglesa informa nivel 3 y llegada al piso 37, además de un snapshot anterior de nivel 2. No se mezclan esos periodos ni se sobrescribe el perfil `CONT-ANIME`.
- **Magia — Raumure:** descrita como magia de protección que aumenta resistencia y agilidad; su eficacia depende de la estadística de magia.
- **Skill — Elios Passion:** aumenta ligeramente la agilidad. Solo cuando Daphne está siendo perseguida le concede temporalmente la habilidad de desarrollo Escape.
- **Skill — Laurus Wreath:** aumenta mucho la resistencia cuando está exhausta o muriendo. Permite elegir dónde activarla; vuelve áspera la piel como la corteza de un árbol y el uso continuado puede dejarla temporalmente con textura de madera.
- **Habilidades de desarrollo:** Abnormal Resistance y Escape. Escape no se registra como permanente: la fuente lo condiciona a la persecución y a Elios Passion.
- **Equipo:** Fencer Laureate, espada corta reportada de 60 cm que ayuda a lanzar magia.
- **No informado/cotejado:** costes numéricos, incrementos exactos, duración/cooldown universal y localizadores narrativos primarios por mecánica.

## DMR-058-OBS-002 · Cassandra Ilion

- **Estado:** `secondary_checked`; no es cotejo de texto primario.
- **Nivel/estado:** la wiki inglesa informa nivel 3 y llegada al piso 37, y conserva un snapshot anterior de nivel 2. Se mantienen los periodos separados.
- **Magia — Soullight:** curación de área que sana heridas y restaura resistencia. La extensión del área aumenta según la cantidad de Mind usada; la fuente dice que su poder supera el de pociones ordinarias.
- **Magia — Cure Ephialtes:** descrita como cura de alteraciones de estado y puede retirar maldiciones. La página dice que Cassandra cree que solo cura veneno; esta creencia se conserva como dato secundario, no como regla cotejada en novela.
- **Skill — Five Dimension Troia:** descrita como misteriosa e indescifrable; el nombre no aparecería en jeroglíficos y la denominación actual se atribuye a la interpretación de Miach. **El efecto concreto no está informado** y no se inventa.
- **Habilidad de desarrollo:** Treatment.
- **Equipo:** Holy Crystal Rod, descrita como capaz de aumentar la estadística de magia de magos/sanadores; la ficha comunitaria le asigna un precio de 1.200.000 valis. Es precio de compra, no coste de uso mágico. También figura Rabbit Charm.
- **No informado/cotejado:** coste de Mind, duración/cooldowns precisos, efecto descifrado de Five Dimension Troia y localizadores narrativos primarios.

## Contrato de continuidad y límites

- Las notas nuevas se publican únicamente bajo `CONT-SECONDARY`; no sobrescriben `CONT-ANIME` ni se trasladan a `CONT-MAIN-LN`, `CONT-SO-LN` u otras continuidades.
- No se añaden relaciones, sucesos, aliases, identidades ni claims canónicos al grafo.
- No se reescriben personalidades. Esta pasada se limita a capacidades, equipo, condiciones de uso y vacíos de evidencia.
- «No informado por estas fuentes» no significa que un poder o coste no exista en el canon.
- Las pruebas técnicas validan recuperación e aislamiento de la interfaz, no la exactitud primaria de cada afirmación secundaria.

## Resultado de esta pasada

- Dos expedientes existentes enriquecidos sin duplicar IDs: Daphne Lauros y Cassandra Ilion.
- Cinco referencias comunitarias registradas con idioma, URL y alcance.
- Se exponen límites condicionales y campos no informados; no se completan por intuición.
- DMR-045 permanece abierto para sus cinco cotejos primarios; esta cohorte no autoriza una expansión general de Orario.

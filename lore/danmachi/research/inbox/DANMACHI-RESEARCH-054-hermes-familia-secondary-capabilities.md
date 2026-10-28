# DANMACHI-RESEARCH-054 · Hermes Familia: capacidades de Asfi y Lulune

- **Fecha:** 2026-10-28.
- **Estado:** integrado en `main` y validado; ver SHA y CI debajo.
- **Cohorte:** Asfi Al Andromeda y Lulune Louie.
- **Objetivo acotado:** ampliar capacidades, magia, skills, equipo y límites descritos por las páginas comunitarias, sin reescribir personalidad ni repetir la pasada histórica.
- **Continuidad de exhibición:** `CONT-SECONDARY`. Las fichas existentes mantienen su alcance original `CONT-ANIME`; los datos de wiki no se elevan a canon cotejado.
- **Regla anti-repetición:** las URL y los campos revisados quedan registrados; no volver a recorrer estas páginas para buscar campos que no aparecen en el contenido consultado. Reabrir solo ante una fuente nueva, actualización material o pasaje primario legible.

## CHAR-ASFI-AL-ANDROMEDA · Asfi Al Andromeda

- **Nivel reportado por la wiki:** nivel 4. Es un dato secundario, no una comprobación independiente de la novela en esta pasada.
- **Magia reportada:** `Kalov Argol`. La página comunitaria describe un canto largo y un efecto que considera débil; la caracteriza como mala opción contra enemigos que se regeneran. No se aporta un coste numérico verificable.
- **Skills enumeradas:** `Trismegistus`, `Argeiphontes`, `Petasos`, `Special General` y `Andromedas`.
- **Efectos resumidos por la fuente:** Trismegistus mejora efectos de objetos y manifiesta temporalmente capacidades relacionadas con la creación; Argeiphontes aumenta la resistencia al sueño a cambio de consumo de Mind; Petasos mejora capacidades de vuelo; Special General manifiesta temporalmente Hunter, Abnormal Resistance y Magic Defense; Andromedas reporta efectos particulares cerca del océano y limitaciones durante combate naval.
- **Habilidades de desarrollo enumeradas:** Mystery, Mixing, Metalworking, Alchemy, Oathcraft, Magic Resistance, Hunter y Abnormal Resistance. Algunas aparecen ligadas a skills y no deben contarse automáticamente como capacidades permanentes en cualquier situación.
- **Equipo/armas nombrados:** Canoval Dagger, Burst Oil, Talaria, White Cloud Chlamys, Cithara, Hades Head y Crizea. La wiki atribuye a Talaria vuelo, a White Cloud Chlamys resistencia mágica/contundente y menor resistencia al viento durante el vuelo, a Hades Head invisibilidad, a Cithara atraer ciertos monstruos y a Crizea provocar frenesí entre monstruos.
- **No informado en esta pasada:** costes numéricos completos, duración/cooldowns generales y localizadores de página narrativa que permitan cotejar una por una las mecánicas. No completar esos campos por inferencia.

## CHAR-LULUNE-LOUIE · Lulune Louie

- **Nivel reportado por la wiki:** nivel 3, bajo `CONT-SECONDARY`; la ficha oficial de adaptación registrada en su expediente no especifica un nivel, y esta diferencia de alcance debe conservarse.
- **Capacidades descritas:** combate acrobático versátil, manejo hábil de cuchillo, coordinación con su Familia, tácticas de guerrilla/disrupción, sentidos agudizados propios de una chienthrope que se refuerzan con la falna, y cartografía para documentar ruinas fuera de Orario.
- **Magia, skills y equipo:** en el contenido recuperado de su perfil comunitario no aparece una lista de magia con nombre, skills con nombre, habilidades de desarrollo ni un arma identificada por nombre propio. El texto sí menciona el cuchillo en términos generales.
- **No informado en esta fuente:** estadísticas detalladas, coste de capacidades, nombres formales de técnicas y localizadores narrativos concretos.
- **Límite:** no convertir la falta de una lista en esa página en la afirmación de que Lulune carece de magia o skills en el canon; registrar exactamente que no están informadas en el contenido consultado.

## Fuentes consultadas

| ID | Fuente | Alcance |
|---|---|---|
| DMR-054-SRC-001 | [DanMachi Wiki — Asfi Al Andromeda](https://danmachi.fandom.com/wiki/Asfi_Al_Andromeda) | Nivel, skills, magia, habilidades de desarrollo, equipo y limitaciones reportados comunitariamente. |
| DMR-054-SRC-002 | [DanMachi Wiki — Lulune Louie](https://danmachi.fandom.com/wiki/Lulune_Louie) | Nivel, combate, sentidos y cartografía; los campos de magia/skills nombradas no aparecen en el contenido recuperado. |

Las páginas consultadas son fuentes secundarias comunitarias. Los resultados públicos de búsqueda exponen esas secciones, pero el acceso directo a las páginas no permitió una comprobación completa en esta pasada; no se abrió el texto primario para cotejar cada habilidad ni se registraron capítulos/páginas como leídos.

## Cambios implementados en esta tanda

- Añadir una capa secundaria enlazada a los expedientes existentes de Asfi y Lulune.
- Exponer dos notas separadas bajo `CONT-SECONDARY` en el archivo interactivo.
- Registrar fuentes, límites y condiciones de reapertura en la bitácora.
- Añadir una regresión automática para las dos identidades, sus referencias y los campos que se deben mantener como no informados.
- No crear claims, eventos, relaciones ni aliases; no cambiar personalidad, historia ni continuidad principal.


## Integración y validación

- **Integración:** [PR #179](https://github.com/jonhararagi/wordwaifu/pull/179), squash merge; SHA exacto de `main`: `cf1aef26f0f2f1d3b4ffe4513c0ff80f65764ef6`.
- **CI de PR sobre `809ad6ccd67e0e90c01d7c842438b1f296ae2ad5`:** [Validate WordWaifu #40727748042](https://github.com/jonhararagi/wordwaifu/actions/runs/40727748042) y [DanMachi Lore and Retrieval Integrity #40727747907](https://github.com/jonhararagi/wordwaifu/actions/runs/40727747907), ambos `success`.
- **CI post-merge sobre el SHA exacto de `main`:** [Validate WordWaifu #40728030060](https://github.com/jonhararagi/wordwaifu/actions/runs/40728030060) y [DanMachi Lore and Retrieval Integrity #40728030297](https://github.com/jonhararagi/wordwaifu/actions/runs/40728030297), ambos `success`.

- La primera ejecución de la regresión falló en la afirmación textual para Lulune; se ajustó la nota para expresar explícitamente el campo no informado, y ambas verificaciones volvieron a ejecutarse con éxito sobre el head final del PR. No se atribuye un fallo al catálogo ni a la aplicación por ese primer error de aserción.

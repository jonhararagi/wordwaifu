# DANMACHI-RESEARCH-051 · Contraste físico entre Pantheon, la sede de la Guild y Babel

- Fecha de consulta: 2026-10-24 (hora local de trabajo).
- Estado: `source_checked_partial`; conciliación entre un extracto primario disponible mediante indexación y fuentes oficiales/secundarias. La página del PDF de GA Bunko sigue sin abrirse visualmente.
- Alcance: distinguir institución, edificios y referencias espaciales sin añadir coordenadas ni relaciones físicas no demostradas.
- Continuidades: `CONT-MAIN-LN` para la muestra del volumen 3; `CONT-ANIME` para el glosario oficial; `CONT-UNVERIFIED` para la afirmación comunitaria en conflicto.

## Fuentes reutilizadas

1. **Muestra editorial de la novela principal, volumen 3** — [DMR-048-SRC-001](../../sources/00-registro-fuentes.md#dmr-048-src-001), [trial03.pdf](https://ga.sbcr.jp/sp/danmachi/trial03.pdf). El índice textual muestra el capítulo I 「剣姫異来」 y los marcadores de folio 36–37. La consulta textual recupera una secuencia en la que Pantheon aparece como punto de referencia de una avenida y después se entra en la sede de la Guild, descrita con mármol blanco. El PDF directo devuelve HTTP 503 y no se puede comprobar visualmente la página o el contexto completo.
2. **Glosario oficial de la adaptación** — [DMR-026-SRC-001](../../sources/00-registro-fuentes.md#dmr-026-src-001), [portal oficial del anime](https://danmachi.com/danmachi/special/index.html), entradas de Babel y Guild. Define Babel como el edificio más alto de Orario y una instalación propiedad de la Guild para supervisar y gestionar el Dungeon; describe la Guild como organización de gestión urbana, de aventureros y del Dungeon. No especifica que la sede administrativa principal esté dentro de Babel.
3. **DanMachi Wiki en inglés, Guild** — [DMR-031-SRC-003](../../sources/00-registro-fuentes.md#dmr-031-src-003), [artículo comunitario](https://danmachi.fandom.com/wiki/Guild). La página identifica Pantheon como edificio principal de la Guild y le atribuye dependencias de atención. Se conserva como afirmación secundaria, no como canon verificado de novela.

## Resultado del contraste

### Pantheon y sede de la Guild

El orden de la escena indexada de la muestra del volumen 3 favorece leer Pantheon y la sede blanca de la Guild como dos referencias físicas distintas dentro del recorrido: se pasa por delante de Pantheon y a continuación se entra en la sede. Esta lectura entra en tensión con la afirmación de la wiki comunitaria que identifica Pantheon como el edificio principal de la Guild.

**Estado de la conclusión:** interpretación respaldada por un extracto editorial primario parcial, no verificación visual definitiva. Mantener la discrepancia registrada; no ocultar el dato de la wiki, pero tampoco elevar su relación `headquarters_of` a hecho confirmado de `CONT-MAIN-LN`.

### Babel y sede de la Guild

El glosario oficial de anime atribuye a Babel propiedad y funciones de supervisión/gestión a la Guild. Ese dato permite conservar la arista institucional ya registrada `LOC-BABEL → ORG-GUILD` bajo `CONT-ANIME`; no demuestra que la sede administrativa mencionada en el extracto de novela se encuentre dentro de Babel ni que sea la misma estructura. Tampoco fija una distancia o una relación de adyacencia entre Babel y Pantheon.

Los datos comunitarios de pisos, mapa o sector pueden ayudar a buscar nuevas escenas, pero no son un plano a escala y no deben convertirse en posiciones canónicas.

## Contrato de datos aplicado

- Mantener `ORG-GUILD` como organización, separada de los registros físicos.
- Mantener `LOC-BABEL` con el alcance `CONT-ANIME` y las afirmaciones de `CONT-PROTOTYPE` aisladas en DMR-034.
- Mantener `LOC-PANTHEON` con la mención de novela principal en estado `source_checked_excerpt_only`.
- Conservar la arista secundaria `REL-PANTHEON-GUILD-HEADQUARTERS-SECONDARY` como representación de lo que afirma la wiki, añadiendo una nota explícita de conflicto; no crear una nueva arista física entre Pantheon, Babel y la sede.
- No asignar coordenadas, sector, distancia, identidad física o edificio compartido sin nueva evidencia.

## Pendientes concretos

- [ ] Abrir visualmente `trial03.pdf` y cotejar la página, la edición y el contexto continuo del pasaje.
- [ ] Localizar otro pasaje primario o una referencia oficial que establezca si la sede de la Guild está dentro de Babel, separada de ella o relacionada de otra forma.
- [ ] Rastrear el origen de la afirmación comunitaria sobre Pantheon y sus servicios hasta un localizador primario reproducible.
- [ ] Seguir completando el inventario de lugares de Orario; este contraste no cierra el mapa urbano ni las primeras menciones pendientes.

**Veredicto:** avance real pero parcial. La evidencia disponible favorece distinguir Pantheon de la sede de la Guild; Babel sigue siendo una instalación de la Guild en `CONT-ANIME`, pero su relación física exacta con ambas ubicaciones permanece sin resolver.

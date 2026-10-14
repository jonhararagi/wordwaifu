# Atlas de entidades, reliquias y cartas míticas

**Estado:** primera versión estructurada para integrar en WordWaifu. No es un catálogo académico definitivo.  
**Datos canónicos del proyecto:** `data/catalog/mythic-arsenal.json`  
**Propósito:** construir una base navegable para historias de cartas, invocación, avatares, reencarnaciones y armas míticas.

## Qué contiene esta primera entrega

- **Tradiciones latinoamericanas:** relatos mapuche, tehuelches, guaraníes, brasileños, andinos, mexicas/nahuas y mayas.
- **Armas y reliquias de otras tradiciones:** Excalibur, Gungnir, Mjölnir, Kusanagi, vajra, trishula y Arca de la Alianza.
- **Arma histórica diferenciada de una reliquia mágica:** macuahuitl.
- **Reglas originales del sistema:** contrato de invocación, avatar, resonancia/evolución, familias de cartas y agencia de la entidad.
- **Mazos iniciales:** Ecos del territorio, Reliquias y armas legendarias y Núcleo del sistema.

## Cómo se debe navegar

Cada registro tiene un ID estable, tipo, tradición, región, estado, resumen, etiquetas y relaciones por ID. La navegación deseada es:

1. Buscar «Ryu» o cualquier personaje en el buscador general y abrir su expediente.
2. Abrir su panel de relaciones para seguir amistades, rivalidades, familias y acontecimientos.
3. Desde una relación, abrir la otra entidad y continuar por sus relaciones.
4. En el caso de este catálogo, buscar una reliquia o entidad y saltar a sus pactos, cartas, variantes o tradición relacionada.
5. Volver al registro anterior o al índice sin crear fichas duplicadas.

La interfaz del módulo ya permite buscar, filtrar por tipo/tradición/estado, abrir una ficha, seguir relaciones salientes y entrantes, volver a la ficha anterior o regresar al índice. Los datos y la interfaz siguen separados para poder ampliar el catálogo sin duplicar código.

## Modelo para una carta invocable

Cada carta nueva debería convertirse en una entidad independiente, no en un párrafo pegado a la ficha del protagonista:

- **Identidad:** nombre, alias, tradición, región y clase de entidad.
- **Procedencia:** fuente concreta, variante regional, nivel de confianza y notas.
- **Forma de uso:** invocación externa, arma vinculada, avatar parcial o manifestación completa.
- **Condición de activación:** palabra, gesto, lugar, objeto, juramento o requisito narrativo.
- **Coste:** energía, memoria, tiempo, deuda, lesión, obligación o riesgo de pérdida de control.
- **Límites y contramedidas:** qué no puede hacer, qué la interrumpe y qué la vuelve vulnerable.
- **Pacto y agencia:** si acepta el llamado, qué exige, qué prohíbe y qué ocurre si el portador incumple.
- **Evolución:** etapa, condición para desbloquearla, cambio funcional, señal visible y si es reversible.
- **Continuidad:** capítulo/evento de adquisición, cambios posteriores y quién conoce el secreto.

## Regla de veracidad y respeto cultural

Los resúmenes son puntos de partida, no sustituyen investigación específica. Las tradiciones orales tienen variantes y pueden ser tradiciones vivas. No se debe presentar una versión regional como la única correcta ni convertir automáticamente a una deidad o figura sagrada en una unidad de combate obediente.

En particular, los poderes de combate propuestos en el campo `creativeHook` son **ideas de adaptación**, no afirmaciones sobre las creencias originales. El catálogo diferencia:

- `mythology_reference`: figura u objeto de tradición mítica o religiosa.
- `historical_reference`: objeto histórico, como el macuahuitl.
- `creative_adaptation`: reinterpretación explícitamente creada para la ficción.
- `original`: regla o entidad inventada para el sistema de WordWaifu.

## Fuentes y siguientes criterios de calidad

El JSON incluye puntos de partida institucionales y bibliográficos. Antes de tratar cualquier entrada como investigada a fondo, hay que adjuntar una fuente específica por afirmación, anotar la variante regional y separar lo que dice la fuente de la mecánica inventada.

Criterios de aceptación del catálogo:

- [x] IDs estables y tipos separados para personajes míticos, pares, armas históricas, reliquias y reglas originales.
- [x] Etiquetas de búsqueda y mazos iniciales.
- [x] Relaciones navegables por ID.
- [x] Diferenciación entre tradición, objeto histórico y mecánica inventada.
- [x] Validador automatizado de IDs y referencias del catálogo.
- [x] Interfaz visual con búsqueda, filtros por tipo/tradición/estado y ficha de detalle.\n- [x] Navegación por relaciones salientes y entrantes con retorno al registro anterior o al índice.
- [ ] Fuentes específicas y cotejo bibliográfico entrada por entrada.
- [ ] Integración de estas entidades con las fichas y relaciones generales de WordWaifu sin duplicar registros.

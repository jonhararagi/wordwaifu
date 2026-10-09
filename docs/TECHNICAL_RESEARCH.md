# Investigación técnica comparativa

Registro permanente de aprendizajes obtenidos al estudiar aplicaciones y repositorios similares. Las referencias sirven para comprender patrones y riesgos, no para copiar código, contenido ni diseños.

## 2026-10-09 · Entidades de organización en herramientas de worldbuilding

### Fuentes consultadas
- [Loreweaver, `types/world.ts`](https://github.com/LightWraith8268/loreweaver/blob/cf6120883527e9b2528dffafcfcbe18c10267cf5): declara las facciones como entidades separadas del mundo y del personaje, con atributos como tipo, ideología, objetivos, líderes y miembros; los personajes conservan listas de referencias a facciones.
- [Saga Architect, `docs/WORLDBUILDING_MODEL.md`](https://github.com/Bboy9090/SagaArchitect/blob/4fa6fd16e86991a0410b595e3668e6fedc67d150/docs/WORLDBUILDING_MODEL.md): explica un modelo de varias entidades con estados de canon y referencias entre personajes, facciones, lugares y acontecimientos. Algunos ejemplos representan líderes y aliados con campos de texto/nombres, que requieren cuidado si esos nombres cambian.

### Hallazgos aplicables
1. Una organización narrativa debe ser una entidad de primera clase, no solo un campo de texto en una ficha de personaje.
2. Líderes, miembros y sede representan relaciones, así que conviene guardar IDs estables y resolver los nombres al presentar la ficha.
3. Los formularios deben seleccionar registros que ya existen; crear una organización no debe duplicar personajes o lugares.
4. El borrado no debe eliminar en cascada personajes o lugares vinculados. La confirmación debe comunicar efectos y conservar los registros que no se están borrando.
5. El modelo importado necesita defaults hacia atrás y comprobaciones de integridad antes de sustituir el proyecto activo.

### Decisiones propias aplicadas a WordWaifu
- Se agregó `organizations[]` al esquema opcional, normalizado a `[]` en proyectos anteriores sin cambiar `schemaVersion: 1`.
- Se usaron `leaderCharacterIds[]`, `memberCharacterIds[]` y `baseLocationId`, validados contra personajes/lugares existentes. Cada organización tiene un ID estable incluido en la comprobación global de IDs.
- No se añadió una matriz inversa `character.organizationIds`: evitar mantener sincronizados dos grafos redundantes hasta que una función comprobada lo necesite.
- El CRUD y su integridad se verifican en Chromium CI; la prueba manual en Windows sigue pendiente.

### Qué no se afirma
La lectura de esos proyectos no demuestra que sus soluciones sean mejores en todos los contextos ni que WordWaifu esté terminado. Solo se adaptaron ideas generales de modelado; la implementación y pruebas de WordWaifu son propias.


## 2026-10-09 · Grafo de relaciones de personajes

### Decisiones de arquitectura
- Separamos las relaciones como registros de primera clase con IDs estables; cada relación apunta a dos personajes existentes.
- Los vínculos antiguos guardados como listas de IDs se migran al nuevo grafo solo cuando el proyecto no contiene la colección raíz `relationships[]`. Los enlaces recíprocos no se duplican.
- En transición, el grafo raíz es la fuente de verdad y `characters[].relationships` se reconstruye como proyección recíproca. Esto evita que dos representaciones editables se desincronicen.
- Las relaciones se consideran simétricas en el MVP. La pareja de IDs no ordenada + tipo define duplicidad; tipos diferentes en el mismo par se permiten. Un futuro modelo dirigido necesitará formalizar dirección y tipos asimétricos antes de implementarlos.
- Los endpoints se validan contra IDs existentes; se prohíben auto-relaciones y al borrar un personaje se borran aristas asociadas, no otros personajes.
- Campos temporales, intensidad, secreto y enlaces a eventos permanecen en el modelo futuro, sin simularlos todavía en la interfaz.

### Evidencia
- [Chromium CI #37951860214](https://github.com/jonhararagi/wordwaifu/actions/runs/37951860214): 18 pruebas de esquema y CRUD del navegador, incluidos duplicados, edición, recarga, eliminación y round-trip.


## 2026-10-09 · Índice de búsqueda entre universos

### Principios de implementación
- Clave de resultado compuesta por proyecto, tipo de entidad e ID de entidad. Los IDs locales no son globales por sí solos.
- Consultar IndexedDB en modo de solo lectura mantiene la búsqueda independiente de las operaciones para activar, guardar o borrar universos.
- La búsqueda se realiza sobre los datos canónicos disponibles, no sobre copias editables. Los resultados siempre indican de qué universo provienen.
- Si el almacén principal no se puede leer, el respaldo de `localStorage` puede aportar coincidencias, pero no equivale al índice completo. El sistema debe indicar su limitación.
- El prototipo reconstruye coincidencias desde los registros al consultar. No se ha añadido un índice persistido ni se ha supuesto que los tiempos de búsqueda escalen a miles de proyectos.

### Decisión y gate
WordWaifu ofrece búsqueda en personajes, lugares, acontecimientos, organizaciones, relaciones e historias, con filtro por tipo y texto sobre nombre/campos pertinentes. La siguiente validación debe demostrar en Chromium la identidad compuesta entre dos universos, búsqueda de campos, resultado vacío tras una lectura completa y estado parcial ante fallo de IndexedDB. El código no se marca como terminado antes de que la CI del HEAD vivo quede en PASS.

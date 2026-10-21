# Auditoría técnica y patrones de referencia — 2026-10-21

## Dictamen

WordWaifu tiene una base arquitectónica razonable para su objetivo: aplicación local/offline-first, persistencia por adaptador, IDs estables, normalización de importaciones, relaciones explícitas, snapshots, protección de borrado y pruebas de navegador. No conviene introducir un servidor, base de datos remota, framework de UI o ejecución con GPU sin un caso medido que lo requiera.

La mayor deuda transversal es la **consistencia entre representaciones derivadas**: el catálogo JSON, fichas Markdown, roster para la interfaz, expedientes enriquecidos e índice de estado conservan datos relacionados y pueden desincronizarse. Ya existen pruebas de cobertura de personajes y un validador de catálogo; esta revisión añade la sincronización comprobable de las métricas operativas para que el estado documentado no contradiga el repositorio real.

## Revisión de WordWaifu

| Área | Estado observado | Dictamen |
|---|---|---|
| Dominio y persistencia | `project-schema.js` normaliza proyectos anteriores, comprueba referencias y relaciones; `project-repository.js` usa transacciones IndexedDB, verifica escrituras y protege tombstones de papelera. | Conservar los límites transaccionales; sumar infraestructura solo si hay evidencia de un defecto. |
| Canon DanMachi | `catalog.json` guarda IDs, rutas, documentos y aristas con continuidad, evidencia y claims; `check-catalog.mjs` valida duplicados, rutas, endpoints, claims y enlaces Markdown. | Mantener las verificaciones de procedencia; un perfil oficial de anime no se extrapola automáticamente a novelas o spin-offs. |
| Personajes y UI | Los 63 perfiles de adaptación tienen ahora rutas de catálogo/Markdown y expedientes UI; 79 expedientes existen en total. | La prueba de cobertura comprueba el roster publicado; no debe convertirse en una afirmación de que el reparto completo de la franquicia ya está cubierto. |
| Interfaz/orquestación | `src/app.js` concentra mucho comportamiento mientras los módulos de dominio/persistencia están separados. | Refactorizar por casos de uso y con pruebas de navegador, no dividir el archivo mecánicamente en un solo cambio de gran alcance. |
| Observabilidad del proyecto | El encabezado de `docs/STATUS.md` todavía describía una rama de propuesta como pendiente después de su fusión y repetía dos cifras de relaciones incompatibles. | Aplicar una fuente de métricas ejecutable y un gate CI, dejando el historial antiguo explícitamente debajo de un separador. |

## Referencias de industria examinadas

### 1. novelWriter — datos en archivos pequeños, índice reconstruible y guardado seguro

- Proyecto: [saga-soft/novelWriter](https://github.com/saga-soft/novelWriter).
- Arquitectura de almacenamiento: [How Data is Stored](https://novelwriter.io/docs/technical/storage.html).
- Patrón útil: documentos de texto independientes, metadatos con rutas explícitas, índice que se puede reconstruir y guardado mediante temporal + reemplazo tras una escritura exitosa.
- Aplicación a WordWaifu: conservar Markdown/JSON como artefactos legibles y versionables; validar índices/métricas derivados. No copiar el sistema de archivos de novelWriter ni reemplazar IndexedDB, porque el producto y el formato de proyecto son diferentes.

### 2. MediaWiki — comportamiento especializado por modelo de contenido

- Referencia: [ContentHandler, Wikimedia](https://github.com/wikimedia/mediawiki/blob/master/docs/contenthandler.md).
- Patrón útil: un modelo de contenido define cómo serializar, editar, renderizar y comparar los datos; el resto del sistema llama a una interfaz, en lugar de esparcir supuestos sobre el tipo del contenido.
- Aplicación a WordWaifu: personajes, lugares, eventos, organizaciones y relaciones deben seguir teniendo contratos de dominio explícitos y utilizar el mismo canon. La evolución recomendable es extraer casos de uso de `app.js` hacia módulos con interfaces pequeñas; no implantar toda la arquitectura de MediaWiki en una app offline.

### 3. Wikidata/Wikibase — entidades identificadas y restricciones verificables

- Referencias: [Wikidata data model](https://www.wikidata.org/wiki/Help:Data_model) y [Wikibase knowledge-graphs / schemas](https://github.com/renat-kaufmann/wikibase-knowledge-graphs).
- Patrón útil: entidades identificadas, relaciones con propiedades explícitas y validación de esquemas/constraints para identificar datos incompletos o mal formados.
- Aplicación a WordWaifu: IDs estables, endpoints reales, estados de evidencia y continuidad forman parte del contrato; tests deben verificar significado y procedencia, no solo la sintaxis del JSON.

### 4. Obsidian Dataview y validadores de metadata — metadatos consistentes para navegación

- Referencias: [Dataview metadata](https://github.com/blacksmithgu/obsidian-dataview/blob/master/docs/docs/annotation/add-metadata.md), [Obsidian Metadata Validator](https://github.com/flowing-abyss/obsidian-metadata-validator) y [Forge](https://github.com/joshua-walls/forge).
- Patrón útil: frontmatter y tipos controlados permiten filtrar y conectar documentos sin depender de búsquedas ambiguas por nombre; validadores detectan cambios de esquema y propiedades mal tipadas.
- Aplicación a WordWaifu: la cabecera YAML de cada ficha debe seguir coincidiendo con el ID del catálogo. El validador existente hace esto; la nueva verificación amplía la misma disciplina al encabezado métrico del estado operativo.

### 5. Martin Fowler — evolución compatible de contratos

- Referencia: [Parallel Change](https://martinfowler.com/bliki/ParallelChange.html).
- Patrón útil: expandir contrato, migrar consumidores y después retirar la ruta antigua, en vez de cambiar la representación canónica y todos los consumidores de una sola vez.
- Aplicación a WordWaifu: mantener importaciones de esquema antiguo y las proyecciones de relaciones que los proyectos existentes necesitan hasta que una migración esté validada en ambos lados.

## Cambios aplicados en esta revisión

1. Se incorpora `scripts/sync-danmachi-status.mjs`: deriva las métricas del catálogo/roster/expedientes, comprueba IDs y endpoints, verifica para cada entrada del roster el registro activo, la ruta Markdown, el ID del frontmatter y el expediente UI.
2. El modo `--write` solo sustituye el bloque marcado de métricas de `docs/STATUS.md`; el modo `--check` no escribe nada y falla si el bloque deriva.
3. Los workflows ejecutan el chequeo, por lo que un cambio de datos sin actualizar el bloque operativo no puede pasar silenciosamente.
4. El estado operativo se limpia y se separa del historial antiguo; las métricas se mantienen automáticas y el porcentaje global de canon permanece sin certificar.
5. Las pruebas existentes de DanMachi mantienen el control de continuidad/fuentes y los cuatro hermanos Gulliver como cuatro identidades individuales más su nodo de grupo.

## Deuda que queda explícitamente abierta

- Los resúmenes biográficos escena por escena requieren localizadores de novelas/capítulos/páginas; no se completa evidencia primaria inventando una referencia.
- Los 63 del roster describen el alcance cubierto por los perfiles de adaptación actuales, no un censo exhaustivo de personajes de novela, juegos, familias históricas o cada spin-off.
- `src/official-character-roster.js`, `src/character-dossiers.js` y las fichas Markdown todavía mantienen representaciones paralelas. La siguiente refactorización segura sería definir un contrato de entidad compartido/generar solo los campos mecánicos a partir de metadatos canónicos y conservar el texto biográfico enriquecido como contenido autoral separado.
- `src/app.js` sigue siendo un punto de alto acoplamiento. Extraer módulos gradualmente cuando cada cambio pueda verificarse mediante pruebas de dominio y smoke de Chromium.
- Los porcentajes globales necesitan una matriz de cobertura con denominador definido por arco, continuidad, rol, eventos, relaciones y localizadores; número de archivos, aristas o checks no sirve como denominador de canon.

## Criterio de aceptación

- `node scripts/sync-danmachi-status.mjs --check` pasa solo si las métricas publicadas coinciden con las fuentes reales.
- Cada identidad del roster dispone de entrada en catálogo, ID de frontmatter coincidente y expediente UI sustancial con fuentes.
- Las relaciones conservan IDs únicos y extremos activos; la evidencia secundaria o pendiente mantiene su estado visible.
- CI valida la misma revisión exacta que después se integra en `main`.

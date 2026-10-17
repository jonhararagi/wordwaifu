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


## 2026-10-09 · Apertura contextual desde una búsqueda multiverso

### Invariantes comprobados
- Un resultado buscado no es una referencia global por nombre: la identidad exige `projectId + entityType + entityId`.
- La apertura es una transición de estado. Primero se persiste/verifica el universo actual y después se valida el proyecto/ficha destino antes de actualizar el activo.
- Un hit puede quedar obsoleto entre la búsqueda y el clic. La apertura debe volver a consultar por ID en el almacén primario y rechazar destinos borrados o registros con IDs diferentes.
- El proyecto en respaldo local es evidencia de recuperación, no prueba de que exista una ficha verificada en IndexedDB. No debe ofrecerse como destino garantizado.
- La navegación funcional también necesita validar el foco de teclado; tras cerrar el diálogo debe enfocar la ficha exacta y no dejar el foco en un control oculto.

### Evidencia y decisión aplicada
- [CI #38000904219](https://github.com/jonhararagi/wordwaifu/actions/runs/38000904219) verificó en Chromium destinos inexistentes, IDs de personajes repetidos en diferentes universos, rollback al fallar la persistencia y foco exacto tras abrir resultados.
- WordWaifu usa la clave compuesta en la ruta de apertura, conserva el proyecto previo ante fallos y no mezcla los datos de otros universos.
- La prueba añadida verifica que `document.activeElement` sea el encabezado `h2` esperado dentro de `#details-panel`, tanto para el universo activo como para otro universo.
- La lectura de los datos no sustituye la prueba manual visual en Windows 11, que sigue en `NOT_RUN`.


## 2026-10-09 · Snapshots versionados y restauración local

### Decisión de arquitectura
- Los snapshots están separados de los registros de proyectos en IndexedDB. Cada copia apunta a `projectId`, conserva su ID propio y se crea con `add`, para no sobrescribir una copia anterior con el mismo identificador.
- La actualización de IndexedDB v1→v2 añade el nuevo almacén sin recrear ni limpiar los almacenes de proyectos o metadatos.
- La restauración vuelve a comprobar el proyecto activo y la versión del contenido dentro de una transacción; valida el snapshot, crea `before-restore`, verifica después de escribir y también verifica el respaldo local.
- El gestor de proyectos permite examinar y borrar snapshots individuales. El import válido se protege con `before-import` antes de reemplazar el proyecto.

### Evidencia y límites
- [CI #38006355845](https://github.com/jonhararagi/wordwaifu/actions/runs/38006355845) verifica la migración v1→v2, aislamiento entre dos IDs de universo, rechazo de un snapshot inválido, restauración del estado anterior, copia `before-restore`, eliminación selectiva y tests UI de creación/restauración/borrado.
- La misma CI prueba que una importación válida deja un snapshot del proyecto previo y que un error posterior de almacenamiento conserva el estado activo.
- El límite de 25 snapshots existe en código, pero la prueba que alcanza la frontera sigue pendiente.
- Borrar un proyecto elimina sus snapshots. Todavía no existe un camino para resucitar un proyecto que ya fue eliminado; la interfaz y el contrato de la próxima subtarea deben resolver esta decisión explícitamente.
- El test automatizado es Chromium headless; la inspección manual en Windows 11 sigue en `NOT_RUN`.


## 2026-10-17 · Runtime de GitHub Actions y consistencia de IndexedDB

### Riesgo encontrado y corrección aplicada

- Los dos workflows de `main` utilizaban `actions/checkout@v4`, `actions/setup-node@v4` y (en la validación de lore) `actions/upload-artifact@v4`. Los manifiestos de esas versiones declaran runtime `node20`.
- GitHub anunció que Node 20 dejó de estar disponible en sus runners de Actions el **23 de septiembre de 2026**. Las versiones upstream revisadas para esta actualización usan Node 24.
- Se actualizaron ambos workflows a `actions/checkout v7.0.1` (`3d3c42e5aac5ba805825da76410c181273ba90b1`), `actions/setup-node v7.1.0` (`949feb2413d6458794dcd2491c4babbbce0c15c1`) y `actions/upload-artifact v7.0.2` (`cf430e030ddbb5b0abf93d22962f4752f3646cd9`), fijando los SHA completos verificados en los repositorios oficiales.
- Se amplió `validate.yml` para revisar la sintaxis de `src/story-outline.js` y `tests/test_story_outline.cjs`, y ejecutar la prueba unitaria de generación de capítulos. La prueba ya existía, pero ese workflow no la ejecutaba directamente.
- Las ejecuciones recientes de CI anteriores a este cambio fueron correctas; por eso este hallazgo se registra como riesgo de compatibilidad pendiente de modernización, no como afirmación de que todos los runs previos hayan fallado.

### Corrección de almacenamiento local

- En `src/art-studio.js`, las lecturas de `getAll()` y `get()` resolvían sus promesas con `IDBRequest.onsuccess`, antes de observar la finalización de la transacción. Ahora la lectura se completa en `IDBTransaction.oncomplete` y rechaza los eventos de error/aborto; la apertura también limpia el estado cacheado tras un error o cambio de versión.
- Se añadió control de secuencia a las cargas del formulario y de la galería. Una lectura asíncrona antigua ya no debe volver a pintar recursos de un personaje anterior ni reinsertar una tarjeta después de una actualización más reciente. El formulario limpia la imagen y el prompt previos cuando se cambia el destino sin un recurso asociado.
- `tests/browser_smoke.cjs` cubre la regresión: tras asignar una imagen a Bell, seleccionar un personaje sin recurso no debe conservar el prompt ni la imagen de Bell. La CI de `main` queda como la validación final de esta modificación.

### Límites importantes

IndexedDB no convierte por sí solo los datos del navegador en una copia de seguridad permanente. MDN describe el almacenamiento web predeterminado como *best-effort*, susceptible a cuotas, presión de almacenamiento y eliminación explícita. WordWaifu debe seguir recomendando exportar copias del proyecto y no mostrar una concesión de persistencia como garantía absoluta. No se atribuye a Chrome/MDN el bug concreto de WordWaifu: sus páginas sustentan los contratos de API y los riesgos generales usados para corregir nuestro código.

### Fuentes oficiales consultadas

- [GitHub Changelog: Node 20 is no longer available in GitHub Actions (23-09-2026)](https://github.blog/changelog/2026-09-23-node-20-is-no-longer-available-in-github-actions/)
- [GitHub Docs: Secure use reference — pin actions to a full-length commit SHA](https://docs.github.com/en/actions/reference/security/secure-use)
- [actions/checkout v7.0.1](https://github.com/actions/checkout/releases/tag/v7.0.1) · [actions/setup-node v7.1.0](https://github.com/actions/setup-node/releases/tag/v7.1.0) · [actions/upload-artifact v7.0.2](https://github.com/actions/upload-artifact/releases/tag/v7.0.2)
- [MDN: IDBTransaction complete event](https://developer.mozilla.org/en-US/docs/Web/API/IDBTransaction/complete_event) — una transacción informa de su finalización tras completarse correctamente.
- [MDN: IDBTransaction error event](https://developer.mozilla.org/en-US/docs/Web/API/IDBTransaction/error_event) — el error puede propagarse; también debe contemplarse el aborto.
- [MDN: Storage quotas and eviction criteria](https://developer.mozilla.org/en-US/docs/Web/API/Storage_API/Storage_quotas_and_eviction_criteria) y [StorageManager.persist()](https://developer.mozilla.org/en-US/docs/Web/API/StorageManager/persist) — el almacenamiento es *best-effort* por defecto; la persistencia depende del navegador y puede denegarse.


## 2026-10-17 · Doble carga de Art Studio y manejadores duplicados

### Incidencia detectada en el HTML de `main`

- `index.html` incluía `./src/art-studio.js` dos veces: una junto a `project-schema.js` y `character-dossiers.js`, y otra después de `app.js`.
- El módulo registra listeners de eventos al inicializarse. No tiene un guardia global de inicialización; cada inclusión crea otro conjunto de listeners. Los clics sobre guardar/eliminar y los refrescos podían repetir operaciones de interfaz o ejecutar trabajo innecesario.
- La corrección es eliminar la segunda etiqueta y conservar la inclusión original, que ya respeta la dependencia de `official-character-roster.js` y `character-dossiers.js`.
- Se extendió `tests/browser_smoke.cjs`: en Chromium inspecciona todas las etiquetas `script[src]`, falla si una ruta se repite y exige exactamente una carga de `/src/art-studio.js`. Esta comprobación convierte el hallazgo accidental en una regresión detectada por CI.

### Fuentes comparativas

- [MDN — elemento HTML `<script>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/script): los scripts clásicos con `defer` se ejecutan en el orden del documento. Duplicar el elemento no crea un singleton; la segunda etiqueta vuelve a evaluar el archivo.
- [Sentry Forum — handler de jQuery ejecutado dos veces](https://forum.sentry.io/t/jquery-event-handler-keydown-is-called-two-times/8326): un informe real de desarrolladores explica cómo la reinicialización de manejadores puede generar ejecución duplicada y describe el ajuste que evitó el comportamiento en ese caso. Es una comparación del patrón, no el mismo defecto ni una dependencia de WordWaifu.
- [Sentry — issue de listeners duplicados](https://github.com/getsentry/sentry/issues/5203): reporte de comportamiento inesperado al aparecer dos listeners para una misma interacción; se usa como caso comparativo de depuración, no como fuente del parche de WordWaifu.

### Resultado esperado

Una sola evaluación del módulo mantiene un único conjunto de listeners; la prueba previene que otras futuras etiquetas duplicadas vuelvan a generar dobles inicializaciones. La verificación final corresponde a los workflows del commit que contiene este arreglo.


## 2026-10-17 · Liberación de marcas antirresurrección del Panel de arte

### Incidencia encontrada y corrección
- Cada borrado correcto dejaba su clave en `wordwaifu.art.deleted.v1`, incluso cuando IndexedDB se había eliminado y no existía una copia residual en localStorage. Con muchos recursos creados y borrados, la lista crecía indefinidamente sin aportar protección adicional.
- Ahora `removeRecord` retira la marca al terminar correctamente la eliminación de IndexedDB y la limpieza del respaldo local (o cuando no había copia de respaldo). La marca se conserva si la limpieza del respaldo falla; ese es el caso en que realmente evita que un registro antiguo vuelva a aparecer.
- La prueba de Chromium cubre ambas rutas: borrado correcto limpia la marca, mientras que el escenario de fallo simulado que deja una copia vieja en localStorage conserva la marca tras recargar la página y no resucita el recurso.

### Fuentes técnicas consultadas
- [MDN — cuotas y criterios de expulsión del almacenamiento web](https://developer.mozilla.org/en-US/docs/Web/API/Storage_API/Storage_quotas_and_eviction_criteria): localStorage es limitado (hasta 5 MiB por origen en la documentación actual) y puede lanzar `QuotaExceededError`; las estructuras auxiliares persistentes deben tener un ciclo de vida acotado.
- [MDN — IndexedDB: uso y transacciones](https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API/Using_IndexedDB): IndexedDB es asíncrono y transaccional; la app sigue esperando la confirmación de la transacción antes de limpiar la marca.
- [MDN — evento `complete` de IDBTransaction](https://developer.mozilla.org/en-US/docs/Web/API/IDBTransaction/complete_event): el evento marca que la transacción terminó y confirmó sus operaciones.


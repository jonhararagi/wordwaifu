# TLM-003 — Contrato operativo: conectar la cronología DanMachi con el mapa

**Autoriza:** CEREBRO  
**Ejecuta:** BOT OBRERO  
**Estado:** DONE — implementación y workflows CI completados.  
**Rama autorizada:** `work/story-completion-danmachi-audit-2026-10`  
**Dependencias aceptadas:** TLM-001 (auditoría) y TLM-002 (modelo temporal explícito).  
**HEAD previo documental registrado por el contrato:** `10561399ae476c9c196cb3f97aca93e42df16987`. **HEAD BEFORE real de esta ejecución:** `c859e3c822bfea7f8b73a8f959eb29a856736d27`. **SHA de implementación PASS_CI:** `c9fa2d05de3bb81526523202bea0fb5cb058ae06`.  
**Restricciones:** no modificar `main`; no fusionar ramas ni abrir/cerrar/modificar PR sin autorización explícita.

## 1. Objetivo

Conectar los 15 acontecimientos de `lore/danmachi/timeline/eras-and-events.json` con registros de lugar navegables, para poder entender en qué zona ocurre un acontecimiento y navegar **acontecimiento → lugar → acontecimientos relacionados**, manteniendo el filtro temporal y la continuidad seleccionada.

Esto debe ser un circuito propio del corpus DanMachi. No debe insertar datos de la franquicia en el proyecto de demostración Asteria ni sobrescribir los lugares que el usuario tiene guardados en sus universos.

## 2. Evidencia previa que debe conservarse

La auditoría `docs/TLM-001-ATLAS-TEMPORAL-AUDIT.md` confirmó:
- el dataset de cronología contiene 10 épocas y 15 acontecimientos;
- ningún evento tenía ubicación vinculada por ID;
- el mapa SVG de `src/app.js` usa el modelo local del proyecto y no consume el dataset de cronología DanMachi;
- los eventos conservan fuentes, continuidad, entidad/participantes, expediente y ahora el campo temporal tipado;
- la ficha `LOC-DUNGEON` existe en `lore/danmachi/places/dungeon.md`, registrada en `lore/danmachi/catalog.json`, con fuente editorial oficial para la relación general del Dungeon con Orario, y con advertencia explícita de que no debe inferirse la topología de sus pisos;
- `DM-WORLD-001` es una ficha de escenario provisional sobre Orario, no debe tratarse automáticamente como ficha geográfica de tipo location sin revisar su contrato.

Lee antes de empezar `docs/TLM-001-ATLAS-TEMPORAL-AUDIT.md`, `docs/DANMACHI-TEMPORAL-MODEL.md`, `docs/INTERACTIVE_ATLAS.md`, `docs/CONTENT_RIGHTS_AND_TAKEDOWN.md`, el catálogo, las fichas de lugares y el código actual de la cronología y el mapa.

## 3. Trabajo incluido

### TLM-003.1 — Modelo de referencias geográficas

- Añadir al evento un campo de referencias geográficas tipadas, por ejemplo `locationRefs`, usando el estilo más compatible con el dataset actual.
- Cada referencia identifica un registro mediante ID estable; no se deben enlazar lugares por el nombre visible ni duplicar la ficha.
- Distinguir como mínimo:
  - **lugar del evento** (la escena sucede allí con evidencia suficiente);
  - **zona/escenario amplio** (la fuente ubica el acontecimiento en una región general, ciudad o Dungeon, pero no en un punto concreto);
  - **contexto relacionado** (lugar importante para el contexto, pero no demostrado como sitio del hecho).
- Registrar estado de verificación y precisión espacial por separado de `temporal`, `evidenceStatus`, `narrativeOrigin` y `continuityScopes`. No reutilizar un campo para representar otra dimensión.
- El evento sin ubicación demostrable debe declarar un estado explícito equivalente a `unknown` o `verification_pending`; no debe fabricarse una referencia solo para que aparezca en el mapa.
- Si hay referencias provisionales, la UI debe distinguirlas claramente de un lugar verificado y enlazarlas a la evidencia disponible.

### TLM-003.2 — Fichas de lugar mínimas, respaldadas y normalizadas

- Reutilizar `LOC-DUNGEON` donde sea semántica y documentalmente correcto.
- Evaluar si Orario necesita una ficha geográfica estable `LOC-ORARIO`. Se permite crearla porque es una entidad geográfica mencionada por las fichas y fuentes existentes **solo si** se registra una fuente que respalde esa identidad y su relación general con el Dungeon. No inventar barrios, calles, entradas, posiciones, distancias ni coordenadas.
- Si se añade o normaliza un lugar, mantener IDs únicos, ruta de expediente, tipo, estado, procedencia, aliases, relaciones jerárquicas solo si están respaldadas e índice/catálogo coherentes.
- Un ajuste de piso/zona concreta requiere fuente que ubique el acontecimiento en ese piso/zona. Una mención narrativa a “piso 37” no permite inventar un mapa XY de los pisos.
- No promover automáticamente `DM-WORLD-001` o `DM-GUILD-001` a lugares exactos: justificar la normalización y conservar los documentos existentes.

### TLM-003.3 — Mapa DanMachi conectado a la cronología

- Construir una vista de mapa/esquema de acontecimientos DanMachi vinculada al corpus estático del universo, accesible desde el panel temporal existente.
- Debe usar los IDs de lugar definidos por el catálogo y los `locationRefs` del dataset temporal.
- Si solo hay relaciones jerárquicas pero no coordenadas canónicas, mostrar un **esquema de relaciones** claramente rotulado como no geográfico/no a escala. No falsear que sus posiciones visuales son coordenadas del mundo.
- Si no hay ubicación respaldada, mostrar “Ubicación desconocida” o “Ubicación por verificar”; no crear marcadores ficticios ni colocar eventos aleatoriamente.
- Si posteriormente hay coordenadas con fuente, separar sus coordenadas del layout visual utilizado para dibujar el esquema.
- El filtro temporal y de continuidad debe actualizar tanto las tarjetas de acontecimientos como la capa/panel del mapa. Mantener el selector y el modelo temporal de TLM-002; no introducir una segunda cronología paralela.
- Desde una tarjeta debe ser posible abrir el lugar asociado, y desde un lugar abrir los acontecimientos relacionados. Los enlaces de retorno deben conservar el filtro temporal y de continuidad cuando sea técnicamente razonable.
- Mostrar conteos: acontecimientos vinculados, candidatos/provisionales y sin ubicación, para que un mapa parcial no parezca completo.

### TLM-003.4 — Navegación y datos no contaminantes

- La integración DanMachi no debe modificar el `project.locations` persistido del usuario, ni importar `LOC-DUNGEON` o `LOC-ORARIO` en Las Crónicas de Asteria.
- Mantener búsqueda, archivos de personaje, relaciones, expedientes y fuentes existentes funcionando.
- Respetar el funcionamiento offline-first. No añadir una solicitud obligatoria a servicios externos para renderizar el mapa; todas las referencias deben poder leerse del repositorio. Las URL de fuente pueden abrirse externamente por acción explícita.

## 4. Criterios de ubicación y evidencia

Para cada evento, la decisión debe estar justificada con la fuente/documento que ya respalda el evento y la ubicación, o con evidencia adicional añadida de forma trazable.

- **VERIFIED:** una fuente apropiada ubica el hecho en ese lugar/zona.
- **PROVISIONAL:** una referencia secundaria o inferencia razonable sugiere la ubicación, pero hace falta cotejo primario. Solo mostrar como candidato, nunca como ubicación confirmada.
- **UNKNOWN / PENDING:** falta evidencia suficiente. No crear el enlace geográfico como hecho.

La misma entidad puede estar presente en distintos periodos, pero el lugar del evento no implica que todos los participantes residieran allí antes/después. Un ID de lugar es reutilizable, mientras que la referencia de evento expresa el vínculo concreto.

No se exige que los 15 acontecimientos queden localizados si los datos no lo permiten. Sí se exige que **los 15 sean evaluados individualmente** y que el estado no localizado sea visible. Se debe procurar mejorar la cobertura con ubicaciones respaldadas, no inflar el número con inferencias.

## 5. Pruebas exigidas

Añadir/modificar pruebas del modelo y del navegador que cubran, como mínimo:

1. ID de lugar válido, ID inexistente, ID duplicado en catálogo, ficha de lugar/ruta faltante y tipo de entidad incompatible.
2. Lugar verificado, ubicación amplia, contexto relacionado, candidato provisional y ubicación desconocida.
3. No se dibuja una posición geográfica exacta por defecto cuando la ficha carece de coordenadas comprobadas.
4. El esquema muestra las relaciones disponibles sin escala/posición geográfica falsa; los nodos de UI no se guardan como coordenadas canónicas.
5. Filtrar era/tiempo/continuidad actualiza eventos y referencias del mapa sin mezclar CONT-AR, novela principal, anime, juego, AU o pistas no verificadas.
6. Evento → lugar → acontecimientos relacionados → retorno al evento; conserva filtros y no crea entidades duplicadas.
7. `LOC-DUNGEON` y cualquier `LOC-ORARIO` nuevo aparecen solo en el visor DanMachi y no se incorporan al proyecto activo Asteria o proyectos guardados.
8. El estado vacío y los eventos no localizados tienen texto explícito; no hay fallos JS ni errores de consola atribuibles a la nueva vista.
9. Conservación de los 15 IDs de evento, sus `temporal`, `dateLabel`, fuentes, `evidenceStatus`, `narrativeOrigin`, `continuityScopes` y `detailPath`.

Ejecutar los workflows aplicables y registrar éxito para el SHA exacto. Revisión local/manual no hecha debe seguir `NOT_RUN`; no afirmar inspección visual si solo pasó CI.

## 6. Archivos candidatos

- `lore/danmachi/timeline/eras-and-events.json`
- `lore/danmachi/catalog.json`
- `lore/danmachi/places/dungeon.md` y, si está justificado, ficha nueva para Orario
- `src/danmachi-timeline.js`
- `lore/danmachi/tools/check-timeline.mjs`
- `index.html`, `src/styles.css`
- `tests/test_danmachi_timeline.cjs`, `tests/browser_smoke.cjs`
- documentación del esquema, auditoría/resultado, `docs/STATUS.md`, `docs/DONE.md` y control persistente

Modificar solo los archivos necesarios. Antes de cambiar el SVG general de `src/app.js`, justificar por qué la vista DanMachi debe vivir allí en lugar de dentro del panel de cronología; no alterar el mapa original sin pruebas de no regresión.

## 7. Fuera de alcance

- Incorporar imágenes oficiales de anime/novelas; corresponde a TLM-004 y requiere licencia/permiso compatible.
- Añadir marcas de agua para aparentar que una imagen no autorizada es legal.
- Completar las fichas de personajes, el canon general o la cronología más allá de los vínculos necesarios para esta fase.
- Inventar coordenadas, distancias, rutas, pisos, barrios o topología.
- Reparar o reestructurar módulos no relacionados.
- Modificar `main`, fusionar ramas o alterar PR.

## 8. Criterios de cierre

- [x] Informe individual de ubicación para los 15 eventos: referencias, clase espacial, estado de verificación, fuente/razón, o motivo de UNKNOWN.
- [x] Fichas/índice de lugares usados son coherentes; cualquier registro nuevo tiene fuente trazable.
- [x] Mapa/esquema DanMachi consume IDs del corpus y está conectado al filtro temporal/continuidad, sin afectar proyectos del usuario.
- [x] Navegación evento↔lugar probada; ubicaciones desconocidas/provisionales claramente marcadas.
- [x] Pruebas de modelo, validador y navegador aplicables añadidas y en verde en CI para el SHA de implementación.
- [x] No se inventan coordenadas ni se modifican hechos temporales/canónicos fuera del alcance.
- [x] `docs/TLM-003-TIMELINE-MAP-INTEGRATION-REPORT.md` registra la tabla por evento, los archivos y las limitaciones.
- [x] `docs/STATUS.md`, este contrato y `docs/CEREBRO_BOT_OBRERO_CONTROL.md` reflejan el resultado; `docs/DONE.md` queda sobrescrito con el punto real de reanudación.
- [x] TLM-004 y TLM-005 siguen pendientes salvo autorización separada.

## 9. Plantilla de entrega

```text
Tarea: TLM-003
Estado:
Rama:
HEAD BEFORE:
SHA de implementación:
HEAD AFTER documental:
Tabla de 15 eventos:
Lugares reusados/nuevos y fuentes:
Archivos:
Pruebas y workflows por SHA:
PASS_CI / PASS_REAL / PASS_STATIC / NOT_RUN:
Limitaciones y eventos aún desconocidos:
main/PR:
Próxima acción exacta:
```


## Resultado de ejecución (2026-10-16)

- Informe completo con tabla individual por evento: docs/TLM-003-TIMELINE-MAP-INTEGRATION-REPORT.md.
- Contrato del modelo espacial: docs/DANMACHI-LOCATION-MODEL.md.
- HEAD BEFORE real: c859e3c822bfea7f8b73a8f959eb29a856736d27.
- SHA de implementación con ambos workflows success: c9fa2d05de3bb81526523202bea0fb5cb058ae06.
- [Validate WordWaifu #38950288434](https://github.com/jonhararagi/wordwaifu/actions/runs/38950288434) y [DanMachi Lore and Retrieval Integrity #38950288325](https://github.com/jonhararagi/wordwaifu/actions/runs/38950288325): ambos success, asociados al SHA de implementación.
- Dataset: 2 fichas de ubicación, 9 vínculos de evento, 4 acontecimientos espaciales verificados, 5 provisionales y 6 sin ubicación demostrable. Los 15 IDs/eventos permanecen.
- LOC-ORARIO se crea con la sinopsis editorial oficial GA del volumen 1 (DMR-012-SRC-001); LOC-DUNGEON se reutiliza. No se añaden coordenadas ni plano de pisos.
- El mapa es un esquema relacional explícitamente no geográfico/sin escala dentro del panel DanMachi. No se tocó src/app.js, el mapa de Asteria ni el almacenamiento de proyectos.
- NOT_RUN local: no se ejecutaron Node/Playwright en este agente. PASS_CI corresponde a GitHub Actions real. Revisión visual manual Windows 11 sigue NOT_RUN.
- main, ramas externas y PR no fueron modificados; no hubo merges. TLM-004/TLM-005 permanecen NOT_STARTED.

**TLM-003: DONE.** El atlas/producto completo sigue PARTIAL por trabajo visual/derechos y verificación end-to-end aún pendientes.

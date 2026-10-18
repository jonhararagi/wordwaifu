# Hoja de ruta

## Snapshot operativo — 2026-10-18

| Fase | Estado en `main` | Evidencia / bloqueo |
|---|---|---|
| 0 · Dirección y contrato | **Completa** | Visión maestra, contrato offline-first y criterios documentados. |
| 1 · Aplicación navegable | **Implementada, revisión manual parcial** | Atlas, catálogo y visor contextual; Playwright cubre Familia Astrea → Ryu → atrás/adelante → perfil de continuidad → retorno → fuentes → índice maestro. También se prueba contenido Markdown malicioso como texto inerte. |
| 2 · Datos y persistencia | **Implementada; bordes manuales pendientes** | CRUD, IndexedDB/respaldo local, import/export validado, snapshots, papelera/recuperación. No se ha agotado de forma verificada la cuota real de navegador. |
| 3 · Atlas temporal y grafo lore | **Parcial; primer grafo explícito entregado** | `catalog.json` incorpora 20 aristas de Astrea con extremo, tipo, continuidad, periodo, evidencia y claim navegable; el visor las separa de sugerencias por etiquetas. Falta ampliar a otras familias y cerrar cadenas históricas completas. |
| 4 · Generadores locales | **Implementada en parte** | Story Forge optimizado a una pasada para 1–500 capítulos, con benchmark CI. Persistir poder/reliquia/carta con portador, pacto, escena/evento y evolución temporal sigue pendiente. |
| 5 · Historia y elenco coral | **Parcial** | El índice narrativo funciona; el manuscrito final sigue bajo control del autor. Faltan arcos secundarios y conexiones completas con escenas/eventos. |
| 6 · Continuity Guard | **Parcial** | Validación estructural y filtros de continuidad; falta comprobador causal global de anacronismos/contradicciones entre escenas, poderes y conocimiento. |
| 7 · Extensiones | **Futura/opcional** | React/TypeScript/Vite, escritorio y conectores de IA no forman parte de los gates cerrados del prototipo. |

### Evidencia reproducible

- [Validate WordWaifu #39108041754 — success](https://github.com/jonhararagi/wordwaifu/actions/runs/39108041754) — SHA `d51990d5...`.
- [DanMachi Lore and Retrieval Integrity #39108041733 — success](https://github.com/jonhararagi/wordwaifu/actions/runs/39108041733) — mismo SHA.
- Medianas del benchmark de Story Forge en ese runner: `100 = 0,81 ms`, `250 = 1,61 ms`, `500 = 2,20 ms`, 9 repeticiones por tamaño.
- Pruebas de navegador comprueban navegación contextual, seguridad del visor y render del atlas; no prueban revisión humana visual ni agotamiento real de almacenamiento.


## Snapshot operativo — 2026-10-18

| Fase | Estado observado en `main` | Evidencia / bloqueo |
|---|---|---|
| 0 · Dirección y contrato | **Completa** | Visión maestra, contrato offline-first, modelo inicial y criterios documentados. |
| 1 · Aplicación navegable | **Implementada, con validación manual parcial** | Atlas, tarjetas/paneles, catálogo y visor interno de expedientes. El test conserva contexto al pasar de Familia a Ryu, atrás/adelante, ficha de continuidad, retorno, fuentes e índice maestro. |
| 2 · Datos y persistencia | **Implementada; bordes manuales pendientes** | CRUD, IndexedDB/respaldo local, importación/exportación validada, snapshots, papelera y recuperación, con pruebas. La cuota real del navegador aún no se ha agotado en una prueba verificada. |
| 3 · Atlas temporal y grafo lore | **Parcial; aristas explícitas iniciales implementadas** | Hay 20 relaciones iniciales de Astrea con continuidad y evidencia enlazada. La lista por etiquetas sigue como descubrimiento secundario; falta el recorrido completo y la cobertura del resto del catálogo. |
| 4 · Generadores locales | **Parcial** | Catálogos y generadores de poderes/manifestaciones y Story Forge existen. Falta persistir e interconectar cada poder/reliquia/carta con portador, pacto, escena/evento y evolución temporal. |
| 5 · Historias y elenco coral | **Parcial** | Story Forge produce índices de 1–500 capítulos; la prosa final sigue siendo del autor y faltan objetivos/participación por secundario en el grafo de escenas. |
| 6 · Continuity Guard | **Parcial** | Hay validación estructural, fuentes/continuidades y comprobaciones de links/IDs; falta detección causal global de anacronismos/contradicciones entre escenas, poderes y conocimiento de personajes. |
| 7 · Extensiones | **Futura/opcional** | React/TypeScript/Vite, escritorio/Tauri y adaptadores externos no son gates del prototipo actual. |

### CI en el HEAD actual al momento de la auditoría

- [Validate WordWaifu #39106222211 — success, SHA `8ef2fb1...`](https://github.com/jonhararagi/wordwaifu/actions/runs/39106222211).
- [DanMachi Lore and Retrieval Integrity #39106222192 — success, SHA `8ef2fb1...`](https://github.com/jonhararagi/wordwaifu/actions/runs/39106222192).

CI valida las rutas de pruebas ejecutadas. No sustituye revisión humana visual, agotamiento de almacenamiento real ni verificación factual de todas las fichas.


## Snapshot operativo — 2026-10-18

La lista detallada posterior conserva los criterios históricos. Este bloque aclara el estado observado en `main`; no implica que las fases pendientes se hayan terminado.

| Fase | Estado real | Evidencia o bloqueo actual |
|---|---|---|
| 0 · Dirección y contrato | **COMPLETA** | Visión maestra, contrato offline-first, modelo canónico y criterios documentados. |
| 1 · MVP visual ejecutable | **IMPLEMENTADA; revisión manual parcial** | Atlas, mapa, marcadores, paneles, búsqueda y demo original se ejercitan por Playwright/Chromium CI. No equivale a revisión visual manual en Windows. |
| 2 · Canon local y persistencia | **Implementada; límite de cuota real pendiente** | CRUD de entidades y relaciones, repositorio IndexedDB/localStorage, snapshots, papelera, recuperación, importación/exportación y pruebas de regresión pasan en CI. La cuota real del navegador no se ha agotado en una prueba verificada. |
| 3 · Atlas temporal | **PARCIAL** | Existen marcadores, filtros, selector y datos temporales de demo; falta modelar libremente épocas/presencias y demostrar recorridos históricos completos sin duplicar entidades. |
| 4 · Generadores sin IA | **PARCIAL** | Existen generadores locales de poderes y propuestas narrativas. Faltan catálogos/plantillas más amplios, semilla reproducible general y cobertura de compatibilidad en todas las familias de entidades. |
| 5 · Historia y novela | **PARCIAL, mejorada** | Story Forge genera índices de 1–500 capítulos con progresión y finales; el editor mantiene manuscritos e importa/exporta Markdown. No escribe por sí solo el manuscrito completo ni convierte todas las escenas en aristas causales normalizadas. |
| 6 · Continuity Guard | **PARCIAL** | Hay validación estructural, filtros de continuidad y separación por medio/etapa. Falta un motor general que evalúe contradicciones temporales y causales entre eventos, escenas, personajes y poderes sin inventar datos. |
| 7 · Extensiones | **FUTURA/OPCIONAL** | La migración completa a TypeScript/React/Vite, escritorio/Tauri y mejoras visuales no son gates ya cerrados del prototipo actual. |

### Evidencia de CI reciente

- [Validate WordWaifu #39105188710 — success, SHA `fb8f4e80...`](https://github.com/jonhararagi/wordwaifu/actions/runs/39105188710).
- [Validate WordWaifu #39105158830 — success, SHA `7860b515...`](https://github.com/jonhararagi/wordwaifu/actions/runs/39105158830).
- [DanMachi Lore and Retrieval Integrity #39105158803 — success, SHA `7860b515...`](https://github.com/jonhararagi/wordwaifu/actions/runs/39105158803).
- [DanMachi Lore and Retrieval Integrity #39105185544 — success, SHA `095bc68a...`](https://github.com/jonhararagi/wordwaifu/actions/runs/39105185544).

Los resultados de CI prueban las rutas de test ejecutadas, no la cobertura factual completa de DanMachi, ni una comprobación visual humana, ni el agotamiento de almacenamiento real.


Estimaciones iniciales orientativas para un desarrollador con asistencia de herramientas; deben recalcularse después de inspeccionar cada entrega. No son promesas de fecha.

## Fase 0 — Dirección y contrato del producto
**Estimación:** 2–4 horas.
- [x] Definir el objetivo único.
- [x] Definir requisitos offline-first.
- [x] Definir el atlas como interfaz distintiva.
- [x] Definir modelo canónico inicial.
- [x] Definir fases y criterios generales.
- [x] Revisar la documentación y consolidar el registro de decisiones.

## Fase 1 — MVP visual ejecutable
**Estimación:** 1–2 días.
- Crear interfaz adaptable con navegación lateral y panel principal.
- Añadir un proyecto de demostración original.
- Renderizar un mapa esquemático con marcadores seleccionables.
- Mostrar paneles de lugar y personaje.
- Añadir buscador y filtros mínimos.
- Probar en navegador real.

**Gate:** un usuario puede abrir el proyecto demo, hacer clic en una ciudad, abrir un personaje relacionado y navegar entre ambos.

## Fase 2 — Canon local y persistencia
**Estimación:** 1–3 días.
- [x] CRUD de ubicaciones del atlas, con edición, movimiento y borrado seguro (WF-001-B; Chromium CI PASS).
- [x] CRUD básico de personajes y limpieza segura de referencias (WF-002-A; Chromium CI PASS).
- [x] CRUD básico de acontecimientos y limpieza segura de referencias (WF-002-B; Chromium CI #37927849547 PASS).
- [x] CRUD básico de organizaciones con referencias seguras (WF-002-C; Chromium CI #37936748101 PASS).
- [x] CRUD básico de relaciones canónicas con migración retrocompatible desde `characters[].relationships` (WF-003-A; Chromium CI #37951860214 PASS).
- [x] Repositorio desacoplado + IndexedDB integrado al ciclo de vida de la aplicación (WF-004-A.2; CI #37962660799 PASS). `localStorage` se conserva como respaldo/fallback.
- [x] Catálogo local por ID, creación de universo con identidad estable y cambio validado entre proyectos (WF-004-B.1.1; Chromium CI #37966133138 PASS).
- [x] Exportar/importar JSON con validación.
- [x] Búsqueda e índice maestro de referencias por IDs estables, incluida apertura contextual verificada.
- [x] Snapshots versionados, restauración protegida y copia previa a importación (WF-004-C.1; CI #38006355845 PASS).
- [x] Snapshot verificado antes de borrar entidades; límite de 25 por universo; borrado de universo informa y elimina sus snapshots (WF-004-C.2; CI #38008260869 PASS).
- [x] Papelera y recuperación de universos completos eliminados (WF-004-C.3; Chromium CI #38024310803 PASS_REAL).
- [x] WF-004-B.1.2: eliminación segura de proyectos y protección del proyecto activo (CI #37988482281 PASS).

**Gate:** reiniciar el navegador no pierde el proyecto y exportar/importar conserva las relaciones.

## Fase 3 — Atlas y presencia temporal
**Estimación:** 2–4 días.
- Jerarquía de ubicaciones.
- Capas y filtros.
- Presencias de personajes por evento/capítulo.
- Selector temporal.
- Paneles que consultan el canon compartido.

**Gate:** el mismo personaje aparece en diferentes lugares en distintos momentos sin duplicar su ficha.

## Fase 4 — Generadores sin IA
**Estimación:** 3–6 días.
- Catálogos editables de especies, rasgos, objetivos, defectos y trasfondos.
- Reglas de compatibilidad y plantillas narrativas.
- Semilla reproducible.
- Propuestas que requieren aprobación.
- Generadores de personajes, ciudades, facciones y conflictos.

**Gate:** resultados válidos, editables y reproducibles; las reglas incompatibles se detectan.

## Fase 5 — Historia y novela
**Estimación:** 3–7 días.
- Premisa, actos, arcos y subtramas.
- Volúmenes, capítulos y escenas.
- Editor Markdown local.
- Referencias a personajes, lugares y eventos.
- Exportación de manuscrito.

**Gate:** producir un esquema completo y un borrador organizado a partir de un proyecto existente.

## Fase 6 — Continuity Guard
**Estimación:** 2–5 días.
- Referencias rotas.
- Conflictos temporales de presencia.
- Entidades sin datos esenciales.
- Edad/estado temporal incoherente cuando existan datos suficientes.
- Reportes con explicación y resolución manual.

**Gate:** pruebas con contradicciones sembradas que el sistema detecta sin falsificar certeza.

## Fase 7 — Mejoras visuales y extensiones
- Mapas más avanzados, rutas, territorios y genealogías.
- Biblioteca visual y procedencia/licencias.
- Aplicación de escritorio opcional.
- Conector Git opcional.
- Adaptador de IA opcional, solo si se decide usarlo.

## Orden de prioridad

1. Datos canónicos confiables.
2. Atlas navegable.
3. Presencia temporal.
4. Fichas y relaciones.
5. Generadores por reglas.
6. Esquemas de historias y novelas.
7. Auditoría narrativa.
8. Extensiones visuales e IA opcional.

No saltar directamente a generadores masivos antes de demostrar que el canon y las relaciones sobreviven a la edición y a la recarga.

## Extensión consolidada de visión (objetivos posteriores, no funciones ya entregadas)

La especificación completa de estas capacidades está en [MASTER_VISION.md](MASTER_VISION.md). El gate básico del atlas y la persistencia activa están verificados en Chromium CI. El catálogo, el cambio validado entre universos y el borrado seguro pasaron Chromium CI #37988482281.

### Índice maestro multiverso
- Separar proyectos/universos por IDs estables.
- Buscar personajes, lugares, facciones, eventos, capítulos y referencias desde un índice global.
- Abrir tarjetas compactas y expedientes completos.
- Mantener procedencia y estado de verificación de datos importados.
- Gate: dos universos pueden tener entidades con nombres iguales sin mezclar registros ni relaciones.

### Atlas temporal, trayectorias y mapa de relaciones
- Añadir épocas configurables y estados históricos sin duplicar la identidad de cada personaje.
- Guardar presencias por intervalo, fecha, evento o capítulo.
- Añadir rutas habituales, encuentros, eventos críticos y último registro conocido, con filtros y leyenda configurable.
- Al seleccionar marcadores, abrir su evento, participantes, ubicación, fuente y consecuencias.
- Añadir una ficha de personaje con relaciones por época, intensidad, tipo, descripción y acontecimientos compartidos.
- Gate: cambiar de época modifica correctamente ubicaciones/estados y no borra relaciones o historia anterior.

### Generador de historias y lore
- Añadir perfiles editables de ADN narrativo y recetas de combinación.
- Permitir crear sinopsis, protagonista(s), elenco, reglas de mundo, facciones, conflictos, arcos, capítulos y escenas.
- Incluir perfiles de referencia a recursos narrativos generales; no copiar por defecto personajes, diálogos o tramas protegidas.
- Configurar género del protagonista, géneros narrativos y preferencias de romance/tono por proyecto.
- Mantener los resultados como propuestas hasta que el autor los apruebe.
- Gate: la propuesta se edita y se vincula al canon existente sin sobrescribir silenciosamente registros confirmados.

### Content Guard
- Clasificación a nivel de proyecto y etiquetas a nivel de capítulo/escena.
- Mostrar un indicador claro de contenido maduro/adulto y avisos antes de exportar.
- Permitir revisión manual y registro de por qué se asignó la clasificación.
- Gate: exportar muestra los avisos pertinentes; ninguna detección heurística se presenta como infalible ni garantiza aceptación por una plataforma externa.

### Recursos visuales y BotImagen
- WordWaifu puede almacenar una referencia/ruta a una ilustración y mostrar su miniatura.
- El diseñador visual, prompts de imagen, variaciones, biblioteca visual principal e importación/validación de assets pertenecen a BotImagen.
- Gate: integración mediante IDs/rutas/metadatos explícitos, sin duplicar el creador visual en WordWaifu.

### Dirección tecnológica
- Estabilizar primero el prototipo HTML/CSS/JavaScript.
- Planificar la migración gradual a TypeScript + React + Vite.
- Mantener una capa de persistencia intercambiable; IndexedDB para la aplicación web local y Tauri + SQLite como posibilidad futura de escritorio.
- Gate: migración sin pérdida del canon, relaciones ni capacidades de importar/exportar.



## Registro de implementación y continuidad (2026-10-09)

### WF-001-A — DONE
- Validador de importaciones y 8 pruebas de esquema.
- CI PASS: [ejecución #37888290629](https://github.com/jonhararagi/wordwaifu/actions/runs/37888290629).
- Rechazo seguro de importación inválida; smoke test del atlas.

### WF-001-B — DONE
- Edición de ubicaciones con ID estable, movimiento de marcadores con coordenadas SVG persistentes y borrado seguro.
- Al borrar, se reasignan ubicaciones hijas y se limpian referencias al lugar desde historiales/eventos.
- CI PASS_REAL: [ejecución #37922783841](https://github.com/jonhararagi/wordwaifu/actions/runs/37922783841).
- Referencia técnica contrastada para el mapeo de coordenadas SVG: [DeckSketchCanvas.tsx](https://github.com/SamuelGoldsmith/deck-doctors/blob/ba1c6c52ce17a7c3a822064e40352dc94b21066f/components/deck-estimate/DeckSketchCanvas.tsx). La implementación de WordWaifu es propia.

### WF-002-A — DONE
- CRUD básico de personajes: crear y editar datos esenciales sin cambiar el ID.
- Borrado con confirmación y limpieza selectiva de relaciones entrantes, referencias de ubicación y participantes en eventos.
- CI PASS_REAL: [ejecución #37925820239](https://github.com/jonhararagi/wordwaifu/actions/runs/37925820239), incluyendo Chromium, persistencia, export/import, edad desconocida renderizada correctamente y comprobación sin errores de página.

### WF-002-B — DONE
- CRUD básico de acontecimientos: crear, seleccionar, editar con ID estable y borrar con confirmación.
- Al editar, se sincronizan las referencias `event.locationIds` con `location.events`; al borrar, se elimina solo la referencia al evento borrado.
- CI PASS_REAL: [ejecución #37927849547](https://github.com/jonhararagi/wordwaifu/actions/runs/37927849547), con nueve pruebas de esquema, Chromium, persistencia, borrado selectivo y round-trip de export/import.
- Las primeras ejecuciones detectaron fixtures de prueba incompletos; se corrigieron. La última ejecución terminó en PASS.
- Pendiente fuera del gate CI: prueba manual en Windows 11.
- Siguiente tarea: WF-002-C, organizaciones con referencias seguras. TIMER: 3–5 horas iniciales.

Al cerrar cada tarea, sobrescribir `docs/DONE.md` con el punto de continuidad vigente.


### WF-002-C — DONE · Organizaciones
- Modelo `organizations` opcional con default vacío para proyectos anteriores; IDs de organización globalmente únicos.
- Validación de líderes y miembros contra personajes y sede contra lugares ya registrados.
- Vista nueva de organizaciones con búsqueda, detalle, creación, edición de ID estable y borrado confirmado sin cascada hacia personas o lugares.
- CI PASS_REAL: [ejecución #37936748101](https://github.com/jonhararagi/wordwaifu/actions/runs/37936748101), incluyó Chromium CRUD, persistencia, referencias y round-trip JSON.
- Investigación conceptual documentada en [TECHNICAL_RESEARCH.md](TECHNICAL_RESEARCH.md), sin reutilizar código de terceros.
- Siguiente tarea: WF-003-A, relaciones dedicadas. TIMER: 3–5 horas.


### WF-003-A — DONE · Relaciones canónicas entre personajes
- Añadida la colección raíz `relationships[]` y migración sin cambio de schemaVersion desde las listas locales por personaje.
- Relaciones enlazadas por IDs; auto-relaciones, endpoints inexistentes e IDs/pares-tipos duplicados se rechazan.
- CRUD desde la vista «Relaciones», con persistencia, round-trip, borrado confirmado y sincronización de la proyección antigua.
- Evidencia: [Chromium CI #37951860214 PASS](https://github.com/jonhararagi/wordwaifu/actions/runs/37951860214); 18 pruebas de esquema y smoke test completo.
- Siguiente: WF-004-A, repositorio local desacoplado + IndexedDB. TIMER: 4–6 horas.


### WF-004-A.1 — DONE · Adaptador aislado
- IndexedDB y respaldo local con migración, verificación del contenido, reparación ante divergencia y fallback.
- Evidencia: [CI #37961153186](https://github.com/jonhararagi/wordwaifu/actions/runs/37961153186).

### WF-004-A.2 — DONE · Integración de ProjectRepository en la aplicación
- Arranque asíncrono que bloquea interacciones hasta recuperar el proyecto activo.
- Guardados normales serializados; la copia local se actualiza de forma inmediata y las escrituras IndexedDB van en cola.
- La importación pasa validación y guardado antes de sustituir el estado activo.
- Chromium valida el registro IndexedDB, respaldo y recuperación sin copia local.
- Evidencia: [CI #37962660799 PASS](https://github.com/jonhararagi/wordwaifu/actions/runs/37962660799).
- Pendiente para cerrar WF-004-A completo: pruebas integradas de fallo de transacción/ráfaga y prueba manual Windows.
- Siguiente subtarea: WF-004-A.3, resiliencia integrada. TIMER: 2–4 horas.


### WF-004-A.3 — DONE · Resiliencia integrada
- La suite simula escrituras IndexedDB lentas consecutivas y comprueba que tanto IndexedDB como el respaldo terminan en el estado más reciente.
- Un fallo real inyectado al método de escritura del repositorio deja intacta la copia local y hace que el estado de interfaz describa el fallback.
- La importación no sustituye estado ni respaldo si fallan tanto IndexedDB como localStorage.
- El proyecto se sigue pudiendo exportar y validar desde memoria tras el fallo.
- Evidencia: [CI #37963611180 PASS](https://github.com/jonhararagi/wordwaifu/actions/runs/37963611180); 18 pruebas de esquema y smoke Chromium completo.
- WF-004-A queda cerrado a nivel de automatización. La validación manual en Windows se mantiene como NOT_RUN.
- Siguiente: WF-004-B.1, selector multiverso de proyectos. TIMER: 3–5 horas.


### WF-004-B.1.1 — DONE · Catálogo, creación y cambio entre universos
- `ProjectRepository.listProjects()` enumera proyectos por ID estable en IndexedDB e incorpora el respaldo local cuando un proyecto aún no aparece en la base de datos.
- `getProject(projectId)` y `activateProject(projectId)` permiten leer y activar por ID; la activación exige un registro existente y actualiza el puntero mediante transacción de metadatos.
- Nueva ventana «Proyectos» para abrir universos existentes y crear uno con nombre e ID propios.
- El proyecto anterior se guarda/verifica antes de cambiar; el candidato se valida y persiste antes de reemplazar el estado en memoria.
- Chromium CI PASS: [#37966133138](https://github.com/jonhararagi/wordwaifu/actions/runs/37966133138). Verifica creación, IDs únicos, cambio en ambos sentidos y que Asteria conserva sus cuatro personajes.
- El primer test detectó un selector DOM singular usado como colección; se corrigió y la última ejecución terminó en PASS.
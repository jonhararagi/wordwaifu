# Hoja de ruta

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
- [ ] Copias de seguridad versionadas y restauración selectiva; siguiente tarea WF-004-C.1 (TIMER 4–7 horas).
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
- **WF-004-B.1.2 — DONE:** borrado seguro de proyectos con confirmación por ID exacto y protección del activo tanto en UI como dentro de la transacción IndexedDB.
- **PASS_REAL:** CI [#37988482281](https://github.com/jonhararagi/wordwaifu/actions/runs/37988482281), incluyendo 18 pruebas de esquema, smoke Chromium completo y validación estructural.
- Chromium confirmó bloqueo del proyecto activo y de candidatos solo en respaldo local; cancelar no borra; al aceptar, solo se elimina el ID objetivo, mientras el ID vecino y Asteria con sus cuatro personajes sobreviven.
- El gate automatizado de WF-004-B.1 queda cerrado. Prueba manual de Windows 11 sigue NOT_RUN.
- **Siguiente:** WF-004-B.2, índice maestro multiverso sin mezclar universos. TIMER: 3–5 horas iniciales.


### WF-004-B.2 — DONE · Índice maestro multiverso
- Implementado `ProjectRepository.searchAcrossProjects(query, options)`: búsqueda de solo lectura sobre los universos en IndexedDB, con respaldo local de alcance limitado si falla la base.
- Tipos iniciales: personajes, lugares, acontecimientos, organizaciones, relaciones e historias.
- Resultados con `projectId`, `entityType`, `entityId`, nombre del universo y detalle; permite filtro por tipo y texto seleccionado, con normalización de acentos.
- El estado activo permanece sin cambios. La búsqueda parcial indica explícitamente errores y no interpreta cero resultados parciales como una ausencia segura.
- **PASS_REAL:** [CI #37996000708](https://github.com/jonhararagi/wordwaifu/actions/runs/37996000708), con smoke Chromium y validador estructural completados.
- **No optimizado aún:** la búsqueda reconstruye el índice en memoria al consultar; no persiste un índice invertido.
- Mantener `main` intacta y PR #1 en borrador. Siguiente: WF-004-B.3, apertura contextual de un resultado usando `projectId + entityType + entityId`. TIMER inicial: 2–4 horas.


### WF-004-B.3 — DONE · Apertura contextual del índice maestro
- La acción de un resultado valida `projectId + entityType + entityId`; las identidades locales repetidas en universos distintos siguen separadas.
- Guarda/verifica el proyecto anterior; lee el destino de IndexedDB, valida el proyecto y confirma que la ficha exacta exista antes del cambio.
- Ante proyecto/ficha ausente o fallo de persistencia, rechaza la acción y restaura el proyecto anterior; un respaldo local no verificado no se ofrece como destino confiable.
- Chromium CI PASS_REAL: [#38000904219](https://github.com/jonhararagi/wordwaifu/actions/runs/38000904219), incluidos rollback y fallos sembrados.
- Se añadió aserción de accesibilidad: tras abrir el resultado, el foco queda en el encabezado exacto, incluso con IDs de personaje repetidos en otro universo.
- Siguiente: WF-004-C.1, respaldos versionados y restauración segura. TIMER: 4–7 horas.

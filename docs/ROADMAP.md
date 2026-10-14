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
**Estado:** PARTIAL · primer núcleo Story Foundry integrado en rama de trabajo.
- [x] Semillas editables de personajes: personalidad, objetivo, defecto, trauma, vínculo, capacidad, límite y arco.
- [x] Semillas de mundo: premisa, reglas, presión social, facciones y gancho.
- [x] Generador de poderes existente, con coste, límites y evolución.
- [x] Las propuestas se añaden sin sobrescribir en silencio el material ya escrito.
- [ ] Ampliar catálogos y variaciones para especies, culturas, ciudades, facciones y conflictos.
- [ ] Añadir semillas reproducibles configurables y detección de incompatibilidades.

**Gate restante:** ampliar cobertura de catálogos y validar combinaciones; las plantillas actuales son puntos de partida, no generación exhaustiva.

## Fase 5 — Historia y novela
**Estado:** PARTIAL · índice de novela implementado; generación de manuscrito completo pendiente.
- [x] Elegir cantidad de capítulos (1–500) y final abierto/cerrado.
- [x] Generar resúmenes por capítulo y fases adaptadas: presentación, progreso, falsa seguridad, caída, clímax y resolución.
- [x] Incorporar resumen de referencia tipo wiki como contexto orientativo.
- [x] Conservar capítulos con manuscrito al añadir un nuevo índice.
- [x] Editor local de título, resumen, manuscrito y estado; importación/exportación Markdown existente.
- [ ] Crear actos, arcos y subtramas con dependencias explícitas.
- [ ] Expandir resúmenes a escenas y borradores de capítulo.
- [ ] Vincular propuestas aprobadas a fichas canónicas y ejecutar auditoría de continuidad entre capítulos.

**Gate restante:** generar un esquema completo y editable desde un proyecto existente, expandirlo a manuscrito y pasar la auditoría de continuidad.

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

## Registro de implementación — Story Foundry (2026-10-14)

- Núcleo en `src/story-structure-generator.js`; integración en `src/app.js`; estilos en `src/styles.css`.
- Pruebas unitarias en `tests/test_story_structure_generator.cjs` y regresión de navegador en `tests/browser_smoke.cjs`.
- **PASS_REAL:** [Validate WordWaifu #1081](https://github.com/jonhararagi/wordwaifu/actions/runs/38572910615), incluida ejecución de Chromium.
- La validación final sobre el HEAD documental más reciente debe confirmarse en GitHub Actions; no se confunde la ejecución anterior con una prueba de un SHA posterior.

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


### WF-004-C.1 — DONE · Almacén de snapshots y restauración segura
- IndexedDB v1→v2 no destructiva; añade `snapshots` con índices por proyecto/fecha y límite de 25 copias por universo.
- API para crear/listar/borrar/restaurar; valida el ID propietario, comprueba el contenido y conserva un snapshot `before-restore` antes de aplicar una restauración.
- El gestor permite crear, restaurar y borrar copias individuales con confirmación; los snapshots se aíslan por `projectId`.
- Una importación válida crea `before-import`; ante fallo al persistir el candidato, la sesión activa y el respaldo local no se sustituyen.
- **PASS_REAL:** [Chromium CI #38006355845](https://github.com/jonhararagi/wordwaifu/actions/runs/38006355845).

### WF-004-C.2 — DONE · Protección ante borrados destructivos
- Antes de borrar personaje, lugar, acontecimiento, organización o relación, la aplicación crea y verifica un snapshot del proyecto. Si falla, la operación se cancela.
- Se comprueba que cada snapshot previo contiene el registro que después se elimina; así la prueba valida el contenido, no solo la existencia del snapshot.
- La copia 26 se rechaza cuando ya existen 25 snapshots, sin sobrescribir los anteriores. Una operación de borrado real también se bloquea al alcanzar el límite.
- El diálogo de borrado de universo explica que todas sus copias de seguridad también se eliminan y que no existe recuperación posterior; la prueba verifica que el ID objetivo y sus snapshots se eliminan, mientras los proyectos vecinos y el proyecto activo sobreviven.
- **PASS_REAL:** [Chromium CI #38008260869](https://github.com/jonhararagi/wordwaifu/actions/runs/38008260869), Chromium smoke completo sin errores de página.
- **PASS_STATIC:** 18 pruebas de esquema, sintaxis y estructura del proyecto.
- **NOT_RUN:** prueba manual visual/usabilidad en Windows 11.

### WF-004-C.3 — PARTIAL · Papelera y recuperación de universos completos
- IndexedDB v2→v3, store `trash`, envío reversible por ID, restauración con snapshots y borrado permanente separado.
- El guardado está endurecido contra resurrección accidental: `write(project)` lee el tombstone dentro de la transacción, y `saveActive(project)` valida la papelera antes de modificar el respaldo local.
- Chromium verifica migración, protección del activo, restauración/conflicto de ID, conservación de snapshots, rollback, UI y supervivencia de un respaldo ajeno al mover/borrar permanentemente otro universo.
- **PASS_REAL CI:** [#38022402137](https://github.com/jonhararagi/wordwaifu/actions/runs/38022402137), código probado `327360caa66875becbd11e5563fc2988196553a4`; 18 pruebas de esquema, Chromium y validador estructural en verde.
- Siguen pendientes una prueba dedicada de nombres idénticos, cuota realmente agotada y revisión visual/manual en Windows 11.
- **TIMER siguiente tarea: 1–2 horas** para los gates restantes.
- Mantener `main` intacta y PR #1 en borrador hasta autorización expresa.


---

## Referencia vigente de `main` (c07ef226a61ad6e48b081890f1e3d96eecb585b5)

Se conserva íntegro el documento actual de `docs/ROADMAP.md` en `main` como referencia de visión de producto y gates de calidad, sin sustituir el contrato de papelera ni los detalles de la enciclopedia.

# WordWaifu · Hoja de ruta maestra

> Documento vivo. Las etapas describen el plan, no funcionalidades ya entregadas.

## TIMER de planificación

- Auditoría inicial y definición de alcance: **2–4 horas**.
- Primer prototipo útil, una vez confirmado el objetivo: **1–3 días**.
- MVP con persistencia, práctica y pruebas: **1–3 semanas**, según alcance y recursos.
- Calidad de producto, contenido amplio, accesibilidad y publicación: **varias semanas o más**.
- Estimaciones preliminares. Se recalculan tras inspeccionar el repositorio y elegir la plataforma.

## Fase 0 · Verdad del repositorio

**Objetivo:** saber qué existe antes de diseñar sobre suposiciones.

- [ ] Registrar HEAD, rama predeterminada, árbol de archivos y workflows.
- [ ] Detectar código, dependencias, licencias, secretos accidentales y archivos generados.
- [ ] Ejecutar solo comprobaciones compatibles con el estado real del proyecto.
- [ ] Confirmar el objetivo principal de WordWaifu, idiomas, plataforma inicial y modo de uso.
- [ ] Registrar decisiones y bloqueos en documentación.

**Salida:** inventario verificable, alcance mínimo acordado y ninguna afirmación de implementación sin evidencia.

## Fase 1 · Diseño del producto

- [ ] Definir usuario principal y caso de uso.
- [ ] Diseñar el bucle central: aprender → recuperar de memoria → recibir corrección → repasar → ver progreso.
- [ ] Definir si los personajes son acompañantes cosméticos, narrativos o parte de la progresión.
- [ ] Diseñar estados vacíos, carga, error, falta de conexión y accesibilidad.
- [ ] Elegir métricas de aprendizaje útiles sin manipular al usuario con presión artificial.

**Puerta de calidad:** una especificación breve con criterios de aceptación comprobables.

## Fase 2 · MVP funcional

El alcance final depende de la auditoría y de la plataforma elegida. Si se confirma la hipótesis de aprendizaje de vocabulario, el candidato inicial es:

- [ ] Una sesión de práctica completa, desde elegir contenido hasta recibir resultado.
- [ ] Preguntas con respuesta y explicación verificables.
- [ ] Progreso persistente con recuperación tras cerrar y abrir la aplicación.
- [ ] Revisión de palabras falladas y repetición espaciada sencilla.
- [ ] Interfaz adaptable a móvil y escritorio.
- [ ] Contenido de demostración original con procedencia documentada.
- [ ] Pruebas de la lógica de aprendizaje y de persistencia.

**No incluir todavía:** monetización, sistemas sociales, tienda compleja, IA costosa ni cuentas remotas hasta demostrar que el bucle principal funciona y aporta valor.

## Fase 3 · Calidad de producto

- [ ] Pruebas unitarias de reglas y cálculos.
- [ ] Pruebas de integración para guardado, recuperación y flujos críticos.
- [ ] Comprobación manual o automatizada en tamaños de pantalla representativos.
- [ ] Accesibilidad: teclado, contraste, etiquetas, foco y movimiento reducido.
- [ ] Rendimiento, manejo de errores, recuperación y exportación/borrado de datos si corresponde.
- [ ] CI reproducible con resultados visibles.
- [ ] Instrucciones de instalación y diagnóstico para una persona nueva.

## Fase 4 · Contenido y personalidad visual

- [ ] Definir una guía visual original y consistente.
- [ ] Mantener manifiesto de recursos: archivo, autor, URL de origen, licencia, atribución y uso autorizado.
- [ ] Separar prototipos de referencia de los recursos autorizados para distribución.
- [ ] Crear contenido pedagógico revisado, con respuestas válidas y explicaciones.
- [ ] Evitar depender de servicios externos sin alternativa o aviso claro al usuario.

## Fase 5 · Preparación de publicación

- [ ] Confirmar plataforma y requisitos de publicación.
- [ ] Revisar licencias, privacidad, seguridad, accesibilidad y dependencias.
- [ ] Probar instalación limpia y actualización.
- [ ] Documentar límites conocidos y procedimiento de recuperación.
- [ ] No anunciar lanzamiento hasta completar pruebas y revisión de recursos.

## Política de licencias y recursos externos

El carácter no comercial no concede automáticamente permiso para copiar o redistribuir software, ilustraciones, fuentes, voces, datasets, textos o personajes. Cada recurso externo debe clasificarse antes de integrarlo:

- **APTO:** licencia y atribución compatibles con el uso previsto, documentadas.
- **SOLO REFERENCIA:** se puede estudiar, pero no copiar al producto.
- **REVISIÓN NECESARIA:** términos ambiguos o permiso no confirmado; no distribuir.
- **EXCLUIDO:** licencia incompatible o prohibición clara.

Si un recurso de evaluación no puede permanecer en la entrega, debe estar aislado, identificado y retirarse antes de publicar. No se deben introducir materiales dudosos con la intención de resolverlo al final si eso implica distribuirlos.

## Protocolo de ejecución

1. **INSPECT:** leer las instrucciones y el estado actual; verificar HEAD.
2. **PLAN:** definir una sola tarea activa, archivos objetivo y criterios de aceptación.
3. **EXECUTE:** cambios acotados y reversibles.
4. **VERIFY:** ejecutar pruebas reales cuando sea posible; registrar exactamente lo no ejecutado.
5. **PERSIST:** guardar cambios y documentación en Git.
6. **REPORT:** HEAD antes/después, commit, archivos, pruebas, evidencias y bloqueos.

Estados de evidencia: `PASS_REAL`, `PASS_STATIC`, `FAIL_REAL`, `NOT_RUN`, `UNKNOWN`, `PARTIAL`, `NOT_READY`.

## Decisiones pendientes del propietario

1. ¿WordWaifu es principalmente una app para **aprender vocabulario**, un juego de palabras, un diccionario con personajes, o algo distinto?
2. ¿Cuál es la primera plataforma prioritaria: web, Windows o Android?
3. ¿Qué idioma se aprende primero y cuál es el idioma de la interfaz?

Resolver estas decisiones evita construir una arquitectura bonita para el producto equivocado.

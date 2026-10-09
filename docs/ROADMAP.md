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
- Exportar/importar JSON con validación.
- Búsqueda y referencias por IDs estables.
- Copias de seguridad.

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

La especificación completa de estas capacidades está en [MASTER_VISION.md](MASTER_VISION.md). El gate básico del atlas está verificado en Chromium CI. La siguiente subtarea activa es WF-004-A.3, resiliencia integrada de escrituras y recuperación.

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

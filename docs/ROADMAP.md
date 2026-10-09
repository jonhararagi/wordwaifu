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
- [ ] CRUD de personajes, organizaciones y eventos.
- IndexedDB con repositorio desacoplado.
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

La especificación completa de estas capacidades está en [MASTER_VISION.md](MASTER_VISION.md). El gate básico del atlas está verificado en Chromium CI. La siguiente tarea activa es WF-002-A, CRUD de fichas de personaje con referencias seguras.

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
- Borrado confirma impacto, reasigna ubicaciones hijas y elimina solo referencias al lugar borrado en historiales/eventos.
- CI PASS_REAL: [ejecución #37922783841](https://github.com/jonhararagi/wordwaifu/actions/runs/37922783841). Incluye Chromium, persistencia, round-trip de export/import y ausencia de errores de página.
- Referencia técnica contrastada: [DeckSketchCanvas.tsx](https://github.com/SamuelGoldsmith/deck-doctors/blob/ba1c6c52ce17a7c3a822064e40352dc94b21066f/components/deck-estimate/DeckSketchCanvas.tsx), sólo para aprender del mapeo de coordenadas SVG y sus límites; la implementación WordWaifu es propia.
- Pendiente fuera del gate CI: prueba manual en Windows 11.
- Siguiente tarea: WF-002-A, CRUD seguro de personajes. TIMER: 2–4 horas iniciales.

Al cerrar cada tarea, sobrescribir `docs/DONE.md` con el punto de continuidad vigente.

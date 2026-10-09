DONE

# WordWaifu · Punto de continuidad

**Tarea cerrada:** WF-003-A · Modelo canónico, migración compatible y CRUD básico de relaciones entre personajes.
**Estado:** creada la vista de relaciones, con edición, validación, persistencia local y eliminación segura. El ciclo completo pasó en Chromium y el esquema cuenta con 18 pruebas.
**Fecha:** 2026-10-09.

## Estado de Git
- Repositorio: `jonhararagi/wordwaifu`.
- Rama de trabajo: `foundation/story-foundry-north-star`.
- HEAD BEFORE de WF-003-A: `2dbca663a1a6396f232c0eb5b7ec7bee1a04b069`.
- HEAD de código validado: `66002e539eef47103dfde50c91461153eace80dd`.
- CI de código y pruebas: **PASS**, [ejecución #37951860214](https://github.com/jonhararagi/wordwaifu/actions/runs/37951860214).
- PR #1: [abierto y en borrador](https://github.com/jonhararagi/wordwaifu/pull/1); no fusionado ni marcado listo.
- `main` permanece intacta en `15a9e0677bf27596dfaef97b5b7d7dfd1569eb98`.
- Este cierre documental creará un HEAD posterior al SHA de código probado. En la próxima sesión consultar el HEAD vivo, no asumir que `66002e539eef47103dfde50c91461153eace80dd` sigue siendo la punta de la rama.

## Trabajo implementado
- Añadido `relationships[]` como colección canónica de relaciones del proyecto, sin cambiar `schemaVersion: 1`.
- Migración de proyectos anteriores: cuando falta la colección nueva, las listas de IDs de `characters[].relationships` se convierten en registros canónicos. Los vínculos recíprocos se colapsan en una sola relación estable por par de personajes.
- La colección canónica conserva el ID, una etiqueta/nombre breve, los IDs de ambos personajes, tipo de relación, descripción y estado de canon.
- Nueva vista de navegación «Relaciones» para buscar, seleccionar, consultar detalle, crear, editar y borrar relaciones.
- Tipos disponibles: amistad, romance, familiar, rivalidad, mentoría, alianza, enemistad y otro.
- El formulario selecciona personajes ya registrados. Rechaza auto-relaciones y duplicados accidentales del mismo par/tipo; permite tipos distintos entre los mismos dos personajes.
- Editar conserva el ID de relación. Borrar exige confirmación y elimina solo el vínculo; los dos personajes permanecen.
- `characters[].relationships` se mantiene como proyección recíproca de compatibilidad para las pantallas y datos antiguos, no como fuente de verdad paralela.
- Borrar un personaje limpia los registros canónicos que lo referencian y reconstruye la proyección heredada, evitando referencias colgantes.
- Añadidas pruebas unitarias para migración, integridad de endpoints, auto-relaciones, pares/tipos duplicados e IDs globales; pruebas Chromium de crear, duplicar, editar, recargar, borrar y exportar/importar.

## Evidencia
- **PASS_REAL:** [CI #37951860214](https://github.com/jonhararagi/wordwaifu/actions/runs/37951860214), completada con éxito.
- **PASS_STATIC:** 18 pruebas de esquema aprobadas, incluidas cinco pruebas nuevas/actualizadas de relaciones.
- **PASS_REAL:** Chromium verifica que se crea el registro canónico, se actualiza la proyección en ambos personajes, se bloquean duplicados por par/tipo, se mantiene el ID al editar, la edición sobrevive a una recarga y el borrado conserva ambos personajes y otras relaciones.
- **PASS_REAL:** exportación/importación conserva el grafo de relaciones; Chromium termina sin errores de página.
- **FAIL_REAL durante desarrollo, corregido:** los primeros fixtures no declaraban un vínculo en la colección canónica o suponían IDs no presentes tras una importación. Se corrigió el fixture y la última CI pasó.
- **NOT_RUN:** validación visual/manual en la PC Windows 11 del usuario.

## Progreso global
**Estimación: 14%** de la visión completa. Porcentaje subjetivo ponderado por alcance, no por líneas de código ni cobertura. Ya hay CRUD básico probado para ubicaciones, personajes, acontecimientos, organizaciones y relaciones. Persisten pendientes IndexedDB, repositorio desacoplado, respaldos, relaciones temporales/atributos narrativos avanzados, cronología histórica avanzada, generadores, Novel Studio, Content Guard e integración con BotImagen.

## Siguiente tarea activa
**WF-004-A — Repositorio de persistencia e introducción gradual de IndexedDB con migración compatible desde localStorage.**

**TIMER inicial: 4–6 horas**, recalcular tras inspeccionar el contrato de guardado y los navegadores objetivo.

### Criterios de aceptación
1. Inspeccionar todos los puntos de lectura/escritura de `wordwaifu.project.v1`; no romper importación/exportación ni los proyectos guardados actuales.
2. Añadir una capa de repositorio que separe el estado narrativo de la API del almacenamiento.
3. Migrar datos existentes a IndexedDB sin perder relaciones ni referencias; definir fallback explícito si IndexedDB no está disponible.
4. No borrar la copia anterior hasta verificar que la escritura y lectura del proyecto migrado son válidas.
5. Probar creación/edición, recarga real de Chromium, importación/exportación, fallo de almacenamiento y proyecto vacío.
6. CI PASS y actualización de `docs/DONE.md`, `docs/STATUS.md`, `docs/ROADMAP.md`, `docs/WORK_PROTOCOL.md` y `docs/DATA_MODEL.md`.
7. Mantener la prueba visual/manual de Windows como `NOT_RUN` hasta realizarla. No tocar ni fusionar `main`.

### Antes de empezar
Leer `docs/DONE.md`, `docs/STATUS.md`, `docs/WORK_PROTOCOL.md`, `docs/MASTER_VISION.md`, `docs/DATA_MODEL.md` y `docs/TECHNICAL_RESEARCH.md`. Verificar HEAD/PR/CI, revisar `src/app.js`, `src/project-schema.js` y `tests/browser_smoke.cjs`, e inventariar todas las llamadas a `localStorage`.

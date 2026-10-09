# Estado del proyecto

## Último estado documentado

- Producto: WordWaifu — World & Story Foundry.
- Objetivo: aplicación local multiuniverso con índice maestro, atlas 2D temporal, fichas y relaciones enlazadas, generadores de historias/lore, planificación de novelas y auditoría de continuidad.
- Rama de trabajo: foundation/story-foundry-north-star.
- HEAD de código/prototipo inspeccionado antes de esta consolidación documental: 837f8732df34e54a7a525167086e7699a837c06d.
- Rama main inspeccionada antes de esta consolidación: 15a9e0677bf27596dfaef97b5b7d7dfd1569eb98. Esta actualización se realiza en la rama de trabajo, no en main.
- PR de fundación: https://github.com/jonhararagi/wordwaifu/pull/1, abierto en borrador al momento de la inspección.
- Se añadió la visión maestra y se sincronizaron los documentos de visión, decisiones, hoja de ruta y protocolo. La implementación descrita en los planes sigue siendo futura salvo donde se indique expresamente.
- El prototipo existente usa HTML/CSS/JavaScript, SVG esquemático, marcadores y paneles, filtro temporal, búsqueda, capas, comandos locales e importación/exportación JSON.
- Persistencia actual del prototipo: localStorage. IndexedDB/repositorio desacoplado sigue pendiente.
- Dirección tecnológica futura: migración gradual a TypeScript + React + Vite después de verificar y estabilizar el prototipo; no se ha realizado aún.
- IA/API: no requeridas por diseño. Los adaptadores de IA serán opcionales.
- Datos demo: universo de fantasía original, no una copia de una franquicia.

## Documentos fundacionales y continuidad

- README.md
- docs/MASTER_VISION.md — visión consolidada, límites entre WordWaifu/BotImagen, módulos, tecnología, contenido y protocolo de trabajo.
- docs/PRODUCT_VISION.md
- docs/ARCHITECTURE.md
- docs/DATA_MODEL.md
- docs/INTERACTIVE_ATLAS.md
- docs/OFFLINE_FIRST.md
- docs/ROADMAP.md
- docs/DECISIONS.md
- docs/WORK_PROTOCOL.md
- index.html
- src/styles.css
- src/app.js

## Próxima tarea activa

**WF-001 — Verificación y estabilización del Atlas MVP**

TIMER estimado: 2–4 horas para la primera ronda de verificación/correcciones, sujeto a los problemas que revele una prueba real.

1. Revisar HEAD actual, la rama, el PR y los archivos afectados antes de modificar.
2. Ejecutar el prototipo en navegador real cuando el entorno disponible lo permita.
3. Corregir errores observados de consola, accesibilidad, estado vacío y persistencia.
4. Verificar selección de lugar, fichas, selector temporal, filtros, creación de entidades y exportación/importación.
5. Registrar pruebas y límites con etiquetas de evidencia; no declarar PASS_REAL si no hubo ejecución real.
6. Mantener el alcance dentro de la estabilización del atlas y su canon compartido. No iniciar aún el generador de historias, la biblioteca visual masiva ni Content Guard.

## Evidencia actual

- PASS_STATIC: los cambios iniciales de sintaxis y estructura fueron validados por CI en ejecuciones anteriores del prototipo.
- NOT_RUN / PARTIAL: prueba funcional completa en navegador real todavía no registrada.
- NOT_RUN: persistencia robusta con IndexedDB, pruebas de importación/exportación adversarial, atlas histórico completo, red de relaciones, multiuniverso, generador narrativo y Content Guard.
- La documentación consolidada describe decisiones aprobadas y objetivos futuros, pero no convierte esas funciones pendientes en características implementadas.

## Continuidad

Al reanudar, leer este archivo, docs/WORK_PROTOCOL.md y docs/MASTER_VISION.md; inspeccionar la rama y el HEAD actuales y continuar WF-001. El orden de prioridades y los gates están en docs/ROADMAP.md.
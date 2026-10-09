# Estado del proyecto

## Último estado documentado

- Producto: WordWaifu — World & Story Foundry.
- Objetivo: atlas interactivo + canon narrativo + herramientas de planificación, offline-first.
- Rama de fundación: foundation/story-foundry-north-star.
- Estado de esta rama: documentación fundacional y prototipo inicial añadidos; requiere revisión y pruebas de ejecución.
- Rama principal: no se ha modificado en esta etapa.
- IA/API: no requerida por diseño.
- Persistencia prototipo: localStorage para la demo; IndexedDB/repositorio desacoplado sigue pendiente.
- Datos demo: universo de fantasía original, marcado como demostración.

## Archivos fundacionales

- README.md
- docs/PRODUCT_VISION.md
- docs/ARCHITECTURE.md
- docs/DATA_MODEL.md
- docs/INTERACTIVE_ATLAS.md
- docs/OFFLINE_FIRST.md
- docs/ROADMAP.md
- docs/DECISIONS.md
- index.html
- src/styles.css
- src/app.js

## Próximo trabajo recomendado

**WF-001 — Verificación y estabilización del Atlas MVP**

1. Revisar el estado de la rama y los archivos actuales antes de modificar.
2. Ejecutar una prueba real en navegador.
3. Corregir errores de consola, accesibilidad, estado vacío y persistencia.
4. Verificar selección de lugar, ficha de personaje, selector temporal, filtros, creación de entidades y exportación/importación.
5. Registrar pruebas y límites sin declarar PASS_REAL si no hubo ejecución real.
6. Mantener el alcance en el atlas y su canon compartido; no iniciar todavía un generador de novela separado.

## Evidencia actual

- Documentación y código fueron escritos en la rama de fundación.
- No se ha registrado aún una prueba de navegador real.
- Estado honesto del prototipo: PARTIAL / NOT_RUN para validación de ejecución.

# Rescate selectivo: catálogo de poderes y explorador de universos

## Base de integración

- Rama histórica inspeccionada: `work/connected-lore-power-catalog-2026-10`.
- La rama histórica estaba divergida respecto de `main`; no se fusiona su historial ni su aplicación completa.
- El punto de partida de esta integración es el `main` vigente al abrir la rama de trabajo: `b8b30b3433a4b444aa7ba37b20a0089dceef84da`.

## Catálogo de poderes

`src/power-catalog.js` y `src/power-workbench.js` ya estaban en `main` y sus contenidos coincidían con los de la rama histórica. No se duplican ni se reemplazan. Se conserva la validación existente `tests/test_power_catalog.cjs`.

## Rescate del explorador

Se portan como módulos independientes:

- `src/code-geass-lore.js`: fichas y relaciones de Code Geass, con continuidad y atribución de fuente.
- `src/universe-graph.js`: grafo que combina DanMachi con el registro oficial y los expedientes actuales, y Code Geass con el corpus anterior.
- `src/universe-explorer.js`: búsqueda, filtros de universo/tipo/continuidad, fichas, relaciones, fuentes y navegación atrás/inicio.

El registro de DanMachi se consume desde los archivos actuales de `main`; no se reemplaza el roster ni los dossiers. La cobertura de ambas franquicias sigue siendo parcial y debe presentarse como tal. El módulo histórico `additional-franchise-lore.js` queda fuera de este port: la interfaz original no lo consumía y se requiere una integración de universo/fuentes propia antes de activarlo.

## Seguridad del asistente local

Los comandos `listar personajes` y `listar lugares` convierten cada registro dinámico a texto HTML escapado antes de insertar los separadores `<br>` controlados por la aplicación. Se añade una regresión de navegador que carga valores hostiles mediante el respaldo local e inspecciona que no se creen nodos ejecutables.

## Límites de validación

Los módulos se entregan para CI en esta rama/PR. No se considera PASS hasta que terminen la validación estática, las pruebas de grafo y Chromium. Esta integración no modifica almacenamiento, import/export, datos de proyectos ni los editores existentes.

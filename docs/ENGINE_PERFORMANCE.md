# Motor de WordWaifu: contrato de rendimiento local

Corte: 2026-10-14. Este documento describe el comportamiento que el código debe conservar; no es una promesa de FPS o uso de memoria medidos en todas las PC.

## Modelo de ejecución

WordWaifu es una aplicación web local orientada a eventos, no un motor 3D con un bucle de juego permanente.

- El atlas usa SVG y se actualiza al navegar, seleccionar, filtrar o mover un marcador. No usa Canvas, WebGL ni una simulación por fotograma.
- Auditoría estática de los módulos JavaScript de `src/`: no se encontraron llamadas a `setInterval`, `requestAnimationFrame` ni creación de `Worker`. Los `setTimeout` de la aplicación son acotados a operaciones puntuales; no son un bucle de renderizado.
- La enciclopedia carga el corpus una vez por sesión de interfaz y conserva la promesa/índice para no volver a descargar y parsear los mismos documentos en cada búsqueda.
- Las afirmaciones tienen texto normalizado de búsqueda calculado durante la construcción del índice, y el índice conserva un mapa de personajes para evitar reconstruirlo en cada consulta.
- El corpus agrupa afirmaciones por personaje durante la carga. La vista de personajes usa ese índice inverso en lugar de filtrar todas las afirmaciones por cada ficha y por cada tecla.
- Las tarjetas largas de la enciclopedia usan `content-visibility: auto` con un tamaño intrínseco para que el navegador pueda aplazar el pintado de tarjetas fuera de pantalla.
- El CSS respeta `prefers-reduced-motion`; no hay animaciones infinitas definidas por la aplicación.

## Reglas para no gastar recursos en reposo

1. No introducir un `setInterval`, un `requestAnimationFrame` recursivo ni sondeo de red para mantener la interfaz “viva”.
2. El trabajo pesado debe ocurrir tras una acción explícita (buscar, cambiar vista, editar, importar), con resultados cacheados cuando los datos no cambien.
3. No crear ni mantener un Canvas/WebGL oculto solo para efectos decorativos. El atlas debe seguir siendo SVG estático y orientado a eventos mientras no haya una necesidad medida que justifique otra tecnología.
4. Limitar el DOM visible en catálogos grandes; preferir búsqueda, filtros, paginación o renderizado por lotes antes que cientos o miles de tarjetas simultáneas.
5. Cualquier optimización debe conservar continuidad, niveles de spoiler, fuentes y orden determinista de resultados.
6. No afirmar que el consumo es “cero”: el navegador, las fuentes, las imágenes visibles y el sistema operativo siguen teniendo un coste. La aceptación debe basarse en mediciones reproducibles en un equipo de referencia.

## Validaciones

- `tests/test_character_archive.cjs` verifica que el índice inverso por personaje contiene exactamente las mismas afirmaciones que el recorrido completo de referencia.
- Los workflows `Validate WordWaifu` y `DanMachi Lore and Retrieval Integrity` deben pasar sobre el mismo SHA después de cambios al motor o a la recuperación.
- Antes de optimizar más, medir por separado: tiempo de carga del corpus, duración de búsqueda, número de nodos creados al renderizar y uso de CPU durante 60 segundos sin interacción. No se deben inventar cifras si esa medición no se ejecutó.

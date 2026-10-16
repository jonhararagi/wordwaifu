# Modelo de ubicaciones DanMachi — TLM-003

## Presentación espacial

La cronología carga un registro de lugares desde locations en eras-and-events.json y lo valida contra catalog.json. La vista es un esquema de relaciones: no contiene coordenadas ni escala, y la posición visual de las tarjetas no representa orientación, distancia, calles, rutas, barrios o topología de la obra. El mapa SVG de src/app.js no se modifica y no consume estas entidades.

## Entidad de lugar

Cada entrada del registro locations contiene id, type: location, name, recordPath, verificationStatus, spatialPrecision, description, sourceUrls y relaciones opcionales. Los IDs, rutas y tipos deben coincidir con una ficha del catálogo y un archivo Markdown existente. Las relaciones entre lugares incluyen IDs de destino, tipo de vínculo y fuentes. Coordenadas reales no forman parte de este modelo.

## Referencias espaciales por acontecimiento

Cada evento tiene locationAssessment con status verified, provisional o unknown; spatialPrecision; reason y una lista locationRefs.

Cada referencia de locationRefs incluye:
- locationId: ID estable de una ficha registrada.
- relationship: event_place (lugar del evento), broad_setting (escenario amplio) o related_context (contexto relacionado; no afirma que el hecho ocurra allí).
- verificationStatus: verified o provisional, separado de temporalidad y evidencia del acontecimiento.
- spatialPrecision: city_level, dungeon_general o floor_context.
- context y sourceUrls para explicar el alcance y conservar trazabilidad.

Un evento unknown no puede tener refs y debe tener reason. Se muestra separado en la UI. Los vínculos provisionales se presentan como candidatos, no como ubicaciones verificadas. Las fichas se conectan por ID, nunca por nombre visible.

## Lugares

LOC-ORARIO es una ficha nueva respaldada por DMR-012-SRC-001, página editorial oficial de GA文庫/SB Creative para la novela principal, volumen 1: https://ga.sbcr.jp/product/9784797372809/. La sinopsis respalda la identidad urbana de Orario y su relación general con el Dungeon, pero no un mapa de ciudad.

LOC-DUNGEON es una ficha existente reutilizada. La misma referencia editorial respalda la relación general Dungeon/Orario; la sinopsis Yen Press volumen 14 https://yenpress.com/titles/9781975385019-is-it-wrong-to-try-to-pick-up-girls-in-a-dungeon-vol-14-light-novel respalda el contexto general de Bell/Ryu dentro del Dungeon profundo, no la topología de pisos.

DM-WORLD-001 permanece como escenario narrativo y DM-GUILD-001 como entidad institucional; no se convierten en lugares geográficos por inferencia.

## Navegación y filtros

Las tarjetas de acontecimiento enlazan con los lugares enumerados en locationRefs. El detalle de lugar enumera acontecimientos visibles según la misma búsqueda, era y continuidad; los botones de retorno permiten volver al evento de origen o al lugar sin reiniciar esos filtros. El estado de navegación es local al panel y no se persiste en project.locations.

## Verificación

El validador comprueba IDs duplicados o inexistentes, tipos de entidad, rutas de fichas, referencias, tipos de relación, estado/precisión espacial, fuentes HTTPS asociadas y la prohibición de coordenadas en una vista no geográfica. El checker de catálogo comprueba la ficha y ruta física correspondientes. Las pruebas generadas para hipótesis temporales mantienen una localización UNKNOWN, por lo que no crean un hecho geográfico accidental.

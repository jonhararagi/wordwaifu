# Auditoría de finalización de WordWaifu

**Fecha:** 2026-10-18  
**Base revisada:** `main`; capa de grafo explícito y correcciones de referencias en `7784ba89cf5881ace541ec8de219cfb15051f3fd`. La optimización lineal de Story Forge sigue en `d51990d5a54b70f2a161ec41acba15b59684bb1b`.

## Dictamen

WordWaifu tiene un núcleo funcional y automatizado, pero no está completo respecto de la visión maestra. **No se certifica todavía un 90% global**, porque la visión combina funciones técnicas, cobertura factual y pruebas manuales sin que existiera un denominador único y vigente. Contar archivos, fichas, líneas de código o tests como porcentajes equivalentes sería engañoso. Esta matriz separa evidencia funcional de objetivos parciales.

## Áreas y estado

| Área | Estado | Evidencia / limitación |
|---|---|---|
| Aplicación local offline-first | Implementada | HTML/CSS/JS, demo, atlas y módulos locales. El núcleo no exige API de IA. |
| Datos del proyecto | Implementada con gates pendientes | CRUD de personajes, lugares, eventos, organizaciones y relaciones; IndexedDB con respaldo local; import/export validado; snapshots y papelera con recuperación. CI cubre las rutas de regresión principales. |
| Atlas y búsqueda | Implementados, temporalidad parcial | Búsqueda y apertura contextual por identidad estable, marcadores, filtros y optimización de render. Falta demostrar una línea temporal arbitraria de presencias/rutas sin duplicar entidades. |
| Archivo de personajes / continuidades | Funcional, contenido parcial | Las etiquetas de continuidad están separadas y el archivo enlaza perfiles, hitos, claims y fuentes. No se da por completa una biografía cuyo localizador primario no se haya encontrado. |
| Catálogo mitológico | Funcional, expansión editorial pendiente | Datos y editor locales existen; pruebas verifican IDs, referencias, variedad de registros y representación de tradiciones americanas. Debe seguir registrando variantes, procedencia y adaptaciones como categorías distintas. |
| Poderes y habilidades | Funcional parcial | Hay catálogos y generador de propuestas con activación, precio, límites, evolución y consecuencias. Falta relacionar todos esos datos con escenas, portadores, pactos y consecuencias en el grafo canónico. |
| Story Forge | Implementado para esquema; selección de fase optimizada | Genera 1–500 capítulos en seis tramos, con finales alternativos, uso de campos de historia, protección de manuscritos y auditoría. La selección de fase/beat usa una pasada lineal. El runner CI midió medianas de 0,81/1,61/2,20 ms a 100/250/500 capítulos; son mediciones de Node en CI, no un benchmark de navegador. No genera por sí solo prosa literaria final. |
| Asistencia editorial | Implementada en modo manual | La microventana prepara prompts y permite copiar/abrir proveedor tras consentimiento. No automatiza la web externa ni envía la escritura automáticamente; el usuario revisa y pega resultados manualmente. |
| Continuity Guard | Parcial | Hay validaciones estructurales y separación temporal/por medio, pero no un ejecutor global que detecte todos los conflictos causales entre personajes, poderes, eventos y escenas. |
| Navegación interna de expedientes | Entregada parcialmente y probada | El smoke test cubre catálogo → Familia Astrea → arista explícita con continuidad/evidencia → claim fuente → atrás/adelante → perfil → fuentes → índice. Hay 20 aristas iniciales en `catalog.relationships`; sigue pendiente cubrir otras familias y cerrar el camino completo hasta cronología/evento. Las coincidencias por etiquetas continúan separadas como sugerencias. |
| DanMachi factual | En investigación; no completo | `catalog.json` contiene 48 registros, 67 IDs reservados, 100 documentos de apoyo y 20 aristas de relaciones para Astrea. Los 48 registros usan estados `draft`, `pending_verification`, `provisional`, `proposed_author_event`, `provisional_inference`, `provisional_reference_checked` o `source_checked_partial`; ninguno se marca como verificación completa. Cinco IDs de claims repetidos entre los lotes DMR-006 y DMR-012 se renumeraron, y el validador ahora detecta colisiones entre claims de `research/inbox/`. |
| Seguridad Markdown del visor | Prueba adversarial automatizada añadida | El smoke test sirve Markdown con `<script>`, enlaces `javascript:`/`data:` y enlace relativo fuera del corpus; comprueba que no se ejecute ni se convierta en navegación. Aún se recomienda auditoría de seguridad más amplia. |
| Cuota real / revisión humana | No verificados | Un error simulado de almacenamiento no prueba agotamiento real del navegador. La inspección visual manual en Windows 11 no se puede inferir a partir de Chromium headless. |
| Arquitectura futura | No es gate cerrado | TypeScript/React/Vite, Tauri/SQLite, mapa de gran escala y adaptadores opcionales son objetivos posteriores; no deben tratarse como si ya se hubieran entregado. |

## Evidencia de ejecución

- [Validate WordWaifu #39115277616](https://github.com/jonhararagi/wordwaifu/actions/runs/39115277616) — `success`, SHA `7784ba89cf5881ace541ec8de219cfb15051f3fd`; incluye test de navegador para abrir el claim de una relación explícita.\n- [DanMachi Lore and Retrieval Integrity #39115277539](https://github.com/jonhararagi/wordwaifu/actions/runs/39115277539) — `success`, mismo SHA; valida los 20 extremos y claims de la capa relacional.
- [Validate WordWaifu #39105158830](https://github.com/jonhararagi/wordwaifu/actions/runs/39105158830) — `success`, SHA con el motor Story Forge conectado `7860b5151999c92d7cd0233af68eaa26b40dba5d`.
- [DanMachi Lore and Retrieval Integrity #39108041733](https://github.com/jonhararagi/wordwaifu/actions/runs/39108041733) — `success`, mismo SHA; incluye validación de catálogo y navegación contextual.
- [DanMachi Lore and Retrieval Integrity #39105185544](https://github.com/jonhararagi/wordwaifu/actions/runs/39105185544) — `success`, SHA `095bc68a61e67e7813b307e0ec025309fc8d889f`.
- [Microventana narrativa, ya en main](https://github.com/jonhararagi/wordwaifu/commit/3710ef4c511006c771437ede39bd97e215b32f0f).
- [Story Forge conectado a la aplicación](https://github.com/jonhararagi/wordwaifu/commit/812007f22078e1e1affeec153819c17de8ef5acb).

Estos resultados acreditan las tareas que ejecutó cada workflow en su SHA; no se extrapolan a pruebas manuales o a exactitud factual de todas las fuentes de lore.

## Próximos gates de producto, por orden

1. **Extender navegación del canon:** ya hay 20 aristas explícitas para Astrea Familia con tipo, continuidad, periodo, evidencia y claim navegable. Ampliar a otras familias/personajes y cerrar miembro → Familia → deidad → acontecimiento → cronología, manteniendo la continuidad de adaptación separada de novela y pistas secundarias.
2. **Cobertura factual de DanMachi:** revisar cada registro y claim contra localizadores primarios; separar fuente oficial, wiki como pista, inferencia y AU; no promover estados sin evidencia.
3. **Canon temporal:** registrar presencias, afiliaciones y relaciones por evento/capítulo/época y probar los cambios sin duplicar identidades.
4. **Poderes, cartas, reliquias y elenco coral:** pasar de textos descriptivos a entidades relacionadas con portadores, pactos, escenas y consecuencias.
5. **Continuity Guard causal:** detectar enlaces rotos y conflictos de etapa/tiempo; explicar por qué se señala cada problema y permitir una resolución manual.
6. **Resistencia del almacenamiento y UX:** simular de forma explícita `QuotaExceededError` con rollback y mensaje claro; mantener separado ese test de la cuota real; realizar la revisión manual de Windows.

## Investigación técnica usada

- [GitHub Changelog — Node 20 ya no está disponible en GitHub Actions runners](https://github.blog/changelog/2026-09-23-node-20-is-no-longer-available-in-github-actions/).
- [GitHub Docs — uso seguro de Actions: fijar acciones a SHA completa](https://docs.github.com/en/actions/reference/security/secure-use).
- [MDN — IndexedDB: uso y transacciones](https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API/Using_IndexedDB).
- [MDN — evento `complete` de IDBTransaction](https://developer.mozilla.org/en-US/docs/Web/API/IDBTransaction/complete_event).
- [MDN — cuotas y criterios de expulsión del almacenamiento web](https://developer.mozilla.org/en-US/docs/Web/API/Storage_API/Storage_quotas_and_eviction_criteria).
- [web.dev — Optimize long tasks](https://web.dev/articles/optimize-long-tasks).
- [Mozilla Bugzilla #1282407 — revocar Blob URL demasiado pronto puede romper descargas](https://bugzilla.mozilla.org/show_bug.cgi?id=1282407).

El registro de aplicación de esos patrones y sus límites está en [`docs/TECHNICAL_RESEARCH.md`](TECHNICAL_RESEARCH.md).

### Seguridad del visor Markdown

El visor nuevo procesa Markdown como texto y nodos DOM, no ejecuta el contenido como HTML; convierte enlaces locales solo a documentos `.md` dentro del corpus, rechaza los protocolos `javascript:` y `data:`, y abre enlaces externos únicamente con HTTP(S), `noopener` y `noreferrer`. Las referencias relativas se resuelven con `URL()` antes de comprobar origen y ruta. El test actual verifica la navegación positiva; una suite adversarial dedicada a payloads maliciosos y traversal sigue siendo un gate a añadir.

### Métrica de CPU antes de agregar paralelismo

La selección de fase de Story Forge antes consultaba de nuevo todos los capítulos por cada posición. El arreglo asigna fases y beats con un contador por fase. Benchmark informativo en GitHub Actions (Node/Ubuntu, nueve ejecuciones por tamaño): 100 capítulos, mediana 0,81 ms; 250, 1,61 ms; 500, 2,20 ms. Este resultado es una medición del runner, no una garantía cross-device ni evidencia de consumo eléctrico. Al no aparecer una carga pesada en este benchmark, la decisión actual es mantener este generador en CPU/hilo principal y no pagar la complejidad de worker/GPU sin evidencia de bloqueo.

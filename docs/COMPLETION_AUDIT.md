# Auditoría de finalización de WordWaifu

**Fecha:** 2026-10-18  
**Base revisada:** `main`; navegación contextual y pruebas E2E incorporadas en `8ef2fb1bd731a677076f8d9271abe04bfbbe5a8c`.

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
| Story Forge | Implementado para esquema | Genera 1–500 capítulos en seis tramos, con finales alternativos, uso de campos de la historia, protección de manuscritos y auditoría. No genera por sí solo prosa literaria final ni un libro completo. |
| Asistencia editorial | Implementada en modo manual | La microventana prepara prompts y permite copiar/abrir proveedor tras consentimiento. No automatiza la web externa ni envía la escritura automáticamente; el usuario revisa y pega resultados manualmente. |
| Continuity Guard | Parcial | Hay validaciones estructurales y separación temporal/por medio, pero no un ejecutor global que detecte todos los conflictos causales entre personajes, poderes, eventos y escenas. |
| Navegación interna de expedientes | Entregada parcialmente y probada | El smoke test cubre catálogo → Familia Astrea → Ryu → atrás/adelante → ficha de continuidad → volver al expediente → fuentes → índice maestro. Faltan las aristas de relación explícita y el camino completo hasta la diosa/acontecimiento histórico. Los enlaces por etiquetas solo son sugerencias. |
| DanMachi factual | En investigación; no completo | `catalog.json` contiene 48 registros, 67 IDs reservados y 100 documentos. Los 48 registros usan estados `draft`, `pending_verification`, `provisional`, `proposed_author_event`, `provisional_inference`, `provisional_reference_checked` o `source_checked_partial`; ninguno se marca como verificación completa. |
| Cuota real / revisión humana | No verificados | Un error simulado de almacenamiento no prueba agotamiento real del navegador. La inspección visual manual en Windows 11 no se puede inferir a partir de Chromium headless. |
| Arquitectura futura | No es gate cerrado | TypeScript/React/Vite, Tauri/SQLite, mapa de gran escala y adaptadores opcionales son objetivos posteriores; no deben tratarse como si ya se hubieran entregado. |

## Evidencia de ejecución

- [Validate WordWaifu #39106222211](https://github.com/jonhararagi/wordwaifu/actions/runs/39106222211) — `success`, SHA `8ef2fb1bd731a677076f8d9271abe04bfbbe5a8c`; incluye la regresión de navegación contextual.
- [Validate WordWaifu #39105158830](https://github.com/jonhararagi/wordwaifu/actions/runs/39105158830) — `success`, SHA con el motor Story Forge conectado `7860b5151999c92d7cd0233af68eaa26b40dba5d`.
- [DanMachi Lore and Retrieval Integrity #39106222192](https://github.com/jonhararagi/wordwaifu/actions/runs/39106222192) — `success`, SHA `8ef2fb1bd731a677076f8d9271abe04bfbbe5a8c`.
- [DanMachi Lore and Retrieval Integrity #39105185544](https://github.com/jonhararagi/wordwaifu/actions/runs/39105185544) — `success`, SHA `095bc68a61e67e7813b307e0ec025309fc8d889f`.
- [Microventana narrativa, ya en main](https://github.com/jonhararagi/wordwaifu/commit/3710ef4c511006c771437ede39bd97e215b32f0f).
- [Story Forge conectado a la aplicación](https://github.com/jonhararagi/wordwaifu/commit/812007f22078e1e1affeec153819c17de8ef5acb).

Estos resultados acreditan las tareas que ejecutó cada workflow en su SHA; no se extrapolan a pruebas manuales o a exactitud factual de todas las fuentes de lore.

## Próximos gates de producto, por orden

1. **Terminar navegación del canon:** ya hay un visor contextual y prueba Familia Astrea → Ryu → atrás/adelante → ficha de continuidad → expediente → registro de fuentes → índice maestro. Falta que la arista relacional esté guardada como relación explícita con descripción/estado/tiempo/fuente y recorrer miembro → Familia → diosa → evento/cronología sin depender de etiquetas compartidas.
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

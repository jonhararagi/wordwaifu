# Registro de decisiones

## DEC-001 — Un único producto narrativo
**Estado:** Aprobada  
**Decisión:** WordWaifu tiene un objetivo único: organizar universos de ficción y ayudar a planificar historias y novelas. El atlas, las fichas, la cronología y los generadores son módulos del mismo producto.  
**Motivo:** Evitar que la visión se fragmente en proyectos independientes.

## DEC-002 — Offline-first y sin IA obligatoria
**Estado:** Aprobada  
**Decisión:** El núcleo funciona sin Internet, API ni modelo de IA. La IA, si alguna vez se incorpora, será opcional.  
**Motivo:** El usuario debe poder abrir, editar y conservar sus mundos con recursos modestos y sin costes de IA.

## DEC-003 — El atlas es la interfaz distintiva
**Estado:** Aprobada  
**Decisión:** El usuario navega del mundo a regiones, ciudades, distritos y edificios; cada ubicación conecta con personajes, organizaciones, eventos y capítulos.  
**Motivo:** La exploración espacial convierte una biblia narrativa en un universo consultable.

## DEC-004 — Canon único con presencia temporal
**Estado:** Aprobada  
**Decisión:** Los personajes y lugares tienen IDs estables. La ubicación de un personaje se registra mediante presencias temporales, no duplicando su ficha ni sobrescribiendo todo su pasado.  
**Motivo:** Poder responder quién estaba dónde en cada fecha o capítulo.

## DEC-005 — Los generadores proponen, el autor decide
**Estado:** Aprobada  
**Decisión:** La generación basada en reglas produce propuestas editables; no modifica silenciosamente el canon confirmado.  
**Motivo:** Evitar que la aleatoriedad destruya la continuidad.

## DEC-006 — Primero prototipo verificable
**Estado:** Aprobada  
**Decisión:** Construir y probar primero un atlas esquemático con fichas enlazadas y navegación temporal. Ampliar después el modelo de datos y los generadores.  
**Motivo:** Validar el núcleo antes de acumular funciones.

## DEC-007 — Datos portables y ejemplos originales
**Estado:** Aprobada  
**Decisión:** Los proyectos se podrán exportar e importar en formatos documentados. La demo usa un universo original, no una copia integrada de una franquicia protegida.  
**Motivo:** Portabilidad, control del usuario y respeto por los derechos de autor.

## DEC-008 — Dirección tecnológica web
**Estado:** Aprobada como dirección; migración pendiente.  
**Decisión:** La arquitectura objetivo de producción será TypeScript + React + Vite, con SVG para el atlas 2D inicial, IndexedDB detrás de un repositorio desacoplado y JSON para portabilidad. Tauri + SQLite queda como opción futura de escritorio.  
**Motivo:** Aprovechar el navegador para la interfaz interactiva y evitar acoplar el dominio a una tecnología de persistencia. Primero se verifica el prototipo HTML/CSS/JavaScript existente; la migración debe ser gradual.

## DEC-009 — Frontera entre WordWaifu y BotImagen
**Estado:** Aprobada.  
**Decisión:** WordWaifu administra universos, canon, atlas, relaciones, cronologías, historias y novelas. BotImagen administra diseño visual de personajes, prompts de imagen, referencias visuales, generación/selección de ilustraciones e importación/validación de assets. WordWaifu puede enlazar una imagen aprobada mediante ID, ruta y metadatos.  
**Motivo:** Evitar duplicar creadores visuales y mantener responsabilidades claras.

## DEC-010 — Índice maestro multiverso
**Estado:** Aprobada.  
**Decisión:** WordWaifu tendrá un índice maestro que admite múltiples universos independientes, incluidos universos originales y proyectos de referencia basados en obras existentes. Entidades de nombres iguales permanecen separadas por sus IDs y proyecto/universo. Las distintas pantallas serán vistas del mismo conjunto de registros.  
**Motivo:** Permitir una biblioteca amplia sin crear una aplicación independiente por cada anime o novela.

## DEC-011 — Atlas 2D con temporalidad y trayectorias
**Estado:** Aprobada.  
**Decisión:** El atlas 2D es preferido sobre un mundo 3D completo. Las épocas son configurables; las ubicaciones reutilizan identidad y registran estados/cambios temporales. Los mapas pueden mostrar rutas habituales (azul), encuentros/eventos puntuales (amarillo) y últimos registros/eventos críticos (rojo), con leyenda configurable. El rojo nunca implica por sí solo una muerte confirmada.  
**Motivo:** Facilitar investigación narrativa, continuidad, cameos y planificación de videojuegos con rendimiento moderado.

## DEC-012 — Fichas temporales, relaciones y fuentes
**Estado:** Aprobada.  
**Decisión:** Cada personaje tiene identidad estable y versiones/estados por época, tarjetas compactas y un expediente completo. Las relaciones pueden tener tipo, actitud, intensidad, dirección, vigencia temporal, eventos relacionados, fuente y estado de conocimiento.  
**Motivo:** Mostrar una ficha simple al navegar y preservar la complejidad cuando se consulta el índice completo.

## DEC-013 — Generador de historias y lore
**Estado:** Aprobada como objetivo de producto; implementación posterior.  
**Decisión:** El generador podrá construir perfiles de ADN narrativo a partir de categorías como género, tono, sistemas de poder, progresión, estrategia, misterio, conspiraciones, protagonista, elenco y recursos narrativos. Permitirá combinar principios generales de varias referencias y proponer sinopsis, protagonistas configurables, personajes secundarios, lore, arcos, capítulos y escenas. Los generadores deterministas no sustituirán una IA para todas las tareas literarias complejas; cualquier IA será opcional.  
**Motivo:** Transformar preferencias en estructuras narrativas originales y editables sin copiar tramas, personajes o diálogos protegidos.

## DEC-014 — Protagonistas y géneros configurables
**Estado:** Aprobada.  
**Decisión:** El sistema no asume protagonista masculino ni una orientación romántica específica. Debe permitir protagonistas femeninos, masculinos, múltiples o personalizables, y géneros/tonos tales como yuri/GL, BL, heterorromance, poliamor consensuado, ausencia de romance, comedia, misterio, estrategia, ecchi y drama adulto. Las categorías deben ser independientes de la identidad del personaje.  
**Motivo:** Mantener el control autoral y permitir historias con distintas identidades y públicos.

## DEC-015 — Content Guard y avisos previos a publicación
**Estado:** Aprobada como objetivo de producto; implementación posterior.  
**Decisión:** Mostrar la clasificación global de contenido de una novela y etiquetas por capítulo/escena, con advertencias visibles para contenido maduro/adulto y otros temas sensibles. Antes de exportar, ofrecer una revisión de etiquetas y escenas señaladas. La detección automática, si se incorpora, será una sugerencia revisable, no una decisión infalible. El contenido sexual explícito solo puede involucrar personajes inequívocamente adultos.  
**Motivo:** Ayudar al autor a clasificar y revisar la obra antes de publicarla, sin garantizar que una plataforma concreta la acepte.

## DEC-016 — Fuentes, licencias y procedencia
**Estado:** Aprobada.  
**Decisión:** Toda información o recurso visual importado debe conservar la fuente y los datos de autor/licencia conocidos. La licencia desconocida no se interpreta como permiso de reutilización. No se habilita scraping masivo por defecto. Los datos de referencia, inferidos y confirmados deben distinguirse.  
**Motivo:** Preservar trazabilidad, reducir confusiones de canon y respetar condiciones de acceso y derechos.

## DEC-017 — Cerebro y Obrero en el repositorio WordWaifu
**Estado:** Aprobada para este repositorio.  
**Decisión:** El asistente puede realizar tanto planificación/auditoría (Cerebro) como implementación (Obrero), pero en fases explícitas y separadas por el ciclo INSPECT → PLAN → EXECUTE → VERIFY → PERSIST → REPORT. Solo una tarea activa por vez; no asumir que un PR está integrado ni alterar main sin autorización. Esta decisión es específica de WordWaifu y no sustituye protocolos que el usuario haya definido para otros repositorios.  
**Motivo:** Permitir continuidad completa entre el diseño de tareas y su ejecución, manteniendo trazabilidad y alcance controlado.


## DEC-018 — Registro persistente de acuerdos de conversación
**Estado:** Aprobada.  
**Decisión:** Las instrucciones, preferencias, correcciones, decisiones y alcances de investigación relevantes para WordWaifu que se acuerden en conversación se registran de forma persistente en [docs/CONVERSATION_DECISION_LOG.md](CONVERSATION_DECISION_LOG.md) y en la documentación de dominio correspondiente. El registro se consulta antes de pedir aclaraciones repetidas o solicitar que el usuario reenvíe un mensaje ya registrado.  
**Motivo:** Evitar pérdida de contexto, repetición de instrucciones y trabajo duplicado. La aceptación como requisito de trabajo se distingue del estado de implementación y del nivel de evidencia factual.

## DEC-019 — Wikis reconocidas como fuente secundaria de investigación DanMachi
**Estado:** Aprobada.  
**Decisión:** Cuando el acceso a las novelas ligeras no esté disponible, investigar también las wikis comunitarias reconocidas en inglés y español para ampliar fichas y localizar datos. Priorizar fuentes oficiales accesibles cuando existan; etiquetar las wikis como fuentes secundarias, guardar la procedencia y no afirmar que son oficialmente autorizadas por la editorial ni convertir automáticamente sus afirmaciones en canon verificado.  
**Motivo:** Maximizar la cobertura útil de la saga sin ocultar limitaciones de acceso ni confundir los niveles de evidencia.


## DEC-020 — Prompt maestro operativo y prioridades de ejecución
**Estado:** Aprobada.  
**Decisión:** Operar como Cerebro/Obrero/Verificador y seguir el ciclo INSPECTAR → PRIORIZAR → INVESTIGAR → IMPLEMENTAR → PROBAR → REGISTRAR → INTEGRAR → VERIFICAR → INFORMAR. El destino para los cambios aprobados es `main`; las fusiones deben apoyarse en pruebas y verificaciones reales del SHA resultante. La prioridad DanMachi inmediata es cerrar la investigación pública disponible de DMR-045 antes de reanudar el trabajo general de Orario; luego siguen eventos, personajes y revisión de continuidad.  
**Límites:** las wikis siguen siendo fuentes secundarias, los registros de conversación no equivalen a implementación y una estructura completa no certifica cobertura del canon. No crear localizadores ni hechos desconocidos.  
**Motivo:** evitar repetición, conservar decisiones entre sesiones y terminar primero el trabajo pendiente de la prioridad activa.
**Revisión de orden de trabajo (2026-10-25):** el prompt vigente pone el cotejo primario de DMR-045 antes de la expansión de Orario. Ver DEC-023 y CONV-DM-2026-10-25-006; la decisión original de método y destino de integración permanece vigente.

## DEC-021 — Separación entre organizaciones y ubicaciones en el corpus DanMachi
**Estado:** Aprobada como regla de modelado del corpus, alineada con la petición explícita de separar la Guild como institución de sus edificios. No es una decisión de canon narrativo.
**Decisión:** usar `organization` para nodos institucionales como `ORG-GUILD` y `ORG-HOSTESS`; mantener los edificios o lugares en registros `location`; conservar `DM-GUILD-001` como guía conceptual compuesta de tipo `setting` para no romper su ID histórico, pero no crear relaciones nuevas hacia ella. Las aristas de la Guild deben apuntar a `ORG-GUILD` y cada una conserva continuidad, claim y nivel de evidencia.
**Límite factual:** la organización Guild, Babel y Pantheon no se pueden fusionar en una sola entidad. La identidad física exacta entre Pantheon, la sede descrita en el extracto y Babel permanece pendiente; no se inventa una ubicación `LOC-GUILD`.
**Motivo:** impedir que una ficha de referencia o una organización actúe como edificio físico, mejorando los enlaces y la búsqueda sin alterar los hechos ni los IDs estables.


## DEC-022 — Filtros de alineamiento narrativo de personajes
**Estado:** Aprobada como función editorial de WordWaifu, no como clasificación oficial del canon.
**Decisión:** La enciclopedia ofrece dos ejes independientes: orientación moral (bueno, neutral, malo) y actitud ante reglas/orden (legal, neutral, caótico). La combinación forma alineamientos legibles; «sin clasificar» es un estado explícito y nunca equivale a neutral.
**Aplicación inicial:** Alfia y Zald aparecen, con alcance interpretativo provisional en CONT-AR y confianza baja, como «caótico neutral». Se conserva «caótico bueno» como alternativa plausible que pondera más su fin protector. La motivación declarada no borra los medios violentos descritos por fuentes secundarias.
**Límites:** no atribuir estas etiquetas a Omori ni tratarlas como hechos canónicos. Cada asignación necesita justificación, continuidad, confianza y enlaces de fuente; los personajes restantes permanecen sin clasificar hasta que haya evaluación documentada.
**Motivo:** facilitar exploración y revisión de coherencia de personajes sin mezclar brújula moral con temperamento, ni forzar conclusiones cuando falta evidencia.


## DEC-023 — Procedencia visible por tipo de fuente en las fichas ampliadas
**Estado:** Aprobada como criterio de calidad de la interfaz; no es una decisión de canon.
**Decisión:** El diálogo de investigación clasifica explícitamente las referencias como wiki comunitaria no oficial, entrevista, publicación autoral, ficha editorial/metadatos, muestra licenciada o fuente oficial/primaria. Una entrevista autoral no se representa como una página de novela, una ficha de editorial no demuestra una escena y una muestra que no carga no confirma presencia ni ausencia de un personaje.
**Aplicación:** Las notas de Meteria, Erebus y Rudra se presentan bajo sus respectivas continuidades; CONT-AU y CONT-GAME no se transfieren automáticamente a CONT-MAIN-LN o CONT-AR. Los resultados de búsqueda incompletos (incluido HTTP 429) se registran como limitación de acceso, nunca como resultado factual.
**Motivo:** hacer utilizable la procedencia dentro de la enciclopedia sin fingir verificación primaria ni crear claims o relaciones de relleno.

## DEC-024 — La procedencia de cada afirmación debe coincidir con el texto accesible de la fuente
**Estado:** Aprobada como criterio de calidad de evidencia.
**Decisión:** cuando un dato detallado solo aparece en una reseña, resumen comunitario o resultado secundario, no se atribuye a la sinopsis oficial enlazada aunque trate del mismo volumen. La fuente primaria/editorial respalda únicamente lo que su contenido visible afirma. Una corrección de procedencia no convierte el dato en falso; cambia su clase de evidencia y el nivel de verificación.
**Aplicación:** DMR-045-CLM-006 se vincula a la reseña comunitaria DMR-045-SRC-043 y queda secondary_checked; DMR-045-SRC-005 mantiene la descripción general de la batalla y ya no respalda los emparejamientos concretos.
**Motivo:** evitar que una atribución errónea haga parecer un dato secundario más firme de lo que la evidencia permite.


## DEC-025 — Las sinopsis comunitarias por capítulo son pistas secundarias, no localizadores primarios
**Estado:** Aprobada como criterio de investigación.
**Decisión:** cuando una wiki comunitaria conocida ofrece un resumen por capítulo con datos útiles que una ficha editorial no contiene, WordWaifu puede incorporar una paráfrasis breve y claims propios con fuente, capítulo del resumen, continuidad y límites explícitos. El capítulo del resumen no es una página de la novela ni convierte el dato en verificación primaria.
**Aplicación:** DMR-045-SRC-045 aporta dos pistas para el volumen 20: DMR-045-CLM-019 (Alfia en la retrospectiva de Leon) y DMR-045-CLM-020 (Zald y Udaeus). Ambas quedan secondary_checked y no crean aristas canónicas ni cierran los localizadores primarios.
**Límites:** indicar si se usó contenido indexado en vez de lectura directa; no copiar extensamente la sinopsis ni atribuirla a la editorial.
**Motivo:** enriquecer fichas desde fuentes públicas disponibles sin crear una falsa impresión de lectura o certeza.


## DEC-026 — Las fichas BookLive con botón de muestra son rutas de consulta, no evidencia narrativa
**Estado:** Aprobada como criterio de investigación y de interfaz.
**Decisión:** cuando una ficha pública de un distribuidor licenciado ofrece prueba en navegador o app, WordWaifu puede registrar la página y enlazarla desde la enciclopedia aunque el lector no sea inspeccionable desde la herramienta actual. La ruta debe describirse como metadatos/oferta de muestra; no como texto leído.
**Aplicación:** DMR-045-SRC-047 registra BookLive DanMachi vol. 14 en CONT-MAIN-LN y SRC-048 BookLive Astrea Record 3 en CONT-AR. Ambos conservan `claims_supported: []` y `metadata_checked_only` hasta obtener un pasaje narrativo visible y un localizador reproducible.
**Límites:** no inferir presencia/ausencia de personajes, escenas o vínculos por metadatos del producto. No transferir material entre CONT-MAIN-LN, CONT-AR y CONT-GAME. No crear aristas o claims de relleno.
**Motivo:** mantener accesibles las rutas legítimas de investigación sin fingir que la oferta de muestra equivale a lectura primaria.


## DEC-026 — Estado de implementación y validación (PR #160)
- **Integrado:** [PR #160](https://github.com/jonhararagi/wordwaifu/pull/160), SHA `968ad23141ffdc2db032383228445fddc753b755`.
- **CI de PR:** [Validate #40381631794](https://github.com/jonhararagi/wordwaifu/actions/runs/40381631794) y [Lore/Integrity #40381631812](https://github.com/jonhararagi/wordwaifu/actions/runs/40381631812), ambos `success` sobre head `6d89ea9a7846c64132b08f58b628ff70b075a302`.
- **CI post-merge sobre SHA `968ad23141ffdc2db032383228445fddc753b755`:** [Lore/Integrity #40381983723](https://github.com/jonhararagi/wordwaifu/actions/runs/40381983723) y [Validate #40381983810](https://github.com/jonhararagi/wordwaifu/actions/runs/40381983810), ambos `success`; la demora de Chromium fue transitoria.
- El cambio solo incorpora rutas de metadatos; no equivale a ver texto primario ni a cambiar ningún claim.

## DEC-027 — Reseña BookLive como pista de cierre para Erebus, Zald y Alfia
**Estado:** Aplicada como pista secundaria; verificación primaria pendiente.
**Decisión:** un resumen público de lector puede ampliar la cola de investigación cuando menciona una escena posible, pero debe conservar la procedencia, continuidad, incertidumbre y ausencia de localizador narrativo.
**Aplicación:** DMR-045-CLM-022 se vincula a la reseña comunitaria SRC-043 y queda `secondary_checked` en `CONT-AR`. La ficha interactiva muestra el indicio como pista, sin crear un evento o una arista.
**Límites:** no se considera leído el pasaje de Astrea Record 3; no se infieren relaciones privadas ni destino individual y no se importa a la novelización la caracterización de Erebus correspondiente a `CONT-GAME`.

**Integración y validación:** PR [#162](https://github.com/jonhararagi/wordwaifu/pull/162), merge SHA `09a771bd752a8a903984bf5f84510a36565f9206`. **Integración y CI de PR #162:** integrada por squash en `main`, merge SHA `09a771bd752a8a903984bf5f84510a36565f9206`. CI de la PR sobre head `3bbd6e89e6a1c73a338acf7b36574e6642392712`: [Validate WordWaifu #40394117882](https://github.com/jonhararagi/wordwaifu/actions/runs/40394117882) y [DanMachi Lore and Retrieval Integrity #40394118254](https://github.com/jonhararagi/wordwaifu/actions/runs/40394118254), ambos `success`. CI post-merge sobre el SHA exacto de `main`: [DanMachi Lore and Retrieval Integrity #40400987218](https://github.com/jonhararagi/wordwaifu/actions/runs/40400987218) y [Validate WordWaifu #40400987257](https://github.com/jonhararagi/wordwaifu/actions/runs/40400987257), ambos `success`.

## DEC-028 — Kobo como ruta de consulta sin evidencia narrativa automática
**Estado:** Aplicada como criterio de procedencia; lectura primaria pendiente.
**Decisión:** una ficha de Kobo que anuncie “Preview Now” o “Save Preview” puede registrarse como ruta de investigación de una edición licenciada, aunque el acceso automatizado a la ficha o al lector falle. El resultado solo sustenta que se localizó una oferta de vista previa, no que se inspeccionó su contenido.
**Aplicación:** DMR-045-SRC-049 registra la ficha inglesa de DanMachi vol. 20 bajo CONT-MAIN-LN y metadata_checked_only. Se enlaza desde las pistas independientes de Alfia y Zald; claims_supported vacío, events_supported vacío y sin relaciones nuevas.
**Límites:** no inferir presencia/ausencia, escena, habilidad o relación a partir de metadatos, índice, errores de caché o botones de muestra. Mantener abiertos los cinco cotejos primarios de DMR-045 hasta obtener texto narrativo visible y un localizador reproducible.

## DEC-028 — Implementación y validación de la ruta Kobo (PR #164)
- Integrado en [PR #164](https://github.com/jonhararagi/wordwaifu/pull/164), merge SHA `345db0189308b2e34a31bbf8f3930e75f0b4fc2f`; head probado `dc60cf91fba87a85419bc029d24dd7b8446420f6`.
- CI de PR: [Validate #40432114887](https://github.com/jonhararagi/wordwaifu/actions/runs/40432114887) y [DanMachi Lore and Retrieval Integrity #40432114895](https://github.com/jonhararagi/wordwaifu/actions/runs/40432114895), ambos `success`.
- No se pudo confirmar el estado de los workflows disparados post-merge para el SHA de main; no se marcarán como aprobados sin evidencia directa.
- La lectura primaria continúa pendiente y la fuente sigue `metadata_checked_only`.

## DEC-029 — BOOK☆WALKER como ruta de muestra, no evidencia narrativa automática
**Estado:** Implementada e integrada por PR #166; CI de PR aprobado y CI post-merge aprobado.
**Decisión:** registrar una ruta `試し読み` de un distribuidor licenciado si es útil para consulta humana futura, aunque el visor no sea accesible a la herramienta. La oferta de muestra y un error de acceso no prueban que se haya leído el texto.
**Aplicación:** DMR-045-SRC-050 registra BOOK☆WALKER DanMachi vol. 20 en `CONT-MAIN-LN`, con `metadata_checked_only`, `claims_supported: []` y `events_supported: []`. El enlace se expone desde las notas de investigación de Alfia y Zald únicamente en esa continuidad.
**Integración:** [PR #166](https://github.com/jonhararagi/wordwaifu/pull/166), squash SHA de `main` `2951fa55396564cb878e00ab5c7d2b297966cd64`.
**CI de PR:** [Validate #40450101232](https://github.com/jonhararagi/wordwaifu/actions/runs/40450101232) y [Lore/Integrity #40450101166](https://github.com/jonhararagi/wordwaifu/actions/runs/40450101166), ambos `success` sobre `80c5468f78812312898dbe3f6de709856f63d0d2`.
**CI post-merge sobre el SHA exacto de main:** [Validate WordWaifu #40459532846](https://github.com/jonhararagi/wordwaifu/actions/runs/40459532846) y [DanMachi Lore and Retrieval Integrity #40459532519](https://github.com/jonhararagi/wordwaifu/actions/runs/40459532519), ambos `success` sobre `2951fa55396564cb878e00ab5c7d2b297966cd64`.
**Límites:** no inferir presencia/ausencia, escenas, identidad de personajes, habilidades ni relaciones a partir de metadatos o del fallo del visor; no crear claims para rellenar huecos. Mantener abiertos los cinco cotejos primarios de DMR-045.


## DEC-030 — La página de diferencias de Astrea Record 3 es una pista secundaria, no texto primario
**Estado:** Aplicada e integrada mediante PR #168; CI de PR y post-merge aprobados.
**Decisión:** aprovechar la página comunitaria de diferencias entre Memoria Freese y la novelización para generar pistas de búsqueda sobre Alfia, Zald y Erebus, sin elevar sus resúmenes a canon cotejado.
**Aplicación:** se registra como DMR-045-SRC-051, `secondary_checked`, `CONT-AR`. Sus notas interactivas etiquetan explícitamente los detalles reportados como secundarios y conservan la falta de capítulo/página narrativa.
**Reglas:** no transferir contenido exclusivo de `CONT-GAME` a `CONT-AR`, no inferir el padre de Bell, no crear aristas familiares por una reseña comunitaria y no convertir una muestra inaccesible en evidencia de ausencia.
**Continuidad del trabajo:** los cinco cotejos primarios de DMR-045 siguen siendo la prioridad previa a la expansión de Orario.


## DEC-031 — Fijar Ubuntu 24.04 para los workflows que usan Playwright 1.55
**Estado:** Aplicada e integrada mediante PR #168; CI de PR y post-merge aprobados.
**Motivo:** GitHub Actions ejecutó `ubuntu-latest` sobre Ubuntu 26.04 y Playwright 1.55 falló al instalar Chromium con `Playwright does not support chromium on ubuntu26.04`. GitHub anunció que la etiqueta `ubuntu-latest` migrará a Ubuntu 26.04 durante octubre–noviembre de 2026 ([anuncio oficial](https://github.blog/changelog/2026-09-17-ubuntu-26-generally-available-and-latest-migration/)).
**Aplicación:** fijar `runs-on: ubuntu-24.04` tanto en `.github/workflows/validate.yml` como en `.github/workflows/danmachi-lore-check.yml`, preservando la versión ya fijada de Playwright. Corregir además una aserción de texto que dependía de mayúsculas.
**Validación:** CI de PR: [Validate WordWaifu #40510817854](https://github.com/jonhararagi/wordwaifu/actions/runs/40510817854) y [DanMachi Lore and Retrieval Integrity #40510817870](https://github.com/jonhararagi/wordwaifu/actions/runs/40510817870) (`success`) sobre `16338edec86670b1692084bea446657bc657eb71`. CI post-merge: [Validate WordWaifu #40511064727](https://github.com/jonhararagi/wordwaifu/actions/runs/40511064727) y [DanMachi Lore and Retrieval Integrity #40511064313](https://github.com/jonhararagi/wordwaifu/actions/runs/40511064313) (`success`) sobre `99a667e60f3651b98759a1993a26258ba37dd645`.
**Límite:** decisión de reproducibilidad del CI; no modifica la funcionalidad narrativa ni la evidencia de DanMachi.

## DEC-032 — Bitácora obligatoria para evitar actualizaciones repetitivas de personajes
**Estado:** implementada, integrada y validada por PR #170.
**Reglas aceptadas:** antes de editar una ficha, leer `lore/danmachi/CHARACTER_UPDATE_LEDGER.md`; registrar lo consultado y dejar de repetir consultas a la misma fuente cuando no informe el campo. «No informado por esta fuente» no significa «no existe», y tampoco permite inventar un nivel, poder, skill, nombre de magia, coste o personalidad. Las personalidades existentes no se reformulan salvo evidencia nueva o contradicción concreta.
**Estados de la bitácora:** `SECONDARY_PASS_COMPLETE`, `PARTIAL_NOT_REPORTED`, `SECONDARY_CONFLICT` y `HOLD_FOR_PRIMARY_SOURCE`; cada entrada incluye el disparador que permitiría reabrirla.
**Aplicación:** se añade `CONT-SECONDARY` para exponer los datos comunitarios en el archivo interactivo sin mezclarlos con otras continuidades; se registra una primera pasada estructurada de diez miembros de Astrea Familia y una pausa de DMR-045 hasta evidencia nueva. La regresión `tests/test_character_update_ledger.cjs` se ejecuta en ambos workflows.
**Validación:** CI de PR sobre `e0cb29570ad8cd0b7b704ca73fa95882765e66a0`: [Validate WordWaifu #40525522243](https://github.com/jonhararagi/wordwaifu/actions/runs/40525522243) y [DanMachi Lore and Retrieval Integrity #40525522040](https://github.com/jonhararagi/wordwaifu/actions/runs/40525522040), ambos `success`. CI post-merge sobre `034eb037f98ce25076de7fc4217a62cb960172eb`: [Validate WordWaifu #40525793577](https://github.com/jonhararagi/wordwaifu/actions/runs/40525793577) y [DanMachi Lore and Retrieval Integrity #40525794301](https://github.com/jonhararagi/wordwaifu/actions/runs/40525794301), ambos `success`.
**Límite:** la actualización de la cohorte usa fuentes secundarias; no se convierte en validación primaria ni en una afirmación de que el canon no contiene datos ausentes de las wikis.

## DEC-033 — Cambiar de cohorte cuando las fuentes no aportan datos nuevos
**Estado:** Implementada e integrada en `main` por PR [#172](https://github.com/jonhararagi/wordwaifu/pull/172); CI de PR y CI post-merge aprobados.
- **SHA de `main`:** `79505bd740d47560d4bc67166c807d14090a950d`.
- **CI de PR:** [Validate #40572608737](https://github.com/jonhararagi/wordwaifu/actions/runs/40572608737) y [Lore/Integrity #40572608435](https://github.com/jonhararagi/wordwaifu/actions/runs/40572608435), ambos `success` sobre `1ece6f0117dadf2fb0b0a4988d23c13df34d0609`.
- [Validate post-merge #40590376454](https://github.com/jonhararagi/wordwaifu/actions/runs/40590376454) y [Lore/Integrity post-merge #40590376362](https://github.com/jonhararagi/wordwaifu/actions/runs/40590376362), ambos `success` sobre el SHA exacto de `main`.
**Decisión:** no repetir pasadas sobre la misma wiki/juego ni volver a reformular personalidades para aparentar progreso. Cuando una fuente no informe nivel, magia, skill, equipo o coste, dejarlo como no informado por esa fuente y pasar a otro personaje/grupo.
**Aplicación:** la pasada DMR-052 amplía la capa secundaria de Allen Fromel, Hedin Selland, Hogni Ragnar y los cuatro hermanos Gulliver. Los resultados se conservan en CHARACTER_UPDATE_LEDGER.md y CONT-SECONDARY.
**Límite:** «no informado» no significa «no existe en canon»; no se inventan poderes, costes, localizadores o biografías. DMR-045 conserva sus pendientes primarios y no se reintenta una misma muestra sin evidencia nueva.

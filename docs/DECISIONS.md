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

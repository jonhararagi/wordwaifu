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


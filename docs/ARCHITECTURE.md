# Arquitectura inicial

## Principio

Una aplicación modular, local y centrada en datos. El mapa, las fichas, la cronología, los generadores y los documentos no deben mantener copias independientes de la misma información.

## Capas

1. **Interfaz:** navegación, mapa, paneles de fichas, formularios, buscador, timeline y Command Desk.
2. **Aplicación:** casos de uso como crear personaje, asignar ubicación, generar esquema, importar proyecto y validar continuidad.
3. **Dominio:** entidades, relaciones, reglas, cronología, generadores deterministas y validadores.
4. **Persistencia:** repositorio de datos local, migraciones de esquema, exportación/importación y copias de seguridad.
5. **Adaptadores opcionales:** mapas externos, IA, GitHub u otros servicios. Ningún adaptador opcional puede ser dependencia del núcleo.

## Módulos lógicos

- projects: proyectos y configuración.
- canon: entidades y relaciones canónicas.
- atlas: jerarquía geográfica, coordenadas esquemáticas, capas y navegación.
- characters: fichas y evolución.
- organizations: familias, gremios, reinos, órdenes y facciones.
- timeline: eventos, fechas, participantes y consecuencias.
- story: premisas, conflictos, arcos y subtramas.
- novel: volúmenes, capítulos, escenas y borradores.
- generators: plantillas, vocabularios, restricciones, semilla y procedencia.
- continuity: validaciones y reportes.
- media: archivos vinculados y metadatos de procedencia.
- commands: comandos locales registrados y respuestas deterministas.

## Persistencia inicial

El primer prototipo puede usar IndexedDB del navegador para guardar varios proyectos en el dispositivo. Debe incluir exportación e importación JSON desde el principio, ya que los datos del navegador no equivalen a una copia de seguridad.

Si se decide distribuir una aplicación de escritorio, evaluar SQLite y un directorio de proyecto con documentos Markdown y recursos visuales. No acoplar el dominio a IndexedDB: usar una interfaz de repositorio para poder cambiar el adaptador.

## Mapa

El mapa inicial es un mapa esquemático editable con puntos y regiones, no un GIS ni un mapa mundial generado automáticamente. Cada marcador apunta a un location_id; nunca contiene copias de fichas de personajes. El motor de mapas consulta Canon Core para mostrar información.

Los lugares deben admitir jerarquía: mundo → región → país → ciudad → distrito → edificio → habitación. No todos los niveles son obligatorios.

## Generación sin IA

Los generadores reciben configuración explícita, catálogos editables, reglas de compatibilidad, una semilla reproducible y el canon ya existente. Devuelven una propuesta y un reporte de decisiones. No escriben directamente sobre datos aprobados sin confirmación. Los fragmentos de texto proceden de plantillas identificables y editables.

## Comprobaciones de continuidad

Los validadores deben ser reglas deterministas y explicar cada hallazgo con las entidades afectadas. Separar:
- error estructural (ID inexistente, relación rota),
- conflicto temporal (dos ubicaciones incompatibles en la misma fecha),
- posible contradicción (edad o estado incompatible),
- advertencia de información incompleta,
- excepción aceptada por el autor.

No intentar inferir todos los errores literarios en la primera versión.

## Seguridad y robustez

- Validar JSON importado antes de modificar el proyecto.
- No ejecutar contenido importado como código.
- Limitar tamaño de imágenes y documentos en la interfaz.
- Confirmar eliminaciones y permitir exportación antes de operaciones destructivas.
- No guardar tokens ni claves de API en el proyecto.
- No enviar telemetría por defecto.

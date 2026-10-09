# WordWaifu — Visión del producto

## Objetivo único

Crear una herramienta local de construcción de universos narrativos que convierta ideas en un canon estructurado, navegable y reutilizable, y que ayude a planificar historias y novelas sin exigir IA, API, suscripciones o Internet.

No son varios proyectos pegados. Todos los módulos existen para servir a este mismo ciclo:

**IDEA → CANON → ATLAS → PERSONAJES Y RELACIONES → CRONOLOGÍA → TRAMA → NOVELA → AUDITORÍA**

## Problema que resolvemos

Cuando una novela crece, la información se dispersa entre documentos, imágenes, notas y conversaciones. Se duplican fichas, se olvidan decisiones, los personajes cambian de ubicación sin explicación y las historias contradicen su propio pasado.

WordWaifu debe mantener los datos conectados y hacerlos explorables.

## La experiencia distintiva

El usuario abre un mapa enorme y navegable del universo. Puede acercarse desde el mundo hasta un continente, país, ciudad, distrito, edificio o habitación si hay datos para ello. Cada ubicación muestra los personajes presentes, organizaciones activas, sucesos y documentos asociados. Cada personaje abre una ficha con identidad, personalidad, edad, apariencia, objetivos, relaciones, estado narrativo y ubicación a través del tiempo.

El usuario puede navegar de tres maneras equivalentes:
1. Geográfica: mapa → lugar → entidades relacionadas.
2. Social: personaje → relaciones → personajes, facciones y lugares.
3. Temporal: fecha/capítulo → acontecimientos → ubicaciones y personajes afectados.

Las tres vistas consultan los mismos registros canónicos.

## Alcance por capas

### Núcleo sin IA
- Crear y gestionar múltiples proyectos.
- Guardar, editar, buscar, filtrar, enlazar, importar y exportar datos.
- Fichas de personajes, lugares, organizaciones, eventos, reglas y relaciones.
- Mapa esquemático interactivo y jerarquía de ubicaciones.
- Línea temporal y asignación de personajes a lugares por intervalo/evento.
- Generación mediante plantillas, tablas, semillas aleatorias y reglas explícitas.
- Esquemas de historias, novelas, capítulos y escenas.
- Comprobaciones de integridad y continuidad.
- Copias de seguridad locales e historial de cambios.
- Panel de comandos determinista.

### Mejoras posteriores
- Editor visual avanzado de mapas y rutas.
- Vistas de redes sociales y genealogías.
- Biblioteca visual con atribución/licencias.
- Complementos opcionales de IA local o remota, únicamente si el usuario decide configurarlos.
- Conectores opcionales a repositorios Git.
- Publicación/exportación avanzada.

## Fuera del alcance inicial
- Crear un modelo lingüístico propio.
- Prometer prosa literaria de nivel humano mediante plantillas.
- Reproducir automáticamente el contenido completo de franquicias protegidas.
- Exigir servicios en la nube para consultar o modificar proyectos.
- Intentar generar millones de imágenes de combinaciones de personajes.
- Convertir cada módulo en una aplicación independiente sin un canon común.

## Principios no negociables
1. **Canon único:** una entidad se define una vez y se referencia por ID.
2. **Offline-first:** las funciones principales no requieren red.
3. **Datos del usuario:** exportación completa, formato documentado y sin bloqueo propietario.
4. **Control autoral:** los generadores proponen; el usuario aprueba el canon.
5. **Trazabilidad:** cambios importantes pueden revisarse o deshacerse.
6. **Incertidumbre explícita:** distinguir canon confirmado, propuesta, rumor dentro del mundo y dato desconocido.
7. **Temporalidad:** la ubicación y el estado de un personaje pueden cambiar por fecha, evento o capítulo.
8. **No al azar sin sentido:** reglas de compatibilidad, validaciones y posibilidad de fijar atributos.
9. **Visuales honestos:** un marcador o placeholder no se presentará como mapa cartográfico real.
10. **Privacidad por defecto:** ningún dato se envía fuera del dispositivo sin una acción explícita del usuario.

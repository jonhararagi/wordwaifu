# DanMachi Lore PoC

## Propósito

Esta carpeta es una prueba de concepto documental para comprobar si una base de conocimiento pequeña, trazable y separada del canon y de las decisiones del autor permite revisar escenas de DanMachi con menos errores inventados y menos falsas alarmas.

No es una función integrada en WordWaifu. No implementa IA, búsqueda automática ni conexión de GitHub con ChatGPT. En esta fase, los documentos se facilitan manualmente al modelo que realiza la revisión.

## Estado actual

- Estado: DRAFT / ESTRUCTURA INICIAL.
- Fuentes canónicas incorporadas: ninguna verificada todavía.
- Premisa del OC: registrada como propuesta del autor, pendiente de resolver sus ambigüedades.
- Pruebas: definidas como diseño; todavía no ejecutadas.
- Código de la aplicación: sin cambios en esta prueba de concepto.
- Índices personales del propietario: no importados porque aún no se han proporcionado en el repositorio.

## Archivos

- 01-premisa-autor.md: acontecimientos deseados y preguntas pendientes.
- 02-plantilla-registro.md: campos estándar para fichas de lore y reglas AU.
- 03-protocolo-revision.md: procedimiento y formato de informe para ChatGPT.
- 04-banco-pruebas.md: cinco clases de casos para medir resultados.
- 05-fuentes-y-verificacion.md: reglas de procedencia y verificación.
- 06-registro-decisiones.md: decisiones del autor que deben persistir.
- 07-prompt-revision.md: prompt reutilizable para revisiones manuales.

## Regla fundamental

Un dato que no esté respaldado por una fuente incorporada se marca como PENDIENTE_DE_VERIFICAR. Una propuesta de trama tampoco se transforma automáticamente en hecho canónico. Solo el autor puede aprobar que una divergencia se convierta en regla explícita de su AU.

## Flujo manual

1. Seleccionar del repositorio las fichas relacionadas con la escena.
2. Adjuntar las fichas y el borrador al modelo.
3. Usar el prompt de 07-prompt-revision.md.
4. Revisar cada hallazgo, especialmente los que no tengan referencia directa.
5. Registrar en 06-registro-decisiones.md las excepciones que el autor apruebe.
6. Repetir los casos de prueba después de cambiar el esquema o el prompt.

## Criterio de éxito

La prueba solo será positiva cuando distinga correctamente hechos respaldados, contradicciones con evidencia, divergencias deliberadas y casos con información insuficiente. Un informe convincente o rápido no es, por sí solo, evidencia de precisión.
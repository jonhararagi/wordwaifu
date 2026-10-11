# DanMachi Lore PoC

## Propósito

Base inicial de conocimiento narrativo para revisar una historia de DanMachi sin inventar hechos ni confundir el canon con las decisiones de una AU (universo alternativo).

## Estado real

- **Estructura y protocolo:** creados.
- **Lore inicial:** 15 registros y fichas nuevas redactadas desde conocimiento general del asistente; requieren cotejo contra fuentes primarias.
- **Fuentes externas verificadas en esta sesión:** ninguna. Los volúmenes mencionados son pistas para buscar localizadores, no citas de páginas ya comprobadas.
- **Índices personales del propietario:** no existen en el repositorio todavía; esta base se está construyendo desde cero.
- **Código de WordWaifu:** no modificado.
- **Revisión automatizada:** no implementada.
- **Pruebas narrativas:** definidas, no ejecutadas.

## Estructura del paquete

### Guía y protocolo

- \`01-premisa-autor.md\`: idea del OC y ambigüedades abiertas.
- \`02-plantilla-registro.md\`: campos para fichas y reglas AU.
- \`03-protocolo-revision.md\`: método de revisión y clasificación de hallazgos.
- \`04-banco-pruebas.md\`: cinco clases de pruebas de calidad.
- \`05-fuentes-y-verificacion.md\`: política de evidencia y futuras referencias.
- \`06-registro-decisiones.md\`: decisiones que el autor aprueba para su AU.
- \`07-prompt-revision.md\`: prompt de revisión manual reutilizable.
- \`catalog.json\`: catálogo consultable de fichas, IDs, etiquetas y prioridades.

### Canon, personajes y cronología

- \`canon/00-indice-canon.md\`: índice de afirmaciones iniciales y estado de verificación.
- \`canon/01-mundo-orario.md\`: mundo y ciudad de Orario.
- \`canon/02-falna-familias.md\`: deidades, Falna, status y Familias.
- \`canon/03-dungeon-y-guild.md\`: Dungeon, Guild y la ambigüedad del registro.
- \`canon/04-aventureros-y-progresion.md\`: desarrollo de aventureros.
- \`canon/05-monstruos-y-piedras-magicas.md\`: monstruos y recursos.
- \`characters/hestia.md\`, \`characters/loki.md\`, \`characters/eina-tulle.md\`, \`characters/bell-cranel.md\`, \`characters/ais-wallenstein.md\`: fichas de personajes.
- \`characters/finn-riveria-gareth.md\`: recordatorio del liderazgo de la Familia Loki.
- \`familias/hestia-familia.md\`, \`familias/loki-familia.md\`: composición y consecuencias de afiliación.
- \`timeline/01-alertas-cronologia.md\`: alerta de cronología para la premisa.
- \`timeline/02-reglas-de-cronologia.md\`: modelo para eventos y presencia temporal.
- \`au/01-evaluacion-premisa-oc.md\`: primera evaluación de la idea del autor.

## Cómo interpretar la confianza

- **Alta (recuerdo general):** hecho general ampliamente establecido, pero la cita exacta sigue pendiente.
- **Media:** síntesis plausible que necesita verificarse en material primario.
- **Pendiente:** no utilizar para declarar una contradicción canónica.
- **Inferencia:** consecuencia lógica, no dato textual independiente.

Las etiquetas de confianza no sustituyen una fuente. Hasta añadir localizadores comprobados, los hallazgos basados en estas fichas no deben presentarse como dictámenes canónicos definitivos.

## Hallazgo prioritario de la premisa

El recuerdo provisional de trabajo es que Hestia llevaba alrededor de medio año en el mundo inferior cuando conoce a Bell. Si el OC llega cinco años antes del inicio de la historia principal, encontrar a Hestia ya presente podría generar un conflicto temporal. Esta alerta aún necesita cotejo con el volumen 1 y no obliga al autor a abandonar la idea: puede cambiar el ancla temporal o establecer un override AU explícito.

También falta precisar qué significa “entrar al Dungeon sin registrarse” y por qué Loki llama “Bell” al OC. El documento \`au/01-evaluacion-premisa-oc.md\` organiza estas dudas.

## Flujo manual actual

1. Leer el índice canónico y la alerta temporal.
2. Adjuntar al modelo solo las fichas relevantes más el borrador.
3. Usar \`07-prompt-revision.md\`.
4. Exigir la referencia concreta de cualquier contradicción alegada.
5. Registrar las excepciones AU que apruebe el autor.

Estos documentos no se cargan automáticamente en todas las conversaciones. Para revisar una escena, hay que abrir o proporcionar al modelo los archivos relevantes.

## Próximo paso

Cotejar la cronología de Hestia y Bell, el papel de Eina y las normas de la Guild con la novela ligera, empezando por el volumen 1. Después ampliar la base con citas verificadas y escenarios de prueba.
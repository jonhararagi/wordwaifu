# DanMachi Lore PoC

## Propósito

Base inicial de conocimiento narrativo para comprobar si WordWaifu y una IA pueden ayudar a revisar una historia de DanMachi sin inventar hechos ni confundir el canon con las decisiones de una AU (universo alternativo).

## Estado real

- **Estructura y protocolo:** creados.
- **Lore inicial:** primera tanda redactada a partir de conocimiento general del asistente; aún requiere cotejo contra las fuentes primarias.
- **Fuentes externas verificadas en esta sesión:** ninguna. Los volúmenes mencionados son pistas de verificación, no citas de página ya comprobadas.
- **Índices personales del propietario:** todavía no existen en el repositorio; esta base inicial se está creando desde cero.
- **Código de WordWaifu:** no se modifica.
- **Revisión automatizada:** no implementada.
- **Pruebas narrativas:** diseñadas, no ejecutadas.

## Contenido

- \`01-premisa-autor.md\`: acontecimientos deseados y dudas abiertas del OC.
- \`02-plantilla-registro.md\`: esquema de registros.
- \`03-protocolo-revision.md\`: reglas de revisión.
- \`04-banco-pruebas.md\`: cinco clases de pruebas.
- \`05-fuentes-y-verificacion.md\`: procedencia y comprobación.
- \`06-registro-decisiones.md\`: decisiones aprobadas por el autor.
- \`07-prompt-revision.md\`: prompt manual reutilizable.
- \`canon/00-indice-canon.md\`: índice de hechos iniciales y su estado.
- \`canon/01-mundo-orario.md\`: mundo y ciudad.
- \`canon/02-falna-familias.md\`: dioses, Falna y Familias.
- \`canon/03-dungeon-y-guild.md\`: Dungeon, Guild y registro.
- \`characters/hestia.md\`, \`characters/loki.md\`, \`characters/eina-tulle.md\`, \`characters/bell-cranel.md\`: fichas centrales.
- \`familias/hestia-familia.md\`, \`familias/loki-familia.md\`: grupos relevantes.
- \`timeline/01-alertas-cronologia.md\`: cronología conocida, riesgos e incertidumbres.
- \`au/01-evaluacion-premisa-oc.md\`: evaluación preliminar de la idea del autor.

## Cómo interpretar la confianza

- **Alta (recuerdo general):** dato ampliamente establecido en la historia, pero la cita exacta sigue pendiente.
- **Media:** síntesis plausible que necesita comprobarse en el material primario antes de usarla como prueba.
- **Pendiente:** no utilizar para declarar una contradicción canónica.
- **Inferencia:** consecuencia lógica derivada de otros datos, no dato textual independiente.

Las etiquetas de confianza no sustituyen una fuente. Hasta registrar un localizador comprobado, un hallazgo basado en estas fichas no debe presentarse como un dictamen canónico definitivo.

## Flujo manual actual

1. Leer el índice canónico y la ficha de cronología.
2. Adjuntar al modelo solo las fichas relevantes más el borrador.
3. Usar \`07-prompt-revision.md\`.
4. Exigir la referencia exacta de cualquier contradicción alegada.
5. Registrar las excepciones de AU aprobadas por el autor.

Esta carpeta no se carga automáticamente desde GitHub en cada conversación. Para una revisión manual hay que abrir o proporcionar al modelo los documentos relevantes.

## Próximo trabajo

Cotejar las fichas prioritarias con las novelas y fuentes disponibles, empezando por el volumen 1 y los pasajes que fijan la llegada de Hestia, el encuentro con Bell, el papel de Eina y las normas de la Guild. Después, ampliar personajes y cronología.
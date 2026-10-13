# Protocolo de revisión de continuidad

## Objetivo

Revisar una escena o capítulo contra las fichas disponibles sin inventar hechos, sin tratar el canon como inmutable frente a una AU declarada y sin confundir gusto narrativo con error objetivo.

## Capas de comparación

1. Evidencia de fuentes: qué afirman realmente las fuentes verificadas del repositorio.
2. Canon registrado: síntesis de esas fuentes, conservando referencias y posibles desacuerdos.
3. Reglas y decisiones del autor: premisas, excepciones y divergencias expresamente aprobadas.
4. Texto de la escena: lo que sucede literalmente en el borrador.
5. Inferencias: consecuencias plausibles, siempre etiquetadas como inferencias y no como hechos confirmados.

## Clasificaciones de hallazgos

- CONFIRMED_CONTRADICTION: la escena contradice una afirmación respaldada por una fuente verificada y no existe excepción AU aplicable.
- AU_OVERRIDE: la escena se aparta del canon, pero la divergencia está aprobada y registrada por el autor.
- AUTHOR_RULE_CONFLICT: la escena contradice una regla propia aprobada para esta AU.
- PLAUSIBLE_CONSEQUENCE: consecuencia narrativa que podría ser importante, pero no constituye contradicción demostrada.
- AMBIGUITY: el texto o la premisa admite más de una interpretación.
- INSUFFICIENT_DATA: los archivos disponibles no permiten decidir.
- NO_ISSUE_FOUND: no se encontró una contradicción en los datos revisados; no equivale a demostrar que toda la escena sea correcta.

## Severidad

- BLOCKER: contradicción respaldada que rompe un requisito central o vuelve imposible la secuencia tal como está escrita.
- MAJOR: contradicción o conflicto importante con consecuencias para continuidad.
- MINOR: detalle que convendría precisar, sin invalidar la escena completa.
- NOTE: sugerencia opcional, inferencia o pregunta para el autor.

No elevar la severidad solo porque una escena difiera del canon. Primero comprobar si la divergencia está aprobada.

## Evidencia obligatoria

Cada hallazgo factual debe incluir:

- ID único del hallazgo.
- Cita breve de la escena o resumen preciso del fragmento.
- Clasificación y severidad.
- ID de la ficha pertinente.
- Referencia de fuente disponible en esa ficha.
- Explicación de la contradicción o de la incertidumbre.
- Confianza y motivo.
- Información que falta, si la decisión no es posible.
- Acción propuesta: corregir, mantener como AU, aclarar o investigar.

Si no hay referencia verificable, no usar CONFIRMED_CONTRADICTION. Utilizar INSUFFICIENT_DATA, AMBIGUITY o una inferencia claramente rotulada.

## Orden de revisión

1. Leer la premisa del autor y las excepciones aprobadas.
2. Extraer acontecimientos, personajes, lugares, fechas y afirmaciones relevantes de la escena.
3. Identificar las fichas que podrían aplicar.
4. Comparar cada afirmación con fuentes y reglas AU.
5. Buscar contradicciones dentro de la propia escena, incluso si no dependen del canon.
6. Separar hallazgos demostrables de posibles consecuencias o preguntas.
7. Comprobar que cada hallazgo tiene evidencia suficiente.
8. Entregar el informe y dejar las decisiones finales al autor.

## Límites

- No afirmar que se consultó GitHub si los archivos no se facilitaron realmente al modelo.
- No improvisar edades, fechas, habilidades, afiliaciones ni reglas.
- No asumir que un dato está ausente del universo porque falte del pequeño paquete consultado; indicar que falta en el material disponible.
- No reescribir silenciosamente el capítulo.
- No tratar una recomendación estilística como un problema de canon.
- No volver a marcar una objeción que el autor ya resolvió sin explicar qué dato nuevo cambia el análisis.
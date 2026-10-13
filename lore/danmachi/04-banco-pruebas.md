# Banco de pruebas de revisión narrativa

## Estado

Este banco describe pruebas que todavía deben prepararse y ejecutarse. No hay puntuaciones ni resultados reportados. Los hechos concretos del canon deben rellenarse solo después de importar y verificar las fuentes.

## TC-001 — Escena consistente

Objetivo: comprobar que el revisor no fabrica errores en una escena cuyas afirmaciones relevantes están respaldadas por las fichas.

Preparación:
- Crear una microescena usando únicamente datos verificados.
- Asociar cada hecho relevante al ID de su ficha.
- Confirmar manualmente que no hay una contradicción conocida.

Resultado esperado:
- Ningún CONFIRMED_CONTRADICTION sin evidencia.
- Puede señalar límites de cobertura, pero no inventar problemas.
- La aprobación depende de una revisión humana del caso y de la respuesta.

Estado: BLOCKED_UNTIL_VERIFIED_LORE.

## TC-002 — Contradicción verificable de cronología

Objetivo: detectar una afirmación temporal que contradiga una fuente registrada.

Preparación:
- Seleccionar una fecha, presencia o acontecimiento de una fuente verificada.
- Escribir una microescena de prueba que lo contradiga deliberadamente.
- Guardar en el expediente del test la respuesta esperada y su fuente.

Resultado esperado:
- El revisor detecta el conflicto.
- Señala la ficha y la referencia de origen.
- No inventa una fecha alternativa.

Estado: BLOCKED_UNTIL_VERIFIED_LORE.

## TC-003 — Divergencia deliberada de la AU

Objetivo: comprobar que una divergencia registrada no se marca como error de canon.

Preparación:
- Tomar AU-PREM-004 o AU-PREM-005.
- El autor debe aprobar explícitamente el significado de la divergencia.
- Crear un registro au_override y utilizar supersedes para vincular la regla o afirmación que se reemplaza, si se conoce.
- Repetir la revisión con el override presente y ausente.

Resultado esperado:
- Con el override aprobado y aplicable: AU_OVERRIDE, no CONFIRMED_CONTRADICTION.
- Sin override: AMBIGUITY o INSUFFICIENT_DATA si faltan fuentes suficientes; no asumir que la intención ya fue confirmada.
- El informe explica qué decisión del autor cambió el veredicto.

Estado: READY_FOR_AUTHOR_DECISION.

## TC-004 — Conflicto con regla propia

Objetivo: comprobar si el revisor encuentra una contradicción interna con una regla aprobada por el autor.

Preparación:
- Crear una regla etiquetada test_only, explícitamente ficticia y no perteneciente al canon de DanMachi.
- Ejemplo de test: “Un personaje no puede estar en dos lugares físicamente separados en el mismo instante, salvo que exista una excepción registrada”.
- Preparar una escena que sitúe al mismo personaje en dos lugares al mismo tiempo, sin excepción.

Resultado esperado:
- AUTHOR_RULE_CONFLICT.
- Referencia a la regla de prueba.
- No presentarlo como un hecho oficial de DanMachi.

Estado: READY_AS_SYNTHETIC_TEST.

## TC-005 — Información insuficiente

Objetivo: comprobar que el revisor reconoce los límites del material consultado.

Preparación:
- Proporcionar una premisa temporal cuya fecha de referencia no se haya definido.
- No aportar fuentes que permitan inferirla con fiabilidad.

Resultado esperado:
- INSUFFICIENT_DATA o AMBIGUITY.
- Solicita únicamente el dato imprescindible o explica qué evidencia falta.
- No rellena la fecha por intuición.

Estado: READY_FOR_TEST.

## Métricas

Registrar cada ejecución en una tabla con:
- Caso y versión del prompt.
- Clasificación esperada.
- Clasificación obtenida.
- Evidencia citada correctamente: sí/no.
- Hecho inventado: sí/no.
- Falso positivo: sí/no.
- Hallazgo omitido: sí/no.
- Override respetado: sí/no/no aplicable.
- Tiempo de revisión.
- Veredicto humano y observaciones.

Calcular precisión de los hallazgos, tasa de falsos positivos y tasa de detección de conflictos sembrados. No declarar éxito general con una sola ejecución ni con cinco escenas pequeñas. Las pruebas iniciales sirven para encontrar fallos del método, no para demostrar perfección.
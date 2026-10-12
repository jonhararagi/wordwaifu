# Plantilla de registro de lore

Cada afirmación importante debe poder revisarse por separado. No mezclar una ficha entera de personaje con muchas afirmaciones de distinta certeza dentro de un único campo.

## Campos obligatorios

- id: identificador estable, único y no dependiente del nombre.
- universe: universo al que pertenece el registro.
- type: character, location, event, rule, relationship, timeline, author_intent o source_note.
- title: título corto.
- claim: afirmación concreta y atómica.
- status: canon_verified, author_rule, au_override, interpretation, in_world_rumor, unknown, outdated o pending_verification.
- source_refs: referencias identificables que sostienen la afirmación; vacío si no hay una fuente verificada.
- time_scope: fecha, intervalo, época, capítulo o “desconocido”.
- confidence: high, medium, low o unverified, acompañado de una explicación.
- tags: etiquetas de búsqueda.
- related_ids: IDs de registros relacionados.
- supersedes: IDs de registros o reglas que esta afirmación reemplaza explícitamente; normalmente vacío.
- author_decision: pending, accepted, rejected o revised.
- last_verified: fecha de verificación o “never”.

## Ejemplo de estructura vacía

id: DM-EXAMPLE-001
universe: danmachi
type: rule
title: Título descriptivo
claim: Una sola afirmación que pueda comprobarse.
status: pending_verification
source_refs: []
time_scope: unknown
confidence: unverified
confidence_note: No se ha incorporado ni comprobado una fuente.
tags: []
related_ids: []
supersedes: []
author_decision: pending
last_verified: never

## Reglas de uso

1. No asignar canon_verified sin una referencia identificable revisada.
2. No usar confidence como sustituto de una fuente. Una suposición puede parecer plausible y seguir sin verificar.
3. Una regla AU debe explicar qué parte del canon reemplaza, si la reemplaza.
4. Un cambio AU nuevo no debe borrar la ficha del canon: ambas capas se conservan y se relacionan.
5. Si dos fuentes discrepan, registrar la discrepancia en lugar de resolverla en silencio.
6. Separar el hecho citado de la interpretación que se deriva de él.
7. Una fecha aproximada debe seguir siendo aproximada; no inventar día, mes o año.
8. Registrar el volumen, capítulo, sección, página o ubicación exacta solo cuando se haya comprobado realmente.
9. No almacenar texto extenso de libros protegidos. Preferir afirmaciones resumidas con referencias.
10. Los datos inventados para pruebas deben llevar la etiqueta test_only y nunca mezclarse con el canon del proyecto.
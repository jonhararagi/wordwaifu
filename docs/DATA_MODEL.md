# Modelo de datos canónico

Este documento define el vocabulario común. La implementación inicial puede simplificar campos, pero no debe romper la regla de IDs estables y referencias compartidas.

## Reglas generales

- Cada registro tiene un ID estable e independiente de su nombre.
- Los nombres pueden cambiar sin romper enlaces.
- Cada registro incluye project_id, created_at, updated_at y estado de canon cuando corresponda.
- No duplicar datos de una entidad en otra: usar referencias.
- Campos desconocidos pueden quedar vacíos. No inventar datos para rellenar una ficha.
- Distinguir canon, proposal, rumor, unknown y deprecated cuando aplique.

## Entidades iniciales

### Project
id, name, description, genre_profile, tone, canon_rules, created_at, updated_at.

### Character
id, project_id, name, aliases[], species, age_value, age_unit, age_as_of, pronouns, appearance, personality_traits[], values[], flaws[], motivations[], fears[], skills[], abilities[], likes[], dislikes[], favorite_foods[], hated_foods[], hobbies[], backstory, secrets[], arc_ids[], organization_ids[], canon_status, notes.

### Location
id, project_id, name, location_type, parent_location_id, description, climate, culture, government, economy, resources[], coordinates, map_layer, canon_status, notes.

### Organization
Entidad independiente para gremios, facciones, órdenes, gobiernos y otros grupos:
id, project_id, name, organization_type, description, ideology, goals[], leader_character_ids[], member_character_ids[], base_location_id, history, canon_status.

**Contrato implementado en el prototipo (JavaScript camelCase):** `id`, `name`, `organizationType`, `description`, `ideology`, `goals[]`, `leaderCharacterIds[]`, `memberCharacterIds[]`, `baseLocationId` (`null` o un `Location.id` existente), `history`, `status`.

Los responsables y miembros son referencias a `Character.id`; la sede apunta a `Location.id`. No se guardan copias de las fichas. La validación verifica las referencias y mantiene los IDs de organización únicos frente a las demás entidades. El campo superior `organizations` es compatible hacia atrás: si falta en un proyecto antiguo, la normalización produce una lista vacía. El borrado de una organización no borra sus miembros ni su sede.

No se ha incorporado todavía una referencia inversa `Character.organizationIds`; se evitará mantener dos grafos redundantes hasta que un caso de uso probado lo justifique.

### Event
id, project_id, title, description, start_time, end_time, precision, location_ids[], participant_character_ids[], organization_ids[], cause_event_ids[], consequence_event_ids[], story_reference, canon_status.

### Relationship
Entidad de primera clase que conecta dos personajes existentes por IDs estables:
id, project_id, source_character_id, target_character_id, relationship_type, description, start_time, end_time, intensity, is_secret, canon_status.

**Contrato implementado en el prototipo (JavaScript camelCase):** `id`, `name` (etiqueta breve visible), `sourceCharacterId`, `targetCharacterId`, `relationshipType`, `description`, `status`.

El prototipo trata las relaciones como vínculos simétricos entre un par de personajes: la pareja no ordenada + tipo no se puede duplicar, un personaje no puede relacionarse consigo mismo y se permiten tipos distintos para la misma pareja. Los IDs de ambos extremos deben resolver a personajes existentes. La edición conserva el ID de relación; borrar el vínculo conserva las fichas. Cuando se borra un personaje, se eliminan las relaciones que lo referencian.

La colección raíz `relationships[]` es la fuente de verdad. `characters[].relationships` se conserva como proyección recíproca compatible con proyectos/pantallas anteriores. Si un proyecto antiguo no incluye `relationships[]`, sus enlaces por ID se migran automáticamente a registros canónicos, colapsando pares recíprocos en un registro. No se cambia `schemaVersion: 1`. Los campos temporales `start_time`, `end_time`, intensidad, secreto y referencias a eventos todavía no se implementan en la UI.

### Presence / Location Assignment
No guardar una sola ubicación mutable si necesitamos saber dónde estuvo alguien anteriormente. Registrar intervalos o eventos de presencia:
id, character_id, location_id, start_time, end_time, story_position, reason, source_event_id, certainty, canon_status.

Un personaje puede tener varias ubicaciones si la historia lo justifica (por ejemplo, viaje, proyección, clon o información incierta). Las reglas deben permitir excepciones explícitas.

### Story / Novel / Chapter / Scene
- Story: premisa, género, tono, conflicto central, apuestas, final previsto, estado.
- Novel: id, story_id, título, volumen, orden, estado.
- Chapter: id, novel_id, orden, título, resumen, objetivo, conflicto, cambio, referencias de canon.
- Scene: id, chapter_id, orden, ubicación, participantes, punto de vista, objetivo, obstáculo, resultado, borrador Markdown, estado de revisión.

### MediaAsset
id, project_id, entity_id, asset_type, relative_path o referencia de blob, mime_type, width, height, license, creator, source_url, attribution, notes.

## Canon y versiones

Cada entidad narrativa puede incluir canon_status: canon, proposal, rumor, unknown o deprecated; source_note; valid_from y valid_to o referencias de evento para estados temporales; revision_id en una futura capa de historial.

El usuario puede aprobar una propuesta, rechazarla o editarla antes de canonizarla.

## Identidad vs estado temporal

No mezclar identidad permanente con estado de un capítulo. El nombre, la especie y los rasgos base pertenecen a la ficha. La ubicación, heridas, atuendo, afiliación temporal, conocimiento de secretos y estado emocional pueden variar por fecha o capítulo y deben modelarse como estados/eventos cuando la continuidad lo requiera.

## Ejemplo conceptual

Un marcador de mapa apunta a location_id = loc-orario; una ficha apunta a character_id = char-example; una presencia enlaza ambos durante un intervalo. El mapa consulta presencias para mostrar quién está allí en el momento seleccionado. La ciudad no necesita almacenar una copia de todas las fichas.


## Índice maestro multiverso (implementación inicial)

El índice de búsqueda no reemplaza el canon ni se guarda como una segunda copia editable. Consulta los proyectos persistidos en IndexedDB en modo de solo lectura y construye coincidencias en memoria. La identidad de cada resultado es compuesta: `projectId + entityType + entityId`; un mismo `entityId` puede existir en universos diferentes sin ser el mismo registro.

El resultado incluye el nombre del universo, ID de proyecto, tipo de entidad, ID estable del registro, nombre y detalle. En la iteración inicial se incluyen personajes, lugares, acontecimientos, organizaciones, relaciones e historias, con filtro por tipo y búsqueda de texto sobre los campos relevantes de cada ficha. La normalización de texto tolera diferencias de acentuación.

Si IndexedDB no se puede leer, solo se puede consultar el respaldo local disponible. El método devuelve `complete: false` y una advertencia; la interfaz comunica `BÚSQUEDA PARCIAL`. No debe sugerir que no hay resultados si no se pudieron examinar todos los proyectos. Una futura optimización podrá introducir caché o índice invertido solo con invalidación/reconstrucción demostrada, evitando desincronizar el canon.

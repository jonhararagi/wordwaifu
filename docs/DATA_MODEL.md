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
id, project_id, name, organization_type, ideology, goals[], leader_character_ids[], member_character_ids[], base_location_id, history, canon_status.

### Event
id, project_id, title, description, start_time, end_time, precision, location_ids[], participant_character_ids[], organization_ids[], cause_event_ids[], consequence_event_ids[], story_reference, canon_status.

### Relationship
id, project_id, source_entity_id, target_entity_id, relationship_type, description, start_time, end_time, intensity, is_secret, canon_status.

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

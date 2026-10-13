(function (root, factory) {
  "use strict";
  const api = factory();
  if (typeof module === "object" && module.exports) {
    module.exports = api;
  } else {
    root.WordWaifuProjectSchema = api;
  }
})(typeof globalThis !== "undefined" ? globalThis : this, function () {
  "use strict";

  const isRecord = (value) => value !== null && typeof value === "object" && !Array.isArray(value);
  const isNonEmptyString = (value) => typeof value === "string" && value.trim().length > 0;
  const hasStringArray = (item, key, path, errors, fallback = []) => {
    if (item[key] === undefined || item[key] === null) {
      item[key] = fallback.slice();
      return;
    }
    if (!Array.isArray(item[key]) || item[key].some((value) => typeof value !== "string")) {
      errors.push(path + "." + key + " debe ser una lista de textos.");
      item[key] = [];
    }
  };

  function validateAndNormalizeProject(input) {
    const errors = [];
    if (!isRecord(input)) {
      return { valid: false, errors: ["El archivo debe contener un objeto JSON."], project: null };
    }
    if (input.schemaVersion !== 1) errors.push("schemaVersion debe ser 1.");
    if (!isRecord(input.project)) errors.push("Falta el objeto project.");
    else {
      if (!isNonEmptyString(input.project.id)) errors.push("project.id debe ser un texto no vacío.");
      if (!isNonEmptyString(input.project.name)) errors.push("project.name debe ser un texto no vacío.");
    }
    for (const key of ["locations", "characters", "events"]) {
      if (!Array.isArray(input[key])) errors.push(key + " debe ser una lista.");
    }
    if (input.organizations !== undefined && !Array.isArray(input.organizations)) {
      errors.push("organizations debe ser una lista.");
    }
    if (input.relationships !== undefined && !Array.isArray(input.relationships)) {
      errors.push("relationships debe ser una lista.");
    }
    if (errors.length) return { valid: false, errors, project: null };

    const hasExplicitRelationships = Array.isArray(input.relationships);
    const project = {
      ...input,
      project: { ...input.project },
      locations: input.locations.map((item) => isRecord(item) ? { ...item } : item),
      characters: input.characters.map((item) => isRecord(item) ? { ...item } : item),
      events: input.events.map((item) => isRecord(item) ? { ...item } : item),
      organizations: Array.isArray(input.organizations) ? input.organizations.map((item) => isRecord(item) ? { ...item } : item) : [],
      relationships: hasExplicitRelationships ? input.relationships.map((item) => isRecord(item) ? { ...item } : item) : [],
      stories: Array.isArray(input.stories) ? input.stories.map((item) => isRecord(item) ? { ...item } : item) : [],
      settings: isRecord(input.settings) ? { ...input.settings } : { time: "now" }
    };

    // Legacy relationship arrays are migrated into a single stable record per pair.
    if (!hasExplicitRelationships) {
      const knownCharacterIds = new Set(project.characters.filter(isRecord).map((character) => character.id).filter(isNonEmptyString));
      const migrated = new Map();
      for (const character of project.characters) {
        if (!isRecord(character) || !isNonEmptyString(character.id) || !Array.isArray(character.relationships)) continue;
        for (const relatedId of character.relationships) {
          if (!isNonEmptyString(relatedId) || relatedId === character.id || !knownCharacterIds.has(relatedId)) continue;
          const [sourceCharacterId, targetCharacterId] = [character.id, relatedId].sort();
          const key = sourceCharacterId + "\\u0000" + targetCharacterId;
          if (!migrated.has(key)) migrated.set(key, {
            id: "rel-legacy-" + encodeURIComponent(sourceCharacterId) + "-" + encodeURIComponent(targetCharacterId),
            name: "Relación heredada", sourceCharacterId, targetCharacterId,
            relationshipType: "other",
            description: "Relación migrada desde la ficha del proyecto anterior.",
            status: "unknown"
          });
        }
      }
      project.relationships = Array.from(migrated.values());
    }

    const groups = [
      ["locations", project.locations],
      ["characters", project.characters],
      ["events", project.events],
      ["organizations", project.organizations],
      ["relationships", project.relationships],
      ["stories", project.stories]
    ];
    const ids = new Set();
    const byGroup = {};
    for (const [groupName, list] of groups) {
      byGroup[groupName] = new Set();
      list.forEach((item, index) => {
        const itemPath = groupName + "[" + index + "]";
        if (!isRecord(item)) {
          errors.push(itemPath + " debe ser un objeto.");
          return;
        }
        if (!isNonEmptyString(item.id)) {
          errors.push(itemPath + ".id debe ser un texto no vacío.");
        } else {
          if (ids.has(item.id)) errors.push("ID duplicado: " + item.id + ".");
          ids.add(item.id);
          byGroup[groupName].add(item.id);
        }
        if (!isNonEmptyString(item.name) && groupName !== "events") {
          errors.push(itemPath + ".name debe ser un texto no vacío.");
        }
      });
    }
    if (errors.length) return { valid: false, errors, project: null };

    const locationIds = byGroup.locations;
    const characterIds = byGroup.characters;
    const eventIds = byGroup.events;
    const organizationIds = byGroup.organizations;

    project.locations.forEach((location, index) => {
      const path = "locations[" + index + "]";
      if (location.parentId !== undefined && location.parentId !== null && !isNonEmptyString(location.parentId)) {
        errors.push(path + ".parentId debe ser un ID o null.");
      } else if (location.parentId && !locationIds.has(location.parentId)) {
        errors.push(path + ".parentId apunta a un lugar inexistente: " + location.parentId + ".");
      }
      if (location.parentId === location.id) errors.push(path + " no puede ser su propio lugar padre.");
      hasStringArray(location, "tags", path, errors);
      hasStringArray(location, "characters", path, errors);
      hasStringArray(location, "events", path, errors);
      if (location.marker === undefined || location.marker === null) location.marker = [450, 300];
      else if (!Array.isArray(location.marker) || location.marker.length !== 2 || !location.marker.every(Number.isFinite)) {
        errors.push(path + ".marker debe contener dos coordenadas numéricas.");
      }
      if (location.characters) for (const id of location.characters) if (!characterIds.has(id)) errors.push(path + ".characters referencia un personaje inexistente: " + id + ".");
      if (location.events) for (const id of location.events) if (!eventIds.has(id)) errors.push(path + ".events referencia un evento inexistente: " + id + ".");
      if (location.description === undefined || location.description === null) location.description = "";
      if (typeof location.description !== "string") errors.push(path + ".description debe ser texto.");
      if (location.type === undefined || !isNonEmptyString(location.type)) location.type = "Lugar sin clasificar";
    });

    // Detect cycles in the optional location hierarchy.
    const locationById = new Map(project.locations.map((location) => [location.id, location]));
    for (const location of project.locations) {
      const visited = new Set([location.id]);
      let parentId = location.parentId;
      while (parentId && locationById.has(parentId)) {
        if (visited.has(parentId)) {
          errors.push("La jerarquía de lugares contiene un ciclo desde " + location.id + ".");
          break;
        }
        visited.add(parentId);
        parentId = locationById.get(parentId).parentId;
      }
    }

    if (hasExplicitRelationships) {
      project.characters.forEach((character, index) => {
        if (!isRecord(character)) return;
        if (character.relationships !== undefined && character.relationships !== null &&
            (!Array.isArray(character.relationships) || character.relationships.some((id) => typeof id !== "string"))) {
          errors.push("characters[" + index + "].relationships debe ser una lista de textos.");
        }
        character.relationships = [];
      });
      const projectionCharacters = new Map(project.characters.filter(isRecord).map((character) => [character.id, character]));
      project.relationships.forEach((relationship) => {
        if (!isRecord(relationship)) return;
        const source = projectionCharacters.get(relationship.sourceCharacterId);
        const target = projectionCharacters.get(relationship.targetCharacterId);
        if (!source || !target || source.id === target.id) return;
        source.relationships.push(target.id);
        target.relationships.push(source.id);
      });
    }

    project.characters.forEach((character, index) => {
      const path = "characters[" + index + "]";
      hasStringArray(character, "personality", path, errors);
      hasStringArray(character, "relationships", path, errors);
      if (!Array.isArray(character.locationHistory)) character.locationHistory = [];
      character.locationHistory.forEach((entry, entryIndex) => {
        const entryPath = path + ".locationHistory[" + entryIndex + "]";
        if (!isRecord(entry)) {
          errors.push(entryPath + " debe ser un objeto.");
          return;
        }
        if (!isNonEmptyString(entry.locationId) || !locationIds.has(entry.locationId)) {
          errors.push(entryPath + ".locationId apunta a un lugar inexistente.");
        }
        if (entry.from !== undefined && typeof entry.from !== "string") errors.push(entryPath + ".from debe ser texto.");
        if (entry.to !== undefined && typeof entry.to !== "string") errors.push(entryPath + ".to debe ser texto.");
      });
      for (const relationId of character.relationships) {
        if (!characterIds.has(relationId)) errors.push(path + ".relationships referencia un personaje inexistente: " + relationId + ".");
      }
      if (character.age !== undefined && character.age !== null && (typeof character.age !== "number" || !Number.isFinite(character.age) || character.age < 0)) {
        errors.push(path + ".age debe ser un número no negativo o null.");
      }
      if (character.age === undefined) character.age = null;
      for (const key of ["species", "role", "description", "motivation", "flaw", "status"]) {
        if (character[key] === undefined || character[key] === null) character[key] = "";
        if (typeof character[key] !== "string") errors.push(path + "." + key + " debe ser texto.");
      }
    });

    project.events.forEach((event, index) => {
      const path = "events[" + index + "]";
      if (!isNonEmptyString(event.title)) errors.push(path + ".title debe ser un texto no vacío.");
      hasStringArray(event, "locationIds", path, errors);
      hasStringArray(event, "characterIds", path, errors);
      for (const id of event.locationIds || []) if (!locationIds.has(id)) errors.push(path + ".locationIds referencia un lugar inexistente: " + id + ".");
      for (const id of event.characterIds || []) if (!characterIds.has(id)) errors.push(path + ".characterIds referencia un personaje inexistente: " + id + ".");
      if (event.description === undefined || event.description === null) event.description = "";
      if (typeof event.description !== "string") errors.push(path + ".description debe ser texto.");
      if (event.position === undefined || event.position === null) event.position = "unknown";
      if (typeof event.position !== "string") errors.push(path + ".position debe ser texto.");
    });

    project.organizations.forEach((organization, index) => {
      const path = "organizations[" + index + "]";
      hasStringArray(organization, "goals", path, errors);
      hasStringArray(organization, "leaderCharacterIds", path, errors);
      hasStringArray(organization, "memberCharacterIds", path, errors);
      for (const id of organization.leaderCharacterIds) {
        if (!characterIds.has(id)) errors.push(path + ".leaderCharacterIds referencia un personaje inexistente: " + id + ".");
      }
      for (const id of organization.memberCharacterIds) {
        if (!characterIds.has(id)) errors.push(path + ".memberCharacterIds referencia un personaje inexistente: " + id + ".");
      }
      if (organization.baseLocationId === undefined || organization.baseLocationId === null || organization.baseLocationId === "") {
        organization.baseLocationId = null;
      } else if (!isNonEmptyString(organization.baseLocationId)) {
        errors.push(path + ".baseLocationId debe ser un ID o null.");
      } else if (!locationIds.has(organization.baseLocationId)) {
        errors.push(path + ".baseLocationId referencia un lugar inexistente: " + organization.baseLocationId + ".");
      }
      for (const key of ["organizationType", "ideology", "description", "history", "status"]) {
        if (organization[key] === undefined || organization[key] === null) {
          organization[key] = key === "organizationType" ? "Organización sin clasificar" : "";
        }
        if (typeof organization[key] !== "string") errors.push(path + "." + key + " debe ser texto.");
      }
    });

    const relationCharacters = new Map(project.characters.filter(isRecord).map((character) => [character.id, character]));
    const seenRelationshipKeys = new Set();
    project.relationships.forEach((relationship, index) => {
      const path = "relationships[" + index + "]";
      if (!isRecord(relationship)) {
        errors.push(path + " debe ser un objeto.");
        return;
      }
      const sourceId = relationship.sourceCharacterId;
      const targetId = relationship.targetCharacterId;
      if (!isNonEmptyString(sourceId) || !characterIds.has(sourceId)) errors.push(path + ".sourceCharacterId referencia un personaje inexistente.");
      if (!isNonEmptyString(targetId) || !characterIds.has(targetId)) errors.push(path + ".targetCharacterId referencia un personaje inexistente.");
      if (isNonEmptyString(sourceId) && sourceId === targetId) errors.push(path + " no puede relacionar un personaje consigo mismo.");
      if (relationship.relationshipType === undefined || relationship.relationshipType === null || relationship.relationshipType === "") {
        relationship.relationshipType = "other";
      } else if (typeof relationship.relationshipType !== "string") {
        errors.push(path + ".relationshipType debe ser texto.");
      } else {
        relationship.relationshipType = relationship.relationshipType.trim() || "other";
      }
      if (relationship.description === undefined || relationship.description === null) relationship.description = "";
      if (typeof relationship.description !== "string") errors.push(path + ".description debe ser texto.");
      if (relationship.status === undefined || relationship.status === null) relationship.status = "proposal";
      if (typeof relationship.status !== "string") errors.push(path + ".status debe ser texto.");

      if (isNonEmptyString(sourceId) && isNonEmptyString(targetId) && sourceId !== targetId &&
          characterIds.has(sourceId) && characterIds.has(targetId) && typeof relationship.relationshipType === "string") {
        const [firstId, secondId] = [sourceId, targetId].sort();
        const key = firstId + "\\u0000" + secondId + "\\u0000" + relationship.relationshipType.toLowerCase();
        if (seenRelationshipKeys.has(key)) errors.push(path + " duplica una relación existente entre el mismo par y tipo.");
        else seenRelationshipKeys.add(key);
      }
    });

    project.characters.forEach((character) => { if (isRecord(character)) character.relationships = []; });
    project.relationships.forEach((relationship) => {
      if (!isRecord(relationship)) return;
      const source = relationCharacters.get(relationship.sourceCharacterId);
      const target = relationCharacters.get(relationship.targetCharacterId);
      if (!source || !target || source.id === target.id) return;
      if (!source.relationships.includes(target.id)) source.relationships.push(target.id);
      if (!target.relationships.includes(source.id)) target.relationships.push(source.id);
    });

    project.stories.forEach((story, index) => {
      if (!isRecord(story)) {
        errors.push("stories[" + index + "] debe ser un objeto.");
        return;
      }
      if (!isNonEmptyString(story.name)) errors.push("stories[" + index + "].name debe ser un texto no vacío.");
      if (story.description === undefined || story.description === null) story.description = "";
      if (typeof story.description !== "string") errors.push("stories[" + index + "].description debe ser texto.");
    });

    if (errors.length) return { valid: false, errors, project: null };
    return { valid: true, errors: [], project };
  }

  return { validateAndNormalizeProject };
});

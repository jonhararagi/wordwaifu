# Plantilla de personaje

id:
universe: danmachi
entity_type: character
canonical_name:
aliases: []
romanizations: []
name_confidence: pending
continuity_scope: main
identity_record_id: # ID estable de la persona a través de épocas/continuidades
version_record_id: # Opcional: ID del estado temporal si se mantiene por separado
temporal_scope: [] # época, intervalo y precisión temporal
appearance_records: [] # eventos/escenas enlazados, sin clonar la persona
continuity_variants: [] # estados AU/adaptación, no sustituyen el canon
canon_status: provisional
spoiler_level: none
species:
deity_or_race:
age_value:
age_precision: unknown
date_of_birth:
first_appearance:
first_source_id:
first_source_locator:
familia_membership: []
roles: []
appearance_summary:
personality_summary:
motivations: []
psychology_profile:
  dominant_traits: []
  values: []
  likes: []
  dislikes: []
  fears: []
  habits: []
  speech_style: []
  stress_response: []
  behavioral_patterns: []
  internal_conflicts: []
  development_by_period: []
  evidence_claims: [] # each: claim_id, aspect, claim, era_or_interval, continuity_scope, evidence_type, source_id, source_locator, verification_status, confidence_note
abilities: []
skills: []
magic: []
status_by_period: []
relationships: []
locations_by_period: []
events: []
knowledge_state:
  knows: []
  suspects: []
  does_not_know: []
  status: pending
  source_refs: []
  confidence: unverified
open_questions: []
related_record_ids: []
duplicate_candidates: []
author_approved_overrides: []
last_cross_checked:
verification_status: stub

## Instrucciones

- Mantener identidad, época, continuidad y estado temporal como capas separadas.
- Una persona puede tener varios estados por época/continuidad; enlazarlos con identity_record_id.
- La AU no sobrescribe el canon: se registra como variante con su divergencia explícita.
- Guardar cambios por evento/intervalo en vez de sobrescribir el estado anterior.
- Cada habilidad, edad, afiliación, rasgo psicológico o preferencia disputable necesita una fuente y su nivel de evidencia.
- No convertir una inferencia de personalidad en hecho explícito; cada afirmación del perfil debe poder enlazarse con un claim_id y una fuente.
- Gustos, miedos, aversiones y voz pueden quedar vacíos hasta encontrar evidencia. Usar development_by_period cuando el rasgo cambie en etapas distintas.
- Los campos desconocidos quedan vacíos o se marcan unknown; no se rellenan por intuición.
- Si hay un alias, buscarlo antes de crear un segundo personaje.
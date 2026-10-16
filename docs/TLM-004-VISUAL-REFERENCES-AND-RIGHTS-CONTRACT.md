# TLM-004 — Panoramas visuales, referencias y procedencia de recursos

**Autoriza:** CEREBRO  
**Ejecuta:** BOT OBRERO  
**Estado:** IN_PROGRESS — tarea activa única  
**Rama autorizada:** `work/story-completion-danmachi-audit-2026-10`  
**Dependencias:** TLM-001, TLM-002 y TLM-003 aceptadas.  
**HEAD de cierre TLM-003:** `67c48d55601a372653c425e1517cfe4f6c322813`; comprobar HEAD real antes de modificar.  
**Fuera de límites:** no cambiar `main`, no fusionar ramas ni cambiar PR sin autorización expresa.

## 1. Objetivo de producto

Hacer que la cronología/atlas de DanMachi sea más comprensible visualmente: desde un acontecimiento o lugar, el usuario debe poder ver una referencia panorámica pertinente, conocer su fuente, distinguir su continuidad y nivel de spoilers y regresar al acontecimiento sin perder el contexto.

El usuario pidió referencias del anime/novela y mencionó el enfoque anterior de “uso educativo/personal” y marca de agua. La implementación debe tratar esos elementos con honestidad: **un rótulo educativo, el uso personal, la atribución o una marca de agua no conceden por sí solos permiso de reproducción o distribución**.

No incorporar al repositorio público imágenes de anime, ilustraciones de novelas, scans, capturas de pantalla, portadas ni fanart de terceros por defecto. Se puede implementar soporte para referencias remotas autorizadas/permitidas, links a la fuente original y recursos locales propios o con licencia/permiso compatible. El contenido local del usuario debe almacenarse en el navegador, no comitearse a GitHub.

## 2. Inspección obligatoria antes de escribir

Leer y verificar el estado actual de:
- `docs/CONTENT_RIGHTS_AND_TAKEDOWN.md`
- `docs/TLM-003-TIMELINE-MAP-INTEGRATION-REPORT.md`
- `docs/DANMACHI-LOCATION-MODEL.md`
- `lore/danmachi/timeline/eras-and-events.json`
- `lore/danmachi/catalog.json`
- `src/danmachi-timeline.js`
- `src/official-character-roster.js`
- `src/lore-corpus.js`
- `src/character-archive.js`
- `src/art-studio.js`
- `index.html`, `src/styles.css` y pruebas pertinentes.

La auditoría previa indica que el roster oficial ya enlaza algunos retratos remotos desde perfiles oficiales y declara que no los almacena. El panel de arte admite URL y archivo local y usa IndexedDB/localStorage. Comprobar el comportamiento actual; no asumir que ya hay un sistema de panoramas, procedencia por recurso o watermark funcional.

## 3. Modelo de referencia visual

Definir y documentar un objeto tipado compatible con el corpus actual. Puede llamarse `visualRefs`, `visualReferences` o equivalente. Debe evitar duplicar un activo usado por varios eventos: cada recurso tiene ID estable y se reutiliza desde eventos/lugares por referencia.

Campos mínimos recomendados:
- `id`: ID estable y único.
- `mediaType`: image, cover, illustration, screenshot, scene_page u otro tipo permitido y explícito.
- `title` / `caption`: texto original breve, sin copiar descripciones protegidas.
- `assetUrl` o referencia local si corresponde; nunca inventar URL ni descargar la imagen automáticamente.
- `sourcePageUrl`: página original donde se identifica/consulta el recurso.
- `creatorOrRightsholder`: autor/titular conocido; admite unknown, no atribuir derechos por conjetura.
- `sourceKind`: official, publisher, user_provided, original_art, open_license, permission_granted u otro valor documentado.
- `usageStatus`: external_reference, user_owned, licensed, permission_recorded, pending_review o blocked.
- `licenseName` / `licenseUrl` / `permissionEvidence`: campos de procedencia/licencia según corresponda. No inventar licencias ni evidencias.
- `continuityScope`: continuidad del elemento visual (por ejemplo CONT-ANIME no se convierte automáticamente en CONT-MAIN-LN).
- `spoilerLevel`: nivel de spoiler, en coordinación con los estados existentes.
- `relatedEventIds` y/o `relatedLocationIds`: vínculos por IDs estables; comprobarlos.
- `creditLine`: atribución clara si se conoce.
- `storageMode`: remote, browser_local o bundled_original/licensed, con una explicación clara de lo que significa.
- `watermarkPolicy`: none, overlay_reference o apply_to_authorized_copy, según el flujo permitido.
- `notes/limitations`: límites o restricciones de uso conocidos.

No es necesario adoptar nombres exactos de los campos recomendados si la arquitectura existente ofrece un contrato mejor. Sí deben persistir los conceptos por separado y ser validables.

## 4. Clases de recurso y comportamiento

### A. Referencia oficial remota

- Preferir la página oficial/editorial como destino de enlace.
- Se puede mostrar una previsualización remota solo cuando el origen y las condiciones de uso/embebido lo permitan y el host pase la política de URLs permitidas existente. Si no, mostrar una tarjeta con título, atribución y enlace a la fuente original.
- Mostrar claramente “referencia externa; no guardada localmente”. Un enlace oficial o una imagen servida por un sitio oficial no significa que WordWaifu tenga licencia ni que se pueda redistribuir.
- No scrape/descargar páginas, capturas, portadas ni imágenes automáticamente.
- No llevar estos recursos al build ni al repositorio mediante capturas o data URLs.

### B. Recurso local aportado por el usuario

- Soportar selección desde el dispositivo/archivo mediante el mecanismo local existente, si es compatible con el tamaño y persistencia disponibles. El archivo permanece en IndexedDB/localStorage del navegador y no se sube a GitHub ni a un servicio remoto.
- Pedir al usuario que declare su situación de uso antes de registrar el recurso: propio, licencia compatible, permiso registrado o uso cuya autorización está pendiente.
- Guardar título/fuente/titular/licencia/permiso declarados y fecha de incorporación, sin pedir datos personales innecesarios.
- Si el estado es pending_review, advertirlo y no presentarlo como “autorizado”.
- Informar límites reales de almacenamiento, errores de persistencia y estrategia de recuperación; no indicar que el archivo se guardó si el guardado falló.

### C. Arte original de WordWaifu o material con licencia compatible

- Admitir recursos originales creados para el proyecto o assets con licencia compatible.
- Registrar autoría/procedencia, herramienta si aplica, fecha, licencia y condiciones.
- Confirmar que se puede distribuir antes de incluir cualquier recurso en GitHub. Un asset local no debe comitearse salvo que su licencia/autoría y permiso de distribución estén documentados.

## 5. Marca de agua y créditos

Separar dos funciones distintas:

1. **Overlay de atribución dentro de la UI:** puede mostrar título/fuente/titular, continuidad, estado de derechos y un rótulo tipo “Referencia visual · no almacenada”. No modifica la imagen fuente.
2. **Exportación de copia con marca de agua:** solo para imagen propia o cuya licencia/permiso permita la modificación y exportación. Exigir confirmación explícita del estado de derechos y conservar el original sin alterarlo.

Si la marca de agua se configura, permitir texto configurable, posición/contraste suficientes para ser visible y que no cubra caras, subtítulos, créditos originales ni información clave. Para exportaciones autorizadas, usar una etiqueta honesta (p. ej. “WordWaifu · referencia personal”) y mantener la atribución del titular. No utilizar “uso educativo” o “uso personal” como afirmación automática de legalidad.

La UI debe indicar que marca de agua, atribución o carácter educativo/personal no sustituyen permiso/licencia. No generar una copia marcada de un recurso con estado blocked o pending_review. Para referencias remotas, limitarse al overlay informativo de la UI salvo permiso/licencia que permita transformar/exportar la imagen.

## 6. Experiencia de panoramas

- Añadir una sección discreta “Referencias visuales” en la tarjeta/ficha de acontecimiento y lugar del panel DanMachi ya existente. Evitar una grilla masiva o un formulario con metadatos dispersos.
- Una tarjeta visual debe identificar título, tipo (p. ej. retrato/perfil oficial, ilustración, portada, captura autorizada), continuidad, nivel de spoiler, crédito/estado de uso y fuente.
- Si la imagen está disponible en navegador, usar previsualización que respete relación de aspecto y tamaño; clic abre una vista ampliada, sin romper el filtro temporal/de continuidad ni la navegación de evento/lugar.
- Si no se puede previsualizar, mostrar un placeholder útil con enlace a la fuente, no un recuadro vacío.
- Se puede añadir una banda/hero visual para un lugar o acontecimiento cuando haya un activo válido, pero no inventar panoramas ni generar escenas falsas a partir de una imagen de personaje.
- En el caso de un acontecimiento sin recurso adecuado, indicar “Sin referencia visual disponible”; no mostrar otra escena como si perteneciera al evento.
- La continuidad de la imagen es independiente de la continuidad de los datos: una ilustración de anime debe decir CONT-ANIME, no se usa como prueba visual de una escena específica de novela.
- Spoiler gating: si la vista actual filtra spoilers, las tarjetas y thumbnails deben respetar el filtro existente.
- Mantener uso offline-first. Los recursos remotos pueden no cargar sin conexión; mostrar placeholder. Los archivos locales autorizados siguen disponibles si el almacenamiento del navegador los conserva.

## 7. Datos de DanMachi a registrar en esta fase

- Auditar los 15 acontecimientos y las 2 fichas geográficas (LOC-ORARIO, LOC-DUNGEON) para identificar qué tipo de referencia visual sería útil; no es requisito forzar una imagen para cada evento.
- Reutilizar las páginas de fuentes oficiales/editoriales ya registradas como destinos de referencia cuando realmente correspondan; no asumir que cada página contiene una imagen de escena autorizada para incrustarse.
- Cualquier retrato oficial existente del roster es una referencia del personaje/adaptación indicada, no prueba de que el retrato muestre el acontecimiento histórico asociado.
- No usar una ilustración o captura de Astrea Record como si fuese una escena confirmada de la tragedia T−5 sin una fuente que permita asociarla.
- Para eventos con UNKNOWN o PROVISIONAL espacial, no usar un recurso visual para crear una ubicación que la evidencia no respalda.
- No hacer scraping de la Wiki ni copiar sus imágenes.

## 8. Política de URL, seguridad y privacidad

- Reutilizar las validaciones de URL HTTPS y allowlist existentes; no permitir `javascript:`, `data:` remoto, `file:`, URLs arbitrarias con credenciales o ejecución de SVG activo.
- Si se implementa import de archivos, validar tipo, tamaño y errores; evitar insertar nombres/captions como HTML sin escapar.
- No subir imágenes del usuario a GitHub, analytics, endpoints externos o almacenamiento remoto.
- No usar imágenes en pruebas de CI que infrinjan derechos; las pruebas deben usar fixtures sintéticos y URLs mock/placeholder.
- No guardar base64 o binarios de material de terceros dentro de JSON del corpus o dentro de commits.

## 9. Pruebas y criterios de aceptación

- [ ] Modelo de referencia visual documentado; IDs, URLs, license/status, continuidad, spoilers y relaciones validados.
- [ ] Se inspeccionaron los sistemas existentes; el cambio evita duplicar assets/almacenamiento cuando una función ya existe.
- [ ] Enlaces y previsualizaciones remotas siguen el esquema permitido y conservan la página fuente.
- [ ] URL remota no permitida/rota, sin crédito o con derechos pendientes presenta un estado seguro y entendible.
- [ ] Recursos propios/licenciados pueden añadirse localmente con metadatos; el archivo no aparece en Git ni se envía a un servicio remoto.
- [ ] Ninguna imagen oficial nueva se descarga o comitea en el repositorio.
- [ ] Preview y placeholder funcionan; sin imágenes la cronología y el mapa siguen siendo utilizables.
- [ ] Watermark UI y exportación son rutas separadas; exportar exige derechos que permitan modificar la imagen y no altera el original.
- [ ] No se exportan recursos blocked/pending_review ni se presenta “uso educativo/personal” como autorización.
- [ ] UI conserva continuidad/spoilers y navegación de evento ↔ lugar.
- [ ] Pruebas de navegador cubren preview, placeholder, crédito/licencia, falta de red, watermark gate, almacenamiento local y ausencia de contaminación del proyecto activo.
- [ ] Todos los workflows aplicables pasan para el SHA exacto de implementación; revisión Windows 11 si no se realiza permanece NOT_RUN.
- [ ] Informe `docs/TLM-004-VISUAL-REFERENCES-AND-RIGHTS-REPORT.md` registra el comportamiento real y limita lo que la evidencia no prueba.
- [ ] Actualizados STATUS/control y sobrescrito DONE con HEAD verificados y siguiente acción exacta.

## 10. Fuera de alcance

- Comprar licencias, solicitar permisos a titulares o afirmar que la política es asesoramiento jurídico.
- Descargar en lote imágenes oficiales, escenas del anime, scans o ilustraciones de novelas.
- Usar una marca de agua para legitimar material no autorizado.
- Garantizar una cobertura visual completa si no hay recurso permitido disponible.
- Fusionar ramas, modificar main o cambiar el estado de PR.
- Declarar finalizada la validación end-to-end completa del producto: TLM-005 permanece separada.

## 11. Entrega del BOT OBRERO

```text
Tarea: TLM-004
Estado:
Rama:
HEAD BEFORE:
SHA implementación:
HEAD documental:
Modelo de visualRefs:
Eventos/lugares evaluados:
Preview remoto / recursos locales / watermark:
Fuentes, licencias y bloqueos:
Archivos:
Pruebas/workflows por SHA:
PASS_CI / PASS_REAL / PASS_STATIC / NOT_RUN:
Imágenes añadidas al repositorio: sí/no (debe ser no para imágenes oficiales no licenciadas)
main/PR:
Próxima acción exacta:
```

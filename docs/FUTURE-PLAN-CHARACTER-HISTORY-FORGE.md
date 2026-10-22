# Plan futuro: Character History Forge — personajes originales con historia

- **ID del plan:** `WW-FUTURE-CHARACTER-HISTORY-001`
- **Estado:** FUTURO / NO IMPLEMENTADO COMO GENERADOR COMPLETO.
- **Prioridad:** después de cerrar el trabajo activo de DanMachi.
- **Rama de registro:** `work/story-completion-danmachi-audit-2026-10`.
- **Modo obligatorio:** local, sin IA obligatoria, sin API y capaz de funcionar sin Internet.
- **Alcance:** creación histórica y narrativa de personas ficticias; no es un generador visual ni un editor de capas de imagen.

## 1. Puerta de entrada: DanMachi va primero

No comenzar la implementación de este plan mientras quede trabajo activo de DanMachi prioritario en la cola `lore/danmachi/WORK_QUEUE.md`.

Antes de desbloquearlo, registrar en la cola y en el informe de continuidad que:
1. La cobertura acordada de DanMachi llegó a un punto de cierre verificable; cada asunto restante está resuelto o identificado expresamente como bloqueado/fuera de alcance, con motivo.
2. Las comprobaciones de integridad y las pruebas aplicables al último cambio de la rama de trabajo pasan, o cualquier bloqueo externo está documentado con evidencia.
3. El resultado del trabajo de DanMachi y sus limitaciones quedan escritos en el registro de continuidad.

Hasta entonces, este documento solo conserva el plan. No adelantar la implementación por conveniencia ni confundirlo con trabajo terminado. `main` no se modifica por registrar este plan.

## 2. Objetivo del producto

Permitir pulsar una acción como **Crear persona aleatoria** para generar un personaje original que parezca haber vivido en un mundo narrativo, con una biografía breve, rasgos psicológicos conectados con su pasado, vínculos y un conflicto presente. Debe producir una persona coherente, no una lista de adjetivos al azar.

El modelo de ficha detallada de WordWaifu y los expedientes investigados para DanMachi sirven como referencia de profundidad. Los personajes que produzca este motor serán originales y no se presentarán como personajes canónicos de DanMachi ni de ninguna otra franquicia.

## 3. Principios técnicos

- **Sin IA por defecto y sin dependencia de modelos externos.** La lógica central debe ser JavaScript/TypeScript determinista ejecutado localmente mediante tablas, plantillas, reglas y composición de texto.
- **Sin Internet para generar, editar, guardar o volver a abrir las fichas.** Las referencias externas serán opcionales y separadas del generador.
- **Reproducibilidad:** aceptar una semilla (seed) y registrar la versión de las reglas. Con la misma semilla, versión y opciones, la generación debe producir el mismo resultado.
- **Control del autor:** poder bloquear campos escogidos y regenerar solo los demás; editar cualquier resultado manualmente; deshacer o comparar regeneraciones.
- **Uso moderado de CPU/RAM:** evitar un modelo local grande o cálculos costosos. No requerir GPU ni descarga de pesos.
- **Integración con el modelo existente:** reaprovechar el esquema y repositorio de proyectos cuando sea viable, en particular personajes, lugares, eventos, organizaciones, relaciones e historias. No crear una segunda base de datos desconectada.
- **Trazabilidad:** distinguir datos escritos por el usuario, resultados generados por reglas, inferencias y fuentes externas. No inventar citas.
- **Separación de continuidades:** en proyectos de fanfic, la identidad original, la continuidad seleccionada y los datos canon deben conservar su procedencia. El personaje generado no puede modificar silenciosamente las fichas ni los acontecimientos canónicos.

## 4. Ficha histórica mínima

El generador debe completar, cuando corresponda y tenga información suficiente:

- Identidad: ID estable, nombre, edad o edad desconocida, especie y pronombres si el proyecto los usa.
- Contexto: lugar de origen, periodo, profesión/función, organización o Familia y situación actual.
- Personalidad: varios rasgos compatibles entre sí, valores, motivación principal, temor o preocupación opcional, fortaleza y defecto.
- Capacidades y límites: habilidades, recursos, restricciones y aquello que no sabe hacer.
- Historia causal: origen/contexto → acontecimiento formativo → decisión o punto de giro → consecuencia → situación actual.
- Relaciones: vínculos con personajes existentes o generados, con tipo, estado y motivo; no asignar relaciones solo para rellenar casillas.
- Cronología: acontecimientos con orden relativo, lugar si se conoce y consecuencias sobre el estado del personaje.
- Conflicto actual: objetivo concreto, obstáculo, dilema o coste y una posible dirección de evolución.
- Procedencia: estado `generated-original` o equivalente, semilla y versión de reglas; referencias externas únicamente si el usuario las añade.

La edad, los datos sensibles, el trauma y otros elementos personales no deben forzarse si no aportan al personaje. Se permiten incógnitas explícitas en vez de falsa precisión.

## 5. Salidas que debe producir

1. **Ficha rápida:** nombre, papel, rasgos, objetivo y conflicto.
2. **Perfil completo:** biografía cronológica, personalidad explicada por experiencias, capacidades/limitaciones y red de relaciones.
3. **Mini historia:** escena o relato corto que muestre al personaje tomando una decisión y afrontando una consecuencia; debe usar los datos de su ficha y no contradecirlos.
4. **Registro estructurado:** personaje, relaciones y eventos guardables en el proyecto y exportables/importables.
5. **Variantes controladas:** generar otra propuesta, regenerar solo un campo desbloqueado, fijar una semilla o elegir un arquetipo inicial sin convertirlo en resultado rígido.

La prosa se construirá con plantillas combinables y reglas narrativas. No se prometerá calidad literaria ilimitada: la variedad y naturalidad deberán medirse mediante pruebas y revisión de ejemplos.

## 6. Fases de implementación

### Fase A — contrato de datos y reglas
- Confirmar cómo reutilizar `src/project-schema.js` y `src/project-repository.js`.
- Definir el esquema interno de biografía, acontecimientos y relaciones sin romper proyectos existentes.
- Añadir validación para IDs, referencias a personajes/lugares existentes, orden temporal y procedencia original.

### Fase B — motor local determinista
- Crear un módulo separado, propuesto como `src/character-history-forge.js`.
- Implementar semilla reproducible, arquetipos flexibles, tablas de elección ponderada y reglas de compatibilidad.
- Construir la secuencia causal de biografía y conflicto, no frases completamente independientes.
- Crear pruebas automatizadas, propuestas en `tests/test_character_history_forge.cjs`.

### Fase C — interfaz útil
- Integrar la función en WordWaifu sin mezclarla con BotImagen ni con el editor visual.
- Ofrecer botones de crear, regenerar, bloquear/desbloquear campos, guardar y descartar cambios.
- Mostrar la ficha y la mini historia en una vista legible; permitir edición manual.
- Indicar con claridad que el perfil es una propuesta original generada por reglas y que puede editarse.

### Fase D — validación y cierre
- Probar en modo avión y comprobar que no existen solicitudes de red ni claves de API necesarias.
- Probar que la misma semilla y versión dan el mismo resultado.
- Validar IDs únicos, relaciones existentes, cronología razonable y referencias consistentes entre ficha y mini historia.
- Revisar un conjunto variado de resultados para detectar repetición, contradicciones, relaciones arbitrarias y frases sin sentido.
- Ejecutar las pruebas aplicables, pruebas de navegador y validación de proyectos antiguos.
- Registrar limitaciones conocidas; no declarar terminado solo porque el módulo se cargue.

## 7. Criterios de aceptación

El plan solo puede cerrarse si:

- Se puede generar, editar, guardar, cerrar y volver a abrir un personaje sin conexión y sin IA.
- El perfil tiene una cadena causal legible entre pasado, motivación, decisión y conflicto actual.
- La mini historia refleja los rasgos y las relaciones de la ficha, en lugar de contradecirlos.
- La semilla permite reproducir un resultado para la misma versión del motor.
- Las relaciones no apuntan a IDs inexistentes y la cronología no introduce contradicciones obvias.
- Los campos bloqueados permanecen intactos al regenerar otros campos.
- El resultado se identifica como original/generado y no se presenta como canon verificado.
- Las pruebas automatizadas y el smoke test pertinente pasan, y la evidencia se registra en la cola y en el documento de continuidad.

## 8. Fuera de alcance

- Dibujar retratos, producir capas PNG, segmentar pelo/ojos/ropa o generar imágenes.
- Reemplazar el trabajo de investigación de DanMachi ni inventar datos canónicos.
- Requerir ChatGPT, Ollama, una API de pago, una GPU o descargas de modelos.
- Prometer que las combinaciones son todas buenas por ser matemáticamente posibles.

## 9. Referencias de implementación

- Esquema de proyectos: [`src/project-schema.js`](../src/project-schema.js)
- Persistencia de proyectos: [`src/project-repository.js`](../src/project-repository.js)
- Estructura de arcos y planificación: [`src/story-foundry.js`](../src/story-foundry.js)
- Expedientes de personajes de referencia: [`src/character-dossiers.js`](../src/character-dossiers.js)
- Cola DanMachi (puerta de entrada): [`lore/danmachi/WORK_QUEUE.md`](../lore/danmachi/WORK_QUEUE.md)

Estas referencias muestran componentes existentes que pueden reutilizarse; **no significan que el generador histórico ya esté implementado**.

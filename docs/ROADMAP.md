# WordWaifu · Hoja de ruta maestra

> Documento vivo. Las etapas describen el plan, no funcionalidades ya entregadas.

## TIMER de planificación

- Auditoría inicial y definición de alcance: **2–4 horas**.
- Primer prototipo útil, una vez confirmado el objetivo: **1–3 días**.
- MVP con persistencia, práctica y pruebas: **1–3 semanas**, según alcance y recursos.
- Calidad de producto, contenido amplio, accesibilidad y publicación: **varias semanas o más**.
- Estimaciones preliminares. Se recalculan tras inspeccionar el repositorio y elegir la plataforma.

## Fase 0 · Verdad del repositorio

**Objetivo:** saber qué existe antes de diseñar sobre suposiciones.

- [ ] Registrar HEAD, rama predeterminada, árbol de archivos y workflows.
- [ ] Detectar código, dependencias, licencias, secretos accidentales y archivos generados.
- [ ] Ejecutar solo comprobaciones compatibles con el estado real del proyecto.
- [ ] Confirmar el objetivo principal de WordWaifu, idiomas, plataforma inicial y modo de uso.
- [ ] Registrar decisiones y bloqueos en documentación.

**Salida:** inventario verificable, alcance mínimo acordado y ninguna afirmación de implementación sin evidencia.

## Fase 1 · Diseño del producto

- [ ] Definir usuario principal y caso de uso.
- [ ] Diseñar el bucle central: aprender → recuperar de memoria → recibir corrección → repasar → ver progreso.
- [ ] Definir si los personajes son acompañantes cosméticos, narrativos o parte de la progresión.
- [ ] Diseñar estados vacíos, carga, error, falta de conexión y accesibilidad.
- [ ] Elegir métricas de aprendizaje útiles sin manipular al usuario con presión artificial.

**Puerta de calidad:** una especificación breve con criterios de aceptación comprobables.

## Fase 2 · MVP funcional

El alcance final depende de la auditoría y de la plataforma elegida. Si se confirma la hipótesis de aprendizaje de vocabulario, el candidato inicial es:

- [ ] Una sesión de práctica completa, desde elegir contenido hasta recibir resultado.
- [ ] Preguntas con respuesta y explicación verificables.
- [ ] Progreso persistente con recuperación tras cerrar y abrir la aplicación.
- [ ] Revisión de palabras falladas y repetición espaciada sencilla.
- [ ] Interfaz adaptable a móvil y escritorio.
- [ ] Contenido de demostración original con procedencia documentada.
- [ ] Pruebas de la lógica de aprendizaje y de persistencia.

**No incluir todavía:** monetización, sistemas sociales, tienda compleja, IA costosa ni cuentas remotas hasta demostrar que el bucle principal funciona y aporta valor.

## Fase 3 · Calidad de producto

- [ ] Pruebas unitarias de reglas y cálculos.
- [ ] Pruebas de integración para guardado, recuperación y flujos críticos.
- [ ] Comprobación manual o automatizada en tamaños de pantalla representativos.
- [ ] Accesibilidad: teclado, contraste, etiquetas, foco y movimiento reducido.
- [ ] Rendimiento, manejo de errores, recuperación y exportación/borrado de datos si corresponde.
- [ ] CI reproducible con resultados visibles.
- [ ] Instrucciones de instalación y diagnóstico para una persona nueva.

## Fase 4 · Contenido y personalidad visual

- [ ] Definir una guía visual original y consistente.
- [ ] Mantener manifiesto de recursos: archivo, autor, URL de origen, licencia, atribución y uso autorizado.
- [ ] Separar prototipos de referencia de los recursos autorizados para distribución.
- [ ] Crear contenido pedagógico revisado, con respuestas válidas y explicaciones.
- [ ] Evitar depender de servicios externos sin alternativa o aviso claro al usuario.

## Fase 5 · Preparación de publicación

- [ ] Confirmar plataforma y requisitos de publicación.
- [ ] Revisar licencias, privacidad, seguridad, accesibilidad y dependencias.
- [ ] Probar instalación limpia y actualización.
- [ ] Documentar límites conocidos y procedimiento de recuperación.
- [ ] No anunciar lanzamiento hasta completar pruebas y revisión de recursos.

## Política de licencias y recursos externos

El carácter no comercial no concede automáticamente permiso para copiar o redistribuir software, ilustraciones, fuentes, voces, datasets, textos o personajes. Cada recurso externo debe clasificarse antes de integrarlo:

- **APTO:** licencia y atribución compatibles con el uso previsto, documentadas.
- **SOLO REFERENCIA:** se puede estudiar, pero no copiar al producto.
- **REVISIÓN NECESARIA:** términos ambiguos o permiso no confirmado; no distribuir.
- **EXCLUIDO:** licencia incompatible o prohibición clara.

Si un recurso de evaluación no puede permanecer en la entrega, debe estar aislado, identificado y retirarse antes de publicar. No se deben introducir materiales dudosos con la intención de resolverlo al final si eso implica distribuirlos.

## Protocolo de ejecución

1. **INSPECT:** leer las instrucciones y el estado actual; verificar HEAD.
2. **PLAN:** definir una sola tarea activa, archivos objetivo y criterios de aceptación.
3. **EXECUTE:** cambios acotados y reversibles.
4. **VERIFY:** ejecutar pruebas reales cuando sea posible; registrar exactamente lo no ejecutado.
5. **PERSIST:** guardar cambios y documentación en Git.
6. **REPORT:** HEAD antes/después, commit, archivos, pruebas, evidencias y bloqueos.

Estados de evidencia: `PASS_REAL`, `PASS_STATIC`, `FAIL_REAL`, `NOT_RUN`, `UNKNOWN`, `PARTIAL`, `NOT_READY`.

## Decisiones pendientes del propietario

1. ¿WordWaifu es principalmente una app para **aprender vocabulario**, un juego de palabras, un diccionario con personajes, o algo distinto?
2. ¿Cuál es la primera plataforma prioritaria: web, Windows o Android?
3. ¿Qué idioma se aprende primero y cuál es el idioma de la interfaz?

Resolver estas decisiones evita construir una arquitectura bonita para el producto equivocado.

# Hoja de ruta

Estimaciones iniciales orientativas para un desarrollador con asistencia de herramientas; deben recalcularse después de inspeccionar cada entrega. No son promesas de fecha.

## Fase 0 — Dirección y contrato del producto
**Estimación:** 2–4 horas.
- [x] Definir el objetivo único.
- [x] Definir requisitos offline-first.
- [x] Definir el atlas como interfaz distintiva.
- [x] Definir modelo canónico inicial.
- [x] Definir fases y criterios generales.
- [ ] Revisar la documentación y crear el registro de decisiones.

## Fase 1 — MVP visual ejecutable
**Estimación:** 1–2 días.
- Crear interfaz adaptable con navegación lateral y panel principal.
- Añadir un proyecto de demostración original.
- Renderizar un mapa esquemático con marcadores seleccionables.
- Mostrar paneles de lugar y personaje.
- Añadir buscador y filtros mínimos.
- Probar en navegador real.

**Gate:** un usuario puede abrir el proyecto demo, hacer clic en una ciudad, abrir un personaje relacionado y navegar entre ambos.

## Fase 2 — Canon local y persistencia
**Estimación:** 1–3 días.
- CRUD de personajes, ubicaciones, organizaciones y eventos.
- IndexedDB con repositorio desacoplado.
- Exportar/importar JSON con validación.
- Búsqueda y referencias por IDs estables.
- Copias de seguridad.

**Gate:** reiniciar el navegador no pierde el proyecto y exportar/importar conserva las relaciones.

## Fase 3 — Atlas y presencia temporal
**Estimación:** 2–4 días.
- Jerarquía de ubicaciones.
- Capas y filtros.
- Presencias de personajes por evento/capítulo.
- Selector temporal.
- Paneles que consultan el canon compartido.

**Gate:** el mismo personaje aparece en diferentes lugares en distintos momentos sin duplicar su ficha.

## Fase 4 — Generadores sin IA
**Estimación:** 3–6 días.
- Catálogos editables de especies, rasgos, objetivos, defectos y trasfondos.
- Reglas de compatibilidad y plantillas narrativas.
- Semilla reproducible.
- Propuestas que requieren aprobación.
- Generadores de personajes, ciudades, facciones y conflictos.

**Gate:** resultados válidos, editables y reproducibles; las reglas incompatibles se detectan.

## Fase 5 — Historia y novela
**Estimación:** 3–7 días.
- Premisa, actos, arcos y subtramas.
- Volúmenes, capítulos y escenas.
- Editor Markdown local.
- Referencias a personajes, lugares y eventos.
- Exportación de manuscrito.

**Gate:** producir un esquema completo y un borrador organizado a partir de un proyecto existente.

## Fase 6 — Continuity Guard
**Estimación:** 2–5 días.
- Referencias rotas.
- Conflictos temporales de presencia.
- Entidades sin datos esenciales.
- Edad/estado temporal incoherente cuando existan datos suficientes.
- Reportes con explicación y resolución manual.

**Gate:** pruebas con contradicciones sembradas que el sistema detecta sin falsificar certeza.

## Fase 7 — Mejoras visuales y extensiones
- Mapas más avanzados, rutas, territorios y genealogías.
- Biblioteca visual y procedencia/licencias.
- Aplicación de escritorio opcional.
- Conector Git opcional.
- Adaptador de IA opcional, solo si se decide usarlo.

## Orden de prioridad

1. Datos canónicos confiables.
2. Atlas navegable.
3. Presencia temporal.
4. Fichas y relaciones.
5. Generadores por reglas.
6. Esquemas de historias y novelas.
7. Auditoría narrativa.
8. Extensiones visuales e IA opcional.

No saltar directamente a generadores masivos antes de demostrar que el canon y las relaciones sobreviven a la edición y a la recarga.

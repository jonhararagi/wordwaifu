# Microventana de asistencia narrativa (nivel 1)

## Objetivo
Proporcionar ayuda editorial opcional sin convertir WordWaifu en un chatbot ni integrar un modelo en la aplicación. La misma interacción conceptual se usa en NovelTrad.

## Flujo manual
1. El usuario abre **Asistencia narrativa**.
2. Pega un fragmento o abre la ventana con texto previamente seleccionado; puede añadir contexto/glosario.
3. Revisa y modifica el contenido.
4. Marca una casilla explícita de autorización. Sin esa casilla y sin fragmento, copiar/abrir queda deshabilitado.
5. La aplicación copia un prompt contextual al portapapeles y permite abrir ChatGPT o Gemini. El usuario pega y envía manualmente.
6. El resultado se devuelve a la aplicación manualmente y solo se aplica tras revisión del autor.

## Límites de privacidad y seguridad
- El proyecto no hace llamadas de red para enviar contenido, no extrae sesiones/cookies, no automatiza la interfaz del proveedor y no guarda el fragmento del asistente en el proyecto.
- Abrir ChatGPT/Gemini no concede acceso a su sesión ni permite a WordWaifu leer respuestas.
- El usuario controla exactamente el fragmento compartido. Copiar al portapapeles y pegar en un servicio externo sí saca ese contenido de la aplicación local.
- No se prometen cuotas ilimitadas ni disponibilidad gratuita; dependen de cada proveedor/cuenta.
- No se modifica canon, manuscrito ni traducción de forma automática. La asistencia devuelve propuestas.

## Tareas iniciales
Traducción orientativa, análisis de contexto/personajes/relaciones, revisión de continuidad con separación entre hechos e inferencias, estilo/claridad y extracción de términos candidatos para glosario.

## Evolución futura
Un segundo nivel podría evaluar integraciones oficiales de cuentas solo cuando el proveedor ofrezca un mecanismo documentado y autorizado para esa aplicación. No se debe implementar automatización del navegador, scraping de sesiones ni evasión de límites. El nivel 2 no es parte de esta implementación.

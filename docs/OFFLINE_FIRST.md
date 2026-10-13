# Requisitos offline-first y modo sin IA

## Promesa

Las funciones fundamentales de WordWaifu deben trabajar sin IA, sin API y sin Internet.

## Debe funcionar sin conexión

- Crear, abrir, editar y borrar proyectos.
- Gestionar personajes, lugares, organizaciones, eventos y relaciones.
- Explorar y editar mapas esquemáticos almacenados localmente.
- Consultar la cronología y las ubicaciones de personajes.
- Generar fichas, nombres, combinaciones y esquemas usando catálogos y reglas locales.
- Validar referencias y conflictos temporales conocidos.
- Escribir y editar capítulos.
- Buscar en los datos del proyecto.
- Exportar e importar proyectos.
- Crear y restaurar copias de seguridad.

## Lo que no se debe prometer sin IA

- Conversación libre con comprensión general comparable a ChatGPT.
- Redacción literaria original ilimitada y de alta calidad.
- Análisis semántico avanzado de manuscritos extensos.
- Generación de ilustraciones nuevas.

## Command Desk sin IA

El panel puede parecer una conversación, pero opera sobre comandos registrados. Ejemplos:
- crear personaje
- buscar personaje Sakura
- mostrar ciudad Puerto de Cristal
- listar personajes en loc-orario
- asignar personaje a ubicación
- generar ficha con plantilla
- crear esquema de misterio
- validar continuidad
- exportar proyecto

El usuario también puede elegir acciones con botones/formularios. La aplicación debe informar cuando no reconoce una orden y ofrecer comandos disponibles, en vez de simular una respuesta inteligente.

## Generación por reglas

Los catálogos de atributos, fragmentos narrativos y reglas deben ser archivos editables. Cada resultado puede registrar la plantilla y semilla usadas para que el usuario lo reproduzca. El generador presenta el resultado como propuesta; el usuario decide si lo guarda como canon.

## Preparación para una IA futura

Definir una interfaz opcional de proveedor, pero no implementarla como dependencia del MVP. Ninguna pantalla debe bloquearse si no hay proveedor configurado. El núcleo de datos y el atlas no deben conocer ni depender del proveedor.

## Pruebas de aceptación offline

- Abrir la aplicación con la red desconectada y utilizar las funciones esenciales.
- Crear un proyecto, guardar una entidad, recargar y confirmar persistencia.
- Exportar y reimportar sin perder relaciones.
- Ejecutar los generadores locales sin llamadas de red.
- Confirmar que el proyecto no contiene claves API ni requiere login.
- Comprobar que una configuración vacía de IA no rompe la aplicación.

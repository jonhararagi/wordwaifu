# One-Punch Man — expediente inicial

**Estado:** `starter-corpus` — base temática y de continuidad; todavía no es un expediente completo.  
**Cobertura:** mantener separados manga de Yusuke Murata, webcómic original de ONE y adaptación anime.  
**Spoilers:** incluye organizaciones y arcos posteriores. Cada futura ficha debe indicar su medio y punto de corte.

## Premisa y tono

Saitama es un héroe que puede derrotar a muchos enemigos con un solo golpe y, por eso, su fuerza extrema contrasta con el aburrimiento, la falta de reconocimiento y la burocracia que rodean al heroísmo. La serie combina acción, parodia del género superheroico, amenazas de escala creciente, personajes con motivaciones contradictorias y sátira de la fama, las jerarquías y la percepción pública.

El generador debe conservar ese contraste: no convertir todas las escenas en combates de tensión convencional, ni reducir el reparto a una escala de poder. La comedia suele surgir de la diferencia entre lo que ocurre, lo que el público cree que ocurrió y quién recibe el mérito.

## Reglas de continuidad que el generador debe respetar

1. **Saitama:** su poder no debe tratarse como una habilidad con niveles convencionales que aumenta en cada arco. El conflicto puede recaer en reconocimiento, propósito, vínculos, consecuencias y en los problemas que otros personajes sí deben resolver.
2. **Asociación de Héroes:** distinguir clases C, B, A y S, rangos individuales, registro, examen, clasificación pública y evaluación institucional. El rango no es una medida omnisciente de fuerza.
3. **Niveles de desastre:** registrar las etiquetas de amenaza según la fuente y etapa; no inferir automáticamente que la clasificación predice cada resultado.
4. **Monstruos:** separar origen, motivación, nivel de amenaza, inteligencia, afiliación y estado. “Monstruo” no debe funcionar como una explicación uniforme.
5. **Garou:** registrar cada fase del arco del cazador de héroes y sus cambios físicos, tácticos e ideológicos; no colapsar versiones distintas en una sola ficha.
6. **Continuidades:** el manga y el webcómic pueden diferir en escenas, orden, personajes y revelaciones. El anime es otra adaptación, no una transcripción idéntica.
7. **Arcos comunitarios:** algunos nombres de sagas y arcos de las wikis son herramientas editoriales de fans. Marcar su naturaleza, no atribuirlos automáticamente al autor.

## Personajes y entidades para priorizar

| ID sugerido | Entidad | Papel inicial | Datos que debe recoger la ficha |
|---|---|---|---|
| `opm-saitama` | Saitama | Protagonista | capacidad demostrada, motivación cotidiana, humor, vínculos y reconocimiento |
| `opm-genos` | Genos | Discípulo y aliado | cuerpo cibernético, mejoras por etapa, objetivo, costes y relación con Saitama |
| `opm-hero-association` | Hero Association | Institución | clases, rangos, selección, operaciones, comunicación pública y política interna |
| `opm-garou` | Garou | Cazador de héroes y antagonista variable | artes marciales, evolución, motivación, etapas y continuidad |
| `opm-king` | King | Héroe de reputación extraordinaria | percepción pública, malentendidos, habilidades reales y contraste cómico |
| `opm-tatsumaki` | Tatsumaki | Heroína de Clase S | telequinesis, límites demostrados, vínculos y conflictos |
| `opm-fubuki` | Fubuki | Líder de grupo heroico | poderes psíquicos, organización, ambición y relación con su hermana |
| `opm-bang` | Bang / Silver Fang | Maestro marcial | técnica, mentoría, retiro/retorno y vínculos con Garou |
| `opm-blast` | Blast | Héroe de Clase S de alto rango | apariciones, objetivos, aliados y revelaciones según continuidad |
| `opm-monster-association` | Monster Association | Facción antagonista | liderazgo real y público, cuadros, objetivos y desenlace por medio |
| `opm-neo-heroes` | Neo Heroes | Organización rival en el webcómic/manga posterior | estructura, reclutamiento, tecnología y conflicto institucional |
| `opm-the-organization` | The Organization | Amenaza tecnológica | unidades, propósito, conexiones y estado según continuidad |

## Mapa inicial de sagas y arcos

La nomenclatura de abajo es un índice práctico, no una afirmación de que todos los nombres sean oficiales.

- **Inicio:** introducción de Saitama, Casa de la Evolución y Grupo del Paraíso.
- **Asociación de Héroes:** registro de héroes, meteorito, Rey del Mar Profundo, invasores alienígenas y episodios de percepción pública.
- **Saga del Monstruo Humano:** introducción de Garou, Grupo de la Ventisca, cacería de héroes, torneo de artes marciales, incursión y Asociación de Monstruos.
- **Material posterior:** hermanas psíquicas, Neo Heroes, ninjas, amenazas tecnológicas y otros arcos del webcómic/manga, cada uno con etiqueta de continuidad y fecha de revisión.
- Registrar por separado qué eventos aparecen en webcómic, manga y anime. No trasladar automáticamente una revelación de un medio a los demás.

## Fuentes de arranque

- [One-Punch Man Wiki — Story Arcs](https://onepunchman.fandom.com/wiki/Story_Arcs): índice de arcos y correspondencias; señala que sus nombres son comunitarios.
- [One-Punch Man Wiki — Hero Association](https://onepunchman.fandom.com/wiki/Heroes/Hero_Association): estructura, clases y registro de héroes.
- [One-Punch Man Wiki — Monster Association Arc](https://onepunchman.fandom.com/wiki/Monster_Association_Arc): eventos, facciones y diferencias entre medios.
- [One-Punch Man Wiki — Organizations](https://onepunchman.fandom.com/wiki/Organizations): organizaciones principales y facciones.
- Verificar los detalles importantes con el manga/webcómic/anime pertinente. Los resúmenes de wiki son una ayuda de navegación y deben redactarse de nuevo.

## Pendientes para pasar a cobertura verificada

- Crear roster de héroes, monstruos, civiles, asociaciones y personajes secundarios, con alias y medio de origen.
- Registrar clase/rango de héroe, nivel de desastre y afiliación con fechas o etapas.
- Construir cronologías independientes para manga, webcómic y anime; registrar divergencias.
- Desglosar arcos con capítulos y episodios, sin copiar tablas ni sinopsis extensas.
- Registrar combates y resultados sin convertir la jerarquía de poder en una clasificación universal.
- Añadir fuentes por afirmación, revisión de spoilers y pruebas automáticas de IDs, alias y relaciones.

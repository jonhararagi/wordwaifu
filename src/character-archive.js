(function(root,factory){"use strict";const api=factory();if(typeof module==="object"&&module.exports)module.exports=api;else root.WordWaifuCharacterArchive=api;})(typeof globalThis!=="undefined"?globalThis:this,function(){
"use strict";
const LABELS={"CONT-AR":"Astrea Record · Era Oscura","CONT-ANIME":"Adaptación anime · perfiles oficiales","CONT-MAIN-LN":"Novela principal","CONT-AU":"Historia alternativa (AU)","CROSS-CONTINUITY":"Comparación entre continuidades","CONT-SO":"Sword Oratoria · referencia secundaria"};
const ORDER=["CONT-AR","CONT-ANIME","CONT-SO","CONT-MAIN-LN","CONT-AU","CROSS-CONTINUITY"];
const META={
"CHAR-RYUU-LION":{
 overview:"Una identidad con estados separados: etapa histórica de Astrea Record y un perfil posterior de la adaptación anime.",
 states:{
 "CONT-AR":{summary:"La sinopsis editorial presenta a Ryu buscando su propia comprensión de la justicia bajo Astrea, guiada por Alise, identificada como capitana de la Familia.",period:"Era Oscura de Orario · aproximadamente siete años antes de la visita de Bell; ancla relativa.",affiliation:"Astrea Familia"},
 "CONT-ANIME":{summary:"El perfil oficial de la adaptación presenta a Ryu como antigua aventurera y trabajadora de Hostess of Fertility. No sustituye datos de la novela principal.",period:"Estado posterior descrito en DanMachi IV · fecha interna no fijada.",affiliation:"Antigua aventurera · Hostess of Fertility"},
 "CROSS-CONTINUITY":{summary:"La coincidencia del nombre sugiere una identidad común, pero la relación entre fuentes es una inferencia provisional y los estados permanecen separados.",period:"Comparación entre sinopsis editorial de Astrea Record y perfil oficial de adaptación.",affiliation:"Identidad común · estados separados"}
}},
"CHAR-ALISE-LOVELACE":{
 overview:"Capitana de Astrea Familia en la sinopsis histórica; los rasgos descritos por la adaptación permanecen en su continuidad propia.",
 states:{
 "CONT-AR":{summary:"La sinopsis editorial identifica a Alise como capitana de Astrea Familia y la presenta como guía de Ryu durante su búsqueda de justicia.",period:"Astrea Record · aproximadamente siete años antes de la visita de Bell.",affiliation:"Astrea Familia · capitana"},
 "CONT-ANIME":{summary:"El perfil de adaptación describe a Alise como directa y de ánimo luminoso; son rasgos de esa adaptación, no una descripción atemporal.",period:"Perfil de DanMachi IV · fecha interna no fijada.",affiliation:"Astrea Familia · perfil de adaptación"}
}},
"CHAR-ASTREA":{
 overview:"Diosa asociada al marco histórico de Astrea Familia; los rasgos explícitos del anime se mantienen en CONT-ANIME.",
 states:{
 "CONT-AR":{summary:"El material oficial vincula a Astrea con la Familia que se alza en nombre de la justicia y presenta a Ryu buscando su comprensión de justicia bajo su guía.",period:"Periodo histórico de Astrea Record · sin fecha absoluta establecida.",affiliation:"Diosa asociada a Astrea Familia"},
 "CONT-ANIME":{summary:"El perfil oficial de la adaptación la presenta como diosa de justicia y orden, misericordiosa y amable, y describe su reputación en Orario.",period:"Perfil de DanMachi IV · fecha interna no fijada.",affiliation:"Diosa de justicia y orden · adaptación"}
}}

,"DM-CHAR-BELL":{overview:"Bell Cranel es el protagonista aventurero de la Familia Hestia. Esta ficha recoge lo que documenta el perfil de adaptación y separa los hechos de las interpretaciones románticas.",states:{"CONT-ANIME":{summary:"El perfil oficial de la adaptación presenta a Bell llegando a Orario inspirado por los héroes. También describe su admiración por Ais y señala que su madurez romántica todavía es incipiente.",period:"Perfil de adaptación DanMachi V · fecha interna no fijada en esta evidencia.",affiliation:"Familia Hestia · aventurero"}}},
"DM-CHAR-HESTIA":{overview:"Diosa vinculada a la Familia Hestia y a Bell. La ficha distingue el cariño descrito por la fuente de las etiquetas interpretativas sobre sus emociones.",states:{"CONT-ANIME":{summary:"El perfil de adaptación describe a Hestia como bondadosa y señala que sigue trabajando para ayudar a pagar la daga que entregó a Bell. También afirma que ama a Bell y que presta atención a Freya; llamar a esto “celos protectores” es una interpretación, no una cita literal.",period:"Perfil de adaptación DanMachi V · fecha interna no fijada en esta evidencia.",affiliation:"Diosa · Familia Hestia"}}},
"DM-CHAR-AIS":{overview:"Ais Wallenstein es una aventurera de primera clase cuyo dominio de la espada y cuyo interés por el rápido progreso de Bell están descritos en el perfil de adaptación.",states:{"CONT-ANIME":{summary:"El perfil oficial destaca la extraordinaria habilidad de Ais con la espada y su interés por el crecimiento inusualmente rápido de Bell. Ese interés no basta, por sí solo, para afirmar reciprocidad romántica en todos los momentos o continuidades.",period:"Perfil de adaptación DanMachi III · fecha interna no fijada en esta evidencia.",affiliation:"Familia Loki · aventurera de primera clase"}}},
"DM-CHAR-EINA":{overview:"Eina Tulle es la asesora de Bell en el Guild. La ficha diferencia su función documentada de las inferencias sobre su estilo personal.",states:{"CONT-ANIME":{summary:"Eina aparece como asesora asignada a Bell y como fuente de conocimientos sobre el Dungeon y la ciudad. Describirla como práctica y orientadora es una inferencia basada en ese papel, no una cita directa de la fuente.",period:"Perfil de adaptación DanMachi III · fecha interna no fijada en esta evidencia.",affiliation:"Guild · asesora de aventureros"}}},
"CHAR-FINN-DEIMNE":{overview:"Finn Deimne es el capitán de la Familia Loki. La evidencia incorporada describe su capacidad y su aptitud de mando.",states:{"CONT-ANIME":{summary:"El perfil oficial presenta a Finn como un aventurero de gran capacidad y un líder con extraordinaria aptitud de mando. Su planificación táctica es una hipótesis compatible con su función, pero requiere escenas concretas para tratarse como hecho confirmado.",period:"Perfil de adaptación DanMachi III · fecha interna no fijada en esta evidencia.",affiliation:"Familia Loki · capitán"}}},
"CHAR-FREYA":{overview:"Freya es una diosa vinculada a la Familia Freya. La ficha separa el interés que la fuente describe de cualquier interpretación moral sobre sus motivaciones.",states:{"CONT-ANIME":{summary:"El perfil de adaptación describe a Freya atraída por el alma de Bell y deseando que crezca hasta ser un compañero digno de ella. También describe su Charm como una influencia capaz de afectar a humanos, dioses y monstruos.",period:"Perfil de adaptación DanMachi V · puede contener información sensible de la trama.",affiliation:"Diosa · Familia Freya"}}},
"CHAR-OTTAR":{overview:"Ottar es el capitán de la Familia Freya. La evidencia incorporada se centra en su disciplina y en su lealtad hacia su diosa.",states:{"CONT-ANIME":{summary:"El perfil oficial presenta a Ottar como alguien que busca ser más fuerte y entrena arduamente de forma habitual. También lo describe como absolutamente leal a Freya y dispuesto a responder con dureza ante quien la insulte.",period:"Perfil de adaptación DanMachi V · fecha interna no fijada en esta evidencia.",affiliation:"Familia Freya · capitán"}}}

,"CHAR-KAGUYA":{overview:"Gojouno Kaguya aparece en una referencia comunitaria como antigua aventurera y vicecapitana de Astrea Familia. Esta ficha sigue provisional hasta cotejar el detalle con material primario.",states:{"CONT-AR":{summary:"La wiki comunitaria consultada la enumera como antigua integrante y la identifica como vicecapitana. No se incorporan aún rasgos de personalidad ni acontecimientos individuales sin un localizador de novela.",period:"Periodo histórico de Astrea Familia · fecha interna pendiente de verificación.",affiliation:"Astrea Familia · antigua integrante (fuente comunitaria)"}}},
"CHAR-LYRA":{overview:"Lyra aparece en una referencia comunitaria como aventurera y antigua integrante de Astrea Familia. Su historia individual todavía requiere investigación con fuentes primarias.",states:{"CONT-AR":{summary:"La wiki comunitaria consultada la enumera entre las antiguas aventureras de Astrea Familia. La ficha no infiere amistad, rivalidad ni escenas compartidas únicamente por la afiliación.",period:"Periodo histórico de Astrea Familia · fecha interna pendiente de verificación.",affiliation:"Astrea Familia · antigua aventurera (fuente comunitaria)"}}}
};

Object.assign(META,{
"CHAR-ISKA-BRA":{overview:"Iska Bra · integrante de la red histórica de Astrea Familia. La ficha inicial prioriza procedencia y navegación, sin rellenar huecos biográficos.",states:{"CONT-AR":{summary:"La referencia de roster comunitaria la sitúa en la primera Astrea Familia; el portal oficial de DanMachi IV aporta un perfil de adaptación de este personaje.",period:"Astrea Record · Era Oscura; fecha individual no establecida.",affiliation:"Astrea Familia · afiliación histórica provisional"}}},
"CHAR-MARIYU-LEAGE":{overview:"Maryuu Reage · integrante de la primera generación según el roster secundario; necesita una verificación primaria individual.",states:{"CONT-AR":{summary:"La referencia comunitaria la incluye en la red histórica de Astrea Familia. No se agregan todavía rasgos personales o acciones individuales.",period:"Periodo histórico de Astrea Familia · fecha no establecida.",affiliation:"Astrea Familia · roster secundario"}}},
"CHAR-NOIN-UNIC":{overview:"Noin Unic · ficha provisional del roster histórico, con referencia a un perfil de la adaptación.",states:{"CONT-AR":{summary:"La referencia comunitaria la enumera entre las integrantes históricas. Su perfil oficial de adaptación permite consultar la representación visual, pero se requieren escenas para describir relaciones individuales.",period:"Astrea Record / representación de la adaptación · fecha interna no establecida.",affiliation:"Astrea Familia · afiliación histórica"}}},
"CHAR-NEZE-RANKETT":{overview:"Neze Rankett · ficha provisional del roster histórico.",states:{"CONT-AR":{summary:"El personaje figura entre las integrantes históricas de Astrea Familia en las referencias incorporadas. Esta ficha no inventa personalidad ni actos particulares.",period:"Astrea Record / representación de la adaptación · fecha interna no establecida.",affiliation:"Astrea Familia · afiliación histórica"}}},
"CHAR-ASTA-KNOX":{overview:"Asta Knox · ficha provisional del roster histórico.",states:{"CONT-AR":{summary:"El personaje figura entre las integrantes históricas de Astrea Familia en las referencias incorporadas. Su biografía y sus vínculos particulares permanecen pendientes.",period:"Astrea Record / representación de la adaptación · fecha interna no establecida.",affiliation:"Astrea Familia · afiliación histórica"}}},
"CHAR-RYANA-LIETZ":{overview:"Ryana Lietz · ficha provisional del roster histórico.",states:{"CONT-AR":{summary:"El personaje figura entre las integrantes históricas de Astrea Familia en las referencias incorporadas. La entrada permite navegar hacia ella sin inferir una relación personal no documentada.",period:"Astrea Record / representación de la adaptación · fecha interna no establecida.",affiliation:"Astrea Familia · afiliación histórica"}}},
"CHAR-CELTY-SROWA":{overview:"Celty Srowa · ficha provisional del roster histórico.",states:{"CONT-AR":{summary:"El personaje figura entre las integrantes históricas de Astrea Familia en las referencias incorporadas. Los detalles biográficos individuales requieren una fuente de escena o de novela.",period:"Astrea Record / representación de la adaptación · fecha interna no establecida.",affiliation:"Astrea Familia · afiliación histórica"}}},
"CHAR-CECIL-BLACKLIZA":{overview:"Cecil Blackliza · capitana asociada a la nueva generación de Astrea Familia, según una referencia secundaria.",states:{"CONT-MAIN-LN":{summary:"La referencia comunitaria la nombra como capitana de la nueva Astrea Familia. Rango y afiliación se mantienen provisionales hasta cotejar el texto de novela.",period:"Etapa posterior a la salida de Astrea de Orario · fecha exacta pendiente.",affiliation:"Nueva Astrea Familia · Solingen (fuente secundaria)"}}},
"CHAR-ISELINA":{overview:"Iselina · integrante de la nueva generación de Astrea Familia según una referencia secundaria.",states:{"CONT-MAIN-LN":{summary:"La referencia comunitaria la incluye en el roster posterior de Astrea Familia. No se atribuyen rango, carácter o acciones individuales sin evidencia.",period:"Etapa posterior a la salida de Astrea de Orario · fecha exacta pendiente.",affiliation:"Nueva Astrea Familia · Solingen (fuente secundaria)"}}},
"CHAR-SHAU":{overview:"Shau · integrante de la nueva generación de Astrea Familia según una referencia secundaria.",states:{"CONT-MAIN-LN":{summary:"La referencia comunitaria la incluye en el roster posterior de Astrea Familia. Su historia individual requiere verificación primaria.",period:"Etapa posterior a la salida de Astrea de Orario · fecha exacta pendiente.",affiliation:"Nueva Astrea Familia · Solingen (fuente secundaria)"}}},
"CHAR-ULANDA":{overview:"Ulanda · integrante de la nueva generación de Astrea Familia según una referencia secundaria.",states:{"CONT-MAIN-LN":{summary:"La referencia comunitaria la incluye en el roster posterior de Astrea Familia. No se completa su biografía a partir de una simple mención en el roster.",period:"Etapa posterior a la salida de Astrea de Orario · fecha exacta pendiente.",affiliation:"Nueva Astrea Familia · Solingen (fuente secundaria)"}}}
});

META["CHAR-RYUU-LION"].states["CONT-MAIN-LN"]={summary:"La sinopsis editorial de Familia Chronicle: Episode Ryuu 2 presenta a Ryu partiendo sola hacia una ciudad de forja para visitar a Astrea y buscar fuerza; el detalle del encuentro requiere el volumen.",period:"Familia Chronicle: Episode Ryuu 2 · sinopsis editorial; fecha interna exacta no fijada aquí.",affiliation:"Aventurera viajando para ver a Astrea"};
META["CHAR-ASTREA"].states["CONT-ANIME"]={summary:"El perfil oficial posterior de DanMachi V sitúa a Astrea fuera de Orario con nuevos seguidores. Este estado no reemplaza su rol histórico en Astrea Record.",period:"Estado posterior descrito en DanMachi V · fecha interna no fijada.",affiliation:"Diosa · nueva Familia fuera de Orario"};
META["CHAR-ASTREA"].states["CONT-MAIN-LN"]={summary:"Una sinopsis editorial confirma que Ryu emprende un viaje para ver a Astrea; la ubicación concreta y la composición de la nueva Familia se conservan como pistas secundarias hasta cotejo primario.",period:"Etapa posterior · fuentes editoriales y secundarias separadas.",affiliation:"Astrea · nueva Familia según referencia secundaria"};


META["CHAR-RYUU-LION"].states["CONT-MAIN-LN"]={
summary:"La sinopsis editorial de Familia Chronicle: Episode Ryuu 2 presenta a Ryu saliendo sola de Orario hacia la Ciudad Forjadora de Espadas, al este, para ver a Astrea y buscar fuerza. Al llegar, choca con las nuevas seguidoras de la diosa y Astrea le ordena quedarse allí y darle una respuesta.",
period:"Familia Chronicle: Episode Ryuu 2 · mientras Orario se prepara para el War Game Hestia–Freya; cinco años después del empeño que menciona la sinopsis.",
affiliation:"Ryu en viaje; Astrea y nuevas seguidoras fuera de Orario (la ubicación de Solingen sigue siendo dato secundario)"
};
META["CHAR-ALISE-LOVELACE"].states["CONT-ANIME"]={
summary:"El perfil oficial de DanMachi IV la describe como humana de nivel 4 y capitana histórica. Suele ser frontal y sincera, pero a veces actúa de forma despreocupada e irresponsable para su puesto; aun así, sus compañeras la quieren y confían en ella. Su principio es guardar la justicia en el corazón, no blandirla, y reverencia a Astrea.",
period:"Perfil oficial DanMachi IV · recuerdo de la antigua Astrea Familia; no usar como estado atemporal.",
affiliation:"Astrea Familia · capitana histórica"
};
META["CHAR-KAGUYA"].states["CONT-ANIME"]={
summary:"El perfil oficial la identifica como humana de nivel 4, procedente del Lejano Oriente y vicecapitana. Es una combatiente cuerpo a cuerpo notable; su apariencia refinada contrasta con un habla áspera. Choca repetidamente con Ryu, aunque ambas reconocen la capacidad de la otra.",
period:"Perfil oficial DanMachi IV · representación histórica de Astrea Familia.",
affiliation:"Astrea Familia · vicecapitana"
};
META["CHAR-LYRA"].states["CONT-ANIME"]={
summary:"La ficha oficial presenta a Lyra como Pallum de nivel 3, perspicaz, astuta y rápida para leer situaciones. Sus observaciones pueden ir al centro del problema; contribuye a coordinar al grupo, y Ryu confía en ella casi tanto como en Alise. Su epíteto se romaniza como Sly Rat (狡鼠).",
period:"Perfil oficial DanMachi IV · representación histórica de Astrea Familia.",
affiliation:"Astrea Familia · aventurera y apoyo táctico"
};
META["CHAR-ASTREA"].states["CONT-ANIME"]={
summary:"El perfil oficial de DanMachi IV describe a Astrea como diosa de justicia y orden, misericordiosa y amable, muy apreciada por su Familia y la ciudadanía. En la adaptación, la primera Familia defendía a los débiles y combatía el mal; tras el desastre del Dungeon, solo Ryu quedó como superviviente conocida.",
period:"Recuerdo de la Era Oscura mostrado en DanMachi IV; el perfil posterior de DanMachi V la sitúa fuera de Orario con nuevas seguidoras.",
affiliation:"Diosa de justicia y orden · Astrea Familia histórica"
};
META["CHAR-MARIYU-LEAGE"]={
overview:"Mariyu Leage (también buscable como Mariyu Reage o Maryuu Reage) · integrante humana de Astrea Familia según el perfil oficial de DanMachi IV.",
states:{"CONT-ANIME":{summary:"El perfil oficial la identifica como humana y la incluye en Astrea Familia; no desarrolla su psicología o acciones individuales en esa entrada.",period:"Perfil oficial DanMachi IV · Astrea Familia histórica.",affiliation:"Astrea Familia · integrante histórica"}}
};


for(const [id,summary,period,affiliation] of [
["CHAR-ISKA-BRA","La ficha oficial la identifica como Amazoness y miembro de Astrea Familia; no fija nivel ni historia individual en ese perfil.","DanMachi IV · perfil oficial de personaje.","Astrea Familia · integrante histórica"],
["CHAR-NOIN-UNIC","El portal oficial la identifica como humana y miembro de Astrea Familia. La voz japonesa registrada es Maki Kawase; el perfil no detalla su historia particular.","DanMachi IV · perfil oficial de personaje.","Astrea Familia · integrante histórica"],
["CHAR-NEZE-RANKETT","La ficha oficial la identifica como mujer lobo y miembro de Astrea Familia. La voz japonesa registrada es Asuna Tomari; nivel e historia individual no establecidos por esa entrada.","DanMachi IV · perfil oficial de personaje.","Astrea Familia · integrante histórica"],
["CHAR-ASTA-KNOX","El perfil oficial la identifica como enana y miembro de Astrea Familia. La voz japonesa registrada es Hikaru Tono; no se asignan nivel ni habilidades no listadas.","DanMachi IV · perfil oficial de personaje.","Astrea Familia · integrante histórica"],
["CHAR-RYANA-LIETZ","El portal oficial la identifica como humana y miembro de Astrea Familia. La voz japonesa registrada es Saki Kousaka; la entrada pública no aporta una biografía extensa.","DanMachi IV · perfil oficial de personaje.","Astrea Familia · integrante histórica"],
["CHAR-CELTY-SROWA","El perfil oficial la identifica como elfa y miembro de Astrea Familia. La voz japonesa registrada es Rina Kawaguchi; la entrada consultada no establece nivel ni habilidades.","DanMachi IV · perfil oficial de personaje.","Astrea Familia · integrante histórica"]
]){
 META[id].states["CONT-ANIME"]={summary,period,affiliation};
}
META["CHAR-MARIYU-LEAGE"].states["CONT-ANIME"]={
summary:"La ficha oficial escribe マリュー・レアージュ, la identifica como humana y miembro de Astrea Familia; el portal registra a Akira Sekine como voz japonesa. Los alias Mariyu Reage y Maryuu Reage apuntan a este mismo ID.",
period:"DanMachi IV · perfil oficial de personaje.",
affiliation:"Astrea Familia · integrante histórica",

"CHAR-LILIRUCA-ARDE":{overview:"Pallum y supporter con dos estados de afiliación: antigua integrante de Soma Familia y miembro posterior de Hestia Familia. Los detalles de novela siguen etiquetados según su fuente.",states:{
"CONT-MAIN-LN":{summary:"La ficha editorial del volumen 6 confirma que Lili es capturada por Soma Familia antes del War Game. Su historial más amplio y la salida de la Familia se mantienen como resumen comunitario hasta localizar el texto original.",period:"Historia principal · conflicto del volumen 6; secuencia detallada pendiente de cotejo.",affiliation:"Soma Familia (histórica); Hestia Familia (posterior, según resumen secundario)"},
"CONT-ANIME":{summary:"El perfil oficial de DanMachi IV la presenta como supporter de Hestia Familia y describe que Bell la ayudó. Es evidencia de adaptación, no un sustituto de la novela principal.",period:"Estado de la adaptación DanMachi IV; fecha interna exacta no fijada.",affiliation:"Hestia Familia · supporter"}}},
"CHAR-SOMA":{overview:"Soma es la deidad patrona de Soma Familia, asociada por compendios secundarios a la elaboración de bebidas. Sus decisiones durante la crisis y reforma necesitan cotejo primario.",states:{"CONT-MAIN-LN":{summary:"La fuente comunitaria lo presenta como cabeza de la Familia y describe una etapa de alejamiento seguida de reforma. Se conservan esos hechos como secundarios hasta localizar las escenas originales.",period:"Arco de Soma Familia; intervalo exacto pendiente.",affiliation:"Deidad patrona / cabeza de Soma Familia"}}},
"CHAR-ZANIS-LUSTRA":{overview:"Antiguo capitán reportado de Soma Familia. Los detalles de cargo, conducta y desenlace se mantienen con procedencia secundaria y spoilers.",states:{"CONT-MAIN-LN":{summary:"Compendios comunitarios lo identifican como antiguo capitán y describen abuso de autoridad. Las alegaciones requieren cotejo con la novela; la acusación sobre Canoe no demuestra culpabilidad de Lili.",period:"Periodo anterior al cambio de capitanía; fecha no fijada.",affiliation:"Soma Familia · antiguo capitán reportado"}}},
"CHAR-CHANDRA-IHIT":{overview:"Capitán posterior reportado de Soma Familia. El perfil comunitario ofrece una pista de sus acciones, pero no un dossier primario completo.",states:{"CONT-MAIN-LN":{summary:"La fuente secundaria lo identifica como capitán y le atribuye desaprobación de Zanis y ayuda a Lili. El orden de sucesión y las escenas permanecen pendientes de verificación.",period:"Estado posterior al de Zanis según compendio; fecha no fijada.",affiliation:"Soma Familia · capitán reportado"}}},
"CHAR-CANOE-BELWAY":{overview:"Identidad de roster vinculada a Soma Familia cuyo estado y destino no se resuelven por completo en esta evidencia.",states:{"CONT-MAIN-LN":{summary:"Una lista comunitaria lo registra como miembro anterior y un resumen refiere una acusación de Zanis sobre su desaparición. No se determina causa, circunstancia ni responsabilidad.",period:"Conflicto de Soma Familia alrededor del volumen 6; momento exacto no fijado.",affiliation:"Soma Familia · miembro anterior reportado"}}},
"CHAR-TSUKINOKAMI-KAEDE":{overview:"Ficha de roster para una identidad listada por fuentes comunitarias; descripción y biografía individual no localizadas.",states:{"CONT-MAIN-LN":{summary:"La categoría comunitaria la enumera entre miembros de Soma Familia y una referencia secundaria indica Hume Bunny. No se han verificado nivel, habilidades ni acciones.",period:"Intervalo de afiliación por confirmar.",affiliation:"Soma Familia · roster secundario"}}},
"CHAR-SHINONOME-MOMIJI":{overview:"Ficha de roster para una identidad asociada a Soma Familia, sin biografía individual primaria localizada.",states:{"CONT-MAIN-LN":{summary:"La lista comunitaria la enumera como miembro; la especie Renard se conserva como dato secundario. No se añaden habilidades, nivel, personalidad ni escena no localizados.",period:"Intervalo de afiliación por confirmar.",affiliation:"Soma Familia · roster secundario"}}},
"CHAR-COCO-COLLINS":{overview:"Ficha de roster para una identidad asociada a Soma Familia; el registro individual sigue pendiente de evidencia primaria.",states:{"CONT-MAIN-LN":{summary:"La lista comunitaria la enumera como miembro y una referencia secundaria la identifica como Pallum. No se infieren rol de supporter, habilidades ni relaciones íntimas.",period:"Intervalo de afiliación por confirmar.",affiliation:"Soma Familia · roster secundario"}}}
,
"CHAR-RIVERIA-LJOS-ALF":{overview:"Vicecapitana y maga de Loki Familia en la referencia oficial de Sword Oratoria. La trayectoria detallada de novelas y el nivel por época permanecen pendientes.",states:{"CONT-ANIME":{summary:"El perfil oficial de adaptación la presenta como vicecapitana y maga de Loki Familia.",period:"Perfil oficial de Sword Oratoria; intervalo interno no fijado.",affiliation:"Loki Familia · vicecapitana/maga"},"CONT-SO":{summary:"Las referencias comunitarias la describen como veterana, mentora y figura de autoridad; esos detalles son secundarios hasta localizar los pasajes originales.",period:"Sword Oratoria; periodo exacto pendiente.",affiliation:"Loki Familia · descripción secundaria"}}},
"CHAR-GARETH-LANDROCK":{overview:"Veterano y combatiente de Loki Familia. La ficha distingue su perfil de adaptación de los detalles secundarios sobre su carrera.",states:{"CONT-ANIME":{summary:"El perfil oficial presenta a Gareth como enano y veterano combatiente de Loki Familia.",period:"Perfil oficial de Sword Oratoria; intervalo interno no fijado.",affiliation:"Loki Familia · veterano/combatiente"},"CONT-SO":{summary:"El compendio comunitario resume fuerza, experiencia y apoyo al mando, sin localizar cada hazaña en los volúmenes.",period:"Sword Oratoria; periodo exacto pendiente.",affiliation:"Loki Familia · veterano"}}},
"CHAR-BETE-LOGA":{overview:"Atacante de Loki Familia. El perfil oficial respalda la identidad/rol de adaptación; los antecedentes personales permanecen con spoilers y fuente secundaria.",states:{"CONT-ANIME":{summary:"El perfil oficial identifica a Bete como hombre lobo y atacante de Loki Familia.",period:"Perfil oficial de Sword Oratoria; intervalo interno no fijado.",affiliation:"Loki Familia · atacante"},"CONT-SO":{summary:"La fuente comunitaria resume una forma de hablar agresiva y combate de corto alcance, sin resolver todas sus motivaciones.",period:"Sword Oratoria; detalles por volumen pendientes.",affiliation:"Loki Familia · atacante (referencia secundaria)"}}},
"CHAR-TIONA-HIRYUTE":{overview:"Amazoness y combatiente de Loki Familia; hermana gemela menor de Tione. Las relaciones se mantienen por continuidad.",states:{"CONT-ANIME":{summary:"El perfil oficial presenta a Tiona como combatiente de Loki Familia, de carácter alegre y amiga de Ais.",period:"Perfil oficial de Sword Oratoria; intervalo interno no fijado.",affiliation:"Loki Familia · combatiente"},"CONT-SO":{summary:"La fuente secundaria describe parentesco con Tione y su energía; requiere cotejo de escenas.",period:"Sword Oratoria; periodo exacto pendiente.",affiliation:"Loki Familia · combatiente (referencia secundaria)"}}},
"CHAR-TIONE-HIRYUTE":{overview:"Amazoness y combatiente de Loki Familia; hermana gemela mayor de Tiona. Los sentimientos que se atribuyen a Tione no establecen reciprocidad de Finn.",states:{"CONT-ANIME":{summary:"El perfil oficial la presenta como combatiente, gemela mayor de Tiona, y describe sentimientos hacia Finn sin indicar reciprocidad.",period:"Perfil oficial de Sword Oratoria; intervalo interno no fijado.",affiliation:"Loki Familia · combatiente"},"CONT-SO":{summary:"La fuente comunitaria resume el contraste entre su carácter en combate y sus sentimientos por Finn.",period:"Sword Oratoria; escenas precisas pendientes.",affiliation:"Loki Familia · combatiente (referencia secundaria)"}}},
"CHAR-LEFIYA-VIRIDIS":{overview:"Elfa maga de Loki Familia. Su admiración por Ais y la orientación de Riveria se separan por continuidad y grado de evidencia.",states:{"CONT-ANIME":{summary:"El perfil oficial identifica a Lefiya como maga elfa de Loki Familia y menciona su admiración por Ais.",period:"Perfil oficial de Sword Oratoria; intervalo interno no fijado.",affiliation:"Loki Familia · maga"},"CONT-SO":{summary:"La referencia secundaria describe orientación mágica de Riveria y evolución de Lefiya; los hechizos necesitan localizadores primarios.",period:"Sword Oratoria; desarrollo exacto pendiente.",affiliation:"Loki Familia · maga (referencia secundaria)"}}}
};

const REL={
"CHAR-RYUU-LION":{"CONT-AR":[
{targetId:"CHAR-ALISE-LOVELACE",label:"Capitana y guía documentada",type:"Liderazgo / compañerismo",description:"La sinopsis editorial identifica a Alise como capitana y guía de Ryu. No establece toda la historia privada del vínculo.",refs:["DMR-001-CLM-005","DMR-002-CLM-015"]},
{targetId:"CHAR-ASTREA",label:"Guía divina y contexto de Familia",type:"Guía / afiliación",description:"El material oficial presenta a Ryu bajo Astrea y la vincula con Astrea Familia; no detalla cada interacción personal.",refs:["DMR-001-CLM-004","DMR-001-CLM-005"]}
]},
"CHAR-ALISE-LOVELACE":{"CONT-AR":[
{targetId:"CHAR-RYUU-LION",label:"Ryu · capitana y guía",type:"Liderazgo documentado",description:"La sinopsis editorial presenta a Alise como capitana que guía a Ryu durante su búsqueda de justicia.",refs:["DMR-001-CLM-005","DMR-002-CLM-015"]},
{targetId:"CHAR-ASTREA",label:"Contexto de Astrea Familia",type:"Afiliación compartida",description:"Las fuentes sitúan a ambas en el contexto de Astrea Familia. Esto no afirma por sí solo un vínculo personal.",refs:["DMR-001-CLM-004","DMR-001-CLM-005"]}
]},
"CHAR-ASTREA":{"CONT-AR":[
{targetId:"CHAR-RYUU-LION",label:"Ryu · formación en la justicia",type:"Guía / marco moral",description:"La sinopsis editorial sitúa la búsqueda de justicia de Ryu bajo Astrea; no ofrece un registro exhaustivo de sus interacciones.",refs:["DMR-001-CLM-005","DMR-002-CLM-015"]},
{targetId:"CHAR-ALISE-LOVELACE",label:"Contexto de Astrea Familia",type:"Afiliación y liderazgo",description:"La sinopsis relaciona a Astrea con la Familia y nombra a Alise como capitana. No se infiere un vínculo personal adicional.",refs:["DMR-001-CLM-004","DMR-001-CLM-005"]}
]}}

REL["DM-CHAR-BELL"]={"CONT-ANIME":[
{targetId:"DM-CHAR-HESTIA",label:"Hestia · vínculo afectivo",type:"Familia y vínculo personal documentado",description:"El perfil de adaptación describe el amor de Hestia por Bell y su esfuerzo por pagar la daga que le entregó.",refs:["DMR-002-CLM-003","DMR-002-CLM-004"]},
{targetId:"DM-CHAR-AIS",label:"Ais · objeto de admiración",type:"Admiración documentada",description:"La fuente describe a Ais como objeto de admiración de Bell; eso no convierte cada momento de su relación en reciprocidad romántica.",refs:["DMR-002-CLM-001","DMR-002-CLM-002"]},
{targetId:"DM-CHAR-EINA",label:"Eina · asesora del Guild",type:"Orientación documentada",description:"Eina aparece como asesora de Bell y fuente de información sobre el Dungeon y Orario.",refs:["DMR-002-CLM-007","DMR-002-CLM-008"]},
{targetId:"CHAR-FREYA",label:"Freya · interés narrativo",type:"Interés documentado por Bell",description:"El perfil de Freya describe su atracción por el alma de Bell. La naturaleza de ese interés debe leerse dentro de la continuidad seleccionada.",refs:["DMR-002-CLM-011","DMR-002-CLM-012"]}
]};
REL["DM-CHAR-HESTIA"]={"CONT-ANIME":[
{targetId:"DM-CHAR-BELL",label:"Bell · vínculo afectivo",type:"Afecto y apoyo documentados",description:"La fuente describe a Hestia como bondadosa, enamorada de Bell y trabajando para ayudar a pagar su daga.",refs:["DMR-002-CLM-003","DMR-002-CLM-004"]},
{targetId:"CHAR-FREYA",label:"Freya · tensión por Bell",type:"Atención / conflicto de intereses",description:"El perfil dice que Hestia vigila a Freya ante la posibilidad de que interfiera en su vínculo con Bell. “Celos protectores” es una interpretación posible, no un hecho literal.",refs:["DMR-002-CLM-004"]}
]};
REL["DM-CHAR-AIS"]={"CONT-ANIME":[
{targetId:"DM-CHAR-BELL",label:"Bell · crecimiento observado",type:"Interés y admiración",description:"La fuente describe el interés de Ais en la progresión inusualmente rápida de Bell y advierte que no basta para afirmar reciprocidad romántica en todo contexto.",refs:["DMR-002-CLM-005","DMR-002-CLM-006"]}
]};
REL["DM-CHAR-EINA"]={"CONT-ANIME":[
{targetId:"DM-CHAR-BELL",label:"Bell · aventurero asesorado",type:"Asesoría documentada",description:"Eina fue asignada como asesora de Bell en el Guild y le aporta conocimiento sobre el Dungeon y la ciudad.",refs:["DMR-002-CLM-007","DMR-002-CLM-008"]}
]};
REL["CHAR-FREYA"]={"CONT-ANIME":[
{targetId:"DM-CHAR-BELL",label:"Bell · interés de Freya",type:"Interés documentado",description:"El perfil de adaptación describe la atracción de Freya por el alma de Bell y su deseo de verlo crecer.",refs:["DMR-002-CLM-011","DMR-002-CLM-012"]},
{targetId:"CHAR-OTTAR",label:"Ottar · capitán leal",type:"Liderazgo y lealtad documentados",description:"El perfil de Ottar lo describe como capitán de la Familia Freya y absolutamente leal a ella.",refs:["DMR-002-CLM-014"]}
]};
REL["CHAR-OTTAR"]={"CONT-ANIME":[
{targetId:"CHAR-FREYA",label:"Freya · diosa y líder",type:"Lealtad documentada",description:"La fuente presenta a Ottar como absolutamente leal a Freya y como alguien que la defiende ante los insultos.",refs:["DMR-002-CLM-014"]}
]};


REL["CHAR-RYUU-LION"]["CONT-AR"].push(
{targetId:"CHAR-KAGUYA",label:"Gojouno Kaguya · vicecapitana",type:"Afiliación compartida · fuente comunitaria",description:"La referencia comunitaria la enumera como antigua integrante y vicecapitana de Astrea Familia. La ficha no afirma una amistad o escena personal no documentada.",refs:["DMR-003-CLM-001","DMR-001-CLM-005"]},
{targetId:"CHAR-LYRA",label:"Lyra · compañera de Familia",type:"Afiliación compartida · fuente comunitaria",description:"La referencia comunitaria la enumera como antigua aventurera de Astrea Familia. La relación mostrada es de pertenencia histórica, no una afirmación sobre intimidad personal.",refs:["DMR-003-CLM-002","DMR-001-CLM-005"]}
);
REL["CHAR-ALISE-LOVELACE"]["CONT-AR"].push(
{targetId:"CHAR-KAGUYA",label:"Gojouno Kaguya · vicecapitana",type:"Estructura de Familia · fuente comunitaria",description:"La referencia comunitaria identifica a Kaguya como vicecapitana y antigua integrante. La ficha no inventa escenas de liderazgo entre ambas.",refs:["DMR-003-CLM-001","DMR-001-CLM-005"]},
{targetId:"CHAR-LYRA",label:"Lyra · compañera de Familia",type:"Afiliación compartida · fuente comunitaria",description:"Lyra figura como antigua aventurera de Astrea Familia en la referencia comunitaria. Un vínculo personal más concreto requiere evidencia adicional.",refs:["DMR-003-CLM-002","DMR-001-CLM-005"]}
);
REL["CHAR-ASTREA"]["CONT-AR"].push(
{targetId:"CHAR-KAGUYA",label:"Gojouno Kaguya · antigua integrante",type:"Afiliación a Astrea Familia · fuente comunitaria",description:"La referencia comunitaria la enumera como antigua integrante de la Familia asociada a Astrea. No se infieren escenas individuales con la diosa.",refs:["DMR-003-CLM-001","DMR-001-CLM-004"]},
{targetId:"CHAR-LYRA",label:"Lyra · antigua aventurera",type:"Afiliación a Astrea Familia · fuente comunitaria",description:"La referencia comunitaria la enumera como antigua aventurera de la Familia asociada a Astrea. No se infieren interacciones individuales.",refs:["DMR-003-CLM-002","DMR-001-CLM-004"]}
);


REL["CHAR-RYUU-LION"]["CONT-AR"].push(
{targetId:"CHAR-ISKA-BRA",label:"Iska Bra · integrante histórica",type:"Afiliación compartida · roster secundario",description:"El roster comunitario la enumera entre las integrantes de la primera Astrea Familia. La arista prueba pertenencia al grupo, no amistad individual.",refs:["DMR-007-CLM-005"]},
{targetId:"CHAR-MARIYU-LEAGE",label:"Maryuu Reage · integrante histórica",type:"Afiliación compartida · roster secundario",description:"La lista comunitaria la enumera como parte de la primera Familia. La pertenencia debe cotejarse con los volúmenes.",refs:["DMR-007-CLM-005"]},
{targetId:"CHAR-NOIN-UNIC",label:"Noin Unic · integrante histórica",type:"Afiliación compartida",description:"Figura en el roster histórico de Astrea Familia. No se infiere una amistad o escena personal a partir de la membresía.",refs:["DMR-007-CLM-005"]},
{targetId:"CHAR-NEZE-RANKETT",label:"Neze Rankett · integrante histórica",type:"Afiliación compartida",description:"Figura en el roster histórico de Astrea Familia. No se infiere una amistad o escena personal a partir de la membresía.",refs:["DMR-007-CLM-005"]},
{targetId:"CHAR-ASTA-KNOX",label:"Asta Knox · integrante histórica",type:"Afiliación compartida",description:"Figura en el roster histórico de Astrea Familia. Los vínculos individuales necesitan pasajes específicos.",refs:["DMR-007-CLM-005"]},
{targetId:"CHAR-RYANA-LIETZ",label:"Ryana Lietz · integrante histórica",type:"Afiliación compartida",description:"Figura en el roster histórico de Astrea Familia. Los vínculos individuales necesitan pasajes específicos.",refs:["DMR-007-CLM-005"]},
{targetId:"CHAR-CELTY-SROWA",label:"Celty Srowa · integrante histórica",type:"Afiliación compartida",description:"Figura en el roster histórico de Astrea Familia. Los vínculos individuales necesitan pasajes específicos.",refs:["DMR-007-CLM-005"]}
);
REL["CHAR-RYUU-LION"]["CONT-ANIME"]=[
{targetId:"CHAR-ALISE-LOVELACE",label:"Alise · capitana y guía",type:"Liderazgo e influencia documentados en la adaptación",description:"El perfil oficial de DanMachi IV la presenta como capitana que incorpora y guía a Ryu. Es una relación de formación, no solo de afiliación.",refs:["DMR-007-CLM-001"]},
{targetId:"CHAR-KAGUYA",label:"Kaguya · fricción y respeto",type:"Roces / respeto mutuo documentados en la adaptación",description:"La fuente oficial describe choques frecuentes entre ambas y respeto por la capacidad de la otra. Su relación incluye desacuerdo, no una armonía constante.",refs:["DMR-007-CLM-002"]},
{targetId:"CHAR-LYRA",label:"Lyra · apoyo estratégico",type:"Confianza y criterio documentados en la adaptación",description:"El perfil oficial de adaptación la sitúa entre las personas de quienes Ryu se apoya por su perspicacia. Los detalles de escenas quedan pendientes de localizar.",refs:["DMR-007-CLM-003"]},
{targetId:"CHAR-ISKA-BRA",label:"Iska Bra · miembro del roster",type:"Roster oficial de adaptación",description:"El portal oficial incluye un perfil en el contexto de Astrea Familia; la fuente disponible no demuestra por sí sola un vínculo personal particular con Ryu.",refs:["DMR-007-CLM-004"]},
{targetId:"CHAR-NOIN-UNIC",label:"Noin Unic · miembro del roster",type:"Roster oficial de adaptación",description:"El portal oficial incluye su perfil entre el entorno de Astrea Familia; no se infiere una interacción individual con Ryu.",refs:["DMR-007-CLM-004"]},
{targetId:"CHAR-NEZE-RANKETT",label:"Neze Rankett · miembro del roster",type:"Roster oficial de adaptación",description:"El portal oficial incluye su perfil entre el entorno de Astrea Familia; no se infiere una interacción individual con Ryu.",refs:["DMR-007-CLM-004"]},
{targetId:"CHAR-ASTA-KNOX",label:"Asta Knox · miembro del roster",type:"Roster oficial de adaptación",description:"El portal oficial incluye su perfil entre el entorno de Astrea Familia; no se infiere una interacción individual con Ryu.",refs:["DMR-007-CLM-004"]},
{targetId:"CHAR-RYANA-LIETZ",label:"Ryana Lietz · miembro del roster",type:"Roster oficial de adaptación",description:"El portal oficial incluye su perfil entre el entorno de Astrea Familia; no se infiere una interacción individual con Ryu.",refs:["DMR-007-CLM-004"]},
{targetId:"CHAR-CELTY-SROWA",label:"Celty Srowa · miembro del roster",type:"Roster oficial de adaptación",description:"El portal oficial incluye su perfil entre el entorno de Astrea Familia; no se infiere una interacción individual con Ryu.",refs:["DMR-007-CLM-004"]}
];
REL["CHAR-ASTREA"]["CONT-AR"].push(
{targetId:"CHAR-ISKA-BRA",label:"Iska Bra · Familia histórica",type:"Afiliación histórica",description:"El roster secundario la enumera entre las integrantes de la primera Familia asociada a Astrea.",refs:["DMR-007-CLM-005"]},
{targetId:"CHAR-MARIYU-LEAGE",label:"Maryuu Reage · Familia histórica",type:"Afiliación histórica · secundaria",description:"La lista comunitaria la incluye en el roster histórico; falta cotejo directo con la novela.",refs:["DMR-007-CLM-005"]},
{targetId:"CHAR-NOIN-UNIC",label:"Noin Unic · Familia histórica",type:"Afiliación histórica",description:"La lista de integrantes permite navegar desde la diosa al roster; no demuestra escenas individuales.",refs:["DMR-007-CLM-005"]},
{targetId:"CHAR-NEZE-RANKETT",label:"Neze Rankett · Familia histórica",type:"Afiliación histórica",description:"La lista de integrantes permite navegar desde la diosa al roster; no demuestra escenas individuales.",refs:["DMR-007-CLM-005"]},
{targetId:"CHAR-ASTA-KNOX",label:"Asta Knox · Familia histórica",type:"Afiliación histórica",description:"La lista de integrantes permite navegar desde la diosa al roster; no demuestra escenas individuales.",refs:["DMR-007-CLM-005"]},
{targetId:"CHAR-RYANA-LIETZ",label:"Ryana Lietz · Familia histórica",type:"Afiliación histórica",description:"La lista de integrantes permite navegar desde la diosa al roster; no demuestra escenas individuales.",refs:["DMR-007-CLM-005"]},
{targetId:"CHAR-CELTY-SROWA",label:"Celty Srowa · Familia histórica",type:"Afiliación histórica",description:"La lista de integrantes permite navegar desde la diosa al roster; no demuestra escenas individuales.",refs:["DMR-007-CLM-005"]}
);
REL["CHAR-RYUU-LION"]["CONT-MAIN-LN"]=[
{targetId:"CHAR-ASTREA",label:"Astrea · viaje y conflicto en la Ciudad Forjadora",type:"Viaje y conflicto documentados en sinopsis editorial",description:"La sinopsis editorial confirma el viaje de Ryu y la orden de Astrea de quedarse. Una fuente secundaria explica que, años antes, Ryu había pedido a Astrea salir de Orario para no presenciar su venganza; el motivo de la partida continúa pendiente de cotejo primario.",refs:["DMR-007-CLM-009","DMR-007-CLM-013","DMR-007-CLM-014","DMR-010-CLM-002","DMR-010-CLM-005","DMR-010-CLM-006"]},
{targetId:"CHAR-ALISE-LOVELACE",label:"Alise · legado de la antigua capitania",type:"Memoria/legado · fuente secundaria",description:"Una fuente comunitaria conecta la memoria de Alise con la evolución posterior de Ryu. Se muestra como pista secundaria y no como escena verificada de la novela.",refs:["DMR-007-CLM-012"]},
{targetId:"CHAR-KAGUYA",label:"Kaguya · legado de las compañeras",type:"Memoria/legado · fuente secundaria",description:"Una fuente comunitaria relaciona el legado de Kaguya con la evolución posterior de Ryu; requiere cotejo con el texto original.",refs:["DMR-007-CLM-012"]},
{targetId:"CHAR-LYRA",label:"Lyra · legado de las compañeras",type:"Memoria/legado · fuente secundaria",description:"Una fuente comunitaria relaciona el legado de Lyra con la evolución posterior de Ryu; requiere cotejo con el texto original.",refs:["DMR-007-CLM-012"]}
];
// No anime-continuity relationship edge is inferred from the Astrea V profile alone.
REL["CHAR-ASTREA"]["CONT-MAIN-LN"]=[
{targetId:"CHAR-RYUU-LION",label:"Ryu · viaje y conflicto en la Ciudad Forjadora",type:"Encuentro y conflicto documentados en sinopsis editorial",description:"Ryu viaja para ver a Astrea y recibe la orden de quedarse. Una referencia secundaria indica que Astrea ya había salido de Orario a petición de Ryu, quien quería evitar que presenciara la venganza tras la tragedia de su antigua Familia; esta razón no está todavía cotejada con un localizador de novela.",refs:["DMR-007-CLM-009","DMR-007-CLM-013","DMR-007-CLM-014","DMR-010-CLM-002","DMR-010-CLM-005","DMR-010-CLM-006"]},
{targetId:"CHAR-CECIL-BLACKLIZA",label:"Cecil Blackliza · nueva capitana (fuente secundaria)",type:"Nueva generación · pendiente de cotejo",description:"El roster comunitario identifica a Cecil como capitana de la nueva Familia. Se mantiene como fuente secundaria.",refs:["DMR-007-CLM-011"]},
{targetId:"CHAR-ISELINA",label:"Iselina · nueva generación (fuente secundaria)",type:"Nueva generación · afiliación provisional",description:"Aparece en la lista comunitaria de la nueva Familia. No se atribuye rango o historia individual.",refs:["DMR-007-CLM-011"]},
{targetId:"CHAR-SHAU",label:"Shau · nueva generación (fuente secundaria)",type:"Nueva generación · afiliación provisional",description:"Aparece en la lista comunitaria de la nueva Familia. No se atribuye rango o historia individual.",refs:["DMR-007-CLM-011"]},
{targetId:"CHAR-ULANDA",label:"Ulanda · nueva generación (fuente secundaria)",type:"Nueva generación · afiliación provisional",description:"Aparece en la lista comunitaria de la nueva Familia. No se atribuye rango o historia individual.",refs:["DMR-007-CLM-011"]}
];
Object.assign(REL,{

"CHAR-LILIRUCA-ARDE":{"CONT-MAIN-LN":[
{targetId:"CHAR-SOMA",label:"Afiliación histórica",type:"Afiliación",description:"La fuente secundaria sitúa a Lili primero en Soma Familia; la ficha editorial confirma que la Familia la captura antes del War Game, sin describir por sí sola cada escena.",refs:["DMR-013-CLM-002"]},
{targetId:"CHAR-ZANIS-LUSTRA",label:"Conflicto de liberación reportado",type:"Conflicto",description:"La relación surge del resumen secundario del conflicto de Lili; los detalles y el desenlace aún requieren un localizador primario.",refs:["DMR-013-CLM-002","DMR-013-CLM-003"]},
{targetId:"CHAR-CHANDRA-IHIT",label:"Ayuda reportada durante la salida",type:"Intervención",description:"Una fuente comunitaria atribuye a Chandra ayuda a Lili; debe verificarse la escena en la novela.",refs:["DMR-013-CLM-004"]},
{targetId:"CHAR-CANOE-BELWAY",label:"Acusación no resuelta",type:"Acusación / evidencia pendiente",description:"Un resumen comunitario refiere que Zanis acusa a Lili por la desaparición de Canoe. La acusación no se trata como prueba de responsabilidad.",refs:["DMR-013-CLM-005"]}
],"CONT-ANIME":[{targetId:"DM-CHAR-BELL",label:"Bell la ayuda",type:"Ayuda documentada en adaptación",description:"El perfil oficial de DanMachi IV presenta a Bell como quien ayuda a Lili. Esta arista se mantiene en CONT-ANIME.",refs:["DMR-013-CLM-010"]}]},
"CHAR-SOMA":{"CONT-MAIN-LN":[
{targetId:"CHAR-LILIRUCA-ARDE",label:"Antigua integrante",type:"Patronazgo / afiliación por periodo",description:"La afiliación histórica de Lili se documenta con una ficha editorial y un resumen comunitario, con grados de evidencia separados.",refs:["DMR-013-CLM-002"]},
{targetId:"CHAR-ZANIS-LUSTRA",label:"Antiguo capitán reportado",type:"Gobierno de Familia",description:"La fuente comunitaria describe a Zanis como antiguo capitán.",refs:["DMR-013-CLM-003"]},
{targetId:"CHAR-CHANDRA-IHIT",label:"Capitanía posterior reportada",type:"Gobierno de Familia",description:"Chandra aparece como capitán posterior en referencias secundarias; escena de sucesión pendiente.",refs:["DMR-013-CLM-004"]},
{targetId:"CHAR-TSUKINOKAMI-KAEDE",label:"Miembro en roster",type:"Afiliación organizativa",description:"La categoría comunitaria lista a Kaede bajo Soma Familia; no prueba relación personal.",refs:["DMR-013-CLM-006"]},
{targetId:"CHAR-SHINONOME-MOMIJI",label:"Miembro en roster",type:"Afiliación organizativa",description:"La categoría comunitaria lista a Momiji bajo Soma Familia; no prueba relación personal.",refs:["DMR-013-CLM-007"]},
{targetId:"CHAR-COCO-COLLINS",label:"Miembro en roster",type:"Afiliación organizativa",description:"La categoría comunitaria lista a Coco bajo Soma Familia; no prueba relación personal.",refs:["DMR-013-CLM-008"]},
{targetId:"CHAR-CANOE-BELWAY",label:"Integrante anterior",type:"Afiliación / destino no resuelto",description:"Canoe aparece como integrante anterior; su destino no se resuelve aquí.",refs:["DMR-013-CLM-005"]}
]},
"CHAR-ZANIS-LUSTRA":{"CONT-MAIN-LN":[
{targetId:"CHAR-SOMA",label:"Capitán bajo su deidad patrona",type:"Afiliación / autoridad",description:"Zanis figura como antiguo capitán de la Familia de Soma en referencias secundarias.",refs:["DMR-013-CLM-003"]},
{targetId:"CHAR-CHANDRA-IHIT",label:"Relevo de capitanía reportado",type:"Cambio de liderazgo",description:"Las wikis describen estados de capitanía sucesivos; cronología y escena necesitan verificación.",refs:["DMR-013-CLM-003","DMR-013-CLM-004"]},
{targetId:"CHAR-LILIRUCA-ARDE",label:"Conflicto y acusación",type:"Conflicto / acusación",description:"El resumen comunitario refiere una acusación sobre Canoe dirigida contra Lili; no se registra como prueba independiente.",refs:["DMR-013-CLM-003","DMR-013-CLM-005"]},
{targetId:"CHAR-CANOE-BELWAY",label:"Acusación sobre su desaparición",type:"Acusación / evidencia pendiente",description:"El resumen atribuye a Zanis una acusación pero no establece causa de ausencia ni responsabilidad.",refs:["DMR-013-CLM-005"]}
]},
"CHAR-CHANDRA-IHIT":{"CONT-MAIN-LN":[
{targetId:"CHAR-SOMA",label:"Capitán bajo la deidad patrona",type:"Afiliación / liderazgo",description:"Chandra aparece como capitán posterior de Soma Familia según el roster comunitario.",refs:["DMR-013-CLM-004"]},
{targetId:"CHAR-ZANIS-LUSTRA",label:"Capitán anterior",type:"Cambio de liderazgo",description:"Referencia secundaria que presenta los cargos como sucesivos.",refs:["DMR-013-CLM-003","DMR-013-CLM-004"]},
{targetId:"CHAR-LILIRUCA-ARDE",label:"Ayuda reportada",type:"Intervención",description:"La fuente comunitaria le atribuye ayuda a Lili; la escena original todavía debe localizarse.",refs:["DMR-013-CLM-004"]}
]},
"CHAR-CANOE-BELWAY":{"CONT-MAIN-LN":[
{targetId:"CHAR-ZANIS-LUSTRA",label:"Acusación sobre su desaparición",type:"Acusación / evidencia pendiente",description:"El resumen comunitario refiere el reclamo de Zanis, sin establecer causa o circunstancias de ausencia.",refs:["DMR-013-CLM-005"]},
{targetId:"CHAR-LILIRUCA-ARDE",label:"Nombrada en una acusación",type:"Acusación / evidencia pendiente",description:"La acusación no se transforma en prueba de culpabilidad de Lili.",refs:["DMR-013-CLM-005"]}
]},
"CHAR-TSUKINOKAMI-KAEDE":{"CONT-MAIN-LN":[{targetId:"CHAR-SOMA",label:"Afiliación reportada",type:"Afiliación organizativa",description:"El roster comunitario incluye a Kaede en Soma Familia; relación institucional, no personal.",refs:["DMR-013-CLM-006"]}]},
"CHAR-SHINONOME-MOMIJI":{"CONT-MAIN-LN":[{targetId:"CHAR-SOMA",label:"Afiliación reportada",type:"Afiliación organizativa",description:"El roster comunitario incluye a Momiji en Soma Familia; relación institucional, no personal.",refs:["DMR-013-CLM-007"]}]},
"CHAR-COCO-COLLINS":{"CONT-MAIN-LN":[{targetId:"CHAR-SOMA",label:"Afiliación reportada",type:"Afiliación organizativa",description:"El roster comunitario incluye a Coco en Soma Familia; relación institucional, no personal.",refs:["DMR-013-CLM-008"]}]}

});

Object.assign(REL,{

"CHAR-RIVERIA-LJOS-ALF":{"CONT-ANIME":[
{targetId:"CHAR-FINN-DEIMNE",label:"Núcleo de mando",type:"Relación organizativa",description:"El material oficial presenta a Finn como capitán y a Riveria como vicecapitana. Se registra como estructura de mando, sin afirmar acuerdo en todas las decisiones.",refs:["DMR-014-CLM-001"]},
{targetId:"CHAR-GARETH-LANDROCK",label:"Veteranos de mando",type:"Compañerismo organizativo",description:"Ambos aparecen en el núcleo veterano de Loki Familia en la síntesis de las fichas; se trata de un vínculo de equipo.",refs:["DMR-014-CLM-001"]}],
"CONT-SO":[{targetId:"CHAR-LEFIYA-VIRIDIS",label:"Mentoría reportada",type:"Mentoría",description:"La fuente secundaria describe a Riveria orientando la formación mágica de Lefiya; localizador de novela pendiente.",refs:["DMR-014-CLM-012"]}]},
"CHAR-GARETH-LANDROCK":{"CONT-ANIME":[
{targetId:"CHAR-FINN-DEIMNE",label:"Núcleo de mando",type:"Relación organizativa",description:"El perfil de adaptación presenta a Gareth como veterano de Loki Familia; la arista indica rol de equipo, no intimidad personal.",refs:["DMR-014-CLM-002"]},
{targetId:"CHAR-RIVERIA-LJOS-ALF",label:"Veteranos de mando",type:"Compañerismo organizativo",description:"El perfil oficial presenta a Riveria como vicecapitana y a Gareth como veterano dentro de Loki Familia.",refs:["DMR-014-CLM-002"]}],
"CONT-SO":[{targetId:"CHAR-RIVERIA-LJOS-ALF",label:"Equipo de mando",type:"Compañerismo organizativo",description:"Resumen comunitario de la coordinación del núcleo veterano.",refs:["DMR-014-CLM-008"]}]},
"CHAR-TIONA-HIRYUTE":{"CONT-ANIME":[
{targetId:"CHAR-TIONE-HIRYUTE",label:"Hermana gemela mayor",type:"Parentesco",description:"La referencia de Tiona la identifica como la gemela menor de Tione.",refs:["DMR-014-CLM-004"]},
{targetId:"DM-CHAR-AIS",label:"Amistad con Ais",type:"Amistad (adaptación)",description:"El perfil oficial presenta a Tiona como amiga de Ais; no se generaliza la dinámica a todas las continuidades.",refs:["DMR-014-CLM-004"]}],
"CONT-SO":[{targetId:"CHAR-TIONE-HIRYUTE",label:"Gemelas",type:"Parentesco",description:"El compendio comunitario indica vínculo de hermanas gemelas con temperamentos distintos.",refs:["DMR-014-CLM-010"]}]},
"CHAR-TIONE-HIRYUTE":{"CONT-ANIME":[
{targetId:"CHAR-TIONA-HIRYUTE",label:"Hermana gemela menor",type:"Parentesco",description:"La referencia oficial presenta a Tione como hermana gemela mayor de Tiona.",refs:["DMR-014-CLM-005"]},
{targetId:"CHAR-FINN-DEIMNE",label:"Sentimientos de Tione",type:"Relación emocional unilateralmente descrita",description:"La referencia oficial describe sentimientos de Tione hacia Finn; no afirma reciprocidad.",refs:["DMR-014-CLM-005"]}],
"CONT-SO":[{targetId:"CHAR-FINN-DEIMNE",label:"Sentimientos de Tione",type:"Relación emocional",description:"La fuente comunitaria atribuye sentimientos a Tione, sin evidencia separada de reciprocidad de Finn.",refs:["DMR-014-CLM-011"]}]},
"CHAR-LEFIYA-VIRIDIS":{"CONT-ANIME":[{targetId:"DM-CHAR-AIS",label:"Admiración por Ais",type:"Admiración (adaptación)",description:"El perfil oficial indica admiración de Lefiya por Ais. No implica que sus vínculos tengan la misma intensidad en todas las continuidades.",refs:["DMR-014-CLM-006"]}],
"CONT-SO":[
{targetId:"DM-CHAR-AIS",label:"Admiración por Ais",type:"Admiración",description:"La fuente secundaria describe admiración, una motivación que puede generar aprendizaje e inseguridad.",refs:["DMR-014-CLM-012"]},
{targetId:"CHAR-RIVERIA-LJOS-ALF",label:"Orientación mágica reportada",type:"Mentoría",description:"La fuente secundaria presenta a Riveria como guía de Lefiya; localizadores primarios pendientes.",refs:["DMR-014-CLM-012"]}]}

});

for(const id of ["CHAR-CECIL-BLACKLIZA","CHAR-ISELINA","CHAR-SHAU","CHAR-ULANDA"]){
  REL[id]={"CONT-MAIN-LN":[{targetId:"CHAR-ASTREA",label:"Astrea · diosa de la nueva Familia",type:"Afiliación secundaria",description:"La lista comunitaria sitúa a esta integrante en la nueva Familia asociada a Astrea. Se mantiene pendiente de cotejo con la novela.",refs:["DMR-007-CLM-011"]}]};
}

const MOM={
"CHAR-RYUU-LION":{"CONT-AR":[
{id:"ryu-justice",title:"Una búsqueda propia de justicia",period:"Astrea Record · volumen 1 · aprox. T−7",summary:"La sinopsis presenta a Ryu buscando su idea de justicia bajo Astrea, con Alise como capitana y guía.",refs:["DMR-001-CLM-005","DMR-002-CLM-015"],people:["CHAR-RYUU-LION","CHAR-ALISE-LOVELACE","CHAR-ASTREA"]},
{id:"ryu-evilus",title:"La amenaza de Evilus",period:"Astrea Record · volumen 1",summary:"La sinopsis anuncia una gran confrontación contra Evilus y una amenaza para Orario; no detalla aquí acciones individuales ni el resultado de cada combate.",refs:["DMR-001-CLM-006"],people:["CHAR-RYUU-LION","CHAR-ALISE-LOVELACE"]},
{id:"ryu-seven-days",title:"Los siete días de la muerte",period:"Astrea Record · volumen 2",summary:"La sinopsis relaciona las pérdidas de ese periodo con un golpe a la comprensión de justicia de Ryu. Las escenas precisas y consecuencias individuales requieren el volumen.",refs:["DMR-001-CLM-007","DMR-002-CLM-016"],people:["CHAR-RYUU-LION"]}
],"CONT-ANIME":[{id:"ryu-anime-state",title:"Un estado posterior en la adaptación",period:"DanMachi IV · fecha interna no fijada",summary:"El perfil de adaptación presenta a Ryu como antigua aventurera y trabajadora de Hostess of Fertility, no como sustituto de la novela principal.",refs:["DMR-001-CLM-010"],people:["CHAR-RYUU-LION"]}],
"CROSS-CONTINUITY":[{id:"ryu-identity-comparison",title:"Una identidad, dos estados documentales",period:"Comparación CONT-AR / CONT-ANIME",summary:"El corpus propone una identidad común de forma provisional y conserva por separado el estado histórico y el perfil posterior del anime.",refs:["DMR-001-CLM-010"],people:["CHAR-RYUU-LION"]}]},
"CHAR-ALISE-LOVELACE":{"CONT-AR":[{id:"alise-captain",title:"Capitana y guía de Ryu",period:"Astrea Record · volumen 1",summary:"La sinopsis editorial identifica a Alise como capitana y guía de Ryu durante su búsqueda de justicia.",refs:["DMR-001-CLM-005"],people:["CHAR-ALISE-LOVELACE","CHAR-RYUU-LION","CHAR-ASTREA"]}],
"CONT-ANIME":[{id:"alise-anime-profile",title:"Rasgos descritos en la adaptación",period:"DanMachi IV · fecha interna no fijada",summary:"El perfil de adaptación describe a Alise como franca y de ánimo luminoso; no fija por sí solo una cronología personal.",refs:["DMR-002-CLM-019","DMR-002-CLM-020"],people:["CHAR-ALISE-LOVELACE"]}]},
"CHAR-ASTREA":{"CONT-AR":[{id:"astrea-familia-justice",title:"Astrea Familia en la Era Oscura",period:"Periodo histórico de Astrea Record",summary:"El material oficial describe a Astrea Familia como un grupo que se alza en nombre de la justicia durante la situación extrema de Orario.",refs:["DMR-001-CLM-004","DMR-001-CLM-005"],people:["CHAR-ASTREA","CHAR-RYUU-LION","CHAR-ALISE-LOVELACE"]}],
"CONT-ANIME":[{id:"astrea-anime-profile",title:"Justicia, orden y reputación",period:"Perfil de adaptación DanMachi IV",summary:"El perfil oficial de adaptación describe valores y reputación propios de esa continuidad.",refs:["DMR-002-CLM-017","DMR-002-CLM-018"],people:["CHAR-ASTREA"]}]}
};
const TIMELINE={"CHAR-RYUU-LION":{"CONT-AR":[
{id:"t-ryu-anchor",title:"Ancla temporal aproximada",period:"Aproximadamente siete años antes de la visita de Bell",refs:["DMR-001-CLM-002"]},
{id:"t-ryu-vol1",title:"Astrea Record · volumen 1",period:"Tramo del volumen 1",refs:["DMR-001-CLM-005","DMR-001-CLM-006"]},
{id:"t-ryu-vol2",title:"Astrea Record · volumen 2",period:"Tramo del volumen 2",refs:["DMR-001-CLM-007","DMR-002-CLM-016"]},
{id:"t-ryu-vol3",title:"Astrea Record · volumen 3",period:"Tramo del volumen 3",refs:["DMR-001-CLM-008"]}],
"CONT-ANIME":[{id:"t-ryu-anime",title:"Perfil posterior de la adaptación",period:"Fecha interna no establecida",refs:["DMR-001-CLM-010"]}]},
"CHAR-ALISE-LOVELACE":{"CONT-AR":[{id:"t-alise-ar",title:"Capitanía durante Astrea Record",period:"Periodo histórico · volumen 1",refs:["DMR-001-CLM-005"]}],
"CONT-ANIME":[{id:"t-alise-anime",title:"Descripción en perfil de adaptación",period:"Fecha interna no establecida",refs:["DMR-002-CLM-019","DMR-002-CLM-020"]}]},
"CHAR-ASTREA":{"CONT-AR":[{id:"t-astrea-ar",title:"Astrea Familia en la Era Oscura",period:"Periodo histórico de Astrea Record",refs:["DMR-001-CLM-004","DMR-001-CLM-005"]}],
"CONT-ANIME":[{id:"t-astrea-anime",title:"Perfil de justicia y orden",period:"Fecha interna no establecida",refs:["DMR-002-CLM-017","DMR-002-CLM-018"]}]}};

MOM["DM-CHAR-BELL"]={"CONT-ANIME":[
{id:"bell-hero-motivation",title:"La inspiración de los héroes",period:"Perfil de adaptación DanMachi V",summary:"El perfil de adaptación presenta a Bell como alguien que llegó a Orario por admiración hacia los héroes.",refs:["DMR-002-CLM-001"],people:["DM-CHAR-BELL"]},
{id:"bell-ais-admiration",title:"La admiración por Ais",period:"Perfil de adaptación DanMachi V",summary:"La fuente identifica a Ais como objeto de admiración de Bell y describe su madurez romántica como todavía incipiente.",refs:["DMR-002-CLM-002"],people:["DM-CHAR-BELL","DM-CHAR-AIS"]}
]};
MOM["DM-CHAR-HESTIA"]={"CONT-ANIME":[
{id:"hestia-dagger",title:"Trabajar para pagar la daga",period:"Perfil de adaptación DanMachi V",summary:"El perfil describe a Hestia trabajando para ayudar a pagar la daga que le dio a Bell.",refs:["DMR-002-CLM-003"],people:["DM-CHAR-HESTIA","DM-CHAR-BELL"]},
{id:"hestia-freya",title:"La atención puesta en Freya",period:"Perfil de adaptación DanMachi V",summary:"La fuente dice que Hestia vigila a Freya ante la posibilidad de que interfiera en su vínculo con Bell. La etiqueta emocional requiere distinguirse del dato fuente.",refs:["DMR-002-CLM-004"],people:["DM-CHAR-HESTIA","CHAR-FREYA"]}
]};
MOM["DM-CHAR-AIS"]={"CONT-ANIME":[
{id:"ais-bell-growth",title:"El crecimiento de Bell llama su atención",period:"Perfil de adaptación DanMachi III",summary:"El perfil oficial destaca que Ais se interesa por el progreso inusualmente rápido de Bell, sin presentar eso como prueba suficiente de reciprocidad romántica.",refs:["DMR-002-CLM-005","DMR-002-CLM-006"],people:["DM-CHAR-AIS","DM-CHAR-BELL"]}
]};
MOM["DM-CHAR-EINA"]={"CONT-ANIME":[
{id:"eina-advisor",title:"La asesora del Guild",period:"Perfil de adaptación DanMachi III",summary:"La ficha de Eina la presenta como asesora de Bell y fuente de conocimiento sobre el Dungeon y la ciudad.",refs:["DMR-002-CLM-007","DMR-002-CLM-008"],people:["DM-CHAR-EINA","DM-CHAR-BELL"]}
]};
MOM["CHAR-FINN-DEIMNE"]={"CONT-ANIME":[
{id:"finn-leadership",title:"Capitán de la Familia Loki",period:"Perfil de adaptación DanMachi III",summary:"El perfil oficial resalta la capacidad de Finn y su aptitud extraordinaria para el mando. La interpretación de cómo planifica tácticamente queda pendiente de escenas concretas.",refs:["DMR-002-CLM-009","DMR-002-CLM-010"],people:["CHAR-FINN-DEIMNE"]}
]};
MOM["CHAR-FREYA"]={"CONT-ANIME":[
{id:"freya-bell-soul",title:"El interés por el alma de Bell",period:"Perfil de adaptación DanMachi V",summary:"La fuente describe a Freya atraída por el alma de Bell y deseando que crezca hasta ser un compañero digno de ella.",refs:["DMR-002-CLM-011"],people:["CHAR-FREYA","DM-CHAR-BELL"]},
{id:"freya-charm",title:"El alcance de Charm",period:"Perfil de adaptación DanMachi V",summary:"El perfil describe Charm como una influencia capaz de afectar a humanos, dioses y monstruos.",refs:["DMR-002-CLM-012"],people:["CHAR-FREYA"]}
]};
MOM["CHAR-OTTAR"]={"CONT-ANIME":[
{id:"ottar-training",title:"Entrenamiento y búsqueda de fuerza",period:"Perfil de adaptación DanMachi V",summary:"La ficha de Ottar afirma que busca hacerse más fuerte y entrena arduamente de forma habitual.",refs:["DMR-002-CLM-013"],people:["CHAR-OTTAR"]},
{id:"ottar-loyalty",title:"Lealtad a Freya",period:"Perfil de adaptación DanMachi V",summary:"La fuente describe a Ottar como absolutamente leal a Freya y dispuesto a responder con dureza ante quien la insulte.",refs:["DMR-002-CLM-014"],people:["CHAR-OTTAR","CHAR-FREYA"]}
]};


const EXTENDED={
"CHAR-RYUU-LION":{
"CONT-AR":{title:"Ryu Lion · Era Oscura de Orario",summary:"En Astrea Record, Ryu aparece en una etapa anterior a su trabajo en la Anfitriona de la Fertilidad. La sinopsis editorial la sitúa tratando de construir su propia idea de justicia, bajo Astrea y guiada por Alise, capitana de la Familia. La historia se desarrolla en una Orario descrita por la cronología oficial como sumida en el caos y la violencia.",sections:[{title:"Punto de partida",text:"Su búsqueda de justicia no se presenta como una respuesta ya resuelta: es la pregunta que orienta esta etapa de su vida. Alise ocupa un lugar explícito como capitana y guía; Astrea es el marco divino de la Familia."},{title:"El contexto histórico",text:"Las sinopsis editoriales conectan a la Familia con el conflicto contra Evilus y con acontecimientos que amenazan a Orario. La trilogía de Astrea Record está organizada en tres volúmenes; los detalles de escenas concretas deben comprobarse en las novelas, no deducirse de sus sinopsis."},{title:"Cómo leer su evolución",text:"La sinopsis del segundo volumen indica que las pérdidas conocidas como “Los siete días de la muerte” sacuden su comprensión de la justicia. Esta ficha resume ese punto de inflexión sin reproducir el libro ni convertir una sinopsis en una narración exhaustiva."}],references:[{label:"Wiki comunitaria en español · Ryuu Lion",url:"https://danmachi.fandom.com/es/wiki/Ryuu_Lion",kind:"community"},{label:"Cronología oficial de DanMachi (japonés)",url:"https://danmachi.com/chronology",kind:"official"},{label:"Astrea Record, volumen 1 · editorial GA Bunko (japonés)",url:"https://ga.sbcr.jp/product/9784815610173",kind:"official"},{label:"Astrea Record, volumen 2 · editorial GA Bunko (japonés)",url:"https://ga.sbcr.jp/product/9784815610180",kind:"official"}],galleryUrl:"https://danmachi.fandom.com/es/wiki/Ryuu_Lion#Galería_de_Imágenes"},
"CONT-ANIME":{title:"Ryu Lion · adaptación anime",summary:"El perfil de DanMachi IV presenta a Ryu como antigua aventurera y trabajadora de la Anfitriona de la Fertilidad. Ese estado posterior no sustituye su perfil histórico de Astrea Record ni debe mezclarse con datos de la novela principal sin una fuente específica.",sections:[{title:"Estado representado",text:"La ficha oficial de la adaptación sirve para identificar el papel que Ryu ocupa en esa versión. Los acontecimientos de su etapa anterior pertenecen a otro tramo temporal y conviene leerlos aparte."},{title:"Personalidad y límites",text:"El corpus incorpora por separado la motivación de justicia atribuida a su etapa histórica. No trasladamos automáticamente todos los rasgos de una etapa a otra, ni inferimos gustos o pensamientos privados si las fuentes no los registran."}],references:[{label:"Wiki comunitaria en español · Ryuu Lion",url:"https://danmachi.fandom.com/es/wiki/Ryuu_Lion",kind:"community"},{label:"Perfil oficial de personajes · DanMachi IV (japonés)",url:"https://danmachi.com/danmachi4/character",kind:"official"}],galleryUrl:"https://danmachi.fandom.com/es/wiki/Ryuu_Lion#Galería_de_Imágenes"}},
"CHAR-ALISE-LOVELACE":{"CONT-AR":{title:"Alise · capitana de Astrea Familia",summary:"El material editorial presenta a Alise como capitana de Astrea Familia y como la persona que guía a Ryu en su búsqueda de justicia. La documentación actual es suficiente para establecer liderazgo y compañerismo, pero no para reconstruir cada conversación o vínculo privado.",sections:[{title:"Papel dentro del grupo",text:"La capitana no es un personaje aislado: su función ayuda a entender el entorno en el que Ryu intenta definir qué significa la justicia. La sinopsis menciona también a sus compañeras, aunque no enumera a todos sus miembros."},{title:"Una advertencia de nombres",text:"La wiki comunitaria consultada en español usa la romanización “Alise Lovell”, mientras que el identificador y algunos registros internos de este prototipo dicen “Alise Lovelace”. La ficha conserva por ahora el ID estable; el nombre visible debe cotejarse con fuentes primarias antes de normalizarlo definitivamente."}],references:[{label:"Wiki comunitaria en español · Alise Lovell",url:"https://danmachi.fandom.com/es/wiki/Alise_Lovell",kind:"community"},{label:"Astrea Record, volumen 1 · editorial GA Bunko (japonés)",url:"https://ga.sbcr.jp/product/9784815610173",kind:"official"}],galleryUrl:"https://danmachi.fandom.com/es/wiki/Alise_Lovell#Galería_de_Imágenes"},
"CONT-ANIME":{title:"Alise · perfil de adaptación",summary:"El perfil de DanMachi IV la describe como franca, directa y de ánimo luminoso, y retrata un liderazgo poco convencional que aun así atrae la confianza de sus compañeras. Estos rasgos se mantienen dentro de la adaptación.",sections:[{title:"Carácter y liderazgo",text:"El corpus registra tanto su temperamento como su función de capitana. No convierte esos rasgos en una evaluación psicológica total ni extiende automáticamente una descripción de adaptación a todos los materiales de la franquicia."}],references:[{label:"Wiki comunitaria en español · Alise Lovell",url:"https://danmachi.fandom.com/es/wiki/Alise_Lovell",kind:"community"},{label:"Perfil oficial de personajes · DanMachi IV (japonés)",url:"https://danmachi.com/danmachi4/character",kind:"official"}],galleryUrl:"https://danmachi.fandom.com/es/wiki/Alise_Lovell#Galería_de_Imágenes"}},
"CHAR-ASTREA":{"CONT-AR":{title:"Astrea · justicia y Familia",summary:"Astrea aparece como la diosa asociada a la Familia que se alza en nombre de la justicia durante la Era Oscura de Orario. Las fuentes editoriales la conectan con el marco histórico de Ryu y Alise, aunque no ofrecen un registro completo de sus interacciones personales.",sections:[{title:"Marco moral",text:"La búsqueda de justicia de Ryu se sitúa bajo Astrea. Es una relación importante para entender el contexto del personaje, pero el corpus evita inventar consejos, diálogos o decisiones que no aparecen en los materiales consultados."},{title:"Qué falta investigar",text:"La red de miembros de Astrea Familia es una de las próximas líneas de investigación. La ficha solo mostrará como relaciones navegables aquellas personas cuyo nombre, papel y vínculo puedan verificarse con fuentes."}],references:[{label:"Wiki comunitaria en español · Astrea",url:"https://danmachi.fandom.com/es/wiki/Astrea",kind:"community"},{label:"Cronología oficial de DanMachi (japonés)",url:"https://danmachi.com/chronology",kind:"official"},{label:"Astrea Record, volumen 1 · editorial GA Bunko (japonés)",url:"https://ga.sbcr.jp/product/9784815610173",kind:"official"}],galleryUrl:"https://danmachi.fandom.com/es/wiki/Astrea#Galería_de_Imágenes"},
"CONT-ANIME":{title:"Astrea · perfil de adaptación",summary:"El perfil de la adaptación la presenta como diosa de la justicia y el orden, misericordiosa y amable, y describe su reputación en Orario. Esta es una descripción de esa continuidad, no una licencia para asignarle acciones no documentadas en Astrea Record.",sections:[{title:"Descripción y reputación",text:"El registro diferencia los rasgos expresos del perfil de adaptación de las relaciones inferidas por pertenecer a la misma Familia."}],references:[{label:"Wiki comunitaria en español · Astrea",url:"https://danmachi.fandom.com/es/wiki/Astrea",kind:"community"},{label:"Perfil oficial de personajes · DanMachi IV (japonés)",url:"https://danmachi.com/danmachi4/character",kind:"official"}],galleryUrl:"https://danmachi.fandom.com/es/wiki/Astrea#Galería_de_Imágenes"}},
"DM-CHAR-BELL":{"CONT-ANIME":{title:"Bell Cranel · motivación y vínculos",summary:"Bell llega a Orario inspirado por los héroes, según el perfil de adaptación. Su ficha conecta esa motivación con su admiración por Ais y muestra su vínculo con Hestia y Eina, distinguiendo lo que la fuente afirma de las interpretaciones.",sections:[{title:"Motivación",text:"El ideal de los héroes es una motivación explícita en el perfil consultado. Sirve como punto de partida para analizar sus decisiones, pero no explica por sí solo cada una de sus elecciones."},{title:"Relaciones",text:"Ais es presentada como objeto de su admiración; Hestia es descrita como enamorada de él; Eina es su asesora del Guild. Son tipos de vínculo distintos y no deben comprimirse en una sola categoría romántica."}],references:[{label:"Wiki comunitaria en español · Bell Cranel",url:"https://danmachi.fandom.com/es/wiki/Bell_Cranel",kind:"community"},{label:"Perfil oficial de personajes · DanMachi V (japonés)",url:"https://danmachi.com/danmachi5/character",kind:"official"}],galleryUrl:"https://danmachi.fandom.com/es/wiki/Bell_Cranel#Galería_de_Imágenes"}},
"DM-CHAR-HESTIA":{"CONT-ANIME":{title:"Hestia · afecto y apoyo",summary:"El perfil de adaptación destaca la bondad de Hestia, su esfuerzo por ayudar a pagar la daga entregada a Bell y el amor que siente por él. La atención que presta a Freya aparece en la misma fuente; la etiqueta “celos protectores” debe entenderse como interpretación.",sections:[{title:"Acciones concretas",text:"Trabajar para ayudar a pagar la daga es un detalle útil porque convierte su apoyo en una acción documentada, en lugar de limitar la ficha a una etiqueta de personalidad."},{title:"Lectura de su vínculo",text:"El perfil expresa que ama a Bell. Una explicación de sus reacciones ante Freya puede explorar esa tensión, pero debe quedar marcada como análisis, no como una cita literal de la fuente."}],references:[{label:"Wiki comunitaria en español · Hestia",url:"https://danmachi.fandom.com/es/wiki/Hestia",kind:"community"},{label:"Perfil oficial de personajes · DanMachi V (japonés)",url:"https://danmachi.com/danmachi5/character",kind:"official"}],galleryUrl:"https://danmachi.fandom.com/es/wiki/Hestia#Galería_de_Imágenes"}},
"DM-CHAR-AIS":{"CONT-ANIME":{title:"Ais Wallenstein · espada y curiosidad",summary:"El perfil consultado resalta la habilidad extraordinaria de Ais con la espada y su interés en el progreso acelerado de Bell. La evidencia advierte que interesarse por él no prueba por sí solo reciprocidad romántica en todas las etapas.",sections:[{title:"Competencia",text:"Su habilidad con la espada es un rasgo expresamente destacado en la ficha oficial de adaptación."},{title:"Relación con Bell",text:"La fuente registra interés por el progreso de Bell. La lectura emocional de ese interés debe comprobarse con escenas y continuidad concretas, no asumirse de forma automática."}],references:[{label:"Wiki comunitaria en español · Ais Wallenstein",url:"https://danmachi.fandom.com/es/wiki/Ais_Wallenstein",kind:"community"},{label:"Perfil oficial de personajes · DanMachi III (japonés)",url:"https://danmachi.com/danmachi3/character",kind:"official"}],galleryUrl:"https://danmachi.fandom.com/es/wiki/Ais_Wallenstein#Galería_de_Imágenes"}},
"DM-CHAR-EINA":{"CONT-ANIME":{title:"Eina Tulle · la asesora del Guild",summary:"Eina está documentada como asesora asignada a Bell y como fuente de conocimientos sobre el Dungeon y la ciudad. La ficha no inventa una psicología completa a partir de su ocupación.",sections:[{title:"Papel en la historia",text:"Su función aporta contexto y orientación a un aventurero novato. El corpus mantiene separado ese dato de las inferencias sobre si siempre es estricta, protectora o maternal."}],references:[{label:"Wiki comunitaria en español · Eina Tulle",url:"https://danmachi.fandom.com/es/wiki/Eina_Tulle",kind:"community"},{label:"Perfil oficial de personajes · DanMachi III (japonés)",url:"https://danmachi.com/danmachi3/character",kind:"official"}],galleryUrl:"https://danmachi.fandom.com/es/wiki/Eina_Tulle#Galería_de_Imágenes"}},
"CHAR-FINN-DEIMNE":{"CONT-ANIME":{title:"Finn Deimne · liderazgo",summary:"Finn es descrito por el perfil de adaptación como un aventurero de gran capacidad y un líder con extraordinaria aptitud de mando. La ficha evita inventar su estrategia concreta sin revisar escenas donde tome decisiones.",sections:[{title:"Liderazgo documentado",text:"La capacidad de mando está expresamente respaldada por la fuente incorporada. El detalle táctico, las prioridades y los posibles conflictos de liderazgo necesitan una tanda de investigación basada en escenas."}],references:[{label:"Wiki comunitaria en español · Finn Deimne",url:"https://danmachi.fandom.com/es/wiki/Finn_Deimne",kind:"community"},{label:"Perfil oficial de personajes · DanMachi III (japonés)",url:"https://danmachi.com/danmachi3/character",kind:"official"}],galleryUrl:"https://danmachi.fandom.com/es/wiki/Finn_Deimne#Galería_de_Imágenes"}},
"CHAR-FREYA":{"CONT-ANIME":{title:"Freya · deseo y poder",summary:"El perfil de adaptación describe la atracción de Freya por el alma de Bell y el alcance de Charm sobre humanos, dioses y monstruos. La ficha separa esos datos de cualquier juicio o etiqueta psicológica no expresada por la fuente.",sections:[{title:"Motivación narrada",text:"La fuente describe el deseo de que Bell crezca hasta ser un compañero digno. El análisis de sus decisiones debe considerar el contexto de la trama y los spoilers seleccionados."},{title:"Poder y límites",text:"Charm se describe como una influencia amplia. Esta ficha no amplía sus límites exactos más allá de lo documentado en el material incorporado."}],references:[{label:"Wiki comunitaria en español · Freya",url:"https://danmachi.fandom.com/es/wiki/Freya",kind:"community"},{label:"Perfil oficial de personajes · DanMachi V (japonés)",url:"https://danmachi.com/danmachi5/character",kind:"official"}],galleryUrl:"https://danmachi.fandom.com/es/wiki/Freya#Galería_de_Imágenes"}},
"CHAR-OTTAR":{"CONT-ANIME":{title:"Ottar · disciplina y lealtad",summary:"La evidencia describe a Ottar como capitán de la Familia Freya, un aventurero que entrena para hacerse más fuerte y alguien absolutamente leal a su diosa.",sections:[{title:"Disciplina",text:"El entrenamiento habitual y la búsqueda de fuerza son datos explícitos de la ficha consultada. Para completar técnicas, niveles y escenas de combate se necesita una investigación dedicada con sus fuentes y spoilers."},{title:"Lealtad",text:"El corpus documenta su lealtad hacia Freya. Las decisiones concretas deben vincularse a acontecimientos identificables y no rellenarse con suposiciones."}],references:[{label:"Wiki comunitaria en español · Ottar",url:"https://danmachi.fandom.com/es/wiki/Ottar",kind:"community"},{label:"Perfil oficial de personajes · DanMachi V (japonés)",url:"https://danmachi.com/danmachi5/character",kind:"official"}],galleryUrl:"https://danmachi.fandom.com/es/wiki/Ottar#Galería_de_Imágenes"}}
,"CHAR-KAGUYA":{"CONT-AR":{title:"Gojouno Kaguya · vicecapitana de Astrea Familia",summary:"Una wiki comunitaria en español la presenta como aventurera y vicecapitana de Astrea Familia. WordWaifu la incorpora como ficha provisional y no considera ese dato una verificación oficial hasta cotejarlo con un volumen o capítulo.",sections:[{title:"Lo que sí consta en esta tanda",text:"La referencia comunitaria la identifica como antigua integrante y vicecapitana. Eso permite ubicar su papel dentro de la red de Familia, pero no basta para describir su personalidad, habilidades, historia completa ni sus interacciones con Ryu."},{title:"Qué falta investigar",text:"El siguiente paso es encontrar localizadores de novela para la vicecapitanía, sus decisiones y escenas relevantes. Mientras tanto, la relación con Ryu y Alise se etiqueta como afiliación compartida, no como amistad inventada."}],references:[{label:"Wiki comunitaria en español · Gojouno Kaguya",url:"https://danmachi.fandom.com/es/wiki/Gojouno_Kaguya",kind:"community"},{label:"Wiki comunitaria en español · Familia Astrea",url:"https://danmachi.fandom.com/es/wiki/Familia_Astrea",kind:"community"},{label:"Astrea Record, volumen 1 · editorial GA Bunko (japonés)",url:"https://ga.sbcr.jp/product/9784815610173",kind:"official"}],galleryUrl:"https://danmachi.fandom.com/es/wiki/Gojouno_Kaguya#Galería_de_Imágenes"}},
"CHAR-LYRA":{"CONT-AR":{title:"Lyra · aventurera de Astrea Familia",summary:"La referencia comunitaria en español la enumera como aventurera y antigua integrante de Astrea Familia. Su ficha permanece deliberadamente breve hasta localizar evidencia primaria sobre su historia y su vínculo específico con otras personas.",sections:[{title:"Afiliación documentada en la referencia",text:"La información incorporada permite colocar a Lyra dentro de la red histórica de Astrea Familia. La pertenencia compartida con Ryu y Alise no demuestra por sí sola una amistad, rivalidad ni una escena concreta."},{title:"Qué falta investigar",text:"Se necesita un localizador de novela o una fuente oficial para describir su personalidad, habilidades, evolución, acontecimientos importantes y vínculos individuales. No rellenaremos esos apartados con rumores o fanon."}],references:[{label:"Wiki comunitaria en español · Lyra",url:"https://danmachi.fandom.com/es/wiki/Lyra",kind:"community"},{label:"Wiki comunitaria en español · Familia Astrea",url:"https://danmachi.fandom.com/es/wiki/Familia_Astrea",kind:"community"},{label:"Astrea Record, volumen 1 · editorial GA Bunko (japonés)",url:"https://ga.sbcr.jp/product/9784815610173",kind:"official"}],galleryUrl:"https://danmachi.fandom.com/es/wiki/Lyra#Galería_de_Imágenes"}}
};

MOM["CHAR-RYUU-LION"]["CONT-ANIME"].push(
{id:"ryu-alise-formation",title:"La influencia de Alise",period:"Perfil oficial de DanMachi IV · etapa histórica adaptada",summary:"La adaptación presenta a Alise como capitana que guía a Ryu, lo que permite entender la formación inicial de su idea de justicia.",refs:["DMR-007-CLM-001"],people:["CHAR-RYUU-LION","CHAR-ALISE-LOVELACE"]},
{id:"ryu-kaguya-friction",title:"Desacuerdo que convive con el respeto",period:"Perfil oficial de DanMachi IV · Astrea Familia",summary:"La adaptación describe una relación con roces frecuentes entre Ryu y Kaguya y respeto por sus capacidades.",refs:["DMR-007-CLM-002"],people:["CHAR-RYUU-LION","CHAR-KAGUYA"]},
{id:"ryu-lyra-support",title:"Una compañera de confianza estratégica",period:"Perfil oficial de DanMachi IV · Astrea Familia",summary:"El perfil oficial destaca la perspicacia de Lyra en la red histórica de Ryu.",refs:["DMR-007-CLM-003"],people:["CHAR-RYUU-LION","CHAR-LYRA"]}
);



MOM["CHAR-RYUU-LION"]["CONT-AR"].push(
{id:"ryu-loss-legacy",title:"La primera Familia Astrea y sus pérdidas",period:"Era Oscura · fuente secundaria",summary:"Una referencia comunitaria conecta el fin de la primera Familia con el Juggernaut y el trauma de Ryu. Es un resumen con spoilers, pendiente de cotejo por volumen.",refs:["DMR-007-CLM-006"],people:["CHAR-RYUU-LION","CHAR-ALISE-LOVELACE","CHAR-KAGUYA","CHAR-LYRA"]},
{id:"ryu-memorial",title:"El memorial para las compañeras caídas",period:"Dungeon · ubicación secundaria asociada al piso 18",summary:"La fuente comunitaria afirma que Ryu recuerda a las integrantes perdidas mediante un memorial. Debe localizarse la escena en la novela antes de tratar el detalle como verificado.",refs:["DMR-007-CLM-007"],people:["CHAR-RYUU-LION"]}
);

EXTENDED["CHAR-MARIYU-LEAGE"]=EXTENDED["CHAR-MARIYU-LEAGE"]||{};
EXTENDED["CHAR-MARIYU-LEAGE"]["CONT-ANIME"]={
title:"Mariyu Leage · identidad y afiliación oficial",
summary:"El perfil oficial la identifica como humana y miembro de Astrea Familia. La página usa el nombre マリュー・レアージュ; Mariyu Reage y Maryuu Reage se guardan como alias de búsqueda, no como personas distintas.",
sections:[
{title:"Datos respaldados",text:"Especie: humana. Voz japonesa: Akira Sekine. Afiliación: Astrea Familia en el portal oficial de DanMachi IV."},
{title:"Variantes de romanización",text:"WordWaifu usa CHAR-MARIYU-LEAGE como ID estable, pero las búsquedas Mariyu Leage, Mariyu Reage, Maryuu Reage y マリュー・レアージュ abren la misma ficha."},
{title:"Límites",text:"La entrada oficial no aporta una biografía individual extensa, ni basta para inventar su nivel, personalidad, habilidades o relaciones de escena."}
],
references:[{label:"Perfil oficial DanMachi IV · Mariyu Reage",url:"https://danmachi.com/danmachi4/character/",kind:"official"}],
galleryUrl:"https://danmachi.com/danmachi4/character/images/chara_tachi_26.png"
};
MOM["CHAR-RYUU-LION"]["CONT-ANIME"].push(
{id:"ryu-family-justice",title:"La misión y caída de Astrea Familia",period:"DanMachi IV · episodio 20",summary:"La sinopsis oficial presenta a la primera Familia como protectora de los débiles y combatiente contra el mal; su nombre desaparece en la oscuridad del Dungeon, dejando a Ryu como única superviviente conocida. La causa detallada del desastre requiere cotejar los episodios y el texto de Astrea Record.",refs:["DMR-007-CLM-026"],people:["CHAR-RYUU-LION","CHAR-ASTREA","CHAR-ALISE-LOVELACE","CHAR-KAGUYA","CHAR-LYRA"]}
);
MOM["CHAR-RYUU-LION"]["CONT-MAIN-LN"]=[
{id:"ryu-astrea-departure",title:"Ryu pide a Astrea que salga de Orario",period:"Después de la tragedia de Astrea Familia · evidencia secundaria",summary:"Una referencia secundaria indica que Ryu pidió a Astrea que abandonara Orario porque había decidido vengarse y no quería que la diosa presenciara esa etapa. El motivo está pendiente de cotejo con un pasaje primario.",refs:["DMR-010-CLM-002"],people:["CHAR-RYUU-LION","CHAR-ASTREA"]},
{id:"ryu-revenge-rampage",title:"La campaña de venganza y sus consecuencias",period:"Después de la partida de Astrea · orden relativo",summary:"La referencia secundaria describe la campaña de Ryu contra Rudra Familia y personas ligadas a Evilus, tras la cual queda marcada como fugitiva. Las escenas y la cronología exacta requieren verificación primaria.",refs:["DMR-010-CLM-003"],people:["CHAR-RYUU-LION"]},
{id:"ryu-rescue-and-recovery",title:"Syr y Mia ayudan a Ryu a sobrevivir",period:"Después de la campaña de venganza · orden relativo",summary:"La referencia secundaria señala que Ryu acaba herida y es encontrada por Syr; Mia la atiende y Ryu comienza una etapa nueva en Hostess of Fertility.",refs:["DMR-010-CLM-004"],people:["CHAR-RYUU-LION"]},
{id:"ryu-visit-astrea",title:"Viajar para reencontrarse con Astrea",period:"Familia Chronicle: Episode Ryuu 2 · sinopsis editorial",summary:"Ryu parte sola de Orario hacia la Ciudad Forjadora de Espadas, al este, para visitar a Astrea y buscar fuerza tras años de determinación. La sinopsis confirma el viaje, no cada detalle de los años de separación.",refs:["DMR-010-CLM-005","DMR-010-CLM-006"],people:["CHAR-RYUU-LION","CHAR-ASTREA"]},
{id:"ryu-astrea-orders-stay",title:"Astrea le ordena quedarse y responder",period:"Familia Chronicle: Episode Ryuu 2 · al llegar a la ciudad",summary:"Ryu choca con las nuevas seguidoras de Astrea. La diosa no permite su regreso inmediato y le pide que permanezca allí y dé una respuesta.",refs:["DMR-010-CLM-005"],people:["CHAR-RYUU-LION","CHAR-ASTREA","CHAR-CECIL-BLACKLIZA","CHAR-ISELINA","CHAR-SHAU","CHAR-ULANDA"]}
];
MOM["CHAR-ASTREA"]["CONT-ANIME"]=[
{id:"astrea-outside-orario",title:"Astrea fuera de Orario",period:"Perfil de adaptación DanMachi V",summary:"El perfil oficial posterior la sitúa fuera de Orario con nuevos seguidores, un estado que se mantiene separado de la Familia histórica.",refs:["DMR-007-CLM-008"],people:["CHAR-ASTREA"]}
];
MOM["CHAR-ASTREA"]["CONT-MAIN-LN"]=[
{id:"astrea-departure-from-orario",title:"Astrea sale de Orario a petición de Ryu",period:"Tras la caída de la primera Astrea Familia · fuente secundaria",summary:"Una referencia secundaria atribuye la partida a la petición de Ryu, quien quería que Astrea no presenciara la venganza que estaba a punto de emprender. El motivo sigue pendiente de localizar en la novela.",refs:["DMR-010-CLM-002"],people:["CHAR-ASTREA","CHAR-RYUU-LION"]},
{id:"astrea-later-family",title:"Astrea vive fuera de Orario con nuevas seguidoras",period:"Estado posterior · antes del War Game Hestia–Freya",summary:"La sinopsis editorial de Episode Ryuu 2 confirma que Ryu viaja para verla y entra en conflicto con nuevas seguidoras de Astrea. El roster detallado de la nueva Familia requiere cotejo.",refs:["DMR-010-CLM-005","DMR-010-CLM-006"],people:["CHAR-ASTREA","CHAR-RYUU-LION","CHAR-CECIL-BLACKLIZA","CHAR-ISELINA","CHAR-SHAU","CHAR-ULANDA"]}
];
MOM["CHAR-ASTREA"]["CONT-ANIME"].push(
{id:"astrea-first-familia-fall",title:"La primera Familia Astrea protege a los débiles",period:"DanMachi IV · episodio 20 · spoiler mayor",summary:"La sinopsis oficial recuerda a la Familia como defensora de los débiles y de la justicia; la historia del episodio habla de su desaparición en el Dungeon y del único superviviente conocido, Ryu.",refs:["DMR-007-CLM-025","DMR-007-CLM-026"],people:["CHAR-ASTREA","CHAR-RYUU-LION","CHAR-ALISE-LOVELACE","CHAR-KAGUYA","CHAR-LYRA"]}
);

TIMELINE["CHAR-RYUU-LION"]["CONT-MAIN-LN"]=[
{id:"t-ryu-astrea-departure",title:"Ryu pide a Astrea que salga de Orario",period:"Después de la tragedia · motivo secundario pendiente de fuente primaria",refs:["DMR-010-CLM-002"]},
{id:"t-ryu-revenge",title:"Campaña de venganza",period:"Después de la partida de Astrea · orden relativo",refs:["DMR-010-CLM-003"]},
{id:"t-ryu-rescue",title:"Rescate y recuperación de Ryu",period:"Después de la venganza · orden relativo",refs:["DMR-010-CLM-004"]},
{id:"t-ryu-visit-astrea",title:"Viaje para visitar a Astrea",period:"Familia Chronicle: Episode Ryuu 2 · sinopsis editorial",refs:["DMR-010-CLM-005","DMR-010-CLM-006"]},
{id:"t-ryu-stays-city",title:"Astrea le pide quedarse en la Ciudad Forjadora",period:"Familia Chronicle: Episode Ryuu 2 · tras su llegada",refs:["DMR-010-CLM-005"]}
];
TIMELINE["CHAR-ASTREA"]["CONT-ANIME"].push(
{id:"t-astrea-outside-orario",title:"Astrea reside fuera de Orario",period:"Perfil de adaptación DanMachi V",refs:["DMR-007-CLM-008"]}
);
TIMELINE["CHAR-ASTREA"]["CONT-ANIME"].push(
{id:"t-astrea-first-familia",title:"La primera Astrea Familia y su desaparición",period:"DanMachi IV · episodio 20 · adaptación",refs:["DMR-007-CLM-025","DMR-007-CLM-026"]}
);

TIMELINE["CHAR-ASTREA"]["CONT-MAIN-LN"]=[
{id:"t-astrea-departure",title:"Astrea sale de Orario a petición de Ryu",period:"Después de la tragedia · fuente secundaria pendiente de cotejo",refs:["DMR-010-CLM-002"]},
{id:"t-astrea-new-location",title:"Astrea vive fuera de Orario con nuevas seguidoras",period:"Estado posterior · sinopsis editorial de Episode Ryuu 2",refs:["DMR-010-CLM-005","DMR-010-CLM-006"]}
];


EXTENDED["CHAR-ASTREA"]["CONT-MAIN-LN"]={
title:"Astrea · estado posterior y nueva Familia",
summary:"El material disponible diferencia el perfil oficial del anime —Astrea reside fuera de Orario con nuevos seguidores— de la sinopsis editorial que motiva el viaje de Ryu y del roster secundario asociado a Solingen.",
sections:[
{title:"Qué está respaldado oficialmente",text:"El portal oficial de DanMachi V sitúa a Astrea fuera de Orario con nuevos seguidores. La sinopsis de Familia Chronicle: Episode Ryuu 2 describe a Ryu viajando para verla y buscar fuerza."},
{title:"Qué continúa provisional",text:"Solingen, la composición exacta de la nueva Familia y el rango de cada integrante aparecen en la fuente comunitaria incluida en el lote. Estos datos son rutas de investigación, no afirmaciones aprobadas hasta cotejar el texto de novela."},
{title:"Cómo seguir explorando",text:"Desde esta ficha se puede abrir a Ryu y a Cecil Blackliza, Iselina, Shau y Ulanda. Cada relación hacia la nueva generación lleva una advertencia de fuente secundaria para no confundir el roster con una biografía completa."}
],
references:[
{label:"Perfil oficial DanMachi V",url:"https://danmachi.com/danmachi5/character/",kind:"official"},
{label:"GA Bunko · Familia Chronicle: Episode Ryuu 2",url:"https://ga.sbcr.jp/product/9784815623692/",kind:"official"},
{label:"Familia Astrea · wiki comunitaria en español (secundaria)",url:"https://danmachi.fandom.com/es/wiki/Familia_Astrea",kind:"community"}
]
};


EXTENDED["CHAR-ALISE-LOVELACE"]["CONT-ANIME"]={
title:"Alise Lovell · capitana y código de justicia",
summary:"El perfil oficial describe una capitana sincera y frontal, a veces despreocupada para su responsabilidad, pero querida y respetada; entiende la justicia como algo que se guarda en el corazón y reverencia a Astrea.",
sections:[
{title:"Liderazgo sin idealización",text:"Alise combina energía y franqueza con momentos de descuido. Las compañeras la siguen no porque cada decisión sea perfecta, sino pese a sus defectos y por el respeto y cariño que existe dentro del grupo."},
{title:"Idea de justicia",text:"Su principio no consiste en blandir la justicia como un arma: la lleva en el corazón. Este matiz ayuda a entender qué tipo de referencia moral representa para Ryu."}
],
references:[{label:"Perfil oficial DanMachi IV · Alise Lovell",url:"https://danmachi.com/danmachi4/character/",kind:"official"},{label:"GA Bunko · Astrea Record 1",url:"https://ga.sbcr.jp/product/9784815610173",kind:"official"}]
};
EXTENDED["CHAR-KAGUYA"]["CONT-ANIME"]={
title:"Gojouno Kaguya · vicecapitana, combatiente y fricción con Ryu",
summary:"La adaptación la describe como una combatiente muy capaz, de nivel 4 y procedente del Lejano Oriente. Su exterior refinado contrasta con su habla áspera; discute con Ryu y aun así respeta su capacidad.",
sections:[
{title:"Papel dentro de Astrea Familia",text:"Kaguya es vicecapitana y una de las mejores luchadoras cuerpo a cuerpo del grupo. No es solo una compañera nominal: su capacidad y su fricción con Ryu forman parte del retrato oficial."},
{title:"Relación con Ryu",text:"La adaptación destaca que chocan repetidamente pero reconocen las habilidades de la otra. Por ello la relación está etiquetada como fricción y respeto, no como amistad incondicional."}
],
references:[{label:"Perfil oficial DanMachi IV · Gojouno Kaguya",url:"https://danmachi.com/danmachi4/character/",kind:"official"}]
};
EXTENDED["CHAR-LYRA"]["CONT-ANIME"]={
title:"Lyra · inteligencia táctica y confianza de Ryu",
summary:"El perfil oficial la identifica como Pallum de nivel 3, perspicaz, astuta y rápida para juzgar situaciones. Ryu confía en ella casi tanto como en Alise; su ayuda también coordina al grupo.",
sections:[
{title:"Cómo ayuda al grupo",text:"Lyra no solo pertenece a Astrea Familia: observa, evalúa y expresa críticas directas que permiten poner el foco en lo que importa. La adaptación la presenta como una voz táctica capaz de hacer que las demás se alineen."},
{title:"Ryu y Lyra",text:"La fuente oficial señala una confianza especialmente alta de Ryu hacia Lyra, situada por debajo de la que deposita en Alise. Es más específico que inferir cercanía a partir de una afiliación común."}
],
references:[{label:"Perfil oficial DanMachi IV · Lyra",url:"https://danmachi.com/danmachi4/character/",kind:"official"}]
};


const officialRosterDetails=[
["CHAR-ISKA-BRA","Iska Bra","Amazoness","Yuuki Hirose","https://danmachi.com/danmachi4/character/images/chara_tachi_25.png","DMR-007-CLM-020"],
["CHAR-NOIN-UNIC","Noin Unic","Humana","Maki Kawase","https://danmachi.com/danmachi4/character/images/chara_tachi_20.png","DMR-007-CLM-015"],
["CHAR-NEZE-RANKETT","Neze Rankett","Mujer lobo (werewolf)","Asuna Tomari","https://danmachi.com/danmachi4/character/images/chara_tachi_21.png","DMR-007-CLM-016"],
["CHAR-ASTA-KNOX","Asta Knox","Enana","Hikaru Tono","https://danmachi.com/danmachi4/character/images/chara_tachi_22.png","DMR-007-CLM-017"],
["CHAR-RYANA-LIETZ","Ryana Lietz","Humana","Saki Kousaka","https://danmachi.com/danmachi4/character/images/chara_tachi_23.png","DMR-007-CLM-018"],
["CHAR-CELTY-SROWA","Celty Srowa","Elfa","Rina Kawaguchi","https://danmachi.com/danmachi4/character/images/chara_tachi_24.png","DMR-007-CLM-019"],
["CHAR-MARIYU-LEAGE","Mariyu Leage","Humana","Akira Sekine","https://danmachi.com/danmachi4/character/images/chara_tachi_26.png","DMR-007-CLM-021"]
];
for(const [id,name,species,voice,url,claim] of officialRosterDetails){
  const refs=[{label:"Perfil oficial DanMachi IV · "+name,url:"https://danmachi.com/danmachi4/character/",kind:"official"}];
  const existing=EXTENDED[id]||{};
  existing["CONT-ANIME"]={
    title:name+" · identidad y afiliación oficial",
    summary:"El perfil oficial identifica a "+name+" como "+species+" y miembro de Astrea Familia. La voz japonesa registrada es "+voice+". No se infiere una biografía, nivel o poder que el perfil no establezca.",
    sections:[
      {title:"Datos respaldados",text:"Especie: "+species+". Voz japonesa: "+voice+". Afiliación en el roster de DanMachi IV: Astrea Familia."},
      {title:"Qué no se debe inventar",text:"La página pública no establece en esta entrada una biografía individual completa, por lo que nivel, habilidades y decisiones particulares quedan pendientes de pasajes o fuentes adicionales."},
      {title:"Retrato y procedencia",text:"Se enlaza el retrato oficial como referencia visual. No se trata de una ilustración de una escena concreta ni se almacena una copia en WordWaifu."}
    ],
    references:refs,
    galleryUrl:url,
    sourceClaims:[claim]
  };
  EXTENDED[id]=existing;
}

EXTENDED["CHAR-RYUU-LION"]["CONT-AR"].sections.push(
{title:"La red de la primera Astrea Familia",text:"La sinopsis editorial confirma a Alise como capitana y guía de Ryu. Los perfiles de adaptación añaden matices diferentes: la relación con Kaguya incluye fricción y respeto, mientras que Lyra destaca por su perspicacia. El resto del roster se puede recorrer, pero los enlaces a otros miembros solo indican afiliación cuando no hay evidencia individual."},
{title:"La pérdida y sus límites de evidencia",text:"La investigación incorporada registra la tragedia del Juggernaut y el memorial en el Dungeon como pistas secundarias con spoilers importantes. No se debe convertir una síntesis de wiki en una escena detallada: el lote siguiente debe localizar los pasajes en los volúmenes."}
);
EXTENDED["CHAR-RYUU-LION"]["CONT-MAIN-LN"]={
title:"Ryu Lion · viaje para ver a Astrea",
summary:"La sinopsis editorial de Familia Chronicle: Episode Ryuu 2 presenta a Ryu saliendo sola para ver a la diosa, buscar fuerza y mover su vida hacia adelante después de años de determinación. Este tramo se consulta separado de la Ryu histórica de Astrea Record y del perfil posterior del anime.",
sections:[
{title:"Motivación y movimiento",text:"El viaje no se resume como una simple reunión: la sinopsis liga la visita a la búsqueda de fuerza y al deseo de seguir adelante. El contenido preciso del trayecto y del encuentro requiere la novela."},
{title:"Astrea fuera de Orario",text:"El perfil posterior de DanMachi V afirma que Astrea vive fuera de Orario con nuevos seguidores. La localización concreta de Solingen y la composición de la nueva Familia se mantienen como pistas secundarias en este archivo."},
{title:"Qué falta",text:"Obtener localizadores de capítulo/página para el viaje, confirmar la ubicación y registrar cada integrante de la nueva Familia con evidencia primaria."}
],
references:[
{label:"GA Bunko · Familia Chronicle: Episode Ryuu 2",url:"https://ga.sbcr.jp/product/9784815623692/",kind:"official"},
{label:"Perfil oficial DanMachi V",url:"https://danmachi.com/danmachi5/character/",kind:"official"},
{label:"Familia Astrea · wiki comunitaria en español (fuente secundaria)",url:"https://danmachi.fandom.com/es/wiki/Familia_Astrea",kind:"community"}
]
};


for(const [id,name,scope,summary,url] of [
["CHAR-ISKA-BRA","Iska Bra","CONT-AR","El roster secundario la vincula con la primera Familia Astrea; la adaptación oficial también ofrece un perfil. Pertenencia no significa que WordWaifu ya conozca cada relación personal.","https://danmachi.com/danmachi4/character/"],
["CHAR-MARIYU-LEAGE","Mariyu Reage","CONT-AR","La lista comunitaria la enumera entre las integrantes históricas. Falta un perfil primario cotejado, así que no se inventan apariencia o carácter.","https://danmachi.fandom.com/es/wiki/Familia_Astrea"],
["CHAR-NOIN-UNIC","Noin Unic","CONT-AR","El portal oficial de DanMachi IV ofrece un perfil en el contexto de Astrea Familia; la ficha individual extensa queda pendiente de escenas y localizadores.","https://danmachi.com/danmachi4/character/"],
["CHAR-NEZE-RANKETT","Neze Rankett","CONT-AR","El portal oficial de DanMachi IV ofrece un perfil en el contexto de Astrea Familia. No se amplía su psicología o historia sin evidencia individual.","https://danmachi.com/danmachi4/character/"],
["CHAR-ASTA-KNOX","Asta Knox","CONT-AR","El portal oficial de DanMachi IV ofrece un perfil en el contexto de Astrea Familia. Los detalles personales no deben rellenarse por asociación con el grupo.","https://danmachi.com/danmachi4/character/"],
["CHAR-RYANA-LIETZ","Ryana Lietz","CONT-AR","El portal oficial de DanMachi IV ofrece un perfil en el contexto de Astrea Familia. La ficha actual sirve como nodo consultable y conserva pendientes de investigación individual.","https://danmachi.com/danmachi4/character/"],
["CHAR-CELTY-SROWA","Celty Srowa","CONT-AR","El portal oficial de DanMachi IV ofrece un perfil en el contexto de Astrea Familia. Se necesitan pasajes y localizadores para ampliar su historia y relaciones.","https://danmachi.com/danmachi4/character/"],
["CHAR-CECIL-BLACKLIZA","Cecil Blackliza","CONT-MAIN-LN","La referencia comunitaria la identifica como capitana de la nueva Familia Astrea. Rango, historia y acciones quedan provisionales hasta cotejar el pasaje original.","https://danmachi.fandom.com/es/wiki/Familia_Astrea"],
["CHAR-ISELINA","Iselina","CONT-MAIN-LN","Figura en el roster comunitario de la nueva Familia. Aún no hay biografía individual primaria incorporada a WordWaifu.","https://danmachi.fandom.com/es/wiki/Familia_Astrea"],
["CHAR-SHAU","Shau","CONT-MAIN-LN","Figura en el roster comunitario de la nueva Familia. Aún no hay biografía individual primaria incorporada a WordWaifu.","https://danmachi.fandom.com/es/wiki/Familia_Astrea"],
["CHAR-ULANDA","Ulanda","CONT-MAIN-LN","Figura en el roster comunitario de la nueva Familia. Aún no hay biografía individual primaria incorporada a WordWaifu.","https://danmachi.fandom.com/es/wiki/Familia_Astrea"]
]){
  if(id==="CHAR-MARIYU-LEAGE"||scope==="CONT-MAIN-LN"){
    EXTENDED[id]={[scope]:{title:name+" · ficha provisional",summary,sections:[{title:"Información disponible",text:summary},{title:"Qué falta",text:"Cotejar identidad, romanización, historia, apariencia, habilidades y relaciones con una fuente primaria; no convertir menciones de roster en biografías completas."}],references:[{label:"Referencia de roster (fuente secundaria)",url,kind:"community"}]}};
  }else{
    EXTENDED[id]={"CONT-AR":{title:name+" · red histórica de Astrea Familia",summary,sections:[{title:"Información disponible",text:summary},{title:"Qué falta",text:"Localizar capítulos de Astrea Record para describir apariencia, decisiones y vínculos personales. La arista hacia Ryu demuestra afiliación histórica, no intimidad automáticamente."}],references:[{label:"Perfil oficial de la adaptación DanMachi IV",url:"https://danmachi.com/danmachi4/character/",kind:"official"},{label:"Familia Astrea · fuente secundaria",url:"https://danmachi.fandom.com/es/wiki/Familia_Astrea",kind:"community"}]},
      "CONT-ANIME":{title:name+" · perfil de adaptación",summary,sections:[{title:"Alcance de la fuente",text:"El portal oficial ofrece un perfil de esta persona dentro del material de adaptación. No equivale a una biografía completa ni acredita por sí solo todas las interacciones en la novela."},{title:"Qué falta",text:"Relacionar las afirmaciones con escenas y pasajes concretos; completar rasgos personales solo cuando estén respaldados."}],references:[{label:"Perfil oficial de personajes DanMachi IV",url,kind:"official"}]}};
  }
}
EXTENDED["CHAR-RYUU-LION"]["CONT-AR"].sections.push(
{title:"Alise, Kaguya y Lyra: vínculos distintos",text:"El material incorporado no reduce a las compañeras a una etiqueta de amistad uniforme. Alise aparece como capitana y guía; Kaguya como alguien con quien Ryu choca y a quien respeta; Lyra como apoyo estratégico. Los detalles exactos de cada interacción requieren localizar las escenas originales."},
{title:"Rostro histórico y evidencia",text:"Las imágenes oficiales de personajes se tratan como retratos de referencia, no como ilustraciones de una escena concreta. La descripción visual de cada persona debe apoyarse en el perfil correspondiente y no se improvisa desde una miniatura."}
);


EXTENDED["CHAR-ASTREA"]["CONT-MAIN-LN"].sections.unshift(
{title:"Por qué salió de Orario · evidencia secundaria",text:"Una fuente secundaria señala que Astrea se marchó a petición de Ryu, que no quería que la diosa presenciara la venganza tras la tragedia de Astrea Familia. El motivo aún no tiene aquí localizador de capítulo de la novela; la sinopsis oficial de Familia Chronicle: Episode Ryuu 2 confirma solo su ubicación posterior y el viaje de Ryu para verla."}
);
EXTENDED["CHAR-RYUU-LION"]["CONT-MAIN-LN"]={
title:"Ryu · tragedia, separación y reencuentro con Astrea",
summary:"La etapa posterior a Astrea Familia enlaza la tragedia, la petición de Ryu para que Astrea salga de Orario, la venganza y la vida posterior de Ryu. Los pasos de venganza y rescate están documentados aquí con fuente secundaria; el viaje posterior y el conflicto con la nueva generación de Astrea figuran en la sinopsis editorial.",
sections:[
{title:"La partida de Astrea",text:"La referencia secundaria dice que Ryu pidió a Astrea salir de Orario porque no quería que la diosa presenciara la venganza. No se presenta como hecho confirmado capítulo a capítulo."},
{title:"La venganza y el rescate",text:"La misma fuente secundaria conecta la campaña de Ryu contra los responsables con su condición de fugitiva y el paso posterior a Hostess of Fertility, después de ser encontrada por Syr y atendida por Mia."},
{title:"El reencuentro",text:"La ficha editorial de Familia Chronicle: Episode Ryuu 2 confirma que Ryu viaja sola a la Ciudad Forjadora de Espadas para ver a Astrea, y que la diosa no le permite regresar de inmediato y le pide una respuesta."}
],
references:[
{label:"Familia Chronicle: Episode Ryuu 2 · editorial oficial",url:"https://ga.sbcr.jp/product/9784815623692/",kind:"official"},
{label:"Ryuu Lion · referencia secundaria",url:"https://danmachi.fandom.com/es/wiki/Ryuu_Lion",kind:"community"},
{label:"DanMachi IV · episodio 20",url:"https://danmachi.com/danmachi4/story/index.php?slideNum=1",kind:"official"}
]
};
META["CHAR-ASTREA"].states["CONT-MAIN-LN"].summary += " Una fuente secundaria atribuye su salida original de Orario a una petición de Ryu para no presenciar la venganza; el motivo requiere localizador primario.";
META["CHAR-RYUU-LION"].states["CONT-MAIN-LN"].summary += " La separación de Astrea y los episodios de venganza y rescate se conservan como resumen secundario; el reencuentro y la orden de quedarse se apoyan en una sinopsis editorial.";

function extendedInfo(id,continuity,index){
const base=EXTENDED[id]&&EXTENDED[id][continuity]?EXTENDED[id][continuity]:null;
const doc=index&&index.profileDetails?index.profileDetails[id]:null;
// A repository dossier should open even when it has not yet received a hand-authored
// EXTENDED summary. This avoids making the "more information" action work only for
// a small hard-coded list of favored characters.
if(!base&&doc){
  const scopes=doc.continuityScopes||[];
  const inScope=!scopes.length||scopes.includes(continuity);
  const inContinuity=(doc.sections||[]).filter(section=>{
    const explicit=[...String(section.heading||"").matchAll(/\\bCONT-[A-Z0-9-]+\\b/g)].map(m=>m[0]);
    return !explicit.length||explicit.includes(continuity);
  });
  const sectionList=inScope
    ?inContinuity.map(section=>({title:section.heading,text:section.text,source:"existing-repository-profile"}))
    :[{title:"Alcance de continuidad",text:"Este expediente está etiquetado para "+scopes.join(", ")+". No se muestra su contenido como si perteneciera a "+(LABELS[continuity]||continuity)+".",source:"continuity-guard"}];
  const relevantClaims=(index.claims||[]).filter(claim=>
    ((doc.claimRefs||[]).includes(claim.claimId)||(doc.claimRefs||[]).includes(claim.entryId)) &&
    (!(claim.continuityScopes||[]).length||(claim.continuityScopes||[]).includes(continuity)));
  const refs=[];
  for(const claim of relevantClaims){
    for(const url of claim.sourceUrls||[]){
      if(!url||refs.some(ref=>ref.url===url))continue;
      refs.push({label:claim.sourceTitle||claim.heading||claim.claimId,url,kind:/fandom\.com|wikipedia\.org/i.test(url)?"community":"official"});
    }
  }
  const title=doc.title||record(index,id)?.name||id;
  const first=doc.sections&&doc.sections.find(section=>/identidad y alcance|identidad|alcance/i.test(section.heading));
  const summary=inScope
    ?(first?first.text:"Expediente del repositorio con fuente y continuidad registradas.")
    :"Hay un expediente de este personaje, pero su alcance documentado no coincide con la continuidad seleccionada.";
  return {title,summary,sections:sectionList,references:refs,repositoryProfile:{path:doc.sourceDocument,status:doc.status,sectionCount:inScope?sectionList.length:0,sourceRefs:doc.sourceRefs||[],claimRefs:doc.claimRefs||[]},continuityScope:scopes};
}
if(!base)return null;
if(!doc)return base;
const scopes=doc.continuityScopes||[];
if(scopes.length&&!scopes.includes(continuity))return base;
const sections=(doc.sections||[]).filter(section=>{
  const heading=String(section.heading||"");
  if(/perfil psicol[oó]gico inicial/i.test(heading))return false;
  const normalizedHeading=heading.normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase();
  const historicalHeading=/temporal state a|estado temporal a|estado historico|astrea record/.test(normalizedHeading);
  const animeHeading=/temporal state b|estado temporal b|official anime|perfil oficial del anime|perfil oficial de adaptacion|adaptacion anime/.test(normalizedHeading);
  if(historicalHeading&&animeHeading)return false;
  if(historicalHeading&&continuity!=="CONT-AR")return false;
  if(animeHeading&&continuity!=="CONT-ANIME")return false;
  if(/perfil oficial de adaptaci[oó]n/i.test(heading)&&continuity!=="CONT-ANIME")return false;
  return true;
}).map(section=>({title:section.heading,text:section.text,source:"existing-repository-profile"}));
return {...base,sections:[...(base.sections||[]),...sections],repositoryProfile:{path:doc.sourceDocument,status:doc.status,sectionCount:sections.length,sourceRefs:doc.sourceRefs||[],claimRefs:doc.claimRefs||[]}};
}
function unique(a){return Array.from(new Set(a.filter(Boolean)));}
function record(index,id){return (index.characters||[]).find(x=>x.id===id)||null;}
function claimsFor(index,id){return (index.claims||[]).filter(c=>(c.characterIds||[]).includes(id));}
function visible(level,filter){const v=String(level||"unknown").toLowerCase();if(filter==="hide-major")return v!=="major"&&v!=="endgame";if(filter==="safe-only")return v==="none"||v==="mild";return true;}
function ordered(a){return unique(a).sort((x,y)=>{const i=ORDER.indexOf(x),j=ORDER.indexOf(y);return(i<0?99:i)-(j<0?99:j)||x.localeCompare(y);});}
function defaultState(a){const s=ordered(a);return ["CONT-AR","CONT-ANIME","CROSS-CONTINUITY","CONT-MAIN-LN","CONT-AU"].find(x=>s.includes(x))||s[0]||"";}
function state(id,c){
const p=META[id];
if(p&&p.states&&p.states[c])return p.states[c];
const roster=typeof globalThis!=="undefined"&&globalThis.WordWaifuOfficialCharacterRoster?globalThis.WordWaifuOfficialCharacterRoster.get(id):null;
if(roster&&c==="CONT-ANIME")return{summary:roster.summary,period:roster.sourceTitle+" · estado de adaptación; fecha interna no fijada",affiliation:roster.family||"Sin afiliación confirmada"};
return{summary:"Ficha provisional basada únicamente en las afirmaciones de esta continuidad.",period:"Periodo exacto no establecido.",affiliation:"Sin afiliación suficiente para este estado"};
}
function refsClaims(index,refs,continuity,filter){return(index.claims||[]).filter(c=>((refs||[]).includes(c.claimId)||(refs||[]).includes(c.entryId))&&(!continuity||(c.continuityScopes||[]).includes(continuity))&&visible(c.spoilerLevel,filter));}
function worst(claims){const rank={none:0,mild:1,unknown:2,major:3,endgame:4};return claims.reduce((v,c)=>rank[String(c.spoilerLevel||"unknown").toLowerCase()]>rank[v]?String(c.spoilerLevel||"unknown").toLowerCase():v,"none");}
function normalizeSearchTerm(value){return String(value||"").normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase();}
function termMatches(value,q){
  const name=normalizeSearchTerm(value);
  if(!q)return true;
  if(name===q||name.startsWith(q+" "))return true;
  // Short queries such as "Ryu" should match token prefixes, not incidental
  // substrings inside unrelated names such as "Hiryute".
  if(q.length<=3)return name.split(/[\s_-]+/).some(token=>token.startsWith(q));
  return name.includes(q);
}
function list(index,options){
  const o=options||{},q=normalizeSearchTerm(String(o.query||"").trim()),continuity=String(o.continuity||"ALL"),filter=String(o.spoiler||"all");
  const eligible=(index.characters||[]).map(ch=>{
    const all=claimsFor(index,ch.id),shown=all.filter(c=>visible(c.spoilerLevel,filter)),scopes=ordered(all.flatMap(c=>c.continuityScopes||[])),shownScopes=ordered(shown.flatMap(c=>c.continuityScopes||[]));
    const target=continuity!=="ALL"&&shownScopes.includes(continuity)?continuity:defaultState(scopes),st=state(ch.id,target),meta=META[ch.id];
    const official=typeof globalThis!=="undefined"&&globalThis.WordWaifuOfficialCharacterRoster?globalThis.WordWaifuOfficialCharacterRoster.get(ch.id):null;
    const displayOverview=meta?meta.overview:(official?official.summary:"Ficha provisional basada en afirmaciones documentadas.");
    const nameTerms=[ch.name,...(ch.aliases||[])],keywordTerms=ch.keywords||[];
    const directMatched=!q||nameTerms.some(value=>termMatches(value,q));
    const keywordMatched=!q||keywordTerms.some(value=>termMatches(value,q));
    return{id:ch.id,name:ch.name,aliases:ch.aliases||[],profilePath:ch.profilePath,overview:displayOverview,summary:continuity==="ALL"?displayOverview:st.summary,preferredContinuity:target,availableContinuities:scopes,states:(continuity==="ALL"?shownScopes:shownScopes.filter(x=>x===continuity)).map(x=>({code:x,label:LABELS[x]||x,affiliation:state(ch.id,x).affiliation})),affiliation:st.affiliation,period:st.period,verifiedClaimCount:shown.length,directMatched,keywordMatched,hasScope:continuity==="ALL"||shownScopes.includes(continuity)};
  }).filter(x=>x.hasScope);
  // When a query resolves to a character name or alias, show those identity
  // matches first and do not pollute the result with other dossiers that merely
  // mention that character in a relationship tag. Use tag/keyword matches only
  // when no identity name matched.
  const direct= q ? eligible.filter(x=>x.directMatched) : eligible;
  const selected=direct.length?direct:eligible.filter(x=>x.keywordMatched);
  return selected.map(({directMatched,keywordMatched,...item})=>item).sort((a,b)=>a.name.localeCompare(b.name,"es"));
}
function relationshipLinks(index,id,continuity,filter){
  const direct=(((REL[id]||{})[continuity])||[]).map(r=>({sourceId:id,targetId:r.targetId,label:r.label,type:r.type,description:r.description,refs:r.refs,direction:"outgoing"}));
  const directTargets=new Set(direct.map(r=>r.targetId));
  const incoming=[];
  for(const [sourceId,scopes] of Object.entries(REL)){
    if(sourceId===id)continue;
    for(const edge of ((scopes||{})[continuity]||[])){
      if(edge.targetId!==id||directTargets.has(sourceId))continue;
      incoming.push({sourceId,targetId:sourceId,label:(record(index,sourceId)?.name||sourceId)+" · vínculo relacionado",type:edge.type,description:"Enlace inverso para navegación. La ficha de origen registra la relación "+sourceId+" → "+id+": "+edge.description,refs:edge.refs,direction:"incoming"});
    }
  }
  return [...direct,...incoming].map(r=>{
    const claims=refsClaims(index,r.refs,continuity,filter),target=record(index,r.targetId);
    return claims.length?{sourceId:r.sourceId,targetId:r.targetId,targetName:target?target.name:r.targetId,available:!!target,label:r.label,type:r.type,description:r.description,continuity,period:state(id,continuity).period,claims,direction:r.direction}:null;
  }).filter(Boolean);
}
function profile(index,id,continuity,filter){const ch=record(index,id);if(!ch)return null;const all=claimsFor(index,id),scopes=ordered(all.flatMap(c=>c.continuityScopes||[])),chosen=continuity&&scopes.includes(continuity)?continuity:defaultState(scopes),allState=all.filter(c=>(c.continuityScopes||[]).includes(chosen)),shown=allState.filter(c=>visible(c.spoilerLevel,filter)),meta=META[id]||{states:{}};
const official=typeof globalThis!=="undefined"&&globalThis.WordWaifuOfficialCharacterRoster?globalThis.WordWaifuOfficialCharacterRoster.get(id):null;
const related=relationshipLinks(index,id,chosen,filter);
const moments=(((MOM[id]||{})[chosen])||[]).map(m=>{const claims=refsClaims(index,m.refs,chosen,filter);return claims.length?{id:m.id,title:m.title,period:m.period,summary:m.summary,claims:claims,spoilerLevel:worst(claims),people:unique(m.people||[]).filter(pid=>record(index,pid)).map(pid=>({id:pid,name:record(index,pid).name}))}:null;}).filter(Boolean);
let timeline=(((TIMELINE[id]||{})[chosen])||[]).map(t=>{const claims=refsClaims(index,t.refs,chosen,filter);return claims.length?{id:t.id,title:t.title,period:t.period,claims:claims}:null;}).filter(Boolean);
if(!timeline.length)timeline=shown.map(c=>({id:c.entryId,title:c.heading,period:c.eraOrInterval||"Periodo no determinado",claims:[c]}));
return{id:ch.id,name:ch.name,aliases:ch.aliases||[],profilePath:ch.profilePath,overview:meta.overview||(official?official.summary:"Ficha provisional basada en evidencia disponible."),continuity:chosen,continuityLabel:LABELS[chosen]||chosen,availableContinuities:scopes,state:state(id,chosen),officialReference:official,claims:shown,allStateClaims:allState,relationships:related,moments:moments,timeline:timeline,missingContinuities:["CONT-MAIN-LN","CONT-AU"].filter(x=>!scopes.includes(x))};}
return{list:list,getProfile:profile,getExtendedInfo:extendedInfo,getRelationships:relationshipLinks,continuityLabels:LABELS,continuityOrder:ORDER,defaultContinuity:defaultState,spoilerVisible:visible};
});

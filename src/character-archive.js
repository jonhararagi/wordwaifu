(function(root,factory){"use strict";const api=factory();if(typeof module==="object"&&module.exports)module.exports=api;else root.WordWaifuCharacterArchive=api;})(typeof globalThis!=="undefined"?globalThis:this,function(){
"use strict";
const LABELS={"CONT-AR":"Astrea Record · Era Oscura","CONT-GAME":"Memoria Freese · versión original del juego","CONT-ANIME":"Adaptación anime · perfiles oficiales","CONT-MAIN-LN":"Novela principal","CONT-AU":"Historia alternativa (AU)","CONT-SECONDARY":"Wiki y compendios · datos no cotejados","CROSS-CONTINUITY":"Comparación entre continuidades"};
const ORDER=["CONT-AR","CONT-GAME","CONT-ANIME","CONT-MAIN-LN","CONT-AU","CONT-SECONDARY","CROSS-CONTINUITY"];
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
affiliation:"Astrea Familia · integrante histórica"
};

for (const [id, summary] of [
["CHAR-ALISE-LOVELACE","Barrido secundario de nivel, magias, skills y equipo completado. No reescribir personalidad en este pase."],
["CHAR-KAGUYA","Barrido secundario completado; el nombre de una skill aparece en conflicto entre páginas."],
["CHAR-LYRA","Barrido secundario de nivel, magias, skills y equipo completado; Wingus Smite carece de efecto descrito en las fuentes consultadas."],
["CHAR-MARIYU-LEAGE","Barrido secundario parcial; Rea Vindemia y maza reportadas. Nivel individual no resuelto."],
["CHAR-NEZE-RANKETT","Barrido secundario parcial; nivel/magia/skill tienen alcance o atribuciones en conflicto."],
["CHAR-NOIN-UNIC","Barrido secundario parcial; el nombre de la magia de velocidad no está reportado."],
["CHAR-ISKA-BRA","Barrido secundario parcial; nivel individual y nombre de la magia de dos puños no reportados."],
["CHAR-ASTA-KNOX","Barrido secundario parcial; nivel individual y nombre de la magia defensiva no reportados."],
["CHAR-RYANA-LIETZ","Barrido secundario parcial; Irivute se atribuye en una fuente comunitaria; nivel exacto no reportado."],
["CHAR-CELTY-SROWA","Barrido secundario parcial; las fuentes atribuyen fuego y rayo, sin resolver la discrepancia."]
]) {
  META[id].states["CONT-SECONDARY"] = {
    summary,
    period: "Pasada secundaria registrada el 2026-10-27; no equivale a cotejo primario.",
    affiliation: "Astrea Familia · información comunitaria no cotejada"
  };
}

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
{targetId:"CHAR-KAGUYA",label:"Gojouno Kaguya · roster histórico",type:"Co-pertenencia de roster histórico · fuente comunitaria",description:"La referencia comunitaria enumera a Ryu y Kaguya entre integrantes de la primera Astrea Familia; no demuestra una relación personal concreta entre ellas.",refs:["DMR-007-CLM-005"]},
{targetId:"CHAR-LYRA",label:"Lyra · roster histórico",type:"Co-pertenencia de roster histórico · fuente comunitaria",description:"La referencia comunitaria enumera a Ryu y Lyra como integrantes de la primera Astrea Familia; no demuestra una relación personal concreta entre ellas.",refs:["DMR-007-CLM-005"]}
);
REL["CHAR-ALISE-LOVELACE"]["CONT-AR"].push(
{targetId:"CHAR-KAGUYA",label:"Gojouno Kaguya · roster histórico",type:"Co-pertenencia de roster histórico · fuente comunitaria",description:"El roster secundario incluye a Alise y Kaguya entre las integrantes históricas de Astrea Familia; no prueba una relación personal fuera de la estructura de la Familia.",refs:["DMR-007-CLM-005"]},
{targetId:"CHAR-LYRA",label:"Lyra · roster histórico",type:"Co-pertenencia de roster histórico · fuente comunitaria",description:"El roster secundario incluye a Alise y Lyra entre integrantes de Astrea Familia; no prueba una relación personal más allá de ese contexto.",refs:["DMR-007-CLM-005"]}
);
REL["CHAR-ASTREA"]["CONT-AR"].push(
{targetId:"CHAR-KAGUYA",label:"Gojouno Kaguya · afiliación histórica",type:"Afiliación indirecta y roster secundario",description:"Astrea está asociada a la Familia; una referencia comunitaria incluye a Kaguya en su roster histórico. Esto no implica interacciones personales con la diosa.",refs:["DMR-001-CLM-004","DMR-007-CLM-005"]},
{targetId:"CHAR-LYRA",label:"Lyra · afiliación histórica",type:"Afiliación indirecta y roster secundario",description:"Astrea está asociada a la Familia; una referencia comunitaria incluye a Lyra en su roster histórico. Esto no implica interacciones personales con la diosa.",refs:["DMR-001-CLM-004","DMR-007-CLM-005"]}
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
"CHAR-DARK-ALFIA":{
"CONT-MAIN-LN":{
title:"Alfia · pista de la retrospectiva del volumen 20",
summary:"Pista secundaria de la novela principal. El resumen comunitario por capítulos aporta contexto para buscar la escena, pero no sustituye páginas narrativas cotejadas.",
sections:[
{title:"Capítulo 2 · Alfia y la juventud de Leon",text:"El resumen comunitario de DanMachi vol. 20 describe una retrospectiva en la que Alfia, la Emperatriz y otros héroes de la generación anterior golpeaban repetidamente a Leon. También atribuye a Alfia haberlo animado a alcanzar la fuerza necesaria para cortar una colina. Esto procede de la sinopsis comunitaria del capítulo 2, no de una lectura directa de la novela; se conserva como pista secundaria (DMR-045-CLM-019)." },
{title:"Límite de evidencia",text:"La sinopsis no da número de página y la muestra oficial consultada no expuso narración legible. La escena, el contexto completo y la formulación exacta siguen pendientes de cotejo primario. No trasladar esta pista a CONT-AR ni a CONT-GAME." }
],
references:[
{label:"DanMachi Wiki · DanMachi Light Novel Volume 20/Synopsis",url:"https://danmachi.fandom.com/wiki/DanMachi_Light_Novel_Volume_20/Synopsis",kind:"community"},
{label:"Kobo · DanMachi vol. 20 (vista previa anunciada; páginas no inspeccionadas)",url:"https://www.kobo.com/us/en/ebook/is-it-wrong-to-try-to-pick-up-girls-in-a-dungeon-vol-20-light-novel",kind:"licensed_preview"},
{label:"BOOK☆WALKER · DanMachi vol. 20 (muestra anunciada; lector no inspeccionado)",url:"https://bookwalker.jp/de2996c502-7cb0-42b4-821a-b63df271d442/?sample=1",kind:"licensed_preview"}
]
},
"CONT-AR":{
title:"Alfia · Astrea Record / Era Oscura",
summary:"Resumen de investigación de alcance secundario para CONT-AR. Las wikis comunitarias describen capacidades concretas, pero no sustituyen los pasajes de la novela: faltan localizadores narrativos primarios y varias mecánicas no se han cotejado escena por escena.",
sections:[
{title:"Genos Angelus · descripción reportada por la wiki",text:"La wiki comunitaria en español describe Genos Angelus como un hechizo de canto muy largo que manifiesta una campana gris plateada, con un alcance reportado superior a 100 metros. La misma fuente atribuye al uso contra Leviathan un agravamiento de la salud de Alfia. Son afirmaciones secundarias pendientes de cotejo con el texto publicado; no se presenta el alcance como una medición verificada ni se confirma aquí una secuencia exacta de combate."},
{title:"Gif Blessing, Limit Off y coste",text:"Los compendios comunitarios vinculan Gif Blessing con la enfermedad de Alfia y describen Limit Off como una condición que mantiene sus capacidades a cambio de deterioro físico, mental y de resistencia. También reportan Silentium Eden como defensa mágica con un coste elevado de Mind y restricciones sobre la propia magia de Alfia. El funcionamiento exacto, las condiciones de activación y el coste por escena siguen sin localizador primario comprobado."},
{title:"Diferencias reportadas por la wiki para la novelización",text:"La página comunitaria de diferencias de Astrea Record 3 reporta detalles añadidos o modificados respecto del juego: la Spell Key Lugio de Satanas Verion provocaría una segunda explosión; el pendiente mágico de Asfi reduciría ondas de choque y efectos anormales; Alfia imitaría la esgrima de Zald al lanzar por los aires a Gareth y a la Familia Astrea; y la página también resume el funcionamiento progresivo de Gif Blessing y la campana de Genos Angelus. Son pistas secundarias para localizar pasajes, no lectura directa ni números de página verificados. Mantener la mecánica, los costes y cada escena como pendientes de cotejo primario (DMR-045-SRC-051)."},{title:"Límites de investigación y continuidad",text:"Este resumen corresponde a la investigación secundaria sobre Astrea Record (CONT-AR), no a una transcripción del libro. Las pistas sobre Afterglow y el prólogo del volumen 20 pertenecen a la investigación de la novela principal (CONT-MAIN-LN) y siguen sin confirmar identidad ni uso individual; los hechos exclusivos de juegos y el escenario autoral alternativo (CONT-AU) no se importan como sucesos de Astrea Record."},
{title:"Pista secundaria sobre el cierre de Astrea Record 3",text:"La reseña comunitaria de BookLive atribuida a ブクログ (11-02-2023) parece describir que Bell y Hermes depositan flores ante tumbas de Erebus, Zald y Alfia. La pista se conserva como lo que reporta una reseña de lector (DMR-045-CLM-022), no como escena leída ni localizador primario. No confirma la formulación exacta, las relaciones entre los personajes ni detalles individuales de su destino."}
],
references:[
{label:"Wiki comunitaria en español · Alfia / Habilidades",url:"https://danmachi.fandom.com/es/wiki/Alfia/Habilidades",kind:"community"},
{label:"Wiki comunitaria en inglés · Alfia",url:"https://danmachi.fandom.com/wiki/Alfia",kind:"community"},
{label:"DanMachi Wiki · Astrea Record vol. 3/Differences (guía secundaria de escenas)",url:"https://danmachi.fandom.com/es/wiki/Astrea_Record_Novela_Ligera_Volumen_3/Diferencias",kind:"community"},{label:"BookLive · Astrea Record 3 (prueba anunciada; páginas no inspeccionadas)",url:"https://booklive.jp/product/index/title_id/1237250/vol_no/003",kind:"licensed_preview"},
{label:"BookLive · reseña comunitaria de Astrea Record 3 (pista secundaria)",url:"https://booklive.jp/review/list/title_id/1237250/vol_no/003",kind:"community"}
]
}
},
"CHAR-DARK-ZALD":{
"CONT-MAIN-LN":{
title:"Zald · pista de la técnica de espada en el volumen 20",
summary:"Pista secundaria de la novela principal; no es una transcripción ni un localizador primario.",
sections:[
{title:"Capítulo 3 · Zald, Leon y Udaeus",text:"La sinopsis comunitaria cuenta que Leon siguió a Zald a los pisos profundos del Dungeon y lo vio derrotar a Udaeus de un golpe. También resume que Leon quería aprender la técnica de espada de Zald y que este le permitió observarla. El resumen lo sitúa entre los espadachines más hábiles de aquella generación, pero estos detalles siguen siendo evidencia secundaria de CONT-MAIN-LN (DMR-045-CLM-020)." },
{title:"Qué no queda confirmado",text:"La fuente no es la página narrativa del libro y no proporciona folio reproducible. La interpretación exacta de la técnica y su relación con Afterglow requieren cotejar la edición licenciada. No elevar este registro a source_checked_excerpt_only ni inventar página." }
],
references:[
{label:"DanMachi Wiki · DanMachi Light Novel Volume 20/Synopsis",url:"https://danmachi.fandom.com/wiki/DanMachi_Light_Novel_Volume_20/Synopsis",kind:"community"},
{label:"Kobo · DanMachi vol. 20 (vista previa anunciada; páginas no inspeccionadas)",url:"https://www.kobo.com/us/en/ebook/is-it-wrong-to-try-to-pick-up-girls-in-a-dungeon-vol-20-light-novel",kind:"licensed_preview"},
{label:"BOOK☆WALKER · DanMachi vol. 20 (muestra anunciada; lector no inspeccionado)",url:"https://bookwalker.jp/de2996c502-7cb0-42b4-821a-b63df271d442/?sample=1",kind:"licensed_preview"}
]
},
"CONT-AR":{
title:"Zald · Astrea Record / Era Oscura",
summary:"Resumen de investigación secundaria sobre capacidades y limitaciones asociadas a Zald en CONT-AR. Las cifras y mecánicas que siguen proceden de compendios comunitarios; no reemplazan el texto narrativo, y no hay un localizador primario verificado para cada afirmación.",
sections:[
{title:"Deus Ambrosia · límite de poder reportado",text:"La wiki comunitaria describe Deus Ambrosia como una habilidad que puede aumentar las capacidades de Zald al consumir criaturas o materiales, con resultados dependientes de la cantidad y calidad ingeridas. La fuente presenta como ejemplo que un Zald reportado en nivel 7 no podía alcanzar sin más un poder equivalente al nivel 10. Ese ejemplo es una afirmación secundaria; no es una fórmula universal verificada del sistema de niveles."},
{title:"Veneno de Behemoth y coste",text:"La fuente comunitaria describe un deterioro persistente causado por el veneno de Behemoth. El aumento de capacidades no debe representarse como poder ilimitado ni como una mejora gratuita que borra ese coste. Los efectos exactos, su duración y las condiciones de cada escena continúan pendientes de cotejo primario."},
{title:"Deus Ambrosia y EXTRA: pistas de la novelización",text:"La página de diferencias comunitaria resume que Finn quedó sorprendido por los registros de Zeus y Hera Familias y destaca a Zald por Deus Ambrosia; también describe el final del combate contra Ottar, con la armadura destruida y el deterioro asociado al veneno de Behemoth. Para la historia EXTRA, la página afirma que aparecen Zald, Alfia y Erebus y añade detalles sobre cómo Zald habla del padre de Bell ante Alfia. Nada de esto es texto primario visible: no crea una arista familiar nueva, no identifica al padre de Bell y no sustituye el cotejo del pasaje (DMR-045-SRC-051)."},{title:"Otras capacidades y límites de continuidad",text:"Las wikis también enumeran Al Questa, Niggle Gourmet y Rea Ambrosia, pero esta ficha no asigna efectos, parámetros ni usos individuales sin una descripción suficientemente localizada. La pista de Afterglow del volumen 20 pertenece a CONT-MAIN-LN; el escenario de crianza autoral se mantiene separado como CONT-AU y no se fusiona con Astrea Record."},
{title:"Pista secundaria sobre el cierre de Astrea Record 3",text:"La reseña comunitaria de BookLive atribuida a ブクログ (11-02-2023) parece describir que Bell y Hermes depositan flores ante tumbas de Erebus, Zald y Alfia. La pista se conserva como lo que reporta una reseña de lector (DMR-045-CLM-022), no como escena leída ni localizador primario. No confirma la formulación exacta, las relaciones entre los personajes ni detalles individuales de su destino."}
],
references:[
{label:"Wiki comunitaria en español · Zald",url:"https://danmachi.fandom.com/es/wiki/Zald",kind:"community"},
{label:"Wiki comunitaria en español · Astrea Record, novela ligera vol. 3",url:"https://danmachi.fandom.com/es/wiki/Astrea_Record_Novela_Ligera_Volumen_3",kind:"community"},
{label:"DanMachi Wiki · Astrea Record vol. 3/Differences (guía secundaria de escenas)",url:"https://danmachi.fandom.com/es/wiki/Astrea_Record_Novela_Ligera_Volumen_3/Diferencias",kind:"community"},{label:"BookLive · Astrea Record 3 (prueba anunciada; páginas no inspeccionadas)",url:"https://booklive.jp/product/index/title_id/1237250/vol_no/003",kind:"licensed_preview"},
{label:"BookLive · reseña comunitaria de Astrea Record 3 (pista secundaria)",url:"https://booklive.jp/review/list/title_id/1237250/vol_no/003",kind:"community"}
]
}
},
"CHAR-METERIA":{
"CONT-MAIN-LN":{
title:"Meteria · pista secundaria para la novela principal",
summary:"Este apunte no confirma hechos de la novela principal: conserva los datos biográficos que reportan las wikis y muestra qué parte del parentesco sigue sin una identificación primaria inequívoca. La entrevista de LN News sobre Memoria Freese confirma una relación familiar formulada por el entrevistador, pero no pronuncia el nombre Meteria.",
sections:[
{title:"Parentesco reportado y límite de identificación",text:"Las wikis comunitarias en inglés y español presentan a Meteria como madre de Bell Cranel, hermana gemela de Alfia y antigua integrante de Hera Familia. Son datos secundarios pendientes de un localizador narrativo reproducible. La entrevista de LN News de 2020, en el contexto de Memoria Freese, confirma que la madre de Bell es la hermana menor de Alfia; no la nombra como Meteria y por sí sola no identifica esta ficha."},
{title:"Vacíos que deben permanecer abiertos",text:"El padre biológico de Bell sigue sin identificar. No se asignan diagnóstico médico, fechas absolutas, conversaciones, motivos ni detalles de la entrega de Bell sin un pasaje verificable. La convergencia entre dos wikis ayuda a investigar, pero no reemplaza el texto primario."},
{title:"Separación de la continuidad alternativa",text:"El recuerdo de Meteria y las anécdotas sobre comida pertenecen al texto alternativo autoral CONT-AU. No deben convertirse en personalidad o sucesos de CONT-MAIN-LN ni de CONT-AR. Abrí la ficha de CONT-AU para consultar esa versión por separado."}
],
references:[
{label:"DanMachi Wiki · Meteria (inglés)",url:"https://danmachi.fandom.com/wiki/Meteria",kind:"community"},
{label:"DanMachi Wiki · Meteria (español)",url:"https://danmachi.fandom.com/es/wiki/Meteria",kind:"community"},
{label:"LN News Online · entrevista sobre el nacimiento de Bell (2020)",url:"https://ln-news.com/articles/109766",kind:"interview"}
]
},
"CONT-GAME":{
title:"Origen de Bell en Memoria Freese · identidad de Meteria pendiente",
summary:"Contexto familiar confirmado en entrevista autoral sobre la historia original de DanMemo. La entrevista no nombra a la madre de Bell como Meteria; esta nota conserva esa limitación dentro de CONT-GAME.",
sections:[
{title:"Qué confirma la entrevista",text:"En la entrevista de LN News del 15 de octubre de 2020, el entrevistador resume que el padre de Bell era un supporter de Zeus Familia y que su madre era la hermana menor de Alfia. Omori confirma el resumen y explica que la historia del nacimiento de Bell se reveló primero en DanMemo. Esto respalda lo dicho en el intercambio sobre el contexto del juego, no equivale a un pasaje narrativo de la novela."},
{title:"La identidad sigue sin fijarse por esta fuente",text:"El intercambio no pronuncia el nombre Meteria, no identifica al padre y no demuestra que supporter signifique miembro formal de Zeus Familia. Las wikis inglesas y españolas asocian a Meteria con ese parentesco, pero la convergencia secundaria no sustituye un localizador narrativo primario. No se crea alias ni relación nueva a partir de la entrevista."},
{title:"Barrera de continuidad",text:"La evidencia de origen aquí expuesta corresponde a CONT-GAME. No se convierte automáticamente en biografía confirmada de CONT-MAIN-LN o CONT-AR. Para identificar a Meteria dentro de la novela principal sigue siendo necesario un pasaje verificable."}
],
references:[
{label:"LN News Online · entrevista autoral sobre el origen de Bell",url:"https://ln-news.com/articles/109766",kind:"interview"}
]
},
"CONT-AU":{
title:"Meteria · recuerdo del escenario alternativo autoral",
summary:"Esta nota resume solo el escenario hipotético publicado por Fujino Omori. No describe un hecho sucedido en la cronología principal.",
sections:[
{title:"Rasgos descritos en el recuerdo alternativo",text:"En el escenario alternativo donde Alfia y Zald crían a Bell, Meteria aparece en el recuerdo de Alfia como amable, sonriente, frágil y apreciada por quienes la rodeaban. El relato incluye una anécdota intensa relacionada con un dulce que Meteria esperaba comer. Estos rasgos y la anécdota pertenecen a CONT-AU."},
{title:"Límite de continuidad",text:"No trasladar este recuerdo como biografía confirmada de la novela principal ni usarlo para probar convivencia histórica entre Meteria, Alfia, Zald y Bell. La publicación es una posibilidad alternativa, no una sustitución del relato publicado."}
],
references:[
{label:"Fujino Omori · それは遥か彼方の静穏の夢 (escenario alternativo)",url:"https://note.com/fujinoomori/n/n629829ac3fe4",kind:"author"}
]
}
},
"CHAR-DARK-EREBUS":{
"CONT-GAME":{
title:"Erebus · Memoria Freese original (CONT-GAME)",
summary:"Resumen de pistas secundarias sobre la versión original del juego. No se transfiere automáticamente a la novelización de Astrea Record.",
sections:[
{title:"Ideología atribuida por la wiki",text:"La ficha comunitaria en inglés atribuye a Erebus la idea de que el mal verdadero debe ser odiado por todos y que la justicia absoluta es un ideal que debe alcanzarse. Es una paráfrasis secundaria de la versión original de Memoria Freese, no una cita verificada de diálogo ni una explicación definitiva de su psicología."},
{title:"Identidad, sobrenombre y alias pendiente",text:"La página de LN News presenta a Erebus con el sobrenombre editorial Absolute Evil en su cobertura de la historia del juego. Una wiki también menciona Eren, pero ese nombre no se incorpora como alias canónico ni se afirma que aparezca en la novela revisada. No se le asignan poderes, nivel de aventurero ni una cadena de mando completa dentro de Evilus sin evidencia individual."},
{title:"Barrera de continuidad",text:"Este apunte solo describe lo que las fuentes secundarias atribuyen a la versión original del juego (CONT-GAME). Las acciones de la novelización CONT-AR necesitan un cotejo propio; pertenecer al mismo proyecto narrativo no prueba que cada detalle sea idéntico."}
],
references:[
{label:"DanMachi Wiki · Erebus (inglés)",url:"https://danmachi.fandom.com/wiki/Erebus",kind:"community"},
{label:"LN News Online · pie editorial de Erebus en el contexto del juego",url:"https://ln-news.com/articles/109766",kind:"editorial_caption"}
]
}
,"CONT-AR":{
title:"Erebus · ruta de consulta de la novelización (Astrea Record)",
summary:"Esta sección conserva un enlace bibliográfico para consultar la edición novelada. No establece que el contenido de la versión original de Memoria Freese aparezca sin cambios en los libros.",
sections:[
{title:"BookLive · Astrea Record 3",text:"La ficha pública del distribuidor licenciado presenta una opción de prueba en navegador y otra en app. En esta revisión solo se inspeccionaron la ficha y sus metadatos; no se abrieron páginas narrativas del visor. El enlace sirve para una consulta futura, no confirma aparición, diálogo, afiliación, poder ni acción individual de Erebus en la novelización."},
{title:"EXTRA de Astrea Record 3: pista de presencia, no diálogo cotejado",text:"La página comunitaria de diferencias menciona una escena EXTRA con Zald, Alfia y Erebus y dice que la novelización añade pequeños detalles de sus relaciones. No ofrece una transcripción localizada ni permite reconstruir el diálogo o los actos individuales de Erebus. Sirve para orientar la consulta de la sección EXTRA de la edición licenciada; la ideología resumida por la wiki del juego permanece en CONT-GAME y no se importa a CONT-AR (DMR-045-SRC-051)."},{title:"Separación de continuidad",text:"La información sobre la ideología y la versión original del personaje permanece en CONT-GAME. No se importa a CONT-AR hasta que un pasaje de la novelización se pueda leer y localizar de manera reproducible."},
{title:"Pista comunitaria sobre el cierre de Astrea Record 3",text:"El fragmento visible/indexado de una reseña comunitaria de BookLive, atribuida a ブクログ y fechada el 11-02-2023, parece describir que Bell y Hermes depositan flores ante tumbas asociadas a Erebus, Zald y Alfia (DMR-045-CLM-022). Es una pista secundaria de CONT-AR, sin capítulo ni página narrativa. No permite deducir una relación privada ni trasladar a la novelización la ideología o los actos atribuidos a Erebus en CONT-GAME."}
],
references:[
{label:"DanMachi Wiki · Astrea Record vol. 3/Differences (guía secundaria de escenas)",url:"https://danmachi.fandom.com/es/wiki/Astrea_Record_Novela_Ligera_Volumen_3/Diferencias",kind:"community"},{label:"BookLive · Astrea Record 3 (prueba anunciada; páginas no inspeccionadas)",url:"https://booklive.jp/product/index/title_id/1237250/vol_no/003",kind:"licensed_preview"},
{label:"SB Creative / GA Bunko · página de Astrea Record 3",url:"https://ga.sbcr.jp/product/9784815610197",kind:"publisher_metadata"},
{label:"BookLive · reseña comunitaria de Astrea Record 3 (pista secundaria)",url:"https://booklive.jp/review/list/title_id/1237250/vol_no/003",kind:"community"}
]
}
},
"CHAR-DARK-RUDRA":{
"CONT-MAIN-LN":{
title:"Rudra · responsabilidad colectiva y atribución personal pendiente",
summary:"Nota de investigación para la novela principal. La secuencia del volumen 14 se conoce aquí como pista secundaria/localizador por comprobar, no como escena que se haya podido leer directamente durante esta revisión.",
sections:[
{title:"Separar a Rudra Familia de su deidad",text:"La ficha comunitaria de Rudra Familia atribuye a la agrupación una trampa contra Astrea Familia vinculada a daños en el Dungeon y a la aparición del Juggernaut. La investigación existente señala como pista el volumen 14, capítulo 13, pero el lector autorizado consultado no expuso la página narrativa. Por tanto, la atribución colectiva sigue necesitando cotejo directo: no demuestra que Rudra, como dios patrono, diseñara, ordenara, aprobara o conociera el plan."},
{title:"Alcance de la retrospectiva y el epílogo",text:"El registro de investigación distingue el relato de la trampa de la versión pública difundida tras el incidente. Hasta inspeccionar el texto, los capítulos y el epílogo sirven como localizadores para buscar, no como páginas cotejadas ni prueba de las acciones individuales de Rudra. Tampoco se debe trasladar esta etapa aproximada T-5 al intervalo T-7 de Astrea Record."},
{title:"Ruta adicional de consulta licenciada",text:"La ficha pública indexada de Google Play Books anuncia una muestra gratuita del volumen 14; el registro bibliográfico de Google Books de la edición inglesa indica Limited preview. En esta comprobación se obtuvieron metadatos y sinopsis, no páginas de la muestra. La ruta de BOOK☆WALKER ya registrada devolvió un error de descarga al abrir su lector público. La ficha de BookLive también anuncia lectura de prueba en navegador/app para el volumen 14, pero aquí solo se consultaron sus metadatos, no páginas de la muestra. Estos intentos no permiten confirmar la trampa, el capítulo 13, el epílogo ni ninguna acción personal de Rudra. Usa los enlaces para consultar el texto por el acceso normal si el lector lo presenta; solo entonces registra un localizador visible."},
{title:"Qué falta confirmar",text:"Quedan pendientes una página o un pasaje narrativo reproducible, qué acciones se atribuyen explícitamente a cada miembro y si el texto da alguna evidencia del conocimiento personal de Rudra. No se crea una relación personal nueva ni se infiere una motivación a partir del cargo de deidad."},
{title:"Acción personal reportada después de la venganza",text:"La sinopsis comunitaria del volumen 14 afirma que, tras destruir la sede y eliminar a los miembros de Rudra Familia, Ryuu vio aparecer al dios Rudra. El resumen le atribuye una risa y el comentario de que le habría gustado invitar a la Ryuu de ese momento a su Familia; después, el Gremio lo captura y lo envía al Cielo (DMR-045-CLM-021). Se conserva como evidencia secundaria de CONT-MAIN-LN. No demuestra que Rudra conociera, ordenara ni autorizara la trampa anterior."}
],
references:[
{label:"DanMachi Wiki · Rudra Familia (inglés)",url:"https://danmachi.fandom.com/wiki/Rudra_Familia",kind:"community"},
{label:"DanMachi Wiki · Rudra (español)",url:"https://danmachi.fandom.com/es/wiki/Rudra",kind:"community"},
{label:"DanMachi Wiki · DanMachi Light Novel Volume 14/Synopsis",url:"https://danmachi.fandom.com/wiki/DanMachi_Light_Novel_Volume_14/Synopsis",kind:"community"},
{label:"Google Play Books · DanMachi vol. 14 (muestra anunciada; texto no cotejado)",url:"https://play.google.com/store/books/details/Fujino_Omori_Is_It_Wrong_to_Try_to_Pick_Up_Girls_i?id=PLS9DwAAQBAJ",kind:"licensed_preview"},
{label:"BOOK☆WALKER · DanMachi vol. 14 (muestra japonesa; lector no cargó)",url:"https://bookwalker.jp/deb74ef953-7194-47cb-8abb-7453a4b2e353/?sample=1",kind:"licensed_preview"},
{label:"BookLive · DanMachi vol. 14 (prueba anunciada; páginas no inspeccionadas)",url:"https://booklive.jp/product/index/title_id/201522/vol_no/014",kind:"licensed_preview"},
{label:"Yen Press · DanMachi, volumen 14 (ficha editorial; no página narrativa)",url:"https://yenpress.com/titles/9781975385026-is-it-wrong-to-try-to-pick-up-girls-in-a-dungeon-vol-14-light-novel",kind:"publisher_metadata"}
]
}
},
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

// DMR-free character update pass: ability/level facts only, in a dedicated secondary-source tab.
EXTENDED["CHAR-ALISE-LOVELACE"]["CONT-SECONDARY"]={
title:"Alise Lovell · nivel, magia y equipo reportados",
summary:"Una pasada de fuentes comunitarias encontró datos concretos de combate. Se registran aquí sin reemplazar los perfiles existentes ni reescribir personalidad.",
sections:[
{title:"Nivel y magia",text:"El perfil comunitario individual informa nivel 4 y la magia de fuego Agaris Alvesynth, descrita como un encantamiento que cubre piernas, manos y espada y puede liberar una corriente de llamas o explosiones."},
{title:"Skills y habilidades de desarrollo",text:"La página enumera Lubrude Bequia y Batleate Asyrath. También lista Hunter, Abnormal Resistance y Fire Flash como habilidades de desarrollo. Son descripciones secundarias; esta ficha no añade cifras de coste ni condiciones que las fuentes consultadas no proporcionan."},
{title:"Equipo reportado",text:"El perfil enumera la espada Crimson Order y el equipo Crimson Flower Heat Dress. No se vuelve a redactar su personalidad en esta actualización."},
{title:"Campos cerrados",text:"La pasada no obtuvo un localizador de página narrativa ni un coste numérico primario. No reabrir estos campos a menos que aparezca una nueva fuente legible."}
],
references:[
{label:"DanMachi Wiki · Alise Lovell",url:"https://danmachi.fandom.com/wiki/Alise_Lovell",kind:"community"},
{label:"DanMachi Wiki · Skills",url:"https://danmachi.fandom.com/wiki/Skills",kind:"community"}
]
};
EXTENDED["CHAR-KAGUYA"]["CONT-SECONDARY"]={
title:"Gojouno Kaguya · nivel, técnicas y nomenclatura de skills",
summary:"Una pasada de fuentes comunitarias recuperó nivel, magias y equipo, pero detectó una discrepancia en el nombre de una skill. No se cambia la personalidad existente.",
sections:[
{title:"Nivel, magia y armas",text:"El perfil individual informa nivel 4 y enumera las magias Gokou y Shikai; lista la katana Higanbana y los kodachi Futaba. El perfil describe Gokou como cinco cortes mágicos que cercan al objetivo desde varias direcciones."},
{title:"Skills y habilidades de desarrollo",text:"Kaina Blood aparece en el perfil individual. Para la otra skill, el perfil inglés usa Tekiheni en una lista mientras que el listado español de habilidades usa Sakibeni. Night Fight y Abnormal Resistance aparecen como habilidades de desarrollo. La divergencia Tekiheni/Sakibeni queda abierta: no crear un alias ni escoger uno sin fuente primaria."},
{title:"Campos no cotejados",text:"No se obtuvo aquí un localizador primario para cada técnica ni un coste numérico. Reabrir la nomenclatura solo si aparece texto licenciado que la resuelva."}
],
references:[
{label:"DanMachi Wiki · Gojouno Kaguya",url:"https://danmachi.fandom.com/wiki/Gojouno_Kaguya",kind:"community"},
{label:"DanMachi Wiki en español · Habilidades",url:"https://danmachi.fandom.com/es/wiki/Habilidades",kind:"community"},
{label:"DanMachi Wiki · Skills",url:"https://danmachi.fandom.com/wiki/Skills",kind:"community"}
]
};
EXTENDED["CHAR-LYRA"]["CONT-SECONDARY"]={
title:"Lyra · nivel, magias, skills y equipo reportados",
summary:"Una pasada comunitaria recuperó el nivel y una lista concreta de capacidades; el efecto de Wingus Smite no aparece explicado en el fragmento consultado.",
sections:[
{title:"Nivel y magias",text:"El perfil individual informa nivel 3. Enumera Mūs Mine, descrita como una magia que crea un campo de minas, y Wingus Smite, cuyo efecto no está explicado en la fuente revisada."},
{title:"Skills y equipo",text:"La página enumera Ratts Phil, Agile Salt y la habilidad de desarrollo Abnormal Resistance. También registra las armas boomerang Carnivore, bombas creadas por Lyra y el objeto mágico Aegis, capaz de copiar la magia con la que entra en contacto y destruido durante la batalla contra Alfia."},
{title:"Campos cerrados",text:"No inventar un efecto para Wingus Smite ni un coste no publicado. La personalidad no se reescribe en esta pasada; reabrir solo ante evidencia nueva."}
],
references:[
{label:"DanMachi Wiki · Lyra",url:"https://danmachi.fandom.com/wiki/Lyra",kind:"community"},
{label:"DanMachi Wiki · Skills",url:"https://danmachi.fandom.com/wiki/Skills",kind:"community"}
]
};
EXTENDED["CHAR-MARIYU-LEAGE"]["CONT-SECONDARY"]={
title:"Maryuu Reage · magia curativa y nivel no resuelto",
summary:"Se conservan las variantes de romanización ya existentes. El pase encontró una magia y equipo, pero el nivel no está informado de forma consistente.",
sections:[
{title:"Magia y equipo",text:"El artículo agregador informa Rea Vindemia como magia curativa de área capaz de curar heridas y restaurar resistencia. También señala que Maryuu portaba una maza y podía luchar en primera línea."},
{title:"Nivel: no informado con precisión",text:"La tabla de Astraea Familia marca el nivel como Unknown, mientras que Minor Characters usa el rango genérico 3–4. No asignar nivel exacto; las dos etiquetas se conservan como discrepancia secundaria."},
{title:"Campos no reportados",text:"Las referencias consultadas no dan una lista de skills con nombre, costes o estadísticas individuales. No repetir la misma búsqueda hasta que aparezca una fuente nueva."}
],
references:[
{label:"DanMachi Wiki · Minor Characters",url:"https://danmachi.fandom.com/wiki/Minor_Characters",kind:"community"},
{label:"DanMachi Wiki · Astraea Familia",url:"https://danmachi.fandom.com/wiki/Astraea_Familia",kind:"community"},
{label:"DanMachi Wiki · Ryuu Lion",url:"https://danmachi.fandom.com/wiki/Ryuu_Lion",kind:"community"}
]
};
EXTENDED["CHAR-NEZE-RANKETT"]["CONT-SECONDARY"]={
title:"Neze Rankett · magia sin nombre y atribuciones en conflicto",
summary:"La pasada secundaria encontró una magia descrita por su efecto, pero no un nombre reproducible; el nivel de distintas fichas no tiene la misma precisión.",
sections:[
{title:"Nivel y magia reportada",text:"La tabla de Astraea Familia informa nivel 4; Minor Characters usa el rango general 3–4. Ryuu Lion menciona una magia de garras de viento, sin nombre ni coste. No convertir esa descripción en un nombre de hechizo."},
{title:"Skill en conflicto",text:"La lista inglesa de Skills recuperada presenta Úlfheðinn con Bete Loga y Cole Kuster; el fragmento de la lista española relaciona también a Neze. No se atribuye esa skill como hecho seguro hasta disponer de un localizador primario."},
{title:"Campos no reportados",text:"No se encontró nombre para la magia de garras ni una lista de skills individual corroborada. Mantener el campo como no reportado/en conflicto y cerrar la búsqueda repetitiva."}
],
references:[
{label:"DanMachi Wiki · Astraea Familia",url:"https://danmachi.fandom.com/wiki/Astraea_Familia",kind:"community"},
{label:"DanMachi Wiki · Minor Characters",url:"https://danmachi.fandom.com/wiki/Minor_Characters",kind:"community"},
{label:"DanMachi Wiki · Ryuu Lion",url:"https://danmachi.fandom.com/wiki/Ryuu_Lion",kind:"community"},
{label:"DanMachi Wiki · Skills",url:"https://danmachi.fandom.com/wiki/Skills",kind:"community"},
{label:"DanMachi Wiki en español · Habilidades",url:"https://danmachi.fandom.com/es/wiki/Habilidades",kind:"community"}
]
};
EXTENDED["CHAR-NOIN-UNIC"]["CONT-SECONDARY"]={
title:"Noin Unic · magia de velocidad sin nombre",
summary:"La pasada secundaria encontró un efecto descrito, pero el nombre del hechizo no figura en las referencias consultadas.",
sections:[
{title:"Nivel y magia",text:"La tabla de Astraea Familia indica nivel 4; Minor Characters ofrece el rango amplio 3–4. Ryuu Lion menciona una magia de aumento de velocidad de Noin, sin nombre ni coste."},
{title:"Qué no se debe rellenar",text:"Las páginas consultadas no proporcionan nombre de la magia, skills con nombre ni costes individuales. Mantener esos campos como «no reportado en las fuentes consultadas»; no volver a buscar en las mismas páginas."}
],
references:[
{label:"DanMachi Wiki · Astraea Familia",url:"https://danmachi.fandom.com/wiki/Astraea_Familia",kind:"community"},
{label:"DanMachi Wiki · Minor Characters",url:"https://danmachi.fandom.com/wiki/Minor_Characters",kind:"community"},
{label:"DanMachi Wiki · Ryuu Lion",url:"https://danmachi.fandom.com/wiki/Ryuu_Lion",kind:"community"}
]
};
EXTENDED["CHAR-ISKA-BRA"]["CONT-SECONDARY"]={
title:"Iska Bra · magia de dos puños sin nombre",
summary:"La pasada encontró un efecto de magia atribuido por la wiki, pero no un nombre de hechizo ni un nivel individual exacto.",
sections:[
{title:"Nivel y magia",text:"La tabla de Astraea Familia marca el nivel como Unknown; Minor Characters usa el rango genérico 3–4. Ryuu Lion menciona una magia que lanza un ataque de dos puños, sin nombre ni coste."},
{title:"Campos no reportados",text:"No se encontró nombre de magia ni skill individual en las referencias consultadas. Mantener el registro como no informado; no tratar el rango 3–4 como nivel exacto."}
],
references:[
{label:"DanMachi Wiki · Astraea Familia",url:"https://danmachi.fandom.com/wiki/Astraea_Familia",kind:"community"},
{label:"DanMachi Wiki · Minor Characters",url:"https://danmachi.fandom.com/wiki/Minor_Characters",kind:"community"},
{label:"DanMachi Wiki · Ryuu Lion",url:"https://danmachi.fandom.com/wiki/Ryuu_Lion",kind:"community"}
]
};
EXTENDED["CHAR-ASTA-KNOX"]["CONT-SECONDARY"]={
title:"Asta Knox · magia defensiva sin nombre",
summary:"La pasada secundaria halló el equipo y el efecto de una magia, no su nombre ni nivel individual exacto.",
sections:[
{title:"Equipo y magia",text:"Minor Characters señala que Asta portaba un escudo. Ryuu Lion menciona una magia que concede una defensa impenetrable, sin nombre ni coste."},
{title:"Nivel: no informado con precisión",text:"La tabla de Astraea Familia marca el nivel como Unknown, mientras que Minor Characters ofrece el rango 3–4. No asignar un nivel individual a partir de ese rango."},
{title:"Campos cerrados",text:"Las referencias consultadas no nombran skills o magia de Asta. Mantener la descripción funcional como pista secundaria y no repetir búsqueda hasta que aparezca una fuente nueva."}
],
references:[
{label:"DanMachi Wiki · Astraea Familia",url:"https://danmachi.fandom.com/wiki/Astraea_Familia",kind:"community"},
{label:"DanMachi Wiki · Minor Characters",url:"https://danmachi.fandom.com/wiki/Minor_Characters",kind:"community"},
{label:"DanMachi Wiki · Ryuu Lion",url:"https://danmachi.fandom.com/wiki/Ryuu_Lion",kind:"community"}
]
};
EXTENDED["CHAR-RYANA-LIETZ"]["CONT-SECONDARY"]={
title:"Ryana Lietz · Irivute y nivel no exacto",
summary:"Una referencia comunitaria asigna un nombre a su magia de fuego y describe su efecto; la página agregadora solo la menciona como magia de fuego sin nombre.",
sections:[
{title:"Magia reportada",text:"Ryuu Lion enumera Irivute como magia de fuego de ataque/debilitación: deja marcas de quemadura que reducen el poder mágico y los efectos de magia. Minor Characters describe magia de fuego capaz de matar a una aventurera de segunda clase, pero no le da un nombre; no se crean dos magias distintas por esa diferencia de resumen."},
{title:"Nivel: no informado con precisión",text:"La tabla de Astraea Familia marca el nivel como Unknown; Minor Characters usa el rango amplio 3–4. No fijar un número exacto."},
{title:"Campos no reportados",text:"No hay una lista individual de skills ni costes numéricos en las páginas consultadas. Cerrar la búsqueda hasta nueva evidencia."}
],
references:[
{label:"DanMachi Wiki · Astraea Familia",url:"https://danmachi.fandom.com/wiki/Astraea_Familia",kind:"community"},
{label:"DanMachi Wiki · Minor Characters",url:"https://danmachi.fandom.com/wiki/Minor_Characters",kind:"community"},
{label:"DanMachi Wiki · Ryuu Lion",url:"https://danmachi.fandom.com/wiki/Ryuu_Lion",kind:"community"}
]
};
EXTENDED["CHAR-CELTY-SROWA"]["CONT-SECONDARY"]={
title:"Celty Srowa · elemento de magia en conflicto",
summary:"Las fuentes secundarias reportan magia para Celty, pero discrepan sobre el elemento; no se asumirá que ambas atribuciones son dos magias distintas.",
sections:[
{title:"Atribuciones encontradas",text:"La página individual de Celty describe magia de fuego capaz de matar a una aventurera de segunda clase. La página de Ryuu Lion atribuye a Celty una magia de rayo. Las referencias no aclaran si se trata de dos magias, un error de una entrada o una diferencia de versión."},
{title:"Nivel y datos no reportados",text:"La tabla de Astraea Familia marca el nivel como Unknown y Minor Characters lo resume como 3–4. Las páginas consultadas no dan el nombre de las magias ni costes numéricos."},
{title:"Cierre del pase",text:"Registrar «fuego vs rayo: conflicto secundario»; no escoger una opción ni declarar que ambas son ciertas sin un pasaje primario. No volver a buscar en las mismas páginas hasta una actualización de fuente."}
],
references:[
{label:"DanMachi Wiki · Celty Srowa",url:"https://danmachi.fandom.com/wiki/Celty_Srowa",kind:"community"},
{label:"DanMachi Wiki · Astraea Familia",url:"https://danmachi.fandom.com/wiki/Astraea_Familia",kind:"community"},
{label:"DanMachi Wiki · Minor Characters",url:"https://danmachi.fandom.com/wiki/Minor_Characters",kind:"community"},
{label:"DanMachi Wiki · Ryuu Lion",url:"https://danmachi.fandom.com/wiki/Ryuu_Lion",kind:"community"}
]
};

Object.assign(EXTENDED, {
"CHAR-ALLEN-FROMEL":{"CONT-SECONDARY":{
title:"Allen Fromel · aceleración y límites reportados",
summary:"Pasada comunitaria del 2026-10-27. Se registra la magia nombrada y su condición de uso sin reescribir la personalidad ni elevar el detalle a canon cotejado.",
sections:[
{title:"Magia y condición reportadas",text:"La wiki reporta un snapshot de nivel 6 y la magia Gralineze Fromel: su velocidad aumenta mientras corre y el poder destructivo crece con la aceleración. La misma descripción advierte que puede perder el control de la trayectoria y embestir sin distinguir objetivos. Se menciona una lanza como arma."},
{title:"Campos no reportados en esta pasada",text:"No se recuperó una lista individual cotejable de skills con nombre ni costes numéricos. No rellenar esos huecos por analogía, ni interpretar que la fuente no los enumere como prueba de que no existan en el canon."},
{title:"Cierre",text:"Pasada secundaria terminada para la magia y el equipo descritos. Reabrir solo ante fuente nueva o pasaje primario legible."}
],
references:[{label:"DanMachi Wiki · Allen Fromel",url:"https://danmachi.fandom.com/wiki/Allen_Fromel",kind:"community"}]
}},
"CHAR-HEDIN-SELLAND":{"CONT-SECONDARY":{
title:"Hedin Selland · magia, skills y equipo reportados",
summary:"Pasada comunitaria del 2026-10-27; niveles, habilidades y limitaciones permanecen en una capa secundaria separada.",
sections:[
{title:"Snapshot y magia",text:"La wiki reporta nivel 6. Enumera Caelus Hildr (flechas de rayo de área amplia; el resumen español reporta más de 500 metros), Varian Hildr (rayo de gran potencia con fuerte consumo de mente) y Laurus Hildr (encantamiento de rayo aplicado a otra persona)."},
{title:"Limitaciones y skills",text:"El resumen consultado dice que Laurus Hildr no puede aplicarse a sí mismo, requiere un objetivo reconocido por Hedin y consume una cantidad extrema de mente. La lista de skills incluye Hildr Blood, Fairy Hildr, Diu Hjaðningavíg y Solvato Eo. Las habilidades de desarrollo enumeradas son Mage, Abnormal Resistance, Magic Resistance, Spirit Healing y Destructive Lightning."},
{title:"Arma y campos no cerrados",text:"Dizaria se describe como arma de doble función, bastón mágico y arma de filo; la fuente dice que fue partida durante el combate contra Ottar y deja incierto si el arma que Hedin usa después es una nueva Dizaria. No hay un coste numérico universal ni duración fija verificados en esta pasada."},
{title:"Cierre",text:"Usar nombres y límites como evidencia secundaria. No reformular la personalidad ni repetir las mismas páginas para buscar costes no indicados."}
],
references:[
{label:"DanMachi Wiki · Hedin Selland",url:"https://danmachi.fandom.com/wiki/Hedin_Selland",kind:"community"},
{label:"DanMachi Wiki · Hedin Selland/Habilidades",url:"https://danmachi.fandom.com/es/wiki/Hedin_Selland/Habilidades",kind:"community"}
]
}},
"CHAR-HOGNI-RAGNAR":{"CONT-SECONDARY":{
title:"Hogni Ragnar · magia de combate y arma maldita",
summary:"Pasada comunitaria del 2026-10-27 centrada en habilidades y restricciones reportadas; no se actualiza su perfil psicológico.",
sections:[
{title:"Snapshot y listas reportadas",text:"La wiki reporta nivel 6. Enumera Dainsleif, Burn Dain y Rasu Dain como magia; Fairy Nocturne, Vow Hjaðningavíg y Dark In como skills; y Hunter, Mage, Abnormal Resistance, Swordsman y Flash Cut como habilidades de desarrollo."},
{title:"Condiciones y límites",text:"La descripción de Dainsleif dice que altera su modo de combate y elimina inhibiciones, sin aumentar directamente sus estadísticas base. Burn Dain se describe como una explosión de fuego de corto alcance que puede servir como cortina de humo. La fuente indica que Rasu Dain existe por nombre, pero el efecto no quedó explicado en el contenido recuperado."},
{title:"Equipo reportado",text:"Victim Abyss se describe como arma maldita que extiende de forma invisible su hoja hasta un máximo reportado de 50 metros, consumiendo estamina y ralentizando la curación mágica. La wiki caracteriza el alcance de la magia de Hogni como reducido, lo que favorece su combate cercano. Estos detalles aún no tienen cotejo primario en esta tanda."},
{title:"Cierre",text:"No repetir la búsqueda de Rasu Dain en la misma fuente si nada ha cambiado. No convertir Dainsleif en un rasgo permanente de personalidad."}
],
references:[{label:"DanMachi Wiki · Hogni Ragnar",url:"https://danmachi.fandom.com/wiki/Hogni_Ragnar",kind:"community"}]
}},
"CHAR-GULLIVER-BROTHERS":{"CONT-SECONDARY":{
title:"Hermanos Gulliver · coordinación y especialidades conjuntas",
summary:"Pasada comunitaria del 2026-10-27. La coordinación se atribuye al grupo y no se convierte en una estadística individual de cada hermano.",
sections:[
{title:"Nivel y coordinación",text:"La wiki reporta un snapshot conjunto de nivel 5 y un rendimiento cercano al nivel 6 cuando luchan sincronizados. Su capacidad disminuye notablemente cuando se separan; la fuente destaca coordinación visual y comunicación sin necesidad de hablar."},
{title:"Especialidades reportadas",text:"Alfrigg calcula y toma decisiones a partir del análisis conjunto; Dvalinn detecta magia; Berling busca enemigos y posibles emboscadas; Grer observa hábitos, fortalezas y debilidades del adversario."},
{title:"Habilidades y límites no informados",text:"La página recuperada no ofrece una lista individual de magias o skills con nombre para los cuatro. Resistencia Anormal se atribuye específicamente a Dvalinn; no se supone que el mismo detalle esté confirmado para cada hermano. Las armas reportadas son lanza (Alfrigg), martillo (Dvalinn), hacha (Berling) y espadón (Grer)."},
{title:"Cierre",text:"Usar el perfil conjunto para coordinación y la especialidad explícita de cada hermano. No inferir niveles individuales distintos, magia nominal ni personalidad adicional."}
],
references:[{label:"Wiki DanMachi · Hermanos Gulliver",url:"https://danmachi.fandom.com/es/wiki/Hermanos_Gulliver",kind:"community"},{label:"DanMachi Wiki · Gulliver Brothers",url:"https://danmachi.fandom.com/wiki/Gulliver_Brothers",kind:"community"}]
}},
"CHAR-ALFRIGG-GULLIVER":{"CONT-SECONDARY":{
title:"Alfrigg Gulliver · lanza y cálculo táctico",
summary:"Dato individual recuperado de la página comunitaria del grupo; no supone ficha psicológica ni nivel independiente.",
sections:[{title:"Dato reportado",text:"Alfrigg usa una lanza y se distingue por calcular y tomar decisiones rápidas a partir de los análisis de sus hermanos."},{title:"No informado",text:"La página no entrega una magia o skill individual con nombre ni costes. El nivel disponible es un snapshot del grupo, no una ficha numérica independiente."}],
references:[{label:"Wiki DanMachi · Hermanos Gulliver",url:"https://danmachi.fandom.com/es/wiki/Hermanos_Gulliver",kind:"community"}]
}},
"CHAR-DVALINN-GULLIVER":{"CONT-SECONDARY":{
title:"Dvalinn Gulliver · martillo, detección mágica y resistencia",
summary:"Dato individual recuperado de la página comunitaria del grupo; la atribución de Resistencia Anormal queda limitada a Dvalinn.",
sections:[{title:"Dato reportado",text:"Dvalinn usa un martillo y se distingue por detectar magia. La fuente le atribuye Resistencia Anormal y resistencia al veneno, pero no se copia aquí un rango numérico no necesario para la ficha."},{title:"No informado",text:"No se recuperó un nombre individual de magia o skill ni un coste. No transferir la atribución de Resistencia Anormal a Alfrigg, Berling o Grer."}],
references:[{label:"Wiki DanMachi · Hermanos Gulliver",url:"https://danmachi.fandom.com/es/wiki/Hermanos_Gulliver",kind:"community"}]
}},
"CHAR-BERLING-GULLIVER":{"CONT-SECONDARY":{
title:"Berling Gulliver · hacha y búsqueda táctica",
summary:"Dato individual recuperado de la página comunitaria del grupo; no se añade personalidad por estilo.",
sections:[{title:"Dato reportado",text:"Berling usa un hacha y se distingue por buscar enemigos y comprobar posibles emboscadas y ataques sorpresa."},{title:"No informado",text:"La página no atribuye a Berling una magia o skill individual con nombre ni un coste. No se le asigna automáticamente Resistencia Anormal a partir de la entrada de Dvalinn."}],
references:[{label:"Wiki DanMachi · Hermanos Gulliver",url:"https://danmachi.fandom.com/es/wiki/Hermanos_Gulliver",kind:"community"}]
}},
"CHAR-GRER-GULLIVER":{"CONT-SECONDARY":{
title:"Grer Gulliver · espadón y observación del adversario",
summary:"Dato individual recuperado de la página comunitaria del grupo; no se añaden motivaciones ni rasgos de personalidad.",
sections:[{title:"Dato reportado",text:"Grer usa un espadón y se distingue por observar hábitos, fortalezas, debilidades y capacidades del adversario."},{title:"No informado",text:"La página no ofrece una magia o skill individual con nombre ni costes en el contenido recuperado. La especialidad táctica descrita no se renombra como una skill formal."}],
references:[{label:"Wiki DanMachi · Hermanos Gulliver",url:"https://danmachi.fandom.com/es/wiki/Hermanos_Gulliver",kind:"community"}]
}}
});


Object.assign(EXTENDED, {
"CHAR-BETE-LOGA":{"CONT-SECONDARY":{
title:"Bete Loga · magia, skills y equipo reportados",
summary:"Pasada comunitaria del 2026-10-27 limitada a capacidades y equipo. No modifica la personalidad ni el expediente de historia ya existente.",
sections:[
{title:"Nivel y skills reportados",text:"DanMachi Wiki reporta nivel 6 y enumera Úlfheðinn, Fenris Wolf y Solmani. La tabla de estadísticas detallada de la misma página corresponde a un snapshot de nivel 5; no combinar esos valores con el encabezado de nivel 6."},
{title:"Magia Hati",text:"La página comunitaria española describe Hati como una magia de encantamiento que absorbe poder mágico y daño al contacto. Las llamas crecen al absorber energía y el daño acumulado puede también afectar a Bete. Esta mecánica sigue siendo secundaria, sin cotejo de novela."},
{title:"Equipo y divergencia de nombre",text:"La página inglesa escribe Flosvirt y la española Frosvirt para las botas; ambas nombran Dual Rolan. Se conserva la diferencia ortográfica entre fuentes sin decidir cuál es la forma canónica. No se recuperó un coste numérico de Hati."},
{title:"Cierre",text:"Reutilizar esta pasada. Reabrir solo ante página comunitaria materialmente actualizada, fuente oficial nueva o pasaje primario legible."}
],
references:[
{label:"DanMachi Wiki · Bete Loga",url:"https://danmachi.fandom.com/wiki/Bete_Loga",kind:"community"},
{label:"Bete Loga/Habilidades · Wiki DanMachi",url:"https://danmachi.fandom.com/es/wiki/Bete_Loga/Habilidades",kind:"community"}
]
}},
"CHAR-TIONA-HIRYUTE":{"CONT-SECONDARY":{
title:"Tiona Hiryute · skills y equipo reportados",
summary:"Pasada comunitaria del 2026-10-27 limitada a capacidades de combate y equipo. No reescribe personalidad ni repite su investigación histórica.",
sections:[
{title:"Nivel y skills reportados",text:"La ficha comunitaria reporta nivel 6 y enumera Berserk e Intense Heat. Berserk aumenta el ataque al recibir daño; Intense Heat eleva ampliamente sus habilidades en situaciones límite y el aumento crece con el daño recibido. Son descripciones secundarias, no cotejadas en novela."},
{title:"Magia y habilidades de desarrollo",text:"La ficha consultada no enumera una magia con nombre. En su tabla aparecen Fist Strike, Diving, Abnormal Resistance y Crush como habilidades de desarrollo; la tabla de estadísticas detallada corresponde al snapshot de nivel 5, separado del encabezado de nivel 6."},
{title:"Equipo reportado",text:"La página enumera Urga, Blade Rolan y Corbel Edge. Informa un precio de 120.000.000 valis para una versión de Urga y relata reposiciones posteriores; el precio no debe tratarse como coste universal de todas las versiones."},
{title:"Cierre",text:"No interpretar que una magia no listada en esta página esté universalmente ausente. Reabrir solo con evidencia primaria legible o actualización material de la ficha."}
],
references:[{label:"DanMachi Wiki · Tiona Hiryute",url:"https://danmachi.fandom.com/wiki/Tiona_Hiryute",kind:"community"}]
}},
"CHAR-TIONE-HIRYUTE":{"CONT-SECONDARY":{
title:"Tione Hiryute · List Iorum, skills y equipo reportados",
summary:"Pasada comunitaria del 2026-10-27 limitada a capacidades y equipo. No reescribe personalidad ni repite la investigación sobre su pasado.",
sections:[
{title:"Nivel y skills reportados",text:"La ficha reporta nivel 6 y enumera Berserk y Backdraft. Berserk aumenta el ataque conforme recibe daño y se relaciona con su ira; Backdraft eleva de forma notable la fuerza en una situación límite. La tabla de estadísticas detallada se presenta como snapshot de nivel 5."},
{title:"Magia List Iorum",text:"La fuente describe una magia cuya probabilidad de éxito depende de su estadística de magia y cuyo resultado adopta la forma de un látigo que también puede usarse como arma. No se recuperó un coste numérico ni una duración fija en el contenido consultado."},
{title:"Habilidades de desarrollo y equipo",text:"La tabla enumera Fist Strike, Diving, Abnormal Resistance y Healing Power. Las armas nombradas son Zolas, Filuka, Halberd Rolan y Corbel Edge; la fuente inglesa registra 58.000.000 valis como coste de fabricación reportado para Zolas, no como precio universal."},
{title:"Cierre",text:"No transferir una habilidad de Tiona a Tione o viceversa por analogía. Reabrir solo con una actualización material de la fuente o texto primario legible."}
],
references:[{label:"DanMachi Wiki · Tione Hiryute",url:"https://danmachi.fandom.com/wiki/Tione_Hiryute",kind:"community"}]
}}
});

function extendedInfo(id,continuity,index){
const base=EXTENDED[id]&&EXTENDED[id][continuity]?EXTENDED[id][continuity]:null;
if(!base)return null;
const doc=index&&index.profileDetails?index.profileDetails[id]:null;
if(!doc)return base;
const scopes=doc.continuityScopes||[];
if(scopes.length&&!scopes.includes(continuity))return base;
const sections=(doc.sections||[]).filter(section=>{
  const heading=String(section.heading||"");
  if(/perfil psicol[oó]gico inicial/i.test(heading))return false;
  const normalizedHeading=heading.normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase();
  const historicalHeading=/temporal state a|estado temporal a|estado historico|astrea record/.test(normalizedHeading);
  const animeHeading=/temporal state b|estado temporal b|official anime|perfil oficial del anime|perfil oficial de adaptacion|adaptacion anime/.test(normalizedHeading);
  // Explicit scope tags are authoritative even when the prose heading is localized
  // or does not contain the words "Astrea Record", "histórico" or "anime".
  const knownScopes=["CONT-AR","CONT-ANIME","CONT-MAIN-LN","CONT-SO","CONT-AU","CONT-GAME","CONT-SECONDARY","CONT-UNVERIFIED","CROSS-CONTINUITY"];
  const explicitScopes=knownScopes.filter(scope=>new RegExp("(^|[^A-Z0-9])"+scope+"([^A-Z0-9]|$)","i").test(heading));
  if(explicitScopes.length&&continuity!=="ALL"&&!explicitScopes.includes(continuity))return false;
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
function list(index,options){const o=options||{},q=String(o.query||"").trim().normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase(),continuity=String(o.continuity||"ALL"),filter=String(o.spoiler||"all");
return(index.characters||[]).map(ch=>{const all=claimsFor(index,ch.id), shown=all.filter(c=>visible(c.spoilerLevel,filter)), scopes=ordered(all.flatMap(c=>c.continuityScopes||[]).concat(Object.keys(EXTENDED[ch.id]||{}))), shownScopes=ordered(shown.flatMap(c=>c.continuityScopes||[]).concat(Object.keys(EXTENDED[ch.id]||{})));const target=continuity!=="ALL"&&shownScopes.includes(continuity)?continuity:defaultState(scopes),st=state(ch.id,target),meta=META[ch.id];const official=typeof globalThis!=="undefined"&&globalThis.WordWaifuOfficialCharacterRoster?globalThis.WordWaifuOfficialCharacterRoster.get(ch.id):null;const displayOverview=meta?meta.overview:(official?official.summary:"Ficha provisional basada en afirmaciones documentadas.");const names=[ch.name,...(ch.aliases||[]),...(ch.keywords||[])].map(value=>String(value).normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase());
const matched=!q||names.some(name=>{
  if(name===q||name.startsWith(q+" "))return true;
  // Short queries such as "Ryu" should match token prefixes, not incidental
  // substrings inside unrelated names such as "Hiryute".
  if(q.length<=3)return name.split(/[\s_-]+/).some(token=>token.startsWith(q));
  return name.includes(q);
});
return{id:ch.id,name:ch.name,aliases:ch.aliases||[],profilePath:ch.profilePath,overview:displayOverview,summary:continuity==="ALL"?displayOverview:st.summary,preferredContinuity:target,availableContinuities:scopes,states:(continuity==="ALL"?shownScopes:shownScopes.filter(x=>x===continuity)).map(x=>({code:x,label:LABELS[x]||x,affiliation:state(ch.id,x).affiliation})),affiliation:st.affiliation,period:st.period,verifiedClaimCount:shown.length,matched,hasScope:continuity==="ALL"||shownScopes.includes(continuity)};}).filter(x=>x.matched&&x.hasScope).sort((a,b)=>a.name.localeCompare(b.name,"es"));}
function catalogRecord(index,id){return (index.entityRecords||[]).find(x=>x.id===id)||null;}
function entityLabel(index,id,edge){
  const character=record(index,id);
  if(character)return character.name;
  const entry=catalogRecord(index,id);
  if(!entry)return id;
  if(entry.name||entry.title)return entry.name||entry.title;
  if(entry.type==="event"&&edge&&edge.label)return edge.label;
  const tags=Array.isArray(entry.tags)?entry.tags:[];
  if(entry.type==="familia")return tags.find(tag=>/familia/i.test(tag))||tags[0]||id;
  return tags[0]||id;
}
function readableRelationKind(kind){return String(kind||"relación documentada").replace(/_/g," ").trim();}
function relationshipLinks(index,id,continuity,filter){
  const graphEdges=(index.relationships||[]).filter(edge=>edge&&edge.continuity===continuity&&(edge.from===id||edge.to===id));
  const graphRows=graphEdges.map(edge=>{
    const outgoing=edge.from===id;
    const targetId=outgoing?edge.to:edge.from;
    const targetCharacter=record(index,targetId);
    const targetMeta=catalogRecord(index,targetId);
    const targetName=targetCharacter?targetCharacter.name:
      (targetMeta&&(targetMeta.name||targetMeta.title))||
      (outgoing&&targetMeta&&targetMeta.type==="event"?edge.label:entityLabel(index,targetId,edge));
    const label=outgoing?edge.label:entityLabel(index,edge.from,edge)+" · vínculo relacionado";
    const original="La arista original registra "+edge.from+" → "+edge.to+": "+edge.label+".";
    const note=String(edge.note||"").trim();
    return{
      sourceId:edge.from,targetId,label,type:readableRelationKind(edge.kind),
      description:outgoing?(note||"Relación documentada con una afirmación enlazada."):("Enlace inverso para navegación. "+original+(note?" "+note:"")),
      refs:[edge.claimRef,...(Array.isArray(edge.claimRefs)?edge.claimRefs:[])].filter(Boolean),direction:outgoing?"outgoing":"incoming",
      edgeId:edge.id,evidenceStatus:edge.evidenceStatus,evidenceType:edge.evidenceType,
      targetType:targetCharacter?"character":targetMeta?"dossier":"unavailable",
      targetPath:targetMeta?targetMeta.path:"",targetName
    };
  });
  const overlaps=(a,b)=>a.sourceId===b.sourceId&&a.targetId===b.targetId&&(a.refs||[]).some(ref=>(b.refs||[]).includes(ref));
  const staticDirect=(((REL[id]||{})[continuity])||[]).map(edge=>({
    sourceId:id,targetId:edge.targetId,label:edge.label,type:edge.type,description:edge.description,
    refs:edge.refs||[],direction:"outgoing",targetName:record(index,edge.targetId)?.name||entityLabel(index,edge.targetId),
    targetType:record(index,edge.targetId)?"character":catalogRecord(index,edge.targetId)?"dossier":"unavailable",
    targetPath:catalogRecord(index,edge.targetId)?.path||""
  })).filter(edge=>!graphRows.some(graph=>graph.direction==="outgoing"&&overlaps(edge,graph)));
  const direct=[...graphRows.filter(edge=>edge.direction==="outgoing"),...staticDirect];
  const directTargets=new Set(direct.map(edge=>edge.targetId));
  const graphIncoming=graphRows.filter(edge=>edge.direction==="incoming"&&!directTargets.has(edge.targetId));
  const staticIncoming=[];
  for(const [sourceId,scopes] of Object.entries(REL)){
    if(sourceId===id)continue;
    for(const edge of ((scopes||{})[continuity]||[])){
      if(edge.targetId!==id||directTargets.has(sourceId))continue;
      const row={
        sourceId,targetId:sourceId,label:(record(index,sourceId)?.name||entityLabel(index,sourceId))+" · vínculo relacionado",
        type:edge.type,description:"Enlace inverso para navegación. La ficha de origen registra la relación "+sourceId+" → "+id+": "+edge.description,
        refs:edge.refs||[],direction:"incoming",targetName:record(index,sourceId)?.name||entityLabel(index,sourceId),
        targetType:record(index,sourceId)?"character":catalogRecord(index,sourceId)?"dossier":"unavailable",
        targetPath:catalogRecord(index,sourceId)?.path||""
      };
      if(!graphRows.some(graph=>graph.direction==="incoming"&&overlaps(row,graph)))staticIncoming.push(row);
    }
  }
  return [...direct,...graphIncoming,...staticIncoming].map(edge=>{
    const claims=refsClaims(index,edge.refs,continuity,filter);
    const target=record(index,edge.targetId),meta=catalogRecord(index,edge.targetId);
    return claims.length?{
      sourceId:edge.sourceId,targetId:edge.targetId,
      targetName:edge.targetName||(target?target.name:entityLabel(index,edge.targetId)),
      available:!!target||!!(meta&&meta.path),targetType:target?"character":meta?"dossier":"unavailable",
      targetPath:meta?meta.path:(edge.targetPath||""),
      label:edge.label,type:edge.type,description:edge.description,continuity,
      period:state(id,continuity).period,claims,direction:edge.direction,
      evidenceStatus:edge.evidenceStatus||null,evidenceType:edge.evidenceType||null,edgeId:edge.edgeId||null
    }:null;
  }).filter(Boolean);
}
function profile(index,id,continuity,filter){const ch=record(index,id);if(!ch)return null;const all=claimsFor(index,id),scopes=ordered(all.flatMap(c=>c.continuityScopes||[]).concat(Object.keys(EXTENDED[id]||{}))),chosen=continuity&&scopes.includes(continuity)?continuity:defaultState(scopes),allState=all.filter(c=>(c.continuityScopes||[]).includes(chosen)),shown=allState.filter(c=>visible(c.spoilerLevel,filter)),meta=META[id]||{states:{}};
const official=typeof globalThis!=="undefined"&&globalThis.WordWaifuOfficialCharacterRoster?globalThis.WordWaifuOfficialCharacterRoster.get(id):null;
const related=relationshipLinks(index,id,chosen,filter);
const moments=(((MOM[id]||{})[chosen])||[]).map(m=>{const claims=refsClaims(index,m.refs,chosen,filter);return claims.length?{id:m.id,title:m.title,period:m.period,summary:m.summary,claims:claims,spoilerLevel:worst(claims),people:unique(m.people||[]).filter(pid=>record(index,pid)).map(pid=>({id:pid,name:record(index,pid).name}))}:null;}).filter(Boolean);
let timeline=(((TIMELINE[id]||{})[chosen])||[]).map(t=>{const claims=refsClaims(index,t.refs,chosen,filter);return claims.length?{id:t.id,title:t.title,period:t.period,claims:claims}:null;}).filter(Boolean);
if(!timeline.length)timeline=shown.map(c=>({id:c.entryId,title:c.heading,period:c.eraOrInterval||"Periodo no determinado",claims:[c]}));
return{id:ch.id,name:ch.name,aliases:ch.aliases||[],profilePath:ch.profilePath,overview:meta.overview||(official?official.summary:"Ficha provisional basada en evidencia disponible."),continuity:chosen,continuityLabel:LABELS[chosen]||chosen,availableContinuities:scopes,state:state(id,chosen),officialReference:official,claims:shown,allStateClaims:allState,relationships:related,moments:moments,timeline:timeline,missingContinuities:["CONT-MAIN-LN","CONT-AU"].filter(x=>!scopes.includes(x))};}
return{list:list,getProfile:profile,getExtendedInfo:extendedInfo,getRelationships:relationshipLinks,continuityLabels:LABELS,continuityOrder:ORDER,defaultContinuity:defaultState,spoilerVisible:visible};
});

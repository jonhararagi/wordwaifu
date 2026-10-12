(function(root,factory){"use strict";const api=factory();if(typeof module==="object"&&module.exports)module.exports=api;else root.WordWaifuCharacterArchive=api;})(typeof globalThis!=="undefined"?globalThis:this,function(){
"use strict";
const LABELS={"CONT-AR":"Astrea Record · Era Oscura","CONT-ANIME":"Adaptación anime · DanMachi IV","CONT-MAIN-LN":"Novela principal","CONT-AU":"Historia alternativa (AU)","CROSS-CONTINUITY":"Comparación entre continuidades"};
const ORDER=["CONT-AR","CONT-ANIME","CONT-MAIN-LN","CONT-AU","CROSS-CONTINUITY"];
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
function unique(a){return Array.from(new Set(a.filter(Boolean)));}
function record(index,id){return (index.characters||[]).find(x=>x.id===id)||null;}
function claimsFor(index,id){return (index.claims||[]).filter(c=>(c.characterIds||[]).includes(id));}
function visible(level,filter){const v=String(level||"unknown").toLowerCase();if(filter==="hide-major")return v!=="major"&&v!=="endgame";if(filter==="safe-only")return v==="none"||v==="mild";return true;}
function ordered(a){return unique(a).sort((x,y)=>{const i=ORDER.indexOf(x),j=ORDER.indexOf(y);return(i<0?99:i)-(j<0?99:j)||x.localeCompare(y);});}
function defaultState(a){const s=ordered(a);return ["CONT-AR","CONT-ANIME","CROSS-CONTINUITY","CONT-MAIN-LN","CONT-AU"].find(x=>s.includes(x))||s[0]||"";}
function state(id,c){const p=META[id];return p&&p.states&&p.states[c]?p.states[c]:{summary:"Ficha provisional basada únicamente en las afirmaciones de esta continuidad.",period:"Periodo exacto no establecido.",affiliation:"Sin afiliación suficiente para este estado"};}
function refsClaims(index,refs,continuity,filter){return(index.claims||[]).filter(c=>((refs||[]).includes(c.claimId)||(refs||[]).includes(c.entryId))&&(!continuity||(c.continuityScopes||[]).includes(continuity))&&visible(c.spoilerLevel,filter));}
function worst(claims){const rank={none:0,mild:1,unknown:2,major:3,endgame:4};return claims.reduce((v,c)=>rank[String(c.spoilerLevel||"unknown").toLowerCase()]>rank[v]?String(c.spoilerLevel||"unknown").toLowerCase():v,"none");}
function list(index,options){const o=options||{},q=String(o.query||"").trim().normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase(),continuity=String(o.continuity||"ALL"),filter=String(o.spoiler||"all");
return(index.characters||[]).map(ch=>{const all=claimsFor(index,ch.id), shown=all.filter(c=>visible(c.spoilerLevel,filter)), scopes=ordered(all.flatMap(c=>c.continuityScopes||[])), shownScopes=ordered(shown.flatMap(c=>c.continuityScopes||[]));const target=continuity!=="ALL"&&shownScopes.includes(continuity)?continuity:defaultState(scopes),st=state(ch.id,target),meta=META[ch.id];const search=(ch.name+" "+(ch.aliases||[]).join(" ")).normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase();return{id:ch.id,name:ch.name,aliases:ch.aliases||[],profilePath:ch.profilePath,overview:meta?meta.overview:"Ficha provisional basada en afirmaciones documentadas.",summary:continuity==="ALL"?(meta?meta.overview:"Ficha provisional basada en evidencia disponible."):st.summary,preferredContinuity:target,availableContinuities:scopes,states:(continuity==="ALL"?shownScopes:shownScopes.filter(x=>x===continuity)).map(x=>({code:x,label:LABELS[x]||x,affiliation:state(ch.id,x).affiliation})),affiliation:st.affiliation,period:st.period,verifiedClaimCount:shown.length,matched:!q||search.includes(q),hasScope:continuity==="ALL"||shownScopes.includes(continuity)};}).filter(x=>x.matched&&x.hasScope).sort((a,b)=>a.name.localeCompare(b.name,"es"));}
function profile(index,id,continuity,filter){const ch=record(index,id);if(!ch)return null;const all=claimsFor(index,id),scopes=ordered(all.flatMap(c=>c.continuityScopes||[])),chosen=continuity&&scopes.includes(continuity)?continuity:defaultState(scopes),allState=all.filter(c=>(c.continuityScopes||[]).includes(chosen)),shown=allState.filter(c=>visible(c.spoilerLevel,filter)),meta=META[id]||{overview:"Ficha provisional basada en afirmaciones documentadas.",states:{}};
const related=(((REL[id]||{})[chosen])||[]).map(r=>{const claims=refsClaims(index,r.refs,chosen,filter),target=record(index,r.targetId);return claims.length?{targetId:r.targetId,targetName:target?target.name:r.targetId,available:!!target,label:r.label,type:r.type,description:r.description,continuity:chosen,period:state(id,chosen).period,claims:claims}:null;}).filter(Boolean);
const moments=(((MOM[id]||{})[chosen])||[]).map(m=>{const claims=refsClaims(index,m.refs,chosen,filter);return claims.length?{id:m.id,title:m.title,period:m.period,summary:m.summary,claims:claims,spoilerLevel:worst(claims),people:unique(m.people||[]).filter(pid=>record(index,pid)).map(pid=>({id:pid,name:record(index,pid).name}))}:null;}).filter(Boolean);
let timeline=(((TIMELINE[id]||{})[chosen])||[]).map(t=>{const claims=refsClaims(index,t.refs,chosen,filter);return claims.length?{id:t.id,title:t.title,period:t.period,claims:claims}:null;}).filter(Boolean);
if(!timeline.length)timeline=shown.map(c=>({id:c.entryId,title:c.heading,period:c.eraOrInterval||"Periodo no determinado",claims:[c]}));
return{id:ch.id,name:ch.name,aliases:ch.aliases||[],profilePath:ch.profilePath,overview:meta.overview,continuity:chosen,continuityLabel:LABELS[chosen]||chosen,availableContinuities:scopes,state:state(id,chosen),claims:shown,allStateClaims:allState,relationships:related,moments:moments,timeline:timeline,missingContinuities:["CONT-MAIN-LN","CONT-AU"].filter(x=>!scopes.includes(x))};}
return{list:list,getProfile:profile,continuityLabels:LABELS,continuityOrder:ORDER,defaultContinuity:defaultState,spoilerVisible:visible};
});

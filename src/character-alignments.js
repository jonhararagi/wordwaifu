(function(root,factory) {
  "use strict";
  const api=factory();
  if(typeof module==="object"&&module.exports)module.exports=api;
  else root.WordWaifuCharacterAlignments=api;
})(typeof globalThis!=="undefined"?globalThis:this,function() {
  "use strict";

  const MORALITY_LABELS=Object.freeze({good:"Bueno",neutral:"Neutral",evil:"Malo"});
  const CONDUCT_LABELS=Object.freeze({lawful:"Legal",neutral:"Neutral",chaotic:"Caótico"});
  const ENTRIES=Object.freeze({
    "CHAR-DARK-ALFIA":Object.freeze({
      id:"CHAR-DARK-ALFIA",
      morality:"neutral",
      conduct:"chaotic",
      displayLabel:"Caótico neutral",
      status:"interpretive_provisional",
      confidence:"low",
      continuity:"CONT-AR",
      rationale:"Las referencias comunitarias describen una finalidad declarada de preparar a Orario para la amenaza del Dragón Negro, pero también su aceptación consciente de causar caos, muerte y desesperación. La intención protectora y los medios deliberadamente lesivos quedan en tensión; por eso esta lectura no la etiqueta automáticamente como buena.",
      alternative:"Caótico bueno es una interpretación alternativa si se pondera ante todo el fin protector. La fuente secundaria también describe rasgos violentos y controladores; la etiqueta no es canon oficial y debe revisarse al cotejar escenas de la novelización.",
      sources:["https://danmachi.fandom.com/wiki/Alfia","https://danmachi.fandom.com/es/wiki/Alfia","https://danmachi.com/news/news131.php"]
    }),
    "CHAR-DARK-ZALD":Object.freeze({
      id:"CHAR-DARK-ZALD",
      morality:"neutral",
      conduct:"chaotic",
      displayLabel:"Caótico neutral",
      status:"interpretive_provisional",
      confidence:"low",
      continuity:"CONT-AR",
      rationale:"Las referencias comunitarias describen como objetivo fortalecer Orario para la futura lucha contra el Dragón Negro, pero Zald acepta actuar como enemigo y provocar caos, muerte y desesperación para forzar ese crecimiento. El propósito protector no borra el daño intencional de los medios; esta lectura evita clasificarlo automáticamente como bueno.",
      alternative:"Caótico bueno es una interpretación alternativa si se da más peso al objetivo de supervivencia humana que a los medios. La clasificación sigue siendo editorial, secundaria y de baja confianza, no una etiqueta oficial del personaje.",
      sources:["https://danmachi.fandom.com/wiki/Zald","https://danmachi.fandom.com/es/wiki/Zald","https://danmachi.fandom.com/wiki/Alfia"]
    })
  });

  function clone(entry) {
    if(!entry)return null;
    return {...entry,sources:[...entry.sources]};
  }
  function format(morality,conduct) {
    const m=MORALITY_LABELS[morality]||"Sin clasificar";
    const c=CONDUCT_LABELS[conduct]||"Sin clasificar";
    if(morality==="neutral"&&conduct==="neutral")return "Neutral";
    if(!MORALITY_LABELS[morality]||!CONDUCT_LABELS[conduct])return "Sin clasificar";
    return c+" "+m.toLowerCase();
  }
  function matches(id,moralityFilter,conductFilter) {
    const entry=ENTRIES[id]||null;
    const morality=entry?entry.morality:"unclassified";
    const conduct=entry?entry.conduct:"unclassified";
    const m=String(moralityFilter||"ALL");
    const c=String(conductFilter||"ALL");
    return (m==="ALL"||m==="all"||m===morality) &&
      (c==="ALL"||c==="all"||c===conduct);
  }
  return Object.freeze({
    moralityLabels:MORALITY_LABELS,
    conductLabels:CONDUCT_LABELS,
    get(id){return clone(ENTRIES[String(id||"")]);},
    list(){return Object.keys(ENTRIES).map(id=>clone(ENTRIES[id]));},
    matches,
    format,
    isClassified(id){return Object.prototype.hasOwnProperty.call(ENTRIES,String(id||""));}
  });
});

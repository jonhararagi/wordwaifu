(function (root, factory) {
  "use strict";
  const api = factory();
  if (typeof module === "object" && module.exports) module.exports = api;
  else root.WordWaifuPowerWorkbench = api;
})(typeof globalThis !== "undefined" ? globalThis : this, function () {
  "use strict";
  let root = null, getProject = null, onSave = null;
  let editingId = null, candidate = null, serial = 0;

  const families = [
    ["any","Sorpresa · cualquier familia"],["physical","Físico / defensa"],["mental","Mental / percepción"],
    ["sensory","Sensorial"],["elemental","Elemental"],["spatial","Espacial"],["temporal","Temporal"],
    ["technical","Técnico / estratégico"],["pact","Pacto / contrato"],["costly","Alto coste"],
    ["support","Apoyo / información"],["transformation","Transformación"],["information","Información"],
    ["rare-command","Mandato mental raro"]
  ];
  const fields = [
    ["name","Nombre","input","Ej.: Hilo de retorno"],
    ["category","Categoría","input","Familia y subtipo"],
    ["profile","Perfil de uso","input","Técnico, soporte, ofensivo, alto coste…"],
    ["description","Qué hace","textarea","Efecto exacto y qué no significa"],
    ["activation","Activación","textarea","Condición necesaria para activarlo"],
    ["cost","Coste y pago","textarea","Qué paga, cuándo y si puede evitarse"],
    ["limits","Límites y contramedidas","textarea","Condiciones de fallo, resistencia y excepciones"],
    ["evolution","Etapas de evolución","textarea","Una etapa por línea: requisito → cambio → precio"],
    ["consequences","Consecuencias narrativas","textarea","Qué cambia después y qué no vuelve a ser igual"],
    ["contract","Contrato / vínculo","textarea","Partes, consentimiento, obligaciones, salida y sanción"],
    ["inspiration","Inspiración / arquetipo","input","Referencia general; separar de copia/canon"],
    ["source","Fuente o referencia","input","URL o documento si procede"]
  ];
  function element(tag, cls, value) {
    const node = document.createElement(tag);
    if (cls) node.className = cls;
    if (value !== undefined) node.textContent = value;
    return node;
  }
  function fieldControl(key, label, kind, placeholder) {
    const wrap = element("label","power-field");
    wrap.appendChild(element("span","",label));
    const control = document.createElement(kind === "textarea" ? "textarea" : "input");
    control.name = key;
    control.id = "power-" + key;
    if (kind === "textarea") control.rows = key === "description" ? 3 : 2;
    else control.type = "text";
    control.maxLength = key === "evolution" || key === "consequences" ? 6000 : 4000;
    control.placeholder = placeholder;
    wrap.appendChild(control);
    return wrap;
  }
  function initView() {
    root.innerHTML = "";
    const header = element("header","power-view-header");
    const intro = element("div");
    intro.append(element("p","eyebrow","WORDWAIFU · SISTEMAS DE PODER"),element("h2","","Poderes y habilidades"),element("p","field-help","Cada poder es una ficha independiente con reglas, dueño, historia, evolución y fuentes. Generar una idea no la guarda: primero podés revisarla y editarla."));
    header.appendChild(intro);
    const actions = element("div","power-view-actions");
    const newButton = element("button","outline-button","＋ Nuevo poder"); newButton.type="button";newButton.dataset.powerAction="new";
    actions.appendChild(newButton);header.appendChild(actions);root.appendChild(header);

    const layout = element("div","power-workbench-grid");
    const editor = element("section","power-editor-card"); editor.id="power-editor";
    editor.append(element("p","eyebrow","FICHA EDITABLE"),element("h3","","Crear o editar un poder"));
    const generator = element("section","power-generator-panel power-generator-panel--standalone");
    generator.append(element("h4","","Generador de candidatos"),element("p","field-help","La categoría ocular/de mandato tiene una probabilidad baja en el modo sorpresa. Las ideas son originales, no poderes oficiales de ninguna franquicia."));
    const controls = element("div","power-generator-controls");
    const familyLabel=element("label","");familyLabel.appendChild(element("span","","Familia del candidato"));
    const familySelect=document.createElement("select");familySelect.id="power-generator-family";
    families.forEach(([value,label])=>familySelect.add(new Option(label,value)));
    familyLabel.appendChild(familySelect);controls.appendChild(familyLabel);
    const generateButton=element("button","outline-button","✦ Generar candidato");generateButton.type="button";generateButton.dataset.powerAction="generate";controls.appendChild(generateButton);
    const discardButton=element("button","quiet-button","Descartar candidato");discardButton.type="button";discardButton.dataset.powerAction="discard";controls.appendChild(discardButton);
    generator.appendChild(controls);
    const status=element("p","field-help","El generador propone; vos decidís qué se vuelve parte del proyecto.");status.id="power-generator-status";status.setAttribute("role","status");status.setAttribute("aria-live","polite");generator.appendChild(status);
    editor.appendChild(generator);

    const form=document.createElement("form");form.id="power-record-form";
    const grid=element("div","power-form-grid");
    fields.forEach(([key,label,kind,placeholder])=>grid.appendChild(fieldControl(key,label,kind,placeholder)));
    const refs=element("div","power-form-grid power-form-grid--references");
    const ownerWrap=element("label","power-field");ownerWrap.appendChild(element("span","","Personaje dueño (opcional)"));
    const owner=document.createElement("select");owner.name="ownerCharacterId";owner.id="power-owner";owner.add(new Option("Sin asignar",""));ownerWrap.appendChild(owner);refs.appendChild(ownerWrap);
    const storyWrap=element("label","power-field");storyWrap.appendChild(element("span","","Historia asociada (opcional)"));
    const story=document.createElement("select");story.name="storyId";story.id="power-story";story.add(new Option("Sin historia asignada",""));storyWrap.appendChild(story);refs.appendChild(storyWrap);
    grid.appendChild(refs);

    const options=element("div","power-form-grid");
    const catWrap=element("label","power-field");catWrap.appendChild(element("span","","Familia / categoría técnica"));
    const category=document.createElement("select");category.name="family";category.id="power-family";families.filter(([v])=>v!=="any").forEach(([v,label])=>category.add(new Option(label,v)));catWrap.appendChild(category);options.appendChild(catWrap);
    const statusWrap=element("label","power-field");statusWrap.appendChild(element("span","","Estado del registro"));
    const statusSelect=document.createElement("select");statusSelect.name="status";statusSelect.id="power-status";
    [["proposal","Propuesta"],["canon","Confirmado en el proyecto"],["rumor","Rumor"],["unknown","Pendiente de verificar"],["deprecated","Obsoleto"]].forEach(([v,l])=>statusSelect.add(new Option(l,v)));
    statusWrap.appendChild(statusSelect);options.appendChild(statusWrap);
    const irreversible=element("label","power-irreversible");const checkbox=document.createElement("input");checkbox.type="checkbox";checkbox.name="irreversible";checkbox.id="power-irreversible";
    irreversible.append(checkbox,element("span","","Tiene una etapa o efecto irreversible"));options.appendChild(irreversible);
    form.append(grid,options);
    const bottom=element("div","power-form-actions");
    const save=document.createElement("button");save.type="submit";save.className="primary-button";save.textContent="Guardar poder";
    const cancel=document.createElement("button");cancel.type="button";cancel.className="outline-button";cancel.textContent="Limpiar formulario";cancel.dataset.powerAction="discard";
    bottom.append(save,cancel);form.appendChild(bottom);
    const formStatus=element("p","field-help","Todavía no hay cambios guardados.");formStatus.id="power-form-status";formStatus.setAttribute("role","status");form.appendChild(formStatus);
    editor.appendChild(form);layout.appendChild(editor);

    const directory=element("section","power-directory-card");
    directory.append(element("p","eyebrow","CATÁLOGO DEL PROYECTO"),element("h3","","Tus poderes"));
    const filterLabel=element("label","power-search-field");filterLabel.appendChild(element("span","","Buscar en el catálogo"));
    const filter=document.createElement("input");filter.type="search";filter.id="power-filter";filter.placeholder="Nombre, coste, categoría, personaje…";filterLabel.appendChild(filter);directory.appendChild(filterLabel);
    const coverage=element("p","field-help","Los poderes solo se guardan en el proyecto activo.");coverage.id="power-catalog-status";coverage.setAttribute("role","status");directory.appendChild(coverage);
    const list=element("div","power-record-list");list.id="power-record-list";directory.appendChild(list);
    layout.appendChild(directory);root.appendChild(layout);

    root.addEventListener("click", onClick);
    root.addEventListener("submit", onSubmit);
    filter.addEventListener("input", () => renderList(getProject()));
    root._powerWorkbenchReady=true;
    populateReferences(getProject());
    renderList(getProject());
    setForm(null);
  }
  function populateReferences(project) {
    if(!root || !project)return;
    const owner=root.querySelector("#power-owner"),story=root.querySelector("#power-story");
    const previousOwner=owner.value,previousStory=story.value;
    owner.replaceChildren(new Option("Sin asignar",""));
    (project.characters||[]).forEach(item=>owner.add(new Option(item.name,item.id)));
    story.replaceChildren(new Option("Sin historia asignada",""));
    (project.stories||[]).forEach(item=>story.add(new Option(item.name,item.id)));
    if(Array.from(owner.options).some(o=>o.value===previousOwner))owner.value=previousOwner;
    if(Array.from(story.options).some(o=>o.value===previousStory))story.value=previousStory;
  }
  function refresh(project) {
    if(!root)return;
    if(!root._powerWorkbenchReady)initView();
    populateReferences(project);
    renderList(project);
  }
  function setForm(power) {
    if(!root)return;
    const form=root.querySelector("#power-record-form");
    form.reset();editingId=power?power.id:null;candidate=null;
    const values=power||{};
    fields.forEach(([key])=>{const input=form.elements.namedItem(key);if(input)input.value=values[key]||"";});
    form.elements.namedItem("family").value=values.family||"mental";
    form.elements.namedItem("status").value=values.status||"proposal";
    form.elements.namedItem("irreversible").checked=Boolean(values.irreversible);
    root.querySelector("#power-owner").value=values.ownerCharacterId||"";
    root.querySelector("#power-story").value=values.storyId||"";
    root.querySelector("#power-generator-status").textContent=power?"Editando «"+power.name+"». Los cambios se guardan al pulsar Guardar poder.":"El candidato no se guarda hasta que confirmes el formulario.";
    root.querySelector("#power-form-status").textContent=power?"Modificando una ficha guardada.":"Formulario listo; todavía no se creó ningún registro.";
  }
  function renderList(project) {
    if(!root||!project)return;
    if(!Array.isArray(project.powers))project.powers=[];
    const listNode=root.querySelector("#power-record-list");
    if(!listNode)return;
    listNode.replaceChildren();
    const query=String(root.querySelector("#power-filter").value||"").trim().toLowerCase();
    const records=project.powers.filter(power=>!query||[power.name,power.category,power.profile,power.description,power.activation,power.cost,power.limits,power.consequences,power.contract,power.inspiration,power.source].join(" ").toLowerCase().includes(query));
    root.querySelector("#power-catalog-status").textContent=project.powers.length+" poder(es) guardado(s) en este proyecto · "+records.length+" visible(s). Un candidato no cuenta hasta guardarlo.";
    if(!records.length){listNode.appendChild(element("div","empty-state",project.powers.length?"No hay poderes que coincidan con la búsqueda.":"Todavía no hay poderes independientes. Generá un candidato o creá una ficha manualmente."));return;}
    records.forEach(power=>{
      const card=element("article","power-record-card");card.dataset.powerId=power.id;
      const heading=element("div","power-record-heading");heading.append(element("h4","",power.name),element("span","power-status-chip",power.status||"proposal"));card.appendChild(heading);
      card.appendChild(element("p","power-record-meta",[power.category||power.family||"Sin categoría",power.profile||"Perfil pendiente",power.irreversible?"Irreversible":""].filter(Boolean).join(" · ")));
      card.appendChild(element("p","",power.description||"Descripción pendiente."));
      const owner=(project.characters||[]).find(ch=>ch.id===power.ownerCharacterId),story=(project.stories||[]).find(st=>st.id===power.storyId);
      const linked=element("p","power-record-meta",["Dueño: "+(owner?owner.name:"sin asignar"),"Historia: "+(story?story.name:"sin asignar")].join(" · "));card.appendChild(linked);
      const actions=element("div","power-record-actions");
      const edit=element("button","outline-button","Editar");edit.type="button";edit.dataset.powerAction="edit";edit.dataset.powerId=power.id;
      const remove=element("button","quiet-button danger-action","Eliminar");remove.type="button";remove.dataset.powerAction="delete";remove.dataset.powerId=power.id;
      actions.append(edit,remove);card.appendChild(actions);listNode.appendChild(card);
    });
  }
  function onClick(event) {
    const button=event.target.closest("[data-power-action]");
    if(!button||!root.contains(button))return;
    const project=getProject();if(!project)return;
    const action=button.dataset.powerAction;
    if(action==="new"||action==="discard"){setForm(null);return;}
    if(action==="edit"){
      const power=(project.powers||[]).find(item=>item.id===button.dataset.powerId);if(power)setForm(power);return;
    }
    if(action==="generate"){
      if(!root.WordWaifuPowerCatalog && typeof WordWaifuPowerCatalog==="undefined") {
        const w=root.ownerDocument.defaultView;
        if(!w.WordWaifuPowerCatalog){root.querySelector("#power-generator-status").textContent="No está disponible el generador.";return;}
      }
      const api=root.ownerDocument.defaultView.WordWaifuPowerCatalog;
      const generated=api.generate({family:root.querySelector("#power-generator-family").value});
      if(!generated){root.querySelector("#power-generator-status").textContent="No hay plantillas para esa familia.";return;}
      candidate=generated;
      const power={...generated,id:null,status:"proposal",irreversible:/permanent|permanently|permanente|irreversib/i.test([generated.evolution,generated.cost,generated.consequences].join(" "))};
      setForm(power);candidate=generated;
      root.querySelector("#power-generator-status").textContent="Candidato «"+generated.name+"» cargado para revisión; editá la ficha y guardala para incorporarla.";
      return;
    }
    if(action==="delete"){
      const id=button.dataset.powerId;
      const power=(project.powers||[]).find(item=>item.id===id);
      if(!power||!root.ownerDocument.defaultView.confirm("¿Eliminar el poder «"+power.name+"» del catálogo del proyecto?"))return;
      project.powers=project.powers.filter(item=>item.id!==id);
      if(editingId===id)setForm(null);
      renderList(project);
      if(typeof onSave==="function")Promise.resolve(onSave()).then(()=>{root.querySelector("#power-form-status").textContent="Poder eliminado y proyecto guardado.";}).catch(error=>{root.querySelector("#power-form-status").textContent="El cambio queda en memoria, pero el guardado falló: "+error.message;});
    }
  }
  function onSubmit(event) {
    if(event.target.id!=="power-record-form")return;
    event.preventDefault();
    const project=getProject();if(!project)return;
    if(!Array.isArray(project.powers))project.powers=[];
    const form=event.target, get=key=>String(form.elements.namedItem(key).value||"").trim();
    const name=get("name");if(!name){root.querySelector("#power-form-status").textContent="El poder necesita un nombre.";return;}
    const id=editingId||(typeof crypto!=="undefined"&&crypto.randomUUID?"power-"+crypto.randomUUID():"power-"+Date.now().toString(36)+"-"+(++serial));
    const record={
      id,name,family:get("family"),category:get("category")||families.find(item=>item[0]===get("family"))?.[1]||get("family"),
      profile:get("profile"),description:get("description"),activation:get("activation"),cost:get("cost"),limits:get("limits"),
      evolution:get("evolution"),consequences:get("consequences"),contract:get("contract"),
      ownerCharacterId:get("ownerCharacterId")||null,storyId:get("storyId")||null,
      irreversible:Boolean(form.elements.namedItem("irreversible").checked),inspiration:get("inspiration"),source:get("source"),status:get("status")||"proposal"
    };
    const index=project.powers.findIndex(power=>power.id===id);
    if(index>=0)project.powers[index]=record;else project.powers.push(record);
    editingId=id;candidate=null;
    renderList(project);
    if(typeof onSave==="function")Promise.resolve(onSave()).then(saved=>{
      root.querySelector("#power-form-status").textContent=saved===false?"Poder incorporado a la sesión, pero el guardado persistente no se confirmó.":"Poder «"+name+"» guardado como ficha independiente.";
      root.querySelector("#power-generator-status").textContent="Ficha actual: "+name+". Generar otro candidato no alterará este registro.";
    }).catch(error=>{root.querySelector("#power-form-status").textContent="Ficha actualizada en memoria, pero falló el guardado: "+error.message;});
  }
  function mount(options) {
    root=options.root;getProject=options.getProject;onSave=options.onSave;
    if(!root||typeof getProject!=="function")return;
    initView();
  }
  return { mount, refresh };
});
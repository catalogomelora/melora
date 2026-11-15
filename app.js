/* ===== CONFIGURACIÓN: edita solo esta parte ===== */
const WHATSAPP="573000070102";      // +57 300 007 0102
const DIAS_PEDIDO="7 a 8 días";   // tiempo de entrega de los productos bajo pedido
const GARANTIA="";                 // ej. "Garantía o cambios: 30 días". Si lo dejas vacío, esa línea no se muestra
const ENVIO_GRATIS=120000;          // envío gratis en compras MAYORES a este valor
const CATS=[["kits","Kits cuidado corporal"],["joyas","Joyas"],["cadenas","Cadenas y collares"],["aretes","Aretes"],["pulseras","Pulseras"],["corporal","Cuidado corporal"]];
const PORTADAS={cadenas:"img/cadena-trebol-rosa.webp",aretes:"img/candonga-rosa.webp",pulseras:"img/pulsera-san-benito-negra.webp",kits:"img/brilli-kit.webp"}; // fotos del carrusel de categorías
/* Productos: archivo productos.js (id, nombre, cat, precio, desc, foto). Para una oferta agrega "antes": precioAnterior */
/* ================================================= */
const $=id=>document.getElementById(id),cop=n=>"$"+n.toLocaleString("es-CO")+" COP";
const track=(n,p)=>{try{fbq("track",n,p)}catch(e){}};
const norm=s=>s.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"");
const catName=id=>(CATS.find(c=>c[0]===id)||[,"Todos los productos"])[1];
let cat="",q="",sort="";
const byId=id=>PRODUCTOS.find(p=>p.id==id);
const olabel=(p,o)=>o?` (${p.opciones[0].n}: ${o})`:"";

document.querySelectorAll(".dp").forEach(e=>e.textContent=DIAS_PEDIDO);
document.querySelectorAll(".u,#umbral").forEach(e=>e.textContent=cop(ENVIO_GRATIS).replace(" COP",""));
$("promo").textContent="Envío gratis en compras mayores a "+cop(ENVIO_GRATIS).replace(" COP","")+" · Pedidos por WhatsApp";
$("hwa").href=$("fwa").href="https://wa.me/"+WHATSAPP+"?text="+encodeURIComponent("¡Hola MELORA! Quiero más información.");
$("fwa").dataset.x="https://wa.me/"+WHATSAPP+"?text="+encodeURIComponent("¡Hola MELORA! Quiero más información.");

/* ---- Navegación y catálogo ---- */
function nav(){
  $("nav").innerHTML=[["","Todo"],...CATS].map(([id,n])=>`<a href="#${id}" class="${id===cat?"on":""}">${n}</a>`).join("");
}
const tag=p=>p.estado==="pedido"?'<span class="tag p">Bajo pedido</span>':p.estado?'<span class="tag">Disponible</span>':"";
function card(p){
  const off=p.antes&&p.antes>p.precio;
  return `<article class="card"><button class="ph" data-v="${p.id}" aria-label="Ver ${p.nombre}">${tag(p)}<img src="${tn(p.foto)}" alt="${p.nombre}" loading="lazy" decoding="async"></button>
  <div class="in"><small>${catName(p.cat)}</small><h3>${p.nombre}</h3>
  <div class="price">${off?`<s>${cop(p.antes)}</s> `:""}${cop(p.precio)}${p.incluye?`<small>Precio por el kit de ${p.incluye.length} productos</small>`:""}</div>
  <button class="wa" data-w="${p.id}">Pedir por WhatsApp</button></div></article>`;
}
function render(){
  let L=PRODUCTOS.filter(p=>(!cat||p.cat===cat||(cat==="joyas"&&["cadenas","aretes","pulseras"].includes(p.cat)))&&(!q||norm(p.nombre+" "+p.desc+" "+catName(p.cat)).includes(q)));
  if(sort)L=[...L].sort((a,b)=>sort==="asc"?a.precio-b.precio:b.precio-a.precio);
  $("title").textContent=q?"Resultados de tu búsqueda":catName(cat);
  $("grid").innerHTML=L.map(card).join("");$("empty").hidden=L.length>0;nav();document.body.classList.toggle("home",!cat&&!q);
}
function route(){const h=location.hash.slice(1),m=h.match(/^p-(\d+)/);if($("pm").open)$("pm").close();
  if(m&&byId(m[1])){const p=byId(m[1]);cat=p.cat;q="";$("q").value="";render();view(p.id,true);return}
  cat=CATS.some(c=>c[0]===h)?h:"";render();if(h)$("title").scrollIntoView()}
addEventListener("hashchange",route);
$("q").oninput=e=>{q=norm(e.target.value.trim());render()};
$("sort").onchange=e=>{sort=e.target.value;render()};

/* ---- Enlaces, miniaturas y pedido directo ---- */
const slug=s=>norm(s).replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,""),tn=f=>f.replace("img/","img/t/"),plink=p=>"#p-"+p.id+"-"+slug(p.nombre),full=p=>location.href.split(/[#?]/)[0]+plink(p);
function askWA(p,n,o){track("Lead",{content_name:p.nombre,value:p.precio*n,currency:"COP"});
  const t=`¡Hola MELORA! Quiero pedir este producto:\n\n• ${n} x ${p.nombre}${olabel(p,o)}${p.estado==="pedido"?" (bajo pedido)":""} — ${cop(p.precio*n)}\n${full(p)}`;
  open("https://wa.me/"+WHATSAPP+"?text="+encodeURIComponent(t),"_blank","noopener")}
/* ---- También te puede gustar (solo Cuidado corporal) ---- */
function rel(p){if(p.cat!=="corporal")return"";const L=PRODUCTOS.filter(x=>x.cat==="corporal"),i=L.findIndex(x=>x.id===p.id);
  const R=Array.from({length:Math.min(4,L.length-1)},(_,k)=>L[(i+1+k)%L.length]);
  return `<section class="rel"><h3>♥ También te puede gustar ♥</h3><div class="rg">${R.map(x=>`<button class="rc" data-rc="${x.id}"><img src="${tn(x.foto)}" alt="" loading="lazy"><span>${x.nombre}</span><b>${cop(x.precio)}</b></button>`).join("")}</div></section>`}
/* ---- Producto (vista rápida) ---- */
const pf=n=>"$"+n.toLocaleString("es-CO"),SV=d=>`<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${d}</svg>`;
const ICON={truck:'<rect x="1" y="4" width="15" height="12"/><path d="M16 8h4l3 3v5h-7z"/><circle cx="5.5" cy="18.5" r="2"/><circle cx="18.5" cy="18.5" r="2"/>',pin:'<path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>',gift:'<path d="M20 12v10H4V12"/><rect x="2" y="7" width="20" height="5"/><path d="M12 22V7M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7zM12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"/>',shield:'<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/>',wa:'<path d="M21 11.5a8.4 8.4 0 0 1-12.3 7.4L3 21l1.9-5.5A8.4 8.4 0 1 1 21 11.5z"/>'};
function view(id,fromLink){
  const p=byId(id),F=p.fotos||[p.foto],op=p.opciones&&p.opciones[0],ped=p.estado==="pedido";let n=1,cur=0;track("ViewContent",{content_name:p.nombre,value:p.precio,currency:"COP"});
  const rows=[["truck","Envío gratis en compras mayores a "+pf(ENVIO_GRATIS)],["pin","Entregamos en Betulia, Concordia y Urrao"],["gift","Llega en caja MELORA, lista para regalar"]];if(GARANTIA)rows.push(["shield",GARANTIA]);
  const sp=(p.specs||[]).map(([k,v])=>`<div class="sp"><small>${k}</small><b>${v}</b></div>`).join("");
  $("pmBody").innerHTML=`<div class="pm"><div class="xw"><button class="x" data-x aria-label="Cerrar">✕</button></div><div class="pmt"><div class="gal"><img id="gm" src="${F[0]}" alt="${p.nombre}">${F.length>1?`<div class="th">${F.map((f,k)=>`<button data-t="${k}" class="${k?"":"on"}" aria-label="Foto ${k+1}"><img src="${tn(f)}" alt=""></button>`).join("")}</div><div class="dots2">${F.map((f,k)=>`<button data-t="${k}" class="${k?"":"on"}" aria-label="Foto ${k+1}"></button>`).join("")}</div>`:""}</div>
  <div><div class="meta"><span class="cl">${catName(p.cat)}</span>${p.estado?`<span class="pill ${ped?"p":""}"><i></i>${ped?"Bajo pedido":"Disponible"}</span>`:""}</div>
  <h2>${p.nombre}</h2>
  <div class="pr2">${pf(p.precio)}<small>COP</small></div>${p.incluye?`<span class="kitn">Precio por el kit completo</span>`:""}${ped?`<span class="kitn"><b>Llega en ${DIAS_PEDIDO}</b></span>`:""}
  <p>${p.desc}</p>${sp?`<div class="specs">${sp}</div>`:""}
  ${op?`<label class="opt">${op.n}<select id="opt"><option value="" disabled selected>Elige tu ${op.n.toLowerCase()}</option>${op.v.map(x=>`<option>${x}</option>`).join("")}</select><span id="opterr" role="alert"></span></label>`:""}
  <div class="q"><button data-m aria-label="Menos">−</button><b id="pq">1</b><button data-p aria-label="Más">+</button></div>
  <ul class="info">${rows.map(([i,t])=>`<li>${SV(ICON[i])}<span>${t}</span></li>`).join("")}</ul>
  ${p.incluye?`<p><b>Incluye:</b></p><ul>${p.incluye.map(x=>`<li>${x}</li>`).join("")}</ul>`:""}</div></div>${rel(p)}
  <div class="pbar"><button class="wab" data-wa>${SV(ICON.wa)} Comprar por WhatsApp</button></div></div>`;
  const b=$("pmBody"),pick=()=>{if(!op)return"";const v=$("opt").value;if(!v){$("opt").classList.add("bad");$("opterr").textContent="Elige tu "+op.n.toLowerCase()+" para continuar";$("opt").focus();return null}return v};
  const show=k=>{cur=(k+F.length)%F.length;$("gm").src=F[cur];b.querySelectorAll(".th button,.dots2 button").forEach(x=>x.classList.toggle("on",+x.dataset.t===cur))};
  let x0=null;const gl=b.querySelector(".gal");gl.addEventListener("touchstart",e=>{x0=e.touches[0].clientX},{passive:true});
  gl.addEventListener("touchend",e=>{if(x0===null||F.length<2)return;const d=e.changedTouches[0].clientX-x0;if(Math.abs(d)>40)show(cur+(d<0?1:-1));x0=null},{passive:true});
  b.onclick=e=>{const t=e.target;
    if(t.closest("[data-x]"))$("pm").close();const rc=t.closest("[data-rc]");if(rc){view(rc.dataset.rc);$("pm").scrollTop=0;return}
    const th=t.closest("[data-t]");if(th)show(+th.dataset.t);
    if(t.closest("[data-m]")&&n>1)$("pq").textContent=--n;
    if(t.closest("[data-p]"))$("pq").textContent=++n;
    if(t.closest("[data-wa]")){const o=pick();if(o===null)return;askWA(p,n,o)}};
  b.onchange=e=>{if(e.target.id==="opt"){e.target.classList.remove("bad");$("opterr").textContent=""}};
  if(!$("pm").open)$("pm").showModal();if(!fromLink)history.replaceState(null,"",plink(p));
}
$("pm").addEventListener("click",e=>{if(e.target===$("pm"))$("pm").close()});
$("pm").addEventListener("close",()=>{if(location.hash.startsWith("#p-"))history.replaceState(null,"",cat?"#"+cat:location.pathname+location.search)});
$("grid").onclick=e=>{const v=e.target.closest("[data-v]");
  const w=e.target.closest("[data-w]");if(v)view(v.dataset.v);if(w){const pw=byId(w.dataset.w);if(pw.opciones)view(pw.id);else askWA(pw,1)}};

/* ---- Carruseles ---- */
$("cr").innerHTML=["cadenas","aretes","pulseras","kits"].map(id=>{const n=PRODUCTOS.filter(p=>p.cat===id).length;return `<a class="cc" href="#${id}"><img src="${PORTADAS[id]}" alt="" loading="lazy"><b>${catName(id)}</b><small>${n} artículo${n>1?"s":""}</small></a>`}).join("");
const step=()=>$("cr").firstElementChild.offsetWidth+14;
$("crPrev").onclick=()=>$("cr").scrollBy({left:-step(),behavior:"smooth"});$("crNext").onclick=()=>$("cr").scrollBy({left:step(),behavior:"smooth"});
const hs=$("slides"),dots=$("dots"),N=hs.children.length,hc=$("hc");let cur=0,timer;
dots.innerHTML=[...hs.children].map((_,i)=>`<button aria-label="Ir a la diapositiva ${i+1}" data-i="${i}"></button>`).join("");
const go=i=>{if(!hs.clientWidth)return;cur=(i+N)%N;hs.scrollTo({left:cur*hs.clientWidth,behavior:"smooth"})};
const mark=()=>{if(!hs.clientWidth)return;cur=Math.round(hs.scrollLeft/hs.clientWidth);[...dots.children].forEach((d,i)=>d.classList.toggle("on",i===cur))};
hs.addEventListener("scroll",mark);dots.onclick=e=>{const b=e.target.closest("[data-i]");if(b)go(+b.dataset.i)};
$("hPrev").onclick=()=>go(cur-1);$("hNext").onclick=()=>go(cur+1);
const play=()=>{clearInterval(timer);if(!matchMedia("(prefers-reduced-motion: reduce)").matches)timer=setInterval(()=>go(cur+1),6000)};
["mouseenter","focusin","touchstart"].forEach(v=>hc.addEventListener(v,()=>clearInterval(timer),{passive:true}));["mouseleave","focusout"].forEach(v=>hc.addEventListener(v,play));
route();mark();play();

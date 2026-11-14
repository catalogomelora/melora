/* ===== CONFIGURACIÓN: edita solo esta parte ===== */
const WHATSAPP="573000070102";      // +57 300 007 0102
const ENVIO_GRATIS=120000;          // envío gratis en compras MAYORES a este valor
const CATS=[["kits","Kits cuidado corporal"],["cadenas","Cadenas y collares"],["aretes","Aretes"],["pulseras","Pulseras"],["corporal","Cuidado corporal"]];
const PORTADAS={cadenas:"img/cadena-trebol-rosa.jpg",aretes:"img/candonga-rosa.jpg",pulseras:"img/pulsera-san-benito-negra.jpg",kits:"img/brilli-kit.jpg"}; // fotos del carrusel de categorías
/* Productos: archivo productos.js (id, nombre, cat, precio, desc, foto). Para una oferta agrega "antes": precioAnterior */
/* ================================================= */
const $=id=>document.getElementById(id),cop=n=>"$"+n.toLocaleString("es-CO")+" COP";
const track=(n,p)=>{try{fbq("track",n,p)}catch(e){}};
const norm=s=>s.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"");
const catName=id=>(CATS.find(c=>c[0]===id)||[,"Todos los productos"])[1];
let cart={},cat="",q="",sort="";
try{cart=JSON.parse(localStorage.getItem("melora-cart")||"{}")}catch(e){}
const save=()=>{try{localStorage.setItem("melora-cart",JSON.stringify(cart))}catch(e){}};
const byId=id=>PRODUCTOS.find(p=>p.id==id);
const lines=()=>Object.entries(cart).map(([id,n])=>({p:byId(id),n})).filter(l=>l.p);
const subtotal=()=>lines().reduce((s,l)=>s+l.p.precio*l.n,0);
const count=()=>lines().reduce((s,l)=>s+l.n,0);

document.querySelectorAll(".u,#umbral").forEach(e=>e.textContent=cop(ENVIO_GRATIS).replace(" COP",""));
$("promo").textContent="Envío gratis en compras mayores a "+cop(ENVIO_GRATIS).replace(" COP","")+" · Pedidos por WhatsApp";
$("fwa").href="https://wa.me/"+WHATSAPP+"?text="+encodeURIComponent("¡Hola MELORA! Quiero más información.");

/* ---- Navegación y catálogo ---- */
function nav(){
  $("nav").innerHTML=[["","Todo"],...CATS].map(([id,n])=>`<a href="#${id}" class="${id===cat?"on":""}">${n}</a>`).join("");
}
const tag=p=>p.estado==="pedido"?'<span class="tag p">Bajo pedido</span>':p.estado?'<span class="tag">Disponible</span>':"";
function card(p){
  const off=p.antes&&p.antes>p.precio;
  return `<article class="card"><button class="ph" data-v="${p.id}" aria-label="Ver ${p.nombre}">${tag(p)}<img src="${p.foto}" alt="${p.nombre}" loading="lazy"></button>
  <div class="in"><small>${catName(p.cat)}</small><h3>${p.nombre}</h3>
  <div class="price">${off?`<s>${cop(p.antes)}</s> `:""}${cop(p.precio)}${p.incluye?`<small>Precio por el kit de ${p.incluye.length} productos</small>`:""}</div>
  <button class="add" data-a="${p.id}">🛒 Agregar al carrito</button></div></article>`;
}
function render(){
  let L=PRODUCTOS.filter(p=>(!cat||p.cat===cat)&&(!q||norm(p.nombre+" "+p.desc+" "+catName(p.cat)).includes(q)));
  if(sort)L=[...L].sort((a,b)=>sort==="asc"?a.precio-b.precio:b.precio-a.precio);
  $("title").textContent=q?"Resultados de tu búsqueda":catName(cat);
  $("grid").innerHTML=L.map(card).join("");$("empty").hidden=L.length>0;nav();document.body.classList.toggle("home",!cat&&!q);
}
function route(){const h=location.hash.slice(1);cat=CATS.some(c=>c[0]===h)?h:"";render();if(h)$("title").scrollIntoView()}
addEventListener("hashchange",route);
$("q").oninput=e=>{q=norm(e.target.value.trim());render()};
$("sort").onchange=e=>{sort=e.target.value;render()};

/* ---- Producto (vista rápida) ---- */
function view(id){
  const p=byId(id),F=p.fotos||[p.foto];let n=1;track("ViewContent",{content_name:p.nombre,value:p.precio,currency:"COP"});
  $("pmBody").innerHTML=`<div class="pm"><div class="gal"><img id="gm" src="${F[0]}" alt="${p.nombre}">${F.length>1?`<div class="th">${F.map((f,k)=>`<button data-t="${k}" aria-label="Foto ${k+1}"><img src="${f}" alt=""></button>`).join("")}</div>`:""}</div><div><button class="x" data-x aria-label="Cerrar">✕</button>
  <small>${catName(p.cat)}</small>${p.estado?`<span class="tag s ${p.estado==="pedido"?"p":""}">${p.estado==="pedido"?"Bajo pedido":"Disponible"}</span>`:""}<h2>${p.nombre}</h2><p>${p.desc}</p>${p.estado==="pedido"?"<p><b>Bajo pedido:</b> lo pedimos para ti y confirmamos el tiempo de entrega por WhatsApp.</p>":""}${p.incluye?`<p><b>Incluye:</b></p><ul>${p.incluye.map(x=>`<li>${x}</li>`).join("")}</ul>`:""}<div class="price">${cop(p.precio)}${p.incluye?`<small>Precio por el kit completo</small>`:""}</div>
  <div class="q"><button data-m aria-label="Menos">−</button><b id="pq">1</b><button data-p aria-label="Más">+</button></div>
  <button class="btn" data-add>🛒 Agregar al carrito</button></div></div>`;
  const b=$("pmBody");
  b.onclick=e=>{const t=e.target;
    if(t.closest("[data-x]"))$("pm").close();const th=t.closest("[data-t]");if(th)$("gm").src=F[th.dataset.t];
    if(t.closest("[data-m]")&&n>1)$("pq").textContent=--n;
    if(t.closest("[data-p]"))$("pq").textContent=++n;
    if(t.closest("[data-add]")){add(p.id,n);$("pm").close();feedback()}};
  $("pm").showModal();
}
$("pm").addEventListener("click",e=>{if(e.target===$("pm"))$("pm").close()});
$("grid").onclick=e=>{const v=e.target.closest("[data-v]"),a=e.target.closest("[data-a]");
  if(v)view(v.dataset.v);if(a){add(a.dataset.a,1);feedback(a)}};

/* ---- Carrito ---- */
let first=true;
function feedback(b){const c=$("openCart");c.classList.remove("bump");void c.offsetWidth;c.classList.add("bump");
  if(b){b.dataset.t=b.dataset.t||b.innerHTML;b.classList.add("ok");b.textContent="✓ Agregado al carrito";setTimeout(()=>{b.classList.remove("ok");b.innerHTML=b.dataset.t},1500)}
  if(first){first=false;openCart()}}
const fab=()=>$("fab").classList.toggle("on",count()>0&&!$("drawer").classList.contains("on"));
function add(id,n){cart[id]=(cart[id]||0)+n;save();paint();const p=byId(id);track("AddToCart",{content_name:p.nombre,value:p.precio*n,currency:"COP"})}
function paint(){
  const s=subtotal(),free=s>ENVIO_GRATIS,L=lines();
  $("cnt").textContent=count();
  $("items").innerHTML=L.length?L.map(({p,n})=>`<div class="it"><img src="${p.foto}" alt=""><div><h4>${p.nombre}</h4><small>${cop(p.precio)}</small><br>
    <div class="q"><button data-d="${p.id}" aria-label="Menos">−</button><b>${n}</b><button data-i="${p.id}" aria-label="Más">+</button></div></div>
    <div><b>${cop(p.precio*n)}</b><br><button class="rm" data-r="${p.id}">Quitar</button></div></div>`).join("")
    :`<p class="empty">Tu carrito está vacío. Agrega productos para armar tu pedido.</p>`;
  const falta=ENVIO_GRATIS+1-s;
  $("ship").innerHTML=free?"<b>¡Tienes envío gratis!</b>":(s?`Te faltan <b>${cop(falta)}</b> para el envío gratis.`:`Envío gratis en compras mayores a ${cop(ENVIO_GRATIS)}.`)+`<i><b style="width:${Math.min(100,s/ENVIO_GRATIS*100)}%"></b></i>`;
  $("sub").textContent=cop(s);$("env").textContent=free?"Gratis":(s?"Se confirma por WhatsApp":"—");$("tot").textContent=cop(s);
  $("form").querySelector("button[type=submit]").disabled=!L.length;
  $("fabTxt").textContent=count()+(count()===1?" producto":" productos")+" · "+cop(s);fab();
}
$("items").onclick=e=>{const t=e.target,g=a=>t.closest("["+a+"]")?.getAttribute(a);
  const d=g("data-d"),i=g("data-i"),r=g("data-r");
  if(i)cart[i]++;if(d&&cart[d]>1)cart[d]--;if(r)delete cart[r];save();paint()};
const openCart=()=>{$("drawer").classList.add("on");$("drawer").setAttribute("aria-hidden","false");$("scrim").hidden=false;fab();track("InitiateCheckout")};
const closeCart=()=>{$("drawer").classList.remove("on");$("drawer").setAttribute("aria-hidden","true");$("scrim").hidden=true;fab()};
$("fabGo").onclick=openCart;
$("openCart").onclick=openCart;$("closeCart").onclick=closeCart;$("scrim").onclick=closeCart;
addEventListener("keydown",e=>{if(e.key==="Escape")closeCart()});

$("form").onsubmit=e=>{e.preventDefault();
  const s=subtotal(),free=s>ENVIO_GRATIS,v=id=>$(id).value.trim();
  const items=lines().map(({p,n})=>`• ${n} x ${p.nombre}${p.estado==="pedido"?" (bajo pedido)":""} — ${cop(p.precio*n)}`).join("\n");
  const t=`¡Hola MELORA! Quiero hacer este pedido:\n\n${items}\n\nSubtotal: ${cop(s)}\nEnvío: ${free?"Gratis":"por confirmar"}\nTotal: ${cop(s)}\n\nNombre: ${v("nom")}\nMunicipio: ${v("mun")}\nBarrio o vereda: ${v("bar")}\nDirección: ${v("dir")}`;
  track("Lead",{value:s,currency:"COP"});
  open("https://wa.me/"+WHATSAPP+"?text="+encodeURIComponent(t),"_blank","noopener");
};
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
paint();route();mark();play();

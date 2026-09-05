const CONFIG = {
  N8N_LEAD_WEBHOOK: "",
  N8N_ORDER_WEBHOOK: "",
  WHATSAPP_NUMBER: "5500000000000",
  CURRENCY: "BRL"
};

// Catálogo atual: imagens recebidas do usuário.
// Regra: ID, SKU e arquivo seguem o nicho + produto; nenhuma sigla aleatória de imagem é usada.
// PREÇOS: cost = custo atual do fornecedor no drop; price = preço final de venda exibido no site.
const products = [
  {
    "id": "audio-fone-headphone",
    "name": "Headphone Bluetooth Dobrável",
    "cat": "Fones e Áudio",
    "price": 179.9,
    "icon": "🎧",
    "badge": "FONES E ÁUDIO",
    "sku": "FONE-HEADPHONE-001",
    "brand": "Acessórios Smart",
    "connection": "",
    "length": "",
    "features": "Headphone Bluetooth com almofadas acolchoadas",
    "cost": 129.9,
    "stock": "Sob encomenda",
    "image": "assets/produtos/AUDIO-FONE-HEADPHONE-001.jpg"
  },
  {
    "id": "suportes-suporte-veicular",
    "name": "Suporte Veicular 360°",
    "cat": "Suportes Veiculares",
    "price": 99.9,
    "icon": "🚗",
    "badge": "SUPORTES VEICULARE",
    "sku": "SUPORTE-VEICULAR-001",
    "brand": "Acessórios Smart",
    "connection": "",
    "length": "",
    "features": "Suporte articulado para celular com base de fixação",
    "cost": 69.9,
    "stock": "Sob encomenda",
    "image": "assets/produtos/SUPORTE-SUPORTE-VEICULAR-001.jpg"
  },
  {
    "id": "audio-fone-i7",
    "name": "Fone Bluetooth i7S TWS",
    "cat": "Fones e Áudio",
    "price": 59.9,
    "icon": "🎧",
    "badge": "FONES E ÁUDIO",
    "sku": "FONE-I7S-001",
    "brand": "Acessórios Smart",
    "connection": "",
    "length": "",
    "features": "Fone sem fio com estojo de carregamento",
    "cost": 39.9,
    "stock": "Sob encomenda",
    "image": "assets/produtos/AUDIO-FONE-I7S-001.jpg"
  },
  {
    "id": "protecao-capa-chuva-sapato",
    "name": "Capa Impermeável para Sapatos",
    "cat": "Proteção e Vestuário",
    "price": 59.9,
    "icon": "🛡️",
    "badge": "PROTEÇÃO E VESTUÁR",
    "sku": "PROTECAO-SAPATO-001",
    "brand": "Acessórios Smart",
    "connection": "",
    "length": "",
    "features": "Proteção reutilizável contra água e sujeira",
    "cost": 39.9,
    "stock": "Sob encomenda",
    "image": "assets/produtos/PROTECAO-PROTECAO-SAPATO-001.jpg"
  },
  {
    "id": "protecao-sobrebota-impermeavel",
    "name": "Sobrebota Impermeável Reforçada",
    "cat": "Proteção e Vestuário",
    "price": 74.9,
    "icon": "🛡️",
    "badge": "PROTEÇÃO E VESTUÁR",
    "sku": "PROTECAO-SOBREBOTA-001",
    "brand": "Acessórios Smart",
    "connection": "",
    "length": "",
    "features": "Proteção impermeável de cano alto",
    "cost": 49.9,
    "stock": "Sob encomenda",
    "image": "assets/produtos/PROTECAO-PROTECAO-SOBREBOTA-001.jpg"
  },
  {
    "id": "limpeza-lavadora-portatil",
    "name": "Lavadora Portátil a Bateria",
    "cat": "Limpeza e Ferramentas",
    "price": 454.9,
    "icon": "💦",
    "badge": "LIMPEZA E FERRAMEN",
    "sku": "LIMPEZA-LAVADORA-001",
    "brand": "Acessórios Smart",
    "connection": "",
    "length": "",
    "features": "Kit de limpeza com mangueira, bateria e acessórios",
    "cost": 349.9,
    "stock": "Sob encomenda",
    "image": "assets/produtos/LIMPEZA-LIMPEZA-LAVADORA-001.jpg"
  },
  {
    "id": "seguranca-trava-disco",
    "name": "Trava de Disco com Alarme",
    "cat": "Segurança Veicular",
    "price": 129.9,
    "icon": "🔒",
    "badge": "SEGURANÇA VEICULAR",
    "sku": "SEGURANCA-TRAVA-DISCO-001",
    "brand": "Acessórios Smart",
    "connection": "",
    "length": "",
    "features": "Cadeado para moto com sistema de alarme",
    "cost": 89.9,
    "stock": "Sob encomenda",
    "image": "assets/produtos/SEGURANCA-SEGURANCA-TRAVA-DISCO-001.jpg"
  },
  {
    "id": "limpeza-aspirador-portatil",
    "name": "Mini Aspirador Portátil",
    "cat": "Limpeza e Casa",
    "price": 144.9,
    "icon": "🧹",
    "badge": "LIMPEZA E CASA",
    "sku": "LIMPEZA-ASPIRADOR-001",
    "brand": "Acessórios Smart",
    "connection": "",
    "length": "",
    "features": "Aspirador compacto para teclado, carro e cantos",
    "cost": 99.9,
    "stock": "Sob encomenda",
    "image": "assets/produtos/LIMPEZA-LIMPEZA-ASPIRADOR-001.jpg"
  },
  {
    "id": "limpeza-aspirador-2em1",
    "name": "Aspirador Portátil 2 em 1",
    "cat": "Limpeza e Casa",
    "price": 164.9,
    "icon": "🧹",
    "badge": "LIMPEZA E CASA",
    "sku": "LIMPEZA-ASPIRADOR-002",
    "brand": "Acessórios Smart",
    "connection": "",
    "length": "",
    "features": "Aspirador compacto com bocais para diferentes superfícies",
    "cost": 119.9,
    "stock": "Sob encomenda",
    "image": "assets/produtos/LIMPEZA-LIMPEZA-ASPIRADOR-002.jpg"
  },
  {
    "id": "protecao-luvas",
    "name": "Luvas Antiderrapantes",
    "cat": "Proteção e Vestuário",
    "price": 54.9,
    "icon": "🧤",
    "badge": "PROTEÇÃO E VESTUÁR",
    "sku": "PROTECAO-LUVAS-001",
    "brand": "Acessórios Smart",
    "connection": "",
    "length": "",
    "features": "Luvas para proteção e atividades do dia a dia",
    "cost": 34.9,
    "stock": "Sob encomenda",
    "image": "assets/produtos/PROTECAO-PROTECAO-LUVAS-001.jpg"
  },
  {
    "id": "limpeza-pistola-limpeza",
    "name": "Pistola de Limpeza Portátil",
    "cat": "Limpeza e Ferramentas",
    "price": 219.9,
    "icon": "💦",
    "badge": "LIMPEZA E FERRAMEN",
    "sku": "LIMPEZA-PISTOLA-001",
    "brand": "Acessórios Smart",
    "connection": "",
    "length": "",
    "features": "Kit para limpeza e lavagem de superfícies e veículos",
    "cost": 159.9,
    "stock": "Sob encomenda",
    "image": "assets/produtos/LIMPEZA-LIMPEZA-PISTOLA-001.jpg"
  },
  {
    "id": "suportes-organizador-adesivo",
    "name": "Organizador Adesivo Multifuncional",
    "cat": "Acessórios para Casa",
    "price": 44.9,
    "icon": "📌",
    "badge": "ACESSÓRIOS PARA CA",
    "sku": "CASA-ORGANIZADOR-001",
    "brand": "Acessórios Smart",
    "connection": "",
    "length": "",
    "features": "Suporte adesivo compacto para pequenos objetos",
    "cost": 29.9,
    "stock": "Sob encomenda",
    "image": "assets/produtos/ACESSORIO-CASA-ORGANIZADOR-001.jpg"
  },
  {
    "id": "lazer-luminaria-led",
    "name": "Luminária LED Decorativa",
    "cat": "Lazer e Iluminação",
    "price": 114.9,
    "icon": "💡",
    "badge": "LAZER E ILUMINAÇÃO",
    "sku": "LAZER-LUMINARIA-001",
    "brand": "Acessórios Smart",
    "connection": "",
    "length": "",
    "features": "Luz ambiente para quarto, festas e decoração",
    "cost": 79.9,
    "stock": "Sob encomenda",
    "image": "assets/produtos/LED-LAZER-LUMINARIA-001.jpg"
  },
  {
    "id": "cabos-cabo-usbc-branco",
    "name": "Cabo USB-C Branco",
    "cat": "Cabos e Conectividade",
    "price": 34.9,
    "icon": "🔌",
    "badge": "CABOS E CONECTIVID",
    "sku": "CABO-USBC-001",
    "brand": "Acessórios Smart",
    "connection": "",
    "length": "",
    "features": "Cabo para carregamento e transferência de dados",
    "cost": 19.9,
    "stock": "Sob encomenda",
    "image": "assets/produtos/CABO-CABO-USBC-001.jpg"
  },
  {
    "id": "cabos-cabo-usb-1m",
    "name": "Cabo USB 1 Metro",
    "cat": "Cabos e Conectividade",
    "price": 24.9,
    "icon": "🔌",
    "badge": "CABOS E CONECTIVID",
    "sku": "CABO-USB-001",
    "brand": "Acessórios Smart",
    "connection": "",
    "length": "",
    "features": "Cabo para recarga e conexão de dispositivos",
    "cost": 14.9,
    "stock": "Sob encomenda",
    "image": "assets/produtos/CABO-CABO-USB-001.jpg"
  },
  {
    "id": "carregadores-carregador-3a",
    "name": "Carregador USB 3.1A",
    "cat": "Carregadores",
    "price": 44.9,
    "icon": "⚡",
    "badge": "CARREGADORES",
    "sku": "CARREGADOR-USB-001",
    "brand": "Acessórios Smart",
    "connection": "",
    "length": "",
    "features": "Fonte para carregamento rápido de dispositivos",
    "cost": 29.9,
    "stock": "Sob encomenda",
    "image": "assets/produtos/CARREGADOR-CARREGADOR-USB-001.jpg"
  },
  {
    "id": "cabos-cabo-usb-micro",
    "name": "Cabo USB para Micro USB",
    "cat": "Cabos e Conectividade",
    "price": 24.9,
    "icon": "🔌",
    "badge": "CABOS E CONECTIVID",
    "sku": "CABO-MICRO-USB-001",
    "brand": "Acessórios Smart",
    "connection": "",
    "length": "",
    "features": "Cabo de dados e carregamento",
    "cost": 14.9,
    "stock": "Sob encomenda",
    "image": "assets/produtos/CABO-CABO-MICRO-USB-001.jpg"
  },
  {
    "id": "acessorios-smartwatch",
    "name": "Smartwatch com Funções de Saúde",
    "cat": "Acessórios Inteligentes",
    "price": 144.9,
    "icon": "⌚",
    "badge": "ACESSÓRIOS INTELIG",
    "sku": "SMARTWATCH-001",
    "brand": "Acessórios Smart",
    "connection": "",
    "length": "",
    "features": "Relógio inteligente com recursos de acompanhamento",
    "cost": 99.9,
    "stock": "Sob encomenda",
    "image": "assets/produtos/ACESSORIO-SMARTWATCH-001.jpg"
  },
  {
    "id": "carregadores-kit-carregadores",
    "name": "Kit de Carregadores USB",
    "cat": "Carregadores",
    "price": 59.9,
    "icon": "⚡",
    "badge": "CARREGADORES",
    "sku": "CARREGADOR-KIT-001",
    "brand": "Acessórios Smart",
    "connection": "",
    "length": "",
    "features": "Modelos variados para diferentes dispositivos",
    "cost": 39.9,
    "stock": "Sob encomenda",
    "image": "assets/produtos/CARREGADOR-CARREGADOR-KIT-001.jpg"
  },
  {
    "id": "audio-caixa-led",
    "name": "Caixa de Som Bluetooth LED",
    "cat": "Caixas de Som",
    "price": 129.9,
    "icon": "🔊",
    "badge": "CAIXAS DE SOM",
    "sku": "CAIXA-SOM-LED-001",
    "brand": "Acessórios Smart",
    "connection": "",
    "length": "",
    "features": "Caixa portátil com iluminação e som ambiente",
    "cost": 89.9,
    "stock": "Sob encomenda",
    "image": "assets/produtos/PRODUTO-CAIXA-SOM-LED-001.jpg"
  },
  {
    "id": "audio-caixa-portatil",
    "name": "Caixa de Som Portátil",
    "cat": "Caixas de Som",
    "price": 99.9,
    "icon": "🔊",
    "badge": "CAIXAS DE SOM",
    "sku": "CAIXA-SOM-PORTATIL-001",
    "brand": "Acessórios Smart",
    "connection": "",
    "length": "",
    "features": "Caixa Bluetooth compacta para uso diário",
    "cost": 69.9,
    "stock": "Sob encomenda",
    "image": "assets/produtos/PRODUTO-CAIXA-SOM-PORTATIL-001.jpg"
  },
  {
    "id": "audio-caixa-cilindrica",
    "name": "Caixa de Som Bluetooth Cilíndrica",
    "cat": "Caixas de Som",
    "price": 114.9,
    "icon": "🔊",
    "badge": "CAIXAS DE SOM",
    "sku": "CAIXA-SOM-CILINDRICA-001",
    "brand": "Acessórios Smart",
    "connection": "",
    "length": "",
    "features": "Modelo portátil com design cilíndrico",
    "cost": 79.9,
    "stock": "Sob encomenda",
    "image": "assets/produtos/PRODUTO-CAIXA-SOM-CILINDRICA-001.jpg"
  },
  {
    "id": "audio-caixa-mini",
    "name": "Mini Caixa de Som Bluetooth",
    "cat": "Caixas de Som",
    "price": 74.9,
    "icon": "🔊",
    "badge": "CAIXAS DE SOM",
    "sku": "CAIXA-SOM-MINI-001",
    "brand": "Acessórios Smart",
    "connection": "",
    "length": "",
    "features": "Caixa compacta disponível em várias cores",
    "cost": 49.9,
    "stock": "Sob encomenda",
    "image": "assets/produtos/PRODUTO-CAIXA-SOM-MINI-001.jpg"
  },
  {
    "id": "audio-caixa-tws",
    "name": "Caixa de Som Bluetooth TWS",
    "cat": "Caixas de Som",
    "price": 149.9,
    "icon": "🔊",
    "badge": "CAIXAS DE SOM",
    "sku": "CAIXA-SOM-TWS-001",
    "brand": "Acessórios Smart",
    "connection": "",
    "length": "",
    "features": "Caixa portátil com conexão sem fio",
    "cost": 109.9,
    "stock": "Sob encomenda",
    "image": "assets/produtos/PRODUTO-CAIXA-SOM-TWS-001.jpg"
  },
  {
    "id": "audio-caixa-colorida",
    "name": "Caixa de Som Bluetooth Colorida",
    "cat": "Caixas de Som",
    "price": 129.9,
    "icon": "🔊",
    "badge": "CAIXAS DE SOM",
    "sku": "CAIXA-SOM-COLORIDA-001",
    "brand": "Acessórios Smart",
    "connection": "",
    "length": "",
    "features": "Caixa portátil com iluminação decorativa",
    "cost": 89.9,
    "stock": "Sob encomenda",
    "image": "assets/produtos/PRODUTO-CAIXA-SOM-COLORIDA-001.jpg"
  },
  {
    "id": "audio-fone-preto",
    "name": "Fone Bluetooth Preto TWS",
    "cat": "Fones e Áudio",
    "price": 114.9,
    "icon": "🎧",
    "badge": "FONES E ÁUDIO",
    "sku": "FONE-TWS-PRETO-001",
    "brand": "Acessórios Smart",
    "connection": "",
    "length": "",
    "features": "Fones sem fio com estojo de carregamento",
    "cost": 79.9,
    "stock": "Sob encomenda",
    "image": "assets/produtos/AUDIO-FONE-TWS-PRETO-001.jpg"
  },
  {
    "id": "audio-fone-i12",
    "name": "Fone Bluetooth i12",
    "cat": "Fones e Áudio",
    "price": 74.9,
    "icon": "🎧",
    "badge": "FONES E ÁUDIO",
    "sku": "FONE-I12-001",
    "brand": "Acessórios Smart",
    "connection": "",
    "length": "",
    "features": "Fone sem fio com estojo de carregamento",
    "cost": 49.9,
    "stock": "Sob encomenda",
    "image": "assets/produtos/AUDIO-FONE-I12-001.jpg"
  }
];

const cart = JSON.parse(localStorage.getItem("smart_cart") || "[]");
const money = value => new Intl.NumberFormat("pt-BR",{style:"currency",currency:CONFIG.CURRENCY}).format(value);
const toast = msg => {
  const el=document.getElementById("toast");
  if(!el) return;
  el.textContent=msg;
  el.classList.add("show");
  setTimeout(()=>el.classList.remove("show"),2600);
};

function renderProducts(list=products){
  const grid=document.getElementById("productGrid");
  if(!grid) return;

  grid.innerHTML=list.map(p=>{
    const details = [
      p.sku ? `SKU: ${p.sku}` : "",
      p.connection || "",
      p.length && p.length !== "—" ? p.length : "",
      p.power || "",
      p.features || ""
    ].filter(Boolean).join(" • ");

    return `
      <article class="product" data-product-id="${p.id}">
        <div class="product-media">
          <span class="badge">${p.badge}</span>
          <img src="${p.image}" alt="${p.name}" loading="eager" onerror="this.style.display='none'; this.nextElementSibling.style.display='inline'">
          <span class="fallback-icon" style="display:none">${p.icon}</span>
        </div>
        <div class="product-info">
          <h3>${p.name}</h3>
          ${details ? `<div class="reviews">${details}</div>` : ""}
          <div class="price">${money(p.price)}</div>
          <div class="pix">Condição especial no PIX</div>
          <button class="add" onclick="addToCart('${p.id}')">ADICIONAR AO CARRINHO</button>
        </div>
      </article>`;
  }).join("");

  const results=document.getElementById("resultsText");
  if(results) results.textContent=`${list.length} produtos`;
}

function renderBest(){
  const best=document.getElementById("bestGrid");
  if(!best) return;

  best.innerHTML=products.slice(0,6).map(p=>`
    <div class="mini">
      <div class="mini-img">
        <img class="product-image" src="${p.image}" alt="${p.name}" loading="eager" data-image="${p.image}" data-name="${p.name}" onerror="this.closest('.mini-img').classList.add('image-error')">
      </div>
      <div>
        <h3>${p.name}</h3>
        <strong>${money(p.price)}</strong>
      </div>
    </div>`).join("");
}

function openImage(src,name){
  const modal=document.getElementById("imageModal");
  const img=document.getElementById("imageModalImg");
  const title=document.getElementById("imageModalTitle");
  if(!modal||!img) return;
  img.src=src; img.alt=name||"Imagem do produto";
  if(title) title.textContent=name||"Imagem do produto";
  modal.classList.add("open");
}
function closeImage(){ document.getElementById("imageModal")?.classList.remove("open"); }
document.addEventListener("click",e=>{
  const img=e.target.closest(".product-image");
  if(img) openImage(img.dataset.image||img.src,img.dataset.name||img.alt);
  if(e.target.matches("[data-image-close]")) closeImage();
});

function addToCart(id){
  const p=products.find(x=>x.id===id);
  if(!p) return;

  const item=cart.find(x=>x.id===id);
  if(item) item.qty++;
  else cart.push({id,qty:1});

  saveCart();
  toast(`${p.name} adicionado ao carrinho.`);
}

function saveCart(){
  localStorage.setItem("smart_cart",JSON.stringify(cart));
  updateCart();
initRegionalFreightSmart();
}

function updateCart(){
  const count=cart.reduce((s,x)=>s+x.qty,0);
  const countEl=document.getElementById("cartCount");
  if(countEl) countEl.textContent=count;

  const itemsEl=document.getElementById("cartItems");
  if(itemsEl){
    itemsEl.innerHTML=cart.length ? cart.map(x=>{
      const p=products.find(y=>y.id===x.id);
      if(!p) return "";
      return `
        <div class="cart-row">
          <span>${p.name} × ${x.qty}</span>
          <strong>${money(p.price*x.qty)}</strong>
        </div>`;
    }).join("") : "<p>Seu carrinho está vazio.</p>";
  }

  const total=cart.reduce((s,x)=>{
    const p=products.find(y=>y.id===x.id);
    return s + (p ? p.price*x.qty : 0);
  },0);

  const totalEl=document.getElementById("cartTotal");
  if(totalEl) totalEl.textContent=money(total);
}

function filterProducts(cat){
  if(cat==="todos"){
    renderProducts();
    return;
  }
  renderProducts(products.filter(p=>p.cat===cat));
  document.getElementById("produtos")?.scrollIntoView({behavior:"smooth"});
}

function search(){
  const input=document.getElementById("searchInput");
  const q=(input?.value || "").toLowerCase().trim();

  const list=q ? products.filter(p=>
    (p.name+" "+p.cat+" "+p.sku+" "+p.connection+" "+p.brand).toLowerCase().includes(q)
  ) : products;

  renderProducts(list);
  document.getElementById("produtos")?.scrollIntoView({behavior:"smooth"});
}

async function sendToN8N(url,payload){
  if(!url) return {ok:false,skipped:true};
  try{
    const r=await fetch(url,{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify(payload)
    });
    return {ok:r.ok};
  }catch(e){
    return {ok:false,error:e.message};
  }
}

document.querySelectorAll("[data-filter]").forEach(b=>
  b.addEventListener("click",()=>filterProducts(b.dataset.filter))
);

document.getElementById("searchBtn")?.addEventListener("click",search);

document.getElementById("searchInput")?.addEventListener("keydown",e=>{
  if(e.key==="Enter") search();
});

document.getElementById("cartBtn")?.addEventListener("click",()=>{
  updateCart();
  document.getElementById("cartModal")?.classList.add("open");
});

document.querySelector("[data-close]")?.addEventListener("click",()=>
  document.getElementById("cartModal")?.classList.remove("open")
);

document.getElementById("checkoutBtn")?.addEventListener("click",async()=>{
  if(!cart.length){
    toast("Seu carrinho está vazio.");
    return;
  }

  const payload={
    event:"checkout_started",
    cart,
    products:cart.map(x=>{
      const p=products.find(y=>y.id===x.id);
      return p ? {
        id:p.id, sku:p.sku, name:p.name, price:p.price, qty:x.qty
      } : null;
    }).filter(Boolean),
    total:cart.reduce((s,x)=>{
      const p=products.find(y=>y.id===x.id);
      return s+(p?p.price*x.qty:0);
    },0),
    created_at:new Date().toISOString()
  };

  const result=await sendToN8N(CONFIG.N8N_ORDER_WEBHOOK,payload);
  toast(result.ok
    ? "Checkout enviado para o sistema."
    : "Checkout preparado. O n8n será conectado na próxima etapa.");
});

document.getElementById("trackingForm")?.addEventListener("submit",e=>{
  e.preventDefault();
  const code=document.getElementById("trackingInput")?.value.trim();
  const result=document.getElementById("trackingResult");
  if(result) result.textContent=`Consulta recebida para ${code}.`;
});

document.getElementById("leadForm")?.addEventListener("submit",async e=>{
  e.preventDefault();

  const payload={
    event:"lead_created",
    name:document.getElementById("leadName")?.value || "",
    phone:document.getElementById("leadPhone")?.value || "",
    source:"site",
    created_at:new Date().toISOString()
  };

  const result=await sendToN8N(CONFIG.N8N_LEAD_WEBHOOK,payload);

  toast(result.ok
    ? "Cadastro enviado com sucesso!"
    : "Cadastro salvo localmente. O n8n será conectado na próxima etapa.");

  localStorage.setItem("last_lead",JSON.stringify(payload));
  e.target.reset();
});

document.getElementById("mobileMenu")?.addEventListener("click",()=>
  document.getElementById("nav")?.classList.toggle("open")
);

document.getElementById("accountBtn")?.addEventListener("click",()=>
  toast("Área do cliente preparada para integração.")
);

function initRegionalFreightSmart(){
  const select=document.getElementById("freteRegional");
  const value=document.getElementById("freteRegionalValor");
  if(!select||!value) return;
  const rates={CE:9.90,NE:14.90,SE:18.90,CO:21.90,S:21.90,N:24.90};
  const update=()=>{ const r=rates[select.value] ?? 14.90; value.textContent=`R$ ${r.toFixed(2).replace('.',',')}`; };
  select.addEventListener('change',update); update();
}

renderProducts();
renderBest();
updateCart();


// Limpar todo o carrinho sem alterar o restante da interface
document.getElementById("clearCartBtn")?.addEventListener("click",()=>{
  if(!cart.length){ toast("Seu carrinho já está vazio."); return; }
  cart=[];
  try{ localStorage.setItem("acessorios_smart_cart", JSON.stringify(cart)); }catch(e){}
  updateCart();
  toast("Carrinho limpo. Você pode escolher novamente.");
});

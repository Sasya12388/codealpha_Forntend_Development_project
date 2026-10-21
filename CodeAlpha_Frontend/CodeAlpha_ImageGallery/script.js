const photos=[
 {title:"Misty mountain morning",category:"nature",url:"https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1000&q=85"},
 {title:"A quiet forest trail",category:"nature",url:"https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1000&q=85"},
 {title:"Golden desert dunes",category:"nature",url:"https://images.unsplash.com/photo-1509316785289-025f5b846b35?auto=format&fit=crop&w=1000&q=85"},
 {title:"City lights after dark",category:"city",url:"https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&w=1000&q=85"},
 {title:"Old streets, new stories",category:"city",url:"https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&w=1000&q=85"},
 {title:"Architecture in the sun",category:"city",url:"https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=1000&q=85"},
 {title:"Ocean blues",category:"ocean",url:"https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=1000&q=85"},
 {title:"Waves at the shoreline",category:"ocean",url:"https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&w=1000&q=85"},
 {title:"A peaceful coastal view",category:"ocean",url:"https://images.unsplash.com/photo-1473116763249-2faaef81ccda?auto=format&fit=crop&w=1000&q=85"}
];
const gallery=document.querySelector("#gallery"),box=document.querySelector("#lightbox"),large=document.querySelector("#lightbox-image"),caption=document.querySelector("#caption"),counter=document.querySelector("#counter");
let filtered=photos.slice(),current=0;
function render(){gallery.innerHTML="";filtered.forEach((p,i)=>{const card=document.createElement("button");card.className="photo";card.type="button";card.setAttribute("aria-label",`View ${p.title}`);card.innerHTML=`<img src="${p.url}" alt="${p.title}" loading="lazy"><span class="photo-label">${p.title}</span>`;card.addEventListener("click",()=>openViewer(i));gallery.append(card);});}
function openViewer(i){current=i;updateViewer();box.hidden=false;document.body.style.overflow="hidden";document.querySelector("#close").focus();}
function updateViewer(){const p=filtered[current];large.src=p.url;large.alt=p.title;caption.textContent=p.title;counter.textContent=`${current+1} / ${filtered.length}`;}
function closeViewer(){box.hidden=true;document.body.style.overflow="";}
function move(n){current=(current+n+filtered.length)%filtered.length;updateViewer();}
document.querySelectorAll(".filter").forEach(btn=>btn.addEventListener("click",()=>{document.querySelector(".filter.active").classList.remove("active");btn.classList.add("active");filtered=btn.dataset.filter==="all"?photos.slice():photos.filter(p=>p.category===btn.dataset.filter);render();}));
document.querySelector("#close").addEventListener("click",closeViewer);document.querySelector("#prev").addEventListener("click",()=>move(-1));document.querySelector("#next").addEventListener("click",()=>move(1));
box.addEventListener("click",e=>{if(e.target===box)closeViewer();});document.addEventListener("keydown",e=>{if(box.hidden)return;if(e.key==="Escape")closeViewer();if(e.key==="ArrowLeft")move(-1);if(e.key==="ArrowRight")move(1);});
render();
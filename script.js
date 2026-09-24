const $=s=>document.querySelector(s), $$=s=>[...document.querySelectorAll(s)];
const nav=$("#nav"), menu=$(".menuBtn");
menu.onclick=()=>{nav.classList.toggle("open");menu.setAttribute("aria-expanded",nav.classList.contains("open"))}
$$("#nav a").forEach(a=>a.onclick=()=>nav.classList.remove("open"));

const slides=$$(".slide"), dots=$("#dots"); let current=0, timer;
slides.forEach((_,i)=>{let b=document.createElement("button");b.setAttribute("aria-label","Go to slide "+(i+1));b.onclick=()=>go(i);dots.appendChild(b)});
function go(i){slides[current].classList.remove("active");dots.children[current].classList.remove("active");current=(i+slides.length)%slides.length;slides[current].classList.add("active");dots.children[current].classList.add("active");reset()}
function reset(){clearInterval(timer);timer=setInterval(()=>go(current+1),5500)}
$("#prev").onclick=()=>go(current-1);$("#next").onclick=()=>go(current+1);dots.children[0].classList.add("active");reset();

const modal=$("#memberModal");
$("#openMember").onclick=()=>{modal.classList.add("show");modal.setAttribute("aria-hidden","false");renderMember()}
$("#closeMember").onclick=()=>{modal.classList.remove("show");modal.setAttribute("aria-hidden","true")}
modal.onclick=e=>{if(e.target===modal)$("#closeMember").click()}
function renderMember(){const m=JSON.parse(localStorage.getItem("suDemoMember")||"null");$("#memberStatus").innerHTML=m?`<div class="memberOk">Demo member active: <b>${m.name}</b></div>`:""}
$("#memberForm").onsubmit=e=>{e.preventDefault();let m={name:$("#memberName").value,email:$("#memberEmail").value};localStorage.setItem("suDemoMember",JSON.stringify(m));renderMember();toast("Demo membership created on this device.")}

function toast(t){let el=$("#toast");el.textContent=t;el.classList.add("show");setTimeout(()=>el.classList.remove("show"),2600)}
$$(".temp").forEach(b=>b.onclick=()=>toast("Stage 1 demo: this page will be connected in a later stage."));
$$(".protected").forEach(b=>b.onclick=()=>{let m=localStorage.getItem("suDemoMember");m?toast("Member recognized. Protected feature coming in Stage 2."):$("#openMember").click()});
$("#contactForm").onsubmit=e=>{e.preventDefault();e.target.reset();toast("Demo message received locally — no message was sent.")};
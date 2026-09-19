const body=document.body;
const toggle=document.getElementById("themeToggle");
const saved=localStorage.getItem("cc-theme");
if(saved==="light"){body.classList.add("light");toggle.textContent="🌙 Dunkel";}
toggle.addEventListener("click",()=>{body.classList.toggle("light");const light=body.classList.contains("light");localStorage.setItem("cc-theme",light?"light":"dark");toggle.textContent=light?"🌙 Dunkel":"☀️ Hell";});

const search=document.getElementById("search");
const filters=document.querySelectorAll(".filter");
const cards=document.querySelectorAll(".card");
const noResults=document.getElementById("noResults");
let active="all";
function update(){
  const q=search.value.toLowerCase().trim();
  let count=0;
  cards.forEach(card=>{
    const matchesFilter=active==="all"||card.dataset.category===active;
    const matchesSearch=!q||card.dataset.search.includes(q)||card.textContent.toLowerCase().includes(q);
    const show=matchesFilter&&matchesSearch;
    card.classList.toggle("hidden",!show);
    if(show) count++;
  });
  noResults.classList.toggle("hidden",count!==0);
}
search.addEventListener("input",update);
filters.forEach(btn=>btn.addEventListener("click",()=>{filters.forEach(x=>x.classList.remove("active"));btn.classList.add("active");active=btn.dataset.filter;update();}));

let presses=0;
const title=document.getElementById("secretTitle");
title.addEventListener("click",()=>{
  presses++;
  if(presses===10){
    document.getElementById("secretArea").classList.remove("hidden");
    document.getElementById("secretArea").scrollIntoView({behavior:"smooth"});
    try{new Audio("data:audio/wav;base64,UklGRiQAAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQAAAAA=").play()}catch(e){}
  }
});
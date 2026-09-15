const nav=document.getElementById("nav");
window.addEventListener("scroll",()=>nav.classList.toggle("scrolled",window.scrollY>40));
const toggle=document.querySelector(".menu-toggle"), links=document.querySelector(".links");
toggle.addEventListener("click",()=>links.classList.toggle("open"));
links.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>links.classList.remove("open")));
const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add("show")}),{threshold:.14});
document.querySelectorAll(".reveal").forEach(el=>observer.observe(el));
document.getElementById("year").textContent=new Date().getFullYear();

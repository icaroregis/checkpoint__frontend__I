let show = true;

const home = document.querySelector(".home");  
const button__hamburguer = document.querySelector(".button__hamburguer");


button__hamburguer.addEventListener("click", () => {
  document.body.style.overflow = show ? "hidden" : "initial";
  home.classList.toggle("on", show); 
  show = !show;    
}) 
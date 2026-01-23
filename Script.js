const nav = document.getElementById("nav");
const ham = document.getElementById("hamburger");

ham.addEventListener("click", ()=> {
  nav.classList.toggle("show");
});

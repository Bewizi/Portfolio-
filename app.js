const nav = document.querySelector("nav");
const openNav = document.querySelector(".menu");
const closeNav = document.querySelector(".close");

openNav.addEventListener("click", () => {
  openNav.style.display = "none";
  closeNav.style.display = "block";
  nav.style.display = "block";
});
closeNav.addEventListener("click", () => {
  openNav.style.display = "block";
  closeNav.style.display = "none";
  nav.style.display = "none";
});

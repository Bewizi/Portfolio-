const nav = document.querySelector("nav");
const openNav = document.querySelector(".menu");
const closeNav = document.querySelector(".close");

// this is a click funtion for opennav and closenav
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

// when the list are clicked the nav should hide

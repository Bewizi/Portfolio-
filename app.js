const nav = document.querySelector("nav");
const openNav = document.querySelector(".menu");
const closeNav = document.querySelector(".close");
const links = document.querySelector(".links");
const listOfLInks = document.querySelectorAll(".list-links");

// this is a click funtion for opennav and closenav
openNav.addEventListener("click", () => {
  openNav.style.display = "none";
  closeNav.style.display = "block";
  nav.style.display = "block";

  // when links are clicked the menubar hides
  if (listOfLInks) {
    listOfLInks.forEach((link) => {
      link.addEventListener("click", () => {
        nav.style.display = "none";
        openNav.style.display = "block";
        closeNav.style.display = "none";
      });
    });
  }
});
closeNav.addEventListener("click", () => {
  openNav.style.display = "block";
  closeNav.style.display = "none";
  nav.style.display = "none";
});

// when the list are clicked the nav should hide
window.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    const nav = document.querySelector("nav");
    if (nav) {
      nav.style.display = "none";
    }
  }
});

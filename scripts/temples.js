const menuButton = document.querySelector("#menu");
const header = document.querySelector(".site-header");

function closeMenu() {
  menuButton.classList.remove("open");
  header.classList.remove("menu-open");
}

menuButton.addEventListener("click", () => {
  menuButton.classList.toggle("open");
  header.classList.toggle("menu-open");
});

window.addEventListener("resize", () => {
  if (window.innerWidth >= 801) {
    closeMenu();
  }
});
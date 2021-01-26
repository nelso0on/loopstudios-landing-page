const openBtn = document.querySelector(".menu-open");
const closeBtn = document.querySelector(".menu-close");
const menu = document.querySelector(".mobile-nav");

function openMenu() {
  menu.classList.add("active");
}

function closeMenu() {
  menu.classList.remove("active");
}

openBtn.addEventListener("click", openMenu);
closeBtn.addEventListener("click", closeMenu);

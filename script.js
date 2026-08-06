/* =========================================================
   VELUM — Interacciones accesibles y ligeras
   ========================================================= */

document.documentElement.classList.remove("no-js");
document.documentElement.classList.add("js");

const menuButton = document.querySelector(".nav-toggle");
const menu = document.querySelector(".site-nav");
const menuLinks = menu ? menu.querySelectorAll("a") : [];
const yearElement = document.querySelector("#current-year");

function closeMenu() {
  if (!menuButton || !menu) return;

  menuButton.setAttribute("aria-expanded", "false");
  menuButton.setAttribute("aria-label", "Abrir menú de navegación");
  menu.classList.remove("is-open");
  document.body.classList.remove("menu-open");
}

if (menuButton && menu) {
  menuButton.addEventListener("click", () => {
    const isOpen = menuButton.getAttribute("aria-expanded") === "true";

    menuButton.setAttribute("aria-expanded", String(!isOpen));
    menuButton.setAttribute(
      "aria-label",
      isOpen ? "Abrir menú de navegación" : "Cerrar menú de navegación"
    );
    menu.classList.toggle("is-open", !isOpen);
    document.body.classList.toggle("menu-open", !isOpen);
  });

  menuLinks.forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeMenu();
      menuButton.focus();
    }
  });

  window.addEventListener("resize", () => {
    if (window.matchMedia("(min-width: 48rem)").matches) {
      closeMenu();
    }
  });
}

if (yearElement) {
  yearElement.textContent = String(new Date().getFullYear());
}

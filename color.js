const menu = document.getElementById("mobile-menu");
const menuLinks = document.querySelector(".navbar__menu");

menu.addEventListener("click", () => {
    menu.classList.toggle("is-active");
    menuLinks.classList.toggle("active");
});

const navLinks = document.querySelectorAll("navbar__links");
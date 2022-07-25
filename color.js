const menu = document.getElementById("mobile-menu");
const menuLinks = document.querySelector(".navbar__menu");

menu.addEventListener("click", () => {
    menu.classList.toggle("is-active");
    menuLinks.classList.toggle("active");
});

const hideMobileMenu = () => {
    const hamburgerMenu = document.querySelector(".is-active");
    if (window.innerWidth <= 768 && hamburgerMenu) {
        menu.classList.toggle("is-active");
        menuLinks.classList.remove("active");
    }
};

const navbarLogo = document.getElementById("navbar__logo");

menuLinks.addEventListener("click", hideMobileMenu);
navbarLogo.addEventListener("click", hideMobileMenu);
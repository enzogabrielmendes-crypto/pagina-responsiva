const menuToggle = document.getElementById("menuToggle");
const menu = document.getElementById("menu");
const menuLinks = document.querySelectorAll(".menu a");
const year = document.getElementById("year");

// Abre e fecha o menu mobile
menuToggle.addEventListener("click", () => {
    menu.classList.toggle("active");

    const isOpen = menu.classList.contains("active");

    menuToggle.setAttribute("aria-label", isOpen
        ? "Fechar menu"
        : "Abrir menu"
    );

    menuToggle.textContent = isOpen ? "✕" : "☰";
});

// Fecha o menu ao clicar em um link
menuLinks.forEach((link) => {
    link.addEventListener("click", () => {
        menu.classList.remove("active");

        menuToggle.textContent = "☰";
        menuToggle.setAttribute("aria-label", "Abrir menu");
    });
});

// Fecha o menu quando a tela volta para desktop
window.addEventListener("resize", () => {
    if (window.innerWidth > 800) {
        menu.classList.remove("active");
        menuToggle.textContent = "☰";
        menuToggle.setAttribute("aria-label", "Abrir menu");
    }
});

// Ano automático no rodapé
year.textContent = new Date().getFullYear();


document.addEventListener("DOMContentLoaded", () => {
    const menu = document.getElementById("menu");
    const menuIcon = document.querySelector(".menu-icon");

    // Alternar el menú al hacer clic en el icono
    menuIcon.addEventListener("click", (event) => {
        event.stopPropagation(); // Evita que el clic en el icono cierre el menú
        menu.classList.toggle("active");
    });

    // Cierra el menú al hacer clic fuera de él
    document.addEventListener("click", (event) => {
        if (menu.classList.contains("active") && !menu.contains(event.target)) {
            menu.classList.remove("active");
        }
    });
});

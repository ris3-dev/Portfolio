function toggleMenu() {
    const menu=document.querySelector(".menu-links");
    const icon=document.querySelector(".mobile-icon");
    if (menu && icon){
        menu.classList.toggle("open");
        icon.classList.toggle("open");
    }
}
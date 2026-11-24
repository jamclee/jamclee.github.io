// Toggles the mobile navigation menu (same behavior as portfolio-2021).
const navLinks = document.querySelector(".nav_links");
const hamburger = document.querySelector(".hamburger");

hamburger.addEventListener("click", () => {
    const open = navLinks.classList.toggle("fadein");
    hamburger.classList.toggle("open", open);
    hamburger.setAttribute("aria-expanded", String(open));
});

document.getElementById("year").textContent = new Date().getFullYear();

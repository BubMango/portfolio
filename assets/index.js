// Theme Toggle
document.addEventListener("DOMContentLoaded", () => {
    const toggleBtn = document.getElementById("toggle-theme");
    const body = document.body;

    toggleBtn.addEventListener("click", () => {
        body.classList.toggle("dark-theme");
    });
});

// SWITCH THEME
document.addEventListener("DOMContentLoaded", () => {
    const toggleBtn = document.getElementById("toggle-theme");
    const body = document.body;

    toggleBtn.addEventListener("click", () => {
        body.classList.toggle("dark-theme");
    });
});

// NAV BARS
document.addEventListener("DOMContentLoaded", function() {
    const tabs = document.querySelectorAll(".nav-tabs button");

    tabs.forEach(tab => {
        tab.addEventListener("click", () => {
            tabs.forEach(btn => btn.classList.remove("active"));

            tab.classList.add("active");

            const target = document.getElementById(tab.dataset.target);
            target.scrollIntoView({ behavior: "smooth" });
        });
    });
});

// ACHIEVEMENTS
document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll('.achievement h4, .project h4').forEach(title => {
        title.addEventListener('click', () => {
            const details = title.nextElementSibling;
            if (details) details.classList.toggle('show');
        });
    });
});





// Add event listener to nav links
document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll("nav a");

    navLinks.forEach((link) => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const targetId = link.getAttribute("href");
            const targetSection = document.querySelector(targetId);
            targetSection.scrollIntoView({ behavior: "smooth" });
        });
    });
});

// Add event listener to social media links
const socialLinks = document.querySelectorAll(".social-links a");

socialLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
        e.preventDefault();
        const targetUrl = link.getAttribute("href");
        window.open(targetUrl, "_blank");
    });
});

// Add animation to skills section
const skillsSection = document.querySelector("#about");
const skillsList = document.querySelector("#about ul");

skillsSection.addEventListener("scroll", () => {
    if (window.scrollY > skillsSection.offsetTop - window.innerHeight / 2) {
        skillsList.classList.add("animate__animated", "animate__fadeInUp");
    }
});
// Active link highlighting on scroll
const sections = document.querySelectorAll("section, header");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 150) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach((link) => {
        link.classList.remove("active");
        if (link.getAttribute("href").includes(current)) {
            link.style.color = "var(--accent-color)";
        } else {
            link.style.color = "var(--text-light)";
        }
    });
});

// Animate Skill Bars when scrolling into view
const skillFills = document.querySelectorAll(".skill-fill");

const animateSkills = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const skillBar = entry.target;
            const targetWidth = skillBar.getAttribute("data-width");
            skillBar.style.width = targetWidth;
            observer.unobserve(skillBar); // Only animate once
        }
    });
};

const skillObserver = new IntersectionObserver(animateSkills, {
    root: null,
    threshold: 0.5
});

skillFills.forEach(fill => {
    skillObserver.observe(fill);
});
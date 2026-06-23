// =============================
// MOBILE MENU TOGGLE
// =============================
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("show");
});


// =============================
// SCROLL REVEAL ANIMATION
// =============================
const reveals = document.querySelectorAll(".reveal");

function revealElements() {

    reveals.forEach((element) => {

        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const revealPoint = 100;

        if (elementTop < windowHeight - revealPoint) {
            element.classList.add("active");
        }

    });

}

window.addEventListener("scroll", revealElements);
revealElements();


// =============================
// NAVBAR BACKGROUND ON SCROLL
// =============================
const header = document.getElementById("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.style.background = "rgba(5,11,24,0.95)";
        header.style.boxShadow = "0 5px 25px rgba(125,211,252,0.15)";

    } else {

        header.style.background = "rgba(0,0,0,0.35)";
        header.style.boxShadow = "none";

    }

});


// =============================
// ACTIVE NAV LINK
// =============================
const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach((section) => {

        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.clientHeight;

        if (scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navItems.forEach((link) => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }

    });

});


// =============================
// TYPING EFFECT
// =============================
const textElement = document.querySelector(".hero-tag");

const words = [
    "SOFTWARE DEVELOPER",
    "WEB DESIGNER",
    "FRONTEND DEVELOPER",
    "PROBLEM SOLVER"
];

let wordIndex = 0;

function changeText() {

    textElement.style.opacity = 0;

    setTimeout(() => {

        textElement.textContent = words[wordIndex];

        textElement.style.opacity = 1;

        wordIndex++;

        if (wordIndex >= words.length) {
            wordIndex = 0;
        }

    }, 300);

}

setInterval(changeText, 2500);


// =============================
// SMOOTH BUTTON HOVER EFFECT
// =============================
const buttons = document.querySelectorAll(".btn");

buttons.forEach((btn) => {

    btn.addEventListener("mouseenter", () => {
        btn.style.transform = "translateY(-5px)";
    });

    btn.addEventListener("mouseleave", () => {
        btn.style.transform = "translateY(0)";
    });

});


// =============================
// FLOATING IMAGE EFFECT
// =============================
const image = document.querySelector(".image-wrapper");

if (image) {

    let position = 0;
    let direction = 1;

    setInterval(() => {

        position += direction * 0.5;

        if (position > 12) direction = -1;
        if (position < -12) direction = 1;

        image.style.transform = `translateY(${position}px)`;

    }, 30);

}
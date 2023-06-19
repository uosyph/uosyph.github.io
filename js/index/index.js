import { TextScrambler } from '../utils/scrambler.js';

// Scrambles and rotates through an array of phrases at a set interval
// using the TextScrambler class and random delay times.
function scrambleText() {
    const phrase = 'Full-Stack Developer';

    const el = document.querySelector('.text');
    const fx = new TextScrambler(el);

    let counter = 0;
    let isHovering = false;
    const scramble = () => {
        const randomTimeout = Math.floor(Math.random() * 7000) + 3000;
        console.log(randomTimeout);
        fx.setText(phrase).then(() => {
            if (isHovering) {
                setTimeout(scramble, 1000);
            } else {
                setTimeout(scramble, randomTimeout);
            }
        });
        counter = (counter + 1) % 1;
    };
    scramble();

    el.addEventListener('mouseenter', () => {
        isHovering = true;
        scramble();
    });
    el.addEventListener('mouseleave', () => {
        isHovering = false;
    });
}

// Smooth scrolling to all anchor tags with an href starting with '#'.
function scrollTo() {
    const anchors = document.querySelectorAll('a[href^="#"]');
    anchors.forEach(anchor => {
        anchor.addEventListener('click', function (event) {
            event.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            target.scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
}

// Checks if an element is visible, and toggles a class on another element accordingly.
function observeTargets() {
    const ids = ['about', 'skills', 'projects', 'contact'];
    const observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            const id = entry.target.id;
            const element = document.getElementById('nav-el-' + id);
            if (entry.intersectionRatio > 0.5) {
                element.classList.add('active-nav-el');
            } else {
                element.classList.remove('active-nav-el');
            }
        });
    });

    ids.forEach(function (id) {
        const targetElement = document.getElementById(id);
        if (targetElement) {
            observer.observe(targetElement);
        }
    });
}

// Adds a pulse animation to the contact info when a button is clicked.
function handleAnimation() {
    const reachBtn = document.getElementById("reach-link");
    const contactInfo = document.getElementById("contact-info");

    function handleAnimationEnd() {
        contactInfo.classList.remove("pulse");
        contactInfo.removeEventListener("animationend", handleAnimationEnd);
    }

    reachBtn.addEventListener("click", () => {
        if (window.innerWidth < 1050) {
            setTimeout(() => {
                contactInfo.classList.add("pulse");
                contactInfo.addEventListener("animationend", handleAnimationEnd);
            }, 500);
        } else {
            contactInfo.classList.add("pulse");
            contactInfo.addEventListener("animationend", handleAnimationEnd);
        }
    });
}

// Calls the functions
scrambleText();
scrollTo();
handleAnimation();
observeTargets();
window.addEventListener('scroll', observeTargets);
window.addEventListener('resize', observeTargets);

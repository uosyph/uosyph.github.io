import { TextScramble } from '../utils/title.js';

const phrases = [
    'Full-Stack Developer'
];

const el = document.querySelector('.text');
const fx = new TextScramble(el);

let counter = 0;
const next = () => {
    // generating number in (x-y range) to reapet the animation
    function generateRandomIntegerInRange(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    let rndmNum = generateRandomIntegerInRange(8000, 16000);

    fx.setText(phrases[counter]).then(() => {
        // frequency
        setTimeout(next, rndmNum);
    });
    counter = (counter + 1) % phrases.length;
};

function isVisible(id) {
    const targetElement = document.getElementById(id);
    if (targetElement) {
        const element = document.getElementById('nav-el-' + id);
        const observer = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.intersectionRatio > 0.5) {
                    element.classList.add('active-nav-el');
                } else {
                    element.classList.remove('active-nav-el');
                }
            });
        });
        observer.observe(targetElement);
    }
}

function checkTargets() {
    const ids = ['about', 'skills', 'projects', 'contact'];
    ids.forEach(function (id) {
        isVisible(id);
    });
}

next();
checkTargets();
window.addEventListener('scroll', checkTargets);
window.addEventListener('resize', checkTargets);

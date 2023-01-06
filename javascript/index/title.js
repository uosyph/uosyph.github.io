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

next();

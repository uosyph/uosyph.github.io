import { TextScramble } from '../utils/title.js'

let phrases = [];

switch (Math.floor(Math.random() * (4 - 0 + 1)) + 0) {
    case 0:
        phrases = [
            'What are you looking for?',
            'There is nothing to see here.',
            'If you haven\'t found it yet,',
            'Just keep looking.',
        ]
        break;
    case 1:
        phrases = [
            'Houston, We have a problem!',
        ]
        break;
    case 2:
        phrases = [
            '( ಠ_ಠ)',
            '(ʘ_ʘ)',
            'σ_σ',
            'Σ(ﾟДﾟ )',
            'ヽ(ｏ`皿′ｏ)ﾉ',
            '（ つ Д ｀）',
            '(ΘεΘ;)',
            '¯\\(º o)/¯',
        ]
        break;
    case 3:
        phrases = [
            '....-',
            '-----',
            '....-',
        ]
        break;
    case 4:
        phrases = [
            '-.',
            '---',
            '-',
            '.......',
            '..-.',
            '---',
            '..-',
            '-.',
            '-..',
        ]
        break;
}

const el = document.querySelector('.text')
const fx = new TextScramble(el)

let counter = 0
const next = () => {
    // generating number in (x-y range) to reapet the animation
    function generateRandomIntegerInRange(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    let rndmNum = generateRandomIntegerInRange(100, 3000);

    fx.setText(phrases[counter]).then(() => {
        // frequency
        setTimeout(next, rndmNum)
    })
    counter = (counter + 1) % phrases.length
}

next()

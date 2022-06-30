
class TextScramble {
constructor(el) {
    this.el = el
    this.chars = '`¡™£¢∞§¶•ªº–≠åß∂ƒ©∆˚¬…æ≈ç√∫˜µ≤≥÷/?░▒▓<>/' // '!<>-_\\/[]{}—=+*^?#________'
    this.update = this.update.bind(this)
}
setText(newText) {
    const oldText = this.el.innerText
    const length = Math.max(oldText.length, newText.length)
    const promise = new Promise((resolve) => this.resolve = resolve)
    this.queue = []
    for (let i = 0; i < length; i++) {
    const from = oldText[i] || ''
    const to = newText[i] || ''
    const start = Math.floor(Math.random() * 40)
    const end = start + Math.floor(Math.random() * 40)
    this.queue.push({ from, to, start, end })
    }
    cancelAnimationFrame(this.frameRequest)
    this.frame = 0
    this.update()
    return promise
}
update() {
    let output = ''
    let complete = 0
    for (let i = 0, n = this.queue.length; i < n; i++) {
    let { from, to, start, end, char } = this.queue[i]
    if (this.frame >= end) {
        complete++
        output += to
    } else if (this.frame >= start) {
        if (!char || Math.random() < 0.28) {
        char = this.randomChar()
        this.queue[i].char = char
        }
        output += `<span class="dud">${char}</span>`
    } else {
        output += from
    }
    }
    this.el.innerHTML = output
    if (complete === this.queue.length) {
    this.resolve()
    } else {
    this.frameRequest = requestAnimationFrame(this.update)
    this.frame++
    }
}
randomChar() {
    return this.chars[Math.floor(Math.random() * this.chars.length)]
    }
}


const phrases = [
    'Houston, we have a problem!'
    // 'you haven't found it yet!',
    // 'just keep looking :]'
]

const el = document.querySelector('.text')
const fx = new TextScramble(el)

let counter = 0
const next = () => {

// generating number in (x-y range) to reapet the animation
    function generateRandomIntegerInRange(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    let rndmNum = generateRandomIntegerInRange(100, 4000);

    fx.setText(phrases[counter]).then(() => {
        setTimeout(next, rndmNum)     // frequency
    })
counter = (counter + 1) % phrases.length

}

next()
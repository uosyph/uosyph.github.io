const colors = ['#2a5a58b2', '#6a1b9ab2', '#33c1ffb2', '#36c95eb2', '#c9367db2', '#5c962fb2'];

function setRandomAccentColor() {
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.documentElement.style.setProperty('--accent-color', randomColor);
}

document.addEventListener('DOMContentLoaded', setRandomAccentColor);

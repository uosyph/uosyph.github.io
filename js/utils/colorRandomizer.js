const colors = [
    '#ffaeb9b2',
    '#ffb796b2',
    '#ffd17ab2',
    '#e2f099b2',
    '#9eeeb0b2',
    '#9be6dbb2',
    '#9cdbf7b2',
    '#a3c3fbb2',
    '#c2b6fdb2',
    '#e5b3fbb2',
    '#f7b0ecd2',
    '#ffc29cb2',
    '#ebefa2b2',
    '#b4f0caf2',
    '#b1dbfbb2',
];

function setRandomAccentColor() {
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.documentElement.style.setProperty('--accent-color', randomColor);
}

document.addEventListener('DOMContentLoaded', setRandomAccentColor);

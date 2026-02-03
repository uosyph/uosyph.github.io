const colors = [
    '#6366f1b2',
    '#06b6d4b2',
    '#10b981b2',
    '#f59e0bb2',
    '#ef4444b2',
    '#8b5cf6b2',
    '#ec4899b2',
    '#3b82f6b2',
    '#14b8a6b2',
    '#f97316b2' 
];

function setRandomAccentColor() {
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.documentElement.style.setProperty('--accent-color', randomColor);
}

document.addEventListener('DOMContentLoaded', setRandomAccentColor);

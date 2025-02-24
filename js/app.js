
// Define UI Variables
const stop = document.querySelector('.stop');
const play = document.querySelector('.play');
const ffw = document.querySelector('.ffw');

const spinnerArc = document.querySelector('.spinner-segment');

let Speed = getComputedStyle(document.documentElement).getPropertyValue('--spinner-duration');

const stop2 = 5;
// Add Event Listeners
stop.addEventListener('click', stopAnimation);
play.addEventListener('click', playAnimation)
ffw.addEventListener('click', ffwAnimation);

// Create Functions
function stopAnimation() {
    spinnerArc.classList.remove('rotate-switch');

}

function playAnimation() {
    spinnerArc.classList.add('rotate-switch');
}

function ffwAnimation() {
    setSpeed();
}

function setSpeed() {
    document.documentElement.style.setProperty('--spinner-duration', '0.1s');
}

// TEST SPACE
// console.log(stop2);
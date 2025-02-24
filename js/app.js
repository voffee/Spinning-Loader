
// Define UI Variables
const stop = document.querySelector('.stop');
const play = document.querySelector('.play');
const ffw = document.querySelector('.ffw');

const spinnerArc = document.querySelector('.spinner-segment');

const stop2 = 5;
// Add Event Listeners
stop.addEventListener('click', stopAnimation);
play.addEventListener('click', playAnimation)
// ffw.addEventListener('click', ffwAnimation);

// Create Functions
function stopAnimation() {
    spinnerArc.classList.remove('rotate-switch');
}

function playAnimation() {
    spinnerArc.classList.add('rotate-switch');
}

// TEST SPACE
console.log(stop2);
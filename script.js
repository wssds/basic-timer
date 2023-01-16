let text = ['Start', 'Stop'];

const START_BUTTON = text[0];
const STOP_BUTTON = text[1];
const test = '';

let showTime = document.querySelector('#showTimeContent');

let wrapper = document.getElementById('wrapper');

text.forEach((content) => {
    let button = document.createElement('button');
    button.textContent = content;
    wrapper.appendChild(button);

    button.textContent === START_BUTTON ? button.setAttribute('id', 'startbutton') 
        : button.setAttribute('id', 'stopbutton');
});

let startButton = document.querySelector('#startbutton');
let stopButton = document.querySelector('#stopbutton');

let interval;

startButton.addEventListener('click', startInterval);

function startTimer() {
    const date = new Date();
    showTime.innerHTML = date.toLocaleTimeString();
}

function startInterval() {
    interval = setInterval(() => startTimer(), 1000);
}

function stopTimer() {
    clearInterval(interval);
}

stopButton.addEventListener('click', stopTimer);

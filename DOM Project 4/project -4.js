const startStopBtn = document.querySelector('.startStopBtn');

const resetBtn = document.querySelector('.resetBtn');

// const displayTimer = document.getElementsByClassName('timer');

// leading time values
let seconds = 0;
let minutes = 0;
let hours = 0;

// leading time zero
let leadingSeconds = 0;
let leadingMinutes = 0;
let leadinghours = 0;

// Variables for set interval & timerstatus

let timerInterval = null;
let timerStatus = 'stopped';

function stopWatch() {
  seconds++;
  if (seconds / 60 === 1) {
    seconds = 0;
    minutes++;

    if (minutes / 60 === 1) {
      minutes = 0;
      hours++;
    }
  }

  if (seconds < 10) {
    leadingSeconds = '0' + seconds.toString();
  } else {
    leadingSeconds = seconds;
  }

  if (minutes < 10) {
    leadingMinutes = '0' + minutes.toString();
  } else {
    leadingMinutes = minutes;
  }

  if (hours < 10) {
    leadinghours = '0' + hours.toString();
  } else {
    leadinghours = hours;
  }

  let displayTimer = document.querySelector('.timer');

  displayTimer.innerText =
    leadinghours + ':' + leadingMinutes + ':' + leadingSeconds;
}

// window.setInterval(stopWatch, 1000);

startStopBtn.addEventListener('click', () => {
  if (timerStatus === 'stopped') {
    timerInterval = window.setInterval(stopWatch, 1000);
    startStopBtn.innerHTML = `<button>Stoped</button>`;
    timerStatus = 'started';
  } else {
    window.clearInterval(timerInterval);
    startStopBtn.innerHTML = `<button>Play</button>`;
    timerStatus = 'stopped';
  }
});

resetBtn.addEventListener('click', () => {
  window.clearInterval(timerInterval);
  seconds = 0;
  minutes = 0;
  hours = 0;

  document.querySelector('.timer').innerHTML = '00:00:00';
});

const startBtn = document.querySelector('.start');
const pauseBtn = document.querySelector('.pause');
const restartBtn = document.querySelector('.restart');
const timerClock = document.querySelector('#timerClock');
let seconds = 0;
let timer;

// Start button
startBtn.addEventListener('click', (e) => {
  e.preventDefault();

  timer = setInterval(() => {
    seconds++;
    timerClock.innerHTML = setStartTime(seconds);
  }, 1000);
  timerClock.classList.remove('stop')
});

//Pause button
pauseBtn.addEventListener('click', (e) => {
  e.preventDefault();

  clearInterval(timer)
  timerClock.classList.add('stop')
});

//Restart button
restartBtn.addEventListener('click', (e) => {
  e.preventDefault();

  clearInterval(timer);
  seconds = 0;
  timerClock.innerHTML = '00:00:00'
});

function setStartTime(seconds) {
  const date = new Date(seconds * 1000);
  return date.toLocaleTimeString('pt-br', { hour12: false, timeZone: 'GMT' });
}

(() => {
  const timerClock = document.querySelector('#timerClock');
  let timer;
  let seconds = 0;

  document.addEventListener('click', (e) => {
    const element = e.target;

    if (element.classList.contains('start')) {
      timerClock.classList.remove('stop');
      timer = setInterval(() => {
        seconds++;
        timerClock.innerHTML = setStartTime(seconds);
      }, 1000);
    }

    if (element.classList.contains('pause')) {
      clearInterval(timer);

      timerClock.classList.add('stop');
    }

    if (element.classList.contains('restart')) {
      clearInterval(timer);
      timerClock.innerHTML = '00:00:00';
      timerClock.classList.remove('stop');
      seconds = 0;
    }
  });

  function setStartTime(seconds) {
    const date = new Date(seconds * 1000); // * 1000 to transform ms to s
    return date.toLocaleTimeString('pt-br', { hour12: false, timeZone: 'GMT' });
  }
})();

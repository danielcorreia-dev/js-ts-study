function Calculator() {
  const display = document.querySelector('.input-num');

  this.start = () => {
    buttonsPress();
    keyPress();
  };

  function buttonsPress() {
    document.addEventListener('click', (e) => {
      const el = e.target;

      if (el.classList.contains('btn-num')) {
        btnToDisplay(el.innerText);
      }

      if (el.classList.contains('btn-clear')) {
        clearDisplay();
      }

      if (el.classList.contains('btn-del')) {
        eraseDisplay();
      }

      if (el.classList.contains('btn-eq')) {
        makeCalculus();
      }
    });
  }

  function btnToDisplay(text) {
    display.value += text;
  }

  function keyPress() {
    display.addEventListener('keyup', (e) => {

      if (e.keyCode === 13) {
        makeCalculus();
        display.setSelectionRange(0);
        display.focus();
      }
    });
  }

  function makeCalculus() {
    let account = display.value;

    try {
      account = eval(account);

      if (!account) {
        alert('Invalid Calculus');
        return;
      }

      display.value = account;
    } catch (error) {
      alert('Invalid Account');
      throw error;
    }
  }

  function clearDisplay() {
    display.value = '';
  }

  this.eraseDisplay = () => {
    display.value = display.value.slice(0, -1);
  }
}

const calculator = new Calculator();
calculator.start();
calculator.eraseDisplay();

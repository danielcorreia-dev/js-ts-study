function factorCalculator() {
  return {
    display: document.querySelector('.input-num'),

    start() {
      this.buttonsPress();
      this.keyPress();
    },

    buttonsPress() {
      document.addEventListener('click', (e) => {
        const el = e.target;

        if (el.classList.contains('btn-num')) {
          this.btnToDisplay(el.innerText);
        }

        if (el.classList.contains('btn-clear')) {
          this.clearDisplay();
        }

        if (el.classList.contains('btn-del')) {
          this.eraseDisplay();
        }

        if (el.classList.contains('btn-eq')) {
          this.makeCalculus();
        }
      });
    },

    keyPress() {
      this.display.addEventListener('keyup', (e) => {
        if (e.keyCode === 13 ) {
          this.makeCalculus();
          this.display.setSelectionRange(0);
          this.display.focus();
        }
      })
    },

    btnToDisplay(text) {
      this.display.value += text;
    },

    clearDisplay() {
      this.display.value = '';
    },

    eraseDisplay() {
      this.display.value = this.display.value.slice(0, -1);
    },

    makeCalculus() {
      let calculate = this.display.value;

      try {
        calculate = eval(calculate);

        if (!calculate) {
          alert('Invalid calcule');
          return;
        }

        this.display.value = String(calculate);
      } catch (error) {
        alert('Invalid Calculus');
        throw error
      }
    },
  };
}

const calculator = factorCalculator();
calculator.start();

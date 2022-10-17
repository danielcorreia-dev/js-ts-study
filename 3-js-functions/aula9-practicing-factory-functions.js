function factorCalculator() {
  return {
    display: document.querySelectorAll('.input-num'),

    startCalculator() {
      alert('Calculator starting');
    },

    gettingNumbers() {
      document.addEventListener('click', (e) => {
        const el = e.target;

        if(el.classList.contains('btn-num')) {
          this.btnToDisplay();
        }
      }).bind(this);
    },

    btnToDisplay() {
    },
  };
}

const calculator = factorCalculator();
calculator.startCalculator();
document.querySelector
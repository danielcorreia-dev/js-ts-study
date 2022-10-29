// 705.484.450-52 070.987.720-03
class ValidateCPF {
  constructor(cpf) {
    Object.defineProperty(this, 'cleanCPF', {
      get: function () {
        return cpf.replace(/\D+/g, '');
      },
    });
  }

  isSequence() {
    return this.cleanCPF[0].repeat(11) === this.cleanCPF;
  }

  createsNewCPF() {
    const parcialCPF = this.cleanCPF.slice(0, -2);
    const digit1 = this.createDigit(parcialCPF);
    const digit2 = this.createDigit(parcialCPF + digit1);

    return parcialCPF + digit1 + digit2;
  }

  validate() {
    if (typeof this.cleanCPF === 'undefined') return false;
    if (this.cleanCPF.length !== 11) return false;
    if (this.isSequence()) return false;

    const newCPF = this.createsNewCPF();

    return newCPF === this.cleanCPF;
  }

  createDigit(parcialCPF) {
    const arrayCPF = Array.from(parcialCPF);
    let counter = arrayCPF.length + 1;

    const total = arrayCPF.reduce((acum, value) => {
      acum += counter * Number(value);
      counter--;
      return acum;
    }, 0);

    const digit = 11 - (total % 11);
    return digit >= 9 ? '0' : String(digit);
  }
}


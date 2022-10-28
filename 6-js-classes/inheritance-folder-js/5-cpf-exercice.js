// 705.484.450-52 070.987.720-03
const cpf = '705.484.450-52';

class validateCPF {
  constructor(cpf) {
    Object.defineProperty(this, 'cleanCPF', {
      get: function () {
        return cpf.replace(/\D+/g, '');
      },
    });
  }

  validate() {
    if (typeof this.cleanCPF === 'undefined') return false;
    if (this.cleanCPF.length !== 11) return false;
    if (this.sequencial()) return false;

    const parcialCPF = this.cleanCPF.slice(0, -2);
    const digit1 = this.createDigit(parcialCPF);
    const digit2 = this.createDigit(parcialCPF + digit1);

    const newCPF = parcialCPF + digit1 + digit2;
    return newCPF === this.cleanCPF;
  }

  
}

const cpf1 = new validateCPF(cpf);
console.log(cpf1.cleanCPF);

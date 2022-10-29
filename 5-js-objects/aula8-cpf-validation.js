// 705.484.450-52 070.987.720-03
/**
 * 10 9  8  7  6  5  4  3  2
 * 7x 0x 5x 4x 8x 4x 4x 5x 0x
 * 70 0  40 28 48 20 16 15 0
 *
 * 7x 0x 5x 4x 8x 4x 4x 5x 0x 5x
 * 11 10 9  8  7  6  5  4  3  2
 * 77 0  45 32 56 24 20 20 0  10
 *
 * 11 - 237 % 11 = 5 (First Digit)
 * 11 - 284 % 11 = 5 (First Digit)
 */

const cpf = '120.009.614-28';

function ValidateCPF(cpfSend) {
  Object.defineProperty(this, 'cleanCPF', {
    get: function () {
      return cpfSend.replace(/\D+/g, '');
    },
  });
}

ValidateCPF.prototype.validate = function () {
  if (typeof this.cleanCPF === 'undefined') return false;
  if (this.cleanCPF.length !== 11) return false;
  if (this.sequencial()) return false;

  const parcialCPF = this.cleanCPF.slice(0, -2);
  const digit1 = this.createDigit(parcialCPF);
  const digit2 = this.createDigit(parcialCPF + digit1);

  const newCPF = parcialCPF + digit1 + digit2;
  return newCPF === this.cleanCPF;
};

ValidateCPF.prototype.createDigit = function (parcialCPF) {
  const arrayCPF = Array.from(parcialCPF);
  let counter = arrayCPF.length + 1;

  const total = arrayCPF.reduce((acum, value) => {
    acum += counter * Number(value);
    counter--;
    return acum;
  }, 0);

  const digit = 11 - (total % 11);
  return digit > 9 ? '0' : String(digit);
};

ValidateCPF.prototype.sequencial = function () {
  const sequence = this.cleanCPF[0].repeat(this.cleanCPF.length);
  console.log(sequence);
  return sequence === this.cleanCPF;
};

cpf1 = new ValidateCPF('070.987.720-03');
console.log(cpf1.cleanCPF);
console.log(cpf1.validate());

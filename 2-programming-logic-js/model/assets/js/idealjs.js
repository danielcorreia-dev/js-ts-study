const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const heightInput = e.target.querySelector('#height');
  const weightInput = e.target.querySelector('#weight');

  const height = Number(heightInput.value);
  const weight = Number(weightInput.value);

  if (!height) {
    setResult('Invalid number', false);
    return;
  }

  if (!weight) {
    setResult('Invalid number', false);
    return;
  }

  const imc = getImc(height, weight);
  const levelImc = getLevelImc(imc);

  const msg = `Your IMC is ${imc} (${levelImc})`;

  setResult(msg, true);
});

function getLevelImc(imc) {
  const level = [
    'Below weight',
    'Normal weight',
    'Overweight',
    'Obesity level I',
    'Obesity level II',
    'Obesity level III',
  ];

  if (imc >= 39.9) return level[5];
  if (imc >= 34.9) return level[4];
  if (imc >= 29.9) return level[3];
  if (imc >= 24.9) return level[2];
  if (imc >= 18.5) return level[1];
  if (imc < 18.5) return level[0];
}

function setResult(msg, isValid) {
  const resultado = document.querySelector('.result');
  resultado.innerHTML = '';

  const p = createParagraph();

  if (isValid) p.classList.add('on');
  else p.classList.add('off');

  resultado.appendChild(p);
  p.innerHTML = msg;
}

function createParagraph() {
  const p = document.createElement('p');
  return p;
}

function getImc(height, weight) {
  const imc = weight / height ** 2;
  return imc.toFixed(2);
}

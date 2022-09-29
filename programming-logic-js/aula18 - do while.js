let controlV = 1;

while (controlV <= 10) {
  console.log(controlV);
  controlV++;
}

function randomNum(min, max) {
  const r = Math.random() * (max - min) + min;
  return Math.floor(r);
}

const min = 1;
const max = 50;
let random = randomNum(min, max);

while (random !== 10) {
  random = randomNum(min, max);
  console.log(random);
}

random = 10;

do {
  // He will only check the condition at the end. Always doing the command once before every check of condition.
  random = randomNum(min, max);
  console.log(random);
} while (random !== 10);

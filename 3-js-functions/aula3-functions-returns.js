// return
// returns a value
// ends the function

function sum(a, b) {
  // It's returning a value
  return a + b;
}
sum(4, 10);

function sum2(a, b) {
  // It's only showing what is asked to do
  console.log(a + b);
}
sum2(10, 4);

function createPerson(name, lastName) {
  const person = {
    name,
    lastName,
  };

  return person;
}

const daniel = createPerson('Daniel', 'Correia');
console.log(daniel);

function speakSentence(start) {
  function speakEnd(end) {
    return `${start} ${end}`;
  }
  return speakEnd;
}

const helloWorld = speakSentence('Hello');
console.log(helloWorld('World!'));

// Closure function
function multiply(multiplier) {
  return function (number) {
    return number * multiplier;
  };
}

const duplicate = multiply(2);
const triplicate = multiply(3);
const quadriplicate = multiply(4);

console.log(duplicate(2));
console.log(triplicate(2));
console.log(quadriplicate(2));

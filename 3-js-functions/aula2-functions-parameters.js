// Arrow functions doesn't have arguments

// JS doesn't care if you call a function without paramater with arguments, it'll run the same way
//(only works with function) But the values passed are stored in arguments, where the JS keeps all the data passed in form of object
// You can call them as an array, which means that they are iterable.

function funcao() {
  console.log('im working');
}
funcao('valor');

function funcaoArgs() {
  console.log(arguments);
  console.log(arguments[10]);
}

funcaoArgs('Data', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

// This is powerful when you don't have a specific number of args passed
// Look at this example below, as a sum of all numbers;

function SumAll(a, b, c) {
  // You can set parameters even with arguments
  let total = 0;
  for (let argument of arguments) {
    total += argument;
  }
  console.log(total, a, b, c);
}
SumAll(1, 2, 3, 4, 5, 6, 7);

function lowNumArgs(a, b, c, d, e, f) {
  console.log(a, b, c, d, e, f);
}

// The function doesn't break with extra arguments
lowNumArgs(1, 2, 3, 4, 5, 6, 'extra');

// And with lower arguments than expected, the function creates the variables as set them as undefined
lowNumArgs(1, 2, 3);
//
// You can set default values to the parameters of a function
function defaultValue(a, b = 2, c = 4) {
  // b = b || 2 --> old method
  console.log(a + b + c);
}
// The only way to access the default value directly is passing undefined as an argument
defaultValue(3, undefined, 4);

function destructringAssignObjects({ name, middleName, age }) {
  console.log(name, middleName, age);
}

let obj = { name: 'Daniel', middleName: 'Correia', age: 18 };

// It work in both ways
destructringAssignObjects({ name: 'Daniel', middleName: 'Correia', age: 18 });
destructringAssignObjects(obj);

function destructringAssignArrays([x, y, z]) {
  console.log(x, y, z);
}

array = [10, 20, 30];

console.log('\n');

// It work in both ways aswell
destructringAssignArrays(['Daniel', 'Estevao', 'Correia']);
destructringAssignArrays(array);

function calculus(operator, acumulator, ...numbers) {
  // The rest operator will get all the arguments after established and transform in an array
  for (let number of numbers) {
    if(operator === '+') acumulator += number;
    if(operator === '-') acumulator -= number;
    if(operator === '*') acumulator *= number;
    if(operator === '/') acumulator /= number;
  }
  console.log(acumulator);
}
calculus('*', 1, 20, 30, 40, 50);

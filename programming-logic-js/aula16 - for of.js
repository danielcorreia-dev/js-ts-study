// Arrays
// Getting each value of indexes of the array

const nome = 'Daniel Correia';
const names = ['Luiz', 'Daniel', 'Brunna', 'Clara'];

for (i = 0; i < nome.length; i++) {
  // Classical for, generates a value an then use it in a loop.
  console.log(nome[i]);
}

for (letters in nome) {
  // Runs all the array/ string getting the index.
  console.log(nome[letters]);
}

for (value of names) {
  // Access the index's value directly || *You don't get the index, just the value.
  console.log(value);
}

console.log('\n###\n'); // Separator

names.forEach((value, index, array) => {
  // function to run each element inside the array
  // if you want, you can use only element(value, index, array) to return.

  console.log(value, index, array);
});

console.log('\n###\n'); // Separator

// Objects

const person = {
  name: 'Daniel',
  sex: 'M',
  age: 19,
};

for (let attributes in person) {
  // It will get the keys of the object
  console.log(attributes, person[attributes]);
}

// for (let attributes of person) { // It's no iterable
//   console.log(attributes)
// }

/** Resume of for uses
 *
 * Classical For - Usually with iterables (array, strings);
 * For In - Return the index or key (string, arrays and objects);
 * For of - Return the value itself (iterables, arrays and strings);
 *
 */

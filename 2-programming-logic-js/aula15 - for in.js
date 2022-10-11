const fruits = ['banana', 'apple', 'pineapple', 'orange'];
const person = {
  name: 'Daniel',
  age: 18,
  sex: 'male',
};

// for (i = 0; i < frutas.length; i++) { // Classic for loop
//   console.log(frutas[i]);
// }

for (let fruit in fruits) {
  // He reads the indexes of the arrays or the object's keys
  console.log(fruit);
}

for (let keys in person) {
  // Get the object's keys
  console.log(keys);
}

for (let characteristcs in person) {
  // Acessing the keys values using string template
  console.log(person[`${characteristcs}`]);
}

for (let characteristcs in person) {
  // Acessing directly the value without the template string
  console.log(characteristcs, person[characteristcs]);
}

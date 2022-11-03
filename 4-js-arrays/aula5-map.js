// Map is always going to have the same size of the original array

const numbers = [5, 50, 80, 1, 2, 3, 5, 8, 11, 15, 22, 27];
const numbersDoubled = numbers.map((numbers) => numbers * 2);
console.log(numbersDoubled);

// To each element
// Return only a string with the name of the person
// Remove the key 'name' of the object
// Add an ID key to each object
const persons = [
  { name: 'Luiz', age: 18 },
  { name: 'Maria', age: 42 },
  { name: 'Anabella', age: 55 },
  { name: 'Rosana', age: 32 },
  { name: 'Mario', age: 62 },
];

const stringName = persons.map((obj) => obj.name);
console.log(stringName);
const rmKeyName = persons.map((obj) => delete obj.age);
console.log(rmKeyName);
const addID = persons.map(
  (obj) => (obj.id = Math.floor(Math.random() * (100 - 1) + 1))
);
console.log(addID);

console.log('\n');

console.log(persons);

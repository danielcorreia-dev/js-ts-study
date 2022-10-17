// Sum all the numbers (reduce)
// Return an array only with the even numbers
// Return an array with the double of the values

const numbers = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

const sumAll = numbers.reduce((accumulator, value) => {
  if (value % 2 === 0) {
    accumulator += value;
  }
  return accumulator;
}, 0);
console.log(sumAll);

// Return the oldest person
const persons = [
  { name: 'Maria', age: 42 },
  { name: 'Anabella', age: 55 },
  { name: 'Rosana', age: 32 },
  { name: 'Luiz', age: 101 },
  { name: 'Mario', age: 32 },
];

const oldest = persons.reduce((accumulator, obj) => {
  if(accumulator.age > obj.age) return accumulator;
  return obj;
});
console.log(oldest);

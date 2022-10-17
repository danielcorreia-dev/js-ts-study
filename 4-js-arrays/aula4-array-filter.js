// Filter, map, reduce

//Filter -> Will always return an array with the same quantity of elements or less.

// Return the numbers bigger than 10
const num = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

const filtered = num.filter((num, index, array) => {
  console.log(index, num);
  // console.log(array);
  return num > 10;
});
console.log(filtered.sort());

// Return the people wich have 5 letters in their name or more
// Return the people with more than 50+ years old
// Return the people wich name ends with the letter a

const persons = [
  { name: 'Luiz', age: 62 },
  { name: 'Otavio', age: 23 },
  { name: 'Eduardo', age: 55 },
  { name: 'Leticia', age: 19 },
  { name: 'Rosana', age: 32 },
  { name: 'Kayke', age: 47 },
  { name: 'Kennedy', age: 32 },
];

const namesFiltered = persons.filter((object) => object.name.length >= 5);
const agesFiltered = persons.filter((object) => object.age >= 50);
const vocalName = persons.filter((object) => object.name.toLowerCase.endsWith('a'));
console.log(namesFiltered);
console.log('\n');
console.log(agesFiltered);
console.log('\n');
console.log(vocalName);

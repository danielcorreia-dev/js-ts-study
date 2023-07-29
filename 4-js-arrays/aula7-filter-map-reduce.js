// Return the sum of all even numbers, doubled
// Filter pairs
// Double the values
// Reduce (sum everything)

const num = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const evenNums = num
  .filter((num) => num % 2 === 0)
  .((num) => num * 2)
  .reduce((acum, value) => acum + value);
console.log(evenNums);

// Two ways of doing it

function biggerThan(n1, n2) {
  return n1 > n2 ? n1 : n2;
}
const max2 = (x, y) => x > y ? x : y;

console.log(biggerThan(1, 30));
console.log(max2(23, 12));

/**
 * Comparator Operators are:
 * > Bigger than
 * < Lesser than
 * >= Bigger or equal than
 * <= Lesser or equal than 
 * == equal (only checks the value) ************** = It's not recommended
 * === strict equal (checks the value and the type)
 * != unequal (only checks the value) ************** = It's not recommended
 * !== strict unequal
 */
const expression = 10 > 5; // You can put the compairson in a variable,
console.log(expression); // true
console.log(10 > 5); // true

// You can compare between variables as well
let num1 = 10
let num2 = 20
let comp = num1 < num2
console.log(num2 < num1) // false
console.log(comp) // true

// Equal signs

num1 = '1'
num2 = 1

console.log(num1 == num2) // true , because both of their values are 1 but
console.log(num1 === num2) // false, because they aren't of the same type. num1 == string || num2 == number(int)
// We usually don't use the ==, exactly because it's only comparing values and not the types
num1 = 1
console.log(num1 === num2) // true, now the two of them are numbers

// The != different and !== work basically the same way, but inverted 
num1 = '1'
console.log(num1 !== num2) // true, because they're differents in types
console.log(num1 != num2) // false, because they're the same in values





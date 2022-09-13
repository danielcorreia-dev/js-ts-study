let num1 = 1; // number
let num2 = 2.5; // number
let num3 = 1450 // number
let num4 = 1200.23124123

// Number manipulation 
console.log(num1 + num2) // it'll return a number addition --> 3.5
console.log(num1.toString() + num2) // Now it'll become a string --> 12.5
console.log(num3.toString(2)) // By adding 2 to the method it'll now return a binary string --> 101100101010
console.log(num4.toFixed(2)) // Reduce the number of the decimal cases
console.log(num4.toPrecision(4)) // It'll only return the quantity specified 

// Number tests

let temp = num1 * 'hello'
console.log(Number.isInteger(num2)) // It'll return false, because num2 is 2.5, not an integer.
console.log(Number.isNaN(temp)) // It'll return true, because temp is a NaN.

// Method that JS calculates -- IEEE 754-2008 

let n1 = 0.7;
let n2 = 0.1;

n1 += n2; // 0.79999999999999999...
n1 += n2; // 0.89999999999999999...
n1 += n2; // 0.99999999999999999... and it should be 1.0
console.log(n1);
console.log(n1.toFixed(2)); // 1.0
console.log(Number.isInteger(n1)) // but it's still false

// To resolve this you need to use parseFloat or Number and fix the number.
// If you only fix the number the binary number will stay as 0.999999999

// n1 = parseFloat(n1.toFixed(2))
n1 = Number(n1.toFixed(2))
console.log(Number.isInteger(n1)) // true

// Now if we continue the calculus it'll count at the proper way

n1 += n2; // 1.1
n1 += n2; // 1.2
n1 += n2; // 1.3
n1 += n2; // 1.4
n1 += n2; // 1.5
n1 += n2; // 1.6
n1 += n2; // 1.7
n1 += n2; // 1.8
n1 += n2; // 1.9
n1 += n2; // 2.0

n1 = Number(n1.toFixed(2))
console.log(n1) // 2

// or you can make by doing actual calculations

n1 = 0.7
n2 = 0.1

n1 = ((n1*100) + (n2*100)) / 100
console.log(n1) // 0.8

// btw, functions are better >>>
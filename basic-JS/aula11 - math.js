let num1 = 12.480123
let num2;

// Math methods
num2 = Math.floor(num1) // 12
num2 = Math.ceil(num1) // 13
num2 = Math.round(num1) // it'll make the approximation automatically --> 12
console.log(num2)

console.log(Math.max(1,2,3,4,5,6,53,12)) // it will return the biggeest value passed --> 53
console.log(Math.min(1,2,3,4,5,6,53,12)) // it will return the lowest value passed --> 1
console.log(Math.random()); // It will generate a random number between 0 - 1

// To make a functional random number with a range
console.log(Math.round(Math.random() * (10 - 5) + 5)) // between 5 and 10

console.log(Math.PI) // The PI value
console.log(Math.sqrt(16)) // Square root of a number you can also use x ** 0.5
console.log(Math.pow(2,4)) // power a number it's the same using the ** operator

console.log(100 / 0) // equals to infinity



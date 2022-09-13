/**
 * Order -> () ** /%* +-
 * 
 * Aritmetical Operators
 * + Addition / Concatenation
 * - Subtraction
 * * Multiplication
 * ** Power
 * % Modulus
 * 
 * Incremental Operators
 * 
 * ++ Increase one in the variable 
 * += Increase value in to the variable
 * -- Decrease one in the variable
 * -= Decrease value in to the variable
 * *= Multiply value in to the variable
 * 
 */

// Examples with string + number
const failNum = 1
const failString = "L45"
console.log(failNum * failString) // it'll return NaN
console.log(failNum + failString) // if you put a plus it'll concatonate == 1L45

// Example of auto resolving of JS string number interactions
const numberReal = 2
const stringNum = "4"
let sumNums = numberReal * stringNum // == 8 || If you put a plus it'll concatonate as well == 24
console.log(sumNums) // It can resolve for you but it's not ideal

/** Ways to convert String to number: **
 * 
 * parseInt() == It'll transform your string into a integer number
 * parseFloat() == It'll transform your string into a float number
 * Number() == Will automatacally identify the type of the number and convert into to it
 */

let numReal = 2
let fakeNum = parseInt('2') // Int transformation
console.log(numReal + fakeNum, typeof (numReal + fakeNum))

numReal = 3.1
fakeNum = parseFloat('3.4') // Float transformation
console.log(numReal + fakeNum, typeof (numReal + fakeNum))

numReal = 1
fakeNum = Number(2.3) // Autodetect int or float
console.log(numReal + fakeNum, typeof (numReal + fakeNum))
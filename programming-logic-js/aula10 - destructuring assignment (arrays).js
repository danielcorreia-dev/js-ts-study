let a = "A"; // B
let b = "B"; // C
let c = "C"; // A

// Desestruction
[a, b, c] = [b, c, a]; // --> changing the variables, to a new organization.
//              Attribution
console.log(a, b, c);


const numbers = [3, 2, 1]; // You can attribute to variables

let x = 1;
let y = 2;
let z = 3;

[x, y, z] = numbers;
console.log(x, y, z);

// ------------------------------- a bit more of arrays -----------------------
// (... rest) || (... spread) --> Different names, but the same function

const arrayNumbers = [10, , 30, 40, 50, 60, 70, 80, 90];
const [one, two, three, ...rest] = arrayNumbers;
//    0     1    2      rest operator          array
console.log(one, two, three, rest);
//                          ^^^^^^   Will create a new array

const [um, fallback = 'nada', dois,, quatro] = arrayNumbers; // You can get skip spaces to atribbute to the variables.
console.log(um, dois, fallback, quatro); // You can set a fallback value if the index in the array is empty.

const listArrays = [
//    0          1          2
// 0  1  2    0  1  2    0  1  2
  [1, 2, 3], [4, 5, 6], [7, 8, 9],
];

// Passing a value by destructuring would be like:
const [,,[,oito]] = listArrays; // Skiping values to get to the value
console.log(oito)

const [listOne, listTwo, listThree] = listArrays;
console.log(listOne[2]); // A more readable and intuitive way

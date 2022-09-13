let varA = 'a'; // b
let varB = 'b'; // c
let varC = 'c'; // a
let temp;

// New solution
[varA, varB] = [varB, varC]
console.log(varB)

// Old solution 
// temp = varA
// varA = varB
// varB = varC
// varC = temp

console.log(varA, varB, varC)
const truth = true;

// Let has block scope {... }
// The JS motor looks for the first match of the variable [inside block -> outside -> globally]

let nome = 'Daniel'; // Creating globally || Block Scope / non redeclarabel
var nome2 = 'Daniel'; // Creating globally || Function Scope / Redeclaring

// let name = 'Correia' // You can't redeclare a let variable
// var nome = 'Correia';// A var, can

if (truth) {

  let nome = 'Correia' // Creating inside this block
  var nome2 = 'Luiza' // Redeclaring the nome2 variable
  console.log(nome, nome2)

  if (truth) { // You can nest blocks
    let nome = 'Brunna' // Creating inside this block
    var nome2 = 'Araujo' // Redeclaring the nome2 variable
    console.log(nome, nome2)
  }
}

console.log(nome, nome2) // It's going to use the last nome2 value --> Araujo

function nameTest() {
  var nameFunc = 'Daniel' // function scope
  console.log(nameFunc)

  if (truth) {
    let lastName = 'Luiza'
    console.log(nameFunc) // It's gonna work, 'cause is calling a var(global/function scope) 
    console.log(lastName) // Also gonna work because the let variable it's inside the bloc
  }

  // console.log(lastName) // can't return anything because is calling a let variable(global/block scope) inside an if block
}

nameTest();

// console.log(nameFunc); // It's going to return that's not defined, 'cause it's inside a function


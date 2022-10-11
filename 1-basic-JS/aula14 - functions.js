function welcome(){ // This is a method, which means that doesn't have a value to initialize or to interact with the function neither to return to his final value.
    console.log("Hello!");
}

function welcomeName(name) { // This is a function, which means that a value to initialize and interact with.
    return `Hello ${name}!`;
}

welcome();
welcomeName('Daniel');

// You can assign a function to a variable
const variavel = welcomeName('Luiz') // To assign a value to a variable it has to be a return value in the function.
console.log(variavel)

// Now creating a function
function somaDefault(x = 99, y = 1)  { // You can set default values for a function
    const resultado = x + y // variables inside a function are private
    return resultado
}

function soma(x , y)  { // You can set default values for a function
    const resultado = x + y // variables inside a function are private
    return resultado
}

const resultado = soma() // I'm using the same variable inside the function
console.log(resultado)

const raiz = function (n) { // <-- This is a anounymous function
    return n ** 0.5
}; // You need to end with semi-colon a anounymous function

const raiz2 = (n) =>  n ** 0.5 // This is an arrow function

console.log(raiz(4))
console.log(raiz2(16))

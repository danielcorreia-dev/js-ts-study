/**
 * Logical Operators
 * && -> And (T, T == All the arguments need to be true)
 * || -> Or (T, F == Only one of the arguments needs to be true)
 * ! -> Not (Is going to invert an expression)
 */

// &&
console.log(true && true && true && true); // true
console.log(true && true && true && false); // false, one of the arguments is false and all of them needs to be true

// || 
console.log(true || false || false || false || false); // true
console.log(false || false || false || false || false); // false, 'cause all of them are false and at least one needs to be true.

// Example expressions

/**Login Expression
 * Username and Login needs to match
 * to return true and grant access to the user
 */

const username = 'Daniel';
const password = 123456;

const willLogIn = username === 'Daniel';
console.log(willLogIn); // true
const willAcess = password === 123456; // You can asign expressions to variables
console.log(willAcess); // true

//                              True                    False
const fullLogIn = username === 'Daniel' && password === 12345; // You can combine symbols and make large expressions
const brokeFullLogIn = username === 'Daniel' || password === 12345; // You can combine symbols and make large expressions
console.log(fullLogIn) // false, because the password is wrong and it's with a && symbol, which means that all arguments needs to be true
console.log(brokeFullLogIn) // true, the password is wrong but it's with a || symbol, which means that only one of the arguments needs to be true to return true


// ! 

// It's inverting the expressions
console.log(!true) // false
console.log(!false) // true

console.log(10 !== 10) // false
console.log(10 !== 5) // true
console.log(!(10 < 20)) // false --> You can negate a whole expression
// You can also negate multiple times

console.log(!true)// true --> false
console.log(!!true)// true --> false --> true
console.log(!!!true)// true --> false --> true --> false

console.log(!true === !!!true) // true they're the same
console.log(true == !!true) // true
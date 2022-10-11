/**
 * What's supposed to be writing on the screen using variables: 
 * 
 * Daniel Correia has 18 years, weight more on like 58kg 
 * is 5.5 tall and his IMC is 999.321323
 * Daniel was born in ----
 */

const today = new Date();
const thisYear = today.getFullYear();



const firstName = "Daniel";
const secondName = "Correia";
const age = 19
const weight = 58
const height = 1.65

let ageOfBirth = thisYear - age;
let imc = height/(height**2); // peso/altura^2

console.log(`${firstName} ${secondName} has ${age} years, weight more on like ${weight}kg\nis ${height} and his IMC is ${imc.toPrecision(4)}\n${firstName} was born in ${ageOfBirth}`)
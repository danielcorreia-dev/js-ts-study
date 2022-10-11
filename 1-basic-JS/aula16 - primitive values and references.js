/**
 * Primitive Types (imutable value) - String, Number (int | float), boolean, undefined, null, (bigint, symbol) -> yet to be seen || Copy values to another space in memory
 * 
 * Reference (mutable) - Arrays, Objects, Functions || Pass the same reference in memory
 */

// Primitive
let nome = "luiz"
nome[0] = "r"
console.log(nome[0], nome) // It wont change the value of the String

let a = 'a'
let b = a // Primitive values make copy to other values
console.log(a, b)

a = "any other thing"
console.log(a, b)

// Reference

let x = [1,2,3]
/**
 * The equal sign here is now passing a reference to x
 * It isn't making a copy, instead, it's making a reference in the memory to the same spot == to the original one
 */ let y = x 
// So if you change something in X it'll happen the same thing in Y, 'cause they point to the same spot in memory
console.log(x, y)
x.push(4)
console.log(x, y) // 1, 2, 3, 4 to both

// The same happens if you mess with Y
y.pop()
console.log(x, y) // 1, 2, 3 to both

// You can make many other variables link to same spot
let z = y;
let w = z;
let t = w;

console.log(x, y, z, w, t) // 1, 2, 3 to all of them
t.push(4)
console.log(x, y, z, w, t) // 1, 2, 3, 5 to all of them

// To actually copy values of an array to another you can use

y = [...x] // To copy the elements for the new array of B
y.push(5)
console.log(x, y) // Now they are different, passing two distinct spot in memory

// The same thing could be apply for objects

let person = {
    name: 'Daniel',
    lastName: 'Correia'
}

let brunna = person // Making reference to the same spot in the memory
console.log(person, brunna)
brunna = {...person} // Copying but to different spots in the memory
brunna.name = "Brunna"
brunna.lastName = "Luiza"

console.log(person, brunna)

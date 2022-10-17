// Values by reference
//             0          1         2
const names = ['Daniel', 'Brunna', 'Isabela'];
const names2 = new Array('Galego', 'Morena', 'Ruivinha');

names[2] = 'Gabriela';
delete names[2];
console.log(names);
console.log(names2);

const nomeRef = names; // Valued passed by reference
const sepArray = [...names]; // Spread symbol (...) --> This way i'm setting up a new array

// Send the popped item to the variable || pop() --> Removes the last item at the array and low the index.
const popItem = nomeRef.pop(); // Affects names but does not affect sepArray
console.log(popItem);

// Send the shifted item to the variable || shift() --> Removes the first item at the array and decreases all elements on 1 index.
const shiftItem = nomeRef.shift();
console.log(shiftItem);

// To add items at the end of the array we use push()
names.push('Clara');

// To add items at the beginning we use unshift()
names.unshift('Barbara');

// You can cut an array (start, end)
const sliceEl = names.slice(0, 1);
console.log(sliceEl);

// You can also transform your string into an array
const fruit = 'banana apple guava mango';
let fruits = fruit.split(' ');
console.log(fruits);
// And viceversa 
fruits = fruits.join(', ');
console.log(fruits);

console.log(names);
console.log(sepArray);

console.log(names.length); // --> Getting the size of the array

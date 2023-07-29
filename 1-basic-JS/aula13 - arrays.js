// You can inject every type of value inside an array, but, it's a good practice just to use one type of data inside.
const students = ['Mary', 'Daniel', 'John', 1, true, false, 1.2];
console.log(students);

// Array have their indexes numbered by each element inside of them. Mary = 0 // Daniel = 1 // John = 2.
const names = ['Mary', 'Daniel', 'John'];
console.log(names[1]); // --> return

// You can change the indiviudal values of an array
names[0] = 'Brunna';
console.log(names[0]);
console.log(names);

// You can add an element inside an array using an "empty" value and add anything
names[3] = 'Leticia';
console.log(names);

// You can also add an element at the end of the arry using the push method
names.push('Patricia');
console.log(names);

// To know the size of an array you can use the length property as well & add something to the array is the same as use the push method
console.log(names.length); // 5
names[names.length] = 'Lais'; // 5
console.log(names);

// To make a data come to be added at the beggining index[0] you can use the method unshift
names.unshift('Andre');
console.log(names);

// To remove a data from the array you can use pop, to remove the last item
// names.pop();
const removeName = names.pop(); // You can also atribbute to a variable to show the element that was removed
console.log(removeName);
console.log(names); // It should return the array without the 'Lais' == the last index

// To remove a data from the beggining of the array you can use shift
// names.shift();
const removeFirstName = names.shift(); // You can also atribbute to a variable to show the element that was removed
console.log(removeFirstName);
console.log(names); // It should return the array without the 'Andre' == the first index

// To delete a data and leave a empty space you can use the delete reserved word
delete names[1];
console.log(names); // <1 empty item>

// If try to search for an inexisting index at an array it'll return undefined
console.log(names[30]); // undefined

// You can slice the array just like a string
console.log(names.slice(0, 3)); // It's gonna return 'Brunna','empty','John'
console.log(names.slice(-3)); // The same thing but now starting from the end of the array using negative numbers. It's gonna return 'John','Leticia','Patricia'

// You can check if the object that you're working with is actually an instance array or an object
console.log(typeof names); // arrays are considered object.
console.log(names instanceof Array); // true

// You can search a number inside an array by using the include method
console.log(names.includes('John')); // true
console.log(names.includes('Lais')); // false

/**
 * Arrays can be set as const values, therefore, their inside values can be changed, 'cause their path inside the memory is the same
 * but they cannot be reassign to be other things.
 */

const letters = ['a', 'b', 'c', 'd', 'e'];
letters[0] = 'z'; // Changing the value inside the array
console.log(letters);

// letters = 'Ola' // It's gonna break because i'm signing an 'external' value to a constant variable, changing his path in memory. array --> string

const arr = [1, 2, 3];
console.log(arr[-1]);
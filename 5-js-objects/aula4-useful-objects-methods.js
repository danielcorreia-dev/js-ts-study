/**
 * Object.value
 * Object.entries
 * Object.assign(des, any)
 * Object.getOwnPropertyDescriptor(o, 'prop')
 * ... (spread)
 */

// Alredy saw
/**
 * Object.keys (return key values)
 * Object.freeze (lock a property or object)
 * Object.defineProperty (single property)
 * Object.defineProperties (multiple properties)
 */

const owner = { name: 'Daniel', age: 18, role: 'CTO' };
const product = { name: 'Pen', value: 2 };
let anotherP = product; // It's just referring to product, not being a new object
// For instace:
anotherP.name = 'Pencil';
console.log(product.name); // Pencil

// With the spread operator (...), a copy of the object was assigned to anotherP
anotherP = {
  ...product,
  material: 'Wood', // You can create new properties aswell when doing that
  madeIn: 'China',
};

anotherP.name = 'Pen';

console.log(product);
console.log(anotherP);

// Another way is using
anotherP = Object.assign({}, product, {}, owner, {
  moreitems: 'items',
  morekeys: 'yay',
}); // You can have multiple sources, but with confliting keys it'll sustain the value from the last source.
console.log(anotherP);

// And other way
anotherP = { name: product.name, value: product.value }; // Only use this when you want a specificy value from an object

// -------------------------------------------------------------------------------------------------------------------------------

const pet = { name: 'Simba', race: 'Beagle', age: 3 };

// To see the properties of an object you can use a loop
for (const key in pet) {
  console.log(key);
}

// To get only the values of the properties in an array
console.log(Object.values(pet));

// To see an array with 'key: value'
console.log(Object.entries(pet));
// You can iterate using Object.entries to get the values out of the array
for (const [key, value] of Object.entries(pet)) {
  console.log(key, value);
}

// An array of all the properties enumerables
console.log(Object.keys(pet));

// To see description about a property you can use:
const d1 = Object.getOwnPropertyDescriptor(pet, 'name');
console.log(d1);

// All properties of an object
const d2 = Object.getOwnPropertyDescriptors(pet);
console.log(d2);

// -------------------------------------------------------------------------------------------------------------------------------

// To freeze objects or properties imutable you can use
// Object.freeze(pet); // Object
Object.freeze(pet.name); // Property
pet.name = 'Scar';
console.log(pet); // name: 'Simba'

// or

Object.defineProperty(anotherP, 'name', {
  enumerable: true,
  writable: false,
});
console.log(anotherP);

anotherP.name = 'Pen';
console.log(anotherP); // name: 'Pencil'

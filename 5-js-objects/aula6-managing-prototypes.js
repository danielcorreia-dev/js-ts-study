
// new Object -> Object.prototype
const objA = {
  key: 'a',
  originKey: 'k',
  changeKey (value) {
    this.key = value;
  },
  role: undefined,
  // __proto__: Object.prototype
};

//             'child'             'father'           
console.log(objA.__proto__ === Object.prototype); // true

const objB = {
  key: 'b',
  // __proto__: Object.prototype
};

const objC = {
  resetKey() {
    this.key = undefined;
  },
}

// To change the prototype chain sequence you can change the by using
Object.setPrototypeOf(objB, objA);

console.log(objB.__proto__ === Object.prototype); // false
console.log(objB.__proto__ === objA); // true

objB.changeKey('c');
console.log(objB.key);

// You can even extend the inheritance by making a bigger prototype chain
Object.setPrototypeOf(objA, objC);
console.log(objA.__proto__ === objC) // true

objB.resetKey(); // ObjC method
console.log(objB.key);

// All the changes are made in the instance, the object just inherit the properties (and it's values) and methods from the 'father' prototype.
console.log(objB.originKey) // k

objB.role = 'child';
console.log(objA.role); // undefined
console.log(objB.role); // child

// !!!!!!!!!!!!!! ATTENTION DO NOT CHANGE __PROTO__ BY USING A LITERAL, use the Set method instead. Object.getPrototypeOf(object) !!!!!!!!!!!!!!

// Using constructor functions

function Product(name, value, stock) {

}

p1 = new Product('Socks', 4, 200);
console.log(p1);
// new Object -> Object.prototype
const objA = {
  key: 'a',
  originKey: 'k',
  changeKey(value) {
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
};

// To change the prototype chain sequence you can change the by using
Object.setPrototypeOf(objB, objA);

console.log(objB.__proto__ === Object.prototype); // false
console.log(objB.__proto__ === objA); // true

objB.changeKey('c');
console.log(objB.key);

// You can even extend the inheritance by making a bigger prototype chain
Object.setPrototypeOf(objA, objC);
console.log(objA.__proto__ === objC); // true

objB.resetKey(); // ObjC method
console.log(objB.key);

// All the changes are made in the instance, the object just inherit the properties (and it's values) and methods from the 'father' prototype.
console.log(objB.originKey); // k

objB.role = 'child';
console.log(objA.role); // undefined
console.log(objB.role); // child

// !!!!!!!!!!!!!! ATTENTION DO NOT CHANGE __PROTO__ BY USING A LITERAL, use the Set method instead. Object.getPrototypeOf(object) !!!!!!!!!!!!!!

// Using constructor functions

function Product(name, value) {
  this.name = name;
  this.value = value;
}

// For performance it's a better practice to create your methods out of your contrusctor function
Product.prototype.discount = function (porcentage) {
  this.value = this.value - this.value * (porcentage / 100);
};

Product.prototype.raise = function (porcentage) {
  this.value = Math.round(this.value + this.value * (porcentage / 100));
};

p1 = new Product('Socks', 4, 200);
p1.discount(10);
console.log(p1.value);
p1.raise(10);
console.log(p1.value);

const p2 = { 
  name: 'Pen',
  value: 10
}

// To reuse the methods created in Product.prototype you can utilize the same function to attribute a prototype to it.
Object.setPrototypeOf(p2, Product.prototype);

p2.discount(40);
console.log(p2.value);
p2.raise(30);
console.log(p2.value);

console.log(p2.__proto__ === Product.prototype);

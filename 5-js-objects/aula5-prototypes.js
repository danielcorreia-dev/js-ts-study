/**
 * Javascript is based is prototypes to pass properties and methods of an object to another.
 * 
 * Prototype definition
 * Prototype is the term utilized to refer what was created at the first time, being a model or a mold to future productions.
 * 
 * All objects have a intern reference to a prototype (__proto__) that's from the property prototype of the constructor function that was passed to create it.
 * When we try to acess a member of an object, first the JS compiler is going try to find this member on the object itself,
 * then the prototype chain used until reachs the top (null) finding it or not the member referred.
 **/

// Constructor function -> mold || class
function Person(name, lastName, age) {
  this.name = name;
  this.lastName = lastName;
  this.age = age;
}

Person.prototype.fullname = function() { return `${this.name} ${this.lastName}` }

// instance of an object || instance
const p1 = new Person('Daniel', 'Correia', 18);
const p2 = new Person('Brunna', 'Luiza', 18);

console.log(p1.fullname())
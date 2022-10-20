const pessoa = {
  name: 'Luiza',
  lastName: 'Brunna',
};
// To access the data you can use:
// Dot notation
console.log(pessoa.name);
console.log(pessoa.lastName);

// Key Notation
console.log(pessoa['name']); // Luiza
console.log(pessoa['lastName']);
// You can use variables with key values to acess this way
const key = 'name';
console.log(pessoa[key]); // Luiza

// You can use a constructor as an array to create an object.
const pessoa2 = new Object();

pessoa2.name = 'Daniel';
pessoa2.lastName = 'Correia';
pessoa2.age = 19;
pessoa2.speakName = function () {
  console.log(`${this.name} is speaking his/her name`);
};
// You can access values from other key inside your object
pessoa2.getAge = function () {
  const date = new Date();
  const year = date.getFullYear();
  // Getting age value of 'pessoa2'
  return year - this.age;
};

for (const key in pessoa2) {
  console.log(pessoa2[key]);
}

console.log(pessoa2.name);
console.log(pessoa2.lastName);
pessoa2.speakName();
console.log(pessoa2.getAge());

// You can delete the keys by using:
delete pessoa.name;
console.log(pessoa.name); // undefined

// Using design patterns to evaluate and create objects
// Contrusctor functions // Fabric functions // Classes

// Factory Function
function createPerson(name, lastname) {
  return {
    name,
    lastname,
    get nomeCompleto() {
      return `${this.name} ${this.lastname}`;
    },
  };
}

const p1 = createPerson('Maria', 'Barbara');
console.log(p1.lastname);

// Constructor Function
function Person(name, lastname) {
  this.name = name;
  this.lastname = lastname;

  // Object.freeze(this) // You can even use freeze to lock the object on it's creation
  // You can also do that with arrays.
}

// new = create an empty object {} <- this and attribute 'this' keyword to the object.
// In this case, this === newp1
const newp1 = new Person('Isabelle', 'Cavalcante');

// You can see the constructor printing the object 'Person'
console.log(newp1);

// To freeze/lock/constant an object you can use
Object.freeze(newp1);
newp1.name = 'Barbara';
// It's still Isabaelle
console.log(newp1.name);

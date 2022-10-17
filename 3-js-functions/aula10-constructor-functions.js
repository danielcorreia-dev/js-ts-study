// Factory Functions -> Objects
// Contrusctor Functions -> Objects

function Person(name, lastName) {
  // Private attributes or methods
  const ID = 2321;
  const IDValidation = (e) => {
    if (ID) {
      console.log('Hi!')
    }
  }

  this.name = name;
  this.lastName = lastName

  this.method = (e) => {
    console.log("I'm a method")
    IDValidation();
  }
}

const person = new Person('Daniel', 'Correia');
person.method();

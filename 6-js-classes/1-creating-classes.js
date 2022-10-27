class Person {
  constructor(name, lastname) {
    this.name = name;
    this.lastname = lastname;
  }

  speaking() {
    console.log(`${this.name} is speaking`);
  }
  eating() {
    console.log(`${this.name} is eating`);
  }
  drinking() {
    console.log(`${this.name} is drinking`);
  }
}

function Person2(name, lastname) {
  this.name = name;
  this.lastname = lastname;
}

Person2.prototype.speaking = function () {
  console.log(`${this.name} is speaking`);
};

Person2.prototype.eating = function () {
  console.log(`${this.name} is eating`);
};

Person2.prototype.drinking = function () {
  console.log(`${this.name} is drinking`);
};

const p1 = new Person('daniel', 'correia');
const p2 = new Person2('brunna', 'luiza');

console.log(p1);
p2.drinking();

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

const p1 = new Person('daniel', 'correia');
const p2 = new Person('brunna', 'luiza');

console.log(p1);
p2.drinking();

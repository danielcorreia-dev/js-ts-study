const level = Symbol('level');
class Character {
  constructor(name, lastname, race) {
    this.name = name;
    this.lastname = lastname;
    this.race = race;
  }

  greetings() {
    return `My name is ${this.name} ${this.lastname}, a ${this.race}`
  }
}

class Mage extends Character {
  constructor(name, lastname, race, school, level) {
    super(name, lastname, race);
    this.school = school;
    this._level = level;
  }

  // Polimorfism
  greetings() {
    return `My name is ${this.name} ${this.lastname}, a ${this.race}, a mage from the school of ${this.school}`
  }

  get level() {
    return this._level;
  }

  set level(value) {
    this._level = value;
  }

  magic(name, element) {
    return `${name} of ${element}`
  }
}

const c1 = new Character('Cesar', 'Augustus', 'Emperor');
console.log(c1);
console.log(c1.level);
console.log(c1.greetings());

const m1 = new Mage('Draco', 'Deltour', 'Human', 'Druids', 35);
console.log(m1);
console.log(m1.level);
console.log(m1.greetings());
console.log(m1.magic('Bolt', 'Fire'));

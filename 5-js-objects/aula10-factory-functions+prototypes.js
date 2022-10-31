function createPerson(name, lastname) {
  const PersonPrototype = {
    speak() {
      console.log(`${this.name} is talking`);
    },
    drinking() {
      console.log(`${this.name} is drinking`);
    },
    eating() {
      console.log(`${this.name} is eating`);
    },
  };

  return Object.create(PersonPrototype, {
    name: { value: name, enumerable: true },
    lastname: { value: lastname, enumerable: true },
  });
}

const speak2 = {
  speak() {
    console.log(`${this.name} is talking`);
  },
};

const eat2 = {
  eating() {
    console.log(`${this.name} is eating`);
  },
};

const drink2 = {
  drinking() {
    console.log(`${this.name} is drinking`);
  },
};

const createPerson2Prototye = Object.assign({}, speak2, eat2, drink2);

function createPerson2(name, lastname) {
  return Object.create(createPerson2Prototye, {
    name: {
      enumerable: true,
      value: name,
    },
    lastname: {
      enumerable: true,
      value: lastname,
    },
  });
}

p1 = createPerson('daniel', 'correia');
p2 = createPerson2('daniel', 'correia');

console.log(p1.speak());
console.log(p2.speak());

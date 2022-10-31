function createPerson(name, lastname, age, sex) {
  const date = new Date();
  const year = date.getFullYear();

  const PersonPrototype = {
    speak() {
      console.log(`${this.name} is saying something`);
    },

    greetings() {
      console.log(
        `Hi, my name is ${this.name} ${this.lastname}, I'm a ${this.sex} with ${this.age} years old`
      );
    },

    get birthdate() {
      return year - this.age;
    },
  };

  return Object.create(PersonPrototype, {
    name: {
      enumerable: true,
      value: name,
    },

    lastname: {
      enumerable: true,
      value: lastname,
    },

    age: {
      value: age,
      enumerable: true,
    },

    sex: {
      value: sex,
      enumerable: true,
    },
  });
}

const p1 = createPerson('Daniel', 'Correia', 18, 'Male');
p1.speak();
console.log(p1.birthdate);

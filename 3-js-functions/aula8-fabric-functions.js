// Factory Function
function createPerson(name, lastName, p, cm) {
  return {
    name,
    lastName,

    get completeName() {
      return `${this.name} ${this.lastName}`
    },
    
    set completeName(fullName) {
      fullName = fullName.split(' ');
      this.name = fullName.shift();
      this.lastName = fullName.join(' ');
    },
    speak(subject) {
      return `${this.name} is talking about ${subject}, and if I wanna to talk about my ${this.weight} pounds, I have to refer as this`;
    },
    weight: p,
    height: cm,
    // Getter
    get imc() {
      // get predefined word transforms imc function into an attribute
      const index = this.weight / this.height ** 2;
      return index.toFixed(2);
    },
  };
}

p1 = createPerson('Daniel', 'Correia', 60, 1.65);
p2 = createPerson('Mary', 'Correia');
console.log(p1.imc);
console.log(p2.speak('JS'));

console.log(p1.completeName); // calling Getter
p1.completeName = 'Brunna Luiza de Araujo'; // calling Setter
console.log(p1.name);
console.log(p1.lastName);
console.log(p1.speak('JS'));
console.log(p1.imc)

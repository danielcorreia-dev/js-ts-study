function Pet(name, specie, race) {
  this.specie = specie;
  this.race = race;

  // Object.freeze(this); // To not change the object.

  Object.defineProperty(this, 'name', {
    get: function() {
      return name;
    },

    set: function(value) {
      name = value;
    },

    enumerable: true,
    configurable: false
  })
}


const p1 = new Pet('Scar', 'Feline', 'Lion');
console.log(p1);
p1.power = 'shout';
console.log(p1);

p1.name = 'Simba';
console.log(p1.name);
import { Gadget } from './3-classes-inheritance.js';

// Independant of Tablet
class Smartphone extends Gadget {
  constructor(name, model, color) {
    super(name);
    this.model = model;
    this.color = color;
  }
}

const s1 = new Smartphone("Galego's phone", 'S5', 'Black');
console.log(s1);

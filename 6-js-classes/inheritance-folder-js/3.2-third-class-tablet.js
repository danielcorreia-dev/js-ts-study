import { Gadget } from './3-classes-inheritance.js';

// Independent from Smartphone, only dependant off Gadget class
class Tablet extends Gadget {
  constructor(name, size) {
    super(name);
    this.size = size;
  }
}

const t1 = new Tablet("Lala's Tablet", 8);
console.log(t1);

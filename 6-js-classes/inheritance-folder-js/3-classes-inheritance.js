export class Gadget {
  constructor(name) {
    this.name = name;
    this.state = false;
  }

  turnOn() {
    if (this.state) {
      console.log(this.name + ' ' + 'alredy on');
      return;
    }
    this.state = true;
  }

  turnOff() {
    if (!this.state) {
      console.log(this.name + ' ' + 'alredy off');
      return;
    }
    this.state = false;
  }
}

/**
 * Inheritance works exactly the same way of reality.
 *
 * Parent / Superclass passes everything to their Child/ Subclasses but they don't inherit anything from them.
 * It's a pyramid. The superclass is on top, and the subclasses are ramifications of it.
 * Just as bioligcal inheritance.
 */

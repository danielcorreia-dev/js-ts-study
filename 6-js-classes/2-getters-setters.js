const __velocity = Symbol('velocity');

class Car {
  constructor(name) {
    this.name = name;
    this[__velocity] = 0;
  }

  accelerate() {
    if (this[__velocity] >= 200) return;
    this[__velocity]++;
  }

  brakes() {
    if (this[__velocity] <= 0) return;
    this[__velocity]--;
  }

  get velocity() {
    return this[__velocity];
  }

  set velocity(speed) {
    if (speed > 200 || speed < 0) return;
    if (typeof speed !== 'number') return;

    this[__velocity] = speed;
  }
}

const c1 = new Car('Fusca');
for (let velocity = 0; velocity <= 202; velocity++) {
  c1.accelerate();
}

for (let velocity = 0; velocity <= 189; velocity++) {
  c1.brakes();
}

c1.velocity = 20;
console.log(c1.velocity);

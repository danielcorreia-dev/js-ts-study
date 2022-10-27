const __velocity = Symbol();

class Car {
  constructor(name) {
    this.name = name;
    this.velocity = 0;
  }

  accelerate() {
    if (this.velocity >= 200) return;
    this.velocity++;
  }

  brakes() {
    if (this.velocity <= 0) return;
    this.velocity--;
  }
}

const c1 = new Car('Fusca')
for(let velocity = 0; velocity <= 202; velocity++) {
  c1.accelerate();
}

for(let velocity = 0; velocity <= 189; velocity++) {
  c1.brakes();
}

console.log(c1.velocity);
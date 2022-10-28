class Remote {
  constructor(tv) {
    this.tv = tv;
    this.volume = 0;
  }

  increaseVolume() {
    this.volume++;
  }

  decreaseVolume() {
    this.volume--;
  }

  // Static Method -> on the class itself
  static changeBatteries(x, y) { 
    return x + y;
  }
  
}

const remote1 = new Remote('Samsung');

remote1.increaseVolume();
remote1.increaseVolume();
remote1.increaseVolume();

const sum = Remote.changeBatteries(100, 20);
console.log(sum);

console.log(remote1);

function Girlfriend(personality, age, height, smile, eyes) {
  this.personality = personality;
  this.age = age;
  this.height = height;
  this.smile = smile;
  this.eyes = eyes;
}

// Prototype make a inheritance linked to the object.
Girlfriend.prototype.sayILY = function() {
  console.log(`I love you`);
}

const g1 = new Girlfriend('intelligent', 18, 1.54, 'white', 'green');
const g2 = new Girlfriend('smart', 19, 1.52, 'white+', 'blue');
console.log(g1);
console.log(g2);

g1.sayILY();
g2.sayILY();



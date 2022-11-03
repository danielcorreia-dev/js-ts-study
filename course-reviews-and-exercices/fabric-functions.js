function createSword(name, material, blacksmith) {

  // Prototype || Methods of the fabric function
  const blacksmithCraft = {
    hammering() {
      setTimeout(() => {
        clearInterval(clanking);
      }, 10000);

      const clanking = setInterval(() => {
        console.log('Clink* Clink* Clink*');
      }, 3000);
    },

    blessing() {
      console.log(`I bless this sword made with ${this.material}`);
    },
  };
  
  return Object.create(blacksmithCraft, {
    name: {
      value: name,
      enumerable: true,
    },

    material: {
      value: material,
      enumerable: true,
    },

    blacksmith: {
      value: blacksmith,
      enumerable: true,
    },
  });
}

const s1 = createSword('Excalibur', 'Obsidian', 'Lady of the Lake');
console.log(s1);
// s1.hammering();
s1.material = 'iron';
console.log(s1.material);
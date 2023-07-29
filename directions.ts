interface Directions {
  [key: string]: { x: number; y: number };
}

const isValidWalk = (walk: string[]): boolean => {
  if (walk.length !== 10) return false;

  let x = 0,
    y = 0;

  const directions: Directions = {
    n: { y: 1, x: 0 },
    s: { y: -1, x: 0 },
    w: { y: 0, x: 1 },
    e: { y: 0, x: -1 },
  };

  walk.forEach((direction) => {
    let { y: dy, x: dx } = directions[direction];

    x += dx;
    y += dy;
  });

  return x === 0 && y === 0;
};

console.log(isValidWalk(['n', 's', 'e', 'w', 'n', 's', 'e', 'w', 'n', 's'])); // Output: true
console.log(isValidWalk(['n', 'n', 'n', 's', 's', 's', 'e', 'e', 'w', 'w'])); // Output: true
console.log(isValidWalk(['n', 's', 'e', 'w', 'n', 's', 'e', 'w', 'n', 'n'])); // Output: false

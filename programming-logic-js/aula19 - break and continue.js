const values = [10, 20, 30, 40, 50, 60, 70, 80];

for (num of values) {
  // of = value
  if (num === 40) continue; // Skips the value in the condition
  if (num === 80) break; // Stop the loop when the condition is true.
  console.log(num);
}

console.log('\n######\n');

for (let i in values) {
  // in = index
  let num = values[i];

  if (num === 40) continue; // Skips the value in the condition
  if (num === 80) break; // Stop the loop when the condition is true.
  console.log(num);
}

console.log('\n######\n');

for (let i = 0; i < values.length; i++) {
  let num = values[i];

  if (num === 40) continue; // Skips the value in the condition
  if (num === 80) break; // Stop the loop when the condition is true.
  console.log(num);
}

console.log('\n######\n');

let i = 0;
while (i < values.length) {
  let num = values[i];

  if (num === 40) {
    i++; // Before every continue or break in a while it's safer to put increase in the loop variable preventing becoming a infinite loop.
    continue;
  }

  if (num === 50) {
    i++;
    continue;
  }

  console.log(num);

  if (num === 80) {
    i++;
    break; // Stop the loop when the condition is true.
  }

  i++;
}

console.log('\n######\n');

let x = 0;
do {
  let num = values[x];

  if (num === 50) {
    x++;
    continue;
  }

  console.log(num);

  if (num === 80) {
    x++;
    break; // Stop the loop when the condition is true.
  }

  x++;
} while (x < values.length);

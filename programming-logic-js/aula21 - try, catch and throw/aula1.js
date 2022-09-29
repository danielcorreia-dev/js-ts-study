// const dontExist = 'Yes, I exist';

try {
  // Try the command
  console.log(dontExist);
} catch {
  // If it's false
  console.log("dontExist still doesn't exist");
}

function sum(x, y) {
  if (typeof x !== 'number' || typeof y !== 'number')
    // throw new Error("x and y aren't numbers");
    throw new ReferenceError("x and y aren't numbers");

  return x + y;
}

try {
  console.log(sum(1, 2));
  console.log(sum(1, 'hi'));
} catch (err) {
  // console.log(err);
  console.log('Anything more friendly to the final user');
}

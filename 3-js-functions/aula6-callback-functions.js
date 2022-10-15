function rand(min = 1000, max = 3000) {
  return Math.floor(Math.random() * (max - min) + min);
}

function f1(callback) {
  setTimeout(() => {
    console.log('f1');
    if (callback) callback();
  }, rand());
}

function f2(callback) {
  setTimeout(() => {
    console.log('f2');
    if (callback) callback();
  }, rand());
}

function f3(callback) {
  setTimeout(() => {
    console.log('f3');
    if (callback) callback();
  }, rand());
}

// Avoid this
// f1(function () {
//   f2(function () {
//     f3(function () {
//       console.log('Hello World');
//     });
//   });
// });

// To escape the callback hell you can create a functions to be callbacks of each of them
// That way you increase the readabilty of your code.

function f1Callback() {
  f2(f2Callback);
}

function f2Callback() {
  f3(f3Callback);
}

function f3Callback() {
  console.log('Hello World!');
}

f1(f1Callback);

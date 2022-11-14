const rand = (min, max) => {
  min *= 1000;
  max *= 1000;
  return Math.floor(Math.random() * (max - min) + min);
};

const connectDB = (msg, time) => {
  return new Promise((resolve, reject) => {
    if (typeof msg !== 'string') {
      reject('Type Error');
      return;
    }

    setTimeout(() => {
      resolve(msg.toUpperCase() + ' - Passed on promise');
    }, time);
  });
};

// Promise.all || Promise.race || Promise.resolve || Promise.reject
const promises = [
  // 'First value',
  connectDB('Promise 1', 3000),
  connectDB('Promise 2', 500),
  connectDB('Promise 3', 2000),
  // connectDB( undefined , 500),
];

// // Return all values in order
// Promise.all(promises)
//   .then((value) => {
//     console.log(value);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// // Return the first value that had fullfield the promise
// Promise.race(promises)
//   .then((value) => {
//     console.log(value);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

const downloadPage = () => {
  const inCache = true;

  if (inCache) {
    // return Promise.resolve('Page and cache'); // It will fullfiled the promise => then
    return Promise.reject('Page and cache'); // It will always fail the promise (making an error) => catch
  } else {
    return connectDB('Downloaded the page', 3000);
  }
};

downloadPage()
  .then((data) => {
    console.log(data);
  })
  .catch((e) => {
    console.log('Error ' + e);
  });

const rand = (min, max) => {
  min *= 1000;
  max *= 1000;
  return Math.floor(Math.random() * (max - min) + min);
};

const connectDB = (msg, time) => {
  return new Promise((resolve, reject) => {
    if (typeof msg !== 'string') reject('Type Error');

    setTimeout(() => {
      resolve(msg + ' - Passed on promise');
    }, time);
  });
};

// Promise.all || Promise.race || Promise.resolve || Promise.reject
const promises = [
  'First value',
  connectDB('Promise 1', 3000),
  connectDB('Promise 2', 500),
  connectDB('Promise 3', 2000),
  connectDB(222, 500),
];

Promise.all(promises)
  .then((value) => {
    console.log(value);
  })
  .catch((error) => {
    console.log(error);
  });

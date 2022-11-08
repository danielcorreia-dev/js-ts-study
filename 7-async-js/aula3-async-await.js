const rand = (min = 0, max = 3) => {
  min *= 1000;
  max *= 1000;
  return Math.floor(Math.random() * (max - min) + min);
};

const connectDB = (msg, time) => {
  return new Promise((resolve, reject) => {
    if (typeof msg !== 'string') {
      reject('Error');
      return;
    }

    resolve(msg.toUpperCase() + ' Succeded in promise');
    return;
  }, time);
};

// // Then, Catch Method
// connectDB('Phase 1', rand())
//   .then((value) => {
//     console.log(value);
//     return connectDB('Phase 2', rand());
//   })
//   .then((value) => {
//     console.log(value);
//     return connectDB('Phase 3', rand());
//   })
//   .then((value) => {
//     console.log(value);
//     return value;
//   })
//   .then((value) => console.log('We stopeed on the phase: ' + value))
//   .catch((e) => console.log(e));

// Async Method

const execute = async () => {
  try {
    const phase1 = await connectDB('Phase 1', rand());
    console.log(phase1);

    const phase2 = await connectDB('Phase 2', rand());
    console.log(phase2);

    const phase3 = await connectDB('Phase 3', rand());
    console.log(phase3);
  } catch (e) {
    console.log(e);
  }
};

execute();

// Promises State

// Pending
// fullfielled -> resolved
// rejected
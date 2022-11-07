const rand = (min, max) => {
  min *= 1000;
  max *= 1000;
  return Math.floor(Math.random() * (max - min) + min);
};

const connectDB = (msg, time) => {
  return new Promise((resolve, reject) => {
    if(typeof msg !== 'string') reject('Type Error');

    setTimeout(() => {
      resolve(msg);
    }, time);
  });
};

connectDB('Phrase 1', rand(1, 3))
  .then((anwser) => {
    console.log(anwser);
    return connectDB('Phrase 2', rand(1, 3));
  })
  .then((anwser) => {
    console.log(anwser);
    return connectDB(2222, rand(1, 3));
  })
  .then((anwser) => {
    console.log(anwser);
  }).catch(e => {
    console.log('ERROR:' + e);
  });

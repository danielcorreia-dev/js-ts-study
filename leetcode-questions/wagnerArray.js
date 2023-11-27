const arr = [1, 2, 4, 6, '7', 17, 23];

const arrFiltered = arr.filter((elem) => {
  if (Number(elem) % 2 !== 0) return elem;
});

console.log(arrFiltered);

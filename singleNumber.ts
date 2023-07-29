const singleNumber = (arr: number[]): number => {
  let x: any = {};
  arr.forEach((num) => {
    if (num !== undefined && num in x) {
      x[num] += 1;
    } else {
      x[num] = 1;
    }
  });

  const uniqueNum = Object.keys(x)
    .filter((k, i) => x[k] === 1)
    .map((num) => Number(num));

  return uniqueNum[0];
};
const arr = [1, 0, 1];

console.log(singleNumber(arr));

function plusMinus(arr: number[]): void {
  let positive = 0;
  let negative = 0;
  let zero = 0;
  let length = arr.length;

  arr.forEach((num) => {
    if (num > 0) {
      positive++;
    } else if (num < 0) {
      negative++;
    } else {
      zero++;
    }
  });

  console.log((positive / length).toFixed(6));
  console.log((negative / length).toFixed(6));
  console.log((zero / length).toFixed(6));
}

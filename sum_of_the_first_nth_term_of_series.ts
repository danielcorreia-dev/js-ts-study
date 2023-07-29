const SeriesSum = (n: number): string => {
  if (n === 0) return '0.00';

  let sum = 0;
  let denominator = 1;

  for (let i = 0; i < n; i++) {
    sum += 1 / denominator;
    denominator += 3;
  }

  return sum.
};

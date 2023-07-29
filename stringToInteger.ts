function myAtoi(s: string): number {
  if (!s) return 0;

  const maxInt32: number = Math.pow(2, 31) - 1;
  const minInt32: number = -Math.pow(2, 31);

  let i: number = 0;

  // Ignore leading whitespace
  while (s[i] === ' ') {
    i++;
  }

  // Check for sign
  let sign: number = 1;
  if (s[i] === '-' || s[i] === '+') {
    sign = s[i] === '-' ? -1 : 1;
    i++;
  }

  // Read in digits
  let number: number = 0;
  while (i < s.length && !isNaN(Number(s[i])) && s[i] !== ' ') {
    number = number * 10 + parseInt(s[i]);
    i++;
  }

  number *= sign;

  // Clamp the number if it's out of range
  if (number < minInt32) {
    return minInt32;
  } else if (number > maxInt32) {
    return maxInt32;
  }

  return number;
}

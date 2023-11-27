const reverse = (x: number): number => {
  const maxInt32: number = Math.pow(2, 31) - 1;
  let word = x.toString().split('').reverse()

  if(word[word.length-1] === '-') {
    word.pop()
    word.unshift('-');
  }

  const number = Number(word.join(''));

  return (number >= maxInt32 && number <= -maxInt32) ? 0 : number;
}

const reserverdNumber = reverse(12);
console.log(reserverdNumber);

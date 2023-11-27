const firstUniqChar = (s: string): number => {
  const letters: any = {};

  for (const letter of s) {
    if (letters[letter]) {
      letters[letter] += 1;
    } else {
      letters[letter] = 1;
    }
  }

  for (let i = 0; i < s.length - 1; i++) {
    if (letters[s[i]] === 1) {
      return i;
    }
  }

  return -1;
};

console.log(firstUniqChar('daniell'));

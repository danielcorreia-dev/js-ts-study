const mergeAlternately = (word1: string, word2: string): string => {
  let result = '';
  const longer = Math.min(word1.length, word2.length);
  for (let i = 0; i < longer; i++) {
    if (word1[i]) result += word1[i];
    if (word2[i]) result += word2[i];
  }

  result += word1.substring(longer);
  result += word2.substring(longer);

  return result;
};

console.log(mergeAlternately('abcde', 'pqr'));

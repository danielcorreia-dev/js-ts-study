function isPalindrome(s: string): boolean {
  s = s.toLowerCase().replace(/[\s~`!@#$%^&*()_+\-={[}\]|\\:;"'<,>.?/]+/g, '');
  let reversedPhrase = s.split('').reverse().join('');
  console.log(s, reversedPhrase);

  if (reversedPhrase === s) return true;

  return false;
}

console.log(isPalindrome('ab_a'));

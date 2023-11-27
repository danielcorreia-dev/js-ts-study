function isAnagram(s: string, t: string): boolean {
  const string1 = s.split('').sort();
  const string2 = t.split('').sort();

  if (string1.length !== string2.length) return false;

  for (let i = 0; i < string1.length; i++) {
    console.log(string1[i], string2[i]);
    if (string1[i] !== string2[i]) return false;
  }

  return true;
}

console.log(isAnagram('a', 'b'));

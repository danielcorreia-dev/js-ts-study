const reverseString = (s:  string[]): void => {
  for(let i = 0, j = s.length-1; i < j; i++, j--) {
    let tmp = s[i]
    s[i] = s[j];
    s[j] = tmp;
  }
  console.log(s);
}

reverseString(["h","e","l","l","o"]);
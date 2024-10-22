function validPalindrome(str) {
  let n = str.length;
  let start = 0;
  let end = n - 1;

  const isAlphanumeric = (ch) => {
    return new RegExp(/^[a-zA-z0-9]+$/).test(ch);
  };

  while (start <= end) {
    const ch1 = str[start].toLowerCase();
    const ch2 = str[end].toLowerCase();
    if (!isAlphanumeric(ch1)) {
      start++;
      continue;
    }
    if (!isAlphanumeric(ch2)) {
      end--;
      continue;
    }
    if (ch1 === ch2) {
      start++;
      end--;
    } else {
      return false;
    }
  }
  return true;
}

console.log(validPalindrome("Madam"));
console.log(validPalindrome("Mada m"));
console.log(validPalindrome("M a?d a@m"));
console.log(validPalindrome("sai"));
console.log(validPalindrome("Tata"));

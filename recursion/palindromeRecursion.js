function palindromeRecursion(str, i) {
  let j = str.length - 1 - i;
  if (i < j) {
    if (str.charAt(i).toLowerCase() === str.charAt(j).toLowerCase()) {
      palindromeRecursion(str, i + 1);
    } else {
      return false;
    }
  }
  return true;
}

console.log(palindromeRecursion("madam", 0));
console.log(palindromeRecursion("Madam", 0));
console.log(palindromeRecursion("Pranay", 0));

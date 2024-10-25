const reverseNumber = (n) => {
  let reverseNumber = 0;

  while (n > 0) {
    reverseNumber = reverseNumber * 10 + (n % 10);
    n = Math.floor(n / 10);
  }
  return reverseNumber;
};

function checkPalindrome(n) {
  let reverse = reverseNumber(n);
  return n === reverse;
}

console.log(reverseNumber(7789));
console.log(checkPalindrome(121));

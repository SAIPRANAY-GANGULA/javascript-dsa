function countDigits(n) {
  let count = 0;

  while (n > 0) {
    // console.warn(n % 10);
    n = Math.floor(n / 10);
    count++;
  }
  return count;
}

function countDigits1(n) {
  return Math.floor(Math.log10(n)) + 1;
}

console.log(countDigits(7789));
console.log(countDigits1(7789));

function armStrongNumber(n) {
  let dup = n;
  let sum = 0;
  const noOfDigits = Math.floor(Math.log10(n)) + 1;

  while (n > 0) {
    sum = sum + Math.pow(n % 10, noOfDigits);
    n = Math.floor(n / 10);
  }

  return dup === sum;
}

console.log(armStrongNumber(153));
console.log(armStrongNumber(1634));

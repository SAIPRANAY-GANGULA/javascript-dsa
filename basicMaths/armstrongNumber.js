function armStrongNumber(n) {
  let dup = n;
  let sum = 0;

  while (n > 0) {
    sum = sum + Math.pow(n % 10, 3);
    n = Math.floor(n / 10);
  }

  return dup === sum;
}

console.log(armStrongNumber(153));
console.log(armStrongNumber(371));

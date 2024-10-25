function printAllDivisors(n) {
  for (let i = 1; i <= n; i++) {
    const isDivisor = n % i === 0;
    if (isDivisor) {
      console.log(i);
    }
  }
}

function printAllDivisors1(n, primeCheck) {
  let count = 0;
  for (let i = 1; i < Math.sqrt(n); i++) {
    const isDivisor = n % i === 0;
    if (isDivisor) {
      primeCheck ? count++ : console.log(i);
      const otherFactor = n / i;
      if (otherFactor !== i) {
        primeCheck ? count++ : console.log(otherFactor);
      }
    }
  }

  return count;
}

function isPrimeNumber(n) {
  return printAllDivisors1(n, true) === 2;
}

printAllDivisors(36);
console.log("-----------------------------");
printAllDivisors1(36);
console.log("-----------------------------");
console.log(isPrimeNumber(13));
console.log(isPrimeNumber(11));
console.log(isPrimeNumber(14));

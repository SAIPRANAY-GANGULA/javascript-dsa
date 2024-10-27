function gcdOrHcf(n1, n2) {
  let gcd = 1;
  for (let i = Math.min(n1, n2); i > 1; i--) {
    if (n1 % i === 0 && n2 % i === 0) {
      gcd = i;
      break;
    }
  }

  return gcd;
}

console.log(gcdOrHcf(1, 13));
console.log(gcdOrHcf(11, 13));
console.log(gcdOrHcf(20, 40));
console.log(gcdOrHcf(36, 24));

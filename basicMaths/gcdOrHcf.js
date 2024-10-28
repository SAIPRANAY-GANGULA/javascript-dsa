// https://takeuforward.org/data-structure/find-gcd-of-two-numbers/

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

//Euclidean Algorithm
function gcdOrHcf1(n1, n2) {
  while (n1 > 0 && n2 > 0) {
    if (n1 > n2) n1 = n1 % n2;
    else if (n2 > n1) n2 = n2 % n1;
  }

  if (n1 === 0) return n2;
  return n1;
}

function gcdOrHcf2(n1, n2) {
    if (n2 === 0) return n1;
    return gcdOrHcf2(n2, n1 % n2);
  }
  

// console.log(gcdOrHcf(1, 13));
// console.log(gcdOrHcf1(1, 13));
// console.log(gcdOrHcf(20, 40));
// console.log(gcdOrHcf1(20, 40));
// console.log(gcdOrHcf(11, 13));
// console.log(gcdOrHcf1(11, 13));
// console.log(gcdOrHcf(36, 24));
// console.log(gcdOrHcf1(36, 24));

console.log(gcdOrHcf(1, 13));
console.log(gcdOrHcf(20, 40));
console.log(gcdOrHcf(11, 13));
console.log(gcdOrHcf(36, 24));

console.log("-------------------------");
console.log(gcdOrHcf1(1, 13));
console.log(gcdOrHcf1(20, 40));
console.log(gcdOrHcf1(11, 13));
console.log(gcdOrHcf1(36, 24));

console.log("-------------------------");
console.log(gcdOrHcf2(1, 13));
console.log(gcdOrHcf2(20, 40));
console.log(gcdOrHcf2(11, 13));
console.log(gcdOrHcf2(13, 11));
console.log(gcdOrHcf2(36, 24));
console.log(gcdOrHcf2(24, 36));

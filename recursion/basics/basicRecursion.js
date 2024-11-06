// let count = 0;

// function basicRecursion() {
//   let dupCount;
//   if (count >= 5) {
//     return;
//   }
//   count++;
//   console.log(count);
//   dupCount = count;
//   //   console.log(dupCount);
//   basicRecursion();
//   console.log(dupCount);
//   //   console.log(dupCount);
// }

// basicRecursion();

function print1toN(i, n) {
  if (i > n) return;
  console.log(i);
  print1toN(i + 1, n);
}

print1toN(1, 5);

console.log("----------------------");

function printNto1(i, n) {
  if (i > n) return;
  printNto1(i + 1, n);
  console.log(i);
}

printNto1(1, 5);

console.log("----------------------");

function sumN(i, sum) {
  if (i < 0) {
    console.log(sum);
    return;
  }
  sum += i;
  sumN(i - 1, sum);
}

sumN(5, 0);

console.log("----------------------");

function sumNFunctional(i) {
  if (i === 0) {
    return 0;
  }
  return sumNFunctional(i - 1) + i;
}

console.log(sumNFunctional(5));

console.log("----------------------");

function factorial(n) {
  if (n === 1) return 1;
  return factorial(n - 1) * n;
}

console.log(factorial(5));

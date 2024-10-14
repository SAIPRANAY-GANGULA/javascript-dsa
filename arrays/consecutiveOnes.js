const consecutiveOnes = function (arr) {
  const n = arr.length;
  let count = 0;
  let maxSoFar = 0;

  for (let i = 0; i < n; i++) {
    if (arr[i] === 1) {
      count++;

      if (maxSoFar < count) {
        maxSoFar = count;
      }
    } else {
      count = 0;
    }
  }

  return maxSoFar;
};

console.log(consecutiveOnes([1, 1, 0, 1, 1, 1]));
console.log(consecutiveOnes([1, 1, 0, 1, 1, 1, 1, 0, 0, 1, 1]));

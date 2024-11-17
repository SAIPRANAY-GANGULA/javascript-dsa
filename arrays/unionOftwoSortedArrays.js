function union(arr1, arr2) {
  let result = [];
  let start = 0; // Tracks the next index in the result array
  let i = 0; // Pointer for arr1
  let j = 0; // Pointer for arr2

  // Process both arrays until one is exhausted
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      if (start === 0 || result[start - 1] !== arr1[i]) {
        result[start] = arr1[i];
        start++;
      }
      i++;
    } else if (arr1[i] === arr2[j]) {
      if (start === 0 || result[start - 1] !== arr1[i]) {
        result[start] = arr1[i];
        start++;
      }
      i++;
      j++;
    } else {
      if (start === 0 || result[start - 1] !== arr2[j]) {
        result[start] = arr2[j];
        start++;
      }
      j++;
    }
  }

  // Add remaining elements from arr1
  while (i < arr1.length) {
    if (start === 0 || result[start - 1] !== arr1[i]) {
      result[start] = arr1[i];
      start++;
    }
    i++;
  }

  // Add remaining elements from arr2
  while (j < arr2.length) {
    if (start === 0 || result[start - 1] !== arr2[j]) {
      result[start] = arr2[j];
      start++;
    }
    j++;
  }

  return result;
}

// console.log(union([1, 2, 3, 4, 5], [2, 3, 4, 4, 5])); // [1, 2, 3, 4, 5]
// console.log(union([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], [2, 3, 4, 4, 5, 11, 12])); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

let missingNumber = function (nums) {
    let N = nums.length;
    let totalSum = (N * (N + 1)) / 2;
    let currentSum = 0;

    for (let i = 0; i < N; i++) {
        currentSum += nums[i];
    }
    console.log(totalSum, currentSum)

    return totalSum - currentSum - 1;
};

console.log(missingNumber([0,1]))
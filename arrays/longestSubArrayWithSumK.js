function longestSubArrayWithSumK(arr, K) {
  let n = arr.length;
  let subArray = [];
  let result = 0;

  // finding all subarray's & check it's length & sum
  for (let i = 0; i < n; i++) {
    let temp = [];
    let sum = 0;
    for (let j = i; j < n; j++) {
      temp = [...temp, arr[j]];
      sum += arr[j];
      if (sum === K && temp.length > result) {
        result = temp.length;
        subArray = [...temp];
      }
    }
  }

  console.log(result, subArray);
}

// longestSubArrayWithSumK([2, 3, 5, 1, 9], 10);
// longestSubArrayWithSumK([10, 5, 2, 7, 1, 9], 15);
// longestSubArrayWithSumK([1, -1, 5, -2, 3], 3);

// optimal solution for positive numbers
function longestSubArrayWithSumK1(arr, K) {
  let n = arr.length;
  //   let subArray = [];
  let result = 0;
  //   let temp = [];
  let sum = 0;
  let left = 0;
  let right = 0;

  while (right < n) {
    if (arr[right] + sum <= K) {
      //   temp.push(arr[right]);
      sum += arr[right];
      const tempResult = right - left + 1;
      if (sum === K && tempResult > result) {
        result = tempResult;
        // subArray = [...temp];
      }
      right++;
    } else {
      sum -= arr[left];
      //   temp.shift();
      left++;
    }
  }
  //   console.log(result, subArray);
  console.log(result);
}

longestSubArrayWithSumK1([2, 3, 5, 1, 9], 10);
longestSubArrayWithSumK1([10, 5, 2, 7, 1, 9], 15);
longestSubArrayWithSumK1([1, 2, 3, 1, 1, 1, 1, 3, 3], 6);

function getLongestSubarray(a, k) {
  let n = a.length; // size of the array
  let preSumMap = new Map();
  let sum = 0;
  let maxLen = 0;
  for (let i = 0; i < n; i++) {
    // calculate the prefix sum till index i
    sum += a[i];

    // if the sum = k, update the maxLen
    if (sum === k) {
      maxLen = Math.max(maxLen, i + 1);
    }

    // calculate the sum of remaining part i.e. x - k
    let rem = sum - k;

    // calculate the length and update maxLen
    if (preSumMap.has(rem)) {
      let len = i - preSumMap.get(rem);
      maxLen = Math.max(maxLen, len);
    }

    // update the map checking the conditions
    if (!preSumMap.has(sum)) {
      preSumMap.set(sum, i);
    }
  }

  console.log(preSumMap);

  return maxLen;
}

let a = [2, 3, 5, 1, 9];
let k = 10;
let len = getLongestSubarray(a, k);
console.log("The length of the longest subarray is:", len);
console.log(
  "The length of the longest subarray is:",
  getLongestSubarray([1, -1, 5, -2, 3], 3)
);
console.log(
  "The length of the longest subarray is:",
  getLongestSubarray([2, 0, 0, 3], 3)
);

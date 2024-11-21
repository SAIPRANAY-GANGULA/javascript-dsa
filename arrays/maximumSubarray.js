function maximumSubArray(nums) {
  let maxSoFar = nums[0];
  let currentSum = nums[0];
  let start = -1;
  let end = -1;
  let resultArray = [];

  for (let i = 1; i < nums.length; i++) {
    if (currentSum < 0) {
      currentSum = nums[i];
      start = i;
    } else {
      currentSum += nums[i];
    }

    if (maxSoFar < currentSum) {
      maxSoFar = currentSum;
      end = i;
    }
  }

  // for (let i = start; i <= end; i++) {
  //   resultArray.push(nums[i]);
  // }

  if (start < end) {
    resultArray = nums.slice(start, end + 1);
  } else {
    resultArray = [nums[end]];
  }
  console.log(resultArray);

  return maxSoFar;
}

console.log(maximumSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
console.log(maximumSubArray([-2, -10, -3, -4, -10, -2, -1, -5, -4]));

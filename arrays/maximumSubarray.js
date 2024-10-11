function maximumSubArray(nums) {
  let maxSoFar = nums[0];
  let currentSum = nums[0];

  for (let i = 1; i < nums.length; i++) {
    if (currentSum < 0) {
      currentSum = nums[i];
    } else {
      currentSum += nums[i];
    }

    if (maxSoFar < currentSum) {
      maxSoFar = currentSum;
    }
  }

  return maxSoFar;
}

console.log(maximumSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));

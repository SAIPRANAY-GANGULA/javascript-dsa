function movingZeros(nums) {
  let n = nums.length;
  let start = 0;

  for (let i = 0; i < n; i++) {
    if (nums[i] !== 0) {
      let temp = nums[start];
      nums[start] = nums[i];
      nums[i] = temp;
      start++;
    }
  }

  return nums;
}

console.log(movingZeros([2, 0, 1, 7, 3, 0, 9, 8, 0]));

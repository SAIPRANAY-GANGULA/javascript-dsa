/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let n = nums.length;
  let result = new Array(n);
  let resultIndex = 0;

  result[resultIndex] = nums[0];
  resultIndex++;

  for (let i = 1; i < n; i++) {
    if (nums[i - 1] === nums[i]) {
      continue;
    } else {
      result[resultIndex] = nums[i];
      resultIndex++;
    }
  }

  for (let i = 0; i < n; i++) {
    nums[i] = result[i];
  }

  return resultIndex;
};

var removeDuplicates1 = function (nums) {
  let n = nums.length;
  let j = 1;
  let i = 0;

  while (j < n) {
    if (nums[i] === nums[j]) {
      j++;
      continue;
    } else {
      i++;
      nums[i] = nums[j];
    }
  }

  return i + 1;
};

//using countingSort
function sortColors(nums) {
  let n = nums.length;
  let countArray = new Array(3).fill(0);
  let resultArray = new Array(n);

  for (let i = 0; i < n; i++) {
    countArray[nums[i]]++;
  }

  for (let i = 1; i < countArray.length; i++) {
    countArray[i] = countArray[i] + countArray[i - 1];
  }

  for (let i = n - 1; i >= 0; i--) {
    let position = countArray[nums[i]];
    resultArray[position - 1] = nums[i];
    countArray[nums[i]]--;
  }

  for (let i = 0; i < n; i++) {
    nums[i] = resultArray[i];
  }

  return nums;
}

function sortColors1(nums) {
  let n = nums.length;
  let left = 0;
  let right = n - 1;
  let i = 0;

  while (i <= right) {
    if (nums[i] === 0) {
      let temp = nums[left];
      nums[left] = nums[i];
      nums[i] = temp;
      i++;
      left++;
    } else if (nums[i] === 2) {
      let temp = nums[right];
      nums[right] = nums[i];
      nums[i] = temp;
      right--;
    } else {
      i++;
    }
  }

  return nums;
}

console.log(sortColors([0, 2, 1, 1, 2, 0, 2, 1, 2, 1, 0, 0]));
console.log(sortColors1([0, 2, 1, 1, 2, 0, 2, 1, 2, 1, 0, 0]));

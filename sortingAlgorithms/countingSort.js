// stable sorting, where k is 
function countSort(nums, k) {
  let n = nums.length;
  let countArray = new Array(k).fill(0);
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

console.log(countSort([7, 8, 3, 4, 2, 5, 7, 9, 1, 0], 10));


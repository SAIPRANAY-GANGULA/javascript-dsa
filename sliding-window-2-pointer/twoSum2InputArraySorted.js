function twoSum2InputArraySorted(arr, desiredSum) {
  let start = 0;
  let end = arr.length - 1;
  let sum = 0;

  while (start < end) {
    sum = arr[start] + arr[end];
    if (sum === desiredSum) {
      return [arr[start], arr[end]];
    } else if (sum > desiredSum) {
      end--;
    } else {
      start++;
    }
  }

  return [];
}

console.log(twoSum2InputArraySorted([2,7,11,15], 9));
console.log(twoSum2InputArraySorted([1,2,3,4], 5));


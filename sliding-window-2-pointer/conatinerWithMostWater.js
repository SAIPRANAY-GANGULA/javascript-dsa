// https://leetcode.com/problems/container-with-most-water/description/

function containerWithMostWater(arr) {
  let n = arr.length;
  let maxArea = 0;
  let start = 0;
  let end = n - 1;

  while (start < end) {
    const height = Math.min(arr[start], arr[end]);
    const width = end - start;
    maxArea = Math.max(height * width, maxArea);
    arr[start] > arr[end] ? end-- : start++;
  }

  return maxArea;
}

console.log(containerWithMostWater([1, 8, 6, 2, 5, 4, 8, 3, 7]));

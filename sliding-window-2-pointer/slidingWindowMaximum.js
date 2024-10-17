function slidingWindowMaximum(arr, k) {
  let n = arr.length;
  let ans = [];
  let windowMax = 0;

  for (let i = 0; i < k; i++) {
    windowMax = Math.max(windowMax, arr[i]);
  }
  ans.push(windowMax);

  for (let i = 1; i <= n - k; i++) {
    windowMax = Math.max(windowMax, arr[i + k - 1]);
    ans.push(windowMax);
  }

  return ans;
}

console.log(slidingWindowMaximum([1, 3, -1, -3, 5, 3, 6, 7], 3));

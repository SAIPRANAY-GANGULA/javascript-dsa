function rotateArrayByK(arr, k) {
  const n = arr.length;
  k = k % n;
  reverse(0, n - 1, arr);
  reverse(0, k - 1, arr);
  reverse(k, n - 1, arr);

  return arr;
}

function reverse(start, end, arr) {
  while (start < end) {
    let temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;
    start++;
    end--;
  }
}

console.log(rotateArrayByK([1, 2, 3, 4, 5, 6, 7], 4));

function productOfArrayExceptSelf(arr) {
  const n = arr.length;
  const res = new Array();
  const left = new Array(n);
  const right = new Array(n);

  left[0] = 1;
  for (let i = 1; i < n; i++) {
    left[i] = arr[i - 1] * left[i - 1];
  }

  right[n - 1] = 1;
  for (let j = n - 2; j >= 0; j--) {
    right[j] = arr[j + 1] * right[j + 1];
  }

  for (let i = 0; i < n; i++) {
    res[i] = left[i] * right[i];
  }

  return res;
}

console.log(productOfArrayExceptSelf([5, 2, 3, 4]));
console.log(productOfArrayExceptSelf([6, 4, 2, 3, 0, 1]));
console.log(productOfArrayExceptSelf([0, 4, 2, 3, 0, 1]));
console.log(productOfArrayExceptSelf([7]));
console.log(productOfArrayExceptSelf([0]));

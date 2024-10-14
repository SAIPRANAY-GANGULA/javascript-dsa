function maximumProductSubarray(arr) {
  let maxProduct = 0;
  let currentProduct = 1;

  if (arr.length === 1) {
    return maxProduct;
  }

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      currentProduct *= arr[i];
      maxProduct = Math.max(maxProduct, currentProduct);
    } else {
      currentProduct = 1;
    }
  }

  currentProduct = 1;
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] !== 0) {
      currentProduct *= arr[i];
      maxProduct = Math.max(maxProduct, currentProduct);
    } else {
      currentProduct = 1;
    }
  }

  return maxProduct;
}

console.log(maximumProductSubarray([2,3,-2,-5,0,-6,-7]));
console.log(maximumProductSubarray([2,3,-2,-5,0,-6,-7, 8]));
console.log(maximumProductSubarray([2,3,-2,-5,1,6,-7, 8]));

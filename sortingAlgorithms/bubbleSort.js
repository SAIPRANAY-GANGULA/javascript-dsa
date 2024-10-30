function bubbleSort(arr) {
  let n = arr.length;
  let i = 0;
  let j = 1;
  let noOfIterations = 1;

  //my own while loop implementation by understanding the theory
  while (noOfIterations < n) {
    if (arr[i] > arr[j]) {
      let temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
    i++;
    j++;
    if (j === n - noOfIterations + 1) {
      i = 0;
      j = 1;
      noOfIterations++;
    }
  }

  return arr;
}

// better implementation: key thing I missed is comparing j & j + 1 (not i & j)
function bubbleSort1(arr) {
  let n = arr.length;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }

  return arr;
}

console.log(bubbleSort([5, 4, 3, 2, 1]));
console.log(bubbleSort1([5, 4, 3, 2, 1]));

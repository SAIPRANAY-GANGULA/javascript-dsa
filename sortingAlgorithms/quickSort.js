function partitionAlgo(arr) {
  let first = 0;
  let current = 0;
  let pivot = arr.length - 1;

  while (current <= pivot) {
    if (arr[current] <= arr[pivot]) {
      let temp = arr[current];
      arr[current] = arr[first];
      arr[first] = temp;
      first++;
      current++;
    } else {
      current++;
    }
  }

  return arr;
}

console.log(partitionAlgo([2, 5, 1, 6, 7, 8, 4]));
console.log(partitionAlgo([5, 4, 3, 2, 1]));
console.log(partitionAlgo([1, 2, 3, 4, 5]));

console.log("-------------------------------------");

// let count = 0;
function partition(arr, start, pivot) {
  let first = start;
  let current = start;

  while (current <= pivot) {
    // count++;
    if (arr[current] <= arr[pivot]) {
      let temp = arr[current];
      arr[current] = arr[first];
      arr[first] = temp;
      first++;
    }
    current++;
  }

  return [first - 2, first];
}

function quickSortHelper(arr, start, end) {
  if (start < end) {
    let [left, right] = partition(arr, start, end);
    quickSortHelper(arr, start, left);
    quickSortHelper(arr, right, end);
  }
}

function quickSort(arr) {
  quickSortHelper(arr, 0, arr.length - 1);

  return arr;
}

console.log(quickSort([8, 3, 7, 2, 6, 1]));
console.log(quickSort([1, 2, 3, 4, 5]));
console.log(quickSort([5, 4, 3, 2, 1]));
console.log(quickSort([2, 4, 7, 18, 2, 5, 8, 9, 10, 20, 21]));

// console.log(count);

function mergeTwoSortedArrays(arr1, arr2) {
  let n1 = arr1.length;
  let n2 = arr2.length;
  let n = n1 + n2;
  let resultArray = new Array(n);
  let p1 = 0;
  let p2 = 0;

  for (let i = 0; i < n; i++) {
    if (p1 < n1 && p2 < n2) {
      if (arr1[p1] < arr2[p2]) {
        resultArray[i] = arr1[p1++];
      } else {
        resultArray[i] = arr2[p2++];
      }
      continue;
    }

    if (p1 === n1) {
      resultArray[i] = arr2[p2++];
      continue;
    }

    if (p2 === n2) {
      resultArray[i] = arr1[p1++];
      continue;
    }
  }

  return resultArray;
}

console.log(mergeTwoSortedArrays([2, 5, 8, 9, 10, 20, 21], [2, 4, 7, 18]));
console.log(mergeTwoSortedArrays([2, 4, 7, 18], [2, 5, 8, 9, 10, 20, 21]));

function merge(arr, start, mid, end) {
  let result = [];
  let i = start;
  let j = mid + 1;
  while (i <= mid && j <= end) {
    if (arr[i] < arr[j]) {
      result.push(arr[i++]);
    } else {
      result.push(arr[j++]);
    }
  }

  while (i <= mid) {
    result.push(arr[i++]);
  }

  while (j <= end) {
    result.push(arr[j++]);
  }

  for (let i = 0; i < result.length; i++) {
    arr[start + i] = result[i];
  }
}

function mergeSortHelper(arr, start, end) {
  if (start < end) {
    let mid = Math.floor((start + end) / 2);
    mergeSortHelper(arr, start, mid);
    mergeSortHelper(arr, mid + 1, end);
    merge(arr, start, mid, end);
  }

  return arr;
}

function mergeSort(arr) {
  return mergeSortHelper(arr, 0, arr.length - 1);
}

console.log(mergeSort([2, 4, 7, 18, 2, 5, 8, 9, 10, 20, 21]));

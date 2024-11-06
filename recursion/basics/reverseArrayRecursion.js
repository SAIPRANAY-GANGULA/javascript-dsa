function reverseArrayRecursion(arr, i, j) {
  let temp;
  if (i < j) {
    temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
    reverseArrayRecursion(arr, i + 1, j - 1);
  }
  return arr;
}
console.log(reverseArrayRecursion([1, 2, 3, 4, 5], 0, 4));
console.log(reverseArrayRecursion([1, 2, 3, 4, 5, 6], 0, 5));

console.log("--------------------");

function reverseArrayRecursion1(arr, i) {
  let temp;
  let j = arr.length - 1 - i;
  if (i < j) {
    temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
    reverseArrayRecursion1(arr, i + 1);
  }
  return arr;
}

console.log(reverseArrayRecursion1([1, 2, 3, 4, 5], 0));
console.log(reverseArrayRecursion1([1, 2, 3, 4, 5, 6], 0));

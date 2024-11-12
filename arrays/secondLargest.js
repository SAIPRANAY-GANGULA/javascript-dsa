function secondLargest(arr) {
  let size = arr.length;
  let largest = arr[0];
  let secondLargest;

  for (let i = 1; i < size; i++) {
    if (arr[i] > largest) {
      secondLargest = largest;
      largest = arr[i];
    } else if (arr[i] < largest && secondLargest < arr[i]) {
      secondLargest = arr[i];
    }
  }

  return secondLargest;
}

console.log(secondLargest([1, 4, 2, 3, 5]));

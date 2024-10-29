function spiralMatrix(arr) {
  let rows = arr.length;
  let cols = arr[0].length;

  let top = 0;
  let bottom = rows - 1;
  let left = 0;
  let right = cols - 1;
  let direction = 0;

  let result = [];

  while (top <= bottom && left <= right) {
    if (direction === 0) {
      for (let i = left; i <= right; i++) {
        result.push(arr[top][i]);
      }
      top++;
      direction = 1;
      continue;
    }

    if (direction === 1) {
      for (let i = top; i <= bottom; i++) {
        result.push(arr[i][right]);
      }
      right--;
      direction = 2;
      continue;
    }

    if (direction === 2) {
      for (let i = right; i >= left; i--) {
        result.push(arr[bottom][i]);
      }
      bottom--;
      direction = 3;
      continue;
    }

    if (direction === 3) {
      for (let i = bottom; i >= top; i--) {
        result.push(arr[i][left]);
      }
      left++;
      direction = 0;
      continue;
    }
  }

  return result;
}

console.log(
  spiralMatrix([
    [1, 2, 3, 4, 5],
    [18, 19, 20, 21, 6],
    [17, 28, 29, 22, 7],
    [16, 27, 30, 23, 8],
    [15, 26, 25, 24, 9],
    [14, 13, 12, 11, 10],
  ])
);

function setMatrixZeros1(matrix) {
  let n = matrix.length;
  let m = matrix[0].length;

  let row = new Array(m).fill(false);
  let col = new Array(n).fill(false);

  // marking rows & col which needs to made zero
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (matrix[i][j] === 0) {
        row[i] = true;
        col[j] = true;
      }
    }
  }

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (row[i] || col[j]) {
        matrix[i][j] = 0;
      }
    }
  }

  return matrix;
}

function setMatrixZeros2(matrix) {
  let rowCount = matrix.length;
  let colCount = matrix[0].length;

  let row0 = false;
  let col0 = false;

  for (let i = 0; i < colCount; i++) {
    if (matrix[0][i] === 0) {
      row0 = true;
      break;
    }
  }

  for (let j = 0; j < rowCount; j++) {
    if (matrix[j][0] === 0) {
      col0 = true;
      break;
    }
  }

  for (let i = 1; i < rowCount; i++) {
    for (let j = 1; j < colCount; j++) {
      if (matrix[i][j] === 0) {
        matrix[0][j] = 0;
        matrix[i][0] = 0;
      }
    }
  }

  for (let i = 1; i < rowCount; i++) {
    for (let j = 1; j < colCount; j++) {
      if (matrix[i][0] === 0 || matrix[0][j] === 0) {
        matrix[i][j] = 0;
      }
    }
  }

  // making 0th row zero
  if (row0) {
    for (let i = 0; i < colCount; i++) {
      matrix[0][i] = 0;
    }
  }

  // making 0th col zero
  if (col0) {
    for (let i = 0; i < rowCount; i++) {
      matrix[i][0] = 0;
    }
  }

  return matrix;
}

console.log(
  setMatrixZeros1([
    [1, 1, 1],
    [1, 0, 1],
    [1, 1, 1],
  ])
);
console.log(
  setMatrixZeros2([
    [1, 1, 1],
    [1, 0, 1],
    [1, 1, 1],
  ])
);

console.log(
  setMatrixZeros1([
    [1, 1, 1, 1],
    [1, 0, 1, 1],
    [1, 1, 0, 1],
    [0, 1, 1, 1],
    [0, 1, 1, 1],
  ])
);

console.log(
  setMatrixZeros2([
    [1, 1, 1, 1],
    [1, 0, 1, 1],
    [1, 1, 0, 1],
    [0, 1, 1, 1],
    [0, 1, 1, 1],
  ])
);

function setMatrixZeros1(matrix) {
  let m = matrix.length;
  let n = matrix[0].length;

  let row = new Array(m).fill(false);
  let col = new Array(n).fill(false);

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
  let m = matrix.length;
  let n = matrix[0].length;

  let row0 = false;
  let col0 = false;

  for (let i = 0; i < n; i++) {
    if (matrix[0][i] === 0) {
      row0 = true;
      break;
    }
  }

  for (let j = 0; j < m; j++) {
    if (matrix[j][0] === 0) {
      col0 = true;
      break;
    }
  }

  for (let i = 1; i < n; i++) {
    for (let j = 1; j < m; j++) {
      if (matrix[i][j] === 0) {
        matrix[0][j] = 0;
        matrix[i][0] = 0;
      }
    }
  }

  for (let i = 1; i < n; i++) {
    for (let j = 1; j < m; j++) {
      if (matrix[i][0] === 0 || matrix[0][j] === 0) {
        matrix[i][j] = 0;
      }
    }
  }

  if (row0) {
    for (let i = 0; i < n; i++) {
      matrix[0][i] = 0;
    }
  }

  if (col0) {
    for (let i = 0; i < m; i++) {
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
  setMatrixZeros1([
    [1, 1, 1, 1],
    [1, 0, 1, 1],
    [1, 1, 0, 1],
    [0, 1, 1, 1],
  ])
);

console.log(
  setMatrixZeros2([
    [1, 1, 1, 1],
    [1, 0, 1, 1],
    [1, 1, 0, 1],
    [0, 1, 1, 1],
  ])
);

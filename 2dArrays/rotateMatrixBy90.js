const rotate = function (matrix) {
  let n = matrix.length;
  let result = new Array(n).fill(0).map(() => new Array(n).fill(0));

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      result[j][n - 1 - i] = matrix[i][j];
    }
  }

  return result;
};


const rotate1 = function (matrix) {
  let n = matrix.length;

  //transpose of matrix
  for (let i = 0; i < n; i++) {
    for (let j = i; j < n; j++) {
      let temp = matrix[i][j];
      matrix[i][j] = matrix[j][i];
      matrix[j][i] = temp;
    }
  }

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < Math.floor(n / 2); j++) {
      let temp = matrix[i][j];
      matrix[i][j] = matrix[i][n - 1 - j];
      matrix[i][n - 1 - j] = temp;
    }
  }

  return matrix;
};

//[[7,4,1],[8,5,2],[9,6,3]]
console.log(
  rotate([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
);

// [[15,13,2,5],[14,3,4,1],[12,6,8,9],[16,7,10,11]]
console.log(
  rotate([
    [5, 1, 9, 11],
    [2, 4, 8, 10],
    [13, 3, 6, 7],
    [15, 14, 12, 16],
  ])
);

console.log('------------------------ OPTIMAL SOLUTION ---------------------------')

//[[7,4,1],[8,5,2],[9,6,3]]
console.log(
  rotate1([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
);

// [[15,13,2,5],[14,3,4,1],[12,6,8,9],[16,7,10,11]]
console.log(
  rotate1([
    [5, 1, 9, 11],
    [2, 4, 8, 10],
    [13, 3, 6, 7],
    [15, 14, 12, 16],
  ])
);

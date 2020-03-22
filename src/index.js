module.exports = function solveSudoku(matrix) {

  sudokuSolver(matrix);
  console.log(matrix);

  function isValid(matrix, row, column, k) {
    for (let i = 0; i < 9; i++) {
      const m = 3 * Math.floor(row / 3) + Math.floor(i / 3);
      const n = 3 * Math.floor(column / 3) + i % 3;
      if (matrix[row][i] == k || matrix[i][column] == k || matrix[m][n] == k) {
        return false;
      }
    }
    return true;
  }


  function sudokuSolver(matrix) {
    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
        if (matrix[i][j] == 0) {
          for (let k = 1; k <= 9; k++) {
            if (isValid(matrix, i, j, k)) {
              matrix[i][j] = k;
              if (sudokuSolver(matrix)) {
                return true;
              } else {
                matrix[i][j] = 0;
              }
            }
          }
          return false;
        }
      }
    }
    return true;
  }
  return matrix
}
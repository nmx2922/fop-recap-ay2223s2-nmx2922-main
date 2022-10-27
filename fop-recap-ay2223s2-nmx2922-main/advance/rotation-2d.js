const { rotation } = require('./rotation'); //Hint

/**
 *
 * @param {int [][]} arr: m x m (square) array
 * @param {int} n: Number of times to rotate the parameter of the array clockwise, >= 1 && < arr.length * 10
 *
 * @return rotated 2d array
 *
 * @example
 *
 * arr:
 * 1 2 3
 * 4 5 6
 * 7 8 9
 *
 * n = 1
 *
 * result:
 * 4 1 2
 * 7 5 3
 * 8 9 6
 *
 * @example
 *
 * arr:
 *  1  2  3  4
 *  5  6  7  8
 *  9 10 11 12
 * 13 14 15 16
 *
 * n = 5
 *
 * result:
 * 15 14 13  9
 * 16  6  7  5
 * 12 10 11  1
 *  8  4  3  2
 */
module.exports.rotation2d = function rotation2d(arr, n) {
//get size 
var size=arr.length;
var newArr=[]
  
for(var i=0;arr.length>i;i++)
k = arr[i][j];

arr[i][j] = arr[n - 1 -j][i];
arr[n - 1 -j][i] = arr[n - 1 - i][n - 1 -j];
arr[n - 1 - i][n - 1 - j] = arr[j][n - 1 - i];
arr[j][n - 1 -i] = k


};
/*
function rotate(matrix) {
  const n = matrix.length;
  const x = Math.floor(n/ 2);
  const y = n - 1;
  for (let i = 0; i < x; i++) {
     for (let j = i; j < y - i; j++) {
        k = matrix[i][j];
        matrix[i][j] = matrix[y - j][i];
        matrix[y - j][i] = matrix[y - i][y - j];
        matrix[y - i][y - j] = matrix[j][y - i]
        matrix[j][y - i] = k
     }
  }
}
*/
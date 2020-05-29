/**
 *  Matrix multiplication
 * 
 *  1 2   2 3   = [1*2 + 2* 1, 1*3 + 2*0 ]
 *  3 4   1 0     [3 *2 + 4 *1, 3*3 + 4*0]
 * 
 * 

let mat1 = [[1, 2], [3, 4]];
let mat2 = [[2, 3], [1, 0]];
// Convert these nested loops into a function
// that prints any matrix
for (let i = 0; i < mat1.length; ++i) {
    let row = "";
    for (let j = 0; j < mat1[i].length; ++j) {
        row += mat1[i][j];
        row += "\t";
    }
    console.log(row);
} */

let mat1 = [
  [1, 2],
  [3, 4],
];
let mat2 = [
  [2, 3],
  [1, 0],
];
function matMul(mat1, mat2) {
  let result = [];
  for (var i = 0; i < mat1.length; i++) {
    result[i] = [];
    for (var j = 0; j < mat2[0].length; j++) {
      let sum = 0;
      for (var k = 0; k < mat1[0].length; k++) {
        sum = sum + mat1[i][k] * mat2[k][j];
      }
      result[i][j] = sum;
    }
  }
  return result;
}

let answer = matMul(mat1, mat2);
console.log(answer);

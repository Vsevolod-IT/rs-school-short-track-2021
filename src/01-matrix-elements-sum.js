/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  let sum = 0;
  const countRow = matrix.length;
  const countCol = matrix[0].length;
  const tmp = [];

  for (let i = 0; i < countCol; i++) {
    for (let j = 0; j !== countRow; j++) {
      tmp.push(matrix[j].pop());
    }
    tmp.reverse();
    for (let k = 0; k !== countRow; k++) {
      const f = tmp.pop();
      if (f === 0) {
        break;
      } else {
        sum += f;
      }
    }
    tmp.length = 0;
  }
  return sum;
}

module.exports = getMatrixElementsSum;

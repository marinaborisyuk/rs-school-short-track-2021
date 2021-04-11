/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const indexArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === -1) {
      indexArr.push(i);
    }
  }
  let count = 0;
  for (let j = 0; j < indexArr.length; j++) {
    arr.splice(indexArr[j] - count, 1);
    count++;
  }
  arr.sort((a, b) => a - b);
  for (let j = 0; j < indexArr.length; j++) {
    arr.splice(indexArr[j], 0, -1);
  }
  return arr;
}

module.exports = sortByHeight;

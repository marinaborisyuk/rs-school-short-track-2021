/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  // throw new Error('Not implemented');
  const newStr = n.toString();
  const numberArr = [];
  for (let i = 0; i < newStr.length; i++) {
    numberArr.push(Number(newStr.replace(newStr[i], '')));
  }
  let maxValue = numberArr[0];
  for (let j = 0; j < numberArr.length; j++) {
    if (maxValue < numberArr[j]) {
      maxValue = numberArr[j];
    }
  }
  return maxValue;
}

module.exports = deleteDigit;

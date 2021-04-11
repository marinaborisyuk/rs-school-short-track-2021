/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  // throw new Error('Not implemented');
  const arr = str.split('');
  let count = 0;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] === arr[i - 1]) {
      count++;
      if (arr[i] !== arr[i + 1]) {
        const index = arr.indexOf(arr[i]);
        arr.splice(i - count, count, count + 1);
        count = 0;
        i = index - 1;
      }
    }
  }
  return arr.join('');
}

module.exports = encodeLine;

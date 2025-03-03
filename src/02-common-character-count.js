/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  const charArr1 = s1.split('');
  const charArr2 = s2.split('');
  let sum = 0;
  for (let i = 0; i < charArr1.length; i++) {
    if (charArr2.indexOf(charArr1[i]) !== -1) {
      sum++;
      charArr2.splice(charArr2.indexOf(charArr1[i]), 1);
    }
  }
  return sum;
}

module.exports = getCommonCharacterCount;

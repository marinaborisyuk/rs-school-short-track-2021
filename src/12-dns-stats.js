/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(/* domains */) {
  throw new Error('Not implemented');
  // const arr = domains.join('.').split('.');
  // console.log(arr);

  // for (let i = 0; i < arr.length; i++) {
  //   let count = 1;
  //   for (let j = 0; j < arr.lengthl j++) {

  //   }
  // }
  // return 1;
}

module.exports = getDNSStats;

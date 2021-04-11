/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  // throw new Error('Not implemented');
  let arr = [];
  for (let i = email.length - 1; i >= 0; i--) {
    if (email[i] !== '@') {
      arr.push(email[i]);
      if (email[i - 1] === '@') {
        break;
      }
    }
  }
  arr = arr.reverse().join('');
  return arr;
}

module.exports = getEmailDomain;

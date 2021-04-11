/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and l = 3,
 * the output should be [1, 2, 4, 5]
 *
  * Singly - linked lists are already defined with this interface
  * function ListNode(x) {
  *   this.value = x;
  *   this.next = null;
  * }
 */
const ListNode = require('../extensions/list-node');

function removeKFromList(l, k) {
  const dummy = new ListNode();
  dummy.next = l;
  let current = dummy;
  while (current.next) {
    if (current.next.value === k) {
      current.next = current.next.next;
    } else {
      current = current.next;
    }
  }
  return dummy.next;
}

module.exports = removeKFromList;

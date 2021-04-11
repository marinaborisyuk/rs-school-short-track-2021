// const ListNode = require('../extensions/list-node');
/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 *
 */

class Queue {
  // constructor() {
  // this.head = null;
  // this.tail = null;
  // this.size = 0;
  // }

  get size() {
    throw new Error('Not implemented');
    // return this.size;
  }

  enqueue(/* element */) {
    throw new Error('Not implemented');
    // const newElem = new ListNode(element);
    // if (this.tail === null) {
    //   this.tail = newElem;
    // } else {
    //   this.tail = newElem;
    //   newElem.next = this.tail;
    // }
    // this.size += 1;
  }

  dequeue() {
    throw new Error('Not implemented');
    // this.size -= 1;
    // let item = this.tail;
    // let newStart = item;
    // while (item.next !== null) {
    //   newStart = item;
    //   item = item.next;
    // }
    // newStart.next = null;
    // return item.value;
  }
}

module.exports = Queue;

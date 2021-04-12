const ListNode = require('../extensions/list-node');
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
  constructor() {
    this.queue = null;
    // this.size = 0;
  }

  // get size() {
  //   // throw new Error('Not implemented');
  //   return this.size;
  // }

  // set size(i) {
  //   this.size = i;
  // }

  enqueue(element) {
    // throw new Error('Not implemented');
    if (this.queue === null) {
      this.queue.next = new ListNode(element);
    } else {
      let tmp = this.queue;
      while (tmp.next !== null) {
        tmp = tmp.next;
      }
      tmp.next = new ListNode(element);
    }
    // this.size(this.size--);
  }

  dequeue() {
    // throw new Error('Not implemented');
    const tmp = this.queue;
    this.queue = this.queue.next;
    return tmp.element;
  }
}

module.exports = Queue;

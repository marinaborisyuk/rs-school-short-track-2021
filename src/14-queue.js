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
  }

  enqueue(element) {
    if (this.queue === null) {
      this.queue = new ListNode(element);
    } else {
      let tmp = this.queue;
      while (tmp.next !== null) {
        tmp = tmp.next;
      }
      tmp.next = new ListNode(element);
    }
  }

  dequeue() {
    const tmp = this.queue;
    this.queue = this.queue.next;
    return tmp.value;
  }
}

module.exports = Queue;

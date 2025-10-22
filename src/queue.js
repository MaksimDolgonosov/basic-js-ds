const { NotImplementedError } = require('../lib/errors');
// const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  constructor() {
    this.queue = null
  }
  getUnderlyingList() {
    return this.queue;
  }

  enqueue(value) {
    if (this.queue === null) {
      this.queue = { value, next: null }
      return
    }

    function addItemToQueue(enter, value) {
      if (enter.next) {
        addItemToQueue(enter.next, value)
      } else {
        enter.next = { value, next: null }
        return
      }
    }

    addItemToQueue(this.queue, value);
  }

  dequeue() {
    let data = this.queue.value;
    this.queue = this.queue.next;
    return data;
  }

}

module.exports = {
  Queue
};

const { NotImplementedError } = require('../lib/errors');
// const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */
function removeKFromList(l, k) {



  function checkNode(node) {

    if (node.next) {
      if (node.value == k && node.next) {
        node.value = node.next.value;
        node.next = node.next.next;

        checkNode(node);
      } else if (node.value == k && !node.next) {
        node = null;
        return node
      } else {
        checkNode(node.next);

      }
      if (node.next.value == k && !node.next.next) {
        node.next = null;
        return node;
      }

    }
    return node
  }

  return checkNode(l);


}

module.exports = {
  removeKFromList
};

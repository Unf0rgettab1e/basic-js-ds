const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');
const { assert } = require('chai');

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
  if (l.value === k) {
    return removeKFromList(l.next, k);
  } else {
    const resultList = new ListNode(l.value);
    let currentNode = resultList;
    while (l.next) {
      let nodeToCheck = l.next;
      if (nodeToCheck.value !== k) {
        currentNode.next = nodeToCheck;
        currentNode = currentNode.next;
      }
      l = l.next;
    }
    currentNode.next = null;
    return resultList;
  }
}

module.exports = {
  removeKFromList,
};

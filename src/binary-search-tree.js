const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
class BinarySearchTree {
  constructor(data) {
    this.rootNode = data ? new Node(data) : null;
  }

  root() {
    return this.rootNode;
  }

  add(data) {
    if (!this.root()) this.rootNode = new Node(data);
    else if (this.root().data > data) {
      if (!this.root().left || !this.root().left.root())
        this.root().left = new BinarySearchTree(data);
      else this.root().left.add(data);
    } else {
      if (!this.root().right || !this.root().right.root())
        this.root().right = new BinarySearchTree(data);
      else this.root().right.add(data);
    }
  }

  has(data) {
    if (!this.root()) return false;
    if (this.root().data === data) return true;
    if (this.root().left && this.root().data > data) return this.root().left.has(data);
    else if (this.root().right && this.root().data < data) return this.root().right.has(data);
    else return false;
  }

  find(data) {
    if (this.root() && this.root().data === data) return this.root();
    if (this.root().left && this.root().data > data) return this.root().left.find(data);
    else if (this.root().right && this.root().data < data) return this.root().right.find(data);
    else return null;
  }

  remove(data) {
    if (this.has(data)) {
      // console.log('Has');
      if (this.root().data === data) {
        // console.log('Equal', this.root().data);
        if (!this.root().left && !this.root().right) {
          // console.log('No children', this.root().data);
          this.rootNode = null;
          // console.log('No children', this.root());
        } else if (!this.root().left) {
          // console.log('No left');
          this.rootNode = this.root().right.root();
        } else if (!this.root().right) {
          // console.log('No right');
          this.rootNode = this.root().left.root();
        } else {
          // console.log('Left && right');
          const minRightNode = this.root().right.min();
          console.log(minRightNode, 'min');
          this.root().right.remove(minRightNode);
          this.rootNode.data = minRightNode;
        }
        return;
      } else if (this.root().data > data) {
        // console.log('Next left');
        this.root().left.remove(data);
      } else {
        // console.log('Next right');
        this.root().right.remove(data);
      }
    }
  }

  min() {
    if (!this.root()) {
      // console.log('Root null');
      return null;
    }
    if (!this.root().left) {
      // console.log('No left, root == min');
      return this.root().data;
    } else {
      // console.log('Yes left, left == min');
      if (!this.root().left.root()) {
        this.rootNode.left = null;
        return this.root().data;
      }
      return this.root().left.min();
    }
  }

  max() {
    if (!this.root()) return null;
    if (!this.root().right) return this.root().data;
    else {
      if (!this.root().right.root()) {
        this.rootNode.right = null;
        return this.root().data;
      }
      return this.root().right.max();
    }
  }
}

// const tree = new BinarySearchTree();
// tree.add(9);
// tree.add(14);
// tree.add(2);
// tree.add(6);
// tree.add(128);
// tree.add(8);
// tree.add(31);
// tree.add(54);
// tree.add(1);
// tree.add(5);
// tree.add(130);
// tree.add(25);
// tree.add(12);
// tree.add(10);
// tree.remove(14);
// console.log('--------');

// tree.remove(8);
// console.log('--------');

// tree.remove(9);
// console.log('--------');

// tree.remove(10);
// // console.log('--------');

// console.log(tree.has(14), 14);
// console.log(tree.has(8), 8);
// console.log(tree.has(9), 9);
// console.log(tree.has(2), 2);
// console.log(tree.has(6), 6);
// console.log(tree.has(128), 128);
// console.log(tree.has(31), 31);
// console.log(tree.has(54), 54);
// console.log(tree.has(1), 1);
// console.log(tree.has(5), 5);
// console.log(tree.has(130), 130);
// console.log(tree.has(25), 25);
// console.log(tree.has(12), 12);
// console.log(tree.has(11), 11);

module.exports = {
  BinarySearchTree,
};

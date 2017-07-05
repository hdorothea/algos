class Node {
  constructor(data, childNodes = []) {
    this.childNodes = childNodes;
    this.data = data;
  }
}

class BinarySearchTree {

  constructor(rootData) {
    this.root = new Node(rootData);
  }

  add(data, parent = this.root) {
    if (data < parent.data) {
      if (!parent.childNodes[0]) {
        parent.childNodes[0] = new Node(data);
      } else {
        this.add(data, parent.childNodes[0]);
      }
    } else {
      if (!parent.childNodes[1]) {
        parent.childNodes[1] = new Node(data);
      } else {
        this.add(data, parent.childNodes[1]);
      }
    }
  }
}

BinarySearchTree.prototype.toString = function () {
  function printNode(node) {
    console.log(`node:${node.data}`);
    if (node.childNodes[0]) {
      printNode(node.childNodes[0]);
    }
    if (node.childNodes[1]) {
      printNode(node.childNodes[1]);
    }
  }
  printNode(this.root);
};

module.exports = BinarySearchTree;


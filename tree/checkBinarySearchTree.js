const BinarySearchTree = require('./binarySearchTree');


function parentGreataerLeftLessRightChild(parent) {
  if (parent.childNodes.length <= 0) {
    return true;
  }

  if (!parent.childNodes[0] && parent.childNodes[1]) {
    return parentGreataerLeftLessRightChild(parent.childNodes[1]);
  }

  if (!parent.childNodes[1] && parent.childNodes[0]) {
    return parentGreataerLeftLessRightChild(parent.childNodes[0]);
  }

  if (parent.childNodes[0].data < parent.data &&
    parent.childNodes[1].data > parent.data) {
    return (parentGreataerLeftLessRightChild(parent.childNodes[0]) &&
      parentGreataerLeftLessRightChild(parent.childNodes[1]));
  } else {
    return false;
  }
}

const bs = new BinarySearchTree(4);
bs.add(2);
bs.add(6);
bs.add(1);
bs.add(3);
bs.add(5);
bs.add(7);
bs.toString();
console.log(parentGreataerLeftLessRightChild(bs.root));
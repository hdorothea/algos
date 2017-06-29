// write a function to determine if a given Linked List is circular
const LinkedList = require('./linkedList').LinkedList;

function hasCircle(lL) {
  let currentNode = lL.tail;
  const nodeSet = new Set();
  while (currentNode.next) {
    if (nodeSet.has(currentNode)) {
      return true;
    } else {
      nodeSet.add(currentNode);
    }
    currentNode = currentNode.next;
  }
  return false;
}


const linkedList1 = new LinkedList([1, 2, 3, 4, 5, 6]);
linkedList1.append(linkedList1.tail.next.next);
const linkedList2 = new LinkedList([1, 2, 3, 4, 5, 6]);

const hasCircle1 = hasCircle(linkedList1);
const hasCircle2 = hasCircle(linkedList2);

console.log(hasCircle1);
console.log(hasCircle2);
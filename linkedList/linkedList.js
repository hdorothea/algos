// implement a linked list datastructure

class Node {
  constructor(data, next) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {

  constructor(datas) {
    if (datas.length < 1) {
      return;
    }

    if (typeof datas === 'number') {
      datas = [datas];
    }

    this.initializeFirstElement(datas[0]);
    for (const data of datas.slice(1, datas.length)) {
      this.append(data);
    }
  }

  initializeFirstElement(firstElement) {
    if (firstElement.constructor !== Node) {
      firstElement = new Node(firstElement)
    }
    this.head = firstElement;
    this.tail = this.head;
  }

  append(element) {
    if (element.constructor !== Node) {
      element = new Node(element);
    }

    if (!this.tail) {
      this.initializeFirstElement(element);
    }

    this.head.next = element;
    this.head = element;
  }
}

LinkedList.prototype.toString = function linkedListToString() {
  let currentElement = this.tail;
  const linkedListString = [];
  if (currentElement) {
    while (currentElement.next) {
      linkedListString.push(`(${currentElement.data} => ${currentElement.next.data})`);
      currentElement = currentElement.next;
    }
    linkedListString.push(`(${currentElement.data} => ${currentElement.next})`);
    return linkedListString.join('');
  }
  return '';
};

const linkedList = new LinkedList([4, 7, 8, 9, 2, 3]);
linkedList.append(5);
console.log(linkedList.toString());

module.exports = {
  LinkedList
};

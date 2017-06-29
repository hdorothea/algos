// implement a Queue using two stack

class Queue {
  constructor() {
    this.enqueStack = [];
    this.dequeStack = [];
  }

  _copyToEnque() {
    while (this.dequeStack.length > 0) {
      this.enqueStack.push(this.dequeStack.pop());
    }
  }

  _copyToDeque() {
    while (this.enqueStack.length > 0) {
      this.dequeStack.push(this.enqueStack.pop());
    }
  }

  enque(element) {
    this._copyToEnque();
    return this.enqueStack.push(element);
  }

  deque() {
    this._copyToDeque();
    return this.dequeStack.pop();
  }
}


Queue.prototype.toString = function queueToString() {
  this._copyToDeque();
  return this.dequeStack.join('');
};

const queue = new Queue();
queue.enque(1);
queue.enque(2);
queue.enque(3);
queue.enque(4);
console.log(queue.deque());
console.log(queue.deque());
console.log(queue.deque());
console.log(queue.deque());
console.log(queue.deque());
queue.enque(5);
queue.enque(6);
console.log(queue.toString());

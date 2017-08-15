// Should have the methods: enqueue, dequeue, and a getter for the property size
// enqueue should add an item to the back of the queue.
// dequeue should remove an item from the front of the queue.
// size should return the number of items in the queue.

class Queue {
  constructor() {
    this.queueArr = [];
  }
  enqueue(item) {
    return this.queueArr.push(item);
  }
  dequeue(item) {
    return this.queueArr.shift(item);
  }
  get size() {
    return this.queueArr.length;
  }
}

module.exports = Queue;

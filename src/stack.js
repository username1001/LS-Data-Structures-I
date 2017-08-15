// Should have the methods: add, remove, and a getter for the property size
// add should accept a value and place it on top of the stack.
// remove should remove and return the top value off of the stack.
// size should return how many items are on the stack.

class Stack {
  constructor() {
    this.stackArr = [];
  }
  add(value) {
    return this.stackArr.push(value);
  }
  remove(value) {
    return this.stackArr.pop(value);
  }
  get size() {
    return this.stackArr.length;
  }
}

module.exports = Stack;

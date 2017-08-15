// Should have the methods: addToTail, removeHead, and contains.
// addToTail replaces the tail with a new value that is passed in.
// removeHead removes and returns the head node.
// contains should search through the linked list and return true if a matching value is found.
// The head property is a reference to the first node and the tail property is a reference to the last node.
// These are the only two properties that you need to keep track of an infinite number of nodes. Build your nodes with objects.

class LinkedList {
  constructor() {
    // first node
    this.head = null;
    // last node
    this.tail = null;
    // Do not modify anything inside of the constructor
  }
  // Replaces the tail with a new value that is passed in.
  addToTail(item) {
    const node = {
      value: item,
      next: null
    };
    if (!this.head) {
      this.head = node;
    } else {
      this.tail.next = node;
    }
    this.tail = node;
  }
  // Removes and returns the head node.
  removeHead() {
    if (this.head) {
      const value = this.head.value;
      this.head = this.head.next;
      return value;
    }
  }
  // Search through the list, and return true if a matching value is found.
  contains(item) {
    let currentNode = this.head;
    while (currentNode.next !== null) {
      if (currentNode.value === item) {
        return true;
      }
      currentNode = currentNode.next;
    }
    return false;
  }
}

module.exports = LinkedList;

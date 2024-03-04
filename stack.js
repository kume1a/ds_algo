class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

// LIFO, last in first out
class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  push(val) {
    const newNode = new Node(val);

    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      newNode.next = this.first;
      this.first = newNode;
    }

    return ++this.size;
  }

  pop() {
    if (!this.first) {
      return null;
    }

    const temp = this.first;
    if (this.first === this.last) {
      this.last = null;
    }

    this.first = this.first.next;
    this.size--;
    return temp.val;
  }
}

const s = new Stack();

s.push(1);
s.push(2);
s.push(3);

console.log(s);

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(value) {
    const newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.length++;
    return this;
  }

  pop() {
    if (!this.head) return undefined;

    let current = this.head;
    let newTail = current;
    while (current.next) {
      newTail = current;
      current = current.next;
    }

    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    return current.value;
  }

  traverse() {
    let current = this.head;
    while (current) {
      console.log(current.value);
      current = current.next;
    }
  }

  shift() {
    if (!this.head) return null;

    const first = this.head;
    this.head = this.head.next;

    if (!this.head) {
      this.tail = null;
    }

    this.length--;

    return first;
  }

  unshift(value) {
    const newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }

    this.length--;
    return this;
  }

  get(index) {
    if (index < 0 || index >= this.length) {
      return null;
    }

    let i = 0;
    let node = this.head;
    while (i !== index) {
      node = node.next;
      i++;
    }

    return node;
  }

  set(index, value) {
    const foundNode = get(index);
    if (!foundNode) {
      return false;
    }

    foundNode.value = value;
    return true;
  }

  insert(index, value) {
    if (index < 0 || index > this.length) {
      return false;
    }

    if (index === 0) {
      this.unshift(value);
      return true;
    }

    if (index === this.length) {
      this.push(value);
      return true;
    }

    const newNode = new Node(value);
    const preNode = this.get(index - 1);
    newNode.next = preNode.next;
    preNode.next = newNode;

    this.length++;

    return true;
  }

  remove(index, value) {
    if (index < 0 || index >= this.length) {
      return false;
    }

    if (index === 0) {
      this.shift(value);
      return true;
    }

    if (index === this.length) {
      this.pop(value);
      return true;
    }

    const preNode = this.get(index - 1);
    const removed = preNode.next;
    preNode.next = removed.next;

    this.length--;

    return true;
  }

  reverse() {
    if (!this.head) {
      return false;
    }

    let node = this.head;
    this.head = this.tail;
    this.tail = node;

    let next = null;
    let prev = null;
    for (let i = 0; i < this.length; i++) {
      next = node.next;
      node.next = prev;

      prev = node;
      node = next;
    }

    return true;
  }
}

const list = new SinglyLinkedList();

list.push('Hello');
list.push('World');
const popped = list.pop();
console.log('popped = ', popped);

list.traverse();

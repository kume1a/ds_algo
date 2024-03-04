class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    const newNode = new Node(val);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }

    this.length++;
    return this;
  }

  pop() {
    if (!this.head) {
      return null;
    }

    const poppedNode = this.tail;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = poppedNode.prev;
      this.tail.next = null;
      poppedNode.prev = null;
    }

    this.length--;
    return poppedNode;
  }

  shift() {
    if (!this.head) {
      return null;
    }

    const poppedNode = this.head;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = poppedNode.next;
      this.head.prev = null;
      poppedNode.next = null;
    }

    this.length--;
    return poppedNode;
  }

  unshift(val) {
    const newNode = new Node(val);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }

    this.length++;
    return this;
  }

  get(index) {
    if (!this.head) {
      return null;
    }

    if (index <= this.length / 2) {
      let i = 0;
      let current = this.head;
      while (i !== index) {
        current = current.next;
        i++;
      }
    } else {
      let i = this.length - 1;
      let current = this.tail;
      while (i !== index) {
        current = current.prev;
        i--;
      }
    }

    return current;
  }

  set(index, val) {
    const node = this.get(index);
    if (!node) {
      return false;
    }

    node.val = val;
    return true;
  }

  insert(index, val) {
    if (index < 0 || index > this.length) {
      return false;
    }

    if (index === 0) {
      this.unshift(val);
      return true;
    }

    if (index === this.length) {
      this.push(val);
      return true;
    }

    const newNode = new Node(val);
    const beforeNode = this.get(index - 1);
    const afterNode = beforeNode.next;

    beforeNode.next = newNode;
    newNode.prev = beforeNode;
    afterNode.prev = newNode;
    newNode.next = afterNode;

    this.length++;

    return true;
  }

  remove(index) {
    if (index < 0 || index >= this.length) {
      return null;
    }

    if (index === 0) {
      return this.shift();
    }

    if (index === this.length - 1) {
      return this.pop();
    }

    const nodeToRemove = this.get(index);
    const beforeNode = nodeToRemove.prev;
    const afterNode = nodeToRemove.next;

    beforeNode.next = afterNode;
    afterNode.prev = beforeNode;
    nodeToRemove.prev = null;
    nodeToRemove.next = null;

    this.length--;

    return nodeToRemove;
  }
}

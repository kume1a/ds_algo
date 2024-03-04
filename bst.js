class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(val) {
    const newNode = newNode(val);

    if (this.root === null) {
      this.root = newNode;
      return this;
    }

    let curr = this.root;
    while (true) {
      if (val < curr.val) {
        if (curr.left === null) {
          curr.left = newNode;
          return this;
        }
        curr = curr.left;
      } else if (val > curr.val) {
        if (curr.right === null) {
          curr.right = newNode;
          return this;
        }
        curr = curr.right;
      } else {
        return undefined;
      }
    }
  }

  contains(val) {
    if (this.root === null) {
      return false;
    }

    let curr = this.root;
    while (curr !== null) {
      if (val === curr.val) {
        return true;
      } else if (val < curr.val) {
        curr = curr.left;
      } else {
        curr = curr.right;
      }
    }

    return false;
  }

  bfs() {
    if (this.root === null) {
      return [];
    }

    const data = [];
    const queue = [this.root];
    let node = null;
    while (queue.length) {
      node = queue.shift();
      if (node.left !== null) {
        queue.push(node.left);
      }
      if (node.right !== null) {
        queue.push(node.right);
      }

      data.push(node.val);
    }

    return data;
  }

  dfsPreOrder() {
    if (this.root === null) {
      return [];
    }

    const data = [];

    const traverse = node => {
      data.push(node);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    };

    traverse(this.root);

    return data;
  }

  dfsPostOrder() {
    if (this.root === null) {
      return [];
    }

    const data = [];

    const traverse = node => {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      data.push(node);
    };

    traverse(this.root);

    return data;
  }

  dfsInOrder() {
    if (this.root === null) {
      return [];
    }

    const data = [];

    const traverse = node => {
      if (node.left) traverse(node.left);
      data.push(node);
      if (node.right) traverse(node.right);
    };

    traverse(this.root);

    return data;
  }
}

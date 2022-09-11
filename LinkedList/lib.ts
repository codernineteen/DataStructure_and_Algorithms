interface ANode<T> {
  val: T | null;
  next: ANode<T> | null;
  prev: ANode<T>;
}

class ANode<T> {
  constructor(value: T) {
    this.val = value;
  }

  getNextNode() {
    return this.next ? this.next : null;
  }

  getPrevNode() {
    return this.prev;
  }

  setNextNode(nextNode: ANode<T> | null) {
    this.next = nextNode;
  }

  setPrevNode(prevNode: ANode<T>) {
    this.prev = prevNode;
  }
}

interface LinkedList<T> {
  firstNode: ANode<T> | null;
}

class LinkedList<T> {
  constructor(firstNode: ANode<T>) {
    this.firstNode = firstNode;
  }

  read(index: number): ANode<T> | null {
    let currentNode = this.firstNode;
    let currentIndex = 0;

    while (currentIndex < index) {
      if (currentNode?.next) {
        currentNode = currentNode.next;
      } else {
        return null;
      }
      currentIndex += 1;
    }

    return currentNode;
  }

  indexOf(data: ANode<T>): number {
    let currentNode = this.firstNode;
    let currentIndex = 0;

    while (currentNode && currentNode.next) {
      if (data.val === currentNode.val) {
        return currentIndex;
      }
      currentNode = currentNode.next;
      currentIndex += 1;
    }
    //if not existed
    return -1;
  }

  insert(data: ANode<T>, index: number) {
    let currentNode = this.firstNode;

    if (index === 0) {
      let newFirstNode = data;
      data.setNextNode(currentNode);
      this.firstNode = newFirstNode;
      return;
    }

    const nodeBeforeInsert = this.read(index);
    if (nodeBeforeInsert !== null) {
      let tempNext = nodeBeforeInsert.next;
      nodeBeforeInsert.next = data;
      data.next = tempNext;
    }
    return;
  }

  delete(index: number) {
    let currentNode = this.firstNode;
    if (index === 0 && currentNode) {
      let newFirstNode = currentNode.next;
      this.firstNode = newFirstNode;
      return;
    }

    currentNode = this.read(index - 1);
    if (currentNode !== null && currentNode.next) {
      let nodeToDelete = currentNode.next;
      if (nodeToDelete.next) {
        currentNode.next = nodeToDelete.next;
      } else {
        currentNode.next = null;
      }
    }
    return;
  }
}

interface DoublyLinkedList<T> {
  firstNode: ANode<T>;
  lastNode: ANode<T>;
}

class DoublyLinkedList<T> {
  constructor(firstNode: ANode<T>, lastNode: ANode<T>) {
    this.firstNode = firstNode;
    this.lastNode = lastNode;
  }
}

export { ANode, LinkedList, DoublyLinkedList };

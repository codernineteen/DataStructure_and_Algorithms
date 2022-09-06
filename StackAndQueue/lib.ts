interface StackNode<T> {
  val: T | null;
  next: StackNode<T> | null;
}

class StackNode<T> implements StackNode<T> {
  constructor(value: T) {
    (this.val = value ? value : null), (this.next = null);
  }
}

interface Stack<T> {
  top: StackNode<T> | null;
  bottom: StackNode<T> | null;
  size: number;
}
class Stack<T> {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.size = 0;
  }

  push(val: T) {
    const node = new StackNode<T>(val);
    if (this.size === 0) {
      this.top = node;
      this.bottom = node;
    } else {
      let currentTop = this.top;
      this.top = node;
      this.top.next = currentTop;
    }

    this.size += 1;
    return this.size;
  }

  pop() {
    if (this.size > 0) {
      let currentTop = this.top as StackNode<T>;
      this.top = currentTop.next;
      this.size -= 1;
      currentTop.next = null;
      return currentTop;
    }
    return null;
  }
}

export { Stack };

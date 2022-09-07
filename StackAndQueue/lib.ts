import { convertTypeAcquisitionFromJson } from "typescript";

interface Node<T> {
  val: T | null;
  next: Node<T> | null;
}

class Node<T> implements Node<T> {
  constructor(value: T) {
    (this.val = value ? value : null), (this.next = null);
  }
}

interface Stack<T> {
  top: Node<T> | null;
  bottom: Node<T> | null;
  size: number;
}

class Stack<T> {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.size = 0;
  }

  push(val: T) {
    const node = new Node<T>(val);
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
      let currentTop = this.top as Node<T>;
      this.top = currentTop.next;
      this.size -= 1;
      currentTop.next = null;
      return currentTop;
    }
    return null;
  }
}

interface Queue<T> {
  top: T | null;
  bottom: T | null;
  array: T[];
  size: number;
}

class Queue<T> {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.array = [];
    this.size = this.array.length;
  }

  enqueue(val: T) {
    this.array.push(val);
    if (this.array.length === 1) {
      this.top = this.array[0];
      this.bottom = this.array[0];
    } else {
      this.top = this.array[this.array.length - 1];
      this.bottom = this.array[0];
    }
    this.size += 1;
  }

  dequeue() {
    if (this.size > 0) {
      this.size -= 1;
      return this.array.shift();
    }
    console.log(this.size);
    return null;
  }
}

export { Stack, Queue };

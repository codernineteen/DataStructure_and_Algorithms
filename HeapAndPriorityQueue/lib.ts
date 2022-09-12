//To find a last node easily, we can implement heap structure as an array.
//But how we can link each nodes with its parent while not using tree structure.
//we can utilize index formula
//To find children , parent : i -> left child : (i * 2) + 1, right child : (i * 2) + 2
//To find a parent, Math.floor((current index - 1) / 2).

interface HeapArray {
  data: number[];
  root: number;
  last: number;
}

class HeapArray {
  constructor(data: number[]) {
    this.data = data;
  }

  getRoot() {
    return this.data[0];
  }

  getLast() {
    return this.data[this.data.length - 1];
  }

  getLeftChild(index: number): number {
    return this.data[index * 2 + 1];
  }

  getRightChild(index: number): number {
    return this.data[index * 2 + 2];
  }

  getParent(index: number): number {
    return this.data[Math.floor((index - 1) / 2)];
  }

  insert(value: number) {
    this.data.push(value);

    let valueIndex = this.data.length - 1;

    while (
      valueIndex > 0 &&
      this.data[valueIndex] > this.data[this.getParent(valueIndex)]
    ) {
      let temp = this.data[valueIndex];
      this.data[valueIndex] = this.data[this.getParent(valueIndex)];
      this.data[this.getParent(valueIndex)] = temp;
      valueIndex = this.getParent(valueIndex);
    }
  }

  delete() {
    if (this.data.length > 0) {
      this.data[0] = this.data.pop() as number;
    }

    let triIndex = 0;
    let left = this.getLeftChild(triIndex);
    let right = this.getRightChild(triIndex);

    while (
      (left && this.data[triIndex] < left) ||
      (right && this.data[triIndex] < right)
    ) {
      let biggerChild: number;
      let biggerChildIndex: number;

      if (!right) {
        biggerChild = left;
        biggerChildIndex = triIndex * 2 + 1;
      }

      if (right > left) {
        biggerChild = right;
        biggerChildIndex = triIndex * 2 + 2;
      } else {
        biggerChild = left;
        biggerChildIndex = triIndex * 2 + 1;
      }

      let temp = this.data[triIndex];
      this.data[triIndex] = this.data[biggerChildIndex];
      this.data[biggerChildIndex] = temp;

      triIndex = biggerChildIndex;

      left = this.getLeftChild(triIndex);
      right = this.getRightChild(triIndex);
    }
  }
}

export { HeapArray };

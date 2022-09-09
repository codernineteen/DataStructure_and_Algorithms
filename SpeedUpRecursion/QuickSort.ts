//Quick sort method:
//1. Partition an array
//2. Based on Pivot position, regard sub arrays as two different array, and repeat the twp steps recursively.
//3. If a sub array has one element or none, it will be terminated by base condition

interface SortableArray {
  array: number[];
  length: number;
}

class SortableArray {
  constructor(array: number[]) {
    this.array = array;
    this.length = array.length;
  }

  partition(leftPointer: number, rightPointer: number) {
    let pivotIndex = rightPointer;
    let pivot = this.array[pivotIndex];
    rightPointer -= 1;

    while (true) {
      while (this.array[leftPointer] < pivot) {
        leftPointer += 1;
      }

      while (this.array[rightPointer] > pivot) {
        rightPointer -= 1;
      }

      if (leftPointer >= rightPointer) {
        break;
      } else {
        let temp = this.array[leftPointer];
        this.array[leftPointer] = this.array[rightPointer];
        this.array[rightPointer] = temp;

        leftPointer += 1;
      }
    }
    let temp = this.array[leftPointer];
    this.array[leftPointer] = this.array[pivotIndex];
    this.array[pivotIndex] = temp;

    return leftPointer;
  }

  quickSort(leftIndex: number, rightIndex: number): void {
    if (rightIndex - leftIndex <= 0) {
      return;
    }
    let pivotIndex = this.partition(leftIndex, rightIndex);

    this.quickSort(rightIndex, pivotIndex + 1);
    this.quickSort(leftIndex, pivotIndex - 1);
  }

  quickSelect(target: number, leftIndex: number, rightIndex: number) {
    let pivotIndex = this.partition(leftIndex, rightIndex);

    if (target < pivotIndex) {
      this.quickSelect(target, leftIndex, pivotIndex - 1);
    } else if (target > pivotIndex) {
      this.quickSelect(target, pivotIndex + 1, rightIndex);
    } else {
      return this.array[target];
    }
  }
}

const unsortedArray2 = new SortableArray([0, 50, 20, 10, 60, 30, 15]);
const target = unsortedArray2.quickSelect(1, 0, unsortedArray2.length - 1);

//Problem 1 : find the biggest multiplication result of three numbers in array.
const arr = new SortableArray([1, 3, 7, 8, 2, 10, 4, 9]);
arr.quickSort(0, arr.length - 1);

console.log(
  arr.array[arr.length - 1] *
    arr.array[arr.length - 2] *
    arr.array[arr.length - 3]
);

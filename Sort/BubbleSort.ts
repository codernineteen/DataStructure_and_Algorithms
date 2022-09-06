const unsortedArr = [4, 2, 7, 1, 3];
let next: number, prev: number;
let steps = 0;

for (let i = 0; i < unsortedArr.length - 1; i++) {
  for (let j = 1; j < unsortedArr.length; j++) {
    prev = unsortedArr[i];
    next = unsortedArr[j];

    if (prev > next) {
      let tmp = prev;
      unsortedArr[j] = prev;
      unsortedArr[i] = next;
      steps++;
    }
    steps++;
  }
}

console.log("First path through: ", unsortedArr);

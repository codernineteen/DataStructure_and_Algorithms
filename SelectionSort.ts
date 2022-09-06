const unsortedArr2 = [4, 2, 7, 1, 3];

let steps2 = 0;
let minIndex = 0;
let startPoint = 0;

for (let i = 0; i < unsortedArr2.length; i++) {
  for (let j = i + 1; j < unsortedArr2.length; j++) {
    if (unsortedArr2[j] < unsortedArr2[minIndex]) {
      minIndex = j;
      steps2++;
    }
    steps2++;
  }

  if (minIndex != i) {
    let tmp = unsortedArr2[minIndex];
    unsortedArr2[minIndex] = unsortedArr2[i];
    unsortedArr2[i] = tmp;
  }
}

console.log(steps2);
console.log("selection sort result: ", unsortedArr2);

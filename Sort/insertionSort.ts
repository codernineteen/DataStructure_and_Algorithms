const unsortedArr3 = [4, 2, 7, 1, 3];

for (let i = 1; i < unsortedArr3.length; i++) {
  let temp = unsortedArr3[i];
  let position = i - 1;

  while (position >= 0) {
    if (unsortedArr3[position] > temp) {
      unsortedArr3[position + 1] = unsortedArr3[position];
      position = position - 1;
    } else {
      break;
    }

    unsortedArr3[position + 1] = temp;
  }
}

console.log(unsortedArr3);

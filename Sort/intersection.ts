const arr1 = [1, 4, 5, 6, 3, 7, 2];
const arr2 = [9, 8, 3, 2, 4, 5, 1];

const resultArr: number[] = [];

for (let i = 0; i < arr1.length; i++) {
  for (let j = 0; j < arr2.length; j++) {
    if (arr1[i] === arr2[j]) {
      resultArr.push(arr1[i]);
      break;
    }
  }
}

console.log(resultArr);

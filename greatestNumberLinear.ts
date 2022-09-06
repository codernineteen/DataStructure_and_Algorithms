const greatestNumber = (arr: number[]): number => {
  let max = 0;
  let steps = 0;
  for (let i = 0; i < arr.length; i++) {
    if (i === 0) {
      max = arr[i];
    } else {
      if (arr[i] > max) max = arr[i];
    }
    steps++;
  }
  console.log(steps);
  return max;
};

console.log(greatestNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

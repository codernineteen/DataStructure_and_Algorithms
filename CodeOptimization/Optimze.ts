//General code optimization process

//0. Find prerequisite of current algorithm (current Big O)
//1. Imagine the best Big O among possible algorithms
//2. If the best case is faster than current Big O, Design new algorithm

//Problem1: Two sum problem
//description: In given array, check whether there exists sum of the two number satisfying given input number
let givenArray: number[] = [2, 0, 4, 1, 7, 9]; // assumption: there is no duplication in an array

function findTwoSum(arr: number[], input: number): boolean {
  let numberMap: { [key: number]: boolean } = {};
  for (let i of arr) {
    numberMap[i] = true;
  }

  for (let i of arr) {
    let remainder = input - i;
    if (numberMap[remainder]) {
      return true;
    }
  }

  return false;
}

console.log(findTwoSum(givenArray, 6)); // true
console.log(findTwoSum(givenArray, 20)); //false

//Problem2: Pattern recognition(normal recursion(O(N2)) -> using memoization)
function decideCoinGameWinner(
  coinNum: number,
  currentPlayer: string = "Me",
  memo: any = {}
): string {
  //10 -> 9 -> ... -> 5: 2,2,1 , 1,1,1,1,1 , 1,2,1,1-> 4: one (2, 2 / 1, 2, 1) -> 3 : the other(1, 1, 1 / 2, 1) -> 2: the other  -> 1: one
  if (coinNum <= 0) {
    return currentPlayer;
  }
  let nextPlayer: string;
  if (currentPlayer === "You") {
    nextPlayer = "Me";
  } else {
    nextPlayer = "You";
  }

  if (!memo[coinNum]) {
    memo[coinNum] = decideCoinGameWinner(coinNum - 1, nextPlayer, memo);
    memo[coinNum] = decideCoinGameWinner(coinNum - 2, nextPlayer, memo);
  } else {
    return memo[coinNum];
  }

  if (memo[coinNum] === "Me") {
    return "Me";
  } else {
    return "You";
  }
}
//More optimization: using memoization -> find pattern
// 1 coin -> "me"
// 2 coin -> "you"
// 3 coin -> "you"
// 4 coin -> "me"
// 5 coin -> "you"
// 6 coin -> "you"
// 7 coin -> "me"
// ans so on
// there is a pattern which the loser of (coin%3 === 1) is me, if not, you
function decideCoinGameWinnerPattern(coin: number, start: string = "me") {
  if (coin % 3 === 1) {
    return "me";
  } else {
    return "you";
  }
}
//This is crazy optimization, isn't it?

//Problem 3: Swap sum
function swapSum(arr1: number[], arr2: number[]): string {
  function getSum(arr: number[]) {
    return arr.reduce((prev, cur, curIdx) => {
      if (curIdx === 0) {
        cur = arr[0];
      } else {
        cur += prev;
      }
      return cur;
    });
  }

  let sum1 = getSum(arr1);
  let sum2 = getSum(arr2);

  //sum1 is bigger than sum2
  if (sum1 > sum2) {
    let difference = sum1 - sum2;
    let complimentMap: any = {};
    if (difference % 2 !== 0) {
      return "swap impossible";
    } else {
      let compliment = difference / 2;
      arr1.map((el) => {
        complimentMap[el - compliment] = true;
        return el - compliment;
      });

      for (let i of arr2) {
        if (i in complimentMap) {
          return "swap possible";
        }
      }

      return "swap impossible";
    }
  } else {
    let difference = sum2 - sum1;
    let complimentMap: any = {};
    if (difference % 2 !== 0) {
      return "swap impossible";
    } else {
      let compliment = difference / 2;
      arr2.map((el) => {
        complimentMap[el - compliment] = true;
        return el - compliment;
      });

      for (let i of arr1) {
        if (i in complimentMap) {
          return "swap possible";
        }
      }

      return "swap impossible";
    }
  }
}

console.log(swapSum([5, 3, 2, 9, 1], [1, 14, 5]));

//Greedy algorithm
//Greedy algorithm is an algorithm which choose the best way in every steps

//example - find greatest number
//using selection sort
function selectionSort(arr: number[]) {
  for (let i = 0; i < arr.length - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }

    if (minIndex !== i) {
      let tmp = arr[i];
      arr[i] = arr[minIndex];
      arr[minIndex] = tmp;
    }
  }

  return arr;
}

let greatestNumber: number[] = selectionSort([1, 2, 10, 24, 5, 4, 7, 3, 9]);
console.log(greatestNumber[greatestNumber.length - 1]);

//greedy (O(N))
function greatestNumberGreedy(arr: number[]): number {
  let max = 0;
  for (let i of arr) {
    if (max < i) {
      max = i;
    }
  }

  return max;
}

console.log(greatestNumberGreedy([1, 2, 10, 24, 5, 4, 7, 3, 9]));

//greatest part sum greedy algorithm
function findGreatestSubSum(arr: number[]): number {
  let max = arr[0];
  let curSum = 0;
  for (let i = 0; i < arr.length; i++) {
    curSum += arr[i];

    if (curSum > max) {
      max = curSum;
    }

    if (curSum < 0) {
      curSum = 0;
    }
  }

  return max;
}

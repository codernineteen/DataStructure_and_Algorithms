//Memoization : a technique to reduce recursion call
//Instead of call recursion every time, Memoization enable us to save the result hash table,
//and check whether the input exist in the table
//if it exists, it skip the recursion call

//example: fibonacci number
function fibonacci(n: number, memo: any) {
  console.log("Recursion");
  if (n === 1 || n === 0) {
    return n;
  }
  if (!memo[n]) {
    memo[n] = fibonacci(n - 1, memo) + fibonacci(n - 2, memo);
  }

  return memo[n];
}

fibonacci(5, {});

//Bottom up solution
//Just because it is called 'Bottom up', it doesn't have to be for loop,
//If it is clearer with recursion way, recursion can be also bottom up solution

//bottom up fibonacci
function fibonacciBottomUp(n: number) {
  if (n === 0) {
    return 0;
  }
  if (n === 1) {
    return 1;
  }
  let prev = 0;
  let next = 1;
  for (let i = 1; i < n; i++) {
    let temp = prev;
    prev = next;
    next = temp + prev;
  }

  return next;
}

console.log(fibonacciBottomUp(5));

//It is up to you which way you choose

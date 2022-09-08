//In recursive function, we call the function inside itself.
//Recursion is not efficient than traditional for loop method, but it can make our code tidy.

//An important Condition : Recursion always needs one base condition to escape looping at least.

//The difficult part comes out when we think of recursion process in the perspective of computer
//Until Recursion reaches its base condition, All the function calls from first to last never ends.
//It only ends in order when last function call reaches its base condition
// e.x ) fact(n) -> fact(n, fact(n-1)) -> fact(n,fact(n-1,fact(n-2))) and so on

//Then, How computer remember all this function calls?
//The answer is call stack makes it possible.

//If you don't set any base condition in recursion, it will cause 'stack overflow', which means number of function calls exceed Maximum call stack size

//recursion is really useful when you don't know about the depth of iteration

// ----------------------Example-------------------------

// 1. print numbers
function jumpOneStepAndPrint(low: number, high: number) {
  if (high < low) {
    return null;
  }
  console.log(jumpOneStepAndPrint(low, high - 2));
}

//2. factorial
function factorial(n: number): number {
  if (n < 1) {
    return 1;
  }
  return n * factorial(n - 1);
}

//3. print only number
const array: any = [1, 2, 3, 4, [3, 4, 5], "c", "d", "v", 10];
function printOnlyNumber(arr: any): number {
  if (arr.length < 1) {
    return 0;
  }
  let removedElement = arr.shift();
  if (typeof removedElement === "number") {
    console.log(removedElement);
  }
  return printOnlyNumber(arr);
}

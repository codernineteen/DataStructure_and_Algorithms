//Focus: How much memory we consume regard to specific algorithm
// EX) if we create a new array in every steps, its space complexity will be O(N)

function convertUppercase(arr: string[]) {
  let newArr: string[] = [];
  for (let c of arr) {
    newArr.push(c.toUpperCase()); //This use additional memory when this function called
  }
  return newArr;
}
convertUppercase(["h", "e", "l", "l", "o"]);

// How can we optimze this?
function convertUppercaseOptimzied(arr: string[]) {
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i].toUpperCase();
    //This use existed array, so don't use additional memory
    //(but actually in javascript, when you give object type as a parameter,
    //copy process occur. so it actually create new array in memory space)
  }
  return arr;
}

convertUppercaseOptimzied(["h", "e", "l", "l", "o"]);

//Another example
//Time complexity(O(N^2))
//Space complexity(O(1))
function hasDuplicate(arr: number[]): boolean {
  for (let i of arr) {
    for (let j of arr) {
      if (i === j) {
        return true;
      }
    }
  }

  return false;
}

console.log(hasDuplicate([1, 2, 3, 3, 4, 5]));

//Time Complexity(o(N))
//Space complexity(O(N))
function hasDuplicateWithMap(arr: number[]): boolean {
  let charMap: { [key: string]: boolean } = {};
  for (let i of arr) {
    if (charMap[i]) {
      return true;
    }
    charMap[i] = true;
  }

  return true;
}

console.log(hasDuplicateWithMap([1, 2, 3, 3, 4, 5]));

// recursion hidden cost
// recursion call stack generate a data in each steps and this will exceed memory limitaion so fast without proper base condition.

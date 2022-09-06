/*
What is Table?
: Briefly saying, a bunch of key-value pairs. In javascript, it is called 'object'

What is Hash?
:Hashing process is to convert your character to specific number
Example) 'BAD' -> 214(number matching) -> 2x1x4=8(converting to a number)

*/

//How hash table works?
{
  let thesaurus = {};
  thesaurus["bad"] = "evil"; // Hash(bad) === 8 , evil will go to 8
  thesaurus["cab"] = "taxi";
  thesaurus["ace"] = "star";
  //But, 'dab' is also 8(4x1x2), how we can avoid collision
  //With classical solution, 'evil' and 'pat' will be stored in same cell as an array ([['bad','evil'],['dab','pat']])
  thesaurus["dab"] = "pat";
  //Actually, each programming languages has their own complex hash table logic, so we don't need to worry about cell collision in usual case
}

//code optimization with hash table

//Problem1: Is the smaller array subset of bigger array?
//#1 - array algorithm
function isSubsetArray(arr1: number[], arr2: number[]): boolean {
  if (arr1.length > arr2.length) {
    for (let i of arr2) {
      let result = false;
      for (let j of arr1) {
        if (i === j) {
          result = true;
        }
      }
      if (result === false) {
        return false;
      }
    }
  } else {
    for (let i of arr1) {
      let result = false;
      for (let j of arr2) {
        if (i === j) {
          result = true;
        }
      }
      if (result === false) {
        return false;
      }
    }
  }

  return true;
}
console.log(
  "Array method result: ",
  isSubsetArray([1, 2, 3], [7, 5, 3, 1, 5, 2, 1])
);

//#2 - hash table algorithm
function isSubsetHashTable(arr1: number[], arr2: number[]): boolean {
  let hashMap = {};
  if (arr1.length > arr2.length) {
    for (let i of arr1) {
      hashMap[i] = true;
    }

    for (let value of arr2) {
      if (!hashMap[value]) {
        return false;
      }
    }
  } else {
    for (let i of arr2) {
      hashMap[i] = true;
    }

    for (let value of arr1) {
      if (!hashMap[value]) {
        return false;
      }
    }
  }

  return true;
}

console.log(
  "Hash table method result: ",
  isSubsetHashTable([1, 2, 3], [7, 5, 3, 1, 5, 2, 1])
);

//Problem 2: find intersection between two array using hashmap
function findIntersection(arr1: number[], arr2: number[]): number[] {
  let hashMap: any = {};
  for (let item of arr1) {
    hashMap[item] = true;
  }
  let intersection: number[] = [];
  for (let value of arr2) {
    if (hashMap[value]) {
      intersection.push(value);
    }
  }

  return intersection;
}

console.log(findIntersection([1, 2, 3], [3, 4, 5]));

//Problem 3: find first duplication in array
function findDuplication(arr1: string[]): string {
  let hashMap: any = {};
  for (let item of arr1) {
    if (!hashMap[item]) {
      hashMap[item] = true;
    } else {
      return item;
    }
  }
  return "none";
}

console.log(findDuplication(["a", "b", "c", "d", "d", "e", "e", "f"]));

//Problem 4: find alphabets missed
function findAlphabetsMissed(str: string): string[] {
  let alphabets = "abcdefghijklmnopqrstuvwxyz";
  let missedAlphabets: string[] = [];
  let hashMap: any = {};
  for (let c of str) {
    hashMap[c] = true;
  }

  for (let alphabet of alphabets) {
    if (!hashMap[alphabet]) {
      missedAlphabets.push(alphabet);
    }
  }

  return missedAlphabets;
}

console.log(findAlphabetsMissed("the quick brown box jumps over a lazy dog"));

//Problem 5: find first non-duplicated letter
function findFirstNonDuplicatedChar(str: string): string {
  let hashMap: any = {};
  for (let item of str) {
    if (hashMap[item]) {
      hashMap[item] = 1;
    } else {
      hashMap[item] = hashMap[item] + 1;
    }
  }

  for (let key in hashMap) {
    if (hashMap[key] !== 1) {
      return key;
    }
  }
  return "All duplicates";
}

console.log(findFirstNonDuplicatedChar("minimum"));

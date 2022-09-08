//top down calculation vs bottom up calculation
//top down
//factorial implementation with for loop(bottom up)
function factFor(n: number): number {
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result *= i;
  }

  return result;
}

//factorial implementation with for loop(top down)
function factRecursion(n: number): number {
  if (n < 1) {
    return 1;
  }
  return n * factRecursion(n - 1);
}

//If you need to solve a problem as top down method, Recursion is the only way to solve.

//Final example: Anagram
function anagram(string) {
  if (string.length === 1) {
    return string;
  }

  let collection: string[] = [];

  let substringAnagrams = anagram(string.slice(1, string.length - 1));
  substringAnagrams.forEach((el) => {
    for (let i = 0; i < el.length; i++) {
      let copy = el;
      copy.replace(copy[i], string[0]);
      collection.push(copy);
    }
  });

  return collection;
}

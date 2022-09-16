function convertUppercase(arr: string[]) {
  let newArr: string[] = [];
  for (let c of arr) {
    newArr.push(c.toUpperCase()); //This use additional memory when this function called
  }
  return newArr;
}

console.log(convertUppercase(["h", "e", "l", "l", "o"]));

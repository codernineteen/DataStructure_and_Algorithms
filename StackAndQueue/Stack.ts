//Stack is "Last in, First out"
//we add element to stack memory space using 'push'
//we remove element from stack memory space using 'pop'

//Stack is not an actual data type, but abstract data structure.
//You can implement the stack structure as you want

//The advantage of Stack is that we can prevent tentative bugs with the constraints of stack

//Stack class is implemented in lib.ts
import { Stack } from "./lib";

//Check All braces are matched with each opponent braces
function simpleLinter(text: string): string {
  let stack = new Stack<string>();
  let braceMap = { "(": ")", "[": "]", "{": "}" };
  for (let c of text) {
    if (c === "(" || c === "[" || c === "{") {
      stack.push(c);
    } else if (c === ")" || c === "]" || c === "}") {
      const popReturn = stack.pop();
      if (popReturn && popReturn.val !== null) {
        let index = popReturn.val;
        if (braceMap[index] !== c) {
          return "unmatched brace set";
        }
      } else {
        return "no opening braces";
      }
    }

    if (stack.top !== null) {
      return `${stack.top.val} need closing brace`;
    }
  }

  return "test passed";
}

console.log(simpleLinter("{({[][][]()})}"));

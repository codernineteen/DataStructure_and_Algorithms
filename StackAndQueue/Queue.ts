//Queus also follow Stack's adding process
//Data is always added on top of queue structure
//But When we want to remove an element from Queue, we only can do it from bottom

//Check how queue work, Queue is also implemented in lib.ts
import { Queue } from "./lib";

const queue = new Queue<string>();

queue.enqueue("a");
queue.enqueue("b");
queue.enqueue("c");

console.log(queue.dequeue());

//The main usage of queue logic is print machine
function print(documentSchedule: string[]): void {
  const printQueue: Queue<string> = new Queue();
  for (let doc of documentSchedule) {
    printQueue.enqueue(doc);
  }

  while (printQueue) {
    const printed = printQueue.dequeue();
  }
}

print([
  "It was hard to implement queue structure",
  "I still don't know whether i implemented well",
  "But it was so fun",
  "i got a new perspective of data structure",
]);

import { ANode, LinkedList, DoublyLinkedList } from "../LinkedList/lib";

let node1 = new ANode(0);
let node2 = new ANode(1);
let node3 = new ANode(2);
let node4 = new ANode(3);
let node5 = new ANode(4);
let node6 = new ANode(5);

node1.setNextNode(node2);
node2.setPrevNode(node1);
node2.setNextNode(node3);
node3.setPrevNode(node2);
node3.setNextNode(node4);
node4.setPrevNode(node3);

const linkedList = new LinkedList(node1);
//Different with noraml array, Linked list need O(N) steps when it tries to read the last node in the list
const target = linkedList.read(3);

//this should return 2
const indexOfNode3 = linkedList.indexOf(node3);

//this should return -1
const notExistedInLink = linkedList.indexOf(node5);

//In regard to search and read, it is not more efficient than single array
//But linked list shines when we insert a data in front of the first head of linked list.
linkedList.insert(node5, 0);

linkedList.insert(node6, 3);
console.log(linkedList.read(3));

//Delete node
linkedList.delete(4);
console.log(linkedList.read(3));

//Doubly linked list
const doublyLinkedList1 = new DoublyLinkedList(node1, node4);
console.log(doublyLinkedList1.lastNode.getPrevNode());

//Queue is one of the best usage of doubly linked list

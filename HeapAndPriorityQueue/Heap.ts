//Binary heap

//Heap condition
//1. Each node should be bigger than all the descendants of itself( e.g. 100 -> 50 -> 25) : max-heap
// min-heap is the opposite way of max-heap
//2. complete binary tree: remove node as direction from right to left

//Heap insertion : 1. create a new node -> 2. add it to last node as left child -> 3. compare new node with its parent
// -> 4. If new node is bigger than parent node, Swap

//Heap deletion: 1. delete root node -> 2. locate the last node to the root node position -> 3. By comparing the two children, swap itself with bigger child
// -> 3. last node go to right place

//Although heap queue is not fast with deletion, it always have a good performance related to both deletion and insertion(O(logN))

import { HeapArray } from "./lib";

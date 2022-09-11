//While keeping the order of data, how we can search, insert and delete data asap?
//Tree strucutre is handy in this case.

// Root node: the very first node in tree (an ancestor of all descendants)
// Parent node and children node
// level: depth of tree
// If the tree shape is palindrome, it is balanced tree. If not, imbalanced tree

// Binary search tree : only 0,1 or 2 children possible in each levels.
// left child should be smaller than its parent node, right child should be bigger than its parent node

//TreeNode class is implemented in lib.ts
import { TreeNode, Tree } from "./lib";

const root = new TreeNode(50);
const tree = new Tree(root);

const child1 = new TreeNode(25);
const child2 = new TreeNode(75);
root.leftChild = child1;
root.rightChild = child2;

//binary search in tree
console.log(tree.search(25));

//insert a data in tree
tree.insert(15);
console.log(tree);

//The key point is if you want to take an advantage of O(log(N)) complexity,
//You'd better to use unsorted data.
//On the other hand, if you use sorted data and insert it in tree node, its shape will be linear which is entirely imbalanced.
//Then the complexity will be same with sorted array(no more advantage of tree structure)

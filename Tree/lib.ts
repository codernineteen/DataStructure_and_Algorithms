import { createNull, nodeModuleNameResolver } from "typescript";

interface TreeNode<T> {
  val: T;
  leftChild: TreeNode<T> | null;
  rightChild: TreeNode<T> | null;
}

class TreeNode<T> {
  constructor(value: T) {
    this.val = value;
    this.leftChild = null;
    this.rightChild = null;
  }
}

interface Tree<T> {
  root: TreeNode<T> | null;
}

class Tree<T> {
  constructor(root: TreeNode<T> | null) {
    this.root = root;
  }

  //binary search in tree
  search(target: T, node: TreeNode<T> | null = this.root): TreeNode<T> | null {
    if (!node || target === node.val) {
      return node;
    } else if (target < node.val) {
      return this.search(target, node.leftChild);
    } else {
      return this.search(target, node.rightChild);
    }
  }

  //data insertion
  insert(value: T, node: TreeNode<T> | null = this.root) {
    if (node) {
      if (value > node.val) {
        if (!node.rightChild) {
          node.rightChild = new TreeNode<T>(value);
        } else {
          this.insert(value, node.rightChild);
        }
      } else if (value < node.val) {
        if (!node.leftChild) {
          node.leftChild = new TreeNode<T>(value);
        } else {
          this.insert(value, node.leftChild);
        }
      }
    }
  }

  kthSmallestNode(node: TreeNode<T> | null): TreeNode<T> | null {
    if (node) {
      while (node.leftChild !== null) {
        node = node.leftChild;
      }
    }

    return node;
  }

  delete(value: T) {
    this.root = this.deleteNode(value, this.root);
  }

  deleteNode(
    value: T,
    node: TreeNode<T> | null = this.root
  ): TreeNode<T> | null {
    if (!node) return null;

    if (value === node.val) {
      if (!node.rightChild && !node.leftChild) {
        return null;
      } else if (!node.rightChild && node.leftChild) {
        //left exists
        return node.leftChild;
      } else if (!node.leftChild && node.rightChild) {
        return node.rightChild;
      } else {
        let nodeToLift = this.kthSmallestNode(node.rightChild);
        if (nodeToLift) {
          node.val = nodeToLift.val;
          node.rightChild = this.deleteNode(nodeToLift.val, node.rightChild);
        }
        return node;
      }
    } else if (value < node.val) {
      return this.deleteNode(value, node.leftChild);
    } else {
      return this.deleteNode(value, node.rightChild);
    }
  }
}

export { TreeNode, Tree };

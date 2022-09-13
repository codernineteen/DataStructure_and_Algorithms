class TrieNode {
  children: { [key: string]: TrieNode | number } = {};
}

class Trie {
  root = new TrieNode();

  search(word: string): TrieNode | number {
    let currentNode: TrieNode | number = this.root;

    for (let c of word) {
      if (typeof currentNode !== "number") {
        if (c in currentNode.children) {
          currentNode = currentNode.children[c];
        } else {
          return 0;
        }
      } else {
        return 0;
      }
    }

    return currentNode;
  }

  insert(word: string, frequency: number = 0) {
    let currentNode: TrieNode | number = this.root;

    for (let c of word) {
      if (typeof currentNode !== "number") {
        if (c in currentNode.children) {
          currentNode = currentNode.children[c];
        } else {
          let newNode = new TrieNode();
          currentNode.children[c] = newNode;

          currentNode = currentNode.children[c];
        }
      } else {
        break;
      }
    }

    if (typeof currentNode !== "number") currentNode.children["*"] = frequency;
  }

  collectAllWords(
    node: TrieNode | number = this.root,
    word: string = "",
    words: string[] = []
  ) {
    let currentNode = node;

    if (typeof currentNode !== "number") {
      for (let key in currentNode.children) {
        if (key === "*") {
          if (currentNode.children[key] > 0) {
            words.push(word);
          } else {
            continue;
          }
        } else {
          this.collectAllWords(currentNode.children[key], word + key, words);
        }
      }
    }

    return words;
  }

  autoComplete(prefix: string): string[] | null {
    let currentNode = this.search(prefix);
    if (!currentNode) {
      if (prefix.length < 2) {
        return null;
      }
      return this.autoComplete(prefix.slice(0, prefix.length - 2)); // auto correct function
    }

    return this.collectAllWords(currentNode, prefix);
  }
}

export { TrieNode, Trie };

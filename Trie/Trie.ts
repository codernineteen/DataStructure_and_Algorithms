//Trie : originated from a word 'retrieval'

import { Trie, TrieNode } from "./lib";

const wordTrie = new Trie();
const child1 = new TrieNode();
const child2 = new TrieNode();
const child3 = new TrieNode();
wordTrie.root.children = { a: child1, b: child2, c: child3 };

console.log(wordTrie.search("cat"));

wordTrie.insert("can");
console.log(wordTrie);

console.log(wordTrie.collectAllWords());

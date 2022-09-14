//Graph search: useful to find a target in relational data
//Tree is a graph, But Graph is not a tree because tree can't have a cycle structure, but graph can.
//Even, in graph, there can be unlinked node(e.g. a newbie in social network who doesn't have any friends yet)

//Terminology in graph
//1. Vertex: a data in graph(called node in tree)
//2. Edge: a line which connect two vertex
//3. neighbor: two vertex connected by a edge

import { Vertex, WeightedVertex } from "../GraphDFSBFS/lib";

const alice = new Vertex("Alice");
const bob = new Vertex("Bob");
const catherine = new Vertex("Catherine");

alice.addAdjacentVertex(bob);
alice.addAdjacentVertex(catherine);
bob.addAdjacentVertex(catherine);

//DFS(Depth First Search)
//1. start at a random vertex -> record current vertex in hash table -> traverse neighbor of the current vertex
// -> 3. If neighbor exists in records, ignore it. If not, search recursively
alice.dfs(alice, "Catherine");

//BFS(Breadth First Search)
//1. start at a random vertex -> 2. record current vertex in hash table and add it to queue -> 3. looping until queue is empty
//4. shift current vertex and traverse of its neighbor -> 5. if neighbor exists in Hash table , ignore it. If not, record it in hash table and add it to queue
alice.bfs(alice, "Catherine");

//Difference between DFS and BFS
//DFS search a target in one way in-depth(so being far away from starting vertex)
//BFs search a target around starting vertex first
//The efficiency of this two algorithms totally depends on what you're searching for

//Weighted graph
const toronto = new WeightedVertex("Toronto");
const dallas = new WeightedVertex("Dallas");
toronto.addAdjacentVertex(dallas, 216);
dallas.addAdjacentVertex(toronto, 138);
console.log(toronto, dallas);

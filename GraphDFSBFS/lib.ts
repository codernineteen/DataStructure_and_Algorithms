class simpleQueue<U> {
  data: U[] = [];

  enqueue(value: U) {
    this.data.push(value);
  }

  dequeue() {
    if (this.data.length > 0) return this.data.shift();
  }
}

class Vertex<T> {
  value: T;
  adjacentVertices: Vertex<T>[];

  constructor(value: T) {
    this.value = value;
    this.adjacentVertices = [];
  }

  addAdjacentVertex(v: Vertex<T>) {
    if (!this.adjacentVertices.includes(v)) {
      this.adjacentVertices.push(v);
      v.adjacentVertices.push(this);
    }
  }

  dfs(
    v: Vertex<T> = this,
    target: T,
    visitedVertices: any = {}
  ): Vertex<T> | null {
    if (v.value === target) {
      return v;
    }

    visitedVertices[v.value] = true;

    for (let eachVertex of v.adjacentVertices) {
      if (visitedVertices[eachVertex.value]) {
        break;
      }

      if (eachVertex.value === target) {
        return eachVertex;
      }
      let vertexSearchingFor = this.dfs(eachVertex, target, visitedVertices);
      if (vertexSearchingFor) {
        return vertexSearchingFor;
      }
    }

    return null;
  }

  bfs(
    v: Vertex<T> = this,
    target: T,
    visitedVertices: any = {}
  ): Vertex<T> | null {
    let vertexQueue: simpleQueue<Vertex<T>> = new simpleQueue();

    vertexQueue.enqueue(v);
    visitedVertices[v.value] = true;

    while (vertexQueue.data.length > 0) {
      const currentVertex: Vertex<T> = vertexQueue.dequeue() as Vertex<T>;

      for (let vertex of currentVertex.adjacentVertices) {
        if (!visitedVertices[vertex.value]) {
          if (vertex.value === target) {
            return vertex;
          }
          vertexQueue.enqueue(vertex);
          visitedVertices[vertex.value] = true;
        }
      }
    }

    return null;
  }
}

type AdjacentVertex<T> = {
  vertex: WeightedVertex<T>;
  weight: number;
};

class WeightedVertex<T> {
  value: T;
  adjacentVertices: AdjacentVertex<T>[];

  constructor(value: T) {
    this.value = value;
    this.adjacentVertices = [];
  }

  addAdjacentVertex(vertex: WeightedVertex<T>, weight: number) {
    let adjacentVertex: AdjacentVertex<T> = { vertex, weight };
    this.adjacentVertices.push(adjacentVertex); //{weight: vertex}
  }
}

export { Vertex, WeightedVertex };

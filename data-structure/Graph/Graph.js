function queue() {
  this.items = [];
}

//进队
queue.prototype.push = function (item) {
  this.items.push(item);
};

//出队
queue.prototype.pop = function () {
  return this.items.shift();
};

//队列否为空
queue.prototype.isEmpty = function () {
  return this.items.length === 0;
};

/*
G = (V, E)
V: 一组顶点
E: 一组边，连接V中的顶点

图的表示，邻接矩阵或者邻接表

邻接表由图中每个顶点的相邻顶点列表所组成

参考：Graph-1 Graph-2
*/

//邻接表
function Graph() {
  let vertices = []; //存储所有顶底的名字
  let adjList = new Map(); //用一个数据字典来存储邻接表

  this.addVertices = function (vertice) {
    vertices.push(vertice);
    adjList.set(vertice, []);  //顶点为键，值为空数组
  };

  this.addEdge = function (v, w) {
    adjList.get(v).push(w);  //基于有向图
    adjList.get(w).push(v);  //基于无向图
  };

  this.getList = function () {
    return adjList;
  };

  this.toString = function () {
    let s = '';
    for (let i = 0; i < vertices.length; i++) {
      s += vertices[i] + ' -> ';
      let neighbors = adjList.get(vertices[i]);
      for (let j = 0; j < neighbors.length; j++) {
        s += neighbors[j] + ' ';
      }

      s += '\n';
    }

    return s;
  };

  let initizlizeColor = function () {
    let color = [];
    for (let i = 0; i < vertices.length; i++) {
      color[vertices[i]] = 'white';
    }

    return color;
  };

  this.bfs = function (v, callback) {
    let color = initizlizeColor();
    let q = new queue();
    q.push(v); //入队

    while (!q.isEmpty()) {
      let u = q.pop();  //出队
      let neighbors = adjList.get(u);
      color[u] = 'grey';
      for (let i = 0; i < neighbors.length; i++) {
        let w = neighbors[i];
        if (color[w] === 'white') {
          color[w] = 'grey';
          q.push(w);
        }
      }

      color[u] = 'black';

      if (callback) {
        callback(u);
      }
    }
  };

  function dfsVisit(u, color, callback) {
    color[u] = 'grey';
    if (callback) {
      callback();
    }

    let neighbours = adjList.get(u);

    for (let i = 0; i < neighbours.length; i++) {
      let w = neighbours[i];
      if (color[w] === 'white') {
        dfsVisit(w, color, callback); //添加顶点w入栈
      }
    }

    color[u] = 'black';
  }

  this.dfs = function (callback) {
    let color = initizlizeColor();
    for (let i = 0; i < vertices.length; i++) {
      if (color[vertices[i]] === 'white') {
        dfsVisit(vertices[i], color, callback);
      }
    }

  };

}

//测试
let graph = new Graph();
let myVertices = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'];
for (let i = 0; i < myVertices.length; i++) {
  graph.addVertices(myVertices[i]);
}

graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.addEdge('A', 'D');
graph.addEdge('C', 'D');
graph.addEdge('C', 'G');
graph.addEdge('D', 'G');
graph.addEdge('D', 'H');
graph.addEdge('B', 'E');
graph.addEdge('B', 'F');
graph.addEdge('E', 'I');

console.log(graph.getList());
console.log(graph.toString());

/*
图的遍历
广度优先搜索（Breadth-First Search，BFS）和深度优先搜索（Depth-First Search，DFS）

图遍历可以用来寻找特定的顶点或寻找两个顶点之间的路径，检查图是否连通，检查图是否含有环等
 */

function printNode(value) {
  console.log('Visited vertex: ' + value);
}

graph.bfs(myVertices[0], printNode);

//


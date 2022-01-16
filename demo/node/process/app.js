const http = require('http');

const server = http.createServer();

const cpus = require('os').cpus()
console.log(cpus);

server.listen(3000, () => {
  process.title = 'Node.js 进程';
  console.log('进程id', process.pid)
})


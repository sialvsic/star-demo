const http = require('http');

const server = http.createServer();

server.listen(4000, () => {
  process.title = 'Node.js 进程';
  console.log('进程id', process.pid)
})


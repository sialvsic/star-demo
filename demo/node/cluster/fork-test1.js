const http = require('http');
const numCPUs = require('os').cpus().length;
const cluster = require('cluster');

// console.log(require('os').cpus());

if (cluster.isMaster) {
  console.log('Master process id is', process.pid);
  // fork workers
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  cluster.on('exit', function (worker, code, signal) {
    console.log('worker process died,id', worker.process.pid)
  })

} else {
  // Worker可以共享同一个TCP连接
  // 这里是一个http服务器

  http.createServer(function (req, res) {
    res.writeHead(200);
    res.end('hello word');
  }).listen(8000);

}

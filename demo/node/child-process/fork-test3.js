//不阻塞进程的执行

const http = require('http');
const { fork } = require('child_process');
const server = http.createServer();

server.on('request', (req, res) => {
  if (req.url === '/compute') {
    const compute = fork('fork1.js');
    compute.send('start');
    compute.on('message', sum => {
      res.end(`Sum is ${sum}`)
    })
  } else {
    res.end('OK');
  }
});

server.listen(3000);
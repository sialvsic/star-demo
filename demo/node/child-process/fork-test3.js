//不阻塞进程的执行

const http = require('http');
const { fork } = require('child_process');
const server = http.createServer();

server.on('request', (req, res) => {
  if (req.url === '/compute') {
    const compute = fork('./fork1.js');
    compute.send('start');
    compute.on('message', sum => {
      res.end(`Sum is ${sum}`)
      compute.kill(9) //关闭子进程
    })
  } else {
    res.end('OK');
  }
});

server.listen(3000);
console.log('process pid', process.pid);
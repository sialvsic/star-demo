const http = require('http');

const server = http.createServer();

const cpus = require('os').cpus()
// console.log(cpus);

// console.log('process info', { ...process });
console.log('process info', {
  env: process.env,
  pid: process.pid,
  ppid: process.ppid,
  platform: process.platform,
  uptime: process.uptime(),
  title: process.title,
});

server.listen(3000, () => {
  process.title = 'Node.js 进程';
  console.log('进程id', process.pid)
})


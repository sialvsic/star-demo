//阻塞进程的执行

const http = require('http');

//长任务 大概40s执行
const longComputation = () => {
  let sum = 0;
  for (let i = 0; i < 2e10; i++) {
    sum += i;
  }
  return sum;
};

const server = http.createServer();
server.on('request', (req, res) => {
  console.log('request here', req.headers);

  if (req.url === '/compute') {
    console.info('计算开始', new Date())
    const sum = longComputation();
    console.info('计算结束', new Date())
    return res.end(`Sum is ${sum}`);
  } else if (req.url === '/test') {
    return res.end(`test good`);
  } else {
    res.end('Ok');
  }
});

server.listen(3000);
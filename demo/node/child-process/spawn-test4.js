//输入输出流 - 两个进程之间
const { spawn } = require('child_process');

const find = spawn('find', ['.', '-type', 'f']);
const child = spawn('wc', ['-l']);

find.stdout.pipe(child.stdin)

child.on('close', function (code, signal) {
  console.log('child process close with' + `code ${code} and signal ${signal}`);
});

child.on('exit', function (code, signal) {
  console.log('child process exited with' + `code ${code} and signal ${signal}`);
});

child.stdin.on('data', (data) => {
  console.log(`child stdin: \n${data}`)
});

child.stdout.on('data', (data) => {
  console.log(`child stdout: \n Number of files${data}`)
});

child.stderr.on('data', (data) => {
  console.error(`stderror ${data}`);
});

process.on('exit', function name(params) {
  console.log('main process exit');
})

process.on('uncaughtException', function name(error, origin) {
  console.log('err', error);
  console.log('origin', origin);
})

process.on('message', function name(message) {
  console.log('main message:', message);
})


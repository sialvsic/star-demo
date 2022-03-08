//输入输出流
const { spawn } = require('child_process');

const child = spawn('wc');

process.stdin.pipe(child.stdin)

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
  console.log(`child stdout: \n${data}`)
});

child.stderr.on('data', (data) => {
  console.error(`stderror ${data}`);
});

// process.stdin.on('data', (data) => {
//   console.log('data', data)
// })

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


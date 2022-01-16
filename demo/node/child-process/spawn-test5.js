//使用父进程的IO流
const { spawn } = require('child_process');

const child = spawn('echo $NVM_BIN', {
  stdio: 'inherit',
  shell: true,
});

child.on('close', function (code, signal) {
  console.log('child process close with' + `code ${code} and signal ${signal}`);
});

child.on('exit', function (code, signal) {
  console.log('child process exited with' + `code ${code} and signal ${signal}`);
});

/*
此处不存在子进程的stdin/stdout/stderr，因为使用了父进程的
*/
// child.stdin.on('data', (data) => {
//   console.log(`child stdin: \n${data}`)
// });

// child.stdout.on('data', (data) => {
//   console.log(`child stdout: \n Number of files${data}`)
// });

// child.stderr.on('data', (data) => {
//   console.error(`stderror ${data}`);
// });

process.stdout.on('data', (data) => {
  console.log(`process stdout: \n Number of files${data}`)

  //关闭主进程
  process.exit(0)
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


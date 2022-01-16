//正常输出 配置第二个参数
const { exec } = require('child_process');
const path = require('path')

const child = exec('find . -type f | wc -l', { cwd: path.join(process.cwd(), './') }, (err, stdout, stderr) => {
  // const child = exec('find . -type f | wc -l', { cwd: path.join(process.cwd(), './scripts11') }, (err, stdout, stderr) => {
  if (err) {
    console.error(`exec error: ${err}`);
    return;
  }

  console.log(`Number of files ${stdout}`);
});


child.on('close', function (code, signal) {
  console.log('child process close with' + `code ${code} and signal ${signal}`);
});

child.on('exit', function (code, signal) {
  console.log('child process exited with' + `code ${code} and signal ${signal}`);
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


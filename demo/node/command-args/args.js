
// node --harmony args.js a1

console.log('process argv', process.argv);
console.log('process execArgv', process.execArgv);

function safeChdir(dir) {
  try {
    process.chdir(dir);
    return true;
  } catch (error) {
    return false;
  }
}
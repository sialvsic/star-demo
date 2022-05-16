var b = require('./b');

console.log(b.foo);

setTimeout(() => {
  console.log('a run');
  console.log(require('./b').foo);
}, 1000);

//output
// 1
// 1
// 1




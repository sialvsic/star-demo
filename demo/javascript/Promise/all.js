var p1 = Promise.resolve(3);
var p2 = Promise.reject(2);
var p3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, "foo");
});

Promise.all([p1, p2, p3]).then(values => {
  console.log(values); // 永远走不到这里
}).catch(function (err) {
  console.log(err); // 2
});


//换一种方式
var p1 = Promise.resolve(3).catch(function (err) {
  return err;
});
var p2 = Promise.reject(2).catch(function (err) {
  return err;
});
var p3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, "foo");
}).catch(function (err) {
  return err;
});

Promise.all([p1, p2, p3]).then(values => {
  console.log(values); // [3, 2, "foo"]
}).catch(function (err) {
  console.log(1); //不会走到这里
});
function delay(time) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('1111');
      resolve();

    }, time)
  })
}

delay(1000).then(() => {
  delay(2000)
  console.log('3333');
});
console.log('2222');


function deplay(time) {
  return Promise.resolve(setTimeout(() => {
  }, time))
}


// catch

var promise = new Promise((resolve, reject) => {
  reject('1111');
}).then((x, y) => {
  console.log(x);
  console.log(y);
  return '2222'
}).then(() => {
  a.length();
}).catch((err) => {
  console.log(err);
  return err
}).then((x, y) => {
  console.log(x);
  console.log(y);
  return x
});

console.log(promise.then((x, y) => {
  console.log(x);
  console.log('^^^^');
}));

new Promise((resolve, reject) => {
  reject('1111');
}).then((x, y) => {
  console.log(x);
}, (x) => {
  console.log(x);   // >>>> 1111
});


(async function () {
  console.log(1);

  await setTimeout(function() {
      console.log(2);
    }, 1000);
  console.log(3);
})();



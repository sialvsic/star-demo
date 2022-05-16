for(var i = 0; i < 5; i++) {
  setTimeout(function timer() {
    console.log(i);
  }, 1000);
}

//输出: 一秒后，连续输出5个5

for(var i = 0; i < 5; i++) {
  (function() {
    setTimeout(function timer() {
      console.log(i);
    }, 1000);
  })();
}

//输出: 一秒后，连续输出5个5


for(var i = 0; i < 5; i++) {
  (function(j) {
    setTimeout(function timer() {
      console.log(j);
    }, 1000);
  })(i);
}

//输出: 一秒后，连续输出0,1,2,3,4

for(let i = 0; i < 5; i++) {
  setTimeout(function timer() {
    console.log(i);
  }, 1000);
}

//输出: 一秒后，连续输出0,1,2,3,4

for(var i = 0; i < 5; i++) {
  (function(j) {
    setTimeout(function timer() {
      console.log(j);
    }, 1000 * j);
  })(i);
}
//输出：每个一秒，输出0,1,2,3,4


setTimeout(function() {
  console.log(2);
}, 1000);

setTimeout(function() {
  console.log(2);
}, 1000);

setTimeout(function() {
  console.log(3);
}, 1000);


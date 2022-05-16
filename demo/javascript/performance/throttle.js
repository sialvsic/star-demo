////////////////////
// 节流

function throttle(func, duration) {
  var oldTime = new Date().getTime();

  return function() {
    var newTime = new Date().getTime();

    if(newTime - oldTime > duration) {
      func();
      oldTime = newTime;
    }
  }
}

function throttleTimer(func, duration) {
  var timer = null;

  return function() {
    if(!timer) {
      timer = setTimeout(function() {
        func();
        timer = null;
      }, duration);
    }
  }
}

function log(){
  console.log('haha')
}

// window.addEventListener('scroll', throttleTimer(log, 200) );

//https://juejin.im/post/5b7b88d46fb9a019e9767405



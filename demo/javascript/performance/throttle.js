////////////////////
// 节流

function throttle(func, duration) {
  var oldTime = new Date().getTime();

  return function () {
    const context = this;
    const args = [].slice.call(arguments);

    var newTime = new Date().getTime();

    if (newTime - oldTime > duration) {
      func.apply(context, args);
      oldTime = newTime;
    }
  };
}

function throttle2(fn, duration) {
  var timer = null;

  return function () {
    const context = this;
    const args = [].slice.call(arguments);

    if (!timer) {
      timer = setTimeout(function () {
        fn.apply(context, ...args);
        timer = null;
      }, duration);
    }
  };
}

function log() {
  console.log("haha");
}

// window.addEventListener('scroll', throttleTimer(log, 200) );

//https://juejin.im/post/5b7b88d46fb9a019e9767405

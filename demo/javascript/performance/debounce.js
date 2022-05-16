function hello() {
  console.log('hello');
}

//*******

function debounce(fn, wait) {
  console.log('debounce');
  let timeout = null;
  return function() {
    const context = this;
    const args = [].slice.call(arguments);
    if(timeout !== null) {
      clearTimeout(timeout);
    }
    timeout = setTimeout(function() {
      fn.apply(context, args)
    }, wait);
  }
}

function debounceNow(func, wait) {
  let timeout = null;

  return function() {
    if(timeout) clearTimeout(timeout);

    let callNow = !timeout;
    timeout = setTimeout(function() {
      timeout = null;
    }, wait);

    if(callNow) {
      func()
    }
  }
}

// window.addEventListener('scroll', debounce(hello, 1000));
// window.addEventListener('resize', debounce(hello, 1000));
window.addEventListener('resize', debounceNow(hello, 1000));
// window.addEventListener('resize', _.debounce(hello, 4000));

// 错误的代码
// window.addEventListener('resize', function() {
//    debounce(hello, 2000)()
// });

setInterval(debounce(hello, 2000), 1000);
setInterval(function() {
  _.debounce(hello, 2000)()
}, 1000);


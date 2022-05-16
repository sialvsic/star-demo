function upsplat(fun) {
  return function () {
    const array = [].slice.call(arguments);
    console.log(array);
    return fun.apply(null, array);
  };
}

function add(...array) {
  array.forEach((item) => {
    console.log(item);
  });
}

const fn = upsplat(add);
fn(1, 2, 3, 4, 5);

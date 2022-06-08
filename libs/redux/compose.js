function compose(...func) {
  if(func.length === 0) {
    return args => args
  }

  if(func.length === 1) {
    return func[0]
  }

  //return funcs.reduce((a, b) => (...args) => a(b(...args)));
  return func.reduce((a, b) => {
    return (...args) => {
      return a(b(...args))
    }
  })
}

const compose = (...fns) => fns.reduceRight((prevFn, nextFn) =>
    (...args) => nextFn(prevFn(...args)),
  value => value
);


function add(a) {
  return function(b) {
    return a + b;
  }
}

let _compose = compose(add(1), add(2), add(3));  //从后往前执行
console.log(_compose);

/*  _compose结果
(...args) => {
  return a(b(...args))
}

a  ==>
(...args) => {
  return a(b(...args))
}

b  ==>
(b) {
  //b 为 6， a 依次为 3, 2, 1
  return a + b;
}
*/
_compose(6);
const fucArr = [
  next => {
    setTimeout(() => {
      console.log(1);
      next()
    }, 300)
  },
  next => {
    setTimeout(() => {
      console.log(2);
      next()
    }, 200)
  },
  next => {
    setTimeout(() => {
      console.log(3);
      next()
    }, 100)
  }
];

var run1 = arr => {
  if(arr.length === 0) return;
  arr[0](() => {
    run(arr.slice(1))
  });
};

var run = arr => {
  const trigger = () => {
    if(arr.length === 0) return;
    arr.shift()();
  };
  arr = arr.map(val => {
    return () => val(trigger);
  });
  trigger();
};


var run3 = arr => {
  // var reduceResult = arr.reduce((pre, next) => (...args) => pre(next(...args))); //错误
  let reduceResult = arr.reduce((pre, next) => (...args) => pre(() => next(...args)));
  return reduceResult(() => {});
};

// const run = arr => arr.reduce((prev, next) => (...args) => (prev(() => next(...args))))(() => {});

run3(fucArr);
// 实现一个run方法,使得run(fucArr)能顺序输出1、2、3.

// 参考：https://mp.weixin.qq.com/s/eL3m8DcrF5qRX1GKB3N-pQ

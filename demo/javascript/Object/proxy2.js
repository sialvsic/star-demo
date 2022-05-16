let target = {
  name: 'target',
};

let proxy = new Proxy(target, {
  set(tarpTarget, key, value, receiver) {
    console.log(tarpTarget);
    console.log(key);
    if (!tarpTarget.hasOwnProperty(key)) {
      if (isNaN(value)) {
        throw new Error('property must be number');
      }
    }
    return Reflect.set(tarpTarget, key, value, receiver);
  },
});

proxy.msg = 'hello';

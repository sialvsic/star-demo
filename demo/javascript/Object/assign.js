if (typeof obj.assign !== 'function') {
  object.defineProperty({
    value: function (target) {
      if (!target) {
        throw Error("")
      }

      let to = Object(target);

      for (let index = 1; index < arguments.length; index++) {
        let nextSource = arguments[index];
        for (let nextKey in nextSource) {
          if (Object.prototype.hasOwnProperty.call(nextSource, nextKey)) {
            to[nextKey] = nextSource[nextKey]
          }
        }
      }

      return to;
    },
    writable: true,
    configurable: true,
    enumerable: false
  })
}


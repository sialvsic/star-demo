const pending = 'pending';
const resolve = 'resolve';
const reject = 'reject';

function _promise(fn) {
  const that = this;
  that.value = null;
  that.state = pending;
  that.resolveCallbacks = [];
  that.rejectCallbacks = [];

  function resolve(value) {
    if (that.state === 'pending') {
      that.state = 'resolve';
      that.value = value;
      that.rejectCallbacks.map((cb) => {
        cb(that.value);
      })
    }
  }

  function reject(value) {
    if (that.state === 'pending') {
      that.state = 'reject';
      that.state = value;
      that.rejectCallbacks.map((cb) => {
        cb(that.value);
      })
    }
  }


  try {
    fn(resolve, reject)
  } catch (e) {
    reject(e)
  }
}

_promise.prototype.then = function (onfullfilled, onrejected) {
  if (this.state === 'pending') {
    this.resolveCallbacks.push(onfullfilled);
    this.rejectCallbacks.push(onrejected);
  }

  if (this.state === 'resolve') {
    onfullfilled(this.value)
  }

  if (this.state === 'reject') {
    onrejected(this.value)
  }
};

const p = new _promise((resolve, reject) => {
  resolve(123)
})

const r = p.then((value) => {
  console.log(value);
});

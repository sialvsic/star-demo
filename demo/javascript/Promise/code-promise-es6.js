const pending = 'pending';
const resolved = 'resolved';
const rejected = 'rejected';

class _Promise {
  constructor(callback) {
    this.status = pending;
    this.value = '';
    this.resolvedCallBacks = [];
    this.rejectCallBacks = [];

    this.resolve = this.resolve.bind(this);
    this.reject = this.reject.bind(this);
    callback(this.resolve, this.reject)
  }

  resolve(value) {
    if (this.status === pending) {
      this.status = resolved;
      this.value = value;
      this.resolvedCallBacks.forEach(cb => cb(value))
    }
  }

  reject(value) {
    if (this.status === pending) {
      this.status = resolved;
      this.value = value;
      this.rejectCallBacks.forEach(cb => cb(value))
    }
  }

  then(onFullFilled, onRejected) {
    if (this.status === pending) {
      this.resolvedCallBacks.push(onFullFilled);
      this.rejectCallBacks.push(onRejected)
    }

    if (this.status === resolved) {
      onFullFilled(this.value)
    }

    if (this.status === rejected) {
      onRejected(this.value)
    }
  }
}

new _Promise((resolve, reject) => {
  resolve(123)
}).then((value) => {
  console.log(value)
});

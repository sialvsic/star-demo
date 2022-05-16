let data = {};

let newObj = new Proxy(data, {
  get: function (target, key, receiver) {
    return Reflect.get(target, key, receiver)
  },
  set: function (target, key, value, receiver) {
    if(key === 'value') {
      document.querySelector('#value').innerHTML = value;
      document.querySelector('input').value = value
    }
    return Reflect.set(target, key, value, receiver)
  }
});

function onInput(event) {
  newObj.value = event.target.value;
}

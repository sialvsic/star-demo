let data = {
  value: ''
};

function onInput(event) {
  data.value = event.target.value;
  console.log(data.value)
}

Object.defineProperty(data, 'value', {
  get() {
    return value;
  },
  set(value) {
    console.log('set', value);
    document.querySelector('#value').innerHTML = value;
  }
});

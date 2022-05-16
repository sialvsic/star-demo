let string = '';


//过滤输入
function OnInputChange(event) {
  if(!/\d/.test(event.value)) {
    string = event.value;
  } else {
    event.value = string
  }
}

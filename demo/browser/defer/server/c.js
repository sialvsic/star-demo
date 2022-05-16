console.log('c load');
function onCalculate() {
  const node1 = document.getElementsByClassName('click-number-1')[0];
  const node2 = document.getElementsByClassName('click-number-2')[0];

  const number1 = Number(node1.innerText);
  const number2 = Number(node2.innerText);
  const sum = add(number1, number2);

  const sumNode = document.getElementById('sum-number');
  sumNode.innerText = sum;
}

onCalculate();
console.log('c load end');

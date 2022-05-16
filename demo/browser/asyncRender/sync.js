const total = 100000;
const once = 20;
const loopCount = total / once;
let countOfRender = 0;

let ulNode = document.querySelector('ul');

for (let i = 0; i < total; i++) {
  const li = document.createElement('li');
  li.innerText = `${i}`;
  ulNode.appendChild(li)
}

const total = 100000;

let ulNode = document.querySelector('ul');

const fragment = document.createDocumentFragment();

for (let i = 0; i < total; i++) {
  const li = document.createElement('li');
  li.innerText = `${i}`;
  fragment.appendChild(li)
}

ulNode.appendChild(fragment);

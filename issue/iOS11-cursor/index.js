const addBodyFixStyle = () => {
  const element = document.scrollingElement || document.documentElement;
  const scrollTop = element.scrollTop;

  document.body.classList.add('modal-open');
  document.body.style.top = -scrollTop + 'px';
};

const removeFixStyle = () => {
  const element = document.scrollingElement || document.documentElement;
  const scrollTop = Math.abs(parseFloat(document.body.style.top));

  document.body.classList.remove('modal-open');
  element.scrollTop = scrollTop;
};

function openModal() {
  const node = document.getElementById('modal-shadow');
  node.style.display = 'flex';

  addBodyFixStyle();

  const modalContent = document.getElementsByClassName('modal-content');
  modalContent[0].addEventListener('click', function(event) {
    console.log('modal content click');

    //禁止事件冒泡
    event.stopPropagation();
  });
}

function closeModal() {
  const node = document.getElementById('modal-shadow');
  node.style.display = 'none';

  removeFixStyle();
}



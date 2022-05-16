function handleButtonClick(event) {
  console.log(arguments);
  console.log(event.eventPhase);
  console.log('click the first button');
}

function handlePClick(event) {
  console.log(arguments);
  console.log(event);
}

function handleDivClick(event) {
  console.log(arguments);
  console.log(event);

}

window.onload = () => {
  console.log('i am loaded');

  const node = document.querySelector('.second');
  node.onclick = (event) => {
    console.log('click the second button');
    console.log(event.eventPhase);
  };

  const button = document.querySelector('.third');
  button.addEventListener('click', (event) => {
    console.log('click the third button');
    console.log(event.eventPhase);
  }, false);

  const btn = document.getElementById('mybtn');
  const handler = (event) => {
    console.log('mybtn');

    console.log(event.eventPhase);
  };
  btn.addEventListener('click', handler, false);

  document.body.addEventListener('click', function (event) {
    console.log('document.body');
    console.log(event.eventPhase);
  });

  // btn.removeEventListener("click", handler, false)
};

/*
//无法移除事件处理
const btn = document.getElementById("mybtn");
btn.addEventListener("click", function() {
  console.log('addEventListener');
}, false);

btn.removeEventListener("click", function() {
  console.log('removeEventListener');
}, false)
 */




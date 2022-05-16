////////////////////////////////////////////////
//浏览器窗口
//获取当前浏览器窗口的宽和高
function getWindowSize() {

  console.log(`浏览器宽：${window.outerWidth}`);
  console.log(`浏览器高：${window.outerHeight}`);

  return {
    windowWidth: window.outerWidth,
    windowHeight: window.outerHeight
  }
}

//获取当前浏览器窗口距离屏幕左边的距离
function getWindowPositionLeft() {
  const leftPosition = typeof window.screenLeft === "number" ? window.screenLeft : window.screenX;

  console.log(`当前浏览器窗口距离屏幕左边${leftPosition}`);
  return leftPosition;
}

//获取当前浏览器窗口距离屏幕上边的距离
function getWindowPositionTop() {
  const topPosition = typeof window.screenLeft === "number" ? window.screenTop : window.screenY;

  console.log(`当前浏览器窗口距离屏幕上边${topPosition}`);
  return topPosition;
}

////////////////////////////////////////////////
//网页
//获取当前网页大小(不包含隐藏的可滚动部分)
function getPageSizePart() {
  let pageWidth = window.innerWidth;
  let pageHeight = window.innerHeight;


  if(typeof pageWidth !== "number") {
    if(document.compatMode === "CSS1Compat") {
      pageWidth = document.documentElement.clientWidth;
      pageHeight = document.documentElement.clientHeight;
    } else {
      pageWidth = document.body.clientWidth;
      pageHeight = document.body.clientHeight;
    }
  }

  console.log(`当前页面可视区宽${pageWidth}`);
  console.log(`当前页面可视区高${pageHeight}`);

  return {
    pageWidth: pageWidth,
    pageHeight: pageHeight
  }
}

//获取当前网页整体大小(包含隐藏的可滚动部分)
function getPageSizeTotal() {
  console.log(`当前页面整体宽${document.documentElement.offsetWidth}`);
  //or
  //document.documentElement.clientWidth
  //document.documentElement.scrollWidth

  console.log(`当前页面整体高${document.documentElement.offsetHeight}`);
  //or
  //document.documentElement.scrollHeight

  return {
    pageWidth: document.documentElement.offsetWidth,
    pageHeight: document.documentElement.offsetHeight
  }
}

//测试-document.documentElement
function documentElementClientWidthHeight() {
  console.log(`document.documentElement.clientWidth: ${document.documentElement.clientWidth}`);
  console.log(`document.documentElement.clientHeight: ${document.documentElement.clientHeight}`);
}

function documentElementScrollWidthHeight() {
  console.log(`document.documentElement.scrollWidth: ${document.documentElement.scrollWidth}`);
  console.log(`document.documentElement.scrollHeight: ${document.documentElement.scrollHeight}`);
}

function documentElementOffsetWidthHeight() {
  console.log(`document.documentElement.offsetWidth: ${document.documentElement.offsetWidth}`);
  console.log(`document.documentElement.offsetHeight: ${document.documentElement.offsetHeight}`);
}

//测试-document.body
function documentBodyClientWidthHeight() {
  console.log(`document.body.clientWidth: ${document.body.clientWidth}`);
  console.log(`document.body.clientHeight: ${document.body.clientHeight}`);
}

function documentBodyScrollWidthHeight() {
  console.log(`document.body.scrollWidth: ${document.body.scrollWidth}`);
  console.log(`document.body.scrollHeight: ${document.body.scrollHeight}`);
}

function documentBodyOffsetWidthHeight() {
  console.log(`document.body.offsetWidth: ${document.body.offsetWidth}`);
  console.log(`document.body.offsetHeight: ${document.body.offsetHeight}`);
}

////////////////////////////////////////////////
//元素
//元素的绝对位置
function getAbsolutePosition1(element) {
  let actualLeft = element.offsetLeft;
  let actualTop = element.offsetTop;

  let current = element.offsetParent;

  while(current != null) {
    actualLeft += current.offsetLeft;
    actualTop += current.offsetTop;
    current = current.offsetParent;
  }

  console.log(`该元素距离整个页面的左边的距离为${actualLeft}`);
  console.log(`该元素距离整个页面的上边的距离为${actualTop}`);
}

function getAbsolutePosition2(element) {
  let actualLeft = element.getBoundingClientRect().left + document.documentElement.scrollLeft;
  let actualTop = element.getBoundingClientRect().top + document.documentElement.scrollTop;

  console.log(`该元素距离整个页面的左边的距离为${actualLeft}`);
  console.log(`该元素距离整个页面的上边的距离为${actualTop}`);
}

//元素的相对位置
function getRelativePosition1(element) {
  let actualLeft = element.offsetLeft;
  let actualTop = element.offsetTop;

  let current = element.offsetParent;
  let elementScrollLeft = 0;
  let elementScrollTop = 0;

  while(current != null) {
    actualLeft += current.offsetLeft;
    actualTop += current.offsetTop;
    current = current.offsetParent;
  }

  if(document.compatMode === "BackCompat") {
    elementScrollLeft = document.body.scrollLeft;
    elementScrollTop = document.body.scrollTop;
  } else {
    elementScrollLeft = document.documentElement.scrollLeft;
    elementScrollTop = document.documentElement.scrollTop;
  }

  actualLeft = actualLeft - elementScrollLeft;
  actualTop = actualTop - elementScrollTop;


  console.log(`该元素距离当前可视区的左边的距离${actualLeft}`);
  console.log(`该元素距离当前可视区的上边的距离${actualTop}`);
}


function getRelativePosition2(element) {
  let actualLeft = element.getBoundingClientRect().left;
  let actualTop = element.getBoundingClientRect().top;

  console.log(`该元素距离当前可视区的左边的距离为${actualLeft}`);
  console.log(`该元素距离当前可视区的上边的距离为${actualTop}`);
}

function getBoxClientHeight() {
  const element = document.getElementById("test-box");

  console.log(`clientHeight: ${element.clientHeight}`);
  return element.clientHeight;
}

function getBoxScrollHeight() {
  const element = document.getElementById("test-box");

  console.log(`scrollHeight: ${element.scrollHeight}`);
  return element.scrollHeight;
}

function getBoxOffsetHeight() {
  const element = document.getElementById("test-box");

  console.log(`offsetHeight: ${element.offsetHeight}`);
  return element.offsetHeight;
}

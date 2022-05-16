self.onmessage = function (event) {

  const data = event.data;
  console.log(data);

  self.postMessage({
    from: 'this text is from web worker'
  });

  //turn off worker
  self.close();
};

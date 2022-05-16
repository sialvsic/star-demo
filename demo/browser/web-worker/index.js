var worker = new Worker('./worker.js');

worker.onmessage = function (event) {
  const jsonData = event.data;

  console.log(jsonData)
  //Do something with Parsed data


  //turn off worker
  worker.terminate();
};

const jsonText = {
  text: 'this is work'
};

worker.postMessage(jsonText);



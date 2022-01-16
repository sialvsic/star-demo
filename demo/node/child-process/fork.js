process.on('message', (msg) => {
  console.log('message from parent:', msg);
});

let counter = 0;

setInterval(() => {

  if (counter > 5) {
    process.exit(0)
  }
  process.send({ counter: counter++ });

}, 1000);
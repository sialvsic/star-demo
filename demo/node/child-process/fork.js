process.on('message', (msg) => {
  console.log('message from parent:', msg);

  process.send('child msg');
});

let counter = 0;

setInterval(() => {
  if (counter > 5) {
    // process.exitCode = 5;
    process.exit();
  } else {
    process.send({ counter: counter++ });
  }
}, 1000);

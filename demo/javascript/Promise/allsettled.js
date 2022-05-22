//promise-server.js

const list = [
  'http://localhost:3000/test/1',
  'http://localhost:3000/test/2',
  'http://localhost:3000/test/3',
  'http://localhost:3000/test/4',
  'http://localhost:3000/test/5',
  'http://localhost:3000/test/6',
  'http://localhost:3000/test/7',
  'http://localhost:3000/test/8',
  'http://localhost:3000/test/9',
  'http://localhost:3000/test/10',
]

const send = async () => {
  const promises = [
    fetch('http://localhost:3000/test/1'),
    fetch('http://localhost:3000/test/2'),
    fetch('http://localhost:3000/test/3'),
    fetch('http://localhost:3000/test/4'),
    fetch('http://localhost:3000/test/5'),
  ];

  const result = await Promise.allSettled(promises);
  console.log('result', result);

  /*
  0: { status: 'fulfilled', value: Response}
  1: { status: 'fulfilled', value: Response }
  2: { status: 'fulfilled', value: Response }
  3: { status: 'fulfilled', value: Response }
  4: { status: 'fulfilled', value: Response }
  */

}

send()
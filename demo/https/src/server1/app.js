const express = require('express');
const app = express();
const fs = require('fs');
const path = require('path');
const http = require('http');
const https = require('https');
const privateKey = fs.readFileSync(
  path.resolve(__dirname, '../../ssl-1/private.pem'), 'utf8');
const certificate = fs.readFileSync(
  path.resolve(__dirname, '../../ssl-1/file.crt'),
  'utf8');
const credentials = { key: privateKey, cert: certificate };

// private.pem: 私钥
// csr.pem: CSR证书签名
// file.crt: 证书文件
// console.log(privateKey);
// console.log(certificate);

console.log('Server1 is starting now ...');
const httpServer = http.createServer(app);
const httpsServer = https.createServer(credentials, app);
const SERVER_1_PORT = 3000;
const SERVER_1_SSL_PORT = 3001;

httpServer.listen(SERVER_1_PORT, function () {
  console.log('HTTP Server is running on: http://localhost:%s', SERVER_1_PORT);
});

httpsServer.listen(SERVER_1_SSL_PORT, function () {
  console.log('HTTPS Server is running on: https://localhost:%s',
    SERVER_1_SSL_PORT);
});

const myLogger = function (req, res, next) {
  console.log('Server1 log');
  next();
};

app.use(myLogger);

app.use('/api', function (request, response) {
  if (request.protocol === 'https') {
    console.log('Sending https Request');

    const options = {
      url: 'https://localhost',
      path: '/api',
      port: 4001,
      rejectUnauthorized: false,
    };

    https.get(options, (res) => {
      console.log('statusCode:', res.statusCode);
      console.log('headers:', res.headers);
      console.log('body:', res.body);

      res.on('data', (data) => {
        console.log('https receive data: ');
        console.log(data);
        response.status(200).send(data);
      });

    }).on('error', (err) => {
      console.log('error happens: ');
      console.error(err);
      response.status(500).send(err);
    });

  } else {
    console.log('Sending http Request');
    const options = {
      url: 'http://localhost',
      path: '/api',
      port: 4000,
    };

    http.get(options, (res) => {
      console.log('statusCode:', res.statusCode);
      console.log('headers:', res.headers);
      console.log('body:', res.body);

      res.on('data', (data) => {
        console.log('http receive data: ');
        console.log(data);
        response.status(200).send(data);
      });

    }).on('error', (err) => {
      console.log('error happens: ');
      console.error(err);
      response.status(500).send(err);
    });

  }
});

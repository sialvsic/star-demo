const express = require('express');
const app = express();
const fs = require('fs');
const path = require('path');
const http = require('http');
const https = require('https');

const privateKey = fs.readFileSync(
  path.resolve(__dirname, '../../ssl-2/private.pem'), 'utf8');
const certificate = fs.readFileSync(
  path.resolve(__dirname, '../../ssl-2/file.crt'),
  'utf8');
const credentials = { key: privateKey, cert: certificate };

// private.pem: 私钥
// csr.pem: CSR证书签名
// file.crt: 证书文件
// console.log(privateKey);
// console.log(certificate);

console.log('Server2 is starting now ...');
const httpServer = http.createServer(app);
const httpsServer = https.createServer(credentials, app);
const SERVER_2_PORT = 4000;
const SERVER_2_SSL_PORT = 4001;

httpServer.listen(SERVER_2_PORT, function () {
  console.log('HTTP Server is running on: http://localhost:%s', SERVER_2_PORT);
});

httpsServer.listen(SERVER_2_SSL_PORT, function () {
  console.log('HTTPS Server is running on: https://localhost:%s', SERVER_2_SSL_PORT);
});

const myLogger = function (req, res, next) {
  console.log('Server2 log');
  next();
};
app.use(myLogger);

app.use('/api', (req, res) => {
  console.log();
  console.log('request protocol is %s', req.protocol);
  res.send({ name: 'I am the data from server2' });
});

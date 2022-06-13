# What is this?
A demo for understand how https work


## How to Start
```bash
npm install
npm run server:1
npm run server:2
```

and then you could try the request in postman or chrome
```bash
http://localhost:3000/api
https://localhost:3001/api


http://localhost:4000/api
https://localhost:4001/api
```

## How to Learn
1. 使用Wireshark观察HTTP请求
```bash
npm run server:2
请求 http://localhost:4000/api

```
- 看到三次握手过程
- 看到四次握手过程
- 请求 GET /api HTTP1.1
- 响应 HTTP/1.1 200 OK

2. 使用Wireshark观察HTTPS请求
```bash
npm run server:2
请求 https://localhost:4001/api
```
- 看到三次握手过程
- 看到四次握手过程
- 看到HTTPS连接的建立过程
- 请求 Client Hello => Server Hello => Client Key Exchange,xx, Encrypted Handshake Message => New Session Ticket, xx, Encrypted Handshake Message => Application Data => Application Data
- 响应 HTTP/1.1 200 OK


3. 复杂情况
```bash
npm run server:2
npm run server:1
请求 https://localhost:3001/api
```

4.错误情况 HTTPS => HTTP直接请求

## Note
使用postman发送https请求的时候，需要关闭SSL certificate verification 选项


客户端在通信前先确认服务器端的证书，完成身份认证


## 错误
```javascript 1.8
error happens:
{ Error: self signed certificate
    at TLSSocket.onConnectSecure (_tls_wrap.js:1049:34)
    at TLSSocket.emit (events.js:182:13)
    at TLSSocket._finishInit (_tls_wrap.js:631:8) code: 'DEPTH_ZERO_SELF_SIGNED_CERT' }
```
添加`rejectUnauthorized: false`处理


```javascript 1.8
{ Error: write EPROTO 4586493376:error:1408F10B:SSL routines:ssl3_get_record:wrong version number:../deps/openssl/openssl/ssl/record/ssl3_record.c:252:

    at WriteWrap.afterWrite [as oncomplete] (net.js:788:14) errno: 'EPROTO', code: 'EPROTO', syscall: 'write' }
```
详情请见：https://github.com/openssl/openssl/issues/6805#issuecomment-408770073

这个就是HTTPS去请求HTTP带来的问题

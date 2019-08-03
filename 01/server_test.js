const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

// req : request, res : response
const server = http.createServer((req, res) => {  // 서버가 만들어지면 아래 함수를 실행
  console.log("..")
  res.statusCode = 200;  
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World!\n');  // 응답을 끝내겠다.
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
const http = require('http');

http.createServer((request, response) => {
  console.log("...")
  if (request.method === 'POST' && request.url === '/echo') {
    request.pipe(response);
  } else if (request.method !== 'POST' && request.url === '/echo'){
    response.statusCode = 404;
    response.end("request POST please.");
  } else if (request.method === 'POST' && request.url !== '/echo'){
    response.statusCode = 404;
    response.end("Attach '/echo' uri please.");
  } else {
    response.statusCode = 404;
    response.end("request POST and Attach '/echo' uri please.");
  }
}).listen(8080);
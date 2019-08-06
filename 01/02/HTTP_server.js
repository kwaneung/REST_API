const http = require('http');
//(요청, 응답)
const server = http.createServer((req, res) => {
    // 요청이 들어오면 하단이 실행
    console.log(req.url);  // request 경로 반환
    if(req.url === '/'){
        res.writeHead(200, {'Content-Type': 'text/plane'});
        res.end('Hello Kwaneung.\n');
    } else if(req.url === '/users'){
        const users = [  // 객체 생성
            {name: 'kwaneung'},
            {name: 'hyunyoung'},
        ]
        res.writeHead(200, {'Content-Type': 'application.json'});
        res.end(JSON.stringify(users));
    }
}).listen(3000);
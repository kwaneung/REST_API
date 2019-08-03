// readFile_ex.js
// 비동기 예제

const fs = require('fs');

const file = fs.readFile('test.txt', function(err, data){
    if(err) throw err;
    console.log(data.toString());
});
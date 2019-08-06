// readFileSunc_ex.js
// 동기적 방식
const fs = require('fs')

const file = fs.readFileSync('test.txt', {
    encoding: 'utf8'
})

console.log(file)
console.log('test')
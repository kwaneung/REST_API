const util = require('util')

const name = 'World'
const msg = util.format('Hello %s', name)

console.log(msg)
let argv = require('argv')
echo = require('../lib/echo')
console.log(echo(argv.join(' ')));
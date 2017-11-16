document.write('A versão atual do io.js ' + process.version)

var fs = require('fs')

var contents = fs.readFileSync('./package.json', 'utf8')
alert(contents);

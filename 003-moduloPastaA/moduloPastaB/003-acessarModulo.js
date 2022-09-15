const moduloA = require('../../001-moduloA')
console.log(moduloA.ola)

const saudacao = require('saudacao')
console.log(saudacao.ola)

// posso omitir o index
const c = require('./pastaC')
console.log(c.ola2)

// const http = require('http')
// http.createServer((req, res) => {
//     res.write('Bom dia')
//     res.end()
// }).listen(8080)
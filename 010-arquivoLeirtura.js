// fs de File System - um modulo interno do node

const fs = require('fs')

const caminho = __dirname + '/010-arquivo.json'

// sincrono...
const conteudo = fs.readFileSync(caminho, 'utf-8')
console.log(conteudo)

// assincrono...
fs.readFile(caminho, 'utf-8', (err, conteudo) => {
    const config = JSON.parse(conteudo)
    console.log(`${config.db.host}:${config.db.port}`)
})

const config = require('./010-arquivo.json')
console.log(config.db)

// leitura da pasta
fs.readdir(__dirname, (err, arquivos) => {
    console.log('conteudo da pasta')
    console.log(arquivos)
})

// __dirname é esta presente em todos os módulos do node, representa o diretório atual
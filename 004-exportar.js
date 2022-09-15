console.log(module.exports === this)
console.log(module.exports === exports)

// os tres apontam pro mesmo endereço de memória
this.a = 1
exports.b = 2
module.exports.c = 3

//mesmo que modifique o exports, o module é o que sera retornado
exports = null
console.log(module.exports)

exports = {
    nome: 'teste'
}

console.log(module.exports)

module.exports= {
    publico: true
}

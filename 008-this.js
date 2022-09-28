// this fora de uma função não aponta pra global e sim para module.exports

// this dentro de uma função aponta para global

// dentro de uma arrow function, o this não vai apontar mais para o objeto global, e sim para o module.export / exports.

console.log(this === global)
console.log(this === module)

console.log(this === module.exports)
console.log(this === exports)

function logThis() {
    console.log('Dentro de uma função...')
    console.log(this === exports)
    console.log(this === module.exports)
    console.log(this === global)

    this.perigo = '...'
}

logThis()
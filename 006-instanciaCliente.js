const contadorA = require('./006-instanciaUnica')
const contadorB = require('./006-instanciaUnica')

const contadorC = require('./006-instanciaNova')()
const contadorD = require('./006-instanciaNova')()

contadorA.inc()
contadorA.inc()
console.log(contadorB.valor)

contadorC.inc()
contadorC.inc()

console.log(contadorD.valor)
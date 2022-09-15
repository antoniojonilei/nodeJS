// quando se cria uma referencia para uma variavel que vem de lodash, se cria a partir do _(underline)

const _ = require('lodash')
setInterval(() => console.log(_.random(1, 1000)), 2000)
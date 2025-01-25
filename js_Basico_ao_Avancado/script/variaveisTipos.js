// Definição de uma variavel imutavel
let x
// Vai retornar Undefined
console.log("x", x)

// Atribuindo um valor a variavel x, e verificando o tipo dessa variavel
x = 10
console.log("x", x)
console.log("x", typeof x)

/*As diferenças dos tipos reservados
var, let e const. Var pode ser usada para declarar
uma variavel global, enquanto let para declarar uma variavel
de bloco, a diferença de var e const, é que const
não pode ser alterada ou atualizada, enquanto const
sim!*/
let y = 20
console.log("y", y)

const pi = 3.1415
console.log("pi", pi, typeof pi)
var num = "01001000110000000000000"
console.log(num.length)

var num = 5.4556 - 3.2478
console.log(num)
var numTratado = num.toFixed(2)

console.log(numTratado)
console.log(typeof numTratado)
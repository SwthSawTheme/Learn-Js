

function bomdia(name){
    return console.log(`olá ${name}. Bem vindo(a)  à Plataforma`)
}

bomdia("Saw")
bomdia("Clary")
bomdia("Jose")

function sum(n1,n2) {
    return n1 + n2
}

var resultado = sum(101, 102)

console.log(resultado)

// retorno com varios argumentos

function sumBase() {
    let res = 0

    for (const arg of arguments){
        res += arg
    }
    return res
}

var teste = sumBase(4,22,4,5,55,6,7,8,9,99,546)
var teste1 = sumBase()
console.log(teste)
console.log(teste1)
function mult(values, func) {
    for (var i=0; i < values.length; i++) {
        values[i] = func(values[i])
    }
    return values
}

const numeros = [1,2,3,4,5,6,7,8,9,10]
const func = (n) => n*n

console.log(mult(numeros, func))
const array = ["Diablo IV", "Diablo II", "Diablo"]

const complex = [
    {name: "Fire", power: 22, requisitos: 2},
    {name: "Water", power: 45, requisitos: 1},
    {name: "Air", power: 15, requisitos: 10},
    {name: "Sun", power: 50, requisitos: 4},
    {name: "Eletric", power: 35, requisitos: 8}
]

array[44] = "Diablo III"

console.log(array)
// Variavel indice que inicia sempre em 0
console.log(array[2])

console.log(complex)
console.log(complex[2])

// usando "lenght" para determinar a quantidade de elementos
console.log(array.length)
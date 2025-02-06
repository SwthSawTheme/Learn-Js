

var array = [12,2,24,45,55,61,,733,82]

const teste = array.filter((n) => n > 40)
console.log(teste)

var games = [
    {name: "Diablo", data: 1999},
    {name: "Diablo II", data: 2005},
    {name: "Diablo - LOD", data: 2007}
]

const jam = games.filter((n) => n.data >= 2000)
console.log(jam)
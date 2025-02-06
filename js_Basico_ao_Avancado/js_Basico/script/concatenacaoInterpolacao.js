let name, age

name = "Saw"
age = 29

console.log("name", name)
console.log("age", age)

// Concatenação de strings
var concat = "Sa" + "w"
console.log(concat)

var power = "Fire"

// Forma de concatenação antiga
console.log(power + " e Water!")

var powers = {
    "Water": 99,
    "Eletric": 46
}

var damage = 50
// Forma por interpolação
console.log(`The power of ${power} caused damage ${damage + 5}, ${JSON.stringify(powers)}`)
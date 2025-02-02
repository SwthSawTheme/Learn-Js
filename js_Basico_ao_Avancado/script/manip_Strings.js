

var frase = "A rosa morta pelo vento"

// split() metodo para separar as strings por meio de um caracter
// join() metodo de concatenar as strings por meio de um caracter
console.log(frase.split(" ").join(";"))

// Toda a frase em maiuscula
console.log(frase.toLocaleLowerCase())

// Toda a frase em minuscula
console.log(frase.toLocaleUpperCase())

// Metodo para achar palavra em frase, retorna true ou false
console.log(frase.includes("A"))

// Metodo para substituir uma string por outra
console.log(frase.replace("rosa", "cravo"))

// Tratamento de strings ou numeros
var num = 45.2555
console.log(num.toFixed(2).replace(".",","))
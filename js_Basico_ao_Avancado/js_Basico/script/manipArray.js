
let movies = ["Saw", "Saw II", "Saw III", "Saw IV", "Saw V"]

console.log(movies[2])
// Retornar o ultimo elemento do array
console.log(movies[movies.length - 1])

// Retornar fatias do array
console.log(movies.slice(2))
console.log(movies.slice(2,4))

// Adicionar elementos ao array (inicio e final)
// metodo push()
console.log(movies.push("Saw VI"))
// Adicionar elemento ao inicio da array
// Unshift()
console.log(movies.unshift("Saw - Origem"))

// Remover elementos do nosso array
movies.pop() // remove o ultimo elemento (e retorna o elemento)
movies.shift() // remove o primeiro elemento ( e retorna o elemento)

// Remover fatias do array
movies.splice(3)
movies.splice(0,2)
console.log(movies)
movies.push("Saw")
movies.push("Saw II")
movies.push("Saw III")

let index = movies.indexOf("Saw III")
console.log(movies)
console.log(index)
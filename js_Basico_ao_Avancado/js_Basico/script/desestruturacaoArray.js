let array = [1,2,3,4,5,6,7,8]

let [n1,n2,n3] = array // n1 = 1, n2 = 2, n3 = 3

console.log("n1",n1)
console.log("n2",n2)
console.log("n3",n3)

// Forma correta de atribuir o array retornado por uma função

function myFunction(){
    x = 200
    y = 250

    return [x,y]
}

var [x,y] = myFunction()

console.log("x",x)
console.log("y",y)
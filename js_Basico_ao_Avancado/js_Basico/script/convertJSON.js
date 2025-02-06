var data = [
    {"id": 1, "name": "Saw", "Power": "fire"},
    {"id": 2, "name": "Set", "Power": "Water"},
    {"id": 3, "name": "Swt", "Power": "Eletric"}
]

var Cdata = JSON.stringify(data)
console.log(Cdata)

var obj = JSON.parse(Cdata)
console.log(obj)
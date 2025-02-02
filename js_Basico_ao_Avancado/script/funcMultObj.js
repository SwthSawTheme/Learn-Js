
function multObj(obj) {
    obj.value *= obj.value
    return obj
}

const numBase = {value: 10}
console.log(multObj(numBase))
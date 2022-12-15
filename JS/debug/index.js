const fibonacci = num =>{
    if (num === 1) return [1]
    if (num === 2) return [1, 1]
    let lista = [1, 1]
    for (let index = 2; index < num; index++) {
        lista.push([index - 1] + lista[index - 2])
    }
    return lista
}

console.log(fibonacci(3))
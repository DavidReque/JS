// Funcion flecha
const verdadera = (() => true) 

async function promesa() {
    return setTimeout(() => console.log("Soy una promesa"), 5000)
}

////
function* idPares() {
    let id = 0;
    while (true) {
        id +=2

        //  Se detiene hasta 20
        if (id === 20) {
            return id
        }
        yield id 
    }
}

const gen = idPares()

console.log(gen.next().value) // 2
console.log(gen.next().value) // 4

// Ciclo For
function* ciclo() {
    for (let id = 0; true; id +=2) {
        yield id
    }
}

const sic = ciclo()

console.log(sic.next().value) 
console.log(sic.next().value) 
console.log(sic.next().value) 
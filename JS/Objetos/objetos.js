const misDatos = {
    nombre: "David", 
    apellido: "Requeno",
    edad: 18, 
    altura: 1.75, 
    isDeveloper: true
}

const edad = misDatos.edad

const lista = [
    {
        ...misDatos
    }, {
        nombre: "Juan", 
    apellido: "Gonzales",
    edad: 19, 
    altura: 1.71, 
    isDeveloper: false
    }, {
        nombre: "Pedro", 
    apellido: "Fernandes",
    edad: 18, 
    altura: 1.79, 
    isDeveloper: true
    }
];

const orden = lista.sort((a, b) => b.edad - a.edad)

console.log(orden);
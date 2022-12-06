const compras = ["Leche", "Huevos", "Cafe", "Azucar", "Arroz"]

// Añadir 
compras.push("Aceite de girasol")

// Eliminar
compras.splice(5)
console.log(compras);

const movies = [
    { 
    titulo: "God Fellas",
    director: "Martin Scorsese",
    fecha: new Date(1990, 05, 22)
    },
    {
        titulo: "Scarface",
        director: "Brian De Palma",
        fecha: new Date(1983, 10, 15)
    },
    {
        titulo: "Interestelas",
        director: "Christopher Nolan",
        fecha: new Date(2014, 06, 18)
    }
];

const peliculas = movies.filter((pelicula => pelicula.fecha > new Date(2010, 0, 1)))

const directores = movies.map(pelicula => {
    return pelicula.director
})


const titulos = movies.map(titulos => {
    return titulos.titulo
})

const concatenar = directores.concat(titulos)
const concatenar2 = [...directores,...titulos]
console.log(concatenar2);
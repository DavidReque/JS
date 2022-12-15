class Estudiante {
    nombre = "David"
    asignaturas = ["HTML, CSS, JavaScript"]

    obtenDatos() {
        return {
        nombre: this.nombre,
        asignaturas: this.asignaturas
        }
    }
}

const estudiante = new Estudiante()

console.log(estudiante.obtenDatos())
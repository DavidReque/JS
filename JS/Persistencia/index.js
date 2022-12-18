const nombre = 'David'
const apellido = 'Requeno'

const persona = {
    nombre,
    apellido
}

//sessionStorage.setItem("persona", JSON.stringify(persona))
//localStorage.getItem("persona", JSON.stringify(persona))

const fecha = new Date()

//document.cookie = `persona=${JSON.stringify(persona)};
//expires=${new Date(fecha.getTime() + 2 * 60000)}`
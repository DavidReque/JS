const parrafos = document.querySelectorAll(".parrafo");
const seccion = document.querySelectorAll(".seccion")

parrafos.forEach(parrafo => {
    parrafo.addEventListener("dragstart" , event => {
        console.log("Estoy arrastrando el parrafo: " + parrafo.innerText)
        parrafo.classList.add("dragging")
        event.dataTransfer.setData("id", parrafo.id)
        const elemento = document.querySelector(".papelera")
        event.dataTransfer.setDragImage(elemento, 0, 0)
    })

    parrafo.addEventListener("dragend", () => {
        //console.log("He terminado de arrastrar")
        parrafo.classList.remove("dragging")
    })
})

seccion.forEach(secciones => {
    secciones.addEventListener("dragover", event => {
        event.dataTransfer.dropEffect = "move"
        event.preventDefault()
        //console.log("Drag Over")
    })

    secciones.addEventListener("drop", event => {
        console.log("drop")
        const id_parrafo = event.dataTransfer.getData("id")
        //console.log("Parrafo id, " + id_parrafo)

        const parrafo = document.getElementById(id_parrafo)
        secciones.appendChild(parrafo)
    })
})

const papelera = document.querySelector(".papelera")

papelera.addEventListener("dragover", e => {
    e.preventDefault()
    e.dataTransfer.dropEffect = "copy"  
})

papelera.addEventListener("drop", e => {
    const id_parrafo = e.dataTransfer.getData("id")
    document.getElementById(id_parrafo).remove()
})
const boton = document.getElementById("btn")

boton.addEventListener("click", () => {
    alert("Ha hecho click en el boton")
})

    $("#btn").click(() => {
        console.log("Hola, estoy utilizando jQuery")
    })
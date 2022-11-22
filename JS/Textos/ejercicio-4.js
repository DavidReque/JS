//Nombre
let nombre = "David";
let apellido = "Requeno";
let estudiante = nombre + " " + apellido;
console.log(nombre);

let estudianteMayus = estudiante.toUpperCase();
let estudianteMinus = estudiante.toLowerCase();
console.log(estudianteMayus);
console.log(estudianteMinus);

let numLetras = estudiante.length;
console.log(numLetras);
 
let primerLetra = nombre[0];
let ultimaLetra = apellido[apellido.length -1];
console.log(primerLetra);
console.log(ultimaLetra);

let sinEspacios = estudiante.replace(" ", "")
console.log(sinEspacios);

let bool = estudiante.includes(nombre);
console.log(bool);


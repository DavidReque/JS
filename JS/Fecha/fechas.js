const hoy = new Date()

const nacimiento = new Date(2004, 05, 18)

const tarde = hoy > nacimiento;

const dia = nacimiento.getDate()
console.log(dia);
const mes = nacimiento.getMonth()+1
console.log(mes);
const year = nacimiento.getFullYear("en-US")
console.log(year);
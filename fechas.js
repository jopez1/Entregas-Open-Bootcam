//- La fecha de hoy
let fecha = new Date()

//- La fecha de tu nacimiento
let nacimiento = new Date(1982, 08, 02)

//- Un variable que indique si hoy es más tarde (>) que la fecha de tu nacimiento
let masTarde = nacimiento > fecha

//- Una variable que contenga el día de tu nacimiento
let diaNaciemiento = nacimiento.getDate()

//- Una variable que contenga el mes de tu nacimiento (recuerda que Enero es mes 0)
let mesNaciemiento = nacimiento.getMonth() + 1

//- Una variable que contenga el año de tu nacimiento (con 4 dígitos)
let añoNacimiento = nacimiento.getFullYear()

console.log(añoNacimiento)
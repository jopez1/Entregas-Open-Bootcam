let nombre = "Jose Antonio"
let apellido = "Flores"
let estudiante = nombre +" "+ apellido
let estudiante2 = nombre.concat(" ", apellido)
let estudianteMayus = estudiante.toUpperCase()
let estudianteMinus = estudiante.toLowerCase()
let longitud = estudiante.length
let primeraLetraDelNombre = nombre[0]
let  ultimaLetraDelApellido = apellido[-1]
let eliminarEspaciosEstudiante = estudiante.replace(/ /g, "")
let boleano = Boolean(estudiante)


console.log(boleano)

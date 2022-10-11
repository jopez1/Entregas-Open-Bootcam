// Crea un nuevo fichero JS que contenga las siguientes líneas

// Una clase llamada "Estudiante" que tenga:
// Una variable llamada nombre
// Otra variable lista llamada asignaturas con 3 asignaturas: Javascript, HTML, CSS
// Un método "obtenDatos" que devuelva un objeto con las propiedades nombre y asignaturas
class Estudiante{
    constructor (nombre, asigaturas){
        this.nombre = nombre,
        this.asigaturas = asigaturas,
        this.obtenDatos = function (){
            return {
                nombre: this.nombre,
                asignaturas: this.asigaturas
            }
        }
    }
}

// Crea una nueva instancia de "Estudiante"
let estudiante1 = new Estudiante("Leonardo", "Javascript, HTML, CSS")
console.log(estudiante1.asigaturas)
// Haz la llamada al método obtenDatos
obtenDatos()
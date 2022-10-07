// Instala la dependencia Winston
//hecho

// En el archivo index.js crea una función que devuelva un error con un mensaje personalizado
const miFuncion = val => {
    
    if(typeof val === "number"){
    return 3 * val    
    }
    throw new Error ("el valor debe ser numerico")
}
let triple = miFuncion(5)
console.log(triple)

// Registra el error en un archivo a través de un try...catch

try{
    console.log("Es correcto")
    let triple = miFuncion("test")
console.log(triple)
}catch (e){
console.error("incorrecto")
console.error(e)
}
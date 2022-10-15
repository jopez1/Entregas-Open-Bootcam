/* Crea un nuevo proyecto de Node
- Crea un fichero index.html (utiliza el comando "!")LISTOOO
- Crea un fichero index.js LISTOOOOO
- Integra el fichero index.js en el html LISTOOOOOOO
- En el fichero index.js: LISTOOOOOOOOO
- Crea una variable con tu nombre LISTOOOOO
- Crea una variable con tu apellido LISTOOOOOO
- Crea un objeto con tu nombre y tu apellido LISTOOOO
- Almacena el objeto anterior en la SessionStorage LISTOO
- Almacena el objeto anterior en la LocalStorage LISTOOOO
- Crea una cookie que caduque en 2 minutos con los datos del objeto anterior LISTOOO
- Observa en Google Chrome cómo se almacenan los datos en la SessionStorage, LocalStorage y las cookies LISTOOOOOO
- Cierra el navegador, comenta las líneas que almacenan SessionStorage, LocalStorage y CookieStorage y vuelve a abrirlo LISTOOOOOO
- Observa cómo la SessionStorage está vacía LISTOOOOOO
- Observa cómo la LocalStorage sigue manteniendo el objeto que has almacenado antes de cerrar el navegador LISTOOOOO
- Observa cómo la cookie sigue manteniendo el objeto que has almacenado antes, aunque ya está caducado LISTOOO*/

let nombre = "Antonio";
let apellido = "Flores";

let persona = {
    nombre,
    apellido
}

/* localStorage.setItem("persona")
console.log(localStorage.getItem("persona"))
localStorage.setItem("persona",JSON.stringify(persona)) */

/* sessionStorage.setItem("persona")
console.log(sessionStorage.getItem("persona"))
sessionStorage.setItem("persona",JSON.stringify(persona)) */



//Cookies
let ahora = new Date()
document.cookie = `persona=${JSON.stringify(persona)};expires=${new Date(ahora.getTime() + 2 * 60000)}`



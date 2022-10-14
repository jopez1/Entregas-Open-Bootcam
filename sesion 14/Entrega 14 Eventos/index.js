/* Crea un nuevo proyecto de Node
- Instala la dependencia HTTP Server en entorno global (https://www.npmjs.com/package/http-server)LISTOOOOOOO
- Crea un fichero index.html (utiliza el comando "!")LISTOOOOOOO
- Crea un fichero index.jsLISTOOOOOOOOOO
- Integra el fichero index.js en el html LISTOOOOOOO
- Crea un botón en html (<button>Botón</button>) LISTOOOOOOO
- Vincula un evento de tipo "click" al botón anterior, que muestre una alerta en el navegador "click en el botón" LISTOOO
- Crea un script para lanzar un servidor de desarrollo con http-server LISTOOO
- Lanza el servidor de desarrollo a través del script anterior y prueba que el botón funciona correctamente LISTOOO
- Integra jQuery a través del CDN (https://releases.jquery.com/) LISTOOO
- En el fichero index.js crea un evento click en el botón a través de jQuery, que muestre por consola "Hola, estoy utilizando jQuery" LISTOOOO */ 

const boton = document.querySelector("#btn");

boton.addEventListener("click", () => {
     alert("click en el botón")
     console.log("Hola, estoy utilizando jQuery")
});
//- Un objeto con tus datos personales (nombre, apellido, edad, altura, eresDesarrollador)
let antonio = {
    nombre: "Antonio",
    apellido: "Flores",
    edad: 40,
    altura: 1.70,
    eresDesarrollador: true
}


//- Una variable que obtenga tu edad a partir del objeto anterior
let miEdad = antonio.edad;

//- Una lista que contenga el objeto con tus datos personales y un nuevo objeto con los datos personales de tus dos mejores amig@s
//respuesta 1:
//let lista = [antonio, {amigo1:"Jorge", amigo2: "Lore"}];

let amigos = antonio;
amigos.santander = {amigo1:"Jorge", amigo2: "Lore"}

//- Una nueva lista con los objetos de la lista anterior ordenados por edad, de mayor a menor
amigos.sort((a, b) => a.edad - b.edad);


console.log(amigos)
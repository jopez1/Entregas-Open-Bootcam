let listaCompras = ["cafe", "jabon", "azucar"];
listaCompras.push("Aceite de Girasol")
listaCompras.pop("Aceite de Girasol")

let peliculas = [
    {titulo: "Game end", director: "zack Efron", fecha: 2020},
    {titulo: "Intensamente", director: "Disney", fecha: 2015},
    {titulo: "Depredator", director: "Arnol", fecha: 1995}
];
let listaPosteriores = peliculas.filter(obj => {
    if(obj.fecha > 2010){
        return true;
    }else{
        return false;
    }
})

let listaDirectores = peliculas.map(obj => {
   return obj.director
})

let listaTitulos = peliculas.map(obj => {
    return obj.titulo
 })

let concat = listaDirectores.concat(listaTitulos)

let propagacion = [...listaDirectores,...listaTitulos]
console.log(propagacion)


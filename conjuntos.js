//Crea un archivo llamado conjuntos.js que contenga las siguientes líneas
//- Un nuevo Set con los nombres de tu familia
let familia = new Set(["Magdalena", "Leonardo", "Eduardo", "Antonio"])

//- Modifica el Set original añadiendo tu nombre (duplicado) (debería darte lo mismo)
familia.add("Antonio");

//- Modifica el Set original añadiendo el nombre "Javascript" (ya que empieza a formar parte de tu vida ;)
familia.add("Javascript");

console.log(familia)
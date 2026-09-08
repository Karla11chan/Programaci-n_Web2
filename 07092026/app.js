// var miCarro = new Object();
// miCarro.marca = "Ford";
// miCarro.anio="2012";
// miCarro.modelo="Ikon-Fiesta";

// console.log(miCarro);

// var miCarro={
//     marca: "Ford",
//     modelo:"Ikon-Fiesta",
//     color: "Azul",
//     anio:"2012"
// }

// 

var gato ={
    nombre: "Michi",
    duerme: true,
    edad: 8,
    peso: 4.5,
    color: "negro",
    enemigo: ["El bb", "bobo", "mi mamá"]
}
console.log(gato);
console.log(`el nombre del gato es: ${gato.nombre}`);

console.log(gato.enemigo[1]);

console.log(gato.duerme);
console.log(gato[`duerme`]); //dos formas diferentes de llamarlo

console.log(gato.enemigo[0])

console.log(gato.enemigo);

gato.comida="Uvas";
console.log(gato);
//leer
console.log(gato.edad);
//Actualizar atributo

gato.dormir = false;

console.log(gato.dormir);

//elimintar

delete gato.enemigo;

console.log(gato.enemigo);  

console.log(gato.hasOwnProperty("duerme")); //busca una propiedad
console.log(gato.hasOwnProperty("RFC")); //busca una propiedad


let frutas = ["manzana", "pera", "melon","platano", "kiwi", "fresa", "uva"];
// console.log(frutas);

// console.log(frutas.length);
// console.log(frutas[1]);
// console.log(frutas[12]);//No marca error solo indica indefinido (undefined)

// for(let numero = numero; numero < frutas.length ; numero++){
//     console.log("3x" + numero + "="+ numero*3);
// }

// for(let numero = 0; numero < frutas.length ; numero++){
//     console.log(frutas[numero]);
// }
console.log("----------For of -> El contenido del arreglo --------");
for(let fruta of frutas){ //Como un foreach pero sin ser un foreach este es diferente, con este vemos el contenido
    console.log(fruta);
}

console.log("-------------For in -> Da los indices -------------");
for(let fruta in frutas){ 
    console.log(fruta);
}






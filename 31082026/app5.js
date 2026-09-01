//plantillas literales habiitan inscripciones literales y permiten usar caracterres de más de una lina
//Plantias: Marcadores $ entre llaves, son enviadas como argumentos. 

let nombreUsuario = "AslanHaruki";
console.log("hola como estas " + nombreUsuario);
console.log(`hola como estas ${nombreUsuario}`);
console.log(`
    hola como estas 
    ${nombreUsuario}
    `);

console.log(`Nombre: ${nombreUsuario.toUpperCase()}`);
console.log(`Nombre: ${nombreUsuario.toLocaleLowerCase()}`);


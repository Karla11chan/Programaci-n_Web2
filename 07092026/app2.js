//Objetos anidados 
var gato ={
    nombre: "Michi",
    duerme: true,
    edad: 8,
    peso: 4.5,
    color: "negro",
    enemigo: ["El bb", "bobo", "mi mamá", "Ximena", "Iram","Bruno"],
    otros:{
        enfermedades: ["Sida-gato", "sarna"],
        amigos: ["patitas","manchas"],
        comida:{
            fria: "Atun",
            caliente: "Caldo de pollo"
        }
    },
    comer:function(){
        console.log("Está comiendo :)");
    },
    cenando : function (comida){
        return "El gato está cenando " + comida;
    },
    datosGato:function(edadGato){
        return `${this.nombre} tiene la edad de:  ${edadGato}`;

    },
    mostrarEnemigos: function(){
        return this.enemigo.forEach(nombre => console.log(nombre)); //Utilizando una función flecha
    }
}

// console.log(gato.otros.enfermedades[1]);
// gato.comer();
// console.log(gato.cenando("sopa"));

console.log(gato.datosGato(8));
console.log(gato.mostrarEnemigos());
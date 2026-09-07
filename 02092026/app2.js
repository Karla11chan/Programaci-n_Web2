//scope
//let dentro de un bloque se limita a ese bloque, Var es global 
// var estado = true;

// if (estado){
//    var estado = false;
// }
// console.log(estado);

let estado = true;
if (estado){
    let estado = false;
}
console.log (estado);

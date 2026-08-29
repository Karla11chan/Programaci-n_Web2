//Operadores lógicos o booleanos
/**
 * && AND
 * || OR
 * ! NOT
*/

console.log("AND");
var resultado =  5+5 == 8+2 && 5>2 ;
console.log(resultado);

var resultado =  5+5 == 8+2 && 5>20 ;
console.log(resultado);

var resultado =  5+7 == 8+2 && 5>2 ;
console.log(resultado);

var resultado =  2 == "t" && 20+8 < 50+9 ;
console.log(resultado);

console.log("OR");
var resultado =  5+5 < 1+1 || "T" === "t";
console.log(resultado);

var resultado =  5+5 < 1+1 || 99 > 5;
console.log(resultado);

var resultado = 10+10 == 20  || "T" === "t";
console.log(resultado);

var resultado =  9 +9 == 18 || "a" == "a";
console.log(resultado);
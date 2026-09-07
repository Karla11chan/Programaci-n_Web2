/*function random (min, max){
    return Math.floor(Math.random()*(max - min)+ min);
}
//retorna un número aleatorio incluyendo el mínimo y máximo
console.log(random(1,45));

//Juego*/

let numeroMaquina = Math.floor (Math.random()*( 10 - 1))*1;
let numeroUser = parseInt(prompt("Adivina el número entre 1 y 10"));
let vidas = 3;

while (numeroMaquina != numeroUser && vidas > 1){
    vidas --;
    numeroUser =parseInt(prompt("Vuelve a intentarlo wey, tus vidas son "+ vidas));
}

if (numeroMaquina == numeroUser ){
    console.log ("Ganaste");
}else {
    console.log("Perdiste");
    console.log(numeroMaquina);
}
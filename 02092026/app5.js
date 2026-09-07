const carritofrutas = []

//Programa que simule carro de compras, a traves de un prompt pregunta al usuario si quiere comprar una fruta
//while bucle que pregunte y arregle y al final que te mmuestre 
//tarea
var fruta;
const frutas = [];
while (true){
      if(confirm("¿Quieres agregar otra fruta?")){
        fruta = prompt("¿Qué fruta?")
        frutas.push(fruta)
      }else{
        console.log(frutas);
        break;
        
      }
      
}
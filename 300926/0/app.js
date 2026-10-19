function agregarPantalla(value){
    document.getElementById("pantalla").value += value;
}

function limpiarpantalla(){
    document.getElementById("pantalla").value = "";
}

function calcular(){
    try{
        var resultado = eval(document.getElementById("pantalla").value); //eval agarra os elementos que tenemos y saca el resultado
        document.getElementById("pantalla").value = resultado;
    }catch(error){
        document.getElementById("pantalla").value = "Error";
    }
}
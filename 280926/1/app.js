document.getElementById("sumForm").addEventListener("submit",function(event){
    event.preventDefault();
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);

    let resultado = num1 + num2;

    document.getElementById("result").innerText= "La suma es: " + resultado;
    //no es textcontent porque no esta dentro de una etiqueta solo ponemos texto generico
});
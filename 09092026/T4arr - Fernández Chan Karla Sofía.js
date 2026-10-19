//Inicializamos un arreglo para almacenar nombres
let nombres = [];
function agregarNombre(){
    let nombre = prompt("Ingrese un nombre:");
    if(nombre){//si la variable contiene algo es verdadero por eso es verdadero
        nombres.push(nombre);
        alert(`Nombre agregado de forma exitosa ${nombre}`);
    }else{
        alert("El nombre no puede estar vacío");
    }
}

function mostrarNombres(){
    if(nombres.length == 0 ){
        alert("No hay nombres cargados");
    }else{
        let mensaje = "Nombres almacenados: \n";
        nombres.forEach((nombre, index) => {
            mensaje += `${index +1} , - ${ nombre }`; //Se le agrega a la variable mensaje el nombre su posición 
        });
        alert(mensaje);
    }
}
//funcioón para mostrar el menú

function mostrarMenu(){
    let opcion;
    do{
        opcion =parseInt(prompt(' Eliga una opción: \n 1 Agregar nombre \n 2 Mostrar nombres \n 3 Salir'));

        switch(opcion){
            case 1: 
                agregarNombre();
                break;
            case 2: 
                mostrarNombres();
                break;
            case 3:
                alert("Adiós");
                break;
            default:
                alert("Opción no valida, elija otra opción");
        }
    }while (opcion !==3); 
}

mostrarMenu();
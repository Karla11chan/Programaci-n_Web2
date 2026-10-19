let tareas = [];

function mostrarMenu(){
    return parseInt(prompt (`
        Opciones disponibles:
        Favor de elegir una opción :)
        1.- Agregar tarea
        2.- Ver tarea
        3.- Marcar tarea completada
        4.- Salir
        `));
}

function agregarTarea(){
    let nombreTarea = prompt("Ingrese el nombre de la tarea");
    if(nombreTarea){
        //objeto
        let tarea = {
            nombre : nombreTarea,
            completada: false
        };
        tareas.push(tarea);
        alert("La tarea fue agregada de forma exitosa");
    }
}

function verTareas(){
    if(tareas.length == 0){
        alert ("Sin tareas");
    }else{
        let mensaje = "Lista de tareas \n";
        tareas.forEach((tareas, index) =>{
            mensaje +=  `${index +1 }.- ${tareas.nombre}[${tareas.completada? "Completada": "Pendiente"}]\n`; //Un if de una lin     
        })
        alert(mensaje);
    }
}

function  marcarTareaCompletada(){
    let numero = parseInt(prompt("Introduce el número de tarea que deseas marcar como completada"));
    if (numero > 0 && numero <= tareas.length){
        verTareas();
        tareas[numero-1].completada = true; //Se cambia a true para indicar compeltada
        alert(`La tarea ${tareas[numero - 1].nombre} ha sido marcada como completada`);
    }else{
        alert(`Número de tarea no valido`)
    }
}

function iniciarPrograma(){
    let continuar = true;
    while(continuar){
        let opcion = mostrarMenu();
        switch(opcion){
            case 1:
                agregarTarea();
                break;
            case 2:
                verTareas();
                break;
            case 3:
                marcarTareaCompletada();
                break;
            case 4:
                alert("Saliendo del programa");
                continuar=false;
            default:
                alert("Opción no valida, Ingrese otra opción")
        }
    }
}

iniciarPrograma();

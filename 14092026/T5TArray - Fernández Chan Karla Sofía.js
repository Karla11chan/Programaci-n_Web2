let inventario = [];
function mostrarMenu(){
    return parseInt(prompt(`
            Opciones disponibles
            1.- Agregar productos
            2.- Mostrar productos
            3.- Buscar productos 
            4.- Eliminar producto
            5.- Restar cantidad a un producto
            6.- Salir
            Elige una opción
        `));
}

function agregarProducto(){
    let nombre = prompt("Introduce el nombre del producto");
    let cantidad = parseInt(prompt("Ingresa la cantidad del producto"));
    let precio = parseFloat(prompt("Ingresa el precio del producto"));

    if(cantidad > 0 && precio > 0 ){
        //objeto
        let producto = {
            nombre: nombre,
            cantidad: cantidad,
            precio: precio
        };
        inventario.push(producto);
        alert("Se ha agregado el producto al inventario exitosamente");
    }else{
        alert("La cantidad y precio deben ser números positivos");
    }
}

function mostrarProductos(){
    if(inventario.length == 0 ){
        alert("El inventario está vacío");
    }else{
        let mensaje = "Productos en inventario: \n";
        for(let i = 0; i < inventario.length; i++){
            mensaje += `Producto encontrado: 
            Nombre: ${inventario[i].nombre}
            Cantidad: ${inventario[i].cantidad}
            Precio: ${inventario[i].precio}
            `;
        }
        alert(mensaje);
    }
}

function buscarProducto(){
    let buscarNombre = prompt("Introduce el nombre del producto que quieres buscar");
    let encontrado = false;
    for(let i = 0; i < inventario.length; i++){
        if(inventario[i].nombre.toLowerCase() === buscarNombre.toLowerCase()){
            alert(`
                Nombre del producto:
                Nombre: ${inventario[i].nombre}
                Cantidad del producto:
                Cantidad: ${inventario[i].cantidad}
                Precio del producto:
                Precio: ${inventario[i].precio}
                `);
             encontrado = true;
            break;
        }
       
    }
    if (!encontrado){
        alert("Producto no encontrado");
    }
}


function eliminarproducto(){
    let eliminar = prompt("Escribe el nombre del producto a eliminar");
    let encontrado = false;
    for(let i = 0; i < inventario.length; i++){
        if(inventario[i].nombre.toLowerCase() === eliminar.toLowerCase()){
           inventario.splice(i,1); //Funciona poniendo primero de donde se va a comenzar a modificar, el número de items a eliminar, los elementos nuevos
            alert("Producto eliminado correctamente");
            encontrado = true;
            break;
        }
        
    }
    if (!encontrado){
        alert("Producto no existente, no se puede eliminar");
    }
}

function eliminarcantidades(){
    let producto = prompt("Escribe el nombre del producto ");
    let cantidad = parseInt(prompt("Escribe la cantidad del producto a eliminar "));
     let encontrado = false;
    for(let i = 0; i < inventario.length; i++){
        if(inventario[i].nombre.toLowerCase() === producto.toLowerCase()){
           if (cantidad>inventario[i].cantidad){
               alert("No se puede eliminar la cantidad pues no hay suficiente producto");
           }else {
                inventario[i].cantidad -= cantidad;
                alert(`La nueva cantidad de ${inventario[i].nombre} es: ${inventario[i].cantidad}`);
           }
            encontrado = true;
            break;
        }
      
    }
    if (!encontrado){
        alert("Producto no existente, no se puede eliminar");
    }
}

function iniciarPrograma(){
    let continuar = true;
    while(continuar){
        let opcion = mostrarMenu();
        switch(opcion){
            case 1:
                agregarProducto();
                break;
            case 2:
                mostrarProductos();
                break;
            case 3:
                buscarProducto();
                break;
            case 4:
                eliminarproducto();
                break;
            case 5:
                eliminarcantidades();
                break;
            case 6:
                alert("Saliendo del programa");
                continuar=false;
            default:
                alert("Opción no valida, Ingrese otra opción")
        }
    }
}
iniciarPrograma();

//Modificar programa de tienda y agregar la opción de eliminar producto completamente y eliminar un elemento del stack
//Se entrega únicamente el js
//Buscamos los eleentos por medio del ID
const titulo = document.getElementById("titulo");
const nombre = document.getElementById("nombre");
const mensaje = document.getElementById("mensaje");
const lista = document.getElementById("lista");

//Cambiar el contenido del elemento
document.getElementById("btnTitulo").addEventListener("click",function(){
    titulo.textContent="El título lo modificamos con JS Saludos";
});
//Evento= cosa que haces a traves de una interfaz gráfica, que un elemento cambie de color, cuando desc0argo, doy click, lo que pase interno al navegador

document.getElementById("btnColor").addEventListener("click",function(){
    //Modificaciones de propiedades de estilo
    mensaje.style.color="blue";
    mensaje.style.fontSize="45px";
    mensaje.style.fontWeight="bold";
});

//leer datos del input
document.getElementById("btnMostrar").addEventListener("click",function(){
    const textNombre = nombre.value;
    //Modificamos el parrafo
    mensaje.textContent="Hola " + textNombre;
});

//Crear nuevo elemento 

document.getElementById("btnAgregar").addEventListener("click",function(){
    const nuevoElemento = document.createElement("li");
    //agregar contenido al nuevo elemento
    nuevoElemento.textContent="Nuevo elemento de JS";
    //apendCHiled agrega el nuevo elemento 
    //dentro de otro elemento
    lista.appendChild(nuevoElemento);
});

//Eliminar elementos DOM

document.getElementById("btnEliminar").addEventListener("click",function(){
    const ultimo = lista.lastElementChild;
    //Verificamos que exista un elemento
    if(ultimo){
        //remover el ultimo elemento
        ultimo.remove();
    }else{
        alert("Sin registros");
    }
});
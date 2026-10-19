const form = document.getElementById("userForm");
const salida = document.getElementById("salidaJSON");
const descargar = document.getElementById("DescargaBoton");

//inicializar el arreglo para los usuarios desde el localStorage

let usuarios= JSON.parse(localStorage.getItem('usuarios'))||[];

//Mostrar los usuarios guardados en pantalla si tenemos
mostrarUsuarios();

//evento cuando se envia del formulario 
form.addEventListener('submit',function(e){
    e.preventDefault();
    const nombre = document.getElementById("nombre").value;
    const correo = document.getElementById("correo").value;

    //crear el objeto
    const nuevoUsuario = {
        nombre: nombre,
        correo: correo
    };

    //Guardar objeto
    usuarios.push(nuevoUsuario);

    //Guardar el array actualizando 
    localStorage.setItem('usuarios',JSON.stringify(usuarios));

    mostrarUsuarios();
    form.reset();
});

function mostrarUsuarios(){
    salida.textContent = JSON.stringify(usuarios, null,2);//nos ayuda a setear los datos
};

descargar.addEventListener('click',function(){
    //convertir de array de objeto a texto
    const nosequeJSON = JSON.stringify(usuarios,null,2);
    //Crear un objeto llamado blob con el contenido, contenedor de datos binario
    const blob = new Blob([nosequeJSON], {type: "aplication/json"});

    //crear una URL temporal que apunte a  el BLOB
    const url = URL.createObjectURL(blob);

    //crear un enlace de tipo ancla invisible para forzar la descarga
    const enlace = document.createElement('a');
    enlace.href = url;
    enlace.download='usuarios.json'; //nombre del archivo
    enlace.click(); //ejecuta la descarga de forma automática 

    //liberar la URL temporal
    URL.revokeObjectURL(url);

});
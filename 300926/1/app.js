//array donde se guardaran los usuarios
const usuarios =[];

//Obtener datos del formulario, (area y saluda en variables)

const form =document.getElementById("userForm");
const salida = document.getElementById("salidaJSON");

form.addEventListener("submit", function(e){
    e.preventDefault(); //Evita que se cargue la página
    //obtenemos los valores del formulario
    const nombre = document.getElementById("nombre").value;
    const correo = document.getElementById("correo").value;

    //crear Objeto
    const nuevoUsuario = {
        nombre: nombre,
        correo: correo
    };

    //Guardar objeto
    usuarios.push(nuevoUsuario);

    //Mostrar el JSON en pantalla
    salida.textContent = JSON.stringify(usuarios, null,2);//nos ayuda a setear los datos 


    form.reset();
});


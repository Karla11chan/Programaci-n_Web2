let usuarios=[];
const form = document.getElementById('formUsuario');
const tabla = document.getElementById('tablaUsuarios');
const inputArchivo = document.getElementById('importarJSON');
const btnDescargar = document.getElementById('descargar');

//generar el ID de usuario
function generarId() {
    return usuarios.length > 0 ? usuarios[usuarios.length - 1].id + 1 : 1;
}

//función agregar usuario
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const nombre = document.getElementById('nombre').value;
    const correo = document.getElementById('correo').value;
    usuarios.push({
        id: generarId(),
        nombre: nombre,
        correo: correo
    });

    form.reset();
    mostrarUsuarios(); 

});

function mostrarUsuarios() {
    tabla.innerHTML = '';
    usuarios.forEach((user,index)=>{
        const row = document.createElement('tr');
        row.innerHTML=`
        <td>${user.id}</td>
        <td contenteditable onblur="editarCampo(${index}, 'nombre', this.textContent)">${user.nombre}</td>
        <td contenteditable onblur="editarCampo(${index}, 'correo', this.textContent)">${user.correo}</td>
        <td><button onclick="eliminarUsuario(${index})">Eliminar</button></td>
        `;
        tabla.appendChild(row);
    });
}

//Editar campo editable
function editarCampo(index, campo, valor) {
    usuarios[index][campo] = valor.trim();//quita espacios en blanco al inicio y al final
}

function eliminarUsuario(index) {
    if(confirm('¿Estás seguro de eliminar este usuario?')) {
        usuarios.splice(index, 1);
        mostrarUsuarios(); //mantiene el ID del objeto no lo reduce en 1
    }
}

//Importar JSON
inputArchivo.addEventListener('change', (e) => {
    const archivo = e.target.files[0];  
    const lector = new FileReader();
    lector.onload = function(event){
        try {
            const datos = JSON.parse(e.target.result);
            if (Array.isArray(datos)) {
                usuarios = datos;
                mostrarUsuarios();
            }else{
                alert("El archivo no contiene un arreglo de tipo JSON");   
            }

        }catch (error) {
            alert('Error al importar el archivo JSON: ' + error.message);
        }
};
lector.readAsText(archivo);
});

btnDescargar.addEventListener('click',function() {
    const blob = new Blob([JSON.stringify(usuarios,null,2)], {type: 'application/json'});
    const url = URL.createObjectURL(blob);
    //crear un elemento de html el ancla
    const a = document.createElement('a');
    a.href = url;
    a.download = 'usuarios_actualizados.json';
    a.click();

    //remover 
    URL.revokeObjectURL(url);
});

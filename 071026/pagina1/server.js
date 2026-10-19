//importar express
const express = require('express');

//Crear una instancia de express
const app = express();
//definición de puerto
const port = 3009;

//middleware para servir archivos estáticos
//middleware realiza una o varias acciones

app.use(express.static('public')); //datos que no se van a mover, como imagenes, css, js, etc

//ruta principal que nos ayuda en la página web de inicio
//la ruta principal es / -> siempre que pongamos una diagonal es la ruta principal
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
} );

//nueva ruta que sirve a la página de datos de nuestro sitio
//revisamos las rutas que pusimos en los html y solo quitamos el html
app.get('/datos', (req, res) => {
    res.sendFile(__dirname + '/public/datos.html');
} );

 app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
}  );



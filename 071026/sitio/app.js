//importar modulos
const express = require('express'); 
const path = require('path'); //path es una librería interna de node 

//crear una instancia
const app = express();
const port = 3006; //puerto

//ruta para servir la página de HTML
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});

const express = require('express');
const path = require('path');

const pagesRoues = require('./rutas/pages'); //se manda a llamar el archivo pages.js que contiene las rutas

//instanciamos express por medio de un objeto
const app = express();
//se configura el puerto
const port = 3045;
//public son estáticos, es decir, que no cambian, como imágenes, css, js

app.use(express.static(path.join(__dirname, 'public'))); //se manda a llamar la carpeta public que contiene los archivos estáticos
app.use('/', pagesRoues); //se manda a llamar el archivo pages.js que contiene las rutas}
app.get('/', (req, res) => {
    res.redirect('/Inicio'); //se manda a llamar el archivo index.html que se encuentra en la carpeta public
});

app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
}  );

//subir el código  en un zip con la nomenclatura
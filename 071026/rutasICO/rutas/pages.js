const express = require('express'); //se manda a llamar la libreria express
const path = require('path');
const router = express.Router(); //se manda a llamar la funcion router de express

router.get('/Inicio', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
}); //agarra la ruta que en este caso es /inicio

router.get('/lista', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/vista.html'));
}); //agarra la ruta que en este caso es /lista

module.exports = router; //exporta el modulo para que pueda ser usado en otros archivos

//esta actividad se entrega como tarea 

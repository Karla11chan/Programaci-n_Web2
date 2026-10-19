//importar el modulo de HTTP que viene incluido en Node.JS
const http = require('http');

//definir unpuerto para el servidor
const PORT = 6001;

//crear el servidor
const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hola mundo desde Node.js');
});

//escuchar el puerto en especifico
server.listen(PORT, () => {
    console.log(`Servidor ejecutando en : http://localhost:${PORT}`);
});

const express = require('express');

const app = express();

app.get('/', (req, res) => {
    // res.send('Hola mundo desde Express.js');
    res.sendFile(__dirname + '/index.html');
});

const PORT = 3050;
app.listen(PORT, () => {
    console.log(` http://127.0.0.1:${PORT}`);
});

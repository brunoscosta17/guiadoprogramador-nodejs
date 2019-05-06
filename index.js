const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/html/index.html");
});

app.get('/about', (req, res) => {
    res.sendFile(__dirname + "/html/about.html");
});

app.get('/blog', (req, res) => {
    res.send('Welcome to my blog!')
});

app.get('/ola/:nome/:cargo', (req, res) => {
    res.send('<h1>olá, ' + req.params.nome + "</h1>");
});



app.listen(8081, () => {
    console.log('Server running on port 8081')
});
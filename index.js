const express = require('express');
const app = express();
const handlebars = require('express-handlebars');
const Sequelize = require('sequelize');
const bodyParser = require('body-parser');

//Config

//Template engine
app.engine('handlebars', handlebars({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

// Body Parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Conexao com o banco de dados MySql
const sequelize = new Sequelize('sistemadecadastro', 'root', '471577', {
    host: 'localhost',
    dialect: 'mysql'
});

// Rotas
app.get('/cad', (req, res) => {
    res.render('formulario');
});

app.post('/add', (req, res) => {
    res.send('Texto: ' + req.body.title + " Conteudo: " + req.body.content);
});

app.listen(8081, () => {
    console.log('Server running on port 8081')
});
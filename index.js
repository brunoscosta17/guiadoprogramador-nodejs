const express = require('express');
const app = express();
const handlebars = require('express-handlebars');
const Sequelize = require('sequelize');
const bodyParser = require('body-parser');
const Post = require('./models/Post');

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

app.get('/', (req, res) => {
    Post.findAll({order: [['id', 'DESC']]}).then( (posts) => {
        res.render('home', { posts: posts })
    })
});

app.get('/cad', (req, res) => {
    res.render('form');
});

app.post('/add', (req, res) => {
    Post.create({
        title: req.body.title,
        content: req.body.content
    }).then( () => {
        res.redirect('/');
    }).catch( (error) => {
        res.send('Erro ao criar o post!', error);
    });
});

app.get('/delete/:id', (req, res) => {
    Post.destroy({where: { 'id': req.params.id }})
        .then( () => {
            res.send('Postagem deletada com sucesso!')
        }).catch( (error) => {
            res.send('Esta postagem não existe!', error)
        })
})



app.listen(8081, () => {
    console.log('Server running on port 8081')
});
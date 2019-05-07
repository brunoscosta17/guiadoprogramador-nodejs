const Sequelize = require('sequelize');
const sequelize = new Sequelize('sistemadecadastro', 'root', '471577', {
    host: 'localhost',
    dialect: 'mysql'
});

const Postagem = sequelize.define('postagens', {
    titulo: {
        type: Sequelize.STRING
    },
    conteudo: {
        type: Sequelize.TEXT
    }
});

const Usuario = sequelize.define('usuarios', {
    nome: {
        type: Sequelize.STRING,
    },
    sobrenome: {
        type: Sequelize.STRING,
    },
    idade: {
        type: Sequelize.INTEGER,
    },
    email: {
        type: Sequelize.STRING,
    }
});

// Postagem.sync({ force: true });
// Usuario.sync({ force: true });

// Usuario.create({
//     nome: "Bruno",
//     sobrenome: "Costa",
//     idade: 31,
//     email: "brunoscosta17@gmail.com"
// });
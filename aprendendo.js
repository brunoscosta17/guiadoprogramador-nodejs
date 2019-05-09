const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/aprendendo', {
    useMongoClient: true
}).then(() => {
    console.log('Mongodb conectado!');
}).catch((error) => {
    console.log('Erro ao se conectar ao MongoDB!', error);
})
const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Wellcome to my app!')
});

app.listen(3000, () => {
    console.log('Server running on port 8081')
});
var http = require('http');
//import http from 'http'; ES6

http.createServer((req, res) => {
    res.end('Hello World muleke!');
}).listen(3000);

console.log('Server running on port 3000.');
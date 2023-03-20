const http = require('http');

const server = http.createServer(); // create a server

server.listen(3000) // server is event emitter

console.log('Server listening on port 3000')// server in running 
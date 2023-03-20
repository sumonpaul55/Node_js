const http = require('http');

const server = http.createServer((req, res)=>{
    //it takes 2 paramiter
  if(req.url === "/"){
    res.write("hello programer!");
    res.write("how are you doing");
    res.end();
  }else if(req.url === "/about"){
    res.write("About us");
    res.end();
  }
  else{
    res.write("page not found");
    res.end();
  }
    

}); // create a server

server.listen(3000) // server is event emitter


//even loop stay always running
console.log('Server listening on port 3000')// server in running 
// const fs = require("fs");

// const ourReadStream = fs.createReadStream(`${__dirname}/bigdata.txt` , 'utf-8');

// ourReadStream.on("data", (data) => {
//   console.log(data);
// });

const http = require('http');

const server = http.createServer((req, res)=>{
    //it takes 2 paramiter
  if(req.url === "/"){
    res.write(`<html><head><title>form</title></head></html>`);
    res.write(`<body>
    <form method="post" action"/process">
    <input name="message"/>
    </form>
</body>`);
    res.end();
  }else if (req.url === "/process"){
    res.write("Form sent successfully");
    res.end();
  }  else if(req.url === "/about"){
    res.write("About us");
    res.end();
  }else if (req.url === "/sumon"){
    res.write("Hi, I am sumon Paul pages");
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
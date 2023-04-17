const fs = require('fs')
const http = require('http')



const ourreadStream = fs.createReadStream(`${__dirname}/bigdata.txt`)
// const writeStream = fs.createWriteStream(`${__dirname}/forwrite.txt`)

// ourreadStream.on("data", (chunk) => { 
//     writeStream.write(chunk); //data write in forwrite file from bigdata.txt
//     // console.log(chunk.toString()); //data read
//   });

// ************************ we can use it instead of avobe exmple ************************

// ourreadStream.pipe(writeStream)
// ******************* another example ****************


const server = http.createServer((req, res)=>{
    if(req.url === "/"){
        res.write(`<html><head><title>form</title></head>`);
        res.write(`<body>
        <form method="post" action="/process">
        <input type="text" name="message"/>
        </form>
    </body>
    </html>`);
        res.end();
      }else if (req.url === "/process"){
        // console.log(req.data)
        const onereadStream = fs.createReadStream(`${__dirname}/bigdata.txt`)
        onereadStream.pipe(res) //res is used as createWriteStream
        req.on("end", ()=>{
          console.log("streaming finished");
         
          console.log(parsedata)
          
          res.end();
        })
       
      }

});

server.listen(3000) // server is event emitter
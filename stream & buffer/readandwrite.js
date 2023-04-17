const fs = require('fs')


const ourreadStream = fs.createReadStream(`${__dirname}/bigdata.txt`)
const writeStream = fs.createWriteStream(`${__dirname}/forwrite.txt`)

ourreadStream.on("data", (chunk) => { 
    writeStream.write(chunk); //data write in forwrite file from bigdata.txt
    // console.log(chunk.toString()); //data read
  });
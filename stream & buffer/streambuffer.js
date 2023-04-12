const fs = require('fs');

const ourReadstream = fs.createReadStream(`${__dirname}/bigdata.txt`, 'utf8');

ourReadstream.on('data', (data)=>{
    console.log(data);
})

console.log(ourReadstream);